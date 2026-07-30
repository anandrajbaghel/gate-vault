# Schema

### GATE Vault Answer Key Schema (Version 1)

> **Status:** Stable
>
> This document defines the canonical JSON format used by the GATE Vault Exam Simulator.
>
> Every answer key file **MUST** follow this specification.
>
> The plugin will use this file as the **single source of truth** while grading questions extracted from `onlyQ - *.md`.

---

### Design Goals

The schema is designed to be:

- Human readable
- Machine readable
- Easy to validate
- Easy to generate automatically
- Easy to diff on GitHub
- Future-proof
- Independent of question ordering

The plugin should **never** rely on question position inside the file.

Instead it should always use the embedded block id extracted from

```md
![[ee_2026#^q37]]
```

or

```md
![[ee_2026#^qga4]]
```

as the lookup key.

---

### Folder Structure

```
JSON/
├── ak_2010.json
├── ak_2011.json
├── ak_2014(1).json
├── ak_2014(2).json
├── ak_2014(3).json
├── ...
└── ak_2026.json
```

Every question paper has exactly one answer key.

Subject-wise files **DO NOT** require separate answer keys since they reference questions already present in yearly papers.

---

### File Naming

Without Set

```
ak_2026.json
```

With Set

```
ak_2015(1).json
ak_2015(2).json
```

The plugin should determine the filename from the selected `onlyQ - *.md`.

---

### JSON Structure

```json
{
    "version": 1,
    "year": 2026,
    "subject": "EE",
    "set": null,

    "questions": {

    }
}
```

---

### Top-Level Fields

#### version

Schema version.

Used for future migration.

Example

```json
"version":1
```

---

#### year

Paper year.

```json
"year":2026
```

---

#### subject

Currently always

```json
"subject":"EE"
```

Future subjects may use

```
EC
ME
CE
IN
CS
...
```

---

#### set

When no set exists

```json
"set":null
```

Otherwise

```json
"set":1
```

or

```json
"set":2
```

etc.

---

### Questions Object

The `questions` object stores every answer.

The **key MUST always be the Obsidian block id**.

Examples

```
q1
q2
q11
q47

qga1
qga2
qga10
```

If in future the vault changes

```
qga1
```

to

```
gaq1
```

the plugin should normalize the block id during lookup.

The JSON format itself should **NOT** change.

---

### Question Types

Supported values

```
MCQ
MSQ
NAT
MTA
```

Unknown values should throw an error.

---

### MCQ

```json
{
    "type":"MCQ",
    "answer":"A",
    "marks":1
}
```

Allowed answer values

```
A
B
C
D
```

Multiple valid options

```json
{
    "type":"MCQ",
    "answer":[
        "A",
        "C"
    ],
    "marks":2
}
```

The plugin should accept **any** option present in the array.

---

### MSQ

```json
{
    "type":"MSQ",
    "answer":[
        "A",
        "B",
        "D"
    ],
    "marks":2
}
```

Order has **no meaning**.

The plugin must compare sets instead of strings.

Example

```
ABD
BAD
DBA
```

All are equivalent.

---

### NAT

A NAT answer is represented as one or more numeric ranges.

Single range

```json
{
    "type":"NAT",
    "ranges":[
        [5.0,5.3]
    ],
    "marks":2
}
```

Exact value

Official answer

```
750 to 750
```

becomes

```json
{
    "type":"NAT",
    "ranges":[
        [750,750]
    ],
    "marks":2
}
```

Negative values

```
-2.1 to -4
```

becomes

```json
{
    "type":"NAT",
    "ranges":[
        [-2.1,-4]
    ],
    "marks":1
}
```

Multiple ranges

Official

```
-2.1 to -4
OR
-1 to 4
```

becomes

```json
{
    "type":"NAT",
    "ranges":[
        [-2.1,-4],
        [-1,4]
    ],
    "marks":2
}
```

The plugin should evaluate each range independently.

Range order does not matter.

The plugin should internally compute

```
minimum
maximum
```

before comparison.

---

### MTA (Marks To All)

```json
{
    "type":"MTA",
    "marks":2
}
```

No answer field exists.

If official answer key declares

```
MTA
```

every attempted and unattempted response receives full marks.

---

### Marks

Allowed values

```
1
2
```

Currently GATE EE uses only these values.

Future versions may support decimal marks.

---

### Negative Marking

Negative marks are intentionally **NOT** stored.

The plugin must compute them using official GATE rules.

Current mapping

| Type | Marks | Negative |
|------|------:|---------:|
| MCQ | 1 | 0.33 |
| MCQ | 2 | 0.67 |
| MSQ | 1 | 0 |
| MSQ | 2 | 0 |
| NAT | 1 | 0 |
| NAT | 2 | 0 |
| MTA | Any | 0 |

This avoids duplicated information and prevents inconsistent answer keys.

---

### Example

```json
{
    "version":1,
    "year":2026,
    "subject":"EE",
    "set":null,

    "questions":{

        "qga1":{
            "type":"MCQ",
            "answer":"A",
            "marks":1
        },

        "q11":{
            "type":"MCQ",
            "answer":"C",
            "marks":1
        },

        "q30":{
            "type":"MSQ",
            "answer":[
                "A",
                "B",
                "D"
            ],
            "marks":1
        },

        "q33":{
            "type":"NAT",
            "ranges":[
                [47.5,48.0]
            ],
            "marks":1
        },

        "q58":{
            "type":"MTA",
            "marks":2
        }
    }
}
```

---

### Validation Rules

Every answer key **MUST** satisfy:

- `version` is an integer.
- `year` is a valid paper year.
- `subject` is non-empty.
- `set` is either `null` or an integer.
- Every question key is unique.
- Every question key corresponds to an existing block id.
- Every question has exactly one supported type.
- Every question has valid marks.
- Every MCQ answer is valid.
- Every MSQ option is unique.
- Every NAT range contains exactly two numbers.
- Every MTA contains no answer field.

---

### Plugin Responsibilities

The plugin should:

- Parse `onlyQ - *.md`.
- Extract every embedded block id.
- Normalize block ids if naming conventions change in the future (e.g. `qga1` → `gaq1`).
- Load the corresponding `ak_YYYY(Set).json`.
- Perform O(1) lookup using the block id.
- Grade according to the schema.
- Throw descriptive errors for malformed answer keys.

The plugin should **never** infer answers from filenames, question order, or section ordering.

Only the block id and the answer key JSON determine grading.

---

### Schema Version History

#### Version 1

Initial stable schema.

Supports:

- MCQ
- MSQ
- NAT
- Multiple NAT ranges
- Exact NAT values
- MTA
- Set papers
- Non-set papers
- Future block-id normalization
