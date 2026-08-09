---
tags:
  - control-systems
  - steady-state-response
  - system-accuracy
  - error-series
  - dynamic-error
created: 2025-10-06
aliases:
  - Generalized Error Coefficients
  - Dynamic Error Coefficients
  - Error Series
subject: "[[Control Systems]]"
parent:
  - Steady-State Response
modified: 2026-07-23T07:50:08
---
### Generalized Error Series
#control-systems/steady-state-response #error-series #dynamic-error

> The **Generalized Error Series**, also known as the dynamic error series, provides a more complete picture of a system's error than the [[Static Error Constants|static error constants]]. While static constants only give the final steady-state value of the error for standard inputs, the generalized series expresses the error $e(t)$ as a function of time, for any arbitrary input $r(t)$, provided the input and its derivatives are known.

#### The Concept
#dynamic-error

The static error constants ($K_p$, $K_v$, $K_a$) are powerful but have limitations:
1.  They only provide the final steady-state value of the error, not how the error behaves over time.
2.  They are only defined for standard step, ramp, and parabolic inputs.

The generalized error series overcomes these limitations by expressing the error $e(t)$ as a series whose terms depend on the input signal $r(t)$ and its successive derivatives.

#### The Error Series Equation
The error signal $e(t)$ can be expressed as:
$$\boxed{\quad e(t) = C_0 r(t) + C_1 \frac{dr(t)}{dt} + \frac{C_2}{2!} \frac{d^2r(t)}{dt^2} + \frac{C_3}{3!} \frac{d^3r(t)}{dt^3} + \cdots \quad}$$
The steady-state error, $e_{ss}$, is the value of this series as $t \to \infty$.
$$e_{ss} = \lim_{t \to \infty} \left[ C_0 r(t) + C_1 r'(t) + \frac{C_2}{2!} r''(t) + \cdots \right]$$

#### Generalized Error Coefficients ($C_n$)
The coefficients $C_0, C_1, C_2, \ldots$ are called the **generalized error coefficients** or **dynamic error coefficients**. They are determined by the system's characteristics, specifically from the error transfer function $\frac{E(s)}{R(s)}$.

For a system with error transfer function $\frac{E(s)}{R(s)} = F(s)$, the coefficients are found by taking successive derivatives of $F(s)$ and evaluating them at $s=0$.
For a unity feedback system, $F(s) = \frac{1}{1+G(s)}$.
$$\begin{align}
C_0 &= \lim_{s \to 0} F(s) \\
C_1 &= \lim_{s \to 0} \frac{dF(s)}{ds} \\
C_2 &= \lim_{s \to 0} \frac{d^2F(s)}{ds^2} \\
&\vdots \\
C_n &= \lim_{s \to 0} \frac{d^nF(s)}{ds^n}
\end{align}$$

---
#### Relationship to Static Error Constants
#static-vs-dynamic-error

The generalized error coefficients are directly related to the static error constants. This connection bridges the two methods of error analysis.

-   **$C_0$ and $K_p$:**
    $$C_0 = \lim_{s \to 0} \frac{1}{1+G(s)} = \frac{1}{1 + \lim_{s \to 0} G(s)} = \frac{1}{1+K_p}$$
    For a step input, $r(t)=A$, all derivatives are zero, so $e_{ss} = C_0 r(t) = \frac{A}{1+K_p}$, which matches the static error formula.

-   **$C_1$ and $K_v$:**
    It can be shown that:
    $$C_1 = \lim_{s \to 0} \frac{d}{ds}\left(\frac{1}{1+G(s)}\right) = \frac{1}{K_v}$$
    For a ramp input, $r(t)=At$, $r'(t)=A$, and higher derivatives are zero. As $t \to \infty$, $e_{ss} = C_0(At) + C_1(A)$. For a Type 1 system, $C_0=0$, so $e_{ss} = C_1 A = \frac{A}{K_v}$, which again matches.

-   **$C_2$ and $K_a$:**
    Similarly, it can be shown that:
    $$C_2 = \frac{1}{K_a}$$

**Summary of Relationships:**
$$\boxed{\quad C_0 = \frac{1}{1+K_p} \quad} \quad \boxed{\quad C_1 = \frac{1}{K_v} \quad} \quad \boxed{\quad C_2 = \frac{1}{K_a} \quad}$$

This shows that the static error constants are just a subset of the information contained within the generalized error series.

---
### Related Concepts
#control-systems/related-concepts

> [[Steady-State Error]]

[[Static Error Constants]]
[[Error Analysis for different System Types (Type 0, 1, 2)]]
[[Time-Domain Specifications]]