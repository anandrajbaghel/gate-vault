/* GateFestivals - the festival-theme engine. Loaded in <head> right after festival-list.js, so the right theme is on the page
   before the first paint. It decides WHICH festival is on right now, builds that festival's theme CSS on demand, and
   cooperates with GateShared.theme (theme.js) so the normal theme picker keeps working.

   Settings (this device, key 'gate_festival'):  mode  auto | offer | always | off      fx  full | calm | off      calmExam  true | false
     auto   = a festival theme shows by itself while your theme is "System" (your own pick is never overridden)
     offer  = never switches by itself; a small banner offers to try it      always = overrides any theme      off = never
   The page that loads this can name the feature switch of the plugin that owns the settings, so switching that plugin off
   also stops the festival themes before first paint:
     <script src=".../festivals.js" data-plugins-key="gate_sim_plugins" data-plugin-id="festival-themes"></script>
   Testing: add ?festival=diwali to the page address to preview a theme without saving anything. */
(function (g) {
    'use strict';
    const KEY = 'gate_festival', DAY = 864e5;
    const LIST = Array.isArray(g.GATE_FESTIVAL_LIST) ? g.GATE_FESTIVAL_LIST : [];
    const me = document.currentScript;
    const pluginsKey = me && me.dataset ? me.dataset.pluginsKey : '', pluginId = me && me.dataset ? me.dataset.pluginId : '';
    const DEFAULTS = { mode: 'auto', fx: 'full', calmExam: true, dismissed: {} };
    let previewId = null, nowFn = () => new Date();

    const now = () => nowFn();
    const byId = id => LIST.find(f => f.id === id) || null;
    function load() {
        let s = {};
        try { s = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { s = {}; }
        const out = Object.assign({}, DEFAULTS, s);
        if (!['auto', 'offer', 'always', 'off'].includes(out.mode)) out.mode = 'auto';
        if (!['full', 'calm', 'off'].includes(out.fx)) out.fx = 'full';
        if (!out.dismissed || typeof out.dismissed !== 'object') out.dismissed = {};
        return out;
    }
    let cfg = load();
    const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cfg)); } catch (e) {} };
    function pluginOff() {
        if (!pluginsKey || !pluginId) return false;
        try { const st = JSON.parse(localStorage.getItem(pluginsKey) || '{}'); return !!(st.enabled && st.enabled[pluginId] === false); } catch (e) { return false; }
    }
    const off = () => pluginOff() || cfg.mode === 'off';

    /* ---------- dates ---------- */
    function stamp(s, year, endOfDay) {
        const m = /^(?:(\d{4})-)?(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?$/.exec(String(s || ''));
        if (!m) return null;
        const y = m[1] ? +m[1] : year, hasTime = m[4] != null;
        return hasTime ? new Date(y, +m[2] - 1, +m[3], +m[4], +m[5], 0, 0)
            : endOfDay ? new Date(y, +m[2] - 1, +m[3], 23, 59, 59, 999) : new Date(y, +m[2] - 1, +m[3], 0, 0, 0, 0);
    }
    /** every time span of a festival that could matter around `at` (yearly windows are expanded for last/this/next year) */
    function spans(f, at) {
        const out = [], y0 = at.getFullYear();
        (f.when || []).forEach(w => {
            const yearly = !/^\d{4}-/.test(String(w.from || ''));
            (yearly ? [y0 - 1, y0, y0 + 1] : [null]).forEach(y => {
                const a = stamp(w.from, y, false);
                let b = stamp(w.to || w.from, y, true);
                if (!a || !b) return;
                if (yearly && b < a) b = stamp(w.to || w.from, y + 1, true);       // e.g. 12-30 .. 01-02
                out.push({ start: new Date(a.getTime() - (f.lead || 0) * DAY), end: new Date(b.getTime() + (f.tail || 0) * DAY), from: a, to: b });
            });
        });
        return out.sort((p, q) => p.start - q.start);
    }
    function isOn(f, at) { return spans(f, at).some(s => at >= s.start && at <= s.end); }
    function active(at) {
        at = at || now();
        const on = LIST.filter(f => isOn(f, at));
        on.sort((a, b) => (b.priority || 0) - (a.priority || 0));
        return on[0] || null;
    }
    /** { state: 'active' | 'upcoming' | 'none', span } */
    function status(f, at) {
        at = at || now();
        const sp = spans(f, at), cur = sp.find(s => at >= s.start && at <= s.end);
        if (cur) return { state: 'active', span: cur };
        const nxt = sp.find(s => s.start > at);
        return nxt ? { state: 'upcoming', span: nxt } : { state: 'none', span: null };
    }
    const fmt = d => d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
    function describe(f) {
        if (!(f.when || []).length) return 'No dates set \u2014 edit festival-list.js to schedule it. You can still preview it.';
        const st = status(f);
        const range = s => (s.from.toDateString() === s.to.toDateString() ? fmt(s.from) : fmt(s.from) + ' \u2013 ' + fmt(s.to));
        if (st.state === 'active') return 'On now \u00b7 ' + range(st.span) + ' (until ' + fmt(st.span.end) + ')';
        if (st.state === 'upcoming') return 'Next: ' + range(st.span) + ' \u00b7 shows from ' + fmt(st.span.start);
        return 'No upcoming dates in the list. Add the next year\u2019s dates in festival-list.js.';
    }

    /* ---------- theme CSS (built only for the festival that is needed) ---------- */
    const CODE_DARK = '--code-keyword:#c4a1ff;--code-string:#7fdca6;--code-comment:#8d96ac;--code-number:#ffb86b;--code-fn:#9fc0ff;--code-type:#6fd3e6;';
    const CODE_LIGHT = '--code-keyword:#8b3fc7;--code-string:#1c7a4d;--code-comment:#7a8497;--code-number:#b45f06;--code-fn:#1f4fd1;--code-type:#0e7490;';
    function buildCss(f) {
        const c = f.colors || {}, id = f.id, sel = ':root[data-theme="' + id + '"]', dark = !!c.dark, sh = c.shadow || '0,0,0';
        const acc2 = f.accent2 || c.accent, glow = f.glow || '255,255,255';
        const stripe = (f.stripe && f.stripe.length > 1 ? f.stripe : [c.accent, acc2, c.accent]).join(',');
        let css = sel + '{color-scheme:' + (dark ? 'dark' : 'light') + ';'
            + '--background-primary:' + c.bg + ';--background-secondary:' + c.bg2 + ';--background-secondary-alt:' + (c.bg3 || c.bg2) + ';'
            + '--background-modifier-border:' + c.border + ';--background-modifier-form-field:' + (c.field || c.bg) + ';'
            + '--background-modifier-hover:' + (c.hover || (dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.05)')) + ';'
            + '--text-normal:' + c.text + ';--text-muted:' + c.muted + ';--text-accent:' + c.accent + ';--text-error:' + c.error + ';'
            + '--text-on-accent:' + c.onAccent + ';--interactive-accent:' + c.accent + ';--interactive-accent-hover:' + (c.accentHover || c.accent) + ';'
            + '--gate-success:' + c.success + ';--gate-warning:' + c.warning + ';--gate-review:' + c.review + ';--gate-on-status:' + c.onStatus + ';'
            + '--shadow-s:0 1px 2px rgba(' + sh + ',.4);--shadow-m:0 4px 14px rgba(' + sh + ',.4);--shadow-l:0 12px 34px rgba(' + sh + ',.55);'
            + (dark ? CODE_DARK : CODE_LIGHT) + '}\n';
        // the "charged" part: a soft backdrop, a glowing line under the top bar, glowing primary buttons and timer
        if (f.deco) css += 'html' + sel + ' body{background-image:' + f.deco + ';background-attachment:fixed;background-repeat:no-repeat;}\n';
        css += sel + ' #nav{border-bottom:2px solid transparent;border-image:linear-gradient(90deg,' + stripe + ') 1;box-shadow:0 6px 22px -14px rgba(' + glow + ',.9);}\n';
        css += sel + ' .gate-btn.primary,' + sel + ' .gate-start-btn{background-image:linear-gradient(135deg,' + c.accent + ',' + acc2 + ');border-color:transparent;box-shadow:0 0 16px -4px rgba(' + glow + ',.85);}\n';
        css += sel + ' .gate-exam-timer-box{box-shadow:0 0 0 1px ' + c.accent + ',0 0 18px -6px rgba(' + glow + ',.9);}\n';
        css += sel + ' ::selection{background:rgba(' + glow + ',.35);}\n';
        if (dark) css += sel + ' .gate-exam-content img{background:#ffffff;padding:6px;filter:brightness(.92);}\n';
        if (f.css) css += String(f.css).replace(/&/g, sel) + '\n';
        return css;
    }
    function ensureCss(id) {
        const f = byId(id);
        if (!f || document.querySelector('style[data-festival-css="' + id + '"]')) return;
        const st = document.createElement('style');
        st.setAttribute('data-festival-css', id);
        st.textContent = buildCss(f);
        (document.head || document.documentElement).appendChild(st);
    }

    /* ---------- what the theme picker needs ---------- */
    function themeDef(id) {
        const f = byId(id);
        return f ? { id: f.id, name: f.name, desc: f.desc, emoji: f.emoji, festival: true, p: f.preview || { bg: f.colors.bg, bg2: f.colors.bg2, tx: f.colors.text, ac: f.colors.accent, bd: f.colors.border }, bar: f.colors.bg2 } : null;
    }
    const available = id => !!byId(id) && !pluginOff() && (id === previewId || (cfg.mode !== 'off' && !!active() && active().id === id));
    function availableThemes() {
        const out = [], a = active();
        if (previewId && byId(previewId)) out.push(themeDef(previewId));
        if (a && !pluginOff() && cfg.mode !== 'off' && a.id !== previewId) out.push(themeDef(a.id));
        return out;
    }
    /** which festival theme should be forced on top of `pref` (the saved theme choice), or null */
    function override(pref) {
        if (pluginOff()) return null;
        if (previewId && byId(previewId)) return previewId;
        if (cfg.mode === 'off' || cfg.mode === 'offer') return null;
        const a = active();
        if (!a) return null;
        return (cfg.mode === 'always' || (cfg.mode === 'auto' && pref === 'system')) ? a.id : null;
    }

    function notify() { try { document.dispatchEvent(new CustomEvent('gate-festival')); } catch (e) {} }
    function reapply() { const T = g.GateShared && g.GateShared.theme; if (T) T.apply(T.getPref(), false); }

    const api = {
        list: LIST, byId, active, status, describe, spans, ensureCss, themeDef, available, availableThemes, override,
        theme: themeDef,
        settings() { return cfg; },
        set(k, v) { cfg[k] = v; save(); notify(); reapply(); },
        dismiss(id) { cfg.dismissed[id + ':' + now().getFullYear()] = 1; save(); },
        isDismissed(id) { return !!cfg.dismissed[id + ':' + now().getFullYear()]; },
        get previewId() { return previewId; },
        preview(id) { previewId = id && byId(id) ? id : null; if (previewId) ensureCss(previewId); notify(); reapply(); },
        get disabled() { return off(); },
        reload() { cfg = load(); notify(); reapply(); },
        setNow(fn) { nowFn = typeof fn === 'function' ? fn : (() => fn); notify(); reapply(); }
    };
    g.GateFestivals = api;

    // ----- first paint: pick the festival theme before anything is drawn -----
    try {
        const q = /[?&]festival=([\w-]+)/.exec(location.search);
        if (q && byId(q[1]) && !pluginOff()) previewId = q[1];
        const pref = localStorage.getItem('gate_theme') || 'system';
        let id = override(pref);
        if (!id && byId(pref) && available(pref)) id = pref;
        if (id) { ensureCss(id); document.documentElement.setAttribute('data-theme', id); document.documentElement.setAttribute('data-festival', id); }
        else if (byId(pref)) {     // a saved festival theme whose dates are over: fall back to System right away
            document.documentElement.setAttribute('data-theme', g.matchMedia && g.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        }
    } catch (e) { /* never block the page */ }
})(window);
