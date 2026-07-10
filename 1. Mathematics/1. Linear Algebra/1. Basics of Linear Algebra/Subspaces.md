---
tags:
  - linear-algebra
  - vector-spaces
  - abstract-algebra
  - engineering-math
created: 2025-09-09
aliases:
  - Subspace
  - Vector Subspace
  - Linear Subspace
  - Four Fundamental Subspaces of a Matrix
  - Kernel
subject: "[[Mathematics]]"
parent: "[[Vector Space Definition and Properties|Vector Spaces]]"
confidence: 9
---

### Subspaces
#subspace #linear-algebra #vector-space

> A subspace is a non-empty subset of a larger [[Vector Space Definition and Properties|vector space]] that is itself a vector space. Essentially, it's a "vector space within a vector space" that inherits the operations of its parent space and satisfies all [[Vector Space Definition and Properties#The Ten Axioms|ten vector space axioms]] without needing to check them all individually. Geometrically, in $\mathbb{R}^3$, subspaces are the origin, lines through the origin, and planes through the origin (these are _proper_ subspaces excluding $\mathbb{R}^3$ since it is the whole space).

---
#### The Subspace Test
#subspace-test #axioms

To verify if a non-empty subset $W$ of a vector space $V$ is a subspace, we don't need to check all ten vector space axioms. We only need to confirm three properties, known as the **Subspace Test**.

A subset $W$ of a vector space $V$ is a subspace of $V$ if and only if:
1. **Contains the Zero Vector**: The zero vector of $V$ is in $W$.
    $$\boxed{\quad \mathbf{0} \in W \quad}$$
2. **Closure under Addition**: For any two vectors $\mathbf{u}$ and $\mathbf{v}$ in $W$, their sum $\mathbf{u} + \mathbf{v}$ is also in $W$.
    $$\boxed{\quad \text{If } \mathbf{u}, \mathbf{v} \in W, \text{ then } \mathbf{u} + \mathbf{v} \in W \quad}$$
3. **Closure under Scalar Multiplication**: For any vector $\mathbf{u}$ in $W$ and any scalar $c$, the product $c\mathbf{u}$ is also in $W$.
    $$\boxed{\quad \text{If } \mathbf{u} \in W \text{ and } c \in \mathbb{R}, \text{ then } c\mathbf{u} \in W \quad}$$

**Note**: A set that does not contain the origin (e.g., a line or plane that is shifted away from the origin) can never be a subspace.

---
#### The Four Fundamental Subspaces of a Matrix
#fundamental-subspaces #matrix-subspaces #rank-nullity #kernel 

For any $m \times n$ matrix $A$, there are four crucial subspaces associated with it. These subspaces reveal deep connections between the matrix and the linear system $A\mathbf{x}=\mathbf{b}$.

1. **The Column Space, $C(A)$**:
    * The set of all linear combinations of the columns of $A$. It is the **span** of the columns.
    * It is a subspace of $\mathbb{R}^m$.
    * $C(A)$ contains all vectors $\mathbf{b}$ for which $A\mathbf{x}=\mathbf{b}$ has a solution.
    * Dimension: $\dim(C(A)) = \text{rank}(A) = r$.

2. **The Null Space (Kernel), $N(A)$**:
    * The set of all solutions $\mathbf{x}$ to the homogeneous equation $A\mathbf{x}=\mathbf{0}$.
    * It is a subspace of $\mathbb{R}^n$.
    * Dimension: $\dim(N(A)) = \text{nullity}(A) = n - r$. This is from the [[Rank-Nullity Theorem]].

3. **The Row Space, $C(A^T)$**:
    * The set of all linear combinations of the rows of $A$ (or the column space of $A^T$).
    * It is a subspace of $\mathbb{R}^n$.
    * The row space is orthogonal to the null space.
    * Dimension: $\dim(C(A^T)) = \text{rank}(A) = r$.

4. **The Left Null Space, $N(A^T)$**:
    * The set of all solutions $\mathbf{y}$ to the homogeneous equation $A^T\mathbf{y}=\mathbf{0}$.
    * It is a subspace of $\mathbb{R}^m$.
    * The left null space is orthogonal to the column space.
    * Dimension: $\dim(N(A^T)) = m - r$.

---
#### Properties and Construction of Subspaces

1. **[[Span of a Set of Vectors|Span]]**: The primary way to construct a subspace is by taking the **span** of a set of vectors. The span of any set of vectors $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$ in $V$ is always a subspace of $V$.
2. **Intersection**: The intersection of two subspaces, $W_1 \cap W_2$, is always a subspace.
3. **Union**: The union of two subspaces, $W_1 \cup W_2$, is **not** generally a subspace. It fails the closure under addition test unless one subspace is a subset of the other.

---
### Related Concepts
#related-concepts

> [[Vector Space Definition and Properties|Vector Spaces]]

[[Linear Independence and Dependence of Vectors|Linear Independence]]
[[Basis and Dimension of a Vector Space]]
[[Rank-Nullity Theorem]]
[[Linear Transformation|Linear Transformation]] (The Null Space is the Kernel, and the Column Space is the Range/Image)
[[Orthogonality]]