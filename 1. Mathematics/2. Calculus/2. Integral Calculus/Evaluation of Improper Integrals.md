---
tags:
  - calculus
  - integral-calculus
  - improper-integrals
  - limits
  - engineering-math
created: 2025-09-15
aliases:
  - Improper Integrals
  - Improper Integration
  - Gaussian Integral
  - Convergence Tests (p-Integral Test)
subject: "[[Mathematics]]"
parent:
  - "[[Integration]]"
formula:
  - "Gaussian Integral : $$\\int_{-\\infty}^\\infty e^{-x^2} \\, dx = \\sqrt{\\pi}$$"
---
### Evaluation of Improper Integrals
#improper-integral #convergence #divergence #calculus

> ==An **improper integral** is a type of definite integral where either the interval of integration is infinite, or the function being integrated has an infinite discontinuity within the interval.== The value of an improper integral is defined using a limit. If the limit exists and is finite, the integral **converges**; otherwise, it **diverges**. These integrals are fundamental in defining transforms like the [[The Laplace Transform|Laplace Transform]] and in probability theory.

#### Type 1: Infinite Limits of Integration
#improper-integral/type1

This type occurs when one or both limits of integration are infinite.

1. **Upper Limit is Infinite**:
    $$\boxed{\quad \int_a^\infty f(x) \, dx = \lim_{t \to \infty} \int_a^t f(x) \, dx \quad}$$
2. **Lower Limit is Infinite**:
    $$\boxed{\quad \int_{-\infty}^b f(x) \, dx = \lim_{t \to -\infty} \int_t^b f(x) \, dx \quad}$$
3. **Both Limits are Infinite**: The integral must be split at an arbitrary point $c$ (often 0). It converges only if **both** parts converge.
    $$\boxed{\quad \int_{-\infty}^\infty f(x) \, dx = \int_{-\infty}^c f(x) \, dx + \int_c^\infty f(x) \, dx \quad}$$

> [!Example]
> Evaluate $\int_1^\infty \frac{1}{x^2} \, dx$.
> $$\begin{align}
>     \int_1^\infty \frac{1}{x^2} \, dx &= \lim_{t \to \infty} \int_1^t x^{-2} \, dx \\
>     &= \lim_{t \to \infty} \left[ -\frac{1}{x} \right]_1^t = \lim_{t \to \infty} \left( -\frac{1}{t} - \left(-\frac{1}{1}\right) \right) \\
>     &= \lim_{t \to \infty} \left( 1 - \frac{1}{t} \right) = 1 - 0 = 1
>     \end{align}$$
> Since the limit is a finite number (1), the integral **converges**.

---
#### Type 2: Infinite Discontinuities
#improper-integral/type2

This type occurs when the function $f(x)$ has a vertical asymptote (an infinite discontinuity) at some point within the integration interval $[a, b]$.

1.  **Discontinuity at Upper Limit `b`**:
    $$\boxed{\quad \int_a^b f(x) \, dx = \lim_{t \to b^-} \int_a^t f(x) \, dx \quad}$$
2.  **Discontinuity at Lower Limit `a`**:
    $$\boxed{\quad \int_a^b f(x) \, dx = \lim_{t \to a^+} \int_t^b f(x) \, dx \quad}$$
3.  **Discontinuity at an Interior Point `c`** (where $a < c < b$): The integral must be split at the point of discontinuity. It converges only if **both** parts converge.
    $$\int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx$$

> [!Example]
> Evaluate $\int_0^1 \frac{1}{\sqrt{x}} \, dx$. The discontinuity is at $x=0$.
>     $$\begin{align}
>     \int_0^1 \frac{1}{\sqrt{x}} \, dx &= \lim_{t \to 0^+} \int_t^1 x^{-1/2} \, dx \\
>     &= \lim_{t \to 0^+} \left[ 2\sqrt{x} \right]_t^1 = \lim_{t \to 0^+} (2\sqrt{1} - 2\sqrt{t}) \\
>     &= 2 - 0 = 2
>     \end{align}$$
> Since the limit is a finite number ($2$), the integral **converges**.

---
#### Convergence Tests (p-Integral Test)
#p-integral-test

This test is a crucial shortcut for determining convergence without full evaluation.

1.  **For Type 1 Integrals**:
    $$\boxed{\quad \int_1^\infty \frac{1}{x^p} \, dx \quad \text{converges if } p > 1 \text{ and diverges if } p \le 1. \quad}$$
2.  **For Type 2 Integrals**:
    $$\boxed{\quad \int_0^1 \frac{1}{x^p} \, dx \quad \text{converges if } p < 1 \text{ and diverges if } p \ge 1. \quad}$$

---
#### Important Improper Integrals in Engineering
#gamma-function #gaussian-integral #laplace-transform

Several key mathematical tools are defined using improper integrals.

* **Gamma Function**: Generalizes the factorial function to complex numbers.
    $$ \Gamma(z) = \int_0^\infty t^{z-1} e^{-t} \, dt $$
* **Gaussian Integral**: Appears frequently in probability and statistics.
    $$\int_{-\infty}^\infty e^{-x^2} \, dx = \sqrt{\pi}$$
* **[[The Laplace Transform|Laplace Transform]]**: Converts differential equations into algebraic problems. Its definition is an improper integral.
    $$ F(s) = \mathcal{L}\{f(t)\} = \int_0^\infty f(t) e^{-st} \, dt $$

---
### Related Concepts
#calculus/related-concepts

> [[Evaluation of Definite Integrals]]

[[Limits, Continuity, and Differentiability]]
[[The Laplace Transform]]
[[Signals & Systems]]