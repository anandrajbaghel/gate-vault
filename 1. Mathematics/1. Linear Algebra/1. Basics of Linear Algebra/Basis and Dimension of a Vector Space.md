---
tags:
  - linear-algebra
  - vector-spaces
  - basis
  - dimension
  - engineering-math
created: 2025-09-09
aliases:
  - Basis
  - Dimension
  - Vector Space Basis
  - Vector Space Dimension
subject: "[[Mathematics]]"
parent: Linear Algebra
---

### Basis and Dimension
#basis #dimension #linear-algebra #vector-space

> A **basis** is a set of vectors from a [[Vector Space Definition and Properties|vector space]] that can be thought of as its fundamental building blocks. It is the most efficient set of vectors needed to represent every other vector in the space. The **dimension** is simply the number of vectors in a basis. Together, these concepts provide a precise way to measure the "size" or "degrees of freedom" of a vector space.

> [!tip] Basis & Dimension (Intuition)
> A basis is the smallest set of independent directions needed to describe every vector in a space.
> The dimension is simply how many such independent directions you need.

---
#### Basis
#basis-definition

A set of vectors $\mathcal{B} = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$ in a vector space $V$ is a **basis** for $V$ if it satisfies two crucial conditions:

1. **Linear Independence**: The set $\mathcal{B}$ must be [[Linear Independence and Dependence of Vectors|linearly independent]]. (No vector is redundant).
2. **Spanning Set**: The set $\mathcal{B}$ must span the entire space $V$, meaning every vector in $V$ can be written as a linear combination of vectors in $\mathcal{B}$.

A basis is a "minimal spanning set" or a "maximal linearly independent set."

**Unique Representation**
A key consequence of these two conditions is that any vector $\mathbf{u} \in V$ can be expressed as a linear combination of the basis vectors in **exactly one way**.
$$\boxed{\quad \mathbf{u} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_n\mathbf{v}_n \quad}$$
The scalars $(c_1, c_2, \dots, c_n)$ are called the **coordinates** of $\mathbf{u}$ with respect to the basis $\mathcal{B}$.

* **Standard Basis for $\mathbb{R}^n$**: The most common basis for $\mathbb{R}^n$ is the set of standard unit vectors $\{\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n\}$, where $\mathbf{e}_i$ is a vector with a 1 in the i-th position and zeros elsewhere.

---
#### Dimension
#dimension-definition

The **dimension** of a non-zero vector space $V$, denoted $\dim(V)$, is the number of vectors in any basis for $V$.
A crucial theorem in linear algebra states that while a vector space can have infinitely many different bases, **all bases for a given vector space contain the same number of vectors**. This makes the dimension a well-defined, fundamental property of the space itself.

* The dimension of the zero space $\{\mathbf{0}\}$ is defined to be 0.
##### Examples of Dimensions

* $\dim(\mathbb{R}^n) = n$
* $\dim(P_n)$ (polynomials of degree $\le n$) = $n+1$, since the basis is $\{1, x, x^2, \dots, x^n\}$.
* $\dim(M_{m \times n})$ (all $m \times n$ matrices) = $mn$.

---
#### Finding a Basis for Fundamental Subspaces
#basis-computation #fundamental-subspaces

For an $m \times n$ matrix $A$:

1. **Basis for the Column Space $C(A)$**:
    * Row reduce $A$ to its echelon form.
    * The columns in the **original matrix $A$** that correspond to the pivot columns in the echelon form constitute a basis for $C(A)$.

2. **Basis for the Row Space $C(A^T)$**:
    * The **non-zero rows** of the row-reduced echelon form (RREF) of $A$ form a basis for $C(A^T)$.

3. **Basis for the Null Space $N(A)$**:
    * Solve the homogeneous system $A\mathbf{x}=\mathbf{0}$.
    * Write the general solution in parametric vector form, expressing the basic variables in terms of the free variables.
    * The vectors that are multiplied by the free parameters form a basis for $N(A)$.

---
#### The Rank-Nullity Theorem
#rank-nullity-theorem

This theorem provides a fundamental relationship between the dimensions of the four fundamental subspaces of an $m \times n$ matrix $A$.

* The **rank** of A is $\text{rank}(A) = \dim(C(A))$.
* The **nullity** of A is $\text{nullity}(A) = \dim(N(A))$.

The theorem states:
$$\begin{align}
\dim(C(A)) + \dim(N(A)) &= n \quad (\text{number of columns}) \\
\text{rank}(A) + \text{nullity}(A) &= n
\end{align}$$
This means the number of pivot columns (rank) plus the number of free variable columns (nullity) equals the total number of columns.

---
### Related Concepts
#related-concepts

> [[Linear Independence and Dependence of Vectors|Linear Independence]]

[[Vector Space Definition and Properties|Vector Spaces]]
[[Subspaces|Subspace]]
[[Span of a Set of Vectors|Span]]
[[Linear Transformation|Linear Transformation]]
[[Orthogonality]]