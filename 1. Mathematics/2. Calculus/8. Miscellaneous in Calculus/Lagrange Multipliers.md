---
tags:
  - mathematics
  - calculus
  - optimization
  - constrained-optimization
created: 2025-09-14
aliases:
  - Lagrange Multiplier Method
  - Constrained Optimization
subject: "[[Mathematics]]"
parent:
  - Multivariable Calculus
confidence: 9
---

```mermaid
mindmap
  root((Lagrange Multipliers))
    Core Idea
      (Find extrema of f(x,y,...) subject to g(x,y,...)=c)
      (Converts a constrained problem to unconstrained)
    Geometric Interpretation
      (Point of tangency)
      (Contour of f is tangent to constraint curve g)
      (Gradient vectors are parallel: ∇f = λ∇g)
    Formulation
      Lagrangian Function
        (ℒ(x, y, λ) = f(x, y) - λ(g(x, y) - c))
      System of Equations
        (∇ℒ = 0)
        (∂ℒ/∂x = 0)
        (∂ℒ/∂y = 0)
        (∂ℒ/∂λ = 0 -> recovers constraint)
    The Multiplier (λ)
      (Interpretation as a "shadow price")
      (Rate of change of the optimal value w.r.t. the constraint)
    Procedure
      (1. Identify f and g)
      (2. Form Lagrangian)
      (3. Solve ∇ℒ = 0)
      (4. Evaluate f at solution points)
    Applications
      (Economics: Utility Maximization)
      (Physics: Lagrangian Mechanics)
      (Engineering: Optimal design)
```

---
### Lagrange Multipliers
#constrained-optimization #calculus #optimization

> The method of **Lagrange Multipliers** is a powerful technique for finding the local maxima or minima of a multivariable function, $f(x, y, \dots)$, subject to one or more equality constraints, $g(x, y, \dots) = c$. It effectively transforms a constrained optimization problem into an unconstrained one by introducing an auxiliary variable, the Lagrange multiplier ($\lambda$).

#### Geometric Interpretation
#lagrange-multiplier/geometry

The core idea is that an extreme value (max/min) of a function $f(x, y)$ along a constraint curve $g(x, y) = c$ occurs at a point where the level curve of $f$ is **tangent** to the constraint curve.

When two curves are tangent, their normal vectors at the point of tangency are parallel. Since the gradient vector ($\nabla f$ or $\nabla g$) is always normal (perpendicular) to the level curve, this means the gradient vectors of the function and the constraint must be parallel at the extremum.

This parallel relationship can be expressed mathematically as:
$$\boxed{\quad \nabla f(x,y) = \lambda \nabla g(x,y) \quad}$$
where $\lambda$ (lambda) is a scalar constant called the **Lagrange Multiplier**.

---
#### The Lagrangian Function
#lagrangian-function

The condition $\nabla f = \lambda \nabla g$ along with the constraint equation $g(x,y)=c$ can be elegantly combined into a single function called the **Lagrangian** ($\mathcal{L}$).

For a function $f(x,y)$ with constraint $g(x,y)=c$, the Lagrangian is:
$$\boxed{\quad \mathcal{L}(x, y, \lambda) = f(x, y) - \lambda(g(x, y) - c) \quad}$$
The method then states that the solution to the constrained problem can be found by finding the critical points of the unconstrained Lagrangian function. This is done by setting the gradient of $\mathcal{L}$ with respect to all its variables ($x, y,$ and $\lambda$) to zero.
$$\nabla \mathcal{L}(x, y, \lambda) = 0$$
This single vector equation breaks down into a system of equations:
$$\begin{align}
\frac{\partial \mathcal{L}}{\partial x} &= \frac{\partial f}{\partial x} - \lambda \frac{\partial g}{\partial x} = 0 \\
\frac{\partial \mathcal{L}}{\partial y} &= \frac{\partial f}{\partial y} - \lambda \frac{\partial g}{\partial y} = 0 \\
\frac{\partial \mathcal{L}}{\partial \lambda} &= -(g(x, y) - c) = 0
\end{align}$$
The first two equations rearrange to $\nabla f = \lambda \nabla g$, and the third equation simply recovers the original constraint $g(x, y) = c$. Solving this system gives the candidate points for the maxima and minima.

---
#### Interpretation of the Lagrange Multiplier ($\lambda$)
#shadow-price

The Lagrange multiplier $\lambda$ is not just an auxiliary variable; it has a significant physical and economic interpretation.
> The value of $\lambda$ at the optimal solution represents the **rate of change of the optimal value of the objective function ($f_{max}$ or $f_{min}$) with respect to a change in the constraint constant ($c$)**.
$$\lambda = \frac{df_{optimal}}{dc}$$
  In economics, this is often called the **shadow price**. It tells you how much the optimal value (e.g., profit or utility) would increase if the constraint (e.g., budget) were relaxed by one unit.

---
#### Procedure
1. **Identify Functions**: Identify the objective function $f(x,y,\dots)$ to be maximized/minimized and the constraint function $g(x,y,\dots)=c$.
2. **Form the System of Equations**: Set up the system using the gradient condition and the constraint:
    * $\nabla f = \lambda \nabla g$
    * $g(x,y,\dots) = c$
3. **Solve**: Solve the system of equations for $x, y, \dots$ and $\lambda$. This will yield one or more candidate points.
4. **Evaluate**: Evaluate the objective function $f$ at each candidate point to identify the maximum and minimum values.

---
#### Applications
The method is widely used across various fields:
* **Economics**: Maximizing consumer utility subject to a budget constraint, or maximizing a firm's output subject to cost constraints.
* **Engineering**: Finding the optimal dimensions for a structure (e.g., maximum volume for a given surface area) to minimize material cost.
* **Physics**: Deriving equations of motion in classical mechanics (Lagrangian Mechanics) and solving problems in statistical mechanics.
* **Finance**: Portfolio optimization, where returns are maximized subject to a certain level of risk.

---
### Related Concepts
#related-concepts

> [[Multivariable Calculus]] (Gradients and Partial Derivatives are the foundation)

[[Maxima and Minima]] (Extends the concept to constrained problems)
[[System of Linear Equations]] (Often required to solve the resulting system)
[[Optimization]]
