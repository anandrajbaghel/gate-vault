/* File explorer - the Files tab in the left sidebar. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    GN.plugins.define('file-explorer', {
        onload(p) {
            const KEY = 'gate_notes_tree';
            let openFolders = new Set(); try { openFolders = new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch (e) {}
            const saveOpen = () => { try { localStorage.setItem(KEY, JSON.stringify([...openFolders])); } catch (e) {} };
            const folderEls = new Map();
            let box, filesPane, filterInput, active = '';

            const noteLink = (n, extra) => el('a', { cls: 'gn-tree-note' + (extra ? ' ' + extra : ''), href: GN.router.href(n.path), title: n.path, dataset: { path: n.path, frag: '' } }, el('span', { text: n.title }));
            const countNotes = f => { let c = f.notes.length; f.folders.forEach(x => { c += countNotes(x); }); return c; };
            const allFolders = (node, out) => { node.folders.forEach(f => { out.push(f.path); allFolders(f, out); }); return out; };

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

            function render() {
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
                if (!box) return;
                box.querySelectorAll('.gn-tree-note.is-active').forEach(x => x.classList.remove('is-active'));
                if (active) box.querySelectorAll('.gn-tree-note').forEach(x => { if (x.dataset.path === active) x.classList.add('is-active'); });
            }
            function reveal(path) {
                const n = GN.index.byPath(path); if (!n || filterInput.value) return;
                let acc = '', changed = false;
                for (const s of n.folder ? n.folder.split('/') : []) {
                    acc = acc ? acc + '/' + s : s;
                    const f = folderEls.get(acc);
                    if (f && f.kids.hidden) { f.kids.hidden = false; f.row.classList.add('is-open'); f.row.setAttribute('aria-expanded', 'true'); openFolders.add(acc); changed = true; }
                }
                if (changed) saveOpen();
                markActive();
                const a = box.querySelector('.gn-tree-note.is-active');
                if (a && a.scrollIntoView && !box.hidden) a.scrollIntoView({ block: 'nearest' });
            }
            function revealFolder(folderPath) {
                GN.layout.showTab('left', 'files');
                filterInput.value = ''; render();
                let acc = '';
                for (const s of folderPath ? folderPath.split('/') : []) { acc = acc ? acc + '/' + s : s; const f = folderEls.get(acc); if (f) { f.kids.hidden = false; f.row.classList.add('is-open'); openFolders.add(acc); } }
                saveOpen();
                const f = folderEls.get(folderPath); if (f && f.row.scrollIntoView) f.row.scrollIntoView({ block: 'center' });
            }

            p.addSidebarTab('left', {
                id: 'files', title: 'Files', order: 10,
                mount(container) {
                    box = container;
                    filterInput = el('input', { cls: 'gn-filter', type: 'search', placeholder: 'Filter notes...', attrs: { 'aria-label': 'Filter notes' } });
                    filterInput.addEventListener('input', GS.debounce(render, 120));
                    const tools = el('div', { cls: 'gn-files-tools' }, filterInput,
                        el('button', { cls: 'gn-icon-btn', title: 'Collapse all folders', attrs: { type: 'button', 'aria-label': 'Collapse all folders' }, on: { click: () => { openFolders.clear(); saveOpen(); render(); } } }, GS.icon('collapse')),
                        el('button', { cls: 'gn-icon-btn', title: 'Expand all folders', attrs: { type: 'button', 'aria-label': 'Expand all folders' }, on: { click: () => { allFolders(GN.index.tree, []).forEach(x => openFolders.add(x)); saveOpen(); render(); } } }, GS.icon('expand')));
                    filesPane = el('div', { cls: 'gn-pane gn-tree', id: 'gn-files' });
                    container.append(tools, filesPane);
                    render();
                }
            });
            p.on('index:changed', render);
            p.on('note:opened', c => { active = c.path; reveal(c.path); });
            p.on('note:closed', () => { active = ''; markActive(); });
            p.on('folder:reveal', revealFolder);
            if (GN.reader.current) { active = GN.reader.current; reveal(active); }
        }
    });
})(window);
