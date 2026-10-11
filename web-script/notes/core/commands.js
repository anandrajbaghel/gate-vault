/* GateNotes.commands - named actions with optional keyboard shortcuts.
   register({ id, name, hotkeys: ['Mod+O'], run }) -> remove(). Mod = Ctrl on Windows/Linux, Cmd on Mac. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const cmds = new Map();
    let listening = false;

    function parse(h) {
        const parts = String(h).split('+').map(s => s.trim());
        const key = parts.pop().toLowerCase();
        const mods = parts.map(s => s.toLowerCase());
        return { mod: mods.includes('mod') || mods.includes('ctrl'), shift: mods.includes('shift'), alt: mods.includes('alt'), key };
    }
    function exec(c) { try { const r = c.run(); if (r && r.catch) r.catch(e => console.error('[command ' + c.id + ']', e)); } catch (e) { console.error('[command ' + c.id + ']', e); } }
    function onKey(e) {
        if (e.defaultPrevented || !e.key) return;
        const k = e.key.toLowerCase(), mod = e.ctrlKey || e.metaKey;
        for (const c of cmds.values()) {
            for (const h of c._keys) {
                if (h.mod === mod && h.shift === e.shiftKey && h.alt === e.altKey && h.key === k) { e.preventDefault(); exec(c); return; }
            }
        }
    }
    GN.commands = {
        register(def) {
            const c = Object.assign({}, def, { _keys: (def.hotkeys || []).map(parse) });
            cmds.set(c.id, c);
            if (!listening) { listening = true; document.addEventListener('keydown', onKey); }
            return () => { if (cmds.get(c.id) === c) cmds.delete(c.id); };
        },
        run(id) { const c = cmds.get(id); if (c) exec(c); return !!c; },
        has(id) { return cmds.has(id); },
        list() { return [...cmds.values()]; }
    };
})(window);
