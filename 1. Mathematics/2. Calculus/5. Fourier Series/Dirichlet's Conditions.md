---
tags:
  - fourier-series
  - signal-processing
  - convergence
  - engineering-math
created: 2025-09-15
aliases:
  - Dirichlet Conditions
  - Gibbs Phenomenon
subject: "[[Signals & Systems]]"
parent: "[[Fourier Series Representation of Periodic Functions]]"
---
### Dirichlet's Conditions
#dirichlet-conditions #fourier-series #convergence

> **Dirichlet's Conditions** are a set of sufficient (but not necessary) conditions that a periodic function $f(t)$ must satisfy to ensure that its [[Fourier Series Representation of Periodic Functions|Fourier Series]] converges. The convergence point is the value of the function itself at points of continuity, and the average of the limits from the left and right at points of discontinuity. For practical engineering purposes, almost all signals of interest meet these conditions.

#### The Three Conditions
#dirichlet-conditions/the-three-conditions 

For a periodic function $f(t)$ to be representable by a convergent Fourier series, it must satisfy the following three conditions over any single period $T$:

1. **Condition 1: Absolute Integrability**
    The function $f(t)$ must be absolutely integrable over one period. This means the integral of its absolute value is a finite number.
    $$\boxed{\quad \int_T |f(t)| \, dt < \infty \quad}$$
    * **Physical Interpretation**: This condition implies that the signal has a finite average value and does not "blow up" to infinity in a way that its area becomes infinite. A signal like $f(t) = 1/t$ on the interval $(0, T]$ would violate this.

2. **Condition 2: Bounded Variation**
    The function $f(t)$ must have a finite number of maxima and minima within one period.
    * **Physical Interpretation**: This means the signal cannot oscillate infinitely rapidly. A function like $f(t) = \sin(1/t)$ near $t=0$ would violate this, as it has an infinite number of oscillations as it approaches zero.

3. **Condition 3: Finite Discontinuities**
    The function $f(t)$ must have a finite number of finite discontinuities (jumps) within one period.
    * **Physical Interpretation**: The signal can be broken into a finite number of continuous segments. This allows for common engineering waveforms like square waves, sawtooth waves, and other piecewise-continuous signals. The magnitude of each jump must be finite.

---
#### Point of Convergence
#point-of-convergence 

If a function $f(t)$ satisfies the Dirichlet conditions, its Fourier series is guaranteed to converge.
* **At a point of continuity `t`**: The Fourier series converges to the value of the function, $f(t)$.
* **At a point of discontinuity `t₀`**: The Fourier series converges to the **midpoint of the jump**, which is the average of the left-hand and right-hand limits.
    $$\boxed{\quad \text{F.S. at } t_0 = \frac{f(t_0^+) + f(t_0^-)}{2} \quad}$$
    where $f(t_0^+)$ is the limit as $t$ approaches $t_0$ from the right, and $f(t_0^-)$ is the limit from the left. This behavior is responsible for the **Gibbs Phenomenon**.

#### Gibbs Phenomenon
#gibbs-phenomenon

Even when the series converges, at a jump discontinuity, the partial sums of the Fourier series will always overshoot the true value of the function. This overshoot is not a result of a failed convergence but is an inherent property of representing a sharp jump with smooth sinusoids. The overshoot percentage is approximately 9% of the jump height.

---
#### Practical Significance

In electrical engineering, signals such as sine waves, square waves, triangular waves, and rectified waveforms all satisfy Dirichlet's conditions. Therefore, we can confidently apply [[Fourier Series]] analysis to these signals to understand their frequency content and behavior in circuits and systems.

---
### Related Concepts
#fourier-series/related-concepts

> [[Fourier Series Representation of Periodic Functions]]

[[Euler's Formulae for Fourier Coefficients]]
[[Signals & Systems]]
[[Limits, Continuity, and Differentiability]]