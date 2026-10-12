/* GateSim.events - tiny publish/subscribe bus. Core and plugins talk to each other only through events,
   commands, slots and services, never by calling each other's files directly.
   Events: plugin:enabled id - plugin:disabled id - plugins:ready - view:changed id */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    const map = new Map();
    GSim.events = {
        on(name, fn) {
            let s = map.get(name);
            if (!s) map.set(name, (s = new Set()));
            s.add(fn);
            return () => s.delete(fn);
        },
        emit(name, ...args) {
            const s = map.get(name);
            if (!s) return;
            [...s].forEach(fn => { try { fn(...args); } catch (e) { console.error('[event ' + name + ']', e); } });
        },
        has(name) { const s = map.get(name); return !!(s && s.size); }
    };
})(window);
