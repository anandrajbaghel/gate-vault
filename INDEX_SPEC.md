# INDEX_SPEC.md

# GATE Vault Index Specification

Version: 1.0

Status: Draft

---

# Purpose

This document defines the structure of `vault-index.json`.

The index is the canonical inventory of all repository-managed content.

It is generated automatically before every release.

The plugin never generates this file.

The plugin trusts this file.

---

# Philosophy

Repository

↓

Repository Validator

↓

Repository Index Generator

↓

vault-index.json

↓

Plugin

The plugin never scans the extracted repository to discover managed files.

The repository explicitly publishes its inventory.

---

# Location

Repository Root

vault-index.json

---

# Generation

Generated automatically.

Never edited manually.

Every release must regenerate this file.

---

# Hash Algorithm

SHA-256

All file hashes must use SHA-256.

---

# Top Level Structure

vault-index.json contains:

formatVersion

version

generated

generatedAt

generator

statistics

entries

---

# formatVersion

Integer

Increment only for breaking format changes.

---

# version

Repository version.

Should match:

vault-manifest.json

---

# generated

Boolean.

Always true after successful generation.

---

# generatedAt

ISO-8601 timestamp.

Generation time.

---

# generator

Contains generator metadata.

Fields:

name

version

hashAlgorithm

Example

{
    "name": "generate-index.js",
    "version": "1.0.0",
    "hashAlgorithm": "SHA-256"
}

---

# Statistics

Contains:

files

directories

bytes

managedFiles

managedDirectories

---

# Entries

Entries is an array.

One entry per managed file.

Directories are optional.

Future versions may index directories.

---

# Entry Structure

Each entry contains:

path

type

ownership

hash

size

modified

---

# path

Repository relative path.

Example

1. Mathematics/Mathematics.md

---

# type

Possible values:

note

dictionary

trend

error

attachment

image

pdf

other

Future types may be added.

---

# ownership

Possible values:

repository

shared

user

special

Determined from vault-rules.json.

---

# hash

SHA-256

Hex string.

---

# size

Bytes.

---

# modified

ISO-8601 timestamp.

Repository file modification time.

---

# Ordering

Entries must be sorted alphabetically by path.

Generation must be deterministic.

---

# Excluded Files

Generator must ignore:

.git/

.github/

.obsidian/

tools/

README.md

SPEC.md

VAULT_SPEC.md

INDEX_SPEC.md

UPDATE_POLICY.md

CONTRIBUTING.md

LICENSE

vault-index.json

---

# Validation

Generator validates:

Duplicate paths

Missing paths

Empty hashes

Invalid ownership

Unknown file type

Invalid timestamps

Duplicate entries

Validation failure aborts generation.

---

# Future Compatibility

Future fields may include:

checksum

compression

mimeType

encoding

language

tags

dependencies

Unknown fields must be ignored by the plugin.

---

# Guiding Principle

The index is the canonical description of repository content.

The plugin trusts the index.

The generator guarantees the index.
