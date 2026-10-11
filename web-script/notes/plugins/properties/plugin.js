/* Properties - front-matter box above the note. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared, el = GS.el;
    GN.plugins.define('properties', {
        onload(p) {
            p.addArticleSection('before', {
                id: 'properties', order: 10,
                render(c) {
                    if (!c.props.length) return null;
                    const det = el('details', { cls: 'gn-props-box' }, el('summary', { text: 'Properties' }));
                    if (p.settings.get('defaultState') !== 'collapsed') det.open = true;
                    const tagsSvc = GN.services.get('tags');
                    for (const [key, val] of c.props) {
                        const v = el('div', { cls: 'gn-prop-val' });
                        if (key.toLowerCase() === 'tags') {
                            GN.markdown.toList(val).forEach(t => v.append(tagsSvc ? el('a', { cls: 'gn-tag', href: '#', text: '#' + t, dataset: { tag: t } }) : el('span', { cls: 'gn-pill', text: '#' + t })));
                        } else if (Array.isArray(val)) {
                            val.forEach(x => { const s = el('span', { cls: 'gn-pill' }); GN.markdown.renderInline(String(x), s, { path: c.path }); v.append(s); });
                        } else if (/^https?:\/\//i.test(String(val))) {
                            v.append(el('a', { href: val, text: val, target: '_blank', rel: 'noopener noreferrer', cls: 'external-link' }));
                        } else GN.markdown.renderInline(String(val), v, { path: c.path });
                        det.append(el('div', { cls: 'gn-prop' }, el('div', { cls: 'gn-prop-key', text: key }), v));
                    }
                    return el('div', { cls: 'gn-props' }, det);
                }
            });
            p.settings.on(k => { if (k === 'defaultState') GN.reader.reload(); });
        }
    });
})(window);
