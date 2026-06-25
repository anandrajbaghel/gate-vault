# SPEC.md

# GATE Manager Specification

Version: 2.0

Status: Draft

---

# Purpose

This document is the primary software specification for the GATE Manager project.

It defines the architecture, responsibilities, development philosophy, and implementation guidelines of the GATE Manager Obsidian plugin.

This document intentionally does not define repository behaviour or update algorithms.

Those are specified separately in:

- VAULT_SPEC.md
    
- UPDATE_POLICY.md
    

Together these documents form the complete project specification.

---

# Project Overview

GATE Manager is a production-quality Obsidian Community Plugin.

Its purpose is to install, maintain, update, repair and manage community-maintained Obsidian knowledge bases.

The first supported repository is GATE Vault.

Future repository support should require minimal architectural changes.

---

# Project Ecosystem

The project consists of three independent systems.

## 1. GATE Manager

Obsidian Community Plugin.

Responsibilities:

- Install vaults
    
- Update vaults
    
- Verify vaults
    
- Repair vaults
    
- Manage releases
    
- Preserve user work
    

---

## 2. GATE Vault

GitHub repository.

Responsibilities:

- Store community knowledge
    
- Accept reviewed contributions
    
- Publish releases
    
- Maintain educational content
    

Repository behaviour is defined in:

VAULT_SPEC.md

---

## 3. Update Engine

Responsible for:

- File comparison
    
- Merge strategies
    
- Conflict detection
    
- Restoration
    
- Preservation of user work
    

Behaviour is defined in:

UPDATE_POLICY.md

---

# Development Philosophy

The plugin should behave like a professional package manager.

Users should never need Git knowledge.

Users should never manually download ZIP files.

Every workflow should occur inside Obsidian.

The user experience should remain simple regardless of internal complexity.

---

# Design Principles

The architecture should prioritize:

- Simplicity
    
- Reliability
    
- Extensibility
    
- Maintainability
    
- Predictability
    

The plugin should never rely on assumptions that belong inside the repository.

Repository metadata should always drive plugin behaviour.

---

# Technology

Language:

JavaScript (ES6+)

Platform:

Obsidian Plugin API

No TypeScript.

No build system.

No transpilers.

Plugin files should remain directly editable.

---

# Repository Independence

The plugin should not contain repository-specific logic.

Repository information should be discovered through:

vault-manifest.json

The plugin should never hardcode:

- Folder names
    
- Subject names
    
- Resource locations
    
- Update strategies
    

---

# Installation Pipeline

The installation process follows these stages.

GitHub Release

↓

Download

↓

Archive Verification

↓

Extraction

↓

Vault Discovery

↓

Installation

↓

Metadata

↓

Cleanup

Every stage should have a single responsibility.

---

# Plugin Responsibilities

The plugin is responsible for:

- Repository communication
    
- Download management
    
- Archive verification
    
- Extraction
    
- Installation
    
- Updates
    
- Repair
    
- Restore
    
- Metadata
    
- Notifications
    

The plugin is NOT responsible for educational content.

---

# Internal Architecture

The architecture should separate responsibilities.

Examples include:

Plugin

GitHub Service

Download Manager

Verification Manager

Extraction Manager

Installation Manager

Metadata Manager

Cleanup Manager

Modal UI

Settings

Utility Functions

Each component should have one primary responsibility.

---

# User Interface

The interface should feel native to Obsidian.

Prefer official components.

Avoid unnecessary styling.

The ribbon icon should open GATE Manager.

Settings should configure behaviour.

The Manager window should perform actions.

---

# Error Handling

Failures should never silently continue.

Every operation should provide meaningful feedback.

When uncertainty exists,

preserve user work.

---

# Development Workflow

Development should proceed incrementally.

Every completed feature must leave the plugin in a working state.

Large architectural rewrites should be avoided.

New functionality should extend existing architecture rather than replace it.

---

# AI Development Guidelines

AI assistants should always:

Generate complete files.

Avoid pseudocode.

Avoid omitted sections.

Avoid placeholder implementations unless explicitly requested.

Write production-quality JavaScript.

Preserve existing functionality.

Never invent Obsidian APIs.

When uncertain,

prefer asking for clarification rather than making assumptions.

---

# Future Roadmap

The architecture should naturally support future features.

Examples include:

- Multiple vault repositories
    
- Selective installation
    
- Differential updates
    
- Restore official files
    
- Compare changes
    
- Backup
    
- Rollback
    
- Community news
    
- Release notes
    
- Repository statistics
    
- Integrity verification
    

These features should not require fundamental architectural redesign.

---

# Source of Truth

The project specification consists of:

SPEC.md

↓

VAULT_SPEC.md

↓

UPDATE_POLICY.md

Changes to architecture should be reflected in these documents before implementation whenever practical.

---

# Guiding Principle

The plugin exists to manage community knowledge safely and reliably.

Every design decision should prioritize user trust, maintainability, and long-term sustainability over short-term convenience.
