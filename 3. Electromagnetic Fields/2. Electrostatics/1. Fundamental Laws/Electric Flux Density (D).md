---
tags:
  - electrostatics
  - electric-flux
  - vector-field
  - maxwells-equations
created: 2025-10-17
aliases:
  - D-Field
  - Electric Displacement Field
subject: "[[Electromagnetic Fields]]"
parent:
  - Electrostatics
modified: 2026-08-04T09:36:34
---
### Electric Flux Density (D)
#electric-flux-density #d-field #gausss-law #permittivity

> The **Electric Flux Density ($\vec{D}$)**, or electric displacement, is a vector field that is exceptionally useful in analyzing electrostatic problems involving dielectric materials. Unlike the electric field $\vec{E}$, which is affected by the material it is in, ==the $\vec{D}$ field is determined solely by the free charges in a configuration, making it independent of the medium==.

#### Definition and Relationship to E-Field
#d-field/definition #permittivity

The electric flux density $\vec{D}$ is directly proportional to the electric field $\vec{E}$:
$$\boxed{\quad \vec{D} = \varepsilon \vec{E} \quad}$$
where:
-   $\varepsilon$ is the **permittivity** of the medium (in Farads per meter, F/m).

The permittivity $\varepsilon$ is further defined as:
$$\varepsilon = \varepsilon_0 \varepsilon_r$$
-   $\varepsilon_0$ is the **permittivity of free space**, a fundamental constant ($\approx 8.854 \times 10^{-12}$ F/m).
-   $\varepsilon_r$ is the **relative permittivity** or **dielectric constant** of the material. It is a dimensionless factor that indicates how much the material enhances the electric field flux compared to a vacuum ($\varepsilon_r \ge 1$). For free space, $\varepsilon_r = 1$.

The primary advantage of using $\vec{D}$ is that it accounts for the effect of polarization in dielectric materials, allowing us to relate the field directly to the *free charges* that we control, rather than the combination of free and bound (polarization) charges.

---
#### Electric Flux ($\Psi$)
#electric-flux

Electric flux, denoted by $\Psi$ (psi), is the total number of electric field lines passing through a given surface. It is the surface integral of the electric flux density.
$$\boxed{\quad \Psi = \iint_S \vec{D} \cdot d\vec{S} \quad}$$
The unit of electric flux is the **Coulomb (C)**.

---
#### Gauss's Law in terms of D
#gausss-law #maxwells-equations

Gauss's Law, one of the four Maxwell's Equations, provides the most powerful application of the $\vec{D}$ field. It states that the total electric flux passing through any closed surface is equal to the net free charge enclosed within that surface.

**1. Integral Form:**
$$\boxed{\quad \oint_S \vec{D} \cdot d\vec{S} = Q_{\text{enclosed}} = \iiint_V \rho_v dv \quad}$$
This form is used with symmetric charge distributions to easily calculate the $\vec{D}$ field, and from it, the $\vec{E}$ field.

**2. Differential (or Point) Form:**
By applying the [[Gauss's Divergence Theorem|Divergence Theorem]] to the integral form, we get the point form of Gauss's Law, which is Maxwell's first equation for electrostatics.
$$\boxed{\quad \nabla \cdot \vec{D} = \rho_v \quad}$$
This equation states that the free volume charge density ($\rho_v$) acts as the source of the electric flux density field. A non-zero divergence of $\vec{D}$ at a point implies the existence of a free charge at that point.

---
#### Units

The unit of Electric Flux Density ($\vec{D}$) is **Coulombs per square meter (C/m²)**.

---
### Related Concepts
#electric-flux-density/related-concepts

> [[Gauss's Law]] (The primary application and context for D)

[[Electric Field Intensity (E)]]
[[Maxwell's First Equation (Electrostatics)]]
[[Dielectric Materials and Polarization]]
[[Boundary Conditions for Electrostatic Fields]]
[[Divergence of a Vector Field]]
[[Gauss's Divergence Theorem]]