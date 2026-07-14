---
tags:
  - linear-algebra
  - matrix-theory
  - vector-spaces
  - engineering-math
created: 2025-07-29
aliases:
  - Fundamental Subspaces
  - Four Fundamental Subspaces
  - Null Space
subject: "[[Mathematics]]"
parent: Linear Algebra
---
### The Four Fundamental Subspaces of a Matrix
#linear-algebra #matrix-theory #vector-space

For any given $m \times n$ matrix $A$, there are four fundamental vector subspaces that provide a deep understanding of the matrix's properties and the linear transformation it represents. These subspaces partition the domain ($\mathbb{R}^n$) and codomain ($\mathbb{R}^m$) into orthogonal pairs, as described by the Fundamental Theorem of Linear Algebra.

#### 1. The Column Space (C(A))
#column-space #range
*   **Definition**: The Column Space of $A$ (also called the **range** of $A$) is the set of all possible linear combinations of the column vectors of $A$. It represents the set of all vectors $\mathbf{b}$ for which the equation $A\mathbf{x} = \mathbf{b}$ has a solution.
    $$C(A) = \{ \mathbf{b} \in \mathbb{R}^m \mid \mathbf{b} = A\mathbf{x} \text{ for some } \mathbf{x} \in \mathbb{R}^n \}$$
*   **Subspace of**: $\mathbb{R}^m$ (since the columns of A have $m$ entries).
*   **Dimension**: $\dim(C(A)) = r$, where $r = \text{rank}(A)$.
*   **Basis**: A basis for the column space is formed by the **pivot columns** of the original matrix $A$.

---
#### 2. The Null Space (N(A))
#null-space #kernel
*   **Definition**: The Null Space of $A$ (also called the **kernel** of $A$) is the set of all vectors $\mathbf{x}$ that are solutions to the homogeneous equation $A\mathbf{x} = \mathbf{0}$.
    $$N(A) = \{ \mathbf{x} \in \mathbb{R}^n \mid A\mathbf{x} = \mathbf{0} \}$$
*   **Subspace of**: $\mathbb{R}^n$ (since the solution vectors $\mathbf{x}$ have $n$ entries).
*   **Dimension**: $\dim(N(A)) = n - r$. This is the **nullity** of $A$.
*   **Basis**: A basis is formed by the "special solutions" to $A\mathbf{x} = \mathbf{0}$, which are found by setting each free variable to 1 (and the others to 0) after reducing $A$ to its row-echelon form.

---
#### 3. The Row Space (C(Aᵀ))
#row-space
*   **Definition**: The Row Space of $A$ is the set of all possible linear combinations of the row vectors of $A$. It is equivalent to the column space of the transpose matrix, $A^T$.
    $$C(A^T) = \{ A^T\mathbf{y} \in \mathbb{R}^n \mid \mathbf{y} \in \mathbb{R}^m \}$$
*   **Subspace of**: $\mathbb{R}^n$ (since the rows of A have $n$ entries).
*   **Dimension**: $\dim(C(A^T)) = r$. The row rank is always equal to the column rank.
*   **Basis**: A basis for the row space is formed by the **non-zero rows** of the Row-Echelon Form (REF) or Reduced Row-Echelon Form (RREF) of $A$.

---
#### 4. The Left Null Space (N(Aᵀ))
#left-null-space
*   **Definition**: The Left Null Space of $A$ is the null space of its transpose, $A^T$. It is the set of all vectors $\mathbf{y}$ that are solutions to $A^T\mathbf{y} = \mathbf{0}$. It gets its name because the equation can be written as $\mathbf{y}^T A = \mathbf{0}^T$.
    $$N(A^T) = \{ \mathbf{y} \in \mathbb{R}^m \mid A^T\mathbf{y} = \mathbf{0} \}$$
*   **Subspace of**: $\mathbb{R}^m$ (since the solution vectors $\mathbf{y}$ have $m$ entries).
*   **Dimension**: $\dim(N(A^T)) = m - r$.
*   **Basis**: Found by solving $A^T\mathbf{y} = \mathbf{0}$ using Gaussian elimination.

---
#### The Fundamental Theorem of Linear Algebra
#fundamental-theorem-linear-algebra #orthogonality

This theorem connects the dimensions and the relationships between the four subspaces.

**Part 1: Dimensions**
For any $m \times n$ matrix $A$ with rank $r$:
$$\boxed{\quad
\begin{align}
\dim(C(A)) &= r \\
\dim(C(A^T)) &= r \\
\dim(N(A)) &= n-r \quad \text{(Rank-Nullity Theorem)} \\
\dim(N(A^T)) &= m-r
\end{align}
\quad}$$

**Part 2: Orthogonality**
The subspaces form orthogonal pairs that span the entire domain and codomain.
*   The Row Space is orthogonal to the Null Space. These two subspaces are orthogonal complements in $\mathbb{R}^n$.
    $$\boxed{\quad C(A^T) \perp N(A) \quad \text{and} \quad \mathbb{R}^n = C(A^T) \oplus N(A) \quad}$$
*   The Column Space is orthogonal to the Left Null Space. These two subspaces are orthogonal complements in $\mathbb{R}^m$.
    $$\boxed{\quad C(A) \perp N(A^T) \quad \text{and} \quad \mathbb{R}^m = C(A) \oplus N(A^T) \quad}$$
This means every vector $\mathbf{x} \in \mathbb{R}^n$ can be uniquely split into a row space component and a null space component. Similarly for any vector in $\mathbb{R}^m$.

---
### Related Concepts
#related-concepts 

> [[Rank of a Matrix]]

[[Vector Space Definition and Properties|Vector Spaces]]
[[Orthogonality]]
[[Gaussian Elimination Method|Gaussian Elimination]]
[[Linear Transformation|Linear Transformation]]

