---
tags:
  - vector-calculus
  - electromagnetic-fields
  - mathematics
  - vector-field
  - stokes-theorem
created: 2025-09-08
aliases:
  - Curl of a Vector Field
  - rot F
  - del cross F
subject: "[[Mathematics]]"
parent: Vector Calculus
---
### Curl
#curl #vector-calculus #vector-field #del-operator

> The curl is a vector operator that describes the infinitesimal rotation or circulation of a vector field at a point. It operates on a vector field and produces another vector field. The direction of the resulting curl vector indicates the axis of the rotation (by the right-hand rule), and its magnitude indicates the magnitude of the rotation.

A field with zero curl is called **irrotational** or **conservative**.

#### Definition and Formulae
#curl/definition

The curl of a vector field $\mathbf{F}$ is defined as the cross product of the del operator ($\nabla$) and the vector field, $\nabla \times \mathbf{F}$.

1. **Cartesian Coordinates $(x, y, z)$**: For $\mathbf{F} = F_x \mathbf{\hat{a}_x} + F_y \mathbf{\hat{a}_y} + F_z \mathbf{\hat{a}_z}$, the curl is conveniently expressed as a determinant:
    $$\boxed{\quad \nabla \times \mathbf{F} = \begin{vmatrix}
    \mathbf{\hat{a}_x} & \mathbf{\hat{a}_y} & \mathbf{\hat{a}_z} \\
    \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
    F_x & F_y & F_z
    \end{vmatrix} \quad}$$
    Expanding this gives:
    $$\nabla \times \mathbf{F} = \left(\frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z}\right)\mathbf{\hat{a}_x} + \left(\frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x}\right)\mathbf{\hat{a}_y} + \left(\frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y}\right)\mathbf{\hat{a}_z}$$

2. **Cylindrical Coordinates $(\rho, \phi, z)$**: For $\mathbf{F} = F_\rho \mathbf{\hat{a}_\rho} + F_\phi \mathbf{\hat{a}_\phi} + F_z \mathbf{\hat{a}_z}$
    $$\boxed{\quad \nabla \times \mathbf{F} = \left(\frac{1}{\rho}\frac{\partial F_z}{\partial \phi} - \frac{\partial F_\phi}{\partial z}\right)\mathbf{\hat{a}_\rho} + \left(\frac{\partial F_\rho}{\partial z} - \frac{\partial F_z}{\partial \rho}\right)\mathbf{\hat{a}_\phi} + \frac{1}{\rho}\left(\frac{\partial (\rho F_\phi)}{\partial \rho} - \frac{\partial F_\rho}{\partial \phi}\right)\mathbf{\hat{a}_z} \quad}$$

3. **Spherical Coordinates $(r, \theta, \phi)$**: For $\mathbf{F} = F_r \mathbf{\hat{a}_r} + F_\theta \mathbf{\hat{a}_\theta} + F_\phi \mathbf{\hat{a}_\phi}$
    $$\boxed{\quad \nabla \times \mathbf{F} = \frac{1}{r\sin\theta}\left[\frac{\partial (F_\phi \sin\theta)}{\partial \theta} - \frac{\partial F_\theta}{\partial \phi}\right]\mathbf{\hat{a}_r} + \frac{1}{r}\left[\frac{1}{\sin\theta}\frac{\partial F_r}{\partial \phi} - \frac{\partial (r F_\phi)}{\partial r}\right]\mathbf{\hat{a}_\theta} + \frac{1}{r}\left[\frac{\partial (r F_\theta)}{\partial r} - \frac{\partial F_r}{\partial \theta}\right]\mathbf{\hat{a}_\phi} \quad}$$

---
#### Stokes' Theorem
#stokes-theorem

Stokes' Theorem relates the circulation of a vector field around a closed path to the flux of its curl through the open surface bounded by that path. It connects a line integral to a surface integral.
$$\boxed{\quad \oint_L \mathbf{F} \cdot d\mathbf{L} = \int_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} \quad}$$
This theorem is fundamental to deriving the differential forms of Faraday's Law and Ampere's Law from their integral forms.

#### Important Vector Identities
#vector-identities

1. **Curl of a Gradient is always zero**: For any scalar field $f$:
    $$\boxed{\quad \nabla \times (\nabla f) = 0 \quad}$$
    This identity implies that if a vector field is **conservative** (i.e., it can be expressed as the gradient of a scalar potential, like $\mathbf{E} = -\nabla V$), its curl must be zero.
2. **Divergence of a Curl is always zero**: For any vector field $\mathbf{F}$:
    $$\boxed{\quad \nabla \cdot (\nabla \times \mathbf{F}) = 0 \quad}$$
    This identity implies that if a vector field is **solenoidal** (i.e., it can be expressed as the curl of a vector potential, like $\mathbf{B} = \nabla \times \mathbf{A}$), its divergence must be zero.

---
#### Applications in Electromagnetism
#curl/applications #maxwells-equations

Curl is central to two of Maxwell's equations, describing how fields are generated.

1. **Faraday's Law of Induction**:
    $$\boxed{\quad \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \quad}$$
    This equation shows that a time-varying magnetic field ($\mathbf{B}$) creates a spatially varying, circulating electric field ($\mathbf{E}$). A non-zero curl of $\mathbf{E}$ means the field is non-conservative.

2. **Ampere's Circuital Law (with Maxwell's addition)**:
    $$\boxed{\quad \nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t} \quad}$$
    This equation shows that a circulating magnetic field ($\mathbf{H}$) is produced by either a conduction current density ($\mathbf{J}$) or a time-varying electric flux density (displacement current, $\partial\mathbf{D}/\partial t$).

---
### Related Concepts
#related-concepts

> [[Gradient]] (Del on a scalar -> vector)

[[Divergence]] (Del dot a vector -> scalar)
[[Maxwell's Equations in Final Form|Maxwell's Equations]]
[[Scalar Fields and Vector Fields]]