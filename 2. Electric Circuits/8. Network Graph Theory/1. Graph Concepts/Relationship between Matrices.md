---
tags:
  - electric-circuits
  - graph-theory
  - network-topology
  - matrix-algebra
created: 2025-07-28
aliases:
  - Circuit Matrix Relationships
  - Network Topology Matrices
subject: "[[Electric Circuits]]"
parent: "[[Graph Theory in Circuits]]"
confidence: 9
---

```mermaid
mindmap
  root((Relationships Between A, B, Q))
    Orthogonality
      (KCL & KVL are independent)
      A ⋅ Bᵀ = 0
      Q ⋅ Bᵀ = 0
    Partitioning
      (Based on Tree & Co-tree)
      Branches -> Twigs & Links
      B = [I | Bₜ]
      Q = [Qₗ | I]
    Derivation from each other
      Qₗ = -Bₜᵀ
      (If you know B, you can find Q, and vice-versa)
    A as a special case of Q
      Reduced Incidence Matrix (A) is a type of Cut-Set Matrix (Q)
      (For a star-graph tree)
    Duality
      B (Tie-Set) ↔ Q (Cut-Set)
      KVL ↔ KCL
      Loops ↔ Nodes
```

---
### Relationships Between Circuit Topology Matrices
#matrix-relationships #graph-theory #network-topology

> The three fundamental matrices of circuit topology—the [[Incidence Matrix]] (A), [[Tie-Set Matrix]] (B), and [[Cut-Set Matrix]] (Q)—are not independent entities. They are deeply interconnected through the underlying graph structure of the network. Understanding these relationships reveals the mathematical elegance connecting KCL and KVL and is essential for computer-aided circuit analysis.

#### Orthogonality: The Independence of KCL and KVL
#orthogonality #kcl-kvl-independence

The most fundamental relationship is that the matrices representing KCL (A or Q) are **orthogonal** to the matrix representing KVL (B). This is a mathematical statement that KCL and KVL provide two independent sets of constraints on a circuit's behavior.
$$\boxed{\quad A \cdot B^T = 0 \quad \text{and} \quad Q \cdot B^T = 0 \quad}$$
This means that the dot product of any row of A (a KCL equation) with any row of B (a KVL equation), when treated as vectors, is zero. Physically, it means the vector space of branch currents is orthogonal to the vector space of branch voltages.

#### Derivation from Partitioning
#matrix-partitioning #tree #co-tree

A powerful relationship emerges when we partition the `B` and `Q` matrices based on a chosen tree. A circuit graph with `b` branches can be divided into `l` **links** (co-tree) and `n-1` **twigs** (tree).

If we arrange the branch columns such that links come first, followed by twigs, the fundamental matrices take a standard form:
*   **Tie-Set Matrix**: $B = [I_l \ | \ B_t]$
    *   $I_l$ is the $l \times l$ identity matrix.
    *   $B_t$ is the submatrix that relates the twigs to the fundamental loops.
*   **Cut-Set Matrix**: $Q = [Q_l \ | \ I_{n-1}]$
    *   $I_{n-1}$ is the $(n-1) \times (n-1)$ identity matrix.
    *   $Q_l$ is the submatrix that relates the links to the fundamental cut-sets.

By applying the orthogonality condition $Q \cdot B^T = 0$ to these partitioned forms, we arrive at a direct relationship between their submatrices:
$$
\begin{align}
Q \cdot B^T &= [Q_l \ | \ I_{n-1}] \cdot [I_l \ | \ B_t]^T = 0 \\
&= [Q_l \ | \ I_{n-1}] \cdot \begin{bmatrix} I_l \\ B_t^T \end{bmatrix} = 0 \\
&= Q_l \cdot I_l + I_{n-1} \cdot B_t^T = 0 \\
&= Q_l + B_t^T = 0
\end{align}
$$
This gives the crucial result:
$$\boxed{\quad Q_l = -B_t^T \quad \text{or equivalently} \quad B_t = -Q_l^T \quad}$$
**Significance**: This means if we construct the fundamental tie-set matrix `B`, we can immediately derive the fundamental cut-set matrix `Q` (and vice-versa) without having to go through the entire graph-theoretic construction again.

#### Incidence Matrix (A) as a special case of Cut-Set Matrix (Q)
#incidence-matrix #cut-set-matrix

The **Reduced Incidence Matrix (A)** is not a different class of matrix but is simply a **special case of the fundamental Cut-Set Matrix (Q)**.

The matrix `A` is obtained when the chosen tree is a **star graph** (or radial graph), where one node is the reference, and every twig connects the reference node to one of the other `n-1` nodes. In this configuration, the fundamental cut-set for each twig consists of that twig and all links connected to its non-reference node. This is precisely the set of all branches connected to that node, which is what a row of the incidence matrix `A` represents.

---
### Related Concepts
#matrix-relationships/related-concepts

> [[Graph Theory in Circuits]] (The parent topic that defines these matrices)

[[Incidence Matrix]], [[Tie-Set Matrix]], [[Cut-Set Matrix]] (The individual matrix definitions)
[[Nodal Analysis]] and [[Mesh Analysis]] (The practical analysis methods built upon these matrices)
[[Kirchhoff's Laws]] (The physical laws that these matrices encode)