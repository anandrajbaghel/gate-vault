---
tags:
  - control-systems
  - stability-analysis
  - poles-zeros
  - s-plane
  - system-dynamics
created: 2025-10-09
aliases:
  - Pole Location and Stability
  - Stability and the S-Plane
subject: "[[Control Systems]]"
parent:
  - Concept of Stability
modified: 2026-08-04T10:24:57
---
### Relationship between Pole Location and System Stability
#control-systems/stability #s-plane-analysis

> The stability of a Linear Time-Invariant (LTI) system is completely and uniquely determined by the location of the poles of its transfer function, $H(s)$, in the complex $s$-plane. The $s$-plane provides a powerful graphical tool for analyzing not just stability, but also the transient behavior of the system.

The [[Impulse Response of an LTI System|impulse response of a system]] is a sum of terms corresponding to each pole. A pole at $s=p$ contributes a term of the form $k e^{pt}$ to the response. The nature of this term (decaying, growing, or oscillating) depends entirely on the location of $p$ in the s-plane, where $s = \sigma + j\omega$.

---
#### 1. Poles in the Left-Half Plane (LHP)
#lhp-poles #stable-system

|                                                  |                                                  |                                                  |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| ![[Location of Poles vs Stability Case - 1.png]] | ![[Location of Poles vs Stability Case - 2.png]] | ![[Location of Poles vs Stability Case - 3.png]] |

- **Location:** The real part of the pole is negative ($\sigma < 0$).
- **Impulse Response Term:** A pole at $p = -\sigma + j\omega$ corresponds to a time-domain term proportional to $e^{(-\sigma+j\omega)t} = e^{-\sigma t} e^{j\omega t}$. The term $e^{-\sigma t}$ is a **decaying exponential**.
- **Stability:** The response due to these poles decays to zero as time approaches infinity. Therefore, if **all** poles of the system lie in the LHP, the system is:
    - **Asymptotically Stable**
    - **BIBO Stable**
- **Conclusion:** The LHP is the **stable region** of the s-plane.

---
#### 2. Poles in the Right-Half Plane (RHP)
#rhp-poles #unstable-system

|                                                   |                                                   |                                                   |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| ![[Location of Poles vs Stability Case - 4.png]]  | ![[Location of Poles vs Stability Case - 5a.png]] | ![[Location of Poles vs Stability Case - 5b.png]] |
| ![[Location of Poles vs Stability Case - 5c.png]] | ![[Location of Poles vs Stability Case - 5d.png]] |                                                   |

- **Location:** The real part of the pole is positive ($\sigma > 0$).
- **Impulse Response Term:** A pole at $p = +\sigma + j\omega$ corresponds to a time-domain term proportional to $e^{(+\sigma+j\omega)t} = e^{+\sigma t} e^{j\omega t}$. The term $e^{+\sigma t}$ is a **growing exponential**.
- **Stability:** The response due to such a pole grows without bound as time approaches infinity. Therefore, if **at least one** pole lies in the RHP, the system is:
    - **Unstable**
- **Conclusion:** The RHP is the **unstable region** of the s-plane.

---
#### 3. Poles on the Imaginary Axis (jω-axis)
#jω-axis-poles #marginal-stability

|                                                                                                                                          |                                                                                                                                                                                                         |                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| ![[Location of Poles vs Stability Case - 6.png]] $H(s) = \frac{1}{s} \leftrightarrow h(t) = u(t)$<br>→ power signal<br>→ marginal stable | ![[Location of Poles vs Stability Case - 7.png]] $H(s) = \frac{1}{s^2} \leftrightarrow h(t) = tu(t)$ <br>$\int_{-\infty}^{\infty}\|h(t)\|dt → \infty$<br>→ higher energy nor power<br>→ unstable system | ![[Location of Poles vs Stability Case - 8.png]] |
| ![[Location of Poles vs Stability Case - 9.png]]                                                                                         | ![[Location of Poles vs Stability Case - 10.png]]                                                                                                                                                       |                                                  |

- **Location:** The real part of the pole is zero ($\sigma = 0$). This is the boundary between stability and instability.
- **Case (a): Non-repeated Poles on jω-axis:**
    - A pair of poles at $p = \pm j\omega$ corresponds to a time-domain term like $\sin(\omega t)$ or $\cos(\omega t)$.
    - A single pole at the origin ($p=0$) corresponds to a constant (step) term.
    - **Stability:** The response neither decays nor grows; it oscillates indefinitely (or remains constant). The system is said to be **Marginally Stable**. However, it is **BIBO Unstable** because a bounded input at the natural frequency $\omega$ will cause resonance, leading to an unbounded output.
- **Case (b): Repeated Poles on jω-axis:**
    - A repeated pole pair at $p = \pm j\omega$ corresponds to a term like $t\sin(\omega t)$.
    - A repeated pole at the origin corresponds to a term like $t$ (a ramp).
    - **Stability:** The response grows without bound. The system is **Unstable**.

---
#### Summary Table

| Pole Location | Impulse Response Term | Stability Type | BIBO Stability |
| :--- | :--- | :--- | :--- |
| **All poles in LHP** | Decaying exponentials (e.g., $e^{-\sigma t}$) | Asymptotically Stable | **Stable** |
| **At least one pole in RHP** | Growing exponentials (e.g., $e^{+\sigma t}$) | Unstable | **Unstable** |
| **Non-repeated on jω-axis** | Sustained oscillations (e.g., $\cos(\omega t)$) | Marginally Stable | **Unstable** |
| **Repeated on jω-axis** | Growing oscillations (e.g., $t\cos(\omega t)$) | Unstable | **Unstable** |

**Crucial Takeaway:** For a system to be considered stable in the practical BIBO sense, all of its poles must lie strictly in the left-half plane. Any pole on the imaginary axis or in the right-half plane renders the system BIBO unstable.

---
### Related Concepts
#control-systems/related-concepts

> [[Concept of Stability]]

[[BIBO Stability]]
[[Asymptotic Stability]]
[[Routh-Hurwitz Stability Criterion]]
[[Root Locus Analysis]]
[[Nyquist Stability Criterion]]
[[Second-Order System Response]]