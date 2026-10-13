/* history / store.js - what you have done per question (views, attempts, mistakes) and the paused test session.
   Saved on this device under gate_sim_history / gate_sim_session, separate from the classic simulator. */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    const GS = g.GateShared;
    const lib = (GSim.pluginLib = GSim.pluginLib || {});
    const mine = (lib['history'] = lib['history'] || {});

class HistoryManager {
    constructor() { this.data = {}; }
    async load() { this.data = JSON.parse(localStorage.getItem('gate_sim_history') || '{}'); }
    async save() { localStorage.setItem('gate_sim_history', JSON.stringify(this.data)); return true; }
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
    async saveSession(data) { localStorage.setItem('gate_sim_session', JSON.stringify({ version: 2, ...data })); return true; }
    async loadSession() { const d = localStorage.getItem('gate_sim_session'); return d ? JSON.parse(d) : null; }
    async clearSession() { localStorage.removeItem('gate_sim_session'); }
}

    // Copies the classic simulator's history into this one. Per question the record with more attempts wins; nothing is deleted.
    function importClassic(manager) {
        let src = {};
        try { src = JSON.parse(localStorage.getItem('gate_history') || '{}'); } catch (e) { src = {}; }
        let added = 0, updated = 0;
        for (const qid of Object.keys(src)) {
            const mine = manager.data[qid], theirs = src[qid];
            if (!mine) { manager.data[qid] = theirs; added++; }
            else if ((theirs.attempts || 0) > (mine.attempts || 0)) { manager.data[qid] = theirs; updated++; }
        }
        return { total: Object.keys(src).length, added, updated };
    }

    mine.HistoryManager = HistoryManager;
    mine.SessionManager = SessionManager;
    mine.importClassic = importClassic;
})(window);
