---
tags:
  - calculus
  - multivariable-calculus
  - optimization
  - constrained-optimization
  - lagrange-multipliers
  - engineering-math
created: 2025-09-09
aliases:
  - Lagrange Multipliers
  - Constrained Optimization
subject: "[[Mathematics]]"
parent:
  - "[[Maxima and Minima of Multivariable Functions]]"
confidence: 9
---

```mermaid
mindmap
  root((Method of Lagrange Multipliers))
    Core Idea
      Optimize f(x,y) subject to a constraint g(x,y)=k
    Geometric Intuition
      Level curve of f is TANGENT to the constraint curve g
      Gradient vectors are PARALLEL
      ∇f = λ∇g
    The Method
      The Lagrange Multiplier (λ)
      The System of Equations
        fₓ = λgₓ
        fᵧ = λgᵧ
        g(x,y) = k
    Procedure
      1. Set up the system
      2. Solve for all points (x,y,λ)
      3. Evaluate f at the solution points
      4. Compare values to find max/min
    Extension
      Multiple Constraints
      ∇f = λ∇g + μ∇h
```

---
### Method of Lagrange Multipliers
#constrained-optimization #lagrange-multipliers

> The **Method of Lagrange Multipliers** is a powerful technique for finding the local maxima and minima of a multivariable function, $f(x, y, \dots)$, subject to one or more equality constraints, $g(x, y, \dots) = k$. It is the primary tool for solving **constrained optimization** problems.

#### The Geometric Intuition
#gradient #level-curves

The core idea behind the method is geometric. Consider optimizing $f(x,y)$ subject to the constraint $g(x,y)=k$.
*   The constraint $g(x,y)=k$ defines a curve in the xy-plane. We are looking for the extreme values of $f$ *only on this curve*.
*   At a point of maximum or minimum of $f$ along the constraint curve, the **level curve** of $f$ passing through that point must be **tangent** to the constraint curve.
*   If the curves were not tangent, they would cross, meaning you could move along the constraint curve and increase or decrease the value of $f$, so it wouldn't be an extremum.
*   The gradient vector, $\nabla f$, is always normal (perpendicular) to its level curves.
*   Therefore, at an extremum, the gradient vectors $\nabla f$ and $\nabla g$ must be parallel.

This parallelism is expressed algebraically as:
$$\boxed{\quad \nabla f = \lambda \nabla g \quad}$$
where $\lambda$ (lambda) is a non-zero scalar called the **Lagrange multiplier**.

---
#### The Method
#lagrange-multipliers/method

To find the maximum and minimum values of $f(x,y,z)$ subject to the constraint $g(x,y,z)=k$:

**Step 1: Set up the System of Equations**
Find all values of $x, y, z,$ and $\lambda$ that simultaneously satisfy the gradient equation and the constraint equation.
$$\boxed{\begin{align}
\nabla f(x,y,z) &= \lambda \nabla g(x,y,z) \\
g(x,y,z) &= k
\end{align}}$$
This vector equation expands into a system of four scalar equations:
$$\begin{align}
f_x &= \lambda g_x \\
f_y &= \lambda g_y \\
f_z &= \lambda g_z \\
g(x,y,z) &= k
\end{align}$$

**Step 2: Solve the System**
Solve the system of equations from Step 1 for all possible solution points $(x,y,z)$.

**Step 3: Evaluate the Function**
Plug each solution point $(x,y,z)$ found in Step 2 into the original function $f$.

**Step 4: Compare Values**
The largest value from Step 3 is the maximum value, and the smallest value is the minimum value. (This is guaranteed if the constraint surface is closed and bounded).

---
#### Extension to Multiple Constraints
#multiple-constraints

The method can be extended to optimize a function with more than one constraint. To optimize $f(x,y,z)$ subject to two constraints, $g(x,y,z)=k_1$ and $h(x,y,z)=k_2$, we introduce two Lagrange multipliers, $\lambda$ and $\mu$.

The condition becomes that the gradient of $f$ must lie in the plane formed by the gradients of the constraint functions:
$$\boxed{\quad \nabla f = \lambda \nabla g + \mu \nabla h \quad}$$
This, along with the two constraint equations, creates a system of 5 equations for the 5 variables ($x, y, z, \lambda, \mu$).

---
### Related Concepts
#related-concepts

> [[Maxima and Minima of Multivariable Functions]]

[[Gradient]]
[[1. Mathematics/2. Calculus/3. Functions of Two or More Variables/Partial Derivatives]]
[[Level Curves and Surfaces]]