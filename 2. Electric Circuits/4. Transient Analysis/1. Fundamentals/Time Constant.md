---
tags:
  - electric-circuits
  - transient-analysis
  - rl-circuits
  - rc-circuits
  - first-order-systems
  - control-systems
created: 2025-07-25
aliases:
  - Time Constant
  - Tau
  - τ
  - Settling Time (5τ)
subject: "[[Electric Circuits]]"
parent: "[[Transient Analysis]]"
confidence: 9
formula:
  - "Time Constant : $$\\tau = \\frac{L}{R}$$ $$\\tau = RC$$"
define:
  - "Time Constant : It represents the time required for the transient response to decay to approximately 36.8% of its initial value or rise to approximately 63.2% of its final value."
---
### Time Constant (τ)
#time-constant #first-order-response #transient-analysis

> The **time constant**, denoted by the Greek letter tau ($\tau$), is the fundamental parameter that characterizes the speed of response of a first-order circuit (like RC and RL circuits) to a sudden change. It represents the time required for the transient response to decay to approximately 36.8% of its initial value or rise to approximately 63.2% of its final value.

A small time constant indicates a fast response, while a large time constant indicates a slow response.

#### Definition and Formulas
#time-constant/definition

The transient response of any first-order circuit follows an exponential form, governed by $e^{-t/\tau}$. The general solution for a variable $x(t)$ (voltage or current) is:
$$x(t) = X_f + (X_0 - X_f)e^{-t/\tau}$$

where $X_f$ is the final (steady-state) value and $X_0$ is the initial value.

For the two basic first-order circuits:
1.  **RC Circuit**: The time constant is the product of the resistance and capacitance.
    $$\boxed{\quad \tau = RC \quad}$$
    (Units: Ohms $\times$ Farads = Seconds)
2.  **RL Circuit**: The time constant is the ratio of the inductance to the resistance.
    $$\boxed{\quad \tau = \frac{L}{R} \quad}$$
    (Units: Henrys / Ohms = Seconds)

---
#### Mathematical and Graphical Significance
#time-constant/significance

Let's evaluate the response at $t = \tau$:
*   **Charging/Rising Response** (e.g., capacitor voltage from 0 to $V_f$):
    $v_C(t) = V_f(1-e^{-t/\tau})$
    At $t=\tau$,
    $v_C(\tau) = V_f(1 - e^{-1}) \approx V_f(1 - 0.368) = 0.632 V_f$.
    The response reaches **63.2%** of its final value.
*   **Discharging/Decaying Response** (e.g., capacitor voltage from $V_0$ to 0):
    $v_C(t) = V_0 e^{-t/\tau}$
    At $t=\tau$,
    $v_C(\tau) = V_0 e^{-1} \approx 0.368 V_0$.
    The response decays to **36.8%** of its initial value.

Graphically, the tangent to the response curve at $t=0$ intersects the final value line at $t=\tau$.

---
#### Calculating the Time Constant in Complex Circuits
#thevenin-resistance

For circuits with multiple resistors or sources, the time constant is found by determining the [[Thevenin's Theorem|Thévenin equivalent resistance]] ($R_{Th}$) seen by the energy storage element (capacitor or inductor).

**Procedure**:
1.  Identify the terminals of the energy storage element (C or L).
2.  Deactivate all independent sources in the circuit:
    *   Voltage sources are replaced by a **short circuit** (0 V).
    *   Current sources are replaced by an **open circuit** (0 A).
3.  Calculate the equivalent resistance, $R_{Th}$, looking into the terminals of the C or L.
4.  The time constant is then:
    $$\boxed{\quad \tau = R_{Th}C \quad \text{or} \quad \tau = \frac{L}{R_{Th}} \quad}$$

> [!mistake]- More Clarity — Which Resistors Matter?
> To find the time constant, suppress independent sources and let the energy-storage element discharge.
> 
> Only resistors that lie in the **actual closed path of the transient current** contribute to $R_{\text{eq}}$.
> 
> - If the inductor/capacitor current must pass through a resistor → include it.
> - If the resistor is bypassed or not in the discharge loop → ignore it.
> 
> Physical placement is irrelevant; current paths decide.

---
#### The 5τ Settling Time (Rule of Thumb)
#settling-time #5-tau-rule 

In practice, a transient response is considered to be effectively over after five time constants ($5\tau$).
At $t = 5\tau$, the response has reached:
*   **Rising Response**: $1 - e^{-5} \approx 1 - 0.0067 = 0.9933$, or **99.3%** of the final value.
*   **Decaying Response**: $e^{-5} \approx 0.0067$, or it has decayed to **0.7%** of its initial value.
$$\boxed{\quad \text{Settling Time } T_s \approx 5\tau \quad}$$
This rule is widely used to determine how long one must wait for a circuit to reach its new steady state.

| Time | Percentage of Total Change Completed (Charging) | Percentage of Initial Value Remaining (Decaying) |
| :--- | :--- | :--- |
| 1$\tau$ | $1 - e^{-1} = 63.2\%$ | $e^{-1} = 36.8\%$ |
| 2$\tau$ | $1 - e^{-2} = 86.5\%$ | $e^{-2} = 13.5\%$ |
| 3$\tau$ | $1 - e^{-3} = 95.0\%$ | $e^{-3} = 5.0\%$ |
| 4$\tau$ | $1 - e^{-4} = 98.2\%$ | $e^{-4} = 1.8\%$ |
| **5$\tau$** | **$1 - e^{-5} = 99.3\%$** | **$e^{-5} = 0.7\%$** |

---
### Related Concepts
#time-constant/related-concepts

> [[Transient Analysis]] (The core area where time constants are studied)

[[RC Circuits]] and [[RL Circuits]] (The canonical first-order circuits)
[[First-Order System Response]] (The broader class of systems described by this behavior)
[[Source-Free RL and RC Circuits]] (The natural response is $x_0 e^{-t/\tau}$)
[[Step Response of RL and RC Circuits]] (The key parameter in the general solution $x(t) = x(\infty) + [x(0^+) - x(\infty)] e^{-t/\tau}$)
[[Thevenin's Theorem]] (Used to find the $R_{th}$ needed to calculate $\tau$, essential tool for finding $\tau$ in complex circuits)
[[Step Response of Series and Parallel RLC Circuits]] (Where the concept of time constant is replaced by damping ratio and natural frequency for second-order systems)
[[Natural and Forced Response]] (The time constant governs the natural response)
[[Control Systems]] (The concept is generalized to mechanical and other systems)
