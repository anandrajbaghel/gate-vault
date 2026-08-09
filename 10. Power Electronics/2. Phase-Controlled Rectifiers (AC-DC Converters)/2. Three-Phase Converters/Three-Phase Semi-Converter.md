---
tags:
  - power-electronics
  - rectifiers
  - three-phase
  - ac-dc-converter
  - semi-converter
created: 2025-10-15
aliases:
  - 3-phase semi-converter
  - 3-phase half-controlled bridge
subject: "[[Power Electronics]]"
parent:
  - "[[Phase-Controlled Rectifiers]]"
modified: 2026-08-04T10:40:28
---
### Three-Phase Semi-Converter
#rectifier #three-phase #semi-converter

> The three-phase semi-converter, or half-controlled bridge, is a six-pulse rectifier that uses three thyristors and three diodes. It is a cost-effective alternative to the full converter for applications that do not require regenerative capabilities (inverter mode). Its key feature is an **inherent freewheeling action** that prevents the output voltage from becoming negative, which leads to a significantly improved input power factor.

#### Circuit Operation
*   **Structure**: The converter consists of a three-phase bridge where one half (e.g., the upper arms) contains thyristors (T1, T3, T5) and the other half (the lower arms) contains diodes (D2, D4, D6).
*   **Operation Principle (Continuous Conduction)**:
    1.  **Powering Period**: Conduction occurs through one SCR from the top group and one diode from the bottom group. For example, when T1 is fired, it conducts along with the diode in the most negative phase leg (e.g., D6). During this time, the output is connected to a line-to-line voltage (e.g., $v_{ab}$).
    2.  **Freewheeling Period**: As the AC cycle progresses, there are intervals where the load current finds an easier path by circulating through a top SCR and its corresponding bottom diode (e.g., T1 and D4). During this freewheeling period, the load is effectively disconnected from the source, and the output voltage across the load drops to zero.
*   **Key Effect**: This freewheeling action ensures the output voltage is always positive or zero, regardless of the firing angle $\alpha$.

---
#### Waveforms and Equations (Continuous Conduction Mode)
The output voltage waveform consists of segments of the line-to-line voltage when the converter is in a powering period, and is zero during the freewheeling periods. This behavior is similar to a full converter with a freewheeling diode.

*   **Average Output Voltage ($V_{dc}$)**: The presence of freewheeling action changes the integration limits compared to a full converter. The resulting average DC voltage is:
    $$\boxed{\quad V_{dc} = \frac{3V_{mL}}{2\pi}(1 + \cos\alpha) \quad}$$
    where $V_{mL}$ is the peak line-to-line voltage. The control range for $\alpha$ is from 0° to 180°.
    *   At $\alpha=0$, $V_{dc,max} = \frac{3V_{mL}}{\pi}$ (same as a full converter).
    *   At $\alpha=180^\circ$, $V_{dc,min} = 0$.

---
#### Key Features and Comparison with Full Converter

| Feature                 | Three-Phase Semi-Converter                                   | Three-Phase Full Converter                                   |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Components**          | 3 SCRs, 3 Diodes                                             | 6 SCRs                                                       |
| **Cost**                | Lower (fewer controlled devices, simpler firing circuit)     | Higher                                                       |
| **Operation Quadrants** | First Quadrant Only (Rectifying, $V_o \ge 0$, $I_o > 0$)       | First & Fourth Quadrants (Rectifying & Inverting)            |
| **Regenerative Braking**| Not Possible                                                 | Possible                                                     |
| **Freewheeling**        | Inherent due to the presence of diodes                       | Requires an external FWD for one-quadrant operation          |
| **Power Factor**        | **Significantly Better**, as the source current is zero during freewheeling intervals, reducing reactive power demand. | Poorer, especially at large firing angles.                   |
| **$V_{dc}$ Formula (CCM)**  | $\frac{3V_{mL}}{2\pi}(1 + \cos\alpha)$                                  | $\frac{3V_{mL}}{\pi}\cos\alpha$                                    |

#### Applications
The semi-converter is preferred in applications where:
*   Cost is a major consideration.
*   Regenerative braking or inverter operation is not needed.
*   A better power factor is desired without additional complexity.
Common applications include non-reversing DC motor drives, industrial power supplies, and high-current battery chargers.

---
### Related Concepts
#rectifier/related-concepts

> [[Three-Phase Full-Bridge Controlled Rectifier]] (For direct comparison of performance)

[[Single-Phase Semi-Converter]] (The single-phase equivalent of this topology)
[[Performance Metrics]]
[[freewheeling diode]]
