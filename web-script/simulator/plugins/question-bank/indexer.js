/* question-bank / indexer.js - downloads the vault index (pyq-vault-index.json), the answer keys, the question papers,
   the question text and the subject/topic tags, and builds the question pool. One build at a time; a build with
   failures is retried automatically next time instead of being kept as a broken partial pool. */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    const GS = g.GateShared;
    const lib = (GSim.pluginLib = GSim.pluginLib || {});
    const mine = (lib['question-bank'] = lib['question-bank'] || {});
    const GateUtils = mine.GateUtils, AnswerKeySchema = mine.AnswerKeySchema;
    const notice = (msg, ms) => { if (GS && GS.ui) GS.ui.notice(msg, ms); };

    // Same retry behaviour as the classic simulator: transient failures are retried with backoff, a 404 is not.
    async function fetchWithRetry(url, { retries = 3, backoffMs = 400, timeoutMs = 12000 } = {}) {
        let lastErr;
        for (let attempt = 0; attempt <= retries; attempt++) {
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), timeoutMs);
            try {
                const res = await fetch(GSim.loader.root + url, { signal: controller.signal, cache: 'no-store' });
                clearTimeout(timer);
                if (res.status === 404) throw Object.assign(new Error('HTTP 404 (not found)'), { isNotFound: true });
                if (!res.ok) throw new Error('HTTP ' + res.status);
                return res;
            } catch (e) {
                clearTimeout(timer);
                lastErr = e;
                if (e.isNotFound) break;
                if (attempt < retries) await new Promise(r => setTimeout(r, backoffMs * Math.pow(2, attempt)));
            }
        }
        throw new Error(`Failed to fetch "${url}" after ${retries + 1} attempts: ${lastErr && lastErr.message}`);
    }

class GateIndexer {
    constructor(cfg) {
        this.cfg = cfg;                         // () => { corePrefix, aptitudePrefix, manifestPath, sourceFolder }
        this.blocks = {};                       // "file::blockid" -> question text
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
    
    // ---- loading progress (read by the loading screen) ----
    static PHASES = [['Contacting your vault', 4], ['Reading answer keys', 12], ['Reading question papers', 24], ['Downloading question text', 48], ['Reading subject & topic tags', 12]];
    onProgress(fn) { this._listeners = this._listeners || new Set(); this._listeners.add(fn); fn(this.progress || { label: 'Starting…', pct: 0 }); return () => this._listeners.delete(fn); }
    _emit() { (this._listeners || []).forEach(fn => { try { fn(this.progress); } catch (e) {} }); }
    _phase(i, total) {
        const P = GateIndexer.PHASES, before = P.slice(0, i).reduce((a, p) => a + p[1], 0);
        this._ph = { i, before, span: P[i][1], total: Math.max(total, 1), done: 0, label: P[i][0] };
        this._setProgress();
    }
    _tick() { if (this._ph) { this._ph.done++; this._setProgress(); } }
    _setProgress() {
        const p = this._ph;
        this.progress = { label: p.label, done: p.done, total: p.total, pct: Math.min(99, Math.round(p.before + p.span * (p.done / p.total))), error: null };
        this._emit();
    }
    // Fetch many files at once (8 at a time); results come back in the original order so processing stays deterministic.
    async _fetchMany(files, kind, phaseIndex) {
        this._phase(phaseIndex, files.length);
        const out = new Array(files.length); let next = 0;
        const worker = async () => {
            while (next < files.length) {
                const i = next++, file = files[i];
                try { out[i] = { file, value: await fetchWithRetry(file).then(r => r[kind]()) }; }
                catch (error) { out[i] = { file, error }; }
                this._tick();
            }
        };
        await Promise.all(Array.from({ length: Math.min(8, files.length) }, worker));
        return out;
    }

    // One build at a time: tab switches and the Retry button never start duplicate downloads.
    buildMasterIndex(force = false) {
        if (this.building) return this.building;
        if (!force && this.masterIndex.length > 0 && !this.lastBuildHadErrors) return Promise.resolve();
        this.lastError = null;
        this.building = this._build(force).finally(() => { this.building = null; this._ph = null; this.progress = { label: 'Done', pct: 100, done: 1, total: 1, error: this.lastError }; this._emit(); });
        return this.building;
    }

    async _build(force = false) {
        // Previously this returned early any time masterIndex was non-empty,
        // even if the last build had partial fetch failures. That silently
        // locked in a broken/partial index until the user manually clicked
        // Refresh. Now a build with errors is not treated as "done" — it will
        // retry automatically the next time buildMasterIndex is called.
        this._phase(0, 1);
        let manifest;
        try { 
            // ?t= ensures we never cache the index file
            const response = await fetchWithRetry(this.cfg().manifestPath + '?t=' + new Date().getTime());
            manifest = await response.json(); 
        } 
        catch (e) { 
            console.error("GATE Simulator Fetch Error:", e); 
            this.lastError = "Couldn't download "+ this.cfg().manifestPath +" (" + (e && e.message ? e.message.replace(/^Failed to fetch "[^"]*" after \d+ attempts: /, '') : 'network error') + ").";
            this.lastBuildHadErrors = true;
            return; 
        }

        this.blocks = {};
        this.masterIndex = []; this.institutes.clear(); this.subjects.clear(); this.topics.clear(); this.topicToSubjects = new Map();
        const seenQids = new Set(), qidMap = new Map();
        let duplicateCount = 0, skippedNoKeyCount = 0;
        const keysDict = {}, keyFileErrors = [];
        const yearFileErrors = [], sourceFileErrors = [], tagFileErrors = [];
        const requiredSourceFiles = new Set(); 

        // 1. Load Answer Keys
        const keyResults = await this._fetchMany(manifest.answerKeys || [], 'json', 1);
        for (const { file, value: data, error: fetchErr } of keyResults) {
            try {
                if (fetchErr) throw fetchErr;
                AnswerKeySchema.validate(data, file);
                const setKey = (data.set === undefined || data.set === null) ? 'null' : data.set;
                keysDict[`${data.year}_${setKey}`] = data;
            } catch (e) { keyFileErrors.push({ path: file, message: e.message }); }
        }

        // 2. Load "onlyQ" Year Files to build the index
        const yearResults = await this._fetchMany(manifest.onlyQYear || [], 'text', 2);
        for (const { file, value: yearText, error: fetchErr } of yearResults) {
            try {
                if (fetchErr) throw fetchErr;
                let content = yearText;
                let inst = "Unknown Institute"; 
                
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
                    
                    const embedRegex = /!\[\[([^#|\]]+).*?#\^([a-zA-Z0-9_-]+)\]\]/g;
                    let match;
                    
                    // This loop will run multiple times if multiple block IDs exist (e.g. common data)
                    // The last matched block ID dictates the final ID of the question used for grading
                    while ((match = embedRegex.exec(chunk)) !== null) {
                        const fileName = match[1].trim(); 
                        blockId = GateUtils.normalizeBlockId(match[2]);
                        
                        requiredSourceFiles.add(fileName);

                        const yearMatch = fileName.match(/(\d{4})/); 
                        if (yearMatch) year = parseInt(yearMatch[1], 10);
                        
                        const setMatch = fileName.match(/\((\d+)\)/);
                        set = setMatch ? setMatch[1] : null;

                        if (blockId.startsWith(this.cfg().aptitudePrefix) || blockId.startsWith('gaq') || blockId.startsWith('qga')) {
                            section = 'GA';
                        } else if (blockId.startsWith(this.cfg().corePrefix) || blockId.startsWith('q')) {
                            section = 'EE';
                        }
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
            } catch(e) { yearFileErrors.push({ path: file, message: e.message }); }
        }

        // 3. Fetch the ACTUAL question files 
        const basePathsToSearch = [this.cfg().sourceFolder];

        const loadSourceFile = async (fileName) => {
            try { await loadSourceFileInner(fileName); } finally { this._tick(); }
        };
        const loadSourceFileInner = async (fileName) => {
            let content = null;
            let lastFileErr = null;
            for (const base of basePathsToSearch) {
                try {
                    const res = await fetchWithRetry(`${base}${encodeURIComponent(fileName)}.md`);
                    content = await res.text();
                    break;
                } catch(e) { lastFileErr = e; }
            }
            if (!content) {
                if (lastFileErr) sourceFileErrors.push({ path: fileName, message: lastFileErr.message });
                console.warn(`GATE Simulator: Could not find source file ${fileName}.md`);
                return;
            }
            content = content.replace(/\r\n/g, '\n');
            // Split file by --- to isolate each numbered question
            for (const b of content.split(/^---/gm)) {
                // ANTI-CHEAT: Remove tags and answers at the bottom
                const cleanText = b.split(/\n#\w|\n>\[!success]/i)[0].trim();
                if (!cleanText) continue;
                // Find EVERY ^blockId inside this section (ids sit at the end of a line, never inside math like x^2)
                for (const { id, text } of GateUtils.parseSectionBlocks(cleanText)) {
                    this.blocks[GateUtils.vaultKey(fileName, id)] = text;
                }
            }
        };
        // Fetch in parallel (6 at a time) instead of one by one
        const pending = Array.from(requiredSourceFiles);
        this._phase(3, pending.length);
        await Promise.all(Array.from({ length: 8 }, async () => {
            while (pending.length) await loadSourceFile(pending.shift());
        }));
        console.info(`GATE Simulator: loaded ${Object.keys(this.blocks).length} question blocks from ${requiredSourceFiles.size} source files`);

        // 4. Load Subject & Topic Tags
        const tagFiles = [...(manifest.onlyQSubject || []), ...(manifest.onlyQTopic || [])];
        const tagRegex = /!?\[\[([^#|\]]+).*?#\^([a-zA-Z0-9_-]+)\]\]/g;
        const plainLinkRegex = /(?<!!)\[\[([^\]|#]+?)(?:\|[^\]]+)?\]\]/g;

        const tagResults = await this._fetchMany(tagFiles, 'text', 4);
        for (const { file, value: tagText, error: fetchErr } of tagResults) {
            try {
                if (fetchErr) throw fetchErr;
                let content = tagText;
                const isSubject = (manifest.onlyQSubject||[]).includes(file);
                const isTopic = (manifest.onlyQTopic||[]).includes(file);
                
                let label = file.split('/').pop().replace('.md', '');
                label = label.replace(/^(onlyQ - |trends - )/i, '').trim();
                
                if (!label) continue;

                if (isTopic) {
                    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
                    const declared = new Set();
                    if(fmMatch) {
                        const sm = fmMatch[1].match(/subject:\s*\[?"?(.*?)"?\]?/);
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
                    const fileName = match[1].trim();
                    const blockId = GateUtils.normalizeBlockId(match[2]);
                    
                    const yearMatch = fileName.match(/(\d{4})/); if (!yearMatch) continue;
                    const year = parseInt(yearMatch[1], 10);
                    
                    const setMatch = fileName.match(/\((\d+)\)/);
                    const set = setMatch ? setMatch[1] : null;
                    
                    let section = null;
                    if (blockId.startsWith(this.cfg().aptitudePrefix) || blockId.startsWith('gaq') || blockId.startsWith('qga')) section = 'GA';
                    else if (blockId.startsWith(this.cfg().corePrefix) || blockId.startsWith('q')) section = 'EE';
                    if (!section) continue;

                    const qid = GateUtils.buildGlobalQID(year, set, section, blockId);
                    const q = qidMap.get(qid); if (!q) continue;

                    if (isSubject && !q.subjects.includes(label)) { q.subjects.push(label); this.subjects.add(label); }
                    if (isTopic && !q.topics.includes(label)) { q.topics.push(label); this.topics.add(label); }
                }
            } catch(e) { tagFileErrors.push({ path: file, message: e.message }); }
        }

        const stats = this.emptyStats();
        stats.total = this.masterIndex.length; stats.duplicates = duplicateCount; stats.keyFileErrors = keyFileErrors;
        stats.yearFileErrors = yearFileErrors; stats.sourceFileErrors = sourceFileErrors; stats.tagFileErrors = tagFileErrors;
        for (const q of this.masterIndex) {
            if (q.section === 'GA' || q.section === 'EE') stats.bySection[q.section]++;
            if (q.type === 'UNKNOWN') stats.unknownType++;
            const bucket = `${q.section}${q.marks}`; if (bucket in stats.byMarks) stats.byMarks[bucket]++;
        }
        this.stats = stats;

        // Track whether this build had any real failures so the caching guard
        // at the top of this method knows to retry automatically next time,
        // instead of silently keeping a broken partial index forever.
        this.lastBuildHadErrors = (yearFileErrors.length + sourceFileErrors.length + tagFileErrors.length) > 0;

        if (keyFileErrors.length > 0) notice(`Excluded ${keyFileErrors.length} answer key file(s) for schema errors.`, 8000);
        if (sourceFileErrors.length > 0) {
            notice(`${sourceFileErrors.length} question content file(s) failed to load after retries — some questions will show "text missing" until this resolves. Check console for details.`, 10000);
            console.warn('GATE Simulator: source file load failures', sourceFileErrors);
        }
        if (yearFileErrors.length > 0) {
            notice(`${yearFileErrors.length} year-index file(s) failed to load after retries — pool may be incomplete.`, 10000);
            console.warn('GATE Simulator: year file load failures', yearFileErrors);
        }
        if (tagFileErrors.length > 0) {
            console.warn('GATE Simulator: tag file load failures (subjects/topics may be incomplete)', tagFileErrors);
        }
    }
}

    mine.GateIndexer = GateIndexer;
})(window);
