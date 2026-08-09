---
tags:
  - power-electronics
  - semiconductor-devices
  - bjt
  - mosfet
  - igbt
created: 2025-10-15
aliases:
  - Power BJT
  - Power MOSFET
  - IGBT
  - Power BJT, Power MOSFET, and IGBT - Structure and Characteristics
subject: "[[Power Electronics]]"
parent: "[[Comparison of Power Semiconductor Devices]]"
modified: 2026-08-04T10:15:24
---
### Power BJT, Power MOSFET, and IGBT - Structure and Characteristics
#power-devices #bjt #mosfet #igbt

> Power Bipolar Junction Transistors (BJTs), Power Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs), and Insulated Gate Bipolar Transistors (IGBTs) are three fundamental, fully-controllable semiconductor switches used in power electronics. Each device offers a unique trade-off between conduction loss, switching speed, and drive complexity, making their selection dependent on the specific application's voltage, current, and frequency requirements.

#### Power BJT (Bipolar Junction Transistor)
#power-bjt #current-controlled-device

A power BJT is a three-terminal (Emitter, Base, Collector), three-layer (NPN or PNP), current-controlled device. Unlike its signal-level counterpart, it has a different structure to handle high power.

##### Structure
* **Vertical Structure**: To maximize the cross-sectional area for high current handling, power BJTs use a vertical structure (e.g., N+ P N- N+ for NPN).
* **Drift Region**: A lightly doped collector drift region (N-) is inserted between the base (P) and the highly doped collector (N+). This region absorbs the depletion layer during the OFF state, providing high voltage blocking capability.

##### V-I Characteristics
* The output characteristics ($I_C$ vs $V_{CE}$) show three main regions: Cutoff, Active, and Saturation.
* **Quasi-Saturation Region**: A fourth region between active and hard saturation, caused by the high resistivity of the drift region.
* **Second Breakdown**: A destructive phenomenon where current becomes localized in a small area of the silicon, causing a sharp drop in $V_{CE}$ and potentially destroying the device. This limits the **Safe Operating Area (SOA)**.
* **Negative Temperature Coefficient**: The current gain ($\beta$) increases with temperature, which can lead to thermal runaway if not managed.

##### Control and Switching
* **Control**: It is a **current-controlled device**. A continuous base current $I_B$ is required to keep it in the ON state.
    $$\boxed{\quad I_C = \beta I_B \quad}$$
* **Drive Circuit**: Requires significant base drive power due to low input impedance.
* **Switching Speed**: Relatively slow due to **storage time** ($t_s$), a delay during turn-off caused by the need to remove excess minority carriers from the base and drift regions.

---
#### Power MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor)
#power-mosfet #voltage-controlled-device

A Power MOSFET is a three-terminal (Source, Drain, Gate), voltage-controlled device known for its very high switching speed.

##### Structure
* **Vertical DMOS (VDMOS)**: The structure is vertical to support high current and voltage. It consists of thousands of parallel microscopic cells.
* **Drift Region**: A lightly doped N- drift region is included to provide high voltage blocking capability.
* **Intrinsic Body Diode**: An inherent anti-parallel P-N diode (body diode) exists between the source and drain. While useful in some circuits (e.g., inverters), it has poor reverse recovery characteristics.

##### V-I Characteristics
* The output characteristics ($I_D$ vs $V_{DS}$) show three regions: Cutoff ($V_{GS} < V_{th}$), Ohmic/Triode (device acts as a resistor), and Saturation/Active (device acts as a constant current source).
* **On-State Resistance ($R_{DS(on)}$)**: In the ON state, it behaves like a resistor. This resistance is a key source of conduction loss ($P_{cond} = I_D^2 R_{DS(on)}$).
* **Positive Temperature Coefficient**: $R_{DS(on)}$ increases with temperature. This property promotes even current sharing when devices are paralleled, preventing thermal runaway.

##### Control and Switching
* **Control**: It is a **voltage-controlled device**. The gate is electrically isolated from the channel, resulting in very high input impedance. No continuous gate current is needed, only to charge/discharge the gate capacitance.
* **Drive Circuit**: Requires low power, making the drive circuit simple.
* **Switching Speed**: Extremely fast. As a **majority carrier device**, it has no minority carrier storage time. Switching speed is limited only by the time taken to charge and discharge the internal capacitances ($C_{iss}, C_{oss}, C_{rss}$).

---
#### IGBT (Insulated Gate Bipolar Transistor)
#igbt #hybrid-device

The IGBT combines the best features of the BJT and MOSFET. It has the high input impedance and voltage control of a MOSFET with the low on-state conduction loss of a BJT.

##### Structure
* It can be seen as a hybrid structure with a MOSFET-like insulated gate for input control and a BJT-like P-N-P structure for the output. It is essentially a P-N-P BJT driven by an N-channel MOSFET in a Darlington configuration. The terminals are **Emitter, Collector, and Gate**.
* The presence of a P+ injecting layer (anode) results in conductivity modulation of the N- drift region, significantly reducing on-state voltage drop compared to a MOSFET.

##### V-I Characteristics
* The output characteristics ($I_C$ vs $V_{CE}$) are similar to a BJT but are controlled by the Gate-Emitter voltage ($V_{GE}$).
* It exhibits a low on-state voltage drop ($V_{CE(sat)}$), similar to a BJT, enabling high current handling with low conduction losses.

##### Control and Switching
* **Control**: It is a **voltage-controlled device**, just like a MOSFET, with high input impedance.
* **Switching Speed**: Faster than a BJT but slower than a MOSFET. The turn-off process is slowed by a **current tail**, which is caused by the recombination of minority carriers injected by the P+ substrate.

#### Comparison of Power Devices

| Feature                 | Power BJT                           | Power MOSFET                        | IGBT                                     |
| ----------------------- | ----------------------------------- | ----------------------------------- | ---------------------------------------- |
| **Control Type**        | Current ($I_B$)                     | Voltage ($V_{GS}$)                  | Voltage ($V_{GE}$)                       |
| **Input Impedance**     | Low                                 | Very High                           | Very High                                |
| **On-State Loss**       | Low ($V_{CE(sat)}$)                 | High ($I_D^2 R_{DS(on)}$)           | Low ($V_{CE(sat)}$)                      |
| **Switching Speed**     | Slow (due to $t_s$)                 | Very Fast (majority carrier)        | Medium (due to current tail)             |
| **Voltage Rating**      | High                                | Medium (Best at < 500V)             | Very High (> 1000V)                      |
| **Temp. Coefficient**   | Negative (Risk of thermal runaway)  | Positive (Easy to parallel)         | Positive                                 |
| **SOA**                 | Prone to Second Breakdown           | Robust, no second breakdown         | Robust                                   |
| **Typical Frequency**   | < 10 kHz                            | > 100 kHz                           | 10 kHz - 50 kHz                          |
| **Primary Application** | Low-cost, low-freq drives           | SMPS, High-freq converters          | High-power motor drives, inverters, UPS  |

---
### Related Concepts
#power-devices/related-concepts

> [[Silicon Controlled Rectifier (SCR)]]

[[Gate Turn-Off Thyristor (GTO) and TRIAC]]
[[Gate Drive Circuits for MOSFET and IGBT]]
[[DC-DC Converters (Choppers)]]
[[DC-AC Converters (Inverters)]]
