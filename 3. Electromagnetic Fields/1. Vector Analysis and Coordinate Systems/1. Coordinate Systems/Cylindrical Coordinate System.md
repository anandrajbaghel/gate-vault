---
tags:
  - coordinate-systems
  - vector-calculus
  - electromagnetics
  - math
created: 2025-10-17
aliases:
  - Cylindrical Coordinates
subject: "[[Electromagnetic Fields]]"
parent: "[[Vector Analysis and Coordinate Systems]]"
modified: 2026-08-04T09:30:39
---
### Cylindrical Coordinate System
#coordinate-systems #vector-analysis #cylindrical

> The **Cylindrical Coordinate System** is ideal for analyzing problems with cylindrical symmetry, such as current-carrying wires, coaxial cables, and solenoids. It describes a point $P$ in space using a radial distance from the z-axis ($\rho$), an azimuthal angle measured from the x-axis ($\phi$), and a vertical height ($z$).

![[Cylindrical Coordinate System.png]]

A point $P$ is represented by the triplet $(\rho, \phi, z)$, where:
- $\rho$: The radial distance from the z-axis to the point. $0 \le \rho < \infty$.
- $\phi$: The azimuthal angle, measured from the positive x-axis in the x-y plane. $0 \le \phi < 2\pi$.
- $z$: The vertical distance from the x-y plane (same as in Cartesian). $-\infty < z < \infty$.

#### Representation of a Point and a Vector
#vector-representation #unit-vectors

The system uses three mutually orthogonal unit vectors: $\hat{a}_\rho, \hat{a}_\phi, \hat{a}_z$.
- $\hat{a}_\rho$: Points radially outward from the z-axis, perpendicular to the cylindrical surface.
- $\hat{a}_\phi$: Points in the direction of increasing $\phi$, tangential to the cylindrical surface.
- $\hat{a}_z$: Points in the direction of increasing z, parallel to the z-axis.

**Important Note**: Unlike Cartesian unit vectors, the directions of $\hat{a}_\rho$ and $\hat{a}_\phi$ depend on the angle $\phi$ and are not constant. This makes vector differentiation more complex.

A **position vector** $\vec{P}$ from the origin to a point $P(\rho,\phi,z)$ is given by:
$$\boxed{\quad \vec{P} = \rho\hat{a}_\rho + z\hat{a}_z \quad}$$
A general **vector field** $\vec{A}$ in cylindrical coordinates is:
$$\boxed{\quad \vec{A} = A_\rho(\rho,\phi,z)\hat{a}_\rho + A_\phi(\rho,\phi,z)\hat{a}_\phi + A_z(\rho,\phi,z)\hat{a}_z \quad}$$

#### Differential Elements
#differential-elements #vector-calculus

1.  **Differential Length ($d\vec{l}$)**: A displacement along the coordinate directions. The arc length in the $\phi$ direction is $\rho d\phi$.
    $$\boxed{\quad d\vec{l} = d\rho\,\hat{a}_\rho + \rho\,d\phi\,\hat{a}_\phi + dz\,\hat{a}_z \quad}$$

2.  **Differential Surface Area ($d\vec{S}$)**:
    *   Surface of a cylinder (constant $\rho$): $d\vec{S}_\rho = \rho\,d\phi\,dz\,\hat{a}_\rho$
    *   Surface of a plane (constant $\phi$): $d\vec{S}_\phi = d\rho\,dz\,\hat{a}_\phi$
    *   Surface of a disk (constant $z$): $d\vec{S}_z = \rho\,d\rho\,d\phi\,\hat{a}_z$

3.  **Differential Volume ($dv$)**:
    $$\boxed{\quad dv = \rho\,d\rho\,d\phi\,dz \quad}$$
    The factor $\rho$ is the Jacobian of the transformation from Cartesian coordinates and is crucial for correct integration.

#### Vector Operations in Cylindrical Coordinates
#gradient #divergence #curl #laplacian

The expressions for vector operations are more complex due to the position-dependent unit vectors.

1.  **Gradient ($\nabla V$)**:
    $$\boxed{\quad \nabla V = \frac{\partial V}{\partial \rho}\hat{a}_\rho + \frac{1}{\rho}\frac{\partial V}{\partial \phi}\hat{a}_\phi + \frac{\partial V}{\partial z}\hat{a}_z \quad}$$

2.  **Divergence ($\nabla \cdot \vec{A}$)**:
    $$\boxed{\quad \nabla \cdot \vec{A} = \frac{1}{\rho}\frac{\partial (\rho A_\rho)}{\partial \rho} + \frac{1}{\rho}\frac{\partial A_\phi}{\partial \phi} + \frac{\partial A_z}{\partial z} \quad}$$

3.  **Curl ($\nabla \times \vec{A}$)**: Expressed as a determinant for easier memorization.
    $$\boxed{\quad \nabla \times \vec{A} = \frac{1}{\rho} \begin{vmatrix} \hat{a}_\rho & \rho\hat{a}_\phi & \hat{a}_z \\ \frac{\partial}{\partial \rho} & \frac{\partial}{\partial \phi} & \frac{\partial}{\partial z} \\ A_\rho & \rho A_\phi & A_z \end{vmatrix} \quad}$$
    $$\begin{align}
    \nabla \times \vec{A} = \left(\frac{1}{\rho}\frac{\partial A_z}{\partial \phi} - \frac{\partial A_\phi}{\partial z}\right)\hat{a}_\rho + \left(\frac{\partial A_\rho}{\partial z} - \frac{\partial A_z}{\partial \rho}\right)\hat{a}_\phi + \frac{1}{\rho}\left(\frac{\partial (\rho A_\phi)}{\partial \rho} - \frac{\partial A_\rho}{\partial \phi}\right)\hat{a}_z
    \end{align}$$

4.  **Laplacian ($\nabla^2 V$)**:
    $$\boxed{\quad \nabla^2 V = \frac{1}{\rho}\frac{\partial}{\partial \rho}\left(\rho \frac{\partial V}{\partial \rho}\right) + \frac{1}{\rho^2}\frac{\partial^2 V}{\partial \phi^2} + \frac{\partial^2 V}{\partial z^2} \quad}$$

---
### Related Concepts
#cylindrical/related-concepts

> [[Cartesian Coordinate System]]

[[Vector Analysis and Coordinate Systems]]
[[Spherical Coordinate System]]
[[Coordinate Transformations]]
[[Biot-Savart's Law]]
[[Ampere's Circuital Law]]
[[Laplace's Equation]]
