/* GateNotes.settingsUI - the Settings window: one tab per set of settings (General, Appearance, Reading, Core plugins,
   Notes data) plus one tab for every running plugin that has options. Features add their own tab with
   registerTab({ id, title, group: 'options' | 'plugins', order, render(container) }).
   Plugins whose manifest lists `settings` get a tab automatically (renderSchema builds the controls). */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared, el = GS.el;
    const tabs = [];
    let modal = null, ui = null;

    function registerTab(def) {
        const t = Object.assign({ group: 'options', order: 100 }, def);
        tabs.push(t);
        tabs.sort((a, b) => a.order - b.order);
        if (ui) ui.renderNav();
        return () => {
            const i = tabs.indexOf(t); if (i >= 0) tabs.splice(i, 1);
            if (ui) { ui.renderNav(); if (ui.current === t.id) ui.show(tabs[0].id); }
        };
    }

    /** Build controls from a manifest "settings" list: [{ key, type: toggle|select|slider|text, name, desc, default, options, min, max, step }] */
    function renderSchema(container, schema, api) {
        if (!schema.length) { container.append(el('p', { cls: 'gn-sub', text: 'This feature has no options.' })); return; }
        schema.forEach(f => {
            const row = new GS.ui.Setting(container).name(f.name || f.key).desc(f.desc || '');
            const v = api.get(f.key);
            if (f.type === 'toggle') row.toggle(v, x => api.set(f.key, x));
            else if (f.type === 'select') row.select(f.options || [], v, x => api.set(f.key, x));
            else if (f.type === 'slider') row.slider(f.min, f.max, f.step || 1, v, x => api.set(f.key, x));
            else if (f.type === 'text') row.text(v, x => api.set(f.key, x), f.placeholder);
        });
    }

    /* ------------------------------------------------------------------ core tabs */
    function sectionHead(c, title, desc) { c.append(el('div', { cls: 'gn-set-head' }, el('h3', { text: title }), desc ? el('div', { cls: 'gn-sub', text: desc }) : null)); }

    function tabGeneral(c) {
        const S = GN.settings, row = () => new GS.ui.Setting(c);
        if (GN.plugins.isSafeMode) {
            row().name('Safe mode is on').desc('All optional features are switched off for this visit. Nothing you changed is lost.')
                .button('Leave safe mode', () => { const u = new URL(location.href); u.searchParams.delete('safe'); location.href = u.toString(); }, { cta: true });
        }
        row().name('Reopen last note').desc('Start where you stopped when you open /notes without a link.')
            .toggle(S.get('openLast'), v => S.set('openLast', v));
        row().name('Reset everything').desc('Puts every setting, feature switch and sidebar size back to its default, then reloads.')
            .button('Reset', () => { if (g.confirm('Reset all notes settings on this device?')) { S.reset(); GN.plugins.resetAll(); location.reload(); } }, { warn: true });
    }

    function tabAppearance(c, api) {
        const S = GN.settings;
        const themeRow = new GS.ui.Setting(c).name('Theme').desc('System follows your device and switches automatically. Shared with the simulator.');
        themeRow.settingEl.classList.add('is-stacked');
        const grid = el('div', { cls: 'gate-theme-grid' });
        (GS.theme.list ? GS.theme.list() : GS.theme.THEMES).forEach(t => grid.append(el('button', { cls: 'gate-theme-card', dataset: { themeId: t.id }, attrs: { type: 'button' }, on: { click: () => GS.theme.apply(t.id) } },
            GS.theme.makePreview(t), el('span', { cls: 'name', text: (t.emoji ? t.emoji + ' ' : '') + t.name }), el('span', { cls: 'desc', text: t.desc }))));
        themeRow.settingEl.append(grid);
        GS.theme.apply(GS.theme.getPref(), false);
        new GS.ui.Setting(c).name('Accent color').desc('Leave on the theme default, or pick your own.')
            .color(S.get('accentColor'), v => S.set('accentColor', v))
            .button('Reset', () => { S.set('accentColor', ''); api.show('appearance'); });
    }

    function tabReading(c) {
        const S = GN.settings, row = () => new GS.ui.Setting(c);
        row().name('Font').desc('Web fonts load on demand.')
            .select(S.fonts.map(f => [f.id, f.label]), S.get('readFont'), v => { S.set('readFont', v); custom.settingEl.hidden = v !== 'custom'; });
        const custom = row().name('Custom font name').desc('Any font installed on your device or available on Google Fonts.')
            .text(S.get('readCustomFont'), v => S.set('readCustomFont', v), 'e.g. Crimson Pro');
        custom.settingEl.hidden = S.get('readFont') !== 'custom';
        row().name('Font size').slider(13, 26, 1, S.get('readFontSize'), v => S.set('readFontSize', v));
        row().name('Line height').slider(1.3, 2.1, 0.05, S.get('readLineHeight'), v => S.set('readLineHeight', v));
        row().name('Readable line length').desc('Limit the text width, like Obsidian. Turn off to use the full pane.')
            .toggle(S.get('readableWidth'), v => S.set('readableWidth', v));
        row().name('Maximum width').desc('Only used when readable line length is on.')
            .slider(520, 1100, 20, S.get('maxWidth'), v => S.set('maxWidth', v));
        row().name('Show note title').desc('Large title above the text, like Obsidian\u2019s inline title.')
            .toggle(S.get('inlineTitle'), v => S.set('inlineTitle', v));
    }

    function tabCorePlugins(c, api) {
        const safe = GN.plugins.isSafeMode;
        if (safe) c.append(el('div', { cls: 'gn-banner', text: 'Safe mode is on: switches are locked. Leave safe mode in General to change them.' }));
        const list = GN.plugins.list();
        if (!list.length) { c.append(el('p', { cls: 'gn-sub', text: 'No features were found. Check web-script/notes/plugins/plugins.json.' })); return; }
        const groups = [];
        list.forEach(p => { const g0 = p.manifest.group || 'Other'; if (!groups.includes(g0)) groups.push(g0); });
        groups.forEach(group => {
            sectionHead(c, group);
            list.filter(p => (p.manifest.group || 'Other') === group).forEach(p => {
                const row = new GS.ui.Setting(c).name(p.manifest.name).desc(p.manifest.description || '');
                if (p.error && !p.running) row.descEl.append(el('div', { cls: 'gn-plugin-error', text: 'Switched off after an error: ' + p.error }));
                const hasTab = p.running && tabs.some(t => t.id === 'plugin:' + p.id);
                if (hasTab) row.controlEl.append(el('button', { cls: 'gn-icon-btn', attrs: { type: 'button', 'aria-label': 'Options for ' + p.manifest.name, title: 'Options' }, on: { click: () => api.show('plugin:' + p.id) } }, GS.icon('sliders')));
                row.toggle(safe ? p.wanted : p.running, async on => {
                    if (on) await GN.plugins.enable(p.id); else GN.plugins.disable(p.id);
                    api.show('core-plugins');
                });
                if (safe) row.controlEl.querySelector('input').disabled = true;
            });
        });
    }

    function tabData(c) {
        const row = () => new GS.ui.Setting(c);
        const meta = GN.index.meta, miss = GN.index.state.missing || [];
        const when = meta.generated ? new Date(meta.generated).toLocaleString() : 'unknown';
        row().name('Notes list').desc(`${GN.index.visible.length} notes \u00B7 index built ${when}`)
            .button('Reload', async () => { await GN.app.reloadIndex(); GS.ui.notice('Notes list reloaded.'); });
        row().name('Images and files').desc(`${GN.index.state.files.length} files indexed \u00B7 ${miss.length} reference${miss.length === 1 ? '' : 's'} in notes could not be matched to a file`)
            .button('Show list', () => showMissing(miss));
        row().name('Downloaded notes').desc('Notes are cached while this page is open. Clear to fetch fresh copies.')
            .button('Clear cache', () => { GN.loader.clear(); GN.reader.reload(); GS.ui.notice('Cache cleared.'); });
    }

    function showMissing(miss) {
        const m = GS.ui.modal({ title: 'Unmatched images and files', width: '640px', restoreFocus: false });
        if (!miss.length) { m.body.append(el('p', { text: 'Every image and file referenced by your notes was found in the index.' })); return; }
        m.body.append(el('p', { cls: 'gn-sub', text: 'These are referenced in a note but no file with that name exists in the repository (or it is in a folder that is excluded/hidden by the builder).' }));
        const ul = el('ul', { cls: 'gn-missing-list' });
        miss.forEach(x => ul.append(el('li', {}, el('strong', { text: x.ref }), el('div', { cls: 'gn-sub', text: 'in ' + x.note }))));
        m.body.append(ul);
    }

    registerTab({ id: 'general', title: 'General', order: 10, render: tabGeneral });
    registerTab({ id: 'appearance', title: 'Appearance', order: 20, render: tabAppearance });
    registerTab({ id: 'reading', title: 'Reading', order: 30, render: tabReading });
    registerTab({ id: 'core-plugins', title: 'Core plugins', order: 40, render: tabCorePlugins });
    registerTab({ id: 'data', title: 'Notes data', order: 50, render: tabData });

    /* ------------------------------------------------------------------ window */
    function open(tabId) {
        if (modal) { if (tabId) ui.show(tabId); return; }
        const m = GS.ui.modal({ title: 'Settings', width: '900px', cls: 'gn-settings-modal', onClose: () => { modal = null; ui = null; } });
        modal = m;
        const layout = el('div', { cls: 'gn-set-layout' });
        const nav = el('nav', { cls: 'gn-set-nav', attrs: { 'aria-label': 'Settings sections' } });
        const backBtn = el('button', { cls: 'gn-icon-btn gn-set-back', attrs: { type: 'button', 'aria-label': 'Back to settings list' }, on: { click: () => layout.classList.remove('is-page') } }, GS.icon('back'));
        const pageTitle = el('h2', { cls: 'gn-set-title' });
        const pageDesc = el('div', { cls: 'gn-sub gn-set-desc' });
        const pageBody = el('div', { cls: 'gn-set-content' });
        const page = el('section', { cls: 'gn-set-page' }, el('div', { cls: 'gn-set-page-head' }, backBtn, el('div', {}, pageTitle, pageDesc)), pageBody);
        layout.append(nav, page);
        m.body.append(layout);

        const state = { current: null };
        const api = {
            get current() { return state.current; },
            show(id) {
                const t = tabs.find(x => x.id === id) || tabs[0];
                state.current = t.id;
                pageTitle.textContent = t.title; pageDesc.textContent = t.desc || '';
                GS.clear(pageBody);
                try { t.render(pageBody, api); } catch (e) { console.error('[settings tab ' + t.id + ']', e); pageBody.append(el('p', { text: 'This page failed to load.' })); }
                nav.querySelectorAll('.gn-set-nav-item').forEach(b => b.classList.toggle('is-active', b.dataset.tab === t.id));
                layout.classList.add('is-page');
                pageBody.scrollTop = 0;
            },
            renderNav() {
                GS.clear(nav);
                const groups = [['options', 'Options'], ['plugins', 'Plugin options']];
                groups.forEach(([key, label]) => {
                    const items = tabs.filter(t => t.group === key);
                    if (!items.length) return;
                    nav.append(el('div', { cls: 'gn-set-nav-group', text: label }));
                    items.forEach(t => nav.append(el('button', { cls: 'gn-set-nav-item' + (t.id === state.current ? ' is-active' : ''), text: t.title, attrs: { type: 'button' }, dataset: { tab: t.id }, on: { click: () => api.show(t.id) } })));
                });
            }
        };
        ui = api;
        api.renderNav();
        api.show(tabId || 'general');
        if (!tabId) layout.classList.remove('is-page');       // on phones start on the list; desktop always shows both
    }

    GN.settingsUI = { open, registerTab, renderSchema, get isOpen() { return !!modal; } };
    GN.commands.register({ id: 'settings:open', name: 'Open settings', hotkeys: ['Mod+,'], run: () => open() });
})(window);
