---
tags:
  - power-electronics
  - dc-dc-converters
  - choppers
  - cuk-converter
  - low-ripple
  - inverting-converter
created: 2025-10-15
aliases:
  - Ćuk Converter
  - Cuk Chopper
subject: "[[Power Electronics]]"
parent:
  - DC-DC Converters (Choppers)
modified: 2026-08-04T09:29:33
---
### Cuk Converter (Introduction)
#power-electronics #cuk-converter #low-ripple #capacitive-energy-transfer

> The **Cuk (or Ćuk) converter** is a type of DC-DC converter that, like the buck-boost converter, can produce an output voltage magnitude that is either greater or less than the input voltage, with an inverted polarity. Its most significant advantage is that it has **continuous input current and continuous output current**, which dramatically reduces the ripple at both the input and output stages. This makes it a preferred choice in applications requiring low electromagnetic interference (EMI) and low output ripple.

#### Circuit Topology and Energy Transfer
#cuk-converter/topology

The Cuk converter's topology is unique because it uses a capacitor for the primary energy transfer, unlike the direct inductive energy transfer in buck, boost, and buck-boost converters.

The key components are:
1.  **Input Inductor (L1):** Placed in series with the source, it ensures a continuous, low-ripple input current.
2.  **Switch (S):** The controlled element (e.g., MOSFET).
3.  **Energy Transfer Capacitor (C1):** Connects the input and output stages. It stores energy when the switch is OFF and transfers it when the switch is ON.
4.  **Diode (D):** Directs current flow.
5.  **Output Inductor (L2):** Placed in series with the load, it ensures a continuous, low-ripple output current, which in turn leads to low output voltage ripple.
6.  **Output Capacitor (C2):** Provides final filtering for the output voltage.

---
#### Principle of Operation
#cuk-converter/operation

The operation is analyzed in two states, assuming Continuous Conduction Mode (CCM). A key assumption is that the voltage across the large transfer capacitor, $V_{C1}$, is constant.

##### State 1: Switch is ON (Interval $0 < t \le DT_s$)
*   The switch S is closed.
*   The input source charges the input inductor L1. The voltage across L1 is $v_{L1} = V_{in}$. The input current ramps up.
*   The energy transfer capacitor C1, which is charged to a positive voltage, is connected to the output stage and forward-biases the diode D.
*   C1 discharges its energy into the output inductor L2 and the load. The voltage across L2 is $v_{L2} = V_{C1} + V_o$.

##### State 2: Switch is OFF (Interval $DT_s < t \le T_s$)
*   The switch S is opened. The diode D becomes reverse-biased and turns OFF.
*   The input inductor L1 now discharges its energy into the transfer capacitor C1 through the input source. The voltage across L1 is $v_{L1} = V_{in} - V_{C1}$. The input current ramps down.
*   The output inductor L2 continues to supply current to the load. The voltage across L2 is $v_{L2} = V_o$.

---
#### Voltage Relationship
#duty-cycle #volt-second-balance

By applying the volt-second balance principle to both inductors L1 and L2, the steady-state voltage across the transfer capacitor is found to be $V_{C1} = V_{in} - V_o$. The final input-output voltage relationship is derived, which is identical to that of the buck-boost converter.

$$\boxed{\quad V_o = -V_{in} \frac{D}{1-D} \quad}$$
*   The negative sign indicates an inverted output.
*   The converter acts in buck mode for $D < 0.5$ and boost mode for $D > 0.5$.

---
#### Key Advantages and Disadvantages
#pros-cons

##### Advantages
*   **Continuous Input Current:** Reduces input filtering requirements and EMI.
*   **Continuous Output Current:** Results in very low output voltage ripple with a smaller output capacitor.
*   High efficiency as energy transfer is smooth.

##### Disadvantages
*   **Higher Component Count:** Requires two inductors and two capacitors, increasing size and cost.
*   **High Stress on Transfer Capacitor:** The capacitor C1 must handle a large ripple current (high RMS value), requiring a high-quality, specialized capacitor.
*   The control circuit can be more complex due to the fourth-order nature of the system.

---
### Related Concepts
#cuk-converter/related-concepts

> [[DC-DC Converters (Choppers)]]

[[Buck-Boost Converter]]
[[Inductor Ripple Current]]
[[Output Voltage Ripple Calculation]]
[[SEPIC Converter]] (a similar non-inverting buck-boost topology)