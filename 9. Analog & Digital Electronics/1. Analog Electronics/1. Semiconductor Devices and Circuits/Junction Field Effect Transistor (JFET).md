---
tags:
  - analog-electronics
  - semiconductor-devices
  - transistors
  - jfet
  - gate-ee
created: 2025-10-15
aliases:
  - JFET Structure
  - Field Effect Transistor
  - Junction Field Effect Transistor (JFET) - Structure and Characteristics
  - JFET Types
  - Voltage-Controlled Current Source
subject: "[[Analog & Digital Electronics]]"
parent:
  - Semiconductor Devices and Circuits
modified: 2026-08-04T09:52:15
---
### Junction Field Effect Transistor (JFET)
#jfet #fet #voltage-controlled-device

> The **Junction Field-Effect Transistor (JFET)** is a three-terminal semiconductor device that uses an applied electric field to control the conductivity of a channel. It is a **voltage-controlled current source**, where the voltage applied to the gate terminal controls the current flowing from the source to the drain. Its most defining characteristic is its extremely high input impedance.

#### Structure and Types
#jfet-structure

![[JFET P & N Types.jpg]]

A JFET consists of a channel of doped semiconductor material (either N-type or P-type) through which charge carriers flow.
* **Terminals:** Source (S), Drain (D), and Gate (G).
* **Channel:** The region between the source and drain.
* **Gate:** Made of the opposite semiconductor type, forming a P-N junction with the channel.
* **Types:**
    1. **N-Channel JFET:** The channel is N-type, and the gate is P-type. Current is due to the flow of electrons.
    2. **P-Channel JFET:** The channel is P-type, and the gate is N-type. Current is due to the flow of holes. (Operation is analogous, with polarities reversed).

JFETs are **unipolar** devices because the current is carried by only one type of charge carrier (majority carriers).

#### Principle of Operation
#jfet-operation #depletion-region #pinch-off

The JFET's operation relies on varying the channel width by controlling the reverse bias on the gate-source P-N junction.
1.  **Gate-Source Junction:** The G-S junction is **always reverse-biased** in normal operation. This creates a depletion region that extends into the channel.
2.  **Channel Width Modulation:** Increasing the reverse-bias gate-source voltage ($V_{GS}$) widens the depletion region. This narrows the effective cross-section of the channel, increasing its resistance and reducing the drain current ($I_D$).
3.  **Pinch-off:** For a given $V_{GS}$, as the drain-source voltage ($V_{DS}$) increases, the reverse bias across the gate-drain part of the junction becomes larger. At a certain voltage, the depletion regions extend to almost touch, "pinching off" the channel. Beyond this point, the current saturates and becomes nearly independent of $V_{DS}$.

#### JFET Characteristics

##### 1. Drain Characteristics ($I_D$ vs. $V_{DS}$)
This is a plot of drain current ($I_D$) versus drain-source voltage ($V_{DS}$) for a constant gate-source voltage ($V_{GS}$).
*   **Ohmic/Linear Region:** For small values of $V_{DS}$ (before pinch-off), the channel acts like a voltage-controlled resistor. $I_D$ increases linearly with $V_{DS}$.
*   **Saturation/Pinch-off Region:** When $V_{DS} \ge (V_P + V_{GS})$, the channel is pinched off. The drain current $I_D$ becomes almost constant, controlled only by $V_{GS}$. **This is the normal operating region for amplification.**
*   **Breakdown Region:** If $V_{DS}$ is excessively high, avalanche breakdown occurs in the reverse-biased gate-drain junction.

##### 2. Transfer Characteristics ($I_D$ vs. $V_{GS}$)
This curve shows how the input voltage ($V_{GS}$) controls the output current ($I_D$) in the saturation region. It is described by **Shockley's Equation**:
$$\boxed{\quad I_D = I_{DSS} \left( 1 - \frac{V_{GS}}{V_{P}} \right)^2 \quad}$$
*   $I_{DSS}$: **Drain-to-Source current with Shorted Gate**. It is the maximum possible drain current, occurring when $V_{GS}=0$.
*   $V_P$: **Pinch-off Voltage**. The value of $V_{GS}$ that is required to reduce $I_D$ to zero. For an N-channel JFET, $V_P$ is negative.

#### JFET Small-Signal Parameters
#transconductance #jfet-parameters

These parameters describe the JFET's behavior for small AC signals in the saturation region.
1.  **Transconductance ($g_m$):** The gain of the FET. It is the ratio of a change in drain current to the change in gate-source voltage.
    $$g_m = \frac{\partial I_D}{\partial V_{GS}} \bigg|_{V_{DS}=\text{const}}$$
    From Shockley's equation, we can derive:
    $$\boxed{\quad g_m = g_{m0} \left( 1 - \frac{V_{GS}}{V_{P}} \right) \quad \text{where} \quad g_{m0} = \frac{2I_{DSS}}{|V_P|} \quad}$$
2.  **AC Drain Resistance ($r_d$):** The output resistance of the JFET.
    $$r_d = \frac{\partial V_{DS}}{\partial I_D} \bigg|_{V_{GS}=\text{const}}$$
3.  **Amplification Factor ($\mu$):** The theoretical maximum voltage gain.
    $$\boxed{\quad \mu = g_m \cdot r_d \quad}$$

#### Comparison with BJT

| Feature | JFET | BJT |
| :--- | :--- | :--- |
| **Control** | **Voltage**-controlled ($V_{GS}$) | **Current**-controlled ($I_B$) |
| **Input Impedance** | Very High (~$10^9 \Omega$) | Medium (~k$\Omega$) |
| **Carrier Type** | Unipolar (Majority only) | Bipolar (Majority & Minority) |
| **Noise** | Lower noise | More noisy |
| **Thermal Stability**| More stable | Prone to thermal runaway |

---
### Related Concepts
#related-concepts

> [[MOSFET]]

[[Bipolar Junction Transistor (BJT)]]
[[Small Signal Analysis of JFET or MOSFET Amplifiers (gm-rd model)]]