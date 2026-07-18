---
tags:
  - transient-analysis
  - step-response
  - forced-response
  - rc-circuit
  - rl-circuit
  - first-order-circuits
created: 2025-09-23
aliases:
  - Step Response
  - Forced Response
  - RL Step Response
  - RC Step Response
subject: "[[Electric Circuits]]"
parent: "[[Transient Analysis]]"
confidence: 9
---
### Step Response of RL and RC Circuits
#step-response #forced-response #first-order-circuits

> The **step response** of a circuit is its behavior after a sudden application of a DC voltage or current source, caused by a switching event at $t=0$. The total response of the circuit for $t>0$ is composed of two parts: the **transient response** (or natural response), which dies out over time, and the **steady-state response** (or forced response), which is the final value the circuit settles to.

#### The General Solution for First-Order Circuits
#transient-analysis/general-solution

For any first-order RL or RC circuit, the voltage or current for any element, let's call it $x(t)$, can be found using a single, powerful formula. This method bypasses the need to formally write and solve the differential equation each time.

The total response is the sum of the forced response ($x_f$) and the natural response ($x_n$).
$$x(t) = x_f(t) + x_n(t)$$
For a DC step input, the forced response is the final steady-state value, $x(\infty)$. The natural response is of the form $K e^{-t/\tau}$. Combining these and solving for the constant $K$ using the initial condition $x(0^+)$ gives the general solution:

$$\boxed{\quad x(t) = x(\infty) + [x(0^+) - x(\infty)] e^{-t/\tau} \quad \text{for } t > 0 \quad}$$

Where:
- **$x(t)$**: The variable of interest (voltage or current) for $t>0$.
- **$x(\infty)$**: The final, DC steady-state value of the variable as $t \to \infty$. This is the **forced response**.
- **$x(0^+)$**: The initial value of the variable immediately after the switching event.
- **$\tau$**: The time constant of the circuit for $t>0$.

---
#### Analysis Procedure
#transient-analysis/procedure

To find the step response of any voltage or current in the circuit, follow these three steps:

1. **Find the Initial Condition, $x(0^+)$**:
    - Analyze the circuit for $t<0$ (usually in DC steady state) to find the capacitor voltage $v_C(0^-)$ or inductor current $i_L(0^-)$.
    - Use the continuity principle: $v_C(0^+) = v_C(0^-)$ and $i_L(0^+) = i_L(0^-)$.
    - Draw the circuit at $t=0^+$, replacing the capacitor with a voltage source of value $v_C(0^+)$ and the inductor with a current source of value $i_L(0^+)$.
    - Solve for the desired variable $x(0^+)$ in this $t=0^+$ equivalent circuit.

2. **Find the Final Condition, $x(\infty)$**:
    - Draw the circuit for $t \to \infty$. The circuit will again be in DC steady state.
    - Replace the **capacitor with an open circuit**.
    - Replace the **inductor with a short circuit**.
    - Solve for the desired variable $x(\infty)$ in this final steady-state circuit.

3. **Find the Time Constant, $\tau$**:
    - Consider the circuit topology for $t>0$.
    - Deactivate all independent sources (voltage sources $\to$ short circuits, current sources $\to$ open circuits).
    - Find the Thevenin equivalent resistance ($R_{th}$) as seen from the terminals of the capacitor or inductor.
    - For an **RC Circuit**:
        $$\boxed{\quad \tau = R_{th} C \quad}$$
    - For an **RL Circuit**:
        $$\boxed{\quad \tau = \frac{L}{R_{th}} \quad}$$

4. **Assemble the Solution**: Substitute the values found in steps 1, 2, and 3 into the general solution formula.

---
### Related Concepts
#step-response/related-concepts

> [[Initial and Final Conditions in Inductors and Capacitors]] (Covers the principles for Steps 1 & 2)

[[Source-Free RL and RC Circuits]] (This is the natural response part of the total solution)
[[Time Constant]] (Covers the principle for Step 3)
[[Thevenin's Theorem]] (A key tool for finding the time constant)
[[Step Response of Series and Parallel RLC Circuits]] (Extends this concept to second-order systems)