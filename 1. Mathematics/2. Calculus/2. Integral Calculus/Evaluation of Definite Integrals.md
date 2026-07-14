---
tags:
  - calculus
  - integral-calculus
  - integration
  - engineering-math
created: 2025-09-15
aliases:
  - Definite Integrals
  - Definite Integration
subject: "[[Mathematics]]"
parent:
  - "[[Integration]]"
---
### Evaluation of Definite Integrals
#definite-integral #integral-calculus #ftc #area-under-curve

> ==A **definite integral**, denoted $\int_a^b f(x) \, dx$, represents the signed area of the region in the xy-plane bounded by the graph of $f(x)$, the $x$-axis, and the vertical lines $x=a$ and $x=b$.== In engineering, it is used to calculate the accumulation of a quantity over an interval, such as the total charge from a varying current or the RMS value of a signal.

#### The Fundamental Theorem of Calculus (Part 2)
#fundamental-theorem-of-calculus

This theorem provides the primary method for evaluating definite integrals. It connects the concepts of differentiation and integration.

![[Fundamental Theorem of Calculus#^ftc-2]]

> [!Example]
> Evaluate $\int_1^2 x^2 \, dx$.
> * An antiderivative of $x^2$ is $F(x) = \frac{x^3}{3}$.
> * $\int_1^2 x^2 \, dx = \left[\frac{x^3}{3}\right]_1^2 = \frac{2^3}{3} - \frac{1^3}{3} = \frac{8}{3} - \frac{1}{3} = \frac{7}{3}$.

---
#### Properties of Definite Integrals
#definite-integral/properties

These properties are essential for simplifying and solving integrals, and are frequently tested in GATE.

1. **Linearity**: $\int_a^b [c_1f(x) + c_2g(x)]dx = c_1\int_a^b f(x)dx + c_2\int_a^b g(x)dx$
2.  **Reversing Limits**: $\int_a^b f(x) \, dx = - \int_b^a f(x) \, dx$.
3.  **Identical Limits**: $\int_a^a f(x) \, dx = 0$.
4.  **Additivity**: $\int_a^c f(x) \, dx = \int_a^b f(x) \, dx + \int_b^c f(x) \, dx$.
> [!pyq]-
> ![[ee_2018#^q18]]
5.  **King's Property**: This is one of the most useful properties for competitive exams.
    $$\boxed{\quad \int_a^b f(x) \, dx = \int_a^b f(a+b-x) \, dx \quad}$$
    A common special case is: $\int_0^a f(x) \, dx = \int_0^a f(a-x) \, dx$.
6.  **Even and Odd Functions Property**: For an integral over a symmetric interval $[-a, a]$:
    *   If $f(x)$ is an **even function** ($f(-x) = f(x)$), then:
        $$\boxed{\quad \int_{-a}^a f(x) \, dx = 2 \int_0^a f(x) \, dx \quad}$$
    *   If $f(x)$ is an **odd function** ($f(-x) = -f(x)$), then:
        $$\boxed{\quad \int_{-a}^a f(x) \, dx = 0 \quad}$$
7.  **Periodic Functions**: If $f(x)$ has a period $T$ (i.e., $f(x+T) = f(x)$), then for any integer $n$:
    $$\int_0^{nT} f(x) \, dx = n \int_0^T f(x) \, dx$$

---
#### Applications in Electrical Engineering
#definite-integral/applications

Definite integrals are fundamental for analyzing signals and circuits.
1.  **Average Value of a Signal**: The average value of a periodic signal $f(t)$ over one period $T$ is:
    $$\boxed{\quad F_{avg} = \frac{1}{T} \int_0^T f(t) \, dt \quad}$$
2.  **RMS (Root Mean Square) Value of a Signal**: The RMS value of a periodic signal $f(t)$ is a measure of its effective value, crucial for power calculations.
    $$\boxed{\quad F_{rms} = \sqrt{\frac{1}{T} \int_0^T [f(t)]^2 \, dt} \quad}$$
3.  **Total Charge**: The total charge $Q$ that flows through a conductor between time $t_1$ and $t_2$ is the integral of the current $i(t)$.
    $$ Q = \int_{t_1}^{t_2} i(t) \, dt $$
4.  **Energy Stored**: The energy stored in a capacitor or inductor is found by integrating power over time.

---
### Related Concepts
#calculus/related-concepts

> [[Integration]] (for finding antiderivatives)

[[Limits, Continuity, and Differentiability]]
[[RMS and Average Values]] (Average and RMS values)
[[Signals & Systems]]
[[Electric Circuits]] (Charge and Energy calculations)
[[Numerical Integration]] (for integrals without analytical solutions)