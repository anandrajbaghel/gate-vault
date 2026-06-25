# VAULT_SPEC.md

# GATE Vault Specification

Version: 1.0

Status: Draft

---

# Purpose

GATE Vault is a community-maintained Obsidian knowledge base for GATE (Graduate Aptitude Test in Engineering) preparation.

The vault is designed to provide a structured, continuously improving learning resource while preserving each user's personal learning progress.

The repository serves as the single source of truth for official educational content.

The GATE Manager plugin is responsible for installing, updating, repairing, and managing the vault.

---

# Vision

The long-term goal is to create the highest quality open-source GATE knowledge base.

Contributors may include:

- Students
    
- GATE Toppers
    
- Teachers
    
- Professors
    
- Subject Experts
    

Every contribution is reviewed before being merged.

Repository quality is prioritized over contribution quantity.

---

# Repository Philosophy

The repository contains only community-maintained educational content.

The repository does **not** store user-specific study progress.

The repository should always remain deterministic.

Two users downloading the same release should receive identical repository content.

---

# Repository Ownership

The repository is owned by the maintainers.

Community members contribute through Pull Requests.

All Pull Requests require review before merging.

Direct commits to the protected branch should be avoided once public development begins.

---

# Versioning

Every official vault release is published through GitHub Releases.

Every release must have:

- Version number
    
- Release notes
    
- ZIP archive
    
- vault-manifest.json
    

The plugin installs only released versions.

The plugin never installs directly from the repository source.

---

# Repository Structure

The repository should maintain a clear and logical structure.

The exact folder hierarchy may evolve over time.

However, the following principles must always remain true:

- Educational content should remain organized by subject.
    
- Related resources should remain grouped together.
    
- Community templates should remain separated from plugin metadata.
    
- Plugin metadata must never be committed to the repository.
    

---

# Managed Content

Examples include:

- Subject Notes
    
- Theory
    
- Concepts
    
- Formula Sheets
    
- Examples
    
- PYQs
    
- Images
    
- Diagrams
    
- Dictionary
    
- Templates
    
- Syllabus
    
- Reading Material
    

These files are managed by the community.

---

# Hybrid Content

Some repository files contain both community-maintained information and user-maintained information.

Examples include:

- Trends
    
- Error Notes
    

These files require special update behaviour.

Their update strategy is defined by UPDATE_POLICY.md.

Hybrid files must never be blindly overwritten.

---

# User Content

Users are encouraged to create personal study material.

Examples:

- Personal Notes
    
- Scratch Pages
    
- Daily Revision Notes
    
- Custom Flashcards
    

These files are outside repository management.

The plugin must never modify or delete them automatically.

---

# Repository Metadata

Every release must contain:

vault-manifest.json

This file defines:

- Repository identity
    
- Version
    
- Compatibility
    
- Supported features
    
- Release information
    

The plugin uses this file to understand the vault.

The plugin should never rely on hardcoded repository assumptions.

---

# Update Philosophy

Repository updates must follow UPDATE_POLICY.md.

Repository content should evolve without destroying user work.

When automatic updates cannot safely preserve user modifications, the plugin must request user confirmation.

User work is always preferred over silent replacement.

---

# Naming Conventions

Names should be:

- Descriptive
    
- Consistent
    
- Human-readable
    

Avoid abbreviations unless they are universally understood in the GATE community.

---

# Community Standards

Contributors should aim for:

- Technical correctness
    
- Consistency
    
- Proper formatting
    
- Clear explanations
    
- Good linking
    
- Reusable notes
    
- Minimal duplication
    

Every contribution should improve the overall quality of the vault.

---

# Release Process

Official releases should be created only after review.

Every release should contain:

- Updated vault
    
- Updated manifest
    
- Release notes
    

The release archive is the only installation source supported by GATE Manager.

---

# Future Expansion

The repository architecture should allow future support for:

- Additional engineering disciplines
    
- Improved templates
    
- Better indexing
    
- Smarter update strategies
    
- Community-driven enhancements
    

without requiring major structural redesign.

---

# Guiding Principle

The repository is the canonical source of community knowledge.

The plugin exists to manage that knowledge.

Neither the repository nor the plugin should ever compromise user trust by silently discarding meaningful user work.
