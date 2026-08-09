---
tags:
  - mosfet-amplifier
  - analog-electronics
  - common-drain
  - source-follower
  - voltage-buffer
created: 2025-09-08
aliases:
  - CD Amplifier
  - Source Follower
subject: "[[Analog & Digital Electronics]]"
parent: "[[MOSFET Amplifiers]]"
modified: 2026-08-04T09:21:15
---
### Common Drain (CD) Amplifier / Source Follower
#common-drain-amplifier #source-follower #voltage-buffer #impedance-matching

> The Common Drain (CD) amplifier, almost always called the **Source Follower**, is a MOSFET configuration where the input signal is applied to the gate, the output is taken from the source, and the drain is common (AC ground). It is named the "source follower" because the output voltage at the source terminal closely follows the input voltage at the gate, with a nearly unity, non-inverting gain.

Its primary application is as a **voltage buffer**, used for impedance matching between a high-impedance source and a low-impedance load. It is the MOSFET equivalent of the [[Common Collector Amplifier]].

#### Key Characteristics
*   **Voltage Gain ($A_v$)**: Slightly less than 1.
*   **Current Gain ($A_i$)**: High.
*   **Input Impedance ($R_{in}$)**: Very High.
*   **Output Impedance ($R_{out}$)**: Low.
*   **Phase Shift**: 0° (non-inverting).

---
#### Small-Signal Analysis
#small-signal-analysis
The amplifier is biased in the **saturation region** and analyzed using its small-signal model.

*   **Voltage Gain ($A_v$)**:
    The gain is always positive and slightly less than 1.
    $$A_v = \frac{g_m(R_S \parallel r_o)}{1 + g_m(R_S \parallel r_o)}$$
    Ignoring the typically large output resistance $r_o$, the gain simplifies to a very common form:
    $$\boxed{\quad A_v \approx \frac{g_m R_S}{1 + g_m R_S} \quad}$$
    Since the denominator is always slightly larger than the numerator, $A_v < 1$.

*   **Input Impedance ($R_{in}$)**:
    Similar to the common source, the input impedance looking into the gate is nearly infinite. The overall input impedance is set by the gate biasing resistors.
    $$\boxed{\quad R_{in} = R_G \quad}$$
    where $R_G$ is typically the parallel combination of the voltage divider resistors.

*   **Output Impedance ($R_{out}$)**:
    The impedance looking back into the source terminal is low. It is the parallel combination of the source resistor $R_S$ and the impedance looking into the source of the MOSFET, which is approximately $1/g_m$.
    $$\boxed{\quad R_{out} = R_S \parallel \frac{1}{g_m} \parallel r_o \approx R_S \parallel \frac{1}{g_m} \quad}$$
    Since $1/g_m$ is usually a small resistance, the overall output impedance is low.

---
#### Application: The Voltage Buffer
The Source Follower is an excellent voltage buffer for two main reasons:
1.  **High Input Impedance**: It draws almost no current from the input source, preventing the source's voltage from dropping (i.e., it doesn't "load" the source).
2.  **Low Output Impedance**: It can supply a relatively large current to a low-impedance load without a significant internal voltage drop.

This allows it to efficiently connect a weak, high-impedance source to a demanding, low-impedance load, ensuring maximum voltage transfer.

---
### Related Concepts
#related-concepts

> [[MOSFET Amplifiers]] (Parent category)

[[Common Source Amplifier]]
[[Common Gate Amplifier]]
[[Small Signal Analysis]] (The method used for analysis)
[[Impedance Matching]] (The primary application)
[[Common Collector Amplifier]] (The BJT equivalent, also a buffer)