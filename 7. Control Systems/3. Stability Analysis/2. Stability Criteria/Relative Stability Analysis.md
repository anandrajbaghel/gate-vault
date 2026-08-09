---
tags:
  - control-systems
  - stability-analysis
  - relative-stability
  - gain-margin
  - phase-margin
  - frequency-response
created: 2025-10-12
aliases:
  - Relative Stability
  - Gain Margin
  - Phase Margin
subject: "[[Control Systems]]"
parent:
  - Stability Analysis
modified: 2026-08-04T10:25:04
---
### Relative Stability Analysis
#control-systems/stability #relative-stability

> **Relative stability** is a measure of "how stable" a system is. While absolute stability (determined by methods like the [[Routh-Hurwitz Stability Criterion]]) gives a simple yes/no answer to whether a system is stable, relative stability quantifies the system's proximity to the edge of instability. It provides a crucial margin of safety and is a key indicator of the system's robustness to parameter variations and its transient response characteristics.

A system with a large margin of stability is robust and will likely have a well-damped response. A system with a small margin is close to instability and will likely be highly oscillatory.

---
#### Key Metrics for Relative Stability
#gain-margin #phase-margin

The two most common metrics for relative stability are Gain Margin (GM) and Phase Margin (PM), which are defined in the frequency domain.

**1. [[Gain Margin (GM)]]**
-   **Definition:** The Gain Margin is the factor by which the system's open-loop gain can be increased before it becomes unstable.
-   **Phase Crossover Frequency ($\omega_{pc}$):** It is calculated at the frequency where the phase angle of the [[Open-Loop Transfer Function (OLTF)|open-loop transfer function]] $G(j\omega)H(j\omega)$ is exactly $-180^\circ$.
-   **Formula:** If $|G(j\omega_{pc})H(j\omega_{pc})| = x$, then:
    $$\boxed{\quad GM = \frac{1}{x} \quad}$$
    In decibels, the formula is:
    $$\boxed{\quad GM_{dB} = 20 \log_{10}\left(\frac{1}{x}\right) = -20 \log_{10}(x) = -|G(j\omega_{pc})H(j\omega_{pc})|_{dB} \quad}$$
-   **Stability Condition:** For a stable system, we require $GM > 1$ (or $GM > 0$ dB).

**2. [[Phase Margin (PM)]]**
-   **Definition:** The Phase Margin is the additional amount of phase lag that can be introduced into the open-loop system at the gain crossover frequency before it becomes unstable.
-   **Gain Crossover Frequency ($\omega_{gc}$):** It is calculated at the frequency where the magnitude of the [[Open-Loop Transfer Function (OLTF)|open-loop transfer function]] $|G(j\omega)H(j\omega)|$ is exactly 1 (or 0 dB).
-   **Formula:** If $\angle G(j\omega_{gc})H(j\omega_{gc}) = \phi$, then:
    $$\boxed{\quad PM = 180^\circ + \phi \quad}$$
    (Since $\phi$ is negative for most systems, this represents the phase difference from $-180^\circ$).
-   **Stability Condition:** For a stable system, we require $PM > 0^\circ$.

---
#### Methods for Determining Relative Stability
#relative-stability/methods

1.  **Frequency Response (Bode and Nyquist Plots):** This is the most direct and common method.
    -   **[[Bode Plots|Bode Plot]]:** GM and PM can be read directly from the magnitude and phase plots at the respective crossover frequencies.
    -   **[[Nyquist Plots|Nyquist Plot]]:** Relative stability is determined by the proximity of the Nyquist plot to the critical point $(-1, j0)$. A plot that passes far from this point has high relative stability.

2.  **[[Concept and Definition of Root Locus|Root Locus]]:** The distance of the [[Effect of Adding Poles and Zeros on System Response#The Dominant Pole Concept|dominant closed-loop poles]] from the imaginary axis is a direct measure of relative stability. Poles far into the LHP indicate a highly stable and well-damped system. The damping ratio $\zeta$ of the dominant poles is a key indicator.

3.  **[[Routh-Hurwitz Stability Criterion|Routh-Hurwitz Criterion]]:** While primarily for absolute stability, it can be adapted to find relative stability. By shifting the imaginary axis to the left in the s-plane using the substitution $s = z - \sigma$ (where $\sigma > 0$), we can use the Routh array to check if there are any poles to the right of this new line. This tells us if all poles have a real part less than $-\sigma$, quantifying the degree of stability.

---
#### Relationship to Transient Response
#relative-stability/transient-response

Relative stability metrics are strongly correlated with the time-domain transient response, particularly for second-order and dominant second-order systems.
-   **Phase Margin and Damping Ratio:** There is a very useful rule-of-thumb approximation connecting Phase Margin (PM) and the Damping Ratio ($\zeta$):
    $$\boxed{\quad \zeta \approx \frac{PM \text{ (in degrees)}}{100} \quad}$$
    This means a higher phase margin implies a higher damping ratio, which in turn means **less peak overshoot ($M_p$)** in the step response. A typical design target is $PM \approx 45^\circ - 60^\circ$.
-   **Gain Margin:** While less directly correlated than PM, a higher GM also generally corresponds to a more well-damped, less oscillatory response.

---
### Related Concepts
#control-systems/related-concepts

> [[Concept of Stability]]

[[Bode Plots]]
[[Nyquist Plots]]
[[Routh-Hurwitz Stability Criterion]]
[[Calculation of GM and PM from Bode, Polar, and Nyquist Plots]]
[[Concept and Definition of Root Locus]]
[[Second-Order System Response]]