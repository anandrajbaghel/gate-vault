---
tags:
  - electrostatics
  - electric-field
  - electric-potential
  - gradient
  - vector-calculus
created: 2025-10-17
aliases:
  - E-field and Potential
  - E = -del V
  - Relationship between Electric Field and Potential (E = -∇V)
subject: "[[Electromagnetic Fields]]"
parent:
  - Electrostatics
modified: 2026-08-04T10:24:46
---
### Relationship between Electric Field and Potential
#electric-field #electric-potential #gradient #conservative-field

> The electric field ($\vec{E}$) and the electric potential ($V$) are not independent concepts; they are two different ways of describing the same electrostatic field. The relationship between the vector field $\vec{E}$ and the scalar field $V$ is a fundamental cornerstone of electrostatics, defined by the gradient and line integral operations of vector calculus.

#### The Differential Relationship: $\vec{E} = -\nabla V$
#gradient #del-operator

The electric field is the negative of the gradient of the electric potential. This is the most important differential relationship in electrostatics.
$$\boxed{\quad \vec{E} = -\nabla V \quad}$$
**Interpretation:**
-   The **gradient of V**, denoted $\nabla V$, is a vector that points in the direction of the maximum spatial rate of *increase* of the potential $V$.
-   The **negative sign** signifies that the electric field vector $\vec{E}$ points in the direction of the maximum spatial rate of *decrease* of the potential.
-   In simple terms, the electric field always points "downhill" from a region of higher potential to a region of lower potential.

In Cartesian coordinates, this relationship expands to:
$$\vec{E} = -\left( \frac{\partial V}{\partial x}\hat{a}_x + \frac{\partial V}{\partial y}\hat{a}_y + \frac{\partial V}{\partial z}\hat{a}_z \right)$$
This equation is extremely powerful because it allows us to find the vector field $\vec{E}$ by simply taking the partial derivatives of the scalar field $V$, which is often easier to calculate first.

#### The Integral Relationship: $V = -\int \vec{E} \cdot d\vec{l}$
#line-integral #potential-difference #conservative-field

The potential difference between two points is the negative of the line integral of the electric field along a path connecting them.
$$\boxed{\quad V_{AB} = V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l} \quad}$$
This integral relationship allows us to find the potential difference (a scalar) if the electric field (a vector) is known.

**Conservative Field:**
A key property of the electrostatic field is that it is **conservative**. This means the value of the line integral above is **independent of the path** taken from point A to point B.
A direct consequence of this is that the line integral of the electric field around any closed loop is zero.
$$\oint \vec{E} \cdot d\vec{l} = 0$$
This is the integral form of another of Maxwell's Equations for statics: $\nabla \times \vec{E} = 0$.

#### Physical Significance and Equipotential Surfaces
#equipotential-surface

-   **Computational Advantage**: It is almost always easier to calculate the potential $V$ (which involves a scalar sum or integral) and then use $\vec{E} = -\nabla V$ to find the electric field, rather than calculating the vector electric field directly.
-   **Equipotential Surfaces**: An equipotential surface is a surface on which the potential $V$ is constant. From the properties of the gradient, the vector $\nabla V$ is always normal (perpendicular) to the surfaces of constant $V$. Since $\vec{E} = -\nabla V$, it follows that:
    > The electric field lines are always perpendicular to the equipotential surfaces.

---
### Related Concepts
#electric-potential/related-concepts

> [[Electric Potential and Potential Difference (V)]]
> [[Electric Field Intensity (E)]]

[[Gradient of a Scalar Field]]
[[Curl of a Vector Field]]
[[Vector Calculus]]
[[Laplace's Equation]]
[[Poisson's Equation]]
[[Work-Energy Theorem]]