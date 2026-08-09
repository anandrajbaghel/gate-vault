---
tags:
  - control-systems
  - time-response
  - first-order-system
  - transient-response
  - time-constant
created: 2025-09-28
aliases:
  - First Order System
  - First Order Response
  - 1st Order System Response
  - Step Response of a First-Order System
subject: "[[Control Systems]]"
parent:
  - Transient Response of Systems
modified: 2026-08-04T09:42:28
---
### First-Order System Response
#control-systems/time-response #first-order-system

> A first-order system is a system whose input-output relationship is described by a [[First-Order Differential Equations#2. Linear First-Order Equations|first-order linear differential equation]]. Its dynamic behavior is characterized by a single parameter: the **[[time constant]] ($\tau$)**. These systems exhibit a non-oscillatory, exponential response to inputs.

#### Standard Form of a First-Order System
#first-order-system/standard-form

The transfer function of a standard first-order system is given by:
$$\boxed{\quad T(s) = \frac{C(s)}{R(s)} = \frac{K}{\tau s + 1} \quad}$$
Where:
- **$K$** is the **[[DC Gain]]** (or steady-state gain), which is the ratio of the steady-state output to the steady-state input. $K = \lim_{s \to 0} T(s)$.
- **$\tau$** is the **[[Time Constant]]**, which determines the speed of the system's response.

The system has a single pole located at $s = -1/\tau$ on the negative real axis in the $s$-plane.

![[Bode Plots#^time-constant-form-conversion]]

---
#### Step Response of a First-Order System
#first-order-system/step-response

The step response is the most important characteristic used to analyze a first-order system. For a unit step input, $R(s) = 1/s$.
The output in the Laplace domain is:
$$C(s) = R(s) T(s) = \frac{1}{s} \cdot \frac{K}{\tau s + 1}$$
Using [[Inverse Laplace Transform using Partial Fraction Expansion|partial fraction expansion]]:
$$C(s) = \frac{K}{s} - \frac{K\tau}{\tau s + 1} = \frac{K}{s} - \frac{K}{s + 1/\tau}$$
Taking the inverse Laplace transform gives the time-domain response:
$$\boxed{\quad c(t) = K(1 - e^{-t/\tau}), \quad t \ge 0 \quad}$$
The response is an exponential rise from $c(0)=0$ to a final steady-state value of $c(\infty)=K$.

---
#### The Time Constant ($\tau$)
#time-constant

The time constant is the fundamental parameter governing the transient response of a first-order system.
1.  **Definition:** It is the time required for the system's response to reach **63.2%** of its final (steady-state) value.
    At $t=\tau$, the output is:
    $$c(\tau) = K(1 - e^{-\tau/\tau}) = K(1 - e^{-1}) \approx 0.632K$$
2.  **Speed of Response:** A smaller time constant implies a faster response, while a larger time constant implies a slower response.
3.  **Graphical Interpretation:** The tangent to the response curve at $t=0$ has a slope of $c'(0) = K/\tau$. This tangent intersects the final value line $c(t)=K$ at exactly $t=\tau$.

---
#### Time-Domain Specifications
#first-order-system/specifications

For a first-order system's response to a unit step input:
-   **Rise Time ($T_r$):** The time taken for the response to rise from 10% to 90% of its final value.
    $$\boxed{\quad T_r = t_{90\%} - t_{10\%} = 2.2\tau \quad}$$
-   **Settling Time ($T_s$):** The time required for the response to reach and stay within a specified tolerance band (usually 2% or 5%) of its final value.
    $$\boxed{\quad T_s (\text{for 2\% tolerance}) \approx 4\tau \quad}$$
    $$\boxed{\quad T_s (\text{for 5\% tolerance}) \approx 3\tau \quad}$$
-   **Peak Overshoot ($M_p$):** A first-order system never overshoots its final value.
    $$M_p = 0\%$$
-   **Delay Time ($T_d$):** Time to reach 50% of the final value. $T_d = 0.693\tau$.

---
#### Impulse and Ramp Response
#first-order-system/impulse-response #first-order-system/ramp-response

-   **Impulse Response:** For an impulse input $R(s)=1$, the output is $C(s) = K/(\tau s + 1)$. The time response is an exponential decay.
    $$c(t) = \frac{K}{\tau} e^{-t/\tau}$$
-   **Ramp Response:** For a ramp input $R(s)=1/s^2$, the output is $c(t) = K(t - \tau + \tau e^{-t/\tau})$.
    In the steady state, the output is $c_{ss}(t) = K(t - \tau)$. For a unity feedback system with $K=1$, the output tracks the input ramp with a constant lag time of $\tau$ and a constant steady-state error of $e_{ss} = \tau$.

---
### Related Concepts
#control-systems/related-concepts

> [[Second-Order System Response]]

[[Type and Order of Control Systems]]
[[Time-Domain Specifications]]
[[Unit Step, Ramp, Parabolic, and Impulse Signals]]
[[Steady-State Error]]
[[Transfer Function and Impulse Response]]