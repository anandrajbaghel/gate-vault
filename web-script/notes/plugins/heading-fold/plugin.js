/* Fold headings - an arrow on every top-level heading that folds its section. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    GN.plugins.define('heading-fold', {
        onload(p) {
            function applyFold(root) {
                let cut = Infinity;
                for (const ch of root.children) {
                    const m = /^H([1-6])$/.exec(ch.tagName);
                    if (m) {
                        const lvl = +m[1];
                        if (lvl <= cut) cut = Infinity;
                        ch.classList.toggle('gn-folded', cut !== Infinity);
                        if (cut === Infinity && ch.classList.contains('is-collapsed')) cut = lvl;
                    } else ch.classList.toggle('gn-folded', cut !== Infinity);
                }
            }
            function decorate(root) {
                if (!root) return;
                for (const h of root.children) {
                    if (!/^H[1-6]$/.test(h.tagName) || h.querySelector(':scope > .gn-fold')) continue;
                    h.classList.add('gn-foldable');
                    h.prepend(el('span', { cls: 'gn-fold', attrs: { role: 'button', 'aria-label': 'Fold section', title: 'Fold / unfold' } }, GS.icon('chevronDown', 14)));
                }
            }
            p.on('note:opened', c => decorate(c.content));
            p.registerDomEvent(GN.reader.article, 'click', e => {
                const f = e.target.closest('.gn-fold'); if (!f) return;
                e.preventDefault();
                f.parentElement.classList.toggle('is-collapsed');
                applyFold(GN.reader.content);
            });
            // jumping to a heading inside a folded section: open everything first
            p.on('heading:reveal', h => {
                if (!h.classList.contains('gn-folded')) return;
                const root = GN.reader.content;
                root.querySelectorAll('.is-collapsed').forEach(x => x.classList.remove('is-collapsed'));
                applyFold(root);
            });
            p.addDisposer(() => {
                const root = GN.reader.content; if (!root) return;
                root.querySelectorAll('.gn-fold').forEach(x => x.remove());
                root.querySelectorAll('.gn-foldable, .gn-folded, .is-collapsed').forEach(x => x.classList.remove('gn-foldable', 'gn-folded', 'is-collapsed'));
            });
            decorate(GN.reader.content && GN.reader.current ? GN.reader.content : null);
        }
    });
})(window);
