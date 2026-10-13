/* exam / view.js - the test screen ported from the classic simulator: session setup, the exam with timer, palette, mark-for-review,
   pause, submit summary, grading and mistake tags. It talks to the other features only through services (see exam/plugin.js). */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    const GS = g.GateShared;
    const lib = (GSim.pluginLib = GSim.pluginLib || {});
    const mine = (lib['exam'] = lib['exam'] || {});
    const { Notice, Setting, downloadFile, SubmitSummaryModal, MistakeTagModal } = mine;
    const svc = n => GSim.services.get(n);
    // these are looked up in the services when used, so the exam never holds on to a feature that was switched off
    const GateUtils = new Proxy({}, { get: (_, k) => svc('questions').utils[k] });
    const QuestionSelector = new Proxy({}, { get: (_, k) => svc('generator').QuestionSelector[k] });
    const TestGenerator = new Proxy({}, { get: (_, k) => svc('generator').TestGenerator[k] });
    const GateGrader = { grade: (a, k) => svc('grader').grade(a, k) };
    const Markdown = { render: (c, e) => svc('markdown').render(c, e) };

class GateExamView {
    constructor(app, container) {
        this.app = app;
        this.containerEl = container;
        this.resetState();
    }
    resetState() {
        this.questions = []; this.answers = {}; this.reviews = {}; this.questionTimes = {};
        this.viewedIndices = new Set();
        this.currentIndex = 0; this.timeLeft = 0; this.timerInterval = null; this.isUntimed = false;
        this.lastNavTime = 0; this.filterMode = 'ALL'; this.searchQuery = ''; this.dom = {};
        this.setupMode = this.setupMode || 'REPLICATION';
        this.selectedAlgorithm = this.selectedAlgorithm || null;
        this.isSubmitting = false;
        this.isPaused = false;
    }
    async onOpen() {
        const idx = this.app.indexer;
        const needsLoad = idx.masterIndex.length === 0 || idx.lastBuildHadErrors || idx.building;
        const stop = needsLoad ? this.app.showIndexLoading(this.containerEl, idx) : null;
        await idx.buildMasterIndex();
        if (stop) stop();
        if (idx.masterIndex.length === 0) {
            this.app.showIndexError(this.containerEl, idx, () => { this.onOpen(); });
            return;
        }
        const session = await this.app.sessionManager.loadSession();
        this.renderConfigUI(session);
    }
    onClose() {
        this.stopTimer();
        if (this.questions.length > 0 && !this.isSubmitting) this.autoSaveSessionSilent();
    }
    buildSessionPayload() {
        return {
            questions: this.questions, answers: this.answers, reviews: this.reviews, questionTimes: this.questionTimes,
            viewedIndices: Array.from(this.viewedIndices), currentIndex: this.currentIndex, timeLeft: this.timeLeft,
            setupMode: this.setupMode, selectedAlgorithm: this.selectedAlgorithm, isUntimed: this.isUntimed
        };
    }
    autoSaveSessionSilent() { this.app.sessionManager.saveSession(this.buildSessionPayload()); }
    renderConfigUI(session) {
        this.containerEl.empty();
        const wrapper = this.containerEl.createDiv({ cls: 'gate-view-container' });
        const configBox = wrapper.createDiv({ cls: 'gate-config-screen' });

        const refreshBtn = configBox.createEl('button', { text: '⟳ Refresh Question Index', cls: 'gate-btn gate-refresh-btn' });
        refreshBtn.onclick = async () => {
            const stop = this.app.showIndexLoading(this.containerEl, this.app.indexer, { title: 'Refreshing question index' });
            this.app.indexer.buildMasterIndex(true).then(() => { stop(); if (this.app.indexer.masterIndex.length === 0) this.app.showIndexError(this.containerEl, this.app.indexer, () => this.onOpen()); else this.renderConfigUI(session); });
        };

        if (session) {
            const banner = configBox.createDiv({ cls: 'gate-active-test-banner' });
            banner.createEl('h3', { text: 'Session Paused' });
            const btnBox = banner.createDiv({ cls: 'gate-banner-btns' });
            btnBox.createEl('button', { text: 'Resume', cls: 'gate-btn primary' }).onclick = () => {
                this.questions = session.questions; this.answers = session.answers;
                this.reviews = session.reviews; this.questionTimes = session.questionTimes || {};
                this.viewedIndices = new Set(session.viewedIndices || []);
                this.setupMode = session.setupMode || 'REPLICATION'; this.selectedAlgorithm = session.selectedAlgorithm || null;
                this.isUntimed = !!session.isUntimed;
                this.currentIndex = Math.min(Math.max(session.currentIndex || 0, 0), Math.max(this.questions.length - 1, 0));
                this.timeLeft = Number.isFinite(session.timeLeft) ? session.timeLeft : 0;
                if (!this.isUntimed) this.startTimer();
                this.renderExamUI();
            };
            btnBox.createEl('button', { text: 'Discard', cls: 'gate-btn danger' }).onclick = async () => { await this.app.sessionManager.clearSession(); this.renderConfigUI(null); };
        }

        const stats = this.app.indexer.stats;
        const poolBox = configBox.createDiv({ cls: 'gate-pool-stats' });
        poolBox.createEl('h3', { text: `${stats.total} question(s) available in pool` });
        const bm = stats.byMarks || {};
        poolBox.createDiv({ cls: 'gate-pool-breakdown', text: `General Aptitude ${stats.bySection.GA} (1M\u00b7${bm.GA1 || 0}, 2M\u00b7${bm.GA2 || 0})   \u00b7   Core ${stats.bySection.EE} (1M\u00b7${bm.EE1 || 0}, 2M\u00b7${bm.EE2 || 0})` });
        const problems = [];
        if (stats.unknownType > 0) problems.push(`${stats.unknownType} question(s) have no answer key and will be skipped in grading`);
        const failed = (stats.sourceFileErrors || []).length + (stats.yearFileErrors || []).length + (stats.tagFileErrors || []).length + (stats.keyFileErrors || []).length;
        if (failed > 0) problems.push(`${failed} file(s) failed to load \u2014 some questions may show "text missing"`);
        if (problems.length) {
            const warn = poolBox.createDiv({ cls: 'gate-pool-warn' });
            warn.createSpan({ text: problems.join('. ') + '. ' });
            if (failed > 0) warn.createEl('button', { text: 'Retry', cls: 'gate-btn' }).onclick = () => refreshBtn.click();
        }

        configBox.createEl('h1', { text: 'Session Policy', cls: 'gate-config-title' });
        const goals = configBox.createDiv({ cls: 'gate-goal-grid' });
        const modes = [
            { id: 'REPLICATION', name: 'Exam Replication', desc: 'Full 65Q Mock. Strict Official Ratios.' },
            { id: 'DRILL', name: 'Custom Drill', desc: 'Filter by Subject/Topic tag, then practice freely.' },
            { id: 'PATTERN', name: 'Pattern Training', desc: 'Target specific types (e.g. NAT/MSQ).' },
            { id: 'REVIEW', name: 'Mistake Review', desc: 'Revisit past incorrect answers.' }
        ];
        modes.forEach(m => {
            const card = goals.createDiv({ cls: `gate-goal-card ${this.setupMode === m.id ? 'active' : ''}` });
            card.createEl('h3', { text: m.name }); card.createEl('p', { text: m.desc });
            card.onclick = () => { this.setupMode = m.id; this.renderConfigUI(session); };
        });

        const formBody = configBox.createDiv({ cls: 'gate-config-body' });
        const config = { mode: this.setupMode, count: 65, sort: 'OFFICIAL', freshness: 'ALL' };
        const ix = this.app.indexer;

        new Setting(formBody).setName('Filters').setHeading();
        let instSel;
        new Setting(formBody)
            .setName('Institute')
            .addDropdown(d => {
                ['ALL', ...Array.from(ix.institutes).sort()].forEach(i => d.addOption(i, i));
                d.setValue('ALL');
                instSel = d.selectEl;
            });

        let subjSel, topicSel, topicDesc;
        const subjList = ['ALL', ...Array.from(ix.subjects).sort()];
        const allTopics = Array.from(ix.topics).sort();
        new Setting(formBody)
            .setName('Subject')
            .setDesc(subjList.length > 1 ? 'From your Subject-wise tag files.' : 'No Subject tag files found \u2014 every question counts as untagged.')
            .addDropdown(d => {
                subjList.forEach(s => d.addOption(s, s));
                d.setValue('ALL');
                subjSel = d.selectEl;
                d.onChange(v => refreshTopicOptions(v));
            });
        const topicSetting = new Setting(formBody)
            .setName('Topic')
            .addDropdown(d => { topicSel = d.selectEl; });
        topicDesc = topicSetting.descEl;
        const topicOptionLabel = (t, weaknessMap) => {
            const info = weaknessMap[t];
            if (!info) return t;
            const pyqTxt = `${info.count} PYQ${info.count === 1 ? '' : 's'}`;
            if (info.accuracy === null) return `${t} (${pyqTxt}, unattempted)`;
            return `${t} (${pyqTxt} \u00b7 ${info.correct}/${info.attempts} correct = ${Math.round(info.accuracy * 100)}%)`;
        };
        // Once a Subject is picked, only topics whose file declares that Subject are listed, and the PYQ count / accuracy
        // shown next to each topic is scoped to that Subject too.
        const refreshTopicOptions = (subjectFilter) => {
            const prevVal = topicSel.value;
            const options = (subjectFilter && subjectFilter !== 'ALL')
                ? allTopics.filter(t => ix.topicToSubjects.get(t)?.has(subjectFilter))
                : allTopics;
            const weaknessMap = QuestionSelector.computeTopicWeaknessMap(ix.masterIndex, this.app.historyManager, subjectFilter);
            topicSel.empty();
            topicSel.createEl('option', { value: 'ALL', text: 'ALL' });
            options.forEach(t => topicSel.createEl('option', { value: t, text: topicOptionLabel(t, weaknessMap) }));
            topicSel.value = options.includes(prevVal) ? prevVal : 'ALL';
            if (allTopics.length === 0) {
                topicDesc.textContent = 'No Topic tag files found \u2014 every question counts as untagged.';
            } else if (subjectFilter && subjectFilter !== 'ALL') {
                topicDesc.textContent = options.length > 0
                    ? `Topics declared under "${subjectFilter}". (PYQ count \u00b7 your accuracy, scoped to this Subject)`
                    : `No topic file declares "${subjectFilter}" as its subject yet \u2014 showing none. Add a "subject:" property or a [[${subjectFilter}]] link to a topic file to connect it.`;
            } else {
                topicDesc.textContent = 'From your Topic-wise tag files (e.g. Trends). (PYQ count \u00b7 your accuracy) \u2014 pick a Subject above to narrow this list.';
            }
        };
        refreshTopicOptions('ALL');

        let freshOpts = [['ALL', 'Include all'], ['UNSEEN', 'Unseen only'], ['UNATTEMPTED', 'Unattempted only']];
        if (this.setupMode === 'REVIEW') freshOpts = [['MISTAKE', 'Needs review only']];
        let freshSel;
        new Setting(formBody)
            .setName('Freshness policy')
            .setDesc(this.setupMode === 'REVIEW'
                ? 'Only questions you got wrong that you haven\u2019t yet mastered (see mastery badges once the test starts).'
                : 'Which previously-seen questions are eligible for this test.')
            .addDropdown(d => {
                freshOpts.forEach(([v, t]) => d.addOption(v, t));
                d.setValue(freshOpts[0][0]);
                freshSel = d.selectEl;
            });

        let algoSel;
        new Setting(formBody)
            .setName('Selection algorithm')
            .setDesc('How questions are prioritized within the filters above. Never affects grading \u2014 only which questions are picked, and each question will show why it was chosen.')
            .addDropdown(d => {
                QuestionSelector.ALGORITHMS.forEach(([id, label]) => d.addOption(id, label));
                d.setValue(this.app.settings.selectionAlgorithm || 'ADAPTIVE');
                algoSel = d.selectEl;
            });

        const yearPresets = [
            ['ALL', 'All years'],
            ['2010-2016', '2010\u20132016 (concept building)'],
            ['2017-2022', '2017\u20132022 (transition / trend)'],
            ['2023-2026', '2023\u20132026 (mock-style practice)'],
            ['CUSTOM', 'Custom']
        ];
        let yearPresetSel, customYearInp;
        new Setting(formBody)
            .setName('Year range')
            .setDesc('Older PYQs build concepts; recent ones match current exam style \u2014 filter to whichever pass you\u2019re on.')
            .addDropdown(d => {
                yearPresets.forEach(([v, t]) => d.addOption(v, t));
                d.setValue('ALL');
                yearPresetSel = d.selectEl;
                d.onChange(v => { customYearSetting.settingEl.style.display = v === 'CUSTOM' ? 'flex' : 'none'; });
            });
        const customYearSetting = new Setting(formBody)
            .setName('Custom years')
            .setDesc('Used only when Year range is Custom. Comma-separated \u2014 mix single years, ranges and specific sets, e.g. "2014(3), 2017-2020, 2023". A bare year (or a range) includes every set of that year.')
            .addText(t => { t.setPlaceholder('2014(3), 2017-2020, 2023'); customYearInp = t.inputEl; });
        customYearSetting.settingEl.classList.add('is-stacked');
        customYearSetting.settingEl.style.display = 'none';

        new Setting(formBody).setName('Test structure').setHeading();
        let sortSel;
        new Setting(formBody)
            .setName('Sort order')
            .addDropdown(d => {
                [['OFFICIAL', 'Official GATE flow'], ['CHAOTIC', 'Pure random / chaotic']].forEach(([v, t]) => d.addOption(v, t));
                d.setValue('OFFICIAL');
                sortSel = d.selectEl;
            });

        let countInp, typeSel, marksSel;
        if (this.setupMode !== 'REPLICATION') {
            new Setting(formBody)
                .setName('Question count')
                .setDesc('0 = include everything that matches your filters.')
                .addText(t => { t.inputEl.type = 'number'; t.inputEl.min = '0'; t.setValue('30'); countInp = t.inputEl; });
            if (this.setupMode === 'PATTERN') {
                new Setting(formBody)
                    .setName('Question type')
                    .addDropdown(d => {
                        [['ALL', 'All'], ['MCQ', 'MCQ'], ['MSQ', 'MSQ'], ['NAT', 'NAT']].forEach(([v, t]) => d.addOption(v, t));
                        d.setValue('ALL');
                        typeSel = d.selectEl;
                    });
                new Setting(formBody)
                    .setName('Marks')
                    .addDropdown(d => {
                        [['ALL', 'All'], ['1', '1 Mark'], ['2', '2 Marks']].forEach(([v, t]) => d.addOption(v, t));
                        d.setValue('ALL');
                        marksSel = d.selectEl;
                    });
            }
        } else {
            new Setting(formBody)
                .setName('Question count')
                .setDesc('Locked to the official 65-question mix: 5 GA\u00b71M, 5 GA\u00b72M, 25 EE\u00b71M, 30 EE\u00b72M.');
        }

        let durInp, untimed = false;
        if (this.setupMode !== 'REPLICATION') {
            new Setting(formBody)
                .setName('Untimed practice')
                .setDesc('No countdown, no auto-submit \u2014 for concept-building passes, not speed.')
                .addToggle(t => {
                    t.setValue(false);
                    t.onChange(v => {
                        untimed = v;
                        durInp.disabled = v;
                        durSetting.settingEl.style.opacity = v ? '0.5' : '1';
                    });
                });
        }
        const durSetting = new Setting(formBody)
            .setName('Duration')
            .setDesc('Minutes. Ignored when Untimed practice is on.')
            .addText(t => {
                t.inputEl.type = 'number'; t.inputEl.min = '1';
                t.setValue(this.setupMode === 'REPLICATION' ? '180' : '60');
                durInp = t.inputEl;
            });

        // Filled in only when the official blueprint can't be satisfied, with a concrete next step.
        const errorBox = configBox.createDiv({ cls: 'gate-inline-banner', style: 'display: none;' });
        const startBtn = configBox.createEl('button', { text: 'Initialize Engine', cls: 'gate-start-btn' });
        startBtn.onclick = () => {
            errorBox.empty();
            errorBox.style.display = 'none';
            config.institute = instSel.value;
            config.subject = subjSel.value;
            config.topic = topicSel.value;
            config.freshness = freshSel.value;
            config.sort = sortSel.value;
            config.algorithm = algoSel.value;
            if (countInp) {
                const c = parseInt(countInp.value, 10);
                config.count = (Number.isFinite(c) && c >= 0) ? c : 0;
            }
            if (typeSel) config.patType = typeSel.value;
            if (marksSel) config.patMarks = marksSel.value;
            const preset = yearPresetSel.value;
            if (preset === 'ALL') {
                config.years = null;
            } else if (preset === 'CUSTOM') {
                config.years = GateUtils.parseYearSelector(customYearInp.value);
                if (!config.years) new Notice('No valid years found in Custom years \u2014 showing all years instead.');
            } else {
                config.years = GateUtils.parseYearSelector(preset);
            }
            let durMinutes = 0;
            if (!untimed) {
                durMinutes = parseInt(durInp.value, 10);
                if (!Number.isFinite(durMinutes) || durMinutes <= 0) { new Notice('Please enter a valid duration in minutes.'); return; }
            }
            try {
                this.questions = TestGenerator.generate(ix.masterIndex, config, this.app.historyManager);
                this.questions.forEach((_, i) => { this.answers[i] = ''; this.reviews[i] = false; this.questionTimes[i] = 0; });
                this.viewedIndices = new Set();
                this.isUntimed = untimed;
                this.timeLeft = untimed ? 0 : durMinutes * 60;
                this.currentIndex = 0;
                this.selectedAlgorithm = config.algorithm;
                if (!untimed) this.startTimer();
                this.renderExamUI();
            } catch (e) {
                if ((e && e.name === 'ReplicationShortfallError')) {
                    errorBox.style.display = 'block';
                    errorBox.createEl('p', { text: e.message });
                    errorBox.createEl('p', { cls: 'gate-text-muted', text: e.buckets.map(b => `${b.label}: ${b.have}/${b.need}`).join('  \u00b7  ') + `  (${e.totalAvailable} total across all buckets)` });
                    const btnRow = errorBox.createDiv({ cls: 'gate-banner-btns' });
                    btnRow.createEl('button', { text: 'Switch to Custom Drill', cls: 'gate-btn primary' }).onclick = () => { this.setupMode = 'DRILL'; this.renderConfigUI(session); };
                    btnRow.createEl('button', { text: 'Adjust filters', cls: 'gate-btn' }).onclick = () => { errorBox.style.display = 'none'; errorBox.empty(); };
                    new Notice('Not enough questions for the official mix \u2014 see options below, or relax your filters.');
                } else {
                    new Notice(e.message);
                }
            }
        };
    }
    renderExamUI() {
        this.containerEl.empty();
        const layout = this.containerEl.createDiv({ cls: 'gate-view-container' }).createDiv({ cls: 'gate-exam-layout' });
        const main = layout.createDiv({ cls: 'gate-exam-main' });
        const toolbar = main.createDiv({ cls: 'gate-toolbar' });
        this.dom.searchBox = toolbar.createEl('input', { type: 'text', placeholder: 'Search...', cls: 'gate-search-input' });
        this.dom.searchBox.oninput = (e) => { this.searchQuery = e.target.value.toLowerCase(); this.updatePalette(); };

        const header = main.createDiv({ cls: 'gate-exam-header' });
        const titleWrap = header.createDiv({ cls: 'gate-exam-title-wrap' });
        this.dom.title = titleWrap.createDiv({ cls: 'gate-exam-title' });
        this.dom.content = main.createDiv({ cls: 'gate-exam-content' });
        this.dom.ansContainer = main.createDiv({ cls: 'gate-exam-answer-box' });
        this.dom.pauseOverlay = main.createDiv({ cls: 'gate-pause-overlay' });
        this.dom.pauseOverlay.createDiv({ cls: 'gate-pause-overlay-text', text: 'Paused' });

        const footer = main.createDiv({ cls: 'gate-exam-footer' });
        const footerL = footer.createDiv({ cls: 'gate-footer-left' });
        this.dom.btnPrev = footerL.createEl('button', { text: 'Previous', cls: 'gate-btn' });
        this.dom.btnClear = footerL.createEl('button', { text: 'Clear', cls: 'gate-btn' });
        this.dom.btnPause = footerL.createEl('button', { text: 'Pause', cls: 'gate-btn' });

        const reviewToggle = footerL.createEl('label', { cls: 'gate-exam-review-toggle' });
        this.dom.reviewCheckbox = reviewToggle.createEl('input', { type: 'checkbox' });
        reviewToggle.createEl('span', { text: 'Mark for Review', cls: 'gate-review-toggle-text-visible' });

        this.dom.btnNext = footer.createEl('button', { text: 'Save & Next', cls: 'gate-btn primary' });

        this.dom.btnPrev.onclick = () => { if (this.currentIndex > 0) this.navigate(-1); };
        this.dom.btnNext.onclick = () => { if (this.currentIndex < this.questions.length - 1) this.navigate(1); };
        this.dom.btnClear.onclick = () => { this.answers[this.currentIndex] = ""; this.updateQuestionView(); this.autoSaveSessionSilent(); };
        this.dom.reviewCheckbox.onchange = (e) => { this.reviews[this.currentIndex] = e.target.checked; this.updatePaletteButton(this.currentIndex); this.autoSaveSessionSilent(); };
        this.dom.btnPause.onclick = () => this.togglePause();

        const sidebar = layout.createDiv({ cls: 'gate-exam-sidebar' });
        this.dom.timer = sidebar.createDiv({ cls: 'gate-exam-timer-box', text: GateUtils.formatTime(this.timeLeft) });
        this.dom.summary = sidebar.createDiv({ cls: 'gate-progress-summary' });
        const palette = sidebar.createDiv({ cls: 'gate-exam-palette' });
        this.dom.grid = palette.createDiv({ cls: 'gate-exam-grid' });
        sidebar.createEl('button', { text: 'Submit Test', cls: 'gate-btn danger' }).onclick = () => this.requestSubmit();

        this.createPaletteGrid(); this.lastNavTime = Date.now(); this.updateQuestionView(); this.updateProgressSummary();
    }
    accumulateTime() { this.questionTimes[this.currentIndex] += (Date.now() - this.lastNavTime) / 1000; this.lastNavTime = Date.now(); }
    navigate(dir) { this.accumulateTime(); this.currentIndex += dir; this.updateQuestionView(); this.autoSaveSessionSilent(); }
    createPaletteGrid() {
        this.dom.grid.empty(); this.dom.paletteButtons = [];
        this.questions.forEach((_, i) => {
            const btn = this.dom.grid.createDiv({ cls: 'gate-grid-btn', text: `${i + 1}` });
            btn.onclick = () => { if (this.currentIndex !== i) { this.accumulateTime(); this.currentIndex = i; this.updateQuestionView(); } };
            this.dom.paletteButtons.push(btn); this.applyPaletteClasses(btn, i);
        });
    }
    updatePalette() { /* similar logic as original */ }
    updatePaletteButton(i) { if(this.dom.paletteButtons[i]) this.applyPaletteClasses(this.dom.paletteButtons[i], i); }
    applyPaletteClasses(btn, index) {
        btn.className = 'gate-grid-btn';
        if (index === this.currentIndex) btn.classList.add('active');
        if (this.answers[index].trim() !== '') btn.classList.add('answered');
        if (this.reviews[index]) btn.classList.add('review');
    }
    updateProgressSummary() {
        let ans = 0; this.questions.forEach((_, i) => { if (this.answers[i].trim() !== '') ans++; });
        if (this.dom.summary) this.dom.summary.innerHTML = `Ans: <strong>${ans}</strong> | Rem: <strong>${this.questions.length - ans}</strong>`;
    }
    
    updateQuestionView() {
        const q = this.questions[this.currentIndex];
        this.dom.title.innerHTML = `Q ${this.currentIndex + 1} / ${this.questions.length} <span class="gate-exam-source">(${q.section} | ${q.marks}M | ${q.type})</span>`;
        this.dom.ansContainer.empty();
        this.dom.ansContainer.createEl('span', { text: 'Your Answer:' });
        
        if (q.type === 'MCQ') {
            const optsGrp = this.dom.ansContainer.createDiv({ cls: 'gate-ans-group' });
            ['A', 'B', 'C', 'D'].forEach(opt => {
                const lbl = optsGrp.createEl('label', { cls: 'gate-ans-radio' });
                const rb = lbl.createEl('input', { type: 'radio', name: 'gate_mcq_ans', value: opt });
                rb.checked = (this.answers[this.currentIndex] === opt);
                rb.onchange = () => { this.answers[this.currentIndex] = opt; this.updatePaletteButton(this.currentIndex); this.updateProgressSummary(); };
                
                lbl.appendChild(document.createTextNode(` ${opt}`)); 
            });
        } else if (q.type === 'MSQ') {
            const optsGrp = this.dom.ansContainer.createDiv({ cls: 'gate-ans-group' });
            const currentAns = (this.answers[this.currentIndex] || "").replace(/[^A-D]/g, "");
            ['A', 'B', 'C', 'D'].forEach(opt => {
                const lbl = optsGrp.createEl('label', { cls: 'gate-ans-checkbox' });
                const cb = lbl.createEl('input', { type: 'checkbox', value: opt });
                cb.checked = currentAns.includes(opt);
                cb.onchange = () => {
                    let ansSet = new Set((this.answers[this.currentIndex] || "").replace(/[^A-D]/g, "").split(''));
                    if (cb.checked) ansSet.add(opt); else ansSet.delete(opt);
                    this.answers[this.currentIndex] = Array.from(ansSet).sort().join('');
                    this.updatePaletteButton(this.currentIndex); this.updateProgressSummary();
                };
                
                lbl.appendChild(document.createTextNode(` ${opt}`));
            });
        } else if (q.type === 'NAT') {
            const input = this.dom.ansContainer.createEl('input', { type: 'text', placeholder: 'e.g. 1.05' });
            input.value = this.answers[this.currentIndex];
            input.oninput = (e) => { this.answers[this.currentIndex] = e.target.value.replace(/[^0-9.-]/g, ''); this.updatePaletteButton(this.currentIndex); this.updateProgressSummary(); };
        } else { 
            this.dom.ansContainer.createEl('span', { text: `Marks to All`, cls: 'gate-mta-badge' }); 
        }
        
        this.viewedIndices.add(this.currentIndex);
        if (this.dom.reviewCheckbox) this.dom.reviewCheckbox.checked = !!this.reviews[this.currentIndex];
        Markdown.render(q.chunk, this.dom.content);
        this.dom.btnPrev.disabled = this.currentIndex === 0;
        this.dom.btnNext.disabled = this.currentIndex === this.questions.length - 1;
        (this.dom.paletteButtons || []).forEach(b => b.classList.remove('active'));
        this.updatePaletteButton(this.currentIndex);
        this.revealActivePaletteButton();
        if (this.dom.content) this.dom.content.scrollTop = 0;
    }

    // Keep the current question's button in view inside the palette (vertical grid on desktop, horizontal strip on phones).
    revealActivePaletteButton() {
        const btn = this.dom.paletteButtons && this.dom.paletteButtons[this.currentIndex];
        const grid = btn && btn.parentElement;
        if (!btn || !grid) return;
        const gr = grid.getBoundingClientRect(), br = btn.getBoundingClientRect();
        if (grid.scrollHeight > grid.clientHeight + 1 && (br.top < gr.top || br.bottom > gr.bottom)) {
            grid.scrollTo({ top: grid.scrollTop + (br.top - gr.top) - (gr.height - br.height) / 2, behavior: 'smooth' });
        }
        if (grid.scrollWidth > grid.clientWidth + 1 && (br.left < gr.left || br.right > gr.right)) {
            grid.scrollTo({ left: grid.scrollLeft + (br.left - gr.left) - (gr.width - br.width) / 2, behavior: 'smooth' });
        }
    }
    
    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            this.timeLeft = Math.max(0, this.timeLeft - 1);
            if (this.dom.timer) this.dom.timer.innerText = GateUtils.formatTime(this.timeLeft);
            if (this.timeLeft <= 0) { this.stopTimer(); this.submitTest(); }
        }, 1000);
    }
    stopTimer() { if (this.timerInterval) { clearInterval(this.timerInterval); this.timerInterval = null; } }

    togglePause() {
        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            this.stopTimer();
            this.dom.pauseOverlay.classList.add('active');
            this.dom.btnPause.innerText = 'Resume';
        } else {
            if (!this.isUntimed) this.startTimer();
            this.dom.pauseOverlay.classList.remove('active');
            this.dom.btnPause.innerText = 'Pause';
        }
    }
    
    // The Submit button asks first; the timer running out calls submitTest() directly.
    requestSubmit() {
        if (this.isSubmitting || !this.questions.length) return;
        if (this.activeSubmitModal) return;
        this.activeSubmitModal = new SubmitSummaryModal(this, () => this.submitTest());
        this.activeSubmitModal.open();
    }

    async submitTest() {
        if (this.isSubmitting) return; this.isSubmitting = true;
        if (this.activeSubmitModal) this.activeSubmitModal.close();
        this.accumulateTime(); this.stopTimer(); new Notice("Grading...");

        let totalMarks = 0, correct = 0, wrong = 0, unattempted = 0;
        const graded = [], wrongEntries = [];
        for (let i = 0; i < this.questions.length; i++) {
            const q = this.questions[i], userAns = this.answers[i], timeSec = this.questionTimes[i] || 0;
            const res = GateGrader.grade(userAns, q.keyObj);
            const isAtt = res.status !== "UNATTEMPTED", isCor = res.status.startsWith("CORRECT");
            if (!isAtt) unattempted++; else if (isCor) correct++; else { wrong++; wrongEntries.push({ qid: q.qid, q }); }
            totalMarks += res.marksAwarded;
            graded.push({ q, i, userAns, timeSec, res, isAtt, isCor });
        }

        let tagMap = {};
        if (wrongEntries.length > 0 && this.app.settings.enableMistakeTags !== false) {
            const tagTree = GateUtils.parseMistakeTagTree(this.app.settings.mistakeTags, true);
            tagMap = await new MistakeTagModal(this.app, wrongEntries, tagTree).openAndAwait();
        }

        let report = "";
        for (const g of graded) {
            const { q, i, userAns, timeSec, res, isAtt, isCor } = g;
            await this.app.historyManager.updateRecord(q.qid, true, isAtt, isCor, timeSec);
            if (tagMap[q.qid]?.tag) this.app.historyManager.recordMistakeTag(q.qid, tagMap[q.qid].tag);
            if (tagMap[q.qid]?.note) this.app.historyManager.recordMistakeNote(q.qid, tagMap[q.qid].note);
            
            report += `### Q${i + 1} - [${q.qid}]\n\n${q.chunk}\n\n`;
            report += `**Your Answer:** \`${userAns || "None"}\` | **Result:** ${res.status} (${res.marksAwarded} Marks)\n\n---\n\n`;
        }

        let content = `# Session Analytics\n\nScore: ${totalMarks.toFixed(2)}\nCorrect: ${correct}\nWrong: ${wrong}\n\n---\n\n` + report;
        if (this.app.settings.downloadReport !== false) downloadFile(`Analytics_${new Date().toISOString().split('T')[0]}.md`, content);
        
        await this.app.historyManager.save();
        await this.app.sessionManager.clearSession();
        this.resetState();
        this.app.switchView('dashboard');
    }
}

    mine.GateExamView = GateExamView;
})(window);
