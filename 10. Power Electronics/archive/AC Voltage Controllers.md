---
tags:
  - power-electronics
  - ac-ac-converter
  - ac-voltage-controller
  - phase-control
  - triac
  - scr
created: 2025-09-19
aliases:
  - AC-AC Converters (Voltage)
  - AC Regulators
  - Thyristor AC Switch
subject: "[[Power Electronics]]"
parent:
  - AC-AC Converters
modified: 2026-08-04T09:05:01
---
### AC Voltage Controllers
#ac-voltage-controller #phase-control #triac

> An **AC Voltage Controller** is a type of AC-to-AC power converter that converts a fixed-voltage, fixed-frequency AC supply into a variable-voltage AC supply at the **same frequency**. Control is achieved by varying the RMS value of the output voltage.

These controllers are also known as AC regulators or AC choppers.

#### Principle of Operation: Phase Control
#phase-control #firing-angle

The fundamental principle is **phase control**, which is achieved by using bidirectional semiconductor switches like [[Power Thyristors]] (SCRs) or TRIACs.
* **Switching Action**: The switches are placed in series with the load. By delaying the trigger pulse to the switch's gate, we can control the point in each AC half-cycle at which the switch starts to conduct.
* **Firing Angle ($\alpha$)**: The control parameter is the **firing angle**, $\alpha$, which is the delay measured from the zero-crossing of the input voltage.
* **Voltage Control**: By increasing the firing angle, the switch is turned on for a smaller portion of each half-cycle. This "chops" out part of the AC voltage waveform, reducing the overall RMS value of the voltage delivered to the load.

$$\boxed{\quad \text{Increasing } \alpha \implies \text{Decreasing } V_{rms, output} \quad}$$

---
#### Single-Phase AC Voltage Controller
#single-phase-ac-controller

The most common configuration uses two SCRs connected in inverse-parallel (antiparallel) or a single TRIAC.
* **Operation**:
    * For the positive half-cycle of the input voltage, thyristor T1 is forward-biased. It is triggered at $\omega t = \alpha$, and it conducts until the current naturally commutates at $\omega t = \pi$.
    * For the negative half-cycle, thyristor T2 is forward-biased. It is triggered at $\omega t = \pi + \alpha$, and it conducts until $\omega t = 2\pi$.

![[Pasted image 202509191100.png]]

##### RMS Output Voltage (for R Load)
The RMS value of the output voltage for a purely resistive load is given by:
$$\boxed{\quad V_{rms, out} = V_{s} \sqrt{\frac{1}{\pi} \left( (\pi - \alpha) + \frac{\sin(2\alpha)}{2} \right)} \quad}$$
where $V_s$ is the RMS value of the source voltage.

---
#### Other Control Schemes
#integral-cycle-control
##### On-Off Control (or Integral Cycle Control)
This method involves connecting the load to the source for a few complete cycles and then disconnecting it for another few cycles.
* **Control**: The control variable is the duty cycle, $k = n / (n+m)$, where $n$ is the number of ON cycles and $m$ is the number of OFF cycles.
* **Advantage**: It generates very low-frequency harmonics and has a better power factor than phase control.
* **Application**: Best suited for loads with high thermal inertia, such as heating loads, where the slow switching is not noticeable.

---
#### Disadvantages of Phase-Controlled ACVCs
1. **High Harmonic Content**: The output voltage and, more importantly, the input current are severely distorted and non-sinusoidal. This injects a large amount of [[Input Current Harmonics|harmonics]] into the supply line.
2. **Poor Input Power Factor**: The fundamental component of the input current is phase-shifted (lagging) with respect to the input voltage, even for a purely resistive load. This results in a poor displacement factor and a low overall power factor, which worsens as the firing angle increases.

---
#### Applications
* **Lighting Control / Dimming Circuits**: A classic application for TRIAC-based controllers.
* **Speed Control of Single-Phase AC Motors**: Used for simple fan and pump speed control where high efficiency and performance are not critical.
* **Industrial Heating**: Control of electric furnaces and heaters using integral cycle control.
* **Soft Starters for Induction Motors**: Used to apply a gradually increasing voltage to a motor at startup to limit the high inrush current and provide a smooth start.

---
### Related Concepts
#related-concepts

> [[AC-AC Converters]] (Parent category)

[[10. Power Electronics/archive/Cycloconverters]] (Frequency changing AC-AC converters)
[[Power Thyristors]] and [[TRIACs]] (The key switching devices)
[[Phase-Controlled Rectifiers]] (Uses the same phase control principle for AC-DC conversion)
[[Harmonic Analysis]]
[[Power Factor]]