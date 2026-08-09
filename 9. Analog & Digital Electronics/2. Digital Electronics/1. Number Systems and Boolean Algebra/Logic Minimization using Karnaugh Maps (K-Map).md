---
tags:
  - digital-logic
  - logic-minimization
  - k-map
  - combinational-logic
  - digital-electronics
created: 2025-10-19
aliases:
  - Karnaugh Map
  - K-Map
  - Veitch Diagram
  - "Example : 4-Variable K-Map"
  - "Example : Don't Care Conditions (X) : K-Map"
subject: "[[Analog & Digital Electronics]]"
parent:
  - Digital Electronics
trends:
  - "[[trends - Karnaugh Maps]]"
modified: 2026-08-04T09:55:59
---
### Logic Minimization using Karnaugh Maps (K-Map)
#k-map #logic-minimization #boolean-algebra

> The Karnaugh Map (K-Map) is a graphical method used to simplify Boolean algebra expressions. It provides a systematic and visual way to find the simplest Sum of Products (SOP) or Product of Sums (POS) expression for a given Boolean function, thereby minimizing the number of logic gates required for implementation. It is highly efficient for functions with 2, 3, or 4 variables.

![[Torus from Rectangle.gif]]

> [!example]- K-Map Topology: The Torus Model
> In an $n$-variable K-Map (specifically for $n=3$ and $n=4$), the grid is a 2D projection of a continuous surface defined by Gray Code transitions. 
> 
> - **Horizontal folding** creates a cylinder, linking $m_0$ to $m_2$ (or $m_0$ to $m_8$ in a 4-variable map).
> - **Vertical folding** connects the cylinder ends, forming a **Torus**.
> 
> > [!mistake] Practical Application
> > Never treat the edges of a K-map as boundaries. If a $1$ is on an edge, always look to the opposite edge or corner to form pairs ($2^1$), quads ($2^2$), or octets ($2^3$) to achieve optimal Boolean minimization.

---

#### K-Map Structure and Principle
#k-map/structure

A K-map is a grid of $2^n$ cells, where $n$ is the number of variables in the Boolean function. Each cell corresponds to a single [[minterm]]. The key principle is the arrangement of cells: they are labeled using **[[Binary Codes (BCD, Gray Code, Excess-3)#Gray Code|Gray Code]]**, which ensures that any two adjacent cells (including wrap-around adjacency) differ by only a single variable. This adjacency is what allows for simplification.

*   A group of two adjacent '1's (a **pair**) eliminates **1** variable.
*   A group of four adjacent '1's (a **quad**) eliminates **2** variables.
*   A group of eight adjacent '1's (an **octet**) eliminates **3** variables.

---
#### 🔥Procedure for SOP Minimization (Grouping '1's)
#k-map/sop-minimization

1.  **Construct the Map**: Draw the K-map for the given number of variables.
2.  **Plot the '1's**: Place a '1' in each cell corresponding to a minterm in the function's SOP form.
3.  **Group Adjacent '1's**:
    *   Start by looking for the largest possible groups (octets, then quads, then pairs).
    *   Groups must contain a number of cells that is a power of two (1, 2, 4, 8...).
    *   Groups must be rectangular or square. This includes wrap-around adjacency (the top edge is adjacent to the bottom edge, and the left edge is adjacent to the right edge).
    *   Ensure every '1' is covered by at least one group. Groups can overlap if it leads to a simpler overall expression (i.e., fewer, larger groups).
4.  **Write the Simplified Expression**:
    *   For each group, determine which variables remain constant.
    *   If a variable is always `0` within the group, it appears in its complemented form (e.g., $A'$).
    *   If a variable is always `1` within the group, it appears in its uncomplemented form (e.g., $A$).
    *   If a variable changes within the group, it is eliminated from the term.
    *   The final simplified function is the sum (OR) of the terms derived from all the groups.

##### 4-Variable K-Map Example
Simplify $F(A,B,C,D) = \sum m(0, 2, 5, 7, 8, 10, 13, 15)$.
```
      CD\AB  00    01    11    10
      +-----+-----+-----+-----+
   00 |  1  |  0  |  0  |  1  |
      +-----+-----+-----+-----+
   01 |  0  |  1  |  1  |  0  |
      +-----+-----+-----+-----+
   11 |  0  |  1  |  1  |  0  |
      +-----+-----+-----+-----+
   10 |  1  |  0  |  0  |  1  |
      +-----+-----+-----+-----+
```
**Grouping:**
1.  **Quad 1**: The four corner cells (m0, m2, m8, m10).
    *   A changes, B is always `0`. C changes, D is always `0`.
    *   Term: $\boxed{B'D'}$
2.  **Quad 2**: The block of four '1's in the middle (m5, m7, m13, m15).
    *   A changes, B is always `1`. C changes, D is always `1`.
    *   Term: $\boxed{BD}$

**Simplified Expression**: $F(A,B,C,D) = B'D' + BD$ (This is an XNOR function of B and D).

---
#### Don't Care Conditions (X)
#k-map/dont-care

In some digital systems, certain input combinations are impossible or their output is irrelevant. These are called **Don't Care** conditions, denoted by 'X'.
$$\boxed{\quad \text{Don't Cares (X) can be treated as '1' or '0' to maximize group size.} \quad}$$
*   You should only include a "don't care" in a group if it helps to create a larger group of '1's.
*   You do not need to cover all the "don't cares".

*Example:* Simplify $F(A,B,C) = \sum m(1, 3, 5) + d(7)$.
The term $d(7)$ means minterm 7 is a don't care.

```
      C\AB  00   01   11   10
      +----+----+----+----+
    0 | 0  | 0  | 0  | 0  |
      +----+----+----+----+
    1 | 1  | 1  | X  | 1  |
      +----+----+----+----+
```
By including the 'X' at minterm 7 with the '1's at m1, m3, m5, we can form a quad of `(1,3,5,7)`.
*   Group: m1, m3, m5, m7
    *   A changes. B changes. C is always `1`.
    *   Term: $C$.
Without the don't care, we would need two pairs `(m1,m3 -> A'C)` and `(m1,m5 -> B'C)`, resulting in $A'C+B'C$. By using the don't care, the simplified expression is just $F = C$.

---
#### Procedure for POS Minimization (Grouping '0's)
#k-map/pos-minimization

The K-map can also be used to find a simplified POS expression.
1.  Plot '1's and '0's as before.
2.  **Group the '0's** using the same rules (largest possible groups of $2^n$).
3.  Write the sum term for each group. For a POS term, if a variable is `0` it is uncomplemented ($A$), and if it is `1` it is complemented ($A'$).
4.  The final result is the product (AND) of all the sum terms.
**Alternatively**: Find the SOP for the inverse function $F'$ (by grouping the '0's as if they were '1's) and then apply [[De Morgan's theorem]] to the result.
$F = (F')'$.

---
### Related Concepts

> [[Sum of Products (SOP) and Product of Sums (POS)]]
> [[Boolean Algebra and Logic Gates]]

[[Design of Combinational Circuits]]
[[Universal Gates (NAND and NOR)]]
[[Analog & Digital Electronics]]
