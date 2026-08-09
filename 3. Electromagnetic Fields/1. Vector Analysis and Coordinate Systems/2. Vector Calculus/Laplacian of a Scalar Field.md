---
tags:
  - vector-calculus
  - laplacian
  - scalar-field
  - electromagnetics
  - math
created: 2025-10-17
aliases:
  - Laplacian
  - Del squared V
  - ∇²V
  - Laplacian of a Scalar Field (∇²V)
subject: "[[Electromagnetic Fields]]"
parent:
  - Vector Calculus
modified: 2026-08-04T09:53:07
---
### Laplacian of a Scalar Field (∇²V)
#vector-calculus #laplacian #poissons-equation #laplaces-equation

> The **Laplacian** is a scalar differential operator, denoted as $\nabla^2$ (del squared), that is defined as the **divergence of the gradient** of a scalar field. It operates on a scalar field $V$ and produces another scalar field, which represents the "curvature" or concentration of the original field at each point.

The Laplacian is a second-order derivative and is fundamentally defined as:
$$\boxed{\quad \nabla^2 V = \nabla \cdot (\nabla V) \quad}$$

#### Physical Interpretation
#laplacian/interpretation

The value of the Laplacian at a point measures how much the value of the field at that point differs from the average value of its immediate surroundings.
- **$\nabla^2 V < 0$**: The value of $V$ at the point is a local maximum, greater than the average of its neighbors. This indicates a **source** or **concentration** of the quantity represented by $V$. In electrostatics, this corresponds to a region of positive charge density.
- **$\nabla^2 V > 0$**: The value of $V$ at the point is a local minimum, less than the average of its neighbors. This indicates a **sink**. In electrostatics, this corresponds to a region of negative charge density.
- **$\nabla^2 V = 0$**: The value of $V$ at the point is exactly equal to the average of its neighbors. The field is "smooth" and has no local maxima or minima. This is the condition for a source-free region.

#### Formulas in Coordinate Systems
#laplacian/formulas

1.  **Cartesian Coordinates $(x, y, z)$**:
    $$\boxed{\quad \nabla^2 V = \frac{\partial^2 V}{\partial x^2} + \frac{\partial^2 V}{\partial y^2} + \frac{\partial^2 V}{\partial z^2} \quad}$$

2.  **Cylindrical Coordinates $(\rho, \phi, z)$**:
    $$\boxed{\quad \nabla^2 V = \frac{1}{\rho}\frac{\partial}{\partial \rho}\left(\rho \frac{\partial V}{\partial \rho}\right) + \frac{1}{\rho^2}\frac{\partial^2 V}{\partial \phi^2} + \frac{\partial^2 V}{\partial z^2} \quad}$$

3.  **Spherical Coordinates $(r, \theta, \phi)$**:
    $$\boxed{\quad \nabla^2 V = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2 \frac{\partial V}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial \theta}\left(\sin\theta \frac{\partial V}{\partial \theta}\right) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2 V}{\partial \phi^2} \quad}$$

#### Key Equations in Electromagnetics
#poissons-equation #laplaces-equation

The Laplacian is the cornerstone of two fundamental equations in electrostatics used to solve for the electric potential $V$.

1.  **Poisson's Equation**: Relates the potential in a region to the volume charge density $\rho_v$ within that region.
    $$\boxed{\quad \nabla^2 V = -\frac{\rho_v}{\varepsilon} \quad}$$
2.  **Laplace's Equation**: A special case of Poisson's equation for a charge-free region ($\rho_v = 0$). It is used to find the potential in the space between conductors.
    $$\boxed{\quad \nabla^2 V = 0 \quad}$$

The Laplacian also appears in the Helmholtz and wave equations, which describe the propagation of electromagnetic waves.

#### Vector Laplacian
#vector-laplacian

The Laplacian operator can also be applied to a vector field $\vec{A}$. The **Vector Laplacian**, $\nabla^2 \vec{A}$, is defined differently:
$$\boxed{\quad \nabla^2 \vec{A} = \nabla(\nabla \cdot \vec{A}) - \nabla \times (\nabla \times \vec{A}) \quad}$$
This operator is crucial for deriving the electromagnetic wave equation from Maxwell's equations.

---
### Related Concepts
#laplacian/related-concepts

> [[Poisson's Equation]]
> [[Laplace's Equation]]

[[Vector Calculus]]
[[Gradient of a Scalar Field]]
[[Divergence of a Vector Field]]
[[Curl of a Vector Field]]
[[Wave Equation Derived from Maxwell's Equations]]
[[Uniqueness Theorem]]