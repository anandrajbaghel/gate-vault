---
tags:
  - calculus
  - multivariable-calculus
  - partial-derivatives
  - analysis
  - engineering-math
created: 2025-09-09
aliases:
  - Partial Derivative
  - Partial Differentiation
  - Unmixed Partials
  - Mixed Partials
  - Clairaut's Theorem (Symmetry of Mixed Partials)
subject: "[[Mathematics]]"
parent:
  - Calculus
---
### Partial Derivatives
#multivariable-calculus #partial-derivatives

> A **partial derivative** is a derivative of a multivariable function with respect to one of its variables, while all other variables are held constant. It measures the function's rate of change along a path parallel to one of the coordinate axes. This concept is the foundation for differentiation in higher dimensions.

#### Definition
#partial-derivative/definition

For a function of two variables, $f(x,y)$, the partial derivatives are defined as follows:

*   **Partial derivative with respect to x**:
    $$\boxed{\quad \frac{\partial f}{\partial x} = f_x(x,y) = \lim_{h \to 0} \frac{f(x+h, y) - f(x,y)}{h} \quad}$$
*   **Partial derivative with respect to y**:
    $$\boxed{\quad \frac{\partial f}{\partial y} = f_y(x,y) = \lim_{h \to 0} \frac{f(x, y+h) - f(x,y)}{h} \quad}$$

**Practical Rule**: To find $\frac{\partial f}{\partial x}$, treat $y$ as a constant and differentiate $f(x,y)$ with respect to $x$ using standard single-variable differentiation rules. Similarly, to find $\frac{\partial f}{\partial y}$, treat $x$ as a constant.

---
#### Geometric Interpretation
#geometric-interpretation

The partial derivative $f_x(a,b)$ represents the slope of the tangent line to the curve formed by intersecting the surface $z=f(x,y)$ with the plane $y=b$. It describes how the "height" of the surface changes as we move from the point $(a,b)$ in the direction of the positive x-axis.

---
#### Higher-Order and Mixed Partial Derivatives
#mixed-partials

We can take partial derivatives of partial derivatives to get higher-order derivatives. For a function $f(x,y)$:
*   **Second-order unmixed partials**:
    $$ \frac{\partial^2 f}{\partial x^2} = f_{xx} \quad \text{and} \quad \frac{\partial^2 f}{\partial y^2} = f_{yy} $$
*   **Mixed partials**:
    $$ \frac{\partial^2 f}{\partial y \partial x} = f_{xy} \quad \text{and} \quad \frac{\partial^2 f}{\partial x \partial y} = f_{yx} $$
    Note the order of differentiation: $\frac{\partial^2 f}{\partial y \partial x}$ means differentiate with respect to $x$ first, then with respect to $y$.

---
#### Clairaut's Theorem (Symmetry of Mixed Partials)
#clairauts-theorem

This theorem states that for most well-behaved functions, the order of mixed partial differentiation does not matter.
> If the mixed partial derivatives $f_{xy}$ and $f_{yx}$ are continuous on an open disk containing the point $(a,b)$, then:
> $$\boxed{\quad f_{xy}(a,b) = f_{yx}(a,b) \quad}$$

---
#### The Chain Rule for Multivariable Functions
#chain-rule

The chain rule extends to functions of several variables.

*   **Case 1**: $z = f(x,y)$, where $x=g(t)$ and $y=h(t)$. The derivative of $z$ with respect to $t$ is a **total derivative**.
    $$\boxed{\quad \frac{dz}{dt} = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt} \quad}$$
*   **Case 2**: $z=f(x,y)$, where $x=g(s,t)$ and $y=h(s,t)$. The derivatives of $z$ are partial.
    $$\boxed{\begin{align}
    \frac{\partial z}{\partial s} &= \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s} \\
    \frac{\partial z}{\partial t} &= \frac{\partial z}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial t}
    \end{align}}$$

---
### Related Concepts
#related-concepts

> [[Limits and Continuity of Multivariable Functions]]

[[Gradient]] (The vector of all first-order partial derivatives)
[[Maxima and Minima (Multivariable)]]
[[Directional Derivatives]]
[[Partial Differential Equations (PDEs)]] (Equations involving partial derivatives, e.g., Maxwell's Equations)