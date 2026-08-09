---
tags:
  - power-electronics
  - inverters
  - dc-ac-converters
  - vsi
  - full-bridge-inverter
  - h-bridge
created: 2025-10-15
aliases:
  - Full-Bridge Inverter
  - H-Bridge Inverter
  - Single-Phase VSI
subject: "[[Power Electronics]]"
parent:
  - DC-AC Converters (Inverters)
modified: 2026-08-04T10:28:03
---
### Single-Phase Full-Bridge Voltage Source Inverter (VSI)
#power-electronics #inverter #vsi #full-bridge-inverter #h-bridge

> The **single-phase full-bridge inverter**, <u>often called an **H-Bridge inverter**</u>, is the most common and practical inverter topology. It <u>uses four switches to generate an AC output voltage from a single two-wire DC source</u>. Compared to the [[Single-Phase Half-Bridge Voltage Source Inverter (VSI)|half-bridge]], it produces double the output voltage for the same DC input and does not require a center-tapped source, making it far more versatile for practical applications.

#### Circuit Topology
#full-bridge-inverter/topology

![[Circuit - Single-Phase Full-Bridge Voltage Source Inverter (VSI).png]]

The circuit consists of two inverter legs, forming an "H" shape with the load connected across the middle.
* **Four Switches (S1-S4):** Typically IGBTs or MOSFETs with their anti-parallel diodes.
* **DC Voltage Source ($V_{dc}$):** A simple two-wire DC input.
* **Load:** Connected between the midpoint of the two legs (point A and B).

---
#### Principle of Operation (Bipolar Voltage Switching)
#bipolar-switching #square-wave-inverter

This is the simplest control method, where the output voltage switches between two levels: $+V_{dc}$ and $-V_{dc}$. The switches are operated in diagonal pairs (S1/S4 and S2/S3).

* **Mode 1 ($0 < t \le T/2$):** Switches **S1 and S4 are ON**.
    * Point A is connected to the positive DC rail, and point B is connected to the negative DC rail.
    * The voltage across the load is $v_o = v_{AB} = +V_{dc}$.
* **Mode 2 ($T/2 < t \le T$):** Switches **S2 and S3 are ON**.
    * Point A is connected to the negative DC rail, and point B is connected to the positive DC rail.
    * The voltage across the load is $v_o = v_{AB} = -V_{dc}$.

<u>This operation generates a square wave output voltage of amplitude $V_{dc}$.</u> For inductive loads, the anti-parallel diodes provide a path for the freewheeling current, similar to the [[Single-Phase Half-Bridge Voltage Source Inverter (VSI)|half-bridge inverter]].

---
#### Performance Analysis (Square Wave Operation)
#performance-metrics #harmonics

* **RMS Output Voltage:** For a square wave with amplitude $V_{dc}$, the RMS value is:
    $$V_{o,rms} = V_{dc}$$
* **Fourier Series of Output Voltage:**
    $$\boxed{\quad v_o(t) = \sum_{n=1,3,5,...}^{\infty} \frac{4V_{dc}}{n\pi} \sin(n\omega_o t) \quad}$$
* **RMS Value of the Fundamental Component:**
    $$\boxed{\quad V_{o1} = \frac{V_{o1,peak}}{\sqrt{2}} = \frac{4V_{dc}/\pi}{\sqrt{2}} = \frac{2\sqrt{2}V_{dc}}{\pi} \approx 0.9 V_{dc} \quad}$$
    This is exactly **double** the fundamental voltage produced by a half-bridge inverter with the same total DC bus voltage.
* **Total Harmonic Distortion (THD):** The waveform shape is a square wave, so the THD is the same as the half-bridge, approximately **48.3%**.

---
#### Unipolar Voltage Switching
#unipolar-switching #pwm

A more advanced control method, Unipolar PWM, significantly improves the output waveform quality.
* **Principle:** The two legs of the inverter (A and B) are controlled independently. For example, S1/S2 are switched at high frequency to control the voltage at point A ($v_{AN}$), while S3/S4 are switched to control the voltage at point B ($v_{BN}$) based on an inverted reference.
* **Output:** The load voltage $v_o = v_{AN} - v_{BN}$ switches between three levels:
    * **+Vdc:** (S1 and S4 ON)
    * **-Vdc:** (S2 and S3 ON)
    * **0 V:** (S1 and S3 ON, or S2 and S4 ON). This is a "freewheeling" state.
* **Advantage:** This three-level output has much lower harmonic distortion compared to the two-level bipolar switching. The effective switching frequency at the output is doubled, pushing harmonics to higher frequencies and making them easier to filter.

---
#### GATE Preparation & Numerical Analysis
#gate-prep #numerical-shortcuts #conduction-analysis

> [!important] Device Conduction Logic (Inductive Load)
> In GATE, questions often ask for the RMS current of a **specific switch** rather than the load. For a full-bridge VSI with an inductive (L or R-L) load:
> * **Switch vs. Diode:** The diagonal switches (S1, S2) are gated for half the cycle ($T/2$), but they only conduct when the load current $i_o$ is positive. When $i_o$ is negative during that same gating interval, the **anti-parallel diodes** (D1, D2) conduct.
> * **Conduction Symmetery:** In steady state with a symmetric triangular current, each switch conducts for exactly $1/4$ of the total period ($T/4$).

#### Numerical Shortcuts for Triangular Waveforms
If the load current $i_L$ is a triangular wave with peak value $I_{peak}$:

| Parameter | Formula |
| :--- | :--- |
| **Load RMS Current ($I_{o,rms}$)** | $\frac{I_{peak}}{\sqrt{3}}$ |
| **Switch RMS Current ($I_{S,rms}$)** | $\frac{I_{peak}}{\sqrt{6}}$ or $\frac{I_{o,rms}}{\sqrt{2}}$ |
| **Average Switch Current ($I_{S,avg}$)** | $\frac{I_{peak}}{8}$ (for $1/4$ cycle conduction) |


> [!tip] Zettelkasten Link: PYQ Pattern
> Referenced from **[[ee_2015(1)#^q43]]**: In a VSI feeding an inductive load where $i_L$ is triangular ($\pm 5A$ peak), the RMS current through $S_1$ is calculated by integrating over the interval where $i_L > 0$ while $S_1$ is gated.
> $$I_{S1,rms} = \sqrt{\frac{1}{T} \int_{T/4}^{T/2} (i_L(t))^2 dt} = \frac{5}{\sqrt{6}} \approx 2.04 A$$

---
#### Harmonic Elimination (PWM)
To eliminate specific low-order harmonics from the square wave output, we modulate the switching pulses.

![[Single-Pulse Width Modulation#Harmonic Elimination]]

---
### Related Concepts
#full-bridge-inverter/related-concepts

> [[Single-Phase Half-Bridge Voltage Source Inverter (VSI)]]

[[Principle of Operation of an Inverter]]
[[Pulse Width Modulation (PWM) Techniques]]
[[Three-Phase Voltage Source Inverter (VSI)]]
[[Performance Parameters of Inverters]]