---
updated: 2026-07-13
tags:
  - linear-algebra
  - eigenvalues
  - eigenvectors
  - geometry
  - control-systems
created: 2026-05-21
aliases:
  - Geometric Interpretation of Eigenvectors
subject:
  - "[[Mathematics]]"
parent: "[[Eigenvalues and Eigenvectors]]"
---
### Geometric Interpretation of Eigenvectors
#geometric-interpretation

> Most vectors, when multiplied by a matrix $A$, are both scaled and rotated. Eigenvectors are special because they are **not rotated**. They lie on lines that are mapped onto themselves by the transformation $T(\mathbf{x}) = A\mathbf{x}$.

* If $\lambda > 1$, the eigenvector is stretched.
* If $0 < \lambda < 1$, the eigenvector is shrunk.
* If $\lambda < 0$, the eigenvector's direction is reversed.
* If $\lambda = 1$, the eigenvector is unchanged.
* If $\lambda = 0$, the eigenvector is mapped to the zero vector (it is in the Null Space).

These "eigen-directions" can be thought of as the principal axes of the transformation.

> [!important] Complex Eigenvalues
> Complex eigenvalues usually indicate rotational or oscillatory behavior.
> For continuous-time systems:
> - Real part $\Re(\lambda)$ → growth/decay
> - Imaginary part $\Im(\lambda)$ → oscillation frequency
>
> Example:
> $$
> \lambda = -2 \pm j5
> $$
>
> represents a decaying oscillation.

---
### Related Concepts
#related-concepts

> [[Eigenvalues and Eigenvectors]] (Hub Note)

[[Linear Transformation]]
[[Modal Analysis]]