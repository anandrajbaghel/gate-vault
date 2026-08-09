---
tags:
  - control-systems
  - time-response
  - system-performance
  - system-accuracy
  - final-value-theorem
created: 2025-10-03
aliases:
  - ess
  - Steady State Error
  - "Use Case : Final Value Theorem"
subject: "[[Control Systems]]"
parent:
  - Steady-State Response
trends:
  - "[[trends - Steady-State Error]]"
error:
  - "[[error - Steady-State Error]]"
modified: 2026-08-04T10:36:04
---
### Steady-State Error
#control-systems/steady-state-response #system-accuracy

> The **steady-state error ($e_{ss}$)** ==is the difference between the desired output (the reference input) and the actual output of a system as time approaches infinity==. It is a fundamental measure of the system's accuracy after all transient effects have subsided. A primary goal of [[Control Systems|control system]] design is to minimize or eliminate this error.

> [!concept]- Physical Meaning of Steady-State Error : Conceptual Clarification
> Even though the closed-loop output $C(s)$ contains gain and dynamics, **zero steady-state error does NOT mean $C(s)$ has no gain or equals $R(s)$ for all $s$.**
>
> For unity feedback:
> $$E(s) = R(s) - C(s)$$
> Zero steady-state error means:
> $$\lim_{t\to\infty} e(t) = 0 \;\;\Longrightarrow\;\; \lim_{t\to\infty} C(t) = \lim_{t\to\infty} R(t)$$
>
> This occurs when:
> $$\lim_{s\to 0} T(s) = 1$$
> which is ensured if:
> $$\lim_{s\to 0} G(s) = \infty \quad (\text{integrators / system type})$$
>
> > [!memory] Key idea
> > - Gain and dynamics shape *transient behavior*;  
> > - System type determines *steady-state error*.

---
#### Calculating Steady-State Error
#final-value-theorem

The steady-state error is calculated using the **[[Properties of the Laplace Transform#10. Final Value Theorem (FVT)|Final Value Theorem]]** on the error signal, $E(s)$.
$$\boxed{\quad e_{ss} = \lim_{t \to \infty} e(t) = \lim_{s \to 0} sE(s) \quad}$$
For the common **unity feedback system**, the error signal is given by:
$$E(s) = \frac{R(s)}{1 + G(s)}$$

> [!derivation]- Derivation : Unity Feedback System Error
> For a unity feedback system, the feedback signal $b(t)$ is equal to the output signal $c(t)$.
> 
> ![[error1.png]]
> 
> The error signal $e(t)$ is defined as the difference between the reference input $r(t)$ and the output $c(t)$
> $$e(t) = r(t) - c(t)$$
> (Note: In the diagram $b(t)=c(t)$ for unity feedback)
> 
> In the Laplace domain
> $$\boxed{\quad E(s) = R(s) - C(s) \quad}$$
> $$E(s) = R(s)\left(1 - \frac{C(s)}{R(s)}\right)$$
> 
> Given the [[Closed-Loop Transfer Function (CLTF)#The Standard Formula|closed-loop transfer function]] for a unity feedback system
> $$\frac{C(s)}{R(s)} = \frac{G(s)}{1+G(s)} = T(s)$$
> So, $C(s) = R(s) \frac{G(s)}{1+G(s)}$
> 
> Substituting $C(s)$ into the error equation
> $$\begin{align} E(s) &= R(s) - R(s) \frac{G(s)}{1+G(s)} \\
&= R(s)\left[ 1 - \frac{G(s)}{1+G(s)} \right ] \\
&= R(s)\left[ \frac{1+G(s)-G(s)}{1+G(s)} \right ] \\
\end{align}$$
> $$\boxed{\quad E(s) = \frac{R(s)}{1+G(s)}\quad}$$

> [!related]- Non-Unity Feedback System Error
> [[Steady State Error for Non-Unity Feedback System]]

Therefore, for unity feedback systems, the steady-state error is:
$$\boxed{\quad e_{ss} = \lim_{s \to 0} \frac{sR(s)}{1 + G(s)} \quad}$$
The value of $e_{ss}$ depends on two factors:
1. the type of **input signal** ($R(s)$) and
2. the **system type**.

> [!pyq]-
> ![[ee_2018#^q25]]

---
#### System Type
#system-type

> [!related]- Type and Order of Control Systems
> [[Type and Order of Control Systems]]

The **system type** is defined as the number of pure integrators (poles at the origin, $s=0$) in the **[[Open-Loop Transfer Function (OLTF)|open-loop transfer function]]**, $G(s)H(s)$. If the open-loop transfer function is expressed as:
$$G(s)H(s) = \frac{K(s+z_1)(s+z_2)\cdots}{s^N(s+p_1)(s+p_2)\cdots}$$
Then **$N$ is the type of the system**.
-   **Type 0 System:** $N=0$ (no integrator)
-   **Type 1 System:** $N=1$ (one integrator)
-   **Type 2 System:** $N=2$ (two integrators)

The system type is the most important factor in determining the steady-state accuracy. A higher system type generally leads to better tracking performance for a given input.

> [!mistake] Terminology Trap: Open-Loop Gain vs. DC Gain
> For a **Type 1 system**, the parameter $K$ in the standard positional form $G(s)H(s) = \frac{K(s+z_1)\dots}{s(s+p_1)\dots}$ equals the velocity error constant ($K_v = K$). 
> - **Do not confuse this with DC gain.**
> - Because of the integrator ($s$ at the origin), the actual DC gain ($\omega = 0$) of this system is **infinite** ($\infty$), which is exactly why its steady-state error for a step input drops to zero ($e_{ss}=0$).

---
#### Static Error Constants and $e_{ss}$ Analysis
#static-error-constants

> [!related]- Static Error Constants
> [[Static Error Constants]]

To simplify the analysis, we use **static error constants**: the Position Constant ($K_p$), Velocity Constant ($K_v$), and Acceleration Constant ($K_a$).

##### 1. For a Step Input
#step-input

$$R(t) = A u(t), \qquad R(s)=A/s$$
The error is called the **steady-state position error**.
$$e_{ss} = \lim_{s \to 0} \frac{s(A/s)}{1 + G(s)} = \frac{A}{1 + \lim_{s \to 0} G(s)}$$
We define the **Position Error Constant, $K_p$**:
$$K_p = \lim_{s \to 0} G(s)$$
$$\boxed{\quad e_{ss} = \frac{A}{1 + K_p} \quad}$$

---
##### 2. For a Ramp Input
#ramp-input

$$R(t) = A t, \qquad R(s)=A/s^2$$
The error is called the **steady-state velocity error**.
$$e_{ss} = \lim_{s \to 0} \frac{s(A/s^2)}{1 + G(s)} = \lim_{s \to 0} \frac{A}{s + sG(s)} = \frac{A}{\lim_{s \to 0} sG(s)}$$
We define the **Velocity Error Constant, $K_v$**:
$$K_v = \lim_{s \to 0} sG(s)$$
$$\boxed{\quad e_{ss} = \frac{A}{K_v} \quad}$$

---
##### 3. For a Parabolic Input
#parabolic-input

$$R(t) = \frac{A t^2}{2}, \qquad R(s)=A/s^3$$
The error is called the **steady-state acceleration error**.
$$e_{ss} = \lim_{s \to 0} \frac{s(A/s^3)}{1 + G(s)} = \lim_{s \to 0} \frac{A}{s^2 + s^2G(s)} = \frac{A}{\lim_{s \to 0} s^2G(s)}$$
We define the **Acceleration Error Constant, $K_a$**:
$$K_a = \lim_{s \to 0} s^2G(s)$$
$$\boxed{\quad e_{ss} = \frac{A}{K_a} \quad}$$

---
#### Summary of Steady-State Errors for Unity Feedback Systems
#steady-state-error/summary

This table is crucial for quickly determining steady-state error.

| System Type | Input: Step ($A u(t)$) | Input: Ramp ($At$) | Input: Parabolic ($At^2/2$) |
| :--- | :--- | :--- | :--- |
| **Type 0** | `Finite` <br> $\frac{A}{1+K_p}$ | $\infty$ | $\infty$ |
| | $K_p = \text{const}$ | $K_v = 0$ | $K_a = 0$ |
| **Type 1** | `Zero` <br> $e_{ss}=0$ | `Finite` <br> $\frac{A}{K_v}$ | $\infty$ |
| | $K_p = \infty$ | $K_v = \text{const}$ | $K_a = 0$ |
| **Type 2** | `Zero` <br> $e_{ss}=0$ | `Zero` <br> $e_{ss}=0$ | `Finite` <br> $\frac{A}{K_a}$ |
| | $K_p = \infty$ | $K_v = \infty$ | $K_a = \text{const}$ |

> [!examtip] Quick-Solving Shortcut: Finite Duration / Transient Inputs
> 
> > [!pyq]-
> > ![[ee_2011#^q9]]
> 
> ==For any **stable** control system, the steady-state error ($e_{ss}$) for *any* finite-duration input signal (such as a pulse, impulse, or finite-duration ramp) will **always be zero**, regardless of the system type.==
> 
> **Why it works (The Intuition):**
> A pulse or transient signal completely returns to and remains at $0$ after a finite time ($t > t_0$). 
> * As $t \to \infty$, the input $r(t) = 0$.
> * Since the system is stable, its outputs will naturally decay back to $0$ as well ($c(\infty) = 0$).
> * Therefore: $e_{ss} = \lim_{t \to \infty} [r(t) - c(t)] = 0 - 0 = 0$.

> [!concept] Key Insight
> A system of Type $N$ can track an input of the form $t^N$ with a finite, constant error, and can perfectly track (zero error) any input of order less than $N$ (i.e., $t^k$ where $k < N$).

---
### Related Concepts
#control-systems/related-concepts

> [[Static Error Constants]]

[[Steady-State Error for Disturbances]]
[[Type and Order of Control Systems]]
[[Unit Step, Ramp, Parabolic, and Impulse Signals]]
[[Error Analysis for different System Types (Type 0, 1, 2)]]
[[Time-Domain Specifications]]
[[Proportional (P) Controller|P Controller]] & [[Proportional-Integral-Derivative (PID) Controller|PID Controller]] 
[[Proportional-Integral (PI) Controller|PI Controller]] (PI controllers increase system type to eliminate steady-state error)
[[Effect of Feedback on System Performance]]
[[Steady State Error for Non-Unity Feedback System]] (if $H(s) \ne 1$)

