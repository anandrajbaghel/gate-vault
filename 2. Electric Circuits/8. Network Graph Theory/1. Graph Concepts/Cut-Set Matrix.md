---
tags:
  - electric-circuits
  - graph-theory
  - nodal-analysis
  - network-topology
created: 2025-07-28
aliases:
  - Cut-Set Matrix
  - Fundamental Cut-Set Matrix
  - Q-matrix
subject: "[[Electric Circuits]]"
parent: "[[Graph Theory in Circuits]]"
confidence: 9
---
### Cut-Set Matrix (Fundamental Cut-Set Matrix)
#cut-set-matrix #kcl #nodal-analysis #graph-theory

> The **Cut-Set Matrix**, denoted by **Q**, is a topological matrix used to systematically describe Kirchhoff's Current Law (KCL) for a given circuit. Each row of the `Q` matrix represents a **fundamental cut-set**, which is a minimal set of branches that, when cut, divides the network into two parts. The matrix entries specify which branches are part of each cut-set.

This matrix forms the theoretical foundation for [[Nodal Analysis]].

#### Construction of the Cut-Set Matrix
#cut-set-matrix/construction

The matrix is constructed from the circuit's graph structure using these steps:

1.  **Select a Tree**: From the oriented graph of the circuit (with `n` nodes and `b` branches), choose a **tree**. The branches of the tree are called **twigs**. There are $(n-1)$ twigs.
2.  **Form Fundamental Cut-Sets**: Each twig of the tree defines exactly one **fundamental cut-set**. A fundamental cut-set is formed by the twig itself and any **links** (co-tree branches) that need to be cut to isolate the two groups of nodes created by cutting the twig. The direction of the cut-set is conventionally chosen to match the direction of its defining twig.
3.  **Populate the Matrix**: The Cut-Set Matrix `Q` is an $(n-1) \times b$ matrix.
    *   The rows correspond to the fundamental cut-sets ($i=1, 2, ..., n-1$).
    *   The columns correspond to the branches of the graph ($j=1, 2, ..., b$).
    
    The element $q_{ij}$ of the matrix is defined as:
    *   $q_{ij} = +1$, if branch `j` is in fundamental cut-set `i` and their orientations are the same.
    *   $q_{ij} = -1$, if branch `j` is in fundamental cut-set `i` and their orientations are opposite.
    *   $q_{ij} = 0$, if branch `j` is not in fundamental cut-set `i`.

#### KCL in Matrix Form
#kcl/matrix-form

The primary purpose of the Cut-Set matrix is to express KCL for all fundamental cut-sets in a compact matrix equation. Let $I_b$ be the $b \times 1$ column vector of all branch currents. Then the set of KCL equations is:
$$\boxed{\quad Q \cdot I_b = 0 \quad}$$
This equation concisely states that for each fundamental cut-set (each row of `Q`), the algebraic sum of the branch currents leaving the cut-set is zero.

#### Properties of the Cut-Set Matrix
#cut-set-matrix/properties

*   **Dimensions**: The `Q` matrix has dimensions $(n-1) \times b$.
*   **Relation to Incidence Matrix**: The reduced incidence matrix `A` is a special case of a cut-set matrix where the cut-sets are defined around each node.
*   **Partitioned Form**: If the branches are arranged such that the first $l$ columns represent the links and the remaining $(n-1)$ columns represent the twigs, the matrix `Q` can be written in a partitioned form:
    $$\boxed{\quad Q = [Q_l \ | \ I_{n-1}] \quad}$$
    where $I_{n-1}$ is the $(n-1) \times (n-1)$ identity matrix (since each twig is in only one fundamental cut-set—its own—and defines its direction) and $Q_l$ is an $(n-1) \times l$ submatrix describing the relationship between the links and the fundamental cut-sets.
*   **Orthogonality**: The Cut-Set matrix `Q` is orthogonal to the [[Tie-Set Matrix]] `B`.
    $$B \cdot Q^T = 0 \quad \text{and} \quad Q \cdot B^T = 0$$

---
### Related Concepts
#cut-set-matrix/related-concepts

> [[Graph Theory in Circuits]] (The parent discipline for this concept)

[[Nodal Analysis]] (The practical analysis technique derived from cut-set principles)
[[Kirchhoff's Laws]] (KCL is the law being encoded by the `Q` matrix)
[[Tie-Set Matrix]] (The dual concept used to formalize KVL for Mesh Analysis)
[[Incidence Matrix]] (A fundamental matrix that also describes KCL)