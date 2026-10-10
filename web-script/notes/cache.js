/* GateNotes.cache - tiny IndexedDB key/value store. Used to keep a copy of the notes list on this device so the
   reader can open instantly (also in a new tab) and update itself quietly in the background. Fails soft. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const DB = 'gate_notes', STORE = 'kv';
    let dbP = null;

    function open() {
        if (!dbP) dbP = new Promise((res, rej) => {
            if (!g.indexedDB) { rej(new Error('IndexedDB unavailable')); return; }
            let r;
            try { r = g.indexedDB.open(DB, 1); } catch (e) { rej(e); return; }
            r.onupgradeneeded = () => { if (!r.result.objectStoreNames.contains(STORE)) r.result.createObjectStore(STORE); };
            r.onsuccess = () => res(r.result);
            r.onerror = () => rej(r.error);
            r.onblocked = () => rej(new Error('blocked'));
        });
        return dbP;
    }

    GN.cache = {
        async get(key) {
            try {
                const db = await open();
                return await new Promise(res => {
                    const q = db.transaction(STORE, 'readonly').objectStore(STORE).get(key);
                    q.onsuccess = () => res(q.result === undefined ? null : q.result);
                    q.onerror = () => res(null);
                });
            } catch (e) { return null; }
        },
        async set(key, value) {
            try {
                const db = await open();
                return await new Promise(res => {
                    const tx = db.transaction(STORE, 'readwrite');
                    tx.objectStore(STORE).put(value, key);
                    tx.oncomplete = () => res(true); tx.onerror = () => res(false); tx.onabort = () => res(false);
                });
            } catch (e) { return false; }
        },
        async del(key) {
            try {
                const db = await open();
                return await new Promise(res => { const tx = db.transaction(STORE, 'readwrite'); tx.objectStore(STORE).delete(key); tx.oncomplete = () => res(true); tx.onerror = () => res(false); });
            } catch (e) { return false; }
        }
    };
})(window);
