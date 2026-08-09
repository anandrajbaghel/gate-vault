---
tags:
  - electromagnetic-fields
  - wave-propagation
  - conductors
  - skin-effect
  - gate
created: 2025-10-17
aliases:
  - Skin Effect
  - Skin Depth
  - Propagation in Conductors
  - Wave Propagation in Good Conductors (Skin Effect and Skin Depth)
subject: "[[Electromagnetic Fields]]"
parent:
  - Electromagnetic Waves
modified: 2026-08-04T10:48:52
---
### Wave Propagation in Good Conductors (Skin Effect and Skin Depth)
#wave-propagation/conductor #skin-effect #skin-depth

> When an electromagnetic wave enters a good conductor, it is rapidly attenuated. The wave's energy is quickly dissipated as heat due to the conduction current. This leads to the **skin effect**, where the wave and its associated current are confined to a very thin layer near the surface of the conductor.

#### Properties of a Good Conductor
#good-conductor

A material is classified as a **good conductor** at a particular frequency $\omega$ if its conduction current density is much larger than its displacement current density.
$$|\mathbf{J}_c| \gg |\mathbf{J}_d|$$
Using the phasor forms $\mathbf{J}_c = \sigma \mathbf{E}$ and $\mathbf{J}_d = j\omega\varepsilon \mathbf{E}$, this condition becomes:
$$\boxed{\quad \frac{\sigma}{\omega\varepsilon} \gg 1 \quad}$$
The ratio $\sigma/\omega\varepsilon$ is the [[Conduction Current vs. Displacement Current|loss tangent]]. For good conductors like copper or aluminum, this condition holds true even up to very high frequencies (e.g., optical frequencies).

---
#### Wave Parameters in a Good Conductor
#wave-parameters/conductor

Under the good conductor assumption ($\sigma \gg \omega\varepsilon$), the general wave parameters simplify significantly.

1.  **Propagation Constant ($\gamma$)**:
    $$\gamma = \sqrt{j\omega\mu(\sigma + j\omega\varepsilon)} \approx \sqrt{j\omega\mu\sigma}$$
    Using the identity $\sqrt{j} = \frac{1+j}{\sqrt{2}}$:
    $$\gamma \approx (1+j)\sqrt{\frac{\omega\mu\sigma}{2}}$$
    Since $\gamma = \alpha + j\beta$, we find a key result for good conductors:
    $$\boxed{\quad \alpha \approx \beta \approx \sqrt{\frac{\omega\mu\sigma}{2}} = \sqrt{\pi f \mu \sigma} \quad}$$
    -   **Attenuation Constant ($\alpha$)**: The attenuation is very large and increases with frequency.
    -   **Phase Constant ($\beta$)**: The phase constant is also large, implying a very short wavelength within the conductor.

2.  **Intrinsic Impedance ($\eta_c$)**:
    $$\eta_c = \sqrt{\frac{j\omega\mu}{\sigma + j\omega\varepsilon}} \approx \sqrt{\frac{j\omega\mu}{\sigma}}$$
    $$\boxed{\quad \eta_c \approx (1+j)\sqrt{\frac{\omega\mu}{2\sigma}} = \sqrt{\frac{\omega\mu}{\sigma}} \angle 45^\circ \quad}$$
    The intrinsic impedance of a good conductor is:
    -   **Low in magnitude**: This leads to a large reflection coefficient when a wave from air hits a conductor.
    -   **Complex with a 45° phase angle**: This means the electric field leads the magnetic field by 45 degrees in time.

3.  **Phase Velocity ($v_p$)**:
    $$v_p = \frac{\omega}{\beta} \approx \frac{\omega}{\sqrt{\omega\mu\sigma/2}} = \sqrt{\frac{2\omega}{\mu\sigma}}$$
    The velocity is very low and depends on frequency, making conductors a **dispersive medium**.

---
#### Skin Effect and Skin Depth ($\delta$)
#skin-effect #skin-depth

**Skin Effect** is the tendency of an alternating electric current (AC) to become distributed within a conductor such that the current density is largest near the surface and decreases exponentially with greater depths.

**Skin Depth ($\delta$)** is defined as the depth at which the amplitude of the electric field (or current density) inside the conductor decays to $1/e$ (approximately 36.8%) of its value at the surface.

The electric field inside the conductor attenuates as $E(z) = E_0 e^{-\alpha z}$. The field drops to $E_0/e$ when the exponent is -1, i.e., when $\alpha z = 1$. Therefore, the skin depth is the reciprocal of the attenuation constant.
$$\delta = \frac{1}{\alpha}$$
Substituting the value of $\alpha$ for a good conductor:
$$\boxed{\quad \delta = \frac{1}{\sqrt{\pi f \mu \sigma}} \quad}$$
##### Implications of Skin Depth
#implications/skin-effect 

- $\delta$ is inversely proportional to the square root of frequency ($f$), permeability ($\mu$), and conductivity ($\sigma$).
- ==At high frequencies, $\delta$ is very small, meaning current flows only in a very thin surface layer. This increases the effective AC resistance of a conductor compared to its DC resistance.==
- This phenomenon is critical in designing high-frequency circuits, antennas, and waveguides.

---
### Related Concepts
#topic/related-concepts

> [[Wave Propagation in Lossy Dielectrics]]

[[Uniform Plane Waves]]
[[Propagation Constant, Attenuation Constant, and Phase Constant]]
[[Intrinsic Impedance of a Medium]]
[[Conduction Current vs. Displacement Current]]
[[Wave Propagation in Free Space]]
[[AC Resistance]]
