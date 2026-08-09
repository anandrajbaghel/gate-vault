---
tags:
  - power-electronics
  - semiconductor-devices
  - thyristor
  - control-circuits
created: 2025-10-15
aliases:
  - SCR Firing Circuits
  - Thyristor Triggering
  - Gate Triggering Circuits
subject: "[[Power Electronics]]"
parent:
  - Power Semiconductor Devices
modified: 2026-08-04T10:41:06
---
### Thyristor Firing (Triggering) Circuits
#thyristor-firing #gate-triggering #phase-control

> A thyristor firing circuit (or triggering circuit) is responsible for generating and applying a suitable gate pulse to the thyristor to turn it on at a desired instant. The primary goal of these circuits is to control the **firing angle ($\alpha$)**, which is the angle in the AC cycle at which the thyristor is triggered. By controlling $\alpha$, we can control the average power delivered to the load, forming the basis of phase-controlled rectifiers and AC voltage controllers.

A successful trigger requires the gate signal to meet two conditions:
1.  The gate voltage must be greater than the minimum gate trigger voltage ($V_g > V_{GT}$).
2.  The gate current must be greater than the minimum gate trigger current ($I_g > I_{GT}$).

#### 1. Resistance (R) Firing Circuit
#r-firing-circuit

This is the simplest and most economical firing circuit. It uses a variable resistor to control the gate current.

*   **Circuit Operation**: In the positive half-cycle of the AC supply, the thyristor is forward-biased. As the supply voltage increases, the gate current $I_g$ (limited by R) also increases. The thyristor turns on when $I_g$ reaches the required trigger current $I_{GT}$.
*   **Firing Angle Control**: By varying the resistance $R$, the magnitude of the gate current is changed. A lower $R$ allows $I_{GT}$ to be reached earlier in the cycle (smaller $\alpha$), while a higher $R$ requires a higher supply voltage, thus delaying the firing (larger $\alpha$).
*   **Diode D**: This is crucial to protect the gate from the large negative voltage during the negative half-cycle of the AC supply.
*   **Limitations**:
    *   **Limited Range**: The firing angle $\alpha$ can only be controlled from nearly 0° up to a maximum of 90°. The thyristor cannot be fired after the supply voltage reaches its peak, because after the peak, the voltage (and thus the available gate current) starts decreasing.
    *   **Poor Stability**: The firing point is sensitive to variations in device temperature and from one thyristor to another.

#### 2. Resistance-Capacitance (RC) Firing Circuit
#rc-firing-circuit

By adding a capacitor, a phase shift is introduced between the supply voltage and the gate voltage, allowing for a wider range of firing angle control.

*   **Circuit Operation (RC Half-Wave)**: The RC network acts as a phase-shifting and voltage-dividing circuit. The capacitor C charges through the variable resistor R during the positive half-cycle. The thyristor triggers when the voltage across the capacitor, $V_C$, reaches the required gate trigger voltage ($V_{GT}$).
*   **Firing Angle Control**: The charging time constant ($RC$) determines the delay. By increasing R, it takes longer for the capacitor to charge to $V_{GT}$, resulting in a larger firing angle $\alpha$.
*   **Diode D**: It allows the capacitor to charge during the positive half-cycle and forces it to discharge during the negative half-cycle, resetting the timing for the next cycle.
*   **Advantages**: The RC network's phase lag allows the capacitor voltage to continue rising even after the supply voltage has peaked. This extends the firing angle control range beyond 90°, typically up to almost 180°.

#### 3. UJT Firing Circuit
#ujt-firing-circuit #relaxation-oscillator

The Unijunction Transistor (UJT) based firing circuit is a widely used method for generating sharp, stable, and reliable trigger pulses, overcoming the limitations of R and RC circuits. It operates as a **relaxation oscillator**.

*   **UJT Principle**: A UJT has a unique characteristic: it remains OFF until its emitter voltage ($V_E$) reaches a specific **peak-point voltage ($V_p$)**.
    $$\boxed{\quad V_p = \eta V_{BB} + V_d \quad}$$
    where $\eta$ is the intrinsic standoff ratio (a device parameter, typically 0.5-0.8), $V_{BB}$ is the interbase voltage, and $V_d$ is the diode forward drop. Once $V_E$ reaches $V_p$, the UJT turns on rapidly, providing a low-resistance path between the emitter (E) and base-1 (B1).
*   **Circuit Operation**:
    1.  A stable DC voltage is derived from the AC line using a bridge rectifier and a Zener diode, providing $V_{BB}$ to the UJT.
    2.  A capacitor C charges through a variable resistor R. The voltage across the capacitor, $V_C$, is applied to the UJT's emitter.
    3.  When $V_C$ reaches $V_p$, the UJT fires.
    4.  The capacitor C rapidly discharges through the low-resistance E-B1 path and the primary winding of a **pulse transformer**.
    5.  This sudden pulse of current in the primary induces a sharp voltage pulse in the secondary, which is then used to trigger the gate of the thyristor.
*   **Firing Angle Control**: The charging time of the capacitor is controlled by varying R. A larger R results in a longer charging time and a larger firing angle.
*   **Advantages**:
    *   **High-Quality Pulses**: Produces sharp, high-current pulses that ensure reliable and fast turn-on of the thyristor.
    *   **Stable Control**: The firing angle is less susceptible to variations in AC line voltage, temperature, or device parameters.
    *   **Electrical Isolation**: The pulse transformer provides complete electrical isolation between the low-power control circuit and the high-power thyristor circuit.
    *   **Pulse Train**: The circuit can be designed to generate a continuous train of pulses, which is highly desirable for ensuring the latching of thyristors in inductive load applications.

---
### Related Concepts
#firing-circuits/related-concepts

> [[Silicon Controlled Rectifier (SCR)]]

[[Single-Phase Half-Wave Controlled Rectifier]]
[[Single-Phase Full-Wave Bridge Controlled Rectifier]]
[[AC Voltage Controllers]]
