/* GateNotes.finder - the ONE search window of the reader. Every kind of search is a tab:
     Open note - Search text - Formulas - Videos - Commands ... plus an "All" tab that asks the tabs that agree to take part.
   A feature adds a tab (from a plugin: p.addFinderMode(def), or p.addFinderTab(def)):
     { id, title, label, placeholder, hint, debounce, async, icon, order, hotkeys: ['Mod+O'], prefix: '>', inAll: true, emptyInAll: false,
       query(text) -> [{ title, sub?, snippet?: Node, data }] | Promise,
       render?(result, rowElement, ctx)      draw the row yourself (thumbnails, math ...); ctx.defer(fn) runs heavy work after the list is on screen
       choose(result, event, ctx)            what Enter / a click does; the window is closed first unless manualClose is true (then call ctx.close()) }
   Everything the user can change lives in Settings -> Search: which tabs are shown, their order, the default tab, a hotkey and a top-bar icon
   per tab, and which tabs take part in All. Tabs disappear by themselves when the feature that added them is switched off.
   The user's choices are saved on this device under 'gate_notes_search'. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared, el = GS.el;
    const PKEY = 'gate_notes_search';
    const DEFAULTS = { order: [], hidden: {}, hotkeys: {}, icons: {}, inAll: {}, defaultTab: 'quick', openOn: 'default', last: '', allLimit: 5, magnifier: true };
    const isMac = /Mac|iPhone|iPad/.test((g.navigator && (g.navigator.platform || g.navigator.userAgent)) || '');

    /* ------------------------------------------------------------ the user's choices */
    function loadPrefs() {
        let s = {};
        try { s = JSON.parse(localStorage.getItem(PKEY) || '{}') || {}; } catch (e) { s = {}; }
        const p = Object.assign({}, DEFAULTS, s);
        ['hidden', 'hotkeys', 'icons', 'inAll'].forEach(k => { if (!p[k] || typeof p[k] !== 'object' || Array.isArray(p[k])) p[k] = {}; });
        if (!Array.isArray(p.order)) p.order = [];
        if (!['default', 'last'].includes(p.openOn)) p.openOn = 'default';
        p.allLimit = Math.max(3, Math.min(10, +p.allLimit || 5));
        return p;
    }
    let prefs = loadPrefs();
    const savePrefs = () => { try { localStorage.setItem(PKEY, JSON.stringify(prefs)); } catch (e) {} };

    /* ------------------------------------------------------------ the registered tabs */
    const modes = [];
    let seq = 0, current = null;
    const subs = new Set();
    const defOrder = d => (d.order == null ? 100 : d.order);
    function ordered() {
        const idx = id => { const i = prefs.order.indexOf(id); return i >= 0 ? i : Infinity; };
        return modes.slice().sort((a, b) => {
            const ia = idx(a.id), ib = idx(b.id);
            if (ia !== ib) return ia < ib ? -1 : 1;
            return (defOrder(a) - defOrder(b)) || (a._seq - b._seq);
        });
    }
    const visible = () => ordered().filter(d => !prefs.hidden[d.id]);
    const inAllOf = d => (prefs.inAll[d.id] != null ? !!prefs.inAll[d.id] : d.inAll !== false);
    const hotkeysOf = (id, d) => (Array.isArray(prefs.hotkeys[id]) ? prefs.hotkeys[id] : ((d && d.hotkeys) || []));
    const labelOf = d => d.label || d.title || d.id;

    function addMode(def) {
        if (!def || !def.id || typeof def.query !== 'function') throw new Error('A search tab needs an id and a query function.');
        const d = Object.assign({}, def, { _seq: seq++ });
        const old = modes.findIndex(m => m.id === d.id);
        if (old >= 0) modes.splice(old, 1);
        modes.push(d);
        changed();
        return () => {
            const i = modes.indexOf(d); if (i >= 0) modes.splice(i, 1);
            if (current && current.tabId() === d.id) current.close();
            changed();
        };
    }
    function changed() { syncCommands(); syncTopbar(); subs.forEach(fn => { try { fn(); } catch (e) { console.error(e); } }); }

    /* ------------------------------------------------------------ commands (hotkeys) and top-bar icons, driven by the choices */
    let cmdOff = [], barOff = [];
    function syncCommands() {
        cmdOff.forEach(f => f()); cmdOff = [];
        if (!GN.commands) return;
        const reg = (id, name, hotkeys, run) => cmdOff.push(GN.commands.register({ id, name, hotkeys, run }));
        reg('finder:open', 'Search', hotkeysOf('magnifier', null), () => open());
        if (visible().length > 1) reg('finder:open:all', 'Search: All', hotkeysOf('all', null), () => open('all'));
        visible().forEach(d => reg('finder:open:' + d.id, 'Search: ' + labelOf(d), hotkeysOf(d.id, d), () => open(d.id)));
    }
    function syncTopbar() {
        barOff.forEach(f => f()); barOff = [];
        if (!GN.slots) return;
        if (prefs.magnifier) barOff.push(GN.slots.topbar.add({ id: 'search', icon: 'search', title: 'Search', order: 10, onClick: () => open() }));
        const vis = visible();
        if (vis.length > 1 && prefs.icons.all) barOff.push(GN.slots.topbar.add({ id: 'search-all', icon: 'search', title: 'Search: All', order: 11, onClick: () => open('all') }));
        vis.forEach((d, i) => { if (prefs.icons[d.id]) barOff.push(GN.slots.topbar.add({ id: 'search-' + d.id, icon: d.icon || 'search', title: 'Search: ' + labelOf(d), order: 12 + i, onClick: () => open(d.id) })); });
    }

    /* ------------------------------------------------------------ styles for what this window adds (injected once) */
    const CSS = `
.gn-search-tabs{display:flex;gap:4px;overflow-x:auto;flex-wrap:nowrap;scrollbar-width:thin}
.gn-search-tabs .gn-tab{flex:0 0 auto;white-space:nowrap}
.gn-search-sec{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 12px 2px;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted)}
.gn-search-more{border:0;background:none;color:var(--text-accent);cursor:pointer;font:inherit;font-size:.72rem;letter-spacing:0;text-transform:none}
.gn-search-more:hover{text-decoration:underline}
.gn-empty.sm{padding:6px 12px;font-size:.85rem}
.gn-hl{background:none;color:var(--text-accent);font-weight:700;text-decoration:underline;text-underline-offset:2px}
.gn-kbd{display:inline-block;font-size:.7rem;line-height:1;padding:3px 6px;border-radius:5px;border:1px solid var(--background-modifier-border);background:var(--background-primary);color:var(--text-muted);margin-left:4px;white-space:nowrap}
.gn-search-row.gn-flex{display:flex;align-items:center;justify-content:space-between;gap:12px}
.gn-fs-tab{border:1px solid var(--background-modifier-border);border-radius:8px;margin:8px 0;padding:0 12px;background:var(--background-secondary)}
.gn-fs-tab>summary{cursor:pointer;padding:10px 0;font-weight:600;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.gn-fs-tab>summary .by{font-weight:400;font-size:.8rem;color:var(--text-muted)}
.gn-fs-tab>summary .off{font-weight:400;font-size:.75rem;color:var(--text-error)}
.gn-fs-head{margin:18px 0 4px;font-weight:600}`;
    function ensureCss() {
        if (document.getElementById('gn-finder-css')) return;
        const st = document.createElement('style'); st.id = 'gn-finder-css'; st.textContent = CSS; document.head.appendChild(st);
    }

    /* ------------------------------------------------------------ the window */
    function open(startId, opts) {
        opts = opts || {};
        const real = visible();
        if (!real.length) { GS.ui.notice('No search tabs are turned on. Open Settings \u2192 Search to turn some on.', 4500); return false; }
        if (current) current.close();
        ensureCss();
        const ALL = { id: 'all', isAll: true, label: 'All', title: 'Search everything', placeholder: 'Search ' + real.map(d => labelOf(d).toLowerCase()).join(', ') + '\u2026' };
        const tabList = real.length > 1 ? [ALL].concat(real) : real;
        const byId = id => tabList.find(t => t.id === id);
        let tab = byId(startId) || (prefs.openOn === 'last' && byId(prefs.last)) || byId(prefs.defaultTab) || real[0];
        let flat = [], sel = 0, runSeq = 0, timer = null, sections = [];
        let dq = [], dTimer = 0, dToken = 0;

        const m = GS.ui.modal({ title: '', width: '680px', cls: 'gn-search-modal', onClose: () => { clearTimeout(timer); clearTimeout(dTimer); dToken++; dq = []; current = null; } });
        const input = el('input', { cls: 'gn-search-input', type: 'text', attrs: { 'aria-label': 'Search', autocomplete: 'off', spellcheck: 'false' } });
        const tabsEl = el('div', { cls: 'gn-tabs gn-search-tabs', attrs: { role: 'tablist' } });
        const list = el('div', { cls: 'gn-search-results', attrs: { role: 'listbox' } });
        const hint = el('div', { cls: 'gn-sub gn-search-hint' });
        m.body.append(input, tabsEl, list, hint);
        tabsEl.hidden = tabList.length < 2;
        tabList.forEach(t => tabsEl.append(el('button', { cls: 'gn-tab', text: labelOf(t), attrs: { type: 'button', role: 'tab' }, dataset: { mode: t.id }, on: { click: () => setTab(t) } })));

        const ctx = { close: () => m.close(), query: () => input.value.trim(), setTab: id => { const t = byId(id); if (t) setTab(t); }, isMobile: () => GN.layout && GN.layout.isMobile(), defer };
        function defer(fn) { dq.push({ fn, token: dToken }); if (!dTimer) dTimer = setTimeout(pump, 0); }
        function pump() {
            dTimer = 0; let n = 0;
            while (dq.length && n < 4) { const it = dq.shift(); if (it.token === dToken && m.box.isConnected) { try { it.fn(); } catch (e) { console.error(e); } n++; } }
            if (dq.length) dTimer = setTimeout(pump, 0);
        }

        function setTab(next) {
            tab = next;
            if (prefs.last !== tab.id) { prefs.last = tab.id; savePrefs(); }          // "the tab I used last" = the one you were on
            m.box.querySelector('h2').textContent = tab.title || labelOf(tab);
            tabsEl.querySelectorAll('.gn-tab').forEach(t => t.setAttribute('aria-selected', String(t.dataset.mode === tab.id)));
            input.placeholder = tab.placeholder || '';
            hint.textContent = tab.hint || 'Enter opens \u00b7 \u2191\u2193 to move' + (tabList.length > 1 ? ' \u00b7 Tab switches tab' : '') + ' \u00b7 Esc closes';
            run(); input.focus();
        }
        const setSel = i => { sel = i; list.querySelectorAll('.gn-search-row').forEach((x, k) => { x.classList.toggle('is-sel', k === i); x.setAttribute('aria-selected', String(k === i)); }); const s = list.querySelector('.is-sel'); if (s && s.scrollIntoView) s.scrollIntoView({ block: 'nearest' }); };

        function buildRow(entry, i) {
            const t = entry.tab, r = entry.r;
            const row = el('div', { cls: 'gn-search-row' + (i === sel ? ' is-sel' : ''), attrs: { role: 'option', 'aria-selected': String(i === sel) } });
            if (t.render) {
                try { t.render(r, row, ctx); }
                catch (e) { console.error('[search tab ' + t.id + ']', e); row.append(el('div', { cls: 'gn-search-title', text: r.title || '' })); }
            } else {
                row.append(el('div', { cls: 'gn-search-title', text: r.title }));
                if (r.snippet) row.append(el('div', { cls: 'gn-search-snip' }, r.snippet)); else if (r.sub) row.append(el('div', { cls: 'gn-sub', text: r.sub }));
            }
            row.addEventListener('mousemove', () => { if (sel !== i) setSel(i); });
            row.addEventListener('click', e => choose(i, e));
            return row;
        }
        function paintList(results, emptyText) {
            dToken++; GS.clear(list);
            flat = results.map(r => ({ tab, r }));
            if (!flat.length) { list.append(el('div', { cls: 'gn-empty', text: emptyText || (input.value.trim() ? 'No matches.' : 'Nothing to show yet.') })); return; }
            flat.forEach((en, i) => list.append(buildRow(en, i)));
            const s = list.querySelector('.is-sel'); if (s && s.scrollIntoView) s.scrollIntoView({ block: 'nearest' });
        }
        function paintAll(note) {
            dToken++; GS.clear(list); flat = [];
            if (note) { list.append(el('div', { cls: 'gn-empty', text: note })); return; }
            sections.forEach(s => {
                if (s.state === 'ready' && !s.results.length) return;
                list.append(el('div', { cls: 'gn-search-sec' }, el('span', { text: labelOf(s.tab) }),
                    s.state === 'ready' && s.more ? el('button', { cls: 'gn-search-more', text: 'Show all \u203a', attrs: { type: 'button' }, on: { click: () => setTab(s.tab) } }) : null));
                if (s.state === 'loading') list.append(el('div', { cls: 'gn-empty sm', text: 'Searching\u2026' }));
                else if (s.state === 'error') list.append(el('div', { cls: 'gn-empty sm', text: s.error }));
                else s.results.forEach(r => { const en = { tab: s.tab, r }; list.append(buildRow(en, flat.length)); flat.push(en); });
            });
            if (!flat.length && sections.every(s => s.state !== 'loading')) list.append(el('div', { cls: 'gn-empty', text: 'No matches.' }));
            if (sel >= flat.length) sel = 0;
            const s = list.querySelector('.is-sel'); if (s && s.scrollIntoView) s.scrollIntoView({ block: 'nearest' });
        }

        function choose(i, evt) {
            const en = flat[i]; if (!en) return;
            const t = en.tab;
            if (t.manualClose) { try { t.choose(en.r, evt, ctx); } catch (e) { console.error('[search tab ' + t.id + ']', e); } return; }
            m.close();
            try { t.choose(en.r, evt, ctx); } catch (e) { console.error('[search tab ' + t.id + ']', e); }
        }

        async function run() {
            const my = ++runSeq, q = input.value.trim(), t = tab;
            sel = 0;
            if (t.isAll) {
                const parts = real.filter(d => inAllOf(d) && (q || d.emptyInAll));
                if (!parts.length) { sections = []; paintAll(q ? 'No tab is set to take part in All. Turn some on in Settings \u2192 Search.' : 'Type to search everywhere. Pick a tab to browse it.'); return; }
                const limit = prefs.allLimit;
                sections = parts.map(d => ({ tab: d, state: 'loading', results: [], more: false, error: '' }));
                paintAll();
                sections.forEach(s => {
                    Promise.resolve().then(() => s.tab.query(q)).then(res => {
                        if (my !== runSeq) return;
                        res = res || []; s.results = res.slice(0, limit); s.more = res.length > limit; s.state = 'ready'; paintAll();
                    }).catch(e => { if (my !== runSeq) return; s.state = 'error'; s.error = labelOf(s.tab) + ': ' + ((e && e.message) || 'search failed'); paintAll(); });
                });
                return;
            }
            let out;
            try {
                if (t.async && q) list.replaceChildren(el('div', { cls: 'gn-empty', text: 'Searching\u2026' }));
                out = await t.query(q);
            } catch (e) {
                if (my === runSeq) list.replaceChildren(el('div', { cls: 'gn-empty', text: (e && e.message) || 'Search failed.' }));
                return;
            }
            if (my !== runSeq) return;
            paintList(out || [], t.emptyText);
        }

        function applyPrefix() {
            const v = input.value;
            for (const d of real) {
                if (d.prefix && tab !== d && v.startsWith(d.prefix)) { input.value = v.slice(d.prefix.length).replace(/^\s+/, ''); setTab(d); return true; }
            }
            return false;
        }
        input.addEventListener('input', () => {
            if (applyPrefix()) return;
            clearTimeout(timer);
            timer = setTimeout(run, tab.isAll ? 120 : (tab.debounce == null ? 40 : tab.debounce));
        });
        input.addEventListener('keydown', e => {
            const n = flat.length;
            if (e.key === 'ArrowDown') { e.preventDefault(); if (n) setSel((sel + 1) % n); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); if (n) setSel((sel - 1 + n) % n); }
            else if (e.key === 'Enter') { e.preventDefault(); choose(sel, e); }
            else if (e.key === 'Tab' && tabList.length > 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
                e.preventDefault();
                const i = tabList.indexOf(tab); setTab(tabList[(i + (e.shiftKey ? -1 : 1) + tabList.length) % tabList.length]);
            } else if (e.altKey && !e.ctrlKey && !e.metaKey && /^[1-9]$/.test(e.key) && tabList[+e.key - 1]) { e.preventDefault(); setTab(tabList[+e.key - 1]); }
        });

        current = { close: m.close, tabId: () => tab.id };
        if (opts.query) input.value = opts.query;
        setTab(tab);
        input.focus();
        return true;
    }

    /* ------------------------------------------------------------ Settings -> Search */
    const fmtHotkey = h => String(h).split('+').map(s => s.trim()).map(s => {
        const k = s.toLowerCase();
        if (k === 'mod') return isMac ? '\u2318' : 'Ctrl'; if (k === 'shift') return isMac ? '\u21e7' : 'Shift'; if (k === 'alt') return isMac ? '\u2325' : 'Alt'; if (k === 'ctrl') return isMac ? '\u2303' : 'Ctrl';
        return s.length === 1 ? s.toUpperCase() : s;
    }).join(isMac ? '' : '+');
    /* "Mod+O, Mod+K" -> ['Mod+O','Mod+K'], or an error string */
    function parseHotkeys(text) {
        const parts = String(text || '').split(',').map(s => s.trim()).filter(Boolean), out = [];
        for (const h of parts) {
            const bits = h.split('+').map(s => s.trim());
            const key = bits.pop(), mods = bits.map(s => s.toLowerCase());
            if (!key || mods.some(x => !['mod', 'ctrl', 'alt', 'shift', 'meta'].includes(x))) return 'Write each hotkey like Mod+Shift+K (Mod is Ctrl on Windows/Linux and Cmd on Mac).';
            if (!mods.some(x => ['mod', 'ctrl', 'alt', 'meta'].includes(x))) return 'A hotkey needs Mod (Ctrl/Cmd) or Alt, otherwise it would fire while you type.';
            out.push(h);
        }
        return out;
    }
    const norm = h => { const b = String(h).split('+').map(s => s.trim().toLowerCase()); const k = b.pop(); const mods = [...new Set(b.map(x => (x === 'ctrl' || x === 'meta' ? 'mod' : x)))].sort(); return mods.concat(k).join('+'); };
    function conflictOf(hk, ownId) {
        const wanted = norm(hk);
        for (const c of (GN.commands ? GN.commands.list() : [])) {
            if (c.id === 'finder:open' + (ownId === 'magnifier' ? '' : ':' + ownId)) continue;
            if ((c.hotkeys || []).some(x => norm(x) === wanted)) return c.name || c.id;
        }
        return '';
    }
    function ownerName(d) {
        if (!d.owner) return 'Search';
        const rec = GN.plugins && GN.plugins.list().find(p => p.id === d.owner);
        return rec && rec.manifest ? rec.manifest.name : d.owner;
    }
    const openDetails = new Set();
    function renderSettings(c) {
        GS.clear(c);
        const row = parent => new GS.ui.Setting(parent || c);
        const heading = t => { const h = el('div', { cls: 'gn-fs-head', text: t }); c.append(h); };
        const all = ordered(), vis = all.filter(d => !prefs.hidden[d.id]);
        const again = () => renderSettings(c);
        const poke = () => { savePrefs(); changed(); };

        heading('Search window');
        const defOpts = (vis.length > 1 ? [['all', 'All']] : []).concat(vis.map(d => [d.id, labelOf(d)]));
        const defVal = defOpts.some(o => o[0] === prefs.defaultTab) ? prefs.defaultTab : (defOpts[0] ? defOpts[0][0] : '');
        row().name('Default tab').desc('The tab the magnifier opens on.').select(defOpts, defVal, v => { prefs.defaultTab = v; poke(); });
        row().name('Open on').desc('Start on the default tab every time, or on the tab you used last.').select([['default', 'The default tab'], ['last', 'The tab I used last']], prefs.openOn, v => { prefs.openOn = v; poke(); });
        row().name('Hotkey for the default search').desc('Opens the window on the tab chosen above. Each tab below can have its own hotkey too.')
            .text(hotkeysOf('magnifier', null).join(', '), v => {
                const res = parseHotkeys(v);
                if (typeof res === 'string') { GS.ui.notice(res, 4500); return; }
                prefs.hotkeys.magnifier = res; poke();
                const clash = res.map(h => conflictOf(h, 'magnifier')).find(Boolean);
                if (clash) GS.ui.notice('Saved, but that hotkey is also used by \u201c' + clash + '\u201d.', 5000);
            }, 'none');
        row().name('Magnifier in the top bar').desc('The search button that opens this window. Tabs can also get an icon of their own below.').toggle(prefs.magnifier, v => { prefs.magnifier = v; poke(); });
        row().name('Results per tab in All').desc('How many results each tab shows in the All tab before \u201cShow all\u201d.').slider(3, 10, 1, prefs.allLimit, v => { prefs.allLimit = +v; poke(); });

        heading('Tabs');
        c.append(el('p', { cls: 'gn-sub', text: 'Each tab is provided by a feature (see Core plugins). A tab appears here while its feature is on. Hotkeys are written like Mod+Shift+K, several separated by commas; Tab and Alt+1\u20139 switch tabs inside the window.' }));

        const block = (id, title, by, def, flags) => {
            const d = el('details', { cls: 'gn-fs-tab' });
            d.open = openDetails.has(id);
            d.addEventListener('toggle', () => { if (d.open) openDetails.add(id); else openDetails.delete(id); });
            d.append(el('summary', {}, el('span', { text: title }), el('span', { cls: 'by', text: by }), flags.hidden ? el('span', { cls: 'off', text: 'hidden' }) : null));
            const body = el('div'); d.append(body); c.append(d);
            const r = () => row(body);
            if (flags.canHide) r().name('Show this tab').toggle(!prefs.hidden[id], v => { prefs.hidden[id] = !v; if (v) delete prefs.hidden[id]; poke(); again(); });
            if (flags.canAll) r().name('Include in All').desc('Let this tab add its best matches to the All tab.').toggle(inAllOf(def), v => { prefs.inAll[id] = !!v; poke(); });
            r().name('Icon in the top bar').desc('An extra button that opens the window on this tab.').toggle(!!prefs.icons[id], v => { if (v) prefs.icons[id] = true; else delete prefs.icons[id]; poke(); });
            const defKeys = (def && def.hotkeys) || [];
            const cur = hotkeysOf(id === 'all' ? 'all' : id, def);
            r().name('Hotkeys').desc((defKeys.length ? 'Default: ' + defKeys.map(fmtHotkey).join(', ') + '. ' : 'No default. ') + 'Leave empty for none.')
                .text(cur.join(', '), v => {
                    const res = parseHotkeys(v);
                    if (typeof res === 'string') { GS.ui.notice(res, 4500); return; }
                    prefs.hotkeys[id] = res; poke();
                    const clash = res.map(h => conflictOf(h, id)).find(Boolean);
                    if (clash) GS.ui.notice('Saved, but that hotkey is also used by \u201c' + clash + '\u201d.', 5000);
                }, defKeys.join(', ') || 'none');
            if (flags.canMove) {
                const idx = all.findIndex(x => x.id === id);
                const move = dir => { const ids = all.map(x => x.id); const j = idx + dir; if (j < 0 || j >= ids.length) return; [ids[idx], ids[j]] = [ids[j], ids[idx]]; prefs.order = ids; poke(); again(); };
                const s = r().name('Position').desc('Tabs appear in this order, after All.');
                s.button('Move earlier', () => move(-1)); s.button('Move later', () => move(1));
            }
        };
        if (vis.length > 1) block('all', 'All', 'built in', null, {});
        all.forEach(d => block(d.id, labelOf(d), 'provided by ' + ownerName(d), d, { canHide: true, canAll: true, canMove: true, hidden: !!prefs.hidden[d.id] }));
        if (!all.length) c.append(el('p', { cls: 'gn-sub', text: 'No feature is providing a search tab right now. Turn some on under Core plugins (Quick switcher, Search, Formulas, YouTube videos, Command search).' }));

        row().name('Reset search settings').desc('Back to the default order, hotkeys, icons and default tab.').button('Reset', () => { prefs = loadDefaults(); poke(); again(); }, { warn: true });
    }
    const loadDefaults = () => Object.assign({}, DEFAULTS, { order: [], hidden: {}, hotkeys: {}, icons: {}, inAll: {} });

    GN.finder = {
        addMode, addTab: addMode, open,
        hasMode: id => modes.some(m => m.id === id && !prefs.hidden[m.id]), hasTab: id => modes.some(m => m.id === id && !prefs.hidden[m.id]),
        get isOpen() { return !!current; },
        tabs: () => ordered().map(d => ({ id: d.id, label: labelOf(d), owner: d.owner || '', hidden: !!prefs.hidden[d.id] })),
        renderSettings, onChange(fn) { subs.add(fn); return () => subs.delete(fn); }, refresh: changed
    };
    changed();                                    // the magnifier and the "Search" command exist from the start
})(window);
