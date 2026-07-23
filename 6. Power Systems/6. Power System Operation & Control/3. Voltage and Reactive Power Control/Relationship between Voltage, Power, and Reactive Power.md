---
tags:
  - power-systems
  - power-flow
  - voltage-control
  - reactive-power
  - stability
created: 2025-10-14
aliases:
  - P-δ and Q-V Relationship
  - Power-Voltage Relationship
  - Power-Angle Relationship
  - The Decoupling Principle
subject: "[[Power System]]"
parent: Voltage and Reactive Power Control
formula:
  - "Active Power Received : $$P_r = \\frac{|V_s||V_r|}{X} \\sin(\\delta)$$"
  - "Reactive Power Received : $$Q_r = \\frac{|V_s||V_r|\\cos(\\delta) - |V_r|^2}{X}$$"
modified: 2026-07-23T21:27:17
---
### Relationship between Voltage, Power, and Reactive Power
#power-flow #voltage-control #reactive-power

> In high-voltage AC transmission systems, which are predominantly inductive (high X/R ratio), there exists a crucial and largely decoupled relationship between active power/reactive power and voltage angle/magnitude. Understanding this relationship is fundamental to power flow studies, stability analysis, and voltage control.

The two core principles are:
1.  **Active Power (P)** is strongly linked to the **voltage phase angle difference ($\delta$)**.
2.  **Reactive Power (Q)** is strongly linked to the **voltage magnitude difference ($|V_s| - |V_r|$).**

---
#### Power Flow Equations
#power-flow-equations

Consider a simple lossless transmission line model with sending-end voltage $V_s = |V_s| \angle \delta$ and receiving-end voltage $V_r = |V_r| \angle 0$, connected by a reactance $X$.

The complex power received at the receiving end is $S_r = P_r + jQ_r = V_r I^*$. The current is $I = \frac{V_s - V_r}{jX}$. After substitution and separating real and imaginary parts, we get the exact expressions for power received:

-   **Active Power Received ($P_r$)**:
    $$\boxed{\quad P_r = \frac{|V_s||V_r|}{X} \sin(\delta) \quad}$$

-   **Reactive Power Received ($Q_r$)**:
    $$\boxed{\quad Q_r = \frac{|V_s||V_r|\cos(\delta) - |V_r|^2}{X} \quad}$$

---
#### Active Power - Angle (P-δ) Relationship
#power-angle-curve #active-power

The equation for active power, $P_r = \frac{|V_s||V_r|}{X} \sin(\delta)$, defines the **[[Power-Angle Curve]]**.

-   **Control**: The flow of real power between two points in a network is controlled primarily by adjusting the phase angle difference ($\delta$) between their voltages.
-   **Stability**: The maximum power that can be transferred is $P_{max} = \frac{|V_s||V_r|}{X}$, which occurs at $\delta = 90^\circ$. This limit, known as the **[[Steady-State Stability Limit]]**, is a critical concept in [[Classification of Power System Stability|Power System Stability]].
-   **Dependence**: For a given voltage magnitude, $P$ is almost exclusively a function of $\delta$.

---
#### Reactive Power - Voltage (Q-V) Relationship
#q-v-relationship #voltage-control

In transmission systems, the angle $\delta$ is usually small (typically $< 30^\circ$). For small angles, $\cos(\delta) \approx 1$. Applying this approximation to the reactive power equation:
$$ Q_r \approx \frac{|V_s||V_r| - |V_r|^2}{X} = \frac{|V_r|(|V_s| - |V_r|)}{X} $$
This simplified equation clearly shows the strong link between reactive power and voltage magnitude.

-   **Control**: The flow of reactive power is determined by the magnitude of the voltage difference between two points. Reactive power flows from the point of higher voltage to the point of lower voltage.
-   **Voltage Support**: This relationship is the basis of all voltage control methods.
    -   To **raise** the voltage at a bus ($|V_r|$), you must **inject** reactive power into it (make $Q_r$ negative, meaning the bus is delivering Q). This is done using shunt capacitors or over-excited synchronous condensers.
    -   To **lower** the voltage at a bus ($|V_r|$), you must **absorb** reactive power from it (make $Q_r$ positive, meaning the bus is consuming Q). This is done using shunt reactors or under-excited synchronous condensers.

---
#### The Decoupling Principle
#decoupling-principle #fdlf

The strong coupling between (P and δ) and (Q and |V|), and the weak coupling between (P and |V|) and (Q and δ) is known as the **decoupling principle**.

-   **Strong Coupling**: $\frac{\partial P}{\partial \delta}$ and $\frac{\partial Q}{\partial |V|}$ have large values.
-   **Weak Coupling**: $\frac{\partial P}{\partial |V|}$ and $\frac{\partial Q}{\partial \delta}$ have small values.

This principle is exploited in power flow analysis, most notably as the foundation for the highly efficient **[[Fast Decoupled Load Flow (FDLF)]]** algorithm, which solves the P-δ and Q-V problems separately and iteratively.

---
### Related Concepts
#power-flow/related-concepts

> [[Voltage and Reactive Power Control]]

[[Power Flow through a Transmission Line]]
[[Power-Angle Curve]]
[[Classification of Power System Stability|Power System Stability]]
[[Fast Decoupled Load Flow (FDLF)]]
[[Reactive Power Compensation]]