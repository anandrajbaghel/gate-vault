/* Markdown renderer - service "markdown":  render(chunk, container) - sanitize(html) - escapeHtml(s) - imageCandidates(path)
   Embedded question text (![[file#^id]]) is looked up in the question bank when it is on; otherwise a "text missing" note is shown. */
(function (g) {
    'use strict';
    const GSim = g.GateSim;
    GSim.plugins.define('markdown', {
        onload(p) {
            const R = GSim.pluginLib['markdown'].MarkdownRenderer;
            R.imageBase = () => String(p.settings.get('imageBasePath') == null ? '' : p.settings.get('imageBasePath')).trim();
            R.blocks = () => { const q = GSim.services.get('questions'); return q ? q.blocks : {}; };
            p.addDisposer(() => { R.imageBase = () => ''; R.blocks = () => ({}); });
            p.registerService('markdown', {
                render: (chunk, container) => R.render(chunk, container),
                sanitize: h => R.sanitize(h), escapeHtml: s => R.escapeHtml(s), imageCandidates: x => R.imageCandidates(x)
            });
        }
    });
})(window);
