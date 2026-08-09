---
tags:
  - power-electronics
  - thyristor
  - series-parallel-operation
  - protection-circuits
created: 2025-10-15
aliases:
  - SCR Series Operation
  - SCR Parallel Operation
  - Thyristor Stringing
subject: "[[Power Electronics]]"
parent:
  - Power Semiconductor Devices
modified: 2026-08-04T10:27:01
---
### Series and Parallel Operation of Thyristors
#series-operation #parallel-operation #thyristor-string

> The voltage and current ratings of a single thyristor are limited (e.g., up to 10 kV, 5 kA). For high-power applications like HVDC transmission, static VAR compensators, and large motor drives, the voltage and current requirements often exceed the capabilities of a single device. To meet these demands, multiple thyristors are connected in a **series string** (for high-voltage blocking) or a **parallel bank** (for high-current conduction). However, due to inherent manufacturing variations, special equalizing circuits are required to ensure reliable operation.

#### Series Operation of Thyristors (High Voltage)
#voltage-sharing #string-efficiency

When thyristors are connected in series, they must equally share the total string voltage in both the steady-state (blocking) and dynamic (switching) phases. Mismatches in device characteristics prevent this from happening naturally.

##### 1. Static Voltage Sharing (Steady-State)
*   **Problem**: In the forward blocking state, each thyristor has a slightly different leakage current ($I_{lk}$) for the same blocking voltage. When connected in series, the same total leakage current flows through all devices. The thyristor with the **lowest leakage current** will exhibit the highest internal resistance and thus have the **highest voltage drop** across it. This device may be driven beyond its rated $V_{DRM}$, causing failure.
*   **Solution: Static Equalizing Resistor ($R_{sh}$)**
    *   A shunt resistor, $R_{sh}$, is connected in parallel with each thyristor.
    *   This resistor provides a bypass path for the current, making the voltage division primarily dependent on these external resistors rather than the unpredictable internal leakage currents.
    *   The value of $R_{sh}$ is chosen such that the total current flowing through the parallel combination ($I_{sh} + I_{lk}$) is uniform enough to keep the voltage across any thyristor within its rating.
    $$\boxed{\quad R_{sh} \le \frac{n V_{max} - V_s}{(n-1)\Delta I_{b,max}} \quad}$$
    where $n$ is the number of series devices, $V_s$ is the total string voltage, $V_{max}$ is the max permissible voltage per device, and $\Delta I_{b,max}$ is the maximum difference in leakage currents between devices.

##### 2. Dynamic Voltage Sharing (During Switching)
*   **Problem**: Mismatches in the dynamic characteristics, particularly the **reverse recovery charge ($Q_{rr}$)**, cause unequal voltage sharing during turn-off.
    *   The thyristor that recovers fastest (lowest $Q_{rr}$) will stop conducting first. The other thyristors continue to conduct the reverse recovery current, effectively shorting the circuit. This forces the entire string voltage to momentarily appear across the single fast-recovering thyristor, leading to its destruction.
*   **Solution: Dynamic Equalizing Circuit (Snubber)**
    *   An RC snubber circuit ($R_s, C_s$) is connected in parallel with each thyristor (in addition to $R_{sh}$).
    *   The capacitor, $C_s$, provides an alternate path for the reverse recovery current of the slower devices. This forces the voltage across the fast-recovering device to build up slowly, giving the other devices time to recover. The capacitor effectively forces voltage sharing during the transient period.
    *   The resistor, $R_s$, limits the discharge current from $C_s$ when the thyristor is turned ON.
    $$\boxed{\quad C_s \ge \frac{(n-1)\Delta Q_{rr,max}}{n V_{max} - V_s} \quad}$$
    where $\Delta Q_{rr,max}$ is the maximum difference in reverse recovery charge.

##### String Efficiency and Derating
Due to unequal sharing, a string of $n$ thyristors cannot block $n \times V_{DRM}$. A safety margin is required.
*   **String Efficiency**: $\eta = \frac{\text{Actual String Voltage}}{\text{Ideal String Voltage}} = \frac{V_s}{n \times V_{max}}$
*   **Derating Factor**: $DF = (1 - \eta) \times 100\%$

#### Parallel Operation of Thyristors (High Current)
#current-sharing #thermal-runaway

When thyristors are connected in parallel, they must share the total load current equally.

*   **Problem**:
    1.  **V-I Mismatch**: Due to variations in their on-state V-I characteristics, the thyristor with the lower on-state voltage drop ($V_T$) will naturally conduct a larger share of the current.
    2.  **Thermal Runaway**: Thyristors have a negative temperature coefficient for their on-state voltage drop. The device carrying more current gets hotter. This heat reduces its on-state voltage drop, causing it to draw even more current. This positive feedback loop can lead to thermal runaway and device destruction.
    3.  **Layout Asymmetry**: Uneven busbar resistance or inductance can also cause unequal current sharing.

*   **Solutions**:
    1.  **Device Matching**: Selecting thyristors with very closely matched V-I characteristics. This is often impractical and expensive.
    2.  **External Resistors/Reactors**: A small resistance or inductance is connected in series with each thyristor. The voltage drop across this external element is made larger than the mismatch in the devices' $V_T$, forcing the currents to equalize. Resistors introduce significant conduction losses ($I^2R$), while reactors are preferred for AC circuits.
    3.  **Magnetic Coupling**: A center-tapped inductor can be used to link two parallel branches. If the current in one branch tries to increase, it induces a voltage in the other half of the winding that forces the current in the second branch to increase, achieving automatic balancing.

---
### Related Concepts
#series-parallel-operation/related-concepts

> [[Silicon Controlled Rectifier (SCR)]]

[[Static and Dynamic Characteristics of Thyristors (Turn-on and Turn-off)]]
[[Protection of Thyristors - Overvoltage (Snubber Circuit), Overcurrent (Fuses, Crowbar)]]
[[Thermal Design and Heat Sinks]]
