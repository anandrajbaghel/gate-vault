---
tags:
  - analog-electronics
  - semiconductor-devices
  - diodes
  - gate-ee
created: 2025-10-15
aliases:
  - PN Junction Diode
  - Diode Characteristics
  - Semiconductor Diode
  - P-N Junction Diode - Characteristics and Models
  - Barrier Potential
  - Built-in Potential
  - Shockley Diode Equation
  - Cut-in Voltage
  - Diode Resistance
  - Diode Capacitances
  - Piecewise Linear Model
  - Constant Voltage Drop (CVD) Model
  - Ideal Diode Model
subject: "[[Analog & Digital Electronics]]"
parent:
  - Semiconductor Devices and Circuits
modified: 2026-08-04T10:10:11
---
### P-N Junction Diode
#pn-junction #semiconductor-diode

> A **P-N Junction Diode** is a fundamental two-terminal semiconductor device created by joining a P-type and an N-type semiconductor. Its primary characteristic is that it allows electric current to pass predominantly in one direction (forward bias) while offering very high resistance to the flow of current in the opposite direction (reverse bias).

#### Formation and Unbiased Condition
#depletion-region #barrier-potential

A P-N junction is formed by doping a single semiconductor crystal with acceptor impurities on one side (creating P-type material with holes as majority carriers) and donor impurities on the other side (creating N-type material with electrons as majority carriers).

1.  **Diffusion:** Due to the concentration gradient, majority carriers (holes from P-side, electrons from N-side) diffuse across the junction and recombine.
2.  **Depletion Region:** As carriers diffuse, they leave behind immobile charged ions (negative acceptors on the P-side, positive donors on the N-side) near the junction. This region, depleted of free charge carriers, is called the **depletion region** or **space charge region**.
3.  **Barrier Potential ($V_{bi}$):** The accumulation of these immobile ions creates an electric field that opposes further diffusion. The potential difference across this region is the **built-in potential** or **barrier potential**.

The built-in potential is given by:
$$\boxed{\quad V_{bi} = V_T \ln\left(\frac{N_A N_D}{n_i^2}\right) \quad}$$
where $V_T = kT/q$ is the thermal voltage (~26 mV at 300K), $N_A$ and $N_D$ are the acceptor and donor doping concentrations, and $n_i$ is the intrinsic carrier concentration.

#### Biasing of a P-N Junction Diode
#forward-bias #reverse-bias

*   **Forward Bias ($V > 0$):** The positive terminal of an external voltage source is connected to the P-side and the negative terminal to the N-side.
    *   The applied field opposes the built-in field, reducing the barrier potential to $(V_{bi} - V)$.
    *   The depletion region width *decreases*.
    *   Majority carriers have enough energy to cross the narrowed junction, resulting in a large **forward current**.
*   **Reverse Bias ($V < 0$):** The negative terminal is connected to the P-side and the positive terminal to the N-side.
    *   The applied field aids the built-in field, increasing the barrier potential to $(V_{bi} + |V|)$.
    *   The depletion region width *increases*.
    *   Majority carrier flow is blocked. A very small **reverse saturation current ($I_s$)** flows due to thermally generated minority carriers. This current is largely independent of the applied reverse voltage.

#### V-I Characteristics and Diode Current Equation
#vi-characteristics #shockley-equation

The relationship between the voltage across the diode ($V$) and the current through it ($I$) is described by the **Shockley Diode Equation**:
$$\boxed{\quad I = I_s \left( e^{\frac{V}{\eta V_T}} - 1 \right) \quad}$$
-   $I_s$: Reverse saturation current (typically nA to µA range).
-   $\eta$: Ideality factor (or emission coefficient). $\eta=1$ for Germanium, $\eta \approx 2$ for Silicon.
-   $V_T$: Thermal voltage.
-   **Cut-in Voltage ($V_\gamma$):** The forward voltage below which the current is negligible. For practical purposes, $V_\gamma \approx 0.7V$ for Silicon and $V_\gamma \approx 0.3V$ for Germanium.

#### Diode Resistance
#diode-resistance #dynamic-resistance

*   **DC (Static) Resistance:** Resistance at a specific operating point (Q-point). $$R_{dc} = V_Q / I_Q$$
*   **AC (Dynamic) Resistance:** Resistance to a [[Small AC Signal Superimposed on Large DC Bias.png|small AC signal superimposed on a DC bias]]. It is the reciprocal of the slope of the V-I characteristic at the Q-point.
    $$\begin{align}
     \frac{dI}{dV} &= \frac{I_s}{\eta V_T} e^{\frac{V}{\eta V_T}} \approx \frac{I+I_s}{\eta V_T} \\
     r_{ac} &= \frac{dV}{dI} \approx \frac{\eta V_T}{I+I_s}
    \end{align}$$
    For forward bias where $I \gg I_s$:
    $$\boxed{\quad r_{ac} = \frac{\eta V_T}{I} \quad}$$

#### Diode Capacitances
#transition-capacitance #diffusion-capacitance

A P-N junction exhibits two types of capacitance which are significant in high-frequency applications.
1.  **Transition (or Depletion) Capacitance ($C_T$):** Dominant in **reverse bias**. The depletion region acts as a dielectric between the P and N regions (acting as capacitor plates).
    $$\boxed{\quad C_T = \frac{C_{j0}}{\left(1 + \frac{V_R}{V_{bi}}\right)^n} \quad}$$
    where $C_{j0}$ is the zero-bias capacitance, $V_R$ is the magnitude of the reverse voltage, and $n$ is the grading coefficient (1/2 for abrupt junction, 1/3 for linearly graded junction). $C_T$ decreases as reverse voltage increases.
2.  **Diffusion (or Storage) Capacitance ($C_D$):** Dominant in **forward bias**. It arises from the time delay associated with injecting and removing minority charge carriers stored near the junction.
    $$\boxed{\quad C_D = \frac{\tau_T}{r_{ac}} = \frac{\tau_T I}{\eta V_T} \quad}$$
    where $\tau_T$ is the mean lifetime of minority carriers. $C_D$ is directly proportional to the forward current $I$.

#### Diode Models for Circuit Analysis
#diode-models #circuit-analysis

1.  **Ideal Diode Model:** The simplest model.
    *   Forward Bias: A closed switch (zero resistance, zero voltage drop).
    *   Reverse Bias: An open switch (infinite resistance, zero current).
2.  **Constant Voltage Drop (CVD) Model:** A more practical and widely used model.
    *   Forward Bias: An ideal switch in series with a battery of voltage $V_\gamma$ (e.g., 0.7V for Si).
    *   Reverse Bias: An open switch.
3.  **Piecewise Linear Model:** A more accurate model.
    *   Forward Bias: A battery $V_\gamma$ in series with the dynamic forward resistance $r_{ac}$.
    *   Reverse Bias: An open switch (or a very large reverse resistance $R_r$).

#### Temperature Effects
#temperature-effects

*   **Reverse Saturation Current ($I_s$):** $I_s$ is highly sensitive to temperature. It approximately **doubles for every 10°C rise** in temperature.
*   **Forward Voltage Drop ($V$):** For a constant forward current, the voltage drop across the diode **decreases** with increasing temperature.
    $$\frac{dV}{dT} \approx -2.5 \text{ mV}/^\circ\text{C}$$

---
### Related Concepts
#related-concepts

> [[Zener Diode]]

[[Rectifier Circuits]]
[[Clipper and Clamper Circuits]]
[[Bipolar Junction Transistor (BJT)]] (Formed by two back-to-back P-N junctions)