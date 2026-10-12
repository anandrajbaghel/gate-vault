/* GateSim.loader - tiny network helper: the site root URL and a fetch that retries and times out. */
(function (g) {
    'use strict';
    const GSim = (g.GateSim = g.GateSim || {});
    const self = document.currentScript;
    const root = new URL('../../../', (self && self.src) || location.href);   // this file lives in web-script/simulator/core/

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
                clearTimeout(timer); last = e;
                if (e.isNotFound) break;
                await new Promise(r => setTimeout(r, 400 * Math.pow(2, attempt)));
            }
        }
        throw Object.assign(new Error('Could not load "' + url + '": ' + (last && last.message)), { isNotFound: !!(last && last.isNotFound) });
    }

    GSim.loader = {
        root: root.href,
        fetchRetry,
        /** repo-relative path -> absolute URL, percent-encoded per segment */
        url(path) { return root.href + String(path).split('/').map(encodeURIComponent).join('/'); },
        async json(rel, opts) { const r = await fetchRetry(root.href + rel, opts); return r.json(); },
        async text(rel, opts) { const r = await fetchRetry(root.href + rel, opts); return r.text(); }
    };
})(window);
