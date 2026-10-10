/* GateNotes.index - loads notes-index.json and answers: where does this [[link]] go, what links here,
   which tags exist, what matches a quick search. Link resolution follows Obsidian's rules. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared;
    const RECENT_KEY = 'gate_notes_recent';

    const norm = s => String(s || '').normalize('NFC').toLowerCase();
    const stripExt = p => p.replace(/\.md$/i, '');
    const dirname = p => { const i = p.lastIndexOf('/'); return i < 0 ? '' : p.slice(0, i); };
    const basename = p => p.slice(p.lastIndexOf('/') + 1);

    const S = {
        loaded: false, meta: {}, missing: [], notes: [], visible: [], files: [],
        byPath: new Map(), byName: new Map(), byAlias: new Map(),
        fileByPath: new Map(), fileByName: new Map(),
        out: new Map(), inn: new Map(), tags: new Map(), tree: null
    };

    function push(map, key, val) { const a = map.get(key); if (a) a.push(val); else map.set(key, [val]); }

    function pick(cands, from) {
        if (!cands || !cands.length) return null;
        if (cands.length === 1) return cands[0];
        const dir = from ? dirname(from) : '';
        const same = cands.filter(c => c.folder === dir);
        if (same.length) cands = same;
        return cands.slice().sort((a, b) => a.path.length - b.path.length || a.path.localeCompare(b.path))[0];
    }

    function splitTarget(raw) {
        raw = String(raw || '').trim();
        const i = raw.indexOf('#');
        return { name: (i < 0 ? raw : raw.slice(0, i)).trim(), frag: (i < 0 ? '' : raw.slice(i + 1)).trim() };
    }

    function findNote(name, fromPath) {
        name = stripExt(String(name).replace(/^\.?\//, '')).trim();
        if (!name) return null;
        const n = norm(name);
        let cands;
        if (n.includes('/')) {
            const exact = S.byPath.get(n);
            if (exact) return exact;
            cands = S.notes.filter(x => norm(stripExt(x.path)).endsWith('/' + n));
        } else {
            cands = S.byName.get(n) || [];
            if (!cands.length) cands = S.byAlias.get(n) || [];
        }
        return pick(cands, fromPath);
    }

    /** Resolve "Note", "Note#Heading", "Note#^block", "#Heading", "folder/Note|alias" (alias already removed). */
    function resolveLink(raw, fromPath) {
        const { name, frag } = splitTarget(raw);
        if (!name) {
            const self = fromPath ? S.byPath.get(norm(fromPath)) : null;
            return { note: self || null, frag, self: true };
        }
        return { note: findNote(name, fromPath), frag, self: false };
    }

    function resolveFile(raw, fromPath) {
        let p = String(raw || '').trim();
        try { p = decodeURIComponent(p); } catch (e) {}
        p = p.replace(/[?#].*$/, '').replace(/^\.?\//, '');
        if (!p) return null;
        const n = norm(p);
        const exact = S.fileByPath.get(n);
        if (exact) return exact;
        const cands = S.files.filter(f => norm(f.path).endsWith('/' + n));
        if (cands.length) return pick(cands, fromPath);
        return pick(S.fileByName.get(norm(basename(p))) || [], fromPath);
    }

    function build(data) {
        S.meta = { generated: data.generated, version: data.version, hash: data.hash, total: (data.notes || []).length };
        S.missing = data.missing || [];
        GN.loader.version = String(data.hash || '').slice(0, 12);

        S.notes = (data.notes || []).map(n => {
            const folder = dirname(n.path);
            return Object.assign({ aliases: [], tags: [], links: [], headings: [], excerpt: '', unresolved: [] }, n, {
                title: n.title || stripExt(basename(n.path)), folder
            });
        });
        S.visible = S.notes.filter(n => !n.hidden);
        S.files = (data.files || []).map(p => ({ path: p, folder: dirname(p) }));

        S.byPath.clear(); S.byName.clear(); S.byAlias.clear(); S.fileByPath.clear(); S.fileByName.clear();
        for (const n of S.notes) {
            S.byPath.set(norm(n.path), n);
            S.byPath.set(norm(stripExt(n.path)), n);
            push(S.byName, norm(n.title), n);
            for (const a of n.aliases) push(S.byAlias, norm(a), n);
        }
        for (const f of S.files) { S.fileByPath.set(norm(f.path), f); push(S.fileByName, norm(basename(f.path)), f); }

        // Link graph (visible notes only are sources; targets may be hidden notes such as question papers)
        S.out.clear(); S.inn.clear();
        for (const n of S.visible) {
            const outs = new Set();
            n.unresolved = [];
            for (const raw of n.links) {
                const r = resolveLink(raw, n.path);
                if (r.note && r.note.path !== n.path) outs.add(r.note.path);
                else if (!r.note) { const nm = splitTarget(raw).name; if (nm && !n.unresolved.includes(nm)) n.unresolved.push(nm); }
            }
            S.out.set(n.path, [...outs]);
            for (const t of outs) { if (!S.inn.has(t)) S.inn.set(t, new Set()); S.inn.get(t).add(n.path); }
        }

        // Tags (a/b/c also counts under a and a/b)
        S.tags.clear();
        for (const n of S.visible) {
            for (const t of n.tags) {
                const parts = String(t).split('/').filter(Boolean);
                for (let i = 1; i <= parts.length; i++) {
                    const name = parts.slice(0, i).join('/'), key = norm(name);
                    if (!S.tags.has(key)) S.tags.set(key, { name, key, notes: new Set(), direct: new Set() });
                    const e = S.tags.get(key);
                    e.notes.add(n.path);
                    if (i === parts.length) e.direct.add(n.path);
                }
            }
        }

        // Folder tree of visible notes
        const root = { name: '', path: '', folders: new Map(), notes: [] };
        for (const n of S.visible) {
            let cur = root, acc = '';
            for (const seg of n.folder ? n.folder.split('/') : []) {
                acc = acc ? acc + '/' + seg : seg;
                if (!cur.folders.has(seg)) cur.folders.set(seg, { name: seg, path: acc, folders: new Map(), notes: [] });
                cur = cur.folders.get(seg);
            }
            cur.notes.push(n);
        }
        S.tree = root;
        S.loaded = true;
    }

    // Fuzzy subsequence score with bonuses for consecutive letters and word starts; -1 = no match
    function score(q, text) {
        q = q.toLowerCase(); const t = text.toLowerCase();
        let ti = 0, s = 0, last = -2;
        for (const ch of q) {
            const idx = t.indexOf(ch, ti);
            if (idx < 0) return -1;
            s += 1;
            if (idx === last + 1) s += 3;
            if (idx === 0 || /[\s\/_\-.(]/.test(t[idx - 1])) s += 4;
            last = idx; ti = idx + 1;
        }
        if (t.includes(q)) s += 10 + (t.startsWith(q) ? 10 : 0);
        return s - t.length * 0.05;
    }

    function recent() { try { return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'); } catch (e) { return []; } }

    GN.index = {
        state: S,
        async load() {
            let data;
            try { data = await GN.loader.json('notes-index.json', { bust: true }); }
            catch (e) { throw Object.assign(new Error(e.message), { code: e.isNotFound ? 'NO_INDEX' : 'FETCH' }); }
            build(data);
            return S;
        },
        build,
        get loaded() { return S.loaded; },
        get meta() { return S.meta; },
        get visible() { return S.visible; },
        get tree() { return S.tree; },
        get tags() { return S.tags; },
        byPath(p) { return S.byPath.get(norm(p)) || null; },
        resolveLink, resolveFile, splitTarget, norm, dirname, basename, stripExt,
        outgoing(path) { return (S.out.get(path) || []).map(p => S.byPath.get(norm(p))).filter(Boolean); },
        backlinks(path) {
            return [...(S.inn.get(path) || [])].map(p => S.byPath.get(norm(p))).filter(Boolean).sort((a, b) => GS.natCompare(a.title, b.title));
        },
        recent() { return recent().map(p => S.byPath.get(norm(p))).filter(Boolean); },
        pushRecent(path) {
            const list = recent().filter(p => p !== path); list.unshift(path);
            try { localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 30))); } catch (e) {}
        },
        quick(query, limit) {
            limit = limit || 40;
            query = String(query || '').trim();
            if (!query) {
                const seen = new Set(), out = [];
                for (const n of recent()) { const x = S.byPath.get(norm(n)); if (x && !x.hidden && !seen.has(x.path)) { seen.add(x.path); out.push({ note: x }); } }
                for (const x of S.visible) { if (out.length >= limit) break; if (!seen.has(x.path)) out.push({ note: x }); }
                return out.slice(0, limit);
            }
            const res = [];
            for (const n of S.visible) {
                let best = -1, alias = '';
                const st = score(query, n.title); if (st >= 0) best = st * 2;
                for (const a of n.aliases) { const sa = score(query, a); if (sa >= 0 && sa * 1.5 > best) { best = sa * 1.5; alias = a; } }
                const sp = score(query, n.path); if (sp >= 0 && sp * 0.5 > best) best = sp * 0.5;
                if (best >= 0) res.push({ note: n, score: best, alias });
            }
            return res.sort((a, b) => b.score - a.score).slice(0, limit);
        }
    };
})(window);
