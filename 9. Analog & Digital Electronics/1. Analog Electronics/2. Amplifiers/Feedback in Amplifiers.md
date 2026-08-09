---
tags:
  - analog-electronics
  - amplifiers
  - feedback
  - control-systems
  - gate-ee
created: 2025-10-15
aliases:
  - Negative Feedback
  - Feedback Topologies
  - Feedback Amplifier
  - Voltage-Series Feedback (Series-Shunt) in Amplifiers
  - Current-Series Feedback (Series-Series) in Amplifiers
  - Voltage-Shunt Feedback (Shunt-Shunt) in Amplifiers
  - Current-Shunt Feedback (Shunt-Series) in Amplifiers
subject: "[[Analog & Digital Electronics]]"
parent: Amplifiers
modified: 2026-08-04T09:41:41
---
### Feedback in Amplifiers
#feedback

> **Feedback** is the process of taking a fraction of an amplifier's output signal and combining it with the input signal. In **negative feedback**, the feedback signal is subtracted from the input, which stabilizes the amplifier's characteristics at the cost of reduced gain. It is one of the most important concepts in analog circuit design.

#### The General Feedback Structure

An amplifier with negative feedback consists of a basic amplifier with open-loop gain $A$ and a feedback network with feedback factor $\beta$.

The gain of the amplifier with feedback, $A_f$, is given by:
$$\boxed{\quad A_f = \frac{A}{1 + A\beta} \quad}$$
*   **Open-Loop Gain ($A$):** The gain of the amplifier without feedback. It is generally large and can vary with temperature or device parameters.
*   **Feedback Factor ($\beta$):** The fraction of the output signal fed back to the input by the feedback network. It is typically determined by stable passive components (resistors, capacitors).
*   **Loop Gain ($A\beta$):** The total gain around the feedback loop.
*   **Desensitivity Factor ($1 + A\beta$):** The amount of feedback. The larger this factor, the more pronounced the effects of feedback.

If the loop gain is very large ($A\beta \gg 1$), the closed-loop gain becomes:
$$A_f \approx \frac{A}{A\beta} = \frac{1}{\beta}$$
This is a powerful result: the overall gain becomes almost entirely dependent on the stable, precise feedback network ($\beta$) and independent of the amplifier's variable gain ($A$).

#### Effects of Negative Feedback
#negative-feedback-effects

1.  **Gain Desensitivity:** The gain of the feedback amplifier is stabilized against variations in the open-loop gain A.
2.  **Bandwidth Extension:** The gain-bandwidth product of an amplifier is approximately constant. By reducing the gain, negative feedback increases the bandwidth. The new lower ($f_{Lf}$) and upper ($f_{Hf}$) cutoff frequencies are:
    $$\boxed{\quad f_{Lf} = \frac{f_L}{1+A_{mid}\beta} \quad \text{and} \quad f_{Hf} = f_H (1+A_{mid}\beta) \quad}$$
3.  **Reduction of Distortion and Noise:** Feedback reduces distortion and noise generated within the amplifier by the factor $(1 + A\beta)$.
4.  **Modification of Input and Output Impedances:** This is a key feature used to create ideal amplifier types.

#### Identifying Feedback Topologies
The topology is identified by how the output is **sampled** and how the feedback signal is **mixed** with the input.
*   **Sampling:**
    *   **Voltage Sampling (Shunt):** The feedback network is connected in **parallel** with the output.
    *   **Current Sampling (Series):** The feedback network is connected in **series** with the output (output current flows through it).
*   **Mixing:**
    *   **Series Mixing:** The feedback signal is connected in **series** with the input signal source.
    *   **Shunt Mixing:** The feedback signal is connected in **parallel** with the input signal source.

#### The Four Basic Topologies

The effect on input ($R_i$) and output ($R_o$) resistance depends on the mixing and sampling methods.
*   Series mixing **increases** input resistance.
*   Shunt mixing **decreases** input resistance.
*   Voltage sampling **decreases** output resistance.
*   Current sampling **increases** output resistance.
The factor of increase or decrease is the desensitivity factor $(1 + A\beta)$.

##### 1. Voltage-Series Feedback (Series-Shunt)
*   **Description:** Samples output voltage, mixes in series with input voltage.
*   **Ideal for:** A **Voltage Amplifier**.
*   **Input Resistance:** Increases. $\boxed{R_{if} = R_i (1 + A_v\beta)}$
*   **Output Resistance:** Decreases. $\boxed{R_{of} = \frac{R_o}{1 + A_v\beta}}$

##### 2. Current-Series Feedback (Series-Series)
*   **Description:** Samples output current, mixes in series with input voltage.
*   **Ideal for:** A **Transconductance Amplifier** ($I_{out}/V_{in}$).
*   **Input Resistance:** Increases. $\boxed{R_{if} = R_i (1 + A_{gm}\beta)}$
*   **Output Resistance:** Increases. $\boxed{R_{of} = R_o (1 + A_{gm}\beta)}$

##### 3. Voltage-Shunt Feedback (Shunt-Shunt)
*   **Description:** Samples output voltage, mixes in shunt with input current.
*   **Ideal for:** A **Transresistance Amplifier** ($V_{out}/I_{in}$).
*   **Input Resistance:** Decreases. $\boxed{R_{if} = \frac{R_i}{1 + A_{rm}\beta}}$
*   **Output Resistance:** Decreases. $\boxed{R_{of} = \frac{R_o}{1 + A_{rm}\beta}}$

##### 4. Current-Shunt Feedback (Shunt-Series)
*   **Description:** Samples output current, mixes in shunt with input current.
*   **Ideal for:** A **Current Amplifier**.
*   **Input Resistance:** Decreases. $\boxed{R_{if} = \frac{R_i}{1 + A_i\beta}}$
*   **Output Resistance:** Increases. $\boxed{R_{of} = R_o (1 + A_i\beta)}$

| Topology | Sampled Signal | Mixed Signal | Input Z | Output Z | Ideal Amplifier |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Voltage-Series** | Voltage (Shunt) | Voltage (Series) | Increases | Decreases | Voltage Amp |
| **Current-Series** | Current (Series)| Voltage (Series) | Increases | Increases | Transconductance |
| **Voltage-Shunt** | Voltage (Shunt) | Current (Shunt) | Decreases | Decreases | Transresistance |
| **Current-Shunt** | Current (Series)| Current (Shunt) | Decreases | Increases | Current Amp |

---
### Related Concepts
#related-concepts

> [[Amplifiers]]

[[Waveform Generation - Sinusoidal Oscillators (RC Phase Shift, Wien Bridge)]] (an application of positive feedback)
[[Control Systems]]
[[Frequency Response of Amplifiers (Low-frequency and High-frequency analysis)]]
[[Ideal Op-Amp]]