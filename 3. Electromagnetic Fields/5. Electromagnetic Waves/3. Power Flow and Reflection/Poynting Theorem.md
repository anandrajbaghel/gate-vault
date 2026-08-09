---
tags:
  - electromagnetic-fields
  - poynting-theorem
  - power-flow
  - energy-conservation
  - gate
created: 2025-10-17
aliases:
  - Poynting's Theorem
  - EM Energy Conservation
subject: "[[Electromagnetic Fields]]"
parent:
  - Electromagnetic Waves
modified: 2026-08-04T10:15:57
---
### Poynting Theorem
#poynting-theorem #energy-conservation #power-flow

> The **Poynting Theorem** is the fundamental statement of conservation of energy for the electromagnetic field. It relates the flow of energy out of a region of space to the work done on charges and the rate of change of energy stored within that region. The theorem is derived from Maxwell's curl equations and provides a precise mathematical description of electromagnetic power flow.

#### Integral Form: The Energy Balance Equation
#poynting-theorem/integral-form

The Poynting theorem is most intuitively understood in its integral form, which describes the energy balance for a finite volume $V$ enclosed by a surface $S$.
$$\boxed{\quad \oint_S (\mathbf{E} \times \mathbf{H}) \cdot d\mathbf{S} = -\int_V \mathbf{J} \cdot \mathbf{E} \, dV -\frac{\partial}{\partial t} \int_V \left( \frac{1}{2}\varepsilon|\mathbf{E}|^2 + \frac{1}{2}\mu|\mathbf{H}|^2 \right) dV \quad}$$
This equation can be read as a power balance statement:

**Power Outflow = Power Dissipated + Rate of Decrease of Stored Energy**

Let's break down each term:
1.  **Left-Hand Side**: $\oint_S (\mathbf{E} \times \mathbf{H}) \cdot d\mathbf{S}$
    -   This is the surface integral of the [[Poynting Vector]] $\mathbf{P} = \mathbf{E} \times \mathbf{H}$.
    -   It represents the **total power flowing out** of the closed surface $S$.

2.  **First Term on Right-Hand Side**: $-\int_V \mathbf{J} \cdot \mathbf{E} \, dV$
    -   The term $\mathbf{J} \cdot \mathbf{E}$ represents the power delivered by the fields to the charge carriers per unit volume.
    -   If $\mathbf{J}$ represents conduction current ($\mathbf{J}_c = \sigma \mathbf{E}$), this term becomes $\int_V \sigma|\mathbf{E}|^2 dV$, which is the total **Ohmic power dissipated as heat** within the volume $V$. The negative sign in the theorem indicates a loss of energy *from* the electromagnetic field.

3.  **Second Term on Right-Hand Side**: $-\frac{\partial}{\partial t} \int_V \left( u_e + u_m \right) dV$
    -   This term represents the **rate of decrease of the total energy stored** in the electric ($u_e = \frac{1}{2}\varepsilon|\mathbf{E}|^2$) and magnetic ($u_m = \frac{1}{2}\mu|\mathbf{H}|^2$) fields within the volume $V$.

---
#### Differential Form: The Point Form
#poynting-theorem/differential-form

The differential form of the theorem applies at any point in space and is derived from the integral form using the divergence theorem.
$$\boxed{\quad \nabla \cdot (\mathbf{E} \times \mathbf{H}) = -\mathbf{J} \cdot \mathbf{E} - \frac{\partial}{\partial t} \left( \frac{1}{2}\varepsilon|\mathbf{E}|^2 + \frac{1}{2}\mu|\mathbf{H}|^2 \right) \quad}$$
This can be written more compactly as:
$$\nabla \cdot \mathbf{P} = -P_{dissipated} - \frac{\partial u}{\partial t}$$
This states that the divergence of the Poynting vector (the net power flowing out of an infinitesimal volume) at a point is equal to the rate of energy dissipation plus the rate of decrease of stored energy density at that point.

---
#### Complex Poynting Theorem for Time-Harmonic Fields
#complex-poynting-theorem

For sinusoidal (time-harmonic) fields, it is more convenient to work with time-averaged quantities. The **Complex Poynting Theorem** is derived using phasor representations of the fields ($\mathbf{E}_s, \mathbf{H}_s, \mathbf{J}_s$).
The time-averaged Poynting vector is:
$$\mathbf{P}_{avg} = \frac{1}{2} \text{Re}\{ \mathbf{E}_s \times \mathbf{H}_s^* \}$$
The integral form of the complex Poynting theorem is:
$$\oint_S \mathbf{P}_{avg} \cdot d\mathbf{S} = -\frac{1}{2}\int_V \text{Re}\{\mathbf{J}_s \cdot \mathbf{E}_s^*\} dV - j2\omega \int_V (W_m - W_e) dV$$
-   The real part of this equation gives the balance of real power:
    **Average Power Outflow = Average Power Dissipated**
-   The imaginary part relates to reactive power and the balance between the average energy stored in the magnetic ($W_m$) and electric ($W_e$) fields.

---
### Related Concepts
#topic/related-concepts

> [[Poynting Vector]]

[[Maxwell's Equations in Final Form]]
[[Energy Density in an Electrostatic Field]]
[[Magnetic Energy and Energy Density]]
[[Power Flow in an Electromagnetic Wave]]
[[Divergence of a Vector Field]]
[[Gauss's Divergence Theorem]]
