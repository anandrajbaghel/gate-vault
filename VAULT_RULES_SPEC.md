# VAULT_RULES_SPEC.md

# GATE Vault Rules Specification

Version: 1.0

Status: Draft

---

# Purpose

This document defines the rule system that controls how GATE Manager interacts with a vault.

The plugin must never hardcode repository behaviour.

Instead, the repository publishes its own rules.

The plugin executes those rules.

---

# Philosophy

The vault describes itself.

The plugin is a generic execution engine.

Repository behaviour must be configurable without modifying plugin code.

---

# Rule Resolution

Rules are evaluated from the most specific path to the least specific path.

Example:

.obsidian/workspace.json

↓

.obsidian

↓

Vault Root

The first matching rule wins.

---

# Rule Types

Rules may target:

Folder

File

Extension

Future rule types may be added.

---

# Folder Rule

A folder rule automatically applies to every child.

Unless overridden.

Example:

1. Mathematics

↓

Everything inside

↓

Repository Ownership

---

# File Rule

A file rule overrides any folder rule.

Example:

.obsidian

↓

workspace.json

↓

Special Ownership

---

# Ownership Types

Repository

Shared

User

Special

Exactly one ownership type must apply.

---

# Repository Ownership

Repository owns the file.

Allowed actions:

Install

Update

Restore

Archive

Conflict Detection

Planner manages lifecycle.

---

# Shared Ownership

Repository provides template.

User provides personal data.

Installer installs template.

Updates require Merge Engine.

Never overwrite automatically.

Examples:

Error Logbook

PYQs Pattern Book

---

# User Ownership

Plugin never modifies these files.

Never install.

Never update.

Never archive.

Never restore.

Planner ignores them.

---

# Special Ownership

Requires dedicated handling.

Examples:

.obsidian

workspace.json

Future configuration files.

---

# Merge Strategy

Shared ownership must specify:

mergeStrategy

Examples:

trend

error

Future strategies may be added.

Planner never performs merges.

---

# Archive Policy

Repository-owned files removed from later releases must move into:

Archive/

Removed in <Version>/

Never permanently delete.

---

# Conflict Policy

Repository-owned files modified by the user become:

Conflict

Planner never resolves conflicts.

Execution Manager asks the user.

---

# Installation Policy

Repository ownership:

Install if missing.

Update if unchanged.

Conflict if modified.

Archive if removed.

---

# Ignore Policy

User ownership:

Ignore always.

---

# Inheritance

Folder rules automatically propagate to children.

File rules override folder rules.

No recursive evaluation after a file rule matches.

---

# Rule Object

Each rule contains:

Path

Target Type

Ownership

Merge Strategy

Install Policy

Archive Policy

Update Policy

Priority

Description

Future fields may be added.

---

# Validation

Every rule must contain:

Path

Ownership

Target Type

Planner rejects invalid rule sets.

---

# Extensibility

Future ownership types may be added.

Future policies may be added.

Older plugins should safely ignore unknown optional fields.

---

# Guiding Principle

The vault defines behaviour.

The plugin executes behaviour.

Repository policy must never be hardcoded inside GATE Manager.
