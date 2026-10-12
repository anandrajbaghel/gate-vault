/* question-bank / utils.js - pure helpers shared by the question features: block ids, question ids, year selectors,
   answer-key validation. No DOM, no network. Other plugins reach them through the "questions" service (questions.utils). */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    const lib = (GSim.pluginLib = GSim.pluginLib || {});
    const mine = (lib['question-bank'] = lib['question-bank'] || {});

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
    // Inline math exactly as Obsidian reads it: the opening $ must be followed by a non-space, the closing $ must be preceded
    // by a non-space and must not be followed by a digit, and it can't span a blank line. Escape a literal dollar as \$.
    static inlineMathRe() { return /(?<![\\$])\$(?![\s$])((?:[^$\\\n]|\\[\s\S]|\n(?!\s*\n))*?)(?<![\s\\])\$(?!\d)/g; }

    // Splits one "---" section into [{id, text}]. A block id is "^id" at the END of a line, preceded by a space or
    // starting the line, and not inside $...$ / $$...$$ (so exponents like x^2 or 10^3 are never mistaken for ids).
    static parseSectionBlocks(section) {
        const mathRanges = [];
        let m;
        for (const mr of [/\$\$[\s\S]+?\$\$/g, GateUtils.inlineMathRe()]) {
            while ((m = mr.exec(section)) !== null) mathRanges.push([m.index, m.index + m[0].length]);
        }
        const out = [];
        const idRe = /(?:^|[ \t])\^([A-Za-z0-9_-]+)[ \t]*$/gm;
        let lastIndex = 0;
        while ((m = idRe.exec(section)) !== null) {
            if (mathRanges.some(([s0, e0]) => m.index >= s0 && m.index < e0)) continue;
            out.push({ id: m[1], text: section.substring(lastIndex, m.index).trim() });
            lastIndex = m.index + m[0].length;
        }
        return out;
    }
    static normalizeBlockId(id) { return String(id).trim().toLowerCase().replace(/[\s._-]+/g, ''); }
    // Block IDs repeat across papers, so question text is stored per source file: "file::blockid".
    static vaultKey(fileName, blockId) { return String(fileName).trim().toLowerCase() + '::' + GateUtils.normalizeBlockId(blockId); }
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

    mine.GateUtils = GateUtils;
    mine.AnswerKeySchema = AnswerKeySchema;
})(window);
