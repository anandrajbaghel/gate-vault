---
tags:
  - control-systems
  - time-response
  - test-signals
  - system-input
created: 2025-09-27
aliases:
  - Standard Test Signals
  - Test Inputs
  - Unit Step Signal
  - Unit Ramp Signal
  - Unit Parabolic Signal
  - Unit Impulse Signal
subject: "[[Control Systems]]"
parent:
  - Time Response Analysis
modified: 2026-08-04T10:46:35
---
### Unit Step, Ramp, Parabolic, and Impulse Signals
#control-systems/time-response #test-signals

> ==**Standard test signals** are a set of fundamental inputs used to analyze and evaluate the performance of control systems.== By observing a system's response to these signals, we can understand its transient and steady-state behavior. ==They are chosen because they are mathematically simple and represent common types of physical inputs a system might encounter, such as sudden changes (step), constant velocity (ramp), and constant acceleration (parabolic).==

> [!prerequisite]
> [[The Laplace Transform]]
> [[Laplace Transform Standard Pairs Table]]

---
#### Unit Impulse Signal ($\delta(t)$)
#impulse-signal

The unit impulse signal models a sudden, short-duration shock or disturbance. ==Its most important property is that its Laplace transform is 1, which makes it ideal for finding the system's transfer function through the impulse response.==

-   **Time-Domain Definition:**
    $$\delta(t) = \begin{cases} \infty, & t=0 \\ 0, & t \neq 0 \end{cases} \quad \text{with} \quad \int_{-\infty}^{\infty} \delta(t) dt = 1$$
-   **Laplace Transform:**
    $$\boxed{\quad \mathcal{L}\{\delta(t)\} = 1 \quad}$$
-   **Physical Significance:** Represents a sudden shock, like a hammer blow or a voltage spike. The response to this input is the system's [[Transfer Function and Impulse Response|Impulse Response]], $h(t)$.

---
#### Unit Step Signal ($u(t)$)
#step-signal

The unit step signal represents a sudden, sustained change in the input. ==It is the most common signal for analyzing transient response specifications like rise time, peak overshoot, and settling time.==

-   **Time-Domain Definition:**
    $$u(t) = \begin{cases} 1, & t \ge 0 \\ 0, & t < 0 \end{cases}$$
-   **Laplace Transform:**
    $$\boxed{\quad \mathcal{L}\{u(t)\} = \frac{1}{s} \quad}$$
-   **Physical Significance:** Represents an instantaneous change in the command or setpoint, such as turning on a switch, changing the desired temperature, or setting a desired position.

---
#### Unit Ramp Signal ($r(t)$)
#ramp-signal

The unit ramp signal represents an input that changes at a constant rate. ==It is used to test a system's ability to track a constant velocity command.==

-   **Time-Domain Definition:**
    $$r(t) = t \cdot u(t) = \begin{cases} t, & t \ge 0 \\ 0, & t < 0 \end{cases}$$
-   **Laplace Transform:**
    $$\boxed{\quad \mathcal{L}\{t \cdot u(t)\} = \frac{1}{s^2} \quad}$$
-   **Physical Significance:** Represents a constant velocity input, such as tracking an object moving at a constant speed or following a linearly increasing temperature profile.

---
#### Unit Parabolic Signal ($p(t)$)
#parabolic-signal

The unit parabolic signal represents an input that is constantly accelerating. ==It is the most demanding of the standard signals and is used to test a system's ability to track an accelerating command.==

-   **Time-Domain Definition:**
    $$p(t) = \frac{t^2}{2} \cdot u(t) = \begin{cases} \frac{t^2}{2}, & t \ge 0 \\ 0, & t < 0 \end{cases}$$
-   **Laplace Transform:**
    $$\boxed{\quad \mathcal{L}\left\{\frac{t^2}{2} u(t)\right\} = \frac{1}{s^3} \quad}$$
-   **Physical Significance:** Represents a constant acceleration input, such as tracking a missile or a launching rocket.

---
#### Relationship Between Test Signals
#test-signals/relationship

==The standard test signals are related by integration and differentiation.== This relationship is mirrored in the Laplace domain by multiplication or division by $s$.

> [!memory] Differentiation
> $$\frac{d}{dt}(\text{Parabolic}) = \text{Ramp} \quad | \quad \frac{d}{dt}(\text{Ramp}) = \text{Step} \quad | \quad \frac{d}{dt}(\text{Step}) = \text{Impulse}$$

> [!memory] Integration
> $$\int_0^t \text{Impulse}(\tau)d\tau = \text{Step}(t) \quad | \quad \int_0^t \text{Step}(\tau)d\tau = \text{Ramp}(t) \quad | \quad \int_0^t \text{Ramp}(\tau)d\tau = \text{Parabolic}(t)$$

This hierarchy reflects an increasing order of dynamic demand on the control system.

---
### Related Concepts
#control-systems/related-concepts

> [[Time-Domain Specifications]]

[[Steady-State Error]]
[[Static Error Constants]]
[[Transfer Function and Impulse Response]]
[[The Laplace Transform]]
[[First-Order System Response]]
[[Second-Order System Response]]