---
tags:
  - numerical-methods
  - ode-solver
  - calculus
  - differential-equations
  - engineering-math
created: 2025-09-15
aliases:
  - RK Methods
  - RK4
  - Runge-Kutta
  - RK2
subject: "[[Mathematics]]"
parent:
  - Solving ODEs
---
### Runge-Kutta (RK) Methods
#runge-kutta-methods #rk4 #ode-solver #numerical-methods

> **Runge-Kutta (RK) Methods** are a family of powerful and widely used iterative methods for the numerical solution of ordinary differential equations. They are an improvement over [[Euler's Method]] because instead of using the slope at just the beginning of an interval to extrapolate, they use a **weighted average of several slope estimates** from within the interval. This results in significantly higher accuracy for a given step size.

#### The General Idea

Recall that Euler's method uses the formula: $y_{i+1} = y_i + h \cdot (\text{slope})$. The error in this method comes from using a single slope value, $f(x_i, y_i)$, across the entire interval.

Runge-Kutta methods improve this by calculating several intermediate slopes ($k_1, k_2, \dots$) within the interval $[x_i, x_{i+1}]$ and then combining them in a weighted average. The general form is:
$$ y_{i+1} = y_i + h \cdot \phi(x_i, y_i, h) $$
where $\phi$ is the weighted average of the slopes, often called the increment function.

---
#### Second-Order RK Methods (RK2)
#rk2 #heuns-method #midpoint-method

RK2 methods use a weighted average of two slope estimates. The global error is of order $h^2$, or $O(h^2)$.
*   **Heun's Method (Predictor-Corrector)**: First, estimate the value at the end of the interval using Euler's method (predictor). Then, average the slope at the beginning and the predicted end point to get a corrected value (corrector).
*   **Midpoint Method**: Use the slope at the beginning of the interval to estimate the value at the *midpoint* of the interval. Then use the slope at this midpoint to take the full step across the interval.

---
#### Fourth-Order RK Method (RK4) - The Classic Method
#rk4 #runge-kutta-4th-order

The fourth-order Runge-Kutta method, often referred to simply as "the Runge-Kutta method," is the most common and is a workhorse for numerical ODE solving. It achieves fourth-order accuracy without requiring the calculation of higher derivatives of $f(x,y)$.

**The Iteration Formula**:

To solve $y' = f(x,y)$ with step size $h$:
$$\boxed{\quad y_{i+1} = y_i + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4) \quad}$$
where the four slope estimates are calculated sequentially as:
*   **$k_1$**: Slope at the beginning of the interval.
    $$ k_1 = f(x_i, y_i) $$
*   **$k_2$**: Slope at the midpoint, estimated using $k_1$.
    $$ k_2 = f\left(x_i + \frac{h}{2}, y_i + h\frac{k_1}{2}\right) $$
*   **$k_3$**: A second, better estimate of the slope at the midpoint, now using $k_2$.
    $$ k_3 = f\left(x_i + \frac{h}{2}, y_i + h\frac{k_2}{2}\right) $$
*   **$k_4$**: Slope at the end of the interval, estimated using $k_3$.
    $$ k_4 = f(x_i + h, y_i + hk_3) $$

**Interpretation**: The final weighted average $\frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$ is reminiscent of [[Simpson's Rule|Simpson's 1/3 rule]], giving more weight to the slopes calculated at the midpoint.

---
#### Properties and Advantages

*   **High Accuracy**: The global error for RK4 is of the order of $h^4$, or $O(h^4)$. This means halving the step size reduces the error by a factor of 16, making it extremely efficient and accurate.
*   **Self-Starting**: The method only needs the initial condition $(x_0, y_0)$ to start the process.
*   **No Higher Derivatives**: Unlike Taylor series methods, RK methods do not require analytical differentiation of the function $f(x,y)$.
*   **Stability**: RK4 has good stability properties for a wide range of problems.

Due to these advantages, RK4 and its adaptive step-size variants are the default choice for solving ODEs in most scientific and engineering software packages (e.g., MATLAB's `ode45`).

---
### Related Concepts
#numerical-methods/related-concepts

> [[Euler's Method]] (The simplest, first-order method)

[[Initial Value Problems (IVP)]]
[[Differential Equations]]
[[Simpson's Rule]] (Shares a similar weighting scheme)