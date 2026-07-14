---
tags:
  - vector-calculus
  - multivariable-calculus
  - line-integrals
  - work
  - circulation
  - engineering-math
created: 2025-09-09
aliases:
  - Line Integral
  - Path Integral
  - Work Integral
  - Fundamental Theorem for Line Integrals
subject: "[[Mathematics]]"
parent: Vector Calculus
---
### Line Integrals
#line-integrals #vector-calculus #work

> ==A **line integral** generalizes the concept of a [[Definite and Improper Integrals|definite integral]] to integration along a curve in two or three-dimensional space.== ==Instead of integrating over an interval on an axis, we integrate over a path.== There are two main types: line integrals of scalar fields and line integrals of vector fields, with the latter being crucial for calculating concepts like work and circulation.

==The key to evaluating any line integral is to **[[parameterize]]** the curve $C$ with a vector function $\mathbf{r}(t)$ for $a \le t \le b$, and then convert the entire integral into a standard definite integral with respect to the parameter $t$.==

> [!prerequisite] Exactness Test for 2D Vector Fields
> Before parameterizing a vector line integral $\int_C P\,dx + Q\,dy$, always check if the field is conservative.
> 
> A 2D field $\mathbf{F} = \langle P, Q \rangle$ is conservative (on a simply connected domain) if:
> $$\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$$
> 
> If this holds true, you can find a potential function $f(x,y)$ and use the [[#🔥Fundamental Theorem for Line Integrals]] instead of brute-force parameterization.

> [!memory] Mental Model — What a Line Integral Really Does
> A line integral **accumulates contributions only along a curve**.
> 
> - You are **not integrating over area or volume**
> - The field is sampled **only on the path**
> - Each tiny segment contributes:
>   - **Scalar field** → value × length ($f\,ds$)
>   - **Vector field** → force-along-motion ($\vec F \cdot d\vec r$)

> [!examtip]- Scalar vs Vector Line Integral — Instant Recognition
> - If integrand has **$ds$** → scalar field (mass, charge, fence, curtain)
> - If integrand has **$\cdot d\vec r$** → vector field (work, circulation)
> - No dot product → no direction filtering
> - Dot product present → only tangential component contributes

---
#### 1. Line Integral of a Scalar Field (w.r.t. Arc Length)
#scalar-line-integral

This type of integral sums up the values of a scalar function $f(x,y,z)$ along a curve $C$.
##### Physical Interpretation

If $f$ is a [[linear density function]], this integral gives the total mass of a wire in the shape of $C$. It can also represent the area of a "curtain" or "fence" whose base is the curve $C$ and whose height at any point is $f$.

|                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The line integral over a scalar field $f$ can be thought of as the area under the curve $C$ along a surface $z=f(x,y)$, described by the field. The curve end points are at $(x,y)=\mathbf{r}(a)$ and $\mathbf{r}(b)$. |
| ![[Line Integral of Scalar Field.gif]]                                                                                                                                                                                 |
|                                                                                                                                                                                                                        |

##### Formula and Evaluation

The integral is written as $\int_C f(x,y,z) \, ds$. To evaluate it, we use the arc length element $ds = |\mathbf{r}'(t)| \, dt$.
$$\boxed{\quad \int_C f \, ds = \int_a^b f(\mathbf{r}(t)) \, |\mathbf{r}'(t)| \, dt \quad}$$
where $|\mathbf{r}'(t)| = \sqrt{(x'(t))^2 + (y'(t))^2 + (z'(t))^2}$.

> [!mistake] Do NOT Treat $ds$ Like $dx$
> $ds$ represents **actual curved length**, not horizontal or vertical change.
> 
> $$ ds = |\vec r'(t)|\,dt = \sqrt{(dx)^2+(dy)^2+(dz)^2} $$
> 
> Using $dx$ instead of $ds$ silently assumes a straight horizontal path.

---
#### 2. Line Integral of a Vector Field (Work Integral)
#vector-line-integral #work #circulation

This is the more common and important type in physics and engineering. It integrates the component of a vector field $\mathbf{F}$ that is tangent to the curve $C$.
##### Physical Interpretation

* **Work**: If $\mathbf{F}$ is a force field, the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ represents the **work** done by the field in moving a particle along the curve $C$.
* **Circulation/Flow**: If $\mathbf{F}$ is a velocity field of a fluid, the integral represents the net flow or **circulation** of the fluid along the curve. If the curve is closed, it measures the tendency of the fluid to rotate around the loop.


|                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The trajectory of a particle (in red) along a curve inside a vector field. Starting from $a$, the particle traces the path $C$ along the vector field $F$. The dot product (green line) of its tangent vector (red arrow) and the field vector (blue arrow) defines an area under a curve, which is equivalent to the path's line integral. (Click on image for a detailed description.) |
| ![[Line Integral of Vector Field.gif]]                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                                          |


> [!important]- Why the Dot Product Appears in Work Integrals
> $$ dW = \vec F \cdot d\vec r = |\vec F||d\vec r|\cos\theta $$
> 
> - Only the **component of force along motion** does work
> - Perpendicular force contributes **zero**
> - This explains:
>   - No work by centripetal force
>   - No work by magnetic force

##### Formula and Evaluation

The integral is written as $\int_C \mathbf{F} \cdot d\mathbf{r}$. To evaluate, we use the differential displacement vector $d\mathbf{r} = \mathbf{r}'(t) \, dt$.
$$\boxed{\quad \int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt \quad}$$

> [!mistake] Direction Matters
> Reversing the direction of traversal of $C$ changes the sign of  
> $$\int_C \vec F \cdot d\vec r$$
> 
> Always identify **start → end** from the diagram.

This is often written in differential form as $$\int_C P\,dx + Q\,dy + R\,dz$$, where $\mathbf{F} = \langle P, Q, R \rangle$.

> [!examtip] Shortcut for Plane Curves
> For $y=y(x)$ in 2D:
> $$\int_C P\,dx + Q\,dy \;\Rightarrow\; dy=\frac{dy}{dx}\,dx$$
> 
> Avoid full parameterization when limits in $x$ are clear.

> [!Hint] Parameterization Is the Bridge
> Geometry → calculus happens ONLY via parameterization.
> 
> $$ x=x(t),\ y=y(t),\ z=z(t) $$
> 
> Without $\vec r(t)$:
> - No $ds$
> - No $d\vec r$
> - No computable line integral

---
#### 🔥Fundamental Theorem for Line Integrals
#path-independence #conservative-fields

==This theorem is a powerful tool for evaluating line integrals of **conservative vector fields**.== A vector field $\mathbf{F}$ is conservative if it is the gradient of some scalar [[potential function]] $f$ (i.e., $\mathbf{F} = \nabla f$).

> [!examtip] Path Dependence Trigger
> - If $\nabla \times \vec F = 0$ → conservative → path independent
> - If endpoints given → try potential function first
> - Closed loop + conservative field → integral is **zero**
> 
> > [!mistake] Exam Trap — Curl Zero Is NOT Enough
> > Even if $\nabla \times \vec F = 0$:
> > - Domain must be **simply connected**
> > - Holes / excluded points → theorem may FAIL
> > 
> > GATE often hides this in wording.


> [!fail] Non-Conservative Field Alert
> If $\nabla \times \vec F \neq 0$:
> - No potential function exists
> - FTC for line integrals **cannot** be used
> - Integral depends on the **path shape**

> [!definition]
> If $\mathbf{F} = \nabla f$ is a [[conservative vector field]], then the line integral of $\mathbf{F}$ depends only on the start and end points of the curve $C$ (from point A to point B), not on the path taken.
> $$\boxed{\quad \int_C \mathbf{F} \cdot d\mathbf{r} = \int_C \nabla f \cdot d\mathbf{r} = f(B) - f(A) \quad}$$

A key consequence is that the line integral of a conservative field around any **closed loop** is zero.
$$ \oint_C \mathbf{F} \cdot d\mathbf{r} = 0 $$
A field is conservative on a simply connected domain if and only if its curl is zero ($\nabla \times \mathbf{F} = \mathbf{0}$).

> [!pyq]- PYQ : 2019, 2018
> ![[ee_2019#^q18]]
> 
> ---
> ![[ee_2018#^q42]]

---
#### Green's Theorem
#greens-theorem

[[Green's Theorem]] relates a line integral around a simple, closed curve $C$ in the plane to a double integral over the plane region $D$ that it encloses. It is the 2D version of [[Stokes' Theorem]].
Let $C$ be a positively oriented (counter-clockwise) simple closed curve in the plane and let $D$ be the region bounded by $C$. If $P$ and $Q$ have continuous partial derivatives on an open region containing $D$, then:
$$\boxed{\quad \oint_C P\,dx + Q\,dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dA \quad}$$
The term $(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y})$ is the scalar component of the curl of the 2D vector field $\mathbf{F} = \langle P, Q \rangle$.

> [!examtip] When to Use Green’s Theorem
> Use Green’s Theorem ONLY if:
> - Curve is **closed**
> - Field is **2D**
> - Direct line integral is messy
> 
> Think: “convert circulation → area integral”

---
### Related Concepts
#related-concepts

> [[Vector Fields]]

[[Vector Differential Operators]]
[[Stokes' Theorem]] (The 3D generalization of Green's Theorem)
[[Conservative Fields]]
[[Double Integrals]]