---
tags:
  - control-systems
  - system-modeling
  - block-diagram
  - system-reduction
created: 2025-09-25
aliases:
  - Block Diagram Algebra
  - Block Diagram Simplification
subject: "[[Control Systems]]"
parent:
  - Control System Modeling
modified: 2026-08-04T09:12:59
---
### Block Diagram Reduction Techniques
#control-systems/modeling #block-diagram-reduction

> Block diagram reduction is a systematic process of simplifying a complex block diagram into a single equivalent block that represents the overall system transfer function from input to output. This is achieved by applying a set of algebraic rules, often referred to as block diagram algebra.

#### Rules for Block Diagram Reduction
#block-diagram/rules

The following rules are used to manipulate and simplify block diagrams.

**Rule 1: Combining Blocks in Cascade (Series)**
Blocks connected in series are multiplied to get the equivalent block.
-   **Before:** `R(s) -> [ G₁(s) ] -> [ G₂(s) ] -> C(s)`
-   **After:** `R(s) -> [ G₁(s)G₂(s) ] -> C(s)`
    $$\boxed{\quad G_{eq}(s) = G_1(s) G_2(s) \quad}$$

**Rule 2: Combining Blocks in Parallel**
Blocks connected in parallel are added or subtracted.
-   **Before:** A single input splits, goes through $G_1(s)$ and $G_2(s)$, and the outputs are combined at a summing point.
-   **After:** `R(s) -> [ G₁(s) ± G₂(s) ] -> C(s)`
    $$\boxed{\quad G_{eq}(s) = G_1(s) \pm G_2(s) \quad}$$

**Rule 3: Eliminating a Feedback Loop**
This is the most common and important rule.
-   **Before:** A canonical feedback loop with forward path $G(s)$ and feedback path $H(s)$.
-   **After:** `R(s) -> [ G(s) / (1 ∓ G(s)H(s)) ] -> C(s)`
    $$\boxed{\quad T(s) = \frac{G(s)}{1 \mp G(s)H(s)} \quad}$$
    *(Note: Use `+` for negative feedback and `-` for positive feedback).*

**Rule 4: Moving a Summing Point**
-   **(a) Moving a Summing Point *After* a Block:** The block's transfer function must be applied to the other input signal.
    -   **Before:** `(R ± X) -> [ G ] -> C`
    -   **After:** `R -> [ G ] -> (sum) -> C`, with `X -> [ G ] -> (sum)`
-   **(b) Moving a Summing Point *Before* a Block:** The inverse of the block's transfer function must be applied to the other input signal.
    -   **Before:** `R -> [ G ] -> (sum with X) -> C`
    -   **After:** `(R ± X/G) -> [ G ] -> C`

**Rule 5: Moving a Take-off Point**
-   **(a) Moving a Take-off Point *After* a Block:** The inverse of the block's transfer function must be added to the take-off path.
    -   **Before:** `R -> (take-off) -> [ G ] -> C`
    -   **After:** `R -> [ G ] -> (take-off) -> C`, with the take-off path now having a `[ 1/G ]` block.
-   **(b) Moving a Take-off Point *Before* a Block:** The block's transfer function must be added to the take-off path.
    -   **Before:** `R -> [ G ] -> (take-off) -> C`
    -   **After:** `R -> (take-off) -> [ G ] -> C`, with the take-off path now having a `[ G ]` block.

**Rule 6: Interchanging Summing Points**
Two adjacent summing points can be interchanged without affecting the output.

---
#### General Procedure for Reduction
#block-diagram/procedure

A systematic approach helps in reducing complex diagrams without errors.
1.  **Reduce Cascade Blocks:** Combine all blocks in series (Rule 1).
2.  **Reduce Parallel Blocks:** Combine all blocks in parallel (Rule 2).
3.  **Eliminate Minor Loops:** Reduce all internal feedback loops (Rule 3).
4.  **Shift Points (if needed):** If no cascade, parallel, or loop structures are available, shift summing points or take-off points (Rules 4 & 5) to create them.
5.  **Repeat:** Continue the process from step 1 until a single overall transfer function is obtained.

---
### Related Concepts
#control-systems/related-concepts

> [[Block Diagram Representation]]

[[Signal Flow Graph (SFG)]] (An alternative graphical method for system analysis)
[[Mason's Gain Formula]]
[[Transfer Function and Impulse Response]]
[[Open-Loop and Closed-Loop (Feedback) Control Systems]]
[[Steady-State Error]] & [[Steady-State Error for Disturbances]]
