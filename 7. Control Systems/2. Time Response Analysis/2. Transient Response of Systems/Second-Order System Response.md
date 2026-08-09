---
tags:
  - control-systems
  - time-response
  - second-order-system
  - transient-response
  - damping
  - natural-frequency
created: 2025-09-29
aliases:
  - Second Order System
  - Second Order Response
  - Damped Frequency of Oscillation (ω_d)
  - Damped Natural Frequency
  - 2nd Order System Response
subject: "[[Control Systems]]"
parent:
  - Transient Response of Systems
formula:
  - "Transfer Function (standard form of Second-Order System) : $$T(s) = \\frac{C(s)}{R(s)} = \\frac{\\omega_n^2}{s^2 + 2\\zeta\\omega_n s + \\omega_n^2}$$"
  - "Damped Natural Frequency of Oscillation (Second-Order System) : $$\\omega_d = \\omega_n \\sqrt{1-\\zeta^2}$$"
  - "Undamped System (Second-Order System) : $$\\zeta=0$$"
modified: 2026-08-04T10:26:42
---
### Second-Order System Response
#control-systems/time-response #second-order-system

> A second-order system is one whose input-output relationship is described by a second-order linear differential equation. Its response is more complex than a first-order system and is characterized by two key parameters: the **Natural Frequency ($\omega_n$)** and the **Damping Ratio ($\zeta$)**. These systems are fundamental in control theory as they can exhibit transient oscillations and overshoot, which are common in real-world systems.

#### Standard Form of a Second-Order System
#second-order-system/standard-form

==The standard form for the [[Transfer Function and Impulse Response|Transfer Function]] of a second-order system is:==
$$\boxed{\quad T(s) = \frac{C(s)}{R(s)} = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} \quad}$$
- **$\omega_n$ (Natural Frequency):** The frequency of oscillation of the system if the damping were zero ($\zeta=0$).
- **$\zeta$ (Damping Ratio):** A dimensionless quantity that describes the level of damping in the system. It dictates the nature of the transient response.

The stability and response characteristics are determined by the roots of the **characteristic equation**:
$$s^2 + 2\zeta\omega_n s + \omega_n^2 = 0$$
The poles of the system are located at:
$$s_{1,2} = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2 - 1}$$

---
#### Types of Responses based on Damping Ratio ($\zeta$)
#second-order-system/response-types

> [!related]
> [[Natural Frequency and Damping Ratio]]

The nature of the system's response to a step input is entirely determined by the value of $\zeta$.

![[Pole Zero.png]]

1.  **Undamped System ($\zeta=0$):**
    - Poles: Purely imaginary ($s = \pm j\omega_n$).
    - Response: Sustained oscillations with frequency $\omega_n$. The system is marginally stable.

2.  **Underdamped System ($0 < \zeta < 1$):**
    - Poles: Complex conjugates with negative real parts ($s = -\zeta\omega_n \pm j\omega_n\sqrt{1-\zeta^2}$).
    - Response: The response oscillates but the amplitude decays exponentially. It overshoots the final value. This is the most common and important case in control system design.

3.  **Critically Damped System ($\zeta=1$):**
    - Poles: Real, equal, and negative ($s_{1,2} = -\omega_n$).
    - Response: The fastest possible response that does not exhibit any overshoot.

4.  **Overdamped System ($\zeta > 1$):**
    - Poles: Real, distinct, and negative.
    - Response: A slow, sluggish exponential response with no overshoot. It behaves like two [[First-Order System Response|first-order systems]] in cascade.

> [!pyq]- PYQ : GATE EE 2018
> ![[ee_2018#^q9]]

> [!important] Resonance in a Second-Order System
> A resonant peak exists **only if** the damping ratio  
> $$\zeta < \frac{1}{\sqrt{2}}.$$  
> The **resonant frequency** is  
> $$\omega_r=\omega_n\sqrt{1-2\zeta^2}, \quad (\omega_r<\omega_n).$$  
> The **peak (resonant) magnitude** is  
> $$M_r=\frac{1}{2\zeta\sqrt{1-\zeta^2}}.$$
> 
>---
> **For $\boldsymbol{\zeta \ge \tfrac{1}{\sqrt{2}}}$:**  
> No resonance occurs ⇒ **no resonant frequency** $\omega_r$ and **no peak magnitude** $M_r$; the frequency response magnitude decreases monotonically with frequency.
>
> **Significance:** Resonance indicates maximum steady-state response at a finite frequency due to low damping; increasing $\zeta$ suppresses energy buildup and eliminates the resonant peak.

---
#### Step Response of an Underdamped System
#second-order-system/underdamped-response

For a unit step input ($R(s)=1/s$), the time-domain output of an underdamped system is:
$$\boxed{\quad c(t) = 1 - \frac{e^{-\zeta\omega_n t}}{\sqrt{1-\zeta^2}}\sin(\omega_d t + \phi), \quad t \ge 0 \quad}$$
Where:
-   **Damped Frequency of Oscillation ($\omega_d$):** The actual frequency of oscillation of the damped system.
    $$\boxed{\quad \omega_d = \omega_n \sqrt{1-\zeta^2} \quad}$$
-   **Phase Angle ($\phi$):**
    $$\phi = \tan^{-1}\left(\frac{\sqrt{1-\zeta^2}}{\zeta}\right) = \cos^{-1}(\zeta)$$

---
#### Time-Domain Specifications (Underdamped Case)
#second-order-system/specifications

These specifications are crucial for system analysis and design.
1.  **Rise Time ($T_r$):** The time for the response to rise from 0% to 100% of its final value for the first time.
    $$\boxed{\quad T_r = \frac{\pi - \phi}{\omega_d} \quad}$$
2.  **Peak Time ($T_p$):** The time required to reach the first peak of the overshoot.
    $$\boxed{\quad T_p = \frac{\pi}{\omega_d} \quad}$$
3.  **Peak Overshoot ($M_p$):** The maximum overshoot expressed as a percentage of the final value. It depends **only** on the damping ratio $\zeta$.
    $$\boxed{\quad \%M_p = \left( \frac{c(T_p) - c(\infty)}{c(\infty)} \right) \times 100 = e^{\frac{-\zeta\pi}{\sqrt{1-\zeta^2}}} \times 100\% \quad}$$
4.  **Settling Time ($T_s$):** The time required for the response to reach and stay within a specified tolerance band (e.g., 2% or 5%) of the final value. It is determined by the real part of the poles, $\sigma = \zeta\omega_n$.
    $$\boxed{\quad T_s (\text{for 2\% tolerance}) \approx \frac{4}{\zeta\omega_n} = \frac{4}{\sigma} \quad}$$
    $$\boxed{\quad T_s (\text{for 5\% tolerance}) \approx \frac{3}{\zeta\omega_n} = \frac{3}{\sigma} \quad}$$

---
#### S-Plane Pole Locations
#second-order-system/s-plane

The location of the complex conjugate poles for an underdamped system in the s-plane provides a complete picture of its transient response:
-   **Constant $\omega_n$:** Poles lie on a circle with radius $\omega_n$ centered at the origin.
-   **Constant $\zeta$:** Poles lie on a radial line from the origin at an angle $\theta = \cos^{-1}(\zeta)$ from the negative real axis.
-   **Constant $\sigma = \zeta\omega_n$ (Settling Time):** Poles lie on a vertical line at $s = -\sigma$.
-   **Constant $\omega_d$ (Oscillation Frequency):** Poles lie on a horizontal line at $s = \pm j\omega_d$.

---
### Related Concepts
#control-systems/related-concepts

> [[First-Order System Response]]

[[Type and Order of Control Systems]]
[[Time-Domain Specifications]]
[[Effect of Adding Poles and Zeros on System Response]]
[[Stability Analysis]]
[[Concept and Definition of Root Locus|Root Locus]]
[[Steady-State Error]]
