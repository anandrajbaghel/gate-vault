---
tags:
  - power-electronics
  - rectifiers
  - ac-dc-converter
  - semi-converter
created: 2025-10-15
aliases:
  - Half-controlled bridge rectifier
  - Asymmetrical bridge converter
  - One-quadrant bridge converter
  - Single-Phase half-Controlled (Semi-Converter) Bridge
  - 1-phase semi-converter
subject: "[[Power Electronics]]"
parent:
  - "[[Phase-Controlled Rectifiers]]"
modified: 2026-08-04T10:29:19
---
### Single-Phase Semi-Converter
#rectifier #semi-converter #ac-dc-converter

> The single-phase semi-converter, <u>or half-controlled bridge rectifier, is an asymmetrical bridge converter</u> that <u>uses two thyristors (SCRs) and two diodes</u>. Its key characteristic is its **inherent freewheeling capability**, which prevents the output voltage from becoming negative. This results in an improved [[Performance Metrics#Input Power Factor (PF)|input power factor]] and <u>one-quadrant operation</u> (rectifying mode only) compared to a fully-controlled converter. It is a lower-cost alternative for applications where inverter operation (power regeneration) is not required.

![[Single-Phase Semi-Converter (RL Load).png]]

---
#### Circuit Operation (with RL Load)
#circuit-operation #rl-load 

Assuming a continuous load current and the standard configuration (T1, T2 in the top arms; D1, D2 in the bottom arms).
*   **Powering Period ($\alpha \to \pi$)**: During the positive half-cycle, T1 is fired at $\omega t = \alpha$. The current flows from the source, through T1, the load, and back to the source through D2. During this interval, the load is connected to the source, so $v_o = v_s$.
*   **Freewheeling Period ($\pi \to \pi+\alpha$)**: At $\omega t = \pi$, the source voltage reverses. The inductive load tries to maintain current flow. The current finds a path through the load and the now forward-biased diode D1, "freewheeling" through the T1-D1 pair. The output terminals are effectively shorted, so $v_o = 0$. The load is disconnected from the source.
*   **Powering Period ($\pi+\alpha \to 2\pi$)**: During the negative half-cycle, T2 is fired at $\omega t = \pi+\alpha$. Current flows from the source through T2, the load, and D1. The output voltage is $v_o = -v_s = V_m|\sin(\omega t)|$.
*   **Freewheeling Period ($2\pi \to 2\pi+\alpha$)**: At $\omega t = 2\pi$, the source voltage reverses again. The load current freewheels through the T2-D2 pair, and $v_o = 0$.

---
#### Waveforms and Equations (Continuous Conduction)
#waveforms #equations #ccm

Because of the freewheeling action, the output voltage never becomes negative. The voltage waveform consists of segments of the input sine wave from $\alpha$ to $\pi$ in each half-cycle, and is zero during the freewheeling intervals.

* **Average Output Voltage ($V_{dc}$)**:
    Because the inherent freewheeling clamps the negative voltage, the integration limits are exactly the same as a full bridge with an external FWD.
    
    ![[Single-Phase Full-Wave Bridge Controlled Rectifier#Effect of a Freewheeling Diode (FWD)]]
    
    $$\boxed{\quad V_{dc} = \frac{V_m}{\pi} (1 + \cos\alpha) \quad}$$
*   **RMS Output Voltage ($V_{rms}$)**:
    $$\boxed{\quad V_{rms} = \frac{V_m}{\sqrt{2}} \sqrt{\frac{1}{\pi} \left( (\pi - \alpha) + \frac{\sin(2\alpha)}{2} \right)} \quad}$$

> [!info] Input Source Current ($I_{s,rms}$) in CCM
> Unlike a full converter where the source current flows for the full $180^\circ$, the semi-converter only draws current from the source during the powering period ($\alpha \to \pi$). 
> During the freewheeling period, source current is **zero**.
> 
> Assuming a highly inductive load (constant $I_d$):
> $$I_{s,rms} = I_d \sqrt{\frac{\pi - \alpha}{\pi}}$$
> > See [[Input Current Harmonics]]

---
#### Key Features and Comparison with Full Converter
#key-features #comparison/semi-converter-with-full-converter

| Feature                 | Single-Phase Semi-Converter                                  | Single-Phase Full Converter (with RL Load)                   |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Components**          | 2 SCRs, 2 Diodes                                             | 4 SCRs                                                       |
| **Cost**                | Lower (fewer SCRs and simpler firing circuit)                | Higher                                                       |
| **Output Voltage ($V_o$)** | Always positive or zero ($v_o \ge 0$)                      | Can be positive or negative                                  |
| **Operation Quadrants** | First Quadrant Only (Rectifying)                             | First & Fourth Quadrants (Rectifying & Inverting)            |
| **Regenerative Braking** | Not Possible                                                 | Possible (Inverter Mode, $\alpha > 90^\circ$)                |
| **Freewheeling**        | Inherent (no extra components needed)                        | Requires an external Freewheeling Diode for similar behavior |
| **Power Factor**        | **Better**, as source current is zero during freewheeling.   | Poorer, as it draws reactive power when $\alpha > 0$.        |
| **$V_{dc}$ Formula (CCM)**  | $\frac{V_m}{\pi} (1 + \cos\alpha)$                                    | $\frac{2V_m}{\pi} \cos\alpha$                                    |

##### Load Types
#load-type

*   **R Load**: The current naturally becomes zero at $\pi$, so no freewheeling occurs. The performance is identical to a full converter with an R load.
*   **RLE Load**: The semi-converter can charge a battery or drive a motor, but it cannot support regenerative braking because it cannot operate in inverter mode. Power flow is strictly unidirectional from the AC source to the DC load.

---
### Related Concepts
#rectifier/related-concepts

> [[Single-Phase Full-Wave Bridge Controlled Rectifier]]

[[freewheeling diode]]
[[Performance Metrics]]
[[DC-DC Converters (Choppers)]] (Another method for DC voltage control)
