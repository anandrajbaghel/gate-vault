/* GateShared.fx - the motion layer of the festival themes: one transparent canvas on top of the page that never takes
   clicks. Kept deliberately cheap: a particle cap, device-pixel-ratio cap, no work while the tab is hidden, and nothing
   at all when the loop has nothing to draw.

   fx.start(name, { colors })   ambient effect: 'diyas' | 'gulal' | 'stars' | 'fireworks' | 'confetti'
   fx.stop()                    fx.burst(name, { colors })   short celebration: 'fireworks' | 'confetti' | 'gulal' | 'sparkle'
   fx.setLevel('full'|'calm'|'off')   fx.pause(reason, true|false)   (e.g. while a test is running)
   Reduced-motion on the device always wins: nothing animates. */
(function (g) {
    'use strict';
    const GS = (g.GateShared = g.GateShared || {});
    const TAU = Math.PI * 2;
    const rand = (a, b) => a + Math.random() * (b - a);
    const pick = a => a[Math.floor(Math.random() * a.length)];
    const reduced = () => !!(g.matchMedia && g.matchMedia('(prefers-reduced-motion: reduce)').matches);

    let canvas = null, ctx = null, W = 0, H = 0, raf = 0, last = 0;
    let level = 'full', want = null, ambient = null;
    const paused = new Set(), bursts = [];

    /* intensity: 1 = full, ~0.35 = calm; fewer particles on narrow screens */
    const k = () => (level === 'calm' ? 0.35 : 1) * (W && W < 700 ? 0.6 : 1);
    const mode = () => (reduced() ? 'off' : level);

    function ensureCanvas() {
        if (canvas || !document.body) return !!canvas;
        canvas = document.createElement('canvas');
        canvas.setAttribute('aria-hidden', 'true');
        canvas.style.cssText = 'position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:60;';
        document.body.appendChild(canvas);
        ctx = canvas.getContext && canvas.getContext('2d');
        resize();
        g.addEventListener('resize', resize);
        document.addEventListener('visibilitychange', () => { if (document.hidden) halt(); else kick(); });
        return !!ctx;
    }
    function resize() {
        if (!canvas || !ctx) return;
        const dpr = Math.min(g.devicePixelRatio || 1, 1.5);
        W = g.innerWidth || 800; H = g.innerHeight || 600;
        canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function halt() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
    function clear() { if (ctx) ctx.clearRect(0, 0, W, H); }
    const ambientOn = () => !!ambient && mode() !== 'off' && paused.size === 0;
    function kick() {
        if (raf || document.hidden || !ctx) return;
        if (!ambientOn() && !bursts.length) { clear(); return; }
        last = performance.now();
        raf = requestAnimationFrame(frame);
    }
    function frame(t) {
        raf = 0;
        const dt = Math.min(0.05, Math.max(0.001, (t - last) / 1000)); last = t;
        clear();
        if (ambientOn()) { ambient.update(dt); ambient.draw(ctx); }
        for (let i = bursts.length - 1; i >= 0; i--) { const b = bursts[i]; b.update(dt); b.draw(ctx); if (b.done()) bursts.splice(i, 1); }
        if (ambientOn() || bursts.length) raf = requestAnimationFrame(frame); else clear();
    }

    /* ---------------- effects ---------------- */
    const glowDot = (c, x, y, r, a, col) => { c.globalAlpha = a * 0.25; c.fillStyle = col; c.beginPath(); c.arc(x, y, r * 3.2, 0, TAU); c.fill(); c.globalAlpha = a; c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); };
    function puff(c, x, y, r, col, a) {
        const gr = c.createRadialGradient(x, y, 0, x, y, r);
        gr.addColorStop(0, col); gr.addColorStop(1, 'rgba(255,255,255,0)');
        c.globalAlpha = a; c.fillStyle = gr; c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill();
    }

    // Diwali: rising embers and a faint flicker along the bottom edge
    function diyas(colors) {
        const ps = []; let t = 0;
        const make = first => ({ x: rand(0, W), y: first ? rand(0, H) : H + 10, r: rand(1.1, 3), vy: rand(14, 38), ph: rand(0, TAU), sw: rand(8, 26), col: pick(colors), tw: rand(1, 3) });
        return {
            update(dt) {
                t += dt; const target = Math.round(38 * k());
                while (ps.length < target) ps.push(make(ps.length < target * 0.8));
                if (ps.length > target) ps.length = target;
                for (const p of ps) { p.y -= p.vy * dt; p.ph += dt * 0.9; if (p.y < -10) Object.assign(p, make(false)); }
            },
            draw(c) {
                c.save(); c.globalCompositeOperation = 'lighter';
                for (const p of ps) { c.fillStyle = p.col; glowDot(c, p.x + Math.sin(p.ph) * p.sw, p.y, p.r, 0.35 + 0.4 * Math.abs(Math.sin(t * p.tw + p.ph)), p.col); }
                const n = Math.max(3, Math.round(W / 220));
                for (let i = 0; i < n; i++) {
                    const fl = 0.55 + 0.45 * Math.sin(t * 5 + i * 2.1) * Math.sin(t * 3.3 + i);
                    puff(c, (i + 0.5) * W / n, H + 6, 120, 'rgba(255,170,60,0.9)', 0.07 * fl * (level === 'calm' ? 0.7 : 1));
                }
                c.restore();
            }
        };
    }
    // Holi: slow drifting powder clouds
    function gulal(colors) {
        const ps = []; let t = 0;
        const make = first => ({ x: rand(0, W), y: first ? rand(0, H) : H + 120, r: rand(70, 150), vy: rand(8, 20), vx: rand(-9, 9), col: pick(colors), age: first ? rand(0, 12) : 0, life: rand(11, 20) });
        return {
            update(dt) {
                t += dt; const target = Math.round(11 * k());
                while (ps.length < target) ps.push(make(true));
                if (ps.length > target) ps.length = target;
                for (const p of ps) { p.age += dt; p.y -= p.vy * dt; p.x += p.vx * dt; if (p.age > p.life || p.y < -p.r) Object.assign(p, make(false)); }
            },
            draw(c) { c.save(); for (const p of ps) puff(c, p.x, p.y, p.r, p.col, 0.16 * Math.sin(Math.PI * Math.min(1, p.age / p.life))); c.restore(); }
        };
    }
    // Maha Shivratri: still, twinkling stars, a thin moon, a rare shooting star
    function stars(colors) {
        let ps = [], t = 0, shoot = null, nextShoot = rand(8, 16);
        const seed = () => { ps = []; const n = Math.round(70 * k()); for (let i = 0; i < n; i++) ps.push({ x: rand(0, W), y: rand(0, H), r: rand(0.4, 1.6), ph: rand(0, TAU), sp: rand(0.6, 2), col: pick(colors) }); };
        seed();
        return {
            update(dt) {
                t += dt; if (ps.length !== Math.round(70 * k())) seed();
                nextShoot -= dt;
                if (!shoot && nextShoot <= 0 && level === 'full') { shoot = { x: rand(W * 0.3, W), y: rand(0, H * 0.35), life: 0 }; nextShoot = rand(14, 26); }
                if (shoot) { shoot.life += dt; shoot.x -= 380 * dt; shoot.y += 170 * dt; if (shoot.life > 0.9) shoot = null; }
            },
            draw(c) {
                c.save();
                const cx = W - 64, cy = 64, R = 20;
                c.globalAlpha = 0.45; c.fillStyle = '#e9edff'; c.beginPath(); c.arc(cx, cy, R, 0, TAU); c.fill();
                c.globalCompositeOperation = 'destination-out'; c.globalAlpha = 1; c.beginPath(); c.arc(cx + R * 0.5, cy - R * 0.12, R * 0.9, 0, TAU); c.fill();
                c.globalCompositeOperation = 'source-over';
                for (const p of ps) { c.globalAlpha = 0.25 + 0.6 * Math.abs(Math.sin(t * p.sp + p.ph)); c.fillStyle = p.col; c.beginPath(); c.arc(p.x, p.y, p.r, 0, TAU); c.fill(); }
                if (shoot) { c.globalAlpha = Math.max(0, 0.8 - shoot.life); c.strokeStyle = '#e9edff'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(shoot.x, shoot.y); c.lineTo(shoot.x + 70, shoot.y - 31); c.stroke(); }
                c.restore();
            }
        };
    }
    // fireworks: rockets that explode into sparks (used ambiently and as a celebration)
    function fireworks(colors, o) {
        o = o || {};
        const rockets = [], sparks = []; let wait = rand(1, 2.5);
        const launch = () => rockets.push({ x: rand(W * 0.12, W * 0.88), y: H + 4, ty: rand(H * 0.15, H * 0.5), vy: rand(380, 520), col: pick(colors) });
        const explode = r => {
            const n = Math.round((o.sparks || 40) * Math.max(0.55, k())), sp = rand(70, 175);
            for (let i = 0; i < n; i++) { const a = (i / n) * TAU + rand(-0.08, 0.08), v = sp * rand(0.55, 1); sparks.push({ x: r.x, y: r.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 0, max: rand(0.9, 1.5), col: r.col }); }
        };
        const api = {
            queue: o.launches || 0, gap: 0,
            update(dt) {
                if (o.ambient) { wait -= dt; if (wait <= 0) { launch(); wait = (level === 'calm' ? rand(7, 11) : rand(2.5, 5)); } }
                if (api.queue > 0) { api.gap -= dt; if (api.gap <= 0) { launch(); api.queue--; api.gap = rand(0.2, 0.45); } }
                for (let i = rockets.length - 1; i >= 0; i--) { const r = rockets[i]; r.y -= r.vy * dt; r.vy *= 0.992; if (r.y <= r.ty || r.vy < 80) { explode(r); rockets.splice(i, 1); } }
                for (let i = sparks.length - 1; i >= 0; i--) { const s = sparks[i]; s.life += dt; s.vy += 95 * dt; s.vx *= 0.985; s.x += s.vx * dt; s.y += s.vy * dt; if (s.life > s.max) sparks.splice(i, 1); }
            },
            draw(c) {
                c.save(); c.globalCompositeOperation = 'lighter';
                for (const r of rockets) { c.globalAlpha = 0.9; c.fillStyle = r.col; c.beginPath(); c.arc(r.x, r.y, 1.8, 0, TAU); c.fill(); }
                for (const s of sparks) { c.globalAlpha = Math.max(0, 1 - s.life / s.max) * 0.9; c.fillStyle = s.col; c.beginPath(); c.arc(s.x, s.y, 1.7, 0, TAU); c.fill(); }
                c.restore();
            },
            done() { return !o.ambient && api.queue <= 0 && !rockets.length && !sparks.length; }
        };
        return api;
    }
    // confetti: falling paper (ambient is light; the burst is a quick shower)
    function confetti(colors, o) {
        o = o || {}; const ps = [];
        const make = first => ({ x: rand(0, W), y: first ? rand(-H * 0.2, H) : rand(-30, -8), vy: rand(o.fast ? 150 : 40, o.fast ? 300 : 90), sw: rand(10, 30), ph: rand(0, TAU), w: rand(5, 9), h: rand(3, 6), rot: rand(0, TAU), vr: rand(-4, 4), col: pick(colors) });
        const api = {
            left: o.count || 0,
            update(dt) {
                if (o.ambient) { const target = Math.round(24 * k()); while (ps.length < target) ps.push(make(ps.length < target * 0.7)); if (ps.length > target) ps.length = target; }
                else while (api.left > 0 && ps.length < 140) { ps.push(make(false)); api.left--; }
                for (let i = ps.length - 1; i >= 0; i--) { const p = ps[i]; p.y += p.vy * dt; p.ph += dt * 2; p.rot += p.vr * dt; if (p.y > H + 20) { if (o.ambient) Object.assign(p, make(false)); else ps.splice(i, 1); } }
            },
            draw(c) {
                c.save();
                for (const p of ps) { c.globalAlpha = 0.85; c.fillStyle = p.col; c.translate(p.x + Math.sin(p.ph) * p.sw, p.y); c.rotate(p.rot); c.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); c.setTransform(canvas.width / W, 0, 0, canvas.height / H, 0, 0); }
                c.restore();
            },
            done() { return !o.ambient && api.left <= 0 && !ps.length; }
        };
        return api;
    }
    // one-shot powder splash for Holi
    function powder(colors) {
        const ps = []; for (let i = 0; i < 9; i++) ps.push({ x: rand(W * 0.1, W * 0.9), y: rand(H * 0.15, H * 0.8), r: 0, rmax: rand(110, 210), age: -i * 0.12, col: pick(colors) });
        return {
            update(dt) { for (const p of ps) { p.age += dt; p.r = p.rmax * Math.min(1, Math.max(0, p.age) / 0.6); } },
            draw(c) { c.save(); for (const p of ps) if (p.age > 0 && p.r > 1) puff(c, p.x, p.y, p.r, p.col, 0.4 * Math.max(0, 1 - p.age / 1.8)); c.restore(); },
            done() { return ps.every(p => p.age > 1.8); }
        };
    }
    // one-shot twinkles for the calm theme
    function sparkle(colors) {
        const ps = []; for (let i = 0; i < 34; i++) ps.push({ x: rand(0, W), y: rand(0, H), r: rand(1, 2.6), age: -rand(0, 0.8), col: pick(colors) });
        return {
            update(dt) { for (const p of ps) p.age += dt; },
            draw(c) { c.save(); c.globalCompositeOperation = 'lighter'; for (const p of ps) if (p.age > 0 && p.age < 1.4) glowDot(c, p.x, p.y, p.r, Math.sin(Math.PI * p.age / 1.4), p.col); c.restore(); },
            done() { return ps.every(p => p.age > 1.4); }
        };
    }

    const AMBIENT = {
        diyas, gulal, stars, confetti: c => confetti(c, { ambient: true }), fireworks: c => fireworks(c, { ambient: true, sparks: 36 })
    };
    const BURST = {
        fireworks: c => fireworks(c, { launches: level === 'calm' ? 2 : 5, sparks: 46 }),
        confetti: c => confetti(c, { fast: true, count: level === 'calm' ? 40 : 110 }),
        gulal: c => powder(c), sparkle: c => sparkle(c)
    };

    function build() {
        ambient = null;
        if (!want || !AMBIENT[want.name] || !ensureCanvas()) return;
        ambient = AMBIENT[want.name](want.colors && want.colors.length ? want.colors : ['#ffffff']);
    }

    GS.fx = {
        start(name, opts) {
            want = { name, colors: (opts && opts.colors) || [] };
            build(); kick();
        },
        stop() { want = null; ambient = null; if (!bursts.length) { halt(); clear(); } },
        burst(name, opts) {
            if (mode() === 'off' || paused.size || !BURST[name] || !ensureCanvas()) return;
            bursts.push(BURST[name]((opts && opts.colors && opts.colors.length) ? opts.colors : ['#ffffff']));
            kick();
        },
        setLevel(l) {
            const was = level; level = l === 'calm' || l === 'off' ? l : 'full';
            if (level === 'off') { bursts.length = 0; halt(); clear(); }
            else if (was === 'off' && want) { build(); kick(); }
            else kick();
        },
        pause(reason, on) {
            if (on) { paused.add(reason); halt(); clear(); } else { paused.delete(reason); if (!paused.size) kick(); }
        },
        get level() { return level; },
        get running() { return !!raf; },
        get active() { return !!want; }
    };
})(window);
