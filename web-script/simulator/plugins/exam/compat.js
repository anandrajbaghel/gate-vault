/* exam / compat.js - the small Obsidian-style helpers (createEl, Modal, Notice, Setting) the classic exam screens were written
   with, kept here so the ported exam code stays identical to the original. Used only by this feature. */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    const GS = g.GateShared;
    const lib = (GSim.pluginLib = GSim.pluginLib || {});
    const mine = (lib['exam'] = lib['exam'] || {});

HTMLElement.prototype.createEl = function(tag, opts = {}) {
    const el = document.createElement(tag);
    if (opts.cls) el.className = Array.isArray(opts.cls) ? opts.cls.join(' ') : opts.cls;
    if (opts.text) el.innerText = opts.text;
    if (opts.attr) Object.entries(opts.attr).forEach(([k,v]) => el.setAttribute(k, v));
    // Obsidian's createEl accepts these directly; without them radios/checkboxes become plain text boxes.
    ['type', 'placeholder', 'value', 'name', 'href', 'title', 'id', 'min', 'max', 'step', 'rows', 'cols'].forEach(k => {
        if (opts[k] !== undefined && opts[k] !== null) el.setAttribute(k, opts[k]);
    });
    if (opts.style) el.setAttribute('style', opts.style);
    this.appendChild(el);
    return el;
};
HTMLElement.prototype.createDiv = function(opts = {}) { return this.createEl('div', opts); };
HTMLElement.prototype.createSpan = function(opts = {}) { return this.createEl('span', opts); };
HTMLElement.prototype.empty = function() { this.innerHTML = ''; };
HTMLElement.prototype.setText = function(t) { this.innerText = t; };
HTMLElement.prototype.addClass = function(c) { this.classList.add(c); };
HTMLElement.prototype.appendText = function(t) { this.appendChild(document.createTextNode(t)); };

class Notice {
    constructor(msg, duration = 3000) {
        const toast = document.createElement('div');
        toast.className = 'gate-notice';
        toast.innerText = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), duration);
    }
}

class Modal {
    constructor() {
        this.modalEl = document.createElement('div');
        this.modalEl.className = 'gate-modal-overlay';
        this.contentEl = document.createElement('div');
        this.contentEl.className = 'gate-modal-content';
        this.modalEl.appendChild(this.contentEl);
    }
    open() { document.body.appendChild(this.modalEl); this.onOpen(); }
    close() { this.modalEl.remove(); this.onClose(); }
    onOpen() {}
    onClose() {}
}

class Setting {
    constructor(container) {
        this.settingEl = container.createDiv({ cls: 'setting-item' });
        this.infoEl = this.settingEl.createDiv({ cls: 'setting-item-info' });
        this.nameEl = this.infoEl.createDiv({ cls: 'setting-item-name' });
        this.descEl = this.infoEl.createDiv({ cls: 'setting-item-description' });
        this.controlEl = this.settingEl.createDiv({ cls: 'setting-item-control' });
    }
    setName(n) { this.nameEl.innerText = n; return this; }
    setDesc(d) { this.descEl.innerText = d; return this; }
    setHeading() { this.settingEl.classList.add('setting-item-heading'); this.infoEl.style.flex = "none"; return this; }
    addText(cb) {
        const input = document.createElement('input'); input.type = 'text';
        this.controlEl.appendChild(input);
        const c = { inputEl: input, setPlaceholder: p => { input.placeholder = p; return c; }, setValue: v => { input.value = v; return c; }, onChange: fn => { input.addEventListener('input', e => fn(e.target.value)); return c; } };
        cb(c);
        return this;
    }
    addDropdown(cb) {
        const select = document.createElement('select');
        this.controlEl.appendChild(select);
        const c = { selectEl: select, addOption: (v, t) => { const o = document.createElement('option'); o.value=v; o.innerText=t; select.appendChild(o); return c; }, setValue: v => { select.value = v; return c; }, onChange: fn => { select.addEventListener('change', e => fn(e.target.value)); return c; } };
        cb(c);
        return this;
    }
    addToggle(cb) {
        this.settingEl.classList.add('is-toggle');
        const label = document.createElement('label'); label.className = 'gate-switch';
        const input = document.createElement('input'); input.type = 'checkbox'; input.setAttribute('role', 'switch');
        input.setAttribute('aria-label', this.nameEl.innerText || 'Toggle');
        const track = document.createElement('span'); track.className = 'gate-switch-track';
        label.appendChild(input); label.appendChild(track);
        this.controlEl.appendChild(label);
        const c = { inputEl: input, setValue: v => { input.checked = !!v; return c; }, onChange: fn => { input.addEventListener('change', e => fn(e.target.checked)); return c; } };
        cb(c);
        return this;
    }
    addButton(cb) {
        const btn = document.createElement('button'); btn.className = 'gate-btn';
        this.controlEl.appendChild(btn);
        const c = { setButtonText: t => { btn.innerText = t; return c; }, setCta: () => { btn.classList.add('primary'); return c; }, setWarning: () => { btn.classList.add('danger'); return c; }, onClick: fn => { btn.addEventListener('click', fn); return c; } };
        cb(c);
        return this;
    }
    addColorPicker(cb) {
        const input = document.createElement('input'); input.type = 'color';
        input.className = 'gate-color-input';
        this.controlEl.appendChild(input);
        const c = { inputEl: input, setValue: v => { input.value = v; return c; }, onChange: fn => { input.addEventListener('input', e => fn(e.target.value)); return c; } };
        cb(c);
        return this;
    }
    addSlider(cb) {
        const wrap = document.createElement('div'); wrap.className = 'gate-slider-wrap';
        const input = document.createElement('input'); input.type = 'range';
        const valueLbl = document.createElement('span'); valueLbl.className = 'gate-slider-value';
        wrap.appendChild(input); wrap.appendChild(valueLbl);
        this.controlEl.appendChild(wrap);
        const c = {
            inputEl: input,
            setLimits: (min, max, step) => { input.min = min; input.max = max; input.step = step; return c; },
            setValue: v => { input.value = v; valueLbl.textContent = v; return c; },
            onChange: fn => { input.addEventListener('input', e => { valueLbl.textContent = e.target.value; fn(Number(e.target.value)); }); return c; }
        };
        cb(c);
        return this;
    }
    addTextArea(cb) {
        const textarea = document.createElement('textarea');
        this.controlEl.appendChild(textarea);
        const c = { inputEl: textarea, setValue: v => { textarea.value = v; return c; }, onChange: fn => { textarea.addEventListener('input', e => fn(e.target.value)); return c; } };
        cb(c);
        return this;
    }
}

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

    mine.Notice = Notice; mine.Modal = Modal; mine.Setting = Setting; mine.downloadFile = downloadFile;
})(window);
