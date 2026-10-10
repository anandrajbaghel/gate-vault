# web-script

All browser scripts for the GATE site that are **not** the simulator itself.
The simulator keeps living in `index.html`, `app.js` and `styles.css` at the repo root.

## Folder rules

| Folder | What goes there |
|---|---|
| `shared/` | Small helpers used by **more than one** feature (DOM helpers, theme picker, modal/settings builders). Never feature logic. |
| `notes/` | The notes reader served at `/notes` (one file per job: index, loader, markdown, router, explorer, panels, reader, search, preview, settings). |
| `tools/` | Node scripts you run on your computer (not shipped to the browser): `build-notes-index.mjs` + `notes.config.json`. |

**When to add a new folder:** one folder per feature (`web-script/pyq/`, `web-script/bookmarks/` ...).
If two features need the same helper, move it into `shared/`. Scripts never reach into another feature's folder.

## Notes reader

- Page: `notes.html` (repo root) -> `https://<user>.github.io/gate-vault/notes`
- It needs `notes-index.json` and `notes-search.json` in the repo root. Create/refresh them after changing notes:

      node web-script/tools/build-notes-index.mjs

  then commit and push the two JSON files together with your notes.
- Edit `web-script/tools/notes.config.json` to choose what is excluded, or hidden-but-linkable (e.g. question papers).
- Read only: there is no editing code anywhere in the reader.
