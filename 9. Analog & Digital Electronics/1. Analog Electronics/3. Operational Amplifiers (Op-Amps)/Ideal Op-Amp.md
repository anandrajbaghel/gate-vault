---
tags:
  - analog-electronics
  - amplifiers
  - op-amp
  - ideal-op-amp
  - gate-ee
created: 2025-10-15
aliases:
  - Ideal Op-Amp
  - Op-Amp Golden Rules
  - Ideal Op-Amp Characteristics and Golden Rules
  - Ideal Op-Amp Assumptions
subject: "[[Analog & Digital Electronics]]"
parent: Operational Amplifiers
modified: 2026-07-23T12:22:15
---
### Ideal Op-Amp Characteristics and Golden Rules
#op-amp #ideal-model

> An **operational amplifier (Op-Amp)** is a high-gain, direct-coupled differential voltage amplifier, typically with a single-ended output. It is a fundamental building block in analog electronics. The **ideal op-amp model** simplifies analysis by assuming perfect characteristics, which provides a very accurate approximation for most applications where the op-amp is used with negative feedback.

#### Characteristics of an Ideal Op-Amp
#ideal-characteristics

1.  **Infinite Open-Loop Voltage Gain ($A_{OL} \to \infty$):**
    *   **Implication:** For the output voltage ($V_{out}$) to be finite in a linear negative feedback circuit, the voltage difference between the input terminals must be infinitesimally small. $v_d = v_{out} / A_{OL} \to 0$. This is the basis for the "virtual short" concept.

2.  **Infinite Input Impedance ($R_{in} \to \infty$):**
    *   **Implication:** The op-amp draws no current from the input source circuit. $i_+ = 0$ and $i_- = 0$.

3.  **Zero Output Impedance ($R_{out} = 0$):**
    *   **Implication:** The op-amp acts as a perfect voltage source. Its output voltage is independent of the load connected to it.

4.  **Infinite Bandwidth ($BW \to \infty$):**
    *   **Implication:** The gain of the op-amp is constant for all frequencies, from DC to infinity. There are no phase shifts or limitations due to frequency.

5.  **Infinite Common-Mode Rejection Ratio ($CMRR \to \infty$):**
    *   **Implication:** The op-amp perfectly rejects any common-mode signal and only amplifies the differential signal. $A_c = 0$.

6.  **Zero Offset Voltage & Infinite Slew Rate:**
    *   **Implication:** The output is exactly zero when the inputs are equal, and the output voltage can change instantaneously.

#### The "Golden Rules" for Analysis (with Negative Feedback)
#golden-rules #virtual-short #virtual-ground

For any op-amp circuit with **negative feedback** that is operating in its **linear region**, two simplifying assumptions, known as the Golden Rules, can be made. These rules are a direct consequence of the ideal characteristics.

*   **Rule 1: No current flows into the input terminals.**
    This is due to the infinite input impedance.
    $$\boxed{\quad i_+ = 0 \quad \text{and} \quad i_- = 0 \quad}$$

*   **Rule 2: The differential input voltage is zero.**
    This is due to the infinite open-loop gain, which forces the inverting and non-inverting terminals to be at the same potential to maintain a non-saturated output.
    $$\boxed{\quad v_d = v_+ - v_- = 0 \implies v_+ = v_- \quad}$$
    This leads to two important concepts:
    *   **Virtual Short:** The terminals $v_+$ and $v_-$ are at the same voltage, as if they were shorted together, but no current flows between them.
    *   **Virtual Ground:** If the non-inverting terminal (+) is connected to ground (0V), then the inverting terminal (-) is also at 0V, even though it is not physically connected to ground.

#### Op-Amp Operation Modes

*   **Open-Loop Operation:** Without a feedback path, the op-amp acts as a **comparator**. Due to the extremely high gain, any small difference in input voltage will cause the output to swing to its maximum positive or negative saturation levels ($+V_{sat}$ or $-V_{sat}$). The golden rules do not apply.
    $$V_{out} = \begin{cases} +V_{sat} & \text{if } v_+ > v_- \\ -V_{sat} & \text{if } v_- > v_+ \end{cases}$$

*   **Closed-Loop Operation (Negative Feedback):** When a feedback path exists from the output to the inverting (-) input, the circuit is stabilized. The golden rules apply, and the op-amp functions as a linear device for amplification, filtering, etc.

---
### Related Concepts
#related-concepts

> [[Op-Amp Applications - Inverting and Non-inverting Amplifiers]]

[[Differential Amplifiers]]
[[Feedback in Amplifiers]]
[[Comparators and Schmitt Triggers]]
[[Practical Op-Amp Characteristics]]