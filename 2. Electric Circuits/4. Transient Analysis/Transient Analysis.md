---
tags:
  - circuits
  - transient-analysis
  - first-order-circuits
  - second-order-circuits
  - time-constant
  - laplace-transform
created: 2025-09-11
aliases:
  - Transient Response
  - Circuit Transients
  - Neper Frequency
  - RL Circuit Transients
  - RC Circuit Transients
  - DC Offset
subject: "[[Electric Circuits]]"
parent: "[[Electric Circuits]]"
confidence: 9
formula:
  - "General Solution of First-Order Circuits (RL or RC) : $$x(t) = x(\\infty) + (x(0^+) - x(\\infty)) e^{-t/\\tau} \\quad \\text{for } t > 0$$"
---
### Transient Analysis
#transient-analysis #switching-circuits

> **Transient Analysis** is the study of a circuit's behavior during the time interval immediately after a sudden change, such as a switch opening or closing, or a source being turned on. This temporary response, called the **transient response**, decays over time, after which the circuit settles into a new **steady-state**.

#### The Complete Response
#complete-response 

The total response of any voltage or current in a circuit can be expressed as the sum of two components:
$$\boxed{\quad x(t) = x_{ss}(t) + x_{tr}(t) \quad}$$
* **Steady-State Response ($x_{ss}(t)$)**: The final, long-term behavior of the circuit after the transients have died out. It is the forced response determined by the independent sources.
* **Transient Response ($x_{tr}(t)$)**: The temporary response of the circuit that decays to zero over time. It is the natural response of the circuit, determined by its energy storage elements ([[Capacitors]] and [[Inductors]]) and their interconnections.

---
#### Initial and Final Conditions
#initial-conditions #final-conditions

To solve a transient problem, we need the conditions just after the switching event ($t=0^+$) and long after ($t \to \infty$).
*   **Initial Conditions (at $t=0^+$)**:
    1. The voltage across a capacitor **cannot change instantaneously**: $$\boxed{\quad v_C(0^+) = v_C(0^-) \quad}$$
    2. The current through an inductor **cannot change instantaneously**: $$\boxed{\quad i_L(0^+) = i_L(0^-) \quad}$$
*   **Final Conditions (at $t \to \infty$)**: Assuming the sources are DC, after a long time the circuit reaches DC steady-state.
    1. A **capacitor** acts as an **open circuit**.
    2. An **inductor** acts as a **short circuit**.

---
#### First-Order Circuits (RL and RC)
#first-order-circuits #time-constant

> [!refer]
> [[Solving First-Order Linear ODEs]]

These circuits contain a single energy storage element (either C or L) and can be described by a [[Solving First-Order Linear ODEs|first-order differential equation]].
The general solution for any voltage or current $x(t)$ in a first-order circuit for $t>0$ is:
$$\boxed{\quad x(t) = x(\infty) + [x(0^+) - x(\infty)]e^{-t/\tau} \quad}$$
* $x(0^+)$ is the initial value at $t=0^+$.
* $x(\infty)$ is the final steady-state value.
* $\tau$ is the **[[Time Constant]]**, which determines the rate of decay of the transient response. After $5\tau$, the transient is considered to be over (decayed to less than 1% of its initial value).

> [!pyq]- PYQ : 2019
> ![[ee_2019#^q41]]

> [!concept] DC Offset in RL Circuit (AC Switching)
> 
> > [!pyq]- PYQ : 2019
> > ![[ee_2019#^q12]]
> 
> When an AC source $v(t)=V_m\sin(\omega t+\theta)$ is suddenly applied to an RL circuit at $t=0$, the current contains a **DC offset** due to the transient term.
>
> Total current:
> $$i(t)=i_{\text{ss}}(t)+i_{\text{tr}}(t)$$
>
> Steady-state current:
> $$i_{\text{ss}}(t)=I_m\sin(\omega t+\theta-\phi), \quad \phi=\tan^{-1}\!\left(\frac{\omega L}{R}\right)$$
>
> Since inductor current cannot change instantaneously,
> $$i(0^+)=i(0^-)$$
>
> The **DC offset magnitude** is maximum when
> $$|i_{\text{ss}}(0)| \text{ is maximum}$$
>
> Condition for maximum DC offset:
> $$\theta-\phi=\pm90^\circ$$
>
> Hence,
> $$\theta=\phi\pm90^\circ$$
>
> > [!success] Interpretation
> > Maximum DC offset occurs when the switch is closed at the **peak of the steady-state current**.

---
##### Time Constant
#time-constant 

* **RC Circuit**: $$\boxed{\quad \tau = R_{th}C \quad}$$
* **RL Circuit**: $$\boxed{\quad \tau = \frac{L}{R_{th}} \quad}$$
Here, $R_{th}$ is the Thévenin resistance seen by the terminals of the capacitor or inductor for $t>0$.

---
#### Second-Order Circuits (RLC)
#second-order-circuits #damping #neper-frequency 

These circuits contain two independent energy storage elements (L and C) and are described by a second-order differential equation. The nature of their transient response is determined by **damping**.

For a **series RLC circuit**, we define:
* **Neper Frequency (Damping Factor)**: $\alpha = \frac{R}{2L}$
* **Undamped Resonant Frequency**: $\omega_0 = \frac{1}{\sqrt{LC}}$

The response is characterized by comparing $\alpha$ and $\omega_0$:
1. **Overdamped ($\alpha > \omega_0$)**: The response is a non-oscillatory, slow decay to the final value. The natural response is of the form $A_1e^{s_1 t} + A_2e^{s_2 t}$.
2. **Critically Damped ($\alpha = \omega_0$)**: The fastest possible non-oscillatory response. The natural response is of the form $(A_1 + A_2 t)e^{-\alpha t}$.
3. **Underdamped ($\alpha < \omega_0$)**: The response is a decaying oscillation. The natural response is of the form $e^{-\alpha t}(A_1 \cos(\omega_d t) + A_2 \sin(\omega_d t))$, where the **damped frequency** is $\omega_d = \sqrt{\omega_0^2 - \alpha^2}$.

---
#### Solution using [[The Laplace Transform|Laplace Transform]]
#laplace-transform

The Laplace transform is a powerful and systematic method for solving transient problems, especially for higher-order circuits. The steps are:
1. Transform the entire circuit into the **s-domain**, including initial conditions as sources.
2. Solve the resulting algebraic equations for the desired voltage or current in the s-domain.
3. Perform an **[[Inverse Laplace Transform using Partial Fraction Expansion|inverse Laplace Transform]]** to obtain the time-domain solution.

---
### Related Concepts
#related-concepts

> [[AC Circuit Analysis]] (Deals with the steady-state response for sinusoidal sources)

[[The Laplace Transform]] (The primary mathematical tool for solving transient problems)
[[Network Theorems]] (Used to find $R_{th}$ for calculating the time constant)
[[Differential Equations]] (The classical method for solving transient problems)
[[Resonance]] (Related to the parameters of second-order circuits)