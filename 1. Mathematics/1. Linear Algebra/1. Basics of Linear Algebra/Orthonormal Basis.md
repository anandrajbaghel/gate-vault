---
tags:
  - linear-algebra
  - vector-spaces
  - basis
  - orthogonality
  - fourier-analysis
  - engineering-math
created: 2025-09-09
aliases:
  - Orthonormal Set
subject: "[[Mathematics]]"
parent: "[[Orthogonality]]"
confidence: 9
---

### Orthonormal Basis
#orthonormal-basis #orthogonal-basis #linear-algebra

> An **orthonormal basis** is the "best possible" kind of basis for an [[Inner Product Space|inner product space]]. It consists of vectors that are all mutually orthogonal (perpendicular) to each other and are all of unit length. Using an orthonormal basis dramatically simplifies many calculations, most notably finding the coordinates of a vector, because it eliminates the need to solve a system of linear equations.

> [!important] Layman Explanation
> An orthonormal basis is a set of “perfectly aligned” directions that are all at right angles to each other and each have length 1, making calculations clean and simple.

---
#### Definition
#orthonormal-basis/definition

A set of vectors $\mathcal{B} = \{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$ is an **orthonormal basis** for an inner product space $V$ if it satisfies two conditions:
1.  It is a **[[Basis and Dimension of a Vector Space|basis]]** for $V$.
2.  It is an **orthonormal set**: The vectors are mutually orthogonal and have a [[Norm of a Vector|norm]] of 1.

This can be concisely expressed using the **Kronecker delta**, $\delta_{ij}$:
$$\boxed{\quad \langle \mathbf{u}_i, \mathbf{u}_j \rangle = \delta_{ij} = \begin{cases} 1 & \text{if } i=j \\ 0 & \text{if } i \neq j \end{cases} \quad}$$
The standard basis $\{\mathbf{e}_1, \dots, \mathbf{e}_n\}$ in $\mathbb{R}^n$ is the most common example of an orthonormal basis.

---
#### Finding Coordinates (The "Fourier Trick")
#fourier-trick #coordinate-projection

The primary advantage of an orthonormal basis is the ease of finding the coordinates of any vector $\mathbf{v}$ with respect to it.
For a general basis, finding the coefficients $c_i$ in $\mathbf{v} = \sum c_i \mathbf{b}_i$ requires solving a system of linear equations.
For an orthonormal basis $\{\mathbf{u}_i\}$, the coefficients are found by simple projection:
$$\boxed{\quad c_i = \langle \mathbf{v}, \mathbf{u}_i \rangle \quad}$$
This means the representation of any vector $\mathbf{v}$ is given by:
$$\boxed{\quad \mathbf{v} = \sum_{i=1}^n \langle \mathbf{v}, \mathbf{u}_i \rangle \mathbf{u}_i \quad}$$
This is the fundamental principle behind the [[Fourier Series|Fourier Series]], where the coefficients of the series are found by taking the inner product (an integral) of the signal with the basis functions (sines and cosines).

---
#### Parseval's Identity
#parsevals-identity #norm-preservation

A direct and powerful consequence of using an orthonormal basis is **Parseval's Identity**, which relates the norm of a vector to the norms of its coordinates. It is a generalization of the Pythagorean theorem.
If $\mathbf{v} = \sum c_i \mathbf{u}_i$ with respect to an orthonormal basis, then:
$$\boxed{\quad ||\mathbf{v}||^2 = \sum_{i=1}^n |c_i|^2 = \sum_{i=1}^n |\langle \mathbf{v}, \mathbf{u}_i \rangle|^2 \quad}$$
This means the "energy" (squared norm) of the vector is equal to the sum of the energies of its components.

---
#### Orthonormal Bases and Orthogonal Matrices
#orthogonal-matrix

An [[Orthogonal Matrix]] is a square matrix whose columns (and rows) form an orthonormal basis. Such matrices have the highly desirable property that their inverse is equal to their transpose:
$$ Q^{-1} = Q^T $$
Linear transformations represented by orthogonal matrices are rigid motions (rotations and reflections) that preserve lengths, distances, and angles.

---
#### Construction of an Orthonormal Basis
The standard algorithm for converting any basis of an inner product space into an orthonormal basis is the [[Gram-Schmidt Orthonormalization Process]].

---
### Related Concepts
#related-concepts

> [[Gram-Schmidt Orthonormalization Process]]

[[Orthogonality]]
[[Inner Product Space]]
[[Basis and Dimension of a Vector Space]]
[[Fourier Series|Fourier Series]]
[[Orthogonal Matrices]]