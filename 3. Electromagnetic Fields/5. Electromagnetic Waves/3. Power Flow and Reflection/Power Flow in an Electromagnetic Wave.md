---
tags:
  - electromagnetic-fields
  - power-flow
  - poynting-vector
  - gate
created: 2025-10-17
aliases:
  - EM Wave Power Flow
  - Power in Electromagnetic Waves
subject: "[[Electromagnetic Fields]]"
parent:
  - Electromagnetic Waves
modified: 2026-08-04T10:15:36
---
### Power Flow in an Electromagnetic Wave
#power-flow #poynting-vector #electromagnetic-energy

> The flow of power in an electromagnetic wave signifies the transport of energy from a source to a load through the propagation of coupled electric and magnetic fields. This energy flow is quantified by the [[Poynting Vector]]. For engineering applications involving sinusoidal waves, the **time-averaged power density** is the most critical parameter, representing the net, usable power being transmitted per unit area.

#### Instantaneous and Average Power Density
#instantaneous-power #average-power

-   **Instantaneous Power Density**: Given by the Poynting Vector, $\mathbf{P}(t) = \mathbf{E}(t) \times \mathbf{H}(t)$. This value oscillates at twice the wave frequency and is not typically the value of interest.
-   **Time-Averaged Power Density**: For time-harmonic fields, the average power density, $\mathbf{P}_{avg}$, is the steady flow of energy. It is calculated from the field phasors:
    $$\boxed{\quad \mathbf{P}_{avg} = \frac{1}{2} \text{Re}\{ \mathbf{E}_s \times \mathbf{H}_s^* \} \quad}$$
    where $\mathbf{H}_s^*$ is the complex conjugate of the magnetic field phasor.

---
#### Power Flow in a Lossless Medium
#lossless-propagation #power-density

Consider a uniform plane wave propagating in the $+z$ direction in a lossless medium ($\sigma=0$, $\alpha=0$). The impedance $\eta$ is purely real.
-   Electric Field: $\mathbf{E}_s = E_0 e^{-j\beta z} \mathbf{\hat{a}}_x$
-   Magnetic Field: $\mathbf{H}_s = \frac{E_0}{\eta} e^{-j\beta z} \mathbf{\hat{a}}_y$

The cross product is:
$$\mathbf{E}_s \times \mathbf{H}_s^* = (E_0 e^{-j\beta z} \mathbf{\hat{a}}_x) \times \left(\frac{E_0^*}{\eta} e^{+j\beta z} \mathbf{\hat{a}}_y\right) = \frac{|E_0|^2}{\eta} (\mathbf{\hat{a}}_x \times \mathbf{\hat{a}}_y) = \frac{|E_0|^2}{\eta} \mathbf{\hat{a}}_z$$
Since the result is purely real, the average power density is:
$$\boxed{\quad \mathbf{P}_{avg} = \frac{|E_0|^2}{2\eta} \mathbf{\hat{a}}_z \quad}$$
**Key Observation**: In a lossless medium, the average power density is constant and does not decrease with distance.

---
#### Power Flow in a Lossy Medium
#lossy-propagation #power-attenuation

In a lossy medium, the wave attenuates ($\alpha > 0$) and the intrinsic impedance $\eta = |\eta|\angle\theta_\eta$ is complex.
-   Electric Field: $\mathbf{E}_s = E_0 e^{-\alpha z} e^{-j\beta z} \mathbf{\hat{a}}_x$
-   Magnetic Field: $\mathbf{H}_s = \frac{E_0}{\eta} e^{-\alpha z} e^{-j\beta z} \mathbf{\hat{a}}_y$

The time-averaged power density calculation yields:
$$\mathbf{P}_{avg} = \frac{1}{2} \text{Re}\left\{ \frac{|E_0|^2}{\eta^*} e^{-2\alpha z} \mathbf{\hat{a}}_z \right\}$$
Since $1/\eta^* = (1/|\eta|) e^{j\theta_\eta}$, the real part introduces a $\cos(\theta_\eta)$ factor.
$$\boxed{\quad \mathbf{P}_{avg} = \frac{|E_0|^2}{2|\eta|} e^{-2\alpha z} \cos(\theta_\eta) \mathbf{\hat{a}}_z \quad}$$
**Key Observations**:
1.  **Attenuation**: The power density decays exponentially as $e^{-2\alpha z}$. The power attenuates **twice as fast** in Nepers/m (or dB/m) as the electric and magnetic fields. This is because power is proportional to the square of the field amplitude.
2.  **Impedance Phase**: The term $\cos(\theta_\eta)$ accounts for the portion of the fields' interaction that contributes to real power flow. For a good conductor, $\theta_\eta \to 45^\circ$, and for a lossless dielectric, $\theta_\eta \to 0^\circ$.

---
#### Total Power Transmitted
#total-power

To find the total power ($P_{total}$) passing through a given surface $S$, we must integrate the average Poynting vector over that surface.
$$\boxed{\quad P_{total} = \int_S \mathbf{P}_{avg} \cdot d\mathbf{S} \quad}$$
For a uniform plane wave with constant power density $\mathbf{P}_{avg}$ normally incident on a planar surface of area $A$, this simplifies to:
$$P_{total} = |\mathbf{P}_{avg}| \cdot A$$

---
### Related Concepts
#topic/related-concepts

> [[Poynting Vector]]
> [[Poynting Theorem]]

[[Intrinsic Impedance of a Medium]]
[[Wave Propagation in Lossless Dielectrics]]
[[Wave Propagation in Lossy Dielectrics]]
[[Attenuation Constant]]
[[Antennas]]
[[Waveguides]]
