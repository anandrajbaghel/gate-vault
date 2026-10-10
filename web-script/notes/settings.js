/* GateNotes.settings - reader preferences, saved on this device under 'gate_notes_settings'.
   Independent from the simulator's 'gate_settings'. */
(function (g) {
    'use strict';
    const GN = (g.GateNotes = g.GateNotes || {});
    const GS = g.GateShared;
    const KEY = 'gate_notes_settings';

    const DEFAULTS = {
        readFont: 'default', readCustomFont: '', readFontSize: 17, readLineHeight: 1.65,
        readableWidth: true, maxWidth: 760,
        properties: 'show',            // show | collapsed | hide
        inlineTitle: true, foldHeadings: true, hoverPreview: true, backlinksInDoc: false,
        openLast: true, lastNote: '', accentColor: '',
        leftOpen: true, rightOpen: true, leftWidth: 280, rightWidth: 270,
        leftTab: 'files', rightTab: 'outline'
    };

    const FONTS = [
        { id: 'default',   label: 'Interface font (IBM Plex Sans)', stack: null },
        { id: 'georgia',   label: 'Georgia (serif, system)', stack: "Georgia, 'Times New Roman', serif" },
        { id: 'inter',     label: 'Inter', stack: "'Inter', system-ui, sans-serif", google: 'Inter:wght@400;500;600;700', family: 'Inter' },
        { id: 'sourcesans', label: 'Source Sans 3', stack: "'Source Sans 3', system-ui, sans-serif", google: 'Source+Sans+3:wght@400;500;600;700', family: 'Source Sans 3' },
        { id: 'atkinson',  label: 'Atkinson Hyperlegible', stack: "'Atkinson Hyperlegible', system-ui, sans-serif", google: 'Atkinson+Hyperlegible:wght@400;700', family: 'Atkinson Hyperlegible' },
        { id: 'literata',  label: 'Literata (serif)', stack: "'Literata', Georgia, serif", google: 'Literata:wght@400;500;600;700', family: 'Literata' },
        { id: 'lora',      label: 'Lora (serif)', stack: "'Lora', Georgia, serif", google: 'Lora:wght@400;500;600;700', family: 'Lora' },
        { id: 'sourceserif', label: 'Source Serif 4 (serif)', stack: "'Source Serif 4', Georgia, serif", google: 'Source+Serif+4:wght@400;600;700', family: 'Source Serif 4' },
        { id: 'merriweather', label: 'Merriweather (serif)', stack: "'Merriweather', Georgia, serif", google: 'Merriweather:wght@400;700', family: 'Merriweather' },
        { id: 'custom',    label: 'Custom (type a font name)', stack: null, custom: true }
    ];

    let data = Object.assign({}, DEFAULTS);
    try { Object.assign(data, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) {}
    const listeners = new Set();

    function persist() { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {} }

    function ensureFont(family, googleSpec) {
        const id = 'gn-font-' + family.replace(/\W+/g, '-').toLowerCase();
        if (document.getElementById(id)) return;
        const spec = googleSpec || (encodeURIComponent(family).replace(/%20/g, '+') + ':wght@400;700');
        const link = document.createElement('link');
        link.id = id; link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${spec}&display=swap`;
        document.head.appendChild(link);
    }

    function apply() {
        const root = document.documentElement.style;
        const f = FONTS.find(x => x.id === data.readFont) || FONTS[0];
        let stack = f.stack;
        if (f.google) ensureFont(f.family, f.google);
        if (f.custom) {
            const name = String(data.readCustomFont || '').trim().replace(/["';{}\\]/g, '');
            if (name) { ensureFont(name); stack = `"${name}", var(--font-interface)`; } else stack = null;
        }
        if (stack) root.setProperty('--gn-font', stack); else root.removeProperty('--gn-font');
        root.setProperty('--gn-font-size', data.readFontSize + 'px');
        root.setProperty('--gn-line-height', String(data.readLineHeight));
        root.setProperty('--gn-max-width', data.readableWidth ? data.maxWidth + 'px' : 'none');
        root.setProperty('--gn-left-w', data.leftWidth + 'px');
        root.setProperty('--gn-right-w', data.rightWidth + 'px');
        if (GS && GS.theme) GS.theme.applyAccent(data.accentColor);
    }

    GN.settings = {
        defaults: DEFAULTS,
        fonts: FONTS,
        get(k) { return data[k]; },
        set(k, v) { data[k] = v; persist(); apply(); listeners.forEach(fn => { try { fn(k, v); } catch (e) { console.error(e); } }); },
        reset() { data = Object.assign({}, DEFAULTS); persist(); apply(); listeners.forEach(fn => fn('*', null)); },
        on(fn) { listeners.add(fn); return () => listeners.delete(fn); },
        apply
    };
})(window);
