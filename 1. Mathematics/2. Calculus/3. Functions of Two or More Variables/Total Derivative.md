---
tags:
  - calculus
  - multivariable-calculus
  - chain-rule
  - total-derivative
  - engineering-math
created: 2025-09-09
aliases:
  - Total Derivative
  - Total Differential
subject: "[[Mathematics]]"
parent:
  - "[[Partial Derivatives]]"
confidence: 9
---

```mermaid
mindmap
  root((Total Derivative))
    Definition
      Rate of change of f along a path
    Core Idea
      Combines changes from all variables via the Chain Rule
    The Formula (df/dt)
      df/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt) + ...
    Distinction from Partial Derivative
      df/dt: Total rate of change for a moving observer
      ∂f/∂t: Rate of change at a fixed point (explicit time dependence)
    Gradient Formulation
      df/dt = ∇f ⋅ r'(t)
    Total Differential (df)
      Linear approximation of change
      df = (∂f/∂x)dx + (∂f/∂y)dy
```

---
### Total Derivative
#total-derivative #chain-rule #multivariable-calculus

> The **total derivative** measures the rate of change of a multivariable function with respect to a single parameter (like time) when all of its input variables are themselves functions of that parameter. It accounts for the combined effect of the changes in all input variables simultaneously, as seen from the perspective of a point moving along a trajectory.

#### Definition and Formula
#total-derivative/definition

Let $f(x, y, z)$ be a function of several variables, where each variable is, in turn, a function of a single variable $t$, i.e., $x=x(t)$, $y=y(t)$, and $z=z(t)$.

The **total derivative** of $f$ with respect to $t$, denoted $\frac{df}{dt}$, is given by the multivariable chain rule:
$$\boxed{\quad \frac{df}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt} + \frac{\partial f}{\partial z}\frac{dz}{dt} \quad}$$

---
#### Total Derivative vs. Partial Derivative
#total-vs-partial

It is crucial to distinguish the total derivative $\frac{df}{dt}$ from the partial derivative $\frac{\partial f}{\partial t}$.

*   **Partial Derivative $\frac{\partial f}{\partial t}$**: This is used when time $t$ is an **explicit** variable of the function, e.g., $f(x, y, t)$. It measures the rate of change of the function at a **fixed point** $(x,y)$ as time passes.
*   **Total Derivative $\frac{df}{dt}$**: This is used when the function depends on variables that are **implicitly** functions of time, e.g., $f(x(t), y(t))$. It measures the rate of change of the function as experienced by an observer **moving along the path** $(x(t), y(t))$.

**Example**: Let $T(x,y)$ be the temperature at point $(x,y)$ in a room.
*   $\frac{\partial T}{\partial x}$ is the rate of temperature change if you move in the x-direction.
*   If a bug flies along a path $(x(t), y(t))$, then $\frac{dT}{dt}$ is the rate of change of temperature **experienced by the bug**. It combines the change in temperature due to the bug's changing x-position and its changing y-position.

---
#### Gradient Formulation
#gradient #vector-calculus

The total derivative has an elegant formulation using the gradient. Let the path of the moving point be the vector function $\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle$.
The velocity vector is $\mathbf{r}'(t) = \langle \frac{dx}{dt}, \frac{dy}{dt}, \frac{dz}{dt} \rangle$.
The total derivative formula can then be written as a dot product:
$$\boxed{\quad \frac{df}{dt} = \nabla f \cdot \mathbf{r}'(t) \quad}$$
This shows that the total rate of change is the [[Directional Derivatives|directional derivative]] of $f$ in the direction of the velocity vector, scaled by the magnitude of the velocity.

---
#### The Total Differential
#total-differential #linear-approximation

The **total differential**, denoted $df$, is a linear approximation of the total change in the function $f$ resulting from small changes $dx, dy, dz$ in its input variables.
$$\boxed{\quad df = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy + \frac{\partial f}{\partial z}dz \quad}$$
The total derivative is obtained by dividing the total differential by the differential of the parameter, $dt$:
$$ \frac{df}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt} + \frac{\partial f}{\partial z}\frac{dz}{dt} $$

---
### Related Concepts
#related-concepts

> [[Partial Derivatives]]

[[Gradient]]
[[Directional Derivatives]]
[[Chain Rule]]
[[Limits and Continuity of Multivariable Functions]]
