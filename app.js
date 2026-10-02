/* =========================================================================
   POLYFILLS & HELPER CLASSES (Replacing Obsidian API)
   ========================================================================= */

HTMLElement.prototype.createEl = function(tag, opts = {}) {
    const el = document.createElement(tag);
    if (opts.cls) el.className = Array.isArray(opts.cls) ? opts.cls.join(' ') : opts.cls;
    if (opts.text) el.innerText = opts.text;
    if (opts.attr) Object.entries(opts.attr).forEach(([k,v]) => el.setAttribute(k, v));
    // Obsidian's createEl accepts these directly; without them radios/checkboxes become plain text boxes.
    ['type', 'placeholder', 'value', 'name', 'href', 'title', 'id', 'min', 'max', 'step', 'rows', 'cols'].forEach(k => {
        if (opts[k] !== undefined && opts[k] !== null) el.setAttribute(k, opts[k]);
    });
    if (opts.style) el.setAttribute('style', opts.style);
    this.appendChild(el);
    return el;
};
HTMLElement.prototype.createDiv = function(opts = {}) { return this.createEl('div', opts); };
HTMLElement.prototype.createSpan = function(opts = {}) { return this.createEl('span', opts); };
HTMLElement.prototype.empty = function() { this.innerHTML = ''; };
HTMLElement.prototype.setText = function(t) { this.innerText = t; };
HTMLElement.prototype.addClass = function(c) { this.classList.add(c); };
HTMLElement.prototype.appendText = function(t) { this.appendChild(document.createTextNode(t)); };

class Notice {
    constructor(msg, duration = 3000) {
        const toast = document.createElement('div');
        toast.className = 'gate-notice';
        toast.innerText = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), duration);
    }
}

class Modal {
    constructor() {
        this.modalEl = document.createElement('div');
        this.modalEl.className = 'gate-modal-overlay';
        this.contentEl = document.createElement('div');
        this.contentEl.className = 'gate-modal-content';
        this.modalEl.appendChild(this.contentEl);
    }
    open() { document.body.appendChild(this.modalEl); this.onOpen(); }
    close() { this.modalEl.remove(); this.onClose(); }
    onOpen() {}
    onClose() {}
}

class Setting {
    constructor(container) {
        this.settingEl = container.createDiv({ cls: 'setting-item' });
        this.infoEl = this.settingEl.createDiv({ cls: 'setting-item-info' });
        this.nameEl = this.infoEl.createDiv({ cls: 'setting-item-name' });
        this.descEl = this.infoEl.createDiv({ cls: 'setting-item-description' });
        this.controlEl = this.settingEl.createDiv({ cls: 'setting-item-control' });
    }
    setName(n) { this.nameEl.innerText = n; return this; }
    setDesc(d) { this.descEl.innerText = d; return this; }
    setHeading() { this.settingEl.classList.add('setting-item-heading'); this.infoEl.style.flex = "none"; return this; }
    addText(cb) {
        const input = document.createElement('input'); input.type = 'text';
        this.controlEl.appendChild(input);
        const c = { inputEl: input, setPlaceholder: p => { input.placeholder = p; return c; }, setValue: v => { input.value = v; return c; }, onChange: fn => { input.addEventListener('input', e => fn(e.target.value)); return c; } };
        cb(c);
        return this;
    }
    addDropdown(cb) {
        const select = document.createElement('select');
        this.controlEl.appendChild(select);
        const c = { selectEl: select, addOption: (v, t) => { const o = document.createElement('option'); o.value=v; o.innerText=t; select.appendChild(o); return c; }, setValue: v => { select.value = v; return c; }, onChange: fn => { select.addEventListener('change', e => fn(e.target.value)); return c; } };
        cb(c);
        return this;
    }
    addToggle(cb) {
        this.settingEl.classList.add('is-toggle');
        const label = document.createElement('label'); label.className = 'gate-switch';
        const input = document.createElement('input'); input.type = 'checkbox'; input.setAttribute('role', 'switch');
        input.setAttribute('aria-label', this.nameEl.innerText || 'Toggle');
        const track = document.createElement('span'); track.className = 'gate-switch-track';
        label.appendChild(input); label.appendChild(track);
        this.controlEl.appendChild(label);
        const c = { inputEl: input, setValue: v => { input.checked = !!v; return c; }, onChange: fn => { input.addEventListener('change', e => fn(e.target.checked)); return c; } };
        cb(c);
        return this;
    }
    addButton(cb) {
        const btn = document.createElement('button'); btn.className = 'gate-btn';
        this.controlEl.appendChild(btn);
        const c = { setButtonText: t => { btn.innerText = t; return c; }, setCta: () => { btn.classList.add('primary'); return c; }, setWarning: () => { btn.classList.add('danger'); return c; }, onClick: fn => { btn.addEventListener('click', fn); return c; } };
        cb(c);
        return this;
    }
    addColorPicker(cb) {
        const input = document.createElement('input'); input.type = 'color';
        input.className = 'gate-color-input';
        this.controlEl.appendChild(input);
        const c = { inputEl: input, setValue: v => { input.value = v; return c; }, onChange: fn => { input.addEventListener('input', e => fn(e.target.value)); return c; } };
        cb(c);
        return this;
    }
    addSlider(cb) {
        const wrap = document.createElement('div'); wrap.className = 'gate-slider-wrap';
        const input = document.createElement('input'); input.type = 'range';
        const valueLbl = document.createElement('span'); valueLbl.className = 'gate-slider-value';
        wrap.appendChild(input); wrap.appendChild(valueLbl);
        this.controlEl.appendChild(wrap);
        const c = {
            inputEl: input,
            setLimits: (min, max, step) => { input.min = min; input.max = max; input.step = step; return c; },
            setValue: v => { input.value = v; valueLbl.textContent = v; return c; },
            onChange: fn => { input.addEventListener('input', e => { valueLbl.textContent = e.target.value; fn(Number(e.target.value)); }); return c; }
        };
        cb(c);
        return this;
    }
    addTextArea(cb) {
        const textarea = document.createElement('textarea');
        this.controlEl.appendChild(textarea);
        const c = { inputEl: textarea, setValue: v => { textarea.value = v; return c; }, onChange: fn => { textarea.addEventListener('input', e => fn(e.target.value)); return c; } };
        cb(c);
        return this;
    }
}

class MarkdownRenderer {
    static escapeHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

    // Candidate URLs for an image path, most likely first. Bare names live in the image folder;
    // paths with folders are tried vault-relative first, then under the image folder.
    static imageCandidates(raw) {
        const base = ((window.app && window.app.settings && window.app.settings.imageBasePath) || '').replace(/^\/+|\/+$/g, '');
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
            return window.vaultBlocks[GateUtils.vaultKey(file, blockId)] || `*[Question text missing for block ${file.trim()}#^${blockId}]*`;
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

const windowMoment = (dateStr) => {
    const d = dateStr ? new Date(dateStr) : new Date();
    return {
        toDate: () => d,
        format: (fmt) => {
            const pad = (n) => n.toString().padStart(2, '0');
            return fmt.replace('YYYY', d.getFullYear())
                      .replace('MM', pad(d.getMonth() + 1))
                      .replace('DD', pad(d.getDate()))
                      .replace('HH', pad(d.getHours()))
                      .replace('mm', pad(d.getMinutes()))
                      .replace('ss', pad(d.getSeconds()));
        },
        fromNow: () => {
            const diff = (new Date() - d) / 1000;
            if(diff < 60) return "just now";
            if(diff < 3600) return Math.floor(diff/60) + " minutes ago";
            if(diff < 86400) return Math.floor(diff/3600) + " hours ago";
            return Math.floor(diff/86400) + " days ago";
        }
    };
};

/**
 * Fetch with automatic retry + backoff. GitHub Pages' CDN can transiently
 * fail or time out on individual requests, especially right after a deploy
 * or under load. A bare fetch() with no retry silently drops that file's
 * content for the rest of the session (see buildMasterIndex's caching guard),
 * which is the root cause of "sometimes full, sometimes partial" loads.
 */
async function fetchWithRetry(url, { retries = 3, backoffMs = 400, timeoutMs = 12000 } = {}) {
    let lastErr;
    for (let attempt = 0; attempt <= retries; attempt++) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);
        try {
            const res = await fetch(url, { signal: controller.signal, cache: 'no-store' });
            clearTimeout(timer);
            if (res.status === 404) throw Object.assign(new Error(`HTTP 404 (not found)`), { isNotFound: true });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res;
        } catch (e) {
            clearTimeout(timer);
            lastErr = e;
            if (e.isNotFound) break; // genuine 404s aren't transient — don't waste retries
            if (attempt < retries) {
                await new Promise(r => setTimeout(r, backoffMs * Math.pow(2, attempt)));
            }
        }
    }
    throw new Error(`Failed to fetch "${url}" after ${retries + 1} attempts: ${lastErr && lastErr.message}`);
}

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

/* =========================================================================
   CONSTANTS & UTILS
   ========================================================================= */

const DEFAULT_SETTINGS = {
    corePrefix: 'q',
    aptitudePrefix: 'qga',
    selectionAlgorithm: 'ADAPTIVE',
    enableMistakeTags: true,
    nestedMistakeTags: true,
    mistakeTags: 'Careless, Conceptual Gap/Formula, Conceptual Gap/Concept, Conceptual Gap/Condition, Anxiety, Slow, Typo',
    imageBasePath: 'Resources/Image/Question Paper', // Updated to match user reported configuration structure
    // Appearance
    questionFont: 'default',
    questionFontSize: 18,
    questionLineHeight: 1.6,
    accentColor: '' // empty = use the theme's own accent
};

// Fonts offered for question text. "System" fonts only work if the device has them installed
// (Verdana/Georgia/Times are missing on most phones and Linux), so every other option is a web font that
// loads from Google Fonts on demand and works everywhere.
const QUESTION_FONTS = [
    { id: 'default',  label: 'System default',          stack: null },
    { id: 'verdana',  label: 'Verdana (system)',        stack: `Verdana, Geneva, sans-serif`, system: 'Verdana' },
    { id: 'arial',    label: 'Arial (system)',          stack: `Arial, Helvetica, sans-serif`, system: 'Arial' },
    { id: 'georgia',  label: 'Georgia (system, serif)', stack: `Georgia, 'Times New Roman', serif`, system: 'Georgia' },
    { id: 'times',    label: 'Times New Roman (system, serif)', stack: `'Times New Roman', Times, serif`, system: 'Times New Roman' },
    { id: 'inter',    label: 'Inter',                   stack: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`, google: 'Inter:wght@400;500;600;700', family: 'Inter' },
    { id: 'plexsans', label: 'IBM Plex Sans',           stack: `'IBM Plex Sans', system-ui, sans-serif`, google: 'IBM+Plex+Sans:wght@400;500;600;700', family: 'IBM Plex Sans' },
    { id: 'sourcesans', label: 'Source Sans 3',         stack: `'Source Sans 3', system-ui, sans-serif`, google: 'Source+Sans+3:wght@400;500;600;700', family: 'Source Sans 3' },
    { id: 'opensans', label: 'Open Sans',               stack: `'Open Sans', system-ui, sans-serif`, google: 'Open+Sans:wght@400;500;600;700', family: 'Open Sans' },
    { id: 'roboto',   label: 'Roboto',                  stack: `'Roboto', system-ui, sans-serif`, google: 'Roboto:wght@400;500;700', family: 'Roboto' },
    { id: 'lato',     label: 'Lato',                    stack: `'Lato', system-ui, sans-serif`, google: 'Lato:wght@400;700', family: 'Lato' },
    { id: 'notosans', label: 'Noto Sans',               stack: `'Noto Sans', system-ui, sans-serif`, google: 'Noto+Sans:wght@400;500;600;700', family: 'Noto Sans' },
    { id: 'atkinson', label: 'Atkinson Hyperlegible',   stack: `'Atkinson Hyperlegible', system-ui, sans-serif`, google: 'Atkinson+Hyperlegible:wght@400;700', family: 'Atkinson Hyperlegible' },
    { id: 'merriweather', label: 'Merriweather (serif)', stack: `'Merriweather', Georgia, serif`, google: 'Merriweather:wght@400;700', family: 'Merriweather' },
    { id: 'lora',     label: 'Lora (serif)',            stack: `'Lora', Georgia, serif`, google: 'Lora:wght@400;500;600;700', family: 'Lora' },
    { id: 'sourceserif', label: 'Source Serif 4 (serif)', stack: `'Source Serif 4', Georgia, serif`, google: 'Source+Serif+4:wght@400;600;700', family: 'Source Serif 4' },
    { id: 'literata', label: 'Literata (serif)',        stack: `'Literata', Georgia, serif`, google: 'Literata:wght@400;500;600;700', family: 'Literata' },
    { id: 'notoserif', label: 'Noto Serif (serif)',     stack: `'Noto Serif', Georgia, serif`, google: 'Noto+Serif:wght@400;600;700', family: 'Noto Serif' },
    { id: 'custom',   label: 'Custom (type a font name below)', stack: null, custom: true }
];
const QUESTION_FONT_STACKS = Object.fromEntries(QUESTION_FONTS.map(f => [f.id, f.stack])); // kept for older code paths

function fontFromSettings(settings) {
    const f = QUESTION_FONTS.find(x => x.id === settings.questionFont) || QUESTION_FONTS[0];
    if (f.custom) {
        const name = (settings.questionFontCustom || '').trim().replace(/["';{}<>]/g, '');
        if (!name) return { ...f, stack: null };
        return { ...f, family: name, google: encodeURIComponent(name).replace(/%20/g, '+') + ':wght@400;500;600;700', stack: `"${name}", system-ui, sans-serif` };
    }
    return f;
}

// Load a Google web font once, on demand.
function ensureGoogleFontLoaded(font) {
    if (!font || !font.google) return;
    const id = 'gate-gfont-' + font.google.split(':')[0].toLowerCase();
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id; link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${font.google}&display=swap`;
    document.head.appendChild(link);
}

// Is a locally-installed font actually present? (measure text in the font vs. generic fallbacks)
function isSystemFontInstalled(name) {
    try {
        const c = document.createElement('canvas').getContext('2d');
        const sample = 'mmmmmmmmmmlliWQ@#0123456789';
        const w = (fam) => { c.font = `72px ${fam}`; return c.measureText(sample).width; };
        return ['monospace', 'serif', 'sans-serif'].some(g => w(`"${name}", ${g}`) !== w(g));
    } catch (e) { return true; }
}

// Resolves to {ok, msg} so Settings can tell the user whether the chosen font is really in use.
async function checkQuestionFont(settings) {
    const f = fontFromSettings(settings);
    if (!f.stack) return { ok: true, msg: f.custom ? 'Type a font name to use it.' : 'Using your device\'s default font.' };
    if (f.system) {
        return isSystemFontInstalled(f.system)
            ? { ok: true, msg: `${f.system} is installed on this device.` }
            : { ok: false, msg: `${f.system} isn't installed on this device, so the browser is showing a fallback. Pick one of the web fonts below instead and it will work everywhere.` };
    }
    try {
        ensureGoogleFontLoaded(f);
        const loaded = await Promise.race([document.fonts.load(`16px "${f.family}"`), new Promise(r => setTimeout(() => r(null), 6000))]);
        if (loaded && loaded.length) return { ok: true, msg: `${f.family} loaded.` };
        if (isSystemFontInstalled(f.family)) return { ok: true, msg: `${f.family} is installed on this device.` };
        return { ok: false, msg: `Couldn't load "${f.family}". Check the spelling (it must be a Google Fonts name or a font installed on this device) and your connection.` };
    } catch (e) { return { ok: true, msg: '' }; }
}

// Darken/lighten a hex color by a percentage, used to derive a hover shade
function shadeColor(hex, percent) {
    try {
        let col = hex.replace('#', '');
        if (col.length === 3) col = col.split('').map(c => c + c).join('');
        const num = parseInt(col, 16);
        let r = (num >> 16) + percent, g = ((num >> 8) & 0x00FF) + percent, b = (num & 0x0000FF) + percent;
        r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b));
        return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
    } catch (e) { return hex; }
}


/* =========================================================================
   THEMES
   The html[data-theme] attribute is set before first paint by a script in
   index.html; this section handles switching, persistence and the pickers.
   ========================================================================= */
const THEMES = [
    { id: 'system',    name: 'System',    desc: 'Follows your device',   p: { bg: 'linear-gradient(90deg,#ffffff 50%,#14171d 50%)', bg2: 'linear-gradient(90deg,#f5f6f9 50%,#1a1e26 50%)', tx: '#8a92a3', ac: '#2447c9', bd: '#9aa2b3' } },
    { id: 'light',     name: 'Draft',     desc: 'Clean white, ink blue', p: { bg: '#ffffff', bg2: '#f5f6f9', tx: '#1b2230', ac: '#2447c9', bd: '#d9dde6' } },
    { id: 'dark',      name: 'Graphite',  desc: 'Soft dark for evenings', p: { bg: '#14171d', bg2: '#1a1e26', tx: '#e3e6ee', ac: '#86a8ff', bd: '#2f3645' } },
    { id: 'blueprint', name: 'Blueprint', desc: 'Drafting-sheet blue',   p: { bg: '#0e2745', bg2: '#123259', tx: '#e7f2ff', ac: '#7fd8ff', bd: '#2b5a8c' } },
    { id: 'paper',     name: 'Paper',     desc: 'Low-glare for reading', p: { bg: '#f4f1ea', bg2: '#ece8de', tx: '#2a2924', ac: '#25694c', bd: '#d3cdbd' } },
    { id: 'midnight',  name: 'Midnight',  desc: 'True black for OLED',   p: { bg: '#000000', bg2: '#0b0b10', tx: '#dcdfe8', ac: '#b49cff', bd: '#24242e' } }
];
const THEME_STORAGE_KEY = 'gate_theme';
const THEME_BAR_COLORS = { light: '#f5f6f9', dark: '#1a1e26', blueprint: '#123259', paper: '#ece8de', midnight: '#0b0b10' };

function getThemePref() {
    try { const v = localStorage.getItem(THEME_STORAGE_KEY); if (THEMES.some(t => t.id === v)) return v; } catch (e) {}
    return 'system';
}
function resolveTheme(pref) {
    if (pref === 'system') return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return pref;
}
function makeThemePreview(t) {
    const el = document.createElement('span');
    el.className = 'gate-theme-prev';
    el.style.cssText = `--p-bg:${t.p.bg};--p-bg2:${t.p.bg2};--p-tx:${t.p.tx};--p-ac:${t.p.ac};--p-bd:${t.p.bd}`;
    el.innerHTML = '<i class="b"></i><i class="l1"></i><i class="l2"></i><i class="a"></i>';
    return el;
}
function applyTheme(pref, persist = true) {
    if (!THEMES.some(t => t.id === pref)) pref = 'system';
    const resolved = resolveTheme(pref);
    document.documentElement.setAttribute('data-theme', resolved);
    if (persist) { try { localStorage.setItem(THEME_STORAGE_KEY, pref); } catch (e) {} }

    // Browser UI colour on phones
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'theme-color'; document.head.appendChild(meta); }
    meta.content = THEME_BAR_COLORS[resolved] || '#ffffff';

    // Nav button shows the current choice
    const btn = document.getElementById('theme-btn');
    const t = THEMES.find(x => x.id === pref);
    if (btn && t) {
        btn.innerHTML = '';
        btn.appendChild(makeThemePreview(t));
        const label = document.createElement('span');
        label.className = 'theme-btn-label';
        label.textContent = t.name;
        btn.appendChild(label);
    }
    document.querySelectorAll('[data-theme-id]').forEach(el => {
        const on = el.dataset.themeId === pref;
        el.classList.toggle('active', on);
        el.setAttribute(el.getAttribute('role') === 'menuitemradio' ? 'aria-checked' : 'aria-pressed', String(on));
    });
    applyAppearanceSettings(window.app ? window.app.settings : DEFAULT_SETTINGS); // re-evaluate custom accent
}
function initThemeMenu() {
    const btn = document.getElementById('theme-btn');
    const menu = document.getElementById('theme-menu');
    if (!btn || !menu) return;
    menu.innerHTML = '';
    THEMES.forEach(t => {
        const o = document.createElement('button');
        o.type = 'button'; o.className = 'theme-opt'; o.dataset.themeId = t.id;
        o.setAttribute('role', 'menuitemradio');
        o.appendChild(makeThemePreview(t));
        const txt = document.createElement('span'); txt.className = 'txt';
        txt.innerHTML = `<span class="name">${t.name}</span><span class="desc">${t.desc}</span>`;
        o.appendChild(txt);
        o.addEventListener('click', () => { applyTheme(t.id); close(); btn.focus(); });
        menu.appendChild(o);
    });
    const open = () => { menu.hidden = false; btn.setAttribute('aria-expanded', 'true'); (menu.querySelector('.active') || menu.firstElementChild).focus(); };
    const close = () => { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
    btn.addEventListener('click', (e) => { e.stopPropagation(); menu.hidden ? open() : close(); });
    document.addEventListener('click', (e) => { if (!menu.hidden && !menu.contains(e.target)) close(); });
    menu.addEventListener('keydown', (e) => {
        const items = [...menu.querySelectorAll('.theme-opt')]; const i = items.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
        if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { close(); btn.focus(); } });
    // "System" follows the device live
    if (window.matchMedia) {
        const mq = matchMedia('(prefers-color-scheme: dark)');
        const onChange = () => { if (getThemePref() === 'system') applyTheme('system', false); };
        mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
    }
    applyTheme(getThemePref(), false);
}

function applyAppearanceSettings(settings) {
    const root = document.documentElement.style;
    const font = fontFromSettings(settings);
    if (font.stack) { root.setProperty('--gate-question-font', font.stack); ensureGoogleFontLoaded(font); }
    else root.removeProperty('--gate-question-font');

    root.setProperty('--gate-question-font-size', `${settings.questionFontSize}px`);
    root.setProperty('--gate-question-line-height', String(settings.questionLineHeight));

    // Accent comes from the active theme unless the user picked their own colour.
    // (#2563eb was the old default, so it counts as "not customised".)
    const a = (settings.accentColor || '').toLowerCase();
    const custom = /^#[0-9a-f]{6}$/.test(a) && a !== '#2563eb';
    const rs = document.documentElement.style;
    if (custom) {
        const n = parseInt(a.slice(1), 16);
        const lum = (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
        root.setProperty('--interactive-accent', a);
        root.setProperty('--interactive-accent-hover', shadeColor(a, lum > 0.6 ? -25 : 25));
        root.setProperty('--text-accent', a);
        root.setProperty('--text-on-accent', lum > 0.6 ? '#111111' : '#ffffff');
    } else {
        ['--interactive-accent', '--interactive-accent-hover', '--text-accent', '--text-on-accent'].forEach(p => rs.removeProperty(p));
    }
}

class GateUtils {
    static shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    static formatTime(seconds) {
        const total = Math.max(0, Math.floor(Number(seconds) || 0));
        const h = Math.floor(total / 3600);
        const m = Math.floor((total % 3600) / 60);
        const s = total % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    // Inline math exactly as Obsidian reads it: the opening $ must be followed by a non-space, the closing $ must be preceded
    // by a non-space and must not be followed by a digit, and it can't span a blank line. Escape a literal dollar as \$.
    static inlineMathRe() { return /(?<![\\$])\$(?![\s$])((?:[^$\\\n]|\\[\s\S]|\n(?!\s*\n))*?)(?<![\s\\])\$(?!\d)/g; }

    // Splits one "---" section into [{id, text}]. A block id is "^id" at the END of a line, preceded by a space or
    // starting the line, and not inside $...$ / $$...$$ (so exponents like x^2 or 10^3 are never mistaken for ids).
    static parseSectionBlocks(section) {
        const mathRanges = [];
        let m;
        for (const mr of [/\$\$[\s\S]+?\$\$/g, GateUtils.inlineMathRe()]) {
            while ((m = mr.exec(section)) !== null) mathRanges.push([m.index, m.index + m[0].length]);
        }
        const out = [];
        const idRe = /(?:^|[ \t])\^([A-Za-z0-9_-]+)[ \t]*$/gm;
        let lastIndex = 0;
        while ((m = idRe.exec(section)) !== null) {
            if (mathRanges.some(([s0, e0]) => m.index >= s0 && m.index < e0)) continue;
            out.push({ id: m[1], text: section.substring(lastIndex, m.index).trim() });
            lastIndex = m.index + m[0].length;
        }
        return out;
    }
    static normalizeBlockId(id) { return String(id).trim().toLowerCase().replace(/[\s._-]+/g, ''); }
    // Block IDs repeat across papers, so question text is stored per source file: "file::blockid".
    static vaultKey(fileName, blockId) { return String(fileName).trim().toLowerCase() + '::' + GateUtils.normalizeBlockId(blockId); }
    static buildGlobalQID(year, set, section, blockId) { return `${year}_${(set === null || set === undefined) ? '0' : set}_${section}_${blockId}`; }
    static labelFromFileName(basename) { return String(basename).replace(/^(onlyq|trends)[\s_-]+/i, '').replace(/[_]+/g, ' ').replace(/\.md$/i, '').trim(); }
    static parseYearSelector(raw) {
        const tokens = String(raw || '').split(',').map(s => s.trim()).filter(Boolean);
        if (tokens.length === 0) return null;
        const selectors = [];
        for (const tok of tokens) {
            const setMatch = tok.match(/^(\d{4})\s*\(\s*([^)]+?)\s*\)$/);
            if (setMatch) { selectors.push({ year: parseInt(setMatch[1], 10), set: setMatch[2].trim() }); continue; }
            const rangeMatch = tok.match(/^(\d{4})\s*-\s*(\d{4})$/);
            if (rangeMatch) {
                let a = parseInt(rangeMatch[1], 10), b = parseInt(rangeMatch[2], 10);
                if (a > b) [a, b] = [b, a];
                for (let y = a; y <= b; y++) selectors.push({ year: y, set: null });
                continue;
            }
            if (/^\d{4}$/.test(tok)) selectors.push({ year: parseInt(tok, 10), set: null });
        }
        return selectors.length > 0 ? selectors : null;
    }
    static yearSelectorMatches(selectors, q) { return selectors.some(s => s.year === q.year && (s.set === null || String(s.set) === String(q.set))); }
    static formatSourceLink(q) { const base = `ee_${q.year}`; const withSet = q.set ? `${base}(${q.set})` : base; return `[[${withSet}#^${q.blockId}]]`; }
    static parseMistakeTagTree(raw, nested) {
        const entries = String(raw || '').split(',').map(s => s.trim()).filter(Boolean);
        if (entries.length === 0) return [];
        if (!nested) return entries.map(label => ({ label, children: [] }));
        const order = [];
        const childrenByParent = new Map();
        for (const entry of entries) {
            const parts = entry.split('/').map(p => p.trim()).filter(Boolean);
            const parent = parts[0];
            const child = parts[1];
            if (!parent) continue;
            if (!childrenByParent.has(parent)) { childrenByParent.set(parent, []); order.push(parent); }
            if (child && !childrenByParent.get(parent).includes(child)) childrenByParent.get(parent).push(child);
        }
        return order.map(label => ({ label, children: childrenByParent.get(label) }));
    }
}

class AnswerKeySchema {
    static VALID_TYPES = ['MCQ', 'MSQ', 'NAT', 'MTA'];
    static validate(data, filePath) {
        if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error(`Malformed answer key "${filePath}": file does not contain a JSON object.`);
        const errors = [];
        if (data.version === undefined || data.version === null || data.version === '') errors.push(`missing required field "version"`);
        if (data.year === undefined || data.year === null || !/^\d{4}$/.test(String(data.year))) errors.push(`missing or invalid required field "year"`);
        if (!data.subject) errors.push(`missing required field "subject"`);
        if (!('set' in data)) errors.push(`missing required field "set"`);
        if (!data.questions || typeof data.questions !== 'object' || Array.isArray(data.questions)) errors.push(`missing or invalid required field "questions"`);
        else {
            const blockIds = Object.keys(data.questions);
            if (blockIds.length === 0) errors.push(`"questions" object is empty`);
            for (const blockId of blockIds) errors.push(...AnswerKeySchema.validateQuestion(data.questions[blockId], blockId));
        }
        if (errors.length > 0) throw new Error(`Malformed answer key "${filePath}":\n - ${errors.join('\n - ')}`);
    }
    static validateQuestion(q, blockId) {
        const errs = [];
        if (!q || typeof q !== 'object' || Array.isArray(q)) return [`question "${blockId}": is not an object`];
        if (!AnswerKeySchema.VALID_TYPES.includes(q.type)) return [`question "${blockId}": invalid or missing "type"`];
        if (q.marks === undefined || q.marks === null || isNaN(parseFloat(q.marks))) errs.push(`question "${blockId}": missing or invalid required field "marks"`);
        const hasUsableAnswer = (a) => (Array.isArray(a) && a.length > 0) || (typeof a === 'string' && a.trim() !== '') || typeof a === 'number';
        if (q.type === 'MCQ' || q.type === 'MSQ') { if (!hasUsableAnswer(q.answer)) errs.push(`question "${blockId}": missing required field "answer"`); } 
        else if (q.type === 'NAT') {
            if (!Array.isArray(q.ranges) || q.ranges.length === 0) errs.push(`question "${blockId}": missing required "ranges" array`);
            else q.ranges.forEach((r, idx) => { if (!Array.isArray(r) || r.length !== 2 || r.some(v => typeof v !== 'number' || isNaN(v))) errs.push(`question "${blockId}": ranges[${idx}] must be a [min, max] numeric pair`); });
        }
        return errs;
    }
}

class GateGrader {
    static grade(userAns, keyObj) {
        try {
            if (!keyObj) return { status: "NOT GRADED (No Key)", marksAwarded: 0 };
            if (keyObj.type === 'MTA') return { status: "CORRECT (MTA)", marksAwarded: parseFloat(keyObj.marks) || 0 };
            const hasAnswer = !!(userAns && String(userAns).trim() !== "");
            if (!hasAnswer) return { status: "UNATTEMPTED", marksAwarded: 0 };
            const u = String(userAns).trim().toUpperCase();
            const rightMarks = parseFloat(keyObj.marks) || 0;
            const wrongMarks = keyObj.type === 'MCQ' ? (rightMarks === 2 ? (2 / 3) : (1 / 3)) : 0;

            switch (keyObj.type) {
                case 'MCQ': {
                    if (keyObj.answer === undefined || keyObj.answer === null) return { status: "NOT GRADED (Malformed Key)", marksAwarded: 0 };
                    const validOpts = Array.isArray(keyObj.answer) ? keyObj.answer.map(a => String(a).toUpperCase()) : [String(keyObj.answer).toUpperCase()];
                    if (validOpts.includes(u)) return { status: "CORRECT", marksAwarded: rightMarks };
                    return { status: "WRONG", marksAwarded: -wrongMarks };
                }
                case 'MSQ': {
                    if (keyObj.answer === undefined || keyObj.answer === null) return { status: "NOT GRADED (Malformed Key)", marksAwarded: 0 };
                    const cleanU = u.replace(/[^A-Z0-9]/g, '');
                    const sortedU = cleanU.split('').sort().join('');
                    let keyOpts;
                    if (Array.isArray(keyObj.answer)) keyOpts = keyObj.answer.map(a => String(a).toUpperCase());
                    else {
                        const raw = String(keyObj.answer);
                        keyOpts = (/[^A-Za-z0-9]/.test(raw) ? raw.split(/[^A-Za-z0-9]+/).filter(Boolean) : raw.split('')).map(a => a.toUpperCase());
                    }
                    if (sortedU === keyOpts.sort().join('')) return { status: "CORRECT", marksAwarded: rightMarks };
                    return { status: "WRONG", marksAwarded: 0 };
                }
                case 'NAT': {
                    if (!/^-?\d+(\.\d+)?$/.test(u)) return { status: "WRONG", marksAwarded: 0 };
                    if (!Array.isArray(keyObj.ranges)) return { status: "NOT GRADED (Malformed Key)", marksAwarded: 0 };
                    const uVal = parseFloat(u);
                    let isCorrect = false;
                    for (const range of keyObj.ranges) {
                        if (!Array.isArray(range) || range.length !== 2) continue;
                        const min = Math.min(range[0], range[1]), max = Math.max(range[0], range[1]);
                        if (uVal >= min && uVal <= max) { isCorrect = true; break; }
                    }
                    if (isCorrect) return { status: "CORRECT", marksAwarded: rightMarks };
                    return { status: "WRONG", marksAwarded: 0 };
                }
                default: return { status: "ERROR (Unknown Type)", marksAwarded: 0 };
            }
        } catch (e) {
            console.error(e);
            return { status: "NOT GRADED (Error)", marksAwarded: 0 };
        }
    }
}

/* =========================================================================
   MANAGERS (Storage using localStorage)
   ========================================================================= */
class HistoryManager {
    constructor() { this.data = {}; }
    async load() { this.data = JSON.parse(localStorage.getItem('gate_history') || '{}'); }
    async save() { localStorage.setItem('gate_history', JSON.stringify(this.data)); return true; }
    getRecord(qid) { return this.data[qid] || { views: 0, attempts: 0, correct: 0, wrong: 0, totalTimeSec: 0, lastAttemptDate: null }; }
    async updateRecord(qid, isViewed, isAttempted, isCorrect, timeSpentSec) {
        const rec = this.getRecord(qid);
        if (isViewed) rec.views += 1;
        if (isAttempted) {
            rec.attempts += 1;
            if (isCorrect) rec.correct += 1; else rec.wrong += 1;
            rec.lastAttemptDate = new Date().toISOString();
        }
        rec.totalTimeSec += (timeSpentSec || 0);
        this.data[qid] = rec;
    }
    recordMistakeTag(qid, tag) {
        if (!tag) return;
        const rec = this.getRecord(qid);
        rec.mistakeTagCounts = rec.mistakeTagCounts || {};
        rec.mistakeTagCounts[tag] = (rec.mistakeTagCounts[tag] || 0) + 1;
        this.data[qid] = rec;
    }
    recordMistakeNote(qid, note) {
        if (!note) return;
        const rec = this.getRecord(qid);
        rec.lastMistakeNote = note;
        rec.lastMistakeNoteDate = new Date().toISOString();
        this.data[qid] = rec;
    }
}

class SessionManager {
    async saveSession(data) { localStorage.setItem('gate_session', JSON.stringify({ version: 2, ...data })); return true; }
    async loadSession() { const d = localStorage.getItem('gate_session'); return d ? JSON.parse(d) : null; }
    async clearSession() { localStorage.removeItem('gate_session'); }
}

/* =========================================================================
   MISTAKE TAG MODAL
   ========================================================================= */
class MistakeTagModal extends Modal {
    constructor(app, wrongEntries, tagTree) {
        super();
        this.app = app;
        this.wrongEntries = wrongEntries;
        this.tagTree = tagTree;
        this.index = 0;
        this.pendingTag = null;
        this.result = {};
        this._resolve = null;
    }
    openAndAwait() { return new Promise(resolve => { this._resolve = resolve; this.open(); }); }
    onOpen() { this.renderCurrent(); }
    onClose() {
        this.contentEl.empty();
        if (this._resolve) { this._resolve(this.result); this._resolve = null; }
    }
    advance(tag, note) {
        const entry = this.wrongEntries[this.index];
        if (tag) this.result[entry.qid] = { tag, note: note || '' };
        this.index++;
        this.pendingTag = null;
        if (this.index >= this.wrongEntries.length) { this.close(); return; }
        this.renderCurrent();
    }
    selectTag(label) { this.pendingTag = label; this.renderNote(); }
    renderQuestionPreview(contentEl, entry) {
        contentEl.createEl('p', { cls: 'gate-text-muted', text: entry.qid });
        const box = contentEl.createDiv({ cls: 'gate-mistake-preview' });
        MarkdownRenderer.render(entry.q.chunk, box);
    }
    renderCurrent() {
        const { contentEl } = this; contentEl.empty();
        const entry = this.wrongEntries[this.index];
        contentEl.createEl('h3', { text: `Why was this one wrong? (${this.index + 1} / ${this.wrongEntries.length})` });
        this.renderQuestionPreview(contentEl, entry);
        const grid = contentEl.createDiv({ cls: 'gate-mistake-tag-grid' });
        this.tagTree.forEach(node => {
            const btn = grid.createEl('button', { text: node.label, cls: 'gate-btn' });
            btn.onclick = () => { if (node.children.length === 0) this.selectTag(node.label); else this.renderChildren(entry, node); };
        });
        const footer = contentEl.createDiv({ cls: 'gate-modal-footer' });
        footer.createEl('button', { text: 'Skip this one', cls: 'gate-btn' }).onclick = () => this.advance(null, null);
        footer.createEl('button', { text: 'Skip remaining', cls: 'gate-btn' }).onclick = () => this.close();
    }
    renderChildren(entry, node) {
        const { contentEl } = this; contentEl.empty();
        contentEl.createEl('h3', { text: `Why was this one wrong? (${this.index + 1} / ${this.wrongEntries.length}) — ${node.label}` });
        this.renderQuestionPreview(contentEl, entry);
        contentEl.createEl('p', { cls: 'gate-text-muted', text: 'Optional: pick a more specific reason, or keep the general tag.' });
        const grid = contentEl.createDiv({ cls: 'gate-mistake-tag-grid' });
        grid.createEl('button', { text: `Just "${node.label}"`, cls: 'gate-btn primary' }).onclick = () => this.selectTag(node.label);
        node.children.forEach(child => { grid.createEl('button', { text: child, cls: 'gate-btn' }).onclick = () => this.selectTag(`${node.label}/${child}`); });
        const footer = contentEl.createDiv({ cls: 'gate-modal-footer' });
        footer.createEl('button', { text: '← Back', cls: 'gate-btn' }).onclick = () => this.renderCurrent();
        footer.createEl('button', { text: 'Skip this one', cls: 'gate-btn' }).onclick = () => this.advance(null, null);
    }
    renderNote() {
        const { contentEl } = this; contentEl.empty();
        const entry = this.wrongEntries[this.index];
        const isLast = this.index === this.wrongEntries.length - 1;
        contentEl.createEl('h3', { text: `Tag: ${this.pendingTag}` });
        this.renderQuestionPreview(contentEl, entry);
        contentEl.createEl('p', { text: 'Correct idea / one-line takeaway (optional):' });
        const input = contentEl.createEl('input', { type: 'text', cls: 'gate-mistake-note-input', attr: { placeholder: 'e.g. "Read GM off the -180° phase point..."' } });
        const commit = () => this.advance(this.pendingTag, input.value.trim());
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') commit(); });
        const footer = contentEl.createDiv({ cls: 'gate-modal-footer' });
        footer.createEl('button', { text: '← Back', cls: 'gate-btn' }).onclick = () => this.renderCurrent();
        footer.createEl('button', { text: isLast ? 'Finish' : 'Next', cls: 'gate-btn primary' }).onclick = commit;
        setTimeout(() => input.focus(), 10);
    }
}

/* =========================================================================
   INDEXER (Static Website File Loader via Manifest)
   ========================================================================= */
window.vaultBlocks = {}; // Global store for loaded question text


/* =========================================================================
   LOADING SCREEN: shown while the question index downloads (first visit can take a while)
   ========================================================================= */
function showIndexLoading(container, indexer, opts = {}) {
    container.empty();
    const wrap = container.createDiv({ cls: 'gate-view-container' });
    const card = wrap.createDiv({ cls: 'gate-loading-card', attr: { role: 'status', 'aria-live': 'polite' } });
    card.createDiv({ cls: 'gate-spinner', attr: { 'aria-hidden': 'true' } });
    card.createEl('h3', { text: opts.title || 'Loading your questions' });
    const step = card.createDiv({ cls: 'gate-loading-step', text: 'Starting\u2026' });
    const bar = card.createDiv({ cls: 'gate-progress' });
    const fill = bar.createDiv({ cls: 'gate-progress-fill' });
    const hint = card.createDiv({ cls: 'gate-loading-hint', text: 'The first visit downloads every paper, so it takes a little longer. Once loaded, switching tabs is instant.' });
    const slow = setTimeout(() => { hint.textContent = 'Still working\u2026 a slow connection can make the first load take up to a minute. You don\u2019t need to refresh.'; hint.classList.add('slow'); }, 8000);
    const off = indexer.onProgress((p) => {
        if (!p) return;
        step.textContent = p.total > 1 ? `${p.label} \u00b7 ${p.done} of ${p.total}` : p.label;
        fill.style.width = (p.pct || 0) + '%';
    });
    return () => { clearTimeout(slow); off(); };
}

function showIndexError(container, indexer, onRetry) {
    container.empty();
    const wrap = container.createDiv({ cls: 'gate-view-container' });
    const card = wrap.createDiv({ cls: 'gate-loading-card error', attr: { role: 'alert' } });
    card.createEl('h3', { text: 'Couldn\u2019t load your questions' });
    card.createDiv({ cls: 'gate-loading-step', text: indexer.lastError || 'Something went wrong while downloading the question index.' });
    card.createDiv({ cls: 'gate-loading-hint', text: 'Check your internet connection and that pyq-vault-index.json exists in the repository root. Nothing is lost \u2014 you can try again.' });
    card.createEl('button', { text: 'Try again', cls: 'gate-btn primary' }).onclick = onRetry;
}

class GateIndexer {
    constructor(app) {
        this.app = app;
        this.masterIndex = [];
        this.institutes = new Set();
        this.subjects = new Set();
        this.topics = new Set();
        this.topicToSubjects = new Map();
        this.stats = this.emptyStats();
    }
    
    emptyStats() {
        return { total: 0, bySection: { GA: 0, EE: 0 }, byMarks: { GA1: 0, GA2: 0, EE1: 0, EE2: 0 }, unknownType: 0, duplicates: 0, keyFileErrors: [] };
    }
    
    // ---- loading progress (read by the loading screen) ----
    static PHASES = [['Contacting your vault', 4], ['Reading answer keys', 12], ['Reading question papers', 24], ['Downloading question text', 48], ['Reading subject & topic tags', 12]];
    onProgress(fn) { this._listeners = this._listeners || new Set(); this._listeners.add(fn); fn(this.progress || { label: 'Starting…', pct: 0 }); return () => this._listeners.delete(fn); }
    _emit() { (this._listeners || []).forEach(fn => { try { fn(this.progress); } catch (e) {} }); }
    _phase(i, total) {
        const P = GateIndexer.PHASES, before = P.slice(0, i).reduce((a, p) => a + p[1], 0);
        this._ph = { i, before, span: P[i][1], total: Math.max(total, 1), done: 0, label: P[i][0] };
        this._setProgress();
    }
    _tick() { if (this._ph) { this._ph.done++; this._setProgress(); } }
    _setProgress() {
        const p = this._ph;
        this.progress = { label: p.label, done: p.done, total: p.total, pct: Math.min(99, Math.round(p.before + p.span * (p.done / p.total))), error: null };
        this._emit();
    }
    // Fetch many files at once (8 at a time); results come back in the original order so processing stays deterministic.
    async _fetchMany(files, kind, phaseIndex) {
        this._phase(phaseIndex, files.length);
        const out = new Array(files.length); let next = 0;
        const worker = async () => {
            while (next < files.length) {
                const i = next++, file = files[i];
                try { out[i] = { file, value: await fetchWithRetry(file).then(r => r[kind]()) }; }
                catch (error) { out[i] = { file, error }; }
                this._tick();
            }
        };
        await Promise.all(Array.from({ length: Math.min(8, files.length) }, worker));
        return out;
    }

    // One build at a time: tab switches and the Retry button never start duplicate downloads.
    buildMasterIndex(force = false) {
        if (this.building) return this.building;
        if (!force && this.masterIndex.length > 0 && !this.lastBuildHadErrors) return Promise.resolve();
        this.lastError = null;
        this.building = this._build(force).finally(() => { this.building = null; this._ph = null; this.progress = { label: 'Done', pct: 100, done: 1, total: 1, error: this.lastError }; this._emit(); });
        return this.building;
    }

    async _build(force = false) {
        // Previously this returned early any time masterIndex was non-empty,
        // even if the last build had partial fetch failures. That silently
        // locked in a broken/partial index until the user manually clicked
        // Refresh. Now a build with errors is not treated as "done" — it will
        // retry automatically the next time buildMasterIndex is called.
        this._phase(0, 1);
        await this.app.historyManager.load();
        
        let manifest;
        try { 
            // ?t= ensures we never cache the index file
            const response = await fetchWithRetry('pyq-vault-index.json?t=' + new Date().getTime());
            manifest = await response.json(); 
        } 
        catch (e) { 
            console.error("GATE Simulator Fetch Error:", e); 
            this.lastError = "Couldn't download pyq-vault-index.json (" + (e && e.message ? e.message.replace(/^Failed to fetch "[^"]*" after \d+ attempts: /, '') : 'network error') + ").";
            this.lastBuildHadErrors = true;
            return; 
        }

        window.vaultBlocks = {};
        this.masterIndex = []; this.institutes.clear(); this.subjects.clear(); this.topics.clear(); this.topicToSubjects = new Map();
        const seenQids = new Set(), qidMap = new Map();
        let duplicateCount = 0, skippedNoKeyCount = 0;
        const keysDict = {}, keyFileErrors = [];
        const yearFileErrors = [], sourceFileErrors = [], tagFileErrors = [];
        const requiredSourceFiles = new Set(); 

        // 1. Load Answer Keys
        const keyResults = await this._fetchMany(manifest.answerKeys || [], 'json', 1);
        for (const { file, value: data, error: fetchErr } of keyResults) {
            try {
                if (fetchErr) throw fetchErr;
                AnswerKeySchema.validate(data, file);
                const setKey = (data.set === undefined || data.set === null) ? 'null' : data.set;
                keysDict[`${data.year}_${setKey}`] = data;
            } catch (e) { keyFileErrors.push({ path: file, message: e.message }); }
        }

        // 2. Load "onlyQ" Year Files to build the index
        const yearResults = await this._fetchMany(manifest.onlyQYear || [], 'text', 2);
        for (const { file, value: yearText, error: fetchErr } of yearResults) {
            try {
                if (fetchErr) throw fetchErr;
                let content = yearText;
                let inst = "Unknown Institute"; 
                
                const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
                if(fmMatch) {
                    const fm = fmMatch[1];
                    const im = fm.match(/institute:\s*(.*)/);
                    if(im) inst = im[1].trim();
                    content = content.substring(fmMatch[0].length);
                }
                this.institutes.add(inst);

                const chunks = content.split(/^---\s*$/gm);
                for (let chunk of chunks) {
                    chunk = chunk.trim();
                    if (!chunk || !chunk.includes('![[')) continue;

                    let year = null, set = null, blockId = null, section = null;
                    
                    const embedRegex = /!\[\[([^#|\]]+).*?#\^([a-zA-Z0-9_-]+)\]\]/g;
                    let match;
                    
                    // This loop will run multiple times if multiple block IDs exist (e.g. common data)
                    // The last matched block ID dictates the final ID of the question used for grading
                    while ((match = embedRegex.exec(chunk)) !== null) {
                        const fileName = match[1].trim(); 
                        blockId = GateUtils.normalizeBlockId(match[2]);
                        
                        requiredSourceFiles.add(fileName);

                        const yearMatch = fileName.match(/(\d{4})/); 
                        if (yearMatch) year = parseInt(yearMatch[1], 10);
                        
                        const setMatch = fileName.match(/\((\d+)\)/);
                        set = setMatch ? setMatch[1] : null;

                        if (blockId.startsWith(this.app.settings.aptitudePrefix) || blockId.startsWith('gaq') || blockId.startsWith('qga')) {
                            section = 'GA';
                        } else if (blockId.startsWith(this.app.settings.corePrefix) || blockId.startsWith('q')) {
                            section = 'EE';
                        }
                    }
                    if (!blockId || !year || !section) continue;

                    const qid = GateUtils.buildGlobalQID(year, set, section, blockId);
                    if (seenQids.has(qid)) { duplicateCount++; continue; }
                    seenQids.add(qid);

                    const setKey = set === null ? 'null' : set;
                    const paperKey = keysDict[`${year}_${setKey}`];
                    let type = 'UNKNOWN', marks = 0, keyObj = null;
                    if (paperKey && paperKey.questions && paperKey.questions[blockId]) {
                        keyObj = paperKey.questions[blockId]; type = keyObj.type; marks = parseFloat(keyObj.marks) || 0;
                    } else skippedNoKeyCount++;

                    const q = { qid, blockId, chunk, institute: inst, year, set, section, type, marks, keyObj, subjects: [], topics: [] };
                    this.masterIndex.push(q);
                    qidMap.set(qid, q);
                }
            } catch(e) { yearFileErrors.push({ path: file, message: e.message }); }
        }

        // 3. Fetch the ACTUAL question files 
        const basePathsToSearch = [
            "Resources/Question Paper/GATE/MD/Year/"
        ];

        const loadSourceFile = async (fileName) => {
            try { await loadSourceFileInner(fileName); } finally { this._tick(); }
        };
        const loadSourceFileInner = async (fileName) => {
            let content = null;
            let lastFileErr = null;
            for (const base of basePathsToSearch) {
                try {
                    const res = await fetchWithRetry(`${base}${encodeURIComponent(fileName)}.md`);
                    content = await res.text();
                    break;
                } catch(e) { lastFileErr = e; }
            }
            if (!content) {
                if (lastFileErr) sourceFileErrors.push({ path: fileName, message: lastFileErr.message });
                console.warn(`GATE Simulator: Could not find source file ${fileName}.md`);
                return;
            }
            content = content.replace(/\r\n/g, '\n');
            // Split file by --- to isolate each numbered question
            for (const b of content.split(/^---/gm)) {
                // ANTI-CHEAT: Remove tags and answers at the bottom
                const cleanText = b.split(/\n#\w|\n>\[!success]/i)[0].trim();
                if (!cleanText) continue;
                // Find EVERY ^blockId inside this section (ids sit at the end of a line, never inside math like x^2)
                for (const { id, text } of GateUtils.parseSectionBlocks(cleanText)) {
                    window.vaultBlocks[GateUtils.vaultKey(fileName, id)] = text;
                }
            }
        };
        // Fetch in parallel (6 at a time) instead of one by one
        const pending = Array.from(requiredSourceFiles);
        this._phase(3, pending.length);
        await Promise.all(Array.from({ length: 8 }, async () => {
            while (pending.length) await loadSourceFile(pending.shift());
        }));
        console.info(`GATE Simulator: loaded ${Object.keys(window.vaultBlocks).length} question blocks from ${requiredSourceFiles.size} source files`);

        // 4. Load Subject & Topic Tags
        const tagFiles = [...(manifest.onlyQSubject || []), ...(manifest.onlyQTopic || [])];
        const tagRegex = /!?\[\[([^#|\]]+).*?#\^([a-zA-Z0-9_-]+)\]\]/g;
        const plainLinkRegex = /(?<!!)\[\[([^\]|#]+?)(?:\|[^\]]+)?\]\]/g;

        const tagResults = await this._fetchMany(tagFiles, 'text', 4);
        for (const { file, value: tagText, error: fetchErr } of tagResults) {
            try {
                if (fetchErr) throw fetchErr;
                let content = tagText;
                const isSubject = (manifest.onlyQSubject||[]).includes(file);
                const isTopic = (manifest.onlyQTopic||[]).includes(file);
                
                let label = file.split('/').pop().replace('.md', '');
                label = label.replace(/^(onlyQ - |trends - )/i, '').trim();
                
                if (!label) continue;

                if (isTopic) {
                    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
                    const declared = new Set();
                    if(fmMatch) {
                        const sm = fmMatch[1].match(/subject:\s*\[?"?(.*?)"?\]?/);
                        if(sm) {
                            const subjects = sm[1].split(',').map(s=>s.replace(/\[\[|\]\]/g, '').trim()).filter(Boolean);
                            subjects.forEach(s=>declared.add(s));
                        }
                    }
                    let lm; plainLinkRegex.lastIndex = 0;
                    while ((lm = plainLinkRegex.exec(content)) !== null) {
                        const linkText = lm[1].trim();
                        const matchedSubject = Array.from(this.subjects).find(s => s.toLowerCase() === linkText.toLowerCase());
                        if (matchedSubject) declared.add(matchedSubject);
                    }
                    if (declared.size > 0) {
                        if (!this.topicToSubjects.has(label)) this.topicToSubjects.set(label, new Set());
                        declared.forEach(s => this.topicToSubjects.get(label).add(s));
                    }
                }
                
                let match; tagRegex.lastIndex = 0;
                while ((match = tagRegex.exec(content)) !== null) {
                    const fileName = match[1].trim();
                    const blockId = GateUtils.normalizeBlockId(match[2]);
                    
                    const yearMatch = fileName.match(/(\d{4})/); if (!yearMatch) continue;
                    const year = parseInt(yearMatch[1], 10);
                    
                    const setMatch = fileName.match(/\((\d+)\)/);
                    const set = setMatch ? setMatch[1] : null;
                    
                    let section = null;
                    if (blockId.startsWith(this.app.settings.aptitudePrefix) || blockId.startsWith('gaq') || blockId.startsWith('qga')) section = 'GA';
                    else if (blockId.startsWith(this.app.settings.corePrefix) || blockId.startsWith('q')) section = 'EE';
                    if (!section) continue;

                    const qid = GateUtils.buildGlobalQID(year, set, section, blockId);
                    const q = qidMap.get(qid); if (!q) continue;

                    if (isSubject && !q.subjects.includes(label)) { q.subjects.push(label); this.subjects.add(label); }
                    if (isTopic && !q.topics.includes(label)) { q.topics.push(label); this.topics.add(label); }
                }
            } catch(e) { tagFileErrors.push({ path: file, message: e.message }); }
        }

        const stats = this.emptyStats();
        stats.total = this.masterIndex.length; stats.duplicates = duplicateCount; stats.keyFileErrors = keyFileErrors;
        stats.yearFileErrors = yearFileErrors; stats.sourceFileErrors = sourceFileErrors; stats.tagFileErrors = tagFileErrors;
        for (const q of this.masterIndex) {
            if (q.section === 'GA' || q.section === 'EE') stats.bySection[q.section]++;
            if (q.type === 'UNKNOWN') stats.unknownType++;
            const bucket = `${q.section}${q.marks}`; if (bucket in stats.byMarks) stats.byMarks[bucket]++;
        }
        this.stats = stats;

        // Track whether this build had any real failures so the caching guard
        // at the top of this method knows to retry automatically next time,
        // instead of silently keeping a broken partial index forever.
        this.lastBuildHadErrors = (yearFileErrors.length + sourceFileErrors.length + tagFileErrors.length) > 0;

        if (keyFileErrors.length > 0) new Notice(`Excluded ${keyFileErrors.length} answer key file(s) for schema errors.`, 8000);
        if (sourceFileErrors.length > 0) {
            new Notice(`${sourceFileErrors.length} question content file(s) failed to load after retries — some questions will show "text missing" until this resolves. Check console for details.`, 10000);
            console.warn('GATE Simulator: source file load failures', sourceFileErrors);
        }
        if (yearFileErrors.length > 0) {
            new Notice(`${yearFileErrors.length} year-index file(s) failed to load after retries — pool may be incomplete.`, 10000);
            console.warn('GATE Simulator: year file load failures', yearFileErrors);
        }
        if (tagFileErrors.length > 0) {
            console.warn('GATE Simulator: tag file load failures (subjects/topics may be incomplete)', tagFileErrors);
        }
    }
}

class ReplicationShortfallError extends Error {
    constructor(buckets) {
        super(`Not enough questions for Official Blueprint.`); this.name = 'ReplicationShortfallError';
        this.buckets = buckets.map(b => ({ label: b.label, have: b.list.length, need: b.need }));
        this.totalAvailable = buckets.reduce((s, b) => s + b.list.length, 0);
    }
}

/* =========================================================================
   QUESTION SELECTOR
   ========================================================================= */
class QuestionSelector {
    static ALGORITHMS = [['ADAPTIVE', 'Adaptive Priority'], ['OFFICIAL', 'Official Replication'], ['RANDOM', 'Random'], ['MISTAKE_FOCUS', 'Mistake Focus'], ['SPACED_REPETITION', 'Spaced Repetition'], ['WEAKNESS_BOOST', 'Weakness Boost (by Type/Marks)'], ['TOPIC_PRIORITY', 'Frequency × Weakness (by Topic)']];
    static ALGORITHM_LABELS = Object.fromEntries(QuestionSelector.ALGORITHMS);
    static MASTERY_MIN_ATTEMPTS = 3; static MASTERY_THRESHOLD = 0.75;

    static computeMastery(rec) {
        if (!rec || rec.attempts === 0) return { accuracy: null, isMastered: false, needsReview: false };
        const accuracy = rec.correct / rec.attempts;
        const isMastered = rec.wrong > 0 && rec.attempts >= QuestionSelector.MASTERY_MIN_ATTEMPTS && accuracy >= QuestionSelector.MASTERY_THRESHOLD;
        const needsReview = rec.wrong > 0 && !isMastered;
        return { accuracy, isMastered, needsReview };
    }
    static daysSince(dateStr, now) {
        if (!dateStr) return null;
        const t = new Date(dateStr).getTime(); if (isNaN(t)) return null;
        return Math.max(0, (now - t) / 86400000);
    }
    static computeWeaknessMap(index, hm) {
        const buckets = {};
        for (const q of index) {
            const key = `${q.section}_${q.type}_${q.marks}`;
            if (!buckets[key]) buckets[key] = { correct: 0, attempts: 0 };
            const rec = hm.getRecord(q.qid);
            buckets[key].correct += rec.correct; buckets[key].attempts += rec.attempts;
        }
        const acc = {};
        for (const key in buckets) acc[key] = buckets[key].attempts > 0 ? (buckets[key].correct / buckets[key].attempts) : null;
        return acc;
    }
    static computeTopicWeaknessMap(index, hm, subjectScope) {
        const buckets = {};
        for (const q of index) {
            if (subjectScope && subjectScope !== 'ALL' && !(q.subjects || []).includes(subjectScope)) continue;
            const labels = (q.topics && q.topics.length > 0) ? q.topics : (q.subjects || []);
            if (labels.length === 0) continue;
            const rec = hm.getRecord(q.qid);
            for (const label of labels) {
                if (!buckets[label]) buckets[label] = { correct: 0, attempts: 0, count: 0 };
                buckets[label].count += 1; buckets[label].correct += rec.correct; buckets[label].attempts += rec.attempts;
            }
        }
        const map = {};
        for (const label in buckets) {
            const b = buckets[label]; map[label] = { count: b.count, correct: b.correct, attempts: b.attempts, accuracy: b.attempts > 0 ? (b.correct / b.attempts) : null };
        }
        return map;
    }
    static scoreQuestion(q, hm, algorithm, now, maps) {
        const rec = hm.getRecord(q.qid);
        const mastery = QuestionSelector.computeMastery(rec);
        const mistakeAgeDays = QuestionSelector.daysSince(rec.wrong > 0 ? rec.lastAttemptDate : null, now);
        const seenAgeDays = QuestionSelector.daysSince(rec.lastAttemptDate, now);

        switch (algorithm) {
            case 'RANDOM': case 'OFFICIAL': return 1;
            case 'MISTAKE_FOCUS': {
                if (rec.wrong === 0) return 0.5;
                let score = 10 + rec.wrong * 10;
                if (mastery.isMastered) score *= 0.15;
                if (mistakeAgeDays !== null) score += Math.max(0, 10 - mistakeAgeDays * 0.3);
                return Math.max(0.1, score);
            }
            case 'SPACED_REPETITION': {
                if (rec.views === 0) return 15;
                let score = 2;
                if (seenAgeDays !== null) score += Math.min(25, seenAgeDays * 1.2);
                if (mastery.needsReview) score += 8;
                if (mastery.isMastered) score *= 0.4;
                return Math.max(0.1, score);
            }
            case 'WEAKNESS_BOOST': {
                const key = `${q.section}_${q.type}_${q.marks}`;
                const bucketAcc = maps?.weaknessMap ? maps.weaknessMap[key] : null;
                return bucketAcc === null ? 8 : Math.max(0.5, (1 - bucketAcc) * 20);
            }
            case 'TOPIC_PRIORITY': {
                const labels = (q.topics && q.topics.length > 0) ? q.topics : (q.subjects || []);
                if (labels.length === 0 || !maps?.topicWeaknessMap) return 3;
                let best = 0;
                for (const label of labels) {
                    const info = maps.topicWeaknessMap[label]; if (!info) continue;
                    best = Math.max(best, info.count * (info.accuracy === null ? 0.7 : Math.max(0.15, 1 - info.accuracy)));
                }
                return Math.max(0.5, best);
            }
            case 'ADAPTIVE': default: {
                let score = 10;
                score += rec.wrong * 8; score -= rec.correct * 4;
                if (mistakeAgeDays !== null) score += Math.max(0, 15 - mistakeAgeDays * 0.5);
                if (rec.views === 0) score += 12; else if (seenAgeDays !== null) score += Math.min(20, seenAgeDays * 0.8);
                if (mastery.isMastered) score *= 0.3;
                return Math.max(0.1, score);
            }
        }
    }
    static weightedSample(pool, weights, n) {
        const items = pool.map((q, i) => ({ q, w: Math.max(0.0001, weights[i]) }));
        const picked = []; const count = Math.min(n, items.length);
        for (let k = 0; k < count; k++) {
            const total = items.reduce((s, it) => s + it.w, 0);
            let r = Math.random() * total, idx = 0;
            for (; idx < items.length; idx++) { r -= items[idx].w; if (r <= 0) break; }
            idx = Math.min(idx, items.length - 1);
            picked.push(items[idx].q); items.splice(idx, 1);
        }
        return picked;
    }
    static pickFromPool(pool, hm, algorithm, n, maps) {
        if (algorithm === 'RANDOM' || algorithm === 'OFFICIAL') return (n > 0 && n < pool.length) ? GateUtils.shuffleArray(pool).slice(0, n) : GateUtils.shuffleArray(pool);
        return QuestionSelector.weightedSample(pool, pool.map(q => QuestionSelector.scoreQuestion(q, hm, algorithm, Date.now(), maps)), (n > 0 && n < pool.length) ? n : pool.length);
    }
    static explainSelection(q, hm, algorithm, maps) {
        switch (algorithm) {
            case 'RANDOM': return 'Random selection';
            case 'OFFICIAL': return 'Official blueprint slot';
            default: return 'Selected based on your mastery & history.';
        }
    }
    static selectQuestions(pool, fullIndex, hm, config) {
        const algorithm = config.algorithm || 'ADAPTIVE';
        const maps = {
            weaknessMap: algorithm === 'WEAKNESS_BOOST' ? QuestionSelector.computeWeaknessMap(fullIndex, hm) : null,
            topicWeaknessMap: algorithm === 'TOPIC_PRIORITY' ? QuestionSelector.computeTopicWeaknessMap(fullIndex, hm, config.subject) : null
        };

        if (config.mode === 'REPLICATION') {
            const buckets = [
                { list: pool.filter(q => q.section === 'GA' && q.marks === 1), need: 5, label: 'GA (1 Mark)' },
                { list: pool.filter(q => q.section === 'GA' && q.marks === 2), need: 5, label: 'GA (2 Mark)' },
                { list: pool.filter(q => q.section === 'EE' && q.marks === 1), need: 25, label: 'EE (1 Mark)' },
                { list: pool.filter(q => q.section === 'EE' && q.marks === 2), need: 30, label: 'EE (2 Mark)' }
            ];
            const shortfalls = buckets.filter(b => b.list.length < b.need);
            if (shortfalls.length > 0) throw new ReplicationShortfallError(buckets);
            const selected = [];
            buckets.forEach(b => selected.push(...QuestionSelector.pickFromPool(b.list, hm, algorithm, b.need, maps)));
            return selected.map(q => ({ ...q, selectionReason: QuestionSelector.explainSelection(q, hm, algorithm, maps) }));
        }

        const selected = QuestionSelector.pickFromPool(pool, hm, algorithm, config.count > 0 ? config.count : 0, maps);
        return selected.map(q => ({ ...q, selectionReason: QuestionSelector.explainSelection(q, hm, algorithm, maps) }));
    }
}

class TestGenerator {
    static generate(index, config, hm) {
        let pool = [...index];
        if (config.institute && config.institute !== 'ALL') pool = pool.filter(q => q.institute === config.institute);
        if (config.years) pool = pool.filter(q => GateUtils.yearSelectorMatches(config.years, q));
        if (config.subject && config.subject !== 'ALL') pool = pool.filter(q => (q.subjects || []).includes(config.subject));
        if (config.topic && config.topic !== 'ALL') pool = pool.filter(q => (q.topics || []).includes(config.topic));

        if (config.freshness === 'UNSEEN') pool = pool.filter(q => hm.getRecord(q.qid).views === 0);
        else if (config.freshness === 'UNATTEMPTED') pool = pool.filter(q => hm.getRecord(q.qid).attempts === 0);
        else if (config.freshness === 'MISTAKE') pool = pool.filter(q => QuestionSelector.computeMastery(hm.getRecord(q.qid)).needsReview);

        if (config.mode === 'PATTERN') {
            if (config.patType !== 'ALL') pool = pool.filter(q => q.type === config.patType);
            if (config.patMarks !== 'ALL') pool = pool.filter(q => q.marks === parseInt(config.patMarks, 10));
        }

        let selected = QuestionSelector.selectQuestions(pool, index, hm, config);
        if (selected.length === 0) throw new Error("No questions match your criteria.");

        if (config.sort === 'OFFICIAL') {
            const ga = selected.filter(q => q.section === 'GA').sort((a, b) => a.marks - b.marks);
            const ee = selected.filter(q => q.section === 'EE').sort((a, b) => a.marks - b.marks);
            selected = [...ga, ...ee];
        } else {
            selected = GateUtils.shuffleArray(selected);
        }
        return selected;
    }
}

/* =========================================================================
   UI CONTROLLERS
   ========================================================================= */

class ConfirmModal extends Modal {
    constructor({ title, message, confirmText = 'Confirm', cancelText = 'Cancel', danger = false, onConfirm }) {
        super();
        Object.assign(this, { title, message, confirmText, cancelText, danger, onConfirm });
        this.contentEl.classList.add('gate-confirm-modal');
    }
    onOpen() {
        const c = this.contentEl; c.empty();
        c.createEl('h3', { text: this.title });
        c.createEl('p', { text: this.message });
        const row = c.createDiv({ cls: 'gate-modal-actions' });
        const cancel = row.createEl('button', { text: this.cancelText, cls: 'gate-btn' });
        const ok = row.createEl('button', { text: this.confirmText, cls: 'gate-btn ' + (this.danger ? 'danger' : 'primary') });
        cancel.onclick = () => this.close();
        ok.onclick = () => { this.close(); this.onConfirm && this.onConfirm(); };
        this._esc = (e) => { if (e.key === 'Escape') this.close(); };
        document.addEventListener('keydown', this._esc);
        cancel.focus();
    }
    onClose() { document.removeEventListener('keydown', this._esc); }
}

// Exam summary shown before submitting, laid out like the TCS iON exam summary table.
class SubmitSummaryModal extends Modal {
    constructor(view, onConfirm) {
        super();
        this.view = view; this.onConfirm = onConfirm;
        this.contentEl.classList.add('gate-submit-modal');
    }
    static sectionName(code) { return ({ GA: 'General Aptitude', EE: 'Electrical Engineering' })[code] || code || 'Questions'; }
    summarize() {
        const v = this.view, rows = new Map();
        const blank = (name) => ({ name, total: 0, answered: 0, notAnswered: 0, marked: 0, ansMarked: 0, notVisited: 0 });
        v.questions.forEach((q, i) => {
            const key = q.section || 'All';
            if (!rows.has(key)) rows.set(key, blank(SubmitSummaryModal.sectionName(key)));
            const r = rows.get(key); r.total++;
            const ans = String(v.answers[i] || '').trim() !== '', rev = !!v.reviews[i], seen = v.viewedIndices.has(i);
            if (ans && rev) r.ansMarked++;
            else if (ans) r.answered++;
            else if (rev) r.marked++;
            else if (seen) r.notAnswered++;
            else r.notVisited++;
        });
        const list = [...rows.entries()].sort((a, b) => (a[0] === 'GA' ? -1 : 0) - (b[0] === 'GA' ? -1 : 0)).map(e => e[1]);
        const total = blank('Total');
        list.forEach(r => Object.keys(total).forEach(k => { if (k !== 'name') total[k] += r[k]; }));
        return { list, total };
    }
    onOpen() {
        const c = this.contentEl; c.empty();
        const { list, total } = this.summarize();
        const head = c.createDiv({ cls: 'gate-submit-head' });
        head.createEl('h3', { text: 'Exam summary' });
        if (!this.view.isUntimed) head.createDiv({ cls: 'gate-submit-time', text: `Time left  ${GateUtils.formatTime(this.view.timeLeft)}` });

        const cols = [
            ['Section name', ''], ['No. of questions', ''], ['Answered', 'answered'], ['Not answered', 'na'],
            ['Marked for review', 'review'], ['Answered & marked for review (will be considered for evaluation)', 'both'], ['Not visited', 'nv']
        ];
        const wrap = c.createDiv({ cls: 'gate-submit-table-wrap' });
        const table = wrap.createEl('table', { cls: 'gate-submit-table' });
        const trh = table.createEl('thead').createEl('tr');
        cols.forEach(([label, dot], i) => {
            const th = trh.createEl('th', { attr: { scope: 'col' } });
            if (dot) th.createSpan({ cls: `gate-submit-dot ${dot}` });
            th.appendChild(document.createTextNode(label));
            if (i === 0) th.classList.add('left');
        });
        const body = table.createEl('tbody');
        const addRow = (r, isTotal) => {
            const tr = body.createEl('tr'); if (isTotal) tr.className = 'total';
            [r.name, r.total, r.answered, r.notAnswered, r.marked, r.ansMarked, r.notVisited].forEach((val, i) => {
                const td = tr.createEl('td', { text: String(val) }); if (i === 0) td.classList.add('left');
            });
        };
        list.forEach(r => addRow(r, false));
        if (list.length > 1) addRow(total, true);

        const unanswered = total.total - total.answered - total.ansMarked;
        const note = c.createDiv({ cls: 'gate-submit-note' + (unanswered > 0 ? ' warn' : '') });
        note.textContent = unanswered > 0
            ? `${unanswered} of ${total.total} question${total.total === 1 ? '' : 's'} ${unanswered === 1 ? 'has' : 'have'} no answer. `
            : 'Every question has an answer. ';
        note.appendChild(document.createTextNode('Are you sure you want to submit? Once submitted, you won\u2019t be able to change your answers.'));

        const row = c.createDiv({ cls: 'gate-modal-actions' });
        const back = row.createEl('button', { text: 'Back to test', cls: 'gate-btn' });
        const submit = row.createEl('button', { text: 'Submit test', cls: 'gate-btn danger' });
        back.onclick = () => this.close();
        submit.onclick = () => { this.close(); this.onConfirm && this.onConfirm(); };
        this._esc = (e) => { if (e.key === 'Escape') this.close(); };
        document.addEventListener('keydown', this._esc);
        back.focus(); // safest default: Enter goes back to the test, not to submit
    }
    onClose() { document.removeEventListener('keydown', this._esc); if (this.view.activeSubmitModal === this) this.view.activeSubmitModal = null; }
}

class GateExamView {
    constructor(app, container) {
        this.app = app;
        this.containerEl = container;
        this.resetState();
    }
    resetState() {
        this.questions = []; this.answers = {}; this.reviews = {}; this.questionTimes = {};
        this.viewedIndices = new Set();
        this.currentIndex = 0; this.timeLeft = 0; this.timerInterval = null; this.isUntimed = false;
        this.lastNavTime = 0; this.filterMode = 'ALL'; this.searchQuery = ''; this.dom = {};
        this.setupMode = this.setupMode || 'REPLICATION';
        this.selectedAlgorithm = this.selectedAlgorithm || null;
        this.isSubmitting = false;
        this.isPaused = false;
    }
    async onOpen() {
        const idx = this.app.indexer;
        const needsLoad = idx.masterIndex.length === 0 || idx.lastBuildHadErrors || idx.building;
        const stop = needsLoad ? showIndexLoading(this.containerEl, idx) : null;
        await idx.buildMasterIndex();
        if (stop) stop();
        if (idx.masterIndex.length === 0) {
            showIndexError(this.containerEl, idx, () => { this.onOpen(); });
            return;
        }
        const session = await this.app.sessionManager.loadSession();
        this.renderConfigUI(session);
    }
    onClose() {
        this.stopTimer();
        if (this.questions.length > 0 && !this.isSubmitting) this.autoSaveSessionSilent();
    }
    buildSessionPayload() {
        return {
            questions: this.questions, answers: this.answers, reviews: this.reviews, questionTimes: this.questionTimes,
            viewedIndices: Array.from(this.viewedIndices), currentIndex: this.currentIndex, timeLeft: this.timeLeft,
            setupMode: this.setupMode, selectedAlgorithm: this.selectedAlgorithm, isUntimed: this.isUntimed
        };
    }
    autoSaveSessionSilent() { this.app.sessionManager.saveSession(this.buildSessionPayload()); }
    renderConfigUI(session) {
        this.containerEl.empty();
        const wrapper = this.containerEl.createDiv({ cls: 'gate-view-container' });
        const configBox = wrapper.createDiv({ cls: 'gate-config-screen' });

        const refreshBtn = configBox.createEl('button', { text: '⟳ Refresh Question Index', cls: 'gate-btn gate-refresh-btn' });
        refreshBtn.onclick = async () => {
            const stop = showIndexLoading(this.containerEl, this.app.indexer, { title: 'Refreshing question index' });
            this.app.indexer.buildMasterIndex(true).then(() => { stop(); if (this.app.indexer.masterIndex.length === 0) showIndexError(this.containerEl, this.app.indexer, () => this.onOpen()); else this.renderConfigUI(session); });
        };

        if (session) {
            const banner = configBox.createDiv({ cls: 'gate-active-test-banner' });
            banner.createEl('h3', { text: 'Session Paused' });
            const btnBox = banner.createDiv({ cls: 'gate-banner-btns' });
            btnBox.createEl('button', { text: 'Resume', cls: 'gate-btn primary' }).onclick = () => {
                this.questions = session.questions; this.answers = session.answers;
                this.reviews = session.reviews; this.questionTimes = session.questionTimes || {};
                this.viewedIndices = new Set(session.viewedIndices || []);
                this.setupMode = session.setupMode || 'REPLICATION'; this.selectedAlgorithm = session.selectedAlgorithm || null;
                this.isUntimed = !!session.isUntimed;
                this.currentIndex = Math.min(Math.max(session.currentIndex || 0, 0), Math.max(this.questions.length - 1, 0));
                this.timeLeft = Number.isFinite(session.timeLeft) ? session.timeLeft : 0;
                if (!this.isUntimed) this.startTimer();
                this.renderExamUI();
            };
            btnBox.createEl('button', { text: 'Discard', cls: 'gate-btn danger' }).onclick = async () => { await this.app.sessionManager.clearSession(); this.renderConfigUI(null); };
        }

        const stats = this.app.indexer.stats;
        const poolBox = configBox.createDiv({ cls: 'gate-pool-stats' });
        poolBox.createEl('h3', { text: `${stats.total} question(s) available in pool` });
        const bm = stats.byMarks || {};
        poolBox.createDiv({ cls: 'gate-pool-breakdown', text: `General Aptitude ${stats.bySection.GA} (1M\u00b7${bm.GA1 || 0}, 2M\u00b7${bm.GA2 || 0})   \u00b7   Core ${stats.bySection.EE} (1M\u00b7${bm.EE1 || 0}, 2M\u00b7${bm.EE2 || 0})` });
        const problems = [];
        if (stats.unknownType > 0) problems.push(`${stats.unknownType} question(s) have no answer key and will be skipped in grading`);
        const failed = (stats.sourceFileErrors || []).length + (stats.yearFileErrors || []).length + (stats.tagFileErrors || []).length + (stats.keyFileErrors || []).length;
        if (failed > 0) problems.push(`${failed} file(s) failed to load \u2014 some questions may show "text missing"`);
        if (problems.length) {
            const warn = poolBox.createDiv({ cls: 'gate-pool-warn' });
            warn.createSpan({ text: problems.join('. ') + '. ' });
            if (failed > 0) warn.createEl('button', { text: 'Retry', cls: 'gate-btn' }).onclick = () => refreshBtn.click();
        }

        configBox.createEl('h1', { text: 'Session Policy', cls: 'gate-config-title' });
        const goals = configBox.createDiv({ cls: 'gate-goal-grid' });
        const modes = [
            { id: 'REPLICATION', name: 'Exam Replication', desc: 'Full 65Q Mock. Strict Official Ratios.' },
            { id: 'DRILL', name: 'Custom Drill', desc: 'Filter by Subject/Topic tag, then practice freely.' },
            { id: 'PATTERN', name: 'Pattern Training', desc: 'Target specific types (e.g. NAT/MSQ).' },
            { id: 'REVIEW', name: 'Mistake Review', desc: 'Revisit past incorrect answers.' }
        ];
        modes.forEach(m => {
            const card = goals.createDiv({ cls: `gate-goal-card ${this.setupMode === m.id ? 'active' : ''}` });
            card.createEl('h3', { text: m.name }); card.createEl('p', { text: m.desc });
            card.onclick = () => { this.setupMode = m.id; this.renderConfigUI(session); };
        });

        const formBody = configBox.createDiv({ cls: 'gate-config-body' });
        const config = { mode: this.setupMode, count: 65, sort: 'OFFICIAL', freshness: 'ALL' };
        const ix = this.app.indexer;

        new Setting(formBody).setName('Filters').setHeading();
        let instSel;
        new Setting(formBody)
            .setName('Institute')
            .addDropdown(d => {
                ['ALL', ...Array.from(ix.institutes).sort()].forEach(i => d.addOption(i, i));
                d.setValue('ALL');
                instSel = d.selectEl;
            });

        let subjSel, topicSel, topicDesc;
        const subjList = ['ALL', ...Array.from(ix.subjects).sort()];
        const allTopics = Array.from(ix.topics).sort();
        new Setting(formBody)
            .setName('Subject')
            .setDesc(subjList.length > 1 ? 'From your Subject-wise tag files.' : 'No Subject tag files found \u2014 every question counts as untagged.')
            .addDropdown(d => {
                subjList.forEach(s => d.addOption(s, s));
                d.setValue('ALL');
                subjSel = d.selectEl;
                d.onChange(v => refreshTopicOptions(v));
            });
        const topicSetting = new Setting(formBody)
            .setName('Topic')
            .addDropdown(d => { topicSel = d.selectEl; });
        topicDesc = topicSetting.descEl;
        const topicOptionLabel = (t, weaknessMap) => {
            const info = weaknessMap[t];
            if (!info) return t;
            const pyqTxt = `${info.count} PYQ${info.count === 1 ? '' : 's'}`;
            if (info.accuracy === null) return `${t} (${pyqTxt}, unattempted)`;
            return `${t} (${pyqTxt} \u00b7 ${info.correct}/${info.attempts} correct = ${Math.round(info.accuracy * 100)}%)`;
        };
        // Once a Subject is picked, only topics whose file declares that Subject are listed, and the PYQ count / accuracy
        // shown next to each topic is scoped to that Subject too.
        const refreshTopicOptions = (subjectFilter) => {
            const prevVal = topicSel.value;
            const options = (subjectFilter && subjectFilter !== 'ALL')
                ? allTopics.filter(t => ix.topicToSubjects.get(t)?.has(subjectFilter))
                : allTopics;
            const weaknessMap = QuestionSelector.computeTopicWeaknessMap(ix.masterIndex, this.app.historyManager, subjectFilter);
            topicSel.empty();
            topicSel.createEl('option', { value: 'ALL', text: 'ALL' });
            options.forEach(t => topicSel.createEl('option', { value: t, text: topicOptionLabel(t, weaknessMap) }));
            topicSel.value = options.includes(prevVal) ? prevVal : 'ALL';
            if (allTopics.length === 0) {
                topicDesc.textContent = 'No Topic tag files found \u2014 every question counts as untagged.';
            } else if (subjectFilter && subjectFilter !== 'ALL') {
                topicDesc.textContent = options.length > 0
                    ? `Topics declared under "${subjectFilter}". (PYQ count \u00b7 your accuracy, scoped to this Subject)`
                    : `No topic file declares "${subjectFilter}" as its subject yet \u2014 showing none. Add a "subject:" property or a [[${subjectFilter}]] link to a topic file to connect it.`;
            } else {
                topicDesc.textContent = 'From your Topic-wise tag files (e.g. Trends). (PYQ count \u00b7 your accuracy) \u2014 pick a Subject above to narrow this list.';
            }
        };
        refreshTopicOptions('ALL');

        let freshOpts = [['ALL', 'Include all'], ['UNSEEN', 'Unseen only'], ['UNATTEMPTED', 'Unattempted only']];
        if (this.setupMode === 'REVIEW') freshOpts = [['MISTAKE', 'Needs review only']];
        let freshSel;
        new Setting(formBody)
            .setName('Freshness policy')
            .setDesc(this.setupMode === 'REVIEW'
                ? 'Only questions you got wrong that you haven\u2019t yet mastered (see mastery badges once the test starts).'
                : 'Which previously-seen questions are eligible for this test.')
            .addDropdown(d => {
                freshOpts.forEach(([v, t]) => d.addOption(v, t));
                d.setValue(freshOpts[0][0]);
                freshSel = d.selectEl;
            });

        let algoSel;
        new Setting(formBody)
            .setName('Selection algorithm')
            .setDesc('How questions are prioritized within the filters above. Never affects grading \u2014 only which questions are picked, and each question will show why it was chosen.')
            .addDropdown(d => {
                QuestionSelector.ALGORITHMS.forEach(([id, label]) => d.addOption(id, label));
                d.setValue(this.app.settings.selectionAlgorithm || 'ADAPTIVE');
                algoSel = d.selectEl;
            });

        const yearPresets = [
            ['ALL', 'All years'],
            ['2010-2016', '2010\u20132016 (concept building)'],
            ['2017-2022', '2017\u20132022 (transition / trend)'],
            ['2023-2026', '2023\u20132026 (mock-style practice)'],
            ['CUSTOM', 'Custom']
        ];
        let yearPresetSel, customYearInp;
        new Setting(formBody)
            .setName('Year range')
            .setDesc('Older PYQs build concepts; recent ones match current exam style \u2014 filter to whichever pass you\u2019re on.')
            .addDropdown(d => {
                yearPresets.forEach(([v, t]) => d.addOption(v, t));
                d.setValue('ALL');
                yearPresetSel = d.selectEl;
                d.onChange(v => { customYearSetting.settingEl.style.display = v === 'CUSTOM' ? 'flex' : 'none'; });
            });
        const customYearSetting = new Setting(formBody)
            .setName('Custom years')
            .setDesc('Used only when Year range is Custom. Comma-separated \u2014 mix single years, ranges and specific sets, e.g. "2014(3), 2017-2020, 2023". A bare year (or a range) includes every set of that year.')
            .addText(t => { t.setPlaceholder('2014(3), 2017-2020, 2023'); customYearInp = t.inputEl; });
        customYearSetting.settingEl.classList.add('is-stacked');
        customYearSetting.settingEl.style.display = 'none';

        new Setting(formBody).setName('Test structure').setHeading();
        let sortSel;
        new Setting(formBody)
            .setName('Sort order')
            .addDropdown(d => {
                [['OFFICIAL', 'Official GATE flow'], ['CHAOTIC', 'Pure random / chaotic']].forEach(([v, t]) => d.addOption(v, t));
                d.setValue('OFFICIAL');
                sortSel = d.selectEl;
            });

        let countInp, typeSel, marksSel;
        if (this.setupMode !== 'REPLICATION') {
            new Setting(formBody)
                .setName('Question count')
                .setDesc('0 = include everything that matches your filters.')
                .addText(t => { t.inputEl.type = 'number'; t.inputEl.min = '0'; t.setValue('30'); countInp = t.inputEl; });
            if (this.setupMode === 'PATTERN') {
                new Setting(formBody)
                    .setName('Question type')
                    .addDropdown(d => {
                        [['ALL', 'All'], ['MCQ', 'MCQ'], ['MSQ', 'MSQ'], ['NAT', 'NAT']].forEach(([v, t]) => d.addOption(v, t));
                        d.setValue('ALL');
                        typeSel = d.selectEl;
                    });
                new Setting(formBody)
                    .setName('Marks')
                    .addDropdown(d => {
                        [['ALL', 'All'], ['1', '1 Mark'], ['2', '2 Marks']].forEach(([v, t]) => d.addOption(v, t));
                        d.setValue('ALL');
                        marksSel = d.selectEl;
                    });
            }
        } else {
            new Setting(formBody)
                .setName('Question count')
                .setDesc('Locked to the official 65-question mix: 5 GA\u00b71M, 5 GA\u00b72M, 25 EE\u00b71M, 30 EE\u00b72M.');
        }

        let durInp, untimed = false;
        if (this.setupMode !== 'REPLICATION') {
            new Setting(formBody)
                .setName('Untimed practice')
                .setDesc('No countdown, no auto-submit \u2014 for concept-building passes, not speed.')
                .addToggle(t => {
                    t.setValue(false);
                    t.onChange(v => {
                        untimed = v;
                        durInp.disabled = v;
                        durSetting.settingEl.style.opacity = v ? '0.5' : '1';
                    });
                });
        }
        const durSetting = new Setting(formBody)
            .setName('Duration')
            .setDesc('Minutes. Ignored when Untimed practice is on.')
            .addText(t => {
                t.inputEl.type = 'number'; t.inputEl.min = '1';
                t.setValue(this.setupMode === 'REPLICATION' ? '180' : '60');
                durInp = t.inputEl;
            });

        // Filled in only when the official blueprint can't be satisfied, with a concrete next step.
        const errorBox = configBox.createDiv({ cls: 'gate-inline-banner', style: 'display: none;' });
        const startBtn = configBox.createEl('button', { text: 'Initialize Engine', cls: 'gate-start-btn' });
        startBtn.onclick = () => {
            errorBox.empty();
            errorBox.style.display = 'none';
            config.institute = instSel.value;
            config.subject = subjSel.value;
            config.topic = topicSel.value;
            config.freshness = freshSel.value;
            config.sort = sortSel.value;
            config.algorithm = algoSel.value;
            if (countInp) {
                const c = parseInt(countInp.value, 10);
                config.count = (Number.isFinite(c) && c >= 0) ? c : 0;
            }
            if (typeSel) config.patType = typeSel.value;
            if (marksSel) config.patMarks = marksSel.value;
            const preset = yearPresetSel.value;
            if (preset === 'ALL') {
                config.years = null;
            } else if (preset === 'CUSTOM') {
                config.years = GateUtils.parseYearSelector(customYearInp.value);
                if (!config.years) new Notice('No valid years found in Custom years \u2014 showing all years instead.');
            } else {
                config.years = GateUtils.parseYearSelector(preset);
            }
            let durMinutes = 0;
            if (!untimed) {
                durMinutes = parseInt(durInp.value, 10);
                if (!Number.isFinite(durMinutes) || durMinutes <= 0) { new Notice('Please enter a valid duration in minutes.'); return; }
            }
            try {
                this.questions = TestGenerator.generate(ix.masterIndex, config, this.app.historyManager);
                this.questions.forEach((_, i) => { this.answers[i] = ''; this.reviews[i] = false; this.questionTimes[i] = 0; });
                this.viewedIndices = new Set();
                this.isUntimed = untimed;
                this.timeLeft = untimed ? 0 : durMinutes * 60;
                this.currentIndex = 0;
                this.selectedAlgorithm = config.algorithm;
                if (!untimed) this.startTimer();
                this.renderExamUI();
            } catch (e) {
                if (e instanceof ReplicationShortfallError) {
                    errorBox.style.display = 'block';
                    errorBox.createEl('p', { text: e.message });
                    errorBox.createEl('p', { cls: 'gate-text-muted', text: e.buckets.map(b => `${b.label}: ${b.have}/${b.need}`).join('  \u00b7  ') + `  (${e.totalAvailable} total across all buckets)` });
                    const btnRow = errorBox.createDiv({ cls: 'gate-banner-btns' });
                    btnRow.createEl('button', { text: 'Switch to Custom Drill', cls: 'gate-btn primary' }).onclick = () => { this.setupMode = 'DRILL'; this.renderConfigUI(session); };
                    btnRow.createEl('button', { text: 'Adjust filters', cls: 'gate-btn' }).onclick = () => { errorBox.style.display = 'none'; errorBox.empty(); };
                    new Notice('Not enough questions for the official mix \u2014 see options below, or relax your filters.');
                } else {
                    new Notice(e.message);
                }
            }
        };
    }
    renderExamUI() {
        this.containerEl.empty();
        const layout = this.containerEl.createDiv({ cls: 'gate-view-container' }).createDiv({ cls: 'gate-exam-layout' });
        const main = layout.createDiv({ cls: 'gate-exam-main' });
        const toolbar = main.createDiv({ cls: 'gate-toolbar' });
        this.dom.searchBox = toolbar.createEl('input', { type: 'text', placeholder: 'Search...', cls: 'gate-search-input' });
        this.dom.searchBox.oninput = (e) => { this.searchQuery = e.target.value.toLowerCase(); this.updatePalette(); };

        const header = main.createDiv({ cls: 'gate-exam-header' });
        const titleWrap = header.createDiv({ cls: 'gate-exam-title-wrap' });
        this.dom.title = titleWrap.createDiv({ cls: 'gate-exam-title' });
        this.dom.content = main.createDiv({ cls: 'gate-exam-content' });
        this.dom.ansContainer = main.createDiv({ cls: 'gate-exam-answer-box' });
        this.dom.pauseOverlay = main.createDiv({ cls: 'gate-pause-overlay' });
        this.dom.pauseOverlay.createDiv({ cls: 'gate-pause-overlay-text', text: 'Paused' });

        const footer = main.createDiv({ cls: 'gate-exam-footer' });
        const footerL = footer.createDiv({ cls: 'gate-footer-left' });
        this.dom.btnPrev = footerL.createEl('button', { text: 'Previous', cls: 'gate-btn' });
        this.dom.btnClear = footerL.createEl('button', { text: 'Clear', cls: 'gate-btn' });
        this.dom.btnPause = footerL.createEl('button', { text: 'Pause', cls: 'gate-btn' });

        const reviewToggle = footerL.createEl('label', { cls: 'gate-exam-review-toggle' });
        this.dom.reviewCheckbox = reviewToggle.createEl('input', { type: 'checkbox' });
        reviewToggle.createEl('span', { text: 'Mark for Review', cls: 'gate-review-toggle-text-visible' });

        this.dom.btnNext = footer.createEl('button', { text: 'Save & Next', cls: 'gate-btn primary' });

        this.dom.btnPrev.onclick = () => { if (this.currentIndex > 0) this.navigate(-1); };
        this.dom.btnNext.onclick = () => { if (this.currentIndex < this.questions.length - 1) this.navigate(1); };
        this.dom.btnClear.onclick = () => { this.answers[this.currentIndex] = ""; this.updateQuestionView(); this.autoSaveSessionSilent(); };
        this.dom.reviewCheckbox.onchange = (e) => { this.reviews[this.currentIndex] = e.target.checked; this.updatePaletteButton(this.currentIndex); this.autoSaveSessionSilent(); };
        this.dom.btnPause.onclick = () => this.togglePause();

        const sidebar = layout.createDiv({ cls: 'gate-exam-sidebar' });
        this.dom.timer = sidebar.createDiv({ cls: 'gate-exam-timer-box', text: GateUtils.formatTime(this.timeLeft) });
        this.dom.summary = sidebar.createDiv({ cls: 'gate-progress-summary' });
        const palette = sidebar.createDiv({ cls: 'gate-exam-palette' });
        this.dom.grid = palette.createDiv({ cls: 'gate-exam-grid' });
        sidebar.createEl('button', { text: 'Submit Test', cls: 'gate-btn danger' }).onclick = () => this.requestSubmit();

        this.createPaletteGrid(); this.lastNavTime = Date.now(); this.updateQuestionView(); this.updateProgressSummary();
    }
    accumulateTime() { this.questionTimes[this.currentIndex] += (Date.now() - this.lastNavTime) / 1000; this.lastNavTime = Date.now(); }
    navigate(dir) { this.accumulateTime(); this.currentIndex += dir; this.updateQuestionView(); this.autoSaveSessionSilent(); }
    createPaletteGrid() {
        this.dom.grid.empty(); this.dom.paletteButtons = [];
        this.questions.forEach((_, i) => {
            const btn = this.dom.grid.createDiv({ cls: 'gate-grid-btn', text: `${i + 1}` });
            btn.onclick = () => { if (this.currentIndex !== i) { this.accumulateTime(); this.currentIndex = i; this.updateQuestionView(); } };
            this.dom.paletteButtons.push(btn); this.applyPaletteClasses(btn, i);
        });
    }
    updatePalette() { /* similar logic as original */ }
    updatePaletteButton(i) { if(this.dom.paletteButtons[i]) this.applyPaletteClasses(this.dom.paletteButtons[i], i); }
    applyPaletteClasses(btn, index) {
        btn.className = 'gate-grid-btn';
        if (index === this.currentIndex) btn.classList.add('active');
        if (this.answers[index].trim() !== '') btn.classList.add('answered');
        if (this.reviews[index]) btn.classList.add('review');
    }
    updateProgressSummary() {
        let ans = 0; this.questions.forEach((_, i) => { if (this.answers[i].trim() !== '') ans++; });
        if (this.dom.summary) this.dom.summary.innerHTML = `Ans: <strong>${ans}</strong> | Rem: <strong>${this.questions.length - ans}</strong>`;
    }
    
    updateQuestionView() {
        const q = this.questions[this.currentIndex];
        this.dom.title.innerHTML = `Q ${this.currentIndex + 1} / ${this.questions.length} <span class="gate-exam-source">(${q.section} | ${q.marks}M | ${q.type})</span>`;
        this.dom.ansContainer.empty();
        this.dom.ansContainer.createEl('span', { text: 'Your Answer:' });
        
        if (q.type === 'MCQ') {
            const optsGrp = this.dom.ansContainer.createDiv({ cls: 'gate-ans-group' });
            ['A', 'B', 'C', 'D'].forEach(opt => {
                const lbl = optsGrp.createEl('label', { cls: 'gate-ans-radio' });
                const rb = lbl.createEl('input', { type: 'radio', name: 'gate_mcq_ans', value: opt });
                rb.checked = (this.answers[this.currentIndex] === opt);
                rb.onchange = () => { this.answers[this.currentIndex] = opt; this.updatePaletteButton(this.currentIndex); this.updateProgressSummary(); };
                
                lbl.appendChild(document.createTextNode(` ${opt}`)); 
            });
        } else if (q.type === 'MSQ') {
            const optsGrp = this.dom.ansContainer.createDiv({ cls: 'gate-ans-group' });
            const currentAns = (this.answers[this.currentIndex] || "").replace(/[^A-D]/g, "");
            ['A', 'B', 'C', 'D'].forEach(opt => {
                const lbl = optsGrp.createEl('label', { cls: 'gate-ans-checkbox' });
                const cb = lbl.createEl('input', { type: 'checkbox', value: opt });
                cb.checked = currentAns.includes(opt);
                cb.onchange = () => {
                    let ansSet = new Set((this.answers[this.currentIndex] || "").replace(/[^A-D]/g, "").split(''));
                    if (cb.checked) ansSet.add(opt); else ansSet.delete(opt);
                    this.answers[this.currentIndex] = Array.from(ansSet).sort().join('');
                    this.updatePaletteButton(this.currentIndex); this.updateProgressSummary();
                };
                
                lbl.appendChild(document.createTextNode(` ${opt}`));
            });
        } else if (q.type === 'NAT') {
            const input = this.dom.ansContainer.createEl('input', { type: 'text', placeholder: 'e.g. 1.05' });
            input.value = this.answers[this.currentIndex];
            input.oninput = (e) => { this.answers[this.currentIndex] = e.target.value.replace(/[^0-9.-]/g, ''); this.updatePaletteButton(this.currentIndex); this.updateProgressSummary(); };
        } else { 
            this.dom.ansContainer.createEl('span', { text: `Marks to All`, cls: 'gate-mta-badge' }); 
        }
        
        this.viewedIndices.add(this.currentIndex);
        if (this.dom.reviewCheckbox) this.dom.reviewCheckbox.checked = !!this.reviews[this.currentIndex];
        MarkdownRenderer.render(q.chunk, this.dom.content);
        this.dom.btnPrev.disabled = this.currentIndex === 0;
        this.dom.btnNext.disabled = this.currentIndex === this.questions.length - 1;
        (this.dom.paletteButtons || []).forEach(b => b.classList.remove('active'));
        this.updatePaletteButton(this.currentIndex);
        this.revealActivePaletteButton();
        if (this.dom.content) this.dom.content.scrollTop = 0;
    }

    // Keep the current question's button in view inside the palette (vertical grid on desktop, horizontal strip on phones).
    revealActivePaletteButton() {
        const btn = this.dom.paletteButtons && this.dom.paletteButtons[this.currentIndex];
        const grid = btn && btn.parentElement;
        if (!btn || !grid) return;
        const gr = grid.getBoundingClientRect(), br = btn.getBoundingClientRect();
        if (grid.scrollHeight > grid.clientHeight + 1 && (br.top < gr.top || br.bottom > gr.bottom)) {
            grid.scrollTo({ top: grid.scrollTop + (br.top - gr.top) - (gr.height - br.height) / 2, behavior: 'smooth' });
        }
        if (grid.scrollWidth > grid.clientWidth + 1 && (br.left < gr.left || br.right > gr.right)) {
            grid.scrollTo({ left: grid.scrollLeft + (br.left - gr.left) - (gr.width - br.width) / 2, behavior: 'smooth' });
        }
    }
    
    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            this.timeLeft = Math.max(0, this.timeLeft - 1);
            if (this.dom.timer) this.dom.timer.innerText = GateUtils.formatTime(this.timeLeft);
            if (this.timeLeft <= 0) { this.stopTimer(); this.submitTest(); }
        }, 1000);
    }
    stopTimer() { if (this.timerInterval) { clearInterval(this.timerInterval); this.timerInterval = null; } }

    togglePause() {
        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            this.stopTimer();
            this.dom.pauseOverlay.classList.add('active');
            this.dom.btnPause.innerText = 'Resume';
        } else {
            if (!this.isUntimed) this.startTimer();
            this.dom.pauseOverlay.classList.remove('active');
            this.dom.btnPause.innerText = 'Pause';
        }
    }
    
    // The Submit button asks first; the timer running out calls submitTest() directly.
    requestSubmit() {
        if (this.isSubmitting || !this.questions.length) return;
        if (this.activeSubmitModal) return;
        this.activeSubmitModal = new SubmitSummaryModal(this, () => this.submitTest());
        this.activeSubmitModal.open();
    }

    async submitTest() {
        if (this.isSubmitting) return; this.isSubmitting = true;
        if (this.activeSubmitModal) this.activeSubmitModal.close();
        this.accumulateTime(); this.stopTimer(); new Notice("Grading...");

        let totalMarks = 0, correct = 0, wrong = 0, unattempted = 0;
        const graded = [], wrongEntries = [];
        for (let i = 0; i < this.questions.length; i++) {
            const q = this.questions[i], userAns = this.answers[i], timeSec = this.questionTimes[i] || 0;
            const res = GateGrader.grade(userAns, q.keyObj);
            const isAtt = res.status !== "UNATTEMPTED", isCor = res.status.startsWith("CORRECT");
            if (!isAtt) unattempted++; else if (isCor) correct++; else { wrong++; wrongEntries.push({ qid: q.qid, q }); }
            totalMarks += res.marksAwarded;
            graded.push({ q, i, userAns, timeSec, res, isAtt, isCor });
        }

        let tagMap = {};
        if (wrongEntries.length > 0 && this.app.settings.enableMistakeTags !== false) {
            const tagTree = GateUtils.parseMistakeTagTree(this.app.settings.mistakeTags, true);
            tagMap = await new MistakeTagModal(this.app, wrongEntries, tagTree).openAndAwait();
        }

        let report = "";
        for (const g of graded) {
            const { q, i, userAns, timeSec, res, isAtt, isCor } = g;
            await this.app.historyManager.updateRecord(q.qid, true, isAtt, isCor, timeSec);
            if (tagMap[q.qid]?.tag) this.app.historyManager.recordMistakeTag(q.qid, tagMap[q.qid].tag);
            
            report += `### Q${i + 1} - [${q.qid}]\n\n${q.chunk}\n\n`;
            report += `**Your Answer:** \`${userAns || "None"}\` | **Result:** ${res.status} (${res.marksAwarded} Marks)\n\n---\n\n`;
        }

        let content = `# Session Analytics\n\nScore: ${totalMarks.toFixed(2)}\nCorrect: ${correct}\nWrong: ${wrong}\n\n---\n\n` + report;
        downloadFile(`Analytics_${new Date().toISOString().split('T')[0]}.md`, content);
        
        await this.app.historyManager.save();
        await this.app.sessionManager.clearSession();
        this.resetState();
        this.app.switchView('dashboard');
    }
}

class GateDashboardView {
    constructor(app, container) { this.app = app; this.containerEl = container; }
    async onOpen() { await this.loadAndRender(); }
    async loadAndRender() {
        const idx = this.app.indexer;
        const stop = (idx.masterIndex.length === 0 || idx.lastBuildHadErrors || idx.building) ? showIndexLoading(this.containerEl, idx, { title: 'Loading your analytics' }) : null;
        await this.app.historyManager.load(); await idx.buildMasterIndex();
        if (stop) stop();
        if (idx.masterIndex.length === 0) { showIndexError(this.containerEl, idx, () => this.loadAndRender()); return; }
        this.containerEl.empty();
        const layout = this.containerEl.createDiv({ cls: 'gate-dashboard-container' });
        const header = layout.createDiv({ cls: 'gate-dash-header' });
        header.createEl('h2', { text: 'GATE Preparation Dashboard' });
        header.createEl('button', { text: '⟳ Refresh', cls: 'gate-btn' }).onclick = () => this.loadAndRender();

        const history = this.app.historyManager.data;
        let totalAttempts = 0, totalCorrect = 0;
        for (const rec of Object.values(history)) { totalAttempts += rec.attempts; totalCorrect += rec.correct; }
        
        const summaryBox = layout.createDiv({ cls: 'gate-dash-summary' });
        this.renderCard(summaryBox, 'Questions Attempted', totalAttempts);
        this.renderCard(summaryBox, 'Global Accuracy', totalAttempts > 0 ? `${((totalCorrect/totalAttempts)*100).toFixed(1)}%` : '0%');
    }
    renderCard(parent, title, value) {
        const card = parent.createDiv({ cls: 'gate-dash-card' });
        card.createEl('h4', { text: title }); card.createDiv({ cls: 'val', text: value });
    }
}

class GateSettingTab {
    constructor(app, container) { this.app = app; this.containerEl = container; }
    onOpen() {
        this.containerEl.empty();
        const s = this.app.settings;
        const save = () => { localStorage.setItem('gate_settings', JSON.stringify(this.app.settings)); new Notice("Settings saved."); };

        const page = this.containerEl.createDiv({ cls: 'gate-view-container gate-scrollable' }).createDiv({ cls: 'gate-settings' });
        const head = page.createDiv({ cls: 'gate-settings-head' });
        head.createEl('h2', { text: 'Settings' });
        head.createDiv({ cls: 'gate-settings-sub', text: 'Changes apply instantly and are saved on this device.' });
        const body = page.createDiv({ cls: 'gate-settings-body' });
        const nav = body.createEl('nav', { cls: 'gate-settings-nav', attr: { 'aria-label': 'Settings sections' } });
        const main = body.createDiv({ cls: 'gate-settings-main' });

        const navLinks = [];
        const section = (id, title, desc, danger = false) => {
            const card = main.createEl('section', { cls: 'gate-settings-card' + (danger ? ' danger' : ''), attr: { id: `gate-set-${id}` } });
            const h = card.createDiv({ cls: 'gate-settings-card-head' });
            h.createEl('h3', { text: title });
            if (desc) h.createDiv({ cls: 'gate-settings-card-desc', text: desc });
            const link = nav.createEl('button', { text: title, cls: 'gate-settings-navlink', attr: { type: 'button' } });
            link.dataset.target = card.id;
            link.onclick = () => card.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navLinks.push(link);
            return card.createDiv({ cls: 'gate-settings-rows' });
        };

        // ---------- Appearance ----------
        const look = section('appearance', 'Appearance', 'Theme and accent color.');
        const themeRow = new Setting(look).setName('Theme').setDesc('System follows your device and switches automatically.');
        themeRow.settingEl.classList.add('is-stacked');
        const themeGrid = themeRow.settingEl.createDiv({ cls: 'gate-theme-grid' });
        THEMES.forEach(t => {
            const card = document.createElement('button');
            card.type = 'button'; card.className = 'gate-theme-card'; card.dataset.themeId = t.id;
            card.appendChild(makeThemePreview(t));
            const nm = document.createElement('span'); nm.className = 'name'; nm.textContent = t.name; card.appendChild(nm);
            const ds = document.createElement('span'); ds.className = 'desc'; ds.textContent = t.desc; card.appendChild(ds);
            card.addEventListener('click', () => { applyTheme(t.id); this.refreshAccentPicker && this.refreshAccentPicker(); });
            themeGrid.appendChild(card);
        });
        applyTheme(getThemePref(), false); // marks the active card

        const currentAccent = () => {
            const a = (s.accentColor || '').toLowerCase();
            if (/^#[0-9a-f]{6}$/.test(a) && a !== '#2563eb') return a;
            const v = getComputedStyle(document.documentElement).getPropertyValue('--interactive-accent').trim();
            return /^#[0-9a-f]{6}$/i.test(v) ? v : '#2447c9';
        };
        let accentInput = null;
        new Setting(look)
            .setName('Accent color')
            .setDesc('Buttons, selected answers and highlights. Every theme has its own; pick a color to override it.')
            .addColorPicker(cp => {
                accentInput = cp.inputEl;
                cp.setValue(currentAccent());
                cp.onChange(v => { s.accentColor = v; applyAppearanceSettings(s); save(); });
            })
            .addButton(btn => btn.setButtonText('Use theme color').onClick(() => {
                s.accentColor = ''; applyAppearanceSettings(s); accentInput.value = currentAccent(); save();
            }));
        this.refreshAccentPicker = () => { if (accentInput) accentInput.value = currentAccent(); };

        // ---------- Question text ----------
        const text = section('question', 'Question text', 'How questions are displayed while you practise.');
        const prevRow = new Setting(text).setName('Preview');
        prevRow.settingEl.classList.add('is-stacked');
        const preview = prevRow.settingEl.createDiv({ cls: 'gate-set-preview' });
        MarkdownRenderer.render('**Q1.** A series RLC circuit has $R = 10\\,\\Omega$, $L = 2\\,\\text{mH}$ and $C = 5\\,\\mu\\text{F}$. Find the resonant frequency.\n\n$$f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$$', preview);

        const fontStatus = document.createElement('div');
        fontStatus.className = 'gate-font-status';
        let fontCheckId = 0;
        const refreshFontStatus = async () => {
            const id = ++fontCheckId;
            fontStatus.textContent = 'Checking font…'; fontStatus.dataset.state = '';
            const r = await checkQuestionFont(s);
            if (id !== fontCheckId) return; // a newer choice superseded this check
            fontStatus.textContent = r.msg; fontStatus.dataset.state = r.ok ? 'ok' : 'warn';
        };
        const fontRow = new Setting(text)
            .setName('Font')
            .setDesc('Web fonts load from Google Fonts and work on every device. System fonts only work if installed.')
            .addDropdown(d => {
                QUESTION_FONTS.forEach(f => d.addOption(f.id, f.label));
                d.setValue(s.questionFont || 'default');
                d.onChange(v => { s.questionFont = v; applyAppearanceSettings(s); save(); refreshFontStatus(); });
            });
        fontRow.infoEl.appendChild(fontStatus);
        new Setting(text)
            .setName('Custom font name')
            .setDesc('Used when "Custom" is chosen: any Google Fonts family (e.g. Crimson Pro) or a font installed here.')
            .addText(t => {
                t.setPlaceholder('e.g. Crimson Pro').setValue(s.questionFontCustom || '');
                t.onChange(v => { s.questionFontCustom = v.trim(); applyAppearanceSettings(s); save(); refreshFontStatus(); });
            });
        refreshFontStatus();
        new Setting(text).setName('Font size').setDesc('Question text size in pixels.')
            .addSlider(sl => {
                sl.setLimits(14, 28, 1).setValue(s.questionFontSize || 18);
                sl.onChange(v => { s.questionFontSize = v; applyAppearanceSettings(s); save(); });
            });
        new Setting(text).setName('Line height').setDesc('Space between lines of text.')
            .addSlider(sl => {
                sl.setLimits(1.2, 2.2, 0.1).setValue(s.questionLineHeight || 1.6);
                sl.onChange(v => { s.questionLineHeight = v; applyAppearanceSettings(s); save(); });
            });

        // ---------- Images & files ----------
        const files = section('files', 'Images & files', 'Where question images live in your repository.');
        new Setting(files)
            .setName('Image folder')
            .setDesc('Folder (relative to index.html) that holds your images, e.g. Resources/Image/Question Paper. Leave empty if they are in the repo root.')
            .addText(t => t.setPlaceholder('Resources/Image/Question Paper').setValue(s.imageBasePath || '').onChange(v => { s.imageBasePath = v.trim(); save(); }));

        // ---------- Mistake tagging ----------
        const mistakes = section('mistakes', 'Mistake tagging', 'Tag why you got a question wrong after submitting.');
        new Setting(mistakes).setName('Ask for a mistake tag').setDesc('Show the tagging step for wrong answers when you submit.')
            .addToggle(t => t.setValue(s.enableMistakeTags !== false).onChange(v => { s.enableMistakeTags = v; save(); }));
        const tagRow = new Setting(mistakes).setName('Tag list').setDesc('Comma-separated. Use / to nest, e.g. Conceptual Gap/Formula.')
            .addTextArea(t => t.setValue(s.mistakeTags || '').onChange(v => { s.mistakeTags = v; save(); }));
        tagRow.settingEl.classList.add('is-stacked');

        // ---------- Data ----------
        const data = section('data', 'Your data', 'Stored only in this browser.', true);
        new Setting(data).setName('Clear history').setDesc('Permanently erases your attempts, accuracy and mistake tags.')
            .addButton(btn => btn.setButtonText('Clear progress').setWarning().onClick(() => {
                new ConfirmModal({
                    title: 'Erase all progress?', message: 'This permanently deletes your attempt history, accuracy stats and mistake tags on this device. It can\u2019t be undone.',
                    confirmText: 'Erase everything', danger: true,
                    onConfirm: () => { localStorage.removeItem('gate_history'); new Notice('History cleared.'); }
                }).open();
            }));

        // Highlight the section that is currently on screen in the side nav
        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries) => {
                entries.forEach(e => { if (e.isIntersecting) navLinks.forEach(l => l.classList.toggle('active', l.dataset.target === e.target.id)); });
            }, { rootMargin: '-15% 0px -70% 0px' });
            main.querySelectorAll('.gate-settings-card').forEach(c => io.observe(c));
        }
        if (navLinks[0]) navLinks[0].classList.add('active');
    }
}

/* =========================================================================
   APP INITIALIZATION
   ========================================================================= */
class GateApp {
    constructor() {
        this.settings = { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem('gate_settings') || '{}') };
        applyAppearanceSettings(this.settings);
        this.historyManager = new HistoryManager();
        this.sessionManager = new SessionManager();
        this.indexer = new GateIndexer(this);
    }
    async init() {
        initThemeMenu();
        this.views = {
            exam: new GateExamView(this, document.querySelector('#view-exam .view-content')),
            dashboard: new GateDashboardView(this, document.querySelector('#view-dashboard .view-content')),
            settings: new GateSettingTab(this, document.querySelector('#view-settings .view-content'))
        };
        
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchView(e.target.dataset.view));
        });
        
        await this.switchView('exam');
    }
    async switchView(viewId) {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelector(`.nav-btn[data-view="${viewId}"]`).classList.add('active');
        document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));
        document.getElementById(`view-${viewId}`).classList.add('active');
        
        if (this.views[viewId] && this.views[viewId].onOpen) {
            await this.views[viewId].onOpen();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => { window.app = new GateApp(); window.app.init(); });
