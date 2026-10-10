/* GateNotes.settingsUI - the Settings window for the notes reader (gear button in the top bar). */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared, el = GS.el;
    const S = () => GN.settings;
    let modal = null;

    function section(body, title, desc) {
        body.append(el('div', { cls: 'gn-set-head' }, el('h3', { text: title }), desc ? el('div', { cls: 'gn-sub', text: desc }) : null));
        return el('div', { cls: 'gn-set-rows' });
    }

    function showMissing(miss) {
        const m = GS.ui.modal({ title: 'Unmatched images and files', width: '640px', restoreFocus: false });
        if (!miss.length) { m.body.append(el('p', { text: 'Every image and file referenced by your notes was found in the index.' })); return; }
        m.body.append(el('p', { cls: 'gn-sub', text: 'These are referenced in a note but no file with that name exists in the repository (or it is in a folder that is excluded/hidden by the builder).' }));
        const ul = el('ul', { cls: 'gn-missing-list' });
        miss.forEach(x => ul.append(el('li', {}, el('strong', { text: x.ref }), el('div', { cls: 'gn-sub', text: 'in ' + x.note }))));
        m.body.append(ul);
    }

    function open() {
        if (modal) return;
        const m = GS.ui.modal({ title: 'Notes settings', width: '680px', cls: 'gn-settings-modal', onClose: () => { modal = null; } });
        modal = m;
        const S_ = S();
        const body = m.body;
        const add = rows => body.append(rows);
        const row = rows => new GS.ui.Setting(rows);

        // ---- Appearance
        let rows = section(body, 'Appearance', 'Theme is shared with the simulator.');
        const themeRow = row(rows).name('Theme').desc('System follows your device and switches automatically.');
        themeRow.settingEl.classList.add('is-stacked');
        const grid = el('div', { cls: 'gate-theme-grid' });
        GS.theme.THEMES.forEach(t => {
            const card = el('button', { cls: 'gate-theme-card', dataset: { themeId: t.id }, attrs: { type: 'button' }, on: { click: () => GS.theme.apply(t.id) } },
                GS.theme.makePreview(t), el('span', { cls: 'name', text: t.name }), el('span', { cls: 'desc', text: t.desc }));
            grid.append(card);
        });
        themeRow.settingEl.append(grid);
        GS.theme.apply(GS.theme.getPref(), false);
        row(rows).name('Accent color').desc('Leave on the theme default, or pick your own.')
            .color(S_.get('accentColor'), v => S_.set('accentColor', v))
            .button('Reset', () => { S_.set('accentColor', ''); GS.ui.notice('Accent reset - reopen settings to see the picker update.'); });
        add(rows);

        // ---- Reading
        rows = section(body, 'Reading', 'How note text looks.');
        row(rows).name('Font').desc('Web fonts load on demand.')
            .select(S_.fonts.map(f => [f.id, f.label]), S_.get('readFont'), v => { S_.set('readFont', v); custom.settingEl.hidden = v !== 'custom'; });
        const custom = row(rows).name('Custom font name').desc('Any font installed on your device or available on Google Fonts.')
            .text(S_.get('readCustomFont'), v => S_.set('readCustomFont', v), 'e.g. Crimson Pro');
        custom.settingEl.hidden = S_.get('readFont') !== 'custom';
        row(rows).name('Font size').slider(13, 26, 1, S_.get('readFontSize'), v => S_.set('readFontSize', v));
        row(rows).name('Line height').slider(1.3, 2.1, 0.05, S_.get('readLineHeight'), v => S_.set('readLineHeight', v));
        row(rows).name('Readable line length').desc('Limit the text width, like Obsidian. Turn off to use the full pane.')
            .toggle(S_.get('readableWidth'), v => S_.set('readableWidth', v));
        row(rows).name('Maximum width').desc('Only used when readable line length is on.')
            .slider(520, 1100, 20, S_.get('maxWidth'), v => S_.set('maxWidth', v));
        add(rows);

        // ---- Notes
        rows = section(body, 'Notes', 'What shows up around a note.');
        row(rows).name('Properties').desc('The front-matter block at the top of a note.')
            .select([['show', 'Show open'], ['collapsed', 'Show collapsed'], ['hide', 'Hide']], S_.get('properties'), v => S_.set('properties', v));
        row(rows).name('Show note title').desc('Large title above the text, like Obsidian\u2019s inline title.')
            .toggle(S_.get('inlineTitle'), v => S_.set('inlineTitle', v));
        row(rows).name('Fold headings').desc('Hover a heading and click the arrow to fold its section.')
            .toggle(S_.get('foldHeadings'), v => S_.set('foldHeadings', v));
        row(rows).name('Link previews').desc('Hover a link to peek at the note (mouse devices).')
            .toggle(S_.get('hoverPreview'), v => S_.set('hoverPreview', v));
        row(rows).name('Backlinks under the note').desc('Also list linked mentions at the bottom of each note.')
            .toggle(S_.get('backlinksInDoc'), v => S_.set('backlinksInDoc', v));
        row(rows).name('Reopen last note').desc('Start where you stopped when you open /notes without a link.')
            .toggle(S_.get('openLast'), v => S_.set('openLast', v));
        add(rows);

        // ---- Data
        rows = section(body, 'Notes data', 'Where the list of notes comes from.');
        const meta = GN.index.meta;
        const when = meta.generated ? new Date(meta.generated).toLocaleString() : 'unknown';
        row(rows).name('Notes list').desc(`${GN.index.visible.length} notes \u00B7 index built ${when}`)
            .button('Reload', async () => { await GN.app.reloadIndex(); GS.ui.notice('Notes list reloaded.'); m.close(); });
        const miss = GN.index.state.missing || [];
        row(rows).name('Images and files').desc(`${GN.index.state.files.length} files indexed \u00B7 ${miss.length} reference${miss.length === 1 ? '' : 's'} in notes could not be matched to a file`)
            .button('Show list', () => showMissing(miss));
        row(rows).name('Downloaded notes').desc('Notes are cached while this page is open. Clear to fetch fresh copies.')
            .button('Clear cache', () => { GN.loader.clear(); GN.reader.reload(); GS.ui.notice('Cache cleared.'); });
        row(rows).name('Reset notes settings').desc('Puts every option on this page (and sidebar sizes) back to its default.')
            .button('Reset', () => { S_.reset(); GS.ui.notice('Notes settings reset.'); m.close(); }, { warn: true });
        add(rows);
    }

    GN.settingsUI = { open, get isOpen() { return !!modal; } };
})(window);
