---
tags:
  - linear-algebra
  - matrix-theory
  - matrix-inverse
  - invertible-matrix
  - engineering-math
created: 2025-09-09
aliases:
  - Matrix Inverse
  - Invertible Matrix
  - Non-singular Matrix
  - Invertible Matrix Theorem
subject: "[[Mathematics]]"
parent: Linear Algebra
formula:
  - "Inverse of a Matrix (Adjoint (Adjugate) Formula) : $$A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$$"
  - "Inverse of a 2X2 Matrix : $$A^{-1} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$"
  - 'Properties of a Inverse Matrix : $$\begin{align}(A^{-1})^{-1} &= A \\(AB)^{-1} &= B^{-1}A^{-1} \quad (\text{The "Socks and Shoes" Rule}) \\(A^T)^{-1} &= (A^{-1})^T \\(cA)^{-1} &= \frac{1}{c}A^{-1} \quad (\text{for non-zero scalar } c)\end{align}$$'
---
### Inverse of a Matrix
#matrix-inverse #invertible-matrix #linear-algebra

> The **inverse of a matrix** is the matrix-equivalent of a reciprocal for a scalar. For a square matrix $A$, its inverse, denoted $A^{-1}$, is a matrix that, when multiplied by $A$, yields the identity matrix. The existence of an inverse is a critical property, as it indicates that the matrix's transformation is reversible and provides a formal method for solving systems of linear equations.

#### Definition
#matrix-inverse/definition

An $n \times n$ square matrix $A$ is **invertible** (or **non-singular**) if there exists an $n \times n$ matrix $A^{-1}$ such that:
$$\boxed{\quad AA^{-1} = A^{-1}A = I \quad}$$
where $I$ is the $n \times n$ identity matrix. If no such matrix exists, $A$ is called **singular** or **non-invertible**.

![[Determinant of a Matrix#^invertible]]

> [!pyq]- PYQ : 2019
> ![[ee_2019#^q26]]

---
#### Conditions for Existence (The Invertible Matrix Theorem)
#invertible-matrix-theorem

For an $n \times n$ square matrix $A$, the following statements are equivalent (if one is true, all are true). The existence of an inverse is tied to these conditions:

*   The [[Determinant of a Matrix|determinant]] of A is non-zero.
    $$\boxed{\quad \det(A) \neq 0 \quad}$$
*   The matrix $A$ has full rank, i.e., $\text{rank}(A) = n$.
*   The columns (and rows) of $A$ are [[Linear Independence and Dependence of Vectors|linearly independent]].
*   The [[Fundamental Subspaces of a Matrix|null space]] of $A$ contains only the zero vector, i.e., $N(A) = \{\mathbf{0}\}$.
*   The number 0 is not an [[Eigenvalues and Eigenvectors|eigenvalue]] of $A$.
*   The system $A\mathbf{x} = \mathbf{0}$ has only the trivial solution.

---
#### Methods for Finding the Inverse
#matrix-inverse/computation

1.  **[[Gaussian Elimination Method|Gauss-Jordan Elimination]]**: This is the most practical method for larger matrices.
    * Create the augmented matrix $[A | I]$.
    * Use elementary row operations to transform the left side ($A$) into the identity matrix $I$.
    * The right side will be transformed into the inverse matrix: $[I | A^{-1}]$.

2.  **Adjoint (Adjugate) Formula**: This is useful for theoretical proofs and small matrices.
    $$\boxed{\quad A^{-1} = \frac{1}{\det(A)} \text{adj}(A) \quad}$$
    where $\text{adj}(A)$ is the adjugate of A (the transpose of the cofactor matrix).

3.  **Formula for a 2x2 Matrix**: A direct application of the adjoint formula.
    $$\boxed{\quad A^{-1} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} \quad}$$

---
#### Properties of the Inverse
#matrix-inverse/properties

For invertible matrices $A$ and $B$:
$$\boxed{\begin{align}
(A^{-1})^{-1} &= A \\
(AB)^{-1} &= B^{-1}A^{-1} \quad (\text{The "Socks and Shoes" Rule}) \\
(A^T)^{-1} &= (A^{-1})^T \\
(cA)^{-1} &= \frac{1}{c}A^{-1} \quad (\text{for non-zero scalar } c)
\end{align}}$$

---
#### Application: Solving Linear Systems
#matrix-inverse/application

The inverse provides a formal way to solve a system of linear equations of the form $A\mathbf{x} = \mathbf{b}$.
If $A$ is invertible, we can multiply both sides by $A^{-1}$:
$$\begin{align}
A^{-1}(A\mathbf{x}) &= A^{-1}\mathbf{b} \\
(A^{-1}A)\mathbf{x} &= A^{-1}\mathbf{b} \\
I\mathbf{x} &= A^{-1}\mathbf{b} \\
\mathbf{x} &= A^{-1}\mathbf{b}
\end{align}$$
While computationally intensive for single systems compared to Gaussian elimination, this method is conceptually important and useful when solving for multiple different vectors $\mathbf{b}$.

---
### Related Concepts
#related-concepts

> [[Determinant of a Matrix]]

[[Matrix Operations]]
[[Linear Independence and Dependence of Vectors|Linear Independence]]
[[Cramer's Rule]]
[[Rank of a Matrix]]
[[Homogeneous System of Linear Equations]]
[[Gaussian Elimination Method]]