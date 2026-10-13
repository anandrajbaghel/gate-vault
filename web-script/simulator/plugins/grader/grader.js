/* grader / grader.js - marks one answer against its answer key (MCQ negative marking, MSQ all-or-nothing, NAT ranges, MTA). */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    const GS = g.GateShared;
    const lib = (GSim.pluginLib = GSim.pluginLib || {});
    const mine = (lib['grader'] = lib['grader'] || {});

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

    mine.GateGrader = GateGrader;
})(window);
