---
tags:
  - bjt
  - small-signal-model
  - analog-electronics
  - hybrid-pi-model
  - amplifier-analysis
created: 2025-09-08
aliases:
  - BJT AC Model
  - Hybrid-pi Model
  - h-parameter model
subject: "[[Analog & Digital Electronics]]"
parent: "[[Small Signal Analysis]]"
modified: 2026-08-04T09:12:51
---
### BJT Small-Signal Model
#bjt-model #small-signal-analysis

> The BJT small-signal model is a linear circuit used to represent the AC behavior of a Bipolar Junction Transistor. Since the BJT is an inherently non-linear device, this model is an approximation that is only valid for small AC signals superimposed on a DC operating point (Q-point). It allows us to use standard linear circuit analysis techniques to determine an amplifier's gain, input impedance, and output impedance.

The parameters of the small-signal model are determined by the DC bias conditions, specifically the quiescent collector current ($I_{CQ}$).

---
#### The Hybrid-$\pi$ Model
#hybrid-pi-model

![[BJT Hybrid-Pi Model.jpg]]

This is the most widely used and physically intuitive small-signal model for the BJT. It represents the transistor's AC behavior between its three terminals: base (b), collector (c), and emitter (e).

The key parameters of the model are:
1.  **Transconductance ($g_m$)**: This is the core of the BJT's amplification. It represents the gain of the voltage-controlled current source, relating the AC collector current to the AC base-emitter voltage ($i_c = g_m v_{be}$).
    $$\boxed{\quad g_m = \frac{I_{CQ}}{V_T} \quad}$$
    where $V_T = kT/q$ is the thermal voltage ($\approx 26$ mV at 300K).

2.  **Input Resistance ($r_\pi$)**: This is the AC resistance seen looking into the base terminal. It is the ratio of the AC base-emitter voltage to the AC base current ($r_\pi = v_{be}/i_b$).
    $$\boxed{\quad r_\pi = \frac{\beta}{g_m} = \frac{\beta V_T}{I_{CQ}} \quad}$$
    where $\beta$ (or $h_{fe}$) is the small-signal AC current gain.

3.  **Output Resistance ($r_o$)**: This resistance models the [[Early Effect]] (base-width modulation), which causes the collector current to vary slightly with the collector-emitter voltage.
    $$\boxed{\quad r_o = \frac{V_A}{I_{CQ}} \quad}$$
    where $V_A$ is the Early voltage. In many analyses, $r_o$ is large enough to be considered an open circuit, which simplifies calculations.

---
#### The T-Model
#t-model

The T-model is an alternative representation that is often more convenient for analyzing [[Common Base Amplifier|Common Base]] and [[Common Collector Amplifier|Emitter Follower]] configurations. It features the **dynamic emitter resistance ($r_e$)**.

*   **Emitter Resistance ($r_e$)**: The AC resistance seen looking into the emitter terminal.
    $$\boxed{\quad r_e = \frac{V_T}{I_{EQ}} = \frac{\alpha}{g_m} = \frac{r_\pi}{\beta+1} \quad}$$
    The T-model represents the collector current as a current source $\alpha i_e$ controlled by the emitter current.

---
#### The h-parameter Model
#h-parameter-model

The h-parameter (hybrid-parameter) model is an older, black-box representation based on two-port network theory. While less physically intuitive, it is still part of the GATE syllabus. For a Common Emitter configuration, the relationships are:
$$v_{be} = h_{ie}i_b + h_{re}v_{ce}$$
$$i_c = h_{fe}i_b + h_{oe}v_{ce}$$

*   $h_{ie}$ (Input Impedance) $\approx r_\pi$
*   $h_{fe}$ (Forward Current Gain) $\approx \beta$
*   $h_{re}$ (Reverse Voltage Gain): Very small, typically neglected.
*   $h_{oe}$ (Output Admittance) $\approx 1/r_o$

The key takeaways are the equivalences to the hybrid-$\pi$ parameters.

---
### Related Concepts
#related-concepts

> [[Small Signal Analysis]] (The overall analysis technique)

[[BJT Amplifiers]] (The primary application of these models)
[[Transistor Biasing]] (Essential for setting the Q-point and thus determining the model parameters)
[[Early Effect]] (The physical origin of the output resistance $r_o$)
[[Bipolar Junction Transistor (BJT)|BJT]] (The device being modeled)
[[Two-Port Networks]]
[[Linearization]]
