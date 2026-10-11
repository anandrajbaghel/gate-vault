/* Image zoom - click an image to open it large. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    GN.plugins.define('image-zoom', {
        onload(p) {
            p.addBodyClass('gn-img-zoom');
            function lightbox(src, alt) {
                const close = () => { ov.remove(); document.removeEventListener('keydown', key, true); };
                const key = e => { if (e.key === 'Escape') close(); };
                const ov = el('div', { cls: 'gn-lightbox', on: { click: close } }, el('img', { src, alt: alt || '' }));
                document.body.append(ov); document.addEventListener('keydown', key, true);
                p.addDisposer(close);
            }
            p.registerDomEvent(GN.reader.article, 'click', e => {
                const img = e.target.closest('.gn-content img');
                if (img && !img.closest('a')) lightbox(img.currentSrc || img.src, img.alt);
            });
        }
    });
})(window);
