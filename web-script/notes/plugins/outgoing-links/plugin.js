/* Outgoing links - what the open note links to. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    GN.plugins.define('outgoing-links', {
        onload(p) {
            let pane = null, tab = null;
            function paint(c) {
                if (!pane) return;
                GS.clear(pane);
                if (!c) { pane.append(el('div', { cls: 'gn-empty', text: 'Open a note to see its links.' })); tab.setBadge(0); return; }
                const out = GN.index.outgoing(c.path);
                tab.setBadge(out.length);
                const rec = GN.index.visible.find(n => n.path === c.path);
                const unresolved = (rec && rec.unresolved) || [];
                if (!out.length && !unresolved.length) { pane.append(el('div', { cls: 'gn-empty', text: 'This note has no outgoing links.' })); return; }
                out.forEach(n => pane.append(el('a', { cls: 'gn-link-item', href: GN.router.href(n.path), dataset: { path: n.path, frag: '' }, title: n.path },
                    el('span', { cls: 'gn-link-title', text: n.title }), n.folder ? el('span', { cls: 'gn-sub', text: n.folder }) : null)));
                if (unresolved.length) {
                    pane.append(el('div', { cls: 'gn-section-label', text: 'Unresolved' }));
                    unresolved.forEach(u => pane.append(el('div', { cls: 'gn-link-item is-unresolved', text: u })));
                }
            }
            p.addSidebarTab('right', {
                id: 'links', title: 'Links', order: 30,
                mount(container, api) { tab = api; pane = el('div', { cls: 'gn-pane gn-panel' }); container.append(pane); paint(GN.reader.context); }
            });
            p.on('note:opened', paint);
            p.on('note:closed', () => paint(null));
        }
    });
})(window);
