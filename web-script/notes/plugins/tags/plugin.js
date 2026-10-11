/* Tags - #tag pills inside notes + the Tags tab in the left sidebar. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    GN.plugins.define('tags', {
        onload(p) {
            let pane = null;
            const tagEls = new Map();
            const noteLink = n => el('a', { cls: 'gn-tree-note', href: GN.router.href(n.path), title: n.path, dataset: { path: n.path, frag: '' } }, el('span', { text: n.title }));

            /* ---- inline #tags ---- */
            const tagRe = /(^|[^\p{L}\p{N}_&\/#\\.:-])#((?:[\p{L}\p{N}_\/-])*[\p{L}_\/-](?:[\p{L}\p{N}_\/-])*)/gu;
            function tagify(container) {
                const w = document.createTreeWalker(container, NodeFilter.SHOW_TEXT), nodes = [];
                while (w.nextNode()) nodes.push(w.currentNode);
                for (const node of nodes) {
                    if (node.nodeValue.indexOf('#') < 0) continue;
                    if (node.parentElement && node.parentElement.closest('a, code, pre, script, style, .gn-math')) continue;
                    const txt = node.nodeValue;
                    tagRe.lastIndex = 0;
                    let m, last = 0, frag = null;
                    while ((m = tagRe.exec(txt)) !== null) {
                        frag = frag || document.createDocumentFragment();
                        const start = m.index + m[1].length;
                        frag.append(txt.slice(last, start));
                        const a = document.createElement('a');
                        a.className = 'gn-tag'; a.href = '#'; a.dataset.tag = m[2]; a.textContent = '#' + m[2];
                        frag.append(a);
                        last = start + 1 + m[2].length;
                    }
                    if (frag) { frag.append(txt.slice(last)); node.replaceWith(frag); }
                }
            }
            p.addMarkdownPostProcessor(tagify, { order: 50 });

            /* ---- Tags tab ---- */
            function tree() {
                const root = { children: new Map() };
                for (const e of GN.index.tags.values()) {
                    let cur = root; const parts = e.name.split('/');
                    parts.forEach((part, i) => {
                        const key = parts.slice(0, i + 1).join('/').toLowerCase();
                        if (!cur.children.has(part.toLowerCase())) cur.children.set(part.toLowerCase(), { name: part, key, children: new Map() });
                        cur = cur.children.get(part.toLowerCase());
                    });
                }
                return root;
            }
            function renderNode(node, parent, depth) {
                for (const t of [...node.children.values()].sort((a, b) => GS.natCompare(a.name, b.name))) {
                    const entry = GN.index.tags.get(GN.index.norm(t.key)) || { notes: new Set(), direct: new Set() };
                    const row = el('div', { cls: 'gn-tree-folder gn-tag-row', attrs: { role: 'button', tabindex: '0', 'aria-expanded': 'false' }, style: `--d:${depth}` },
                        el('span', { cls: 'gn-chev' }, GS.icon('chevronRight', 14)), el('span', { cls: 'gn-tree-label', text: '#' + t.name }), el('span', { cls: 'gn-count', text: String(entry.notes.size) }));
                    const kids = el('div', { cls: 'gn-tree-kids', style: `--d:${depth + 1}` }); kids.hidden = true;
                    const toggle = () => { const now = kids.hidden; kids.hidden = !now; row.classList.toggle('is-open', now); row.setAttribute('aria-expanded', String(now)); };
                    row.addEventListener('click', toggle);
                    row.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
                    tagEls.set(GN.index.norm(t.key), { row, kids });
                    parent.append(row, kids);
                    renderNode(t, kids, depth + 1);
                    [...entry.direct].map(x => GN.index.byPath(x)).filter(Boolean).sort((a, b) => GS.natCompare(a.title, b.title))
                        .forEach(n => { const a = noteLink(n); a.style.setProperty('--d', depth + 1); kids.append(a); });
                }
            }
            function render() {
                if (!pane) return;
                GS.clear(pane); tagEls.clear();
                if (!GN.index.tags.size) { pane.append(el('div', { cls: 'gn-empty', text: 'No tags found in your notes.' })); return; }
                renderNode(tree(), pane, 0);
            }
            function showTag(tag) {
                GN.layout.showTab('left', 'tags');
                const parts = String(tag).split('/');
                for (let i = 1; i <= parts.length; i++) {
                    const e = tagEls.get(GN.index.norm(parts.slice(0, i).join('/')));
                    if (e) { e.kids.hidden = false; e.row.classList.add('is-open'); e.row.setAttribute('aria-expanded', 'true'); }
                }
                const e = tagEls.get(GN.index.norm(tag));
                if (e && e.row.scrollIntoView) { e.row.scrollIntoView({ block: 'center' }); e.row.classList.add('is-flash'); setTimeout(() => e.row.classList.remove('is-flash'), 1200); }
            }

            p.addSidebarTab('left', { id: 'tags', title: 'Tags', order: 20, mount(container) { pane = el('div', { cls: 'gn-pane gn-tree', id: 'gn-tags' }); container.append(pane); render(); } });
            p.on('index:changed', render);
            p.registerDomEvent(document, 'click', e => {
                const a = e.target.closest && e.target.closest('a.gn-tag[data-tag]');
                if (!a) return;
                e.preventDefault();
                showTag(a.dataset.tag);
            });
            p.registerService('tags', { show: showTag });
        }
    });
})(window);
