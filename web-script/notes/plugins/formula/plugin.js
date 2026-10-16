/* Formulas - the "Formulas" tab of the search window: the front-matter lists "formula:" and "define:" (written as  Label: content ).
   Data comes from notes-props.json through the "props" service (Properties data feature). Enter opens the note, Ctrl/Cmd+Enter opens it
   in a new tab, Shift+Enter or the Copy button copies the content (the reader is read-only, so "insert at cursor" became "copy").
   Type f: or d: (or the key / label) before your words to search one kind only. Nothing else depends on this feature. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    const RECENT_KEY = 'gate_notes_formula_recent', MAX_RECENT = 15, MAX_ROWS = 60;
    const fuzzy = GS.fuzzy.match, highlight = GS.fuzzy.highlight;

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
            function rank(items, raw, list) {
                const { typeKey, text } = splitFilter(raw, list);
                const pool = typeKey ? items.filter(i => i.typeKey === typeKey) : items, q = text.trim();
                if (!q) {
                    const recent = new Map(loadRecent().map((k, i) => [k, i]));
                    return pool.slice().sort((a, b) => {
                        const ra = recent.has(itemKey(a)) ? recent.get(itemKey(a)) : Infinity, rb = recent.has(itemKey(b)) ? recent.get(itemKey(b)) : Infinity;
                        return ra !== rb ? (ra < rb ? -1 : 1) : GS.natCompare(a.label, b.label);
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
            async function doCopy(it) {
                const ok = await copyText(it.content || it.label);
                GS.ui.notice(ok ? 'Copied: ' + (it.content || it.label).slice(0, 60) : 'Could not copy. Select the text and copy it by hand.', 2200);
            }

            const legacy = String(S('hotkey') || '').trim();          // a hotkey set in an older version becomes this tab's default
            p.addFinderMode({
                id: 'formula', title: 'Formulas and definitions', label: 'Formulas', placeholder: 'Search formulas and definitions\u2026 (f: or d: filters)',
                hint: 'Enter opens the note \u00b7 Ctrl/Cmd+Enter in a new tab \u00b7 Shift+Enter copies \u00b7 f: or d: filters \u00b7 Esc closes',
                debounce: 60, async: true, icon: 'sigma', order: 30, hotkeys: legacy ? [legacy] : [], inAll: true, manualClose: true,
                emptyText: 'Nothing found yet. Add a \u201cformula:\u201d list (Label: content) to a note\u2019s front-matter and run the index workflow.',
                async query(q) {
                    const svc = props();
                    if (!svc) throw new Error('The Properties data feature is switched off.');
                    await svc.load();
                    if (svc.status !== 'ready') throw new Error(svc.error || 'The list could not be loaded.');
                    return rank(buildItems(svc), q, types()).slice(0, MAX_ROWS).map(r => ({ title: r.item.label, data: r }));
                },
                render(res, row, ctx) {
                    const r = res.data, it = r.item, list = types();
                    const body = el('div', { cls: 'fm-body' });
                    const title = el('div', { cls: 'fm-title' });
                    if (!it.labelMath) title.append(highlight(it.label, r.pos));          // a label that is math is drawn as math below
                    const copy = el('button', { cls: 'fm-copy', text: 'Copy', attrs: { type: 'button', title: 'Copy to the clipboard' } });
                    copy.addEventListener('click', e => { e.stopPropagation(); pushRecent(itemKey(it)); doCopy(it); });
                    row.append(
                        el('div', { cls: 'fm-head' }, title, el('span', { cls: 'fm-badge' + (list[0] && it.typeKey === list[0].key ? ' t0' : ''), text: it.type })),
                        body,
                        el('div', { cls: 'fm-foot' }, el('div', { cls: 'fm-path', text: it.path.replace(/\.md$/i, '') }), copy));
                    ctx.defer(() => {                                                      // draw the math after the list is on screen
                        if (it.labelMath) GN.markdown.render(it.label, title, { path: it.path, typeset: true }).catch(() => { title.textContent = it.label; });
                        if (it.content) GN.markdown.render(it.content, body, { path: it.path, typeset: true }).catch(() => { body.textContent = it.content; });
                    });
                },
                choose(res, evt, ctx) {
                    const it = res.data.item;
                    pushRecent(itemKey(it));
                    if (evt && evt.shiftKey) { doCopy(it); return; }                       // copy and keep the window open
                    ctx.close();
                    if (evt && (evt.ctrlKey || evt.metaKey)) { g.open(location.pathname + location.search + GN.router.href(it.path), '_blank', 'noopener'); return; }
                    GN.router.go(it.path, '');
                    if (GN.layout.isMobile()) GN.layout.closeDrawers();
                },
                manualCloseNote: 'choose() closes the window itself so Shift+Enter can keep it open'
            });
        }
    });
})(window);
