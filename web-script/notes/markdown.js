/* GateNotes.markdown - Obsidian-flavoured Markdown -> DOM.
   Same rules as the simulator's renderer (code beats math, Obsidian's $ rules, %% comments, ==highlight==,
   callouts, tables, code blocks) plus what a notes reader needs: clickable [[wikilinks]], ![[note]] /
   ![[note#Heading]] / ![[note#^block]] embeds, footnotes, #tags, mermaid, heading anchors. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared;
    const esc = GS.escapeHtml;
    const MAX_EMBED_DEPTH = 4;

    const IMG_RE = /\.(png|jpe?g|gif|svg|webp|avif|bmp|ico)$/i;
    const AUDIO_RE = /\.(mp3|wav|ogg|m4a|flac)$/i;
    const VIDEO_RE = /\.(mp4|webm|mov|ogv)$/i;
    const PDF_RE = /\.pdf$/i;
    const ID_RE_G = /(^|[ \t])\^([A-Za-z0-9_-]+)[ \t]*$/gm;

    // Obsidian's inline-math rule (identical to the simulator): no space just inside the dollars, closing $ not before a digit
    const inlineMathRe = () => /(?<![\\$])\$(?![\s$])((?:[^$\\\n]|\\[\s\S]|\n(?!\s*\n))*?)(?<![\s\\])\$(?!\d)/g;
    const nid = s => String(s).trim().toLowerCase().replace(/[\s._-]+/g, '');

    /* ---------------------------------------------------------------- frontmatter */
    function unquote(v) { v = String(v).trim(); const m = v.match(/^(["'])([\s\S]*)\1$/); return m ? m[2] : v; }

    function parseYamlish(src) {
        const props = [], lines = src.split('\n');
        let i = 0;
        while (i < lines.length) {
            const m = lines[i].match(/^([^\s#:][^:]*?):(?:[ \t]+(.*)|[ \t]*)$/);
            i++;
            if (!m) continue;
            const key = m[1].trim();
            let val = (m[2] || '').trim();
            if (val === '|' || val === '>' || val === '|-' || val === '>-') {
                const buf = [];
                while (i < lines.length && (/^[ \t]+/.test(lines[i]) || lines[i] === '')) { buf.push(lines[i].replace(/^[ \t]+/, '')); i++; }
                props.push([key, buf.join(val[0] === '>' ? ' ' : '\n').trim()]);
            } else if (val === '') {
                const arr = [];
                while (i < lines.length && /^[ \t]*-(\s|$)/.test(lines[i])) { arr.push(unquote(lines[i].replace(/^[ \t]*-[ \t]*/, ''))); i++; }
                props.push([key, arr.length ? arr : '']);
            } else if (/^\[.*\]$/.test(val)) {
                props.push([key, val.slice(1, -1).split(',').map(unquote).filter(s => s !== '')]);
            } else props.push([key, unquote(val)]);
        }
        return props;
    }

    function parseFrontmatter(text) {
        text = String(text || '').replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
        const m = text.match(/^---[ \t]*\n(?:([\s\S]*?)\n)?(?:---|\.\.\.)[ \t]*(?:\n|$)/);
        if (!m) return { props: [], body: text };
        return { props: parseYamlish(m[1] || ''), body: text.slice(m[0].length) };
    }

    function toList(v) {
        if (Array.isArray(v)) return v.map(s => String(s).replace(/^#/, '').trim()).filter(Boolean);
        return String(v || '').split(/[,\s]+/).map(s => s.replace(/^#/, '').trim()).filter(Boolean);
    }

    /* ---------------------------------------------------------------- headings / sections / blocks */
    function normHeading(s) {
        return String(s)
            .replace(/\[\[([^\]|]*)(?:\|([^\]]*))?\]\]/g, (m, a, b) => b || a)
            .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
            .replace(/\s+\^[\w-]+\s*$/, '')
            .replace(/[*_`~=$\\]/g, '')
            .replace(/\s+/g, ' ').trim().toLowerCase();
    }
    function slug(t) { return String(t).trim().toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, '').replace(/\s+/g, '-') || 'section'; }

    function parseHeadings(body) {
        const lines = body.split('\n'), out = [];
        let fence = null;
        lines.forEach((ln, i) => {
            const f = ln.match(/^[ \t]*(`{3,}|~{3,})/);
            if (f) { if (!fence) fence = f[1][0]; else if (f[1][0] === fence) fence = null; return; }
            if (fence) return;
            const h = ln.match(/^(#{1,6})[ \t]+(.+?)[ \t]*#*[ \t]*$/);
            if (h) out.push({ level: h[1].length, text: h[2], line: i });
        });
        return out;
    }

    /** "Heading" or "Heading#Sub" -> the markdown of that section (heading line included), or null */
    function extractSection(body, frag) {
        const parts = String(frag).split('#').map(normHeading).filter(Boolean);
        if (!parts.length) return null;
        const lines = body.split('\n'), hs = parseHeadings(body);
        let from = 0, to = lines.length, hi = 0, start = -1, end = lines.length;
        for (const part of parts) {
            let found = -1;
            for (let k = hi; k < hs.length; k++) {
                if (hs[k].line >= to) break;
                if (hs[k].line >= from && normHeading(hs[k].text) === part) { found = k; break; }
            }
            if (found < 0) return null;
            const h = hs[found];
            end = lines.length;
            for (let k = found + 1; k < hs.length; k++) if (hs[k].level <= h.level) { end = hs[k].line; break; }
            start = h.line; from = h.line + 1; to = end; hi = found + 1;
        }
        return lines.slice(start, end).join('\n');
    }

    function dedent(raw) {
        const lines = raw.replace(/\s+$/, '').split('\n');
        const ind = lines[0].match(/^\s*/)[0].length;
        return lines.map(l => l.slice(Math.min(ind, l.match(/^\s*/)[0].length))).join('\n');
    }

    /** Markdown of the block that carries ^id, following Obsidian's block rules (paragraph, list item,
        quote/callout, table, heading...). An id alone on its own line refers to the block above it. */
    function extractBlock(body, id) {
        if (!g.marked) return null;
        const want = nid(id);
        const tailRe = /(?:^|[ \t])\^([A-Za-z0-9_-]+)[ \t]*$/;
        const tail = raw => { const m = String(raw).replace(/\s+$/, '').match(tailRe); return m ? nid(m[1]) : null; };
        const head = raw => { const m = String(raw).split('\n')[0].match(tailRe); return m ? nid(m[1]) : null; };
        const tokens = g.marked.lexer(body, { gfm: true, breaks: true });

        function inList(list) {
            for (const item of list.items || []) {
                for (const t of item.tokens || []) if (t.type === 'list') { const r = inList(t); if (r) return r; }
                if (tail(item.raw) === want || head(item.raw) === want) return dedent(item.raw);
            }
            return null;
        }
        let prev = null;
        for (const t of tokens) {
            if (t.type === 'space') continue;
            if (t.type === 'paragraph' && /^\^[A-Za-z0-9_-]+$/.test(t.raw.trim())) {
                if (nid(t.raw.trim().slice(1)) === want && prev) return prev.raw;
                continue;
            }
            if (t.type === 'list') { const r = inList(t); if (r) return r; }
            else if (tail(t.raw) === want) return t.raw;
            prev = t;
        }
        return null;
    }

    function headingText(h) {
        const c = h.cloneNode(true);
        c.querySelectorAll('.gn-fold').forEach(x => x.remove());
        c.querySelectorAll('.gn-math').forEach(m => m.replaceWith(document.createTextNode(m.dataset.tex || '')));
        return c.textContent.trim();
    }

    /* ---------------------------------------------------------------- markdown -> html (with placeholders) */
    function embedHtml(inner) {
        const parts = inner.split(/\\?\|/).map(s => s.trim());
        const target = parts[0], opts = parts.slice(1);
        const file = target.split('#')[0];
        if (IMG_RE.test(file)) {
            const size = opts.find(p => /^\d+(x\d+)?$/i.test(p));
            const alt = opts.filter(p => p !== size).join(' ');
            let attrs = '';
            if (size) { const [w, h] = size.toLowerCase().split('x'); attrs = ` width="${w}"` + (h ? ` height="${h}"` : ''); }
            return `<img data-gn-src="${esc(file)}" alt="${esc(alt)}"${attrs}>`;
        }
        if (AUDIO_RE.test(file)) return `<audio controls data-gn-src="${esc(file)}"></audio>`;
        if (VIDEO_RE.test(file)) return `<video controls data-gn-src="${esc(file)}"></video>`;
        if (PDF_RE.test(file)) return `<a class="gn-file-link" data-gn-file="${esc(file)}">${esc(file.split('/').pop())}</a>`;
        return `<div class="gn-embed" data-embed="${esc(target)}"></div>`;
    }
    function linkHtml(inner) {
        const parts = inner.split(/\\?\|/);
        const target = parts[0].trim();
        if (!target) return '';
        const alias = parts.slice(1).join('|').trim();
        const shown = alias || (target.startsWith('#') ? target.slice(1).replace(/^\^/, '^') : target.replace(/#\^?/g, ' > '));
        return `<a class="internal-link" data-href="${esc(target)}" href="#">${esc(shown)}</a>`;
    }

    function sanitize(html) {
        if (g.DOMPurify) return g.DOMPurify.sanitize(html, { ADD_ATTR: ['target'], FORBID_TAGS: ['style', 'iframe', 'object', 'embed', 'form'] });
        const tpl = document.createElement('template');
        tpl.innerHTML = html;
        tpl.content.querySelectorAll('script,style,iframe,object,embed,form').forEach(n => n.remove());
        tpl.content.querySelectorAll('*').forEach(n => [...n.attributes].forEach(a => {
            if (/^on/i.test(a.name) || /^\s*javascript:/i.test(a.value)) n.removeAttribute(a.name);
        }));
        return tpl.innerHTML;
    }

    function toHtml(src) {
        let text = String(src || '').replace(/\r\n?/g, '\n');
        const code = [], math = [];
        const stashCode = m => { code.push(m); return `\uE002${code.length - 1}\uE003`; };
        const stashMath = (tex, display) => { math.push({ tex, display }); return `\uE000${math.length - 1}\uE001`; };
        const restoreCode = s => s.replace(/\uE002(\d+)\uE003/g, (m, i) => code[i]);

        // code first (it wins over math), then math
        text = text.replace(/^([ \t]*)(`{3,}|~{3,})[^\n]*\n[\s\S]*?\n[ \t]*\2[`~]*[ \t]*$/gm, stashCode);
        text = text.replace(/^([ \t]*)(`{3,}|~{3,})[^\n]*\n[\s\S]*$/m, stashCode);
        text = text.replace(/(`+)(?!`)((?:[^\n]|\n(?!\s*\n))*?[^`])\1(?!`)/g, stashCode);
        text = text.replace(/\$\$([\s\S]+?)\$\$/g, (m, tex) => stashMath(tex, true));
        text = text.replace(inlineMathRe(), (m, tex) => stashMath(tex, false));

        text = text.replace(/%%[\s\S]*?%%/g, '');
        // ==highlight== runs BEFORE links/embeds are turned into HTML, so links, math and bold can sit inside it
        text = text.replace(/(?<!=)==(?![\s=])((?:[^=\n]|=(?!=)|\n(?!\s*\n))+?)(?<![\s=])==(?!=)/g, '<mark>$1</mark>');
        // Obsidian accepts spaces in plain markdown paths: [x](My Note.md) and ![](Pasted image 1.png)
        text = text.replace(/(!?\[[^\]\n]*\])\(([^)<>\n]*\s[^)<>\n]*?\.(?:md|png|jpe?g|gif|svg|webp|avif|bmp|pdf))(\s+"[^"]*")?\)/gi, (m, a, p, t) => `${a}(<${p}>${t || ''})`);
        // embeds alone on a line become blocks; inline ones stay inline
        text = text.replace(/^[ \t]*!\[\[([^\]\n]+)\]\][ \t]*$/gm, (m, inner) => { const h = embedHtml(inner); return h.startsWith('<div') ? `\n${h}\n` : h; });
        text = text.replace(/!\[\[([^\]\n]+)\]\]/g, (m, inner) => embedHtml(inner));
        text = text.replace(/\[\[([^\]\n]*?)\]\]/g, (m, inner) => linkHtml(inner));
        text = text.replace(ID_RE_G, (m, pre, id) => `${pre}<span class="gn-blockid" data-bid="${esc(id)}"></span>`);

        // footnotes: [^id] references and [^id]: definitions
        const defs = [];
        text = text.replace(/^\[\^([^\]\s]+)\]:[ \t]*([^\n]*(?:\n(?:[ \t]{2,}|\t)[^\n]*)*)$/gm, (m, id, body) => { defs.push({ id, body: body.replace(/\n(?:[ \t]{2,}|\t)/g, '\n') }); return ''; });
        const order = [];
        if (defs.length) {
            text = text.replace(/\[\^([^\]\s]+)\]/g, (m, id) => {
                if (!defs.some(d => d.id === id)) return m;
                let n = order.indexOf(id); if (n < 0) { order.push(id); n = order.length - 1; }
                return `<sup class="gn-fnref"><a href="#gn-fn-${esc(id)}" data-fn="${esc(id)}">${n + 1}</a></sup>`;
            });
        }

        text = restoreCode(text);
        let html;
        if (g.marked) html = g.marked.parse(text, { gfm: true, breaks: true, async: false });
        else html = '<p>' + esc(text).replace(/\n\n+/g, '</p><p>').replace(/\n/g, '<br>') + '</p>';

        if (order.length && g.marked) {
            const items = order.map(id => {
                const d = defs.find(x => x.id === id);
                return `<li id="gn-fn-${esc(id)}">${g.marked.parseInline(restoreCode(d.body.trim()))}</li>`;
            }).join('');
            html += `<section class="gn-footnotes"><hr><ol>${items}</ol></section>`;
        }
        return { html: sanitize(html), math };
    }

    /* ---------------------------------------------------------------- DOM post-processing */
    function processText(container, math) {
        const textNodes = () => {
            const w = document.createTreeWalker(container, NodeFilter.SHOW_TEXT), a = [];
            while (w.nextNode()) a.push(w.currentNode);
            return a;
        };
        // 1. equation placeholders -> spans carrying MathJax delimiters
        for (const node of textNodes()) {
            if (node.nodeValue.indexOf('\uE000') < 0) continue;
            const parts = node.nodeValue.split(/\uE000(\d+)\uE001/);
            const frag = document.createDocumentFragment();
            parts.forEach((p, i) => {
                if (i % 2 === 0) { if (p) frag.append(p); return; }
                const m = math[+p]; if (!m) return;
                const s = document.createElement('span');
                s.className = 'gn-math'; s.dataset.d = m.display ? '1' : '0'; s.dataset.tex = m.tex;
                s.textContent = m.display ? `\\[${m.tex}\\]` : `\\(${m.tex}\\)`;
                frag.append(s);
            });
            node.replaceWith(frag);
        }
        // 2. #tags in running text (not inside links, code or equations)
        const tagRe = /(^|[^\p{L}\p{N}_&\/#\\.:-])#((?:[\p{L}\p{N}_\/-])*[\p{L}_\/-](?:[\p{L}\p{N}_\/-])*)/gu;
        for (const node of textNodes()) {
            if (node.nodeValue.indexOf('#') < 0) continue;
            if (node.parentElement && node.parentElement.closest('a, code, pre, script, style, .gn-math')) continue;
            const txt = node.nodeValue;
            tagRe.lastIndex = 0;
            let m, last = 0, frag = null;
            while ((m = tagRe.exec(txt)) !== null) {
                frag = frag || document.createDocumentFragment();
                const startOfTag = m.index + m[1].length;
                frag.append(txt.slice(last, startOfTag));
                const a = document.createElement('a');
                a.className = 'gn-tag'; a.href = '#'; a.dataset.tag = m[2]; a.textContent = '#' + m[2];
                frag.append(a);
                last = startOfTag + 1 + m[2].length;
            }
            if (frag) { frag.append(txt.slice(last)); node.replaceWith(frag); }
        }
    }

    // Every URL worth trying for an image/file reference, best guess first
    function mediaCandidates(raw, fromPath) {
        let p = String(raw); try { p = decodeURIComponent(p); } catch (e) {}
        p = p.replace(/[?#].*$/, '').replace(/^\.?\//, '');
        const urls = [];
        const f = GN.index.resolveFile(raw, fromPath);
        if (f) urls.push(GN.loader.url(f.path));
        const parts = (GN.index.dirname(fromPath || '') + '/' + p).split('/'), out = [];
        for (const seg of parts) { if (!seg || seg === '.') continue; if (seg === '..') out.pop(); else out.push(seg); }
        urls.push(GN.loader.url(out.join('/')));      // relative to the note's own folder
        urls.push(GN.loader.url(p));                  // relative to the site root
        return urls.filter((u, i) => urls.indexOf(u) === i);
    }
    const resolveMediaUrl = (raw, fromPath) => mediaCandidates(raw, fromPath)[0];

    function wireInternal(a, target, ctx) {
        const r = GN.index.resolveLink(target, ctx.path);
        if (r && r.note) {
            a.dataset.path = r.note.path; a.dataset.frag = r.frag || '';
            a.setAttribute('href', GN.router.href(r.note.path, r.frag));
            a.classList.remove('is-unresolved');
        } else {
            a.classList.add('is-unresolved'); a.removeAttribute('href');
            a.setAttribute('title', 'This note does not exist (read-only reader)');
        }
    }

    function postProcess(container, ctx) {
        // links
        container.querySelectorAll('a').forEach(a => {
            if (a.classList.contains('gn-tag') || a.classList.contains('gn-file-link')) return;
            if (a.classList.contains('internal-link')) { wireInternal(a, a.dataset.href || '', ctx); return; }
            if (a.dataset.fn) return;
            const href = a.getAttribute('href') || '';
            if (/^(https?:|mailto:|tel:)/i.test(href)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; a.classList.add('external-link'); return; }
            if (href.startsWith('#')) { try { a.dataset.anchor = decodeURIComponent(href.slice(1)); } catch (e) { a.dataset.anchor = href.slice(1); } return; }
            if (href && !/^[a-z][a-z0-9+.-]*:/i.test(href)) {
                let t = href; try { t = decodeURIComponent(href); } catch (e) {}
                if (/\.md(#|$)/i.test(t) || !/\.[a-z0-9]{1,5}(#|$)/i.test(t)) { a.classList.add('internal-link'); wireInternal(a, t, ctx); }
            }
        });
        // file links (pdf)
        container.querySelectorAll('a[data-gn-file]').forEach(a => {
            a.href = resolveMediaUrl(a.dataset.gnFile, ctx.path); a.target = '_blank'; a.rel = 'noopener';
        });
        // images + media
        container.querySelectorAll('img, audio, video').forEach(m => {
            const raw = m.getAttribute('data-gn-src') || m.getAttribute('src') || '';
            if (!raw) return;
            if (m.tagName === 'IMG') {
                // Obsidian size syntax inside the alt text: ![alt|200](x.png) or ![|200x100](x.png)
                const sm = (m.getAttribute('alt') || '').match(/^(.*?)\|(\d+)(?:x(\d+))?$/);
                if (sm && !m.getAttribute('width')) { m.setAttribute('alt', sm[1]); m.setAttribute('width', sm[2]); if (sm[3]) m.setAttribute('height', sm[3]); }
                m.loading = 'lazy'; m.decoding = 'async';
            }
            if (/^(https?:|data:|blob:|\/\/)/i.test(raw)) return;
            const tries = mediaCandidates(raw, ctx.path);
            let i = 0;
            m.setAttribute('src', tries[0]);
            m.addEventListener('error', () => {
                i += 1;
                if (i < tries.length) { m.setAttribute('src', tries[i]); return; }
                if (m.tagName !== 'IMG') return;
                const name = String(raw).split('/').pop();
                const ph = document.createElement('span');
                ph.className = 'gn-img-missing';
                ph.title = 'Could not load this image. Tried:\n' + tries.join('\n');
                ph.textContent = 'Image not found: ' + name;
                m.replaceWith(ph);
            });
        });
        // callouts / admonitions (look, icons and colours live in callouts.js)
        if (GN.callouts) {
            container.querySelectorAll('blockquote').forEach(bq => {
                const c = GN.callouts.transform(bq);
                if (c) bq.replaceWith(c);
            });
        }
        // tables scroll sideways inside their own box
        container.querySelectorAll('table').forEach(t => {
            if (t.parentElement && t.parentElement.classList.contains('gate-table-wrap')) return;
            const wrap = document.createElement('div'); wrap.className = 'gate-table-wrap';
            t.replaceWith(wrap); wrap.appendChild(t);
        });
        // mermaid blocks
        container.querySelectorAll('pre > code.language-mermaid').forEach(code => {
            const d = document.createElement('div'); d.className = 'gn-mermaid'; d.dataset.src = code.textContent;
            d.textContent = 'Rendering diagram...';
            code.parentElement.replaceWith(d);
        });
        // code blocks: language label + copy button
        container.querySelectorAll('pre').forEach(pre => {
            const code = pre.querySelector('code');
            if (!code || pre.parentElement.classList.contains('gate-code-block')) return;
            const lang = ((code.className.match(/language-([\w+#-]+)/) || [])[1] || '').toLowerCase();
            const box = document.createElement('div'); box.className = 'gate-code-block';
            pre.replaceWith(box);
            const bar = document.createElement('div'); bar.className = 'gate-code-bar';
            if (lang) { const l = document.createElement('span'); l.className = 'gate-code-lang'; l.textContent = lang; bar.appendChild(l); }
            const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'gate-code-copy'; btn.textContent = 'Copy';
            btn.addEventListener('click', async () => {
                try { await navigator.clipboard.writeText(code.textContent); btn.textContent = 'Copied'; } catch (e) { btn.textContent = 'Press Ctrl+C'; }
                setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
            });
            bar.appendChild(btn); box.appendChild(bar); box.appendChild(pre);
        });
        container.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.disabled = true; });
        // heading anchors
        const used = new Map();
        container.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(h => {
            if (h.closest('.gn-embed')) return;
            const base = slug(headingText(h)), n = used.get(base) || 0;
            used.set(base, n + 1);
            h.id = n ? `${base}-${n}` : base;
        });
    }

    function highlight(container, tries) {
        tries = tries || 0;
        const blocks = container.querySelectorAll('pre code[class*="language-"]');
        if (!blocks.length) return;
        if (g.hljs) {
            blocks.forEach(code => {
                const lang = (code.className.match(/language-([\w+#-]+)/) || [])[1];
                if (lang && g.hljs.getLanguage(lang) && !code.dataset.highlighted) { try { g.hljs.highlightElement(code); } catch (e) {} }
            });
        } else if (tries < 100) setTimeout(() => highlight(container, tries + 1), 100);
    }

    function typeset(container, tries) {
        tries = tries || 0;
        if (!container.querySelector('.gn-math')) return;
        const mj = g.MathJax;
        if (mj && mj.typesetPromise && mj.startup && mj.startup.promise) {
            mj.startup.promise = mj.startup.promise.then(() => {
                if (!container.isConnected) return;
                if (mj.typesetClear) mj.typesetClear([container]);
                return mj.typesetPromise([container]);
            }).catch(err => console.error('MathJax:', err && err.message));
        } else if (tries < 150) setTimeout(() => typeset(container, tries + 1), 100);
    }

    let mermaidP = null;
    function loadMermaid() {
        if (g.mermaid) return Promise.resolve(g.mermaid);
        if (!mermaidP) mermaidP = new Promise((res, rej) => {
            const s = document.createElement('script');
            s.src = 'https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js';
            s.onload = () => res(g.mermaid); s.onerror = () => { mermaidP = null; rej(new Error('mermaid failed to load')); };
            document.head.appendChild(s);
        });
        return mermaidP;
    }
    async function renderMermaid(container) {
        const blocks = [...container.querySelectorAll('.gn-mermaid[data-src]')];
        if (!blocks.length) return;
        try {
            const mm = await loadMermaid();
            const dark = document.documentElement.getAttribute('data-theme') !== 'light' && document.documentElement.getAttribute('data-theme') !== 'paper';
            mm.initialize({ startOnLoad: false, securityLevel: 'strict', theme: dark ? 'dark' : 'default' });
            let n = 0;
            for (const b of blocks) {
                try { const { svg } = await mm.render('gn-mm-' + Date.now() + '-' + (n++), b.dataset.src); b.innerHTML = svg; b.removeAttribute('data-src'); }
                catch (e) { b.textContent = 'Diagram error: ' + (e.message || e); b.classList.add('is-error'); }
            }
        } catch (e) { blocks.forEach(b => { b.textContent = 'Diagram could not be rendered (' + e.message + ').'; }); }
    }

    function finish(container) { typeset(container); highlight(container); renderMermaid(container); }

    /* ---------------------------------------------------------------- embeds */
    async function fillEmbed(el, ctx) {
        const target = el.dataset.embed;
        const r = GN.index.resolveLink(target, ctx.path);
        if (!r || !r.note) { el.classList.add('is-unresolved'); el.textContent = `Not found: ${target}`; return; }
        if (ctx.depth >= MAX_EMBED_DEPTH || ctx.seen.includes(r.note.path)) {
            el.classList.add('is-unresolved'); el.textContent = `Embed skipped (circular or too deep): ${r.note.title}`; return;
        }
        const raw = await GN.loader.text(r.note.path);
        const { body } = parseFrontmatter(raw);
        let md = body;
        if (r.frag) {
            md = r.frag[0] === '^' ? extractBlock(body, r.frag.slice(1)) : extractSection(body, r.frag);
            if (md == null) { el.classList.add('is-unresolved'); el.textContent = `Not found in ${r.note.title}: ${r.frag}`; return; }
        }
        el.classList.add('markdown-embed');
        const a = document.createElement('a');
        a.className = 'gn-embed-link internal-link'; a.title = 'Open ' + r.note.title;
        a.appendChild(GS.icon('link', 14));
        a.dataset.path = r.note.path; a.dataset.frag = r.frag || '';
        a.setAttribute('href', GN.router.href(r.note.path, r.frag));
        const inner = document.createElement('div'); inner.className = 'gn-embed-content';
        el.append(a, inner);
        await render(md, inner, { path: r.note.path, depth: ctx.depth + 1, seen: ctx.seen.concat([r.note.path]), typeset: false });
    }
    async function fillEmbeds(container, ctx) {
        const list = [...container.querySelectorAll('.gn-embed')].filter(e => !e.dataset.done);
        await Promise.all(list.map(async el => {
            el.dataset.done = '1';
            try { await fillEmbed(el, ctx); }
            catch (e) { el.classList.add('is-unresolved'); el.textContent = 'Could not load embed: ' + e.message; }
        }));
    }

    /* ---------------------------------------------------------------- public render */
    /** Render markdown into `container`. ctx: { path, depth, seen, typeset } - returns a promise (embeds are fetched). */
    async function render(text, container, ctx) {
        ctx = Object.assign({ path: '', depth: 0, seen: [], typeset: true }, ctx);
        if (!ctx.seen.length && ctx.path) ctx.seen = [ctx.path];
        const { html, math } = toHtml(text);
        container.innerHTML = html;
        processText(container, math);
        postProcess(container, ctx);
        await fillEmbeds(container, ctx);
        if (ctx.typeset !== false) finish(container);
    }

    /** Small inline renderer for property values: escapes text, turns [[links]] into wired internal links. */
    function renderInline(str, target, ctx) {
        const html = esc(str).replace(/\[\[([^\]\n]+?)\]\]/g, (m, inner) => {
            const parts = inner.split(/\\?\|/);
            return `<a class="internal-link" data-href="${parts[0].trim()}" href="#">${parts.slice(1).join('|').trim() || parts[0].trim()}</a>`;
        });
        target.innerHTML = html;
        target.querySelectorAll('a.internal-link').forEach(a => wireInternal(a, a.dataset.href || '', ctx || { path: '' }));
    }

    GN.markdown = { render, renderInline, finish, typeset, parseFrontmatter, toList, extractSection, extractBlock, normHeading, headingText, slug, parseHeadings, sanitize };
})(window);
