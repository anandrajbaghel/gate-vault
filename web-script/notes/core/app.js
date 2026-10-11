/* GateNotes.app - starts the reader: loads the notes list (instantly from the saved copy when there is one),
   loads and starts the plugins, then follows the address bar. Knows nothing about individual features. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared, el = GS.el;
    const $ = id => document.getElementById(id);

    function card(title, ...kids) { return el('div', { cls: 'gn-card' }, el('h2', { text: title }), ...kids); }
    function indexErrorCard(code, message) {
        const steps = code === 'NO_INDEX'
            ? [el('p', { text: 'The notes list (notes-index.json) was not found in the repository.' }),
               el('p', { text: 'It is created automatically by the "Build notes index" GitHub Action after you commit. Open the Actions tab to check that it ran.' })]
            : [el('p', { text: 'The notes list could not be downloaded. Check your connection and try again.' }), el('p', { cls: 'gn-sub', text: message })];
        return card('Notes are not available yet', ...steps, el('button', { cls: 'gate-btn primary', text: 'Try again', attrs: { type: 'button' }, on: { click: () => location.reload() } }));
    }

    // The notes list changed on the server while the page was open (or the saved copy was stale)
    function onIndexChanged() {
        GN.loader.clear();
        GN.events.emit('index:changed');
        const r = GN.router.parse(location.hash);
        if (GN.reader.current) GN.reader.reload();
        else if (r.path) GN.reader.open(r.path, { frag: r.frag, nav: 'reload' });
        else GN.reader.showHome();
    }

    function onRoute(route, nav) {
        if (!route.path) { GN.reader.showHome(); return; }
        if (route.path === GN.reader.current && nav !== 'initial') {
            if (route.frag) GN.reader.scrollToFragment(route.frag);
            else GN.reader.scrollEl.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        GN.reader.open(route.path, { frag: route.frag, nav });
        const n = GN.index.byPath(route.path);
        if (n && !n.hidden) GN.settings.set('lastNote', route.path);
    }

    // Links to notes work everywhere (note text, sidebars, previews, menus): anything carrying data-path
    function onClick(e) {
        if (e.defaultPrevented) return;
        const a = e.target.closest('a[data-path]');
        if (a) {
            if (e.ctrlKey || e.metaKey || e.shiftKey) return;           // let the browser open the #/ link in a new tab
            e.preventDefault();
            GN.router.go(a.dataset.path, a.dataset.frag || '');
            if (GN.layout.isMobile()) GN.layout.closeDrawers();
            return;
        }
        if (e.target.closest('a.internal-link.is-unresolved')) e.preventDefault();
    }

    GN.app = {
        isMobile: () => GN.layout.isMobile(),
        openLeft: () => GN.layout.openSide('left'),
        closeDrawers: () => GN.layout.closeDrawers(),
        toggle: side => GN.layout.toggleSide(side),
        async reloadIndex() {
            GN.loader.clear();
            await GN.index.refresh({ force: true });
            onIndexChanged();
        },
        async start() {
            GN.settings.apply();
            GS.theme.initMenu();
            const main = $('gn-main');
            $('gn-settings-btn').addEventListener('click', () => GN.settingsUI.open());
            document.addEventListener('click', onClick);
            GN.settings.on(k => { if (k === 'inlineTitle' || k === '*') GN.reader.reload(); });

            // Plugin files download while the notes list loads
            const prepared = GN.plugins.prepare().catch(e => console.error('plugins:', e));

            // Open instantly from the copy saved on this device; the live list is fetched quietly afterwards.
            let cached = false;
            try { cached = await GN.index.loadCached(); } catch (e) { cached = false; }
            if (!cached) {
                try { await GN.index.refresh(); }
                catch (e) { GS.clear(main); main.append(indexErrorCard(e.code, e.message)); return; }
            }
            await prepared;

            GN.layout.init();
            GN.reader.init(main);
            $('gn-app').classList.add('gn-ready');
            if (GN.plugins.isSafeMode) {
                const bar = el('div', { cls: 'gn-safe-bar' }, 'Safe mode: optional features are off. ',
                    el('a', { href: location.pathname + location.hash, text: 'Leave safe mode' }));
                $('gn-app').before(bar);
            }
            await GN.plugins.start();

            // features switched on/off from Settings: redraw the open note so text-level features appear/disappear
            let t = null;
            const redraw = () => { clearTimeout(t); t = setTimeout(() => GN.reader.reload(), 30); };
            GN.events.on('plugin:enabled', redraw); GN.events.on('plugin:disabled', redraw);

            if (!/^#\/./.test(location.hash) && GN.settings.get('openLast')) {
                const last = GN.settings.get('lastNote');
                if (last && GN.index.byPath(last)) history.replaceState(null, '', GN.router.href(last));
            }
            GN.router.start(onRoute);
            if (cached) GN.index.refresh().then(changed => { if (changed) onIndexChanged(); }).catch(() => { /* offline: keep the saved copy */ });
        }
    };

    // started by boot.js once every core file has loaded
    GN.app.run = function () {
        GN.app.start().catch(err => {
            console.error(err);
            const m = $('gn-main');
            if (m) { GS.clear(m); m.append(card('Something went wrong', el('p', { cls: 'gn-sub', text: String((err && err.message) || err) }))); }
        });
    };
})(window);
