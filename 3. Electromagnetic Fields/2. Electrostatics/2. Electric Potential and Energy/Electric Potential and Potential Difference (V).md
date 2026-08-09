---
tags:
  - electrostatics
  - electric-potential
  - voltage
  - work-energy
  - scalar-field
created: 2025-10-17
aliases:
  - Electric Potential
  - Potential Difference
  - Voltage
  - Electrostatic Potential
subject: "[[Electromagnetic Fields]]"
parent:
  - Electrostatics
modified: 2026-08-04T09:36:46
---
### Electric Potential and Potential Difference (V)
#electric-potential #voltage #work-energy #scalar-field

> **Electric Potential** is a scalar quantity that represents the amount of work needed to move a unit of positive charge from a reference point to a specific point in an electric field. It provides a simpler, scalar-based way to describe the effects of an electric field, from which the vector E-field can then be derived.

#### Potential Difference ($V_{AB}$)
#potential-difference

The **potential difference** between two points A and B, denoted $V_{AB}$, is the work done ($W_{AB}$) per unit charge ($Q$) in moving the charge from point A to point B against the electric field.
$$\boxed{\quad V_{AB} = V_B - V_A = \frac{W_{AB}}{Q} \quad}$$
The potential difference is found by integrating the electric field along a path from A to B:
$$\boxed{\quad V_{AB} = V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l} \quad}$$
-   The negative sign indicates that work is done *against* the electric field. Moving a positive charge in the direction of the E-field results in a decrease in potential.
-   Since the electrostatic field is conservative, the integral is independent of the path taken from A to B.

#### Absolute Electric Potential ($V$)
#absolute-potential

The **absolute potential** (or simply "potential") at a point is the potential difference between that point and a chosen reference point where the potential is defined as zero. In electromagnetics, this reference point is typically taken at **infinity**.
The potential $V$ at a point P is:
$$\boxed{\quad V_P = -\int_{\infty}^P \vec{E} \cdot d\vec{l} \quad}$$

#### Potential of a Point Charge
#point-charge-potential

The potential at a radial distance $R$ from a single point charge $Q$, with the reference at infinity, is derived by integrating the E-field of the point charge:
$$\begin{align}
V(R) &= -\int_{\infty}^R \left(\frac{Q}{4\pi\varepsilon_0 r^2} \hat{a}_r\right) \cdot (dr \hat{a}_r) \\
 &= -\frac{Q}{4\pi\varepsilon_0} \int_{\infty}^R \frac{1}{r^2} dr = -\frac{Q}{4\pi\varepsilon_0} \left[-\frac{1}{r}\right]_{\infty}^R \\
 &= \frac{Q}{4\pi\varepsilon_0} \left(\frac{1}{R} - \frac{1}{\infty}\right)
\end{align}$$
$$\boxed{\quad V = \frac{Q}{4\pi\varepsilon_0 R} \quad}$$

#### Superposition Principle
#superposition-principle

Since potential is a scalar quantity, the total potential at a point due to a collection of charges is the simple **algebraic sum** of the potentials due to each individual charge.
-   **For a system of N point charges**:
    $$\boxed{\quad V_P = \sum_{i=1}^N V_i = \frac{1}{4\pi\varepsilon_0} \sum_{i=1}^N \frac{Q_i}{R_i} \quad}$$
    where $R_i$ is the distance from charge $Q_i$ to the point P. This is significantly easier to compute than the vector sum for the E-field.
-   **For continuous charge distributions**:
    -   Line Charge: $V = \int_L \frac{\rho_L dl}{4\pi\varepsilon_0 R}$
    -   Surface Charge: $V = \iint_S \frac{\rho_S dS}{4\pi\varepsilon_0 R}$
    -   Volume Charge: $V = \iiint_V \frac{\rho_V dv}{4\pi\varepsilon_0 R}$

#### Equipotential Surfaces
#equipotential-surface

An **equipotential surface** is a surface consisting of all points that have the same electric potential.
-   No work is done when moving a charge along an equipotential surface.
-   The electric field lines ($\vec{E}$) are always perpendicular to the equipotential surfaces and point in the direction of decreasing potential.

---
### Related Concepts
#electric-potential/related-concepts

> [[Relationship between Electric Field and Potential]] (The fundamental differential relationship)

[[Electric Field Intensity (E)]]
[[Coulomb's Law]]
[[Gradient of a Scalar Field]]
[[Energy Density in an Electrostatic Field]]
[[Laplace's Equation]]
[[Poisson's Equation]]