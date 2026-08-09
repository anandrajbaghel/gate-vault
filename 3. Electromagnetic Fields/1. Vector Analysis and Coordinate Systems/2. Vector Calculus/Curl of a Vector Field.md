---
tags:
  - vector-calculus
  - curl
  - vector-field
  - electromagnetics
  - math
created: 2025-10-17
aliases:
  - Curl
  - Del cross A
  - ∇ × A
  - Rotational Field
  - Curl of a Vector Field (∇ × A)
subject: "[[Electromagnetic Fields]]"
parent:
  - Vector Calculus
modified: 2026-07-16
---
### Curl of a Vector Field (∇ × A)
#vector-calculus #curl #rotation #del-operator

> The **curl** of a vector field $\vec{A}$ is a vector field that describes the infinitesimal "circulation" or "rotation" of $\vec{A}$ at a point. The direction of the curl vector indicates the axis of this rotation (by the right-hand rule), and its magnitude indicates the strength of the rotation.

The curl is the result of applying the cross product of the **del operator ($\nabla$)** with a vector field $\vec{A}$.

#### The Del (∇) Operator
#del-operator 

The Del operator is a vector differential operator, defined as:
$$\nabla = \mathbf{i} \frac{\partial}{\partial x} + \mathbf{j} \frac{\partial}{\partial y} + \mathbf{k} \frac{\partial}{\partial z}$$

---
#### Physical Interpretation
#curl/interpretation #irrotational #conservative-field

Imagine placing a tiny "paddle wheel" in a vector field representing fluid flow.
- The paddle wheel will spin if there is a net circulation of the fluid around it.
- The **magnitude** of the curl, $|\nabla \times \vec{A}|$, is proportional to the maximum speed at which the paddle wheel rotates.
- The **direction** of the curl vector, $\nabla \times \vec{A}$, is the axis about which the paddle wheel spins, determined by the right-hand rule.

A vector field with zero curl ($\nabla \times \vec{A} = 0$) is called **irrotational** or **conservative**. In such a field, the [[line integrals|line integral]] between two points is independent of the path taken. The electrostatic field $\vec{E}$ is a prime example of a conservative field.

The formal definition of curl is:
$$\boxed{\quad (\nabla \times \vec{A}) \cdot \hat{a}_n = \lim_{\Delta S \to 0} \frac{\oint_L \vec{A} \cdot d\vec{l}}{\Delta S} \quad}$$
This states that the component of the curl in a direction $\hat{a}_n$ is the line integral (circulation) per unit area for an infinitesimal loop normal to that direction.

---
#### Formulas in Coordinate Systems
#curl/formulas

The curl is most easily calculated using a determinant form.

1.  **Cartesian Coordinates $(x, y, z)$**:
    $$\boxed{\quad \nabla \times \vec{A} = \begin{vmatrix} \hat{a}_x & \hat{a}_y & \hat{a}_z \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ A_x & A_y & A_z \end{vmatrix} \quad}$$

2.  **Cylindrical Coordinates $(\rho, \phi, z)$**:
    $$\boxed{\quad \nabla \times \vec{A} = \frac{1}{\rho} \begin{vmatrix} \hat{a}_\rho & \rho\hat{a}_\phi & \hat{a}_z \\ \frac{\partial}{\partial \rho} & \frac{\partial}{\partial \phi} & \frac{\partial}{\partial z} \\ A_\rho & \rho A_\phi & A_z \end{vmatrix} \quad}$$

3.  **Spherical Coordinates $(r, \theta, \phi)$**:
    $$\boxed{\quad \nabla \times \vec{A} = \frac{1}{r^2\sin\theta} \begin{vmatrix} \hat{a}_r & r\hat{a}_\theta & r\sin\theta\hat{a}_\phi \\ \frac{\partial}{\partial r} & \frac{\partial}{\partial \theta} & \frac{\partial}{\partial \phi} \\ A_r & r A_\theta & r\sin\theta A_\phi \end{vmatrix} \quad}$$

---
#### Stokes' Theorem
#stokes-theorem

This theorem provides the macroscopic counterpart to the microscopic definition of curl. It relates the circulation of a vector field around a closed path to the flux of its curl through the surface enclosed by that path.
$$\boxed{\quad \iint_S (\nabla \times \vec{A}) \cdot d\vec{S} = \oint_L \vec{A} \cdot d\vec{l} \quad}$$

---
#### Applications in Electromagnetics (Maxwell's Equations)
#maxwells-equations

Curl is at the heart of the two of Maxwell's equations that describe how fields are generated:
1.  **Faraday's Law of Induction**:
    $$\boxed{\quad \nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \quad}$$
    A time-varying magnetic field induces a spatially-varying, circulating (non-conservative) electric field.
2.  **Ampere-Maxwell Law**:
    $$\boxed{\quad \nabla \times \vec{H} = \vec{J} + \frac{\partial \vec{D}}{\partial t} \quad}$$
    An electric current ($\vec{J}$) or a time-varying electric field (displacement current, $\frac{\partial \vec{D}}{\partial t}$) induces a circulating magnetic field.

---
### Related Concepts
#curl/related-concepts

> [[Stokes' Theorem]]

[[Vector Calculus]]
[[Gradient of a Scalar Field]]
[[Divergence of a Vector Field]]
[[Faraday's Law in Integral and Point Form|Faraday's Law of Induction]]
[[Ampere's Circuital Law]]
[[Gauss's Divergence Theorem]]
[[Laplacian of a Scalar Field]]