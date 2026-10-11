/* boot.js - the only script notes.html loads. It downloads the core files (in parallel, executed in order) and starts
   the reader. To publish an update, bump the number in  notes.html:  <script src=".../boot.js?v=NN">  - that single
   number also versions every plugin file, so phones never keep stale copies. */
(function (g) {
    'use strict';
    const self = document.currentScript;
    const src = self && self.src ? new URL(self.src) : new URL('./web-script/notes/core/boot.js', location.href);
    const version = src.searchParams.get('v') || '';
    const root = new URL('../../../', src);          // site root (boot.js lives in web-script/notes/core/)
    g.GATE_NOTES_VERSION = version;

    const FILES = [
        'shared/dom.js', 'shared/theme.js', 'shared/ui.js',
        'notes/core/events.js', 'notes/core/settings.js', 'notes/core/loader.js', 'notes/core/cache.js', 'notes/core/index.js',
        'notes/core/router.js', 'notes/core/slots.js', 'notes/core/commands.js', 'notes/core/markdown.js', 'notes/core/finder.js',
        'notes/core/layout.js', 'notes/core/reader.js', 'notes/core/plugins.js', 'notes/core/settings-ui.js', 'notes/core/app.js'
    ].map(f => 'web-script/' + f);

    function fail(url) {
        const m = document.getElementById('gn-main');
        if (!m) return;
        m.innerHTML = '';
        const c = document.createElement('div'); c.className = 'gn-card';
        c.innerHTML = '<h2>The notes reader could not start</h2><p>A required file could not be loaded:</p><p><code></code></p><p class="gn-sub">Check that the web-script folder was uploaded completely, then reload.</p>';
        c.querySelector('code').textContent = url;
        m.appendChild(c);
    }

    let failed = false, loaded = 0;
    const urls = FILES.map(f => new URL(f, root).href + (version ? '?v=' + encodeURIComponent(version) : ''));
    urls.forEach(u => {
        const s = document.createElement('script');
        s.src = u;
        s.async = false;                      // download in parallel, run in this order
        s.onerror = () => { if (!failed) { failed = true; fail(u); } };
        s.onload = () => { loaded += 1; if (loaded === urls.length && !failed && g.GateNotes && g.GateNotes.app) g.GateNotes.app.run(); };
        document.head.appendChild(s);
    });
})(window);
