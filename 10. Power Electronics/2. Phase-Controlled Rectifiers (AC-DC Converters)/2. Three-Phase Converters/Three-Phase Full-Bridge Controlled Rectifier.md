---
tags:
  - power-electronics
  - rectifiers
  - three-phase
  - ac-dc-converter
  - industry-standard
created: 2025-10-15
aliases:
  - 3-Phase Full Converter
  - 6-Pulse Converter
  - Graetz Bridge Converter
  - B-6 Converter
subject: "[[Power Electronics]]"
parent:
  - "[[Phase-Controlled Rectifiers]]"
modified: 2026-08-04T10:40:08
---
### Three-Phase Full-Bridge Controlled Rectifier
#rectifier #three-phase #phase-control #six-pulse-converter

> The three-phase full-bridge controlled rectifier, ==also known as a **6-pulse converter**==, is the most common and important topology for medium to high-power ==AC-to-DC conversion==. It ==uses six thyristors (SCRs) to provide a controllable DC output with low ripple==. It does not require a neutral connection and eliminates the problem of DC components in the supply lines, making it the industry standard for applications like DC motor drives, HVDC systems, and industrial power supplies.

#### Circuit Operation
#circuit-operation 

![[Three-Phase Full-Bridge Controlled Rectifier (RLE Load).png]]

* **Structure**: Six SCRs are arranged in a bridge configuration. The ==upper group (T1, T3, T5)== are connected to phases A, B, and C respectively, and their cathodes are common. The ==lower group (T4, T6, T2)== are also connected to phases A, B, and C, and their anodes are common.
* **Conduction Principle**: ==At any given time, two SCRs must be conducting: one from the upper group and one from the lower group. The SCR from the upper group with the most positive instantaneous phase voltage will conduct, and the SCR from the lower group with the most negative instantaneous phase voltage will conduct==.
* **Conduction Period**: Each SCR conducts for **120°**. They are ==fired in the sequence T1 → T2 → T3 → T4 → T5 → T6 → T1, with a 60° interval between firings==.
* **Output Voltage**: The output DC voltage is composed of segments of the three-phase line-to-line voltages ($v_{ab}, v_{ac}, v_{bc}, v_{ba}, v_{ca}, v_{cb}$). Since there are six such segments per cycle, the ==fundamental ripple frequency at the output is $6f_s$==.

---
#### Waveforms and Equations (Continuous Conduction Mode)
#waveform #equation #ccm 

==Assuming a highly inductive load that maintains a constant, ripple-free DC current $I_d$.==
* **Firing Angle ($\alpha$)**: The firing angle is measured from the natural commutation point of the SCRs, which is the [[Three-Phase Plot.jpg|crossover point of the phase voltages]]. For T1, this is at $\omega t=30^\circ$. So T1 is fired at $30^\circ+\alpha$.
* **Average Output Voltage ($V_{dc}$)**: The ==output waveform consists of six identical pulses every cycle. The average voltage is found by integrating a line-to-line voltage segment over a 60° ($\pi/3$) period==.
    The resulting average voltage is a fundamental equation in power electronics:
    $$\boxed{\quad V_{dc} = \frac{3V_{mL}}{\pi}\cos\alpha \quad}$$
    where $V_{mL}$ is the peak value of the line-to-line source voltage ($V_{mL} = \sqrt{2} V_{L,rms} = \sqrt{3}V_{mp}$).
    The maximum DC voltage (ideal rectifier output) occurs at $\alpha=0$: $V_{d0} = \frac{3V_{mL}}{\pi}$

---
#### Rectifying vs. Inverting Modes (Two-Quadrant Operation)
#rectifier/inverter-mode #regenerative-braking

==The full converter can operate in two quadrants of the V-I plane, allowing for bidirectional power flow.==
1.  **Rectifying Mode ($0^\circ < \alpha < 90^\circ$)**
    *   $V_{dc}$ is positive.
    *   Power flows from the AC source to the DC load ($P = V_{dc}I_d > 0$).
    *   This is the standard mode for powering a DC motor or charging a battery.
2.  **Inverting Mode ($90^\circ < \alpha < 180^\circ$)**
    *   $V_{dc}$ becomes negative.
    *   If the load is active (e.g., a DC motor with reversed EMF, acting as a generator), it can supply power back to the AC grid. The current direction remains the same, but since the voltage has reversed, the power flow reverses ($P = V_{dc}I_d < 0$).
    *   This mode is crucial for applications like **regenerative braking** in DC motor drives.

---
#### Performance and Advantages
#rectifier/performance

| **Parameter**                  | **Formula / Value**                                  |
| ------------------------------ | ---------------------------------------------------- |
| **Lowest AC Harmonic**         | $5^{th}$ ($250\text{ Hz}$ for $50\text{ Hz}$ supply) |
| **Output Ripple Freq**         | $6f_s$ ($300\text{ Hz}$)                             |
| **Fundamental RMS ($I_{s1}$)** | $\frac{\sqrt{6}}{\pi} I_0 \approx 0.78 I_0$          |
| **Distortion Factor**          | $3/\pi \approx 0.955$                                |

> [!pyq]- PYQ : 2019
> ![[ee_2019#^q9]]

* **Pulse Number**: 6. This results in significantly lower output voltage ripple compared to [[Three-Phase Half-Wave Controlled Rectifier|3-pulse]] or single-phase converters.
* **Ripple Frequency**: $6 \times f_s$, making filtering easier.
* **No DC in Supply Current**: The input line currents are symmetrical and do not contain any DC component, thus avoiding transformer saturation problems.
* **Peak Inverse Voltage (PIV)**: The maximum voltage that any non-conducting SCR must block is the peak of the line-to-line voltage.
    $$\boxed{\quad \text{PIV} = V_{mL} \quad}$$
* **Transformer Utilization**: The TUF is much higher than for half-wave converters.
* **Power Factor**: ==The input power factor decreases as the firing angle $\alpha$ increases.== The converter draws both real and reactive power from the source.

---
### Related Concepts
#rectifier/related-concepts

> [[Three-Phase Half-Wave Controlled Rectifier]] (For comparison of principles and drawbacks)

[[Dual Converters (Circulating and Non-Circulating Current Modes)]] (Uses two 6-pulse converters for four-quadrant operation)
[[Effect of Source Inductance (Commutation Overlap)]] (A key practical consideration for 6-pulse converters)
[[Performance Metrics]]
