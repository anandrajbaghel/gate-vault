---
tags:
  - signal-processing
  - signals-and-systems
  - system-properties
  - invertible-systems
  - inverse-systems
  - gate-ee
created: 2025-09-24
aliases:
  - Invertible Systems
  - Inverse System
  - "Example : Invertibility Systems"
  - "Example : Non-Invertibility Systems"
subject: "[[Signals & Systems]]"
parent:
  - System Properties
modified: 2026-07-23T16:34:41
---
### Invertibility and Inverse Systems
#invertible-systems #inverse-systems #system-properties

> **Invertibility** is a system property that describes whether the original input signal can be uniquely recovered from the output signal. If a system is invertible, then an **inverse system** exists that, when cascaded with the original system, recovers the input perfectly. This concept is crucial in applications like communications (channel equalization) and signal restoration.

---
#### Invertible Systems
#invertible-systems

A system is **invertible** if distinct inputs produce distinct outputs. This is equivalent to a one-to-one mapping.

-   **Formal Condition**: If $x_1(t) \neq x_2(t)$, then an invertible system $\mathcal{T}$ must produce outputs such that $\mathcal{T}\{x_1(t)\} \neq \mathcal{T}\{x_2(t)\}$.
-   **Core Idea**: If you know the output signal and the system's rules, you can unambiguously determine the input that produced it.

---
#### The Inverse System
#inverse-systems

For every invertible system $\mathcal{T}$, there exists a corresponding inverse system $\mathcal{T}^{-1}$. When the system and its inverse are placed in cascade, the output is the original input signal.

$$ x(t) \quad \rightarrow \quad \boxed{\text{System }\mathcal{T}} \quad \rightarrow \quad y(t) \quad \rightarrow \quad \boxed{\text{Inverse System }\mathcal{T}^{-1}} \quad \rightarrow \quad z(t) = x(t) $$

##### For LTI Systems
For [[LTI|Linear Time-Invariant (LTI) systems]], the condition for invertibility has a precise mathematical form in both the time and frequency domains. If an LTI system with impulse response $h(t)$ is invertible, its inverse system has an impulse response $h_{inv}(t)$.

-   **Time Domain (Convolution)**: The convolution of the system's impulse response with its inverse's impulse response yields the impulse response of an identity system (a delta function).
    -   **CT**: $$\boxed{\quad h(t) * h_{inv}(t) = \delta(t) \quad}$$
    -   **DT**: $$\boxed{\quad h[n] * h_{inv}[n] = \delta[n] \quad}$$

-   **Frequency/Transform Domain (Multiplication)**: This condition is much simpler in the transform domain, where convolution becomes multiplication.
    -   **CT**: $$\boxed{\quad H(s) H_{inv}(s) = 1 \implies H_{inv}(s) = \frac{1}{H(s)} \quad}$$
    -   **DT**: $$\boxed{\quad H(z) H_{inv}(z) = 1 \implies H_{inv}(z) = \frac{1}{H(z)} \quad}$$
    This implies that for an LTI system to be invertible, its transfer function $H(s)$ or $H(z)$ must not be zero at any frequency.

---
#### Examples
#system-examples

##### Invertible Systems
1.  **Time Shift**: System: $y(t) = x(t-t_0)$.
    -   This is invertible. The inverse system is a time advance: $z(t) = y(t+t_0)$, which recovers $x(t)$.
2.  **Amplifier**: System: $y(t) = 5x(t)$.
    -   This is invertible. The inverse system is an attenuator: $z(t) = \frac{1}{5}y(t)$.
3.  **Integrator**: System: $y(t) = \int_{-\infty}^{t} x(\tau) d\tau$.
    -   This is invertible. The inverse system is a differentiator: $z(t) = \frac{d}{dt}y(t)$.

##### Non-Invertible Systems
1.  **Squaring Device**: System: $y(t) = x^2(t)$.
    -   **Not invertible**. Different inputs can produce the same output. For example, inputs $x_1(t) = 2$ and $x_2(t) = -2$ both result in the output $y(t) = 4$. The sign information is lost and cannot be recovered.
2.  **Zero System**: System: $y(t) = 0$ for any input $x(t)$.
    -   **Not invertible**. All inputs map to a single output, making it impossible to determine the original input.
3.  **Full-Wave Rectifier**: System: $y(t) = |x(t)|$.
    -   **Not invertible** for the same reason as the squaring device; sign information is lost.

---
### Related Concepts
#invertibility/related-concepts

> [[System Definition and Classification]]

[[LTI|LTI Systems]]
[[Continuous-Time Convolution Integral]]
[[The Transfer Function H(s)]] (Invertibility is tied to the poles and zeros of H(s))
[[The Transfer Function H(z)]]