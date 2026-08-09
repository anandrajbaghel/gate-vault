---
tags:
  - control-systems
  - controllers
  - feedback-control
  - pi-controller
  - integral-control
created: 2025-09-21
aliases:
  - PI Controller
  - Proportional-Integral Control
  - Integral Time Constant
subject: "[[Control Systems]]"
parent:
  - Controllers
modified: 2026-08-04T10:18:59
---
### Proportional-Integral (PI) Controller
#control-systems/controller #pi-controller #integral-action

> A **Proportional-Integral (PI) Controller** is a feedback controller that combines the actions of a [[Proportional (P) Controller|proportional controller]] and an integral controller. The proportional term provides a response proportional to the current error, while the integral term sums the error over time. The primary purpose of the integral action is to **eliminate** [[steady-state error]], something a pure P controller cannot do for many systems.

#### Mathematical Representation
#pi-controller/model

The controller output $u(t)$ is a [[weighted sum]] of the current error $e(t)$ and the integral of past errors:
$$ \boxed{\quad u(t) = K_p e(t) + K_i \int_0^t e(\tau)d\tau \quad} $$
where:
- $K_p$ is the Proportional Gain.
- $K_i$ is the Integral Gain.

Taking the [[The Laplace Transform|Laplace Transform]], the transfer function $C(s)$ of the PI controller is:
$$ C(s) = \frac{U(s)}{E(s)} = K_p + \frac{K_i}{s} $$
This can be rewritten in a standard form:
$$ \boxed{\quad C(s) = K_p \left( 1 + \frac{1}{T_i s} \right) = \frac{K_p(T_i s + 1)}{T_i s} \quad} $$
where $T_i = K_p / K_i$ is the **Integral Time Constant** or reset time.

Structurally, a PI controller introduces a **pole at the origin ($s=0$)** and a **finite zero at $s = -1/T_i = -K_i/K_p$**.

---
### Effects of PI Controller
#pi-controller/effects

A PI controller fundamentally changes the system's long-term behavior while also affecting its transient response and stability.

#### 1. Effect on System Type and Steady-State Error
#steady-state-error #system-type

*   **System Type**: The integrator term ($1/s$) adds a pole at the origin to the open-loop transfer function $G_{OL}(s) = C(s)G(s)$. This **increases the type of the system by one**.
    *   A Type-0 system becomes Type-1.
    *   A Type-1 system becomes Type-2.
*   **[[Steady-State Error]] ($E_{ss}$)**: The increase in system type is the key to eliminating steady-state error.
    *   For an original Type-0 system $G(s)$ subjected to a unit step input ($R(s)=1/s$), the new position error constant $K_{pos}$ becomes:
        $$\begin{align}
        K_{pos, new} &= \lim_{s \to 0} C(s)G(s) \\
         &= \lim_{s \to 0} \left( K_p + \frac{K_i}{s} \right) G(s) = \lim_{s \to 0} \frac{K_p s + K_i}{s} G(s) \\
         &= \infty \quad (\text{since } G(0) \text{ is finite for a Type-0 system})
        \end{align}$$
    *   The steady-state error is then:
        $$\boxed{\quad E_{ss} = \frac{1}{1+K_{pos, new}} = 0 \quad}$$
    *   Similarly, a PI controller in a Type-1 system will result in zero steady-state error for a ramp input.

#### 2. Effect on Transient Response and Stability
#transient-response #stability-analysis

While the integral action is beneficial for steady-state performance, it has adverse effects on transient response and stability.

* **Transient Response**: The integral action generally makes the system **slower and more oscillatory**. It often leads to an **increase in [[Time-Domain Specifications|peak overshoot]] ($M_p$)** and an **increase in [[Time-Domain Specifications|settling time]] ($t_s$)**.
* **Stability**: The PI controller introduces a pole at the origin, which adds a constant $-90^\circ$ phase lag to the frequency response of the controller. This **reduces the [[Phase Margin (PM)|phase margin]]** of the system, thereby decreasing its relative stability and making it more prone to oscillations. The zero at $s = -1/T_i$ adds a phase lead that can partially offset this lag, but the overall effect is typically destabilizing compared to a P controller alone.

#### **Integral Windup**
#integral-windup 

A major practical issue with PI controllers is **integral windup**. If the error signal is large and persistent (e.g., due to actuator saturation), the integral term can accumulate to an extremely large value. When the error eventually decreases, this large stored value in the integrator keeps the controller output saturated, causing a large [[Time-Domain Specifications|overshoot]] and poor performance. Anti-windup strategies are often required in practical implementations.

---
### Advantages and Disadvantages
#pi-controller/pros-cons #pros-cons/pi-controller 

#### Advantages

1. **Zero Steady-State Error**: Its main advantage is the complete elimination of steady-state error for step inputs (in Type-0 systems) or ramp inputs (in Type-1 systems).
2. **Disturbance Rejection**: Very effective at rejecting constant disturbances acting on the plant.

#### Disadvantages

1. **Slower Response**: The transient response can be slower compared to a [[Proportional (P) Controller|P]] or [[Proportional-Derivative (PD) Controller|PD controller]].
2. **Reduced Stability**: The integral action reduces stability margins and increases [[Time-Domain Specifications|overshoot]].
3. **Integral Windup**: Can lead to poor performance under actuator saturation if not handled properly.

---
### Related Concepts
#related-concepts

> [[Proportional (P) Controller]] (The base controller, lacks steady-state accuracy)

[[Proportional-Derivative (PD) Controller]] (Improves stability and transient response but does not fix steady-state error)
[[Proportional-Integral-Derivative (PID) Controller]] (Combines the benefits of all three terms)
[[Lag Compensator]] (A PI controller is a form of lag compensator, improving steady-state accuracy at the cost of speed and stability)
[[Steady-State Error]]
[[Error Analysis for different System Types (Type 0, 1, 2)|Error vs System Type]]
[[Phase Margin (PM)]]
