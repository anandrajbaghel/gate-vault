/* exam / modals.js - confirm dialog, the TCS-style submit summary and the "why was this wrong?" mistake-tag dialog. */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    const GS = g.GateShared;
    const lib = (GSim.pluginLib = GSim.pluginLib || {});
    const mine = (lib['exam'] = lib['exam'] || {});
    const { Modal } = mine;
    const svc = n => GSim.services.get(n);
    const GateUtils = new Proxy({}, { get: (_, k) => svc('questions').utils[k] });
    const Markdown = { render: (c, e) => svc('markdown').render(c, e) };

class ConfirmModal extends Modal {
    constructor({ title, message, confirmText = 'Confirm', cancelText = 'Cancel', danger = false, onConfirm }) {
        super();
        Object.assign(this, { title, message, confirmText, cancelText, danger, onConfirm });
        this.contentEl.classList.add('gate-confirm-modal');
    }
    onOpen() {
        const c = this.contentEl; c.empty();
        c.createEl('h3', { text: this.title });
        c.createEl('p', { text: this.message });
        const row = c.createDiv({ cls: 'gate-modal-actions' });
        const cancel = row.createEl('button', { text: this.cancelText, cls: 'gate-btn' });
        const ok = row.createEl('button', { text: this.confirmText, cls: 'gate-btn ' + (this.danger ? 'danger' : 'primary') });
        cancel.onclick = () => this.close();
        ok.onclick = () => { this.close(); this.onConfirm && this.onConfirm(); };
        this._esc = (e) => { if (e.key === 'Escape') this.close(); };
        document.addEventListener('keydown', this._esc);
        cancel.focus();
    }
    onClose() { document.removeEventListener('keydown', this._esc); }
}

// Exam summary shown before submitting, laid out like the TCS iON exam summary table.
class SubmitSummaryModal extends Modal {
    constructor(view, onConfirm) {
        super();
        this.view = view; this.onConfirm = onConfirm;
        this.contentEl.classList.add('gate-submit-modal');
    }
    static sectionName(code) { return ({ GA: 'General Aptitude', EE: 'Electrical Engineering' })[code] || code || 'Questions'; }
    summarize() {
        const v = this.view, rows = new Map();
        const blank = (name) => ({ name, total: 0, answered: 0, notAnswered: 0, marked: 0, ansMarked: 0, notVisited: 0 });
        v.questions.forEach((q, i) => {
            const key = q.section || 'All';
            if (!rows.has(key)) rows.set(key, blank(SubmitSummaryModal.sectionName(key)));
            const r = rows.get(key); r.total++;
            const ans = String(v.answers[i] || '').trim() !== '', rev = !!v.reviews[i], seen = v.viewedIndices.has(i);
            if (ans && rev) r.ansMarked++;
            else if (ans) r.answered++;
            else if (rev) r.marked++;
            else if (seen) r.notAnswered++;
            else r.notVisited++;
        });
        const list = [...rows.entries()].sort((a, b) => (a[0] === 'GA' ? -1 : 0) - (b[0] === 'GA' ? -1 : 0)).map(e => e[1]);
        const total = blank('Total');
        list.forEach(r => Object.keys(total).forEach(k => { if (k !== 'name') total[k] += r[k]; }));
        return { list, total };
    }
    onOpen() {
        const c = this.contentEl; c.empty();
        const { list, total } = this.summarize();
        const head = c.createDiv({ cls: 'gate-submit-head' });
        head.createEl('h3', { text: 'Exam summary' });
        if (!this.view.isUntimed) head.createDiv({ cls: 'gate-submit-time', text: `Time left  ${GateUtils.formatTime(this.view.timeLeft)}` });

        const cols = [
            ['Section name', ''], ['No. of questions', ''], ['Answered', 'answered'], ['Not answered', 'na'],
            ['Marked for review', 'review'], ['Answered & marked for review (will be considered for evaluation)', 'both'], ['Not visited', 'nv']
        ];
        const wrap = c.createDiv({ cls: 'gate-submit-table-wrap' });
        const table = wrap.createEl('table', { cls: 'gate-submit-table' });
        const trh = table.createEl('thead').createEl('tr');
        cols.forEach(([label, dot], i) => {
            const th = trh.createEl('th', { attr: { scope: 'col' } });
            if (dot) th.createSpan({ cls: `gate-submit-dot ${dot}` });
            th.appendChild(document.createTextNode(label));
            if (i === 0) th.classList.add('left');
        });
        const body = table.createEl('tbody');
        const addRow = (r, isTotal) => {
            const tr = body.createEl('tr'); if (isTotal) tr.className = 'total';
            [r.name, r.total, r.answered, r.notAnswered, r.marked, r.ansMarked, r.notVisited].forEach((val, i) => {
                const td = tr.createEl('td', { text: String(val) }); if (i === 0) td.classList.add('left');
            });
        };
        list.forEach(r => addRow(r, false));
        if (list.length > 1) addRow(total, true);

        const unanswered = total.total - total.answered - total.ansMarked;
        const note = c.createDiv({ cls: 'gate-submit-note' + (unanswered > 0 ? ' warn' : '') });
        note.textContent = unanswered > 0
            ? `${unanswered} of ${total.total} question${total.total === 1 ? '' : 's'} ${unanswered === 1 ? 'has' : 'have'} no answer. `
            : 'Every question has an answer. ';
        note.appendChild(document.createTextNode('Are you sure you want to submit? Once submitted, you won\u2019t be able to change your answers.'));

        const row = c.createDiv({ cls: 'gate-modal-actions' });
        const back = row.createEl('button', { text: 'Back to test', cls: 'gate-btn' });
        const submit = row.createEl('button', { text: 'Submit test', cls: 'gate-btn danger' });
        back.onclick = () => this.close();
        submit.onclick = () => { this.close(); this.onConfirm && this.onConfirm(); };
        this._esc = (e) => { if (e.key === 'Escape') this.close(); };
        document.addEventListener('keydown', this._esc);
        back.focus(); // safest default: Enter goes back to the test, not to submit
    }
    onClose() { document.removeEventListener('keydown', this._esc); if (this.view.activeSubmitModal === this) this.view.activeSubmitModal = null; }
}

class MistakeTagModal extends Modal {
    constructor(app, wrongEntries, tagTree) {
        super();
        this.app = app;
        this.wrongEntries = wrongEntries;
        this.tagTree = tagTree;
        this.index = 0;
        this.pendingTag = null;
        this.result = {};
        this._resolve = null;
    }
    openAndAwait() { return new Promise(resolve => { this._resolve = resolve; this.open(); }); }
    onOpen() { this.renderCurrent(); }
    onClose() {
        this.contentEl.empty();
        if (this._resolve) { this._resolve(this.result); this._resolve = null; }
    }
    advance(tag, note) {
        const entry = this.wrongEntries[this.index];
        if (tag) this.result[entry.qid] = { tag, note: note || '' };
        this.index++;
        this.pendingTag = null;
        if (this.index >= this.wrongEntries.length) { this.close(); return; }
        this.renderCurrent();
    }
    selectTag(label) { this.pendingTag = label; this.renderNote(); }
    renderQuestionPreview(contentEl, entry) {
        contentEl.createEl('p', { cls: 'gate-text-muted', text: entry.qid });
        const box = contentEl.createDiv({ cls: 'gate-mistake-preview' });
        Markdown.render(entry.q.chunk, box);
    }
    renderCurrent() {
        const { contentEl } = this; contentEl.empty();
        const entry = this.wrongEntries[this.index];
        contentEl.createEl('h3', { text: `Why was this one wrong? (${this.index + 1} / ${this.wrongEntries.length})` });
        this.renderQuestionPreview(contentEl, entry);
        const grid = contentEl.createDiv({ cls: 'gate-mistake-tag-grid' });
        this.tagTree.forEach(node => {
            const btn = grid.createEl('button', { text: node.label, cls: 'gate-btn' });
            btn.onclick = () => { if (node.children.length === 0) this.selectTag(node.label); else this.renderChildren(entry, node); };
        });
        const footer = contentEl.createDiv({ cls: 'gate-modal-footer' });
        footer.createEl('button', { text: 'Skip this one', cls: 'gate-btn' }).onclick = () => this.advance(null, null);
        footer.createEl('button', { text: 'Skip remaining', cls: 'gate-btn' }).onclick = () => this.close();
    }
    renderChildren(entry, node) {
        const { contentEl } = this; contentEl.empty();
        contentEl.createEl('h3', { text: `Why was this one wrong? (${this.index + 1} / ${this.wrongEntries.length}) — ${node.label}` });
        this.renderQuestionPreview(contentEl, entry);
        contentEl.createEl('p', { cls: 'gate-text-muted', text: 'Optional: pick a more specific reason, or keep the general tag.' });
        const grid = contentEl.createDiv({ cls: 'gate-mistake-tag-grid' });
        grid.createEl('button', { text: `Just "${node.label}"`, cls: 'gate-btn primary' }).onclick = () => this.selectTag(node.label);
        node.children.forEach(child => { grid.createEl('button', { text: child, cls: 'gate-btn' }).onclick = () => this.selectTag(`${node.label}/${child}`); });
        const footer = contentEl.createDiv({ cls: 'gate-modal-footer' });
        footer.createEl('button', { text: '← Back', cls: 'gate-btn' }).onclick = () => this.renderCurrent();
        footer.createEl('button', { text: 'Skip this one', cls: 'gate-btn' }).onclick = () => this.advance(null, null);
    }
    renderNote() {
        const { contentEl } = this; contentEl.empty();
        const entry = this.wrongEntries[this.index];
        const isLast = this.index === this.wrongEntries.length - 1;
        contentEl.createEl('h3', { text: `Tag: ${this.pendingTag}` });
        this.renderQuestionPreview(contentEl, entry);
        contentEl.createEl('p', { text: 'Correct idea / one-line takeaway (optional):' });
        const input = contentEl.createEl('input', { type: 'text', cls: 'gate-mistake-note-input', attr: { placeholder: 'e.g. "Read GM off the -180° phase point..."' } });
        const commit = () => this.advance(this.pendingTag, input.value.trim());
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') commit(); });
        const footer = contentEl.createDiv({ cls: 'gate-modal-footer' });
        footer.createEl('button', { text: '← Back', cls: 'gate-btn' }).onclick = () => this.renderCurrent();
        footer.createEl('button', { text: isLast ? 'Finish' : 'Next', cls: 'gate-btn primary' }).onclick = commit;
        setTimeout(() => input.focus(), 10);
    }
}

    mine.ConfirmModal = ConfirmModal; mine.SubmitSummaryModal = SubmitSummaryModal; mine.MistakeTagModal = MistakeTagModal;
})(window);
