---
tags:
  - power-electronics
  - ac-ac-converters
  - voltage-controller
  - phase-control
  - thyristors
  - triac
created: 2025-10-15
aliases:
  - AC Voltage Controller Principles
  - Integral Cycle Control
  - AC Chopper Control
subject: "[[Power Electronics]]"
parent:
  - AC-AC Converters
modified: 2026-08-04T10:17:09
---
### Principle of On-Off Control and Phase Control
#ac-voltage-controller #phase-control #on-off-control

AC voltage controllers vary the RMS value of an AC voltage at a constant frequency. The control is achieved by switching a pair of anti-parallel thyristors (SCRs) or a TRIAC placed between the AC source and the load. There are two fundamental control strategies: On-Off Control and Phase Control.

#### 1. On-Off Control (Integral Cycle Control)
#on-off-control #integral-cycle-control

This is the simplest control method, where the load is connected to the source for a few complete cycles and then disconnected for another few cycles.
*   **Principle:** The thyristors are switched ON at the zero-crossing of the input voltage and remain ON for an integer number of cycles, $n$. They are then kept OFF for another integer number of cycles, $m$.
*   **Control Parameter:** The control is achieved by varying the duty cycle, $k$, defined as:
    $$k = \frac{n}{n+m}$$
    where $n$ is the number of ON cycles and $m$ is the number of OFF cycles.
*   **Output RMS Voltage:** The RMS output voltage $V_o$ is related to the source voltage $V_s$ by the duty cycle:
    $$\boxed{\quad V_o = V_s \sqrt{\frac{n}{n+m}} = V_s \sqrt{k} \quad}$$
*   **Characteristics:**
    *   **No Harmonic Distortion:** Since switching occurs at zero-crossings and full cycles are passed, the output voltage waveform during the ON periods is a pure sinusoid. This method does not introduce harmonics into the system.
    *   **Slow Response Time:** The control action is slow because the output power can only be changed over a period of several cycles.
    *   **Low Switching Losses:** Zero-voltage switching minimizes losses.
*   **Applications:** Best suited for systems with high mechanical or thermal inertia, where a slow response is acceptable. The most common application is for **heating loads** and resistance welding. It is unsuitable for lighting (causes flickering) or motor control.

---
#### 2. Phase Control
#phase-control #firing-angle

This is the most common method for AC voltage control, providing fast and smooth regulation of power.
*   **Principle:** In each half-cycle, the thyristor is kept OFF for a portion of the cycle and then triggered (fired) at a specific delay angle, $\alpha$, measured from the zero-crossing point. Once triggered, the thyristor conducts for the remainder of that half-cycle until the current naturally goes to zero.
*   **Control Parameter:** The control is achieved by varying the **firing angle (or delay angle), $\alpha$**. The angle $\alpha$ can be varied from $0$ to $180^\circ$.
*   **Output RMS Voltage:** The RMS output voltage is a function of the firing angle $\alpha$. For a resistive load:
    $$\begin{align}
    V_o &= \left[ \frac{1}{\pi} \int_{\alpha}^{\pi} (V_m \sin(\omega t))^2 d(\omega t) \right]^{1/2} \\
    &= V_s \left[ \frac{1}{\pi} \int_{\alpha}^{\pi} (1 - \cos(2\omega t)) d(\omega t) \right]^{1/2}
    \end{align}$$
    $$\boxed{\quad V_o = V_s \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}} \quad}$$
    where $V_s$ is the RMS source voltage.
*   **Characteristics:**
    *   **High Harmonic Distortion:** Chopping the sine wave introduces significant harmonics into both the load voltage and the source current.
    *   **Poor Input Power Factor:** The distorted, lagging current results in a very poor power factor, especially at high firing angles.
    *   **Fast Response:** Power can be controlled on a half-cycle by half-cycle basis, providing very fast dynamic response.
*   **Applications:** Widely used for **light dimming**, heat control (where faster response is needed), and speed control of single-phase AC motors (e.g., fans, universal motors).

| Feature            | On-Off Control (Integral Cycle)   | Phase Control                      |
| ------------------ | --------------------------------- | ---------------------------------- |
| **Principle**      | Switching full cycles             | Switching within each half-cycle   |
| **Control**        | Duty Cycle ($k$)                  | Firing Angle ($\alpha$)            |
| **Response Speed** | Slow                              | Fast                               |
| **Harmonics**      | Very low (ideally none)           | High                               |
| **Power Factor**   | High (close to load PF)           | Poor (decreases with $\alpha$)     |
| **Applications**   | Heaters, Resistance Welding       | Light Dimmers, Motor Speed Control |

---
### Related Concepts
#ac-ac-converters/related-concepts

> [[AC-AC Converters]]

[[Single-Phase AC Voltage Controller with R and RL Loads]]
[[Silicon Controlled Rectifier (SCR)]]
[[TRIAC]]
[[Power Quality]]