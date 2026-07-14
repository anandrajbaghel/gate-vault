---
tags:
  - linear-algebra
  - vector-spaces
  - span
  - linear-combination
  - engineering-math
created: 2025-09-09
aliases:
  - Span
  - Linear Span
  - "Video : Span (Linear Algebra) (3Blue1Brown)"
subject: "[[Mathematics]]"
parent: "[[Vector Space Definition and Properties|Vector Spaces]]"
youtube:
  - k7RM-ot2NWY
---
### Span of a Set of Vectors
#span #linear-algebra #vector-space #linear-combination

> The **span** of a set of vectors is the collection of all vectors that can be "reached" by taking linear combinations of those vectors. It represents all the points you can get to by stretching, shrinking, reversing, and adding the original vectors. Conceptually, it's the subspace "generated" by the initial set of vectors.

#### Definition of Span
#span/definition

Let $S = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ be a set of vectors in a vector space $V$. The **span of S**, denoted $\text{Span}(S)$, is the set of all possible linear combinations of the vectors in $S$.
$$\boxed{\quad \text{Span}(S) = \{ c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k \mid c_1, c_2, \dots, c_k \in \mathbb{R} \} \quad}$$
If $\text{Span}(S) = V$, we say that the set $S$ **spans** or **generates** the vector space $V$.

---
#### Determining if a Vector is in the Span
#span/test #consistency-check

To determine if a vector $\mathbf{b}$ is in the span of the vectors $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$, we need to check if there exist scalars $c_1, \dots, c_k$ such that:
$$ c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k = \mathbf{b} $$
This vector equation can be rewritten as a matrix system:
$$ A\mathbf{c} = \mathbf{b} $$
where $A$ is the matrix whose columns are the vectors $\mathbf{v}_i$, and $\mathbf{c}$ is the vector of unknown scalars.

The vector $\mathbf{b}$ is in the span if and only if this system is **consistent** (i.e., has at least one solution). This can be verified by row reducing the augmented matrix $[A | \mathbf{b}]$ and checking for any rows of the form $[0 \ 0 \ \dots \ | \ d]$ where $d \neq 0$.

---
#### Geometric Interpretation
#geometric-span

In $\mathbb{R}^3$, the span has a clear geometric meaning:
1. **Span of one non-zero vector $\{\mathbf{v}\}$**: A **line** passing through the origin in the direction of $\mathbf{v}$.
2. **Span of two non-collinear vectors $\{\mathbf{v}_1, \mathbf{v}_2\}$**: A **plane** passing through the origin that contains both vectors.
3. **Span of three non-coplanar vectors $\{\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3\}$**: The entire three-dimensional space $\mathbb{R}^3$.

#### Key Properties of Span
#span/properties

1. **The Span is a Subspace**: The span of any set of vectors in a vector space $V$ is always a [[Subspaces|subspace]] of $V$. In fact, it is the smallest subspace of $V$ that contains the original set of vectors.
2. **Relation to Column Space**: The [[Fundamental Subspaces of a Matrix|column space]] of a matrix $A$, denoted $C(A)$, is defined as the span of the column vectors of $A$.
3. **Spanning Set and Basis**: A set of vectors $S$ forms a [[Basis and Dimension of a Vector Space|basis]] for a vector space $V$ if it is [[Linear Independence and Dependence of Vectors|linearly independent]] and it spans $V$.

---
### Related Concepts
#related-concepts

> [[Linear Independence and Dependence of Vectors|Linear Independence]]

[[Vector Space Definition and Properties|Vector Spaces]]
[[Basis and Dimension of a Vector Space|Basis and Dimension]]
[[Subspaces|Subspace]]
[[Fundamental Subspaces of a Matrix]]