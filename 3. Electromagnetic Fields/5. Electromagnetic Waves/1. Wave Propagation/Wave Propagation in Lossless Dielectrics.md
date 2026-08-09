---
tags:
  - electromagnetic-fields
  - wave-propagation
  - dielectrics
  - gate
created: 2025-10-17
aliases:
  - Propagation in Perfect Dielectrics
  - Lossless Dielectric Wave Propagation
subject: "[[Electromagnetic Fields]]"
parent:
  - Electromagnetic Waves
modified: 2026-08-04T10:48:55
---
### Wave Propagation in Lossless Dielectrics
#wave-propagation/lossless-dielectric

> Wave propagation in a lossless dielectric is very similar to propagation in free space, as both are lossless media. A lossless (or perfect) dielectric is an ideal material with zero conductivity but with permittivity and/or permeability different from that of a vacuum. Waves travel without attenuation but at a slower speed and with a different impedance compared to free space.

#### Properties of a Lossless Dielectric
#dielectric/lossless

A perfect or lossless dielectric is characterized by the following parameters:
-   **Conductivity**: $\sigma = 0$
-   **Permittivity**: $\varepsilon = \varepsilon_0 \varepsilon_r$, where $\varepsilon_r \ge 1$ is the relative permittivity or dielectric constant.
-   **Permeability**: $\mu = \mu_0 \mu_r$, where $\mu_r \ge 1$ is the relative permeability. For most dielectrics, $\mu_r \approx 1$ (non-magnetic).

Since $\sigma=0$, the conduction current density $\mathbf{J}_c$ is zero, and the material does not dissipate electromagnetic energy as heat.

---
#### Wave Parameters in a Lossless Dielectric
#wave-parameters/lossless-dielectric

The general wave parameters simplify for a medium where $\sigma=0$.

1.  **Propagation Constant ($\gamma$)**:
    $$\gamma = \sqrt{j\omega\mu(\sigma + j\omega\varepsilon)} \xrightarrow{\sigma=0} \sqrt{(j\omega)^2 \mu\varepsilon} = j\omega\sqrt{\mu\varepsilon}$$
    Comparing with $\gamma = \alpha + j\beta$:
    -   **Attenuation Constant ($\alpha$)**:
        $$\boxed{\quad \alpha = 0 \text{ Np/m} \quad}$$
        The wave propagates without any loss in amplitude.
    -   **Phase Constant ($\beta$)**:
        $$\boxed{\quad \beta = \omega\sqrt{\mu\varepsilon} = \frac{2\pi}{\lambda} \quad}$$

2.  **Phase Velocity ($v_p$)**:
    $$v_p = \frac{\omega}{\beta} = \frac{\omega}{\omega\sqrt{\mu\varepsilon}} = \frac{1}{\sqrt{\mu\varepsilon}}$$
    Relating this to the speed of light, $c = 1/\sqrt{\mu_0\varepsilon_0}$:
    $$\boxed{\quad v_p = \frac{1}{\sqrt{\mu_0\mu_r\varepsilon_0\varepsilon_r}} = \frac{c}{\sqrt{\mu_r\varepsilon_r}} \le c \quad}$$
    Since $\mu_r \ge 1$ and $\varepsilon_r \ge 1$, the phase velocity in a dielectric is always less than or equal to the speed of light.

3.  **Intrinsic Impedance ($\eta$)**:
    $$\eta = \sqrt{\frac{j\omega\mu}{\sigma + j\omega\varepsilon}} \xrightarrow{\sigma=0} \sqrt{\frac{j\omega\mu}{j\omega\varepsilon}} = \sqrt{\frac{\mu}{\varepsilon}}$$
    Relating this to the impedance of free space, $\eta_0 = \sqrt{\mu_0/\varepsilon_0}$:
    $$\boxed{\quad \eta = \sqrt{\frac{\mu_0\mu_r}{\varepsilon_0\varepsilon_r}} = \eta_0 \sqrt{\frac{\mu_r}{\varepsilon_r}} \quad}$$
    The impedance is a real quantity, indicating that the $\mathbf{E}$ and $\mathbf{H}$ fields are in time phase. For a non-magnetic dielectric ($\mu_r=1$), $\eta = \eta_0/\sqrt{\varepsilon_r} < \eta_0$.

4.  **Wavelength ($\lambda$)**:
    The wavelength in the medium is also modified:
    $$\lambda = \frac{v_p}{f} = \frac{2\pi}{\beta}$$
    Comparing it to the free-space wavelength $\lambda_0 = c/f$:
    $$\boxed{\quad \lambda = \frac{c/f}{\sqrt{\mu_r\varepsilon_r}} = \frac{\lambda_0}{\sqrt{\mu_r\varepsilon_r}} \le \lambda_0 \quad}$$
    The wavelength of the EM wave is shorter inside a dielectric than in a vacuum.

---
#### Comparison: Free Space vs. Lossless Dielectric

| Parameter           | Free Space                                         | Lossless Dielectric                                                          |
| ------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Conductivity $\sigma$** | $0$                                                | $0$                                                                          |
| **Permittivity $\varepsilon$**  | $\varepsilon_0$                                    | $\varepsilon = \varepsilon_0 \varepsilon_r$                                      |
| **Permeability $\mu$**  | $\mu_0$                                        | $\mu = \mu_0 \mu_r$                                                        |
| **Attenuation $\alpha$**  | $0$                                                | $0$                                                                          |
| **Phase Velocity $v_p$**| $c$                                                | $c/\sqrt{\mu_r\varepsilon_r}$                                                |
| **Impedance $\eta$**      | $\eta_0 \approx 377 \, \Omega$                     | $\eta_0 \sqrt{\mu_r/\varepsilon_r}$                                          |

---
### Related Concepts
#topic/related-concepts

> [[Uniform Plane Waves]]

[[Wave Propagation in Free Space]]
[[Wave Propagation in Lossy Dielectrics]]
[[Wave Propagation in Good Conductors]]
[[Intrinsic Impedance of a Medium]]
[[Propagation Constant, Attenuation Constant, and Phase Constant]]
[[Dielectric Materials and Polarization]]
