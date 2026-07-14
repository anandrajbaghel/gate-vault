---
tags:
  - vector-calculus
  - electromagnetic-fields
  - vector-algebra
  - engineering-math
created: 2025-09-15
aliases:
  - Vector Calculus Identities
  - Vector Algebra Identities
  - Vector Triple Product (BAC-CAB Rule)
subject: "[[Mathematics]]"
parent:
  - Vector Calculus
---
### Vector Identities
#vector-calculus #vector-identities

> **Vector Identities** are equations involving vector operations (dot product, cross product) and vector calculus operators (gradient, divergence, curl). They are indispensable in engineering, particularly in [[Electromagnetic Fields]], for simplifying complex vector expressions and for deriving and manipulating fundamental equations like [[Maxwell's Equations in Final Form|Maxwell's Equations]].

#### Algebraic (Dot and Cross Product) Identities
#vector-algebra #triple-product

Let $\vec{A}$, $\vec{B}$, and $\vec{C}$ be vector fields.

1.  **Scalar Triple Product**: Represents the volume of the parallelepiped formed by the three vectors. It is invariant under a cyclic permutation.
    $$\vec{A} \cdot (\vec{B} \times \vec{C}) = \vec{B} \cdot (\vec{C} \times \vec{A}) = \vec{C} \cdot (\vec{A} \times \vec{B})$$

2.  **Vector Triple Product (BAC-CAB Rule)**: This is one of the most frequently used identities for simplifying cross products.
    $$\boxed{\quad \vec{A} \times (\vec{B} \times \vec{C}) = \vec{B}(\vec{A} \cdot \vec{C}) - \vec{C}(\vec{A} \cdot \vec{B}) \quad}$$

---
#### Differential Identities (Involving the Del Operator $\nabla$)
#gradient #divergence #curl

Let $\phi$ be a scalar field and $\vec{A}$, $\vec{B}$ be vector fields.

##### Second-Order Derivative Identities
These two identities are fundamental and have deep physical significance.

1.  **Divergence of a Curl is always Zero**: A vector field that is the curl of another field is always solenoidal (has no sources or sinks). This is why the magnetic field $\vec{B}$ has no monopoles ($\nabla \cdot \vec{B} = 0$).
    $$\boxed{\quad \nabla \cdot (\nabla \times \vec{A}) = 0 \quad}$$
2.  **Curl of a Gradient is always Zero**: A vector field that is the gradient of a scalar potential is always irrotational (conservative). This is why the static electric field is conservative ($\vec{E} = -\nabla V \implies \nabla \times \vec{E} = 0$).
    $$\boxed{\quad \nabla \times (\nabla \phi) = 0 \quad}$$
3.  **Divergence of a Gradient is the Laplacian**:
    $$\nabla \cdot (\nabla \phi) = \nabla^2 \phi$$

##### Product Rule Identities
These are analogous to the product rule in ordinary calculus.
1.  $\nabla (\phi \psi) = \phi \nabla \psi + \psi \nabla \phi$
2.  $\nabla \cdot (\phi \vec{A}) = \phi(\nabla \cdot \vec{A}) + \vec{A} \cdot (\nabla \phi)$
3.  $\nabla \times (\phi \vec{A}) = \phi(\nabla \times \vec{A}) + (\nabla \phi) \times \vec{A}$
4.  $\nabla \cdot (\vec{A} \times \vec{B}) = \vec{B} \cdot (\nabla \times \vec{A}) - \vec{A} \cdot (\nabla \times \vec{B})$
5.  $\nabla (\vec{A} \cdot \vec{B}) = (\vec{A} \cdot \nabla)\vec{B} + (\vec{B} \cdot \nabla)\vec{A} + \vec{A} \times (\nabla \times \vec{B}) + \vec{B} \times (\nabla \times \vec{A})$

---
#### Vector Integral Theorems
#stokes-theorem #divergence-theorem

These theorems relate integrals over volumes to surfaces, and surfaces to closed loops. They are the integral form of Maxwell's Equations.

1.  **Divergence Theorem (Gauss's Theorem)**: Relates the flux of a vector field through a closed surface to the divergence of the field within the enclosed volume.
    $$\boxed{\quad \oint_S \vec{A} \cdot d\vec{s} = \int_V (\nabla \cdot \vec{A}) \, dv \quad}$$
    *(Total flux out of a closed surface = Sum of sources/sinks inside the volume)*

2.  **Stokes' Theorem**: Relates the circulation of a vector field around a closed loop to the flux of the curl of the field through the surface bounded by the loop.
    $$\boxed{\quad \oint_C \vec{A} \cdot d\vec{l} = \int_S (\nabla \times \vec{A}) \cdot d\vec{s} \quad}$$
    *(Total circulation around a loop = Sum of vortices/curls on the surface)*

---
### Related Concepts
#vector-calculus/related-concepts

> [[Vector Calculus]]

[[Vector Differential Operators]]
[[Electromagnetic Fields]]
[[Maxwell's Equations in Final Form|Maxwell's Equations]]
[[Integration]]