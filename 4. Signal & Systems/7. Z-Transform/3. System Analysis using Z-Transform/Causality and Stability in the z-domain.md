---
tags:
  - causality-z
  - stability-z
  - z-domain
  - lti-systems
  - transfer-function-z
  - roc
created: 2025-09-25
aliases:
  - z-domain stability and causality
  - Stability and Causality (z-domain)
subject: "[[Signals & Systems]]"
parent: "[[The Transfer Function H(z)]]"
modified: 2026-07-23T16:49:32
---
### Causality and Stability in the z-domain
#causality-z #stability-z #z-domain #system-properties

> In discrete-time system analysis, the properties of causality and stability can be determined directly from the z-domain representation of the system. The locations of the poles of the transfer function $H(z)$ and its associated Region of Convergence (ROC) provide a complete picture of these fundamental system behaviors. The unit circle ($|z|=1$) serves as the critical boundary for this analysis.

#### Causality
#causality-z

A discrete-time LTI system is **causal** if its output at any time $n$ depends only on the present and past values of the input (i.e., $x[n], x[n-1], \dots$).
*   **Time-Domain Condition**: The impulse response $h[n]$ must be zero for all negative time.
    $$h[n] = 0 \quad \text{for} \quad n < 0$$
    This means the impulse response is a **right-sided sequence**.

*   **z-Domain Condition**: Based on the [[Properties of the ROC for Z-Transform]], a right-sided sequence has an ROC that is the exterior of a circle. For a causal sequence, this region must also include $z=\infty$.
    $$\boxed{\quad \text{An LTI system is causal if and only if the ROC of its transfer function } H(z) \text{ is the exterior of a circle, including } z=\infty.} \quad$$

#### Stability (BIBO)
#stability-z

A system is **Bounded-Input, Bounded-Output (BIBO) stable** if every bounded input sequence produces a bounded output sequence.
*   **Time-Domain Condition**: The impulse response $h[n]$ must be absolutely summable.
    $$\sum_{n=-\infty}^{\infty} |h[n]| < \infty$$
*   **z-Domain Condition**: This time-domain condition is equivalent to the existence of the Discrete-Time Fourier Transform (DTFT) of $h[n]$. The DTFT is the Z-transform evaluated on the unit circle ($z=e^{j\omega}$). This is only possible if the unit circle lies within the ROC.
    $$\boxed{\quad \text{An LTI system is BIBO stable if and only if the ROC of its transfer function } H(z) \text{ includes the unit circle, } |z|=1.} \quad$$

#### Conditions for Causal LTI Systems
#causal-stable-systems-z

For practical digital systems that are both **causal and LTI**, combining the two conditions leads to the most important rule in discrete-time system analysis:

1.  For **causality**, the ROC must be the exterior of the outermost pole, $|z| > |p_{max}|$.
2.  For **stability**, this ROC must include the unit circle, $|z|=1$.

For the region $|z| > |p_{max}|$ to contain the circle $|z|=1$, it is necessary that $|p_{max}| < 1$. This means the outermost pole, and therefore all poles, must lie inside the unit circle.

$$\boxed{\quad \text{A causal discrete-time LTI system is stable if and only if all of its poles lie inside the unit circle.} \quad}$$

| System Type (Causal) | Pole Locations | ROC Description |
| :--- | :--- | :--- |
| **Stable** | All poles **inside** the unit circle. | $|z| > |p_{max}|$, where $|p_{max}|<1$. Includes the unit circle. |
| **Unstable** | At least one pole **outside** the unit circle. | $|z| > |p_{max}|$, where $|p_{max}|>1$. Excludes the unit circle. |
| **Marginally Stable** | Simple (non-repeated) poles **on** the unit circle; all other poles inside. | $|z| > 1$. The boundary is the unit circle. |

---
### Related Concepts
#causality-stability-z/related-concepts

> [[The Transfer Function H(z)]]

[[Poles and Zeros in the z-domain]]
[[Region of Convergence (ROC) for the Z-Transform]]
[[The Z-Transform]]
[[Causality and Stability in the s-domain]]
[[Discrete-Time Fourier Transform (DTFT)]]