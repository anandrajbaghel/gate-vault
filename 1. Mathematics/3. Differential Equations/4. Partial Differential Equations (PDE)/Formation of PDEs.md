---
tags:
  - calculus
  - differential-equations
  - pde
  - mathematical-modeling
  - engineering-math
created: 2025-09-15
aliases:
  - PDE Formation
  - Deriving PDEs
  - "Example : Forming Partial Differential Equations (PDEs)"
  - "Video : What is Partial Differential Equations? (3Blue1Brown)"
subject: "[[Mathematics]]"
parent: "[[Partial Differential Equations (PDEs)]]"
confidence: 9
---

```mermaid
mindmap
  root((Formation of PDEs))
    By Elimination of Arbitrary Constants
      - Given z = f(x, y, a, b)
      - Partially differentiate w.r.t x and y
      - Create a system of equations
      - Algebraically eliminate constants 'a' and 'b'
    By Elimination of Arbitrary Functions
      - Given z = F(u(x,y)) or Φ(u,v) = 0
      - Use the Chain Rule for partial differentiation
      - Eliminate the arbitrary function F (or F')
      - Often results in a first-order linear PDE (Lagrange's form)
```

---
### Formation of Partial Differential Equations
#pde-formation #mathematical-modeling

> A **Partial Differential Equation (PDE)** is an equation involving partial derivatives of a dependent variable with respect to two or more independent variables. PDEs are fundamental to science and engineering as they describe phenomena like wave propagation, heat diffusion, and fluid flow. Mathematically, a PDE can be formed either by **eliminating arbitrary constants** or by **eliminating arbitrary functions** from a given relation.

*Standard Notation*: For a function $z(x, y)$, it is common to use $p = \frac{\partial z}{\partial x}$ and $q = \frac{\partial z}{\partial y}$.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe 
    src="https://www.youtube.com/embed/ly4S0oi3Yz8?start=0"
    style="position: absolute; top:0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

---
#### 1. Formation by Elimination of Arbitrary Constants
#pde-formation #arbitrary-constants

This method involves starting with a general solution that contains arbitrary constants and deriving a PDE that is independent of those constants.

**Procedure**:
1. Differentiate the given relation partially with respect to the independent variables (e.g., $x$ and $y$).
2. Repeat the differentiation process as many times as necessary to get enough equations.
3. Use the system of equations (the original and the differentiated ones) to algebraically eliminate the arbitrary constants.

##### Example
Form a PDE by eliminating the constants $a$ and $b$ from $z = ax + by + ab$.

1. **Differentiate with respect to x**:
    $$ \frac{\partial z}{\partial x} = p = a $$
2. **Differentiate with respect to y**:
    $$ \frac{\partial z}{\partial y} = q = b $$
3. **Eliminate the constants**: We have found expressions for $a$ and $b$ directly. Substitute them back into the original equation.
    $$ z = (p)x + (q)y + (p)(q) $$
The resulting PDE is:
$$\boxed{\quad z = px + qy + pq \quad}$$

---
#### 2. Formation by Elimination of Arbitrary Functions
#pde-formation #arbitrary-functions #chain-rule

This method is used when the relation involves an arbitrary (unspecified) function. The goal is to find a differential relationship that holds true regardless of the specific form of the function.

**Procedure**:
1. Differentiate the given relation partially with respect to the independent variables.
2. The [[Chain Rule]] is almost always required in this process.
3. Algebraically eliminate the arbitrary function and its derivatives from the resulting system of equations.

##### Example
Form a PDE from the relation $z = f(x^2 + y^2)$.

1. Let $u = x^2 + y^2$. The relation is $z = f(u)$.
2. **Differentiate with respect to x** (using the Chain Rule):
    $$ p = \frac{\partial z}{\partial x} = \frac{df}{du} \cdot \frac{\partial u}{\partial x} = f'(u) \cdot (2x) $$
3. **Differentiate with respect to y** (using the Chain Rule):
    $$ q = \frac{\partial z}{\partial y} = \frac{df}{du} \cdot \frac{\partial u}{\partial y} = f'(u) \cdot (2y) $$
4. **Eliminate the arbitrary function** $f'(u)$:
    From the first equation, $f'(u) = \frac{p}{2x}$.
    From the second equation, $f'(u) = \frac{q}{2y}$.
    Equating the two expressions for $f'(u)$:
    $$ \frac{p}{2x} = \frac{q}{2y} \implies py = qx $$
The resulting PDE is:
$$\boxed{\quad py - qx = 0 \quad}$$
This is a first-order linear PDE of the form $Pp + Qq = R$, known as [[Solution of First-Order PDEs (Lagrange's Method)|Lagrange's linear equation]].

---
### Physical Interpretation

* **Eliminating Constants**: Corresponds to finding a general law for a family of solutions. For example, the solution $z=(x-a)^2+(y-b)^2$ represents paraboloids with different vertices $(a,b)$. The PDE $4z=p^2+q^2$ is the property shared by all of them.
* **Eliminating Functions**: This is more closely related to physical modeling. The arbitrary function often represents an initial wave shape or temperature profile. The resulting PDE (e.g., the Wave Equation) describes how *any* such profile propagates or evolves over time, independent of its specific initial shape.

---
### Related Concepts
#pde/related-concepts

> [[Partial Differential Equations (PDEs)]]

[[Partial Derivatives]]
[[Solution of First-Order PDEs (Lagrange's Method)]]
[[The Wave Equation]]
[[The Heat Equation]]
