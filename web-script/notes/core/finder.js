/* GateNotes.finder - the shared "type to find" window (used by the quick switcher and by text search).
   A feature adds a mode:  addMode({ id, title, label, placeholder, hint, debounce, async,
                                    query(text) -> [{ title, sub?, snippet?: Node, data }] | Promise,
                                    choose(result) })  -> remove()
   open(modeId) shows the window; if several modes exist they appear as tabs. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared, el = GS.el;
    const modes = [];
    let current = null;

    function addMode(def) {
        modes.push(def);
        return () => {
            const i = modes.indexOf(def); if (i >= 0) modes.splice(i, 1);
            if (current && current.mode() === def) current.close();
        };
    }

    function open(modeId) {
        if (!modes.length) return false;
        if (current) current.close();
        let mode = modes.find(m => m.id === modeId) || modes[0];
        let results = [], sel = 0, seq = 0, timer = null;
        const m = GS.ui.modal({ title: '', width: '640px', cls: 'gn-search-modal', onClose: () => { clearTimeout(timer); current = null; } });
        const input = el('input', { cls: 'gn-search-input', type: 'text', attrs: { 'aria-label': 'Search', autocomplete: 'off', spellcheck: 'false' } });
        const tabs = el('div', { cls: 'gn-tabs gn-search-tabs' });
        const list = el('div', { cls: 'gn-search-results', attrs: { role: 'listbox' } });
        const hint = el('div', { cls: 'gn-sub gn-search-hint' });
        m.body.append(input, tabs, list, hint);
        tabs.hidden = modes.length < 2;
        modes.forEach(md => tabs.append(el('button', { cls: 'gn-tab', text: md.label || md.title, attrs: { type: 'button' }, dataset: { mode: md.id }, on: { click: () => setMode(md) } })));

        function setMode(next) {
            mode = next;
            m.box.querySelector('h2').textContent = mode.title || mode.label || 'Find';
            tabs.querySelectorAll('.gn-tab').forEach(t => t.setAttribute('aria-selected', String(t.dataset.mode === mode.id)));
            input.placeholder = mode.placeholder || '';
            hint.textContent = mode.hint || 'Enter opens \u00B7 \u2191\u2193 to move \u00B7 Esc closes';
            run(); input.focus();
        }
        function paint() {
            GS.clear(list);
            if (!results.length) { list.append(el('div', { cls: 'gn-empty', text: input.value.trim() ? 'No matches.' : 'Nothing to show yet.' })); return; }
            results.forEach((r, i) => {
                const row = el('div', { cls: 'gn-search-row' + (i === sel ? ' is-sel' : ''), attrs: { role: 'option', 'aria-selected': String(i === sel) } },
                    el('div', { cls: 'gn-search-title', text: r.title }),
                    r.snippet ? el('div', { cls: 'gn-search-snip' }, r.snippet) : (r.sub ? el('div', { cls: 'gn-sub', text: r.sub }) : null));
                row.addEventListener('mousemove', () => { if (sel !== i) { sel = i; list.querySelectorAll('.gn-search-row').forEach((x, k) => x.classList.toggle('is-sel', k === i)); } });
                row.addEventListener('click', () => choose(i));
                list.append(row);
            });
            const s = list.querySelector('.is-sel'); if (s && s.scrollIntoView) s.scrollIntoView({ block: 'nearest' });
        }
        function choose(i) {
            const r = results[i]; if (!r) return;
            const md = mode;
            m.close();
            try { md.choose(r); } catch (e) { console.error('[finder ' + md.id + ']', e); }
        }
        async function run() {
            const my = ++seq, q = input.value.trim(), md = mode;
            sel = 0;
            let out;
            try {
                if (md.async && q) list.replaceChildren(el('div', { cls: 'gn-empty', text: 'Searching\u2026' }));
                out = await md.query(q);
            } catch (e) {
                if (my === seq) list.replaceChildren(el('div', { cls: 'gn-empty', text: (e && e.message) || 'Search failed.' }));
                return;
            }
            if (my !== seq) return;
            results = out || []; paint();
        }
        input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(run, mode.debounce == null ? 40 : mode.debounce); });
        input.addEventListener('keydown', e => {
            if (e.key === 'ArrowDown') { e.preventDefault(); if (results.length) { sel = (sel + 1) % results.length; paint(); } }
            else if (e.key === 'ArrowUp') { e.preventDefault(); if (results.length) { sel = (sel - 1 + results.length) % results.length; paint(); } }
            else if (e.key === 'Enter') { e.preventDefault(); choose(sel); }
        });
        current = { close: m.close, mode: () => mode };
        setMode(mode);
        input.focus();
        return true;
    }

    GN.finder = { addMode, open, hasMode: id => modes.some(m => m.id === id), get isOpen() { return !!current; } };
})(window);
