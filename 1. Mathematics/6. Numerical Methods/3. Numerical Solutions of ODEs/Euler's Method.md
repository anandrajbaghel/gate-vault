---
tags:
  - numerical-methods
  - ode-solver
  - calculus
  - differential-equations
  - engineering-math
created: 2025-09-15
aliases:
  - Euler's Method
  - Forward Euler Method
  - "Example : Euler Method"
subject: "[[Mathematics]]"
parent:
  - Solving ODEs
---
### Euler's Method
#eulers-method #ode-solver #numerical-methods

> **Euler's Method** is the simplest and most fundamental numerical method for finding an approximate solution to a first-order ordinary differential equation with a given initial value. It is an explicit method that works by approximating the solution curve with a series of short line segments, where the slope of each segment is determined by the derivative at its starting point.

#### The Problem: Initial Value Problem (IVP)
Euler's method is used to solve an [[Initial Value Problems (IVP)|Initial Value Problem]] of the form:
$$\frac{dy}{dx} = f(x, y), \quad \text{with an initial condition } y(x_0) = y_0$$
Our goal is to find the value of $y$ at some later point, $y(x_n)$, by taking a series of small steps.

---
#### Derivation and Geometric Interpretation

The method is derived by truncating the [[Taylor series]] expansion of $y(x+h)$ after the first-order term:
$$ y(x+h) \approx y(x) + h \cdot y'(x) $$
Substituting $y'(x) = f(x,y)$, we get the iterative formula.

**Geometric Interpretation**: Starting at the known point $(x_0, y_0)$, we calculate the slope of the solution curve using the differential equation, $m_0 = f(x_0, y_0)$. We then move along this tangent line for a small step size $h$ to find the next point $(x_1, y_1)$. This process is repeated from the new point.

---
#### The Iteration Formula
To find the solution at discrete points $x_i = x_0 + ih$, the iterative formula is:
$$\boxed{\quad y_{i+1} = y_i + h \cdot f(x_i, y_i) \quad}$$
where:
*   $h$ is the **step size**.
*   $(x_i, y_i)$ is the current known point.
*   $f(x_i, y_i)$ is the slope at the current point.
*   $y_{i+1}$ is the approximate value of the solution at the next point, $x_{i+1} = x_i + h$.

---
#### Error Analysis
#eulers-method/error

Euler's method is not very accurate, and understanding its error is important.
*   **Local Truncation Error**: The error made in a single step is of the order of $h^2$, written as $O(h^2)$.
*   **Global Truncation Error**: The accumulated error after many steps over a fixed interval is of the order of $h$, written as $O(h)$.

Because the global error is proportional to the first power of the step size, Euler's method is a **first-order method**. This means, for example, that if you **halve the step size ($h$), you will roughly halve the total error**.

---
#### Example

Use Euler's method to find an approximate value of $y(0.2)$ for the IVP $\frac{dy}{dx} = x+y$, with $y(0)=1$. Use a step size of $h=0.1$.

*   **Initial Conditions**: $x_0 = 0$, $y_0 = 1$. The function is $f(x,y) = x+y$.

**Step 1: Find $y(0.1)$**
*   We are at $(x_0, y_0) = (0, 1)$.
*   Calculate the slope: $f(x_0, y_0) = f(0, 1) = 0 + 1 = 1$.
*   Apply the formula to find $y_1$:
    $$ y_1 = y_0 + h \cdot f(x_0, y_0) = 1 + 0.1 \cdot (1) = 1.1 $$
    So, our approximation is $y(0.1) \approx 1.1$.

**Step 2: Find $y(0.2)$**
*   We are now at $(x_1, y_1) = (0.1, 1.1)$.
*   Calculate the new slope: $f(x_1, y_1) = f(0.1, 1.1) = 0.1 + 1.1 = 1.2$.
*   Apply the formula to find $y_2$:
    $$ y_2 = y_1 + h \cdot f(x_1, y_1) = 1.1 + 0.1 \cdot (1.2) = 1.1 + 0.12 = 1.22 $$
The final approximate value is $\boxed{y(0.2) \approx 1.22}$.

---
### Related Concepts
#numerical-methods/related-concepts

> [[Runge-Kutta Methods]] (More accurate, higher-order methods)

[[Initial Value Problems (IVP)]]
[[Differential Equations]]
[[Taylor Series]]