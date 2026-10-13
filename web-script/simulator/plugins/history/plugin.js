/* History - service "history" (per-question records) and "session" (the paused test).
   history: load() save() getRecord(qid) updateRecord(qid, viewed, attempted, correct, seconds) recordMistakeTag(qid, tag) recordMistakeNote(qid, note) data
   session: saveSession(data) loadSession() clearSession()   */
(function (g) {
    'use strict';
    const GSim = g.GateSim, GS = g.GateShared, el = GS.el;
    GSim.plugins.define('history', {
        async onload(p) {
            const lib = GSim.pluginLib['history'];
            const history = new lib.HistoryManager();
            await history.load();
            p.registerService('history', history);
            p.registerService('session', new lib.SessionManager());

            p.addSettingsTab({
                id: 'history-data', title: 'History data', order: 60,
                render(c) {
                    const row = () => new GS.ui.Setting(c);
                    const n = Object.keys(history.data).length;
                    row().name('Saved question records').desc(n + ' question' + (n === 1 ? '' : 's') + ' have history on this device.');
                    row().name('Copy history from the classic simulator').desc('Brings over your attempts and mistakes from the original page. Nothing is deleted; where both have a question, the one with more attempts is kept.')
                        .button('Copy now', async () => {
                            const r = lib.importClassic(history);
                            await history.save();
                            GS.ui.notice(r.total ? `Copied ${r.added} new and updated ${r.updated} of ${r.total} records.` : 'The classic simulator has no history on this device.', 4000);
                        });
                    row().name('Erase simulator history').desc('Removes this page\u2019s history only. The classic simulator keeps its own.')
                        .button('Erase', async () => {
                            if (!g.confirm('Erase all history saved by this page?')) return;
                            history.data = {}; await history.save(); GS.ui.notice('History erased.');
                        }, { warn: true });
                }
            });
        }
    });
})(window);
