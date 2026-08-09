---
tags:
  - mosfet-amplifier
  - analog-electronics
  - common-gate
  - current-buffer
  - rf-amplifier
created: 2025-09-08
aliases:
  - CG Amplifier
  - Common-Gate Amplifier
subject: "[[Analog & Digital Electronics]]"
parent: "[[MOSFET Amplifiers]]"
modified: 2026-08-04T09:21:47
---
### Common Gate (CG) Amplifier
#common-gate-amplifier #current-buffer #rf-amplifier

> The Common Gate (CG) amplifier is a MOSFET configuration where the input signal is applied to the source, the output is taken from the drain, and the gate is common to both (AC ground). While it does not provide current gain, it offers a high, non-inverting voltage gain. Its distinguishing characteristics are a very low input impedance and a high output impedance.

The CG amplifier is the MOSFET equivalent of the [[Common Base Amplifier]] and is primarily used as a current buffer or for high-frequency applications.

#### Basic Configuration
The gate is biased at a constant DC voltage, making it an AC ground. The input signal drives the source terminal, and the amplified output is taken from the drain. The MOSFET must be biased in the **saturation region**.

---
#### Small-Signal Analysis
#small-signal-analysis
The amplifier's performance is analyzed using the small-signal model.

*   **Voltage Gain ($A_v$)**:
    The voltage gain is high and, unlike the common source, it is **non-inverting**. The input voltage is $v_{in} = v_s$. Since the gate is at AC ground, $v_{gs} = v_g - v_s = 0 - v_{in} = -v_{in}$. The drain current is $i_d = g_m v_{gs} = -g_m v_{in}$. The output voltage is $v_{out} = -i_d (R_D \parallel r_o)$.
    $$v_{out} = -(-g_m v_{in})(R_D \parallel r_o) = g_m v_{in} (R_D \parallel r_o)$$
    $$\boxed{\quad A_v = \frac{v_{out}}{v_{in}} = g_m (R_D \parallel r_o) \quad}$$
    If $r_o$ is large, $A_v \approx g_m R_D$.

*   **Input Impedance ($R_{in}$)**:
    The input impedance is the impedance seen looking into the source terminal. This impedance is very low, dominated by the transconductance.
    $$\boxed{\quad R_{in} \approx \frac{1}{g_m} \quad}$$
    This low input impedance is a key feature and limitation of the CG configuration.

*   **Output Impedance ($R_{out}$)**:
    The output impedance is the impedance seen looking into the drain terminal. With the input source at the emitter turned off, the impedance is high.
    $$\boxed{\quad R_{out} = R_D \parallel r_o \quad}$$
    If a source resistance $R_{sig}$ is present, the output impedance is slightly increased to $R_{out} = R_D \parallel [r_o + (1+g_m r_o)R_{sig}]$. However, the simpler formula is usually sufficient.

*   **Current Gain ($A_i$)**:
    The input current is $i_{in} = i_s$ and the output current is $i_{out}=i_d$. Since $i_d = i_s$ (ignoring body effect), the current gain is approximately unity.
    $$\boxed{\quad A_i = \frac{i_{out}}{i_{in}} = \frac{i_d}{i_s} \approx 1 \quad}$$

---
#### Applications
The unique properties of the CG amplifier make it suitable for specific roles:
1.  **Current Buffer**: Its unity current gain, low input impedance, and high output impedance make it an excellent current buffer. It can efficiently accept a current signal from a low-impedance source and deliver it to a high-impedance load.
2.  **High-Frequency (RF) Amplifier**: The grounded gate acts as an electrostatic shield between the input (source) and output (drain). This drastically reduces the capacitive coupling between them, mitigating the [[Miller Effect]] that limits the high-frequency performance of the [[Common Source Amplifier]]. This gives the CG amplifier a superior frequency response.
3.  **Cascode Amplifier**: A CG amplifier is often used as the second stage in a [[Cascode Amplifier]] configuration, stacked on top of a CS stage. This combines the high transconductance of the CS stage with the good frequency response and high output impedance of the CG stage, resulting in an amplifier with very high gain and bandwidth.

---
### Related Concepts
#related-concepts

> [[MOSFET Amplifiers]] (Parent category)

[[Common Source Amplifier]]
[[Common Drain Amplifier]]
[[Small Signal Analysis]] (The method used for analysis)
[[Common Base Amplifier]] (The BJT equivalent)
[[Cascode Amplifier]] (A key application)
[[Miller Effect]] (A problem that the CG configuration avoids)