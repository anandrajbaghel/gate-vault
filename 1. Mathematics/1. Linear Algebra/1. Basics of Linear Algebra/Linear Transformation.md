---
tags:
  - linear-algebra
  - vector-spaces
  - linear-transformation
  - matrix-representation
  - engineering-math
created: 2025-09-09
aliases:
  - Linear Mapping
  - Linear Operator
  - Kernel
  - "Video : Linear Transformation (Linear Algebra) (3Blue1Brown)"
subject: "[[Mathematics]]"
parent:
  - Linear Algebra
youtube:
  - kYB8IZa5AuE
---
### Linear Transformations
#linear-transformation #linear-algebra #vector-space

> A **linear transformation** is a special type of function, or mapping, between two [[Vector Space Definition and Properties|vector spaces]] that preserves the underlying linear structure of the spaces. Specifically, it preserves the operations of vector addition and scalar multiplication. This means that applying the transformation to a linear combination of vectors is the same as applying it to each vector individually and then taking the same linear combination of the results.

In essence, linear transformations are the "structure-preserving" functions of linear algebra.

#### Definition
#linear-transformation/definition

A transformation (or mapping) $T$ from a vector space $V$ to a vector space $W$, denoted $T: V \to W$, is a **linear transformation** if for all vectors $\mathbf{u}, \mathbf{v}$ in $V$ and for any scalar $c$, the following two properties hold:

1.  **Additivity**: $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$
2.  **Homogeneity**: $T(c\mathbf{u}) = cT(\mathbf{u})$

These two properties can be combined into a single condition:
$$\boxed{\quad T(c\mathbf{u} + d\mathbf{v}) = cT(\mathbf{u}) + dT(\mathbf{v}) \quad}$$
for any vectors $\mathbf{u}, \mathbf{v}$ and any scalars $c, d$.

An immediate consequence of this definition is that a linear transformation always maps the zero vector of the domain to the zero vector of the codomain: $T(\mathbf{0}_V) = \mathbf{0}_W$.

---
#### The Matrix of a Linear Transformation
#matrix-representation

A fundamental result in linear algebra is that every linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ can be represented by a unique $m \times n$ matrix $A$, such that applying the transformation is equivalent to matrix multiplication.
$$\boxed{\quad T(\mathbf{x}) = A\mathbf{x} \quad}$$
This **standard matrix** $A$ is found by applying the transformation $T$ to each of the standard basis vectors $\{\mathbf{e}_1, \dots, \mathbf{e}_n\}$ of the domain $\mathbb{R}^n$. The resulting vectors form the columns of $A$.
$$\boxed{\quad A = \begin{bmatrix} | & | & & | \\ T(\mathbf{e}_1) & T(\mathbf{e}_2) & \dots & T(\mathbf{e}_n) \\ | & | & & | \end{bmatrix} \quad}$$
> [!warning] Determining a Linear Transformation
> In $\mathbb{R}^2$, a general linear transformation requires two linearly independent input vectors to determine its matrix.
> A single vector is sufficient only when the transformation is known to be orthogonal (pure [[Rotation Matrix|rotation]] or reflection), since length preservation removes scaling ambiguity.

---
#### Kernel and Range
#kernel #range #null-space #column-space

Two crucial subspaces are associated with any linear transformation $T: V \to W$.

1.  **Kernel (or Null Space)** of $T$:
    *   The set of all vectors in the domain $V$ that are mapped to the zero vector in the codomain $W$.
    *   $\text{ker}(T) = \{\mathbf{x} \in V \mid T(\mathbf{x}) = \mathbf{0}\}$.
    *   The kernel of $T$ is the same as the [[Fundamental Subspaces of a Matrix|Null Space]] of its standard matrix $A$, i.e., $\text{ker}(T) = N(A)$.
    *   $T$ is **one-to-one** (injective) if and only if $\text{ker}(T) = \{\mathbf{0}\}$.

2.  **Range (or Image)** of $T$:
    *   The set of all possible output vectors in the codomain $W$. It is the image of the domain $V$ under the transformation $T$.
    *   $\text{range}(T) = \{T(\mathbf{x}) \mid \mathbf{x} \in V\}$.
    *   The range of $T$ is the same as the [[Fundamental Subspaces of a Matrix|Column Space]] of its standard matrix $A$, i.e., $\text{range}(T) = C(A)$.
    *   $T$ is **onto** (surjective) if and only if $\text{range}(T) = W$ (the entire codomain).

#### The Rank-Nullity Theorem for Transformations
This theorem provides a powerful link between the dimensions of the domain, kernel, and range. For a linear transformation $T: V \to W$, where $V$ is finite-dimensional:
$$\boxed{\quad \dim(\text{ker}(T)) + \dim(\text{range}(T)) = \dim(V) \quad}$$
In terms of matrices, this is the familiar [[Rank-Nullity Theorem]]: $\text{nullity}(A) + \text{rank}(A) = n$.

---
### Related Concepts
#related-concepts

> [[Vector Space Definition and Properties]]

[[Rotation Matrix]]
[[Fundamental Subspaces of a Matrix]]
[[Rank-Nullity Theorem]]
[[Basis and Dimension of a Vector Space]]
[[Linear Independence and Dependence of Vectors|Linear Independence]]
[[Matrix Operations]]
