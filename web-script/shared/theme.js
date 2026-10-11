/* GateShared.theme - the same five themes + picker the simulator uses.
   Shares the 'gate_theme' localStorage key, so the choice follows you between pages. */
(function (g) {
    'use strict';
    const GS = (g.GateShared = g.GateShared || {});
    const KEY = 'gate_theme';
    const THEMES = [
        { id: 'system',    name: 'System',    desc: 'Follows your device',    p: { bg: 'linear-gradient(90deg,#ffffff 50%,#14171d 50%)', bg2: 'linear-gradient(90deg,#f5f6f9 50%,#1a1e26 50%)', tx: '#8a92a3', ac: '#2447c9', bd: '#9aa2b3' } },
        { id: 'light',     name: 'Draft',     desc: 'Clean white, ink blue',  p: { bg: '#ffffff', bg2: '#f5f6f9', tx: '#1b2230', ac: '#2447c9', bd: '#d9dde6' } },
        { id: 'dark',      name: 'Graphite',  desc: 'Soft dark for evenings', p: { bg: '#14171d', bg2: '#1a1e26', tx: '#e3e6ee', ac: '#86a8ff', bd: '#2f3645' } },
        { id: 'blueprint', name: 'Blueprint', desc: 'Drafting-sheet blue',    p: { bg: '#0e2745', bg2: '#123259', tx: '#e7f2ff', ac: '#7fd8ff', bd: '#2b5a8c' } },
        { id: 'paper',     name: 'Paper',     desc: 'Low-glare for reading',  p: { bg: '#f4f1ea', bg2: '#ece8de', tx: '#2a2924', ac: '#25694c', bd: '#d3cdbd' } },
        { id: 'midnight',  name: 'Midnight',  desc: 'True black for OLED',    p: { bg: '#000000', bg2: '#0b0b10', tx: '#dcdfe8', ac: '#b49cff', bd: '#24242e' } }
    ];
    const BAR = { light: '#f5f6f9', dark: '#1a1e26', blueprint: '#123259', paper: '#ece8de', midnight: '#0b0b10' };

    function getPref() {
        try { const v = localStorage.getItem(KEY); if (THEMES.some(t => t.id === v)) return v; } catch (e) {}
        return 'system';
    }
    function resolve(pref) {
        if (pref === 'system') return g.matchMedia && g.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        return pref;
    }
    function makePreview(t) {
        const el = document.createElement('span');
        el.className = 'gate-theme-prev';
        el.style.cssText = `--p-bg:${t.p.bg};--p-bg2:${t.p.bg2};--p-tx:${t.p.tx};--p-ac:${t.p.ac};--p-bd:${t.p.bd}`;
        el.innerHTML = '<i class="b"></i><i class="l1"></i><i class="l2"></i><i class="a"></i>';
        return el;
    }
    function shade(hex, pct) {
        try {
            let c = hex.replace('#', '');
            if (c.length === 3) c = c.split('').map(x => x + x).join('');
            const n = parseInt(c, 16);
            const cl = v => Math.max(0, Math.min(255, v));
            const r = cl((n >> 16) + pct), gg = cl(((n >> 8) & 255) + pct), b = cl((n & 255) + pct);
            return '#' + (1 << 24 | r << 16 | gg << 8 | b).toString(16).slice(1);
        } catch (e) { return hex; }
    }
    function applyAccent(hex) {
        const root = document.documentElement.style;
        const a = String(hex || '').toLowerCase();
        api.accent = a;
        if (/^#[0-9a-f]{6}$/.test(a)) {
            const n = parseInt(a.slice(1), 16);
            const lum = (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
            root.setProperty('--interactive-accent', a);
            root.setProperty('--interactive-accent-hover', shade(a, lum > 0.6 ? -25 : 25));
            root.setProperty('--text-accent', a);
            root.setProperty('--text-on-accent', lum > 0.6 ? '#111111' : '#ffffff');
        } else {
            ['--interactive-accent', '--interactive-accent-hover', '--text-accent', '--text-on-accent'].forEach(p => root.removeProperty(p));
        }
    }
    function apply(pref, persist) {
        if (!THEMES.some(t => t.id === pref)) pref = 'system';
        const resolved = resolve(pref);
        document.documentElement.setAttribute('data-theme', resolved);
        if (persist !== false) { try { localStorage.setItem(KEY, pref); } catch (e) {} }
        let meta = document.querySelector('meta[name="theme-color"]');
        if (!meta) { meta = document.createElement('meta'); meta.name = 'theme-color'; document.head.appendChild(meta); }
        meta.content = BAR[resolved] || '#ffffff';
        const btn = document.getElementById('theme-btn');
        const t = THEMES.find(x => x.id === pref);
        if (btn && t) {
            btn.innerHTML = '';
            btn.appendChild(makePreview(t));
            const label = document.createElement('span');
            label.className = 'theme-btn-label'; label.textContent = t.name;
            btn.appendChild(label);
        }
        document.querySelectorAll('[data-theme-id]').forEach(el => {
            const on = el.dataset.themeId === pref;
            el.classList.toggle('active', on);
            el.setAttribute(el.getAttribute('role') === 'menuitemradio' ? 'aria-checked' : 'aria-pressed', String(on));
        });
        document.dispatchEvent(new CustomEvent('gate-theme', { detail: { pref, resolved } }));
    }
    function initMenu() {
        const btn = document.getElementById('theme-btn');
        const menu = document.getElementById('theme-menu');
        if (!btn || !menu) return;
        menu.innerHTML = '';
        THEMES.forEach(t => {
            const o = document.createElement('button');
            o.type = 'button'; o.className = 'theme-opt'; o.dataset.themeId = t.id;
            o.setAttribute('role', 'menuitemradio');
            o.appendChild(makePreview(t));
            const txt = document.createElement('span'); txt.className = 'txt';
            txt.innerHTML = `<span class="name">${t.name}</span><span class="desc">${t.desc}</span>`;
            o.appendChild(txt);
            o.addEventListener('click', () => { apply(t.id); close(); btn.focus(); });
            menu.appendChild(o);
        });
        const open = () => { menu.hidden = false; btn.setAttribute('aria-expanded', 'true'); (menu.querySelector('.active') || menu.firstElementChild).focus(); };
        const close = () => { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
        btn.addEventListener('click', e => { e.stopPropagation(); menu.hidden ? open() : close(); });
        document.addEventListener('click', e => { if (!menu.hidden && !menu.contains(e.target)) close(); });
        menu.addEventListener('keydown', e => {
            const items = [...menu.querySelectorAll('.theme-opt')]; const i = items.indexOf(document.activeElement);
            if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
            if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
        });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { close(); btn.focus(); } });
        if (g.matchMedia) {
            const mq = g.matchMedia('(prefers-color-scheme: dark)');
            const onChange = () => { if (getPref() === 'system') apply('system', false); };
            mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
        }
        apply(getPref(), false);
    }

    const api = { THEMES, getPref, resolve, apply, initMenu, makePreview, applyAccent, accent: '' };
    GS.theme = api;
})(window);
