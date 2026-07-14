---
tags:
  - linear-algebra
  - matrix-theory
  - hermitian-matrix
  - complex-matrices
  - quantum-mechanics
  - engineering-math
created: 2025-09-09
aliases:
  - Skew-Hermitian Matrix
  - Anti-Hermitian Matrix
subject: "[[Mathematics]]"
parent:
  - Linear Algebra
confidence: 9
formula:
  - "Skew-Hermitian Matrices : $$A = -A^H \\quad \\text{where} \\quad A^H = (\\overline{A})^T$$"
  - "Decomposition of a Square Matrix : $$\\begin{align} H &= \\frac{1}{2}(M + M^H) \\quad (\\text{Hermitian part}) \\\\ K &= \\frac{1}{2}(M - M^H) \\quad (\\text{Skew-Hermitian part}) \\end{align}$$"
---
### Skew-Hermitian Matrices
#skew-hermitian-matrix #complex-matrices #quantum-mechanics

> A **Skew-Hermitian** (or anti-Hermitian) matrix is the complex-number generalization of a real [[Skew-Symmetric Matrices|skew-symmetric matrix]]. It is a square matrix that is equal to the negative of its conjugate transpose. These matrices are fundamental in quantum mechanics and Lie theory as they serve as the "generators" of unitary transformations (which represent quantum evolution and continuous symmetries).

#### Definition
#skew-hermitian-matrix/definition

A square matrix $A$ with complex entries is **Skew-Hermitian** if it is equal to the negative of its conjugate transpose, denoted $A^H$ or $A^\dagger$.
$$\boxed{\quad A = -A^H \quad \text{where} \quad A^H = (\overline{A})^T \quad}$$
This means that the entry in the $i$-th row and $j$-th column is the negative complex conjugate of the entry in the $j$-th row and $i$-th column.
$$ a_{ij} = -\overline{a_{ji}} $$
A direct consequence is that the diagonal elements must be either **zero or purely imaginary**, since for $i=j$, we have $a_{ii} = -\overline{a_{ii}}$. If $a_{ii} = x+iy$, then $x+iy = -(x-iy) = -x+iy$, which implies $2x=0$, so $x=0$.

**Example**: A general $2 \times 2$ Skew-Hermitian matrix:
$$ A = \begin{bmatrix} ia & b+ic \\ -b+ic & id \end{bmatrix} \quad \text{where } a, b, c, d \in \mathbb{R} $$

---
#### Key Properties of Skew-Hermitian Matrices
#skew-hermitian-matrix/properties

1.  **Eigenvalues**: The eigenvalues of a Skew-Hermitian matrix are always either **zero or purely imaginary**. This is a direct counterpart to Hermitian matrices having real eigenvalues.
2.  **Diagonalizability**: Like Hermitian matrices, Skew-Hermitian matrices are always **unitarily diagonalizable**.
3.  **Quadratic Form**: For any complex vector $\mathbf{x}$, the quantity $\mathbf{x}^H A \mathbf{x}$ is always either **zero or purely imaginary**.
4.  **Sum and Scalar Multiple**: The sum of two Skew-Hermitian matrices is Skew-Hermitian. The product of a Skew-Hermitian matrix with a **real** scalar is also Skew-Hermitian.

---
#### Decomposition of a Square Matrix
#matrix-decomposition

Any square complex matrix $M$ can be uniquely expressed as the sum of a [[Hermitian Matrices|Hermitian matrix]] ($H$) and a Skew-Hermitian matrix ($K$).
$$\begin{align}
H &= \frac{1}{2}(M + M^H) \quad (\text{Hermitian part}) \\
K &= \frac{1}{2}(M - M^H) \quad (\text{Skew-Hermitian part})
\end{align}$$
So, $M = H+K$.

---
#### Connection to Unitary Matrices and Quantum Mechanics
#unitary-matrix #lie-algebra

Skew-Hermitian matrices are intimately connected to [[Unitary Matrix|Unitary matrices]] through the **matrix exponential**.
*   If $K$ is a Skew-Hermitian matrix, then $U = e^K$ is a **Unitary matrix**.
*   Conversely, if $U$ is a Unitary matrix, it can be written as $U = e^K$ for some Skew-Hermitian matrix $K$.

This relationship is vital in physics. In quantum mechanics, the time evolution of a state is described by a unitary operator $U(t) = e^{-iHt/\hbar}$, where $H$ is the Hamiltonian (a Hermitian operator). The matrix in the exponent, $K = -iHt/\hbar$, is **Skew-Hermitian** (since $i$ times a Hermitian matrix is Skew-Hermitian). Thus, Skew-Hermitian matrices act as the generators of the continuous unitary transformations that describe physical evolution.

---
### Related Concepts
#related-concepts

> [[Hermitian Matrices]] (The counterpart, where $A = A^H$)

[[Skew-Symmetric Matrices]] (The real-valued equivalent)
[[Unitary Matrices]] (The exponential of a Skew-Hermitian matrix)
[[Eigenvalues and Eigenvectors]]