/* GateNotes.app - boots the reader: loads the index, wires the modules together, handles layout and shortcuts. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared, el = GS.el;
    const $ = id => document.getElementById(id);
    let appEl, left, right, main;

    const mq = g.matchMedia ? g.matchMedia('(max-width: 900px)') : { matches: false };
    const isMobile = () => mq.matches;

    function errorCard(code, message) {
        const steps = code === 'NO_INDEX'
            ? [el('p', { text: 'The notes list (notes-index.json) was not found in the repository.' }),
               el('p', {}, 'Create it by running ', el('code', { text: 'node web-script/tools/build-notes-index.mjs' }), ' from the repository root, then commit and push notes-index.json and notes-search.json.')]
            : [el('p', { text: 'The notes list could not be downloaded. Check your connection and try again.' }), el('p', { cls: 'gn-sub', text: message })];
        return el('div', { cls: 'gn-card' }, el('h2', { text: 'Notes are not available yet' }), ...steps,
            el('button', { cls: 'gate-btn primary', text: 'Try again', attrs: { type: 'button' }, on: { click: () => location.reload() } }));
    }

    /* ---- sidebars */
    function openLeft() { if (isMobile()) { appEl.classList.remove('gn-right-open'); appEl.classList.add('gn-left-open'); } else { appEl.classList.remove('gn-hide-left'); GN.settings.set('leftOpen', true); } }
    function closeDrawers() { appEl.classList.remove('gn-left-open', 'gn-right-open'); }
    function toggle(side) {
        const cls = side === 'left' ? 'gn-left-open' : 'gn-right-open', other = side === 'left' ? 'gn-right-open' : 'gn-left-open';
        if (isMobile()) { appEl.classList.remove(other); appEl.classList.toggle(cls); return; }
        const hide = appEl.classList.toggle(side === 'left' ? 'gn-hide-left' : 'gn-hide-right');
        GN.settings.set(side === 'left' ? 'leftOpen' : 'rightOpen', !hide);
    }
    function initResizer(handle, side) {
        handle.addEventListener('pointerdown', e => {
            e.preventDefault(); handle.setPointerCapture(e.pointerId); handle.classList.add('is-dragging');
            const startX = e.clientX, startW = (side === 'left' ? left : right).offsetWidth;
            const move = ev => {
                const dx = ev.clientX - startX, w = Math.max(200, Math.min(520, side === 'left' ? startW + dx : startW - dx));
                document.documentElement.style.setProperty(side === 'left' ? '--gn-left-w' : '--gn-right-w', w + 'px');
            };
            const up = () => {
                handle.classList.remove('is-dragging'); handle.removeEventListener('pointermove', move); handle.removeEventListener('pointerup', up);
                GN.settings.set(side === 'left' ? 'leftWidth' : 'rightWidth', (side === 'left' ? left : right).offsetWidth);
            };
            handle.addEventListener('pointermove', move); handle.addEventListener('pointerup', up);
        });
    }

    /* ---- routing */
    function onRoute(route, nav) {
        if (GN.preview) GN.preview.hide();
        if (!route.path) { GN.reader.showHome(); return; }
        if (route.path === GN.reader.current && nav !== 'initial') {
            if (route.frag) GN.reader.scrollToFragment(route.frag);
            else document.getElementById('gn-scroll').scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        GN.reader.open(route.path, { frag: route.frag, nav });
        if (GN.index.byPath(route.path) && !GN.index.byPath(route.path).hidden) GN.settings.set('lastNote', route.path);
    }

    /* ---- global clicks (links inside notes, sidebars, previews) */
    function onClick(e) {
        if (e.defaultPrevented) return;
        const tag = e.target.closest('a.gn-tag[data-tag]');
        if (tag) { e.preventDefault(); if (GN.preview) GN.preview.hide(); openLeft(); GN.explorer.showTag(tag.dataset.tag); return; }
        const a = e.target.closest('a[data-path]');
        if (a) {
            if (e.ctrlKey || e.metaKey || e.shiftKey) return;       // let the browser open the #/ link in a new tab
            e.preventDefault();
            GN.router.go(a.dataset.path, a.dataset.frag || '');
            if (isMobile()) closeDrawers();
            return;
        }
        const o = e.target.closest('a.gn-outline-item');
        if (o) { e.preventDefault(); GN.reader.scrollToHeadingId(o.dataset.hid); if (isMobile()) closeDrawers(); return; }
        if (e.target.closest('a.internal-link.is-unresolved')) e.preventDefault();
    }

    function onKey(e) {
        const mod = e.ctrlKey || e.metaKey, k = e.key.toLowerCase();
        if (!mod) return;
        if ((k === 'o' || k === 'k') && !e.shiftKey) { e.preventDefault(); GN.search.open('quick'); }
        else if (k === 'f' && e.shiftKey) { e.preventDefault(); GN.search.open('full'); }
        else if (k === ',') { e.preventDefault(); GN.settingsUI.open(); }
    }

    async function loadIndexAndRender() {
        await GN.index.load();
        GN.explorer.render();
    }

    GN.app = {
        isMobile, openLeft, closeDrawers, toggle,
        async reloadIndex() {
            GN.loader.clear();
            await loadIndexAndRender();
            if (GN.reader.current) GN.reader.reload(); else GN.reader.showHome();
        },
        async start() {
            GN.settings.apply();
            GS.theme.initMenu();
            appEl = $('gn-app'); left = $('gn-left'); right = $('gn-right'); main = $('gn-main');

            $('gn-toggle-left').addEventListener('click', () => toggle('left'));
            $('gn-toggle-right').addEventListener('click', () => toggle('right'));
            $('gn-search-btn').addEventListener('click', () => GN.search.open('quick'));
            $('gn-settings-btn').addEventListener('click', () => GN.settingsUI.open());
            $('gn-backdrop').addEventListener('click', closeDrawers);
            initResizer($('gn-resize-left'), 'left'); initResizer($('gn-resize-right'), 'right');
            if (!GN.settings.get('leftOpen')) appEl.classList.add('gn-hide-left');
            if (!GN.settings.get('rightOpen')) appEl.classList.add('gn-hide-right');
            document.addEventListener('click', onClick);
            document.addEventListener('keydown', onKey);
            GN.settings.on(k => { if (['properties', 'inlineTitle', 'foldHeadings', 'backlinksInDoc', '*'].includes(k)) GN.reader.reload(); });

            try { await GN.index.load(); }
            catch (e) { GS.clear(main); main.append(errorCard(e.code, e.message)); return; }

            if (GN.callouts) await GN.callouts.loadCustom();
            GN.explorer.init(left); GN.panels.init(right); GN.reader.init(main);
            GN.explorer.render();
            GN.preview.init();
            appEl.classList.add('gn-ready');

            if (!/^#\/./.test(location.hash) && GN.settings.get('openLast')) {
                const last = GN.settings.get('lastNote');
                if (last && GN.index.byPath(last)) history.replaceState(null, '', GN.router.href(last));
            }
            GN.router.start(onRoute);
        }
    };

    GN.app.start().catch(err => {
        console.error(err);
        const m = document.getElementById('gn-main');
        if (m) { GS.clear(m); m.append(el('div', { cls: 'gn-card' }, el('h2', { text: 'Something went wrong' }), el('p', { cls: 'gn-sub', text: String(err && err.message || err) }))); }
    });
})(window);
