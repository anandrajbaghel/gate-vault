/* Quick switcher - the "Open note" tab of the search window: jump to any note by name, alias or folder.
   Its hotkeys, top-bar icon and place among the tabs are set in Settings -> Search. */
(function (g) {
    'use strict';
    const GN = g.GateNotes;
    GN.plugins.define('quick-switcher', {
        onload(p) {
            p.addFinderMode({
                id: 'quick', title: 'Open a note', label: 'Open note', placeholder: 'Type a note name\u2026', debounce: 40,
                icon: 'file', order: 10, hotkeys: ['Mod+O', 'Mod+K'], emptyInAll: true,
                hint: 'Enter opens \u00b7 Ctrl/Cmd+Enter in a new tab \u00b7 Tab switches tab \u00b7 Esc closes',
                query: q => GN.index.quick(q, 40).map(r => ({ title: r.note.title, sub: (r.alias ? `alias: ${r.alias} \u00b7 ` : '') + r.note.folder, data: r.note })),
                choose: (r, evt) => {
                    if (evt && (evt.ctrlKey || evt.metaKey)) { g.open(location.pathname + location.search + GN.router.href(r.data.path), '_blank', 'noopener'); return; }
                    GN.router.go(r.data.path, ''); if (GN.layout.isMobile()) GN.layout.closeDrawers();
                }
            });
        }
    });
})(window);
