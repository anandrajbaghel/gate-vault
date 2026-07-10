---
tags:
  - linear-algebra
  - vector-spaces
  - linear-transformation
  - rank-nullity
  - fundamental-subspaces
  - engineering-math
created: 2025-09-09
aliases:
  - Rank-Nullity Theorem
  - Rank and Nullity
  - Kernel
subject: "[[Mathematics]]"
parent: "[[Linear Transformation|Linear Transformations]]"
confidence: 9
---

```mermaid
mindmap
  root((Rank & Nullity))
    Definitions
      Rank(T)
        Dimension of the Range/Image
        dim(range(T)) or dim(C(A))
        Measures the "size" of the output
      Nullity(T)
        Dimension of the Kernel/Null Space
        dim(ker(T)) or dim(N(A))
        Measures the "size" of the input mapped to zero
    Rank-Nullity Theorem
      Statement
        rank(T) + nullity(T) = dim(Domain)
      Intuition
        "Dimensions preserved" + "Dimensions lost" = "Total input dimensions"
    Connection to Matrix Properties
      Rank(A)
        Number of pivots in RREF(A)
      Nullity(A)
        Number of free variables / non-pivot columns
    Relationship with Injectivity & Surjectivity
      Injectivity (One-to-One)
        T is one-to-one ⇔ ker(T) = {**0**} ⇔ nullity(T) = 0
      Surjectivity (Onto)
        T is onto ⇔ range(T) = Codomain ⇔ rank(T) = dim(Codomain)
```

---
### Rank and Nullity of a Linear Transformation
#rank-nullity #linear-algebra #vector-space

> For a linear transformation, **rank** and **nullity** are two fundamental numbers that describe its behavior. The **rank** measures the dimension of the output space (the range), telling us how much information is preserved. The **nullity** measures the dimension of the input space that gets "crushed" to zero (the kernel), telling us how much information is lost. The Rank-Nullity Theorem provides a simple, powerful equation connecting these two values to the dimension of the domain.

---
#### Definitions
#rank #nullity #kernel #range

Let $T: V \to W$ be a linear transformation between two vector spaces.

1.  **Rank**: The **rank** of $T$, denoted $\text{rank}(T)$, is the dimension of the range of $T$.
    $$\boxed{\quad \text{rank}(T) = \dim(\text{range}(T)) \quad}$$
    If $A$ is the matrix representation of $T$, then the range of $T$ is the column space of $A$, so $\text{rank}(T) = \text{rank}(A)$. This is equal to the number of pivot columns in the row-reduced form of $A$.

2.  **Nullity**: The **nullity** of $T$, denoted $\text{nullity}(T)$, is the dimension of the kernel of $T$.
    $$\boxed{\quad \text{nullity}(T) = \dim(\text{ker}(T)) \quad}$$
    The kernel of $T$ is the null space of its matrix $A$, so $\text{nullity}(T) = \text{nullity}(A)$. This is equal to the number of free variables in the solution to $A\mathbf{x}=\mathbf{0}$, which corresponds to the number of non-pivot columns.

---
#### The Rank-Nullity Theorem
#rank-nullity-theorem

This is one of the most important theorems in linear algebra. For a linear transformation $T: V \to W$, where $V$ is a finite-dimensional vector space, the theorem states:
$$\begin{align}
\dim(\text{range}(T)) + \dim(\text{ker}(T)) &= \dim(V) \\
\text{rank}(T) + \text{nullity}(T) &= \dim(\text{Domain})
\end{align}$$
For an $m \times n$ matrix $A$ representing the transformation $T: \mathbb{R}^n \to \mathbb{R}^m$, the dimension of the domain is $n$ (the number of columns). The theorem becomes:
$$\boxed{\quad \text{rank}(A) + \text{nullity}(A) = n \quad}$$

**Intuition**: The dimension of the input space ($n$) is accounted for by the dimensions that are preserved and mapped to the output space (the rank) and the dimensions that are collapsed into the zero vector (the nullity).

---
#### Connection to Injectivity and Surjectivity
#one-to-one #onto

Rank and nullity provide a precise way to determine if a transformation is one-to-one (injective) or onto (surjective). Let $T: V \to W$ be a linear transformation.

*   **Injectivity (One-to-One)**: A transformation is one-to-one if distinct inputs map to distinct outputs. This happens when the only vector that maps to zero is the zero vector itself.
    $$\boxed{\quad T \text{ is one-to-one} \iff \text{ker}(T) = \{\mathbf{0}\} \iff \text{nullity}(T) = 0 \quad}$$

*   **Surjectivity (Onto)**: A transformation is onto if its range covers the entire codomain $W$.
    $$\boxed{\quad T \text{ is onto} \iff \text{range}(T) = W \iff \text{rank}(T) = \dim(W) \quad}$$

**Important Implication**: For a linear transformation $T: V \to V$ between spaces of the *same dimension*, the Rank-Nullity theorem implies that T is one-to-one **if and only if** it is onto.

---
### Related Concepts
#related-concepts

> [[Linear Transformation]]

[[Fundamental Subspaces of a Matrix]]
[[Basis and Dimension of a Vector Space]]
[[Vector Space Definition and Properties]]
[[Matrix Representation of a Linear Transformation]]
