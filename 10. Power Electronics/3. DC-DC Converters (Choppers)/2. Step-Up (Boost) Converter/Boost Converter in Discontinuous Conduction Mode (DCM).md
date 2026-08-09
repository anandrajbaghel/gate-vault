---
tags:
  - power-electronics
  - dc-dc-converters
  - choppers
  - boost-converter
  - dcm-analysis
created: 2025-10-15
aliases:
  - Boost Converter DCM Analysis
  - Discontinuous Conduction Mode Boost
subject: "[[Power Electronics]]"
parent:
  - "[[Boost Converter]]"
modified: 2026-08-04T09:14:33
---
### Analysis of Boost Converter in DCM
#power-electronics #boost-converter #dcm #steady-state-analysis

> Discontinuous Conduction Mode (DCM) in a boost converter occurs under light load conditions, where the inductor current falls to zero and remains there for a portion of the switching cycle. This mode significantly changes the converter's behavior. The output voltage is no longer solely a function of the duty cycle ($D$) but becomes dependent on the load resistance ($R$), inductance ($L$), and switching frequency ($f_s$), which can complicate voltage regulation.

#### Inductor Current and Three Operating States
In DCM, the switching period $T_s$ is divided into three distinct states.

1.  **State 1: Switch ON ($0 < t \le DT_s$)**
    *   The switch S is closed, and the inductor is connected to the input voltage $V_{in}$.
    *   The inductor current $i_L$ ramps up linearly from zero to its peak value, $I_{L,peak}$.
    $$I_{L,peak} = \frac{V_{in}}{L} DT_s$$

2.  **State 2: Switch OFF, Diode ON ($DT_s < t \le (D+D_1)T_s$)**
    *   The switch S opens, and the diode D conducts. The voltage across the inductor is $v_L = V_{in} - V_o$.
    *   The inductor current ramps down from $I_{L,peak}$ to zero over a time interval $D_1 T_s$.
    $$I_{L,peak} = \frac{V_o - V_{in}}{L} D_1 T_s$$

3.  **State 3: Switch OFF, Diode OFF ($(D+D_1)T_s < t \le T_s$)**
    *   The inductor current has reached zero, so the diode D turns off.
    *   The inductor current remains at zero for the rest of the period.
    *   The load current is supplied entirely by the output capacitor C.

---
#### Voltage Relationship in DCM
The relationship $V_o = V_{in} / (1-D)$ is not valid in DCM. A new relationship is derived using the volt-second balance and power balance principles.

From the volt-second balance on the inductor:
$$\begin{align}
V_{in} (DT_s) + (V_{in} - V_o) (D_1 T_s) &= 0 \\
D V_{in} &= (V_o - V_{in}) D_1 \implies D_1 = \frac{D V_{in}}{V_o - V_{in}}
\end{align}$$
The average input current $I_{in}$ is the average inductor current $I_L$, which is the area of the triangular current pulse divided by the period $T_s$:
$$I_{in} = I_L = \frac{1}{T_s} \left(\frac{1}{2} \cdot I_{L,peak} \cdot (D+D_1)T_s\right) = \frac{I_{L,peak}(D+D_1)}{2}$$
Assuming 100% efficiency, the input power equals the output power: $P_{in} = P_{out}$.
$$V_{in} I_{in} = \frac{V_o^2}{R}$$
Substitute $I_{in}$ and $I_{L,peak} = \frac{V_{in}D}{Lf_s}$ into the power equation:
$$V_{in} \left[ \frac{1}{2} \left( \frac{V_{in}D}{Lf_s} \right) (D+D_1) \right] = \frac{V_o^2}{R}$$
Now substitute the expression for $D_1$:
$$\frac{V_{in}^2 D}{2Lf_s} \left( D + \frac{D V_{in}}{V_o - V_{in}} \right) = \frac{V_o^2}{R}$$
$$\frac{V_{in}^2 D^2}{2Lf_s} \left( 1 + \frac{V_{in}}{V_o - V_{in}} \right) = \frac{V_o^2}{R} \implies \frac{V_{in}^2 D^2}{2Lf_s} \left( \frac{V_o}{V_o - V_{in}} \right) = \frac{V_o^2}{R}$$
Canceling $V_o$ and rearranging gives a quadratic equation for the voltage gain $M = V_o/V_{in}$:
$$M^2 - M - \frac{D^2 R}{2Lf_s} = 0$$
Solving for M (and taking the positive root since $M>1$ for a boost converter):
$$\boxed{\quad M = \frac{V_o}{V_{in}} = \frac{1 + \sqrt{1 + \frac{2D^2 R}{Lf_s}}}{2} \quad}$$
*   **Key Insight:** In DCM, the voltage gain $M$ depends on the duty cycle $D$ as well as the load resistance $R$. As the load gets lighter (R increases), the voltage gain $M$ increases for a fixed duty cycle, leading to a rise in output voltage if not controlled by a feedback loop.

---
### Related Concepts
#dcm-analysis/related-concepts

> [[Boost Converter]]

[[Boost Converter in Continuous Conduction Mode (CCM)]]
[[Conduction Modes in Power Electronics]]
[[CCM-DCM Boundary]]
[[DC-DC Converters (Choppers)]]
[[Inductor Volt-Second Balance]]
