/* Simulator launcher - opens simulator.html from the notes reader. Nothing else in the reader depends on it. */
(function (g) {
    'use strict';
    const GN = g.GateNotes;
    GN.plugins.define('simulator-launcher', {
        onload(p) {
            const open = () => {
                const url = new URL('simulator.html', GN.loader.root).href;
                if (p.settings.get('openIn') === 'same') location.href = url;
                else if (!g.open(url, '_blank', 'noopener')) location.href = url;     // pop-up blocked: fall back to this tab
            };
            p.addTopbarButton({ id: 'simulator-launcher', icon: 'forward', title: 'Open the simulator', order: 90, onClick: open });
            p.addCommand({ id: 'simulator:open', name: 'Open the simulator', run: open });
        }
    });
})(window);
