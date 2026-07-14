---
tags:
  - linear-algebra
  - vector-spaces
  - inner-product
  - orthogonality
  - orthonormalization
  - engineering-math
created: 2025-09-09
aliases:
  - Gram-Schmidt Process
  - Orthonormalization
subject: "[[Mathematics]]"
parent: "[[Orthogonality]]"
---
### Gram-Schmidt Orthonormalization Process
#gram-schmidt #orthonormalization #orthogonal-basis

> The **Gram-Schmidt process** is a systematic algorithm used to convert a set of [[Linear Independence and Dependence of Vectors|linearly independent]] vectors in an [[Inner Product Space|inner product space]] into an **orthonormal set** (a set of [[Orthogonality|orthogonal]], unit vectors) that spans the same subspace. It is the standard method for constructing an orthonormal basis from an arbitrary basis.

**Goal**: Given a [[Basis and Dimension of a Vector Space|basis]] $S = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$, produce an [[Orthonormal Basis]] $\mathcal{B} = \{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$ such that $\text{Span}(S) = \text{Span}(\mathcal{B})$.

The process works in two main stages:
1.  **Orthogonalization**: Create a set of orthogonal vectors $\{\mathbf{w}_1, \dots, \mathbf{w}_n\}$.
2.  **Normalization**: Convert the orthogonal vectors into unit vectors $\{\mathbf{u}_1, \dots, \mathbf{u}_n\}$.

---
#### The Orthogonalization Algorithm
#orthogonal-projection

The core idea is to iteratively construct the orthogonal vectors. For each vector $\mathbf{v}_k$, we subtract its projections onto the previously constructed orthogonal vectors $\mathbf{w}_1, \dots, \mathbf{w}_{k-1}$. The remainder is a vector that is, by construction, orthogonal to all preceding vectors.

Let the initial basis be $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$.

*   **Step 1**: Start with the first vector.
    $$ \mathbf{w}_1 = \mathbf{v}_1 $$

*   **Step 2**: Construct the second vector.
    $$ \mathbf{w}_2 = \mathbf{v}_2 - \text{proj}_{\mathbf{w}_1}(\mathbf{v}_2) = \mathbf{v}_2 - \frac{\langle \mathbf{v}_2, \mathbf{w}_1 \rangle}{\langle \mathbf{w}_1, \mathbf{w}_1 \rangle} \mathbf{w}_1 $$

*   **Step 3**: Construct the third vector.
    $$ \mathbf{w}_3 = \mathbf{v}_3 - \text{proj}_{\mathbf{w}_1}(\mathbf{v}_3) - \text{proj}_{\mathbf{w}_2}(\mathbf{v}_3) = \mathbf{v}_3 - \frac{\langle \mathbf{v}_3, \mathbf{w}_1 \rangle}{\langle \mathbf{w}_1, \mathbf{w}_1 \rangle} \mathbf{w}_1 - \frac{\langle \mathbf{v}_3, \mathbf{w}_2 \rangle}{\langle \mathbf{w}_2, \mathbf{w}_2 \rangle} \mathbf{w}_2 $$

*   **General Step**: The k-th orthogonal vector is given by:
    $$\boxed{\quad \mathbf{w}_k = \mathbf{v}_k - \sum_{j=1}^{k-1} \text{proj}_{\mathbf{w}_j}(\mathbf{v}_k) = \mathbf{v}_k - \sum_{j=1}^{k-1} \frac{\langle \mathbf{v}_k, \mathbf{w}_j \rangle}{\langle \mathbf{w}_j, \mathbf{w}_j \rangle} \mathbf{w}_j \quad}$$

After this, we have an orthogonal set $\{\mathbf{w}_1, \mathbf{w}_2, \dots, \mathbf{w}_n\}$.

---
#### The Normalization Step
#normalization #unit-vector

To obtain the final orthonormal basis, we simply normalize each of the orthogonal vectors found in the previous stage.
$$\boxed{\quad \mathbf{u}_k = \frac{\mathbf{w}_k}{||\mathbf{w}_k||} = \frac{\mathbf{w}_k}{\sqrt{\langle \mathbf{w}_k, \mathbf{w}_k \rangle}} \quad}$$
The resulting set $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$ is an orthonormal basis for the space spanned by the original vectors.

---
#### Application: QR Decomposition
#qr-decomposition

The Gram-Schmidt process is the theoretical foundation for the **QR decomposition** of a matrix. Any invertible matrix $A$ can be factored into the product of an orthogonal matrix $Q$ and an upper triangular matrix $R$.
$$ A = QR $$
*   The columns of $A$ are the original basis vectors $\{\mathbf{v}_k\}$.
*   The columns of $Q$ are the orthonormal basis vectors $\{\mathbf{u}_k\}$ obtained from the Gram-Schmidt process.
*   The matrix $R$ contains the coefficients from the projection calculations that relate the original basis to the new orthonormal basis.

---
### Related Concepts
#related-concepts

> [[Orthogonality]]

[[Inner Product Space]]
[[Norm of a Vector]]
[[Linear Independence and Dependence of Vectors]]
[[Basis and Dimension of a Vector Space]]
[[Fourier Series|Fourier Series]] (Can be seen as applying Gram-Schmidt to a basis of functions)