---
tags:
  - power-systems
  - stability
  - swing-equation
  - transient-stability
  - power-system-dynamics
created: 2025-10-12
aliases:
  - Swing Equation
  - Equation of Motion of a Synchronous Machine
  - Inertia Constant (H)
subject: "[[Power System]]"
parent:
  - Power System Stability
formula:
  - "Swing Equation (in terms of angular momentum constant (M)) : $$M \\frac{d^2\\delta}{dt^2} = P_m - P_e = P_a$$"
  - "Inertia Constant (swing equation) : $$H = \\frac{\\text{Stored Kinetic Energy (in MJ)}}{\\text{Machine Rating (in MVA)}} = \\frac{\\frac{1}{2}J\\omega_{sm}^2}{S_{base}}$$"
  - "Swing Equation (in Per-Unit The Standard Form) : $$\\frac{2H}{\\omega_s} \\frac{d^2\\delta}{dt^2} = P_{m(pu)} - P_{e(pu)}$$"
  - "Swing Equation (in ODE form) : $$\\frac{d^2\\delta}{dt^2} = \\frac{\\omega_s}{2H} [P_{m(pu)} - P_{max(pu)}\\sin(\\delta)]$$"
modified: 2026-07-23T21:25:23
---
### Swing Equation
#power-systems/stability #swing-equation #transient-stability

> The **Swing Equation** is the fundamental [[Second-Order Differential Equations|second-order differential equation]] that describes the rotational dynamics of a synchronous machine's rotor. It is the cornerstone of transient stability analysis, as it relates the rotor's angle ($\delta$) to the imbalance between the mechanical power input and the electrical power output of the generator.

> [!concept] What $\delta$ Represents
> The **rotor angle** $\delta$ is the **electrical angular position of the generator rotor** relative to a synchronously rotating reference axis (usually the infinite bus or system reference frame).
> 
> Think of it like this:
> - The synchronous grid rotates at a fixed electrical speed $\omega_s$.
> - Your generator rotor also rotates near that speed.
> - $\delta$ **= (rotor electrical angle) – (synchronous reference angle)** → It tells **how far ahead or behind** the rotor is compared to the grid.

> [!trick]- Converting Mechanical Degree into Electrical Degree
> $\delta$ = Electrical Angle Degree
> $$\delta = P* \theta_m$$
> $P$ = Number of Pole Pairs
> $\theta_m$ = Mechanical Angle Degree

---
#### Derivation
#swing-equation/derivation

The equation is derived from Newton's second law for rotation, which states that the net torque on a body equals its moment of inertia times its angular acceleration.

1.  **Torque Balance:** The net torque on the rotor is the **accelerating torque** ($T_a$), which is the difference between the mechanical torque from the prime mover ($T_m$) and the opposing electrical torque from the generator ($T_e$).
    $$ J \frac{d^2\theta_m}{dt^2} = T_a = T_m - T_e $$
    where $J$ is the total moment of inertia of the rotor and $\theta_m$ is the mechanical angle of the rotor.

2.  **Power Form:** Multiplying the torque equation by the rotor's angular speed ($\omega_m$) converts it to a power equation:
    $$ J\omega_m \frac{d^2\theta_m}{dt^2} = P_a = P_m - P_e $$

3.  **Rotor Angle ($\delta$):** The rotor angle $\delta$ is the electrical angle between the rotor's magnetic axis and the synchronously rotating magnetic field of the grid. It is related to the mechanical angle by $\theta_m = \omega_{sm}t + \delta_m$, where $\omega_{sm}$ is the synchronous mechanical speed. Differentiating twice gives $\frac{d^2\theta_m}{dt^2} = \frac{d^2\delta_m}{dt^2}$. In electrical degrees, $\delta = (P/2)\delta_m$, where P is the number of poles.

This leads to the swing equation in terms of the **angular momentum constant (M)**:
$$\boxed{\quad M \frac{d^2\delta}{dt^2} = P_m - P_e = P_a \quad}$$

---
#### Inertia Constant (H)
#inertia-constant-h

For practical analysis, it is more convenient to use the **Inertia Constant (H)**, which normalizes the machine's inertia.

*   **Definition:** H is the ratio of the kinetic energy stored in the rotating mass at synchronous speed to the machine's MVA rating ($S_{base}$).
    $$\boxed{\quad H = \frac{\text{Stored Kinetic Energy (in MJ)}}{\text{Machine Rating (in MVA)}} = \frac{\frac{1}{2}J\omega_{sm}^2}{S_{base}} \quad}$$
*   **Units:** The unit of H is **seconds**. It represents the time for which the machine could supply its rated power using only its stored kinetic energy. A higher H value signifies a larger inertia, meaning the machine's speed changes more slowly in response to power imbalances.
*   **Relation to M:** The constants M and H are related by:
    $$ M = \frac{2H S_{base}}{\omega_s} $$
    where $\omega_s$ is the synchronous speed in electrical radians per second ($\omega_s = 2\pi f$).

> [!trick]- Converting Synchronous Speed to Angular Speed
> Synchronous speed in rpm:
> $$N_s = \frac{120f}{P}$$
> Mechanical angular speed:
> $$\omega_s = \frac{2\pi N_s}{60}= \frac{4\pi f}{P}\;(\text{rad/s})$$
>
> ⚠️ Use **mechanical angular speed** in inertia and swing-equation problems.  
> Electrical angular speed is $P/2$ times the mechanical speed.

---
#### The Swing Equation in Per-Unit (The Standard Form)
#swing-equation/per-unit-form

By substituting the expression for M and expressing power in per-unit on the machine's base ($S_{base}$), we arrive at the most common form of the swing equation:
$$\boxed{\quad \frac{2H}{\omega_s} \frac{d^2\delta}{dt^2} = P_{m(pu)} - P_{e(pu)} \quad}$$
The electrical power output, $P_{e(pu)}$, is a non-linear function of the rotor angle, typically given by the [[Power-Angle Curve|power-angle equation]]:
$$ P_{e(pu)} = P_{max(pu)} \sin(\delta) $$
This makes the full swing equation a **non-linear, second-order ordinary differential equation**:
$$\boxed{\quad \frac{d^2\delta}{dt^2} = \frac{\omega_s}{2H} [P_{m(pu)} - P_{max(pu)}\sin(\delta)] \quad}$$

---
#### Analysis and Significance
#swing-equation/analysis

The swing equation governs the "swinging" of the rotor during a disturbance.
*   If **$P_m > P_e$**: The accelerating power is positive. The rotor accelerates, and the rotor angle $\delta$ increases. This happens immediately after a fault, as the electrical output suddenly drops.
*   If **$P_e > P_m$**: The accelerating power is negative. The rotor decelerates, and the rotor angle $\delta$ decreases. This occurs during the recovery swing after the fault is cleared.

The solution to this equation, $\delta(t)$, describes the rotor's trajectory over time. If $\delta(t)$ eventually settles to a new stable angle, the system is transiently stable. If $\delta(t)$ increases without bound, the generator loses synchronism, and the system is unstable.

> [!concept] Swing Equation During Bolted Fault
> In steady state, $P_m = P_e$, so **speed deviation is zero** → $\dot{\delta}(0) = 0$ 
> 
> A bolted 3-phase fault at generator terminals forces **$P_e = 0$**, making accelerating power constant:  
> $$\ddot{\delta}=\frac{\omega_s}{2H}(P_m-P_e)=\frac{\omega_s}{2H}$$  
> (considering given $P_m=1$ pu)
> 
> With constant acceleration, the rotor angle follows **kinematics**:  
> $$\delta(t)=\delta_0+\tfrac12\ddot{\delta}t^2$$  
> This simplifies the problem to a **constant-acceleration motion**.

> [!important]- Power Factor Is Irrelevant in Swing Equation Problems
> Swing equation depends **only on real power imbalance**, $$P_a = P_m - P_e$$
> 
> Reactive power and power factor do **not** appear in the swing equation.  

---
### Related Concepts
#power-systems/related-concepts

> [[Equal Area Criterion for Stability Analysis]]

[[Transient Stability]]
[[Power-Angle Curve]]
[[Classification of Power System Stability]]