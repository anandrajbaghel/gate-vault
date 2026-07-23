---
tags:
  - power-systems
  - stability
  - power-angle-curve
  - steady-state-stability
  - transient-stability
created: 2025-10-12
aliases:
  - P-δ Curve
  - Power-Angle Characteristic (in Power System)
  - Power Transfer Equation
  - Transfer Reactance
  - Synchronizing Power Coefficient
subject: "[[Power System]]"
parent:
  - Power System Stability
formula:
  - "Power-Angle Curve (single-machine-infinite-bus (SMIB)) : $$P = \\frac{|E||V|}{X} \\sin(\\delta) = P_{max}\\sin(\\delta)$$"
  - "Synchronizing Power Coefficient : $$S_p = \\frac{dP}{d\\delta} = \\frac{d}{d\\delta}(P_{max}\\sin\\delta) = P_{max}\\cos\\delta$$"
modified: 2026-07-23T21:24:09
---
### Power-Angle Curve
#power-systems/stability #power-angle-curve

> The **Power Angle Curve** (or P-δ curve) is a fundamental concept in [[Classification of Power System Stability|power system stability]] analysis. It is ==a graphical representation of the relationship between the real power ($P$) transferred from a synchronous generator to the grid (or between two buses) and the angular separation ($\delta$) between their respective voltages==. This curve is the foundation for understanding both steady-state and transient stability.
^intro

![[Power-Angle Curve.png]]
^power-angle-curve

---
#### Power Transfer Equation
#power-angle-equation

Consider a simple single-machine-infinite-bus (SMIB) system, where a generator with [[Internal EMF|internal voltage]] $E \angle \delta$ is connected to an infinite bus with voltage $V \angle 0$ through a total reactance $X$.

![[SMIB system.png]]

The real power delivered by the generator is given by the equation:
$$\boxed{\quad P = \frac{|E||V|}{X} \sin(\delta) \quad}$$
This can be written as:
$$\boxed{\quad P = P_{max} \sin(\delta) \quad}$$
where $P_{max} = \frac{|E||V|}{X}$ is the maximum power that can be transferred.

> [!concept] Phase vs. Line Voltage Convention
> In the SMIB power transfer equation $$P = \frac{|E||V|}{X} \sin(\delta)$$
> - If $E$ and $V$ are **line-to-neutral (phase)** voltages, $P$ calculates the **per-phase** power. Total power is $3P$.
> - If $E$ and $V$ are **line-to-line** voltages, the formula *directly* yields the **total 3-phase power** (since the $\sqrt{3}$ factors from the line voltages naturally multiply to 3: $\frac{\sqrt{3}E_{ph} \times \sqrt{3}V_{ph}}{X} = 3 \times P_{ph}$). 
> This is why power system textbooks often write the formula without a '3' multiplier!

---
#### Analysis of the Curve
#power-angle-curve/analysis #synchronizing-power 

The P-δ curve is a sinusoid, and its characteristics define the stability of the system.

1.  **Stable Operating Region (0° < δ < 90°):**
    * In this region, if the generator's rotor angle $\delta$ increases slightly (e.g., due to a small increase in mechanical input), the electrical power output $P$ also increases. This creates a decelerating (restoring) torque that pulls the rotor back towards its original position.
    * The slope of the curve, $\frac{dP}{d\delta}$, is positive. This slope is known as the **synchronizing power coefficient**, and it represents the stiffness of the connection. A steeper slope means a more stable system.
    ![[Plot - Synchronizing Power Coefficient.png]]
    $$S_p = \frac{dP}{d\delta} = \frac{d}{d\delta}(P_{max}\sin\delta) = P_{max}\cos\delta$$
2.  **Steady-State Stability Limit (δ = 90°):**
    * This is the peak of the curve, where the maximum possible power ($P_{max}$) is transferred.
    * Operating at or beyond this point is unstable in a steady state. This value represents the **[[Steady-State Stability Limit]]**.

3.  **Unstable Operating Region (δ > 90°):**
    * In this region, the slope $\frac{dP}{d\delta}$ is negative.
    * If the rotor angle $\delta$ increases beyond 90°, the electrical power output $P$ starts to decrease. The mechanical input now exceeds the electrical output, creating an accelerating torque that pushes the rotor further away, causing it to lose synchronism.

> [!info] Practical Operation
> Power systems never operate near $90^\circ$ under normal conditions. Typical operating angles are between $30^\circ$ and $45^\circ$ to maintain a sufficient [[Steady-State Stability Limit#Steady-State Stability Margin (SSSM)|steady-state stability margin]].

---
#### Factors Affecting the Power Angle Curve
#power-angle-curve/factors

The peak of the curve ($P_{max}$) scales directly with internal voltage ($|E|$), infinite bus voltage ($|V|$), and is inversely proportional to transfer reactance ($X$). For specific methods to alter these parameters in a physical grid, see [[Steady-State Stability Limit#Methods to Improve the Stability Limit|Methods to Improve the Stability Limit]]

---
#### Effect of Saliency (Salient Pole Machines)
#power-angle-curve/salient-pole

The standard $P = P_{max}\sin\delta$ equation assumes uniform air gap reactance ($X_d = X_q$). For salient pole synchronous machines, the varying air gap introduces a **reluctance power** component.

The modified power-angle equation becomes:
$$\boxed{\quad P = \frac{|E||V|}{X_d} \sin\delta + \frac{|V|^2}{2} \left( \frac{1}{X_q} - \frac{1}{X_d} \right) \sin(2\delta) \quad}$$
* **First Term:** Fundamental excitation power (dependent on $E$).
* **Second Term:** Reluctance power (independent of excitation, relies on saliency $X_d > X_q$).

> [!concept] Impact on the Curve
> The addition of the $\sin(2\delta)$ term distorts the pure sinusoid. The overall curve is skewed to the left, meaning **the maximum power ($P_{max}$) now occurs at an angle $\delta < 90^\circ$** (typically between $60^\circ$ and $70^\circ$).

---

> [!examtip]- Power-Angle Formula — Correct Usage (Exam Takeaways)
> - Use **$P = \dfrac{V_s V_r}{X}\sin\delta$** **only** for **power flow between two known bus voltages** (pure transmission line problems).
> - Use **$P = \dfrac{EV}{X}\sin\delta$** for a **Single Machine Infinite Bus (SMIB)** system.
> - In SMIB, **$\delta$ is the angle between internal emf $E$ and infinite bus voltage $V$**, not between two bus voltages.
> - If **$X_d$ or $X_d'$** is given, the problem involves **machine internal dynamics**, not simple line power flow.
> - If **power factor is given**, it is a strong hint that **internal emf $E$ must be computed first**.
> - **Transmission-line power flow** → terminal voltages matter.
> - **Generator power-angle analysis** → internal emf matters.

> [!examtip] Common Exam Traps
> > [!pyq]- PYQ : 2019
> > ![[ee_2019#^q51]]
> 
> - Do **not** use $V_s V_r$ when one side is a **generator internal emf**.
> - Do **not** ignore $X_d'$ in SMIB problems — it must be included in $X$.
> - If $E$ is not given explicitly, **power factor information exists to help you find it**.

> [!memory]- One-Line Memory Rule
> - **Line problem** → $V_s V_r$
> - **Machine–bus problem** → $E V$
> - **$X_d'$ present?** → Think *power-angle of generator*, not line flow.

---
### Related Concepts
#power-systems/related-concepts

> [[Classification of Power System Stability|Power System Stability]]

[[Classification of Power System Stability]]
[[Steady-State Stability Limit]]
[[Equal Area Criterion for Stability Analysis]]
[[Swing Equation]]
[[Power-Angle Characteristics for Synchronous Machines]] (in details)
