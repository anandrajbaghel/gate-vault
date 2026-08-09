---
tags:
  - electrostatics
  - energy
  - potential
  - vector-calculus
  - capacitor
created: 2025-10-17
aliases:
  - Electrostatic Energy Density
  - Energy in E-Field
subject: "[[Electromagnetic Fields]]"
parent:
  - Electrostatics
modified: 2026-08-04T09:38:26
---
### Energy Density in an Electrostatic Field
#energy-density #electrostatic-energy #potential-energy

> The energy of a static charge distribution is not stored in the charges themselves, but rather in the electric field created by the charges. **Electrostatic energy density ($w_E$)** is a scalar field representing the amount of potential energy stored per unit volume at any point within the electric field.

#### Total Electrostatic Energy (W)
#total-energy #work-of-assembly

The total energy $W$ required to assemble a distribution of charges from infinity is equal to the total energy stored in the resulting electric field.

-   **For a system of N discrete point charges**:
    $$\boxed{\quad W = \frac{1}{2} \sum_{i=1}^N Q_i V_i \quad}$$
    where $V_i$ is the electric potential at the location of charge $Q_i$ due to all *other* charges in the system. The factor of 1/2 prevents double-counting the energy of interaction between pairs of charges.

-   **For a continuous charge distribution**:
    The summation becomes an integral over the volume charge density $\rho_v$.
    $$\boxed{\quad W = \frac{1}{2} \iiint_V \rho_v V \, dv \quad}$$

#### Derivation in Terms of Fields (E and D)
#field-energy-formulation

We can express the total energy $W$ solely in terms of the electric fields $\vec{E}$ and $\vec{D}$. This derivation shows that the energy resides in the field itself.
$$\begin{align}
W &= \frac{1}{2} \iiint_V \rho_v V \, dv \quad \text{(Start with the potential form)} \\
\text{Substitute Maxwell's First Eq, } \rho_v &= \nabla \cdot \vec{D}: \\
W &= \frac{1}{2} \iiint_V (\nabla \cdot \vec{D}) V \, dv \\
\text{Use vector identity } \nabla \cdot (V\vec{D}) &= V(\nabla \cdot \vec{D}) + \vec{D} \cdot (\nabla V): \\
W &= \frac{1}{2} \iiint_V [\nabla \cdot (V\vec{D}) - \vec{D} \cdot (\nabla V)] \, dv \\
\text{Use Divergence Theorem on the first term: } &= \frac{1}{2} \oint_S (V\vec{D}) \cdot d\vec{S} - \frac{1}{2} \iiint_V \vec{D} \cdot (\nabla V) \, dv \\
\text{As } V \to \infty, V \propto \frac{1}{r} \text{ and } D \propto \frac{1}{r^2}, &\text{ so the surface integral at infinity is zero.} \\
\text{Substitute } \vec{E} = -\nabla V: \\
W &= \frac{1}{2} \iiint_V \vec{D} \cdot (\vec{E}) \, dv
\end{align}$$
This gives the total energy stored in the field:
$$\boxed{\quad W = \frac{1}{2} \iiint_V (\vec{D} \cdot \vec{E}) \, dv \quad}$$

#### Energy Density ($w_E$)
#energy-density #energy-per-volume

From the integral above, we can identify the integrand as the **energy density ($w_E$)**, which is the energy per unit volume.
$$w_E = \frac{dW}{dv}$$
The formulas for energy density are:
$$\boxed{\quad w_E = \frac{1}{2} \vec{D} \cdot \vec{E} \quad}$$
Using the relationship $\vec{D} = \varepsilon\vec{E}$, we can write this in two other common forms:
$$\boxed{\quad w_E = \frac{1}{2} \varepsilon E^2 \quad \text{and} \quad w_E = \frac{D^2}{2\varepsilon} \quad}$$
The unit of energy density is **Joules per cubic meter (J/m³)**.

#### Application: Energy Stored in a Capacitor
#capacitor-energy

The familiar formula for energy stored in a capacitor, $W = \frac{1}{2}CV^2$, can be derived by integrating the energy density over the volume of the dielectric between the capacitor plates. For a parallel-plate capacitor:
$E = V/d$ and the volume is $A \cdot d$.
$$W = \iiint w_E \, dv = \int \left(\frac{1}{2}\varepsilon E^2\right) dv$$
Since $E$ is uniform, the integral becomes:
$$W = \left(\frac{1}{2}\varepsilon E^2\right) \times (\text{Volume}) = \frac{1}{2}\varepsilon \left(\frac{V}{d}\right)^2 (Ad) = \frac{1}{2}\left(\frac{\varepsilon A}{d}\right)V^2$$
Since $C = \varepsilon A / d$, this gives:
$$W = \frac{1}{2}CV^2$$

---
### Related Concepts
#energy-density/related-concepts

> [[Electric Potential and Potential Difference (V)]] (Energy is fundamentally linked to the work done moving charges, which defines potential)

[[Capacitance and Calculation of Capacitance]]
[[Electric Field Intensity (E)]]
[[Electric Flux Density (D)]]
[[Poynting Vector]]
[[Magnetic Energy and Energy Density]]
[[Poisson's Equation]]
