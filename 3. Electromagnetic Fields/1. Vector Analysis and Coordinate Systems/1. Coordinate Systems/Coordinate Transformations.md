---
tags:
  - coordinate-systems
  - vector-calculus
  - electromagnetics
  - math
created: 2025-10-17
aliases:
  - Coordinate Transformation
  - Coordinate System Conversion
subject: "[[Electromagnetic Fields]]"
parent: "[[Vector Analysis and Coordinate Systems]]"
modified: 2026-08-04T09:28:35
---
### Coordinate Transformations
#coordinate-systems #vector-calculus #transformation

> Coordinate transformations provide the mathematical framework to express the coordinates of a point or the components of a vector from one coordinate system to another. This is crucial in electromagnetics for choosing the system that best matches the symmetry of a problem, thereby simplifying calculations involving fields, forces, and potentials.

#### Variable Transformations (Point Transformations)
#point-transformation

These equations convert the coordinates of a single point between systems.

**1. Cartesian $(x, y, z)$ to Cylindrical $(\rho, \phi, z)$**
$$\boxed{\quad \rho = \sqrt{x^2 + y^2} \quad \phi = \tan^{-1}\left(\frac{y}{x}\right) \quad z = z \quad}$$

**2. Cylindrical $(\rho, \phi, z)$ to Cartesian $(x, y, z)$**
$$\boxed{\quad x = \rho\cos\phi \quad y = \rho\sin\phi \quad z = z \quad}$$

**3. Cartesian $(x, y, z)$ to Spherical $(r, \theta, \phi)$**
$$\boxed{\quad r = \sqrt{x^2+y^2+z^2} \quad \theta = \cos^{-1}\left(\frac{z}{r}\right) \quad \phi = \tan^{-1}\left(\frac{y}{x}\right) \quad}$$

**4. Spherical $(r, \theta, \phi)$ to Cartesian $(x, y, z)$**
$$\boxed{\quad x = r\sin\theta\cos\phi \quad y = r\sin\theta\sin\phi \quad z = r\cos\theta \quad}$$

#### Vector Transformations
#vector-transformation #dot-product

Transforming a vector is more complex than transforming a point because the unit vectors themselves are different in each system. The components of a vector $\vec{A}$ in a new system are found by projecting $\vec{A}$ onto the unit vectors of the new system using the **dot product**.

For instance, to find the cylindrical components ($A_\rho, A_\phi, A_z$) from the Cartesian components ($A_x, A_y, A_z$):
$A_\rho = \vec{A} \cdot \hat{a}_\rho = (A_x\hat{a}_x + A_y\hat{a}_y + A_z\hat{a}_z) \cdot \hat{a}_\rho = A_x(\hat{a}_x \cdot \hat{a}_\rho) + A_y(\hat{a}_y \cdot \hat{a}_\rho) + A_z(\hat{a}_z \cdot \hat{a}_\rho)$

This process is systematically handled using transformation matrices derived from the dot products of the unit vectors.

#### Transformation Matrices
#transformation-matrix

**1. Cartesian to Cylindrical**
$$\begin{align}
\begin{bmatrix} A_\rho \\ A_\phi \\ A_z \end{bmatrix} = \begin{bmatrix} \cos\phi & \sin\phi & 0 \\ -\sin\phi & \cos\phi & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} A_x \\ A_y \\ A_z \end{bmatrix}
\end{align}$$

**2. Cartesian to Spherical**
$$\begin{align}
\begin{bmatrix} A_r \\ A_\theta \\ A_\phi \end{bmatrix} = \begin{bmatrix} \sin\theta\cos\phi & \sin\theta\sin\phi & \cos\theta \\ \cos\theta\cos\phi & \cos\theta\sin\phi & -\sin\theta \\ -\sin\phi & \cos\phi & 0 \end{bmatrix} \begin{bmatrix} A_x \\ A_y \\ A_z \end{bmatrix}
\end{align}$$

To transform from Cylindrical/Spherical **to** Cartesian, the inverse (which is simply the transpose) of the corresponding matrix is used.

#### Unit Vector Dot Products
#dot-product-table

The elements of the transformation matrices are the dot products between the unit vectors of the two systems. These tables are fundamental for deriving the matrices.

**Cartesian and Cylindrical**

| `·` | $\hat{a}_\rho$ | $\hat{a}_\phi$ | $\hat{a}_z$ |
|:---:|:---:|:---:|:---:|
| $\hat{a}_x$ | $\cos\phi$ | $-\sin\phi$ | 0 |
| $\hat{a}_y$ | $\sin\phi$ | $\cos\phi$ | 0 |
| $\hat{a}_z$ | 0 | 0 | 1 |

**Cartesian and Spherical**

| `·` | $\hat{a}_r$ | $\hat{a}_\theta$ | $\hat{a}_\phi$ |
|:---:|:---:|:---:|:---:|
| $\hat{a}_x$ | $\sin\theta\cos\phi$ | $\cos\theta\cos\phi$ | $-\sin\phi$ |
| $\hat{a}_y$ | $\sin\theta\sin\phi$ | $\cos\theta\sin\phi$ | $\cos\phi$ |
| $\hat{a}_z$ | $\cos\theta$ | $-\sin\theta$ | 0 |

---
### Related Concepts
#coordinate-transformation/related-concepts

> [[Vector Analysis and Coordinate Systems]]

[[Cartesian Coordinate System]]
[[Cylindrical Coordinate System]]
[[Spherical Coordinate System]]
[[Vector Operations]]
[[Gradient of a Scalar Field]]
[[Divergence of a Vector Field]]
[[Curl of a Vector Field]]