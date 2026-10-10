/* GateShared.dom - tiny DOM helpers shared by every web-script feature. */
(function (g) {
    'use strict';
    const GS = (g.GateShared = g.GateShared || {});
    const NS = 'http://www.w3.org/2000/svg';

    /** el('div', { cls, text, attrs, on, dataset, style, ...props }, ...children) */
    GS.el = function el(tag, props, ...kids) {
        const n = document.createElement(tag);
        if (props) {
            for (const [k, v] of Object.entries(props)) {
                if (v === undefined || v === null || v === false) continue;
                if (k === 'cls') n.className = v;
                else if (k === 'text') n.textContent = v;
                else if (k === 'attrs') { for (const [a, b] of Object.entries(v)) n.setAttribute(a, b); }
                else if (k === 'on') { for (const [ev, fn] of Object.entries(v)) n.addEventListener(ev, fn); }
                else if (k === 'dataset') Object.assign(n.dataset, v);
                else if (k === 'style') n.style.cssText = v;
                else n[k] = v;
            }
        }
        for (const kid of kids.flat(Infinity)) {
            if (kid === undefined || kid === null || kid === false) continue;
            n.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
        }
        return n;
    };

    GS.clear = function (n) { while (n.firstChild) n.removeChild(n.firstChild); return n; };
    GS.escapeHtml = function (s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    };
    GS.natCompare = function (a, b) { return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' }); };
    GS.debounce = function (fn, ms) { let t; return function (...a) { clearTimeout(t); t = setTimeout(() => fn.apply(this, a), ms); }; };
    GS.rafThrottle = function (fn) { let q = false; return function (...a) { if (q) return; q = true; requestAnimationFrame(() => { q = false; fn.apply(this, a); }); }; };

    // Small stroke icon set (24x24 grid)
    const ICONS = {
        menu: ['M4 6h16', 'M4 12h16', 'M4 18h16'],
        search: ['M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'M21 21l-4.3-4.3'],
        sliders: ['M4 21v-7', 'M4 10V3', 'M12 21v-9', 'M12 8V3', 'M20 21v-5', 'M20 12V3', 'M1 14h6', 'M9 8h6', 'M17 16h6'],
        chevronRight: ['M9 18l6-6-6-6'],
        chevronDown: ['M6 9l6 6 6-6'],
        back: ['M19 12H5', 'M12 19l-7-7 7-7'],
        forward: ['M5 12h14', 'M12 5l7 7-7 7'],
        file: ['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M16 13H8', 'M16 17H8', 'M10 9H8'],
        folder: ['M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z'],
        hash: ['M4 9h16', 'M4 15h16', 'M10 3L8 21', 'M16 3l-2 18'],
        link: ['M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71', 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'],
        x: ['M18 6L6 18', 'M6 6l12 12'],
        panelLeft: ['M3 3h18v18H3z', 'M9 3v18'],
        panelRight: ['M3 3h18v18H3z', 'M15 3v18'],
        list: ['M8 6h13', 'M8 12h13', 'M8 18h13', 'M3 6h.01', 'M3 12h.01', 'M3 18h.01'],
        maximize: ['M8 3H5a2 2 0 0 0-2 2v3', 'M21 8V5a2 2 0 0 0-2-2h-3', 'M3 16v3a2 2 0 0 0 2 2h3', 'M16 21h3a2 2 0 0 0 2-2v-3'],
        plus: ['M12 5v14', 'M5 12h14'],
        minus: ['M5 12h14'],
        collapse: ['M7 20l5-5 5 5', 'M7 4l5 5 5-5'],
        expand: ['M7 15l5 5 5-5', 'M7 9l5-5 5 5']
    };
    GS.icon = function (name, size) {
        size = size || 18;
        const svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('width', size); svg.setAttribute('height', size);
        svg.setAttribute('fill', 'none'); svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2'); svg.setAttribute('stroke-linecap', 'round'); svg.setAttribute('stroke-linejoin', 'round');
        svg.setAttribute('aria-hidden', 'true'); svg.setAttribute('class', 'gn-icon');
        for (const d of ICONS[name] || []) { const p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); svg.appendChild(p); }
        return svg;
    };
})(window);
