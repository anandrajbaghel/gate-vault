/* GateNotes.router - hash routes:  notes#/Folder/Note   notes#/Folder/Note?h=Heading   notes#/Folder/Note?b=blockid
   Keeps its own back/forward position so the toolbar arrows know when they can move. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    let idx = 0, max = 0, last = null, handler = null;

    const encPath = p => String(p).split('/').map(encodeURIComponent).join('/');
    const decPath = p => p.split('/').map(s => { try { return decodeURIComponent(s); } catch (e) { return s; } }).join('/');

    function href(path, frag) {
        let h = '#/' + encPath(String(path).replace(/\.md$/i, ''));
        if (frag) h += frag[0] === '^' ? '?b=' + encodeURIComponent(frag.slice(1)) : '?h=' + encodeURIComponent(frag);
        return h;
    }
    function parse(hash) {
        hash = String(hash || '');
        if (!hash.startsWith('#/') || hash === '#/') return { path: null, frag: '' };
        const q = hash.indexOf('?');
        const pathPart = hash.slice(2, q < 0 ? undefined : q);
        const params = new URLSearchParams(q < 0 ? '' : hash.slice(q + 1));
        const frag = params.get('b') ? '^' + params.get('b') : (params.get('h') || '');
        return { path: decPath(pathPart) + '.md', frag };
    }
    function stateIdx() { return history.state && typeof history.state.gn === 'number' ? history.state.gn : null; }

    function sync(kind) {
        const h = location.hash;
        if (h === last) return;
        last = h;
        const s = stateIdx();
        let nav = 'push';
        if (s !== null) { nav = s < idx ? 'back' : s > idx ? 'forward' : 'replace'; idx = s; if (s > max) max = s; }
        else { idx += 1; max = idx; try { history.replaceState({ gn: idx }, ''); } catch (e) {} }
        if (handler) handler(parse(h), nav);
        updateButtons();
    }

    function updateButtons() {
        const b = document.getElementById('gn-back'), f = document.getElementById('gn-forward');
        if (b) b.disabled = idx <= 0;
        if (f) f.disabled = idx >= max;
    }

    GN.router = {
        href, parse,
        start(onRoute) {
            handler = onRoute;
            if (stateIdx() === null) { try { history.replaceState({ gn: 0 }, ''); } catch (e) {} } else idx = max = stateIdx();
            window.addEventListener('popstate', () => sync('pop'));
            window.addEventListener('hashchange', () => sync('hash'));
            last = location.hash;
            if (handler) handler(parse(last), 'initial');
            updateButtons();
        },
        go(path, frag, opts) {
            const h = href(path, frag);
            if (h === location.hash && !(opts && opts.replace)) { if (handler) handler(parse(h), 'self'); return; }
            if (opts && opts.replace) { history.replaceState({ gn: idx }, '', h); last = h; if (handler) handler(parse(h), 'replace'); updateButtons(); return; }
            idx += 1; max = idx;
            history.pushState({ gn: idx }, '', h);
            last = h;
            if (handler) handler(parse(h), 'push');
            updateButtons();
        },
        home() { idx += 1; max = idx; history.pushState({ gn: idx }, '', location.pathname + location.search); last = ''; if (handler) handler({ path: null, frag: '' }, 'push'); updateButtons(); },
        back() { history.back(); },
        forward() { history.forward(); },
        updateButtons
    };
})(window);
