/* YouTube videos - the "Videos" tab of the search window, plus a top-bar button for the note you are reading.
   Data: the note's front-matter list (default key "youtube"), collected into notes-props.json by the index workflow and served by the
   "props" service (Properties data feature). The note you are reading is read straight from the note itself, so its video button is
   always up to date. Nothing else depends on this feature. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    const fuzzy = GS.fuzzy.match, highlight = GS.fuzzy.highlight;

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
                    grid.append(el('button', { cls: 'yt-cell', attrs: { type: 'button', 'aria-label': 'Open video ' + (i + 1) + ' on YouTube' }, on: { click: () => { openVideo(id); m.close(); } } },
                        media, i < 9 ? el('span', { cls: 'yt-num', text: String(i + 1) }) : null, el('div', { cls: 'yt-cap', text: 'youtube.com/watch?v=' + id })));
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

            /* ------------------------------------------------------------ the search tab */
            function rank(items, raw) {
                const q = String(raw || '').trim();
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
            function stackFor(item, ctx) {
                if (S('showThumbnails') === false) return el('span', { cls: 'yt-pill', text: '\u25b6 ' + item.ids.length + (item.ids.length === 1 ? ' video' : ' videos') });
                const max = Math.max(1, Math.min(8, +S('maxStack') || 4)), shown = item.ids.slice(0, max), over = item.ids.length - shown.length;
                const step = 22, h = 50, w = Math.round(h * 16 / 9);
                const stack = el('div', { cls: 'yt-stack', style: 'width:' + (w + (shown.length - 1) * step + 4) + 'px' });
                shown.forEach((id, i) => {
                    const img = el('img', { cls: 'yt-thumb', attrs: { src: thumb(id), alt: '', loading: 'lazy', title: 'Watch this video on YouTube' }, style: 'left:' + (i * step) + 'px;z-index:' + (shown.length - i) });
                    img.addEventListener('click', e => { e.stopPropagation(); openVideo(id); ctx.close(); });
                    stack.append(img);
                });
                if (over > 0) stack.append(el('span', { cls: 'yt-more', text: '+' + over }));
                return stack;
            }

            const legacy = String(S('hotkey') || '').trim();          // a hotkey set in an older version becomes this tab's default
            p.addFinderMode({
                id: 'videos', title: 'Notes with videos', label: 'Videos', placeholder: 'Search notes by title, alias or folder\u2026',
                hint: 'Enter opens the note \u00b7 Ctrl/Cmd+Enter in a new tab \u00b7 click a thumbnail to watch \u00b7 Esc closes',
                debounce: 60, async: true, icon: 'youtube', order: 40, hotkeys: legacy ? [legacy] : [], inAll: true,
                emptyText: 'No notes have a video list yet. Add a \u201cyoutube:\u201d list to a note\u2019s front-matter and run the index workflow.',
                async query(q) {
                    const svc = props();
                    if (!svc) throw new Error('The Properties data feature is switched off.');
                    await svc.load();
                    if (svc.status !== 'ready') throw new Error(svc.error || 'The video list could not be loaded.');
                    const items = svc.entries(key()).map(e => ({ note: e.note, ids: idsFrom(e.values) })).filter(x => x.ids.length);
                    return rank(items, q).slice(0, 80).map(r => ({ title: r.item.note.title, data: r }));
                },
                render(res, row, ctx) {
                    const r = res.data;
                    const left = el('div', { cls: 'yt-left' }, el('div', { cls: 'yt-title' }, highlight(r.item.note.title, r.tPos)));
                    if (r.alias) left.append(el('div', { cls: 'yt-alias' }, 'aka ', highlight(r.alias, r.aPos)));
                    left.append(el('div', { cls: 'yt-path' }, highlight(r.item.note.path.replace(/\.md$/i, ''), r.pPos)));
                    row.append(el('div', { cls: 'yt-row' }, left, stackFor(r.item, ctx)));
                },
                choose(res, evt) {
                    const path = res.data.item.note.path;
                    if (evt && (evt.ctrlKey || evt.metaKey)) { g.open(location.pathname + location.search + GN.router.href(path), '_blank', 'noopener'); return; }
                    GN.router.go(path, '');
                    if (GN.layout.isMobile()) GN.layout.closeDrawers();
                }
            });

            /* ------------------------------------------------------------ the note you are reading */
            const openNoteVideos = () => { if (!noteIds.length) GS.ui.notice('This note has no videos.'); else openGrid(noteIds, noteTitle || 'Videos'); };
            let removeNoteBtn = null;
            function syncNoteButton() {
                const want = S('showNoteButton') !== false && noteIds.length > 0;
                if (want && !removeNoteBtn) removeNoteBtn = p.addTopbarButton({ id: 'youtube-note', icon: 'video', title: 'Videos in this note', order: 85, onClick: openNoteVideos });
                else if (!want && removeNoteBtn) { removeNoteBtn(); removeNoteBtn = null; }
            }
            p.addCommand({ id: 'youtube:note-videos', name: 'Open this note\u2019s videos', run: openNoteVideos });
            p.on('note:opened', ctx => {
                const hit = (ctx.props || []).find(([k]) => String(k).trim().toLowerCase() === key());
                noteIds = hit ? idsFrom(hit[1]) : [];
                noteTitle = (ctx.note && ctx.note.title) || '';
                syncNoteButton();
            });
            p.on('note:closed', () => { noteIds = []; syncNoteButton(); });
            p.settings.on(k => {
                if (k === 'showNoteButton') syncNoteButton();
                else if (k === 'frontmatterKey') { noteIds = []; syncNoteButton(); }
            });
        }
    });
})(window);
