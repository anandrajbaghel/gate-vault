---
tags:
  - electrostatics
  - capacitance
  - circuit-elements
  - electromagnetic-fields
  - energy-storage
created: 2025-10-17
aliases:
  - Capacitance
  - Capacitor
  - Calculating Capacitance
  - Capacitance and Calculation of Capacitance (Parallel Plate, Coaxial, Spherical)
  - Co-Axial Capacitor
subject: "[[Electromagnetic Fields]]"
parent:
  - Electrostatics
modified: 2026-08-04T09:15:54
---
### Capacitance and Calculation of Capacitance
#electrostatics/capacitance #energy-storage

> **Capacitance** ($C$) is a measure of the ability of a two-conductor system to store electric charge and energy. It is defined as the ratio of the magnitude of the charge ($Q$) on one of the conductors to the potential difference ($V$) between the two conductors.

$$\boxed{\quad C = \frac{Q}{V} \quad}$$
The unit of capacitance is the Farad (F), where 1 Farad = 1 Coulomb/Volt.

---
#### General Procedure for Calculating Capacitance
#capacitance/calculation

A systematic procedure can be used to find the capacitance of any two-conductor geometry:

1.  **Assume Charges**: Place a charge of $+Q$ on one conductor and $-Q$ on the other.
2.  **Find Electric Field ($\vec{E}$)**: Determine the electric field $\vec{E}$ in the region between the conductors, typically by using [[Gauss's Law|Gauss's Law]].
3.  **Find Potential Difference ($V$)**: Calculate the potential difference between the two conductors by integrating the electric field along a path from the negative to the positive conductor.
    $$V = V_{ab} = -\int_{-}^{+} \vec{E} \cdot d\vec{l}$$
    The result for $V$ will be a positive quantity containing $Q$.
4.  **Calculate Capacitance ($C$)**: Use the definition $C = Q/V$. The charge $Q$ will cancel out, leaving a result that depends only on the geometry and the permittivity of the material between the conductors.

---
#### Energy Stored in a Capacitor
#capacitor/energy

A capacitor stores energy in the electric field between its conductors. The total energy ($W_E$) stored is:
$$\boxed{\quad W_E = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C} \quad}$$
This energy can also be expressed in terms of the **energy density** ($w_E$) of the electric field:
$$w_E = \frac{1}{2}\varepsilon E^2 \quad (\text{in J/m}^3)$$
The total energy is the integral of the energy density over the volume between the conductors: $W_E = \int_v w_E dv$.

---
#### Capacitors in Series and Parallel

Capacitors combine in a manner opposite to that of resistors and inductors.

##### Capacitors in Parallel
#parallel-capacitors 

The equivalent capacitance is the sum of individual capacitances.
$$\boxed{\quad C_{eq} = C_1 + C_2 + \dots + C_n \quad}$$

##### Capacitors in Series
#series-capacitors 

The reciprocal of the equivalent capacitance is the sum of the reciprocals of the individual capacitances.
$$\boxed{\quad \frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \dots + \frac{1}{C_n} \quad}$$
For two capacitors in series:
$$\boxed{\quad C_{eq} = \frac{C_1 C_2}{C_1 + C_2} \quad}$$

---
#### Standard Geometries
#capacitance/calculation/standard-geometry 

##### 1. Parallel Plate Capacitor
#parallel-plate-capacitor 

For two parallel plates of area $A$ separated by a distance $d$, filled with a dielectric of permittivity $\varepsilon$. Assuming $d \ll \sqrt{A}$ to neglect fringing fields.
- **Electric Field**: $E = \frac{\rho_s}{\varepsilon} = \frac{Q}{A\varepsilon}$
- **Potential Difference**: $V = E \cdot d = \frac{Qd}{A\varepsilon}$
- **Capacitance**:
$$\boxed{\quad C = \frac{Q}{V} = \frac{\varepsilon A}{d} \quad}$$

##### 2. Coaxial Capacitor (Cable)
#coaxial-capacitor #coaxial-cable 

For a coaxial cable of length $L$, with an inner conductor of radius $a$ and an outer conductor of radius $b$, filled with a dielectric $\varepsilon$.
- **Electric Field**: $E = \frac{Q}{2\pi\varepsilon L \rho}$ for $a < \rho < b$.
- **Potential Difference**: $V = -\int_b^a E d\rho = \frac{Q}{2\pi\varepsilon L} \ln\left(\frac{b}{a}\right)$
- **Capacitance**:
$$\boxed{\quad C = \frac{Q}{V} = \frac{2\pi\varepsilon L}{\ln(b/a)} \quad}$$

>[!warning]- Coaxial Capacitance Calculation
>
> This formula is for full $360\degree$ to find for $d\theta$ $$dC = \frac{d\theta \cdot \epsilon(\theta) \cdot L}{ln(b/a)}$$Integrate around the whole circle: $$C = \frac{L}{\ln(b/a)}\int_{0}^{2\pi}\varepsilon(\theta)\,d\theta = \frac{2\pi L}{\ln(b/a)}\,\overline{\varepsilon}$$where $\overline{\varepsilon}$ is the angular average of permittivity: $$\overline{\varepsilon}=\frac{1}{2\pi}\int_{0}^{2\pi}\varepsilon(\theta)$$
>
>##### Assuming a case (two equal halves)
>
>One half has permittivity $\varepsilon_0$, the other half $\varepsilon_0\varepsilon_r$. The angular average is $$\overline{\varepsilon}=\frac{\varepsilon_0+\varepsilon_0\varepsilon_r}{2}=\varepsilon_0\frac{1+\varepsilon_r}{2}$$Therefore the total capacitance is $$\boxed{\,C \;=\; \frac{2\pi L}{\ln(b/a)}\;\overline{\varepsilon} \;=\; \frac{2\pi \varepsilon_0 L}{\ln(b/a)}\cdot\frac{1+\varepsilon_r}{2}\,}$$

##### 3. Spherical Capacitor
#spherical-capacitor 

For two concentric spherical shells with inner radius $a$ and outer radius $b$, filled with a dielectric $\varepsilon$.
- **Electric Field**: $E = \frac{Q}{4\pi\varepsilon r^2}$ for $a < r < b$.
- **Potential Difference**: $V = -\int_b^a E dr = \frac{Q}{4\pi\varepsilon} \left(\frac{1}{a} - \frac{1}{b}\right)$
- **Capacitance**:
$$\boxed{\quad C = \frac{Q}{V} = \frac{4\pi\varepsilon}{\frac{1}{a} - \frac{1}{b}} \quad}$$
- **Isolated Sphere**: If the outer conductor is moved to infinity ($b \to \infty$), the capacitance of an isolated sphere of radius $a$ is:
$$\boxed{\quad C = 4\pi\varepsilon a \quad}$$

---
### Related Concepts
#topic/related-concepts

> [[Gauss's Law]]
> [[Dielectric Materials and Polarization]]

[[Boundary Conditions for Electrostatic Fields]]
[[Electric Potential and Potential Difference (V)]]
[[Properties of Conductors in an Electrostatic Field]]
[[Energy Density in an Electrostatic Field]]
[[Poisson's Equation]]
