/* =========================================================================
   POLYFILLS & HELPER CLASSES (Replacing Obsidian API)
   ========================================================================= */

HTMLElement.prototype.createEl = function(tag, opts = {}) {
    const el = document.createElement(tag);
    if (opts.cls) el.className = Array.isArray(opts.cls) ? opts.cls.join(' ') : opts.cls;
    if (opts.text) el.innerText = opts.text;
    if (opts.attr) Object.entries(opts.attr).forEach(([k,v]) => el.setAttribute(k, v));
    if (opts.style) el.setAttribute('style', opts.style);
    this.appendChild(el);
    return el;
};
HTMLElement.prototype.createDiv = function(opts = {}) { return this.createEl('div', opts); };
HTMLElement.prototype.createSpan = function(opts = {}) { return this.createEl('span', opts); };
HTMLElement.prototype.empty = function() { this.innerHTML = ''; };
HTMLElement.prototype.setText = function(t) { this.innerText = t; };
HTMLElement.prototype.addClass = function(c) { this.classList.add(c); };

class Notice {
    constructor(msg, duration = 3000) {
        const toast = document.createElement('div');
        toast.className = 'gate-notice';
        toast.innerText = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), duration);
    }
}

class Modal {
    constructor() {
        this.modalEl = document.createElement('div');
        this.modalEl.className = 'gate-modal-overlay';
        this.contentEl = document.createElement('div');
        this.contentEl.className = 'gate-modal-content';
        this.modalEl.appendChild(this.contentEl);
    }
    open() { document.body.appendChild(this.modalEl); this.onOpen(); }
    close() { this.modalEl.remove(); this.onClose(); }
    onOpen() {}
    onClose() {}
}

class Setting {
    constructor(container) {
        this.settingEl = container.createDiv({ cls: 'setting-item' });
        this.infoEl = this.settingEl.createDiv({ cls: 'setting-item-info' });
        this.nameEl = this.infoEl.createDiv({ cls: 'setting-item-name' });
        this.descEl = this.infoEl.createDiv({ cls: 'setting-item-description' });
        this.controlEl = this.settingEl.createDiv({ cls: 'setting-item-control' });
    }
    setName(n) { this.nameEl.innerText = n; return this; }
    setDesc(d) { this.descEl.innerText = d; return this; }
    setHeading() { this.settingEl.classList.add('setting-item-heading'); this.infoEl.style.flex = "none"; return this; }
    addText(cb) {
        const input = document.createElement('input'); input.type = 'text';
        this.controlEl.appendChild(input);
        cb({ inputEl: input, setPlaceholder: p => input.placeholder = p, setValue: v => input.value = v, onChange: fn => input.addEventListener('input', e => fn(e.target.value)) });
        return this;
    }
    addDropdown(cb) {
        const select = document.createElement('select');
        this.controlEl.appendChild(select);
        cb({ selectEl: select, addOption: (v, t) => { const o = document.createElement('option'); o.value=v; o.innerText=t; select.appendChild(o); }, setValue: v => select.value = v, onChange: fn => select.addEventListener('change', e => fn(e.target.value)) });
        return this;
    }
    addToggle(cb) {
        const input = document.createElement('input'); input.type = 'checkbox';
        this.controlEl.appendChild(input);
        cb({ inputEl: input, setValue: v => input.checked = !!v, onChange: fn => input.addEventListener('change', e => fn(e.target.checked)) });
        return this;
    }
    addButton(cb) {
        const btn = document.createElement('button'); btn.className = 'gate-btn';
        this.controlEl.appendChild(btn);
        cb({ setButtonText: t => btn.innerText = t, setCta: () => btn.classList.add('primary'), setWarning: () => btn.classList.add('danger'), onClick: fn => btn.addEventListener('click', fn) });
        return this;
    }
    addTextArea(cb) {
        const textarea = document.createElement('textarea');
        this.controlEl.appendChild(textarea);
        cb({ inputEl: textarea, setValue: v => textarea.value = v, onChange: fn => textarea.addEventListener('input', e => fn(e.target.value)) });
        return this;
    }
}

class MarkdownRenderer {
    static render(chunk, container) {
        let html = chunk
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/_(.*?)_/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            .replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
        
        // Render simple markdown images if they exist: ![[path]] or ![alt](path)
        html = html.replace(/!\[\[(.*?)\]\]/g, '<img src="$1" style="max-width:100%;">');
        
        container.innerHTML = `<p>${html}</p>`;
    }
}

const windowMoment = (dateStr) => {
    const d = dateStr ? new Date(dateStr) : new Date();
    return {
        toDate: () => d,
        format: (fmt) => {
            const pad = (n) => n.toString().padStart(2, '0');
            return fmt.replace('YYYY', d.getFullYear())
                      .replace('MM', pad(d.getMonth() + 1))
                      .replace('DD', pad(d.getDate()))
                      .replace('HH', pad(d.getHours()))
                      .replace('mm', pad(d.getMinutes()))
                      .replace('ss', pad(d.getSeconds()));
        },
        fromNow: () => {
            const diff = (new Date() - d) / 1000;
            if(diff < 60) return "just now";
            if(diff < 3600) return Math.floor(diff/60) + " minutes ago";
            if(diff < 86400) return Math.floor(diff/3600) + " hours ago";
            return Math.floor(diff/86400) + " days ago";
        }
    };
};

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

/* =========================================================================
   CONSTANTS & UTILS
   ========================================================================= */

const DEFAULT_SETTINGS = {
    corePrefix: 'q',
    aptitudePrefix: 'qga',
    selectionAlgorithm: 'ADAPTIVE',
    enableMistakeTags: true,
    nestedMistakeTags: true,
    mistakeTags: 'Careless, Conceptual Gap/Formula, Conceptual Gap/Concept, Conceptual Gap/Condition, Anxiety, Slow, Typo'
};

class GateUtils {
    static shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    static formatTime(seconds) {
        const total = Math.max(0, Math.floor(Number(seconds) || 0));
        const h = Math.floor(total / 3600);
        const m = Math.floor((total % 3600) / 60);
        const s = total % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    static normalizeBlockId(id) { return String(id).trim().toLowerCase().replace(/[\s._-]+/g, ''); }
    static buildGlobalQID(year, set, section, blockId) { return `${year}_${(set === null || set === undefined) ? '0' : set}_${section}_${blockId}`; }
    static labelFromFileName(basename) { return String(basename).replace(/^(onlyq|trends)[\s_-]+/i, '').replace(/[_]+/g, ' ').replace(/\.md$/i, '').trim(); }
    static parseYearSelector(raw) {
        const tokens = String(raw || '').split(',').map(s => s.trim()).filter(Boolean);
        if (tokens.length === 0) return null;
        const selectors = [];
        for (const tok of tokens) {
            const setMatch = tok.match(/^(\d{4})\s*\(\s*([^)]+?)\s*\)$/);
            if (setMatch) { selectors.push({ year: parseInt(setMatch[1], 10), set: setMatch[2].trim() }); continue; }
            const rangeMatch = tok.match(/^(\d{4})\s*-\s*(\d{4})$/);
            if (rangeMatch) {
                let a = parseInt(rangeMatch[1], 10), b = parseInt(rangeMatch[2], 10);
                if (a > b) [a, b] = [b, a];
                for (let y = a; y <= b; y++) selectors.push({ year: y, set: null });
                continue;
            }
            if (/^\d{4}$/.test(tok)) selectors.push({ year: parseInt(tok, 10), set: null });
        }
        return selectors.length > 0 ? selectors : null;
    }
    static yearSelectorMatches(selectors, q) { return selectors.some(s => s.year === q.year && (s.set === null || String(s.set) === String(q.set))); }
    static formatSourceLink(q) { const base = `ee_${q.year}`; const withSet = q.set ? `${base}(${q.set})` : base; return `[[${withSet}#^${q.blockId}]]`; }
    static parseMistakeTagTree(raw, nested) {
        const entries = String(raw || '').split(',').map(s => s.trim()).filter(Boolean);
        if (entries.length === 0) return [];
        if (!nested) return entries.map(label => ({ label, children: [] }));
        const order = [];
        const childrenByParent = new Map();
        for (const entry of entries) {
            const parts = entry.split('/').map(p => p.trim()).filter(Boolean);
            const parent = parts[0];
            const child = parts[1];
            if (!parent) continue;
            if (!childrenByParent.has(parent)) { childrenByParent.set(parent, []); order.push(parent); }
            if (child && !childrenByParent.get(parent).includes(child)) childrenByParent.get(parent).push(child);
        }
        return order.map(label => ({ label, children: childrenByParent.get(label) }));
    }
}

class AnswerKeySchema {
    static VALID_TYPES = ['MCQ', 'MSQ', 'NAT', 'MTA'];
    static validate(data, filePath) {
        if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error(`Malformed answer key "${filePath}": file does not contain a JSON object.`);
        const errors = [];
        if (data.version === undefined || data.version === null || data.version === '') errors.push(`missing required field "version"`);
        if (data.year === undefined || data.year === null || !/^\d{4}$/.test(String(data.year))) errors.push(`missing or invalid required field "year"`);
        if (!data.subject) errors.push(`missing required field "subject"`);
        if (!('set' in data)) errors.push(`missing required field "set"`);
        if (!data.questions || typeof data.questions !== 'object' || Array.isArray(data.questions)) errors.push(`missing or invalid required field "questions"`);
        else {
            const blockIds = Object.keys(data.questions);
            if (blockIds.length === 0) errors.push(`"questions" object is empty`);
            for (const blockId of blockIds) errors.push(...AnswerKeySchema.validateQuestion(data.questions[blockId], blockId));
        }
        if (errors.length > 0) throw new Error(`Malformed answer key "${filePath}":\n - ${errors.join('\n - ')}`);
    }
    static validateQuestion(q, blockId) {
        const errs = [];
        if (!q || typeof q !== 'object' || Array.isArray(q)) return [`question "${blockId}": is not an object`];
        if (!AnswerKeySchema.VALID_TYPES.includes(q.type)) return [`question "${blockId}": invalid or missing "type"`];
        if (q.marks === undefined || q.marks === null || isNaN(parseFloat(q.marks))) errs.push(`question "${blockId}": missing or invalid required field "marks"`);
        const hasUsableAnswer = (a) => (Array.isArray(a) && a.length > 0) || (typeof a === 'string' && a.trim() !== '') || typeof a === 'number';
        if (q.type === 'MCQ' || q.type === 'MSQ') { if (!hasUsableAnswer(q.answer)) errs.push(`question "${blockId}": missing required field "answer"`); } 
        else if (q.type === 'NAT') {
            if (!Array.isArray(q.ranges) || q.ranges.length === 0) errs.push(`question "${blockId}": missing required "ranges" array`);
            else q.ranges.forEach((r, idx) => { if (!Array.isArray(r) || r.length !== 2 || r.some(v => typeof v !== 'number' || isNaN(v))) errs.push(`question "${blockId}": ranges[${idx}] must be a [min, max] numeric pair`); });
        }
        return errs;
    }
}

class GateGrader {
    static grade(userAns, keyObj) {
        try {
            if (!keyObj) return { status: "NOT GRADED (No Key)", marksAwarded: 0 };
            if (keyObj.type === 'MTA') return { status: "CORRECT (MTA)", marksAwarded: parseFloat(keyObj.marks) || 0 };
            const hasAnswer = !!(userAns && String(userAns).trim() !== "");
            if (!hasAnswer) return { status: "UNATTEMPTED", marksAwarded: 0 };
            const u = String(userAns).trim().toUpperCase();
            const rightMarks = parseFloat(keyObj.marks) || 0;
            const wrongMarks = keyObj.type === 'MCQ' ? (rightMarks === 2 ? (2 / 3) : (1 / 3)) : 0;

            switch (keyObj.type) {
                case 'MCQ': {
                    if (keyObj.answer === undefined || keyObj.answer === null) return { status: "NOT GRADED (Malformed Key)", marksAwarded: 0 };
                    const validOpts = Array.isArray(keyObj.answer) ? keyObj.answer.map(a => String(a).toUpperCase()) : [String(keyObj.answer).toUpperCase()];
                    if (validOpts.includes(u)) return { status: "CORRECT", marksAwarded: rightMarks };
                    return { status: "WRONG", marksAwarded: -wrongMarks };
                }
                case 'MSQ': {
                    if (keyObj.answer === undefined || keyObj.answer === null) return { status: "NOT GRADED (Malformed Key)", marksAwarded: 0 };
                    const cleanU = u.replace(/[^A-Z0-9]/g, '');
                    const sortedU = cleanU.split('').sort().join('');
                    let keyOpts;
                    if (Array.isArray(keyObj.answer)) keyOpts = keyObj.answer.map(a => String(a).toUpperCase());
                    else {
                        const raw = String(keyObj.answer);
                        keyOpts = (/[^A-Za-z0-9]/.test(raw) ? raw.split(/[^A-Za-z0-9]+/).filter(Boolean) : raw.split('')).map(a => a.toUpperCase());
                    }
                    if (sortedU === keyOpts.sort().join('')) return { status: "CORRECT", marksAwarded: rightMarks };
                    return { status: "WRONG", marksAwarded: 0 };
                }
                case 'NAT': {
                    if (!/^-?\d+(\.\d+)?$/.test(u)) return { status: "WRONG", marksAwarded: 0 };
                    if (!Array.isArray(keyObj.ranges)) return { status: "NOT GRADED (Malformed Key)", marksAwarded: 0 };
                    const uVal = parseFloat(u);
                    let isCorrect = false;
                    for (const range of keyObj.ranges) {
                        if (!Array.isArray(range) || range.length !== 2) continue;
                        const min = Math.min(range[0], range[1]), max = Math.max(range[0], range[1]);
                        if (uVal >= min && uVal <= max) { isCorrect = true; break; }
                    }
                    if (isCorrect) return { status: "CORRECT", marksAwarded: rightMarks };
                    return { status: "WRONG", marksAwarded: 0 };
                }
                default: return { status: "ERROR (Unknown Type)", marksAwarded: 0 };
            }
        } catch (e) {
            console.error(e);
            return { status: "NOT GRADED (Error)", marksAwarded: 0 };
        }
    }
}

/* =========================================================================
   MANAGERS (Storage using localStorage)
   ========================================================================= */
class HistoryManager {
    constructor() { this.data = {}; }
    async load() { this.data = JSON.parse(localStorage.getItem('gate_history') || '{}'); }
    async save() { localStorage.setItem('gate_history', JSON.stringify(this.data)); return true; }
    getRecord(qid) { return this.data[qid] || { views: 0, attempts: 0, correct: 0, wrong: 0, totalTimeSec: 0, lastAttemptDate: null }; }
    async updateRecord(qid, isViewed, isAttempted, isCorrect, timeSpentSec) {
        const rec = this.getRecord(qid);
        if (isViewed) rec.views += 1;
        if (isAttempted) {
            rec.attempts += 1;
            if (isCorrect) rec.correct += 1; else rec.wrong += 1;
            rec.lastAttemptDate = new Date().toISOString();
        }
        rec.totalTimeSec += (timeSpentSec || 0);
        this.data[qid] = rec;
    }
    recordMistakeTag(qid, tag) {
        if (!tag) return;
        const rec = this.getRecord(qid);
        rec.mistakeTagCounts = rec.mistakeTagCounts || {};
        rec.mistakeTagCounts[tag] = (rec.mistakeTagCounts[tag] || 0) + 1;
        this.data[qid] = rec;
    }
    recordMistakeNote(qid, note) {
        if (!note) return;
        const rec = this.getRecord(qid);
        rec.lastMistakeNote = note;
        rec.lastMistakeNoteDate = new Date().toISOString();
        this.data[qid] = rec;
    }
}

class SessionManager {
    async saveSession(data) { localStorage.setItem('gate_session', JSON.stringify({ version: 2, ...data })); return true; }
    async loadSession() { const d = localStorage.getItem('gate_session'); return d ? JSON.parse(d) : null; }
    async clearSession() { localStorage.removeItem('gate_session'); }
}

/* =========================================================================
   MISTAKE TAG MODAL
   ========================================================================= */
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
        MarkdownRenderer.render(entry.q.chunk, box);
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

/* =========================================================================
   INDEXER (Static Website File Loader via Manifest)
   ========================================================================= */
class GateIndexer {
    constructor(app) {
        this.app = app;
        this.masterIndex = [];
        this.institutes = new Set();
        this.subjects = new Set();
        this.topics = new Set();
        this.topicToSubjects = new Map();
        this.stats = this.emptyStats();
    }
    emptyStats() {
        return { total: 0, bySection: { GA: 0, EE: 0 }, byMarks: { GA1: 0, GA2: 0, EE1: 0, EE2: 0 }, unknownType: 0, duplicates: 0, keyFileErrors: [] };
    }
    async buildMasterIndex(force = false) {
        if (!force && this.masterIndex.length > 0) return;
        await this.app.historyManager.load();
        
        let manifest;
        try { 
            // The ?t=... forces the browser to download the freshest file, bypassing the cache!
            const response = await fetch('pyq-vault-index.json?t=' + new Date().getTime());
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} (File not found on GitHub Pages)`);
            }
            manifest = await response.json(); 
        }
        catch (e) { 
            console.error("GATE Simulator Fetch Error:", e); 
            new Notice("Error loading pyq-vault-index.json. Press F12 to check the console.");
            return; 
        }

        this.masterIndex = []; this.institutes.clear(); this.subjects.clear(); this.topics.clear(); this.topicToSubjects = new Map();
        const seenQids = new Set(), qidMap = new Map();
        let duplicateCount = 0, skippedNoKeyCount = 0;
        const keysDict = {}, keyFileErrors = [];

        for (const file of manifest.answerKeys || []) {
            try {
                const data = await fetch(file).then(r => r.json());
                AnswerKeySchema.validate(data, file);
                const setKey = (data.set === undefined || data.set === null) ? 'null' : data.set;
                keysDict[`${data.year}_${setKey}`] = data;
            } catch (e) { keyFileErrors.push({ path: file, message: e.message }); }
        }

        for (const file of manifest.onlyQYear || []) {
            try {
                let content = await fetch(file).then(r => r.text());
                let inst = "Unknown Institute"; 
                // Frontmatter rudimentary parse
                const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
                if(fmMatch) {
                    const fm = fmMatch[1];
                    const im = fm.match(/institute:\s*(.*)/);
                    if(im) inst = im[1].trim();
                    content = content.substring(fmMatch[0].length);
                }
                this.institutes.add(inst);

                const chunks = content.split(/^---\s*$/gm);
                for (let chunk of chunks) {
                    chunk = chunk.trim();
                    if (!chunk || !chunk.includes('![[')) continue;

                    let year = null, set = null, blockId = null, section = null;
                    const embedRegex = /!\[\[(.*?)(?:\((\d+)\))?#\^(.*?)\]\]/g;
                    let match;
                    while ((match = embedRegex.exec(chunk)) !== null) {
                        const fileName = match[1]; set = match[2] !== undefined ? match[2] : null; blockId = GateUtils.normalizeBlockId(match[3]);
                        const yearMatch = fileName.match(/(\d{4})/); if (yearMatch) year = parseInt(yearMatch[1], 10);
                        if (blockId.startsWith(this.app.settings.aptitudePrefix)) section = 'GA';
                        else if (blockId.startsWith(this.app.settings.corePrefix)) section = 'EE';
                    }
                    if (!blockId || !year || !section) continue;

                    const qid = GateUtils.buildGlobalQID(year, set, section, blockId);
                    if (seenQids.has(qid)) { duplicateCount++; continue; }
                    seenQids.add(qid);

                    const setKey = set === null ? 'null' : set;
                    const paperKey = keysDict[`${year}_${setKey}`];
                    let type = 'UNKNOWN', marks = 0, keyObj = null;
                    if (paperKey && paperKey.questions && paperKey.questions[blockId]) {
                        keyObj = paperKey.questions[blockId]; type = keyObj.type; marks = parseFloat(keyObj.marks) || 0;
                    } else skippedNoKeyCount++;

                    const q = { qid, blockId, chunk, institute: inst, year, set, section, type, marks, keyObj, subjects: [], topics: [] };
                    this.masterIndex.push(q);
                    qidMap.set(qid, q);
                }
            } catch(e) {}
        }

        const tagFiles = [...(manifest.onlyQSubject || []), ...(manifest.onlyQTopic || [])];
        const tagRegex = /!?\[\[(.*?)(?:\((\d+)\))?#\^(.*?)\]\]/g;
        const plainLinkRegex = /(?<!!)\[\[([^\]|#]+?)(?:\|[^\]]+)?\]\]/g;

        for (const file of tagFiles) {
            try {
                let content = await fetch(file).then(r => r.text());
                const isSubject = (manifest.onlyQSubject||[]).includes(file);
                const isTopic = (manifest.onlyQTopic||[]).includes(file);
                const label = GateUtils.labelFromFileName(file.split('/').pop());
                if (!label) continue;

                if (isTopic) {
                    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
                    const declared = new Set();
                    if(fmMatch) {
                        const sm = fmMatch[1].match(/subject:\s*(.*)/);
                        if(sm) {
                            const subjects = sm[1].split(',').map(s=>s.replace(/\[\[|\]\]/g, '').trim()).filter(Boolean);
                            subjects.forEach(s=>declared.add(s));
                        }
                    }
                    let lm; plainLinkRegex.lastIndex = 0;
                    while ((lm = plainLinkRegex.exec(content)) !== null) {
                        const linkText = lm[1].trim();
                        const matchedSubject = Array.from(this.subjects).find(s => s.toLowerCase() === linkText.toLowerCase());
                        if (matchedSubject) declared.add(matchedSubject);
                    }
                    if (declared.size > 0) {
                        if (!this.topicToSubjects.has(label)) this.topicToSubjects.set(label, new Set());
                        declared.forEach(s => this.topicToSubjects.get(label).add(s));
                    }
                }
                
                let match; tagRegex.lastIndex = 0;
                while ((match = tagRegex.exec(content)) !== null) {
                    const fileName = match[1], set = match[2] !== undefined ? match[2] : null, blockId = GateUtils.normalizeBlockId(match[3]);
                    const yearMatch = fileName.match(/(\d{4})/); if (!yearMatch) continue;
                    const year = parseInt(yearMatch[1], 10);
                    let section = null;
                    if (blockId.startsWith(this.app.settings.aptitudePrefix)) section = 'GA';
                    else if (blockId.startsWith(this.app.settings.corePrefix)) section = 'EE';
                    if (!section) continue;

                    const qid = GateUtils.buildGlobalQID(year, set, section, blockId);
                    const q = qidMap.get(qid); if (!q) continue;

                    if (isSubject && !q.subjects.includes(label)) { q.subjects.push(label); this.subjects.add(label); }
                    if (isTopic && !q.topics.includes(label)) { q.topics.push(label); this.topics.add(label); }
                }
            } catch(e) {}
        }

        const stats = this.emptyStats();
        stats.total = this.masterIndex.length; stats.duplicates = duplicateCount; stats.keyFileErrors = keyFileErrors;
        for (const q of this.masterIndex) {
            if (q.section === 'GA' || q.section === 'EE') stats.bySection[q.section]++;
            if (q.type === 'UNKNOWN') stats.unknownType++;
            const bucket = `${q.section}${q.marks}`; if (bucket in stats.byMarks) stats.byMarks[bucket]++;
        }
        this.stats = stats;

        if (keyFileErrors.length > 0) new Notice(`Excluded ${keyFileErrors.length} answer key file(s) for schema errors.`, 8000);
    }
}

class ReplicationShortfallError extends Error {
    constructor(buckets) {
        super(`Not enough questions for Official Blueprint.`); this.name = 'ReplicationShortfallError';
        this.buckets = buckets.map(b => ({ label: b.label, have: b.list.length, need: b.need }));
        this.totalAvailable = buckets.reduce((s, b) => s + b.list.length, 0);
    }
}

/* =========================================================================
   QUESTION SELECTOR
   ========================================================================= */
class QuestionSelector {
    static ALGORITHMS = [['ADAPTIVE', 'Adaptive Priority'], ['OFFICIAL', 'Official Replication'], ['RANDOM', 'Random'], ['MISTAKE_FOCUS', 'Mistake Focus'], ['SPACED_REPETITION', 'Spaced Repetition'], ['WEAKNESS_BOOST', 'Weakness Boost (by Type/Marks)'], ['TOPIC_PRIORITY', 'Frequency × Weakness (by Topic)']];
    static ALGORITHM_LABELS = Object.fromEntries(QuestionSelector.ALGORITHMS);
    static MASTERY_MIN_ATTEMPTS = 3; static MASTERY_THRESHOLD = 0.75;

    static computeMastery(rec) {
        if (!rec || rec.attempts === 0) return { accuracy: null, isMastered: false, needsReview: false };
        const accuracy = rec.correct / rec.attempts;
        const isMastered = rec.wrong > 0 && rec.attempts >= QuestionSelector.MASTERY_MIN_ATTEMPTS && accuracy >= QuestionSelector.MASTERY_THRESHOLD;
        const needsReview = rec.wrong > 0 && !isMastered;
        return { accuracy, isMastered, needsReview };
    }
    static daysSince(dateStr, now) {
        if (!dateStr) return null;
        const t = new Date(dateStr).getTime(); if (isNaN(t)) return null;
        return Math.max(0, (now - t) / 86400000);
    }
    static computeWeaknessMap(index, hm) {
        const buckets = {};
        for (const q of index) {
            const key = `${q.section}_${q.type}_${q.marks}`;
            if (!buckets[key]) buckets[key] = { correct: 0, attempts: 0 };
            const rec = hm.getRecord(q.qid);
            buckets[key].correct += rec.correct; buckets[key].attempts += rec.attempts;
        }
        const acc = {};
        for (const key in buckets) acc[key] = buckets[key].attempts > 0 ? (buckets[key].correct / buckets[key].attempts) : null;
        return acc;
    }
    static computeTopicWeaknessMap(index, hm, subjectScope) {
        const buckets = {};
        for (const q of index) {
            if (subjectScope && subjectScope !== 'ALL' && !(q.subjects || []).includes(subjectScope)) continue;
            const labels = (q.topics && q.topics.length > 0) ? q.topics : (q.subjects || []);
            if (labels.length === 0) continue;
            const rec = hm.getRecord(q.qid);
            for (const label of labels) {
                if (!buckets[label]) buckets[label] = { correct: 0, attempts: 0, count: 0 };
                buckets[label].count += 1; buckets[label].correct += rec.correct; buckets[label].attempts += rec.attempts;
            }
        }
        const map = {};
        for (const label in buckets) {
            const b = buckets[label]; map[label] = { count: b.count, correct: b.correct, attempts: b.attempts, accuracy: b.attempts > 0 ? (b.correct / b.attempts) : null };
        }
        return map;
    }
    static scoreQuestion(q, hm, algorithm, now, maps) {
        const rec = hm.getRecord(q.qid);
        const mastery = QuestionSelector.computeMastery(rec);
        const mistakeAgeDays = QuestionSelector.daysSince(rec.wrong > 0 ? rec.lastAttemptDate : null, now);
        const seenAgeDays = QuestionSelector.daysSince(rec.lastAttemptDate, now);

        switch (algorithm) {
            case 'RANDOM': case 'OFFICIAL': return 1;
            case 'MISTAKE_FOCUS': {
                if (rec.wrong === 0) return 0.5;
                let score = 10 + rec.wrong * 10;
                if (mastery.isMastered) score *= 0.15;
                if (mistakeAgeDays !== null) score += Math.max(0, 10 - mistakeAgeDays * 0.3);
                return Math.max(0.1, score);
            }
            case 'SPACED_REPETITION': {
                if (rec.views === 0) return 15;
                let score = 2;
                if (seenAgeDays !== null) score += Math.min(25, seenAgeDays * 1.2);
                if (mastery.needsReview) score += 8;
                if (mastery.isMastered) score *= 0.4;
                return Math.max(0.1, score);
            }
            case 'WEAKNESS_BOOST': {
                const key = `${q.section}_${q.type}_${q.marks}`;
                const bucketAcc = maps?.weaknessMap ? maps.weaknessMap[key] : null;
                return bucketAcc === null ? 8 : Math.max(0.5, (1 - bucketAcc) * 20);
            }
            case 'TOPIC_PRIORITY': {
                const labels = (q.topics && q.topics.length > 0) ? q.topics : (q.subjects || []);
                if (labels.length === 0 || !maps?.topicWeaknessMap) return 3;
                let best = 0;
                for (const label of labels) {
                    const info = maps.topicWeaknessMap[label]; if (!info) continue;
                    best = Math.max(best, info.count * (info.accuracy === null ? 0.7 : Math.max(0.15, 1 - info.accuracy)));
                }
                return Math.max(0.5, best);
            }
            case 'ADAPTIVE': default: {
                let score = 10;
                score += rec.wrong * 8; score -= rec.correct * 4;
                if (mistakeAgeDays !== null) score += Math.max(0, 15 - mistakeAgeDays * 0.5);
                if (rec.views === 0) score += 12; else if (seenAgeDays !== null) score += Math.min(20, seenAgeDays * 0.8);
                if (mastery.isMastered) score *= 0.3;
                return Math.max(0.1, score);
            }
        }
    }
    static weightedSample(pool, weights, n) {
        const items = pool.map((q, i) => ({ q, w: Math.max(0.0001, weights[i]) }));
        const picked = []; const count = Math.min(n, items.length);
        for (let k = 0; k < count; k++) {
            const total = items.reduce((s, it) => s + it.w, 0);
            let r = Math.random() * total, idx = 0;
            for (; idx < items.length; idx++) { r -= items[idx].w; if (r <= 0) break; }
            idx = Math.min(idx, items.length - 1);
            picked.push(items[idx].q); items.splice(idx, 1);
        }
        return picked;
    }
    static pickFromPool(pool, hm, algorithm, n, maps) {
        if (algorithm === 'RANDOM' || algorithm === 'OFFICIAL') return (n > 0 && n < pool.length) ? GateUtils.shuffleArray(pool).slice(0, n) : GateUtils.shuffleArray(pool);
        return QuestionSelector.weightedSample(pool, pool.map(q => QuestionSelector.scoreQuestion(q, hm, algorithm, Date.now(), maps)), (n > 0 && n < pool.length) ? n : pool.length);
    }
    static explainSelection(q, hm, algorithm, maps) {
        switch (algorithm) {
            case 'RANDOM': return 'Random selection';
            case 'OFFICIAL': return 'Official blueprint slot';
            default: return 'Selected based on your mastery & history.';
        }
    }
    static selectQuestions(pool, fullIndex, hm, config) {
        const algorithm = config.algorithm || 'ADAPTIVE';
        const maps = {
            weaknessMap: algorithm === 'WEAKNESS_BOOST' ? QuestionSelector.computeWeaknessMap(fullIndex, hm) : null,
            topicWeaknessMap: algorithm === 'TOPIC_PRIORITY' ? QuestionSelector.computeTopicWeaknessMap(fullIndex, hm, config.subject) : null
        };

        if (config.mode === 'REPLICATION') {
            const buckets = [
                { list: pool.filter(q => q.section === 'GA' && q.marks === 1), need: 5, label: 'GA (1 Mark)' },
                { list: pool.filter(q => q.section === 'GA' && q.marks === 2), need: 5, label: 'GA (2 Mark)' },
                { list: pool.filter(q => q.section === 'EE' && q.marks === 1), need: 25, label: 'EE (1 Mark)' },
                { list: pool.filter(q => q.section === 'EE' && q.marks === 2), need: 30, label: 'EE (2 Mark)' }
            ];
            const shortfalls = buckets.filter(b => b.list.length < b.need);
            if (shortfalls.length > 0) throw new ReplicationShortfallError(buckets);
            const selected = [];
            buckets.forEach(b => selected.push(...QuestionSelector.pickFromPool(b.list, hm, algorithm, b.need, maps)));
            return selected.map(q => ({ ...q, selectionReason: QuestionSelector.explainSelection(q, hm, algorithm, maps) }));
        }

        const selected = QuestionSelector.pickFromPool(pool, hm, algorithm, config.count > 0 ? config.count : 0, maps);
        return selected.map(q => ({ ...q, selectionReason: QuestionSelector.explainSelection(q, hm, algorithm, maps) }));
    }
}

class TestGenerator {
    static generate(index, config, hm) {
        let pool = [...index];
        if (config.institute && config.institute !== 'ALL') pool = pool.filter(q => q.institute === config.institute);
        if (config.years) pool = pool.filter(q => GateUtils.yearSelectorMatches(config.years, q));
        if (config.subject && config.subject !== 'ALL') pool = pool.filter(q => (q.subjects || []).includes(config.subject));
        if (config.topic && config.topic !== 'ALL') pool = pool.filter(q => (q.topics || []).includes(config.topic));

        if (config.freshness === 'UNSEEN') pool = pool.filter(q => hm.getRecord(q.qid).views === 0);
        else if (config.freshness === 'UNATTEMPTED') pool = pool.filter(q => hm.getRecord(q.qid).attempts === 0);
        else if (config.freshness === 'MISTAKE') pool = pool.filter(q => QuestionSelector.computeMastery(hm.getRecord(q.qid)).needsReview);

        if (config.mode === 'PATTERN') {
            if (config.patType !== 'ALL') pool = pool.filter(q => q.type === config.patType);
            if (config.patMarks !== 'ALL') pool = pool.filter(q => q.marks === parseInt(config.patMarks, 10));
        }

        let selected = QuestionSelector.selectQuestions(pool, index, hm, config);
        if (selected.length === 0) throw new Error("No questions match your criteria.");

        if (config.sort === 'OFFICIAL') {
            const ga = selected.filter(q => q.section === 'GA').sort((a, b) => a.marks - b.marks);
            const ee = selected.filter(q => q.section === 'EE').sort((a, b) => a.marks - b.marks);
            selected = [...ga, ...ee];
        } else {
            selected = GateUtils.shuffleArray(selected);
        }
        return selected;
    }
}

/* =========================================================================
   UI CONTROLLERS
   ========================================================================= */

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
    }
    async onOpen() {
        this.containerEl.empty();
        this.containerEl.createEl('h3', { text: 'Loading Database...', style: 'padding:20px' });
        await this.app.indexer.buildMasterIndex();
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
        refreshBtn.onclick = async () => { new Notice("Refreshing..."); await this.app.indexer.buildMasterIndex(true); this.renderConfigUI(session); };

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

        new Setting(formBody).setName('Filters').setHeading();
        let instSel; new Setting(formBody).setName('Institute').addDropdown(d => { ['ALL', ...Array.from(this.app.indexer.institutes).sort()].forEach(i => d.addOption(i, i)); d.setValue('ALL'); instSel = d.selectEl; });
        let subjSel, topicSel;
        new Setting(formBody).setName('Subject').addDropdown(d => { ['ALL', ...Array.from(this.app.indexer.subjects).sort()].forEach(s => d.addOption(s, s)); d.setValue('ALL'); subjSel = d.selectEl; d.onChange(v => refreshTopicOptions(v)); });
        new Setting(formBody).setName('Topic').addDropdown(d => { topicSel = d.selectEl; });

        const refreshTopicOptions = (sFilt) => {
            const opts = (sFilt && sFilt !== 'ALL') ? Array.from(this.app.indexer.topics).filter(t => this.app.indexer.topicToSubjects.get(t)?.has(sFilt)) : Array.from(this.app.indexer.topics);
            topicSel.empty(); topicSel.createEl('option', { value: 'ALL', text: 'ALL' });
            opts.forEach(t => topicSel.createEl('option', { value: t, text: t }));
        };
        refreshTopicOptions('ALL');

        let freshSel; new Setting(formBody).setName('Freshness').addDropdown(d => { [['ALL', 'All'], ['UNSEEN', 'Unseen'], ['UNATTEMPTED', 'Unattempted'], ['MISTAKE', 'Mistake Review']].forEach(([v, t]) => d.addOption(v, t)); d.setValue(this.setupMode === 'REVIEW' ? 'MISTAKE' : 'ALL'); freshSel = d.selectEl; });
        let algoSel; new Setting(formBody).setName('Algorithm').addDropdown(d => { QuestionSelector.ALGORITHMS.forEach(([id, lbl]) => d.addOption(id, lbl)); d.setValue('ADAPTIVE'); algoSel = d.selectEl; });
        
        new Setting(formBody).setName('Test structure').setHeading();
        let countInp, durInp;
        new Setting(formBody).setName('Question count').addText(t => { t.inputEl.type = 'number'; t.setValue(this.setupMode === 'REPLICATION' ? '65' : '30'); countInp = t.inputEl; });
        new Setting(formBody).setName('Duration (Mins)').addText(t => { t.inputEl.type = 'number'; t.setValue(this.setupMode === 'REPLICATION' ? '180' : '60'); durInp = t.inputEl; });
        
        const errorBox = configBox.createDiv({ cls: 'gate-inline-banner', style: 'display: none;' });
        const startBtn = configBox.createEl('button', { text: 'Initialize Engine', cls: 'gate-start-btn' });
        startBtn.onclick = () => {
            errorBox.style.display = 'none'; errorBox.empty();
            config.institute = instSel.value; config.subject = subjSel.value; config.topic = topicSel.value; config.freshness = freshSel.value; config.algorithm = algoSel.value;
            config.count = parseInt(countInp.value, 10) || 0;
            const isUntimed = false; const durMins = parseInt(durInp.value, 10) || 0;
            
            try {
                this.questions = TestGenerator.generate(this.app.indexer.masterIndex, config, this.app.historyManager);
                this.questions.forEach((_, i) => { this.answers[i] = ""; this.reviews[i] = false; this.questionTimes[i] = 0; });
                this.viewedIndices = new Set(); this.isUntimed = isUntimed; this.timeLeft = durMins * 60; this.currentIndex = 0; this.selectedAlgorithm = config.algorithm;
                if (!isUntimed) this.startTimer();
                this.renderExamUI();
            } catch (e) { new Notice(e.message); }
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

        const footer = main.createDiv({ cls: 'gate-exam-footer' });
        const footerL = footer.createDiv({ cls: 'gate-footer-left' });
        this.dom.btnPrev = footerL.createEl('button', { text: 'Prev', cls: 'gate-btn' });
        this.dom.btnClear = footerL.createEl('button', { text: 'Clear', cls: 'gate-btn' });
        this.dom.btnNext = footer.createEl('button', { text: 'Next', cls: 'gate-btn primary' });

        this.dom.btnPrev.onclick = () => { if (this.currentIndex > 0) this.navigate(-1); };
        this.dom.btnNext.onclick = () => { if (this.currentIndex < this.questions.length - 1) this.navigate(1); };
        this.dom.btnClear.onclick = () => { this.answers[this.currentIndex] = ""; this.updateQuestionView(); this.autoSaveSessionSilent(); };

        const sidebar = layout.createDiv({ cls: 'gate-exam-sidebar' });
        this.dom.timer = sidebar.createDiv({ cls: 'gate-exam-timer-box', text: GateUtils.formatTime(this.timeLeft) });
        this.dom.summary = sidebar.createDiv({ cls: 'gate-progress-summary' });
        const palette = sidebar.createDiv({ cls: 'gate-exam-palette' });
        this.dom.grid = palette.createDiv({ cls: 'gate-exam-grid' });
        sidebar.createEl('button', { text: 'Submit Test', cls: 'gate-btn danger' }).onclick = () => this.submitTest();

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
                lbl.appendText(` ${opt}`);
            });
        } else if (q.type === 'NAT') {
            const input = this.dom.ansContainer.createEl('input', { type: 'text', placeholder: 'e.g. 1.05' });
            input.value = this.answers[this.currentIndex];
            input.oninput = (e) => { this.answers[this.currentIndex] = e.target.value.replace(/[^0-9.-]/g, ''); this.updatePaletteButton(this.currentIndex); this.updateProgressSummary(); };
        } else { this.dom.ansContainer.createEl('span', { text: ` Not Graded/MTA`, cls: 'gate-text-muted' }); }
        
        this.viewedIndices.add(this.currentIndex);
        MarkdownRenderer.render(q.chunk, this.dom.content);
        this.dom.btnPrev.disabled = this.currentIndex === 0;
        this.dom.btnNext.disabled = this.currentIndex === this.questions.length - 1;
        (this.dom.paletteButtons || []).forEach(b => b.classList.remove('active'));
        this.updatePaletteButton(this.currentIndex);
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
    
    async submitTest() {
        if (this.isSubmitting) return; this.isSubmitting = true;
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
            
            report += `### Q${i + 1} - [${q.qid}]\n\n${q.chunk}\n\n`;
            report += `**Your Answer:** \`${userAns || "None"}\` | **Result:** ${res.status} (${res.marksAwarded} Marks)\n\n---\n\n`;
        }

        let content = `# Session Analytics\n\nScore: ${totalMarks.toFixed(2)}\nCorrect: ${correct}\nWrong: ${wrong}\n\n---\n\n` + report;
        downloadFile(`Analytics_${new Date().toISOString().split('T')[0]}.md`, content);
        
        await this.app.historyManager.save();
        await this.app.sessionManager.clearSession();
        this.resetState();
        this.app.switchView('dashboard');
    }
}

class GateDashboardView {
    constructor(app, container) { this.app = app; this.containerEl = container; }
    async onOpen() {
        this.containerEl.empty();
        this.containerEl.createEl('h3', { text: 'Loading Analytics...', style: 'padding:20px' });
        await this.loadAndRender();
    }
    async loadAndRender() {
        await this.app.historyManager.load(); await this.app.indexer.buildMasterIndex();
        this.containerEl.empty();
        const layout = this.containerEl.createDiv({ cls: 'gate-dashboard-container' });
        const header = layout.createDiv({ cls: 'gate-dash-header' });
        header.createEl('h2', { text: 'GATE Preparation Dashboard' });
        header.createEl('button', { text: '⟳ Refresh', cls: 'gate-btn' }).onclick = () => this.loadAndRender();

        const history = this.app.historyManager.data;
        let totalAttempts = 0, totalCorrect = 0;
        for (const rec of Object.values(history)) { totalAttempts += rec.attempts; totalCorrect += rec.correct; }
        
        const summaryBox = layout.createDiv({ cls: 'gate-dash-summary' });
        this.renderCard(summaryBox, 'Questions Attempted', totalAttempts);
        this.renderCard(summaryBox, 'Global Accuracy', totalAttempts > 0 ? `${((totalCorrect/totalAttempts)*100).toFixed(1)}%` : '0%');
    }
    renderCard(parent, title, value) {
        const card = parent.createDiv({ cls: 'gate-dash-card' });
        card.createEl('h4', { text: title }); card.createDiv({ cls: 'val', text: value });
    }
}

class GateSettingTab {
    constructor(app, container) { this.app = app; this.containerEl = container; }
    onOpen() {
        this.containerEl.empty();
        const wrapper = this.containerEl.createDiv({ cls: 'gate-view-container' }).createDiv({ cls: 'gate-config-screen' });
        wrapper.createEl('h2', { text: 'Settings', cls: 'gate-config-title' });
        
        const s = this.app.settings;
        const save = () => { localStorage.setItem('gate_settings', JSON.stringify(this.app.settings)); new Notice("Settings Saved."); };

        new Setting(wrapper).setName('Mistake tagging').setHeading();
        new Setting(wrapper).setName('Prompt for mistake tags').addToggle(t => t.setValue(s.enableMistakeTags !== false).onChange(v => { s.enableMistakeTags = v; save(); }));
        new Setting(wrapper).setName('Tag list').addTextArea(t => t.setValue(s.mistakeTags || '').onChange(v => { s.mistakeTags = v; save(); }));
        
        new Setting(wrapper).setName('Danger zone').setHeading();
        new Setting(wrapper).setName('Clear history').addButton(btn => btn.setButtonText('Clear Progress').setWarning().onClick(() => {
            if (confirm('Permanently erase all progress history?')) { localStorage.removeItem('gate_history'); new Notice('History cleared.'); }
        }));
    }
}

/* =========================================================================
   APP INITIALIZATION
   ========================================================================= */
class GateApp {
    constructor() {
        this.settings = { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem('gate_settings') || '{}') };
        this.historyManager = new HistoryManager();
        this.sessionManager = new SessionManager();
        this.indexer = new GateIndexer(this);
    }
    async init() {
        this.views = {
            exam: new GateExamView(this, document.querySelector('#view-exam .view-content')),
            dashboard: new GateDashboardView(this, document.querySelector('#view-dashboard .view-content')),
            settings: new GateSettingTab(this, document.querySelector('#view-settings .view-content'))
        };
        
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchView(e.target.dataset.view));
        });
        
        await this.switchView('exam');
    }
    async switchView(viewId) {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelector(`.nav-btn[data-view="${viewId}"]`).classList.add('active');
        document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));
        document.getElementById(`view-${viewId}`).classList.add('active');
        
        if (this.views[viewId] && this.views[viewId].onOpen) {
            await this.views[viewId].onOpen();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => { window.app = new GateApp(); window.app.init(); });
