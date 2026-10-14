/* YouTube videos - find notes by the videos attached to them and open the videos on YouTube.
   Data: the note's front-matter list (default key "youtube"), collected into notes-props.json by the index workflow and served by the
   "props" service (Properties data feature). The note you are reading is read straight from the note itself, so its video button is
   always up to date. Nothing else depends on this feature. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;

    /* a bare 11-character id or any youtube.com / youtu.be / embed / shorts link -> the id, anything else -> null */
    function videoId(raw) {
        const v = String(raw == null ? '' : raw).trim();
        if (!v) return null;
        const m = v.match(/(?:v=|youtu\.be\/|\/embed\/|\/shorts\/)([a-zA-Z0-9_-]{11})/);
        if (m) return m[1];
        return /^[a-zA-Z0-9_-]{11}$/.test(v) ? v : null;
    }
    function idsFrom(list) {
        const seen = new Set(), out = [];
        (Array.isArray(list) ? list : [list]).forEach(x => { const id = videoId(x); if (id && !seen.has(id)) { seen.add(id); out.push(id); } });
        return out;
    }
    const openVideo = id => { if (!g.open('https://www.youtube.com/watch?v=' + id, '_blank', 'noopener')) location.href = 'https://www.youtube.com/watch?v=' + id; };

    /* every space-separated word must match, either as a substring (best) or as scattered letters; returns { score, pos[] } or null */
    function fuzzy(query, text) {
        const t = String(text).toLowerCase(), words = query.toLowerCase().split(/\s+/).filter(Boolean);
        if (!words.length) return { score: 0, pos: [] };
        let total = 0; const pos = [];
        for (const w of words) {
            const at = t.indexOf(w);
            if (at >= 0) {
                total += 100 + w.length * 2 - at * 0.1 + (at === 0 || /[\s\-_/.]/.test(t[at - 1]) ? 20 : 0);
                for (let i = 0; i < w.length; i++) pos.push(at + i);
                continue;
            }
            let from = 0, last = -2, sc = 0; const ps = [];
            for (const ch of w) {
                const f = t.indexOf(ch, from);
                if (f < 0) return null;
                ps.push(f); sc += (f === last + 1 ? 8 : 2) + (f === 0 || /[\s\-_/.]/.test(t[f - 1]) ? 5 : 0); last = f; from = f + 1;
            }
            total += sc - (ps[ps.length - 1] - ps[0]) * 0.2;
            pos.push(...ps);
        }
        return { score: total, pos };
    }
    function highlight(text, pos) {
        const frag = document.createDocumentFragment();
        if (!pos || !pos.length) { frag.append(document.createTextNode(text)); return frag; }
        const on = new Set(pos); let i = 0;
        while (i < text.length) {
            const hit = on.has(i); let j = i;
            while (j < text.length && on.has(j) === hit) j++;
            const part = text.slice(i, j);
            frag.append(hit ? el('mark', { cls: 'yt-hl', text: part }) : document.createTextNode(part));
            i = j;
        }
        return frag;
    }

    GN.plugins.define('youtube', {
        onload(p) {
            const S = k => p.settings.get(k);
            const key = () => String(S('frontmatterKey') || 'youtube').trim().toLowerCase();
            const thumb = id => 'https://img.youtube.com/vi/' + id + '/' + (S('thumbnailQuality') || 'mqdefault') + '.jpg';
            const props = () => GN.services.get('props');
            let noteIds = [], noteTitle = '';

            /* ------------------------------------------------------------ the videos of one note (grid) */
            function openGrid(ids, title) {
                if (!ids.length) { GS.ui.notice('This note has no videos.'); return; }
                if (ids.length === 1) { openVideo(ids[0]); return; }
                let keyHandler = null;
                const m = GS.ui.modal({ title: title, width: 'min(92vw, 820px)', cls: 'yt-modal', onClose: () => { if (keyHandler) document.removeEventListener('keydown', keyHandler, true); } });
                m.body.append(el('p', { cls: 'gn-sub yt-grid-sub', text: ids.length + ' videos. Click one, or press its number, to open it on YouTube.' }));
                const grid = el('div', { cls: 'yt-grid' });
                ids.forEach((id, i) => {
                    const media = S('showThumbnails') !== false ? el('img', { attrs: { src: thumb(id), alt: '', loading: 'lazy' } }) : el('div', { cls: 'ph', text: '\u25b6' });
                    const cell = el('button', { cls: 'yt-cell', attrs: { type: 'button', 'aria-label': 'Open video ' + (i + 1) + ' on YouTube' }, on: { click: () => { openVideo(id); m.close(); } } },
                        media, i < 9 ? el('span', { cls: 'yt-num', text: String(i + 1) }) : null, el('div', { cls: 'yt-cap', text: 'youtube.com/watch?v=' + id }));
                    grid.append(cell);
                });
                m.body.append(grid);
                keyHandler = e => {
                    if (e.ctrlKey || e.metaKey || e.altKey || !/^[1-9]$/.test(e.key)) return;
                    const id = ids[+e.key - 1]; if (!id) return;
                    e.preventDefault(); e.stopPropagation(); openVideo(id); m.close();
                };
                document.addEventListener('keydown', keyHandler, true);
                const first = grid.querySelector('.yt-cell'); if (first) first.focus();
            }

            /* ------------------------------------------------------------ the search window */
            function openSearch() {
                const svc = props();
                if (!svc) { GS.ui.notice('The Properties data feature is switched off.'); return; }
                const m = GS.ui.modal({ title: 'Notes with videos', width: '700px', cls: 'gn-search-modal yt-modal' });
                const input = el('input', { cls: 'gn-search-input', type: 'text', attrs: { 'aria-label': 'Search notes with videos', placeholder: 'Search notes by title, alias or folder\u2026', autocomplete: 'off', spellcheck: 'false' } });
                const list = el('div', { cls: 'gn-search-results', attrs: { role: 'listbox' } });
                const hint = el('div', { cls: 'gn-sub gn-search-hint', text: 'Enter opens the note \u00b7 Ctrl/Cmd+Enter opens it in a new tab \u00b7 click a thumbnail to watch \u00b7 Esc closes' });
                m.body.append(input, list, hint);
                let items = [], results = [], sel = 0;

                const buildItems = () => {
                    items = svc.entries(key()).map(e => ({ note: e.note, ids: idsFrom(e.values) })).filter(x => x.ids.length);
                };
                function search(q) {
                    q = q.trim();
                    if (!q) return items.slice().sort((a, b) => GS.natCompare(a.note.title, b.note.title)).map(item => ({ item, tier: 0, score: 0, tPos: [], alias: '', aPos: [], pPos: [] }));
                    const out = [];
                    for (const item of items) {
                        const t = fuzzy(q, item.note.title);
                        let a = null, alias = '';
                        for (const al of (item.note.aliases || [])) { const f = fuzzy(q, al); if (f && (!a || f.score > a.score)) { a = f; alias = al; } }
                        const pm = fuzzy(q, item.note.path);
                        if (!t && !a && !pm) continue;
                        const tier = t || a ? 0 : 1;
                        out.push({ item, tier, score: Math.max(t ? t.score : -Infinity, a ? a.score : -Infinity, tier === 1 ? pm.score : -Infinity), tPos: t ? t.pos : [], alias: a ? alias : '', aPos: a ? a.pos : [], pPos: pm ? pm.pos : [] });
                    }
                    return out.sort((x, y) => (x.tier - y.tier) || (y.score - x.score));
                }
                function openNote(r, evt) {
                    const path = r.item.note.path;
                    m.close();
                    if (evt && (evt.ctrlKey || evt.metaKey)) { g.open(location.pathname + location.search + GN.router.href(path), '_blank', 'noopener'); return; }
                    GN.router.go(path, '');
                    if (GN.layout.isMobile()) GN.layout.closeDrawers();
                }
                function stackFor(item) {
                    if (S('showThumbnails') === false) return el('span', { cls: 'yt-pill', text: '\u25b6 ' + item.ids.length + (item.ids.length === 1 ? ' video' : ' videos') });
                    const max = Math.max(1, Math.min(8, +S('maxStack') || 4)), shown = item.ids.slice(0, max), over = item.ids.length - shown.length;
                    const step = 22, h = 50, w = Math.round(h * 16 / 9);
                    const stack = el('div', { cls: 'yt-stack', style: 'width:' + (w + (shown.length - 1) * step + 4) + 'px' });
                    shown.forEach((id, i) => {
                        const img = el('img', { cls: 'yt-thumb', attrs: { src: thumb(id), alt: '', loading: 'lazy', title: 'Watch this video on YouTube' }, style: 'left:' + (i * step) + 'px;z-index:' + (shown.length - i) });
                        img.addEventListener('click', e => { e.stopPropagation(); openVideo(id); m.close(); });
                        stack.append(img);
                    });
                    if (over > 0) stack.append(el('span', { cls: 'yt-more', text: '+' + over }));
                    return stack;
                }
                function paint() {
                    GS.clear(list);
                    if (svc.status === 'loading' || svc.status === 'idle') { list.append(el('div', { cls: 'gn-empty', text: 'Loading\u2026' })); return; }
                    if (svc.status !== 'ready') { list.append(el('div', { cls: 'gn-empty', text: svc.error || 'The video list could not be loaded.' })); return; }
                    if (!items.length) { list.append(el('div', { cls: 'gn-empty', text: 'No notes have a \u201c' + key() + '\u201d list yet. Add one to a note\u2019s front-matter and run the index workflow.' })); return; }
                    if (!results.length) { list.append(el('div', { cls: 'gn-empty', text: 'No matches.' })); return; }
                    results.slice(0, 80).forEach((r, i) => {
                        const left = el('div', { cls: 'yt-left' }, el('div', { cls: 'yt-title' }, highlight(r.item.note.title, r.tPos)));
                        if (r.alias) left.append(el('div', { cls: 'yt-alias' }, 'aka ', highlight(r.alias, r.aPos)));
                        left.append(el('div', { cls: 'yt-path' }, highlight(r.item.note.path.replace(/\.md$/i, ''), r.pPos.length ? r.pPos : [])));
                        const row = el('div', { cls: 'gn-search-row' + (i === sel ? ' is-sel' : ''), attrs: { role: 'option', 'aria-selected': String(i === sel) } }, left, stackFor(r.item));
                        row.addEventListener('mousemove', () => { if (sel !== i) { sel = i; list.querySelectorAll('.gn-search-row').forEach((x, k) => x.classList.toggle('is-sel', k === i)); } });
                        row.addEventListener('click', e => openNote(r, e));
                        list.append(row);
                    });
                    const s = list.querySelector('.is-sel'); if (s && s.scrollIntoView) s.scrollIntoView({ block: 'nearest' });
                }
                const run = () => { sel = 0; results = svc.status === 'ready' ? search(input.value) : []; paint(); };
                input.addEventListener('input', run);
                input.addEventListener('keydown', e => {
                    const n = Math.min(results.length, 80);
                    if (e.key === 'ArrowDown') { e.preventDefault(); if (n) { sel = (sel + 1) % n; paint(); } }
                    else if (e.key === 'ArrowUp') { e.preventDefault(); if (n) { sel = (sel - 1 + n) % n; paint(); } }
                    else if (e.key === 'Enter') { e.preventDefault(); if (results[sel]) openNote(results[sel], e); }
                });
                const off = svc.onChange(() => { buildItems(); run(); });
                const stop = m.overlay && new MutationObserver(() => { if (!document.body.contains(m.overlay)) { off(); stop.disconnect(); } });
                if (stop) stop.observe(document.body, { childList: true });
                buildItems(); run(); input.focus();
                svc.load();                                  // loads on first use, or re-checks quickly when already loaded
            }

            /* ------------------------------------------------------------ the note you are reading */
            const openNoteVideos = () => { if (!noteIds.length) GS.ui.notice('This note has no videos.'); else openGrid(noteIds, noteTitle || 'Videos'); };
            let removeNoteBtn = null, removeSearchBtn = null, removeCmds = [];
            function syncNoteButton() {
                const want = S('showNoteButton') !== false && noteIds.length > 0;
                if (want && !removeNoteBtn) removeNoteBtn = p.addTopbarButton({ id: 'youtube-note', icon: 'video', title: 'Videos in this note', order: 85, onClick: openNoteVideos });
                else if (!want && removeNoteBtn) { removeNoteBtn(); removeNoteBtn = null; }
            }
            function syncSearchButton() {
                if (removeSearchBtn) { removeSearchBtn(); removeSearchBtn = null; }
                if (S('showButton') !== false) removeSearchBtn = p.addTopbarButton({ id: 'youtube-search', icon: 'youtube', title: 'Find notes by their videos', order: 80, onClick: openSearch });
            }
            function bindCommands() {
                removeCmds.forEach(f => f()); removeCmds = [];
                const hk = String(S('hotkey') || '').trim();
                removeCmds.push(p.addCommand({ id: 'youtube:search', name: 'Find notes by their videos', hotkeys: hk ? [hk] : [], run: openSearch }));
                removeCmds.push(p.addCommand({ id: 'youtube:note-videos', name: 'Open this note\u2019s videos', run: openNoteVideos }));
            }
            p.on('note:opened', ctx => {
                const hit = (ctx.props || []).find(([k]) => String(k).trim().toLowerCase() === key());
                noteIds = hit ? idsFrom(hit[1]) : [];
                noteTitle = (ctx.note && ctx.note.title) || '';
                syncNoteButton();
            });
            p.on('note:closed', () => { noteIds = []; syncNoteButton(); });
            syncSearchButton(); bindCommands();
            p.settings.on(k => {
                if (k === 'showButton') syncSearchButton();
                else if (k === 'showNoteButton') syncNoteButton();
                else if (k === 'hotkey') bindCommands();
                else if (k === 'frontmatterKey') { noteIds = []; syncNoteButton(); if (GN.reader && GN.reader.reload) GN.reader.reload(); }
            });
        }
    });
})(window);
