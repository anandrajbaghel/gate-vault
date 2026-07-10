---
tags:
  - complex-analysis
  - complex-functions
  - limits
  - continuity
  - differentiability
  - analytic-functions
  - engineering-math
created: 2025-09-15
aliases:
  - Complex Limits
  - Complex Continuity
  - Complex Differentiability
  - "Example : Complex Functions Limits"
subject: "[[Mathematics]]"
parent: "[[Functions of a Complex Variable]]"
confidence: 10
---
### Limits, Continuity, and Differentiability of Complex Functions
#complex-limits #continuity #differentiability #analytic-function

> The concepts of limits, continuity, and differentiability for functions of a complex variable are analogous to those for real variables, but with a crucial additional constraint: **path independence**. Because a point in the complex plane can be approached from infinitely many directions, the behavior of the function must be consistent along all of them. This stringent requirement for differentiability leads to the powerful properties of analytic functions.

---
#### Limit of a Complex Function
#complex-limits #path-independence

The limit of a function $f(z)$ as $z$ approaches a point $z_0$ is a complex number $L$, denoted
$$ \lim_{z \to z_0} f(z) = L $$
if the value of $f(z)$ can be made arbitrarily close to $L$ by choosing $z$ sufficiently close to $z_0$.

**The Key Idea**: The limit must be the same regardless of the path of approach in the complex plane. If we can find two different paths that yield two different limits, then the limit **does not exist**.

*   **Example**: Does the limit of $f(z) = \frac{z^*}{z}$ exist as $z \to 0$?
    Let $z = x+jy$.
    1.  **Path 1 (along the real axis)**: Here, $y=0$, so $z=x$ and $z^*=x$.
        $$ \lim_{x \to 0} \frac{x}{x} = 1 $$
    2.  **Path 2 (along the imaginary axis)**: Here, $x=0$, so $z=jy$ and $z^*=-jy$.
        $$ \lim_{y \to 0} \frac{-jy}{jy} = -1 $$
    Since the limits along two different paths are not equal (1 $\neq$ -1), the limit $\lim_{z \to 0} \frac{z^*}{z}$ **does not exist**.

---
#### Continuity of a Complex Function
#complex-continuity

A function $f(z)$ is **continuous** at a point $z=z_0$ if three conditions are met:
1.  $f(z_0)$ is defined.
2.  $\lim_{z \to z_0} f(z)$ exists.
3.  $\lim_{z \to z_0} f(z) = f(z_0)$.

Essentially, a function is continuous if it has no "jumps" or "holes". Functions built from sums, products, and compositions of continuous functions (like polynomials and exponentials) are continuous in their domains.

---
#### Differentiability of a Complex Function (Analyticity)
#complex-differentiability #analytic-function #cauchy-riemann-equations

This is the most important concept and the point where complex analysis diverges significantly from real analysis. The derivative of $f(z)$ at $z_0$ is defined by the limit:
$$ f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z} $$
For this derivative to exist, the limit must be the same regardless of how $\Delta z$ approaches zero. This is a much stronger condition than for real functions.

*   **Analyticity**: A function is **analytic** in a domain if it is differentiable at every point in that domain.

Because of the path independence requirement, a direct check using the limit definition is cumbersome. Instead, the primary tool for testing differentiability is the set of **Cauchy-Riemann (C-R) Equations**.

A function $f(z) = u(x, y) + jv(x, y)$ is differentiable at a point $z_0$ if and only if the partial derivatives of $u$ and $v$ exist, are continuous, and satisfy the C-R equations at that point:
$$\boxed{\quad \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \quad}$$
If these conditions hold, the derivative $f'(z)$ can be calculated as:
$$ f'(z) = \frac{\partial u}{\partial x} + j\frac{\partial v}{\partial x} = u_x + jv_x \quad \text{(or } f'(z) = v_y - ju_y \text{)} $$

*   **Example**: The function $f(z) = z^*$ (conjugate)
    *   $f(z) = x - jy \implies u = x, v = -y$.
    *   $u_x = 1$, $v_y = -1$.
    *   Since $u_x \neq v_y$, the first C-R equation is **never** satisfied.
    *   Therefore, $f(z) = z^*$ is **nowhere differentiable** and **nowhere analytic**, even though it is continuous everywhere.

---
### Related Concepts
#complex-analysis/related-concepts

>  [[Functions of a Complex Variable]]

[[Cauchy's Integral Theorem]] & [[Cauchy's Integral Formula]]
[[Taylor Series]] & [[Laurent Series]]
[[Residue Theorem]]
[[Limits, Continuity, and Differentiability]] (for real functions, a prerequisite)