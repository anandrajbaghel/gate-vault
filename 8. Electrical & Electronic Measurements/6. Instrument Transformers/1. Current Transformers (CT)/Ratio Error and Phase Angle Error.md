---
tags:
  - instrument-transformer
  - current-transformer
  - ct-errors
  - electrical-measurements
  - gate
created: 2025-10-18
aliases:
  - CT Errors
  - Current Transformer Errors
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - Current Transformers (CT)
modified: 2026-08-04T10:22:17
---
### Ratio Error and Phase Angle Error in Current Transformers
#current-transformer/errors #ratio-error #phase-angle-error

> In an ideal Current Transformer (CT), the primary current would be exactly proportional to the secondary current by the turns ratio, and the two currents would be perfectly $180^\circ$ out of phase. However, in a practical CT, the primary current ($I_p$) must supply both the current to counteract the secondary MMF and the **exciting current ($I_0$)** required to magnetize the core. This exciting current is the fundamental cause of both **Ratio Error** and **Phase Angle Error**.

The exciting current $I_0$ itself consists of two components:
1.  **Magnetizing Current ($I_m$)**: In phase with the core flux ($\Phi$), responsible for setting it up.
2.  **Core-Loss Current ($I_c$)**: In phase with the induced EMF (leads $\Phi$ by $90^\circ$), supplying hysteresis and eddy current losses.

#### Ratio Error
#ratio-error

The Ratio Error is the deviation of the actual transformation ratio ($R$) from the nominal (or turns) ratio ($K_n$).
-   **Nominal Ratio**: $K_n = \frac{N_s}{N_p}$ (Turns Ratio)
-   **Actual Ratio**: $R = \frac{I_p}{I_s}$

The ratio error is defined as:
$$\boxed{\quad \text{Ratio Error} = \frac{\text{Nominal Ratio} - \text{Actual Ratio}}{\text{Actual Ratio}} = \frac{K_n - R}{R} \quad}$$
A positive ratio error indicates that the actual secondary current is larger than the nominal value.

From the [[Phasor Diagram of a CT]], the actual ratio can be approximated as:
$$\boxed{\quad R \approx K_n + \frac{I_m \sin\delta + I_c \cos\delta}{I_s} \quad}$$
where:
-   $I_s$ is the secondary current.
-   $I_m$ and $I_c$ are the components of the exciting current.
-   $\delta$ is the phase angle of the secondary circuit burden.

This error directly affects the accuracy of magnitude measurements, such as those made by an ammeter connected to the CT secondary.

#### Phase Angle Error ($\beta$ or $\theta$)
#phase-angle-error

The Phase Angle Error is the angle between the primary current phasor ($I_p$) and the reversed secondary current phasor ($-I_s$). Ideally, this angle should be zero.

The error is considered **positive** if the primary current $I_p$ leads the reversed secondary current.
From the [[Phasor Diagram of a CT]], the phase angle is given by:
$$\boxed{\quad \beta \approx \frac{I_m \cos\delta - I_c \sin\delta}{K_n I_s} \quad \text{(in radians)} \quad}$$
This error is particularly significant in power and energy measurements because it introduces an error in the phase angle between the voltage and the measured current, leading to incorrect readings on wattmeters and energy meters. The error in power measurement is proportional to $\cos(\phi \pm \beta) - \cos\phi$.

#### Factors Affecting Errors and Their Reduction
#ct-errors/dependencies #ct-design/error-reduction

Both errors are primarily dependent on the exciting current ($I_0$) and the secondary burden.

| Factor | Effect on Errors | Method for Error Reduction |
| :--- | :--- | :--- |
| **Exciting Current ($I_0$)** | The direct cause. Larger $I_0$ leads to larger errors. | Use high-permeability core material (e.g., Mumetal, Permalloy) and operate at low flux densities. |
| **Secondary Burden ($Z_b$)** | A higher burden requires a higher secondary induced voltage ($E_s$), which increases the core flux and thus $I_0$. | Keep the burden (load) on the secondary, including the connecting leads and instrument impedance, as low as possible. |
| **Secondary Current ($I_s$)** | Errors increase as $I_s$ decreases, because $I_0$ becomes a larger fraction of the total primary current. | Use the CT within its specified current range. |
| **Power Factor of Burden**| Affects the relative contribution of $I_m$ and $I_c$ to the errors. | This is a property of the connected load and cannot always be controlled by the CT user. |
| **Frequency** | Affects core losses and magnetizing reactance, thus altering $I_0$. | Use the CT at its designed power frequency. |

---
### Related Concepts
#topic/related-concepts

> [[Phasor Diagram of a CT]]

[[Current Transformers (CT)]]
[[Instrument Transformers]]
[[Errors in Wattmeter Measurement and Compensation]]
[[Potential Transformers (PT)]]
[[Magnetic Circuits]]
[[Phasor Diagrams]]
