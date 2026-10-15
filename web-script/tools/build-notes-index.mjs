#!/usr/bin/env node
/* Builds notes-index.json (+ notes-search.json) for the /notes reader.
 *   node web-script/tools/build-notes-index.mjs            (run from the repository root)
 *   node web-script/tools/build-notes-index.mjs --root <dir> --config <file>
 * No dependencies. Settings live in web-script/tools/notes.config.json.
 * Static hosting cannot list folders, so this file is how the reader learns which notes exist. */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf('--' + n); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
const root = path.resolve(arg('root', path.resolve(here, '..', '..')));
const configPath = path.resolve(arg('config', path.join(here, 'notes.config.json')));

const DEFAULTS = {
    exclude: ['.git', '.github', '.obsidian', '.trash', 'node_modules', 'web-script'], excludeFiles: ['README.md'], hide: [],
    attachmentExtensions: ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif', 'bmp', 'pdf', 'mp3', 'wav', 'ogg', 'm4a', 'mp4', 'webm'],
    output: 'notes-index.json', searchOutput: 'notes-search.json', excerptLength: 200, searchTextLimit: 20000,
    // front-matter keys whose values are copied into notes-props.json (read by the formula and YouTube features)
    indexedProperties: ['formula', 'define', 'youtube'], propsOutput: 'notes-props.json'
};
let cfg = { ...DEFAULTS };
try { cfg = { ...DEFAULTS, ...JSON.parse(await fs.readFile(configPath, 'utf8')) }; }
catch (e) { if (e.code !== 'ENOENT') { console.error('Could not read config:', e.message); process.exit(1); } }

const low = s => s.normalize('NFC').toLowerCase();
const excl = cfg.exclude.map(p => low(p.replace(/^\/+|\/+$/g, '')));
const hide = cfg.hide.map(p => low(p.replace(/^\/+|\/+$/g, '')));
const exclFiles = new Set(cfg.excludeFiles.map(low));
const attExt = new Set(cfg.attachmentExtensions.map(e => e.toLowerCase()));
const under = (rel, list) => list.some(p => { const r = low(rel); return r === p || r.startsWith(p + '/'); });

async function walk(dir, rel, out) {
    for (const ent of await fs.readdir(dir, { withFileTypes: true })) {
        const r = rel ? rel + '/' + ent.name : ent.name;
        if (ent.isDirectory()) {
            if (ent.name.startsWith('.') || under(r, excl)) continue;
            await walk(path.join(dir, ent.name), r, out);
        } else if (ent.isFile()) {
            if (under(r, excl) || exclFiles.has(low(ent.name))) continue;
            out.push(r);
        }
    }
}

/* ---- parsing helpers (kept in step with web-script/notes/markdown.js) */
/* ---------------------------------------------------------------- front-matter (a small YAML subset, kept identical in the index script and the reader)
   Handles: key: value - key: [a, b] - lists written as "- item" - "double" quoted text with \\ \" \n \uXXXX escapes - 'single' quoted
   text with '' - block text after | or > (as a value or as a list item) - values wrapped over several indented lines. */
const YESC = { '0': '\0', a: '\x07', b: '\b', t: '\t', n: '\n', v: '\v', f: '\f', r: '\r', e: '\x1b', ' ': ' ', '"': '"', '/': '/', '\\': '\\', N: '\x85', _: '\xa0', L: '\u2028', P: '\u2029' };
const yamlEscapes = s => s.replace(/\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8}|[\s\S])/g, (m, c) => {
    if (c.length > 1) { try { return String.fromCodePoint(parseInt(c.slice(1), 16)); } catch (e) { return m; } }
    return Object.prototype.hasOwnProperty.call(YESC, c) ? YESC[c] : m;       // unknown escape: keep it as typed
});
function unquote(v) {
    v = String(v).trim(); let m;
    if ((m = v.match(/^"([\s\S]*)"$/))) return yamlEscapes(m[1]);
    if ((m = v.match(/^'([\s\S]*)'$/))) return m[1].replace(/''/g, "'");
    return v;
}
/* "a, 'b, c', x_{i,j}" -> pieces; commas inside quotes or brackets/braces do not split */
function splitInline(s) {
    const out = []; let cur = '', depth = 0, q = '';
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (q) { cur += c; if (c === '\\' && q === '"') { cur += s[++i] || ''; } else if (c === q) q = ''; continue; }
        if (c === '"' || c === "'") { q = c; cur += c; continue; }
        if ('[{('.includes(c)) depth++; else if (']})'.includes(c)) depth = Math.max(0, depth - 1);
        if (c === ',' && depth === 0) { out.push(cur); cur = ''; continue; }
        cur += c;
    }
    out.push(cur);
    return out.map(unquote).filter(x => x !== '');
}
function parseYamlish(src) {
    const props = [], lines = src.split('\n');
    let i = 0;
    const indentOf = l => l.match(/^[ \t]*/)[0].replace(/\t/g, '    ').length;
    const isBlockHead = v => /^[|>][+-]?\d?[+-]?$/.test(v);
    const isItem = l => /^[ \t]*-(\s|$)/.test(l);
    function block(head, parentIndent) {                       // consumes the indented lines that follow
        const buf = []; let ind = -1;
        while (i < lines.length) {
            const l = lines[i];
            if (l.trim() === '') { buf.push(''); i++; continue; }
            const n = indentOf(l);
            if (n <= parentIndent) break;
            if (ind < 0) ind = n;
            buf.push(n >= ind ? l.replace(/\t/g, '    ').slice(ind) : l.trim());
            i++;
        }
        while (buf.length && buf[buf.length - 1] === '') buf.pop();
        if (head[0] === '|') return buf.join('\n');
        let out = '';
        for (const l of buf) { if (l === '') out += '\n'; else { if (out && !out.endsWith('\n')) out += ' '; out += l; } }
        return out.replace(/\s+$/, '');
    }
    function wrapped(first, parentIndent, stop) {                // plain/quoted text continued on deeper-indented lines
        const more = [];
        while (i < lines.length && lines[i].trim() !== '' && indentOf(lines[i]) > parentIndent && !stop(lines[i])) { more.push(lines[i].trim()); i++; }
        return more.length ? first.trim() + ' ' + more.join(' ') : first;
    }
    while (i < lines.length) {
        const m = lines[i].match(/^([^\s#:][^:]*?):(?:[ \t]+(.*)|[ \t]*)$/);
        i++;
        if (!m) continue;
        const key = m[1].trim();
        const val = (m[2] || '').trim();
        if (isBlockHead(val)) { props.push([key, block(val, 0)]); }
        else if (val === '') {
            const arr = [];
            while (i < lines.length && isItem(lines[i])) {
                const line = lines[i], ind = indentOf(line);
                let item = line.replace(/^[ \t]*-[ \t]*/, '');
                i++;
                if (isBlockHead(item.trim())) { arr.push(block(item.trim(), ind)); continue; }
                const lb = item.trim().match(/^(.+?:)[ \t]+([|>][+-]?\d?[+-]?)$/);                 // "- Label: |" followed by indented text
                if (lb) { arr.push(lb[1] + ' ' + block(lb[2], ind)); continue; }
                arr.push(unquote(wrapped(item, ind, isItem)));
            }
            props.push([key, arr.length ? arr : '']);
        } else if (/^\[.*\]$/.test(val)) props.push([key, splitInline(val.slice(1, -1))]);
        else props.push([key, unquote(wrapped(val, 0, l => false))]);
    }
    return props;
}

function frontmatter(raw) {
    const m = raw.match(/^---[ \t]*\n(?:([\s\S]*?)\n)?(?:---|\.\.\.)[ \t]*(?:\n|$)/);
    if (!m) return { fm: {}, body: raw };
    const fm = {};
    for (const [k, v] of parseYamlish(m[1] || '')) fm[k.toLowerCase()] = v;
    return { fm, body: raw.slice(m[0].length) };
}
const list = v => (Array.isArray(v) ? v : String(v || '').split(/[,\s]+/)).map(s => String(s).replace(/^#/, '').trim()).filter(Boolean);
const stripCode = t => t
    .replace(/^([ \t]*)(`{3,}|~{3,})[^\n]*\n[\s\S]*?\n[ \t]*\2[`~]*[ \t]*$/gm, '')
    .replace(/^([ \t]*)(`{3,}|~{3,})[^\n]*\n[\s\S]*$/m, '')
    .replace(/(`+)(?!`)((?:[^\n]|\n(?!\s*\n))*?[^`])\1(?!`)/g, '')
    .replace(/\$\$[\s\S]+?\$\$/g, '')
    .replace(/(?<![\\$])\$(?![\s$])((?:[^$\\\n]|\\[\s\S]|\n(?!\s*\n))*?)(?<![\s\\])\$(?!\d)/g, '')
    .replace(/%%[\s\S]*?%%/g, '');
const plainHeading = s => s.replace(/\[\[([^\]|]*)(?:\|([^\]]*))?\]\]/g, (m, a, b) => b || a).replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/\s+\^[\w-]+\s*$/, '').replace(/[*_`~=]/g, '').trim();
/* front-matter values for the keys listed in indexedProperties -> { key: [string, ...] } (keys are matched case-insensitively) */
const propKeys = (cfg.indexedProperties || []).map(k => String(k).trim().toLowerCase()).filter(Boolean);
function pickProps(fm) {
    const out = {};
    for (const k of propKeys) {
        if (fm[k] == null) continue;
        const vals = (Array.isArray(fm[k]) ? fm[k] : [fm[k]]).map(v => String(v).trim()).filter(Boolean);
        if (vals.length) out[k] = vals;
    }
    return out;
}
const ATT_RE = new RegExp('\\.(' + [...attExt].join('|') + ')$', 'i');

function analyse(raw, rel) {
    raw = raw.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
    const { fm, body } = frontmatter(raw);
    const clean = stripCode(body);

    const links = new Set();
    for (const m of clean.matchAll(/!?\[\[([^\]\n]+?)\]\]/g)) {
        const target = m[1].split(/\\?\|/)[0].trim();
        if (!target || target.startsWith('#') || ATT_RE.test(target.split('#')[0])) continue;
        links.add(target);
    }
    const refs = new Set();
    for (const m of clean.matchAll(/!?\[\[([^\]\n]+?)\]\]/g)) { const t = m[1].split(/\\?\|/)[0].trim().split('#')[0]; if (t && ATT_RE.test(t)) refs.add(t); }
    for (const m of clean.matchAll(/!\[[^\]\n]*\]\(\s*<?([^)>\n]+?)>?(?:\s+"[^"]*")?\s*\)/g)) {
        const t = m[1].trim();
        if (t && !/^(https?:|data:|blob:|\/\/)/i.test(t) && ATT_RE.test(t.replace(/[?#].*$/, ''))) refs.add(t);
    }
    const tags = new Set(list(fm.tags));
    for (const m of clean.replace(/\[\[[^\]]*\]\]/g, ' ').matchAll(/(^|[^\p{L}\p{N}_&\/#\\.:-])#((?:[\p{L}\p{N}_\/-])*[\p{L}_\/-](?:[\p{L}\p{N}_\/-])*)/gu)) tags.add(m[2]);

    const headings = [];
    clean.split('\n').forEach(ln => { const h = ln.match(/^(#{1,6})[ \t]+(.+?)[ \t]*#*[ \t]*$/); if (h) headings.push([h[1].length, plainHeading(h[2])]); });

    const plain = t => t
        .replace(/!\[\[[^\]]*\]\]/g, ' ').replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
        .replace(/\[\[([^\]|]*)(?:\\?\|([^\]]*))?\]\]/g, (m, a, b) => b || a.replace(/^#/, '').replace(/#\^?/g, ' > '))
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/<[^>]+>/g, ' ')
        .replace(/^#{1,6}[ \t]+/gm, '').replace(/^>\s?(\[![\w-]+\][+-]?)?/gm, '').replace(/[*_~=]{1,3}/g, '')
        .replace(/\s+\^[A-Za-z0-9_-]+$/gm, '').replace(/\s+/g, ' ').trim();
    const firstPara = clean.split(/\n\s*\n/).map(p => p.trim()).find(p => p && !/^#{1,6}\s/.test(p) && plain(p)) || '';
    const excerpt = plain(firstPara).slice(0, cfg.excerptLength);
    const searchText = plain(body.replace(/%%[\s\S]*?%%/g, '')).slice(0, cfg.searchTextLimit);

    return {
        aliases: list(fm.aliases || fm.alias), tags: [...tags], links: [...links], refs: [...refs], headings, excerpt, searchText, props: pickProps(fm)
    };
}

/* ---- main */
const files = [];
await walk(root, '', files);
files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const notes = [], attachments = [], search = {}, noteRefs = new Map(), propsMap = {};
for (const rel of files) {
    const ext = path.extname(rel).slice(1).toLowerCase();
    if (ext === 'md') {
        const title = path.basename(rel, path.extname(rel));
        const stat = await fs.stat(path.join(root, rel));
        if (under(rel, hide)) { notes.push({ path: rel, title, hidden: true }); continue; }
        const a = analyse(await fs.readFile(path.join(root, rel), 'utf8'), rel);
        const n = { path: rel, title };
        if (a.aliases.length) n.aliases = a.aliases;
        if (a.tags.length) n.tags = a.tags;
        if (a.links.length) n.links = a.links;
        if (a.headings.length) n.headings = a.headings;
        if (a.excerpt) n.excerpt = a.excerpt;
        n.mtime = Math.round(stat.mtimeMs / 1000);
        notes.push(n);
        search[rel] = a.searchText;
        if (Object.keys(a.props).length) propsMap[rel] = a.props;
        if (a.refs.length) noteRefs.set(rel, a.refs);
    } else if (attExt.has(ext)) attachments.push(rel);
}

const lowFiles = attachments.map(low), pathSet = new Set(lowFiles), baseSet = new Set(attachments.map(p => low(path.posix.basename(p))));
function hasFile(ref) {
    let p = ref; try { p = decodeURIComponent(p); } catch (e) {}
    p = low(p.replace(/[?#].*$/, '').replace(/^\.?\//, ''));
    if (pathSet.has(p)) return true;
    if (p.includes('/') && lowFiles.some(f => f.endsWith('/' + p))) return true;
    return baseSet.has(low(path.posix.basename(p)));
}
const missing = [];
for (const [note, refs] of noteRefs) for (const ref of refs) if (!hasFile(ref)) missing.push({ note, ref });

const hash = crypto.createHash('sha1').update(JSON.stringify([notes.map(n => ({ ...n, mtime: 0 })), attachments, search])).digest('hex');
const outIndex = path.join(root, cfg.output), outSearch = path.join(root, cfg.searchOutput);

let previous = null;
try { previous = JSON.parse(await fs.readFile(outIndex, 'utf8')); } catch (e) {}
const same = previous && previous.hash === hash;
const generated = same ? previous.generated : new Date().toISOString();

const body = '{\n"version":1,\n"generated":' + JSON.stringify(generated) + ',\n"hash":' + JSON.stringify(hash) +
    ',\n"notes":[\n' + notes.map(n => JSON.stringify(n)).join(',\n') + '\n],\n"files":' + JSON.stringify(attachments) + ',\n"missing":' + JSON.stringify(missing.slice(0, 300)) + '\n}\n';
await fs.writeFile(outIndex, body);
await fs.writeFile(outSearch, JSON.stringify({ version: 1, docs: search }));

// notes-props.json: only the front-matter lists the formula / YouTube features need (a separate, small file so the main index stays light)
const outProps = path.join(root, cfg.propsOutput || 'notes-props.json');
const propsHash = crypto.createHash('sha1').update(JSON.stringify([propKeys, propsMap])).digest('hex');
let prevProps = null;
try { prevProps = JSON.parse(await fs.readFile(outProps, 'utf8')); } catch (e) {}
const propsGenerated = prevProps && prevProps.hash === propsHash ? prevProps.generated : new Date().toISOString();
await fs.writeFile(outProps, '{\n"version":1,\n"generated":' + JSON.stringify(propsGenerated) + ',\n"hash":' + JSON.stringify(propsHash) + ',\n"keys":' + JSON.stringify(propKeys) + ',\n"notes":{\n' +
    Object.keys(propsMap).map(p => JSON.stringify(p) + ':' + JSON.stringify(propsMap[p])).join(',\n') + '\n}\n}\n');

const hidden = notes.filter(n => n.hidden).length;
const tags = new Set(notes.flatMap(n => n.tags || []));
console.log(`${cfg.output}: ${notes.length - hidden} notes (+${hidden} hidden), ${attachments.length} attachments, ${tags.size} tags`);
if (missing.length) {
    console.log(`WARNING: ${missing.length} image/file reference(s) in notes do not match any file in the repo:`);
    missing.slice(0, 15).forEach(x => console.log(`  ${x.ref}   (in ${x.note})`));
    if (missing.length > 15) console.log(`  ...and ${missing.length - 15} more (see "missing" in ${cfg.output})`);
}
console.log(`${cfg.propsOutput || 'notes-props.json'}: ${Object.keys(propsMap).length} note(s) with ${propKeys.join(' / ') || '(no keys)'}`);
const propsSame = !!prevProps && prevProps.hash === propsHash;
console.log(same && propsSame ? 'No changes since the last run.' : 'Index updated. Commit notes-index.json, notes-search.json and ' + (cfg.propsOutput || 'notes-props.json') + '.');
