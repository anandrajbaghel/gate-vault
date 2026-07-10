---
tags:
  - numerical-methods
  - numerical-integration
  - calculus
  - engineering-math
created: 2025-09-15
aliases:
  - Trapezoidal Integration
  - "Example : Trapezoidal Rule"
subject: "[[Mathematics]]"
parent:
  - Numerical Integration
confidence: 10
---
### Trapezoidal Rule
#trapezoidal-rule #numerical-integration #area-approximation

> The **Trapezoidal Rule** is a numerical technique for approximating the value of a definite integral. It works by replacing the true curve $f(x)$ with a series of straight-line segments, effectively approximating the area under the curve with a series of trapezoids. It is one of the simplest and most fundamental methods of numerical integration, offering better accuracy than basic rectangular methods.

---
#### Single-Interval Trapezoidal Rule
#trapezoidal-rule/single-interval

In the simplest case, the entire area under the curve from $x=a$ to $x=b$ is approximated by a single trapezoid.
The width of the interval is $h = b-a$. The heights of the parallel sides are the function values at the endpoints, $y_0 = f(a)$ and $y_1 = f(b)$.

The formula for the area of this trapezoid is:
$$\boxed{\quad I = \int_a^b f(x) \, dx \approx \frac{h}{2} (y_0 + y_1) \quad}$$

---
#### Composite Trapezoidal Rule
#trapezoidal-rule/composite

To improve accuracy, the interval of integration $[a, b]$ is divided into $n$ smaller sub-intervals of equal width, $h = \frac{b-a}{n}$. A trapezoid is then used to approximate the area in each sub-interval, and the total area is the sum of the areas of all these trapezoids.

The resulting formula for the **Composite Trapezoidal Rule** is:
$$\boxed{\quad I \approx \frac{h}{2} [y_0 + 2(y_1 + y_2 + \dots + y_{n-1}) + y_n] \quad}$$
*   The first and last ordinates ($y_0$ and $y_n$) are used once.
*   All intermediate ordinates ($y_1$ to $y_{n-1}$) are used twice (as they are a side of two adjacent trapezoids).

---
#### Error Analysis
#trapezoidal-rule/error

Understanding the error is crucial for assessing the accuracy of the method.

*   **Local Truncation Error** (for a single interval):
    $$E_t = -\frac{h^3}{12} f''(\xi)$$
    where $\xi$ is some point in the interval.

*   **Global Truncation Error** (for the composite rule with $n$ intervals):
    $$E_T = -\frac{(b-a)h^2}{12} \bar{f''}$$
    where $\bar{f''}$ is the average value of the second derivative over the entire interval.

**Key Takeaways from the Error Formula**:
1.  The error is proportional to $h^2$. This means if you **halve the step size ($h$), the error is reduced by a factor of 4**. The method is **second-order accurate**.
2.  The error is proportional to the second derivative of the function, $f''(x)$.
3.  The Trapezoidal Rule is **exact** for functions whose second derivative is zero, which means it provides the exact integral for **linear functions** and constants.

---
#### Example

Evaluate $\int_0^1 x^2 \, dx$ using the Trapezoidal Rule with $n=4$ intervals.

*   **Intervals**: $a=0, b=1, n=4 \implies h = (1-0)/4 = 0.25$.
*   **Function values**:
    *   $x_0 = 0.00, \quad y_0 = (0.00)^2 = 0.0000$
    *   $x_1 = 0.25, \quad y_1 = (0.25)^2 = 0.0625$
    *   $x_2 = 0.50, \quad y_2 = (0.50)^2 = 0.2500$
    *   $x_3 = 0.75, \quad y_3 = (0.75)^2 = 0.5625$
    *   $x_4 = 1.00, \quad y_4 = (1.00)^2 = 1.0000$
*   **Apply the formula**:
    $$\begin{align}
    I &\approx \frac{h}{2} [y_0 + 2(y_1 + y_2 + y_3) + y_4] \\
    &\approx \frac{0.25}{2} [0 + 2(0.0625 + 0.2500 + 0.5625) + 1] \\
    &\approx 0.125 [0 + 2(0.875) + 1] \\
    &\approx 0.125 [0 + 1.75 + 1] = 0.125 \times 2.75 = 0.34375
    \end{align}$$
*   **Comparison**: The exact value is $\int_0^1 x^2 \, dx = [x^3/3]_0^1 = 1/3 \approx 0.33333$. The approximation is quite close.

---
### Related Concepts
#numerical-methods/related-concepts

> [[Numerical Methods - Numerical Integration]]

[[Simpson's Rule]] (A more accurate, third-order method)
[[Evaluation of Definite Integrals]]
[[Taylor Series]]