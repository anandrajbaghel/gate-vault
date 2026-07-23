---
tags:
  - z-transform
  - difference-equations
  - lccde
  - discrete-time
  - dsp
  - signals-and-systems
created: 2025-09-25
aliases:
  - Solving LCCDEs with Z-Transform
  - Z-Transform for Difference Equations
  - "Example : Solving Difference Equations using Z-Transform"
subject: "[[Signals & Systems]]"
parent: "[[The Z-Transform]]"
modified: 2026-07-20
---
### Solving Difference Equations using Z-Transform
#z-transform #difference-equations #lccde

> The Z-transform provides a powerful algebraic method for solving linear constant-coefficient difference equations (LCCDEs), which are fundamental to the description of discrete-time LTI systems. By transforming the difference equation from the time domain to the z-domain, complex operations like time-shifting and convolution become simple algebraic manipulations. The **Unilateral Z-Transform** is especially useful as it systematically incorporates the initial conditions into the solution.

#### The Procedure for Solving LCCDEs
#z-transform/procedure

1. **Transform the Equation**: Apply the [[Unilateral Z-Transform]] to both sides of the difference equation.
2. **Apply Properties**: Use the linearity and **time-shifting properties** of the Unilateral Z-Transform. This step converts the time-shifted terms (e.g., $y[n-1]$, $x[n-k]$) into algebraic expressions involving $z$ and the initial conditions.

    $$\boxed{\begin{align}
    \mathcal{Z}\{y[n-1]\} &= z^{-1}Y(z) + y[-1] \\
    \mathcal{Z}\{y[n-2]\} &= z^{-2}Y(z) + z^{-1}y[-1] + y[-2]
    \end{align}}$$
3. **Solve for the Output Y(z)**: Rearrange the resulting algebraic equation to find an explicit expression for the output transform, $Y(z)$.
4. **Inverse Transform to find y[n]**: Find the time-domain solution $y[n]$ by applying the [[Inverse Z-Transform]] to $Y(z)$.

#### Decomposing the System Response
#zero-state-response #zero-input-response

The algebraic solution for $Y(z)$ naturally separates the total system response into two components: the Zero-State Response (ZSR) and the Zero-Input Response (ZIR).

*   **Zero-State Response (ZSR)**: The response of the system to the input $x[n]$ alone, assuming the system starts from rest (all initial conditions are zero).
*   **Zero-Input Response (ZIR)**: The response of the system to the initial conditions alone, assuming the input $x[n]$ is zero.

The total response is the sum of these two:
$$\boxed{\quad y[n] = y_{ZSR}[n] + y_{ZIR}[n] \quad}$$

###### Example:
Consider a first-order LCCDE:
$$y[n] - a y[n-1] = b x[n] \quad \text{with initial condition } y[-1]$$
Applying the Unilateral Z-Transform:
$$Y(z) - a(z^{-1}Y(z) + y[-1]) = b X(z)$$
Solving for $Y(z)$:
$$Y(z)(1 - az^{-1}) = b X(z) + a y[-1]$$
$$Y(z) = \underbrace{\left( \frac{b}{1 - az^{-1}} \right) X(z)}_{\text{Zero-State Response term, } Y_{ZSR}(z)} + \underbrace{\frac{a y[-1]}{1 - az^{-1}}}_{\text{Zero-Input Response term, } Y_{ZIR}(z)}$$
From the ZSR term, we can identify the system's [[The Transfer Function H(z)]] as $H(z) = \frac{Y_{ZSR}(z)}{X(z)} = \frac{b}{1 - az^{-1}}$.

---
### Related Concepts
#z-transform/related-concepts

> [[The Z-Transform]]

[[Properties of the Z-Transform]]
[[Inverse Z-Transform]]
[[The Transfer Function H(z)]]
[[Solving Differential Equations using Laplace Transform]]