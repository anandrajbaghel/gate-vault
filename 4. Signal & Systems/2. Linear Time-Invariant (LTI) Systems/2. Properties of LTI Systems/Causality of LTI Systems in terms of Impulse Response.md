---
tags:
  - signal-processing
  - signals-and-systems
  - lti-systems
  - causality
  - impulse-response
  - gate-ee
created: 2025-09-24
aliases:
  - Causal LTI Systems
  - LTI Causality Condition
  - "Example : Causality"
subject: "[[Signals & Systems]]"
parent:
  - Properties of LTI Systems
modified: 2026-07-23T16:38:12
---
### Causality of LTI Systems in terms of Impulse Response
#causality #lti-systems #impulse-response #physical-realizability

> For [[LTI|Linear Time-Invariant (LTI) systems]], the general property of [[Causality]] has a simple, direct, and definitive test based on the system's [[Impulse Response of an LTI System|impulse response]], $h(t)$ or $h[n]$. Since the impulse response completely characterizes the LTI system, it must also contain all the information about its causality. A system is causal if it does not respond to an input before the input is applied.

---
#### The Causality Condition for LTI Systems
#causality-condition

An LTI system is **causal** if and only if its impulse response is zero for all negative time.

-   **Continuous-Time (CT)**: An LTI system is causal if and only if:
    $$\boxed{\quad h(t) = 0 \quad \text{for all } t < 0 \quad}$$
-   **Discrete-Time (DT)**: An LTI system is causal if and only if:
    $$\boxed{\quad h[n] = 0 \quad \text{for all } n < 0 \quad}$$

A signal that is zero for negative time is often called a **causal signal**. Therefore, the condition can be restated as:
> An LTI system is causal if and only if its impulse response is a causal signal.

#### Why This Condition Works
The impulse response $h(t)$ is, by definition, the system's output when the input is a unit impulse $\delta(t)$.
1.  The cause is the input, $\delta(t)$, which occurs at a single instant, $t=0$.
2.  The effect is the output, $h(t)$.
3.  For a causal system, the effect cannot precede the cause.
4.  Therefore, the system's response $h(t)$ must be zero for all time $t < 0$, before the input has been applied.

---
#### Impact on the Convolution Integral
#convolution-limits

The causality condition simplifies the limits of the [[Continuous-Time Convolution Integral|convolution integral]]. If we have a causal system ($h(t)=0$ for $t<0$) and a causal input ($x(t)=0$ for $t<0$), the output is given by:
$$y(t) = \int_{-\infty}^{\infty} x(\tau)h(t-\tau)d\tau$$
The conditions $x(\tau)=0$ for $\tau<0$ and $h(t-\tau)=0$ for $t-\tau < 0$ (or $\tau > t$) change the limits of integration. The integral becomes non-zero only for $0 \le \tau \le t$.
$$\boxed{\quad y(t) = \int_{0}^{t} x(\tau)h(t-\tau)d\tau \quad \text{for } t \ge 0 \quad}$$
This form clearly shows that the output $y(t)$ at time $t$ depends only on the input $x(\tau)$ for $\tau$ between $0$ and $t$ (i.e., present and past inputs).

---
#### Examples

- **Causal System**: $h(t) = e^{-3t}u(t)$. The presence of the unit step $u(t)$ ensures that $h(t)=0$ for $t<0$.
- **Non-Causal System**: $h(t) = \text{rect}(t/4)$. This is a rectangular pulse from $t=-2$ to $t=2$. Since it is non-zero for $t<0$, the system is non-causal.
- **Memoryless System**: $h(t) = K\delta(t)$. This system is causal because the impulse is zero for all $t<0$. A memoryless LTI system is a special case of a causal LTI system.

---
### Related Concepts
#causality-lti/related-concepts

> [[Impulse Response of an LTI System]]

 [[Causality]] (The general property note)
[[Stability of LTI Systems in terms of Impulse Response]]
[[Region of Convergence (ROC)]] (The ROC of a causal system is a right-half plane or the exterior of a circle)
[[Continuous-Time Convolution Integral]]