---
tags:
  - control-systems
  - frequency-response
  - time-response
  - system-performance
  - performance-analysis
created: 2025-10-22
aliases:
  - Time-Frequency Correlation
  - Time Domain and Frequency Domain Relationship
subject: "[[Control Systems]]"
parent:
  - Frequency Domain Concepts
modified: 2026-08-04T09:28:46
---
### Correlation between Time and Frequency Response
#control-systems/performance-analysis #time-frequency-correlation

> The time-domain response and frequency-domain response of an LTI system are two different perspectives of the same system dynamics. A direct correlation exists between them, allowing engineers to predict the transient performance (like overshoot and rise time) from frequency response plots (like [[Bode plots]]), and vice-versa. This relationship is most clearly defined for a standard [[Second-Order System Response|second-order system]] but serves as an excellent approximation for higher-order systems dominated by a pair of complex poles.

---
#### The Second-Order System Bridge
#second-order-system

The key to understanding this [[Correlation#Correlation in Signals and Systems|correlation]] lies in the parameters of a standard second-order system: the **damping ratio ($\zeta$)** and the **natural frequency ($\omega_n$)**.
- Time-domain specifications ($M_p, T_s, T_r, T_p$) are explicit functions of $\zeta$ and $\omega_n$.
- Frequency-domain specifications ($M_r, \omega_r, \omega_b, PM, GM$) are also functions of $\zeta$ and $\omega_n$.
By relating both sets of specifications to $\zeta$ and $\omega_n$, we establish the correlation.

---
#### Correlation via Damping Ratio ($\zeta$)

The damping ratio $\zeta$ primarily governs the relative stability and oscillatory nature of the system. This is reflected in the peak overshoot ($M_p$) in the time domain and the phase margin (PM) and resonant peak ($M_r$) in the frequency domain.

**1. Peak Overshoot ($M_p$) vs. Phase Margin (PM)**
This is the most important correlation. A larger phase margin corresponds to a larger effective damping ratio, which leads to a smaller peak overshoot.
-   **Rule-of-Thumb Approximation:**
    $$\boxed{\quad \zeta \approx \frac{PM \text{ (in degrees)}}{100} \quad}$$
    This simple relation is remarkably accurate for $0 < \zeta < 0.7$. A system with a PM of 60° will behave like a system with $\zeta \approx 0.6$, which has a desirable, well-damped response.

**2. Peak Overshoot ($M_p$) vs. Resonant Peak ($M_r$)**
The resonant peak, $M_r$, is the maximum value of the closed-loop magnitude response. A large $M_r$ indicates a system with low damping that is close to resonance.
-   **Formula for $M_r$:**
    $$\boxed{\quad M_r = \frac{1}{2\zeta\sqrt{1-\zeta^2}} \quad} \quad \text{for } \zeta < 0.707$$
-   **Correlation:** Both $M_p$ and $M_r$ are minimized by increasing the damping ratio $\zeta$. A large resonant peak in the frequency response is a strong indicator of a large peak overshoot in the time response.

---
#### Correlation via Natural Frequency ($\omega_n$)
The natural frequency $\omega_n$ primarily governs the **speed of response** of the system. This is reflected in rise time and settling time in the time domain, and bandwidth in the frequency domain.

**1. Rise Time ($T_r$) vs. Bandwidth ($\omega_b$)**
Bandwidth ($\omega_b$) is the range of frequencies for which the system's gain is significant (typically defined as the frequency where the gain drops to -3dB of its DC value).
-   **Correlation:** Bandwidth and rise time are inversely related. A larger bandwidth allows a system to respond to faster input changes, resulting in a shorter rise time.
-   **Approximation:**
    $$\boxed{\quad T_r \cdot \omega_b \approx \text{constant} \quad (\text{often between 2.0 and 2.2})}$$

**2. Settling Time ($T_s$)**
The settling time depends on the real part of the dominant poles, $\sigma = \zeta\omega_n$. A larger bandwidth and a good phase margin both contribute to moving the poles further into the LHP, thus reducing the settling time.

---
#### Summary of Correlations

| Time-Domain Specification | Corresponding Frequency-Domain Specification(s) | Relationship |
| :--- | :--- | :--- |
| **Peak Overshoot ($M_p$)** | [[Phase Margin (PM)]] & Resonant Peak ($M_r$) | Inverse (Higher PM/Lower $M_r$ -> Lower $M_p$) |
| **Rise Time ($T_r$)** | Bandwidth ($\omega_b$) | Inverse (Larger $\omega_b$ -> Smaller $T_r$) |
| **Settling Time ($T_s$)** | Bandwidth ($\omega_b$) & Phase Margin (PM) | Inverse |
| **Steady-State Error ($e_{ss}$)**| DC Gain of Open-Loop TF ($\|G(0)H(0)\|$) | Inverse (Higher DC Gain -> Lower $e_{ss}$) |

---
### Related Concepts
#control-systems/related-concepts

> [[Time-Domain Specifications]]

[[Second-Order System Response]]
[[Frequency Response from Transfer Function]]
[[Bode Plots]]
[[Gain Margin (GM)]]
[[Phase Margin (PM)]]