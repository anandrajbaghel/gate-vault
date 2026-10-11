/* Quick switcher - find a note by name. */
(function (g) {
    'use strict';
    const GN = g.GateNotes;
    GN.plugins.define('quick-switcher', {
        onload(p) {
            p.addFinderMode({
                id: 'quick', title: 'Open a note', label: 'Open note', placeholder: 'Type a note name\u2026', debounce: 40,
                query: q => GN.index.quick(q, 40).map(r => ({ title: r.note.title, sub: (r.alias ? `alias: ${r.alias} \u00B7 ` : '') + r.note.folder, data: r.note })),
                choose: r => { GN.router.go(r.data.path, ''); if (GN.layout.isMobile()) GN.layout.closeDrawers(); }
            });
            p.addCommand({ id: 'quick-switcher:open', name: 'Open a note', hotkeys: ['Mod+O', 'Mod+K'], run: () => GN.finder.open('quick') });
            p.addTopbarButton({ id: 'quick-switcher', icon: 'search', title: 'Open a note (Ctrl/Cmd+O)', order: 10, onClick: () => GN.finder.open('quick') });
        }
    });
})(window);
