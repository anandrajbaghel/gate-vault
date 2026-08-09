---
tags:
  - control-systems
  - controllers
  - feedback-control
  - pd-controller
  - derivative-control
created: 2025-09-21
aliases:
  - PD Controller
  - Proportional-Derivative Control
  - Derivative Time Constant
subject: "[[Control Systems]]"
parent:
  - Controllers
modified: 2026-08-04T10:18:55
---
### Proportional-Derivative (PD) Controller
#control-systems/controller #pd-controller #derivative-action

> A **Proportional-Derivative (PD) Controller** is a feedback controller that combines a proportional action with a derivative action. The controller output is a sum of a term proportional to the current error and a term proportional to the rate of change (derivative) of the error. The derivative term provides an **anticipatory** or **damping** effect, allowing the controller to react to the error's trend and improve the stability and transient response of the system.

#### Mathematical Representation
#pd-controller/model

The controller output $u(t)$ is determined by the error signal $e(t)$ and its derivative:
$$ \boxed{\quad u(t) = K_p e(t) + K_d \frac{de(t)}{dt} \quad} $$
where:
- $K_p$ is the Proportional Gain.
- $K_d$ is the Derivative Gain.

Taking the Laplace Transform, the transfer function $C(s)$ of the PD controller is:
$$ C(s) = \frac{U(s)}{E(s)} = K_p + K_d s $$
This is often written in a standard form:
$$ \boxed{\quad C(s) = K_p (1 + T_d s) \quad} $$
where $T_d = K_d / K_p$ is the **Derivative Time Constant**.

Structurally, a PD controller introduces a **single zero at $s = -1/T_d = -K_p/K_d$** and has no poles.

---
#### Effects of PD Controller
#pd-controller/effects

The primary benefit of derivative action is the improvement of the system's transient response.

##### 1. Effect on Transient Response
#transient-response #damping

* **Anticipatory Action**: The derivative term predicts the future error by looking at its current rate of change. If the error is changing rapidly, the derivative term provides a strong control signal to counteract this change, effectively "applying the brakes" before the setpoint is overshot.
* **Damping**: This predictive action adds damping to the system. For a standard second-order system, adding a PD controller effectively increases the damping ratio ($\zeta$).
* **Overshoot and Settling Time**: By increasing damping, a PD controller **significantly reduces peak overshoot ($M_p$)** and can **decrease the settling time ($t_s$)**. The system settles to its final value faster and with fewer oscillations.

##### 2. Effect on System Type and Steady-State Error
#steady-state-error #system-type

* **[[Steady-State Error#System Type|System Type]]**: The PD controller introduces a zero, not a pole at the origin. Therefore, it **does not change the type of the system**.
* **[[Steady-State Error]] ($E_{ss}$)**: The steady-state error is evaluated as $s \to 0$. The steady-state gain of the controller is:
    $$ \lim_{s \to 0} C(s) = \lim_{s \to 0} (K_p + K_d s) = K_p $$
    Since the derivative term vanishes at steady-state (for step or ramp inputs, the error becomes constant or changes at a constant rate, so its derivative is zero in the limit), the PD controller **has no effect on the [[steady-state error]]**. The steady-state performance depends solely on the proportional gain $K_p$, just like a pure P controller.

##### 3. Effect on Stability
#stability-analysis

* **[[Frequency Response from Transfer Function|Frequency Response]]**: The controller's frequency response is $C(j\omega) = K_p(1+j\omega T_d)$. The phase of this controller is $\angle C(j\omega) = \tan^{-1}(\omega T_d)$, which is always positive. This means a PD controller adds **phase lead** to the system.
* **[[Phase Margin (PM)|Phase Margin]]**: Adding phase lead increases the system's **Phase Margin (PM)**, which improves relative stability and allows for a higher loop gain (and thus faster response) while maintaining stability.
* **[[Concept and Definition of Root Locus|Root Locus]]**: The zero introduced by the PD controller "pulls" the root locus to the left, into the more stable region of the s-plane, improving stability.

##### **High-Frequency Noise Amplification**

A major practical drawback is its sensitivity to measurement noise. The derivative of a noisy signal can be very large, as noise consists of rapid, high-frequency fluctuations.
$$ \text{Noise} \implies \frac{de(t)}{dt} \text{ is large} \implies u(t) \text{ fluctuates wildly} $$
This can cause the controller output to chatter, potentially damaging actuators. For this reason, a pure derivative is rarely used. In practice, it's often implemented with a [[low-pass filter]], which turns the PD controller into a [[Lead Compensator]].

---
#### Advantages and Disadvantages
#pd-controller/pros-cons #pros-cons/pd-controller

##### Advantages

1. **Improved Damping**: Reduces peak overshoot and oscillations.
2. **Faster Response**: Decreases settling time.
3. **Improved Stability**: Increases phase margin and relative stability.

##### Disadvantages

1. **No Effect on [[Steady-State Error]]**: Does not help in reducing or eliminating offset.
2. **Noise Amplification**: Highly sensitive to high-frequency noise in the feedback signal.
3. **Implementation Issues**: A pure derivative term ($s$) is an improper transfer function (degree of numerator > degree of denominator) and cannot be physically realized. It is always implemented with a parasitic pole.

---
### Related Concepts
#related-concepts

> [[Proportional (P) Controller]] (Provides the basic control action)

[[Proportional-Integral (PI) Controller]] (Addresses steady-state error, the PD's main weakness)
[[Proportional-Integral-Derivative (PID) Controller]] (Combines the strengths of all three terms)
[[Lead Compensator]] (The practical, realizable form of a PD controller)
[[Transient Response of Systems]]
[[Phase Margin (PM)]]
[[Concept and Definition of Root Locus]]
