---
tags:
  - mosfet
  - amplifiers
  - analog-electronics
  - common-source
  - common-drain
  - common-gate
created: 2025-09-08
aliases:
  - MOSFET Amplifier
  - MOS Amp
subject: "[[Analog & Digital Electronics]]"
parent: Amplifiers
modified: 2026-08-04T10:04:02
---
### MOSFET Amplifiers
#mosfet-amplifiers #analog-circuits

> MOSFETs are widely used to design amplifiers due to their high input impedance, scalability, and good frequency response. For amplification, the MOSFET must be biased to operate in the **saturation region**, where the drain current $I_D$ is controlled by the gate-source voltage $V_{GS}$ and is largely independent of the drain-source voltage $V_{DS}$. The analysis of these amplifiers is done using [[Small Signal Analysis]].

#### MOSFET Biasing for Amplification
#mosfet-biasing

The first step in amplifier design is to establish a stable DC operating point (Q-point) in the saturation region. This ensures the transistor remains in its active amplification mode for the entire swing of the AC input signal.
The condition for saturation is:
$$\boxed{\quad V_{DS} \ge V_{GS} - V_{th} \quad \text{or} \quad V_{DS} \ge V_{OV} \quad}$$
where $V_{OV}$ is the overdrive voltage. Common biasing techniques include voltage divider biasing and feedback resistor biasing.

#### Small-Signal Operation
#small-signal-model

Once the Q-point ($I_{DQ}, V_{GSQ}, V_{DSQ}$) is set, the non-linear MOSFET equations are linearized around this point to create a small-signal model. This model is used for AC analysis. The key parameters are:

1. **Transconductance ($g_m$)**: The gain of the voltage-controlled current source.
    $$\boxed{\quad g_m = \sqrt{2k_n' \left(\frac{W}{L}\right) I_{DQ}} = \frac{2I_{DQ}}{V_{OV}} \quad}$$
2. **Output Resistance ($r_o$)**: Models the channel-length modulation effect.
    $$\boxed{\quad r_o = \frac{1}{\lambda I_{DQ}} = \frac{V_A}{I_{DQ}} \quad}$$
    where $V_A$ is the Early Voltage.

---
### Amplifier Configurations
#mosfet-configurations

There are three basic single-stage MOSFET amplifier configurations.

#### 1. Common Source (CS) Amplifier
#common-source-amplifier

The input is applied to the Gate, the output is taken from the Drain, and the Source is common (often connected to ground or through a bypass capacitor). It is the most widely used configuration.

* **Characteristics**: High voltage gain, high input impedance, moderate-to-high output impedance. The output is **180° out of phase** with the input (inverting).
* **Voltage Gain ($A_v$)**:
    $$\boxed{\quad A_v = -g_m (R_D \parallel r_o) \quad}$$
    If $r_o \gg R_D$, then $A_v \approx -g_m R_D$.
* **Input Impedance ($R_{in}$)**:
    $R_{in} = R_G$, where $R_G$ is the gate biasing resistor (e.g., $R_1 \parallel R_2$ in a voltage divider). Since the gate current is zero, this is very high.
* **Output Impedance ($R_{out}$)**:
    $$\boxed{\quad R_{out} = R_D \parallel r_o \quad}$$

##### Common Source with Source Degeneration
A resistor ($R_S$) is added in the source path without a bypass capacitor. This provides negative feedback.
* **Effects**: Stabilizes the gain, increases output impedance, and improves linearity at the cost of reduced voltage gain.
* **Voltage Gain ($A_v$)**:
    $$\boxed{\quad A_v = \frac{-g_m (R_D \parallel r_o)}{1 + g_m R_S + \frac{R_D}{r_o}} \approx \frac{-g_m R_D}{1 + g_m R_S} \quad}$$

#### 2. Common Drain (CD) Amplifier / Source Follower
#common-drain-amplifier #source-follower

The input is applied to the Gate, the output is taken from the Source, and the Drain is common (connected to $V_{DD}$).

* **Characteristics**: Voltage gain slightly less than 1, **non-inverting**, very high input impedance, and low output impedance. It is used as a **voltage buffer**.
* **Voltage Gain ($A_v$)**:
    $$\boxed{\quad A_v = \frac{g_m(R_S \parallel r_o)}{1 + g_m(R_S \parallel r_o)} \approx \frac{g_m R_S}{1 + g_m R_S} \quad}$$
    This is always positive and less than 1.
* **Input Impedance ($R_{in}$)**:
    $R_{in} = R_G$, which is very high.
* **Output Impedance ($R_{out}$)**:
    $$\boxed{\quad R_{out} = R_S \parallel \frac{1}{g_m} \parallel r_o \approx R_S \parallel \frac{1}{g_m} \quad}$$
    Since $1/g_m$ is typically small, the output impedance is low.

#### 3. Common Gate (CG) Amplifier
#common-gate-amplifier

The input is applied to the Source, the output is taken from the Drain, and the Gate is common (AC ground).

* **Characteristics**: Non-inverting voltage gain (similar to CS but non-inverting), low input impedance, and high output impedance. It is often used as a **current buffer** or for high-frequency applications.
* **Voltage Gain ($A_v$)**:
    $$\boxed{\quad A_v = g_m (R_D \parallel r_o) \quad}$$
    (Assuming the input source resistance is small). This is positive (non-inverting).
* **Input Impedance ($R_{in}$)**:
    $$\boxed{\quad R_{in} = \frac{1}{g_m} \parallel R_S \parallel r_o \approx \frac{1}{g_m} \quad}$$
    This is very low.
* **Output Impedance ($R_{out}$)**:
    $R_{out} = R_D \parallel r_o$, which is high.

#### Summary of MOSFET Amplifier Characteristics

| Characteristic      | Common Source (CS)                      | Common Drain (CD)                   | Common Gate (CG)                 |
| ------------------- | --------------------------------------- | ----------------------------------- | -------------------------------- |
| **Voltage Gain** ($A_v$) | High, Inverting ($-g_m R_D$)          | $\approx 1$, Non-inverting          | High, Non-inverting ($g_m R_D$)  |
| **Current Gain** ($A_i$) | High                                    | High                                | $\approx 1$                      |
| **Input Impedance** | Very High ($R_G$)                       | Very High ($R_G$)                   | Low ($\approx 1/g_m$)              |
| **Output Impedance**| Moderate/High ($R_D \parallel r_o$)     | Low ($\approx 1/g_m$)               | High ($R_D \parallel r_o$)       |
| **Phase Shift**     | 180°                                    | 0°                                  | 0°                               |
| **Application**     | Voltage Amplifier                       | Voltage Buffer, Driver Stage        | Current Buffer, RF Amplifier     |

---
### Related Concepts
#related-concepts

> [[MOSFET]] (The underlying device)

[[Small Signal Analysis]] (The core analysis technique)
[[Transistor Biasing]] (Setting up the DC conditions)
[[Amplifiers]] (Parent category)
[[BJT Amplifiers]] (Comparison with BJT counterparts)
[[Frequency Response]] (Analysis of amplifier performance vs. frequency)
[[Current Mirrors]] (Used as active loads to achieve very high gain)
[[Linearization]]