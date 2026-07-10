---
tags:
  - linear-algebra
  - fundamental-theorems
  - vector-spaces
  - linear-transformation
  - engineering-math
created: 2025-09-09
aliases:
  - Dimension Theorem
  - Rank-Nullity
  - "Example : Rank-Nullity Theorem"
subject: "[[Mathematics]]"
parent:
  - Linear Algebra
confidence: 9
---
### The Rank-Nullity Theorem
#rank-nullity-theorem #fundamental-theorems #linear-algebra

> The **Rank-Nullity Theorem** is a fundamental result in linear algebra that provides a simple and powerful relationship between the dimensions of the input space (domain), the output space (range), and the space of inputs that are mapped to zero (kernel). It essentially states that the number of dimensions "preserved" by a transformation (the rank) plus the number of dimensions "lost" or "crushed" by it (the nullity) must equal the total number of dimensions of the input space.

---
#### The Theorem Statement
#theorem-statement

Let $T: V \to W$ be a linear transformation where $V$ is a finite-dimensional vector space. The Rank-Nullity Theorem states:
$$\begin{align}
\dim(\text{range}(T)) + \dim(\text{ker}(T)) &= \dim(V) \\
\text{rank}(T) + \text{nullity}(T) &= \dim(\text{Domain})
\end{align}$$

For an $m \times n$ matrix $A$, which represents a linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^m$, the theorem is expressed as:
$$\boxed{\quad \text{rank}(A) + \text{nullity}(A) = n \quad (\text{the number of columns}) \quad}$$
where:
*   $\text{rank}(A) = \dim(C(A))$ is the number of pivot columns.
*   $\text{nullity}(A) = \dim(N(A))$ is the number of free variables (non-pivot columns).

**Example**: A projection from $\mathbb{R}^3$ to $\mathbb{R}^2$ defined by $T(x,y,z) = (x,y)$.
*   **Domain**: $V = \mathbb{R}^3$, so $\dim(V) = 3$.
*   **Kernel**: All vectors of the form $(0,0,z)$, which is the z-axis. A basis is $\{(0,0,1)\}$. So, $\text{nullity}(T) = 1$.
*   **Range**: The entire $xy$-plane, $\mathbb{R}^2$. A basis is $\{(1,0), (0,1)\}$. So, $\text{rank}(T) = 2$.
*   **Verification**: $\text{rank}(T) + \text{nullity}(T) = 2 + 1 = 3 = \dim(\text{Domain})$. The theorem holds.

---
#### Key Consequences and Implications
#rank-nullity/implications

The theorem is not just a counting formula; it reveals deep truths about linear mappings.

1.  **Mappings between Spaces of Different Dimensions** ($T: \mathbb{R}^n \to \mathbb{R}^m$):
    *   If **$n > m$** (more columns than rows, e.g., $\mathbb{R}^3 \to \mathbb{R}^2$): The rank can be at most $m$. Therefore, $\text{nullity}(A) = n - \text{rank}(A) \ge n - m > 0$. The nullity must be greater than zero, so the transformation **cannot be one-to-one**.
    *   If **$n < m$** (fewer columns than rows, e.g., $\mathbb{R}^2 \to \mathbb{R}^3$): The rank can be at most $n$. Since $n < m$, the rank cannot equal the dimension of the codomain. Therefore, the transformation **cannot be onto**.

2.  **Mappings between Spaces of the Same Dimension** ($T: V \to V$, represented by a square $n \times n$ matrix $A$):
    In this critical case, being one-to-one is equivalent to being onto.
    *   $T$ is **one-to-one** $\iff \text{nullity}(T) = 0$.
    *   By the theorem, this means $\text{rank}(T) = n - 0 = n$.
    *   $\text{rank}(T) = n = \dim(V)$ means $T$ is **onto**.
    This forms a key part of the **Invertible Matrix Theorem**: for a square matrix, having a trivial null space (one-to-one) is equivalent to having a full rank (onto).

---
### Related Concepts
#related-concepts

> [[Rank and Nullity of a Linear Transformation]]

[[Linear Transformation]]
[[Fundamental Subspaces of a Matrix]]
[[Basis and Dimension of a Vector Space]]
[[Invertible Matrix Theorem]]