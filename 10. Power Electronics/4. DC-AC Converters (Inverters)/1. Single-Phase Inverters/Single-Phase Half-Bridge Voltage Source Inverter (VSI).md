---
tags:
  - power-electronics
  - inverters
  - dc-ac-converters
  - vsi
  - half-bridge-inverter
created: 2025-10-15
aliases:
  - Half-Bridge Inverter
  - Two-Level Inverter
subject: "[[Power Electronics]]"
parent:
  - DC-AC Converters (Inverters)
modified: 2026-08-04T10:28:37
---
### Single-Phase Half-Bridge Voltage Source Inverter (VSI)
#power-electronics #inverter #vsi #half-bridge-inverter

> The **single-phase half-bridge inverter** is the most basic topology of a Voltage Source Inverter (VSI). It uses <u>two controlled switches to generate a two-level AC output voltage from a DC input</u>. While it is simpler than a [[Single-Phase Full-Bridge Voltage Source Inverter (VSI)|full-bridge inverter]], <u>it requires a center-tapped DC source and produces a lower output voltage</u>. It serves as a fundamental building block for understanding more complex inverter circuits.

#### Circuit Topology and Components
#half-bridge-inverter/topology

![[Circuit - Single-Phase Half-Bridge Voltage Source Inverter (VSI).png]]

The circuit requires a **three-wire DC source**, which is typically created by connecting two large capacitors (C1 and C2) in series across the DC supply voltage, $V_{dc}$. The junction between the capacitors provides the neutral or reference point.
* **Two Switches (S1, S2):** Such as [[MOSFET|MOSFETs]] or [[IGBT|IGBTs]].
* **Two Anti-parallel Diodes (D1, D2):** Also known as [[freewheeling diode|freewheeling diodes]], essential for inductive loads.
* **Split DC Source:** The total voltage $V_{dc}$ is split, providing $+V_{dc}/2$ and $-V_{dc}/2$ with respect to the neutral point.

The load is connected between the midpoint of the inverter leg (point A) and the neutral point (N).

---
#### Principle of Operation (Resistive Load)
#half-bridge-inverter/operation

For a purely resistive load, the operation is straightforward and involves two modes per cycle. The switches S1 and S2 are operated with a 50% duty cycle, and their gate signals are complementary (when S1 is ON, S2 is OFF, and vice-versa).

*   **Mode 1 ($0 < t \le T/2$):** Switch **S1 is ON**, and S2 is OFF. Point A is connected to $+V_{dc}/2$. The output voltage is $v_o = +V_{dc}/2$.
*   **Mode 2 ($T/2 < t \le T$):** Switch **S2 is ON**, and S1 is OFF. Point A is connected to $-V_{dc}/2$. The output voltage is $v_o = -V_{dc}/2$.

This produces a square wave output voltage of amplitude $V_{dc}/2$. The current waveform is also a square wave, in phase with the voltage.

---
#### Operation with Inductive (RL) Load
#inductive-load #freewheeling-diodes

For an RL load, the current ($i_o$) lags the voltage ($v_o$). The anti-parallel diodes are crucial for providing a path for the inductor current when it flows against the applied voltage. This results in four operating intervals per cycle.

*   **Interval 1:** S1 is turned ON. Voltage is $+V_{dc}/2$. The current is initially negative and flows through diode **D1** back to the source. It then reverses and flows through **S1**.
*   **Interval 2:** At $T/2$, S1 is turned OFF and S2 is turned ON. The output voltage becomes $-V_{dc}/2$. However, due to the inductor's stored energy, the current is still positive and cannot change direction instantly. It finds a path through diode **D2**, flowing back to the source.
*   **Interval 3:** The current decays to zero and reverses direction. It now flows through **S2**.
*   **Interval 4:** At $T$, S2 is turned OFF and S1 is turned ON. The output voltage becomes $+V_{dc}/2$, but the current is still negative. It freewheels through diode **D1**.

The diodes allow for the transfer of reactive power between the load and the DC source.

---
#### Performance Analysis (Square Wave Operation)
#performance-metrics #harmonics

*   **RMS Output Voltage:** For a square wave with amplitude $A$, the RMS value is simply $A$.
    $$V_{o,rms} = \frac{V_{dc}}{2}$$
*   **Fourier Series of Output Voltage:**
    $$v_o(t) = \sum_{n=1,3,5,...}^{\infty} \frac{4(V_{dc}/2)}{n\pi} \sin(n\omega_o t) = \sum_{n=1,3,5,...}^{\infty} \frac{2V_{dc}}{n\pi} \sin(n\omega_o t)$$
*   **RMS Value of the Fundamental Component:**
    $$\boxed{\quad V_{o1} = \frac{V_{o1,peak}}{\sqrt{2}} = \frac{2V_{dc}/\pi}{\sqrt{2}} = \frac{\sqrt{2}V_{dc}}{\pi} \approx 0.45 V_{dc} \quad}$$
*   **Total Harmonic Distortion (THD):** For a square wave, the THD is constant.
    $$THD = \sqrt{\frac{V_{o,rms}^2 - V_{o1}^2}{V_{o1}^2}} = \sqrt{\left(\frac{\pi^2}{8}\right) - 1} \approx 48.3\%$$

---
### Related Concepts
#half-bridge-inverter/related-concepts

> [[Single-Phase Full-Bridge Voltage Source Inverter (VSI)]]

[[Principle of Operation of an Inverter]]
[[Pulse Width Modulation (PWM) Techniques]]
[[Fourier Series]]
[[Performance Parameters of Inverters]]