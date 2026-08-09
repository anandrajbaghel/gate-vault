---
tags:
  - instrument-transformer
  - potential-transformer
  - pt-errors
  - electrical-measurements
  - gate
created: 2025-10-18
aliases:
  - PT Errors
  - Voltage Transformer Errors
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - Potential Transformers (PT)
modified: 2026-08-04T10:20:47
---
### Ratio Error and Phase Angle Error in Potential Transformers
#potential-transformer/errors #ratio-error #phase-angle-error

> In an ideal Potential Transformer (PT), the secondary voltage would be an exact, scaled-down replica of the primary voltage, and the two would be perfectly $180^\circ$ out of phase. However, practical PTs exhibit errors due to voltage drops in the primary and secondary windings and the current required to excite the core. These deviations from the ideal are quantified as **Ratio Error** and **Phase Angle Error**.

#### Ratio Error
#ratio-error

The Ratio Error is the difference between the nominal ratio ($K_n$) and the actual transformation ratio ($R$).
-   **Nominal Ratio**: $K_n = \frac{\text{Rated Primary Voltage}}{\text{Rated Secondary Voltage}}$
-   **Actual Ratio**: $R = \frac{V_p}{V_s}$

The percentage ratio error is defined as:
$$\boxed{\quad \text{Ratio Error \%} = \frac{K_n - R}{R} \times 100 \quad}$$
This error arises because the primary voltage $V_p$ must not only oppose the primary induced EMF ($E_p$) but also supply the voltage drop in the primary winding ($I_pZ_p$). Similarly, the secondary induced EMF ($E_s$) is reduced by the voltage drop in the secondary winding ($I_sZ_s$) before appearing as the terminal voltage $V_s$.

An approximate expression for the actual ratio $R$ is:
$$\boxed{\quad R \approx K_n + \frac{I_s(R_s \cos\delta + X_s \sin\delta) + I_c R_p + I_m X_p}{V_s} \quad}$$
where:
-   $I_s, V_s, \delta$: Secondary current, voltage, and burden phase angle.
-   $R_p, X_p, R_s, X_s$: Resistances and reactances of primary and secondary windings.
-   $I_c, I_m$: Core-loss and magnetizing components of the exciting current.

This error directly impacts the accuracy of voltage magnitude measurements.

#### Phase Angle Error ($\beta$)
#phase-angle-error

The Phase Angle Error is the angle between the primary voltage phasor ($V_p$) and the reversed secondary voltage phasor ($-V_s$).  Ideally, this angle should be zero. The error is considered **positive** if the reversed secondary voltage ($-V_s$) leads the primary voltage ($V_p$).

This error is caused by the phase shifts introduced by the reactive components of the winding impedances and the exciting current. It is particularly important in power and energy measurements, as it affects the measured phase angle between voltage and current.

The expression for the phase angle error in radians is:
$$\boxed{\quad \beta \approx \frac{I_s(X_s \cos\delta - R_s \sin\delta) + I_m R_p - I_c X_p}{K_n V_s} \quad \text{(in radians)}}$$

#### Factors Affecting Errors and Their Reduction
#pt-errors/dependencies #pt-design/error-reduction

Errors in a PT depend on the winding impedances, the exciting current, and the secondary burden. To minimize these errors, PTs are designed with the following considerations:

1.  **Minimize Winding Resistance & Reactance**: Windings are designed with large conductor cross-sections and short mean turn lengths. The primary and secondary windings are made coaxial to minimize leakage reactance.
2.  **Minimize Exciting Current**: The core is made of high-quality, high-permeability silicon steel and is operated at a low flux density to keep the magnetizing ($I_m$) and core-loss ($I_c$) currents very small.
3.  **Minimize Burden**: The load connected to the PT secondary (the "burden"), specified in VA, should be kept as low as possible. Higher burdens cause larger secondary currents and thus larger voltage drops and errors.
4.  **Turns Compensation**: The actual transformation ratio is usually slightly different from the turns ratio. Designers can slightly adjust the number of turns on a winding (typically the secondary) to make the actual ratio equal to the nominal ratio at a specific burden, thereby minimizing the ratio error under that condition.

---
### Related Concepts
#topic/related-concepts

> [[Phasor Diagram of a PT]]

[[Potential Transformers (PT)]]
[[Construction and Principle of Operation for PT]]
[[Instrument Transformers]]
[[Errors in Wattmeter Measurement and Compensation]]
[[Current Transformers (CT)]]
[[Transformer Equivalent Circuit]]
