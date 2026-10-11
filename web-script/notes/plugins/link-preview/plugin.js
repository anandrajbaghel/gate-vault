/* Link previews - hover a note link to peek at its target. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    GN.plugins.define('link-preview', {
        onload(p) {
            let pop = null, showT = null, hideT = null, anchor = null, seq = 0;
            const SEL = 'a.internal-link[data-path]';
            const enabled = () => g.matchMedia && g.matchMedia('(hover: hover)').matches;

            function hide() {
                clearTimeout(showT); clearTimeout(hideT); seq++;
                if (pop) { pop.remove(); pop = null; }
                anchor = null;
            }
            const scheduleHide = () => { clearTimeout(hideT); hideT = setTimeout(hide, 220); };
            function position(a) {
                if (!pop) return;
                const r = a.getBoundingClientRect(), w = pop.offsetWidth, h = pop.offsetHeight;
                const left = Math.max(8, Math.min(r.left, window.innerWidth - w - 12));
                let top = r.bottom + 6;
                if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - 6);
                pop.style.left = left + 'px'; pop.style.top = top + 'px';
            }
            async function show(a) {
                const my = ++seq;
                const path = a.dataset.path, frag = a.dataset.frag || '';
                const note = GN.index.byPath(path);
                if (!note) return;
                if (pop) pop.remove();
                pop = el('div', { cls: 'gn-preview', attrs: { role: 'tooltip' } }, el('div', { cls: 'gn-sub', text: 'Loading\u2026' }));
                pop.addEventListener('mouseenter', () => clearTimeout(hideT));
                pop.addEventListener('mouseleave', scheduleHide);
                document.body.append(pop);
                position(a);
                try {
                    const raw = await GN.loader.text(path);
                    if (my !== seq) return;
                    const body = GN.markdown.parseFrontmatter(raw).body;
                    let md = body;
                    if (frag) {
                        const part = frag[0] === '^' ? GN.markdown.extractBlock(body, frag.slice(1)) : GN.markdown.extractSection(body, frag);
                        if (part != null) md = part;
                    }
                    const inner = el('div', { cls: 'gn-preview-body markdown-rendered' });
                    GS.clear(pop); pop.append(el('div', { cls: 'gn-preview-title', text: note.title }), inner);
                    await GN.markdown.render(md, inner, { path, depth: 1, seen: [path] });
                    if (my === seq) position(a);
                } catch (e) { if (pop && my === seq) pop.textContent = 'Preview unavailable.'; }
            }

            p.registerDomEvent(document, 'mouseover', e => {
                if (!enabled()) return;
                if (pop && pop.contains(e.target)) return;
                const a = e.target.closest && e.target.closest(SEL);
                if (!a || a.closest('.gn-embed-link')) return;
                if (a === anchor) { clearTimeout(hideT); return; }
                anchor = a; clearTimeout(showT);
                showT = setTimeout(() => show(a), 350);
            });
            p.registerDomEvent(document, 'mouseout', e => {
                const a = e.target.closest && e.target.closest(SEL);
                if (a && a === anchor) { clearTimeout(showT); scheduleHide(); }
            });
            p.registerDomEvent(document, 'scroll', hide, true);
            p.registerDomEvent(document, 'keydown', e => { if (e.key === 'Escape') hide(); });
            p.on('note:opened', hide);
            p.addDisposer(hide);
        }
    });
})(window);
