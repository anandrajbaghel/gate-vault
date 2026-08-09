---
tags:
  - control-systems
  - stability-analysis
  - system-theory
  - bibo-stability
created: 2025-10-07
aliases:
  - Bounded-Input Bounded-Output
subject: "[[Control Systems]]"
parent:
  - Concept of Stability
modified: 2026-08-04T09:11:04
---
### BIBO (Bounded-Input, Bounded-Output) Stability
#control-systems/stability #bibo-stability

> **Bounded-Input, Bounded-Output (BIBO) stability** is the most common and practical definition of stability used in engineering. ==It states that for a system to be stable, its output must remain bounded (finite) for every possible bounded input that is applied to it.== If even one bounded input can cause the output to grow without limit, the system is considered BIBO unstable.

#### Formal Definition
#bibo-stability/definition

A signal $x(t)$ is **bounded** if there exists a finite positive number $M_x$ such that its magnitude never exceeds this value:
$$|x(t)| \le M_x < \infty \quad \text{for all } t$$
A system is **BIBO stable** if for every bounded input $x(t)$, the output $y(t)$ is also bounded.
$$|y(t)| \le M_y < \infty \quad \text{for all } t$$

---
#### Condition for LTI Systems (Time Domain)
#bibo-stability/time-domain

For a Linear Time-Invariant (LTI) system, the relationship between BIBO stability and the system's impulse response $h(t)$ is fundamental.

An LTI system is BIBO stable if and only if its impulse response $h(t)$ is **absolutely integrable**.
$$\boxed{\quad \int_{-\infty}^{\infty} |h(t)| dt < \infty \quad}$$
**Reasoning:** The output of an LTI system is given by the convolution integral $y(t) = \int_{-\infty}^{\infty} h(\tau)x(t-\tau)d\tau$.
If the input is bounded by $$|x(t)| \le M_x$$
the magnitude of the output is $$|y(t)| \le \int_{-\infty}^{\infty} |h(\tau)||x(t-\tau)|d\tau \le M_x \int_{-\infty}^{\infty} |h(\tau)|d\tau$$
If the integral is finite, the output $|y(t)|$ will also be finite (bounded).

---
#### Condition for LTI Systems (s-Domain)
#bibo-stability/s-domain 

The time-domain condition is directly related to the location of the poles of the system's transfer function, $H(s)$, in the s-plane. This is the most widely used method for determining stability.

An [[LTI]] system is BIBO stable if and only if **all the poles of its transfer function $H(s)$ lie in the strict left-half of the s-plane (LHP)**.

- **Poles in LHP (e.g., $s = -\sigma + j\omega$ where $\sigma > 0$):** These correspond to terms in the impulse response like $e^{-\sigma t}$ or $e^{-\sigma t}\cos(\omega t)$. These decaying terms are absolutely integrable, ensuring stability.
- **Poles in RHP (e.g., $s = +\sigma + j\omega$ where $\sigma > 0$):** These correspond to terms like $e^{+\sigma t}$, which grow indefinitely. The impulse response is not absolutely integrable, and the system is unstable.
- **Poles on the Imaginary Axis ($s = \pm j\omega_0$):** This is a critical case.
    - The impulse response contains terms like $\cos(\omega_0 t)$, which are not absolutely integrable ($\int_0^\infty |\cos(\omega_0 t)|dt = \infty$). Therefore, the system is **BIBO unstable**.
    - **Why?** While the output might be bounded for most inputs, a specific bounded input can cause an unbounded output. For a system with poles at $\pm j\omega_0$, an input of $x(t) = \cos(\omega_0 t)$ will cause **resonance**, leading to an output with terms like $t\cos(\omega_0 t)$, which grows without bound.
    - **Repeated poles** on the jω-axis (e.g., a pole of multiplicity 2 at the origin) are also always BIBO unstable.

---
#### Summary of Stability vs. Pole Location

| Pole Locations of H(s) | Type of Stability (System Response) | BIBO Stability |
| :--- | :--- | :--- |
| All poles in the **LHP** | Asymptotically Stable | **Stable** |
| At least one pole in the **RHP** | Unstable | **Unstable** |
| **Non-repeated** poles on jω-axis, others in LHP | Marginally Stable | **Unstable** |
| **Repeated** poles on jω-axis | Unstable | **Unstable** |

> [!memory] Key Takeaway for GATE
> A marginally stable system (with non-repeated poles on the imaginary axis) is **NOT** BIBO stable. BIBO stability requires all poles to be strictly in the LHP.

---
### Related Concepts
#control-systems/related-concepts

> [[Concept of Stability]]

[[Asymptotic Stability]]
[[Relationship between Pole Location and System Stability]]
[[Routh-Hurwitz Stability Criterion]]
[[Transfer Function and Impulse Response]]