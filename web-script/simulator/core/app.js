/* GateSim.app - starts the simulator page: loads the plugins, shows the tabs (views) that plugins registered and
   follows the address bar (#/<view-id>). Knows nothing about individual features: with every plugin switched off the
   page still opens and Settings still works. */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    const GS = g.GateShared, el = GS.el;
    const $ = id => document.getElementById(id);
    let current = null;             // { id, cleanup }
    let mainEl = null;

    function card(title, ...kids) { return el('div', { cls: 'gn-card' }, el('h2', { text: title }), ...kids); }
    const hashId = () => { const m = /^#\/([^/?]+)/.exec(location.hash); try { return m ? decodeURIComponent(m[1]) : ''; } catch (e) { return m ? m[1] : ''; } };

    function renderNav() {
        const host = $('gs-views'); if (!host) return;
        GS.clear(host);
        const list = GSim.slots.views.list();
        list.forEach(v => host.append(el('a', { cls: 'nav-btn' + (current && current.id === v.id ? ' active' : ''), href: '#/' + encodeURIComponent(v.id), text: v.title, dataset: { view: v.id } })));
        host.hidden = list.length < 2;
    }
    function renderTopbar() {
        const host = $('gs-topbar-slot'); if (!host) return;
        GS.clear(host);
        GSim.slots.topbar.list().forEach(it => host.append(
            el('button', { cls: 'gn-icon-btn', attrs: { type: 'button', 'aria-label': it.title, title: it.title }, dataset: { slot: it.id }, on: { click: () => it.onClick && it.onClick() } }, GS.icon(it.icon || 'menu'))));
    }

    function empty() {
        GS.clear(mainEl);
        const on = GSim.plugins.list().filter(p => p.running).length;
        mainEl.append(card('Nothing to show yet',
            el('p', { cls: 'gn-sub', text: on ? 'No feature added a page here.' : 'Every feature is switched off. Open Settings \u2192 Core plugins to turn some on.' }),
            el('button', { cls: 'gate-btn primary', text: 'Open settings', attrs: { type: 'button' }, on: { click: () => GSim.settingsUI.open('core-plugins') } })));
    }

    function show(id) {
        const views = GSim.slots.views.list();
        if (current) { try { if (typeof current.cleanup === 'function') current.cleanup(); } catch (e) { console.error(e); } current = null; }
        GS.clear(mainEl);
        const v = views.find(x => x.id === id) || views[0];
        if (!v) { renderNav(); empty(); return; }
        current = { id: v.id, cleanup: null };
        const box = el('div', { cls: 'gs-view', dataset: { view: v.id } });
        mainEl.append(box);
        try { const r = v.mount(box, { go: GSim.app.go }); Promise.resolve(r).then(c => { if (current && current.id === v.id) current.cleanup = c; }).catch(e => failView(box, e)); }
        catch (e) { failView(box, e); }
        GSim.settings.set('lastView', v.id);
        renderNav();
        GSim.events.emit('view:changed', v.id);
    }
    function failView(box, e) {
        console.error(e);
        GS.clear(box);
        box.append(card('This page failed to load', el('p', { cls: 'gn-sub', text: String((e && e.message) || e) }), el('p', { cls: 'gn-sub', text: 'You can switch the feature off in Settings \u2192 Core plugins.' })));
    }

    GSim.app = {
        go(id) { if (hashId() === id) show(id); else location.hash = '#/' + encodeURIComponent(id); },
        async start() {
            GSim.settings.apply();
            GS.theme.initMenu();
            mainEl = $('gs-main');
            $('gn-settings-btn').addEventListener('click', () => GSim.settingsUI.open());
            const prepared = GSim.plugins.prepare().catch(e => console.error('plugins:', e));
            await prepared;
            GSim.slots.views.onChange(() => { renderNav(); if (!current || !GSim.slots.views.list().some(v => v.id === current.id)) show(hashId() || GSim.settings.get('lastView')); });
            GSim.slots.topbar.onChange(renderTopbar); renderTopbar();
            if (GSim.plugins.isSafeMode) {
                $('gs-app').before(el('div', { cls: 'gn-safe-bar' }, 'Safe mode: optional features are off. ', el('a', { href: location.pathname + location.hash, text: 'Leave safe mode' })));
            }
            await GSim.plugins.start();
            window.addEventListener('hashchange', () => show(hashId()));
            const want = hashId() || (GSim.settings.get('openLast') ? GSim.settings.get('lastView') : '');
            show(want);
        }
    };

    // started by boot.js once every core file has loaded
    GSim.app.run = function () {
        GSim.app.start().catch(err => {
            console.error(err);
            const m = $('gs-main');
            if (m) { GS.clear(m); m.append(card('Something went wrong', el('p', { cls: 'gn-sub', text: String((err && err.message) || err) }))); }
        });
    };
})(window);
