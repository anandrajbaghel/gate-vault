---
tags:
  - control-systems
  - time-response
  - system-accuracy
  - error-constants
  - Kp-Kv-Ka
created: 2025-10-04
aliases:
  - Kp, Kv, Ka
  - Static Error Constants (Position, Velocity, Acceleration Constants)
  - Static Error Coefficient
subject: "[[Control Systems]]"
parent:
  - Steady-State Response
modified: 2026-07-23T07:51:23
---
### Static Error Constants (Position, Velocity, Acceleration Constants)
#control-systems/steady-state-response #error-constants

> **Static error constants** ($K_p$, $K_v$, and $K_a$) are figures of merit used in [[Control Systems]] to describe the steady-state accuracy for [[Unit Step, Ramp, Parabolic, and Impulse Signals|specific types of inputs]] (step, ramp, and parabolic, respectively). These constants depend on the system's [[Open-Loop Transfer Function (OLTF)|open-loop transfer function]], $G(s)H(s)$, and provide a direct way to calculate the [[Steady-State Error|steady-state error]] without computing the full time response. A larger value for an error constant implies a smaller [[steady-state error]] for its corresponding input type.

> [!prerequisite]
> [[Unit Step, Ramp, Parabolic, and Impulse Signals]]
> [[Type and Order of Control Systems]]

---
#### Position Error Constant ($K_p$)
#position-error-constant

==The position error constant is used to determine the steady-state error for a **step input**, $r(t) = A u(t)$.==

-   **Definition:**
    $$\boxed{\quad K_p = \lim_{s \to 0} G(s)H(s) \quad}$$
-   **Steady-State Error for a Step Input:**
    $$\boxed{\quad e_{ss} = \frac{A}{1 + K_p} \quad}$$

> [!pyq]- PYQ : 2018
> ![[ee_2018#^q25]]

-   **Interpretation:**
    - For a **Type 0** system, $K_p$ is a finite constant, resulting in a finite steady-state error.
    - For a **Type 1 or higher** system, at least one pole is at the origin, causing $G(s)H(s) \to \infty$ as $s \to 0$. Thus, $K_p = \infty$ and the steady-state error is **zero**. This means Type 1 and higher systems can perfectly track a step input.

---
#### Velocity Error Constant ($K_v$)
#velocity-error-constant

==The velocity error constant is used to determine the steady-state error for a **ramp input**, $r(t) = A t u(t)$.==

-   **Definition:**
    $$\boxed{\quad K_v = \lim_{s \to 0} sG(s)H(s) \quad}$$
-   **Steady-State Error for a Ramp Input:**
    $$\boxed{\quad e_{ss} = \frac{A}{K_v} \quad}$$
-   **Interpretation:**
    -   For a **Type 0** system, $K_v = 0$, resulting in an **infinite** steady-state error (the system cannot track a ramp).
    -   For a **Type 1** system, $K_v$ is a finite non-zero constant, resulting in a **finite** steady-state error. The output tracks the ramp with a constant position lag.
    -   For a **Type 2 or higher** system, $K_v = \infty$, resulting in a **zero** steady-state error. The system can perfectly track a ramp input.

---
#### Acceleration Error Constant ($K_a$)
#acceleration-error-constant

==The acceleration error constant is used to determine the steady-state error for a **parabolic input**, $r(t) = \frac{A t^2}{2} u(t)$.==

-   **Definition:**
    $$\boxed{\quad K_a = \lim_{s \to 0} s^2G(s)H(s) \quad}$$
-   **Steady-State Error for a Parabolic Input:**
    $$\boxed{\quad e_{ss} = \frac{A}{K_a} \quad}$$
-   **Interpretation:**
    -   For **Type 0 and Type 1** systems, $K_a = 0$, resulting in an **infinite** steady-state error.
    -   For a **Type 2** system, $K_a$ is a finite non-zero constant, resulting in a **finite** steady-state error.
    -   For a **Type 3 or higher** system, $K_a = \infty$, resulting in a **zero** steady-state error.

---
#### Summary of Constants vs. System Type
#summary 

| System Type | $K_p = \lim_{s \to 0} G(s)H(s)$ | $K_v = \lim_{s \to 0} sG(s)H(s)$ | $K_a = \lim_{s \to 0} s^2G(s)H(s)$ |
| :--- | :--: | :--: | :--: |
| **Type 0** | Finite Constant | 0 | 0 |
| **Type 1** | $\infty$ | Finite Constant | 0 |
| **Type 2** | $\infty$ | $\infty$ | Finite Constant |

---
### Related Concepts
#control-systems/related-concepts

> [[Steady-State Error]]

[[Type and Order of Control Systems]]
[[Error Analysis for different System Types (Type 0, 1, 2)]]
[[Unit Step, Ramp, Parabolic, and Impulse Signals]]
[[Proportional-Integral (PI) Controller|PI Controller]] , [[Proportional-Derivative (PD) Controller|PD Controller]] & [[Proportional-Integral-Derivative (PID) Controller|PID Controller]]
[[Lag Compensator]] , [[Lead Compensator]] & [[Lag-Lead Compensator]]
[[Effect of Feedback on System Performance]]
