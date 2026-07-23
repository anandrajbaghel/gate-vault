---
tags:
  - signal-processing
  - signals-and-systems
  - lti-systems
  - stability
  - bibo-stability
  - impulse-response
  - gate-ee
created: 2025-09-24
aliases:
  - LTI Stability Condition
  - BIBO Stability from Impulse Response
  - "Example : Stability of LTI Systems in terms of Impulse Response"
subject: "[[Signals & Systems]]"
parent:
  - Properties of LTI Systems
modified: 2026-07-23T16:39:23
---
### Stability of LTI Systems in terms of Impulse Response
#stability #lti-systems #impulse-response #bibo-stability

> For [[LTI|Linear Time-Invariant (LTI) systems]], the general property of [[Stability (BIBO Stability)|BIBO stability]] can be determined by a single, definitive condition on the system's [[Impulse Response of an LTI System|impulse response]], $h(t)$ or $h[n]$. This condition is both necessary and sufficient, making the impulse response a complete descriptor of the system's stability.

#### The Stability Condition for LTI Systems
#lti-stability-condition

An LTI system is **BIBO stable** if and only if its impulse response is **absolutely integrable** (for continuous-time) or **absolutely summable** (for discrete-time).

-   **Continuous-Time (CT)**:
    $$\boxed{\quad \int_{-\infty}^{\infty} |h(t)| dt < \infty \quad}$$
-   **Discrete-Time (DT)**:
    $$\boxed{\quad \sum_{n=-\infty}^{\infty} |h[n]| < \infty \quad}$$

> [!warning] Intuition
> The impulse response represents the system's "natural" reaction to a sudden input. If this natural reaction does not die out (i.e., its total area or sum is infinite), then it is possible to construct a bounded input that continuously excites this reaction, causing the output to grow without bound.

#### Derivation Sketch
The condition can be derived from the convolution integral.
Let the input be bounded, i.e., $|x(t)| \le M_x < \infty$. The magnitude of the output is:
$$\begin{align}
|y(t)| &= \left| \int_{-\infty}^{\infty} h(\tau) x(t-\tau) d\tau \right| \\
&\le \int_{-\infty}^{\infty} |h(\tau)| |x(t-\tau)| d\tau \quad (\text{Triangle inequality for integrals}) \\
&\le \int_{-\infty}^{\infty} |h(\tau)| M_x d\tau \\
|y(t)| &\le M_x \int_{-\infty}^{\infty} |h(\tau)| d\tau
\end{align}$$
For the output $|y(t)|$ to be bounded (i.e., less than some finite $M_y$), the integral of $|h(\tau)|$ must be a finite number. If it is, then $|y(t)|$ is guaranteed to be bounded. If the integral is infinite, a bounded input can be found that makes the output unbounded.

---
#### Examples

1.  **Stable System**: Consider a simple RC circuit with impulse response $h(t) = e^{-at}u(t)$ for $a>0$.
    $$ \int_{-\infty}^{\infty} |h(t)| dt = \int_{0}^{\infty} e^{-at} dt = \left[ -\frac{1}{a} e^{-at} \right]_0^\infty = 0 - \left(-\frac{1}{a}\right) = \frac{1}{a} $$
    Since $1/a < \infty$, the system is **stable**.

2.  **Unstable System**: Consider an ideal integrator with impulse response $h(t) = u(t)$.
    $$ \int_{-\infty}^{\infty} |h(t)| dt = \int_{0}^{\infty} 1 dt = \infty $$
    Since the integral is infinite, the system is **unstable**.

3.  **Marginally Stable System**: Consider an ideal oscillator with $h(t) = \cos(\omega_0 t)$.
    $$ \int_{-\infty}^{\infty} |\cos(\omega_0 t)| dt = \infty $$
    The system is not BIBO stable. A bounded input of $x(t) = \cos(\omega_0 t)$ (resonance) will produce an unbounded output.

---
### Related Concepts
#lti-stability/related-concepts

> [[Impulse Response of an LTI System]]

[[Stability (BIBO Stability)]] (The general property note)
[[Causality of LTI Systems in terms of Impulse Response]]
[[Region of Convergence (ROC)]] (This time-domain condition is equivalent to the ROC of H(s) including the jω-axis, or the ROC of H(z) including the unit circle)
[[The Transfer Function H(s)]]