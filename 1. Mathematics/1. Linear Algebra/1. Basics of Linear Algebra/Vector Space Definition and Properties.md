---
tags:
  - linear-algebra
  - vector-spaces
  - abstract-algebra
  - engineering-math
created: 2025-09-09
aliases:
  - Vector Space
  - Linear Space
  - the ten aximos
  - ten vector space aximos
  - "Example : Vector Spaces"
subject: "[[Mathematics]]"
parent: Linear Algebra
---
###### Mind Map

```mermaid
mindmap
  root((Vector Space))
    Definition
      Set of Vectors : V
      Field of Scalars : F
      Vector Addition : +
      Scalar Multiplication : ·
    Axioms : The Rules
      Addition Axioms : 5
        Closure
        Commutativity
        Associativity
        Zero Vector : Identity
        Negative Vector : Inverse
      Scalar Multiplication Axioms : 5
        Closure
        Distributivity : vector sum
        Distributivity : scalar sum
        Associativity
        Scalar Identity : 1
    Core Concepts
      Subspace
      Linear Combination
      Span
      Linear Independence
      Basis
      Dimension
    Examples
      Euclidean Space : ℝⁿ
      Matrices : M_mn
      Polynomials : P_n
      Continuous Functions C_a,b
```

---
### Vector Spaces
#vector-spaces #linear-algebra #abstract-algebra

> A **vector space** (or linear space) is the fundamental structure of linear algebra. It is a collection of objects called **vectors**, which can be added together and multiplied ("scaled") by numbers called **scalars**. For a set to be a vector space, these two operations must obey a set of ten simple rules or [[axioms]]. This abstract definition allows objects like matrices, polynomials, and functions to be treated as "vectors".


> [!concept] Vector
> The word “vector” always means _an element of a vector space_; the object may look like an arrow $\vec{v}$, a matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$, a polynomial $p(x)$, or a function $f(t)$, but if it obeys the [[#Formal Definition|vector space rules]], it is called a vector.

---
#### Formal Definition
#vector-space/axioms

A vector space over a field $F$ of scalars (typically the real numbers $\mathbb{R}$) is a non-empty set $V$ of vectors, equipped with two operations:
1.  **Vector Addition**: $(\mathbf{u}, \mathbf{v}) \mapsto \mathbf{u} + \mathbf{v}$
2.  **Scalar Multiplication**: $(c, \mathbf{v}) \mapsto c\mathbf{v}$

These operations must satisfy the following ten axioms for all vectors $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$ and all scalars $c, d \in F$.

##### The Ten Axioms

1.  **Closure under Addition**: If $\mathbf{u}, \mathbf{v} \in V$, then $\mathbf{u} + \mathbf{v} \in V$.
2.  **Commutativity of Addition**: $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$.
3.  **Associativity of Addition**: $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$.
4.  **Existence of an Additive Identity**: There exists a **zero vector** $\mathbf{0} \in V$ such that $\mathbf{v} + \mathbf{0} = \mathbf{v}$ for all $\mathbf{v} \in V$.
5.  **Existence of an Additive Inverse**: For each $\mathbf{v} \in V$, there exists a vector $-\mathbf{v} \in V$ such that $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$.
6.  **Closure under Scalar Multiplication**: If $c \in F$ and $\mathbf{v} \in V$, then $c\mathbf{v} \in V$.
7.  **Distributivity over Vector Addition**: $c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$.
8.  **Distributivity over Scalar Addition**: $(c+d)\mathbf{v} = c\mathbf{v} + d\mathbf{v}$.
9.  **Associativity of Scalar Multiplication**: $c(d\mathbf{v}) = (cd)\mathbf{v}$.
10. **Existence of a Multiplicative Identity**: The scalar identity $1$ exists such that $1\mathbf{v} = \mathbf{v}$.

---
#### Fundamental Concepts within a Vector Space
#linear-combination #span #basis #dimension

1. **[[Subspaces#Subspaces|Subspace]]**: A non-empty subset of a vector space that is itself a vector space under the same operations. To check, one only needs to verify closure under addition and scalar multiplication.
2. **Linear Combination**: A vector $\mathbf{w}$ is a linear combination of vectors $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$ if it can be written as $\mathbf{w} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k$ for some scalars $c_i$.
3. **[[Span of a Set of Vectors#Span of a Set of Vectors|Span]]**: The set of all possible linear combinations of a set of vectors. The span of a set of vectors always forms a subspace.
4. **[[Linear Independence and Dependence of Vectors#How to Determine Linear Independence|Linear Independence]]**: A set of vectors is linearly independent if no vector in the set can be written as a linear combination of the others.
5. **[[Basis and Dimension of a Vector Space#Basis|Basis]]**: A set of vectors that is both **linearly independent** and **spans** the entire vector space. A basis provides a coordinate system for the space.
6. **[[Basis and Dimension of a Vector Space#Dimension|Dimension]]**: The number of vectors in any basis for the vector space. This is a unique and fundamental property of the space.

#### Common Examples of Vector Spaces

*   **$\mathbb{R}^n$**: The set of all $n$-tuples of real numbers, e.g., $(x_1, x_2, \dots, x_n)$. This is the most common and intuitive vector space.
*   **$M_{m \times n}$**: The set of all $m \times n$ matrices with real entries.
*   **$P_n$**: The set of all polynomials of degree less than or equal to $n$.
*   **$C[a, b]$**: The set of all real-valued continuous functions on the interval $[a, b]$. This is an example of an infinite-dimensional vector space.

---
### Related Concepts
#related-concepts

> [[Linear Independence and Dependence of Vectors|Linear Independence]]

[[Basis and Dimension of a Vector Space]]
[[Subspaces|Subspace]]
[[Linear Transformation|Linear Transformation]] (Functions between vector spaces that preserve the structure)
[[Inner Product Space|Inner Product Space]] (Vector spaces with an added structure of an inner product, defining length and angle)
