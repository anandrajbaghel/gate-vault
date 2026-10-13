/* GateShared.festivalUI - everything you SEE of the festival themes apart from the colours: the motion layer (loaded only when a
   festival theme is on screen), the small greeting banner, the festival emoji in the page title and tab icon, the Settings panel
   and the "celebrate" burst after a test. Each page's `festival-themes` plugin is a thin wrapper around this file, so the
   simulator and the notes reader behave identically. Needs festivals.js + theme.js (loaded in the page head / core). */
(function (g) {
    'use strict';
    const GS = (g.GateShared = g.GateShared || {});
    const me = document.currentScript;
    const base = me && me.src ? new URL('./', me.src) : new URL('./web-script/shared/', location.href);
    const version = me && me.src ? (new URL(me.src).searchParams.get('v') || '') : '';
    const F = () => g.GateFestivals;

    let inited = false, busy = false, banner = null, fxLoading = null, styleEl = null;
    let origTitle = null, origIcons = null, titleObs = null;
    const offs = [];

    const CSS = `
.gate-fest-banner{position:fixed;top:64px;left:50%;transform:translateX(-50%);z-index:55;display:flex;align-items:center;gap:10px;max-width:min(94vw,680px);
 padding:8px 8px 8px 14px;border-radius:999px;background:var(--background-secondary);color:var(--text-normal);border:1px solid var(--interactive-accent);
 box-shadow:var(--shadow-m),0 0 22px -8px var(--interactive-accent);font-size:.86rem;line-height:1.3;animation:gate-fest-in .5s ease-out both;}
.gate-fest-banner .em{font-size:1.15rem;flex:0 0 auto}
.gate-fest-banner .msg{min-width:0}
.gate-fest-banner a{color:var(--text-accent);font-weight:600;white-space:nowrap}
.gate-fest-banner button{flex:0 0 auto;border:0;cursor:pointer;border-radius:999px;font:inherit;font-size:.8rem;padding:4px 10px;background:var(--interactive-accent);color:var(--text-on-accent)}
.gate-fest-banner button.x{background:transparent;color:var(--text-muted);font-size:1.1rem;line-height:1;padding:2px 8px}
.gate-fest-banner button.x:hover{color:var(--text-normal)}
@keyframes gate-fest-in{from{opacity:0;transform:translate(-50%,-8px)}to{opacity:1;transform:translate(-50%,0)}}
@media (max-width:600px){.gate-fest-banner{top:60px;border-radius:14px;align-items:flex-start}}
@media (prefers-reduced-motion:reduce){.gate-fest-banner{animation:none}}`;

    function loadFx() {
        if (g.GateShared.fx) return Promise.resolve();
        if (fxLoading) return fxLoading;
        fxLoading = new Promise(res => {
            const s = document.createElement('script');
            s.src = new URL('festival-fx.js', base).href + (version ? '?v=' + encodeURIComponent(version) : '');
            s.onload = () => res(); s.onerror = () => res();       // effects are optional: the theme still works without them
            document.head.appendChild(s);
        });
        return fxLoading;
    }
    const shownFestival = () => {
        const f = F(); if (!f) return null;
        return f.byId(document.documentElement.getAttribute('data-theme'));
    };

    /* ----- tab title + icon carry the festival emoji while its theme is on ----- */
    function brand(f) {
        const icons = [...document.querySelectorAll('link[rel~="icon"]')];
        if (f) {
            if (origTitle == null) { origTitle = document.title; origIcons = icons.map(l => [l, l.getAttribute('href')]); }
            const t = origTitle.startsWith(f.emoji) ? origTitle : f.emoji + ' ' + origTitle;
            if (document.title !== t) document.title = t;
            const svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>" + f.emoji + '</text></svg>';
            const href = 'data:image/svg+xml,' + encodeURIComponent(svg);
            icons.forEach(l => { l.setAttribute('href', href); l.setAttribute('type', 'image/svg+xml'); l.removeAttribute('sizes'); });
            // pages that rename the tab themselves (the notes reader does, per note) keep the emoji
            const tEl = document.querySelector('title');
            if (!titleObs && tEl && g.MutationObserver) {
                titleObs = new MutationObserver(() => { const cur = shownFestival(); if (cur && !document.title.startsWith(cur.emoji)) { origTitle = document.title; document.title = cur.emoji + ' ' + origTitle; } });
                titleObs.observe(tEl, { childList: true, characterData: true, subtree: true });
            }
        } else if (origTitle != null) {
            if (titleObs) { titleObs.disconnect(); titleObs = null; }
            document.title = origTitle;
            (origIcons || []).forEach(([l, h]) => { if (h == null) l.removeAttribute('href'); else l.setAttribute('href', h); });
            origTitle = null; origIcons = null;
        }
    }

    /* ----- greeting banner ----- */
    function removeBanner() { if (banner) { banner.remove(); banner = null; } }
    function showBanner(f, themeOn) {
        if (banner && banner.dataset.id === f.id && banner.dataset.on === String(themeOn)) return;
        removeBanner();
        const el = GS.el;
        const kids = [el('span', { cls: 'em', text: f.emoji, attrs: { 'aria-hidden': 'true' } }), el('span', { cls: 'msg', text: f.greeting })];
        if (f.link && f.link.url) kids.push(el('a', { href: f.link.url, text: f.link.text || 'Learn more', attrs: { target: '_blank', rel: 'noopener' } }));
        if (!themeOn) kids.push(el('button', { text: 'Try the theme', attrs: { type: 'button' }, on: { click: () => { F().dismiss(f.id); GS.theme.apply(f.id); } } }));
        kids.push(el('button', { cls: 'x', text: '\u00d7', attrs: { type: 'button', 'aria-label': 'Dismiss' }, on: { click: () => { if (F().previewId !== f.id) F().dismiss(f.id); removeBanner(); } } }));
        banner = el('div', { cls: 'gate-fest-banner', attrs: { role: 'status' }, dataset: { id: f.id, on: String(themeOn) } }, ...kids);
        document.body.appendChild(banner);
    }

    /* ----- keep everything in step with what is on screen ----- */
    function sync() {
        const f = F(); if (!f || !inited) return;
        const shown = shownFestival(), s = f.settings();
        const act = f.previewId ? f.byId(f.previewId) : (f.disabled ? null : f.active());
        // greeting
        if (act && (f.previewId === act.id || (!f.isDismissed(act.id) && s.mode !== 'off'))) showBanner(act, !!shown && shown.id === act.id); else removeBanner();
        // title / tab icon
        brand(shown);
        // motion
        if (shown && s.fx !== 'off') {
            loadFx().then(() => {
                const fx = GS.fx; if (!fx || !inited || shownFestival() !== shown) return;
                fx.setLevel(s.fx);
                fx.pause('busy', busy && s.calmExam);
                if (!fx.active) fx.start(shown.fx, { colors: shown.fxColors });
            });
        } else if (GS.fx) { GS.fx.stop(); if (s.fx === 'off') GS.fx.setLevel('off'); }
    }

    const api = {
        init() {
            if (inited) return; inited = true;
            if (!F()) return;
            styleEl = document.createElement('style'); styleEl.textContent = CSS; document.head.appendChild(styleEl);
            const h = () => sync();
            document.addEventListener('gate-theme', h); document.addEventListener('gate-festival', h);
            offs.push(() => document.removeEventListener('gate-theme', h), () => document.removeEventListener('gate-festival', h));
            sync();
        },
        destroy() {
            inited = false; offs.splice(0).forEach(f => f());
            removeBanner(); brand(null);
            if (GS.fx) { GS.fx.stop(); GS.fx.pause('busy', false); }
            if (styleEl) { styleEl.remove(); styleEl = null; }
        },
        /** a test is running: hold the motion still (when the user keeps "calm during tests" on) */
        setBusy(b) { busy = !!b; if (GS.fx) GS.fx.pause('busy', busy && F() && F().settings().calmExam); },
        /** short celebration, e.g. after submitting a test */
        celebrate() {
            const f = F(), shown = shownFestival();
            if (!f || !shown || f.settings().fx === 'off') return;
            loadFx().then(() => { if (GS.fx) { GS.fx.setLevel(f.settings().fx); GS.fx.burst(shown.burst || 'confetti', { colors: shown.fxColors }); } });
        },
        sync,
        renderSettings(c) {
            const f = F();
            GS.clear(c);
            if (!f) { c.append(GS.el('p', { cls: 'gn-sub', text: 'Festival themes are not installed on this page (festivals.js is missing).' })); return; }
            const s = f.settings(), row = () => new GS.ui.Setting(c), again = () => api.renderSettings(c);
            row().name('Festival themes').desc('Automatic shows a festival theme by itself while your theme is System (a theme you picked yourself is never replaced). Offer only shows a small banner. Always applies it over any theme.')
                .select([['auto', 'Automatic'], ['offer', 'Offer only'], ['always', 'Always apply'], ['off', 'Off']], s.mode, v => { f.set('mode', v); again(); });
            row().name('Effects').desc('Falling lamps, colour clouds, stars or fireworks. Calm uses far fewer. Your device\u2019s reduced-motion setting always turns them off.')
                .select([['full', 'Full'], ['calm', 'Calm'], ['off', 'Off']], s.fx, v => f.set('fx', v));
            row().name('Hold still during tests').desc('Pauses the motion while a test is running, so nothing moves near the question. The colours stay.')
                .toggle(s.calmExam, v => f.set('calmExam', v));
            const head = GS.el('div', { cls: 'gn-set-desc', text: 'All festival themes' }); head.style.margin = '18px 0 4px'; head.style.fontWeight = '600'; c.append(head);
            f.list.forEach(t => {
                const previewing = f.previewId === t.id;
                row().name(t.emoji + ' ' + t.name).desc(f.describe(t))
                    .button(previewing ? 'Stop preview' : 'Preview', () => { f.preview(previewing ? null : t.id); again(); }, previewing ? { warn: true } : { cta: !previewing });
            });
            c.append(GS.el('p', { cls: 'gn-sub', text: 'A preview is temporary: it is not saved and ends when you reload. To add a festival or change a date, edit web-script/shared/festival-list.js.' }));
        }
    };
    GS.festivalUI = api;
})(window);
