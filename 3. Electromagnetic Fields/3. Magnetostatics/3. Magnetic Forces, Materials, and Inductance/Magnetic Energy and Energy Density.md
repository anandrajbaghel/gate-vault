---
tags:
  - magnetostatics
  - magnetic-energy
  - energy-density
  - inductance
  - electromagnetic-fields
created: 2025-10-17
aliases:
  - Magnetic Energy
  - Magnetic Energy Density
subject: "[[Electromagnetic Fields]]"
parent:
  - Magnetostatics
modified: 2026-08-04T09:58:12
---
### Magnetic Energy and Energy Density
#magnetostatics/energy #energy-density

> Just as energy is stored in the electric field of a capacitor, energy is stored in the magnetic field of an inductor or any region where a magnetic field exists. This **magnetic energy** is the work required to establish the current against the back EMF that opposes it. This energy is considered to be stored in the magnetic field itself.

#### Energy Stored in an Inductor
#inductor-energy #self-inductance

When current flows through an inductor, it establishes a magnetic field. To increase the current from 0 to a final value $I$, work must be done against the induced back EMF, $V = L(di/dt)$. The instantaneous power absorbed by the inductor is $P = V i = L(di/dt)i$. The total energy stored is the integral of this power over time:
\begin{align}
W_m &= \int_0^t P dt = \int_0^I (L \frac{di}{dt}) i dt \\
&= \int_0^I L i \ di = \frac{1}{2} L I^2
\end{align}
$$\boxed{\quad W_m = \frac{1}{2} L I^2 \quad}$$
This is the total energy stored in the magnetic field of an inductor with self-inductance $L$ carrying a current $I$.

---
#### Magnetic Energy Density ($w_m$)
#magnetic-energy-density

The **magnetic energy density** ($w_m$) is the magnetic energy stored per unit volume. It is a property of the magnetic field at a point in space. The total energy $W_m$ is the volume integral of the energy density.
$$W_m = \int_v w_m dv$$
The energy density is given by:
$$\boxed{\quad w_m = \frac{1}{2} \vec{B} \cdot \vec{H} \quad}$$
For a **linear, isotropic medium** where $\vec{B} = \mu\vec{H}$, this can be written in two common forms:
$$\boxed{\quad w_m = \frac{1}{2}\mu H^2 = \frac{B^2}{2\mu} \quad}$$
The unit of energy density is **Joules per cubic meter (J/m³)**.

---
#### Calculating Inductance from Magnetic Energy
#inductance-calculation #energy-method

The relationship $W_m = \frac{1}{2}LI^2$ provides a powerful alternative method for calculating inductance, especially for complex geometries where calculating flux linkage is difficult.
1.  Assume a current $I$ flows through the structure.
2.  Determine the resulting magnetic field ($\vec{B}$ and $\vec{H}$).
3.  Calculate the total energy stored in the magnetic field by integrating the energy density over the entire volume where the field exists: $W_m = \int_v (\frac{1}{2}\mu H^2) dv$.
4.  Calculate the inductance using the formula:
    $$\boxed{\quad L = \frac{2 W_m}{I^2} \quad}$$

---
#### Energy in a System of Coupled Inductors
#coupled-circuits #mutual-inductance

For two magnetically coupled coils, the total stored energy includes a term due to the mutual inductance.
$$\boxed{\quad W_m = \frac{1}{2} L_1 I_1^2 + \frac{1}{2} L_2 I_2^2 \pm M I_1 I_2 \quad}$$
-   The **plus (+) sign** is used if the currents produce magnetic fluxes that **aid** each other (e.g., both currents entering or leaving the dotted terminals).
-   The **minus (-) sign** is used if the currents produce fluxes that **oppose** each other.

---
### Related Concepts
#topic/related-concepts

> [[Inductance and Mutual Inductance]]

[[Energy Density in an Electrostatic Field]]
[[Poynting Theorem]]
[[Magnetic Flux Density (B)]]
[[Magnetic Field Intensity (H)]]
[[Faraday's Law of Induction]]
[[Relationship between B and H]]
