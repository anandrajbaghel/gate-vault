/* GateNotes.search - Ctrl/Cmd+O quick switcher (titles, aliases, paths) and Ctrl/Cmd+Shift+F full-text search.
   Full text comes from notes-search.json, which is only downloaded the first time you use it. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared, el = GS.el;
    let docsP = null, lower = null, openModal = null;

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
        let s = text.slice(start, start + 180).replace(/\s+/g, ' ');
        const frag = document.createDocumentFragment();
        if (start > 0) frag.append('\u2026');
        const re = new RegExp('(' + terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'ig');
        s.split(re).forEach((part, i) => { if (i % 2) frag.append(el('mark', { text: part })); else if (part) frag.append(part); });
        if (start + 180 < text.length) frag.append('\u2026');
        return frag;
    }

    function open(mode) {
        if (openModal) { openModal.close(); }
        mode = mode === 'full' ? 'full' : 'quick';
        let results = [], sel = 0, seq = 0;
        const m = GS.ui.modal({ title: '', width: '640px', cls: 'gn-search-modal', onClose: () => { openModal = null; } });
        openModal = m;
        const input = el('input', { cls: 'gn-search-input', type: 'text', attrs: { 'aria-label': 'Search', autocomplete: 'off', spellcheck: 'false' } });
        const tabs = el('div', { cls: 'gn-tabs gn-search-tabs' },
            el('button', { cls: 'gn-tab', text: 'Open note', attrs: { type: 'button' }, dataset: { mode: 'quick' }, on: { click: () => setMode('quick') } }),
            el('button', { cls: 'gn-tab', text: 'Search text', attrs: { type: 'button' }, dataset: { mode: 'full' }, on: { click: () => setMode('full') } }));
        const list = el('div', { cls: 'gn-search-results', attrs: { role: 'listbox' } });
        const hint = el('div', { cls: 'gn-sub gn-search-hint' });
        m.body.append(input, tabs, list, hint);

        function setMode(next) {
            mode = next;
            m.box.querySelector('h2').textContent = mode === 'quick' ? 'Open a note' : 'Search note text';
            tabs.querySelectorAll('.gn-tab').forEach(t => t.setAttribute('aria-selected', String(t.dataset.mode === mode)));
            input.placeholder = mode === 'quick' ? 'Type a note name\u2026' : 'Find words inside your notes\u2026';
            hint.textContent = mode === 'quick' ? 'Enter opens \u00B7 \u2191\u2193 to move \u00B7 Esc closes' : 'All words must match \u00B7 Enter opens \u00B7 Esc closes';
            run(); input.focus();
        }
        function paint() {
            GS.clear(list);
            if (!results.length) { list.append(el('div', { cls: 'gn-empty', text: input.value.trim() ? 'No matches.' : 'Nothing to show yet.' })); return; }
            results.forEach((r, i) => {
                const row = el('div', { cls: 'gn-search-row' + (i === sel ? ' is-sel' : ''), attrs: { role: 'option', 'aria-selected': String(i === sel) } },
                    el('div', { cls: 'gn-search-title', text: r.note.title }),
                    r.snip ? el('div', { cls: 'gn-search-snip' }, r.snip) : el('div', { cls: 'gn-sub', text: (r.alias ? `alias: ${r.alias} \u00B7 ` : '') + r.note.folder }));
                row.addEventListener('mousemove', () => { if (sel !== i) { sel = i; list.querySelectorAll('.gn-search-row').forEach((x, k) => x.classList.toggle('is-sel', k === i)); } });
                row.addEventListener('click', () => choose(i));
                list.append(row);
            });
            const s = list.querySelector('.is-sel'); if (s) s.scrollIntoView({ block: 'nearest' });
        }
        function choose(i) {
            const r = results[i]; if (!r) return;
            m.close(); GN.router.go(r.note.path, ''); if (GN.app.isMobile()) GN.app.closeDrawers();
        }
        async function run() {
            const my = ++seq, q = input.value.trim();
            sel = 0;
            if (mode === 'quick') { results = GN.index.quick(q, 40); paint(); return; }
            if (!q) { results = []; paint(); return; }
            list.replaceChildren(el('div', { cls: 'gn-empty', text: 'Searching\u2026' }));
            let docs;
            try { docs = await loadDocs(); }
            catch (e) { if (my === seq) list.replaceChildren(el('div', { cls: 'gn-empty', text: e.isNotFound ? 'notes-search.json was not found. Re-run the notes index builder and push it.' : 'Could not load search data. ' + e.message })); return; }
            if (my !== seq) return;
            const terms = q.toLowerCase().split(/\s+/).filter(Boolean), out = [];
            for (const n of GN.index.visible) {
                const low = lower[n.path]; if (!low) continue;
                let score = 0, ok = true;
                for (const t of terms) {
                    let c = 0, i = -1; while (c < 10 && (i = low.indexOf(t, i + 1)) >= 0) c++;
                    if (!c) { ok = false; break; }
                    score += c; if (n.title.toLowerCase().includes(t)) score += 15;
                }
                if (ok) out.push({ note: n, score, text: docs[n.path] });
            }
            out.sort((a, b) => b.score - a.score);
            results = out.slice(0, 40).map(r => ({ note: r.note, snip: snippet(r.text, terms) }));
            paint();
        }

        input.addEventListener('input', GS.debounce(run, mode === 'full' ? 160 : 40));
        input.addEventListener('keydown', e => {
            if (e.key === 'ArrowDown') { e.preventDefault(); if (results.length) { sel = (sel + 1) % results.length; paint(); } }
            else if (e.key === 'ArrowUp') { e.preventDefault(); if (results.length) { sel = (sel - 1 + results.length) % results.length; paint(); } }
            else if (e.key === 'Enter') { e.preventDefault(); choose(sel); }
        });
        setMode(mode);
        input.focus();
    }

    GN.search = { open, get isOpen() { return !!openModal; } };
})(window);
