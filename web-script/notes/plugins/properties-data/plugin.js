/* Properties data - service "props": the front-matter lists collected by the index workflow (notes-props.json).
   status 'idle'|'loading'|'ready'|'missing'|'error' - error - keys - load(force) -> Promise - entries(key) -> [{ path, note, values }]
   values(path, key) -> [string] - onChange(fn) -> off
   Only notes that are in the reader's index (and not hidden) are returned, so a stale file can never open a missing note. */
(function (g) {
    'use strict';
    const GN = g.GateNotes;
    GN.plugins.define('properties-data', {
        onload(p) {
            let status = 'idle', error = '', data = null, pending = null;
            const subs = new Set();
            const emit = () => subs.forEach(fn => { try { fn(); } catch (e) { console.error(e); } });

            async function fetchData() {
                status = 'loading'; error = ''; emit();
                try {
                    // revalidate every time: the file is tiny and an old copy would hide new videos or formulas
                    const res = await fetch(GN.loader.root + 'notes-props.json', { cache: 'no-cache' });
                    if (res.status === 404) { status = 'missing'; error = 'notes-props.json was not found. Run the index workflow again and make sure it commits that file.'; data = null; }
                    else if (!res.ok) throw new Error('HTTP ' + res.status);
                    else {
                        const j = await res.json();
                        if (!j || typeof j.notes !== 'object') throw new Error('unexpected file format');
                        data = j; status = 'ready';
                    }
                } catch (e) { status = 'error'; error = 'Could not load notes-props.json (' + ((e && e.message) || 'network error') + ').'; data = null; }
                pending = null; emit();
            }
            const api = {
                get status() { return status; },
                get error() { return error; },
                get keys() { return data ? data.keys.slice() : []; },
                load(force) {
                    if (pending) return pending;
                    if (status === 'ready' && !force) return Promise.resolve();
                    pending = fetchData();
                    return pending;
                },
                entries(key) {
                    if (!data) return [];
                    const k = String(key || '').trim().toLowerCase(), out = [];
                    for (const path of Object.keys(data.notes)) {
                        const vals = data.notes[path][k];
                        if (!vals || !vals.length) continue;
                        const note = GN.index.byPath(path);
                        if (note && !note.hidden) out.push({ path, note, values: vals });
                    }
                    return out;
                },
                values(path, key) { const e = data && data.notes[path]; return (e && e[String(key).trim().toLowerCase()]) || []; },
                onChange(fn) { subs.add(fn); return () => subs.delete(fn); }
            };
            p.registerService('props', api);
            if (p.settings.get('preload') !== false) setTimeout(() => api.load(), 0);
        }
    });
})(window);
