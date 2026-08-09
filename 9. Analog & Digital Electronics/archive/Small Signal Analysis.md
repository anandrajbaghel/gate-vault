---
tags:
  - circuit-analysis
  - analog-electronics
  - linearization
  - bjt
  - mosfet
created: 2025-09-08
aliases:
  - Small Signal Model
  - AC Analysis
subject: "[[Analog & Digital Electronics]]"
parent: "[[Circuit Analysis Techniques in Analog & Digital Electronics|Circuit Analysis Techniques in Analog & Digital Electronics]]"
modified: 2026-08-04T10:31:03
---
### Small Signal Analysis
#small-signal-analysis #linearization #ac-analysis

> Small-signal analysis is a fundamental technique used to approximate the behavior of non-linear electronic circuits with linear equations. It is valid for [[Small AC Signal Superimposed on Large DC Bias.png|small AC signals superimposed on a large DC bias]]. This method allows us to use linear circuit analysis tools (like [[Kirchhoff's Laws#Kirchhoff's Current Law (KCL)|KCL]], [[Kirchhoff's Laws#Kirchhoff's Voltage Law (KVL)|KVL]], [[Thevenin's theorem]]) to determine the AC characteristics of a circuit, such as gain and impedance.

The core idea is to first establish a DC operating point (Quiescent Point or Q-point) and then analyze the circuit's response to small AC signals fluctuating around this point.

#### General Procedure
#small-signal-analysis/procedure

The analysis is performed in three distinct steps:
1. **DC Analysis**:
    * Determine the DC operating point (Q-point) of the non-linear device (e.g., $I_{CQ}$, $V_{CEQ}$ for a BJT).
    * In this step, all AC signal sources are set to zero (voltage sources are shorted, current sources are opened).
    * Capacitors are treated as open circuits, and inductors are treated as short circuits.
2. **Small-Signal Modeling**:
    * Replace the non-linear device with its corresponding linear small-signal model (e.g., a BJT is replaced by its [[BJT Small-Signal Model#The Hybrid-$ pi$ Model|hybrid-pi model]]).
    * The parameters of this model (like $g_m$, $r_\pi$) depend on the Q-point calculated in the DC analysis.
3. **AC Analysis**:
    * Analyze the resulting [[Linearity in Electric Circuits|linear circuit]] to find AC quantities like voltage gain, current gain, input impedance, and output impedance.
    * In this step, all DC sources are set to zero (voltage sources are shorted, current sources are opened).
    * Large coupling and bypass capacitors are treated as short circuits (assuming the signal frequency is high enough).

---
#### Small-Signal Models for Devices
#small-signal-model

##### Diode Small-Signal Model
#diode-model

For small AC signals, a forward-biased diode can be modeled by its **dynamic resistance**, $r_d$.
$$\boxed{\quad r_d = \frac{\eta V_T}{I_{DQ}} \quad}$$
Where:
* $I_{DQ}$ is the DC quiescent current flowing through the diode.
* $V_T$ is the thermal voltage, $V_T = \frac{kT}{q} \approx 26 \ mV$ at room temperature (300K).
* $\eta$ is the ideality factor (1 for Germanium, approx. 2 for Silicon).

##### BJT Hybrid-$\pi$ Small-Signal Model
#bjt-model #hybrid-pi-model

This is the most common model used for [[BJT Amplifiers|BJT amplifier]] analysis. The key parameters are calculated at the [[BJT Biasing and Thermal Stability|Q-point]].

* **Transconductance ($g_m$)**: Relates the AC collector current to the AC base-emitter voltage ($i_c = g_m v_{be}$).
    $$\boxed{\quad g_m = \frac{I_{CQ}}{V_T} \quad}$$
* **Input Resistance ($r_\pi$)**: The AC resistance seen looking into the base.
    $$\boxed{\quad r_\pi = \frac{\beta}{g_m} = \frac{\beta V_T}{I_{CQ}} \quad}$$
    where $\beta$ (or $h_{fe}$) is the small-signal current gain.
* **Output Resistance ($r_o$)**: Accounts for the Early effect.
    $$\boxed{\quad r_o = \frac{V_A}{I_{CQ}} \quad}$$
    where $V_A$ is the Early voltage. $r_o$ is often large and can be neglected in many calculations.

##### MOSFET Small-Signal Model
#mosfet-model

Similar to the [[Bipolar Junction Transistor (BJT)|BJT]], the [[MOSFET|MOSFET]] model parameters depend on the DC operating point (assuming operation in the saturation region).

* **Transconductance ($g_m$)**: Relates the AC drain current to the AC gate-source voltage ($i_d = g_m v_{gs}$).
    $$\begin{align}
    g_m &= \frac{\partial I_D}{\partial V_{GS}} \bigg|_{Q-point} \\
     &= \sqrt{2k_n' \left(\frac{W}{L}\right) I_{DQ}} = \sqrt{2\mu_n C_{ox} \left(\frac{W}{L}\right) I_{DQ}} \\
     &= \frac{2I_{DQ}}{V_{GSQ} - V_{th}} = \frac{2I_{DQ}}{V_{OV}}
    \end{align}$$
    The boxed formula for GATE is often one of the last two:
    $$\boxed{\quad g_m = \sqrt{2k_n I_{DQ}} = \frac{2I_{DQ}}{V_{OV}} \quad}$$
    where $V_{OV} = V_{GSQ} - V_{th}$ is the overdrive voltage.
* **Output Resistance ($r_o$ or $r_{ds}$)**: Accounts for channel-length modulation.
    $$\boxed{\quad r_o = \frac{1}{\lambda I_{DQ}} \approx \frac{V_A}{I_{DQ}} \quad}$$
    where $\lambda$ is the channel-length modulation parameter and $V_A = 1/\lambda$ is the Early voltage for the [[MOSFET|MOSFET]].

---
### Related Concepts
#related-concepts

> [[Transistor Biasing]] (Essential for setting the Q-point)

[[Amplifiers]] (Primary application of small-signal analysis)
[[Common Source Configuration]] (Bipolar Junction Transistor)
[[MOSFET|MOSFET]]
[[Diodes]]
[[Control Systems]] (The concept of linearization is central to analyzing non-linear systems)