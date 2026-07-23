---
tags:
  - power-systems
  - stability
  - transient-stability
  - equal-area-criterion
  - protection
created: 2025-10-12
aliases:
  - Critical Clearing Time
  - Critical Clearing Angle
  - CCT
  - CCA
subject: "[[Power System]]"
parent:
  - Power System Stability
modified: 2026-07-23T21:24:31
---
### Critical Clearing Angle and Critical Clearing Time
#power-systems/stability #transient-stability #critical-clearing-angle #critical-clearing-time

> The **Critical Clearing Angle (CCA or δ<sub>cr</sub>)** and **Critical Clearing Time (CCT or t<sub>cr</sub>)** are the most important parameters in a power system transient stability study. They define the absolute limit for fault clearing. If a fault is cleared before the CCT, the system will remain stable. If it persists longer, the system will lose synchronism.

*   **Critical Clearing Angle (δ<sub>cr</sub>):** The maximum rotor angle a generator can reach before a fault is cleared, such that the system can still recover and maintain synchronism.
*   **Critical Clearing Time (t<sub>cr</sub>):** The maximum time duration a fault can exist on the system before it is cleared. It is the time it takes for the rotor angle to increase from its initial value ($\delta_0$) to the critical clearing angle ($\delta_{cr}$).

---
#### Determination of Critical Clearing Angle ($\delta_{cr}$)
#critical-clearing-angle/calculation

The critical clearing angle is determined using the [[Equal Area Criterion for Stability Analysis|Equal Area Criterion]]. It is the clearing angle for which the **accelerating area (A<sub>1</sub>)** becomes exactly equal to the **maximum possible decelerating area (A<sub>2,max</sub>)** available after the fault is cleared.

The condition is A₁ = A₂, where the rotor swings from the clearing angle $\delta_{cr}$ to the maximum angle $\delta_{max}$. For the critical case, this maximum swing angle ($\delta_{max}$) is the unstable equilibrium point on the post-fault power-angle curve, often given by $\delta_{max} = \pi - \delta_{post}$.

The relationship is expressed by equating the energy integrals:
$$\boxed{\quad \int_{\delta_0}^{\delta_{cr}} (P_m - P_{e,fault}) \, d\delta = \int_{\delta_{cr}}^{\delta_{max}} (P_{e,post} - P_m) \, d\delta \quad}$$
Where:
*   $P_m$ is the constant mechanical power input.
*   $P_{e,fault}$ is the electrical power output during the fault.
*   $P_{e,post}$ is the electrical power output after the fault is cleared.
*   $\delta_0$ is the initial pre-fault rotor angle.

For the common case of a three-phase fault on a line, the electrical power during the fault ($P_{e,fault}$) is often zero. The equation simplifies to:
$$ P_m(\delta_{cr} - \delta_0) = \int_{\delta_{cr}}^{\delta_{max}} (P_{max,post} \sin\delta - P_m) \, d\delta $$
Solving this integral equation gives the value of $\cos(\delta_{cr})$, from which $\delta_{cr}$ can be found:
$$\boxed{\quad \cos(\delta_{cr}) = \frac{P_m}{P_{max,post}}(\delta_{max} - \delta_0) + \cos(\delta_{max}) \quad}$$

---
#### Determination of Critical Clearing Time ($t_{cr}$)
#critical-clearing-time/calculation

Once the critical clearing angle ($\delta_{cr}$) is known, the critical clearing time is found by solving the [[Swing Equation]] for the time it takes the rotor angle to change from $\delta_0$ to $\delta_{cr}$ *during the fault*.

The [[Swing Equation]] is:
$$ \frac{d^2\delta}{dt^2} = \frac{\pi f}{H} (P_m - P_e) \quad (\text{in electrical degrees}) $$
For a three-phase fault where $P_e = 0$, the equation becomes a constant acceleration problem:
$$ \frac{d^2\delta}{dt^2} = \frac{\pi f}{H} P_m $$
Integrating twice with respect to time gives the angle's trajectory during the fault:
$$ \delta(t) = \frac{\pi f P_m}{2H} t^2 + \delta_0 $$
Solving for the time $t$ when $\delta(t) = \delta_{cr}$:
$$\boxed{\quad t_{cr} = \sqrt{\frac{2H(\delta_{cr} - \delta_0)}{\pi f P_m}} \quad}$$
*Note: Angles $\delta_{cr}$ and $\delta_0$ must be in electrical degrees for this formula.*

---
#### Significance and Influencing Factors
#cct/significance #cct/factors

**Significance:**
The CCT is the ultimate benchmark for the performance of a power system's protection scheme. The total time taken by protective relays and circuit breakers to detect and clear a fault **must** be less than the calculated CCT to ensure the system remains stable.

**Factors Influencing CCT:**
The CCT is not a fixed value; it depends on the system's state and the fault's nature.
1.  **Fault Severity and Location:** More severe faults (e.g., a three-phase fault vs. a single-phase fault) and faults closer to a generator result in a larger power imbalance, a faster increase in rotor angle, and therefore a **shorter CCT**.
2.  **Generator Inertia (H):** Higher inertia means the rotor accelerates more slowly, providing more time to clear the fault. A **higher H leads to a longer CCT**.
3.  **System Loading ($P_m$):** A more heavily loaded system operates at a higher initial angle $\delta_0$. This reduces the available decelerating area, resulting in a **shorter CCT**.
4.  **System Reactance (X):** A lower post-fault reactance leads to a higher $P_{max}$, which increases the decelerating area and results in a **longer CCT**.

---
### Related Concepts
#power-systems/related-concepts

> [[Equal Area Criterion for Stability Analysis]]

[[Swing Equation]]
[[Transient Stability]]
[[Power System Protection]]
[[Circuit Breakers]]