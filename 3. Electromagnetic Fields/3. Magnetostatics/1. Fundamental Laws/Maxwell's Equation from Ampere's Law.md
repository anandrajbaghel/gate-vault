---
tags:
  - magnetostatics
  - maxwells-equations
  - ampere-law
  - curl
  - electromagnetic-fields
created: 2025-10-17
aliases:
  - Ampere's Law (Point Form)
  - Ampere's Law (Differential Form)
  - Third Maxwell's Equation (Static)
  - Maxwell's Equation from Ampere's Law (∇ × H = J)
subject: "[[Electromagnetic Fields]]"
parent:
  - Magnetostatics
modified: 2026-07-22T10:42:33
---
### Maxwell's Equation from Ampere's Law ($\nabla \times \vec{H} = \vec{J}$)
#maxwells-equations #ampere-law #curl #magnetostatics

> This equation is the **differential form** or **point form** of Ampere's Circuital Law. It is one of the four fundamental Maxwell's equations for static electromagnetic fields. It states that the curl of the magnetic field intensity $\vec{H}$ at a point is equal to the free current density $\vec{J}$ at that same point.

Physically, this means that a steady electric current acts as a source of circulation for the magnetic field. A non-zero current density at a point will cause the magnetic field to "curl" or circulate around it.

---
#### Derivation from Integral Form
#stokes-theorem #derivation

The point form is derived directly from the integral form of [[Ampere's Circuital Law|Ampere's Law]] using [[Stokes' Theorem]].

1.  **Start with Ampere's Law (Integral Form)**:
    $$\oint_L \vec{H} \cdot d\vec{l} = I_{enc}$$

2.  **Express Current as Flux of Current Density**: The enclosed current $I_{enc}$ is the flux of the current density vector $\vec{J}$ through the open surface $S$ bounded by the path $L$.
    $$I_{enc} = \int_S \vec{J} \cdot d\vec{S}$$

3.  **Apply Stokes' Theorem**: Stokes' Theorem converts the line integral of a vector field into the surface integral of its curl.
    $$\oint_L \vec{H} \cdot d\vec{l} = \int_S (\nabla \times \vec{H}) \cdot d\vec{S}$$

4.  **Equate the Integrands**: By equating the two expressions for the integral, we get:
    $$\int_S (\nabla \times \vec{H}) \cdot d\vec{S} = \int_S \vec{J} \cdot d\vec{S}$$
    Since this relationship must hold for any arbitrary surface $S$, the integrands themselves must be equal.

This gives the final differential form:
$$\boxed{\quad \nabla \times \vec{H} = \vec{J} \quad}$$

---
#### Forms in $\vec{B}$ and $\vec{H}$
#B-field #H-field

-   **In terms of $\vec{H}$**: The form $\nabla \times \vec{H} = \vec{J}_f$ is general for magnetostatics, as the $\vec{H}$-field is defined in terms of free currents ($\vec{J}_f$), making it independent of the material.
-   **In terms of $\vec{B}$**: For a linear, isotropic, and homogeneous (LIH) medium, $\vec{B} = \mu\vec{H}$. Substituting $\vec{H} = \vec{B}/\mu$ gives:
    $$\nabla \times \left(\frac{\vec{B}}{\mu}\right) = \vec{J}$$
    If the permeability $\mu$ is constant, it can be taken out of the curl operator:
    $$\boxed{\quad \nabla \times \vec{B} = \mu\vec{J} \quad}$$
    This form shows that the curl of $\vec{B}$ depends on the material's properties.

---
#### Limitation for Time-Varying Fields
#time-varying-fields #displacement-current

This form of Ampere's law is **only valid for magnetostatics** (i.e., for steady, non-time-varying currents). An inconsistency arises when considering time-varying fields:
1.  Take the divergence of both sides of the equation: $\nabla \cdot (\nabla \times \vec{H}) = \nabla \cdot \vec{J}$.
2.  A fundamental vector identity states that the divergence of the curl of any vector field is always zero. Thus, $\nabla \cdot (\nabla \times \vec{H}) = 0$.
3.  This implies $\nabla \cdot \vec{J} = 0$.
4.  However, the **equation of continuity** states that $\nabla \cdot \vec{J} = -\frac{\partial \rho_v}{\partial t}$.

For magnetostatics, the charge density is constant, so $\frac{\partial \rho_v}{\partial t} = 0$, and the condition $\nabla \cdot \vec{J} = 0$ holds. But for time-varying fields, this is not true. This inconsistency led Maxwell to add the **displacement current density** term ($\vec{J}_d = \frac{\partial \vec{D}}{\partial t}$) to complete the law for dynamic fields.

---
### Related Concepts
#topic/related-concepts

> [[Ampere's Circuital Law]]

[[Stokes' Theorem]]
[[Curl of a Vector Field]]
[[Inconsistency of Ampere's Law for Time-Varying Fields]]
[[Magnetic Field Intensity (H)]]
[[Maxwell's Equations in Final Form]]
[[Concept of Displacement Current (Jd)]]