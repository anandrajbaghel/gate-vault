---
tags:
  - linear-algebra
  - matrix-theory
  - orthogonal-matrix
  - rotations
  - orthonormal-basis
  - engineering-math
created: 2025-09-09
aliases:
  - Orthogonal Matrix
  - Orthogonal Transformation
subject: "[[Mathematics]]"
parent: Linear Algebra
formula:
  - "Orthogonal Matrices : $$A^{-1} = A^T$$"
---
### Orthogonal Matrices
#orthogonal-matrix #linear-algebra #rotations

> An **orthogonal matrix** is a square matrix whose columns (and rows) form an [[Orthonormal Basis]]. This special structure gives them a highly desirable computational property: their inverse is simply their transpose. Geometrically, transformations represented by orthogonal matrices are "rigid motions" like rotations and reflections, which preserve the length of vectors and the angles between them.

#### Definition
#orthogonal-matrix/definition

A square matrix $Q$ with real entries is **orthogonal** if its inverse is equal to its transpose:
$$\boxed{\quad Q^{-1} = Q^T \quad}$$
This is equivalent to the condition that multiplying the matrix by its transpose yields the identity matrix:
$$\boxed{\quad Q^T Q = Q Q^T = I \quad}$$

**Warning on Terminology**: The term "orthogonal matrix" is a slight misnomer. A more accurate name would be "orthonormal matrix," as its columns/rows are not just orthogonal but must also be normalized to unit length.

---
#### Key Properties
#orthogonal-matrix/properties

1.  **Orthonormal Columns/Rows**: The columns of an orthogonal matrix form an orthonormal basis for $\mathbb{R}^n$. The same is true for the rows.
2.  **Preservation of Inner Product**: An orthogonal matrix preserves the dot product between vectors.
    $$\boxed{\quad (Q\mathbf{x}) \cdot (Q\mathbf{y}) = \mathbf{x} \cdot \mathbf{y} \quad}$$
3.  **Preservation of Norm (Length)**: As a consequence, it preserves the length of vectors.
    $$\boxed{\quad ||Q\mathbf{x}|| = ||\mathbf{x}|| \quad}$$
4.  **Preservation of Angles**: Since the dot product and norms are preserved, the angle between vectors is also preserved.

---
#### Geometric Interpretation
#geometric-interpretation #rigid-motion

A linear transformation $T(\mathbf{x}) = Q\mathbf{x}$ where $Q$ is an orthogonal matrix is a **rigid motion** or an **isometry**. It transforms the space without distorting shapes. Every orthogonal transformation is either a **rotation** or a **reflection** (or a combination thereof).

The determinant of an orthogonal matrix provides a clear distinction:
*   **$\det(Q) = +1$**: The transformation is a **pure rotation**. It preserves the orientation of the space (e.g., maintains "right-handedness"). These matrices form the special orthogonal group $SO(n)$.
*   **$\det(Q) = -1$**: The transformation involves a **reflection**. It reverses the orientation of the space (e.g., turns a right hand into a left hand).

---
#### Other Important Properties

*   **Eigenvalues**: The eigenvalues of an orthogonal matrix are not necessarily real, but they always lie on the unit circle in the complex plane, i.e., they have a magnitude of 1 ($|\lambda|=1$).
*   **Product**: The product of two orthogonal matrices is another orthogonal matrix.
*   **Inverse**: The inverse of an orthogonal matrix is orthogonal (since $(Q^{-1})^{-1} = Q = (Q^T)^T = (Q^{-1})^T$).

---
#### Applications

*   **QR Decomposition**: A fundamental matrix factorization where a matrix $A$ is decomposed into $A=QR$, with $Q$ being orthogonal and $R$ upper triangular.
*   **Orthogonal Diagonalization**: A [[Symmetric Matrices|symmetric matrix]] $A$ can be diagonalized as $A = PDP^T$, where $P$ is an orthogonal matrix.
*   **Computer Graphics and Robotics**: Used extensively to perform rotations of objects and coordinate frames without scaling or shearing.

---
### Related Concepts
#related-concepts

> [[Orthonormal Basis]]

[[Symmetric Matrices]]
[[Gram-Schmidt Orthonormalization Process]]
[[Unitary Matrices]] (The complex-number equivalent)
[[Diagonalization of a Matrix]]