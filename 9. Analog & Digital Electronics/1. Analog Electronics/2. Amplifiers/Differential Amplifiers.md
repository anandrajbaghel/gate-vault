---
tags:
  - analog-electronics
  - amplifiers
  - differential-amplifier
  - op-amp
  - gate-ee
created: 2025-10-15
aliases:
  - Differential Pair
  - Emitter-Coupled Pair
subject: "[[Analog & Digital Electronics]]"
parent: Amplifiers
modified: 2026-08-04T09:33:14
---
### Differential Amplifier
#differential-amplifier #cmrr

> A **differential amplifier** is a type of amplifier that amplifies the **difference** between two input voltages while rejecting any voltage common to both inputs. It is the fundamental building block of operational amplifiers (Op-Amps) and is crucial for rejecting common-mode noise in electronic systems.

#### Circuit and Operating Principle

The core of a differential amplifier is the **emitter-coupled pair** (for BJTs) or **source-coupled pair** (for FETs). Two matched transistors share a common emitter resistor ($R_E$) or, more ideally, a constant current source ($I_{EE}$).

*   **Differential-Mode Input ($v_d$):** The difference between the two input signals ($v_d = v_1 - v_2$). The amplifier should provide high gain for this signal.
*   **Common-Mode Input ($v_c$):** The average of the two input signals ($v_c = (v_1 + v_2)/2$). The amplifier should provide very low (ideally zero) gain for this signal.

#### Key Performance Parameters

1.  **Differential-Mode Gain ($A_d$):** The gain for the difference signal.
    $$A_d = \frac{v_{out}}{v_d}$$
2.  **Common-Mode Gain ($A_c$):** The gain for the common-mode signal.
    $$A_c = \frac{v_{out}}{v_c}$$
3.  **Common-Mode Rejection Ratio (CMRR):** The most important figure of merit for a differential amplifier. It measures the ability of the amplifier to reject common-mode signals. A higher CMRR is better.
    $$\boxed{\quad CMRR = \left| \frac{A_d}{A_c} \right| \quad}$$
    Expressed in decibels (dB), the formula is:
    $$\boxed{\quad CMRR_{dB} = 20 \log_{10} \left| \frac{A_d}{A_c} \right| \quad}$$

#### Small-Signal Analysis
The analysis is simplified by using the **half-circuit concept**.

*   **Differential-Mode Analysis:**
    *   We apply $v_1 = v_d/2$ and $v_2 = -v_d/2$. Due to symmetry, the common emitter node is a **virtual ground** for the AC signal.
    *   We analyze one half of the circuit (a single CE stage).
    *   The single-ended differential gain (output taken from one collector) is:
        $$\boxed{\quad A_{d, single-ended} = -\frac{g_m R_C}{2} = -\frac{\beta R_C}{2r_\pi} \quad}$$
    *   The differential output gain (output taken between the two collectors) is twice this value: $A_{d, diff} = -g_m R_C$.
*   **Common-Mode Analysis:**
    *   We apply $v_1 = v_2 = v_c$. The current from both transistors flows through $R_E$, so in the half-circuit model, the emitter resistance appears as $2R_E$. This provides strong negative feedback.
    *   The common-mode gain is:
        $$\boxed{\quad A_c = \frac{-R_C}{r_e + 2R_E} \approx \frac{-R_C}{2R_E} \quad}$$
        (where $r_e$ is the small-signal emitter resistance).

#### Improving CMRR
From the gain formulas, we can find the CMRR:
$$CMRR = \left| \frac{A_d}{A_c} \right| \approx \left| \frac{-g_m R_C / 2}{-R_C / (2R_E)} \right| = g_m R_E$$
To maximize CMRR, we need to make $A_c$ as small as possible, which requires making $R_E$ as large as possible. A simple resistor has limitations.

The best way to achieve a very high equivalent resistance is to replace $R_E$ with a **constant current source** (e.g., using a current mirror circuit). An ideal current source has infinite output impedance, leading to a theoretically infinite CMRR. This is the standard practice in integrated circuits like Op-Amps.

#### Input and Output Impedance
*   **Differential Input Resistance ($R_{id}$):** The resistance seen between the two input terminals.
    $$R_{id} = 2r_\pi = 2 h_{ie}$$
*   **Output Resistance ($R_o$):** The resistance looking back into the output terminal (collector).
    $$R_o = R_C$$

---
### Related Concepts
#related-concepts

> [[Ideal Op-Amp]] (The diff-amp is its input stage)

[[Instrumentation Amplifier]]
[[Small Signal Analysis of BJT Amplifiers]]
[[Amplifiers]]