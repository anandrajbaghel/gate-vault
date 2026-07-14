---
tags:
  - linear-algebra
  - eigenvalues
  - eigenvectors
  - eigenspace
  - multiplicity
created: 2026-05-21
aliases:
  - Eigenspace
  - Algebraic Multiplicity
  - Geometric Multiplicity
subject:
  - "[[Mathematics]]"
parent: "[[Eigenvalues and Eigenvectors]]"
formula:
  - "Eigenspace of a matrix : $$E_\\lambda = N(A - \\lambda I)$$"
---
### Eigenspaces and Multiplicity
#eigenspace

> For a given eigenvalue $\lambda$, the set of all its corresponding eigenvectors, together with the zero vector, forms a [[Subspaces|subspace]] called the **eigenspace** of $\lambda$, denoted $E_\lambda$.

The eigenspace $E_\lambda$ is precisely the [[Fundamental Subspaces of a Matrix|Null Space]] of the matrix $(A - \lambda I)$.
$$\boxed{\quad E_\lambda = N(A - \lambda I) = \{\mathbf{x} \in \mathbb{R}^n \mid (A - \lambda I)\mathbf{x} = \mathbf{0}\} \quad}$$

> [!important] Condition for $n$ Linearly Independent Eigenvectors
> 
> A matrix $A \in \mathbb{R}^{n \times n}$ has $n$ linearly independent eigenvectors **if and only if**:
> 
> 1. It has $n$ distinct eigenvalues  
>    OR
> 2. For every eigenvalue,
>    $$\text{Geometric Multiplicity} = \text{Algebraic Multiplicity}$$
> 
> Where:
> - Algebraic multiplicity = multiplicity of root in characteristic polynomial
> - Geometric multiplicity = dimension of $N(A - \lambda I)$
> 
> ⚠️ If a repeated eigenvalue has geometric multiplicity < algebraic multiplicity, the matrix is defective and does NOT have enough independent eigenvectors. This leads to the requirement of Generalized Eigenvectors and Jordan Canonical Forms in system analysis.

---
### Related Concepts
#related-concepts

[[Eigenvalues and Eigenvectors]] (Hub Note)
[[Fundamental Subspaces of a Matrix|Null Space]]
[[Characteristic Polynomial and Equation|Characteristic Polynomial]]
[[State-Space Representation of LTI Systems|Jordan Canonical Form (JCF)]]