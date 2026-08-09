---
tags:
  - electromagnetic-fields
  - poynting-theorem
  - power-flow
  - gate
created: 2025-10-17
aliases:
  - Poynting Vector
  - Poynting Theorem
  - EM Power Flow
subject: "[[Electromagnetic Fields]]"
parent:
  - Electromagnetic Waves
modified: 2026-08-04T10:16:14
---
### Poynting Vector
#poynting-vector #power-flow #electromagnetic-energy

> The **Poynting Vector**, denoted by $\mathbf{P}$, is a vector quantity that describes the magnitude and direction of the energy flux (the rate of energy transfer per unit area) of an electromagnetic field. It represents the **instantaneous power density** propagating through a point in space.

#### Definition and Formula
#poynting-vector/definition

The Poynting vector $\mathbf{P}(t)$ is defined as the cross product of the instantaneous electric field vector $\mathbf{E}(t)$ and the instantaneous magnetic field vector $\mathbf{H}(t)$.
$$\boxed{\quad \mathbf{P}(t) = \mathbf{E}(t) \times \mathbf{H}(t) \quad}$$
-   **Units**: The unit of the Poynting vector is Watts per square meter (W/m²).
-   **Direction**: The direction of $\mathbf{P}$ at any point gives the direction of energy propagation at that point. For a [[Uniform Plane Waves|uniform plane wave]], this direction is the same as the direction of wave propagation ($\mathbf{\hat{a}}_k$).

---
#### Poynting Theorem
#poynting-theorem #energy-conservation

The Poynting Theorem is the work-energy theorem for electromagnetism. It is a statement of conservation of energy, relating the power flowing out of a volume to the energy stored and dissipated within that volume.

**Integral Form**:
The theorem states that the total power flowing out of a closed surface $S$ is equal to the rate of decrease of energy stored within the volume $V$ enclosed by the surface, minus the Ohmic power dissipated within the volume.
$$\boxed{\quad \underbrace{\oint_S (\mathbf{E} \times \mathbf{H}) \cdot d\mathbf{S}}_{\substack{\text{Power leaving} \\ \text{the volume}}} = \underbrace{-\int_V \mathbf{J} \cdot \mathbf{E} \, dV}_{\substack{\text{Power dissipated} \\ \text{in the volume}}} \underbrace{-\frac{\partial}{\partial t} \int_V \left( \frac{1}{2}\varepsilon|\mathbf{E}|^2 + \frac{1}{2}\mu|\mathbf{H}|^2 \right) dV}_{\substack{\text{Rate of decrease of} \\ \text{stored EM energy}}} \quad}$$
**Differential Form**:
$$\nabla \cdot \mathbf{P} = -\mathbf{J} \cdot \mathbf{E} - \frac{\partial}{\partial t} \left( \frac{1}{2}\varepsilon|\mathbf{E}|^2 + \frac{1}{2}\mu|\mathbf{H}|^2 \right)$$

---
#### Time-Averaged Poynting Vector for Time-Harmonic Fields
#poynting-vector/time-average #phasor-analysis

For time-harmonic (sinusoidal) fields, the instantaneous Poynting vector fluctuates at twice the source frequency. In most applications, we are interested in the **time-averaged power density**, $\mathbf{P}_{avg}$. This can be calculated directly from the phasor forms of the fields, $\mathbf{E}_s$ and $\mathbf{H}_s$.
$$\boxed{\quad \mathbf{P}_{avg} = \frac{1}{2} \text{Re}\{ \mathbf{E}_s \times \mathbf{H}_s^* \} \quad}$$
where $\mathbf{H}_s^*$ is the complex conjugate of the magnetic field phasor.

**For a Uniform Plane Wave**:
Consider a UPW propagating in a medium with intrinsic impedance $\eta = |\eta| \angle \theta_\eta$. The average power density is given by:
$$\mathbf{P}_{avg} = \frac{1}{2} \frac{|E_0|^2}{|\eta|} e^{-2\alpha z} \cos(\theta_\eta) \mathbf{\hat{a}}_k$$
For a **lossless medium** ($\alpha=0, \theta_\eta=0, \eta$ is real):
$$\boxed{\quad \mathbf{P}_{avg} = \frac{|E_0|^2}{2\eta} \mathbf{\hat{a}}_k \quad}$$
The total average power crossing a surface $S$ is found by integrating the average Poynting vector over that surface:
$$P_{avg, total} = \int_S \mathbf{P}_{avg} \cdot d\mathbf{S}$$

---
### Related Concepts
#topic/related-concepts

> [[Poynting Theorem]]

[[Maxwell's Equations in Final Form]]
[[Uniform Plane Waves]]
[[Intrinsic Impedance of a Medium]]
[[Energy Density in an Electrostatic Field]]
[[Magnetic Energy and Energy Density]]
[[Wave Propagation in Lossy Dielectrics]]
