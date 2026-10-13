/* Festival themes (simulator) - thin wrapper around GateShared.festivalUI. The theme colours themselves are applied earlier, in
   the page head (festivals.js), so this feature only adds what you see on top: banner, motion, Settings panel, celebration.
   Switching it off here also stops the festival themes on the next page load. */
(function (g) {
    'use strict';
    const GSim = g.GateSim, GS = g.GateShared;
    GSim.plugins.define('festival-themes', {
        onload(p) {
            if (!g.GateFestivals) { console.warn('[festival-themes] festivals.js is not on this page'); return; }
            GS.festivalUI.init();
            p.addDisposer(() => GS.festivalUI.destroy());
            p.addSettingsTab({ id: 'festival-themes', title: 'Festival themes', order: 25, group: 'options', render: c => GS.festivalUI.renderSettings(c) });
            // the exam tells everyone when a test starts, ends and is submitted
            p.on('exam:active', busy => GS.festivalUI.setBusy(busy));
            p.on('exam:submitted', () => GS.festivalUI.celebrate());
        }
    });
})(window);
