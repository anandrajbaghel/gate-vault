/* GateNotes.reader - the reading pane: breadcrumb, title, properties, rendered note, folding, status bar. Read-only. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared, el = GS.el;
    let head, crumb, scroll, article, titleEl, propsEl, content, docBl, status;
    let current = null, token = 0;
    const scrollMem = new Map();
    const nid = s => String(s).trim().toLowerCase().replace(/[\s._-]+/g, '');

    function init(container) {
        GS.clear(container);
        const mk = (id, label, icon, fn, tip) => el('button', { cls: 'gn-icon-btn', id, attrs: { type: 'button', 'aria-label': label, title: tip || label }, on: { click: fn } }, GS.icon(icon));
        crumb = el('nav', { cls: 'gn-crumb', attrs: { 'aria-label': 'Path' } });
        const hl = mk('gn-head-left', 'Files', 'panelLeft', () => GN.app.toggle('left'), 'File list'); hl.classList.add('gn-head-toggle');
        const hr = mk('gn-head-right', 'Outline and links', 'list', () => GN.app.toggle('right'), 'Outline and links'); hr.classList.add('gn-head-toggle');
        head = el('div', { cls: 'gn-pane-head' }, hl, mk('gn-back', 'Back', 'back', () => GN.router.back(), 'Back (Alt+Left)'), mk('gn-forward', 'Forward', 'forward', () => GN.router.forward(), 'Forward (Alt+Right)'), crumb, hr);
        titleEl = el('h1', { cls: 'gn-inline-title' });
        propsEl = el('div', { cls: 'gn-props' });
        content = el('div', { cls: 'gn-content markdown-rendered' });
        docBl = el('div', { cls: 'gn-doc-backlinks' });
        article = el('article', { cls: 'gn-article' }, titleEl, propsEl, content, docBl);
        scroll = el('div', { cls: 'gn-scroll', id: 'gn-scroll' }, article);
        status = el('div', { cls: 'gn-statusbar' });
        container.append(head, scroll, status);
        scroll.addEventListener('scroll', GS.rafThrottle(spy), { passive: true });
        article.addEventListener('click', onArticleClick);
    }

    /* ---- scrolling helpers */
    function scrollToEl(t, smooth) {
        if (!t) return;
        const top = t.getBoundingClientRect().top - scroll.getBoundingClientRect().top + scroll.scrollTop - 14;
        scroll.scrollTo({ top: Math.max(0, top), behavior: smooth === false ? 'auto' : 'smooth' });
    }
    function flash(t) { if (!t) return; t.classList.add('gn-flash'); setTimeout(() => t.classList.remove('gn-flash'), 1500); }
    function headingEls() { return [...content.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(h => !h.closest('.gn-embed, .gate-callout')); }
    function spy() {
        const hs = headingEls(); if (!hs.length) return;
        const base = scroll.getBoundingClientRect().top + 60;
        let act = hs[0];
        for (const h of hs) { if (h.classList.contains('gn-folded')) continue; if (h.getBoundingClientRect().top <= base) act = h; else break; }
        GN.panels.setActiveHeading(act.id);
    }
    function unfoldFor(h) {
        if (!h.classList.contains('gn-folded')) return;
        content.querySelectorAll('.is-collapsed').forEach(x => x.classList.remove('is-collapsed'));
        applyFold();
    }
    function scrollToFragment(frag, smooth) {
        if (!frag) return false;
        if (frag[0] === '^') {
            const want = nid(frag.slice(1));
            const span = [...content.querySelectorAll('.gn-blockid')].find(s => nid(s.dataset.bid) === want);
            if (!span) return false;
            let t = span.parentElement;
            if (t && t.tagName === 'P' && t.childNodes.length === 1 && t.previousElementSibling) t = t.previousElementSibling;
            scrollToEl(t, smooth); flash(t); return true;
        }
        const parts = frag.split('#');
        const want = GN.markdown.normHeading(parts[parts.length - 1]);
        const h = headingEls().find(x => GN.markdown.normHeading(GN.markdown.headingText(x)) === want);
        if (!h) return false;
        unfoldFor(h); scrollToEl(h, smooth); flash(h); return true;
    }
    function scrollToHeadingId(id) {
        const h = content.querySelector('[id="' + String(id).replace(/"/g, '\\"') + '"]');
        if (h) { unfoldFor(h); scrollToEl(h); flash(h); }
    }

    /* ---- folding */
    function applyFold() {
        let cut = Infinity;
        for (const ch of content.children) {
            const m = /^H([1-6])$/.exec(ch.tagName);
            if (m) {
                const lvl = +m[1];
                if (lvl <= cut) cut = Infinity;
                ch.classList.toggle('gn-folded', cut !== Infinity);
                if (cut === Infinity && ch.classList.contains('is-collapsed')) cut = lvl;
            } else ch.classList.toggle('gn-folded', cut !== Infinity);
        }
    }
    function enableFolding() {
        if (!GN.settings.get('foldHeadings')) return;
        for (const h of content.children) {
            if (!/^H[1-6]$/.test(h.tagName)) continue;
            h.classList.add('gn-foldable');
            h.prepend(el('span', { cls: 'gn-fold', attrs: { role: 'button', 'aria-label': 'Fold section', title: 'Fold / unfold' } }, GS.icon('chevronDown', 14)));
        }
    }

    /* ---- clicks inside the article (internal links are handled globally in app.js) */
    function onArticleClick(e) {
        const fold = e.target.closest('.gn-fold');
        if (fold) { e.preventDefault(); const h = fold.parentElement; h.classList.toggle('is-collapsed'); applyFold(); return; }
        const fn = e.target.closest('a[data-fn]');
        if (fn) { e.preventDefault(); const t = content.querySelector('[id="gn-fn-' + fn.dataset.fn.replace(/"/g, '') + '"]'); if (t) { scrollToEl(t); flash(t); } return; }
        const an = e.target.closest('a[data-anchor]');
        if (an) { e.preventDefault(); const a = an.dataset.anchor; if (!scrollToFragment(a)) { const t = content.querySelector('[id="' + a.replace(/"/g, '') + '"]'); if (t) { scrollToEl(t); flash(t); } } return; }
        const img = e.target.closest('.gn-content img');
        if (img && !img.closest('a')) lightbox(img.currentSrc || img.src, img.alt);
    }
    function lightbox(src, alt) {
        const close = () => { ov.remove(); document.removeEventListener('keydown', key, true); };
        const key = e => { if (e.key === 'Escape') close(); };
        const ov = el('div', { cls: 'gn-lightbox', on: { click: close } }, el('img', { src, alt: alt || '' }));
        document.body.append(ov); document.addEventListener('keydown', key, true);
    }

    /* ---- header bits */
    function renderCrumb(note) {
        GS.clear(crumb);
        const segs = note.folder ? note.folder.split('/') : []; let acc = '';
        segs.forEach(s => {
            acc = acc ? acc + '/' + s : s; const p = acc;
            crumb.append(el('button', { cls: 'gn-crumb-seg', text: s, attrs: { type: 'button', title: 'Show folder in the file list' }, on: { click: () => { GN.explorer.revealFolder(p); GN.app.openLeft(); } } }), el('span', { cls: 'gn-crumb-sep', text: '/' }));
        });
        crumb.append(el('span', { cls: 'gn-crumb-current', text: note.title }));
    }
    function renderProps(props, note) {
        GS.clear(propsEl);
        const mode = GN.settings.get('properties');
        if (mode === 'hide' || !props.length) { propsEl.hidden = true; return; }
        propsEl.hidden = false;
        const det = el('details', { cls: 'gn-props-box' }, el('summary', { text: 'Properties' }));
        if (mode === 'show') det.open = true;
        const ctx = { path: note.path };
        for (const [key, val] of props) {
            const v = el('div', { cls: 'gn-prop-val' });
            if (key.toLowerCase() === 'tags') {
                GN.markdown.toList(val).forEach(t => v.append(el('a', { cls: 'gn-tag', href: '#', text: '#' + t, dataset: { tag: t } })));
            } else if (Array.isArray(val)) {
                val.forEach(x => { const p = el('span', { cls: 'gn-pill' }); GN.markdown.renderInline(String(x), p, ctx); v.append(p); });
            } else if (/^https?:\/\//i.test(String(val))) {
                v.append(el('a', { href: val, text: val, target: '_blank', rel: 'noopener noreferrer', cls: 'external-link' }));
            } else GN.markdown.renderInline(String(val), v, ctx);
            det.append(el('div', { cls: 'gn-prop' }, el('div', { cls: 'gn-prop-key', text: key }), v));
        }
        propsEl.append(det);
    }

    /* ---- opening notes */
    function setPage(note) {
        titleEl.textContent = note ? note.title : '';
        titleEl.hidden = !note || !GN.settings.get('inlineTitle');
    }
    function swapContent(node) { content.replaceWith(node); content = node; }

    async function open(path, opts) {
        opts = opts || {};
        const note = GN.index.byPath(path);
        if (!note) { showMissing(path); return; }
        const my = ++token;
        if (current && current !== note.path && !opts.keepScroll) scrollMem.set(current, scroll.scrollTop);
        const keepTop = opts.keepScroll ? scroll.scrollTop : null;
        article.classList.add('is-loading');
        let raw;
        try { raw = await GN.loader.text(note.path); }
        catch (e) { if (my === token) showError(note, e); return; }
        if (my !== token) return;

        const fm = GN.markdown.parseFrontmatter(raw);
        const fresh = el('div', { cls: 'gn-content markdown-rendered' });
        for (const [k, v] of fm.props) {
            if (/^cssclass(es)?$/i.test(k)) GN.markdown.toList(v).forEach(c => { if (/^[\w-]+$/.test(c)) fresh.classList.add(c); });
        }
        try { await GN.markdown.render(fm.body, fresh, { path: note.path, depth: 0, seen: [note.path], typeset: false }); }
        catch (e) { console.error(e); fresh.textContent = 'Could not render this note: ' + e.message; }
        if (my !== token) return;

        swapContent(fresh);
        current = note.path;
        setPage(note); renderCrumb(note); renderProps(fm.props, note);
        const headings = headingEls().map(h => ({ level: +h.tagName[1], text: GN.markdown.headingText(h), id: h.id }));
        enableFolding();
        GN.markdown.finish(content);
        GN.panels.update(note, headings);
        GN.explorer.setActive(note.path); GN.explorer.reveal(note.path);

        GS.clear(docBl);
        docBl.hidden = true;
        if (GN.settings.get('backlinksInDoc')) docBl.hidden = !GN.panels.renderBacklinksInto(docBl, note.path);

        const words = fm.body.replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean).length;
        status.textContent = `${GN.index.backlinks(note.path).length} backlinks \u00B7 ${words.toLocaleString()} words`;
        document.title = note.title + ' \u00B7 GATE Vault Notes';
        if (!note.hidden) GN.index.pushRecent(note.path);

        article.classList.remove('is-loading');
        if (keepTop !== null) scroll.scrollTop = keepTop;
        else if (opts.frag && scrollToFragment(opts.frag, false)) { /* done */ }
        else if (opts.nav === 'back' || opts.nav === 'forward') scroll.scrollTop = scrollMem.get(note.path) || 0;
        else scroll.scrollTop = 0;
        spy();
    }

    function blankPage(title, crumbText) {
        token++; current = null;
        swapContent(el('div', { cls: 'gn-content markdown-rendered' }));
        propsEl.hidden = true; docBl.hidden = true; GS.clear(docBl);
        titleEl.textContent = title; titleEl.hidden = false;
        GS.clear(crumb); crumb.append(el('span', { cls: 'gn-crumb-current', text: crumbText || '' }));
        GN.panels.clear(); GN.explorer.setActive('');
        status.textContent = ''; scroll.scrollTop = 0; article.classList.remove('is-loading');
    }
    function showMissing(path) {
        blankPage('Note not found', path.replace(/\.md$/i, ''));
        const name = GN.index.basename(path).replace(/\.md$/i, '');
        content.append(el('p', { text: `There is no note at "${path.replace(/\.md$/i, '')}". It may have been renamed or removed, or the notes index may be out of date.` }));
        const sugg = GN.index.quick(name, 5);
        if (sugg.length) {
            content.append(el('p', { text: 'Did you mean:' }));
            const ul = el('ul'); sugg.forEach(s => ul.append(el('li', {}, el('a', { href: GN.router.href(s.note.path), cls: 'internal-link', dataset: { path: s.note.path, frag: '' }, text: s.note.title }))));
            content.append(ul);
        }
        document.title = 'Note not found \u00B7 GATE Vault Notes';
    }
    function showError(note, e) {
        blankPage(note.title, note.path);
        content.append(el('p', { text: 'This note could not be downloaded.' }), el('p', { cls: 'gn-sub', text: e.message }),
            el('button', { cls: 'gate-btn', text: 'Try again', attrs: { type: 'button' }, on: { click: () => { GN.loader.clear(); open(note.path); } } }));
    }

    function showHome() {
        blankPage('GATE Vault Notes', 'Home');
        const st = GN.index.state;
        const folders = new Set(st.visible.map(n => n.folder).filter(Boolean)).size;
        content.append(
            el('p', { cls: 'gn-lead', text: 'A read-only reader for your Obsidian notes. Links, embeds, equations, callouts and tags work the way they do in Obsidian.' }),
            el('div', { cls: 'gn-stats' },
                stat(st.visible.length, 'notes'), stat(folders, 'folders'), stat(GN.index.tags.size, 'tags')),
            el('div', { cls: 'gn-home-actions' },
                el('button', { cls: 'gate-btn primary', text: 'Open a note\u2026', attrs: { type: 'button' }, on: { click: () => GN.search.open('quick') } }),
                el('button', { cls: 'gate-btn', text: 'Search note text', attrs: { type: 'button' }, on: { click: () => GN.search.open('full') } })),
            el('p', { cls: 'gn-sub', text: 'Shortcuts: Ctrl/Cmd+O open a note \u00B7 Ctrl/Cmd+Shift+F search text \u00B7 Alt+\u2190 / Alt+\u2192 back and forward.' }));
        const rec = GN.index.recent().filter(n => !n.hidden).slice(0, 8);
        if (rec.length) content.append(list('Recently opened', rec));
        const mod = st.visible.filter(n => n.mtime).slice().sort((a, b) => b.mtime - a.mtime).slice(0, 8);
        if (mod.length) content.append(list('Recently modified', mod));
        document.title = 'Notes \u00B7 GATE Vault';
    }
    function stat(n, label) { return el('div', { cls: 'gn-stat' }, el('div', { cls: 'gn-stat-n', text: String(n) }), el('div', { cls: 'gn-stat-l', text: label })); }
    function list(title, notes) {
        const ul = el('ul', { cls: 'gn-home-list' });
        notes.forEach(n => ul.append(el('li', {}, el('a', { href: GN.router.href(n.path), cls: 'internal-link', dataset: { path: n.path, frag: '' }, text: n.title }), n.folder ? el('span', { cls: 'gn-sub', text: ' ' + n.folder }) : null)));
        return el('div', { cls: 'gn-home-block' }, el('h3', { text: title }), ul);
    }

    GN.reader = {
        init, open, showHome, scrollToFragment, scrollToHeadingId, lightbox,
        reload() { if (current) open(current, { keepScroll: true }); },
        get current() { return current; },
        get content() { return content; }
    };
})(window);
