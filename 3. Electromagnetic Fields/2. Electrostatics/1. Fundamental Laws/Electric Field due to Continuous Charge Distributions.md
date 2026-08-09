---
tags:
  - electrostatics
  - electric-field
  - continuous-charge
  - integration
created: 2025-10-17
aliases:
  - E-Field of Continuous Charges
  - Continuous Charge Distribution Field
  - Electric Field due to Continuous Line Charge Distributions
  - Electric Field due to Continuous Surface Charge Distributions
  - Electric Field due to Continuous Volume Charge Distributions
subject: "[[Electromagnetic Fields]]"
parent:
  - Electrostatics
modified: 2026-08-04T09:36:23
---
### Electric Field due to Continuous Charge Distributions
#electric-field #continuous-charge-distribution #integration

> When charges are distributed over a line, surface, or volume, we cannot use simple summation. Instead, we treat the distribution as a collection of infinitesimal point charges $dQ$. The total electric field $\vec{E}$ is then found by integrating the contribution from each differential charge over the entire distribution, based on the principle of superposition.

The fundamental building block for all cases is the differential electric field $d\vec{E}$ from a differential charge $dQ$:
$$\boxed{\quad d\vec{E} = \frac{dQ}{4\pi\varepsilon_0 R^2} \hat{a}_R \quad}$$
where $R$ is the distance from the differential charge $dQ$ to the point of interest, and $\hat{a}_R$ is the unit vector pointing from $dQ$ to that point. The total field is $\vec{E} = \int d\vec{E}$.

#### 1. Line Charge Distribution ($\rho_L$)
#line-charge

For a charge distributed along a line, we define the **line charge density** $\rho_L$ (in Coulombs per meter, C/m).
-   Differential charge: $dQ = \rho_L dl$
-   Electric field integral:
    $$\vec{E} = \int_L \frac{\rho_L dl}{4\pi\varepsilon_0 R^2} \hat{a}_R$$
**Classic Example: Infinite Line Charge**
For an infinitely long, straight line of uniform charge density $\rho_L$ along the z-axis, the electric field at a radial distance $\rho$ is:
$$\boxed{\quad \vec{E} = \frac{\rho_L}{2\pi\varepsilon_0 \rho} \hat{a}_\rho \quad}$$
By symmetry, the field is purely radial and its magnitude decreases as $1/\rho$.

#### 2. Surface Charge Distribution ($\rho_S$)
#surface-charge

For a charge distributed over a surface, we define the **surface charge density** $\rho_S$ (in Coulombs per square meter, C/m²).
-   Differential charge: $dQ = \rho_S dS$
-   Electric field integral:
    $$\vec{E} = \iint_S \frac{\rho_S dS}{4\pi\varepsilon_0 R^2} \hat{a}_R$$
**Classic Example: Infinite Sheet of Charge**
For an infinitely large plane sheet of uniform charge density $\rho_S$ in the x-y plane, the electric field is:
$$\boxed{\quad \vec{E} = \frac{\rho_S}{2\varepsilon_0} \hat{a}_n \quad}$$
where $\hat{a}_n$ is the unit vector normal to the sheet (e.g., $\hat{a}_z$ for points above the sheet). Remarkably, the electric field from an infinite sheet is **uniform and independent of the distance** from the sheet.

#### 3. Volume Charge Distribution ($\rho_V$)
#volume-charge

For a charge distributed throughout a volume, we define the **volume charge density** $\rho_V$ (in Coulombs per cubic meter, C/m³).
-   Differential charge: $dQ = \rho_V dv$
-   Electric field integral:
    $$\vec{E} = \iiint_V \frac{\rho_V dv}{4\pi\varepsilon_0 R^2} \hat{a}_R$$
These integrals are often very complex. For symmetric distributions (like a uniformly charged sphere), the electric field is much more easily found using [[Gauss's Law|Gauss's Law]].

#### General Procedure for Solving by Integration
1.  **Choose Coordinates**: Select a coordinate system that best fits the geometry of the charge distribution.
2.  **Define Elements**: Identify the position vector to the field point P ($\vec{r}$) and to the differential source element dQ ($\vec{r}'$).
3.  **Find R-vector**: Calculate the vector from source to point, $\vec{R} = \vec{r} - \vec{r}'$. Find its magnitude $R=|\vec{R}|$ and unit vector $\hat{a}_R = \vec{R}/R$.
4.  **Write dQ**: Express the differential charge in terms of the charge density and differential element (e.g., $dQ = \rho_L dl$).
5.  **Set Up Integral**: Substitute all expressions into the integral for $\vec{E}$.
6.  **Exploit Symmetry**: Before integrating, determine if any vector components cancel out due to symmetry. This drastically simplifies the integral.
7.  **Integrate**: Solve the integral over the defined limits of the charge distribution.

---
### Related Concepts
#continuous-charge/related-concepts

> [[Electric Field Intensity (E)]]

[[Coulomb's Law]]
[[Gauss's Law]]
[[Superposition Principle]]
[[Cylindrical Coordinate System]]
[[Spherical Coordinate System]]
[[Vector Calculus]]