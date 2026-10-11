/* Diagrams - ```mermaid blocks drawn with the mermaid library (loaded on demand) + full-screen viewer button. */
(function (g) {
    'use strict';
    const GN = g.GateNotes, GS = g.GateShared;
    GN.plugins.define('diagrams', {
        onload(p) {
            const viewer = GN.diagramViewer;
            p.registerService('viewer', viewer);

            let mermaidP = null;
            function loadMermaid() {
                if (g.mermaid) return Promise.resolve(g.mermaid);
                if (!mermaidP) mermaidP = new Promise((res, rej) => {
                    const s = document.createElement('script');
                    s.src = 'https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js';
                    s.onload = () => res(g.mermaid); s.onerror = () => { mermaidP = null; rej(new Error('mermaid failed to load')); };
                    document.head.appendChild(s);
                });
                return mermaidP;
            }
            function addExpandButton(box) {
                const btn = document.createElement('button');
                btn.type = 'button'; btn.className = 'gn-mermaid-expand';
                btn.setAttribute('aria-label', 'View diagram full screen'); btn.title = 'Full screen';
                btn.appendChild(GS.icon('maximize', 16));
                btn.addEventListener('click', e => {
                    e.stopPropagation();
                    const svg = box.querySelector('svg');
                    if (svg) viewer.open(svg, { title: 'Diagram' });
                });
                box.appendChild(btn);
            }
            let n = 0;
            async function draw(box) {
                if (!box.isConnected || !box.dataset.src) return;
                try {
                    const mm = await loadMermaid();
                    const theme = document.documentElement.getAttribute('data-theme');
                    mm.initialize({ startOnLoad: false, securityLevel: 'strict', theme: theme === 'light' || theme === 'paper' ? 'default' : 'dark' });
                    const { svg } = await mm.render('gn-mm-' + Date.now() + '-' + (n++), box.dataset.src);
                    box.innerHTML = svg; box.removeAttribute('data-src'); addExpandButton(box);
                } catch (e) { box.textContent = 'Diagram error: ' + (e.message || e); box.classList.add('is-error'); }
            }
            p.addCodeBlockProcessor('mermaid', (src, ctx) => {
                const box = document.createElement('div');
                box.className = 'gn-mermaid'; box.dataset.src = src; box.textContent = 'Rendering diagram...';
                ctx.afterAttach(() => draw(box));
                return box;
            });
        }
    });
})(window);
