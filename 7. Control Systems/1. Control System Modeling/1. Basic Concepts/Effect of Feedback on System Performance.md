---
tags:
  - control-systems
  - feedback-theory
  - system-performance
  - stability
  - sensitivity
created: 2025-09-21
aliases:
  - Feedback Effects
  - Impact of Feedback on System Performance
subject: "[[Control Systems]]"
parent:
  - Control System Modeling
modified: 2026-07-23T07:47:39
---
### Effect of Feedback on System Performance
#control-systems/feedback #system-performance

> Feedback is the cornerstone of [[Control Systems|control theory]]. Introducing a feedback loop into a system (transforming it from open-loop to closed-loop) profoundly alters its performance characteristics. ==Negative feedback, in particular, is used to improve accuracy and robustness, while trading off against overall gain and potentially introducing stability issues.==

Consider a standard negative feedback system where $G(s)$ is the forward path transfer function and $H(s)$ is the feedback path transfer function.

The closed-loop transfer function $T(s)$ is:
$$\boxed{\quad T(s) = \frac{C(s)}{R(s)} = \frac{G(s)}{1 + G(s)H(s)} \quad}$$
The term $G(s)H(s)$ is known as the **[[Open-Loop Transfer Function (OLTF)|open-loop transfer function]]** or **loop gain**. The performance improvements are primarily determined by the factor $(1 + G(s)H(s))$.

---
#### 1. Effect on Overall Gain
#feedback/gain

Negative feedback reduces the overall gain of the system.
If the loop gain is very large, i.e., $|G(s)H(s)| \gg 1$, the closed-loop transfer function can be approximated as:
$$T(s) \approx \frac{G(s)}{G(s)H(s)} = \frac{1}{H(s)}$$
This is a significant result: the overall gain becomes largely independent of the forward path $G(s)$ (which might be a high-power, imprecise plant) and is primarily determined by the feedback path $H(s)$ (which can be built with precise, low-power components like sensors).

---
#### 2. Effect on Sensitivity
#feedback/sensitivity

Feedback significantly reduces the system's sensitivity to variations in its parameters (e.g., due to aging, temperature changes). The sensitivity of the closed-loop transfer function $T$ with respect to changes in the forward path $G$ is defined as:
$$S_G^T = \frac{\partial T/T}{\partial G/G} = \frac{\text{Percentage change in T}}{\text{Percentage change in G}}$$
For a closed-loop system, this can be derived as:
$$\boxed{\quad S_G^T = \frac{1}{1 + G(s)H(s)} \quad}$$
This shows that the sensitivity of the system to variations in $G(s)$ is reduced by a factor of $(1 + G(s)H(s))$ compared to an open-loop system (where sensitivity is 1).

---
#### 3. Effect on External Disturbances (Noise)
#feedback/disturbance-rejection

Feedback helps in rejecting the effects of external disturbances or noise entering the system. Consider a disturbance $D(s)$ added to the output of the controller:

The output of the system $C(s)$ due to the input $R(s)$ and disturbance $D(s)$ is:
$$C(s) = \frac{G_p(s)G_c(s)}{1 + G_p(s)G_c(s)H(s)} R(s) + \frac{G_p(s)}{1 + G_p(s)G_c(s)H(s)} D(s)$$
The effect of the disturbance on the output is given by:
$$\frac{C(s)}{D(s)} = \frac{G_p(s)}{1 + G_p(s)G_c(s)H(s)}$$
By making the loop gain $|G_p(s)G_c(s)H(s)|$ large, the effect of the disturbance $D(s)$ on the output can be made very small.

---
#### 4. Effect on Stability
#feedback/stability

Stability is a critical concern in feedback systems.
- The stability of a closed-loop system is determined by the location of the roots of the **characteristic equation**:
    $$\boxed{\quad 1 + G(s)H(s) = 0 \quad}$$
- Feedback can both stabilize an unstable system and destabilize a stable one. For example, if the open-loop system $G(s)$ has poles in the right-half plane (RHP), the closed-loop system can be made stable by choosing an appropriate feedback $H(s)$. Conversely, a stable open-loop system can become unstable in a closed-loop configuration, especially with high gains or significant phase shifts.

---
#### 5. Effect on Steady-State Error
#feedback/steady-state-error

> [!refer]
> [[Steady State Error for Non-Unity Feedback System]]

Feedback generally improves the accuracy of a system by reducing its [[steady-state error]]. The error signal in the frequency domain is:
$$E(s) = R(s) - B(s) = R(s) - C(s)H(s)$$
Substituting $C(s) = E(s)G(s)$, we get $E(s) = R(s) \frac{1}{1+G(s)H(s)}$.
The steady-state error is given by [[Properties of the Laplace Transform|Final Value Theorem (FVT)]]
$$e_{ss} = \lim_{t \to \infty} e(t) = \lim_{s \to 0} sE(s)$$
$$e_{ss} = \lim_{s \to 0} \frac{sR(s)}{1 + G(s)H(s)}$$
For a given input $R(s)$, a larger [[Open-Loop Transfer Function (OLTF)|loop gain]] $|G(s)H(s)|$ leads to a smaller steady-state error, thus improving system accuracy.

---
#### 6. Effect on Transient Response and Bandwidth
#feedback/transient-response #feedback/bandwidth

- **Transient Response:** Feedback allows us to modify the location of the closed-loop poles, thereby shaping the transient response. We can adjust parameters like gain to control the damping ratio ($\zeta$) and natural frequency ($\omega_n$), which in turn control the system's speed of response, peak overshoot, and settling time.
- **Bandwidth:** Generally, negative feedback increases the bandwidth of a system. This means the system can respond to a wider range of input signal frequencies. The trade-off is a reduction in gain. The Gain-Bandwidth product for many systems tends to be constant.

---
### Summary of Feedback Effects

| Parameter                 | Effect of Negative Feedback                               |
| ------------------------- | --------------------------------------------------------- |
| **Gain**                  | Reduces                                                   |
| **Stability**             | Can improve or degrade (must be analyzed)                 |
| **Sensitivity**           | Reduces (improves robustness)                             |
| **Disturbance Rejection** | Improves                                                  |
| **Steady-State Error**    | Reduces (improves accuracy)                               |
| **Bandwidth**             | Increases                                                 |
| **Transient Response**    | Can be controlled and improved                            |
| **Overall Cost/Complexity** | Increases                                                 |

---
### Related Concepts
#control-systems/related-concepts

> [[Open-Loop and Closed-Loop (Feedback) Control Systems]]

[[Stability Analysis]]
[[Routh-Hurwitz Stability Criterion]]
[[Steady-State Error]]
[[Concept and Definition of Root Locus]] (Visualizes how feedback gain affects pole locations)
[[Bode Plots]] (Analyzes frequency response and stability margins)
[[Steady-State Error for Disturbances]]
[[Properties of the Laplace Transform|Final Value Theorem (FVT)]]