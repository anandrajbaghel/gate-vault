/* Festival themes (notes reader) - thin wrapper around GateShared.festivalUI; same behaviour as on the simulator page. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared;
    GN.plugins.define('festival-themes', {
        onload(p) {
            if (!g.GateFestivals) { console.warn('[festival-themes] festivals.js is not on this page'); return; }
            GS.festivalUI.init();
            p.addDisposer(() => GS.festivalUI.destroy());
            p.addSettingsTab({ id: 'festival-themes', title: 'Festival themes', order: 25, group: 'options', render: c => GS.festivalUI.renderSettings(c) });
        }
    });
})(window);
