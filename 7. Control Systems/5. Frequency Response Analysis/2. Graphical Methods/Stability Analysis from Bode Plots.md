---
tags:
  - control-systems
  - frequency-response
  - bode-plots
  - stability-analysis
  - gain-margin
  - phase-margin
created: 2026-05-22
aliases:
  - Bode Plot Stability
  - Gain and Phase Margins in Bode
  - Relative Stability from Bode
  - Bode Stability Criteria
subject:
  - "[[Control Systems]]"
parent:
  - "[[Bode Plots]]"
modified: 2026-08-04T10:33:04
---
### Stability Analysis from Bode Plots

#control-systems/frequency-response #bode-plot/stability-analysis

> The relative stability of a closed-loop system can be determined from the open-loop Bode plot using Gain and Phase Margins.

- **[[Phase Margin (PM)#Gain Crossover Frequency|Gain Crossover Frequency]] ($\omega_{gc}$):** The frequency at which the magnitude plot crosses the **0 dB line**.
- **[[Gain Margin (GM)#Phase Crossover Frequency|Phase Crossover Frequency]] ($\omega_{pc}$):** The frequency at which the phase plot crosses the $-180^\circ$ **line**.

- **[[Gain Margin (GM)]]:** The amount of gain (in dB) that can be added before the system becomes unstable. It is the negative of the magnitude plot's value at the phase crossover frequency. $$\boxed{\quad GM = -[20 \log_{10} |G(j\omega_{pc})H(j\omega_{pc})|] \quad}$$
- **[[Phase Margin (PM)]]:** The amount of phase lag that can be added before the system becomes unstable. It is the difference between the phase at the gain crossover frequency and $-180^\circ$. $$\boxed{\quad PM = 180^\circ + \angle G(j\omega_{gc})H(j\omega_{gc}) \quad}$$

![[Resources/r/Bode Plot GM & PM.png]]
For a system to be stable, both **GM and PM must be positive**. This generally implies that **$\omega_{gc} < \omega_{pc}$**.

> [!danger] Applicability of Bode Stability Criteria
> #control-systems/bode-plot/limitations
> 
> The standard Bode relative stability criteria (Positive GM and PM $\implies$ Stable, $\omega_{gc} < \omega_{pc}$) are **strictly valid only for minimum-phase, open-loop stable systems** (systems with absolutely no poles or zeros in the Right-Half Plane). 
> 
> If the open-loop transfer function $G(s)H(s)$ has RHP poles or zeros, the Bode plot stability interpretation is often misleading or completely invalid. In these cases, you **must** rely on [[Nyquist Plots|Nyquist Stability Criterion]].
^bode-applicability-limit

> [!abstract] Stability Conditions Summary
> | System State | Gain & Phase Margins | Crossover Frequencies |
| :--- | :--- | :--- |
| **Stable** | Both GM and PM are **Positive** ($> 0$) | $\omega_{gc} < \omega_{pc}$ |
| **Marginally Stable** | Both GM and PM are **Zero** ($= 0$) | $\omega_{gc} = \omega_{pc}$ |
| **Unstable** | Both GM and PM are **Negative** ($< 0$) | $\omega_{gc} > \omega_{pc}$ |
^stability-conditions-table

> [!info]- Edge Case: Infinite Margins
> #bode-plot/infinite-margins
> 
> - **Infinite Gain Margin ($GM = \infty$):** Occurs if the phase plot never reaches or crosses the **-180°** line (common in 1st and 2nd order systems without time delay). This means no amount of proportional gain $K$ will make the system unstable.
> - **Infinite Phase Margin ($PM = \infty$):** Occurs if the magnitude plot is always below **0 dB** for all frequencies. The system never reaches a point where it could oscillate.
^infinite-margins

---

### Related Concepts
#bode-plots/related-concepts

> [[Bode Plots]] (parent topic)
> [[Transfer Function from Bode Plot]]

[[Routh-Hurwitz Stability Criterion]]
[[Gain Margin (GM)]]
[[Phase Margin (PM)]]
[[Time Delay Systems]]
[[Polar Plots]]
[[Nyquist Plots]]
[[Time Delay Systems]]
[[DC Gain]]
[[Correlation between Time and Frequency Response]]