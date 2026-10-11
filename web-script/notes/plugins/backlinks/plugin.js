/* Backlinks - notes that link to the open note. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    GN.plugins.define('backlinks', {
        onload(p) {
            let pane = null, tab = null;
            const item = (n, sub) => el('a', { cls: 'gn-link-item', href: GN.router.href(n.path), dataset: { path: n.path, frag: '' }, title: n.path },
                el('span', { cls: 'gn-link-title', text: n.title }), sub !== false && n.folder ? el('span', { cls: 'gn-sub', text: n.folder }) : null);
            function paint(c) {
                if (!pane) return;
                GS.clear(pane);
                if (!c) { pane.append(el('div', { cls: 'gn-empty', text: 'Open a note to see what links to it.' })); tab.setBadge(0); return; }
                const back = GN.index.backlinks(c.path);
                tab.setBadge(back.length);
                if (!back.length) pane.append(el('div', { cls: 'gn-empty', text: 'No other notes link here yet.' }));
                else back.forEach(n => pane.append(item(n)));
            }
            p.addSidebarTab('right', {
                id: 'backlinks', title: 'Backlinks', order: 20,
                mount(container, api) { tab = api; pane = el('div', { cls: 'gn-pane gn-panel' }); container.append(pane); paint(GN.reader.context); }
            });
            p.on('note:opened', paint);
            p.on('note:closed', () => paint(null));
            p.addStatusItem({ id: 'backlinks', order: 10, render: c => (c ? `${GN.index.backlinks(c.path).length} backlinks` : null) });
            p.addArticleSection('after', {
                id: 'backlinks', order: 10,
                render(c) {
                    if (!p.settings.get('showInDocument')) return null;
                    const back = GN.index.backlinks(c.path);
                    if (!back.length) return null;
                    return el('div', { cls: 'gn-doc-backlinks' }, el('div', { cls: 'gn-doc-bl-title', text: `Linked mentions (${back.length})` }), ...back.map(n => item(n, false)));
                }
            });
            p.settings.on(k => { if (k === 'showInDocument') GN.reader.reload(); });
        }
    });
})(window);
