/* Question bank - owns the question pool. Other features never read the vault themselves: they ask the "questions"
   service (GateSim.services.get('questions')) and show a friendly message when this feature is switched off.

   Service:  status ('idle'|'loading'|'ready'|'partial'|'error') - ready - stale - lastError - stats
             pool (all questions) - subjects / topics / institutes (Sets) - topicToSubjects (Map) - blocks (text by "file::blockid")
             load(force) / ensure() -> Promise - onProgress(fn) -> off - showLoading(container) -> cleanup - showError(container, retry)
             utils (GateUtils) - schema (AnswerKeySchema)
   Events:   questions:progress {label,done,total,pct} - questions:loaded - questions:stale */
(function (g) {
    'use strict';
    const GSim = g.GateSim, GS = g.GateShared, el = GS.el;
    const DATA_KEYS = ['manifestPath', 'sourceFolder', 'corePrefix', 'aptitudePrefix'];

    GSim.plugins.define('question-bank', {
        onload(p) {
            const lib = GSim.pluginLib['question-bank'];
            const cfg = () => {
                const t = k => String(p.settings.get(k) == null ? '' : p.settings.get(k)).trim();
                let folder = t('sourceFolder') || 'Resources/Question Paper/GATE/MD/Year/';
                if (!folder.endsWith('/')) folder += '/';
                return { manifestPath: t('manifestPath') || 'pyq-vault-index.json', sourceFolder: folder, corePrefix: t('corePrefix') || 'q', aptitudePrefix: t('aptitudePrefix') || 'qga' };
            };
            const indexer = new lib.GateIndexer(cfg);
            let stale = false;
            p.addDisposer(indexer.onProgress(pr => GSim.events.emit('questions:progress', pr)));

            const api = {
                get status() {
                    if (indexer.building) return 'loading';
                    if (indexer.masterIndex.length) return indexer.lastBuildHadErrors ? 'partial' : 'ready';
                    return indexer.lastError ? 'error' : (indexer.lastBuildHadErrors ? 'error' : 'idle');
                },
                get ready() { return indexer.masterIndex.length > 0; },
                get stale() { return stale; },
                get lastError() { return indexer.lastError || null; },
                get stats() { return indexer.stats; },
                get pool() { return indexer.masterIndex; },
                get subjects() { return indexer.subjects; },
                get topics() { return indexer.topics; },
                get institutes() { return indexer.institutes; },
                get topicToSubjects() { return indexer.topicToSubjects; },
                get blocks() { return indexer.blocks; },
                utils: lib.GateUtils,
                schema: lib.AnswerKeySchema,
                load(force) {
                    const wasStale = stale;
                    return indexer.buildMasterIndex(!!force || wasStale).then(() => { stale = false; GSim.events.emit('questions:loaded'); });
                },
                ensure() { return api.load(false); },
                onProgress(fn) { return indexer.onProgress(fn); },

                /** progress card (same look as the classic simulator); returns a function that stops listening */
                showLoading(container, opts) {
                    opts = opts || {};
                    GS.clear(container);
                    const step = el('div', { cls: 'gate-loading-step', text: 'Starting\u2026' });
                    const fill = el('div', { cls: 'gate-progress-fill' });
                    const hint = el('div', { cls: 'gate-loading-hint', text: 'The first visit downloads every paper, so it takes a little longer. Once loaded, switching tabs is instant.' });
                    container.append(el('div', { cls: 'gate-view-container' }, el('div', { cls: 'gate-loading-card', attrs: { role: 'status', 'aria-live': 'polite' } },
                        el('div', { cls: 'gate-spinner', attrs: { 'aria-hidden': 'true' } }), el('h3', { text: opts.title || 'Loading your questions' }), step, el('div', { cls: 'gate-progress' }, fill), hint)));
                    const slow = setTimeout(() => { hint.textContent = 'Still working\u2026 a slow connection can make the first load take up to a minute. You don\u2019t need to refresh.'; hint.classList.add('slow'); }, 8000);
                    const off = indexer.onProgress(pr => {
                        if (!pr) return;
                        step.textContent = pr.total > 1 ? `${pr.label} \u00b7 ${pr.done} of ${pr.total}` : pr.label;
                        fill.style.width = (pr.pct || 0) + '%';
                    });
                    return () => { clearTimeout(slow); off(); };
                },
                showError(container, onRetry) {
                    GS.clear(container);
                    container.append(el('div', { cls: 'gate-view-container' }, el('div', { cls: 'gate-loading-card error', attrs: { role: 'alert' } },
                        el('h3', { text: 'Couldn\u2019t load your questions' }),
                        el('div', { cls: 'gate-loading-step', text: indexer.lastError || 'Something went wrong while downloading the question index.' }),
                        el('div', { cls: 'gate-loading-hint', text: 'Check your internet connection and that ' + cfg().manifestPath + ' exists in the repository root. Nothing is lost \u2014 you can try again.' }),
                        el('button', { cls: 'gate-btn primary', text: 'Try again', attrs: { type: 'button' }, on: { click: onRetry } }))));
                }
            };
            p.registerService('questions', api);

            // changing where/how questions are read means the loaded pool is out of date
            p.settings.on(k => { if (DATA_KEYS.includes(k)) { stale = true; GSim.events.emit('questions:stale'); } });

            p.addView({ id: 'question-bank', title: 'Questions', order: 90, mount: box => mountView(box, api, indexer) });

            if (p.settings.get('preload') !== false) setTimeout(() => { api.ensure().catch(e => console.error('[question-bank]', e)); }, 0);
        }
    });

    /* ------------------------------------------------------------ status page */
    function mountView(box, api, indexer) {
        const root = el('div', { cls: 'gs-qb' });
        box.append(root);
        let stopLoading = null;

        function errorList(title, list) {
            if (!list || !list.length) return null;
            const ul = el('ul');
            list.forEach(x => ul.append(el('li', {}, el('strong', { text: x.path }), ': ' + x.message)));
            return el('details', {}, el('summary', { cls: 'gs-qb-warn', text: `${title} (${list.length})` }), ul);
        }
        function stat(n, label) { return el('div', { cls: 'gs-qb-stat' }, el('b', { text: String(n) }), el('span', { text: label })); }

        function draw() {
            if (stopLoading) { stopLoading(); stopLoading = null; }
            GS.clear(root);
            const s = api.status, st = api.stats;
            if (s === 'loading') { stopLoading = api.showLoading(root); return; }
            const reload = el('button', { cls: 'gate-btn primary', text: s === 'idle' ? 'Load questions' : 'Reload from the vault', attrs: { type: 'button' }, on: { click: () => { api.load(true).then(draw, draw); draw(); } } });
            const lead = { idle: 'Questions have not been loaded yet.', ready: 'Questions are loaded.', partial: 'Questions loaded, but some files failed. The pool may be incomplete.', error: 'Questions could not be loaded.' }[s];
            root.append(el('h2', { text: 'Question bank' }), el('div', { cls: 'gn-sub', text: lead + (s === 'partial' && api.lastError ? ' Last attempt: ' + api.lastError : '') + (api.stale ? ' Settings changed \u2014 reload to apply them.' : '') }));
            if (s === 'error') { api.showError(root, () => { api.load(true).then(draw, draw); draw(); }); return; }
            if (api.ready) {
                root.append(el('div', { cls: 'gs-qb-grid' },
                    stat(st.total, 'questions'), stat(st.bySection.EE, 'core (EE)'), stat(st.bySection.GA, 'aptitude (GA)'),
                    stat(api.subjects.size, 'subjects'), stat(api.topics.size, 'topics'), stat(st.unknownType, 'without answer key'), stat(st.duplicates, 'duplicates skipped')));
            }
            root.append(el('div', { cls: 'gs-qb-actions' }, reload));
            [errorList('Answer key files rejected', st.keyFileErrors), errorList('Year files that failed', st.yearFileErrors),
             errorList('Question files that failed', st.sourceFileErrors), errorList('Tag files that failed', st.tagFileErrors)].forEach(n => n && root.append(n));
        }
        draw();
        const offs = [GSim.events.on('questions:loaded', draw), GSim.events.on('questions:stale', draw)];
        // show progress if a load starts elsewhere (e.g. the background preload)
        const offP = indexer.onProgress(() => { if (api.status === 'loading' && !stopLoading) draw(); });
        return () => { offs.forEach(f => f()); offP(); if (stopLoading) stopLoading(); };
    }
})(window);
