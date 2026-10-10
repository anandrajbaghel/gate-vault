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
    output: 'notes-index.json', searchOutput: 'notes-search.json', excerptLength: 200, searchTextLimit: 20000
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
const unq = v => { v = String(v).trim(); const m = v.match(/^(["'])([\s\S]*)\1$/); return m ? m[2] : v; };
function frontmatter(raw) {
    const m = raw.match(/^---[ \t]*\n(?:([\s\S]*?)\n)?(?:---|\.\.\.)[ \t]*(?:\n|$)/);
    if (!m) return { fm: {}, body: raw };
    const fm = {}, lines = (m[1] || '').split('\n');
    for (let i = 0; i < lines.length;) {
        const k = lines[i].match(/^([^\s#:][^:]*?):(?:[ \t]+(.*)|[ \t]*)$/); i++;
        if (!k) continue;
        const key = k[1].trim().toLowerCase(), val = (k[2] || '').trim();
        if (val === '') { const arr = []; while (i < lines.length && /^[ \t]*-(\s|$)/.test(lines[i])) { arr.push(unq(lines[i].replace(/^[ \t]*-[ \t]*/, ''))); i++; } fm[key] = arr; }
        else if (/^\[.*\]$/.test(val)) fm[key] = val.slice(1, -1).split(',').map(unq).filter(Boolean);
        else fm[key] = unq(val);
    }
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
        aliases: list(fm.aliases || fm.alias), tags: [...tags], links: [...links], refs: [...refs], headings, excerpt, searchText
    };
}

/* ---- main */
const files = [];
await walk(root, '', files);
files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const notes = [], attachments = [], search = {}, noteRefs = new Map();
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

const hidden = notes.filter(n => n.hidden).length;
const tags = new Set(notes.flatMap(n => n.tags || []));
console.log(`${cfg.output}: ${notes.length - hidden} notes (+${hidden} hidden), ${attachments.length} attachments, ${tags.size} tags`);
if (missing.length) {
    console.log(`WARNING: ${missing.length} image/file reference(s) in notes do not match any file in the repo:`);
    missing.slice(0, 15).forEach(x => console.log(`  ${x.ref}   (in ${x.note})`));
    if (missing.length > 15) console.log(`  ...and ${missing.length - 15} more (see "missing" in ${cfg.output})`);
}
console.log(same ? 'No changes since the last run.' : 'Index updated. Commit notes-index.json and notes-search.json.');
