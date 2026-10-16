/* GateShared.fuzzy - the small "type a few letters" matcher used by the search tabs.
     match(query, text) -> { score, pos[] } | null    every space-separated word must match, as a substring (best) or as scattered letters
     highlight(text, pos) -> DocumentFragment          the matched letters wrapped in <mark class="gn-hl">
   Loaded by the features that need it (safe to load more than once). */
(function (g) {
    'use strict';
    const GS = (g.GateShared = g.GateShared || {});
    if (GS.fuzzy) return;
    function match(query, text) {
        const t = String(text).toLowerCase(), words = String(query).toLowerCase().split(/\s+/).filter(Boolean);
        if (!words.length) return { score: 0, pos: [] };
        let total = 0; const pos = [];
        for (const w of words) {
            const at = t.indexOf(w);
            if (at >= 0) {
                total += 100 + w.length * 2 - at * 0.1 + (at === 0 || /[\s\-_/.:]/.test(t[at - 1]) ? 20 : 0);
                for (let i = 0; i < w.length; i++) pos.push(at + i);
                continue;
            }
            let from = 0, last = -2, sc = 0; const ps = [];
            for (const ch of w) {
                const f = t.indexOf(ch, from);
                if (f < 0) return null;
                ps.push(f); sc += (f === last + 1 ? 8 : 2) + (f === 0 || /[\s\-_/.:]/.test(t[f - 1]) ? 5 : 0); last = f; from = f + 1;
            }
            total += sc - (ps[ps.length - 1] - ps[0]) * 0.2;
            pos.push(...ps);
        }
        return { score: total, pos };
    }
    function highlight(text, pos) {
        const frag = document.createDocumentFragment();
        text = String(text);
        if (!pos || !pos.length) { frag.append(document.createTextNode(text)); return frag; }
        const on = new Set(pos); let i = 0;
        while (i < text.length) {
            const hit = on.has(i); let j = i;
            while (j < text.length && on.has(j) === hit) j++;
            const part = text.slice(i, j);
            if (hit) { const m = document.createElement('mark'); m.className = 'gn-hl'; m.textContent = part; frag.append(m); } else frag.append(document.createTextNode(part));
            i = j;
        }
        return frag;
    }
    GS.fuzzy = { match, highlight };
})(window);
