---
tags:
  - electrostatics
  - electric-field
  - vector-field
  - fundamental-laws
created: 2025-10-17
aliases:
  - Electric Field
  - E-Field
subject: "[[Electromagnetic Fields]]"
parent:
  - Electrostatics
modified: 2026-08-04T09:36:31
---
### Electric Field Intensity (E)
#electric-field #vector-field #electrostatics

> ==The **Electric Field Intensity ($\vec{E}$)** is a vector field that describes the electrostatic [[Coulomb's Law|force]] experienced by a unit positive test charge at any point in space.== It is a fundamental concept that detaches the idea of force from a specific test charge, instead characterizing the influence of a source charge distribution on the space surrounding it.

> [!prerequisite] Prerequisites
> [[Coulomb's Law]]

The electric field at a point $\vec{r}$ is defined as the force $\vec{F}$ on a small positive test charge $q_t$ placed at that point, divided by the charge itself:
$$\boxed{\quad \vec{E} = \lim_{q_t \to 0} \frac{\vec{F}}{q_t} \quad}$$
The limit is used to ensure the test charge is small enough that it does not disturb the original charge distribution that creates the field.

---
#### Electric Field of a Point Charge
#point-charge #coulombs-law

The electric field created by a single source point charge $Q$ can be derived directly from [[Coulomb's Law]]. If a test charge $q_t$ is placed at a distance $R$ from $Q$, the force on it is $\vec{F} = \frac{Q q_t}{4\pi\varepsilon_0 R^2} \hat{a}_R$. Dividing by $q_t$ gives the electric field:
$$\boxed{\quad \vec{E} = \frac{Q}{4\pi\varepsilon_0 R^2} \hat{a}_R \quad}$$
where:
-   $Q$ is the source charge.
-   $R$ is the distance from the source charge to the point of interest.
-   $\hat{a}_R$ is the radial unit vector pointing away from the source charge.
-   ==The field points **radially outward** for a positive charge ($Q>0$) and **radially inward** for a negative charge ($Q<0$).==

---
#### Superposition Principle
#superposition-principle

The total electric field at a point due to a collection of $N$ discrete charges is the **vector sum** of the fields produced by each individual charge:
$$\boxed{\quad \vec{E}_{\text{total}} = \sum_{i=1}^{N} \vec{E}_i = \frac{1}{4\pi\varepsilon_0} \sum_{i=1}^{N} \frac{Q_i}{|\vec{r} - \vec{r}_i|^2} \frac{\vec{r} - \vec{r}_i}{|\vec{r} - \vec{r}_i|} \quad}$$
This principle allows us to calculate the E-field for complex charge arrangements.

---
#### Electric Field due to Continuous Charge Distributions
#continuous-charge-distribution

For charges distributed continuously over a line, surface, or volume, we replace the summation with an integral. The differential electric field $d\vec{E}$ due to a differential charge $dQ$ is:
$d\vec{E} = \frac{dQ}{4\pi\varepsilon_0 R^2} \hat{a}_R$
We integrate this expression over the entire charge distribution.
1.  **Line Charge ($\rho_L$)**: $dQ = \rho_L dl$
    $\vec{E} = \int_L \frac{\rho_L dl}{4\pi\varepsilon_0 R^2} \hat{a}_R$
2.  **Surface Charge ($\rho_S$)**: $dQ = \rho_S dS$
    $\vec{E} = \iint_S \frac{\rho_S dS}{4\pi\varepsilon_0 R^2} \hat{a}_R$
3.  **Volume Charge ($\rho_V$)**: $dQ = \rho_V dv$
    $\vec{E} = \iiint_V \frac{\rho_V dv}{4\pi\varepsilon_0 R^2} \hat{a}_R$

---
#### Electric Field Lines
#electric-field-lines #flux-lines

Electric field lines are a graphical tool used to visualize electric fields.
-   **Direction**: The tangent to a field line at any point gives the direction of the $\vec{E}$ vector.
-   **Origin/Termination**: Lines originate on positive charges and terminate on negative charges (or extend to infinity).
-   **Strength**: The density of the lines (number of lines per unit area) is proportional to the magnitude of the electric field.
-   **Uniqueness**: Field lines can never cross.

---
#### Units
#units

-   From the definition $\vec{E} = \vec{F}/q$, the unit is **Newtons per Coulomb (N/C)**.
-   From the relationship $\vec{E} = -\nabla V$, the unit is **Volts per meter (V/m)**.
-   These units are equivalent: $1 \text{ N/C} = 1 \text{ V/m}$.

---
### Related Concepts
#electric-field/related-concepts

> [[Coulomb's Law]] (The E-field of a point charge is derived from it)

[[Electric Flux Density (D)]]
[[Gauss's Law]]
[[Electric Potential and Potential Difference (V)]]
[[Relationship between Electric Field and Potential]]
[[Electric Field due to Continuous Charge Distributions]]
[[Lorentz Force Equation]]