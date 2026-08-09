---
tags:
  - analog-electronics
  - digital-electronics
  - semiconductor-devices
  - transistors
  - mosfet
  - gate-ee
created: 2025-10-15
aliases:
  - MOSFET
  - MOS Transistor
  - Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET) - Structure, Types (Enhancement, Depletion), and Characteristics
  - NMOS
  - Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET)
  - MOSFETs
subject: "[[Analog & Digital Electronics]]"
parent:
  - Semiconductor Devices and Circuits
modified: 2026-08-04T10:03:57
---
### Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET)
#mosfet

> The **Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET)** is a voltage-controlled transistor and is the most common semiconductor device in use today. Its defining feature is an insulated gate, which is electrically isolated from the semiconductor channel by a thin layer of silicon dioxide ($SiO_2$). This results in an extremely high input impedance, making it ideal for both analog and digital circuits, especially in the form of CMOS logic.

#### Structure and Terminals
#mosfet-structure

A MOSFET is a four-terminal device:
1.  **Gate (G):** The control terminal, typically made of polysilicon.
2.  **Drain (D):** Where the charge carriers exit the channel.
3.  **Source (S):** Where the charge carriers enter the channel.
4.  **Body (B) or Substrate:** The semiconductor base upon which the MOSFET is built. It is usually connected to the most negative (for NMOS) or most positive (for PMOS) voltage in the circuit, often tied to the source.

The gate is separated from the channel by the $SiO_2$ insulator. This prevents any DC current from flowing into the gate, giving the MOSFET its characteristic high input impedance ($> 10^{12} \Omega$).

#### Types of MOSFETs
There are two main categories, each available as N-channel (NMOS) or P-channel (PMOS).

1.  **Enhancement-Mode MOSFET (E-MOSFET):**
    *   **Normally OFF:** There is no physical channel between the source and drain when no gate voltage is applied ($V_{GS} = 0$).
    *   **Operation:** A channel is **induced** or **enhanced** by applying a gate-source voltage $V_{GS}$ greater than a specific **Threshold Voltage ($V_T$)**.
    *   This is the most common type, used extensively in digital logic (CMOS).

2.  **Depletion-Mode MOSFET (D-MOSFET):**
    *   **Normally ON:** A physical channel is manufactured between the source and drain, so current ($I_D$) can flow even with zero gate voltage ($V_{GS} = 0$).
    *   **Operation:**
        *   **Depletion:** Applying a reverse polarity $V_{GS}$ (e.g., negative for NMOS) repels charge carriers, "depleting" the channel and reducing $I_D$.
        *   **Enhancement:** Applying a forward polarity $V_{GS}$ (e.g., positive for NMOS) attracts more carriers, "enhancing" the channel and increasing $I_D$.

#### Operation of Enhancement-Mode MOSFET (NMOS Example)
#enhancement-mode #nmos-operation

The operation is defined by three regions based on the values of $V_{GS}$ and $V_{DS}$.
*   **Cutoff Region ($V_{GS} < V_T$):**
    No inversion layer (channel) is formed. The device is OFF, and ideally, $I_D = 0$.

*   **Triode or Linear Region ($V_{GS} > V_T$ and $V_{DS} < (V_{GS} - V_T)$):**
    A channel is formed, and the device acts like a voltage-controlled resistor. The drain current is given by:
    $$\boxed{\quad I_D = k_n' \left(\frac{W}{L}\right) \left[ (V_{GS} - V_T)V_{DS} - \frac{1}{2}V_{DS}^2 \right] \quad}$$

*   **Saturation Region ($V_{GS} > V_T$ and $V_{DS} \ge (V_{GS} - V_T)$):**
    The channel is "pinched off" at the drain end. The drain current saturates and becomes largely independent of $V_{DS}$, being controlled only by $V_{GS}$. This is the primary region for amplifier operation.
    $$\boxed{\quad I_D = \frac{1}{2} k_n' \left(\frac{W}{L}\right) (V_{GS} - V_T)^2 \quad}$$

#### MOSFET Parameters and Equations
#mosfet-equations

The saturation current equation highlights key design and process parameters:
*   $V_T$: **Threshold Voltage**. The minimum gate voltage needed to turn the device ON.
*   $k_n' = \mu_n C_{ox}$: **Process Transconductance Parameter**.
    *   $\mu_n$: Electron mobility in the channel.
    *   $C_{ox} = \frac{\epsilon_{ox}}{t_{ox}}$: Gate oxide capacitance per unit area, where $\epsilon_{ox}$ is the permittivity and $t_{ox}$ is the thickness of the oxide layer.
*   $\frac{W}{L}$: **Aspect Ratio**. The ratio of the channel width (W) to its length (L). This is a primary design parameter controlled by the circuit designer to set the current handling capability.

#### Transfer Characteristics ($I_D$ vs. $V_{GS}$)
*   **E-MOSFET:** The curve is a parabola starting from $V_{GS} = V_T$. No current flows for $V_{GS} < V_T$.
*   **D-MOSFET:** The curve is also parabolic but exists for both positive and negative $V_{GS}$. It passes through $I_D = I_{DSS}$ at $V_{GS} = 0$.

---
### Related Concepts
#related-concepts

> [[Junction Field Effect Transistor (JFET)]]

[[Bipolar Junction Transistor (BJT)]]
[[Small Signal Analysis of JFET or MOSFET Amplifiers (gm-rd model)]]
[[CMOS Logic Gates]]
[[Logic Families]]

