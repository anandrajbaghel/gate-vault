---
tags:
  - vector-operations
  - vector-algebra
  - electromagnetics
  - math
created: 2025-10-17
aliases:
  - Vector Algebra
  - Vector Products
  - Dot Product
  - Cross Product
  - Addition of Vectors
  - Subtraction of Vectors
subject: "[[Electromagnetic Fields]]"
parent:
  - Vector Analysis and Coordinate Systems
modified: 2026-07-16
---
### Vector Operations
#vector-algebra #dot-product #cross-product

> Vector operations are the fundamental algebraic rules for manipulating vector quantities. These include addition, subtraction, and two types of multiplication—the dot product (scalar product) and the cross product (vector product)—which are essential for describing physical phenomena in electromagnetics, such as forces, fields, and flux.

#### Vector Representation, Addition, and Subtraction
#vector-representation #vector-addition

A vector $\vec{A}$ in Cartesian coordinates is represented by its components:
$\vec{A} = A_x\hat{a}_x + A_y\hat{a}_y + A_z\hat{a}_z$

- **Magnitude**: The length of the vector.
  $|\vec{A}| = A = \sqrt{A_x^2 + A_y^2 + A_z^2}$
- **Unit Vector**: A vector with magnitude 1 in the direction of $\vec{A}$.
  $$\boxed{\quad \hat{a}_A = \frac{\vec{A}}{|\vec{A}|} = \frac{A_x\hat{a}_x + A_y\hat{a}_y + A_z\hat{a}_z}{\sqrt{A_x^2 + A_y^2 + A_z^2}} \quad}$$
- **Addition/Subtraction**: Performed component-wise.
  $$\boxed{\quad \vec{A} \pm \vec{B} = (A_x \pm B_x)\hat{a}_x + (A_y \pm B_y)\hat{a}_y + (A_z \pm B_z)\hat{a}_z \quad}$$
  **Properties**:
    - Commutative: $\vec{A} + \vec{B} = \vec{B} + \vec{A}$
    - Associative: $\vec{A} + (\vec{B} + \vec{C}) = (\vec{A} + \vec{B}) + \vec{C}$

---
#### Dot Product (Scalar Product)
#dot-product #scalar-product #vector-projection

The dot product of two vectors results in a **scalar**. It represents the projection of one vector onto another.

- **Geometric Definition**:
  $$\boxed{\quad \vec{A} \cdot \vec{B} = |\vec{A}||\vec{B}|\cos\theta_{AB} \quad}$$
  where $\theta_{AB}$ is the smaller angle between $\vec{A}$ and $\vec{B}$.
- **Component-wise Definition**:
  $$\boxed{\quad \vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z \quad}$$
**Properties**:
  - Commutative: $\vec{A} \cdot \vec{B} = \vec{B} \cdot \vec{A}$
  - Distributive: $\vec{A} \cdot (\vec{B} + \vec{C}) = \vec{A} \cdot \vec{B} + \vec{A} \cdot \vec{C}$
  - $\vec{A} \cdot \vec{A} = |\vec{A}|^2$
  - If $\vec{A} \cdot \vec{B} = 0$, the vectors are orthogonal (perpendicular).

---
#### Cross Product (Vector Product)
#cross-product #vector-product #right-hand-rule

The cross product of two vectors results in a new **vector** that is perpendicular to the plane containing the original two vectors.

- **Geometric Definition**:
  $$\boxed{\quad \vec{A} \times \vec{B} = |\vec{A}||\vec{B}|\sin\theta_{AB} \hat{a}_n \quad}$$
  where $\hat{a}_n$ is a unit vector normal to the plane of $\vec{A}$ and $\vec{B}$, with its direction determined by the **right-hand rule**.
- **Component-wise Definition (Determinant form)**:
  $$\boxed{\quad \vec{A} \times \vec{B} = \begin{vmatrix} \hat{a}_x & \hat{a}_y & \hat{a}_z \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix} \quad}$$
**Properties**:
  - Anti-commutative: $\vec{A} \times \vec{B} = -(\vec{B} \times \vec{A})$
  - Distributive: $\vec{A} \times (\vec{B} + \vec{C}) = \vec{A} \times \vec{B} + \vec{A} \times \vec{C}$
  - $\vec{A} \times \vec{A} = 0$
  - If $\vec{A} \times \vec{B} = 0$, the vectors are parallel.

---
#### Triple Products
#triple-product #bac-cab-rule

1.  **Scalar Triple Product**: Gives the volume of the parallelepiped formed by the three vectors.
    $$\boxed{\quad \vec{A} \cdot (\vec{B} \times \vec{C}) = \begin{vmatrix} A_x & A_y & A_z \\ B_x & B_y & B_z \\ C_x & C_y & C_z \end{vmatrix} \quad}$$
    It has a cyclic property: $\vec{A} \cdot (\vec{B} \times \vec{C}) = \vec{B} \cdot (\vec{C} \times \vec{A}) = \vec{C} \cdot (\vec{A} \times \vec{B})$.

2.  **Vector Triple Product**:
    This product results in a vector that lies in the same plane as vectors $\vec{B}$ and $\vec{C}$. It is defined by the **"BAC-CAB"** rule.
    $$\boxed{\quad \vec{A} \times (\vec{B} \times \vec{C}) = \vec{B}(\vec{A} \cdot \vec{C}) - \vec{C}(\vec{A} \cdot \vec{B}) \quad}$$

---
### Related Concepts
#vector-operations/related-concepts

> [[Vector Analysis and Coordinate Systems]]

[[Coordinate Transformations]]
[[Gradient of a Scalar Field]]
[[Divergence of a Vector Field]]
[[Curl of a Vector Field]]
[[Gauss's Divergence Theorem]]
[[Stokes' Theorem]]
[[Lorentz Force Equation]]
[[Orthogonality]]
