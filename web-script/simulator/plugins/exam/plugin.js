/* Exam - the test screen. It needs the question bank, history, markdown renderer, test generator and grader features; the
   plugin manager switches this feature on/off together with them, and nothing else depends on it.
   Below, `app` is a small adapter that gives the ported classic screens the same shape they had in the original page,
   but backed by services instead of globals. */
(function (g) {
    'use strict';
    const GSim = g.GateSim, GS = g.GateShared, el = GS.el;
    const REQUIRED = ['questions', 'history', 'session', 'markdown', 'generator', 'grader'];
    const svc = n => GSim.services.get(n);

    GSim.plugins.define('exam', {
        onload(p) {
            const L = GSim.pluginLib['exam'];
            let active = null;                                     // the open exam screen, if any

            // the classic screens read settings from app.settings; here they come from this feature's options
            const settings = new Proxy({}, { get: (_, k) => (typeof k === 'string' ? p.settings.get(k) : undefined) });
            const makeApp = (view) => ({
                settings,
                get historyManager() { return svc('history'); },
                get sessionManager() { return svc('session'); },
                // thin wrapper so the classic code keeps reading masterIndex / institutes / ... from one object
                get indexer() {
                    const q = svc('questions');
                    return {
                        get masterIndex() { return q.pool; }, get institutes() { return q.institutes; }, get subjects() { return q.subjects; },
                        get topics() { return q.topics; }, get topicToSubjects() { return q.topicToSubjects; }, get stats() { return q.stats; },
                        get building() { return q.status === 'loading'; }, get lastBuildHadErrors() { return q.status === 'partial' || q.status === 'error'; },
                        get lastError() { return q.lastError; },
                        buildMasterIndex(force) { return q.load(force); }
                    };
                },
                showIndexLoading: (container, _ix, opts) => svc('questions').showLoading(container, opts),
                showIndexError: (container, _ix, retry) => svc('questions').showError(container, retry),
                // after submitting: show the dashboard when that feature is on, otherwise start over at the setup screen
                switchView(id) {
                    if (GSim.slots.views.list().some(v => v.id === id)) GSim.app.go(id);
                    else { GS.ui.notice('Test submitted. Your results are saved in this device\u2019s history.', 4500); view.onOpen(); }
                }
            });

            const missing = () => REQUIRED.filter(n => !svc(n));

            p.addView({
                id: 'exam', title: 'Test', order: 10, fill: true,
                mount(box) {
                    const lack = missing();
                    if (lack.length) {
                        box.append(el('div', { cls: 'gn-card' }, el('h2', { text: 'The test needs more features' }),
                            el('p', { cls: 'gn-sub', text: 'These are switched off or missing: ' + lack.join(', ') + '. Turn them on in Settings \u2192 Core plugins.' })));
                        return;
                    }
                    const view = new L.GateExamView(null, box);
                    view.app = makeApp(view);
                    active = view;
                    view.onOpen().catch(e => { console.error(e); GS.clear(box); box.append(el('div', { cls: 'gn-card' }, el('h2', { text: 'The test could not start' }), el('p', { cls: 'gn-sub', text: String((e && e.message) || e) }))); });
                    return () => { if (active === view) active = null; view.onClose(); };
                }
            });

            // closing the tab or reloading mid-test keeps the session so it can be resumed
            p.registerDomEvent(g, 'beforeunload', () => {
                if (active && active.questions.length > 0 && !active.isSubmitting) { active.accumulateTime(); active.autoSaveSessionSilent(); }
            });
            p.registerDomEvent(document, 'visibilitychange', () => {
                if (document.hidden && active && active.questions.length > 0 && !active.isSubmitting) active.autoSaveSessionSilent();
            });
        }
    });
})(window);
