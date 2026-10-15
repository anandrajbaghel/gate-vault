/* Formulas and definitions - search the front-matter lists "formula:" and "define:" (written as  Label: content) of every note.
   Data comes from notes-props.json through the "props" service (Properties data feature). Enter opens the note, Ctrl/Cmd+Enter opens it
   in a new tab, Shift+Enter or the Copy button copies the content (the reader is read-only, so "insert at cursor" became "copy").
   Type f: or d: (or the key / label) in front of your words to search only one kind. Nothing else depends on this feature. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    const RECENT_KEY = 'gate_notes_formula_recent', MAX_RECENT = 15, MAX_ROWS = 60;

    /* every space-separated word must match, as a substring (best) or as scattered letters -> { score, pos[] } or null */
    function fuzzy(query, text) {
        const t = String(text).toLowerCase(), words = query.toLowerCase().split(/\s+/).filter(Boolean);
        if (!words.length) return { score: 0, pos: [] };
        let total = 0; const pos = [];
        for (const w of words) {
            const at = t.indexOf(w);
            if (at >= 0) {
                total += 100 + w.length * 2 - at * 0.1 + (at === 0 || /[\s\-_/.]/.test(t[at - 1]) ? 20 : 0);
                for (let i = 0; i < w.length; i++) pos.push(at + i);
                continue;
            }
            let from = 0, last = -2, sc = 0; const ps = [];
            for (const ch of w) {
                const f = t.indexOf(ch, from);
                if (f < 0) return null;
                ps.push(f); sc += (f === last + 1 ? 8 : 2) + (f === 0 || /[\s\-_/.]/.test(t[f - 1]) ? 5 : 0); last = f; from = f + 1;
            }
            total += sc - (ps[ps.length - 1] - ps[0]) * 0.2;
            pos.push(...ps);
        }
        return { score: total, pos };
    }
    function highlight(text, pos) {
        const frag = document.createDocumentFragment();
        if (!pos || !pos.length) { frag.append(document.createTextNode(text)); return frag; }
        const on = new Set(pos); let i = 0;
        while (i < text.length) {
            const hit = on.has(i); let j = i;
            while (j < text.length && on.has(j) === hit) j++;
            const part = text.slice(i, j);
            frag.append(hit ? el('mark', { cls: 'fm-hl', text: part }) : document.createTextNode(part));
            i = j;
        }
        return frag;
    }
    /* "Label: content" -> split at the first colon that is NOT inside math, so $a:b$ and $$ ... : ... $$ stay whole.
       No such colon: the whole text is the label (and the formula itself when it is math). */
    function splitEntry(str) {
        let mode = '';                                         // '' | '$' | '$$'
        for (let i = 0; i < str.length; i++) {
            const c = str[i];
            if (c === '\\') { i++; continue; }
            if (c === '$') {
                if (mode === '') { if (str[i + 1] === '$') { mode = '$$'; i++; } else mode = '$'; }
                else if (mode === '$$') { if (str[i + 1] === '$') { mode = ''; i++; } }
                else mode = '';
            } else if (c === ':' && mode === '') return { label: str.slice(0, i).trim(), content: str.slice(i + 1).trim() };
        }
        return { label: str.trim(), content: '' };
    }
    async function copyText(text) {
        try { await navigator.clipboard.writeText(text); return true; }
        catch (e) {
            try {
                const ta = el('textarea', { attrs: { 'aria-hidden': 'true' } }); ta.value = text; ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
                document.body.appendChild(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); return ok;
            } catch (x) { return false; }
        }
    }
    const loadRecent = () => { try { const v = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'); return Array.isArray(v) ? v : []; } catch (e) { return []; } };
    function pushRecent(k) {
        const l = loadRecent().filter(x => x !== k); l.unshift(k);
        try { localStorage.setItem(RECENT_KEY, JSON.stringify(l.slice(0, MAX_RECENT))); } catch (e) {}
    }

    GN.plugins.define('formula', {
        onload(p) {
            const S = k => p.settings.get(k);
            const props = () => GN.services.get('props');
            /* "formula=Formula, define=Definition" -> [{ key, label }] */
            const types = () => String(S('types') || '').split(',').map(s => s.trim()).filter(Boolean).map(s => {
                const i = s.indexOf('='); const key = (i < 0 ? s : s.slice(0, i)).trim().toLowerCase();
                return { key, label: ((i < 0 ? '' : s.slice(i + 1)).trim()) || (key.charAt(0).toUpperCase() + key.slice(1)) };
            }).filter(t => t.key);
            const itemKey = it => it.path + '::' + it.typeKey + '::' + it.label;

            function buildItems(svc) {
                const out = [];
                for (const t of types()) {
                    for (const e of svc.entries(t.key)) {
                        e.values.forEach(str => {
                            const { label, content } = splitEntry(str);
                            if (!label && !content) return;
                            const lab = label || t.label;
                            out.push({ path: e.path, note: e.note, type: t.label, typeKey: t.key, label: lab, labelMath: /\$/.test(lab), content });
                        });
                    }
                }
                return out;
            }
            /* "f:gauss" / "formula: gauss" / "Definition:gauss" -> only that type */
            function splitFilter(raw, list) {
                const m = String(raw || '').match(/^\s*([^\s:]+):\s*(.*)$/);
                if (!m) return { typeKey: null, text: String(raw || '') };
                const pre = m[1].toLowerCase();
                const hit = list.find(t => pre === t.key || pre === t.label.toLowerCase() || pre === t.key.charAt(0));
                return hit ? { typeKey: hit.key, text: m[2] } : { typeKey: null, text: String(raw || '') };
            }

            function openSearch() {
                const svc = props();
                if (!svc) { GS.ui.notice('The Properties data feature is switched off.'); return; }
                const list = types();
                const m = GS.ui.modal({ title: 'Formulas and definitions', width: '720px', cls: 'gn-search-modal fm-modal' });
                const input = el('input', { cls: 'gn-search-input', type: 'text', attrs: { 'aria-label': 'Search formulas and definitions', placeholder: 'Search formulas and definitions\u2026 (try f: or d: to filter)', autocomplete: 'off', spellcheck: 'false' } });
                const results = el('div', { cls: 'gn-search-results', attrs: { role: 'listbox' } });
                const hint = el('div', { cls: 'gn-sub gn-search-hint', text: 'Enter opens the note \u00b7 Ctrl/Cmd+Enter in a new tab \u00b7 Shift+Enter copies \u00b7 f: or d: filters \u00b7 Esc closes' });
                m.body.append(input, results, hint);
                let items = [], found = [], sel = 0, paintToken = 0;

                function search(raw) {
                    const { typeKey, text } = splitFilter(raw, list);
                    let pool = typeKey ? items.filter(i => i.typeKey === typeKey) : items;
                    const q = text.trim();
                    if (!q) {
                        const recent = new Map(loadRecent().map((k, i) => [k, i]));
                        return pool.slice().sort((a, b) => {
                            const ra = recent.has(itemKey(a)) ? recent.get(itemKey(a)) : Infinity, rb = recent.has(itemKey(b)) ? recent.get(itemKey(b)) : Infinity;
                            return ra !== rb ? ra - rb : GS.natCompare(a.label, b.label);
                        }).map(item => ({ item, tier: 0, score: 0, pos: [] }));
                    }
                    const out = [];
                    for (const item of pool) {
                        const t = fuzzy(q, item.label);
                        const b = t ? null : fuzzy(q, item.type + ' ' + item.content + ' ' + item.path);
                        if (!t && !b) continue;
                        out.push({ item, tier: t ? 0 : 1, score: (t || b).score, pos: t ? t.pos : [] });     // title hits always outrank body-only hits
                    }
                    return out.sort((a, b) => (a.tier - b.tier) || (b.score - a.score));
                }
                function choose(r, evt) {
                    const it = r.item;
                    pushRecent(itemKey(it));
                    if (evt && evt.shiftKey) { doCopy(it); return; }
                    m.close();
                    if (evt && (evt.ctrlKey || evt.metaKey)) { g.open(location.pathname + location.search + GN.router.href(it.path), '_blank', 'noopener'); return; }
                    GN.router.go(it.path, '');
                    if (GN.layout.isMobile()) GN.layout.closeDrawers();
                }
                async function doCopy(it) {
                    const ok = await copyText(it.content || it.label);
                    GS.ui.notice(ok ? 'Copied: ' + (it.content || it.label).slice(0, 60) : 'Could not copy. Select the text and copy it by hand.', 2200);
                }
                function paint() {
                    const my = ++paintToken;
                    GS.clear(results);
                    if (svc.status === 'loading' || svc.status === 'idle') { results.append(el('div', { cls: 'gn-empty', text: 'Loading\u2026' })); return; }
                    if (svc.status !== 'ready') { results.append(el('div', { cls: 'gn-empty', text: svc.error || 'The list could not be loaded.' })); return; }
                    if (!items.length) { results.append(el('div', { cls: 'gn-empty', text: 'Nothing found yet. Add a \u201c' + (list[0] ? list[0].key : 'formula') + ':\u201d list (Label: content) to a note\u2019s front-matter and run the index workflow.' })); return; }
                    if (!found.length) { results.append(el('div', { cls: 'gn-empty', text: 'No matches.' })); return; }
                    const rows = [];
                    found.slice(0, MAX_ROWS).forEach((r, i) => {
                        const it = r.item;
                        const body = el('div', { cls: 'fm-body' });
                        const title = el('div', { cls: 'fm-title' });
                        if (!it.labelMath) title.append(highlight(it.label, r.pos));       // a label that is math is drawn as math below
                        const copy = el('button', { cls: 'fm-copy', text: 'Copy', attrs: { type: 'button', title: 'Copy to the clipboard' } });
                        copy.addEventListener('click', e => { e.stopPropagation(); pushRecent(itemKey(it)); doCopy(it); });
                        const row = el('div', { cls: 'gn-search-row' + (i === sel ? ' is-sel' : ''), attrs: { role: 'option', 'aria-selected': String(i === sel) } },
                            el('div', { cls: 'fm-head' }, title, el('span', { cls: 'fm-badge' + (list[0] && it.typeKey === list[0].key ? ' t0' : ''), text: it.type })),
                            body,
                            el('div', { cls: 'fm-foot' }, el('div', { cls: 'fm-path', text: it.path.replace(/\.md$/i, '') }), copy));
                        row.addEventListener('mousemove', () => { if (sel !== i) { sel = i; results.querySelectorAll('.gn-search-row').forEach((x, k) => x.classList.toggle('is-sel', k === i)); } });
                        row.addEventListener('click', e => choose(r, e));
                        results.append(row);
                        rows.push([body, it, title]);
                    });
                    const s = results.querySelector('.is-sel'); if (s && s.scrollIntoView) s.scrollIntoView({ block: 'nearest' });
                    // render the math after the list is on screen, a few rows per frame, so typing never stalls
                    let k = 0;
                    const step = () => {
                        if (my !== paintToken || !m.box.isConnected) return;
                        const end = Math.min(rows.length, k + 4);
                        for (; k < end; k++) {
                            const [body, it, title] = rows[k];
                            if (it.labelMath) GN.markdown.render(it.label, title, { path: it.path, typeset: true }).catch(() => { title.textContent = it.label; });
                            if (it.content) GN.markdown.render(it.content, body, { path: it.path, typeset: true }).catch(() => { body.textContent = it.content; });
                        }
                        if (k < rows.length) setTimeout(step, 0);
                    };
                    setTimeout(step, 0);
                }
                const run = () => { sel = 0; found = svc.status === 'ready' ? search(input.value) : []; paint(); };
                input.addEventListener('input', run);
                input.addEventListener('keydown', e => {
                    const n = Math.min(found.length, MAX_ROWS);
                    if (e.key === 'ArrowDown') { e.preventDefault(); if (n) { sel = (sel + 1) % n; results.querySelectorAll('.gn-search-row').forEach((x, k) => x.classList.toggle('is-sel', k === sel)); const s = results.querySelector('.is-sel'); if (s && s.scrollIntoView) s.scrollIntoView({ block: 'nearest' }); } }
                    else if (e.key === 'ArrowUp') { e.preventDefault(); if (n) { sel = (sel - 1 + n) % n; results.querySelectorAll('.gn-search-row').forEach((x, k) => x.classList.toggle('is-sel', k === sel)); const s = results.querySelector('.is-sel'); if (s && s.scrollIntoView) s.scrollIntoView({ block: 'nearest' }); } }
                    else if (e.key === 'Enter') { e.preventDefault(); if (found[sel]) choose(found[sel], e); }
                });
                const off = svc.onChange(() => { items = buildItems(svc); run(); });
                const watch = new MutationObserver(() => { if (!document.body.contains(m.overlay)) { off(); watch.disconnect(); paintToken++; } });
                watch.observe(document.body, { childList: true });
                items = buildItems(svc); run(); input.focus();
                svc.load();
            }

            let removeBtn = null, removeCmd = null;
            const bindButton = () => {
                if (removeBtn) { removeBtn(); removeBtn = null; }
                if (S('showButton') !== false) removeBtn = p.addTopbarButton({ id: 'formula', icon: 'sigma', title: 'Formulas and definitions', order: 75, onClick: openSearch });
            };
            const bindCommand = () => {
                if (removeCmd) { removeCmd(); removeCmd = null; }
                const hk = String(S('hotkey') || '').trim();
                removeCmd = p.addCommand({ id: 'formula:search', name: 'Search formulas and definitions', hotkeys: hk ? [hk] : [], run: openSearch });
            };
            bindButton(); bindCommand();
            p.settings.on(k => { if (k === 'showButton') bindButton(); else if (k === 'hotkey') bindCommand(); });
        }
    });
})(window);
