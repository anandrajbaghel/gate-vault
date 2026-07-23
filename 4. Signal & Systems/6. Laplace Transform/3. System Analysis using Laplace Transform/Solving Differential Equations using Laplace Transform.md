---
tags:
  - laplace-transform
  - differential-equations
  - lccde
  - signals-and-systems
  - control-systems
  - circuit-analysis
created: 2025-09-24
aliases:
  - Solving LCCDEs with Laplace Transform
  - Laplace Transform for Differential Equations
  - "Example : Solving Differential Equations using Laplace Transform"
subject: "[[Signals & Systems]]"
parent: "[[The Laplace Transform]]"
modified: 2026-07-23T16:47:49
---
### Solving Differential Equations using Laplace Transform
#laplace-transform #differential-equations #lccde

> [[The Laplace Transform]] is a cornerstone technique for [[Linear Constant-Coefficient Differential Equations (CT)|solving linear constant-coefficient differential equations (LCCDEs)]]. Its primary advantage lies in its ability to convert complex time-domain differentiation and convolution operations into simpler algebraic multiplication and division in the s-domain. This method seamlessly incorporates initial conditions into the solution process from the very beginning.

#### The Procedure for Solving LCCDEs
#laplace-transform/procedure

The step-by-step method to solve an [[Linear Constant-Coefficient Differential Equations (CT)|LCCDE]] is as follows:

1.  **Transform the Equation**: Apply the [[Unilateral Laplace Transform]] to every term on both sides of the differential equation.
2.  **Apply Properties**: Use the linearity and, most importantly, the **time-differentiation property** to convert derivatives into algebraic terms involving $s$ and the initial conditions.
    $$\boxed{\begin{align} \mathcal{L}\left\{\frac{dy(t)}{dt}\right\} &= sY(s) - y(0^{-}) \\ \mathcal{L}\left\{\frac{d^2y(t)}{dt^2}\right\} &= s^2Y(s) - sy(0^{-}) - y'(0^{-}) \end{align}}$$
3.  **Solve for the Output Y(s)**: Rearrange the resulting algebraic equation in the s-domain to solve for the transform of the output, $Y(s)$.
4.  **Inverse Transform to find y(t)**: Find the time-domain solution $y(t)$ by applying the [[inverse laplace transform using partial fraction expansion]] to $Y(s)$.

---
#### Decomposing the System Response
#zero-state-response #zero-input-response

When solving for $Y(s)$, the solution naturally separates into two distinct components: the **Zero-State Response (ZSR)** and the **Zero-Input Response (ZIR)**.

*   **[[Zero-State Response (ZSR)]]**: This is the system's response to the input $x(t)$, assuming the system is in a "zero state" (i.e., all initial conditions are zero). It is also known as the forced response.
*   **[[Zero-Input Response (ZIR)]]**: This is the system's response due to its initial conditions alone, assuming the input $x(t)$ is zero. It is also known as the natural response.

The total response of the system is the linear superposition of these two components.
$$\boxed{\quad y(t) = y_{ZSR}(t) + y_{ZIR}(t) \quad}$$

> [!example]
> Consider a general second-order LCCDE:
> $$\frac{d^2y(t)}{dt^2} + a_1 \frac{dy(t)}{dt} + a_0 y(t) = b_0 x(t) \quad \text{with initial conditions } y(0^{-}), y'(0^{-})$$
> Applying the Laplace Transform:
> $$\left[s^2Y(s) - sy(0^{-}) - y'(0^{-})\right] + a_1\left[sY(s) - y(0^{-})\right] + a_0Y(s) = b_0X(s)$$
> Solving for $Y(s)$:
> $$Y(s)(s^2 + a_1s + a_0) = b_0X(s) + (s+a_1)y(0^{-}) + y'(0^{-})$$
> Finally, separating the terms gives:
> $$Y(s) = \underbrace{\left( \frac{b_0}{s^2+a_1s+a_0} \right) X(s)}_{\text{Zero-State Response term, } Y_{ZSR}(s)} + \underbrace{\frac{(s+a_1)y(0^{-}) + y'(0^{-})}{s^2+a_1s+a_0}}_{\text{Zero-Input Response term, } Y_{ZIR}(s)}$$
> The term multiplying $X(s)$ in the ZSR is the system's [[The Transfer Function H(s)]].

---
### Related Concepts
#laplace-transform/related-concepts

> [[The Laplace Transform]]

[[Properties of the Laplace Transform]]
[[Inverse Laplace Transform using Partial Fraction Expansion]]
[[The Transfer Function H(s)]]
[[Poles and Zeros of a Transfer Function]]
[[Electric Circuits]] (RLC circuit analysis)
[[Control Systems]]