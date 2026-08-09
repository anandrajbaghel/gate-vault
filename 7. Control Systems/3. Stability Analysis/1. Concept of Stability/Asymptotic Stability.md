---
tags:
  - control-systems
  - stability-analysis
  - system-theory
  - asymptotic-stability
  - internal-stability
  - lyapunov-stability
created: 2025-10-08
aliases:
  - Internal Stability
  - Asymptotically Stable
subject: "[[Control Systems]]"
parent:
  - Concept of Stability
modified: 2026-08-04T09:10:10
---
### Asymptotic Stability
#control-systems/stability #asymptotic-stability

> **Asymptotic stability**, often referred to as **internal stability**, describes the behavior of a system in response to its own initial conditions, without any external input. A system is asymptotically stable if, for any set of finite initial conditions, its state eventually returns to the equilibrium point (usually the origin) as time approaches infinity.

This is a "stronger" form of stability than marginal stability because it requires the response to not just remain bounded, but to actively decay to zero.

#### Formal Definition
#asymptotic-stability/definition

A system is asymptotically stable if its **zero-input response** (the response due to initial conditions only) approaches zero as time approaches infinity.
$$\lim_{t \to \infty} y_{zi}(t) = 0$$

---
#### Condition for LTI Systems (s-Domain)
#asymptotic-stability/s-domain

The condition for asymptotic stability is identical to the condition for BIBO stability in terms of pole locations.

An LTI system is asymptotically stable if and only if **all the poles of its transfer function $H(s)$ lie in the strict left-half of the s-plane (LHP)**.

$$\boxed{\quad \text{Real part of all poles } < 0 \quad}$$

-   **Poles in LHP ($\text{Re}\{s\} < 0$):** The zero-input response consists of terms like $e^{-\sigma t}\cos(\omega t)$, which decay to zero as $t \to \infty$. This ensures the system returns to its equilibrium state.
-   **Poles on jω-axis ($\text{Re}\{s\} = 0$):** The zero-input response contains terms like $\cos(\omega t)$, which oscillate forever without decaying. The system does not return to equilibrium, so it is **not** asymptotically stable (it is marginally stable).
-   **Poles in RHP ($\text{Re}\{s\} > 0$):** The zero-input response contains terms like $e^{+\sigma t}$, which grow without bound. The system is unstable.

---
#### Condition in State-Space
#asymptotic-stability/state-space

For a system described by the state-space model $\dot{\mathbf{x}} = \mathbf{A}\mathbf{x} + \mathbf{B}\mathbf{u}$, the internal stability is determined by the eigenvalues of the system matrix $\mathbf{A}$. The system is asymptotically stable if and only if **all eigenvalues of the matrix A have negative real parts**. (The eigenvalues of $\mathbf{A}$ are the poles of the system's transfer function).

---
#### Asymptotic Stability vs. Other Stability Types

| Stability Type | Pole Location | Zero-Input Response as $t \to \infty$ |
| :--- | :--- | :--- |
| **Asymptotically Stable** | All poles in **LHP** | Decays to 0 |
| **Unstable** | At least one pole in **RHP** | Diverges to $\infty$ |
| **Marginally Stable** | Non-repeated poles on **jω-axis** (others in LHP) | Bounded, but non-zero (oscillates) |

---
#### Relationship between Asymptotic and BIBO Stability
#asymptotic-vs-bibo

For Linear Time-Invariant (LTI) systems, these two forms of stability are very closely linked.

-   **An asymptotically stable system is always BIBO stable.** (If the internal states decay to zero, the output for any bounded input will also be bounded).
-   **A BIBO stable system is almost always asymptotically stable.** The only exception is the theoretical case where an unstable pole in the RHP is perfectly cancelled by a zero at the same location. In this case, the system might appear BIBO stable from its input-output transfer function, but it would have an unstable internal mode (it would be internally unstable).

**For GATE and most practical purposes, if an LTI system's transfer function has all its poles in the LHP, it is considered both asymptotically stable and BIBO stable.**

---
### Related Concepts
#control-systems/related-concepts

> [[BIBO Stability]]

[[Concept of Stability]]
[[Relationship between Pole Location and System Stability]]
[[Routh-Hurwitz Stability Criterion]]
[[State-Space Representation of LTI Systems]]
