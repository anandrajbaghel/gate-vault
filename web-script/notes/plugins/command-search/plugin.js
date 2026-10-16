/* Command search - the "Commands" tab of the search window. Lists every command registered by the reader and its features (name, the
   feature it belongs to, its hotkeys) and runs the one you pick. Typing > in the search window switches to this tab. Nothing depends on it. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    const RECENT_KEY = 'gate_notes_command_recent', MAX_RECENT = 12;
    const fuzzy = GS.fuzzy.match, highlight = GS.fuzzy.highlight;
    const isMac = /Mac|iPhone|iPad/.test((g.navigator && (g.navigator.platform || g.navigator.userAgent)) || '');
    const fmt = h => String(h).split('+').map(s => s.trim()).map(s => {
        const k = s.toLowerCase();
        if (k === 'mod') return isMac ? '\u2318' : 'Ctrl'; if (k === 'shift') return isMac ? '\u21e7' : 'Shift'; if (k === 'alt') return isMac ? '\u2325' : 'Alt'; if (k === 'ctrl') return isMac ? '\u2303' : 'Ctrl';
        return s.length === 1 ? s.toUpperCase() : s;
    });
    const loadRecent = () => { try { const v = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'); return Array.isArray(v) ? v : []; } catch (e) { return []; } };
    function pushRecent(id) {
        const l = loadRecent().filter(x => x !== id); l.unshift(id);
        try { localStorage.setItem(RECENT_KEY, JSON.stringify(l.slice(0, MAX_RECENT))); } catch (e) {}
    }

    GN.plugins.define('command-search', {
        onload(p) {
            // the feature a command belongs to: its id starts with the plugin id ("calculator:toggle"), otherwise the part before the colon
            const groupOf = id => {
                const pre = String(id).split(':')[0];
                if (pre === 'finder') return 'Search';
                const rec = GN.plugins.list().find(x => x.id === pre);
                return rec && rec.manifest ? rec.manifest.name : (pre.charAt(0).toUpperCase() + pre.slice(1)).replace(/-/g, ' ');
            };
            const items = () => GN.commands.list().filter(c => c.name).map(c => ({ id: c.id, name: String(c.name), group: groupOf(c.id), hotkeys: c.hotkeys || [] }));

            p.addFinderMode({
                id: 'commands', title: 'Run a command', label: 'Commands', placeholder: 'Type a command\u2026',
                hint: 'Enter runs the command \u00b7 Tab switches tab \u00b7 Esc closes',
                debounce: 0, icon: 'command', order: 50, prefix: '>', hotkeys: ['Mod+Alt+P'], inAll: true, emptyInAll: true,
                query(q) {
                    const all = items(); q = String(q || '').trim();
                    if (!q) {
                        const recent = new Map(loadRecent().map((id, i) => [id, i]));
                        return all.sort((a, b) => {
                            const ra = recent.has(a.id) ? recent.get(a.id) : Infinity, rb = recent.has(b.id) ? recent.get(b.id) : Infinity;
                            return ra !== rb ? (ra < rb ? -1 : 1) : GS.natCompare(a.name, b.name);
                        }).map(c => ({ title: c.name, data: { c, pos: [] } }));
                    }
                    const out = [];
                    for (const c of all) {
                        const t = fuzzy(q, c.name), b = t ? null : fuzzy(q, c.group + ' ' + c.id);
                        if (!t && !b) continue;
                        out.push({ c, tier: t ? 0 : 1, score: (t || b).score, pos: t ? t.pos : [] });
                    }
                    return out.sort((a, b) => (a.tier - b.tier) || (b.score - a.score)).map(r => ({ title: r.c.name, data: r }));
                },
                render(res, row) {
                    const r = res.data, c = r.c;
                    const keys = el('div', { cls: 'cs-keys' }); c.hotkeys.slice(0, 2).forEach(h => keys.append(el('span', { cls: 'gn-kbd', text: fmt(h).join(isMac ? '' : '+') })));
                    row.append(el('div', { cls: 'cs-row' }, el('div', {}, el('div', { cls: 'cs-name' }, highlight(c.name, r.pos)), el('div', { cls: 'cs-group', text: c.group })), keys));
                },
                choose(res) { const c = res.data.c; pushRecent(c.id); setTimeout(() => GN.commands.run(c.id), 0); }
            });
        }
    });
})(window);
