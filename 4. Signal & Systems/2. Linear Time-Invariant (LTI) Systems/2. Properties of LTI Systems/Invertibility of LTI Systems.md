---
tags:
  - signal-processing
  - signals-and-systems
  - lti-systems
  - system-properties
  - invertibility
  - impulse-response
  - gate-ee
created: 2025-09-24
aliases:
  - LTI Invertibility
  - Inverse LTI Systems
  - "Example : Invertibility of LTI Systems"
subject: "[[Signals & Systems]]"
parent:
  - Properties of LTI Systems
modified: 2026-07-23T16:38:37
---
### Invertibility of LTI Systems
#invertibility #lti-systems #inverse-systems

> An [[LTI|LTI system]] is **invertible** if its input can be uniquely determined from its output. This implies the existence of an **inverse system** which, when cascaded with the original system, yields an identity system (i.e., the output is the same as the original input). The concept of invertibility is crucial for applications like deconvolution, signal restoration, and channel equalization.

#### Time-Domain Condition for Invertibility
#time-domain-invertibility

In the time domain, the cascade of a system with its inverse must result in an identity system. The [[Impulse Response of an LTI System|impulse response]] of an identity system is the unit impulse, $\delta(t)$ or $\delta[n]$, because $x(t) * \delta(t) = x(t)$.

Therefore, an LTI system with impulse response $h(t)$ is invertible if there exists an inverse impulse response $h_{inv}(t)$ such that their convolution is a unit impulse.

-   **Continuous-Time (CT)**:
    $$\boxed{\quad h(t) * h_{inv}(t) = \delta(t) \quad}$$
-   **Discrete-Time (DT)**:
    $$\boxed{\quad h[n] * h_{inv}[n] = \delta[n] \quad}$$

---
#### Transform-Domain Condition for Invertibility
#transform-domain-invertibility #transfer-function

The condition for invertibility is much simpler and more intuitive in the frequency or transform domain. Using the [[Properties of Convolution|Convolution Theorem]], the time-domain convolution becomes multiplication in the transform domain.

-   **CT (Laplace/Fourier)**: Taking the transform of the time-domain condition gives:
    $$ H(s) H_{inv}(s) = 1 $$
    $$\boxed{\quad H_{inv}(s) = \frac{1}{H(s)} \quad}$$
-   **DT (Z-Transform)**:
    $$ H(z) H_{inv}(z) = 1 $$
    $$\boxed{\quad H_{inv}(z) = \frac{1}{H(z)} \quad}$$

This implies:
> An LTI system is invertible if its transfer function $H(s)$ (or $H(z)$) does not have any zeros.

If $H(s_0) = 0$ for some frequency $s_0$, then the system completely blocks any input component at that frequency. That information is irrevocably lost, and no inverse system can recover it.

---
#### Stability and Causality of the Inverse System
#inverse-system-stability

The existence of an inverse system does not guarantee that the inverse system will be stable or causal.

-   The **poles** of the inverse system $H_{inv}(s)$ are the **zeros** of the original system $H(s)$.
-   For the inverse system to be **stable and causal**, its poles (the zeros of the original system) must all lie in the **left-half of the s-plane** (for CT) or **inside the unit circle** (for DT).

A system with zeros in the Right-Half Plane (RHP) is called a **non-minimum phase system**. While the system itself may be stable, its inverse will be unstable.

---
#### Examples

1.  **Integrator**: $h(t) = u(t)$, so $H(s) = 1/s$.
    -   $H_{inv}(s) = s$. This corresponds to a differentiator, $h_{inv}(t) = \delta'(t)$.
    -   The system is **invertible**.

2.  **Ideal Low-Pass Filter**: The transfer function $H(\omega)$ is 1 for $|\omega| < \omega_c$ and 0 for $|\omega| > \omega_c$.
    -   Since $H(\omega)=0$ for all frequencies above $\omega_c$, the system is **not invertible**. It is impossible to recover the high-frequency content of the input signal.

3.  **System with a Zero**: $y[n] = x[n] - x[n-1]$.
    -   $H(z) = 1 - z^{-1} = (z-1)/z$.
    -   The system has a zero at $z=1$ (the DC component). It completely blocks any DC offset in the input.
    -   Since $H(1)=0$, the system is **not invertible**.

---
### Related Concepts
#lti-invertibility/related-concepts

> [[Invertibility and Inverse Systems]] (The general property note)

[[Impulse Response of an LTI System]]
[[The Transfer Function H(s)]]
[[The Transfer Function H(z)]]
[[Properties of Convolution]]
[[Poles and Zeros of a Transfer Function]]