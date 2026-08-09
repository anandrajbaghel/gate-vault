---
tags:
  - power-electronics
  - inverters
  - pwm
  - voltage-control
  - harmonic-reduction
created: 2025-10-15
aliases:
  - Single Pulse PWM
  - "Example : Eliminating the 3rd Harmonic : Single-Pulse Width Modulation"
subject: "[[Power Electronics]]"
parent: "[[Pulse Width Modulation (PWM) Techniques]]"
modified: 2026-08-04T10:30:20
---
### Single-Pulse Width Modulation
#single-pulse-pwm #voltage-control

**Single-Pulse Width Modulation** is the simplest form of PWM used to control the output voltage of an inverter. Instead of a full 180° square wave, a single pulse of controllable width is generated in the center of each half-cycle of the output voltage. While it provides voltage control, its harmonic performance is poor compared to more advanced PWM techniques.

---
#### Principle of Operation
#pwm/operation

In this technique, the inverter switches are controlled to produce a single pulse of width $2d$ centered at $\pi/2$ (90°) for the positive half-cycle, and another pulse of the same width centered at $3\pi/2$ (270°) for the negative half-cycle. The RMS value of the fundamental output voltage is controlled by varying the pulse width, which is determined by the angle $d$.

*   The pulse is ON from $(\frac{\pi}{2} - d)$ to $(\frac{\pi}{2} + d)$.
*   The total pulse width is $2d$ radians.

---
#### Voltage and Harmonic Analysis
#voltage-control #fourier-analysis

The output voltage waveform is a quasi-square wave. We can find its harmonic content using the [[Fourier Series]]. Due to the waveform's symmetries (odd and half-wave), only odd sine terms are present. The peak value of the n-th harmonic component is given by:
$$\boxed{\quad V_{on,peak} = \frac{4V_{dc}}{n\pi} \sin(nd) \quad}$$
where $n$ is an odd integer (1, 3, 5, ...).

##### Fundamental Voltage Control
The primary objective is to control the fundamental component (n=1). Setting n=1 in the above equation gives the peak value of the fundamental voltage:
$$V_{o1,peak} = \frac{4V_{dc}}{\pi} \sin(d)$$
The RMS value of the fundamental output voltage is therefore:
$$\boxed{\quad V_{o1} = \frac{V_{o1,peak}}{\sqrt{2}} = \frac{2\sqrt{2}V_{dc}}{\pi} \sin(d) \quad}$$
By varying $d$ from $0$ to $\pi/2$ (or 90°), the fundamental RMS voltage can be controlled from 0 to its maximum square-wave value of $0.9V_{dc}$.

---
#### Harmonic Elimination
#harmonic-elimination

A key feature of this technique is the ability to eliminate a specific harmonic by choosing an appropriate pulse width. To eliminate the n-th harmonic, we set its amplitude to zero:
$$V_{on,peak} = 0 \implies \sin(nd) = 0$$
This requires that $nd = k\pi$ for an integer k.

**Example: Eliminating the 3rd Harmonic**
To eliminate the dominant 3rd harmonic, we set $n=3$ and solve for $d$:
$$\begin{align}
\sin(3d) &= 0 \\
3d &= \pi \\
d &= \frac{\pi}{3} \quad \text{or} \quad 60^\circ
\end{align}$$
Thus, by setting the pulse width $2d = 120^\circ$, the 3rd harmonic is completely eliminated from the output voltage waveform. However, other low-order harmonics (5th, 7th, etc.) will still be present and may even increase in magnitude.

---
#### Advantages and Disadvantages
#pros-cons

*   **Advantages:**
    *   Simple to implement and understand.
    *   Provides continuous control over the fundamental output voltage.
*   **Disadvantages:**
    *   **Poor Harmonic Performance:** The Total Harmonic Distortion (THD) is high. Even when one harmonic is eliminated, other low-order harmonics remain significant.
    *   **Bulky Filter Required:** The presence of strong low-order harmonics necessitates a large and costly output filter to achieve a near-sinusoidal waveform.

Because of its poor harmonic profile, Single-Pulse Width Modulation is rarely used in modern high-performance inverters, which favor techniques like Sinusoidal PWM.

---
### Related Concepts
#single-pulse-pwm/related-concepts

> [[Pulse Width Modulation (PWM) Techniques]]

[[Multiple-Pulse Width Modulation]]
[[Sinusoidal Pulse Width Modulation (SPWM)]]
[[Voltage Control of Single-Phase Inverters]]
[[Performance Parameters of Inverters]]