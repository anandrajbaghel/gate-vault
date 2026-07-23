---
tags:
  - power-system
  - transmission-lines
  - power-flow
  - power-system-analysis
  - power-angle-curve
created: 2025-10-11
aliases:
  - Power Transfer in Transmission Lines
  - P-delta curve
  - Q-V curve
  - General Power Flow Equations
subject: "[[Power System]]"
parent:
  - Performance of Transmission Lines
formula:
  - "Real Power Flow through a Transmission Line : $$P_r = \\frac{|V_s||V_r|}{|B|} \\cos(\\beta - \\delta) - \\frac{|A||V_r|^2}{|B|} \\cos(\\beta - \\alpha)$$"
  - "Reactive Power Flow through a Transmission Line : $$Q_r = \\frac{|V_s||V_r|}{|B|} \\sin(\\beta - \\delta) - \\frac{|A||V_r|^2}{|B|} \\sin(\\beta - \\alpha)$$"
  - "Real Power Flow through Lossless Transmission Line : $$P_r = \\frac{|V_s||V_r|}{X} \\sin\\delta$$"
  - "Reactive Power Flow through Lossless Transmission Line : $$Q_r = \\frac{|V_s||V_r|}{X} \\cos\\delta - \\frac{|V_r|^2}{X}$$"
  - "General Power Flow Equations (Using ABCD Parameters) through Transmission Line : $$\\begin{align} P_r &= \\frac{|V_s||V_r|}{|B|} \\cos(\\beta - \\delta) - \\frac{|A||V_r|^2}{|B|} \\cos(\\beta - \\alpha) \\\\ Q_r &= \\frac{|V_s||V_r|}{|B|} \\sin(\\beta - \\delta) - \\frac{|A||V_r|^2}{|B|} \\sin(\\beta - \\alpha)\\end{align}$$"
modified: 2026-07-21T09:58:27
---
### Power Flow through a Transmission Line
#power-flow #power-angle-curve #reactive-power

> The study of power flow deals with the transfer of real $(P)$ and reactive $(Q)$ power from the sending end to the receiving end of a transmission line. The flow is governed by the magnitudes of the sending and receiving end voltages, the impedance of the line, and the phase angle difference between the voltages, known as the **power angle ($\delta$)**.

#### General Power Flow Equations (Using ABCD Parameters)
#power-flow-equations

Let the sending and receiving end voltages be $V_s = |V_s| \angle \delta$ and $V_r = |V_r| \angle 0$. Let the ABCD parameters be in polar form: $A = |A|\angle\alpha$ and $B=|B|\angle\beta$. The complex power at the receiving end is $S_r = P_r + jQ_r$.

The receiving end current is $I_r = \frac{V_s - AV_r}{B}$.
Substituting this into $S_r = V_r I_r^*$, we get the general expressions for real and reactive power received:

$$\boxed{\quad \begin{align}
P_r &= \frac{|V_s||V_r|}{|B|} \cos(\beta - \delta) - \frac{|A||V_r|^2}{|B|} \cos(\beta - \alpha) \\
Q_r &= \frac{|V_s||V_r|}{|B|} \sin(\beta - \delta) - \frac{|A||V_r|^2}{|B|} \sin(\beta - \alpha)
\end{align} \quad}$$
^general-power-equation

> [!pyq]- PYQ : 2018
> ![[ee_2018#^q6]]

> [!memory] Maximum Power Transfer (ABCD Line Model)
> For a transmission line with $|Vs| = |Vr|$, the receiving-end active power is maximized when the power angle $δ$ equals the angle of ABCD parameter $B$ (series impedance): $δ_{max} = ∠B$.
> For a lossless line, $∠B = 90°$, hence $δ_{max} = 90°$; for practical long lines, $∠B < 90°$.
^maximum-power-transfer

---
#### Simplified Model (Short Lossless Line)
#p-delta-q-v-relation

For most practical analyses, especially for understanding the fundamental concepts, ==we assume a short lossless line where resistance $R=0$==.
- The line is represented by only its series reactance, $X$.
- The ABCD parameters become: $A=1\angle0^\circ$, $B=X\angle90^\circ$.
- Substituting these values ($|A|=1, \alpha=0, |B|=X, \beta=90^\circ$) into the [[#^general-power-equation|general equations]] simplifies them significantly.

- **Real Power (P)**:
    $$P_r = \frac{|V_s||V_r|}{X} \cos(90^\circ - \delta) - \frac{1 \cdot |V_r|^2}{X} \cos(90^\circ - 0^\circ)$$
    $$\boxed{\quad P_r = \frac{|V_s||V_r|}{X} \sin\delta \quad}$$
    This crucial relationship shows that **real power flow is primarily dependent on the power angle $\delta$**.

- **Reactive Power (Q)**:
    $$Q_r = \frac{|V_s||V_r|}{X} \sin(90^\circ - \delta) - \frac{1 \cdot |V_r|^2}{X} \sin(90^\circ - 0^\circ)$$
    $$\boxed{\quad Q_r = \frac{|V_s||V_r|}{X} \cos\delta - \frac{|V_r|^2}{X} \quad}$$
    This shows that **reactive power flow is primarily dependent on the magnitude of the voltages**.

> [!pyq]- PYQ : 2020
> ![[ee_2020#^q47]]

---

#### Power-Angle Curve
#power-angle-curve 

![[Power-Angle Curve#^intro]]
![[Power-Angle Curve#^power-angle-curve]]

---
![[Power-Angle Curve#Power Transfer Equation]]

#### Maximum Power Transfer
#maximum-power-transfer/transmission-line 

From the power-angle curve, the maximum power that can be transferred over the lossless line occurs when $\sin\delta = 1$.
-   **Condition for Maximum Power Transfer**: $\delta = 90^\circ$
-   **Maximum Power ($P_{max}$)**:
    $$\boxed{\quad P_{max} = \frac{|V_s||V_r|}{X} \quad}$$
This value is known as the **[[Steady-State Stability Limit#Determining the Stability Limit|steady-state stability limit]]**. Any attempt to transmit more power than this will cause the angle $\delta$ to exceed $90^\circ$, leading to a loss of synchronism and instability.

---
#### Factors Affecting Power Flow
#power-flow/affecting-factors 

Based on the simplified power transfer equation, we can identify three key methods to control and maximize power flow:

1.  **Voltage Levels ($|V_s|, |V_r|$)**: Power transfer is proportional to the product of the voltage magnitudes. Increasing the operating voltage is the most effective way to increase power transfer capability.
2.  **Line Reactance (X)**: Power transfer is inversely proportional to the line's series reactance. Reactance can be reduced by:
    -   Using **[[Inductance of Composite and Bundled Conductors#Bundled Conductors|bundled conductors]]**.
    -   Using **series capacitors** to compensate for the line's inductive reactance.
3.  **Power Angle ($\delta$)**: Real power flow is directly controlled by the angle $\delta$. In a real power system, this angle is controlled by adjusting the mechanical power input to the generators (governor control), which causes them to speed up or slow down momentarily, thus changing their rotor angle.

---
### Related Concepts
#power-system/related-concepts

> [[Power System Stability]] (Directly related to the power-angle curve)

[[Power Flow Studies (Load Flow Analysis)]] (The generalized numerical method for solving power flow in a network)
[[Surge Impedance and Surge Impedance Loading (SIL)]]
[[ABCD Parameters (Generalized Circuit Constants)]]
[[Reactive Power Compensation]]