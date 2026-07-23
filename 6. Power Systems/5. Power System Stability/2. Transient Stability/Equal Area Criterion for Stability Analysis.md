---
tags:
  - power-systems
  - stability
  - transient-stability
  - equal-area-criterion
created: 2025-10-12
aliases:
  - Equal Area Criterion
  - EAC
subject: "[[Power System]]"
parent:
  - Power System Stability
  - Transient Stability
modified: 2026-07-23T21:24:42
---
### Equal Area Criterion for Stability Analysis
#power-systems/stability #transient-stability #equal-area-criterion

> The **Equal Area Criterion (EAC)** is a simple and powerful graphical method used to assess the transient stability of a power system without needing to solve the [[Swing Equation]] numerically. It applies to a single-machine infinite-bus (SMIB) system or a two-machine system. The criterion is based on the principle that for the system to remain stable, the kinetic energy gained by the generator's rotor during a disturbance must be completely converted back into potential energy (and dissipated) after the disturbance is cleared.

#### Mathematical Basis from the Swing Equation
#equal-area-criterion/derivation

The criterion is derived directly from the fundamental equation of motion

![[Swing Equation#Derivation]]

To find the energy balance, we multiply the above torque balance by $\frac{d\delta}{dt}$:
$$ M \frac{d\delta}{dt} \frac{d^2\delta}{dt^2} = P_a \frac{d\delta}{dt} $$
This can be rewritten as:
$$ \frac{d}{dt} \left( \frac{1}{2} M \left(\frac{d\delta}{dt}\right)^2 \right) = P_a \frac{d\delta}{dt} $$
Integrating with respect to time from the initial state ($\delta_0$) to a later state ($\delta$):
$$ \frac{1}{2} M \left(\frac{d\delta}{dt}\right)^2 \bigg|_{\delta_0}^{\delta} = \int_{\delta_0}^{\delta} P_a \, d\delta $$
The term on the left is the change in the rotor's kinetic energy. The integral on the right represents the **area** on the [[Power-Angle Curve|P-δ curve]] between the mechanical power line ($P_m$) and the electrical power curve ($P_e$). For stability, the rotor speed must return to synchronous speed, meaning the net change in kinetic energy must be zero. This implies the net area under the accelerating power curve must be zero.

---
#### The Criterion Explained
#equal-area-criterion/stability-condition

Consider a three-phase fault on a transmission line.
1.  **Pre-Fault:** The system operates at an angle $\delta_0$, where $P_m = P_{e1}$.
2.  **During Fault:** The fault reduces the power transfer capability ($P_{e2} < P_{e1}$). The electrical power output suddenly drops, while the mechanical input $P_m$ remains constant. The rotor accelerates ($P_m > P_{e2}$), and the angle increases. The kinetic energy gained is represented by the **Accelerating Area ($A_1$)**.
    $$ A_1 = \int_{\delta_0}^{\delta_c} (P_m - P_{e2}) \, d\delta $$
    where $\delta_c$ is the angle at which the fault is cleared.
3.  **Post-Fault:** The fault is cleared, and the system is restored (e.g., the faulted line is removed). The post-fault power curve ($P_{e3}$) is now active. As $\delta > \delta_0$, the electrical power output $P_{e3}$ is now greater than the mechanical input $P_m$. The rotor decelerates, giving up its excess kinetic energy. This is represented by the **Decelerating Area ($A_2$)**.
    $$ A_2 = \int_{\delta_c}^{\delta_{max}} (P_{e3} - P_m) \, d\delta $$
    where $\delta_{max}$ is the maximum angle of swing.

For the system to be stable, the rotor must stop accelerating and swing back. This is only possible if the decelerating area ($A_2$) can "absorb" all the energy from the accelerating area ($A_1$).
*   **Stable:** $A_2 \ge A_1$
*   **Critically Stable:** $A_2 = A_1$
*   **Unstable:** $A_2 < A_1$

The stability condition is thus:
$$\boxed{\quad \text{Decelerating Area} \ge \text{Accelerating Area} \quad}$$


> [!important] Understanding Transient Analysis Meaning

| Period             | Electrical network                                     | Purpose                                                            |
| ------------------ | ------------------------------------------------------ | ------------------------------------------------------------------ |
| **Pre-fault**      | Normal system (both lines)                             | To define the initial operating point $(\delta_0)$                 |
| **Faulted period** | Fault path (near-zero power transfer) $(X \to \infty)$ | Represents the period when the fault is applied                    |
| **Post-fault**     | **System after clearing** — one line still isolated    | Represents the period _after breakers open_ but _before reclosing_ |


---
#### Critical Clearing Angle and Time
#critical-clearing-angle #critical-clearing-time

A key application of the Equal Area Criterion is to find the limit of stability.

*   **Critical Clearing Angle ($\delta_{cr}$):** This is the latest possible angle at which a fault can be cleared without the system losing synchronism. It is the clearing angle for which the accelerating area $A_1$ is exactly equal to the maximum possible decelerating area available, $A_{2,max}$.
    $$ \int_{\delta_0}^{\delta_{cr}} (P_m - P_{e,fault}) \, d\delta = \int_{\delta_{cr}}^{\delta_{final}} (P_{e,post-fault} - P_m) \, d\delta $$
    where $\delta_{final}$ is the angle at which the rotor would lose synchronism on the post-fault curve (often $180^\circ - \delta_{post\_fault\_stable}$).

*   **Critical Clearing Time ($t_{cr}$):** This is the maximum time duration for which the fault can persist before being cleared. It is the time taken for the rotor angle to travel from its initial value $\delta_0$ to the critical clearing angle $\delta_{cr}$ *during the fault*.

---
### Related Concepts
#power-systems/related-concepts

> [[Critical Clearing Angle and Critical Clearing Time]]
> [[Swing Equation]]

[[Transient Stability]]
[[Power-Angle Curve]]
[[Classification of Power System Stability]]