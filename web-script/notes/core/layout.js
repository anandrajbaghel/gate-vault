/* GateNotes.layout - the page frame: sidebars with tabs (filled from the slots), top-bar buttons, drawers on phones,
   collapse/resize on desktop. It knows nothing about any particular feature. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared, el = GS.el;
    const $ = id => document.getElementById(id);
    const mq = g.matchMedia ? g.matchMedia('(max-width: 900px)') : { matches: false };
    const isMobile = () => mq.matches;
    let appEl, left, right;
    const sidebars = {};

    function makeSidebar(side, container, registry) {
        const tabsEl = el('div', { cls: 'gn-tabs', attrs: { role: 'tablist' } });
        const panesEl = el('div', { cls: 'gn-tabpanes' });
        container.append(tabsEl, panesEl);
        const tabs = new Map();     // slot item -> { btn, pane, cleanup }
        const key = side + 'Tab';

        function show(id) {
            tabs.forEach((t, item) => { const on = item.id === id; t.btn.setAttribute('aria-selected', String(on)); t.pane.hidden = !on; });
        }
        function select(id) { GN.settings.set(key, id); show(id); }
        function sync() {
            const list = registry.list();
            for (const [item, t] of [...tabs]) {
                if (list.includes(item)) continue;
                try { if (t.cleanup) t.cleanup(); } catch (e) { console.error(e); }
                t.btn.remove(); t.pane.remove(); tabs.delete(item);
            }
            for (const item of list) {
                if (tabs.has(item)) continue;
                const badge = el('span', { cls: 'gn-badge', hidden: true });
                const btn = el('button', { cls: 'gn-tab', attrs: { type: 'button', role: 'tab' }, dataset: { tab: item.id } }, el('span', { text: item.title }), badge);
                const pane = el('div', { cls: 'gn-tabpane', attrs: { role: 'tabpanel' } });
                pane.hidden = true;
                btn.addEventListener('click', () => select(item.id));
                const api = { pane, select: () => select(item.id), setBadge(n) { badge.hidden = !n; badge.textContent = String(n); } };
                const t = { btn, pane, cleanup: null };
                tabs.set(item, t);
                try { const r = item.mount && item.mount(pane, api); if (typeof r === 'function') t.cleanup = r; }
                catch (e) { console.error('[sidebar tab ' + item.id + ']', e); pane.textContent = 'This panel failed to load.'; }
            }
            list.forEach(item => { const t = tabs.get(item); tabsEl.appendChild(t.btn); panesEl.appendChild(t.pane); });
            const empty = !list.length;
            container.classList.toggle('gn-side-empty', empty);
            document.body.classList.toggle('gn-' + side + '-empty', empty);
            const want = GN.settings.get(key), cur = list.find(i => i.id === want) || list[0];
            if (cur) show(cur.id);
        }
        registry.onChange(sync);
        sync();
        return { select, has: id => registry.list().some(i => i.id === id) };
    }

    function renderTopbar() {
        const host = $('gn-topbar-slot'); if (!host) return;
        GS.clear(host);
        GN.slots.topbar.list().forEach(it => host.append(
            el('button', { cls: 'gn-icon-btn', attrs: { type: 'button', 'aria-label': it.title, title: it.title }, dataset: { slot: it.id }, on: { click: () => it.onClick && it.onClick() } }, GS.icon(it.icon || 'menu'))));
    }

    function openSide(side) {
        if (isMobile()) { appEl.classList.remove(side === 'left' ? 'gn-right-open' : 'gn-left-open'); appEl.classList.add(side === 'left' ? 'gn-left-open' : 'gn-right-open'); }
        else { appEl.classList.remove(side === 'left' ? 'gn-hide-left' : 'gn-hide-right'); GN.settings.set(side === 'left' ? 'leftOpen' : 'rightOpen', true); }
    }
    function toggleSide(side) {
        const cls = side === 'left' ? 'gn-left-open' : 'gn-right-open', other = side === 'left' ? 'gn-right-open' : 'gn-left-open';
        if (isMobile()) { appEl.classList.remove(other); appEl.classList.toggle(cls); return; }
        const hide = appEl.classList.toggle(side === 'left' ? 'gn-hide-left' : 'gn-hide-right');
        GN.settings.set(side === 'left' ? 'leftOpen' : 'rightOpen', !hide);
    }
    function closeDrawers() { appEl.classList.remove('gn-left-open', 'gn-right-open'); }

    function initResizer(handle, side) {
        handle.addEventListener('pointerdown', e => {
            e.preventDefault(); handle.setPointerCapture(e.pointerId); handle.classList.add('is-dragging');
            const startX = e.clientX, startW = (side === 'left' ? left : right).offsetWidth;
            const move = ev => {
                const dx = ev.clientX - startX, w = Math.max(200, Math.min(520, side === 'left' ? startW + dx : startW - dx));
                document.documentElement.style.setProperty(side === 'left' ? '--gn-left-w' : '--gn-right-w', w + 'px');
            };
            const up = () => {
                handle.classList.remove('is-dragging'); handle.removeEventListener('pointermove', move); handle.removeEventListener('pointerup', up);
                GN.settings.set(side === 'left' ? 'leftWidth' : 'rightWidth', (side === 'left' ? left : right).offsetWidth);
            };
            handle.addEventListener('pointermove', move); handle.addEventListener('pointerup', up);
        });
    }

    GN.layout = {
        isMobile, openSide, toggleSide, closeDrawers,
        init() {
            appEl = $('gn-app'); left = $('gn-left'); right = $('gn-right');
            sidebars.left = makeSidebar('left', left, GN.slots.left);
            sidebars.right = makeSidebar('right', right, GN.slots.right);
            GN.slots.topbar.onChange(renderTopbar); renderTopbar();
            $('gn-toggle-left').addEventListener('click', () => toggleSide('left'));
            $('gn-toggle-right').addEventListener('click', () => toggleSide('right'));
            $('gn-backdrop').addEventListener('click', closeDrawers);
            initResizer($('gn-resize-left'), 'left'); initResizer($('gn-resize-right'), 'right');
            if (!GN.settings.get('leftOpen')) appEl.classList.add('gn-hide-left');
            if (!GN.settings.get('rightOpen')) appEl.classList.add('gn-hide-right');
        },
        /** open a sidebar and bring one of its tabs to the front */
        showTab(side, id) { if (sidebars[side] && sidebars[side].has(id)) sidebars[side].select(id); openSide(side); }
    };
})(window);
