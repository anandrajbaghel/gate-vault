---
tags:
  - electrical-machines/synchronous-machines
  - power-angle
  - stability
  - power-transfer
created: 2025-07-20
aliases:
  - Power-Angle Curve (in Synchronous Machines)
  - Load Angle Characteristics
  - Torque-Angle Curve
  - Power-Angle Equation
  - Power Equation for a Cylindrical Rotor Alternator
  - Power Equation for a Salient Pole Alternator
subject: "[[Electrical Machines]]"
parent: "[[Synchronous Machines]]"
formula:
  - "Reluctance Power (Salient Pole Alternator) : $$P = |V_t|^2 \\frac{X_d - X_q}{2X_d X_q} \\sin(2\\delta)$$"
  - "Power Equation for a Salient Pole Alternator : $$P_{ph} = \\underbrace{\\frac{|E_f||V_t|}{X_d} \\sin\\delta}_{\\text{Excitation Power}} + \\underbrace{|V_t|^2 \\frac{X_d - X_q}{2X_d X_q} \\sin(2\\delta)}_{\\text{Reluctance Power}}$$"
  - "Reactive Power (Cylindrical) : $$Q_{ph} = \\frac{|E_f||V_t|}{X_s} \\cos\\delta - \\frac{|V_t|^2}{X_s}$$"
  - "Reactive Power (Salient Pole) : $$Q_{ph} = \\frac{|E_f||V_t|}{X_d} \\cos\\delta - |V_t|^2 \\left[ \\frac{\\cos^2\\delta}{X_d} + \\frac{\\sin^2\\delta}{X_q} \\right]$$"
modified: 2026-07-21T08:55:21
---
### Power-Angle Characteristics
#power-angle-curve #synchronous-machine #stability-limit #load-angle

> ==The **power-angle characteristic** of a synchronous machine describes the relationship between the real power delivered by (or supplied to) the machine and its **power angle** (or **load angle**), $\delta$.== This characteristic is fundamental to understanding the [[Steady-State Stability Limit|steady-state stability]] and the maximum power transfer capability of the machine. ==The [[Equivalent Circuit and Phasor Diagram of an Alternator#Key Angles|power angle]], $\delta$, is defined as the angle between the rotor-induced EMF phasor ($\vec{E_f}$) and the terminal voltage phasor ($\vec{V_t}$).==

#### Power Equation for a Cylindrical Rotor Alternator
#cylindrical-rotor #power-equation

For a [[Constructional Features of Synchronous Machines#2. Cylindrical (Non-Salient) Rotor|cylindrical (non-salient) rotor]] alternator, ==the synchronous reactance $X_s$ is uniform==. By neglecting the armature resistance $R_a$ (a common and valid approximation since $X_s \gg R_a$), the per-phase real power output $P$ can be derived from the [[Equivalent Circuit and Phasor Diagram of an Alternator|equivalent circuit]].

The [[AC Power Analysis#Complex Power, $ vec{S}$|complex power]] output ==per phase== is $S = P+jQ = \vec{V_t} \vec{I_a}^*$.

From the [[Equivalent Circuit and Phasor Diagram of an Alternator#Per-Phase Equivalent Circuit|voltage equation]], $\vec{E_f} = \vec{V_t} + j\vec{I_a}X_s$, we can find the armature current: $$\vec{I_a} = \frac{\vec{E_f} - \vec{V_t}}{jX_s} = \frac{|E_f|\angle\delta - |V_t|\angle0^\circ}{jX_s}$$

Substituting this into the power equation and ==considering only the real part gives the real power per phase==: $$\boxed{\quad P_{ph} = \frac{|E_f||V_t|}{X_s} \sin\delta \quad}$$

Taking the imaginary part of $S = P + jQ = \vec{V_t} \vec{I_a}^*$: $$Q_{ph} = \frac{\vert{}E_f\vert{}\vert{}V_t\vert{}}{X_s} \cos\delta - \frac{\vert{}V_t\vert{}^2}{X_s}$$

==For a three-phase machine, the total power is:== $$\boxed{\quad P_{3\phi} = \frac{3|E_f||V_t|}{X_s} \sin\delta \quad}$$
==This equation shows that the power output is a sinusoidal function of the power angle $\delta$.==

$$Q_{3\phi} = \frac{3\vert{}E_f\vert{}\vert{}V_t\vert{}}{X_s} \cos\delta - \frac{3\vert{}V_t\vert{}^2}{X_s}$$

> [!pyq]- PYQ : 2020
> ![[ee_2020#^q46]]

> [!info] Impact of Resistance
> If line resistance $R$ is significant, the purely reactive $X$ is replaced by complex impedance $Z$. The curve's peak shifts left, occurring at $\delta < 90^\circ$. For the full mathematical proof using line constants, see the General Power Flow Equations in [[Power Flow through a Transmission Line#General Power Flow Equations (Using ABCD Parameters)|Power Flow through a Transmission Line]].

---
#### Power-Angle Curve and Stability
#stability #pull-out-power

The plot of $P$ versus $\delta$ is known as the **power-angle curve**.

![[Power-Angle Curve.png]]

*   **Maximum Power Transfer (Pull-out Power)**:
    The maximum power occurs when $\sin\delta = 1$, which means $\delta = 90^\circ$. This maximum power is the **steady-state stability limit**.
    $$\boxed{\quad P_{max} = \frac{|E_f||V_t|}{X_s} \quad (\text{per phase})}$$
    If the mechanical power input from the prime mover exceeds this value, the rotor will continuously accelerate, lose synchronism with the grid, and "slip poles".

*   **Stable and Unstable Regions**:
    *   **Stable Region (0 < $\delta$ < 90°)**: In this region, the slope of the curve ($dP/d\delta$) is positive. If the mechanical input power increases slightly, the rotor accelerates, $\delta$ increases, and the electrical power output increases to match the new mechanical input, establishing a new stable operating point. This positive slope provides a restoring or **synchronizing torque**.
    *   **Unstable Region (90° < $\delta$ < 180°)**: Here, the slope ($dP/d\delta$) is negative. If $\delta$ increases beyond 90°, the electrical power output *decreases*. This creates a power imbalance where mechanical input exceeds electrical output, causing the rotor to accelerate further and lose synchronism.

---
#### Power Equation for a Salient Pole Alternator
#salient-pole #reluctance-power #reluctance-torque 

For a salient pole machine, the air gap is non-uniform, leading to different reactances along the [[D-axis & Q-axis Salient Pole Machine.png|direct (d) and quadrature (q) axes]] ($X_d$ and $X_q$). Using the [[Salient Pole Machines - Two Reaction Theory|Two Reaction Theory]], the power equation becomes:

$$\boxed{\quad P_{ph} = \underbrace{\frac{|E_f||V_t|}{X_d} \sin\delta}_{\text{Excitation Power}} + \underbrace{|V_t|^2 \frac{X_d - X_q}{2X_d X_q} \sin(2\delta)}_{\text{Reluctance Power}} \quad}$$
Using [[Salient Pole Machines - Two Reaction Theory|Two-Reaction Theory]] ($I_a = I_d + jI_q$): $$\quad Q_{ph} = \frac{\vert{}E_f\vert{}\vert{}V_t\vert{}}{X_d} \cos\delta - \vert{}V_t\vert{}^2 \left[ \frac{\cos^2\delta}{X_d} + \frac{\sin^2\delta}{X_q} \right]$$
The total power consists of two terms:
1. **Excitation Power**: This component depends on the field excitation ($E_f$) and is similar to the power in a cylindrical machine, but uses $X_d$.
2. **Reluctance Power**: This component arises due to the machine's saliency ($X_d \neq X_q$). It represents the tendency of the salient poles to align with the rotating magnetic field of the stator in a position of minimum reluctance. This power component exists even if the field excitation is removed ($E_f = 0$).
> [!related]-
> [[Reluctance Motor]]
> (*a salient pole synchronous machine with zero field excitation, $E_f = 0$*)
3. Due to the $\sin(2\delta)$ term, the power-angle curve is no longer a pure sine wave, and the maximum power occurs at an angle $\delta < 90^\circ$.

---
#### Factors Affecting Power Transfer

The maximum power transfer capability ($P_{max}$) is influenced by:
1.  **Excitation ($|E_f|$)**: $P_{max}$ is directly proportional to $|E_f|$. Increasing the field current increases the stability limit.
2.  **Terminal Voltage ($|V_t|$)**: $P_{max}$ is proportional to $|V_t|$.
3.  **Synchronous Reactance ($X_s$)**: $P_{max}$ is inversely proportional to $X_s$. A lower reactance (achieved with shorter transmission lines or parallel lines) improves stability.

---
### Related Concepts
#power-angle/related-concepts

> [[Steady-State Stability Limit]]

[[Equivalent Circuit and Phasor Diagram of an Alternator]]
[[Salient Pole Machines - Two Reaction Theory]]
[[Parallel Operation of Alternators and Synchronization]]
[[Synchronous Motors]]
[[Internal EMF]]
[[Power-Angle Curve]] (in Power System)