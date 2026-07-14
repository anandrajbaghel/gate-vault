---
tags:
  - vector-calculus
  - multivariable-calculus
  - surface-integrals
  - flux
  - engineering-math
created: 2025-09-09
aliases:
  - Surface Integral
  - Flux Integral
subject: "[[Mathematics]]"
parent:
  - Vector Calculus
---
### Surface Integrals
#surface-integrals #vector-calculus #flux

> A **surface integral** generalizes the concept of a double integral to integration over a curved surface in three-dimensional space. Just as with [[line integrals]], there are two main types: surface integrals of scalar fields and surface integrals of vector fields. The latter, also known as a **flux integral**, is particularly important for measuring the rate of flow of a vector field through a surface.

The key to evaluating any surface integral is to **[[parameterize]]** the surface $S$ with a vector function $\mathbf{r}(u,v)$ over a domain $D$ in the uv-plane. This projects the curved surface onto a flat region, allowing us to compute a standard [[double integrals|double integral]].

---
#### 1. Surface Integral of a Scalar Field
#scalar-surface-integral

This type of integral sums the values of a scalar function $f(x,y,z)$ over a surface $S$.
**Physical Interpretation**: If $f$ is a surface density function, this integral gives the total **mass** of a thin shell in the shape of $S$. If $f$ is a surface charge density, it gives the total charge.

**Formula and Evaluation**:
The integral is written as $\iint_S f(x,y,z) \, dS$. To evaluate it, we use the differential surface area element $dS = ||\mathbf{r}_u \times \mathbf{r}_v|| \, du\,dv$.
$$\boxed{\quad \iint_S f \, dS = \iint_D f(\mathbf{r}(u,v)) \, ||\mathbf{r}_u \times \mathbf{r}_v|| \, du\,dv \quad}$$
where $\mathbf{r}_u$ and $\mathbf{r}_v$ are the partial derivatives of the parameterization with respect to $u$ and $v$.

---
#### 2. Surface Integral of a Vector Field (Flux Integral)
#vector-surface-integral #flux

This integral measures the net rate of flow, or **flux**, of a vector field $\mathbf{F}$ through a surface $S$.
**Physical Interpretation**:
*   **Fluid Flow**: If $\mathbf{F}$ is the velocity field of a fluid, the flux measures the volume of fluid passing through the surface per unit time.
*   **Electromagnetism**: If $\mathbf{F}$ is an electric field ($\mathbf{E}$) or magnetic field ($\mathbf{B}$), the flux is a measure of the total number of field lines passing through the surface (Electric Flux or Magnetic Flux).

**Formula and Evaluation**:
The integral is written as $\iint_S \mathbf{F} \cdot d\mathbf{S}$, where $d\mathbf{S}$ is the vector surface area element, $d\mathbf{S} = \mathbf{\hat{n}} \, dS$. The unit normal vector $\mathbf{\hat{n}}$ gives the surface its **orientation**.
To evaluate, we use $d\mathbf{S} = (\mathbf{r}_u \times \mathbf{r}_v) \, du\,dv$.
$$\boxed{\quad \iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \mathbf{F}(\mathbf{r}(u,v)) \cdot (\mathbf{r}_u \times \mathbf{r}_v) \, du\,dv \quad}$$
The sign of the result depends on the choice of the normal vector (e.g., outward vs. inward for a closed surface).

---
#### The Divergence Theorem (Gauss's Theorem)
#divergence-theorem

The Divergence Theorem relates the total flux of a vector field through a **closed surface** $S$ to the triple integral of the divergence of the field over the solid region $E$ enclosed by the surface.
> Let $E$ be a solid region bounded by a closed, piecewise-smooth surface $S$ with an outward orientation. Let $\mathbf{F}$ be a vector field with continuous partial derivatives. Then:
> $$\boxed{\quad \unicode{x222F}_S \mathbf{F} \cdot d\mathbf{S} = \iiint_E (\nabla \cdot \mathbf{F}) \, dV \quad}$$
This theorem states that the **net outflow (flux) from a volume is equal to the sum of the strengths of all the sources inside the volume**. It is fundamental to Gauss's Law in electromagnetism.

---
#### Stokes' Theorem
#stokes-theorem

Stokes' Theorem relates the surface integral of the curl of a vector field over a surface $S$ to the line integral of the field around the **boundary curve** $C$ of that surface. It is the 3D generalization of Green's Theorem.
> Let $S$ be an oriented, piecewise-smooth surface bounded by a simple, closed, piecewise-smooth curve $C$ with a consistent orientation. Let $\mathbf{F}$ be a vector field with continuous partial derivatives. Then:
> $$\boxed{\quad \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} = \oint_C \mathbf{F} \cdot d\mathbf{r} \quad}$$
This theorem connects the microscopic rotation (curl) within a surface to the macroscopic circulation around its edge. It is fundamental to Faraday's Law and Ampere's Law.

---
### Related Concepts
#related-concepts

> [[Vector Fields]]

[[Line Integrals]]
[[Vector Differential Operators]]
[[Electromagnetic Fields]] (Maxwell's equations are integral forms of these theorems)