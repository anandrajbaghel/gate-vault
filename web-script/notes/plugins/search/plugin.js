/* Search - full-text search over notes-search.json (loaded on first use). */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    GN.plugins.define('search', {
        onload(p) {
            let docsP = null, lower = null;
            function loadDocs() {
                if (!docsP) {
                    docsP = GN.loader.json('notes-search.json', { bust: true }).then(d => {
                        const docs = d.docs || {}; lower = {};
                        for (const k of Object.keys(docs)) lower[k] = docs[k].toLowerCase();
                        return docs;
                    }).catch(e => { docsP = null; throw e; });
                }
                return docsP;
            }
            function snippet(text, terms) {
                const low = text.toLowerCase();
                let at = -1;
                for (const t of terms) { const i = low.indexOf(t); if (i >= 0 && (at < 0 || i < at)) at = i; }
                const start = Math.max(0, at - 60);
                const s = text.slice(start, start + 180).replace(/\s+/g, ' ');
                const frag = document.createDocumentFragment();
                if (start > 0) frag.append('\u2026');
                const re = new RegExp('(' + terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'ig');
                s.split(re).forEach((part, i) => { if (i % 2) frag.append(el('mark', { text: part })); else if (part) frag.append(part); });
                if (start + 180 < text.length) frag.append('\u2026');
                return frag;
            }
            p.addFinderMode({
                id: 'full', title: 'Search note text', label: 'Search text', placeholder: 'Find words inside your notes\u2026', debounce: 160, async: true,
                hint: 'All words must match \u00B7 Enter opens \u00B7 Esc closes',
                async query(q) {
                    if (!q) return [];
                    let docs;
                    try { docs = await loadDocs(); }
                    catch (e) { throw new Error(e.isNotFound ? 'notes-search.json was not found. Run the "Build notes index" action again.' : 'Could not load search data. ' + e.message); }
                    const terms = q.toLowerCase().split(/\s+/).filter(Boolean), out = [];
                    for (const n of GN.index.visible) {
                        const low = lower[n.path]; if (!low) continue;
                        let score = 0, ok = true;
                        for (const t of terms) {
                            let c = 0, i = -1; while (c < 10 && (i = low.indexOf(t, i + 1)) >= 0) c++;
                            if (!c) { ok = false; break; }
                            score += c; if (n.title.toLowerCase().includes(t)) score += 15;
                        }
                        if (ok) out.push({ n, score, text: docs[n.path] });
                    }
                    out.sort((a, b) => b.score - a.score);
                    return out.slice(0, 40).map(r => ({ title: r.n.title, snippet: snippet(r.text, terms), data: r.n }));
                },
                choose: r => { GN.router.go(r.data.path, ''); if (GN.layout.isMobile()) GN.layout.closeDrawers(); }
            });
            p.addCommand({ id: 'search:open', name: 'Search note text', hotkeys: ['Mod+Shift+F'], run: () => GN.finder.open('full') });
        }
    });
})(window);
