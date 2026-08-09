---
tags:
  - analog-electronics
  - op-amp
  - oscillator
  - positive-feedback
  - gate-ee
created: 2025-10-15
aliases:
  - Oscillators
  - Sine Wave Generation
  - RC Oscillator
  - Wien Bridge
subject: "[[Analog & Digital Electronics]]"
parent:
  - Operational Amplifiers (Op-Amps)
modified: 2026-08-04T10:49:50
---
### Waveform Generation - Sinusoidal Oscillators
#oscillator #positive-feedback #barkhausen-criterion

> A **sinusoidal oscillator** is an electronic circuit that generates a stable, periodic sine wave output without any external AC input signal. It converts DC power from the supply into an AC signal. This is achieved by using an amplifier with a **positive feedback** loop containing a frequency-selective network (e.g., an RC or LC circuit).

#### Barkhausen Criterion for Sustained Oscillation
For a circuit to produce steady-state sinusoidal oscillations, it must satisfy the **Barkhausen criterion**. This criterion states two conditions that must be met for the feedback loop:

1.  **Magnitude Condition:** The magnitude of the loop gain ($A\beta$) must be equal to unity.
    $$\boxed{\quad |A\beta| = 1 \quad}$$
2.  **Phase Condition:** The total phase shift around the feedback loop must be an integer multiple of 360° (or 0°).
    $$\boxed{\quad \angle A\beta = n \cdot 360^\circ, \quad n = 0, 1, 2, \dots \quad}$$

*   **Startup Condition:** In a practical circuit, to start the oscillations from noise, the loop gain must be slightly greater than one ($|A\beta| > 1$). The oscillations will then grow in amplitude until non-linearities in the circuit (like supply saturation) or an amplitude stabilization mechanism effectively reduce the gain, forcing $|A\beta|$ to settle back to exactly 1 for a stable output.

#### 1. RC Phase Shift Oscillator
#rc-phase-shift-oscillator

This oscillator uses an inverting op-amp and a feedback network of three cascaded RC sections.

*   **Principle of Operation:**
    1.  The **inverting amplifier** provides a fixed **180°** phase shift.
    2.  The **feedback network**, consisting of three RC stages, must provide the remaining **180°** phase shift to satisfy the Barkhausen criterion.
    Each RC section provides a 60° phase shift at the frequency of oscillation.
*   **Frequency of Oscillation ($f_o$):**
    The frequency at which the three RC sections produce a total phase shift of 180° is:
    $$\boxed{\quad f_o = \frac{1}{2\pi RC\sqrt{6}} \quad}$$
*   **Condition for Oscillation:**
    At the frequency $f_o$, the attenuation ($\beta$) of the RC feedback network is $1/29$.
    $$\beta = \frac{V_f}{V_o} = \frac{1}{29}$$
    To satisfy the magnitude condition ($|A\beta| \ge 1$), the gain of the inverting amplifier ($A = -R_f/R_i$) must have a magnitude of at least 29.
    $$\boxed{\quad |A| = \frac{R_f}{R_i} \ge 29 \quad}$$

#### 2. Wien Bridge Oscillator
#wien-bridge-oscillator

The Wien Bridge oscillator is widely used for generating low-distortion sine waves in the audio frequency range. It uses a non-inverting op-amp and an RC bridge network.

*   **Principle of Operation:**
    1.  The **non-inverting amplifier** provides a **0°** phase shift.
    2.  The **Wien Bridge network** must therefore also provide a **0°** phase shift at the frequency of oscillation. The bridge network consists of a series RC (lead network) and a parallel RC (lag network). The phase shift is zero only when the lead and lag effects cancel out perfectly.
*   **Frequency of Oscillation ($f_o$):**
    Assuming the common case where $R_1=R_2=R$ and $C_1=C_2=C$:
    $$\boxed{\quad f_o = \frac{1}{2\pi RC} \quad}$$
*   **Condition for Oscillation:**
    At the frequency $f_o$, the attenuation ($\beta$) of the bridge network is $1/3$.
    $$\beta = \frac{V_f}{V_o} = \frac{1}{3}$$
    To satisfy the magnitude condition ($|A\beta| \ge 1$), the gain of the non-inverting amplifier ($A = 1+R_f/R_i$) must be at least 3.
    $$\boxed{\quad A = 1 + \frac{R_f}{R_i} \ge 3 \quad}$$
*   **Amplitude Stabilization:** The Wien Bridge is preferred for high-quality signal generators because its gain can be precisely controlled using non-linear elements (like diodes) to ensure $|A\beta|=1$ without causing significant distortion.

---
### Related Concepts
#related-concepts

> [[Feedback in Amplifiers]]

[[Ideal Op-Amp]]
[[Waveform Generation - Multivibrators (Astable, Monostable)]]
[[Control Systems]]