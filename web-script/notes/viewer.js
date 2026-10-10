/* GateNotes.viewer - full-screen viewer with zoom and pan for diagrams (mermaid) and any other SVG/element.
   Mouse: wheel = zoom, drag = pan, double-click = fit / 100%.  Touch: pinch + drag.  Keys: + - 0 1 arrows Esc. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared, el = GS.el;
    const MIN = 0.1, MAX = 10;

    function naturalSize(node) {
        const vb = (node.getAttribute && node.getAttribute('viewBox') || '').trim().split(/[\s,]+/).map(Number);
        if (vb.length === 4 && vb[2] > 0 && vb[3] > 0) return { w: vb[2], h: vb[3] };
        const r = node.getBoundingClientRect ? node.getBoundingClientRect() : { width: 0, height: 0 };
        return { w: r.width || 800, h: r.height || 600 };
    }

    function open(source, opts) {
        opts = opts || {};
        const prevFocus = document.activeElement;
        const clone = source.cloneNode(true);
        const { w, h } = naturalSize(source);
        clone.removeAttribute('id');
        clone.setAttribute('width', w); clone.setAttribute('height', h);
        clone.style.cssText = `width:${w}px;height:${h}px;max-width:none;max-height:none;display:block;`;

        const content = el('div', { cls: 'gn-viewer-content' }, clone);
        const stage = el('div', { cls: 'gn-viewer-stage' }, content);
        const label = el('button', { cls: 'gn-viewer-zoom', attrs: { type: 'button', title: 'Fit to screen' }, text: '100%' });
        const btn = (icon, title, fn) => el('button', { cls: 'gn-icon-btn', attrs: { type: 'button', 'aria-label': title, title }, on: { click: fn } }, GS.icon(icon));
        const closeBtn = btn('x', 'Close (Esc)', () => close());
        const bar = el('div', { cls: 'gn-viewer-bar' },
            el('div', { cls: 'gn-viewer-title', text: opts.title || 'Diagram' }),
            el('div', { cls: 'gn-viewer-tools' },
                btn('minus', 'Zoom out (-)', () => zoomBy(1 / 1.25)), label, btn('plus', 'Zoom in (+)', () => zoomBy(1.25)), closeBtn));
        const overlay = el('div', { cls: 'gn-viewer', attrs: { role: 'dialog', 'aria-modal': 'true', 'aria-label': opts.title || 'Diagram' } }, bar, stage);
        document.body.append(overlay);

        let scale = 1, tx = 0, ty = 0, auto = true;
        const apply = () => { content.style.transform = `translate(${tx}px,${ty}px) scale(${scale})`; label.textContent = Math.round(scale * 100) + '%'; };
        function fit() {
            const sw = stage.clientWidth || window.innerWidth, sh = stage.clientHeight || window.innerHeight - 56;
            scale = Math.min((sw - 32) / w, (sh - 32) / h, 2.5);
            scale = Math.max(MIN, scale);
            tx = (sw - w * scale) / 2; ty = (sh - h * scale) / 2; auto = true; apply();
        }
        function zoomAt(f, cx, cy) {
            const ns = Math.max(MIN, Math.min(MAX, scale * f)), k = ns / scale;
            tx = cx - (cx - tx) * k; ty = cy - (cy - ty) * k; scale = ns; auto = false; apply();
        }
        function zoomBy(f) { zoomAt(f, stage.clientWidth / 2, stage.clientHeight / 2); }
        function actual() { zoomAt(1 / scale, stage.clientWidth / 2, stage.clientHeight / 2); }
        label.addEventListener('click', fit);

        // pointer: drag to pan, two fingers to pinch
        const pts = new Map(); let pinch = null;
        stage.addEventListener('pointerdown', e => {
            stage.setPointerCapture(e.pointerId); pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
            if (pts.size === 2) { const [a, b] = [...pts.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) }; }
            stage.classList.add('is-grabbing');
        });
        stage.addEventListener('pointermove', e => {
            const p = pts.get(e.pointerId); if (!p) return;
            if (pts.size === 1) { tx += e.clientX - p.x; ty += e.clientY - p.y; auto = false; apply(); }
            else if (pts.size === 2 && pinch) {
                pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
                const [a, b] = [...pts.values()], d = Math.hypot(a.x - b.x, a.y - b.y);
                const r = stage.getBoundingClientRect();
                if (pinch.d > 0) zoomAt(d / pinch.d, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
                pinch.d = d;
            }
            pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
        });
        const up = e => { pts.delete(e.pointerId); if (pts.size < 2) pinch = null; if (!pts.size) stage.classList.remove('is-grabbing'); };
        stage.addEventListener('pointerup', up); stage.addEventListener('pointercancel', up);
        stage.addEventListener('wheel', e => {
            e.preventDefault();
            const r = stage.getBoundingClientRect();
            zoomAt(Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0016)), e.clientX - r.left, e.clientY - r.top);
        }, { passive: false });
        stage.addEventListener('dblclick', () => { Math.abs(scale - 1) < 0.01 ? fit() : actual(); });

        function onKey(e) {
            if (e.key === 'Escape') { e.stopPropagation(); close(); }
            else if (e.key === '+' || e.key === '=') zoomBy(1.25);
            else if (e.key === '-') zoomBy(1 / 1.25);
            else if (e.key === '0') fit();
            else if (e.key === '1') actual();
            else if (e.key.startsWith('Arrow')) {
                e.preventDefault();
                const s = 60; if (e.key === 'ArrowLeft') tx += s; if (e.key === 'ArrowRight') tx -= s; if (e.key === 'ArrowUp') ty += s; if (e.key === 'ArrowDown') ty -= s;
                auto = false; apply();
            }
        }
        const onResize = () => { if (auto) fit(); };
        document.addEventListener('keydown', onKey, true);
        window.addEventListener('resize', onResize);
        function close() {
            document.removeEventListener('keydown', onKey, true); window.removeEventListener('resize', onResize);
            overlay.remove();
            if (prevFocus && prevFocus.focus) { try { prevFocus.focus(); } catch (e) {} }
        }
        fit(); closeBtn.focus();
        return { close, fit, zoomBy, get scale() { return scale; } };
    }

    GN.viewer = { open };
})(window);
