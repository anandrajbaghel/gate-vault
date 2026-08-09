---
tags:
  - gate-simulator
  - plugin-docs
plugin: GATE Simulator
aliases:
  - "Plugin : GATE Simulator"
---
### GATE Simulator — Plugin Guide

An Obsidian plugin that turns a vault of PYQ (Previous Year Question) notes into a self-grading mock-test simulator, with topic-aware analytics and an auto-assembled error notebook.

This note is a reference, not a tutorial to read top-to-bottom — jump to whichever section matches what you're trying to do.

---

### 1. Core idea: your vault is the source of truth

The plugin never stores question content itself. It reads three kinds of files already in your vault:

- **Year files** — the actual questions, one Obsidian block per question, embedded via `![[...]]`. This is the _only_ source of question content; everything else only _labels_ what's already here.
- **Answer key files** — JSON, one per year/set, used for grading.
- **Tag files** (Subject, Topic) — plain notes that just list links to questions, used to attach a Subject/Topic label. They never add new questions, only labels.

Because tagging is separate from content, you can restructure your Subject/Topic organization at any time without touching a single question.

---

### 2. Required folder structure

Set these paths in **Settings → GATE Simulator**:

|Setting|Purpose|Default|
|---|---|---|
|Year-wise folder|Canonical question content|`.../onlyQ/Year`|
|Subject-wise folder|Subject tag files|`.../onlyQ/Subject`|
|Topic-wise folder|Topic tag files|`.../onlyQ/Topic`|
|Answer key folder|JSON answer keys|`.../Answer Key/JSON`|
|Results folder|Analytics notes + Error Notebook|`Mock Results`|

#### 2.1 Year-wise files

One file per year (or per set, if a year has multiple papers, e.g. `ee_2016(1).md`, `ee_2016(2).md`). Each question is its own block, separated by `---`, containing exactly one embed:

```
---
![[ee_2026#^q14]]

---
![[ee_2026#^q15]]

---
```

The embed's block reference (`^q14`) must point to the actual question content elsewhere in your vault (text, options, images — anything Obsidian can embed).

**Block ID prefixes** (set in Settings) decide GA vs EE:

- `corePrefix` (default `q`) → core subject section
- `aptitudePrefix` (default `qga`) → General Aptitude section

#### 2.2 Answer key files (JSON)

One JSON file per year/set. Required fields:

```json
{
  "version": 1,
  "year": 2026,
  "subject": "EE",
  "set": null,
  "questions": {
    "q14": { "type": "MCQ", "marks": 1, "answer": "B" },
    "q30": { "type": "MSQ", "marks": 2, "answer": ["A", "C"] },
    "q45": { "type": "NAT", "marks": 2, "ranges": [[3.9, 4.1]] },
    "q60": { "type": "MTA", "marks": 2 }
  }
}
```

- `set`: use `null` if the year wasn't split into sets.
- `type`: one of `MCQ`, `MSQ`, `NAT`, `MTA` (Marks To All — ungraded, everyone gets full marks).
- `NAT` questions use `ranges` (a list of `[min, max]` pairs — multiple ranges allowed for multi-valued answers).
- A malformed key file is skipped entirely (with a console error) rather than silently mis-grading — better a "no key found" than wrong grading.

#### 2.3 Subject-wise & Topic-wise files

A tag file just lists links to questions — nothing else is required:

```
![[ee_2026#^q14]]

---
![[ee_2026#^q30]]

---
```

Both `![[embed]]` and plain `[[link]]` syntax work here, and the file doesn't need `---` separators — every wikilink to a question block anywhere on the page becomes a tag. This means an existing checklist-style note (checkboxes, hashtags, numbered list) works unmodified, as long as each question is referenced via `[[fileName#^blockId]]`.

The **label** attached to every question in that file is derived from the filename itself: `onlyQ - Frequency Response.md` or `trends - Frequency Response.md` → label `Frequency Response`. (The `onlyQ`/`trends` prefix is stripped automatically.)

#### 2.4 Connecting a Topic to a Subject

So Drill's Subject filter can narrow the Topic list, a Topic file should declare which Subject it belongs to — either or both:

- YAML: `subject: Control Systems` (or a list)
- A body wikilink: `[[Control Systems]]` anywhere in the note (only counted if it matches a real, already-known Subject label)

```yaml
---
subject:
  - "[[Control Systems]]"
---
```

A Topic with no declared Subject still works fine — it just only ever appears when Subject is set to "ALL".

#### 2.5 Connecting a Topic to a manual error log

If you keep a hand-written error log per topic, link it from the Topic file's frontmatter:

```yaml
---
error:
  - "[[error - Bode Plots]]"
---
```

The plugin resolves this link (via Obsidian's own link resolution — no filename guessing) and reads each line of the linked note as `[[ee_2016(1)#^q30]] <your note>`. The trailing text becomes that question's manual note.

**This connection is read-only.** The plugin never writes to either the Topic file or the linked error file — it only reads them each time the index rebuilds.

---

### 3. Selection algorithms

Chosen per-session from the setup screen. Every question gets a `Why selected` line explaining its own pick, regardless of algorithm.

- **Adaptive Priority (default)** — favors unattempted and low-mastery questions, deprioritizes ones you've already mastered.
- **Official Replication** — uniform random, used automatically by Exam Replication mode.
- **Random** — no weighting at all.
- **Mistake Focus** — favors questions you've gotten wrong before and haven't since mastered.
- **Spaced Repetition** — favors questions you haven't seen in a while, especially unmastered ones.
- **Weakness Boost** — favors question _categories_ (Section × Type × Marks) where your accuracy is lower.
- **Frequency × Weakness (by Topic)** — `(PYQ count under this Topic) × (how weak you are on it)`. Implements "high frequency + weak = first priority; high frequency + strong = quick revision only; low frequency + weak = later but not ignored" directly. If a Subject filter is active, the frequency/accuracy numbers used are scoped to that Subject.

---

### 4. Test modes

- **Exam Replication** — full 65-question mock, official section/type/marks ratios enforced.
- **Custom Drill** — filter by Institute, Subject, Topic, Freshness, Year range, then practice freely. Supports **Untimed practice** (no countdown, no auto-submit — for concept-building passes).
- **Pattern Training** — target a specific question type and/or marks value.
- **Mistake Review** — revisit past incorrect answers.

#### 4.1 Year range filtering

The **Year range** dropdown offers presets (`2010–2016`, `2017–2022`, `2023–2026`, or a custom entry) matching a "concept-building → trend-understanding → mock-style" progression. **Custom** accepts a flexible, comma-separated selector:

- `2014` → every set of 2014
- `2017-2020` → a range (every set within it)
- `2014(3)` → only that specific set/paper within 2014
- All of the above can be mixed: `2014(3), 2017-2020, 2023`

---

### 5. During a test

- **Search bar** matches year, qid, section, type, and any Subject/Topic tag — typing a topic name (e.g. "Network Theorem") filters the question palette to just that topic, not only years.
- **Mark for Review** lives in the bottom tray, next to Previous / Clear / Pause / Save & Next.
- **Pause** saves the session (including elapsed time and untimed state) and returns to setup; resuming restores it exactly, including whether the timer should be running at all.

---

### 6. After submitting: mistake tagging

If any question was wrong, a short popup walks through each one (skippable, per-question or all-remaining):

1. **Pick a tag** — from a list you define in Settings (see §7). Tags can be flat or nested (`Parent/Child`); picking just the parent is always valid.
2. **Optional one-line takeaway** — "correct idea" in your own words, written while it's fresh.

The actual question renders inline in the popup (not just its qid), so you always know what you're tagging.

Both are saved per-question in your history file, echoed into that session's analytics note, and rolled up on the Dashboard.

---

### 7. Settings reference

|Setting|What it controls|
|---|---|
|Year/Subject/Topic-wise folder|Where content and tag files live|
|Answer key folder|Where JSON keys live|
|Results folder|Where analytics notes + Error Notebook are saved|
|Core / Aptitude prefix|Block-ID prefixes that decide EE vs GA|
|Selection algorithm|Default algorithm for new sessions|
|Prompt for a mistake tag after each test|On/off switch for the whole popup|
|Tag list|Comma-separated; use `Parent/Child` to group related reasons|
|Allow nested sub-tags|On: parent tags can optionally drill into a sub-tag. Off: every list entry is a flat tag, even ones containing `/`|

---

### 8. Dashboard

Opened via the bar-chart ribbon icon. Shows:

- Score-over-time chart
- Accuracy breakdown by Section / Type / Marks
- **Mistake Type Breakdown** — your most common tagged reasons for wrong answers, ranked
- **Priority Revision (Recent Mistakes)** table — QID, year, type, marks, wrong count, top mistake tag, takeaway (hover for full text), time spent, last attempt
- **Export Error Notebook** button (see §9)

---

### 9. Error Notebook export

Command palette: **"Export Error Notebook"**, or the Dashboard button. Regenerates a single note (`Error Notebook.md` in your Results folder) every time it's run — safe to re-run anytime; it's never read back in as a data source.

Grouped by Topic (weakest-accuracy topic first), each section splits into:

- **⚠️ Needs a manual write-up** — questions ever wrong or tagged, with no matching entry in your linked manual error log yet. This is the actionable to-do list.
- **Logged** — questions that already have a manual note, pulled straight from your `error - X.md` file via the link described in §2.5.

A topic header reads like `Bode Plots (9 PYQs · 6/9 correct = 67%)` — always the exact fraction, never a bare percentage, since attempts can exceed question count if you've retried a question across sessions.

---

### 10. Suggested workflow

Loosely mirrors a "PYQs as syllabus map" approach:

1. **Pass 1 — Topic-wise, untimed.** Custom Drill, Subject/Topic filters on, Untimed practice on.
2. **Tag every mistake** as you go — the popup takes a few seconds and builds your error notebook automatically.
3. **Check Frequency × Weakness** (or the Topic dropdown's inline stats) to see which topic to hit next — high count + low accuracy first.
4. **Pass 2 — Mixed, timed.** Pattern Training or a broader Drill, algorithm set to Adaptive or Mistake Focus.
5. **Pass 3 — Full mocks, recent years.** Exam Replication, Year range set to `2023-2026`.
6. **Revisit the Error Notebook** regularly — write up anything still sitting in "⚠️ Needs a manual write-up."