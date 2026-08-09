---
tags:
  - electromagnetic-fields
  - wave-propagation
  - free-space
  - gate
created: 2025-10-17
aliases:
  - Free Space Wave Propagation
subject: "[[Electromagnetic Fields]]"
parent:
  - Electromagnetic Waves
modified: 2026-08-04T10:48:38
---
### Wave Propagation in Free Space
#wave-propagation/free-space #lossless-propagation

> Wave propagation in free space represents the simplest and most ideal case of electromagnetic wave travel. Free space is a perfect vacuum, characterized as a source-free, lossless, and non-dispersive medium. This is the baseline against which propagation in all other media is compared.

#### Properties of Free Space
#free-space/properties

Free space is defined by the following constitutive parameters:
-   **Conductivity**: $\sigma = 0$ (No free charges, hence no conduction current)
-   **Permittivity**: $\varepsilon = \varepsilon_0 = 8.854 \times 10^{-12}$ F/m (Permittivity of vacuum)
-   **Permeability**: $\mu = \mu_0 = 4\pi \times 10^{-7}$ H/m (Permeability of vacuum)

Because $\sigma=0$, free space is a perfect dielectric, making it a **lossless medium**.

---
#### Wave Parameters in Free Space
#wave-parameters/free-space

The general wave parameters simplify significantly when the free space properties are applied.

1.  **Propagation Constant ($\gamma$)**:
    The general form is $\gamma = \sqrt{j\omega\mu(\sigma + j\omega\varepsilon)}$. For free space ($\sigma=0$):
    $$\begin{align}
    \gamma &= \sqrt{j\omega\mu_0(j\omega\varepsilon_0)} = \sqrt{(j\omega)^2 \mu_0\varepsilon_0} \\
    \gamma &= j\omega\sqrt{\mu_0\varepsilon_0}
    \end{align}$$
    Since $\gamma = \alpha + j\beta$:
    -   **Attenuation Constant ($\alpha$)**:
        $$\boxed{\quad \alpha = 0 \text{ Np/m} \quad}$$
        This confirms that the wave propagates without any loss of amplitude.
    -   **Phase Constant ($\beta$)**:
        $$\boxed{\quad \beta = \omega\sqrt{\mu_0\varepsilon_0} = \frac{\omega}{c} = \frac{2\pi}{\lambda} \quad}$$
        The phase constant is linearly dependent on frequency.

2.  **Phase Velocity ($v_p$)**:
    $$v_p = \frac{\omega}{\beta} = \frac{\omega}{\omega\sqrt{\mu_0\varepsilon_0}} = \frac{1}{\sqrt{\mu_0\varepsilon_0}}$$
    $$\boxed{\quad v_p = c \approx 3 \times 10^8 \text{ m/s} \quad}$$
    The phase velocity is constant and equals the speed of light, `c`. Since it does not depend on frequency, free space is a **non-dispersive medium**.

3.  **Intrinsic Impedance ($\eta_0$)**:
    The general form is $\eta = \sqrt{\frac{j\omega\mu}{\sigma + j\omega\varepsilon}}$. For free space ($\sigma=0$):
    $$\eta_0 = \sqrt{\frac{j\omega\mu_0}{j\omega\varepsilon_0}} = \sqrt{\frac{\mu_0}{\varepsilon_0}}$$
    $$\boxed{\quad \eta_0 = \sqrt{\frac{\mu_0}{\varepsilon_0}} \approx 120\pi \approx 377 \, \Omega \quad}$$
    The impedance of free space is a real number, which means the E and H fields are in phase.

---
#### Field Representation of a Uniform Plane Wave
#upw/free-space

For a [[Uniform Plane Waves|uniform plane wave]] propagating in the $+z$ direction with its electric field polarized along the $x$-axis:

**Phasor Form**:
Since $\alpha=0$, the attenuation term $e^{-\alpha z}$ is 1.
-   Electric Field: $\mathbf{E}(z) = E_0 e^{-j\beta z} \mathbf{\hat{a}}_x$
-   Magnetic Field: $\mathbf{H}(z) = \frac{E_0}{\eta_0} e^{-j\beta z} \mathbf{\hat{a}}_y$

**Time-Domain Form**:
-   Electric Field: $\mathbf{E}(z,t) = E_0 \cos(\omega t - \beta z) \mathbf{\hat{a}}_x$
-   Magnetic Field: $\mathbf{H}(z,t) = \frac{E_0}{\eta_0} \cos(\omega t - \beta z) \mathbf{\hat{a}}_y$

**Key Observations**:
-   The wave amplitude ($E_0$ and $E_0/\eta_0$) remains constant as the wave propagates.
-   The E and H fields are perpendicular to each other and to the direction of propagation (TEM wave).
-   The E and H fields are in time phase (both vary as $\cos(\omega t - \beta z)$).

---
### Related Concepts
#topic/related-concepts

> [[Uniform Plane Waves]]

[[Wave Equation Derived from Maxwell's Equations]]
[[Intrinsic Impedance of a Medium]]
[[Propagation Constant, Attenuation Constant, and Phase Constant]]
[[Wave Propagation in Lossless Dielectrics]]
[[Wave Propagation in Good Conductors]]
[[Poynting Vector]]
