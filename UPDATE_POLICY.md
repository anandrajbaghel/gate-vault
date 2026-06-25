# UPDATE_POLICY.md

# GATE Vault Update Policy

This document defines how the GATE Manager plugin updates the community vault.
Every update operation must follow this policy.

---

# Philosophy

The GATE Vault is a community-maintained knowledge base.
Users are encouraged to personalize their study experience.
The updater must never destroy meaningful user work.
Whenever possible, community improvements and user progress should coexist.

---

# File Categories

Every file in the repository belongs to one of the following update categories.

---

## Category A — Community Notes

Examples

- Subject Notes
- Theory
- Formula Pages
- Concept Pages
- Derivations
- Examples
- PYQ Solutions

### Default Behaviour

Replace with the latest official version.

### If Locally Modified

Never overwrite automatically.

Prompt the user.

Available options:

- Keep My Version
- Replace with Official Version
- Compare Changes (future)

---

## Category B — Community Resources

Examples

- Images
- SVG Diagrams
- Templates
- Dictionary
- Question Papers
- Syllabus

### Behaviour

Always replace.
These files should never contain personal information.

---

## Category C — Hybrid Files

Examples

- `trends - *.md`
- `error - *.md`

These files contain both:

- Community-maintained information
- User-maintained study progress

These files must NEVER be overwritten.
Instead they must be merged.

---

# Hybrid File Merge Rules

Hybrid files must preserve user work while incorporating community updates.

---

## Preserve

User checkboxes

Example

[ ]
↓
[x]

must remain checked.

---

User tags

Examples

#slow

#careless

#important

must be preserved.

---

User notes

Any additional user text must be preserved.

---

## Update

New community questions
New links
New references
New community tags
New metadata
must be added.

---

## Remove

Community content removed in newer releases should only be removed if it has not been modified by the user.

Otherwise prompt the user.

---

# Merge Identity

Hybrid files must never be merged by line number.
Every entry must have a unique identity.
For trends files the primary identity is the linked question.

Example

[[ee_2025#^q24]]

For error files the identity is the referenced question or concept.

---

# User Files

Files created entirely by users are never touched.
Examples
Personal Notes
Scratch Notes
Custom Revision Notes
Daily Journal
These files are outside plugin management.

---

# Deleted Official Files

If an official file is deleted locally:
Do not immediately restore it.
During the next update:
Inform the user.
Offer:
Restore
Ignore
Remember my choice

---

# Unknown Files

If a file exists locally but not in the repository:
Ignore it.
Never delete unknown files.

---

# Conflicts

If automatic merging cannot be completed safely:
Keep the user's version.
Notify the user.
Never silently overwrite user work.

---

# Update Priority

The updater must prioritize:

1. Protect user work
2. Maintain repository integrity
3. Apply community improvements
4. Minimize user interaction

---

# Future Features

The update system may later support:

- Three-way merge
- Side-by-side comparison
- Restore official version
- Restore individual sections
- Version history
- Rollback

These features must remain compatible with this policy.

---

# Guiding Principle

If there is any uncertainty during an update,
the plugin must always prefer preserving user work over replacing it.

---
