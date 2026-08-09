---
tags:
  - analog-electronics
  - amplifiers
  - multistage-amplifier
  - cascode
  - cascade
  - gate-ee
created: 2025-10-15
aliases:
  - Cascaded Amplifiers
  - Multistage Amplifier
subject: "[[Analog & Digital Electronics]]"
parent: Amplifiers
modified: 2026-08-04T10:04:38
---
### Multi-stage Amplifiers
#multistage-amplifier #cascaded-amplifier

> A **multi-stage amplifier** is created by connecting the output of one single-stage amplifier to the input of another. This is done to achieve performance characteristics-such as higher overall gain or specific input/output impedances-that are not possible with a single stage.

#### Need for Multi-stage Amplifiers
#gain #impedance-matching

1. **High Gain:** The primary reason is to achieve a much larger overall gain. The total gain of a cascaded amplifier is the product of the individual stage gains.
2. **Impedance Matching:** Different amplifier configurations have different impedance properties. A multi-stage design can use a high-input-impedance stage (like a CC or CS) at the input to avoid loading the signal source, and a low-output-impedance stage (like a CC or CD) at the output to effectively drive a low-impedance load.

#### Gain Calculation and Loading Effect
#gain-calculation #loading-effect

The overall voltage gain ($A_v$) is the product of the individual stage gains:
$$A_{v, total} = A_{v1} \times A_{v2} \times \dots \times A_{vn}$$
In decibels, the gains are simply added:
$$A_{v, total(dB)} = A_{v1(dB)} + A_{v2(dB)} + \dots + A_{vn(dB)}$$

However, one must account for the **loading effect**. The input impedance of a subsequent stage ($R_{in2}$) acts as the load for the preceding stage. This reduces the gain of the preceding stage.
The loaded gain of stage 1, $A_{v1}$, is calculated using its output resistance $R_{out1}$ and the input resistance of stage 2, $R_{in2}$:
$$A_{v1, loaded} = A_{v1, unloaded} \times \frac{R_{in2}}{R_{out1} + R_{in2}}$$
The total gain for a two-stage amplifier is $A_{v, total} = A_{v1, loaded} \times A_{v2, loaded}$.

#### Coupling Methods
#rc-coupling #direct-coupling

*   **RC Coupling:** The most common method. A coupling capacitor connects the output of one stage to the input of the next. It blocks the DC bias voltage of the first stage from affecting the second, while allowing the AC signal to pass.
*   **Transformer Coupling:** Used for impedance matching, especially in power amplifiers connecting to low-impedance loads like speakers. It is bulky and has poor frequency response.
*   **Direct Coupling:** No coupling components are used. This allows the amplifier to amplify signals down to DC (0 Hz). It is the standard method for integrated circuits like Op-Amps but is sensitive to Q-point drift.

#### Frequency Response of Multi-stage Amplifiers
#frequency-response #bandwidth

Cascading amplifiers affects the overall bandwidth.
*   **Lower Cutoff Frequency ($f_L$):** The overall lower cutoff frequency, $f_{L(total)}$, is **higher** than the $f_L$ of any individual stage. It is primarily determined by the stage with the highest $f_L$.
*   **Upper Cutoff Frequency ($f_H$):** The overall upper cutoff frequency, $f_{H(total)}$, is **lower** than the $f_H$ of any individual stage. It is primarily determined by the stage with the lowest $f_H$.

The net result is **bandwidth shrinkage**. For 'n' identical stages with individual cutoff frequencies $f_L$ and $f_H$, the new overall cutoff frequencies are:
$$\boxed{\quad f_{L(n)} = \frac{f_L}{\sqrt{2^{1/n}-1}} \quad \text{and} \quad f_{H(n)} = f_H \sqrt{2^{1/n}-1} \quad}$$

#### Special Configurations

##### 1. Cascode Amplifier (CE-CB or CS-CG)
#cascode-amplifier
*   **Structure:** A Common Emitter (or Source) stage directly feeding into a Common Base (or Gate) stage.
*   **Advantage:** Achieves a **high gain** similar to a single CE stage but has a **much higher bandwidth**. It significantly reduces the [[Frequency Response of Amplifiers (Low-frequency and High-frequency analysis)|Miller effect]] because the voltage gain across the first stage is very small (~ -1), preventing the multiplication of the input capacitance.

##### 2. Darlington Pair (CC-CC)
#darlington-pair
*   **Structure:** A two-transistor configuration where the emitter of the first drives the base of the second, with their collectors connected. It functions as a single "super transistor".
*   **Advantage:** Provides an extremely high current gain and a very high input impedance.
    $$ \beta_{total} \approx \beta_1 \times \beta_2 $$
    $$ R_{in} \approx \beta_1 \beta_2 R_E $$
*   **Disadvantage:** Has a higher turn-on voltage ($V_{BE,on} \approx 1.4V$) and slower switching speed.

---
### Related Concepts
#related-concepts

> [[Amplifiers]]

[[Frequency Response of Amplifiers (Low-frequency and High-frequency analysis)]]
[[BJT Configurations]]
[[Feedback in Amplifiers]]