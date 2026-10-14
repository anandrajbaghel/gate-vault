/* GateShared.calculator - the GATE scientific calculator as a floating, draggable widget (same keys, memory and behaviour as the
   Obsidian original), shared by the simulator and the notes reader.
     const calc = GateShared.calculator.create({ angle: 'deg'|'rad', autoClose: false, onToggle(visible) });
     calc.show() / hide() / toggle() / isVisible() / destroy() / setAngleMode(m) / setAutoClose(b)
     GateShared.calculator.evaluate('2pi*sin(30)', true)  ->  number   (throws Error('Syntax Error'))
   Expressions are read by a small parser of our own, never by eval/new Function, so nothing typed can run as code.
   Colours come from the page's theme tokens, so it follows light/dark/festival themes. Position is remembered on this device. */
(function (g) {
    'use strict';
    const GS = (g.GateShared = g.GateShared || {});

    /* ------------------------------------------------------------------ expression evaluator */
    const CONST = { pi: Math.PI, e: Math.E };
    function fact(n) {
        if (!(n >= 0) || Math.abs(n - Math.round(n)) > 1e-9) return NaN;
        n = Math.round(n);
        if (n > 170) return Infinity;
        let r = 1; for (let i = 2; i <= n; i++) r *= i;
        return r;
    }
    const fns = deg => {
        const toRad = x => x * (deg ? Math.PI / 180 : 1), fromRad = x => x * (deg ? 180 / Math.PI : 1);
        return {
            sin: [1, x => Math.sin(toRad(x))], cos: [1, x => Math.cos(toRad(x))], tan: [1, x => Math.tan(toRad(x))],
            asin: [1, x => fromRad(Math.asin(x))], acos: [1, x => fromRad(Math.acos(x))], atan: [1, x => fromRad(Math.atan(x))],
            sinh: [1, Math.sinh], cosh: [1, Math.cosh], tanh: [1, Math.tanh], asinh: [1, Math.asinh], acosh: [1, Math.acosh], atanh: [1, Math.atanh],
            ln: [1, Math.log], log: [1, Math.log10], log10: [1, Math.log10], log2: [1, Math.log2], exp: [1, Math.exp],
            sqrt: [1, Math.sqrt], cbrt: [1, Math.cbrt], abs: [1, Math.abs], fact: [1, fact],
            logBase: [2, (v, b) => Math.log(v) / Math.log(b)], root: [2, (x, n) => Math.pow(x, 1 / n)], pow: [2, Math.pow]
        };
    };
    function tokenize(src) {
        const s = String(src).replace(/\u03c0/g, 'pi').replace(/\s+/g, '');
        if (s.length > 500) throw new Error('Syntax Error');
        const out = []; let i = 0;
        while (i < s.length) {
            const rest = s.slice(i);
            let m = /^(\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+(?![a-zA-Z(]))?/.exec(rest);          // 12  1.5  .5  1e-3  (2e is 2 x e)
            if (m) { out.push({ t: 'num', v: parseFloat(m[0]) }); i += m[0].length; continue; }
            if (/^mod(?![a-zA-Z])/.test(rest)) { out.push({ t: 'op', v: '%' }); i += 3; continue; }              // 7mod3
            m = /^[a-zA-Z_][a-zA-Z0-9_]*/.exec(rest);
            if (m) { out.push({ t: 'id', v: m[0] }); i += m[0].length; continue; }
            if (rest.startsWith('**')) { out.push({ t: 'op', v: '^' }); i += 2; continue; }
            if ('+-*/^%!(),'.indexOf(s[i]) >= 0) { out.push({ t: 'op', v: s[i] }); i++; continue; }
            throw new Error('Syntax Error');
        }
        return out;
    }
    function evaluate(src, isDegree) {
        const toks = tokenize(src), F = fns(!!isDegree);
        let p = 0, depth = 0;
        const bad = () => new Error('Syntax Error');
        const peek = () => toks[p];
        const isOp = v => peek() && peek().t === 'op' && peek().v === v;
        const startsPrimary = () => { const t = peek(); return !!t && (t.t === 'num' || t.t === 'id' || (t.t === 'op' && t.v === '(')); };
        function enter() { if (++depth > 120) throw bad(); }
        function expr() {
            let v = term();
            while (isOp('+') || isOp('-')) { const o = toks[p++].v; const r = term(); v = o === '+' ? v + r : v - r; }
            return v;
        }
        function term() {
            let v = unary();
            for (;;) {
                if (isOp('*') || isOp('/') || isOp('%')) { const o = toks[p++].v; const r = unary(); v = o === '*' ? v * r : o === '/' ? v / r : v % r; }
                else if (startsPrimary()) v = v * power();                    // implicit multiplication: 2pi, 2(3), (1+2)(3+4), sin(30)cos(60)
                else return v;
            }
        }
        function unary() {
            if (isOp('-')) { p++; enter(); const v = -unary(); depth--; return v; }
            if (isOp('+')) { p++; enter(); const v = unary(); depth--; return v; }
            return power();
        }
        function power() {
            const base = postfix();
            if (isOp('^')) { p++; enter(); const e = unary(); depth--; return Math.pow(base, e); }       // right-associative: 2^3^2 = 2^9
            return base;
        }
        function postfix() {
            let v = primary();
            while (isOp('!')) { p++; v = fact(v); }
            return v;
        }
        function primary() {
            const t = toks[p++];
            if (!t) throw bad();
            if (t.t === 'num') return t.v;
            if (t.t === 'op' && t.v === '(') { enter(); const v = expr(); if (!isOp(')')) throw bad(); p++; depth--; return v; }
            if (t.t === 'id') {
                if (F[t.v]) {
                    if (!isOp('(')) throw bad();
                    p++; enter();
                    const args = [expr()];
                    while (isOp(',')) { p++; args.push(expr()); }
                    if (!isOp(')')) throw bad();
                    p++; depth--;
                    if (args.length !== F[t.v][0]) throw bad();
                    return F[t.v][1](...args);
                }
                if (Object.prototype.hasOwnProperty.call(CONST, t.v)) return CONST[t.v];
            }
            throw bad();
        }
        const v = expr();
        if (p < toks.length) throw bad();
        return v;
    }
    function format(res) {
        if (Number.isNaN(res)) return 'NaN';
        if (!Number.isFinite(res)) return 'Infinity';
        if (Math.abs(res - Math.round(res)) < 1e-9) return Math.round(res).toString();
        return parseFloat(res.toPrecision(10)).toString();
    }

    /* ------------------------------------------------------------------ styles (injected once) */
    const CSS = `
.gc-widget{position:fixed;right:18px;bottom:18px;z-index:70;width:min(560px,calc(100vw - 16px));box-sizing:border-box;background:var(--background-secondary);color:var(--text-normal);
 border:1px solid var(--background-modifier-border);border-radius:12px;box-shadow:var(--shadow-l);font-size:14px;user-select:none;-webkit-user-select:none;outline:none;
 opacity:0;transform:translateY(8px) scale(.98);transition:opacity .15s ease,transform .15s ease;}
.gc-widget.gc-open{opacity:1;transform:none}
.gc-widget[hidden]{display:none}
.gc-top{display:flex;align-items:center;justify-content:space-between;padding:6px 8px 6px 12px;border-bottom:1px solid var(--background-modifier-border);cursor:grab;touch-action:none;border-radius:12px 12px 0 0}
.gc-top:active{cursor:grabbing}
.gc-title{font-weight:600;font-size:.82rem;letter-spacing:.02em;color:var(--text-muted)}
.gc-x{border:0;background:transparent;color:var(--text-muted);cursor:pointer;border-radius:6px;width:28px;height:28px;font-size:18px;line-height:1}
.gc-x:hover{background:var(--background-modifier-hover);color:var(--text-normal)}
.gc-body{padding:10px 12px 12px;display:flex;flex-direction:column;gap:8px}
.gc-screen{background:var(--background-primary);border:1px solid var(--background-modifier-border);border-radius:8px;padding:6px 10px;text-align:right;min-height:58px;overflow:hidden}
.gc-expr{font-family:var(--font-mono,ui-monospace,Menlo,Consolas,monospace);font-size:.85rem;color:var(--text-muted);min-height:1.2em;white-space:nowrap;overflow-x:auto;scrollbar-width:none}
.gc-expr::-webkit-scrollbar{display:none}
.gc-res{font-family:var(--font-mono,ui-monospace,Menlo,Consolas,monospace);font-size:1.6rem;font-weight:600;min-height:1.3em;overflow-x:auto;scrollbar-width:none;white-space:nowrap}
.gc-res.err{color:var(--text-error)}
.gc-row{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.gc-modes{display:flex;gap:12px;font-size:.85rem}
.gc-modes label{display:flex;align-items:center;gap:4px;cursor:pointer}
.gc-modes input{accent-color:var(--interactive-accent)}
.gc-mem{display:flex;gap:4px}
.gc-keys{display:flex;gap:12px;align-items:flex-start}
.gc-fn{display:grid;grid-template-columns:repeat(6,1fr);gap:4px;flex:6 1 0;min-width:0}
.gc-pad{display:grid;grid-template-columns:repeat(5,1fr);gap:4px;flex:5 1 0;min-width:0}
.gc-b{font:inherit;font-size:.85rem;min-height:34px;padding:2px 4px;border-radius:7px;cursor:pointer;color:var(--text-normal);background:var(--background-secondary-alt,var(--background-secondary));border:1px solid var(--background-modifier-border);white-space:nowrap}
.gc-b:hover{background:var(--background-modifier-hover)}
.gc-b:active{transform:translateY(1px)}
.gc-b:focus-visible{outline:2px solid var(--interactive-accent);outline-offset:1px}
.gc-b.mem{min-height:26px;font-size:.75rem;padding:0 8px}
.gc-b.red{color:var(--text-error)}
.gc-b.eq{background:var(--interactive-accent);color:var(--text-on-accent);border-color:transparent;grid-row:span 2;min-height:0;font-size:1.1rem;font-weight:700}
.gc-b.eq:hover{background:var(--interactive-accent-hover,var(--interactive-accent))}
.gc-b.wide{grid-column:span 2}
.gc-b.num{font-weight:600}
@media (max-width:640px){
 .gc-widget{left:8px!important;right:8px!important;top:auto!important;bottom:8px!important;width:auto}
 .gc-top{cursor:default}
 .gc-keys{flex-direction:column;gap:8px;align-items:stretch}
 .gc-fn,.gc-pad{flex:none;width:100%}
 .gc-b{min-height:40px}
}
@media (prefers-reduced-motion:reduce){.gc-widget{transition:none}}`;
    function ensureCss() {
        if (document.getElementById('gate-calc-css')) return;
        const st = document.createElement('style'); st.id = 'gate-calc-css'; st.textContent = CSS; document.head.appendChild(st);
    }

    /* ------------------------------------------------------------------ the widget */
    const POS_KEY = 'gate_calc_pos';
    const FN_ROWS = [   // left block: 6 columns x 5 rows
        [['sin', 'sin('], ['cos', 'cos('], ['tan', 'tan('], ['sinh', 'sinh('], ['cosh', 'cosh('], ['tanh', 'tanh(']],
        [['sin\u207b\u00b9', 'asin('], ['cos\u207b\u00b9', 'acos('], ['tan\u207b\u00b9', 'atan('], ['sinh\u207b\u00b9', 'asinh('], ['cosh\u207b\u00b9', 'acosh('], ['tanh\u207b\u00b9', 'atanh(']],
        [['x\u00b2', '^2'], ['x\u00b3', '^3'], ['x\u02b8', '^'], ['e\u02e3', 'exp('], ['10\u02e3', 'pow(10,'], ['e', 'e']],
        [['\u221a', 'sqrt('], ['\u221b', 'cbrt('], ['\u02b8\u221ax', 'root('], ['ln', 'ln('], ['log', 'log('], ['log\u2082', 'log2(']],
        [['\u03c0', '\u03c0'], ['n!', 'fact('], ['|x|', 'abs('], ['log\u1d67x', 'logBase('], [',', ','], ['mod', 'mod']]
    ];
    const PAD = [       // right block: 5 columns; "=" spans two rows, "0" two columns
        { t: '(', f: '(' }, { t: ')', f: ')' }, { t: '\u2190', a: 'back', c: 'red' }, { t: 'C', a: 'clear', c: 'red' }, { t: '+/-', a: 'neg' },
        { t: '7', f: '7', c: 'num' }, { t: '8', f: '8', c: 'num' }, { t: '9', f: '9', c: 'num' }, { t: '/', f: '/' }, { t: '%', f: '/100' },
        { t: '4', f: '4', c: 'num' }, { t: '5', f: '5', c: 'num' }, { t: '6', f: '6', c: 'num' }, { t: '*', f: '*' }, { t: '1/x', a: 'recip' },
        { t: '1', f: '1', c: 'num' }, { t: '2', f: '2', c: 'num' }, { t: '3', f: '3', c: 'num' }, { t: '-', f: '-' }, { t: '=', a: 'eval', c: 'eq' },
        { t: '0', f: '0', c: 'num wide' }, { t: '.', f: '.', c: 'num' }, { t: '+', f: '+' }
    ];

    function create(opts) {
        opts = opts || {};
        ensureCss();
        const el = GS.el;
        const st = { expr: '', mem: 0, result: false, deg: opts.angle !== 'rad', autoClose: !!opts.autoClose, visible: false, timer: 0 };
        let dragging = false, grab = { x: 0, y: 0 };

        const exprEl = el('div', { cls: 'gc-expr', attrs: { 'aria-live': 'off' } });
        const resEl = el('div', { cls: 'gc-res', text: '0', attrs: { 'aria-live': 'polite' } });
        const uid = Math.random().toString(36).slice(2, 7);
        const mode = (value, label) => { const i = el('input', { attrs: { type: 'radio', name: 'gc-mode-' + uid, value } }); i.checked = (value === 'deg') === st.deg; i.addEventListener('change', () => { if (i.checked) st.deg = value === 'deg'; root.focus(); }); return [i, el('label', {}, i, el('span', { text: label }))]; };
        const [degI, degL] = mode('deg', 'Deg'), [radI, radL] = mode('rad', 'Rad');

        const press = (b) => {
            if (b.a === 'clear') clear(); else if (b.a === 'back') backspace(); else if (b.a === 'eval') calculate(); else if (b.a === 'neg') negate(); else if (b.a === 'recip') input('^(-1)'); else input(b.f);
        };
        const btn = (b, extra) => el('button', { cls: 'gc-b ' + (b.c || '') + (extra || ''), text: b.t, attrs: { type: 'button', 'aria-label': b.t === '\u2190' ? 'Backspace' : b.t === 'C' ? 'Clear' : b.t }, on: { click: e => { e.preventDefault(); root.focus(); press(b); } } });
        const fnGrid = el('div', { cls: 'gc-fn' }); FN_ROWS.forEach(r => r.forEach(([t, f]) => fnGrid.append(btn({ t, f }))));
        const padGrid = el('div', { cls: 'gc-pad' }); PAD.forEach(b => padGrid.append(btn(b)));
        const memBtns = el('div', { cls: 'gc-mem' }); ['MC', 'MR', 'MS', 'M+', 'M-'].forEach(m => memBtns.append(el('button', { cls: 'gc-b mem', text: m, attrs: { type: 'button' }, on: { click: () => { memory(m); root.focus(); } } })));

        const closeBtn = el('button', { cls: 'gc-x', text: '\u00d7', attrs: { type: 'button', 'aria-label': 'Close calculator', title: 'Close (Esc)' }, on: { click: e => { e.stopPropagation(); hide(); } } });
        const top = el('div', { cls: 'gc-top' }, el('span', { cls: 'gc-title', text: 'Scientific Calculator' }), closeBtn);
        const body = el('div', { cls: 'gc-body' },
            el('div', { cls: 'gc-screen' }, exprEl, resEl),
            el('div', { cls: 'gc-row' }, el('div', { cls: 'gc-modes' }, degL, radL), memBtns),
            el('div', { cls: 'gc-keys' }, fnGrid, padGrid));
        const root = el('div', { cls: 'gc-widget', attrs: { role: 'dialog', 'aria-label': 'Scientific calculator', tabindex: '-1', hidden: '' } }, top, body);
        document.body.appendChild(root);

        /* ---- calculator logic ---- */
        function screen() { exprEl.textContent = st.expr; exprEl.scrollLeft = exprEl.scrollWidth; if (!st.result) { resEl.textContent = ''; resEl.classList.remove('err'); } }
        function input(val) {
            const isOp = ['+', '-', '*', '/', '^', '%', 'mod', ')', ','].some(o => val.includes(o));
            if (st.result) { if (isOp) st.result = false; else { st.expr = ''; st.result = false; } }
            st.expr += val; screen();
        }
        function clear() { st.expr = ''; st.result = false; resEl.textContent = '0'; resEl.classList.remove('err'); screen(); }
        function backspace() { if (st.result) clear(); else { st.expr = st.expr.slice(0, -1); screen(); } }
        function negate() { if (st.result) { st.expr = '-(' + st.expr + ')'; st.result = false; } else st.expr += '-'; screen(); }
        function memory(action) {
            let v = 0;
            if (st.result) v = parseFloat(resEl.textContent);
            else if (st.expr.length) { try { v = evaluate(st.expr, st.deg); } catch (e) { v = 0; } }
            if (isNaN(v)) v = 0;
            if (action === 'MC') st.mem = 0; else if (action === 'MS') st.mem = v;
            else if (action === 'MR') { if (st.result) { st.expr = ''; st.result = false; } st.expr += String(st.mem); screen(); }
            else if (action === 'M+') st.mem += v; else if (action === 'M-') st.mem -= v;
        }
        function calculate() {
            if (!st.expr) return;
            try {
                if (st.autoClose) {
                    const open = (st.expr.match(/\(/g) || []).length, close = (st.expr.match(/\)/g) || []).length;
                    if (open > close) { st.expr += ')'.repeat(open - close); exprEl.textContent = st.expr; }
                }
                const s = format(evaluate(st.expr, st.deg));
                resEl.textContent = s; resEl.classList.remove('err'); st.expr = s; st.result = true;
            } catch (e) { resEl.textContent = 'Error'; resEl.classList.add('err'); }
        }
        function onKey(e) {
            if (!st.visible || !root.contains(document.activeElement) || e.ctrlKey || e.metaKey || e.altKey) return;
            const k = e.key;
            if (k === 'Escape') { e.preventDefault(); hide(); return; }
            if (k === 'Enter' || k === '=') { e.preventDefault(); calculate(); return; }
            if (k === 'Backspace') { e.preventDefault(); backspace(); return; }
            if (k === 'Delete') { e.preventDefault(); clear(); return; }
            if (document.activeElement && document.activeElement.tagName === 'BUTTON' && (k === ' ')) return;     // space presses the focused button
            if (/^[0-9]$/.test(k) || ['+', '-', '*', '/', '(', ')', '.', '%', '^', '!', ','].includes(k) || /^[a-zA-Z]$/.test(k)) { e.preventDefault(); input(k); }
        }
        document.addEventListener('keydown', onKey);

        /* ---- show / hide / drag ---- */
        const narrow = () => !!(g.matchMedia && g.matchMedia('(max-width:640px)').matches);
        function place() {
            if (narrow()) { root.style.left = root.style.top = ''; return; }
            let pos = null; try { pos = JSON.parse(localStorage.getItem(POS_KEY) || 'null'); } catch (e) {}
            if (pos && typeof pos.x === 'number') {
                const r = root.getBoundingClientRect();
                const x = Math.max(0, Math.min(pos.x, window.innerWidth - r.width)), y = Math.max(40, Math.min(pos.y, window.innerHeight - r.height));
                root.style.left = x + 'px'; root.style.top = y + 'px'; root.style.right = 'auto'; root.style.bottom = 'auto';
            }
        }
        function show() {
            clearTimeout(st.timer);
            root.hidden = false; place();
            requestAnimationFrame(() => { root.classList.add('gc-open'); root.focus(); });
            st.visible = true; if (opts.onToggle) opts.onToggle(true);
        }
        function hide() {
            if (!st.visible) return;
            root.classList.remove('gc-open'); st.visible = false;
            st.timer = setTimeout(() => { root.hidden = true; }, 160);
            if (opts.onToggle) opts.onToggle(false);
        }
        top.addEventListener('pointerdown', e => {
            if (narrow() || e.target.closest('.gc-x')) return;
            dragging = true; top.setPointerCapture(e.pointerId);
            const r = root.getBoundingClientRect(); grab = { x: e.clientX - r.left, y: e.clientY - r.top };
            e.preventDefault();
        });
        top.addEventListener('pointermove', e => {
            if (!dragging) return;
            const r = root.getBoundingClientRect();
            const x = Math.max(0, Math.min(e.clientX - grab.x, window.innerWidth - r.width)), y = Math.max(40, Math.min(e.clientY - grab.y, window.innerHeight - r.height));
            root.style.left = x + 'px'; root.style.top = y + 'px'; root.style.right = 'auto'; root.style.bottom = 'auto';
        });
        const endDrag = e => {
            if (!dragging) return; dragging = false;
            try { top.releasePointerCapture(e.pointerId); } catch (x) {}
            const r = root.getBoundingClientRect(); try { localStorage.setItem(POS_KEY, JSON.stringify({ x: Math.round(r.left), y: Math.round(r.top) })); } catch (x) {}
        };
        top.addEventListener('pointerup', endDrag); top.addEventListener('pointercancel', endDrag);
        const onResize = () => { if (st.visible) place(); };
        window.addEventListener('resize', onResize);

        return {
            el: root, show, hide,
            toggle() { st.visible ? hide() : show(); },
            isVisible: () => st.visible,
            setAngleMode(m) { st.deg = m !== 'rad'; degI.checked = st.deg; radI.checked = !st.deg; },
            setAutoClose(b) { st.autoClose = !!b; },
            destroy() { clearTimeout(st.timer); document.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); root.remove(); }
        };
    }

    GS.calculator = { create, evaluate, format };
})(window);
