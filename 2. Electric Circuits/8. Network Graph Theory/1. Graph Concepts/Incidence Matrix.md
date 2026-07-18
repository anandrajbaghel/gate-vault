---
tags:
  - electric-circuits
  - graph-theory
  - nodal-analysis
  - network-topology
  - kcl
created: 2025-07-28
aliases:
  - Incidence Matrix
  - A-matrix
subject: "[[Electric Circuits]]"
parent: "[[Graph Theory in Circuits]]"
confidence: 9
---
### Incidence Matrix
#incidence-matrix #kcl #nodal-analysis #graph-theory

> The **Incidence Matrix**, denoted by **A**, is a fundamental topological matrix that describes the interconnection of branches and nodes in a circuit's graph. Its primary function is to provide a systematic and formal way of writing Kirchhoff's Current Law (KCL) equations for the network.

Each row of the matrix corresponds to a node, and each column corresponds to a branch. The entries indicate how the branches are connected to the nodes.

#### Construction and Types
#incidence-matrix/construction

For a circuit graph with `n` nodes and `b` branches:

1.  **Complete Incidence Matrix ($A_a$)**:
    This is an $n \times b$ matrix. The element $a_{ij}$ is defined as:
    *   $a_{ij} = +1$, if branch `j` is connected to node `i` and is oriented **away** from it.
    *   $a_{ij} = -1$, if branch `j` is connected to node `i` and is oriented **towards** it.
    *   $a_{ij} = 0$, if branch `j` is not connected to node `i`.
    
    A key property of $A_a$ is that the sum of elements in any column is zero, as each branch has exactly two ends (+1 and -1). This means the rows are linearly dependent, and the rank of $A_a$ is $(n-1)$.

2.  **Reduced Incidence Matrix (A)**:
    Since one KCL equation is always redundant, we can create a matrix of independent equations by choosing a **reference node** and deleting the corresponding row from the complete matrix $A_a$. The resulting $(n-1) \times b$ matrix is the **Reduced Incidence Matrix**, denoted by `A`.
    
    This matrix `A` has a rank of $(n-1)$ for a connected graph and is the one typically used for circuit analysis as it represents the set of independent KCL equations.

#### KCL in Matrix Form
#kcl/matrix-form

The primary application of the incidence matrix is to express KCL for all non-reference nodes in a single, compact matrix equation. Let `A` be the reduced incidence matrix and $I_b$ be the $b \times 1$ column vector of all branch currents. The set of KCL equations is:
$$\boxed{\quad A \cdot I_b = 0 \quad}$$
This equation concisely states that for each of the $(n-1)$ independent nodes, the algebraic sum of the branch currents leaving that node is zero.

#### Properties of the Incidence Matrix
#incidence-matrix/properties

*   **Rank**: For a connected graph with `n` nodes, the rank of the reduced incidence matrix `A` is `n-1`. This confirms that it provides `n-1` independent KCL equations, which is the exact number required for Nodal Analysis.
*   **Relation to Cut-Set Matrix**: The reduced incidence matrix `A` is a special case of the [[Cut-Set Matrix]]. Specifically, it is the cut-set matrix where the fundamental cut-sets are formed by the groups of branches connected to each of the $(n-1)$ non-reference nodes.
*   **Orthogonality**: The incidence matrix `A` is orthogonal to the [[Tie-Set Matrix]] `B`. This is a mathematical statement of the fact that KCL and KVL are independent principles.
    $$\boxed{\quad A \cdot B^T = 0 \quad \text{and} \quad B \cdot A^T = 0 \quad}$$
*   **Unimodularity**: The determinant of any square submatrix of `A` is always 0, +1, or -1.

---
### Related Concepts
#incidence-matrix/related-concepts

> [[Graph Theory in Circuits]] (The parent discipline for this concept)

[[Nodal Analysis]] (The practical analysis technique derived from the principles of the incidence matrix)
[[Kirchhoff's Laws]] (KCL is the law being encoded by the `A` matrix)
[[Cut-Set Matrix]] (A more general matrix for describing KCL)
[[Tie-Set Matrix]] (The dual concept used to formalize KVL for Mesh Analysis)