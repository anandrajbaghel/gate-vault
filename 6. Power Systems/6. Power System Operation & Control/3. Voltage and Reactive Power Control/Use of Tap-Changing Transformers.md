---
tags:
  - power-systems
  - voltage-control
  - transformers
  - oltc
created: 2025-10-14
aliases:
  - OLTC
  - Tap Changer
  - On-Load Tap Changer
  - Off-Nominal Transformer
subject: "[[Power System]]"
parent: "[[Methods of Voltage Control]]"
modified: 2026-07-23T21:27:25
---
### Use of Tap-Changing Transformers
#tap-changing-transformer #voltage-control #oltc

> A **tap-changing transformer** is a transformer that allows for small changes in its turns ratio. Its primary use in a power system is to provide **voltage regulation** by adjusting the secondary voltage in response to changes in the primary voltage or load conditions. The **On-Load Tap Changer (OLTC)** is the most crucial type, as it enables this regulation without interrupting the power supply.

#### Principle of Voltage Control
#voltage-regulation #turns-ratio

The fundamental principle is based on the transformer voltage relationship:
$$ \frac{V_2}{V_1} \approx \frac{N_2}{N_1} $$
A tap changer works by physically connecting to different "taps" on one of the windings, effectively changing the number of active turns ($N_1$ or $N_2$).

If the nominal turns ratio is $n = N_2/N_1$, and the tap setting is represented by a per-unit value 't', the effective voltage ratio can be modeled. If the taps are on the secondary side:
$$\boxed{\quad V_2 = n(1+t) \cdot V_1 \quad}$$
-   To **boost** the secondary voltage ($V_2$), a positive tap change ($t>0$) is used.
-   To **buck** (lower) the secondary voltage ($V_2$), a negative tap change ($t<0$) is used.

---
#### Types of Tap Changers
#oltc #off-load-tap-changer

1.  **Off-Load Tap Changer**:
    -   The transformer must be de-energized before the tap setting can be changed.
    -   Used for infrequent, long-term adjustments, such as for seasonal load variations.

2.  **On-Load Tap Changer (OLTC)**:
    -   Can change taps while the transformer is energized and carrying load.
    -   It uses a complex mechanical switch mechanism (diverter switch) with resistors or reactors to momentarily bridge the taps during a change, preventing both open-circuiting and short-circuiting of the winding.
    -   This is the standard device used for active voltage regulation in real-time.

---
#### Applications in Power Systems
#voltage-control/applications

-   **Grid Substations**: OLTCs are installed on transformers stepping down from transmission to distribution voltage levels. They maintain a steady voltage for consumers despite fluctuations in the transmission grid voltage or changes in local load.
-   **Generator Step-Up (GSU) Transformers**: Used to adjust the generator output voltage to match the grid voltage requirements and to help control reactive power flow from the generator.
-   **Interconnecting Transformers**: Used between different transmission voltage levels (e.g., 400 kV to 220 kV) to control the voltage and influence the flow of reactive power between the two networks.

---
#### Control of Reactive Power Flow
#reactive-power-control

While the primary function of an OLTC is to control voltage magnitude, this action inherently influences the flow of reactive power.
-   As established in the [[Relationship between Voltage, Power, and Reactive Power]], reactive power flows from a point of higher voltage to a point of lower voltage.
-   By raising the voltage on its secondary side, a tap-changing transformer can "push" reactive power into the connected network or reduce the amount of reactive power it draws.
-   This makes OLTCs a tool for both voltage control and, indirectly, reactive power management, especially for controlling circulating VARs between parallel transformers.

---
#### Modeling in Power Flow Analysis
#power-flow-modeling

In [[Power Flow Studies (Load Flow Analysis)]], a transformer with an off-nominal tap setting 't' is modeled as an ideal transformer in series with the transformer's impedance. The tap ratio modifies the per-unit admittance of the transformer branch, thus affecting the elements of the **[[Bus Admittance Matrix (Y-bus) Formulation|Y-bus matrix]]**.
-   The tap setting can be a fixed parameter in the analysis.
-   Alternatively, in a "regulating" transformer, the tap setting 't' becomes a control variable that is adjusted by the load flow algorithm to maintain a specified voltage at a particular bus (making it a PV-type bus).

---
### Related Concepts
#voltage-control/related-concepts

> [[Methods of Voltage Control]]

[[Relationship between Voltage, Power, and Reactive Power]]
[[Power Flow Studies (Load Flow Analysis)]]
[[Bus Admittance Matrix (Y-bus) Formulation]]
[[Reactive Power Compensation]]