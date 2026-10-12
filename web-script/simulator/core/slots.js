/* GateSim.slots - the places where features can add UI. Every slot is a small ordered registry:
     add(item) returns a function that removes it again; list() gives the items; onChange(fn) tells the UI to redraw.
   views   {id, title, order, mount(container, api) -> optional cleanup function}   the tabs of the page (Test, Dashboard ...)
   topbar  {id, icon, title, onClick}                                               buttons next to Settings
   Lower `order` comes first. */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    function Registry() {
        const items = [], subs = new Set();
        let seq = 0;
        const notify = () => subs.forEach(fn => { try { fn(); } catch (e) { console.error(e); } });
        return {
            add(item) {
                const it = Object.assign({}, item, { order: item.order == null ? 100 : item.order, _seq: seq++ });
                items.push(it);
                items.sort((a, b) => a.order - b.order || a._seq - b._seq);
                notify();
                return () => { const i = items.indexOf(it); if (i >= 0) { items.splice(i, 1); notify(); } };
            },
            list() { return items.slice(); },
            onChange(fn) { subs.add(fn); return () => subs.delete(fn); }
        };
    }
    GSim.slots = { Registry, views: Registry(), topbar: Registry() };
})(window);
