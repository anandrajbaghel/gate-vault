# Vault Index Generator Specification

## Purpose

Automatically generate `vault-index.json` whenever changes are pushed to the `main` branch.

The generator is executed by GitHub Actions.

The generated file is committed automatically if it has changed.

---

# Input

## vault-rules.json

The generator must read:

- include paths
- exclude paths

The generator must never hardcode repository folders.

---

## vault-manifest.json

The generator must read:

- version

The version inside `vault-index.json` must always match
`vault-manifest.json`.

---

# Files Included

Only files inside the include list.

Files matching any exclude rule are ignored.

---

# Excluded Files

Excluded files must never appear inside
`vault-index.json`.

---

# Hash Algorithm

SHA-256

---

# Entry Format

Each managed file produces one entry.

Example

{
    "path": "1. Mathematics/Example.md",
    "sha256": "<sha256>",
    "size": 1234
}

---

# Sorting

Entries must be sorted alphabetically by path.

Generation must be deterministic.

Running the generator twice without repository changes must produce identical output.

---

# Statistics

Generate

- files
- directories
- bytes

---

# Output

vault-index.json

Structure

{
    "formatVersion": 1,
    "version": "<vault version>",
    "generated": true,
    "generatedAt": "<UTC ISO8601>",
    "entries": [],
    "statistics": {}
}

---

# Commit Behaviour

GitHub Action must commit only if
vault-index.json changed.

Otherwise do nothing.

---

# Failure Conditions

Fail if

- vault-rules.json missing
- vault-manifest.json missing
- invalid JSON
- duplicate paths
- unreadable file

---

# Logging

Log

- files scanned
- files indexed
- files skipped
- directories scanned
- total bytes
- elapsed time
