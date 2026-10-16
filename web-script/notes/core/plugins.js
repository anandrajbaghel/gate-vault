/* GateNotes.plugins - the plugin manager. Every feature of the reader (file list, tags, outline, backlinks, search,
   link previews, callouts, diagrams ...) is a plugin in its own folder under web-script/notes/plugins/<id>/ :

       manifest.json   name, description, group, defaults, settings the Settings window should show, files to load
       plugin.js       GateNotes.plugins.define('<id>', { onload(plugin) { ... }, onunload() { ... } })

   plugins/plugins.json lists the folder names (in load order). A plugin that is switched off is never downloaded.
   Everything a plugin registers through its `plugin` object is tracked, so turning it off removes it completely.
   Open the reader with ?safe in the address to start with every plugin off (a way back in if one misbehaves). */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared;
    const KEY = 'gate_notes_plugins';
    const DIR = 'web-script/notes/plugins/';

    const defs = new Map();         // id -> definition passed to define()
    const recs = new Map();         // id -> record { id, manifest, running, assetsP, ctx, styleEls, error }
    const services = new Map();
    let order = [], state = { v: 1, enabled: {}, options: {}, failed: {} };
    const safe = /[?&]safe(=|&|$)/.test(location.search);

    /* ---------- loading files (replaceable, e.g. in tests) ---------- */
    const platform = (GN.platform = {
        url(rel) { const v = g.GATE_NOTES_VERSION; return GN.loader.root + rel + (v ? '?v=' + encodeURIComponent(v) : ''); },
        loadScript(url) {
            return new Promise((res, rej) => {
                const s = document.createElement('script');
                s.src = url; s.async = true;
                s.onload = () => res(s);
                s.onerror = () => rej(new Error('Could not load ' + url));
                document.head.appendChild(s);
            });
        },
        loadStyle(url) {
            return new Promise(res => {
                const l = document.createElement('link');
                l.rel = 'stylesheet'; l.href = url;
                l.onload = () => res(l);
                l.onerror = () => { console.warn('Could not load ' + url); res(l); };
                document.head.appendChild(l);
            });
        },
        async fetchJson(url) { const r = await GN.loader.fetchRetry(url, { retries: 1 }); return r.json(); }
    });

    /* ---------- saved state ---------- */
    function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
    function loadState() {
        let st = null;
        try { st = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
        if (st && st.v === 1) { state = Object.assign({ enabled: {}, options: {}, failed: {} }, st); return; }
        // First run with the plugin system: carry over the switches from the old single settings list.
        state = { v: 1, enabled: {}, options: {}, failed: {} };
        const old = GN.settings.raw();
        if (old.hoverPreview === false) state.enabled['link-preview'] = false;
        if (old.foldHeadings === false) state.enabled['heading-fold'] = false;
        if (old.properties === 'hide') state.enabled['properties'] = false;
        if (old.properties === 'collapsed') state.options['properties'] = { defaultState: 'collapsed' };
        if (old.backlinksInDoc === true) state.options['backlinks'] = { showInDocument: true };
        ['hoverPreview', 'foldHeadings', 'properties', 'backlinksInDoc'].forEach(k => GN.settings.remove(k));
        save();
    }
    const wanted = id => { const r = recs.get(id); return state.enabled[id] !== undefined ? !!state.enabled[id] : !r || r.manifest.defaultEnabled !== false; };

    function reportError(id, e) {
        const r = recs.get(id);
        console.error('[plugin ' + id + ']', e);
        if (r && !r.warned) {
            r.warned = true;
            if (GS && GS.ui) GS.ui.notice(`"${r.manifest.name}" hit an error. You can switch it off in Settings \u2192 Core plugins.`, 5000);
        }
    }

    /* ---------- the object each plugin receives ---------- */
    function makeOptions(id, manifest, owner) {
        const schema = manifest.settings || [], subs = new Set();
        const api = {
            schema,
            get(k) {
                const o = state.options[id];
                if (o && Object.prototype.hasOwnProperty.call(o, k)) return o[k];
                const s = schema.find(x => x.key === k);
                return s ? s.default : undefined;
            },
            set(k, v) {
                (state.options[id] = state.options[id] || {})[k] = v; save();
                subs.forEach(fn => { try { fn(k, v); } catch (e) { reportError(id, e); } });
            },
            on(fn) { subs.add(fn); const off = () => subs.delete(fn); owner._disposers.push(off); return off; }
        };
        return api;
    }

    class PluginContext {
        constructor(id, manifest) {
            this.id = id; this.manifest = manifest; this._disposers = [];
            this.settings = makeOptions(id, manifest, this);
        }
        _track(off) { if (typeof off === 'function') this._disposers.push(off); return off; }
        wrap(fn) {
            const id = this.id;
            return function () {
                try { const r = fn.apply(this, arguments); if (r && typeof r.catch === 'function') r.catch(e => reportError(id, e)); return r; }
                catch (e) { reportError(id, e); }
            };
        }
        addDisposer(fn) { this._disposers.push(fn); }
        on(event, fn) { return this._track(GN.events.on(event, this.wrap(fn))); }
        addCommand(def) { return this._track(GN.commands.register(Object.assign({}, def, { run: this.wrap(def.run) }))); }
        addTopbarButton(def) { return this._track(GN.slots.topbar.add(Object.assign({}, def, { onClick: this.wrap(def.onClick) }))); }
        addSidebarTab(side, def) { return this._track(GN.slots[side].add(Object.assign({}, def, { mount: this.wrap(def.mount) }))); }
        addStatusItem(def) { return this._track(GN.slots.status.add(Object.assign({}, def, { render: this.wrap(def.render) }))); }
        addArticleSection(where, def) { return this._track(GN.slots[where === 'after' ? 'after' : 'before'].add(Object.assign({}, def, { render: this.wrap(def.render) }))); }
        addMarkdownPostProcessor(fn, opts) { return this._track(GN.markdown.addPostProcessor(this.wrap(fn), Object.assign({ name: this.id }, opts))); }
        addCodeBlockProcessor(lang, fn) { return this._track(GN.markdown.addCodeBlockProcessor(lang, this.wrap(fn))); }
        addFinderMode(def) { return this._track(GN.finder.addMode(Object.assign({}, def, { owner: this.id }))); }
        addFinderTab(def) { return this.addFinderMode(def); }
        addSettingsTab(def) { return this._track(GN.settingsUI.registerTab(Object.assign({ group: 'plugins' }, def))); }
        registerDomEvent(target, type, fn, opts) {
            const w = this.wrap(fn);
            target.addEventListener(type, w, opts);
            this._disposers.push(() => target.removeEventListener(type, w, opts));
        }
        registerService(name, api) {
            services.set(name, api);
            this._disposers.push(() => { if (services.get(name) === api) services.delete(name); });
        }
        addBodyClass(cls) { document.body.classList.add(cls); this._disposers.push(() => document.body.classList.remove(cls)); }
        dispose() {
            const list = this._disposers.splice(0).reverse();
            list.forEach(fn => { try { fn(); } catch (e) { console.error(e); } });
        }
    }

    /* ---------- loading + starting ---------- */
    function loadAssets(r) {
        if (r.assetsP) return r.assetsP;
        const m = r.manifest, base = DIR + r.id + '/';
        r.assetsP = (async () => {
            r.styleEls = await Promise.all((m.styles || []).map(f => platform.loadStyle(platform.url(base + f))));
            if (!defs.has(r.id)) {
                const files = m.scripts || [m.script || 'plugin.js'];
                for (const f of files) await platform.loadScript(platform.url(base + f));     // in order
            }
            if (!defs.has(r.id)) throw new Error(`${base} did not call GateNotes.plugins.define('${r.id}', ...)`);
        })().catch(e => { r.assetsP = null; throw e; });
        return r.assetsP;
    }

    async function startOne(r) {
        if (r.running) return;
        const def = defs.get(r.id), ctx = new PluginContext(r.id, r.manifest);
        r.ctx = ctx;
        (r.styleEls || []).forEach(l => { if (!l.isConnected) document.head.appendChild(l); });
        try {
            if (typeof def.onload === 'function') await def.onload(ctx);
            if ((r.manifest.settings && r.manifest.settings.length) || typeof def.renderSettings === 'function') {
                ctx.addSettingsTab({
                    id: 'plugin:' + r.id, title: r.manifest.name, desc: r.manifest.description, order: 100 + order.indexOf(r.id),
                    render(c) { GN.settingsUI.renderSchema(c, r.manifest.settings || [], ctx.settings); if (def.renderSettings) def.renderSettings(c, ctx); }
                });
            }
            r.running = true; r.error = null;
        } catch (e) {
            ctx.dispose();
            (r.styleEls || []).forEach(l => l.remove());
            r.ctx = null; r.running = false; r.error = e.message || String(e);
            state.enabled[r.id] = false; state.failed[r.id] = r.error; save();      // keep the reader usable next time
            console.error('[plugin ' + r.id + '] failed to start', e);
            if (GS && GS.ui) GS.ui.notice(`"${r.manifest.name}" could not start and was switched off: ${r.error}`, 6000);
        }
    }

    function stopOne(r) {
        if (!r.running) return;
        const def = defs.get(r.id);
        try { if (def && typeof def.onunload === 'function') def.onunload(r.ctx); } catch (e) { console.error(e); }
        r.ctx.dispose();
        (r.styleEls || []).forEach(l => l.remove());
        r.ctx = null; r.running = false;
    }

    GN.services = { get: name => services.get(name) || null, has: name => services.has(name) };

    GN.plugins = {
        isSafeMode: safe,
        define(id, def) { defs.set(id, def); },

        /** Download the plugin list, manifests and the files of every plugin that should run. Does not start them. */
        async prepare() {
            loadState();
            let list = [];
            try { const j = await platform.fetchJson(platform.url(DIR + 'plugins.json')); list = (j.plugins || []).filter(x => typeof x === 'string'); }
            catch (e) { console.warn('plugins.json could not be loaded - running with no plugins.', e.message); }
            order = list;
            const manifests = await Promise.all(list.map(id => platform.fetchJson(platform.url(DIR + id + '/manifest.json')).catch(e => { console.warn('manifest for "' + id + '" could not be loaded', e.message); return null; })));
            list.forEach((id, i) => { if (manifests[i]) recs.set(id, { id, manifest: Object.assign({ id, name: id, group: 'Other' }, manifests[i], { id }), running: false, error: state.failed[id] || null }); });
            order = order.filter(id => recs.has(id));
            if (safe) return;
            const want = new Set();
            const add = id => {
                const r = recs.get(id); if (!r || want.has(id)) return;
                want.add(id); (r.manifest.requires || []).forEach(add);
            };
            order.forEach(id => { if (wanted(id)) add(id); });
            this._want = want;
            await Promise.all([...want].map(id => loadAssets(recs.get(id)).catch(e => {
                const r = recs.get(id); r.error = e.message; want.delete(id);      // network trouble: skip for this visit only
                console.warn('plugin "' + id + '" not loaded:', e.message);
            })));
        },

        /** Run onload() for every plugin that was downloaded, dependencies first. */
        async start() {
            const done = new Set();
            const go = async id => {
                if (done.has(id)) return; done.add(id);
                const r = recs.get(id); if (!r || !(this._want && this._want.has(id))) return;
                for (const d of r.manifest.requires || []) await go(d);
                await startOne(r);
            };
            for (const id of order) await go(id);
            GN.events.emit('plugins:ready');
        },

        async enable(id) {
            const r = recs.get(id); if (!r || r.running || safe) return;
            for (const d of r.manifest.requires || []) { if (!recs.has(d)) { GS.ui.notice('Needs the missing feature "' + d + '".'); return; } await this.enable(d); }
            state.enabled[id] = true; delete state.failed[id]; r.error = null; save();
            try { await loadAssets(r); } catch (e) { r.error = e.message; GS.ui.notice('Could not load "' + r.manifest.name + '": ' + e.message, 5000); return; }
            await startOne(r);
            if (r.running) GN.events.emit('plugin:enabled', id);
        },
        disable(id) {
            const r = recs.get(id); if (!r || safe) return;
            for (const o of recs.values()) if (o.running && (o.manifest.requires || []).includes(id)) this.disable(o.id);
            stopOne(r);
            state.enabled[id] = false; save();
            GN.events.emit('plugin:disabled', id);
        },

        list() { return order.map(id => { const r = recs.get(id); return { id, manifest: r.manifest, running: r.running, wanted: wanted(id), error: r.error || state.failed[id] || null }; }); },
        isRunning(id) { const r = recs.get(id); return !!(r && r.running); },
        options(id) { const r = recs.get(id); return r && r.ctx ? r.ctx.settings : null; },
        resetAll() { state = { v: 1, enabled: {}, options: {}, failed: {} }; save(); },
        reportError
    };
})(window);
