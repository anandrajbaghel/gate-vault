---
tags:
  - linear-algebra
  - vector-spaces
  - basis
  - engineering-math
created: 2025-09-09
aliases:
  - Linear Independence
  - Linear Dependence
  - Linearly Independent
  - Linearly Dependent
subject: "[[Mathematics]]"
parent: "[[Vector Space Definition and Properties|Vector Spaces]]"
---

### Linear Independence and Dependence of Vectors
#linear-independence #linear-dependence #vector-spaces #basis

> **Linear Independence** is a central concept in linear algebra that describes a set of vectors in which no vector can be written as a linear combination of the others. In essence, a linearly independent set is a collection of vectors that are all pointing in genuinely different directions, with none being redundant. Conversely, a set is **linearly dependent** if at least one vector is redundant, meaning it lies in the span of the other vectors.

#### Formal Definition
#linear-algebra/definition

Consider a set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ in a [[Vector Space Definition and Properties|vector space]] $V$. To test for linear independence, we look for solutions to the vector equation:
$$ c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k = \mathbf{0} $$

* **Linearly Independent**: The set of vectors is **linearly independent** if the *only* solution to the equation above is the **trivial solution**, where all scalars are zero.
    $$\boxed{\quad c_1 = c_2 = \dots = c_k = 0 \quad}$$

* **Linearly Dependent**: The set of vectors is **linearly dependent** if there exists at least one non-zero scalar $c_i$ that satisfies the equation. This means a **non-trivial solution** exists.

---
#### How to Determine Linear Independence
#matrix-methods #determinants

The most common method is to use matrices.
1. **Form a Matrix**: Create a matrix $A$ where the columns are the vectors in the set: $A = [\mathbf{v}_1 \ \mathbf{v}_2 \ \dots \ \mathbf{v}_k]$.
2. **Solve the Homogeneous System**: The vector equation becomes the matrix equation $A\mathbf{c} = \mathbf{0}$, where $\mathbf{c}$ is the vector of unknown scalars $[c_1, c_2, \dots, c_k]^T$.
3. **Analyze the Solution**:
    * If the system $A\mathbf{c}=\mathbf{0}$ has **only the trivial solution** ($\mathbf{c}=\mathbf{0}$), the vectors are **linearly independent**. This occurs when there are no free variables (i.e., every column in the row-reduced echelon form of $A$ has a pivot).
    * If the system has **non-trivial solutions** (at least one free variable), the vectors are **linearly dependent**.

> [!memory] Shortcut for $n$ vectors in $\mathbb{R}^n$
> If you have exactly $n$ vectors in an n-dimensional space (e.g., 3 vectors in $\mathbb{R}^3$), you can form a square matrix $A$ and use its determinant.
> $$\boxed{\quad \det(A) \neq 0 \iff \text{The vectors are linearly independent} \quad}$$
> $$\boxed{\quad \det(A) = 0 \iff \text{The vectors are linearly dependent} \quad}$$

---
#### Geometric Interpretation
#geometric-independence

* **In $\mathbb{R}^2$**:
    * Two vectors are **linearly dependent** if they are collinear (they lie on the same line through the origin).
    * They are **linearly independent** if they point in different directions.
* **In $\mathbb{R}^3$**:
    * Three vectors are **linearly dependent** if they are coplanar (they lie on the same plane through the origin).
    * They are **linearly independent** if they span three-dimensional space.

#### Key Properties and Rules

* A set containing the **zero vector** is always **linearly dependent**.
* A set of two vectors is linearly dependent if and only if one is a scalar multiple of the other.
* In $\mathbb{R}^n$, any set containing more than $n$ vectors (e.g., three vectors in $\mathbb{R}^2$) is **always linearly dependent**.
* Any subset of a linearly independent set is also linearly independent.

---
#### Importance in Engineering and Mathematics

* **Basis of a Vector Space**: Linear independence is a required condition for a set of vectors to form a [[Basis and Dimension of a Vector Space|basis]]. A basis is a linearly independent spanning set, which forms the most efficient "coordinate system" for a vector space.
* **Uniqueness**: If a set of vectors $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$ is linearly independent, then any vector in their span has a *unique* representation as a linear combination of them.

---
### Related Concepts
#related-concepts

> [[Basis and Dimension of a Vector Space]]

[[Vector Space Definition and Properties|Vector Spaces]]
[[Subspaces|Subspace]]
[[Span of a Set of Vectors|Span]]
[[Rank-Nullity Theorem]]
[[Determinants]]
