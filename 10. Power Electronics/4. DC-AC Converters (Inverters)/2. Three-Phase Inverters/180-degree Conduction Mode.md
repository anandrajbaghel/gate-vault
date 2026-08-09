---
tags:
  - power-electronics
  - inverters
  - vsi
  - three-phase
  - conduction-modes
  - motor-drives
created: 2025-10-15
aliases:
  - 180 Degree Mode
  - Six-Step Inverter Operation
subject: "[[Power Electronics]]"
parent: "[[Three-Phase Voltage Source Inverter (VSI)]]"
modified: 2026-08-04T09:04:54
---
### 180-degree Conduction Mode
#power-electronics #inverter #three-phase #conduction-modes

The **180-degree conduction mode** is the most common method for operating a three-phase voltage source inverter. In this mode, each of the six switches conducts for an electrical angle of 180°. At any given time, three switches are ON, ensuring a continuous path for current and maximizing the output voltage. The resulting line-to-line voltage waveform is a "six-step" or quasi-square wave.

#### Switching States and Waveforms
#switching-sequence #inverter-waveforms

The switches are triggered in the sequence S1, S2, S3, S4, S5, S6, with a 60° phase difference between consecutive trigger signals. The table below shows which switches are conducting during each 60° interval, along with the resulting line and phase voltages for a balanced star-connected load.

Let's define the pole voltages ($v_{AN_0}, v_{BN_0}, v_{CN_0}$) as the voltage of the output terminals A, B, and C with respect to the negative DC rail 'N₀'.
*   If the upper switch (e.g., S1) is ON, the pole voltage is $+V_{dc}$.
*   If the lower switch (e.g., S4) is ON, the pole voltage is $0$.

The line-to-line voltage is simply the difference between pole voltages, e.g., $v_{AB} = v_{AN_0} - v_{BN_0}$.
The phase voltage (for a star load) is $v_{AN} = \frac{2v_{AN_0} - v_{BN_0} - v_{CN_0}}{3}$.

| Interval      | Switches ON | $v_{AN_0}$ | $v_{BN_0}$ | $v_{CN_0}$ | $v_{AB}$ | $v_{AN}$                 |
| :------------ | :---------- | :--------- | :--------- | :--------- | :------- | :----------------------- |
| 0°-60°        | S5, S6, S1  | $V_{dc}$   | $0$        | $V_{dc}$   | $+V_{dc}$  | $+V_{dc}/3$              |
| 60°-120°      | S6, S1, S2  | $V_{dc}$   | $0$        | $0$        | $+V_{dc}$  | $+2V_{dc}/3$             |
| 120°-180°     | S1, S2, S3  | $V_{dc}$   | $V_{dc}$   | $0$        | $0$        | $+V_{dc}/3$              |
| 180°-240°     | S2, S3, S4  | $0$        | $V_{dc}$   | $0$        | $-V_{dc}$  | $-V_{dc}/3$              |
| 240°-300°     | S3, S4, S5  | $0$        | $V_{dc}$   | $V_{dc}$   | $-V_{dc}$  | $-2V_{dc}/3$             |
| 300°-360°     | S4, S5, S6  | $0$        | $0$        | $V_{dc}$   | $0$        | $-V_{dc}/3$              |

---
#### Performance Analysis
#performance-metrics #rms-calculation #harmonics

##### Line-to-Line Voltage ($v_{AB}$)
The line voltage waveform is a quasi-square wave with levels $+V_{dc}$, $0$, and $-V_{dc}$.
*   **RMS Value:** We can calculate the RMS value by integrating over one full period. Due to symmetry, we can integrate from 0 to $\pi$ and multiply by 2.
    $$\begin{align}
    V_{L,rms} &= \left(\frac{1}{\pi} \int_0^{\pi} v_{AB}^2(\omega t) d(\omega t)\right)^{1/2} = \left(\frac{1}{\pi} \left[ \int_0^{2\pi/3} V_{dc}^2 d(\omega t) + \int_{2\pi/3}^{\pi} 0^2 d(\omega t) \right]\right)^{1/2} \\
    &= \left(\frac{V_{dc}^2}{\pi} \cdot \frac{2\pi}{3}\right)^{1/2} = V_{dc}\sqrt{\frac{2}{3}} \approx 0.816 V_{dc}
    \end{align}$$
*   **Fundamental RMS Value:** From Fourier analysis, the peak value of the fundamental component is $V_{L1,peak} = \frac{4V_{dc}}{\pi} \sin(\frac{\pi}{3}) = \frac{2\sqrt{3}}{\pi}V_{dc}$.
    $$\boxed{\quad V_{L1, rms} = \frac{V_{L1,peak}}{\sqrt{2}} = \frac{\sqrt{6}}{\pi}V_{dc} \approx 0.78 V_{dc} \quad}$$
*   **Harmonics:** The line voltage contains only non-triplen odd harmonics ($n=6k \pm 1$), i.e., 5th, 7th, 11th, 13th, etc.

##### Phase Voltage ($v_{AN}$)
The phase voltage for a star-connected load is a six-step waveform.
*   **RMS Value:**
    $$\boxed{\quad V_{ph,rms} = \frac{V_{L,rms}}{\sqrt{3}} = \frac{V_{dc}\sqrt{2/3}}{\sqrt{3}} = \frac{\sqrt{2}}{3}V_{dc} \approx 0.471 V_{dc} \quad}$$
*   **Fundamental RMS Value:**
    $$\boxed{\quad V_{ph1, rms} = \frac{V_{L1,rms}}{\sqrt{3}} = \frac{\sqrt{2}}{\pi}V_{dc} \approx 0.45 V_{dc} \quad}$$
*   **Harmonics:** The phase voltage contains the same harmonics as the line voltage, but **it also contains triplen harmonics** (3rd, 9th, 15th, etc.). These are cancelled in the line-to-line measurement.

---
### Related Concepts
#conduction-modes/related-concepts

> [[Three-Phase Voltage Source Inverter (VSI)]]

[[120-degree Conduction Mode]]
[[Performance Parameters of Inverters]]
[[Pulse Width Modulation (PWM) Techniques]]
[[AC Motor Drives]]