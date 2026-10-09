/* GateNotes.loader - fetches notes, attachments and the index with retry + an in-memory cache.
   URLs are built from the site root (two folders above this script), so it works on
   /notes, /notes.html or locally, regardless of the page URL. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const src = document.currentScript && document.currentScript.src;
    const root = src ? new URL('../../', src) : new URL('./', location.href);
    const cache = new Map();

    async function fetchRetry(url, opts) {
        const retries = (opts && opts.retries) != null ? opts.retries : 3;
        const timeoutMs = (opts && opts.timeoutMs) || 15000;
        let last;
        for (let attempt = 0; attempt <= retries; attempt++) {
            const ctl = new AbortController();
            const timer = setTimeout(() => ctl.abort(), timeoutMs);
            try {
                const res = await fetch(url, { signal: ctl.signal, cache: (opts && opts.cache) || 'default' });
                clearTimeout(timer);
                if (res.status === 404) throw Object.assign(new Error('HTTP 404 (not found)'), { isNotFound: true });
                if (!res.ok) throw new Error('HTTP ' + res.status);
                return res;
            } catch (e) {
                clearTimeout(timer);
                last = e;
                if (e.isNotFound) break;
                if (attempt < retries) await new Promise(r => setTimeout(r, 400 * Math.pow(2, attempt)));
            }
        }
        throw Object.assign(new Error(`Could not load "${url}": ${last && last.message}`), { isNotFound: !!(last && last.isNotFound) });
    }

    const loader = (GN.loader = {
        root: root.href,
        version: '',
        /** Repo-relative path -> absolute URL (percent-encoded per segment). */
        url(path) {
            return root.href + String(path).split('/').map(encodeURIComponent).join('/') + (loader.version ? '?v=' + loader.version : '');
        },
        text(path) {
            if (!cache.has(path)) {
                const p = fetchRetry(loader.url(path)).then(r => r.text()).catch(e => { cache.delete(path); throw e; });
                cache.set(path, p);
            }
            return cache.get(path);
        },
        async json(rel, opts) {
            const bust = opts && opts.bust;
            const url = root.href + rel + (bust ? '?t=' + Date.now() : '');
            const res = await fetchRetry(url, { cache: bust ? 'no-store' : 'default' });
            return res.json();
        },
        clear() { cache.clear(); },
        fetchRetry
    });
})(window);
