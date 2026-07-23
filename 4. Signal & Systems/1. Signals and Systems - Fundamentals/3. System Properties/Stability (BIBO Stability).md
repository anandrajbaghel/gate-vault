---
tags:
  - signal-processing
  - signals-and-systems
  - system-properties
  - stability
  - bibo-stability
  - gate-ee
created: 2025-09-24
aliases:
  - BIBO Stability
  - Stable Systems
  - Bounded-Input Bounded-Output
subject: "[[Signals & Systems]]"
parent:
  - System Properties
modified: 2026-07-23T16:35:16
---
### Stability (BIBO Stability)
#bibo-stability #stable-systems #system-properties

> **Stability** is a critical property of a system that describes whether its output remains controlled or "bounded" for any reasonable input. The most common definition is **Bounded-Input, Bounded-Output (BIBO) stability**. It ensures that if a system is subjected to an input signal that doesn't go to infinity, its output will also not go to infinity.

---
#### Definition of BIBO Stability
#bibo-definition

A system is **BIBO stable** if, for every bounded input signal, the resulting output signal is also bounded.

-   A signal $x(t)$ is **bounded** if there exists a finite constant $M_x$ such that $|x(t)| \le M_x < \infty$ for all $t$.
-   A system is stable if for any bounded input $x(t)$, the output $y(t)$ is also bounded, i.e., there exists a finite constant $M_y$ such that $|y(t)| \le M_y < \infty$.

$$\boxed{\quad \text{If } |x(t)| \le M_x < \infty \quad \implies \quad |y(t)| \le M_y < \infty \quad}$$
-   **Example of an Unstable System**: An ideal integrator, $y(t) = \int_{-\infty}^{t}x(\tau)d\tau$. If we apply a bounded input like the unit step, $x(t)=u(t)$, the output is the ramp function, $y(t)=r(t)$, which is unbounded and grows to infinity. Therefore, the integrator is not BIBO stable.

---
#### Stability Condition for LTI Systems (Time Domain)
#lti-stability-condition #impulse-response

For [[LTI|Linear Time-Invariant (LTI) systems]], there is a direct and powerful condition for BIBO stability based on the system's [[Impulse Response of an LTI System|impulse response]].

> An LTI system is BIBO stable if and only if its impulse response is **absolutely integrable** (for CT) or **absolutely summable** (for DT).

-   **Continuous-Time (CT)**:
    $$\boxed{\quad \int_{-\infty}^{\infty} |h(t)| dt < \infty \quad}$$
-   **Discrete-Time (DT)**:
    $$\boxed{\quad \sum_{n=-\infty}^{\infty} |h[n]| < \infty \quad}$$

This condition ensures that the "total strength" of the system's impulse response is finite.

---
#### Stability Condition for LTI Systems (Transform Domain)
#s-plane-stability #z-plane-stability #poles-location

Determining stability from the system's transfer function ($H(s)$ or $H(z)$) is often easier and more insightful. Stability is directly related to the **Region of Convergence (ROC)** and the location of the system's **poles**.

-   **General Condition**: An LTI system is stable if its ROC includes the imaginary axis (for CT, the $j\omega$-axis) or the unit circle (for DT).

For the important case of **causal LTI systems**:
-   **CT (Laplace Transform)**: A causal LTI system is stable if and only if all of its poles lie strictly in the **left-half of the s-plane** (LHP).
    $$\boxed{\quad \text{Re}\{p_k\} < 0 \quad \text{for all poles } p_k \quad}$$
-   **DT (Z-Transform)**: A causal LTI system is stable if and only if all of its poles lie strictly **inside the unit circle** in the z-plane.
    $$\boxed{\quad |p_k| < 1 \quad \text{for all poles } p_k \quad}$$

> [!warning] Marginal Stability
> If a system has simple, non-repeated poles on the $j\omega$-axis (or unit circle), it is called marginally stable. Its impulse response neither decays nor grows. It can produce an unbounded output for a specific bounded input (resonance).

---
### Related Concepts
#bibo-stability/related-concepts

> [[System Definition and Classification]]

[[Impulse Response of an LTI System]]
[[Causality]]
[[Region of Convergence (ROC)]]
[[The Transfer Function H(s)]]
[[The Transfer Function H(z)]]
[[Routh-Hurwitz Stability Criterion]] (A method to check for LHP poles without actually finding them)