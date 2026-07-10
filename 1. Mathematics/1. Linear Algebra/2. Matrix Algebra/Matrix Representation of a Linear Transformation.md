---
tags:
  - linear-algebra
  - linear-transformation
  - matrix-representation
  - coordinate-systems
  - engineering-math
created: 2025-09-09
aliases:
  - Matrix of a Linear Transformation
  - Standard Matrix
  - "Example : Matrix Representation of a Linear Transformation"
subject: "[[Mathematics]]"
parent: "[[Linear Transformation|Linear Transformations]]"
confidence: 9
---
### Matrix Representation of a Linear Transformation
#matrix-representation #linear-algebra

> The most powerful computational idea in linear algebra is that every linear transformation between finite-dimensional vector spaces can be represented by a matrix. This allows us to convert the abstract operation of a transformation into the concrete, arithmetic operation of matrix-vector multiplication, which is ideal for computation.

---
#### The Standard Matrix for $T: \mathbb{R}^n \to \mathbb{R}^m$
#standard-matrix

For any linear transformation $T$ that maps vectors from $\mathbb{R}^n$ to $\mathbb{R}^m$, there exists a unique $m \times n$ matrix $A$, called the **standard matrix**, such that:
$$ T(\mathbf{x}) = A\mathbf{x} $$
This matrix is straightforward to construct. Its columns are the images of the standard basis vectors of the domain $\mathbb{R}^n$ under the transformation $T$.

**Construction:**
Let $\{\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n\}$ be the standard basis for $\mathbb{R}^n$. The standard matrix $A$ is given by:
$$\boxed{\quad A = \begin{bmatrix} | & | & & | \\ T(\mathbf{e}_1) & T(\mathbf{e}_2) & \dots & T(\mathbf{e}_n) \\ | & | & & | \end{bmatrix} \quad}$$

**Example**: Find the standard matrix for the transformation $T: \mathbb{R}^2 \to \mathbb{R}^2$ that rotates a vector $90^\circ$ counter-clockwise.
1. Find $T(\mathbf{e}_1) = T\begin{pmatrix}1 \\ 0\end{pmatrix} = \begin{pmatrix}0 \\ 1\end{pmatrix}$.
2. Find $T(\mathbf{e}_2) = T\begin{pmatrix}0 \\ 1\end{pmatrix} = \begin{pmatrix}-1 \\ 0\end{pmatrix}$.
3. The standard matrix is $A = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$.

---
#### Matrix with Respect to Arbitrary Bases
#change-of-basis #coordinate-mapping

When dealing with abstract vector spaces (like spaces of polynomials) or non-standard bases, we can still find a matrix representation. This matrix converts coordinate vectors from one basis to another.

Let $T: V \to W$ be a linear transformation, with:
*   $\mathcal{B} = \{\mathbf{b}_1, \dots, \mathbf{b}_n\}$ as a basis for the domain $V$.
*   $\mathcal{C} = \{\mathbf{c}_1, \dots, \mathbf{c}_m\}$ as a basis for the codomain $W$.

The goal is to find a matrix $M$ that maps the $\mathcal{B}$-coordinates of a vector $\mathbf{x}$ to the $\mathcal{C}$-coordinates of its image $T(\mathbf{x})$:
$$ [T(\mathbf{x})]_\mathcal{C} = M [\mathbf{x}]_\mathcal{B} $$
This matrix, denoted $[T]_\mathcal{B}^\mathcal{C}$, is constructed as follows:
$$\boxed{\quad [T]_\mathcal{B}^\mathcal{C} = \begin{bmatrix} | & | & & | \\ [T(\mathbf{b}_1)]_\mathcal{C} & [T(\mathbf{b}_2)]_\mathcal{C} & \dots & [T(\mathbf{b}_n)]_\mathcal{C} \\ | & | & & | \end{bmatrix} \quad}$$
The j-th column of this matrix is the coordinate vector of $T(\mathbf{b}_j)$ with respect to the basis $\mathcal{C}$.

---
#### Composition and Matrix Multiplication
#composition #matrix-multiplication

One of the most elegant properties of this representation is how it handles the composition of transformations. If we apply one transformation followed by another, the matrix of the overall composite transformation is simply the product of the individual matrices.

Let $T_1: U \to V$ and $T_2: V \to W$ be linear transformations. The composite transformation is $(T_2 \circ T_1)(\mathbf{x}) = T_2(T_1(\mathbf{x}))$. The matrix representing this composition is:
$$\boxed{\quad [T_2 \circ T_1] = [T_2][T_1] \quad}$$
**Note:** The order of matrix multiplication is important and must match the order of the transformations (applied from right to left).

---
### Related Concepts
#related-concepts

> [[Linear Transformation]]

[[Basis and Dimension of a Vector Space]]
[[Change of Basis]]
[[Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
[[Matrices]]
[[Vector Space Definition and Properties]]
