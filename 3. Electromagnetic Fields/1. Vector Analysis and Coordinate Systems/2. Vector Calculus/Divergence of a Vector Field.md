---
tags:
  - vector-calculus
  - divergence
  - vector-field
  - electromagnetics
  - math
created: 2025-10-17
aliases:
  - Divergence
  - Del dot A
  - ∇ ⋅ A
  - Divergence of a Vector Field (∇ ⋅ A)
subject: "[[Electromagnetic Fields]]"
parent:
  - Vector Calculus
formula:
  - "Divergence (Cartesian Coordinates) : $$\\nabla \\cdot \\vec{A} = \\frac{\\partial A_x}{\\partial x} + \\frac{\\partial A_y}{\\partial y} + \\frac{\\partial A_z}{\\partial z}$$"
  - "Divergence (Cylindrical Coordinates) : $$\\nabla \\cdot \\vec{A} = \\frac{1}{\\rho}\\frac{\\partial (\\rho A_\\rho)}{\\partial \\rho} + \\frac{1}{\\rho}\\frac{\\partial A_\\phi}{\\partial \\phi} + \\frac{\\partial A_z}{\\partial z}$$"
  - "Divergence (Spherical Coordinates) : $$\\nabla \\cdot \\vec{A} = \\frac{1}{r^2}\\frac{\\partial (r^2 A_r)}{\\partial r} + \\frac{1}{r\\sin\\theta}\\frac{\\partial (A_\\theta \\sin\\theta)}{\\partial \\theta} + \\frac{1}{r\\sin\\theta}\\frac{\\partial A_\\phi}{\\partial \\phi}$$"
  - "Divergence of a Vector Field : $$\\nabla \\cdot \\vec{A} = \\lim_{\\Delta v \\to 0} \\frac{\\oint_S \\vec{A} \\cdot d\\vec{S}}{\\Delta v}$$"
modified: 2026-07-16
---
### Divergence of a Vector Field (∇ ⋅ A)
#vector-calculus #divergence #flux #source-sink #del-operator

> ==The **divergence** of a vector field $\vec{A}$ is a scalar field that measures the magnitude of a vector field's source or sink at a given point.== In essence, it quantifies the net outward flow, or "flux," per unit volume from an infinitesimally small volume around a point.

> [!prerequisite]
> 1. [[Vector Identities]]

The divergence is the result of applying the dot product of the **del operator ($\nabla$)** with a vector field $\vec{A}$.

![[Electromagnetic Fields Repeated Generic Notes#The Del (∇) Operator]]

#### Physical Interpretation
#divergence/interpretation #solenoidal

Imagine the vector field represents the flow of a fluid.
- **Positive Divergence ($\nabla \cdot \vec{A} > 0$)**: There is a net outflow from the point. The point acts as a **source**. For example, the electric flux density field $\vec{D}$ diverges from a positive charge.
- **Negative Divergence ($\nabla \cdot \vec{A} < 0$)**: There is a net inflow to the point. The point acts as a **sink**. The $\vec{D}$ field converges on (terminates at) a negative charge.
- **Zero Divergence ($\nabla \cdot \vec{A} = 0$)**: The rate of inflow equals the rate of outflow. There is no source or sink. Such a field is called **solenoidal** or **divergence-less**. Magnetic field lines are a classic example; they always form closed loops.

The formal definition of divergence is the net outward flux per unit volume as the volume shrinks to zero:
$$\boxed{\quad \nabla \cdot \vec{A} = \lim_{\Delta v \to 0} \frac{\oint_S \vec{A} \cdot d\vec{S}}{\Delta v} \quad}$$

---
#### Formulas in Coordinate Systems
#divergence/formulas

1.  **Cartesian Coordinates $(x, y, z)$**:
    $$\boxed{\quad \nabla \cdot \vec{A} = \frac{\partial A_x}{\partial x} + \frac{\partial A_y}{\partial y} + \frac{\partial A_z}{\partial z} \quad}$$

2.  **Cylindrical Coordinates $(\rho, \phi, z)$**:
    $$\boxed{\quad \nabla \cdot \vec{A} = \frac{1}{\rho}\frac{\partial (\rho A_\rho)}{\partial \rho} + \frac{1}{\rho}\frac{\partial A_\phi}{\partial \phi} + \frac{\partial A_z}{\partial z} \quad}$$

3.  **Spherical Coordinates $(r, \theta, \phi)$**:
    $$\boxed{\quad \nabla \cdot \vec{A} = \frac{1}{r^2}\frac{\partial (r^2 A_r)}{\partial r} + \frac{1}{r\sin\theta}\frac{\partial (A_\theta \sin\theta)}{\partial \theta} + \frac{1}{r\sin\theta}\frac{\partial A_\phi}{\partial \phi} \quad}$$

> [!pyq]- PYQ : 2019
> ![[ee_2019#^q39]]

---
#### Divergence Theorem (Gauss's Theorem)
#divergence-theorem #gausss-theorem

This fundamental theorem relates the divergence of a vector field within a volume to the total flux of the field through the surface that encloses the volume.
$$\boxed{\quad \iiint_V (\nabla \cdot \vec{A}) dv = \oint_S (\vec{A} \cdot d\vec{S}) \quad}$$
It states that the volume integral of the source density (divergence) is equal to the total net flow (flux) out of the closed surface.

---
#### Applications in Electromagnetics (Maxwell's Equations)
#maxwells-equations

Divergence is central to two of Maxwell's four equations:
1.  **Gauss's Law for Electric Fields**:
    $$\boxed{\quad \nabla \cdot \vec{D} = \rho_v \quad}$$
    This states that the electric charge density ($\rho_v$) is the source of the electric flux density field ($\vec{D}$).
2.  **Gauss's Law for Magnetic Fields**:
    $$\boxed{\quad \nabla \cdot \vec{B} = 0 \quad}$$
    This states that the magnetic flux density field ($\vec{B}$) is solenoidal. It has no sources or sinks, which is the mathematical statement that **magnetic monopoles do not exist**.

---
### Related Concepts
#divergence/related-concepts

> [[Gauss's Divergence Theorem]]

[[Vector Calculus]]
[[Gradient of a Scalar Field]]
[[Curl of a Vector Field]]
[[Laplacian of a Scalar Field]]
[[Maxwell's First Equation (Electrostatics)]]
[[Maxwell's Equation for Magnetostatics]]
[[Stokes' Theorem]]