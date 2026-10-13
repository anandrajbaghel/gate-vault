/* test-generator / generator.js - turns your filters into a list of questions: official 65-question mix or custom drills,
   with 7 selection algorithms (adaptive, mistake focus, spaced repetition, weakness boost ...). Grading is never affected. */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    const GS = g.GateShared;
    const lib = (GSim.pluginLib = GSim.pluginLib || {});
    const mine = (lib['test-generator'] = lib['test-generator'] || {});
    // pure helpers come from the question bank's service, looked up when first used
    const GateUtils = new Proxy({}, { get: (_, k) => {
        const q = GSim.services.get('questions');
        if (!q) throw new Error('The Question bank feature is switched off.');
        return q.utils[k];
    } });

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

    mine.QuestionSelector = QuestionSelector;
    mine.TestGenerator = TestGenerator;
    mine.ReplicationShortfallError = ReplicationShortfallError;
})(window);
