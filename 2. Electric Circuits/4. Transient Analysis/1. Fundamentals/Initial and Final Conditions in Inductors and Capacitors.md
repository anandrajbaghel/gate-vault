---
tags:
  - transient-analysis
  - initial-conditions
  - final-conditions
  - capacitors
  - inductors
  - circuit-analysis
created: 2025-09-23
aliases:
  - Initial Conditions
  - Final Conditions
  - Circuit Initial Conditions
subject: "[[Electric Circuits]]"
parent: "[[Transient Analysis]]"
modified: 2026-07-16
---
### Initial and Final Conditions in Inductors and Capacitors
#initial-conditions #final-conditions #transient-analysis

> Determining the initial conditions (at $t=0^+$) and final conditions (at $t=\infty$) of voltages and currents is the first and most critical step in solving for the transient response of first and second-order circuits. These values provide the constants needed to solve the differential equations that govern the circuit's behavior after a switching event.

#### The Principle of Continuity
#continuity #state-variables

The behavior of inductors and capacitors at the instant of switching is governed by the principle that the energy stored in them cannot change instantaneously. This translates to the continuity of their primary state variables.

1.  **Capacitor**: The energy stored is $\frac{1}{2}Cv^2$. For the energy to be continuous, the **voltage across the capacitor cannot change instantaneously**.
    $$\boxed{\quad v_C(0^-) = v_C(0^+) \quad}$$
    where $t=0^-$ is the instant just before switching, and $t=0^+$ is the instant just after. Note that the current through the capacitor, $i_C(t)$, *can* change instantaneously.

2.  **Inductor**: The energy stored is $\frac{1}{2}Li^2$. For the energy to be continuous, the **current through the inductor cannot change instantaneously**.
    $$\boxed{\quad i_L(0^-) = i_L(0^+) \quad}$$
    Note that the voltage across the inductor, $v_L(t)$, *can* change instantaneously.

#### Capacitor Behavior
#capacitor/transient-behavior

##### Initial Condition (at $t=0^+$)
Based on the continuity of voltage, a capacitor behaves like a voltage source at the moment of switching, with a value equal to its pre-switch voltage.
-   **If the capacitor was initially uncharged** ($v_C(0^-) = 0$), then $v_C(0^+) = 0$. A zero-volt drop means it behaves like a **short circuit**.
-   **If the capacitor was initially charged to $V_0$** ($v_C(0^-) = V_0$), then $v_C(0^+) = V_0$. It behaves like an ideal **voltage source of value $V_0$**.

##### Final Condition (at $t=\infty$, DC Steady State)
After a long time in a DC circuit, transients die out, and the circuit reaches a steady state. The capacitor becomes fully charged, and its voltage becomes constant. The current through the capacitor is given by $i_C(t) = C \frac{dv_C(t)}{dt}$. Since $v_C$ is constant, $\frac{dv_C}{dt} = 0$, and thus $i_C(\infty) = 0$.
-   A zero current flow means the capacitor behaves like an **open circuit**.

#### Inductor Behavior
#inductor/transient-behavior

##### Initial Condition (at $t=0^+$)
Based on the continuity of current, an inductor behaves like a current source at the moment of switching, with a value equal to its pre-switch current.
-   **If there was no initial current** ($i_L(0^-) = 0$), then $i_L(0^+) = 0$. A zero current flow means it behaves like an **open circuit**.
-   **If there was an initial current of $I_0$** ($i_L(0^-) = I_0$), then $i_L(0^+) = I_0$. It behaves like an ideal **current source of value $I_0$**.

##### Final Condition (at $t=\infty$, DC Steady State)
In DC steady state, the current through the inductor becomes constant. The voltage across the inductor is given by $v_L(t) = L \frac{di_L(t)}{dt}$. Since $i_L$ is constant, $\frac{di_L}{dt} = 0$, and thus $v_L(\infty) = 0$.
-   A zero voltage drop means the inductor behaves like a **short circuit** (an ideal wire).

#### Summary Table

| Element | Initial Condition (at $t=0^+$) | Final Condition (at $t=\infty$) |
| :--- | :--- | :--- |
| **Capacitor (C)** | Voltage Source of value $v_C(0^-)$ <br> (Short circuit if uncharged) | **Open Circuit** |
| **Inductor (L)** | Current Source of value $i_L(0^-)$ <br> (Open circuit if no initial current) | **Short Circuit** |

---
### Related Concepts
#initial-conditions/related-concepts

> [[Source-Free RL and RC Circuits]] (Where the initial condition is the only source of energy)

[[Step Response of RL and RC Circuits]] (The classic application of finding initial and final conditions)
[[Time Constant]]
[[Step Response of Series and Parallel RLC Circuits]]
[[Calculus - Differential Equations]]