---
tags:
  - linear-algebra
  - vector-spaces
  - inner-product
  - length-magnitude
  - engineering-math
created: 2025-09-09
aliases:
  - Norm
  - Vector Norm
  - Vector Length
  - Magnitude of a Vector
subject: "[[Mathematics]]"
parent: "[[Inner Product Space]]"
confidence: 9
---

### Norm of a Vector
#norm #vector-length #magnitude #linear-algebra

> The **norm** of a vector is a function that assigns a strictly positive length or size to each vector in a vector space (with the exception of the zero vector, which has a norm of zero). It generalizes the intuitive concept of "length" from two and three-dimensional Euclidean space to more abstract vector spaces.

#### Norm Induced by an Inner Product
#induced-norm #inner-product

In an [[Inner Product Space|inner product space]], a norm is naturally defined or "induced" by the inner product. This is the most common and intuitive definition of a norm.

The norm of a vector $\mathbf{v}$, denoted $||\mathbf{v}||$, is defined as the square root of the inner product of the vector with itself:
$$\boxed{\quad ||\mathbf{v}|| = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle} \quad}$$

#### Axiomatic Definition of a Norm
#norm-axioms

More generally, a function $||\cdot||: V \to \mathbb{R}$ is a norm on a vector space $V$ if it satisfies the following three properties for all vectors $\mathbf{u}, \mathbf{v} \in V$ and any scalar $c$:

1.  **Positive Definiteness**: $||\mathbf{v}|| \ge 0$, and $||\mathbf{v}|| = 0$ if and only if $\mathbf{v} = \mathbf{0}$.
2.  **Absolute Homogeneity**: $||c\mathbf{v}|| = |c| \ ||\mathbf{v}||$.
3.  **Triangle Inequality**: $||\mathbf{u} + \mathbf{v}|| \le ||\mathbf{u}|| + ||\mathbf{v}||$.

---
#### Common Vector Norms (The $L^p$-norms)
#p-norm #euclidean-norm #manhattan-norm

For a vector $\mathbf{x} = (x_1, x_2, \dots, x_n)$ in $\mathbb{R}^n$, the family of $L^p$-norms is widely used.

*   **$L^1$-Norm (Manhattan or Taxicab Norm)**:
    $$\boxed{\quad ||\mathbf{x}||_1 = \sum_{i=1}^n |x_i| \quad}$$
    This measures the distance by summing the absolute differences of the components, as if traveling on a grid.

*   **$L^2$-Norm (Euclidean Norm)**:
    $$\boxed{\quad ||\mathbf{x}||_2 = \sqrt{\sum_{i=1}^n |x_i|^2} \quad}$$
    This is the standard, "straight-line" distance that we are most familiar with. It is the norm induced by the standard dot product.

*   **$L^\infty$-Norm (Maximum or Chebyshev Norm)**:
    $$\boxed{\quad ||\mathbf{x}||_\infty = \max_{i} |x_i| \quad}$$
    This is simply the largest absolute value among the components of the vector.

---
#### Unit Vectors and Normalization
#unit-vector #normalization

*   A **Unit Vector** is a vector whose norm is equal to 1. Unit vectors are often used to represent direction.

*   **Normalization** is the process of creating a unit vector from a non-zero vector $\mathbf{v}$ by dividing it by its own norm. The resulting unit vector, denoted $\mathbf{\hat{v}}$, points in the same direction as $\mathbf{v}$.
    $$\boxed{\quad \mathbf{\hat{v}} = \frac{\mathbf{v}}{||\mathbf{v}||} \quad}$$

---
### Related Concepts
#related-concepts

> [[Inner Product Space]]

[[Vector Space Definition and Properties]]
[[Orthogonality]]
[[Distance]] (The distance between two vectors $\mathbf{u}$ and $\mathbf{v}$ is defined as the norm of their difference, $||\mathbf{u}-\mathbf{v}||$)