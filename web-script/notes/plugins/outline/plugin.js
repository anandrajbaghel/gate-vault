/* Outline - headings of the open note in the right sidebar. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    GN.plugins.define('outline', {
        onload(p) {
            let pane = null;
            function paint(c) {
                if (!pane) return;
                GS.clear(pane);
                if (!c) { pane.append(el('div', { cls: 'gn-empty', text: 'Open a note to see its headings.' })); return; }
                if (!c.headings.length) { pane.append(el('div', { cls: 'gn-empty', text: 'No headings in this note.' })); return; }
                const min = Math.min(...c.headings.map(h => h.level));
                c.headings.forEach(h => pane.append(el('a', { cls: 'gn-outline-item', href: '#', text: h.text, dataset: { hid: h.id }, style: `--l:${h.level - min}`, title: h.text })));
            }
            p.addSidebarTab('right', {
                id: 'outline', title: 'Outline', order: 10,
                mount(container) {
                    pane = el('div', { cls: 'gn-pane gn-panel' });
                    container.append(pane);
                    pane.addEventListener('click', e => {
                        const a = e.target.closest('a.gn-outline-item'); if (!a) return;
                        e.preventDefault(); GN.reader.scrollToHeadingId(a.dataset.hid);
                        if (GN.layout.isMobile()) GN.layout.closeDrawers();
                    });
                    paint(GN.reader.context);
                }
            });
            p.on('note:opened', paint);
            p.on('note:closed', () => paint(null));
            p.on('heading:active', id => { if (pane) pane.querySelectorAll('.gn-outline-item').forEach(a => a.classList.toggle('is-active', a.dataset.hid === id)); });
        }
    });
})(window);
