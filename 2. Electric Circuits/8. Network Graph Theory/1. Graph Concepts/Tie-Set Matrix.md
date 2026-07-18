---
tags:
  - electric-circuits
  - graph-theory
  - mesh-analysis
  - network-topology
created: 2025-07-27
aliases:
  - Tie-Set Matrix
  - Fundamental Loop Matrix
  - B-matrix
subject: "[[Electric Circuits]]"
parent: "[[Graph Theory in Circuits]]"
confidence: 9
---
### Tie-Set Matrix (Fundamental Loop Matrix)
#tie-set-matrix #kvl #mesh-analysis #graph-theory

> The **Tie-Set Matrix**, denoted by **B**, is a topological matrix that systematically describes the structure of a circuit's loops. It provides a formal method for writing Kirchhoff's Voltage Law (KVL) equations for all the fundamental loops of a network. Each row in the matrix represents a unique fundamental loop (a tie-set), and the entries specify which branches constitute that loop and in which direction.

This matrix forms the theoretical foundation for [[Mesh Analysis]].

#### Construction of the Tie-Set Matrix
#tie-set-matrix/construction

The matrix is constructed based on the graph of the circuit using the following steps:

1.  **Select a Tree**: From the oriented graph of the circuit (with `n` nodes and `b` branches), choose a **tree**. A tree is a subgraph that connects all nodes without forming any loops. The branches of the tree are called **twigs**.
2.  **Identify Links**: The branches that are not part of the tree are called **links** or chords. These branches form the co-tree. The number of links determines the number of independent loops.
    $$l = b - (n-1) = b - n + 1$$
3.  **Form Fundamental Loops (Tie-Sets)**: Each link, when added to the tree, creates exactly one unique loop. This is called a **fundamental loop** or a **tie-set**. The direction of the loop is conventionally chosen to be the same as the direction of its defining link.
4.  **Populate the Matrix**: The Tie-Set Matrix `B` is an $l \times b$ matrix.
    *   The rows correspond to the fundamental loops ($i=1, 2, ..., l$).
    *   The columns correspond to the branches of the graph ($j=1, 2, ..., b$).
    
    The element $b_{ij}$ of the matrix is defined as:
    *   $b_{ij} = +1$, if branch `j` is in fundamental loop `i` and their orientations are the same.
    *   $b_{ij} = -1$, if branch `j` is in fundamental loop `i` and their orientations are opposite.
    *   $b_{ij} = 0$, if branch `j` is not in fundamental loop `i`.

#### KVL in Matrix Form
#kvl/matrix-form

The primary purpose of the Tie-Set matrix is to express KVL for all fundamental loops in a compact matrix equation. Let $V_b$ be the $b \times 1$ column vector of all branch voltages. Then the set of KVL equations is:
$$\boxed{\quad B \cdot V_b = 0 \quad}$$
This equation concisely states that for each fundamental loop (each row of `B`), the algebraic sum of the branch voltages is zero.

#### Properties of the Tie-Set Matrix
#tie-set-matrix/properties

*   **Dimensions**: The `B` matrix has dimensions $l \times b$, where $l = b - n + 1$.
*   **Partitioned Form**: If the branches are arranged such that the first `l` columns represent the links and the remaining `b-l` columns represent the twigs, the matrix `B` can be written in a partitioned form:
    $$\boxed{\quad B = [I_l \ | \ B_t] \quad}$$
    where $I_l$ is the $l \times l$ identity matrix (since each link is in only one fundamental loop—its own—and defines its direction) and $B_t$ is an $l \times (n-1)$ submatrix that describes the relationship between the twigs and the fundamental loops.
*   **Orthogonality**: The Tie-Set matrix `B` is orthogonal to the [[Incidence Matrix]] `A`. This is a mathematical expression of the independence of KCL and KVL.
    $$A \cdot B^T = 0 \quad \text{and} \quad B \cdot A^T = 0$$

---
### Related Concepts
#tie-set-matrix/related-concepts

> [[Graph Theory in Circuits]] (The parent discipline for this concept)

[[Mesh Analysis]] (The practical analysis technique derived from tie-set principles)
[[Kirchhoff's Laws]] (KVL is the law being encoded by the `B` matrix)
[[Cut-Set Matrix]] (The dual concept used to formalize KCL for Nodal Analysis)
[[Incidence Matrix]] (A matrix that formalizes KCL at the nodes of a graph)