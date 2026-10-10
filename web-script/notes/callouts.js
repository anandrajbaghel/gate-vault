/* GateNotes.callouts - Obsidian-style callouts / admonitions: icon, colour, title, optional folding.
 *
 * To add or change a type you never touch the renderer:
 *   - quick way: edit callouts.custom.json (same folder). Each entry:
 *       { "id": "theorem", "name": "Theorem", "color": "120,82,238", "icon": "book", "aliases": ["thm"] }
 *       "icon" is a name from GN.callouts.icons, or use  "paths": ["M12 2 ...", "..."]  (24x24 stroke path data).
 *   - from code: GateNotes.callouts.register({ id, name, color, icon, aliases })
 *                GateNotes.callouts.registerIcon('name', ['path d', ...])
 * Colours are "r,g,b" so the same value drives the border, tint and title. Foldable callouts use > [!type]- / [!type]+ */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const NS = 'http://www.w3.org/2000/svg';

    /* ---------- icon library (24x24, stroke) ---------- */
    const ICONS = {
        pencil: ['M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z', 'M15 5l4 4'],
        clipboard: ['M8 2h8v4H8z', 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M12 11h4', 'M12 16h4', 'M8 11h.01', 'M8 16h.01'],
        info: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 16v-4', 'M12 8h.01'],
        checkCircle: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M9 12l2 2 4-4'],
        flame: ['M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z'],
        check: ['M20 6L9 17l-5-5'],
        help: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', 'M12 17h.01'],
        alert: ['M21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z', 'M12 9v4', 'M12 17h.01'],
        x: ['M18 6L6 18', 'M6 6l12 12'],
        zap: ['M13 2L3 14h9l-1 8 10-12h-9l1-8z'],
        bug: ['M8 2l1.88 1.88', 'M14.12 3.88L16 2', 'M9 7.13v-1a3 3 0 1 1 6 0v1', 'M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6', 'M12 20v-9', 'M6.53 9C4.6 8.8 3 7.1 3 5', 'M6 13H2', 'M3 21c0-2.1 1.7-3.9 3.8-4', 'M20.97 5c0 2.1-1.6 3.8-3.5 4', 'M22 13h-4', 'M17.2 17c2.1.1 3.8 1.9 3.8 4'],
        list: ['M8 6h13', 'M8 12h13', 'M8 18h13', 'M3 6h.01', 'M3 12h.01', 'M3 18h.01'],
        quote: ['M3 21c3 0 7-1 7-8V5c0-1.25-.76-2.02-2-2H4c-1.25 0-2 .75-2 1.97V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .01-1 1.03V20c0 1 0 1 1 1z', 'M15 21c3 0 7-1 7-8V5c0-1.25-.76-2.02-2-2h-4c-1.25 0-2 .75-2 1.97V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z'],
        star: ['M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'],
        lightbulb: ['M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5', 'M9 18h6', 'M10 22h4'],
        book: ['M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z', 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'],
        target: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z', 'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'],
        pin: ['M12 17v5', 'M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z'],
        heart: ['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z'],
        shield: ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'],
        sigma: ['M18 7V4H6l6 8-6 8h12v-3'],
        flask: ['M10 2v7.53L4.7 18.4A2 2 0 0 0 6.4 21h11.2a2 2 0 0 0 1.7-2.6L14 9.53V2', 'M8.5 2h7', 'M7 16h10']
    };

    /* ---------- built-in types (Obsidian's names and colours) ---------- */
    const BLUE = '8,109,221', CYAN = '0,191,188', GREEN = '8,185,78', ORANGE = '236,117,0', RED = '233,49,71', PURPLE = '120,82,238', GRAY = '158,158,158';
    const DEFAULTS = [
        { id: 'note', icon: 'pencil', color: BLUE },
        { id: 'abstract', aliases: ['summary', 'tldr'], icon: 'clipboard', color: CYAN },
        { id: 'info', icon: 'info', color: BLUE },
        { id: 'todo', icon: 'checkCircle', color: BLUE },
        { id: 'tip', aliases: ['hint', 'important'], icon: 'flame', color: CYAN },
        { id: 'success', aliases: ['check', 'done'], icon: 'check', color: GREEN },
        { id: 'question', aliases: ['help', 'faq'], icon: 'help', color: ORANGE },
        { id: 'warning', aliases: ['caution', 'attention'], icon: 'alert', color: ORANGE },
        { id: 'failure', aliases: ['fail', 'missing'], icon: 'x', color: RED },
        { id: 'danger', aliases: ['error'], icon: 'zap', color: RED },
        { id: 'bug', icon: 'bug', color: RED },
        { id: 'example', icon: 'list', color: PURPLE },
        { id: 'quote', aliases: ['cite'], icon: 'quote', color: GRAY }
    ];

    const types = new Map();          // id or alias -> definition
    const order = [];                 // canonical ids in registration order
    let styleEl = null;

    const slug = s => String(s || '').trim().toLowerCase();
    const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

    function svg(paths, size) {
        const el = document.createElementNS(NS, 'svg');
        el.setAttribute('viewBox', '0 0 24 24'); el.setAttribute('width', size); el.setAttribute('height', size);
        el.setAttribute('fill', 'none'); el.setAttribute('stroke', 'currentColor'); el.setAttribute('stroke-width', '2');
        el.setAttribute('stroke-linecap', 'round'); el.setAttribute('stroke-linejoin', 'round'); el.setAttribute('aria-hidden', 'true');
        for (const d of paths) { const p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); el.appendChild(p); }
        return el;
    }
    function iconPaths(def) {
        if (Array.isArray(def.paths) && def.paths.length) return def.paths;
        if (typeof def.svg === 'string') return [def.svg];
        return ICONS[def.icon] || ICONS.pencil;
    }

    function rebuildCss() {
        if (!styleEl) { styleEl = document.createElement('style'); styleEl.id = 'gn-callout-css'; document.head.appendChild(styleEl); }
        const rules = [];
        for (const id of order) {
            const d = types.get(id);
            const sel = [d.id].concat(d.aliases || []).map(x => `.gn-callout[data-callout="${x.replace(/"/g, '')}"]`).join(',');
            rules.push(`${sel}{--callout-color:${d.color};}`);
        }
        styleEl.textContent = rules.join('\n');
    }

    /** register({ id, name?, color:'r,g,b', icon:'name' | paths:[...], aliases:[...] }) - re-registering an id replaces it */
    function register(def, skipCss) {
        if (!def || !def.id) return;
        const d = { id: slug(def.id), name: def.name || '', aliases: (def.aliases || []).map(slug).filter(Boolean), icon: def.icon, paths: def.paths, svg: def.svg, color: String(def.color || BLUE).replace(/[^\d,.\s]/g, '').replace(/\s+/g, '') || BLUE };
        const old = types.get(d.id);
        if (old) [old.id].concat(old.aliases).forEach(k => types.delete(k)); else order.push(d.id);
        [d.id].concat(d.aliases).forEach(k => types.set(k, d));
        if (!skipCss) rebuildCss();
    }
    DEFAULTS.forEach(d => register(d, true));
    rebuildCss();

    function get(typeId) { return types.get(slug(typeId)) || null; }

    /** Build the callout element. parts: { type, fold: '+'|'-'|'', titleHtml, children: Node[] } */
    function create(parts) {
        const typed = slug(parts.type);
        const def = get(typed) || get('note');
        const fold = parts.fold === '+' || parts.fold === '-';
        const root = document.createElement(fold ? 'details' : 'div');
        root.className = 'gn-callout' + (fold ? ' is-collapsible' : '');
        root.dataset.callout = typed;
        if (!get(typed)) root.dataset.callout = 'note';
        if (parts.fold === '+') root.open = true;
        const title = document.createElement(fold ? 'summary' : 'div');
        title.className = 'gn-callout-title';
        const icon = document.createElement('span'); icon.className = 'gn-callout-icon'; icon.appendChild(svg(iconPaths(def), 18));
        const inner = document.createElement('span'); inner.className = 'gn-callout-title-inner';
        const html = String(parts.titleHtml || '').trim();
        if (html) inner.innerHTML = html;
        else inner.textContent = def.name ? def.name : cap(typed);
        title.append(icon, inner);
        if (fold) { const f = document.createElement('span'); f.className = 'gn-callout-fold'; f.appendChild(svg(['M6 9l6 6 6-6'], 16)); title.appendChild(f); }
        root.appendChild(title);
        const body = document.createElement('div'); body.className = 'gn-callout-content';
        (parts.children || []).forEach(n => body.appendChild(n));
        if (body.childNodes.length) root.appendChild(body);
        return root;
    }

    /** If this <blockquote> starts with [!type], return the callout element that should replace it (else null). */
    function transform(bq) {
        const first = bq.firstElementChild;
        if (!first || first.tagName !== 'P') return null;
        const m = first.innerHTML.match(/^\s*\[!([\w-]+)(?:\|[^\]]*)?\]([+-])?[ \t]*([\s\S]*)$/);
        if (!m) return null;
        const [titleHtml, ...rest] = m[3].split(/<br\s*\/?>/i);
        const children = [];
        if (rest.join('').trim()) { const p = document.createElement('p'); p.innerHTML = rest.join('<br>'); children.push(p); }
        [...bq.children].slice(1).forEach(n => children.push(n));
        return create({ type: m[1], fold: m[2] || '', titleHtml, children });
    }

    async function loadCustom(relUrl) {
        try {
            const data = await GN.loader.json(relUrl || 'web-script/notes/callouts.custom.json');
            (data.callouts || []).forEach(d => register(d, true));
            (data.icons ? Object.entries(data.icons) : []).forEach(([k, v]) => { if (Array.isArray(v)) ICONS[k] = v; });
            rebuildCss();
        } catch (e) { if (!e.isNotFound) console.warn('callouts.custom.json:', e.message); }
    }

    GN.callouts = {
        register, get, create, transform, loadCustom,
        registerIcon(name, paths) { if (name && Array.isArray(paths)) ICONS[name] = paths; },
        icons: ICONS,
        list() { return order.map(id => types.get(id)); }
    };
})(window);
