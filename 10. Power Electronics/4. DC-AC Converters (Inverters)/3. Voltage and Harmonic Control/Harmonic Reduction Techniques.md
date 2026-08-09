---
tags:
  - power-electronics
  - inverters
  - harmonics
  - power-quality
  - pwm
  - filter-design
created: 2025-10-15
aliases:
  - Harmonic Mitigation
  - Inverter Harmonic Control
subject: "[[Power Electronics]]"
parent:
  - DC-AC Converters (Inverters)
modified: 2026-08-04T09:47:15
---
### Harmonic Reduction Techniques
#inverter-harmonics #power-quality #pwm #filter-design

> The output of a simple inverter is a square or quasi-square wave, which is rich in undesirable harmonics. These harmonics cause additional power losses, torque pulsations in motors, electromagnetic interference (EMI), and overall poor power quality. Harmonic reduction techniques are essential for producing a high-quality, near-sinusoidal AC output.

#### 1. Pulse Width Modulation (PWM) Techniques
This is the most effective and widely used category of techniques. The core idea is to introduce multiple switching events within each half-cycle to control the shape and harmonic content of the output voltage waveform, while the DC input voltage remains constant.

##### a) Multiple-Pulse Width Modulation
Instead of a single pulse per half-cycle, multiple equidistant pulses are used. This doesn't eliminate low-order harmonics but **shifts the dominant harmonic content to higher frequencies**, centered around the switching frequency. This makes the harmonics much easier to remove with a smaller and more efficient output filter.

##### b) Sinusoidal PWM (SPWM)
By modulating the width of the pulses according to a sinusoidal reference, SPWM creates an output waveform whose fundamental component is sinusoidal and whose magnitude is controllable.
*   **Key Benefit:** The lowest order harmonics (3rd, 5th, 7th...) are significantly suppressed. The most dominant harmonics are located as sidebands around the high carrier frequency ($f_c$) and its multiples.
*   The **Frequency Modulation Index ($m_f = f_c / f_r$)** is kept high to push these harmonics to very high frequencies, simplifying the filter design.

##### c) Programmed Harmonic Elimination
This is an advanced, offline PWM technique. For a desired fundamental voltage, the switching angles ($\alpha_1, \alpha_2, \dots, \alpha_N$) are pre-calculated to specifically eliminate a set of low-order harmonics (e.g., 5th, 7th, 11th, 13th).
*   The peak value of the n-th harmonic for a waveform with N notches per half-wave is given by:
    $$\boxed{\quad V_{on,peak} = \frac{4V_{dc}}{n\pi}\left[1 - 2\cos(n\alpha_1) + 2\cos(n\alpha_2) - \dots \right] \quad}$$
*   By setting $V_{o5}=0$, $V_{o7}=0$, etc., a system of non-linear equations can be solved to find the required angles.

##### d) Space Vector Modulation (SVM) - For Three-Phase Inverters
SVM is an advanced digital PWM technique that provides better DC bus utilization (about 15% more fundamental voltage than SPWM for the same $V_{dc}$) and lower total harmonic distortion. It considers all three phases together and selects switching states to synthesize a rotating voltage vector that best approximates a sinusoidal reference.

---
#### 2. Multi-level Inverters
#multi-level-inverter

The core idea of multi-level inverters is to synthesize a **stepped AC voltage waveform** from several levels of DC voltage. This stepped waveform is much closer to a sinusoid than a simple square wave.
*   **Topologies:** Diode-Clamped (NPC), Flying Capacitor, and Cascaded H-Bridge.
*   **Advantage:** As the number of voltage levels increases, the harmonic distortion drops dramatically. For a high number of levels, the output filter requirement can be minimal or even eliminated.

---
#### 3. Output Filtering
#lc-filter

This is a direct approach where a filter is placed at the output of the inverter to remove the unwanted harmonics.
*   **Passive Filters:** The most common solution is a **low-pass LC filter**. It is designed to have a cutoff frequency well above the fundamental frequency but significantly below the lowest-order significant harmonic (e.g., the PWM switching frequency). LCL filters are also used for better attenuation.
*   **Active Filters:** These are more complex power electronic systems that can inject compensating currents to cancel out the harmonics produced by the inverter or the load.

---
#### 4. Transformer Connections (Three-Phase)
In three-phase systems, transformer winding connections can be used to eliminate **triplen harmonics** (3rd, 9th, 15th, etc.).

> [!danger] Exam Trap: Triplen Harmonics and Transformers
> Triplen harmonics (3rd, 9th, 15th) are **zero-sequence** components, meaning they flow perfectly in phase across all three lines.
> 
> * **Star (Y) without neutral:** Triplen currents **cannot flow** (KCL at neutral forces them to zero).
> * **Delta ($\Delta$):** Triplen currents **circulate entirely within the closed loop** of the delta winding. 
> 
> **Result:** A $\Delta$-Y or Y-$\Delta$ transformer completely blocks triplen harmonic currents from entering the grid, protecting power quality.

---
### Related Concepts
#harmonic-reduction/related-concepts

> [[Performance Parameters of Inverters]]

[[Pulse Width Modulation (PWM) Techniques]]
[[Single-Pulse Width Modulation]]
[[Sinusoidal Pulse Width Modulation (SPWM)]]
[[Three-Phase Voltage Source Inverter (VSI)]]
[[Fourier Series]]
[[Power Quality]]