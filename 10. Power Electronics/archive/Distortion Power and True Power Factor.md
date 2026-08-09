---
tags:
  - power-electronics
  - harmonics
  - distortion-power
  - true-power-factor
created: 2026-06-01
aliases:
  - Distortion Power
  - True Power Factor
  - DPF
subject: "[[Power Electronics]]"
parent:
  - "[[AC Power Analysis]]"
modified: 2026-08-04T09:35:05
---
### Distortion Power and True Power Factor
#power-electronics #harmonics #distortion-power

> In non-linear power electronic circuits (such as rectifiers and semi-converters), current waveforms are heavily distorted and contain higher-order harmonics. This distorts the traditional 2D power triangle into a three-dimensional **Power Orthogonal Solid**.

#### The 3D Power Solid Equation
When harmonics are present, apparent power $S$ is no longer just $\sqrt{P^2 + Q^2}$. It must account for **Distortion Power ($D$)**, measured in Volt-Amperes Distortion (VAD):

$$\boxed{\quad S = \sqrt{P^2 + Q_1^2 + D^2} \quad}$$

Where:
- $P$ = Total average/real power $= \sum V_n I_n \cos(\theta_n - \phi_n)$
- $Q_1$ = Fundamental reactive power $= V_{1,\text{rms}} I_{1,\text{rms}} \sin\theta_1$
- $D$ = Distortion Power $= V_{\text{rms}} \cdot I_{\text{distortion}} = V_{\text{rms}}\sqrt{I_{\text{rms}}^2 - I_{1,\text{rms}}^2}$

---
#### True Power Factor vs. Displacement Power Factor
#true-power-factor #displacement-power-factor

Because the current is non-sinusoidal, the traditional $\cos\theta$ metric splits into two terms:

1. **Displacement Power Factor ($\text{DPF}$)**: The power factor of the fundamental component only.
   $$\text{DPF} = \cos\theta_1$$
2. **Distortion Power Factor**: The ratio of the fundamental RMS current to total RMS current. It is directly governed by Total Harmonic Distortion ($\text{THD}$).
   $$\text{Distortion PF} = \frac{I_{1,\text{rms}}}{I_{\text{rms}}} = \frac{1}{\sqrt{1 + \text{THD}^2}}$$

$$\boxed{\quad \text{PF}_{\text{true}} = \frac{P}{S} = \text{DPF} \times \text{Distortion PF} = \frac{1}{\sqrt{1 + \text{THD}^2}} \cos\theta_1 \quad}$$

---
### Related Concepts

> [[Power Factor]]
> [[AC Power Analysis]]

[[Instantaneous and Average Power]]