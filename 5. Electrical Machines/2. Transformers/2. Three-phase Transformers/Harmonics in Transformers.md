---
tags:
  - electrical-machines
  - transformers
  - three-phase
  - power-quality
  - harmonics
created: 2025-09-16
aliases:
  - Transformer Harmonics
  - Third Harmonic in Transformers
subject: "[[Electrical Machines]]"
parent:
  - Three-Phase Transformers
modified: 2026-07-23T20:32:35
---
###### Navigation

> [!navigation]
> 1. [[Power System]]
> 	- [[Harmonic Analysis]]
> 2. [[Power Electronics]]
> 	- [[Harmonic Reduction Techniques]]
> 	- [[Input Current Harmonics]]
> 	- [[Fourier Analysis of Input Current]]

---
### Harmonics in Transformers
#transformers #harmonics #power-quality

> Harmonics in transformers are currents or voltages with frequencies that are integer multiples of the fundamental power frequency (e.g., 150 Hz, 250 Hz for a 50 Hz system). The primary cause of harmonic generation within a transformer is the non-linear magnetic characteristic (B-H curve) of its core material.

#### Origin of Harmonics
#magnetic-saturation #bh-curve

The operation of a transformer is based on establishing a magnetic flux in the core. For a sinusoidal applied voltage $V_1$, the flux $\Phi$ must also be sinusoidal (since $V_1 \approx E_1 = N_1 \frac{d\Phi}{dt}$).

However, due to the magnetic saturation of the iron core, the relationship between the magnetizing MMF ($N i_m$) and the flux $\Phi$ (represented by the B-H curve) is non-linear. To produce a sinusoidal flux, the transformer must draw a **non-sinusoidal magnetizing current ($i_m$)**.

*(A graph showing a sinusoidal flux wave and the corresponding peaky, non-sinusoidal magnetizing current)*

A Fourier analysis of this peaky magnetizing current reveals that it consists of:
-   A fundamental frequency component.
-   A series of **odd harmonics** (3rd, 5th, 7th, etc.). The even harmonics are absent due to half-wave symmetry.
-   The **third harmonic ($3f$) is the most dominant** harmonic component.

---
#### Effects of Transformer Connections on Harmonics
#transformer-connections #third-harmonic

The way a three-phase transformer bank is connected has a profound impact on how these harmonic currents, particularly the 3rd harmonic, behave.

1.  **Star-Star (Y-Y) Connection with Isolated Neutral**
    -   The 3rd harmonic currents in each of the three phases are **in phase** with each other.
    -   At the neutral point, KCL requires the sum of currents to be zero. However, the sum of the 3rd harmonic currents is $i_{a3} + i_{b3} + i_{c3} = 3i_{a3} \neq 0$.
    -   Since the neutral is isolated, there is no return path. **Therefore, the 3rd harmonic currents cannot flow.**
    -   **Consequence**: Because the necessary 3rd harmonic component of the magnetizing current is suppressed, the resulting flux waveform becomes distorted (flat-topped). This distorted flux, in turn, induces a non-sinusoidal EMF with a very large 3rd harmonic component in the phase voltages.

2.  **Star-Star (Y-Y) Connection with Grounded Neutral**
    -   The grounded neutral provides a return path for the sum of the 3rd harmonic currents ($3i_{a3}$).
    -   **Consequence**: The 3rd harmonic currents can now flow. This allows the flux and the induced phase voltages to be nearly sinusoidal. However, these harmonic currents flow in the transmission lines and ground, which can cause significant interference with nearby communication circuits.

3.  **Delta (Δ) Connection**
    -   The 3rd harmonic voltages in the three phases of the delta winding are in phase with each other.
    -   These voltages drive a **circulating current of the 3rd harmonic frequency** around the closed loop of the delta winding.
    -   **Consequence**: The delta winding effectively "traps" the 3rd harmonic current, providing the necessary MMF component to ensure a sinusoidal flux and sinusoidal terminal voltages. These harmonic currents do not appear on the external line conductors. This is the most effective solution for the 3rd harmonic problem.

**Conclusion**: Any three-phase transformer connection that includes a **delta winding (Δ-Y, Y-Δ, Δ-Δ)** effectively mitigates the problems caused by the 3rd harmonic.

![[Harmonics in delta and wye.png]]

---
#### Mitigation of Harmonics
#harmonic-mitigation

The primary methods to handle the 3rd harmonic problem in transformers are:

1.  **Use of Delta Windings**: Employing Δ-Y or Y-Δ connections is standard practice.
2.  **Tertiary Winding**: For high voltage Star-Star (Y-Y) connected transformers, a third, delta-connected winding called a **tertiary winding** is often added. Its sole purpose is to provide a circulating path for the 3rd harmonic currents.

---
### Related Concepts
#harmonics/related

> [[Three-Winding Transformers]]

[[Three-phase Transformer Connections]]
[[Power System]]
[[Power Electronics]] (A major source of harmonic currents in modern power systems)
[[Mitigation Techniques in Machines]]