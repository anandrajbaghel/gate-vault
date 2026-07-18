---
tags:
  - transient-analysis
  - rlc-circuits
  - second-order-circuits
  - step-response
  - forced-response
  - damping
created: 2025-09-23
aliases:
  - RLC Step Response
  - Second-Order Step Response
subject: "[[2. Electric Circuits/Electric Circuits|Electric Circuits]]"
parent: "[[4. Transient Analysis]]"
confidence: 9
---

```mermaid
mindmap
  root((Step Response of RLC Circuits))
    Concept
      (Complete response to a DC source)
      Total Response = Natural + Forced
    General Solution Form
      (x(t) = x(∞) + x_n(t))
      Forced Response
        (x(∞) = Final steady-state value)
      Natural Response (x_n(t))
        (Same form as source-free case)
        (Overdamped, Critically Damped, Underdamped)
    Analysis Procedure
      1. Find Final Value: x(∞)
      2. Determine Response Type
        (Find α and ω₀)
        (Compare α and ω₀)
      3. Find Initial Conditions
        (x(0⁺))
        (dx/dt at t=0⁺)
      4. Solve for Constants
```

---
### Step Response of Series and Parallel RLC Circuits
#step-response #second-order-circuits #rlc-circuit

> The **step response** of an RLC circuit is its complete behavior when a DC source is suddenly applied. The total response is the sum of the **forced response** (the final steady-state value) and the **natural response** (the transient behavior as the circuit transitions to its new state). The form of the natural response is determined by the circuit's damping.

#### The Complete Response
#complete-response #forced-response #natural-response
The total response $x(t)$ for any voltage or current in the circuit for $t>0$ is given by:
$$\boxed{\quad x(t) = x_n(t) + x_f(t) \quad}$$
-   $x_f(t)$ is the **Forced Response** or **Steady-State Response**. For a DC step input, this is the constant final value the circuit settles to, $x(\infty)$.
-   $x_n(t)$ is the **Natural Response** or **Transient Response**. This is the same form as the solution to the source-free circuit and always decays to zero.

The general form of the solution depends on the type of damping:
1.  **Overdamped ($\alpha > \omega_0$)**:
    $$\boxed{\quad x(t) = x(\infty) + A_1 e^{s_1 t} + A_2 e^{s_2 t} \quad}$$
2.  **Critically Damped ($\alpha = \omega_0$)**:
    $$\boxed{\quad x(t) = x(\infty) + (A_1 + A_2 t) e^{-\alpha t} \quad}$$
3.  **Underdamped ($\alpha < \omega_0$)**:
    $$\boxed{\quad x(t) = x(\infty) + e^{-\alpha t} (A_1 \cos(\omega_d t) + A_2 \sin(\omega_d t)) \quad}$$

#### Procedure for Finding the Step Response
#transient-analysis/procedure
To find the complete response, we must find the final value $x(\infty)$ and the constants ($A_1, A_2$) for the natural response.

**Step 1: Find the Final Condition, $x(\infty)$**
-   Analyze the circuit as $t \to \infty$. In DC steady state, inductors act as short circuits and capacitors act as open circuits. Solve for the variable $x(\infty)$.

**Step 2: Determine the Response Type**
-   Consider the circuit topology for $t>0$. Find the damping factor $\alpha$ and the resonant frequency $\omega_0$.

| Circuit Type | Damping Factor ($\alpha$) | Resonant Frequency ($\omega_0$) |
| :--- | :--- | :--- |
| **Series RLC** | $\alpha = \frac{R}{2L}$ | $\omega_0 = \frac{1}{\sqrt{LC}}$ |
| **Parallel RLC** | $\alpha = \frac{1}{2RC}$ | $\omega_0 = \frac{1}{\sqrt{LC}}$ |

-   Compare $\alpha$ and $\omega_0$ to determine if the response is overdamped, critically damped, or underdamped, and choose the correct solution form from above.

**Step 3: Find the Initial Conditions, $x(0^+)$ and $\frac{dx}{dt}|_{t=0^+}$**
-   **Find $x(0^+)$**:
    1.  Analyze the circuit for $t<0$ to find $i_L(0^-)$ and $v_C(0^-)$.
    2.  Use the continuity relations $i_L(0^+) = i_L(0^-)$ and $v_C(0^+) = v_C(0^-)$.
    3.  Draw the circuit at $t=0^+$ (replacing L with a current source and C with a voltage source) and solve for $x(0^+)$.

-   **Find the derivative $\frac{dx}{dt}|_{t=0^+}$**:
    1.  Use the component equations at $t=0^+$:
        $$\boxed{\quad \frac{di_L(0^+)}{dt} = \frac{v_L(0^+)}{L} \quad \text{and} \quad \frac{dv_C(0^+)}{dt} = \frac{i_C(0^+)}{C} \quad}$$
    2.  The values $v_L(0^+)$ and $i_C(0^+)$ are found by applying KVL and KCL to the circuit at $t=0^+$.

**Step 4: Solve for the Constants ($A_1, A_2$)**
-   Use the two initial conditions found in Step 3 and apply them to the general solution form chosen in Step 2.
    -   Apply $x(0^+)$ to the equation for $x(t)$.
    -   Differentiate the equation for $x(t)$ to get $dx/dt$, then apply the initial condition for the derivative.
-   Solve the resulting two simultaneous equations to find the constants $A_1$ and $A_2$.

---
### Related Concepts
#step-response/related-concepts

> [[Source-Free Series and Parallel RLC Circuits]] (Defines the natural response component of the solution)

[[Initial and Final Conditions in Inductors and Capacitors]] (Crucial for Steps 1 and 3)
[[Natural Frequency and Damping Ratio]] (The parameters that determine the response type)
[[Control System - Second-Order Systems]] (The mathematical framework is identical)
[[Calculus - Differential Equations]] (The underlying mathematical theory)