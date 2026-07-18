---
tags:
  - electric-circuits
  - ac-circuits
  - sinusoidal-steady-state
  - phasors
  - impedance
aliases:
  - AC Circuits
  - Alternating Current Circuits
  - sinusoidal steady-state analysis
created: 2025-09-11
subject: "[[Electric Circuits]]"
parent: "[[Electric Circuits]]"
trends:
  - "[[trends - AC Circuits]]"
error:
  - "[[error - AC Circuits]]"
confidence: 9
---
### AC Circuits
#ac-circuits #sinusoidal-steady-state

> **AC (Alternating Current) circuits** are electrical circuits driven by sinusoidal voltage or current sources. The analysis of these circuits in a steady-state condition, after all transients have died out, is known as **Sinusoidal Steady-State Analysis**. This is the most common type of circuit analysis in power systems and electronics.

#### Sinusoidal Waveforms and RMS Value
#sinusoids #rms-value

An AC voltage or current is typically represented as a sinusoid:
$$v(t) = V_m \cos(\omega t + \phi)$$
*   $V_m$ is the **amplitude** or peak value.
*   $\omega$ is the **angular frequency** in radians/sec ($\omega = 2\pi f$).
*   $\phi$ is the **phase angle** in degrees or radians.

The **RMS (Root Mean Square)** value of a sinusoid is its effective DC value for delivering the same average power to a resistor.
For a general periodic signal $x(t)$ with period T:
$$X_{rms} = \sqrt{\frac{1}{T} \int_{0}^{T} [x(t)]^2 dt}$$
For a sinusoidal waveform, this simplifies to:
$$\boxed{\quad V_{rms} = \frac{V_m}{\sqrt{2}} \quad \text{and} \quad I_{rms} = \frac{I_m}{\sqrt{2}} \quad}$$
In AC analysis, voltages and currents are typically given as RMS values unless stated otherwise.

---
#### Phasor Concept
#phasors #frequency-domain

A **phasor** is a complex number that represents the amplitude and phase of a sinusoidal waveform. It is a powerful tool that transforms the analysis from solving differential equations in the time domain to solving algebraic equations in the frequency (or phasor) domain.
$$\begin{align}
\text{Time Domain: } v(t) &= V_m \cos(\omega t + \phi) \\
\text{Phasor Domain: } \mathbf{V} &= V_m \angle \phi = V_m e^{j\phi} = V_m(\cos\phi + j\sin\phi)
\end{align}$$
*Note: Phasor analysis is only valid when all sources in the circuit have the same frequency.*

---
#### Impedance (Z) and Admittance (Y)
#impedance #admittance

**Impedance ($\mathbf{Z}$)** is the AC equivalent of resistance. It is the ratio of the voltage phasor to the current phasor and represents the total opposition (from both resistance and reactance) to current flow.
$$\boxed{\quad \mathbf{Z} = \frac{\mathbf{V}}{\mathbf{I}} = R + jX \quad}$$
*   **R** is the **Resistance** (the real part of Z).
*   **X** is the **Reactance** (the imaginary part of Z).
    *   **Inductive Reactance ($X_L$)**: $\boxed{\quad X_L = \omega L \quad}$. Impedance is $\mathbf{Z}_L = j\omega L$. Voltage leads current by 90°.
    *   **Capacitive Reactance ($X_C$)**: $\boxed{\quad X_C = -\frac{1}{\omega C} \quad}$. Impedance is $\mathbf{Z}_C = \frac{1}{j\omega C} = -j\frac{1}{\omega C}$. Current leads voltage by 90°.
    *   **Resistive Impedance**: $\mathbf{Z}_R = R$. Voltage and current are in phase.

**Admittance ($\mathbf{Y}$)** is the reciprocal of impedance and is the AC equivalent of conductance.
$$\boxed{\quad \mathbf{Y} = \frac{1}{\mathbf{Z}} = G + jB \quad}$$
*   **G** is the **Conductance**.
*   **B** is the **Susceptance**.

---
#### Circuit Analysis in the Frequency Domain
#ac-circuit-analysis

All the DC circuit analysis techniques learned previously are directly applicable in the frequency domain, with the following substitutions:
*   Voltages and currents are replaced by their **phasors** ($\mathbf{V}, \mathbf{I}$).
*   Resistances are replaced by their complex **impedances** ($\mathbf{Z}$).

This means you can apply:
*   **Ohm's Law**: $\boxed{\quad \mathbf{V} = \mathbf{I}\mathbf{Z} \quad}$
*   **Kirchhoff's Laws (KCL/KVL)** using phasor sums.
*   **[[Nodal Analysis]]** and **[[Mesh Analysis]]** with complex impedances.
*   **[[Thevenin's Theorem]]** and **[[Norton's Theorem]]**, where $V_{Th}$ and $I_N$ are phasors and $Z_{Th} = Z_N$ is a complex impedance.
*   **[[Superposition Theorem]]**.

---
### Related Concepts
#related-concepts

> [[AC Power Analysis]] (The study of real, reactive, and complex power in AC circuits)
> [[Resonance]] (A special frequency-dependent condition in RLC circuits)
> [[Three-Phase Circuits]] (An extension of single-phase AC systems)

[[Phasor Analysis]]
[[Impedance and Admittance]]
[[Power Factor|Power Factor Correction]]
[[Transient Analysis]]