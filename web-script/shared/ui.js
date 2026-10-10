/* GateShared.ui - toast, modal and a settings-row builder (uses the simulator's existing CSS classes). */
(function (g) {
    'use strict';
    const GS = (g.GateShared = g.GateShared || {});
    const el = GS.el;
    const ui = (GS.ui = {});

    ui.notice = function (text, ms) {
        const n = el('div', { cls: 'gate-notice', text, attrs: { role: 'status' } });
        document.body.append(n);
        setTimeout(() => n.remove(), ms || 2200);
    };


    /** Popup menu. ui.menu({ anchor | x,y, items:[{label, sub?, onClick, separator?}] }) -> { close }.
        Closes on outside click, Esc, scroll or resize. One menu at a time. */
    let activeMenu = null;
    ui.menu = function (opts) {
        if (activeMenu) activeMenu.close();
        const items = opts.items || [];
        const m = el('div', { cls: 'gn-menu', attrs: { role: 'menu' } });
        const btns = [];
        items.forEach(it => {
            if (it.separator) { m.append(el('div', { cls: 'gn-menu-sep' })); return; }
            const b = el('button', { cls: 'gn-menu-item', attrs: { type: 'button', role: 'menuitem' } },
                el('span', { cls: 'gn-menu-label', text: it.label }), it.sub ? el('span', { cls: 'gn-menu-sub', text: it.sub }) : null);
            b.addEventListener('click', () => { close(); if (it.onClick) it.onClick(); });
            btns.push(b); m.append(b);
        });
        document.body.append(m);
        let x = opts.x || 0, y = opts.y || 0;
        if (opts.anchor) { const r = opts.anchor.getBoundingClientRect(); x = r.left; y = r.bottom + 4; }
        const w = m.offsetWidth, h = m.offsetHeight;
        x = Math.max(8, Math.min(x, window.innerWidth - w - 8));
        if (y + h > window.innerHeight - 8) y = Math.max(8, (opts.anchor ? opts.anchor.getBoundingClientRect().top - 4 : y) - h);
        m.style.left = x + 'px'; m.style.top = y + 'px';
        function close() {
            document.removeEventListener('mousedown', onOutside, true);
            document.removeEventListener('touchstart', onOutside, true);
            document.removeEventListener('keydown', onKey, true);
            window.removeEventListener('resize', close);
            document.removeEventListener('scroll', close, true);
            m.remove(); if (activeMenu === api) activeMenu = null;
        }
        function onOutside(e) { if (!m.contains(e.target)) close(); }
        function onKey(e) {
            if (e.key === 'Escape') { e.stopPropagation(); close(); return; }
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                const i = btns.indexOf(document.activeElement), n = btns.length;
                if (n) btns[(i + (e.key === 'ArrowDown' ? 1 : -1) + n) % n].focus();
            }
        }
        document.addEventListener('mousedown', onOutside, true);
        document.addEventListener('touchstart', onOutside, true);
        document.addEventListener('keydown', onKey, true);
        window.addEventListener('resize', close);
        document.addEventListener('scroll', close, true);
        const api = { close, el: m };
        activeMenu = api;
        if (btns[0]) btns[0].focus();
        return api;
    };

    /** Opens a modal. Returns { overlay, box, body, close }. Esc / outside click closes it. */
    ui.modal = function (opts) {
        const title = opts.title || '';
        const prevFocus = document.activeElement;
        const overlay = el('div', { cls: 'gate-modal-overlay gn-modal-overlay' });
        const closeBtn = el('button', { cls: 'gn-icon-btn', attrs: { type: 'button', 'aria-label': 'Close' } }, GS.icon('x'));
        const box = el('div', { cls: 'gate-modal-content gn-modal ' + (opts.cls || ''), style: `max-width:${opts.width || '640px'}`, attrs: { role: 'dialog', 'aria-modal': 'true', 'aria-label': title } },
            el('div', { cls: 'gn-modal-head' }, el('h2', { text: title }), closeBtn));
        const body = el('div', { cls: 'gn-modal-body' });
        box.append(body);
        overlay.append(box);
        document.body.append(overlay);
        function close() {
            document.removeEventListener('keydown', onKey, true);
            overlay.remove();
            if (opts.onClose) opts.onClose();
            if (prevFocus && prevFocus.focus && opts.restoreFocus !== false) { try { prevFocus.focus(); } catch (e) {} }
        }
        function onKey(e) { if (e.key === 'Escape') { e.stopPropagation(); close(); } }
        document.addEventListener('keydown', onKey, true);
        overlay.addEventListener('mousedown', e => { if (e.target === overlay) close(); });
        closeBtn.addEventListener('click', close);
        return { overlay, box, body, close };
    };

    /** A settings row: new ui.Setting(parent).name('..').desc('..').toggle(value, cb) */
    ui.Setting = class Setting {
        constructor(parent) {
            this.settingEl = el('div', { cls: 'setting-item' });
            this.nameEl = el('div', { cls: 'setting-item-name' });
            this.descEl = el('div', { cls: 'setting-item-description' });
            this.controlEl = el('div', { cls: 'setting-item-control' });
            this.settingEl.append(el('div', { cls: 'setting-item-info' }, this.nameEl, this.descEl), this.controlEl);
            parent.append(this.settingEl);
        }
        name(t) { this.nameEl.textContent = t; return this; }
        desc(t) { this.descEl.textContent = t; return this; }
        toggle(value, onChange) {
            this.settingEl.classList.add('is-toggle');
            const input = el('input', { type: 'checkbox', attrs: { role: 'switch', 'aria-label': this.nameEl.textContent } });
            input.checked = !!value;
            input.addEventListener('change', () => onChange(input.checked));
            this.controlEl.append(el('label', { cls: 'gate-switch' }, input, el('span', { cls: 'gate-switch-track' })));
            return this;
        }
        slider(min, max, step, value, onChange) {
            const input = el('input', { type: 'range', min, max, step });
            input.value = value;
            const lbl = el('span', { cls: 'gate-slider-value', text: String(value) });
            input.addEventListener('input', () => { lbl.textContent = input.value; onChange(Number(input.value)); });
            this.controlEl.append(el('div', { cls: 'gate-slider-wrap' }, input, lbl));
            return this;
        }
        select(options, value, onChange) {
            const s = el('select');
            options.forEach(([v, t]) => s.append(el('option', { value: v, text: t })));
            s.value = value;
            s.addEventListener('change', () => onChange(s.value));
            this.controlEl.append(s);
            return this;
        }
        text(value, onChange, placeholder) {
            const i = el('input', { type: 'text', value: value || '', placeholder: placeholder || '' });
            i.addEventListener('change', () => onChange(i.value));
            this.controlEl.append(i);
            return this;
        }
        color(value, onChange) {
            const i = el('input', { type: 'color', cls: 'gate-color-input' });
            i.value = /^#[0-9a-f]{6}$/i.test(value) ? value : '#2447c9';
            i.addEventListener('input', () => onChange(i.value));
            this.controlEl.append(i);
            return this;
        }
        button(text, onClick, o) {
            o = o || {};
            const b = el('button', { cls: 'gate-btn' + (o.cta ? ' primary' : ''), text, attrs: { type: 'button' } });
            if (o.warn) b.style.color = 'var(--text-error)';
            b.addEventListener('click', onClick);
            this.controlEl.append(b);
            return this;
        }
    };
})(window);
