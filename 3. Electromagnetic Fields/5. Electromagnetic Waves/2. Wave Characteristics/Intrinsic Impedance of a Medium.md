---
tags:
  - electromagnetic-fields
  - wave-propagation
  - wave-impedance
  - gate
created: 2025-10-17
aliases:
  - Intrinsic Impedance
  - Wave Impedance
  - η
subject: "[[Electromagnetic Fields]]"
parent:
  - Electromagnetic Waves
modified: 2026-08-04T09:51:33
---
### Intrinsic Impedance of a Medium
#intrinsic-impedance #wave-impedance #electromagnetic-waves

> The **Intrinsic Impedance** (or wave impedance), denoted by $\eta$, is a fundamental property of a medium that quantifies the ratio of the transverse electric field magnitude to the transverse magnetic field magnitude for a uniform plane wave propagating through that medium. It represents the opposition that the medium presents to the flow of electromagnetic energy and is analogous to the characteristic impedance of a transmission line.

$$\boxed{\quad \eta = \frac{|\mathbf{E}_{transverse}|}{|\mathbf{H}_{transverse}|} \quad}$$
Its unit is Ohms ($\Omega$).

---
#### General Formula
#intrinsic-impedance/formula

For a general lossy medium, the intrinsic impedance is a complex quantity derived directly from Maxwell's equations in phasor form.
$$\boxed{\quad \eta = \sqrt{\frac{j\omega\mu}{\sigma + j\omega\varepsilon}} \quad}$$
where:
- $\omega$ is the angular frequency.
- $\mu$ is the magnetic permeability of the medium.
- $\varepsilon$ is the electric permittivity of the medium.
- $\sigma$ is the conductivity of the medium.

Being complex, $\eta$ can be expressed in polar form: $\eta = |\eta| \angle \theta_\eta$.
-   **Magnitude $|\eta|$**: The ratio of the field magnitudes, $|\mathbf{E}|/|\mathbf{H}|$.
-   **Phase Angle $\theta_\eta$**: The angle by which the electric field $\mathbf{E}$ leads the magnetic field $\mathbf{H}$ in time.

---
#### Intrinsic Impedance for Specific Media

The general formula simplifies for different types of media.

##### 1. Free Space ($\eta_0$)
For free space, $\sigma=0$, $\mu=\mu_0$, and $\varepsilon=\varepsilon_0$.
$$\eta_0 = \sqrt{\frac{j\omega\mu_0}{j\omega\varepsilon_0}} = \sqrt{\frac{\mu_0}{\varepsilon_0}}$$
$$\boxed{\quad \eta_0 = \sqrt{\frac{\mu_0}{\varepsilon_0}} \approx 120\pi \approx 377 \, \Omega \quad}$$
Since $\eta_0$ is purely real, the $\mathbf{E}$ and $\mathbf{H}$ fields are in time phase.

##### 2. Lossless Dielectric ($\eta$)
For a perfect (lossless) dielectric, $\sigma=0$.
$$\eta = \sqrt{\frac{j\omega\mu}{j\omega\varepsilon}} = \sqrt{\frac{\mu}{\varepsilon}}$$
$$\boxed{\quad \eta = \sqrt{\frac{\mu}{\varepsilon}} = \eta_0 \sqrt{\frac{\mu_r}{\varepsilon_r}} \quad}$$
Like free space, the impedance is purely real, and the fields are in phase.

##### 3. Good Conductor ($\eta_c$)
For a good conductor, the conduction current dominates, so $\sigma \gg \omega\varepsilon$.
$$\eta_c = \sqrt{\frac{j\omega\mu}{\sigma + j\omega\varepsilon}} \approx \sqrt{\frac{j\omega\mu}{\sigma}}$$
Using $\sqrt{j} = (1+j)/\sqrt{2}$:
$$\boxed{\quad \eta_c \approx (1+j)\sqrt{\frac{\omega\mu}{2\sigma}} = \sqrt{\frac{\omega\mu}{\sigma}} \angle 45^\circ \quad}$$
The impedance is complex with a very small magnitude and a phase angle of 45°. This means the **E-field leads the H-field by 45°**.

---
#### Significance and Application
#intrinsic-impedance/significance

1.  **Relating E and H Fields**: Once the electric field $\mathbf{E}$ of a plane wave is known, the magnetic field $\mathbf{H}$ can be immediately determined using the intrinsic impedance:
    $$\mathbf{H} = \frac{1}{\eta} (\mathbf{\hat{a}}_k \times \mathbf{E})$$
    where $\mathbf{\hat{a}}_k$ is the direction of propagation.

2.  **Reflection and Transmission**: The behavior of an electromagnetic wave at the boundary between two different media (e.g., air and glass) is governed by the intrinsic impedances of the two media. An impedance mismatch ($\eta_1 \neq \eta_2$) causes part of the wave to be reflected, while the rest is transmitted. The reflection and transmission coefficients are functions of $\eta_1$ and $\eta_2$.

---
### Related Concepts
#topic/related-concepts

> [[Uniform Plane Waves]]

[[Wave Propagation in Free Space]]
[[Wave Propagation in Lossless Dielectrics]]
[[Wave Propagation in Good Conductors]]
[[Wave Propagation in Lossy Dielectrics]]
[[Reflection and Refraction of Plane Waves at Normal Incidence]]
[[Poynting Vector]]
