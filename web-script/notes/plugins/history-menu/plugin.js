/* Navigation history menu - right-click / long-press on the back and forward arrows. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared;
    GN.plugins.define('history-menu', {
        onload(p) {
            const LIMIT = 25;
            function label(e) {
                if (!e.path) return { label: 'Notes home', sub: '' };
                const n = GN.index.byPath(e.path);
                const title = n ? n.title : GN.index.basename(e.path).replace(/\.md$/i, '');
                const frag = e.frag ? (e.frag[0] === '^' ? ' \u203A block' : ' \u203A ' + e.frag.split('#').pop()) : '';
                return { label: title + frag, sub: n ? n.folder : '' };
            }
            function items(dir) {
                const all = GN.router.entries(), i = GN.router.index(), out = [];
                if (dir === 'back') for (let k = i - 1; k >= 0 && out.length < LIMIT; k--) out.push(Object.assign({ k }, label(all[k])));
                else for (let k = i + 1; k < all.length && out.length < LIMIT; k++) out.push(Object.assign({ k }, label(all[k])));
                return out.map(x => ({ label: x.label, sub: x.sub, onClick: () => GN.router.jump(x.k) }));
            }
            function bind(btn, dir) {
                if (!btn) return;
                const oldTitle = btn.title;
                const show = () => { if (btn.disabled) return; const list = items(dir); if (list.length) GS.ui.menu({ anchor: btn, items: list }); };
                p.registerDomEvent(btn, 'contextmenu', e => { e.preventDefault(); show(); });
                let timer = null, fired = false;
                p.registerDomEvent(btn, 'pointerdown', e => { if (e.pointerType === 'mouse') return; fired = false; clearTimeout(timer); timer = setTimeout(() => { fired = true; show(); }, 450); });
                ['pointerup', 'pointercancel', 'pointerleave', 'pointermove'].forEach(ev => p.registerDomEvent(btn, ev, () => clearTimeout(timer)));
                p.registerDomEvent(btn, 'click', e => { if (fired) { e.preventDefault(); e.stopImmediatePropagation(); fired = false; } }, true);
                btn.classList.add('gn-history-btn');
                btn.title = oldTitle + ' \u2014 right-click or long-press for history';
                p.addDisposer(() => { btn.classList.remove('gn-history-btn'); btn.title = oldTitle; clearTimeout(timer); });
            }
            bind(document.getElementById('gn-back'), 'back');
            bind(document.getElementById('gn-forward'), 'forward');
        }
    });
})(window);
