/* GateNotes.explorer - left sidebar: file tree and tag browser. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared, el = GS.el;
    const KEY = 'gate_notes_tree';
    let box, tabsEl, filesPane, tagsPane, filterInput, active = '';
    let openFolders = new Set(); try { openFolders = new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch (e) {}
    const folderEls = new Map();      // path -> { row, kids }
    const tagEls = new Map();         // key -> { row, kids }
    const saveOpen = () => { try { localStorage.setItem(KEY, JSON.stringify([...openFolders])); } catch (e) {} };

    function noteLink(n, extra) {
        return el('a', { cls: 'gn-tree-note' + (extra ? ' ' + extra : ''), href: GN.router.href(n.path), title: n.path,
            dataset: { path: n.path, frag: '' } }, el('span', { text: n.title }));
    }

    function renderFolder(node, parent, depth) {
        const folders = [...node.folders.values()].sort((a, b) => GS.natCompare(a.name, b.name));
        const notes = node.notes.slice().sort((a, b) => GS.natCompare(a.title, b.title));
        for (const f of folders) {
            const open = openFolders.has(f.path);
            const row = el('div', { cls: 'gn-tree-folder' + (open ? ' is-open' : ''), attrs: { role: 'button', tabindex: '0', 'aria-expanded': String(open) }, style: `--d:${depth}` },
                el('span', { cls: 'gn-chev' }, GS.icon('chevronRight', 14)), el('span', { cls: 'gn-tree-label', text: f.name }), el('span', { cls: 'gn-count', text: String(countNotes(f)) }));
            const kids = el('div', { cls: 'gn-tree-kids', style: `--d:${depth + 1}` });
            kids.hidden = !open;
            const toggle = () => {
                const now = kids.hidden;
                kids.hidden = !now; row.classList.toggle('is-open', now); row.setAttribute('aria-expanded', String(now));
                if (now) openFolders.add(f.path); else openFolders.delete(f.path);
                saveOpen();
            };
            row.addEventListener('click', toggle);
            row.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
            folderEls.set(f.path, { row, kids });
            parent.append(row, kids);
            renderFolder(f, kids, depth + 1);
        }
        for (const n of notes) { const a = noteLink(n); a.style.setProperty('--d', depth); parent.append(a); }
    }
    function allFolders(node, out) { node.folders.forEach(f => { out.push(f.path); allFolders(f, out); }); return out; }
    function countNotes(f) { let c = f.notes.length; f.folders.forEach(x => { c += countNotes(x); }); return c; }

    function renderFiles() {
        GS.clear(filesPane); folderEls.clear();
        const q = filterInput.value.trim();
        if (q) {
            const res = GN.index.quick(q, 80);
            if (!res.length) filesPane.append(el('div', { cls: 'gn-empty', text: 'No matching notes.' }));
            for (const r of res) { const a = noteLink(r.note, 'is-flat'); a.append(el('span', { cls: 'gn-sub', text: r.note.folder })); filesPane.append(a); }
        } else {
            const tree = GN.index.tree;
            if (!tree.notes.length && !tree.folders.size) filesPane.append(el('div', { cls: 'gn-empty', text: 'No notes in the index yet.' }));
            renderFolder(tree, filesPane, 0);
        }
        markActive();
    }

    function markActive() {
        box.querySelectorAll('.gn-tree-note.is-active').forEach(x => x.classList.remove('is-active'));
        if (!active) return;
        box.querySelectorAll('.gn-tree-note').forEach(x => { if (x.dataset.path === active) x.classList.add('is-active'); });
    }

    function buildTagTree() {
        const root = { children: new Map() };
        for (const e of GN.index.tags.values()) {
            let cur = root;
            const parts = e.name.split('/');
            parts.forEach((p, i) => {
                const key = parts.slice(0, i + 1).join('/').toLowerCase();
                if (!cur.children.has(p.toLowerCase())) cur.children.set(p.toLowerCase(), { name: p, key, children: new Map() });
                cur = cur.children.get(p.toLowerCase());
            });
        }
        return root;
    }
    function renderTagNode(node, parent, depth) {
        const items = [...node.children.values()].sort((a, b) => GS.natCompare(a.name, b.name));
        for (const t of items) {
            const entry = GN.index.tags.get(GN.index.norm(t.key)) || { notes: new Set(), direct: new Set() };
            const row = el('div', { cls: 'gn-tree-folder gn-tag-row', attrs: { role: 'button', tabindex: '0', 'aria-expanded': 'false' }, style: `--d:${depth}` },
                el('span', { cls: 'gn-chev' }, GS.icon('chevronRight', 14)), el('span', { cls: 'gn-tree-label', text: '#' + t.name }), el('span', { cls: 'gn-count', text: String(entry.notes.size) }));
            const kids = el('div', { cls: 'gn-tree-kids', style: `--d:${depth + 1}` }); kids.hidden = true;
            const toggle = () => { const now = kids.hidden; kids.hidden = !now; row.classList.toggle('is-open', now); row.setAttribute('aria-expanded', String(now)); };
            row.addEventListener('click', toggle);
            row.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
            tagEls.set(GN.index.norm(t.key), { row, kids });
            parent.append(row, kids);
            renderTagNode(t, kids, depth + 1);
            [...entry.direct].map(p => GN.index.byPath(p)).filter(Boolean).sort((a, b) => GS.natCompare(a.title, b.title))
                .forEach(n => { const a = noteLink(n); a.style.setProperty('--d', depth + 1); kids.append(a); });
        }
    }
    function renderTags() {
        GS.clear(tagsPane); tagEls.clear();
        if (!GN.index.tags.size) { tagsPane.append(el('div', { cls: 'gn-empty', text: 'No tags found in your notes.' })); return; }
        renderTagNode(buildTagTree(), tagsPane, 0);
        markActive();
    }

    function setTab(name) {
        GN.settings.set('leftTab', name);
        tabsEl.querySelectorAll('.gn-tab').forEach(t => t.setAttribute('aria-selected', String(t.dataset.tab === name)));
        box.querySelector('.gn-files-tools').hidden = name !== 'files';
        filesPane.hidden = name !== 'files'; tagsPane.hidden = name !== 'tags';
    }

    GN.explorer = {
        init(container) {
            box = container; GS.clear(box);
            tabsEl = el('div', { cls: 'gn-tabs', attrs: { role: 'tablist' } },
                ...[['files', 'Files'], ['tags', 'Tags']].map(([id, label]) =>
                    el('button', { cls: 'gn-tab', text: label, dataset: { tab: id }, attrs: { type: 'button', role: 'tab' }, on: { click: () => setTab(id) } })));
            filterInput = el('input', { cls: 'gn-filter', type: 'search', placeholder: 'Filter notes...', attrs: { 'aria-label': 'Filter notes' } });
            filterInput.addEventListener('input', GS.debounce(renderFiles, 120));
            const tools = el('div', { cls: 'gn-files-tools' }, filterInput,
                el('button', { cls: 'gn-icon-btn', title: 'Collapse all folders', attrs: { type: 'button', 'aria-label': 'Collapse all folders' }, on: { click: () => { openFolders.clear(); saveOpen(); renderFiles(); } } }, GS.icon('collapse')),
                el('button', { cls: 'gn-icon-btn', title: 'Expand all folders', attrs: { type: 'button', 'aria-label': 'Expand all folders' }, on: { click: () => { allFolders(GN.index.tree, []).forEach(p => openFolders.add(p)); saveOpen(); renderFiles(); } } }, GS.icon('expand')));
            filesPane = el('div', { cls: 'gn-pane gn-tree', id: 'gn-files' });
            tagsPane = el('div', { cls: 'gn-pane gn-tree', id: 'gn-tags' });
            box.append(tabsEl, tools, filesPane, tagsPane);
        },
        render() { renderFiles(); renderTags(); setTab(GN.settings.get('leftTab') === 'tags' ? 'tags' : 'files'); },
        setActive(path) { active = path || ''; markActive(); },
        reveal(path) {
            const n = GN.index.byPath(path); if (!n || filterInput.value) return;
            const segs = n.folder ? n.folder.split('/') : []; let acc = '', changed = false;
            for (const s of segs) {
                acc = acc ? acc + '/' + s : s;
                const f = folderEls.get(acc);
                if (f && f.kids.hidden) { f.kids.hidden = false; f.row.classList.add('is-open'); f.row.setAttribute('aria-expanded', 'true'); openFolders.add(acc); changed = true; }
            }
            if (changed) saveOpen();
            markActive();
            const a = box.querySelector('.gn-tree-note.is-active');
            if (a && a.scrollIntoView && !filesPane.hidden) a.scrollIntoView({ block: 'nearest' });
        },
        revealFolder(folderPath) {
            setTab('files'); filterInput.value = ''; renderFiles();
            const segs = folderPath ? folderPath.split('/') : []; let acc = '';
            for (const s of segs) { acc = acc ? acc + '/' + s : s; const f = folderEls.get(acc); if (f) { f.kids.hidden = false; f.row.classList.add('is-open'); openFolders.add(acc); } }
            saveOpen();
            const f = folderEls.get(folderPath); if (f && f.row.scrollIntoView) f.row.scrollIntoView({ block: 'center' });
        },
        showTag(tag) {
            setTab('tags');
            const parts = String(tag).split('/');
            for (let i = 1; i <= parts.length; i++) {
                const e = tagEls.get(GN.index.norm(parts.slice(0, i).join('/')));
                if (e) { e.kids.hidden = false; e.row.classList.add('is-open'); e.row.setAttribute('aria-expanded', 'true'); }
            }
            const e = tagEls.get(GN.index.norm(tag));
            if (e && e.row.scrollIntoView) { e.row.scrollIntoView({ block: 'center' }); e.row.classList.add('is-flash'); setTimeout(() => e.row.classList.remove('is-flash'), 1200); }
        },
        setTab
    };
})(window);
