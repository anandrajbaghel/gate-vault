---
tags:
  - linear-algebra
  - matrix-theory
  - determinants
  - matrix-properties
  - engineering-math
created: 2025-09-09
aliases:
  - Determinant
  - det(A)
  - Row Operation (and when not to use)
  - Minor
  - Cofactor
subject: "[[Mathematics]]"
parent: Linear Algebra
gate-importance: medium
define:
  - "Minor : For matrix $A$, $M_{ij}$ is the **minor**, which is the determinant of the submatrix formed by deleting row $i$ and column $j$."
  - "Cofactor : For matrix $A$, $$C_{ij} = (-1)^{i+j} M_{ij}$$ is the cofactor of element $$A_{ij}$$."
---
### Determinant of a Matrix
#determinants #matrix-properties #linear-algebra

> The **determinant** is a unique scalar value that can be computed from the elements of a square matrix. It encodes fundamental properties of the matrix and its corresponding linear transformation. ==Geometrically, it represents the volume scaling factor of the transformation, and algebraically, it tells us whether the matrix is invertible.==

#### Geometric Interpretation
#geometric-interpretation #scaling-factor

The determinant of a matrix $A$ provides two key pieces of geometric information about the linear transformation $T(\mathbf{x}) = A\mathbf{x}$:

1.  **Magnitude**: The absolute value $|\det(A)|$ represents the scaling factor for area (in $\mathbb{R}^2$) or volume (in $\mathbb{R}^3$). A unit square in $\mathbb{R}^2$ is transformed into a parallelogram with area $|\det(A)|$.
2.  **Orientation**: The sign of the determinant indicates whether the transformation preserves or reverses orientation.
    *   **$\det(A) > 0$**: Orientation is preserved (e.g., a "right-hand rule" system remains right-handed).
    *   **$\det(A) < 0$**: Orientation is reversed (e.g., a reflection).
    *   **$\det(A) = 0$**: The transformation collapses the space into a lower dimension (e.g., a 3D volume is squashed into a plane or line), resulting in zero volume.

---
#### Calculation of the Determinant
#determinant-calculation #cofactor-expansion

* **For a 2x2 Matrix**:
    $$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc $$

* **Cofactor Expansion (General Method)**: The determinant can be calculated by expanding along any row or column. The expansion along row $i$ is:
    $$ \det(A) = \sum_{j=1}^n A_{ij} C_{ij} $$
    where $C_{ij}$ is the **[[Minors and Cofactors#Cofactor ($C_{ij}$ or $A_{ij}$)|cofactor]]** of the element $A_{ij}$, given by:
    ![[Minors and Cofactors#^cofactor]]
    and $M_{ij}$ is the **[[Minors and Cofactors#Minor ($M_{ij}$)|minor]]**, which is the determinant of the submatrix formed by deleting row $i$ and column $j$.

* **Using Row Operations**: A more efficient method for larger matrices is to use row operations to transform $A$ into an upper triangular matrix $U$. The determinant of a triangular matrix is the product of its diagonal entries. The effect of row operations must be tracked:
    1. ==Swapping two rows: Multiplies the determinant by -1.==
    2. ==Multiplying a row by a scalar $k$: Multiplies the determinant by $k$.==
    3. ==Adding a multiple of one row to another: Does not change the determinant.==

> [!mistake] When not to use Row Operation
> They must _not_ be applied to a single matrix inside a product like $ABC$, because they change that matrix and therefore change the entire result.
> 
> Row operations are allowed only when solving equations (e.g., on an [[Gaussian Elimination Method|augmented matrix]] $[A|b]$).

---
#### Properties of Determinants
#determinant-properties

For $n \times n$ matrices $A$ and $B$:

1.  **Multiplicative Property**:
    $$\boxed{\quad \det(AB) = \det(A) \det(B) \quad}$$

^multiplicative-property

2.  **Transpose**: The determinant of a matrix is equal to the determinant of its transpose.
    $$ \det(A^T) = \det(A) $$

^transpose-property

3.  **Inverse**:
    $$\boxed{\quad \det(A^{-1}) = \frac{1}{\det(A)} \quad}$$

^inverse-property

4.  **Scalar Multiple**: If $k$ is a scalar:
    $$\boxed{\quad \det(kA) = k^n \det(A) \quad}$$

^scalar-multiple-property

5.  **Zero Determinant**: $\det(A) = 0$ if and only if:
    * $A$ is singular (not invertible).
    * The rows or columns of $A$ are linearly dependent.
    * $A$ has a row or column of zeros.

^zero-determinant-property

---
#### Determinants and Invertibility
#invertible-matrix

The most crucial application of the determinant is as a test for invertibility.

> [!important]
> ==A square matrix $A$ is invertible if and only if its determinant is non-zero.==
> $$\boxed{\quad A \text{ is invertible} \iff \det(A) \neq 0 \quad}$$
^invertible

---
### Related Concepts
#related-concepts

> [[Inverse of a Matrix]]

[[Minors and Cofactors]]
[[Matrix Operations]]
[[Eigenvalues and Eigenvectors]] (used in the characteristic equation)
[[Block Matrices|Block Matrix]]
[[Linear Independence and Dependence of Vectors|Linear Independence]]
[[Cramer's Rule]]
