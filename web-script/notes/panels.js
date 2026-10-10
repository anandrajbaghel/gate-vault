/* GateNotes.panels - right sidebar: Outline, Backlinks, Outgoing links. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared, el = GS.el;
    let box, tabsEl, panes = {}, state = { path: '', headings: [] };

    function noteItem(n, sub) {
        return el('a', { cls: 'gn-link-item', href: GN.router.href(n.path), dataset: { path: n.path, frag: '' }, title: n.path },
            el('span', { cls: 'gn-link-title', text: n.title }), sub !== false && n.folder ? el('span', { cls: 'gn-sub', text: n.folder }) : null);
    }
    function fill(pane, items, emptyMsg) {
        GS.clear(pane);
        if (!items.length) pane.append(el('div', { cls: 'gn-empty', text: emptyMsg }));
        else items.forEach(i => pane.append(i));
    }

    function setTab(name) {
        GN.settings.set('rightTab', name);
        tabsEl.querySelectorAll('.gn-tab').forEach(t => t.setAttribute('aria-selected', String(t.dataset.tab === name)));
        Object.entries(panes).forEach(([k, p]) => { p.hidden = k !== name; });
    }

    GN.panels = {
        init(container) {
            box = container; GS.clear(box);
            const defs = [['outline', 'Outline'], ['backlinks', 'Backlinks'], ['links', 'Links']];
            tabsEl = el('div', { cls: 'gn-tabs', attrs: { role: 'tablist' } }, ...defs.map(([id, label]) =>
                el('button', { cls: 'gn-tab', dataset: { tab: id }, attrs: { type: 'button', role: 'tab' }, on: { click: () => setTab(id) } }, el('span', { text: label }), el('span', { cls: 'gn-badge', hidden: true }))));
            defs.forEach(([id]) => { panes[id] = el('div', { cls: 'gn-pane gn-panel', id: 'gn-panel-' + id }); });
            box.append(tabsEl, panes.outline, panes.backlinks, panes.links);
            const t = GN.settings.get('rightTab');
            setTab(['outline', 'backlinks', 'links'].includes(t) ? t : 'outline');
            this.clear();
        },
        clear() {
            state = { path: '', headings: [] };
            fill(panes.outline, [], 'Open a note to see its headings.');
            fill(panes.backlinks, [], 'Open a note to see what links to it.');
            fill(panes.links, [], 'Open a note to see its links.');
            this.badges(0, 0);
        },
        badges(back, out) {
            const set = (tab, n) => { const b = tabsEl.querySelector(`[data-tab="${tab}"] .gn-badge`); b.hidden = !n; b.textContent = String(n); };
            set('backlinks', back); set('links', out);
        },
        update(note, headings) {
            state = { path: note.path, headings };
            const minLevel = headings.length ? Math.min(...headings.map(h => h.level)) : 1;
            fill(panes.outline, headings.map(h => el('a', { cls: 'gn-outline-item', href: '#', text: h.text, dataset: { hid: h.id }, style: `--l:${h.level - minLevel}`, title: h.text })), 'No headings in this note.');
            const back = GN.index.backlinks(note.path), out = GN.index.outgoing(note.path);
            fill(panes.backlinks, back.map(n => noteItem(n)), 'No other notes link here yet.');
            const outEls = out.map(n => noteItem(n));
            const unresolved = GN.index.visible.find(n => n.path === note.path);
            if (unresolved && unresolved.unresolved && unresolved.unresolved.length) {
                outEls.push(el('div', { cls: 'gn-section-label', text: 'Unresolved' }));
                unresolved.unresolved.forEach(u => outEls.push(el('div', { cls: 'gn-link-item is-unresolved', text: u })));
            }
            fill(panes.links, outEls, 'This note has no outgoing links.');
            this.badges(back.length, out.length);
        },
        setActiveHeading(id) {
            panes.outline.querySelectorAll('.gn-outline-item').forEach(a => a.classList.toggle('is-active', a.dataset.hid === id));
        },
        renderBacklinksInto(target, path) {
            const back = GN.index.backlinks(path);
            GS.clear(target);
            if (!back.length) return false;
            target.append(el('div', { cls: 'gn-doc-bl-title', text: `Linked mentions (${back.length})` }), ...back.map(n => noteItem(n, false)));
            return true;
        },
        setTab
    };
})(window);
