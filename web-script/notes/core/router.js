/* GateNotes.router - hash routes:  notes#/Folder/Note   notes#/Folder/Note?h=Heading   notes#/Folder/Note?b=blockid
   Keeps the list of visited places so the back/forward arrows can show a history menu (right-click / long-press).
   The list is kept in sessionStorage so it survives a page reload in the same tab. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const HKEY = 'gate_notes_hist';
    let idx = 0, entries = [], last = null, handler = null;

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
    const stateIdx = () => (history.state && typeof history.state.gn === 'number' ? history.state.gn : null);
    function save() { try { sessionStorage.setItem(HKEY, JSON.stringify({ e: entries, i: idx })); } catch (e) {} }
    function loadSaved() { try { const d = JSON.parse(sessionStorage.getItem(HKEY) || 'null'); return d && Array.isArray(d.e) ? d : null; } catch (e) { return null; } }

    function sync() {
        const h = location.hash;
        if (h === last) return;
        last = h;
        const s = stateIdx();
        let nav = 'push';
        if (s !== null) { nav = s < idx ? 'back' : s > idx ? 'forward' : 'replace'; idx = s; entries[idx] = h; }
        else { idx += 1; entries.length = idx; entries[idx] = h; try { history.replaceState({ gn: idx }, ''); } catch (e) {} }
        save();
        if (handler) handler(parse(h), nav);
        updateButtons();
    }

    function updateButtons() {
        const b = document.getElementById('gn-back'), f = document.getElementById('gn-forward');
        if (b) b.disabled = idx <= 0;
        if (f) f.disabled = idx >= entries.length - 1;
    }

    GN.router = {
        href, parse,
        start(onRoute) {
            handler = onRoute;
            const s = stateIdx(), saved = loadSaved();
            if (s === null) { idx = 0; entries = [location.hash]; try { history.replaceState({ gn: 0 }, ''); } catch (e) {} }
            else { idx = s; entries = saved && saved.e.length > s ? saved.e.slice() : []; entries[idx] = location.hash; }
            save();
            window.addEventListener('popstate', sync);
            window.addEventListener('hashchange', sync);
            last = location.hash;
            if (handler) handler(parse(last), 'initial');
            updateButtons();
        },
        go(path, frag, opts) {
            const h = href(path, frag);
            if (opts && opts.replace) { history.replaceState({ gn: idx }, '', h); last = h; entries[idx] = h; save(); if (handler) handler(parse(h), 'replace'); updateButtons(); return; }
            if (h === location.hash) { if (handler) handler(parse(h), 'self'); return; }
            idx += 1; entries.length = idx; entries[idx] = h;
            history.pushState({ gn: idx }, '', h);
            last = h; save();
            if (handler) handler(parse(h), 'push');
            updateButtons();
        },
        home() {
            idx += 1; entries.length = idx; entries[idx] = '';
            history.pushState({ gn: idx }, '', location.pathname + location.search);
            last = ''; save();
            if (handler) handler({ path: null, frag: '' }, 'push');
            updateButtons();
        },
        back() { history.back(); },
        forward() { history.forward(); },
        /** every visited place, oldest first: [{ h, path, frag }] */
        entries() { return entries.map(h => Object.assign({ h }, parse(h))); },
        index() { return idx; },
        /** go straight to entry i of entries() */
        jump(i) { if (i !== idx && i >= 0 && i < entries.length) history.go(i - idx); },
        updateButtons
    };
})(window);
