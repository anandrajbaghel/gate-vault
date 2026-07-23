---
tags:
  - frequency-response
  - bode-plot
  - poles-zeros
  - analog-electronics
  - control-systems
  - signals-systems
created: 2025-09-08
aliases:
  - Frequency Domain Analysis
subject:
  - "[[Analog & Digital Electronics]]"
  - "[[Control Systems]]"
  - "[[Signals & Systems]]"
parent: System Analysis
modified: 2026-07-23T16:53:28
---
### Frequency Response
#frequency-response #bode-plot #system-analysis

> The frequency response of a system is a measure of its steady-state output when driven by a sinusoidal input of a specific frequency. It describes how the system modifies the **magnitude (gain)** and **phase** of the input sinusoid as a function of its frequency. It is a critical tool for analyzing and designing amplifiers, filters, and control systems.

#### The Transfer Function in the Frequency Domain
#transfer-function #phasors

The frequency response is obtained from the system's [[Transfer Function and Impulse Response|transfer function]] $H(s)$ by making the substitution $s = j\omega$, where $\omega$ is the angular frequency.
$$\boxed{\quad H(j\omega) = H(s)|_{s=j\omega} \quad}$$
The resulting complex function $H(j\omega)$ is described by its magnitude and phase:
*   **Magnitude Response (Gain)**:
    $$\boxed{\quad \text{Gain} = |H(j\omega)| \quad}$$
*   **Phase Response (Phase Shift)**:
    $$\boxed{\quad \text{Phase} = \angle H(j\omega) \quad}$$
If the input to the system is $x(t) = A \cos(\omega t)$, the steady-state output will be $y(t) = A|H(j\omega)| \cos(\omega t + \angle H(j\omega))$.

---
#### Bode Plots
#bode-plot

A Bode plot is the standard graphical representation of a system's frequency response. It consists of two semi-log plots:
1. **Magnitude Plot**: The magnitude $|H(j\omega)|$ in decibels (dB) versus frequency on a logarithmic scale.
    $$\boxed{\quad \text{Magnitude (dB)} = 20 \log_{10} |H(j\omega)| \quad}$$
2. **Phase Plot**: The phase angle $\angle H(j\omega)$ in degrees versus frequency on a logarithmic scale.

Bode plots are powerful because they can be quickly approximated using straight-line segments. The slopes of the magnitude plot change by $\pm 20$ dB/decade for each simple pole or zero, respectively, at their corner frequencies.

---
#### Key Metrics
#bandwidth #cutoff-frequency #gain-bandwidth-product

* **Cutoff Frequency ($f_c$ or $\omega_c$)**: Also known as the **-3dB frequency** or **half-power frequency**. It is the frequency at which the magnitude of the response has dropped to $1/\sqrt{2}$ (or approximately 0.707) of its maximum (mid-band) value. This corresponds to a drop of -3 dB.
* **Bandwidth (BW)**: For a band-pass amplifier, it is the range of frequencies between the lower cutoff frequency ($f_L$) and the upper cutoff frequency ($f_H$).
    $$\boxed{\quad BW = f_H - f_L \quad}$$
* **Gain-Bandwidth Product (GBW)**: For many amplifiers (especially op-amps), the product of the mid-band gain and the bandwidth is a constant, known as the GBW.

---
#### Application in Amplifiers
#amplifier-frequency-response

The frequency response of a typical AC-coupled amplifier is divided into three regions:
1.  **Low-Frequency Region**: The gain drops off as frequency decreases. This is caused by the increasing impedance of **coupling and bypass capacitors**. These capacitors create poles that determine the lower cutoff frequency, $f_L$.
2.  **Mid-band Region**: The region where the gain is maximum and relatively constant. Here, coupling/bypass capacitors are treated as shorts, and internal parasitic capacitances are treated as opens.
3.  **High-Frequency Region**: The gain drops off as frequency increases. This is caused by the decreasing impedance of internal **parasitic capacitances** of the active devices (e.g., $C_{be}, C_{bc}$ for BJTs; $C_{gs}, C_{gd}$ for MOSFETs). The [[Miller Effect]] often creates a dominant pole that determines the upper cutoff frequency, $f_H$.

#### Application in Control Systems
#gain-margin #phase-margin #stability-analysis

In control systems, frequency response (particularly Bode plots) is used to determine the stability of a closed-loop system from its open-loop transfer function $G(s)H(s)$.
*   **Gain Crossover Frequency ($\omega_{gc}$)**: The frequency at which $|G(j\omega)H(j\omega)| = 1$ (or 0 dB).
*   **Phase Crossover Frequency ($\omega_{pc}$)**: The frequency at which $\angle G(j\omega)H(j\omega) = -180^\circ$.
*   **Gain Margin (GM)**: The amount of additional gain (in dB) required to make the system unstable. It is measured at the phase crossover frequency. A positive GM indicates stability.
    $$\boxed{\quad GM = -20 \log_{10} |G(j\omega_{pc})H(j\omega_{pc})| \quad}$$
*   **Phase Margin (PM)**: The amount of additional phase lag required to make the system unstable. It is measured at the gain crossover frequency. A positive PM indicates stability.
    $$\boxed{\quad PM = 180^\circ + \angle G(j\omega_{gc})H(j\omega_{gc}) \quad}$$

---
### Related Concepts
#related-concepts

> [[Transfer Function]]

[[Poles and Zeros]] (These determine the shape of the frequency response)
[[Miller Effect]] (A key factor in the high-frequency response of amplifiers)
[[Resonance]] (A peak in the frequency response of second-order systems)
[[System Stability]]
[[The Laplace Transform]]
