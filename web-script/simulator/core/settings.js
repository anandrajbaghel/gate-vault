/* GateSim.settings - simulator page preferences, saved on this device under 'gate_sim_settings'.
   Independent from the original simulator's 'gate_settings' and from the notes reader. Theme and accent colour are
   shared with the other pages on purpose ('gate_theme'). Feature on/off switches and options live in the plugin
   manager ('gate_sim_plugins'). */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    const GS = g.GateShared;
    const KEY = 'gate_sim_settings';
    const DEFAULTS = { lastView: '', openLast: true, accentColor: '' };

    let data = Object.assign({}, DEFAULTS);
    try { Object.assign(data, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) {}
    const listeners = new Set();
    const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {} };
    const apply = () => { if (GS && GS.theme) GS.theme.applyAccent(data.accentColor); };

    GSim.settings = {
        raw() { return Object.assign({}, data); },
        defaults: DEFAULTS,
        get(k) { return data[k]; },
        set(k, v) { data[k] = v; persist(); apply(); listeners.forEach(fn => { try { fn(k, v); } catch (e) { console.error(e); } }); },
        remove(k) { delete data[k]; persist(); },
        reset() { data = Object.assign({}, DEFAULTS); persist(); apply(); listeners.forEach(fn => fn('*', null)); },
        on(fn) { listeners.add(fn); return () => listeners.delete(fn); },
        apply
    };
})(window);
