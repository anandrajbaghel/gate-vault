# web-script

Browser scripts for the GATE site that are **not** the simulator itself (the simulator stays in `index.html`, `app.js`, `styles.css`).

```
notes.html                     the /notes page (loads only core/boot.js)
web-script/
  shared/                      helpers used by more than one feature (DOM, theme, modal/menu/settings builders)
  notes/
    notes.css                  styles of the core
    core/                      always on: boot, events, settings, loader, cache, index, router, slots, commands,
                               markdown engine, finder, layout, reader, plugin manager, settings window, app
    plugins/
      plugins.json             the list of features, in load order
      <feature>/               one folder per feature: manifest.json, plugin.js, plugin.css (optional)
  tools/                       Node scripts that run on GitHub (index builder)
```

## Publishing an update
In `notes.html` change the number in `boot.js?v=4` (it also versions every plugin file) and in `notes.css?v=4`.

## Safe mode
Open `/notes?safe` to start with every feature off. Use it if a feature ever breaks the page. Settings -> General has a "Leave safe mode" button.

## Adding a feature (plugin)
1. Create `web-script/notes/plugins/<id>/manifest.json`:
```json
{
  "name": "My feature",
  "description": "One line shown in Settings.",
  "group": "Reading",
  "version": "1.0.0",
  "defaultEnabled": true,
  "requires": [],
  "styles": ["plugin.css"],
  "script": "plugin.js",
  "settings": [
    { "key": "word", "type": "text", "name": "Word", "desc": "Shown in the status bar", "default": "hi" }
  ]
}
```
   `settings` types: `toggle`, `select` (with `options: [["value","Label"]]`), `slider` (`min`, `max`, `step`), `text`. Each one appears automatically on the feature's own Settings tab. Use `"scripts": ["a.js", "plugin.js"]` for several files (loaded in order).
2. Create `plugin.js`:
```js
GateNotes.plugins.define('<id>', {
  onload(plugin) {
    plugin.addStatusItem({ id: 'x', order: 5, render: ctx => ctx ? plugin.settings.get('word') : null });
  },
  onunload() {}          // optional - everything registered through `plugin` is removed automatically
});
```
3. Add `"<id>"` to `plugins/plugins.json`. Done - it shows up in Settings -> Core plugins with its own switch.

### What a plugin can do (the `plugin` object)
| Call | Purpose |
|---|---|
| `plugin.addSidebarTab('left'\|'right', { id, title, order, mount(pane, api) })` | a tab in a sidebar (`api.setBadge(n)`) |
| `plugin.addTopbarButton({ id, icon, title, order, onClick })` | button in the top bar |
| `plugin.addStatusItem({ id, order, render(ctx) })` | text in the bar under the note |
| `plugin.addArticleSection('before'\|'after', { id, order, render(ctx) })` | a block above/below the note text |
| `plugin.addMarkdownPostProcessor(fn(container, ctx), { order })` | change the rendered HTML of notes, embeds and previews |
| `plugin.addCodeBlockProcessor(lang, fn(source, ctx) -> Node)` | draw a fenced code block yourself (`ctx.afterAttach(fn)` runs once it is on the page) |
| `plugin.addCommand({ id, name, hotkeys: ['Mod+K'], run })` | named action with optional shortcut |
| `plugin.addFinderMode({ id, title, query, choose })` | a mode in the type-to-find window |
| `plugin.addSettingsTab({ id, title, render(container) })` | a custom Settings tab |
| `plugin.on(event, fn)` | `note:opened`, `note:closed`, `index:changed`, `heading:active`, `heading:reveal`, `folder:reveal`, `plugins:ready` ... |
| `plugin.registerDomEvent(target, type, fn)` | DOM listener that is removed on switch-off |
| `plugin.registerService(name, api)` / `GateNotes.services.get(name)` | let other features use yours |
| `plugin.settings.get(key)` / `.set(key, v)` / `.on(fn)` | your saved options (defaults from the manifest) |
| `plugin.addBodyClass(cls)`, `plugin.addDisposer(fn)` | extra cleanup |

Every callback is wrapped: an error in a plugin is reported, not fatal. A plugin that throws while starting is switched off automatically.

## Callouts
Edit `plugins/callouts/callouts.custom.json` to add types (name, colour, icon). See the comment at the top of `plugins/callouts/plugin.js`.

## Notes index
`tools/build-notes-index.mjs` (run by the "Build notes index" GitHub Action) writes `notes-index.json` and `notes-search.json`. Settings: `tools/notes.config.json`.
