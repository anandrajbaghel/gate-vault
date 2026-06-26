# INDEX_SPEC.md

# GATE Vault Repository Index Specification

Version: 1.0

Status: Draft

---

# Purpose

This document defines the repository inventory used by GATE Manager.

The index represents the complete contents of a released vault.

It is generated automatically.

It must never be edited manually.

---

# Philosophy

The index is not policy.

The index is not metadata.

The index is an inventory.

It tells the plugin exactly what exists inside the repository.

---

# Generation

The index is generated during every release.

It always represents the released repository.

Manual editing is prohibited.

---

# Repository Scope

Every repository-managed file appears exactly once.

Repository-owned files

Shared files

Special files

All appear in the index.

User-owned files never appear because they are not part of the repository.

---

# Root Structure

The index contains:

Repository Version

Generation Time

Generator Version

Repository Hash

Entries

Statistics

---

# Entry

Every repository file becomes one entry.

Each entry contains:

Path

Type

Size

SHA-256 Hash

Ownership

Rule Reference

Version Introduced

Last Modified Version

Future fields may be added.

---

# Path

Paths are always repository-relative.

Example:

1. Mathematics/Linear Algebra/Vector Space.md

Never absolute paths.

---

# Type

Examples:

Markdown

Image

PDF

JSON

Folder

Future types may be added.

---

# Hash

Every file stores a SHA-256 hash.

Hashes are used for:

Update detection

Conflict detection

Verification

Integrity

The planner never compares timestamps.

---

# Ownership

Copied from vault-rules.json.

Never inferred.

Repository

Shared

Special

User-owned files never appear.

---

# Rule Reference

Each entry references the rule responsible for the file.

Example:

Repository Notes

Shared Error

Shared Trends

Special Obsidian

This avoids duplicated policy.

---

# Statistics

The index stores:

Total Files

Total Directories

Total Bytes

Repository Version

Generated Timestamp

Generator Version

---

# Validation

The planner verifies:

Every indexed file exists.

No duplicate paths.

Valid hashes.

Referenced rule exists.

Invalid indexes are rejected.

---

# Planner Usage

Planner reads:

vault-rules.json

↓

vault-index.json

↓

Local Vault

↓

Install Plan

Planner never scans the repository to infer ownership.

Planner trusts the published index.

---

# Update Detection

Repository Hash

↓

Installed Hash

↓

Current Local Hash

Three-way comparison determines:

Skip

Update

Conflict

Archive

Never rely on timestamps.

---

# Archive Detection

If a repository-owned file existed previously but no longer exists in the current index:

Create Archive action.

Never delete automatically.

---

# Extensibility

Future fields may include:

Digital Signature

Compression Metadata

Language

Tags

Dependencies

Package Groups

Future plugins should ignore unknown optional fields.

---

# Generation Requirements

Index generation must be deterministic.

Generating twice without repository changes must produce identical output.

---

# Guiding Principle

The index describes the repository.

The rules describe behaviour.

The planner combines both.

Neither file should duplicate the responsibility of the other.
