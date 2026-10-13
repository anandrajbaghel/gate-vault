/* markdown / renderer.js - turns a question's Obsidian-flavoured markdown into safe HTML: ![[file#^id]] embeds, $math$ (MathJax),
   ![[image.png|300]], callouts, ==highlight==, tables, code with copy button. Same behaviour as the classic simulator. */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    const GS = g.GateShared;
    const lib = (GSim.pluginLib = GSim.pluginLib || {});
    const mine = (lib['markdown'] = lib['markdown'] || {});
    // the three tiny helpers it needs, so this feature works without the question bank
    class GateUtils {
    static inlineMathRe() { return /(?<![\\$])\$(?![\s$])((?:[^$\\\n]|\\[\s\S]|\n(?!\s*\n))*?)(?<![\s\\])\$(?!\d)/g; }
    static normalizeBlockId(id) { return String(id).trim().toLowerCase().replace(/[\s._-]+/g, ''); }
    static vaultKey(fileName, blockId) { return String(fileName).trim().toLowerCase() + '::' + GateUtils.normalizeBlockId(blockId); }
    }

class MarkdownRenderer {
    static escapeHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

    // Candidate URLs for an image path, most likely first. Bare names live in the image folder;
    // paths with folders are tried vault-relative first, then under the image folder.
    static imageCandidates(raw) {
        const base = (MarkdownRenderer.imageBase() || '').replace(/^\/+|\/+$/g, '');
        let file = String(raw || '').trim();
        try { file = decodeURI(file); } catch (e) {}
        file = file.replace(/^\.?\//, '');
        const enc = (p) => p.split(/[\/\\]/).map(encodeURIComponent).join('/');
        const out = [];
        const name = file.split(/[\/\\]/).pop();
        if (file.includes('/') || file.includes('\\')) {
            out.push(enc(file));
            if (base && !file.toLowerCase().startsWith(base.toLowerCase() + '/')) { out.push(enc(base + '/' + file)); out.push(enc(base + '/' + name)); }
            else if (base) out.push(enc(base + '/' + name));
        } else {
            if (base) out.push(enc(base + '/' + file));
            out.push(enc(file));
        }
        return [...new Set(out)];
    }

    static sanitize(html) {
        if (window.DOMPurify) {
            return window.DOMPurify.sanitize(html, { ADD_ATTR: ['target', 'data-gate-img'], FORBID_TAGS: ['style', 'iframe', 'object', 'embed', 'form'] });
        }
        // Fallback if the CDN script is blocked: drop scripts, inline handlers and javascript: URLs
        const tpl = document.createElement('template');
        tpl.innerHTML = html;
        tpl.content.querySelectorAll('script,style,iframe,object,embed,form').forEach(n => n.remove());
        tpl.content.querySelectorAll('*').forEach(n => {
            [...n.attributes].forEach(a => {
                if (/^on/i.test(a.name) || /^\s*javascript:/i.test(a.value)) n.removeAttribute(a.name);
            });
        });
        return tpl.innerHTML;
    }

    static render(chunk, container) {
        let text = String(chunk || '').replace(/\r\n?/g, '\n');

        // 1. Resolve Obsidian block embeds: ![[file#^id]]
        text = text.replace(/!\[\[([^#|\]]+).*?#\^([a-zA-Z0-9_-]+)\]\]/g, (match, file, blockId) => {
            return MarkdownRenderer.blocks()[GateUtils.vaultKey(file, blockId)] || `*[Question text missing for block ${file.trim()}#^${blockId}]*`;
        });

        // 2. Protect code and math from every later step (same precedence as Obsidian: code wins over math).
        const codeStash = [], mathStash = [];
        const stashCode = (m) => { codeStash.push(m); return `\uE002${codeStash.length - 1}\uE003`; };
        const stashMath = (tex, display) => { mathStash.push({ tex, display }); return `\uE000${mathStash.length - 1}\uE001`; };

        text = text.replace(/^([ \t]*)(`{3,}|~{3,})[^\n]*\n[\s\S]*?\n[ \t]*\2[`~]*[ \t]*$/gm, stashCode);   // ``` fenced ```
        text = text.replace(/^([ \t]*)(`{3,}|~{3,})[^\n]*\n[\s\S]*$/m, stashCode);                           // unclosed fence runs to the end
        text = text.replace(/(`+)(?!`)((?:[^\n]|\n(?!\s*\n))*?[^`])\1(?!`)/g, stashCode);                   // `inline code`
        text = text.replace(/\$\$([\s\S]+?)\$\$/g, (m, tex) => stashMath(tex, true));                       // $$ display $$
        // $ inline $ : Obsidian's rules (no space just inside the dollars, closing $ not followed by a digit); \$ is a literal dollar
        text = text.replace(GateUtils.inlineMathRe(), (m, tex) => stashMath(tex, false));

        // 3. Obsidian-only syntax
        text = text.replace(/%%[\s\S]*?%%/g, '');                                                           // %% comments %%
        text = text.replace(/!\[\[([^\]]+)\]\]/g, (m, inner) => {                                          // ![[image.png|300]]
            const parts = inner.split('|').map(p => p.trim());
            const file = parts[0].split('#')[0];
            if (!/\.(png|jpe?g|svg|gif|webp|bmp|avif)$/i.test(file)) return MarkdownRenderer.escapeHtml(file);
            const size = parts.slice(1).find(p => /^\d+(x\d+)?$/i.test(p));
            const alt = parts.slice(1).filter(p => p !== size).join(' ');
            let attrs = '';
            if (size) { const [w, h] = size.toLowerCase().split('x'); attrs = ` width="${w}"` + (h ? ` height="${h}"` : ''); }
            return `<img data-gate-img="${MarkdownRenderer.escapeHtml(file)}" alt="${MarkdownRenderer.escapeHtml(alt)}"${attrs}>`;
        });
        text = text.replace(/\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g, (m, target, alias) => {                  // [[Page|alias]] -> alias
            return MarkdownRenderer.escapeHtml((alias || target.replace(/#\^?/, ' > ')).trim());
        });
        text = text.replace(/==(?!\s)([^\n=]+?)(?<!\s)==/g, '<mark>$1</mark>');                            // ==highlight==
        text = text.replace(/(^|[ \t])\^[a-zA-Z0-9-]+[ \t]*$/gm, '$1');                                    // trailing ^block-ids

        // 4. Markdown -> HTML (GitHub-flavoured: tables, task lists, strikethrough; raw HTML allowed; single newline = line break like Obsidian)
        text = text.replace(/\uE002(\d+)\uE003/g, (m, i) => codeStash[i]);
        let html;
        if (window.marked) {
            html = window.marked.parse(text, { gfm: true, breaks: true, async: false });
        } else {
            html = '<p>' + text.replace(/\n\n+/g, '</p><p>').replace(/\n/g, '<br>') + '</p>'; // CDN blocked: plain fallback
        }
        html = MarkdownRenderer.sanitize(html);

        // 5. Put the equations back as MathJax delimiters (escaped, so & < > survive the HTML parser)
        html = html.replace(/\uE000(\d+)\uE001/g, (m, i) => {
            const { tex, display } = mathStash[i];
            const esc = MarkdownRenderer.escapeHtml(tex);
            return display ? `\\[${esc}\\]` : `\\(${esc}\\)`;
        });

        container.innerHTML = html;
        MarkdownRenderer.postProcess(container);
        MarkdownRenderer.typeset(container);
        MarkdownRenderer.highlight(container);
    }

    static postProcess(container) {
        // Images: ![[x.png]], ![](x.png) and <img src="x.png"> all resolve the same way, with fallbacks if a path 404s
        container.querySelectorAll('img').forEach(img => {
            const raw = img.getAttribute('data-gate-img') || img.getAttribute('src') || '';
            if (!raw || /^(https?:|data:|blob:)/i.test(raw)) return;
            const candidates = MarkdownRenderer.imageCandidates(raw);
            let i = 0;
            img.addEventListener('error', () => { if (++i < candidates.length) img.src = candidates[i]; else img.classList.add('gate-img-missing'); });
            img.src = candidates[0];
            if (!img.getAttribute('alt')) img.setAttribute('alt', raw);
        });

        // Obsidian callouts: > [!note] Title
        container.querySelectorAll('blockquote').forEach(bq => {
            const first = bq.firstElementChild;
            if (!first || first.tagName !== 'P') return;
            const m = first.innerHTML.match(/^\s*\[!([\w-]+)\]([+-])?[ \t]*([\s\S]*)$/);
            if (!m) return;
            const type = m[1].toLowerCase(), fold = m[2];
            const [titleHtml, ...rest] = m[3].split(/<br\s*\/?>/i);
            const callout = document.createElement(fold ? 'details' : 'div');
            callout.className = 'gate-callout';
            callout.dataset.callout = type;
            if (fold === '+') callout.open = true;
            const title = document.createElement(fold ? 'summary' : 'div');
            title.className = 'gate-callout-title';
            title.innerHTML = titleHtml.trim() || (type.charAt(0).toUpperCase() + type.slice(1));
            callout.appendChild(title);
            const body = document.createElement('div');
            body.className = 'gate-callout-body';
            if (rest.join('').trim()) { const p = document.createElement('p'); p.innerHTML = rest.join('<br>'); body.appendChild(p); }
            [...bq.children].slice(1).forEach(n => body.appendChild(n));
            if (body.childNodes.length) callout.appendChild(body);
            bq.replaceWith(callout);
        });

        // Tables scroll sideways inside their own box on narrow screens
        container.querySelectorAll('table').forEach(t => {
            if (t.parentElement && t.parentElement.classList.contains('gate-table-wrap')) return;
            const wrap = document.createElement('div');
            wrap.className = 'gate-table-wrap';
            t.replaceWith(wrap);
            wrap.appendChild(t);
        });

        // Code blocks: language label + copy button
        container.querySelectorAll('pre').forEach(pre => {
            const code = pre.querySelector('code');
            if (!code || pre.parentElement.classList.contains('gate-code-block')) return;
            const lang = ((code.className.match(/language-([\w+#-]+)/) || [])[1] || '').toLowerCase();
            const box = document.createElement('div');
            box.className = 'gate-code-block';
            pre.replaceWith(box);
            const bar = document.createElement('div');
            bar.className = 'gate-code-bar';
            if (lang) { const l = document.createElement('span'); l.className = 'gate-code-lang'; l.textContent = lang; bar.appendChild(l); }
            const btn = document.createElement('button');
            btn.type = 'button'; btn.className = 'gate-code-copy'; btn.textContent = 'Copy';
            btn.addEventListener('click', async () => {
                try { await navigator.clipboard.writeText(code.textContent); btn.textContent = 'Copied'; }
                catch (e) { btn.textContent = 'Press Ctrl+C'; }
                setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
            });
            bar.appendChild(btn);
            box.appendChild(bar);
            box.appendChild(pre);
        });

        // Task list checkboxes are display-only
        container.querySelectorAll('input[type="checkbox"]').forEach(cb => { if (!cb.closest('label')) cb.disabled = true; });
    }

    static highlight(container, tries = 0) {
        const blocks = container.querySelectorAll('pre code[class*="language-"]');
        if (!blocks.length) return;
        if (window.hljs) {
            blocks.forEach(code => {
                const lang = (code.className.match(/language-([\w+#-]+)/) || [])[1];
                if (lang && window.hljs.getLanguage(lang) && !code.dataset.highlighted) { try { window.hljs.highlightElement(code); } catch (e) {} }
            });
        } else if (tries < 100) {
            setTimeout(() => MarkdownRenderer.highlight(container, tries + 1), 100);
        }
    }

    static typeset(container, tries = 0) {
        const mj = window.MathJax;
        if (mj && mj.typesetPromise && mj.startup && mj.startup.promise) {
            mj.startup.promise = mj.startup.promise
                .then(() => {
                    if (!container.isConnected) return;
                    if (mj.typesetClear) mj.typesetClear([container]);
                    return mj.typesetPromise([container]);
                })
                .catch((err) => console.error('MathJax:', err && err.message));
        } else if (tries < 150) {
            setTimeout(() => MarkdownRenderer.typeset(container, tries + 1), 100); // not loaded yet (up to ~15s)
        } else {
            console.error('MathJax never loaded — check the CDN script in index.html');
        }
    }
}

    // where to find things is decided by the plugin (settings, question bank); defaults keep it usable on its own
    MarkdownRenderer.imageBase = () => '';
    MarkdownRenderer.blocks = () => ({});

    mine.MarkdownRenderer = MarkdownRenderer;
})(window);
