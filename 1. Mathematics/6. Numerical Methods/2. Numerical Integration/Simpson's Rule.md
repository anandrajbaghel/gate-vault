---
tags:
  - numerical-methods
  - numerical-integration
  - calculus
  - engineering-math
created: 2025-09-15
aliases:
  - Simpson's 1/3 Rule
  - Parabolic Rule
  - "Example : Simpson's 1/3 Rule"
subject: "[[Mathematics]]"
parent:
  - Numerical Integration
---
### Simpson's Rule
#simpsons-rule #numerical-integration #parabolic-approximation

> **Simpson's Rule** is a numerical method for approximating definite integrals that offers significantly higher accuracy than the [[Trapezoidal Rule|Trapezoidal Rule]]. Instead of approximating the function with straight lines (linear interpolation), Simpson's rule approximates the function over pairs of intervals using **parabolic arcs** (quadratic interpolation). This superior modeling of the curve's curvature results in a much smaller error.

> [!warning]- How to Identify the Correct Numerical Method (GATE-Oriented)
> 
> **Step 1: Check the form of the differential equation**
> - If  
>   $$\frac{dy}{dt} = f(t)$$
>   (right-hand side depends **only on $t$**), then  
>   $$y(t) = \int f(t)\,dt$$
>   → Use **numerical integration** (Simpson’s / Trapezoidal rule)  
>   → **Do NOT use Euler or Runge–Kutta**
> 
> ---
> **Step 2: Check for step size**
> - If step size $h$ or number of steps $n$ is **given**  
>   → Euler / Runge–Kutta methods are applicable
> - If **no $h$ or $n$ is given**  
>   → Euler / RK **cannot be uniquely applied**
> 
> ---
> **Step 3: Look for method keywords**
> - “Use Euler’s method” → Euler method
> - “Use Runge–Kutta method” → Runge–Kutta
> - “Numerically obtained value” (without $h$) → Numerical integration
> 
> ---
> **Step 4: GATE default rules**
> - Numerical solution required, method **not specified**  
>   → Use **Runge–Kutta (RK4)**
> - RHS is only a function of $t$  
>   → Use **Simpson’s rule**
> 
> ---
> **One-line decision rule**
> > **No $y$ on RHS and no step size ⇒ integrate numerically, not Euler/RK.**


---
#### Simpson's 1/3 Rule
#simpsons-1-3-rule

This is the standard and most commonly used form of Simpson's Rule. It approximates the integral by passing a unique parabola through three consecutive points.

**Condition**: To apply Simpson's 1/3 Rule, the total interval of integration must be divided into an **even number of sub-intervals**, $n$.

**Formula**: For $n$ (even) intervals of equal width $h = \frac{b-a}{n}$, the integral is approximated by:
$$\boxed{\quad I \approx \frac{h}{3} [y_0 + 4(y_1 + y_3 + \dots) + 2(y_2 + y_4 + \dots) + y_n] \quad}$$
The weighting pattern is **1, 4, 2, 4, 2, ..., 4, 1**.
*   The first and last ordinates ($y_0, y_n$) have a weight of 1.
*   The **odd-indexed** ordinates have a weight of 4.
*   The **even-indexed** intermediate ordinates have a weight of 2.

---
#### Error Analysis
#simpsons-rule/error

The error analysis reveals why Simpson's Rule is so powerful.

*   **Global Truncation Error** (for the composite 1/3 rule):
    $$E_T = -\frac{(b-a)h^4}{180} \bar{f^{(4)}}$$
    where $\bar{f^{(4)}}$ is the average value of the fourth derivative over the interval.

**Key Takeaways from the Error Formula**:
1.  The error is proportional to $h^4$. This means if you **halve the step size ($h$), the error is reduced by a factor of 16**. The method is **fourth-order accurate**, a major improvement over the Trapezoidal Rule's second-order accuracy.
2.  The error is proportional to the **fourth derivative** of the function.
3.  This implies that Simpson's 1/3 Rule is **exact** for any function whose fourth derivative is zero. This includes all **polynomials of degree 3 or less** (constants, linear, quadratic, and cubic functions). This is a non-obvious and extremely important property.

---
#### Example

Evaluate $\int_0^1 x^2 \, dx$ using Simpson's 1/3 Rule with $n=4$ intervals.

*   **Intervals**: $a=0, b=1, n=4$ (which is even). So, $h = (1-0)/4 = 0.25$.
*   **Function values**:
    *   $x_0 = 0.00, \quad y_0 = 0.0000$
    *   $x_1 = 0.25, \quad y_1 = 0.0625$
    *   $x_2 = 0.50, \quad y_2 = 0.2500$
    *   $x_3 = 0.75, \quad y_3 = 0.5625$
    *   $x_4 = 1.00, \quad y_4 = 1.0000$
*   **Apply the formula**:
    $$\begin{align}
    I &\approx \frac{h}{3} [y_0 + 4(y_1 + y_3) + 2(y_2) + y_4] \\
    &\approx \frac{0.25}{3} [0 + 4(0.0625 + 0.5625) + 2(0.2500) + 1] \\
    &\approx \frac{0.25}{3} [0 + 4(0.625) + 0.5 + 1] \\
    &\approx \frac{0.25}{3} [0 + 2.5 + 0.5 + 1] = \frac{0.25}{3} \times 4 = \frac{1}{3}
    \end{align}$$
*   **Result**: The result is exactly $1/3$. This is expected, because Simpson's Rule is exact for polynomials of degree 3 or less, and we integrated a quadratic (degree 2).

---
#### Simpson's 3/8 Rule
#simpsons-3-8-rule

This is a less common variant that fits a cubic polynomial through four consecutive points.
*   **Condition**: Requires the number of intervals $n$ to be a **multiple of 3**.
*   **Formula**: $I \approx \frac{3h}{8} [y_0 + 3(y_1 + y_2 + y_4 + y_5 + \dots) + 2(y_3 + y_6 + \dots) + y_n]$.
*   **Accuracy**: It is also fourth-order accurate, though generally slightly less accurate than the 1/3 rule.

---
### Related Concepts
#numerical-methods/related-concepts

> [[Numerical Integration]]

[[Trapezoidal Rule]]
[[Evaluation of Definite Integrals]] & [[Definite and Improper Integrals]]
[[Taylor Series]]
[[Runge-Kutta Methods]]