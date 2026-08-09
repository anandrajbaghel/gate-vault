---
tags:
  - bjt-amplifier
  - analog-electronics
  - common-base
  - current-buffer
  - rf-amplifier
created: 2025-09-08
aliases:
  - CB Amplifier
  - Common-Base Amplifier
subject: "[[Analog & Digital Electronics]]"
parent: "[[BJT Amplifiers]]"
modified: 2026-08-04T09:20:45
---
### Common Base (CB) Amplifier
#common-base-amplifier #current-buffer #rf-amplifier

> The Common Base (CB) amplifier is a BJT configuration where the input signal is applied to the emitter, the output is taken from the collector, and the base is the common terminal, typically held at AC ground. While it does not provide current gain (its current gain is approximately 1), it offers a high, non-inverting voltage gain. Its unique characteristics of very low input impedance and high output impedance make it suitable for specific applications like current buffering and high-frequency amplification.

#### Key Characteristics
* **Voltage Gain ($A_v$)**: High and non-inverting.
* **Current Gain ($A_i$)**: Approximately unity ($\alpha$, which is always < 1).
* **Input Impedance ($R_{in}$)**: Very low.
* **Output Impedance ($R_{out}$)**: High.
* **Phase Shift**: 0° (the output is in phase with the input).

---
#### Small-Signal Analysis
The analysis uses the BJT's small-signal model. The T-model is often very intuitive for the CB configuration, but the hybrid-$\pi$ model is also applicable.

* **Voltage Gain ($A_v$)**:
    The gain is similar in magnitude to the Common Emitter amplifier but is non-inverting. The input voltage is applied at the emitter, so $v_{in} = v_e = -v_{be}$. The collector current is $i_c = g_m v_{be} = -g_m v_{in}$. The output voltage is $v_{out} = -i_c(R_C \parallel r_o) = g_m v_{in} (R_C \parallel r_o)$.
    $$\boxed{\quad A_v = \frac{v_{out}}{v_{in}} = g_m (R_C \parallel r_o) \quad}$$
    If the Early effect is negligible ($r_o \to \infty$), the gain is $A_v \approx g_m R_C$.

* **Input Impedance ($R_{in}$)**:
    The input impedance is the impedance seen looking into the emitter. This is notoriously low, equal to the small dynamic emitter resistance $r_e$.
    $$\boxed{\quad R_{in} = R_E \parallel r_e \approx r_e \quad}$$
    where $r_e = \frac{V_T}{I_{EQ}} = \frac{\alpha}{g_m}$. This low input impedance is a major characteristic of the CB amplifier.

* **Output Impedance ($R_{out}$)**:
    The output impedance, looking into the collector, is high. It is the parallel combination of the collector resistor $R_C$ and the resistance looking into the collector of the BJT, which is approximately $r_o$.
    $$\boxed{\quad R_{out} = R_C \parallel r_o \quad}$$

* **Current Gain ($A_i$)**:
    The intrinsic current gain of the transistor in this configuration is $i_c / i_e = \alpha$. Since $\alpha$ is always slightly less than 1, the amplifier provides no current gain. This makes it a good **current buffer**, as it faithfully transfers an input current from a low-impedance source to a high-impedance output.

#### Applications
1. **Current Buffer**: The CB amplifier is ideal for transferring a current signal from a low-impedance source to a high-impedance load. Its low input impedance accepts the current efficiently, and its high output impedance delivers it effectively to the next stage.

2. **High-Frequency Amplifier**: This is a very important application. The Common Emitter amplifier suffers from the [[Miller Effect]], where the base-collector capacitance ($C_{bc}$) is amplified, severely limiting its high-frequency performance. In the CB configuration, the grounded base acts as a shield between the input (emitter) and output (collector). This prevents the Miller multiplication of $C_{bc}$, resulting in a much better frequency response.

3. **Cascode Amplifier**: A CB stage is often used following a CE stage to form a [[Cascode Amplifier]]. This configuration combines the high input impedance and transconductance of the CE stage with the excellent high-frequency performance and high output impedance of the CB stage.

---
### Related Concepts
#related-concepts

> [[BJT Amplifiers]] (Parent category)

[[Common Emitter Amplifier]]
[[Common Collector Amplifier]]
[[Small Signal Analysis]] (The method used for analysis)
[[Common Gate Amplifier]] (The MOSFET equivalent)
[[Cascode Amplifier]] (A key application of the CB stage)
[[Miller Effect]] (A problem that the CB configuration avoids)