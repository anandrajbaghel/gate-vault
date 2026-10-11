/* GateNotes.reader - the reading pane: breadcrumb, title, rendered note, status bar, scrolling, home page.
   Read-only. Extra things around the note (properties, backlinks, word counts ...) come from the before / after /
   status slots, and features hear about every opened note through the 'note:opened' event. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared, el = GS.el;
    let head, crumb, scroll, article, titleEl, beforeEl, content, afterEl, status;
    let current = null, token = 0, lastCtx = null;
    const scrollMem = new Map();
    const nid = s => String(s).trim().toLowerCase().replace(/[\s._-]+/g, '');

    function init(container) {
        GS.clear(container);
        const mk = (id, label, icon, fn, tip) => el('button', { cls: 'gn-icon-btn', id, attrs: { type: 'button', 'aria-label': label, title: tip || label }, on: { click: fn } }, GS.icon(icon));
        crumb = el('nav', { cls: 'gn-crumb', attrs: { 'aria-label': 'Path' } });
        const hl = mk('gn-head-left', 'Files', 'panelLeft', () => GN.layout.toggleSide('left'), 'Left panel'); hl.classList.add('gn-head-toggle', 'gn-head-left');
        const hr = mk('gn-head-right', 'Outline and links', 'list', () => GN.layout.toggleSide('right'), 'Right panel'); hr.classList.add('gn-head-toggle', 'gn-head-right');
        head = el('div', { cls: 'gn-pane-head' }, hl,
            mk('gn-back', 'Back', 'back', () => GN.router.back(), 'Back (Alt+Left)'), mk('gn-forward', 'Forward', 'forward', () => GN.router.forward(), 'Forward (Alt+Right)'), crumb, hr);
        titleEl = el('h1', { cls: 'gn-inline-title' });
        beforeEl = el('div', { cls: 'gn-article-before' });
        content = el('div', { cls: 'gn-content markdown-rendered' });
        afterEl = el('div', { cls: 'gn-article-after' });
        article = el('article', { cls: 'gn-article' }, titleEl, beforeEl, content, afterEl);
        scroll = el('div', { cls: 'gn-scroll', id: 'gn-scroll' }, article);
        status = el('div', { cls: 'gn-statusbar' });
        container.append(head, scroll, status);
        scroll.addEventListener('scroll', GS.rafThrottle(spy), { passive: true });
        article.addEventListener('click', onArticleClick);
        GN.slots.status.add({ id: 'words', order: 100, render: c => (c && c.words != null ? `${c.words.toLocaleString()} words` : null) });
        GN.slots.status.onChange(renderStatus);
    }

    /* ---- scrolling helpers (also used by features) */
    function scrollToEl(t, smooth) {
        if (!t) return;
        const top = t.getBoundingClientRect().top - scroll.getBoundingClientRect().top + scroll.scrollTop - 14;
        scroll.scrollTo({ top: Math.max(0, top), behavior: smooth === false ? 'auto' : 'smooth' });
    }
    function flash(t) { if (!t) return; t.classList.add('gn-flash'); setTimeout(() => t.classList.remove('gn-flash'), 1500); }
    function headingEls() { return [...content.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(h => !h.closest('.gn-embed, .gn-callout')); }
    function spy() {
        const hs = headingEls(); if (!hs.length) return;
        const base = scroll.getBoundingClientRect().top + 60;
        let act = hs[0];
        for (const h of hs) { if (h.classList.contains('gn-folded')) continue; if (h.getBoundingClientRect().top <= base) act = h; else break; }
        GN.events.emit('heading:active', act.id);
    }
    function reveal(h) { GN.events.emit('heading:reveal', h); }      // lets a folding feature open the section first
    function scrollToFragment(frag, smooth) {
        if (!frag) return false;
        if (frag[0] === '^') {
            const want = nid(frag.slice(1));
            const span = [...content.querySelectorAll('.gn-blockid')].find(s => nid(s.dataset.bid) === want);
            if (!span) return false;
            let t = span.parentElement;
            if (t && t.tagName === 'P' && t.childNodes.length === 1 && t.previousElementSibling) t = t.previousElementSibling;
            reveal(t); scrollToEl(t, smooth); flash(t); return true;
        }
        const parts = frag.split('#');
        const want = GN.markdown.normHeading(parts[parts.length - 1]);
        const h = headingEls().find(x => GN.markdown.normHeading(GN.markdown.headingText(x)) === want);
        if (!h) return false;
        reveal(h); scrollToEl(h, smooth); flash(h); return true;
    }
    function scrollToHeadingId(id) {
        const h = content.querySelector('[id="' + String(id).replace(/"/g, '\\"') + '"]');
        if (h) { reveal(h); scrollToEl(h); flash(h); }
    }

    /* ---- clicks inside the article (internal links are handled globally in app.js) */
    function onArticleClick(e) {
        const fn = e.target.closest('a[data-fn]');
        if (fn) { e.preventDefault(); const t = content.querySelector('[id="gn-fn-' + fn.dataset.fn.replace(/"/g, '') + '"]'); if (t) { scrollToEl(t); flash(t); } return; }
        const an = e.target.closest('a[data-anchor]');
        if (an) { e.preventDefault(); const a = an.dataset.anchor; if (!scrollToFragment(a)) { const t = content.querySelector('[id="' + a.replace(/"/g, '') + '"]'); if (t) { scrollToEl(t); flash(t); } } }
    }

    /* ---- header bits */
    function renderCrumb(note) {
        GS.clear(crumb);
        const segs = note.folder ? note.folder.split('/') : []; let acc = '';
        const clickable = GN.events.has('folder:reveal');
        segs.forEach(s => {
            acc = acc ? acc + '/' + s : s; const p = acc;
            crumb.append(clickable
                ? el('button', { cls: 'gn-crumb-seg', text: s, attrs: { type: 'button', title: 'Show folder in the file list' }, on: { click: () => GN.events.emit('folder:reveal', p) } })
                : el('span', { cls: 'gn-crumb-seg is-static', text: s }), el('span', { cls: 'gn-crumb-sep', text: '/' }));
        });
        crumb.append(el('span', { cls: 'gn-crumb-current', text: note.title }));
    }
    function setTitle(text, show) { titleEl.textContent = text || ''; titleEl.hidden = !show; }

    function fillRegion(region, slot, ctx) {
        GS.clear(region);
        for (const item of slot.list()) {
            let node = null;
            try { node = item.render(ctx); } catch (e) { console.error('[slot ' + item.id + ']', e); }
            if (node) region.append(node);
        }
        region.hidden = !region.childNodes.length;
    }
    function renderStatus() {
        const parts = [];
        for (const item of GN.slots.status.list()) {
            let t = null;
            try { t = item.render(lastCtx); } catch (e) { console.error('[status ' + item.id + ']', e); }
            if (t) parts.push(t);
        }
        status.textContent = lastCtx ? parts.join(' \u00B7 ') : '';
    }
    function swapContent(node) { content.replaceWith(node); content = node; }

    /* ---- opening notes */
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
        setTitle(note.title, GN.settings.get('inlineTitle'));
        renderCrumb(note);
        const headings = headingEls().map(h => ({ level: +h.tagName[1], text: GN.markdown.headingText(h), id: h.id }));
        const words = fm.body.replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean).length;
        lastCtx = { path: note.path, note, props: fm.props, body: fm.body, headings, words, content, nav: opts.nav || '' };
        fillRegion(beforeEl, GN.slots.before, lastCtx);
        fillRegion(afterEl, GN.slots.after, lastCtx);
        renderStatus();
        GN.markdown.finish(content);
        GN.events.emit('note:opened', lastCtx);
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
        token++; current = null; lastCtx = null;
        swapContent(el('div', { cls: 'gn-content markdown-rendered' }));
        GS.clear(beforeEl); beforeEl.hidden = true; GS.clear(afterEl); afterEl.hidden = true;
        setTitle(title, true);
        GS.clear(crumb); crumb.append(el('span', { cls: 'gn-crumb-current', text: crumbText || '' }));
        status.textContent = ''; scroll.scrollTop = 0; article.classList.remove('is-loading');
        GN.events.emit('note:closed');
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
        const actions = el('div', { cls: 'gn-home-actions' });
        if (GN.commands.has('quick-switcher:open')) actions.append(el('button', { cls: 'gate-btn primary', text: 'Open a note\u2026', attrs: { type: 'button' }, on: { click: () => GN.commands.run('quick-switcher:open') } }));
        if (GN.commands.has('search:open')) actions.append(el('button', { cls: 'gate-btn', text: 'Search note text', attrs: { type: 'button' }, on: { click: () => GN.commands.run('search:open') } }));
        const tips = [];
        if (GN.commands.has('quick-switcher:open')) tips.push('Ctrl/Cmd+O open a note');
        if (GN.commands.has('search:open')) tips.push('Ctrl/Cmd+Shift+F search text');
        tips.push('Alt+\u2190 / Alt+\u2192 back and forward');
        content.append(
            el('p', { cls: 'gn-lead', text: 'A read-only reader for your Obsidian notes. Links, embeds, equations and more work the way they do in Obsidian.' }),
            el('div', { cls: 'gn-stats' }, stat(st.visible.length, 'notes'), stat(folders, 'folders'), stat(GN.index.tags.size, 'tags')),
            actions,
            el('p', { cls: 'gn-sub', text: 'Shortcuts: ' + tips.join(' \u00B7 ') + '.' }));
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
        init, open, showHome, scrollToFragment, scrollToHeadingId,
        reload() { if (current) open(current, { keepScroll: true }); },
        refreshStatus: renderStatus,
        get current() { return current; },
        get context() { return lastCtx; },
        get content() { return content; },
        get article() { return article; },
        get scrollEl() { return scroll; }
    };
})(window);
