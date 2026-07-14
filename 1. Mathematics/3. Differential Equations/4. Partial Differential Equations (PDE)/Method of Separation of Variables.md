---
tags:
  - calculus
  - differential-equations
  - pde
  - pde-solver
  - fourier-series
  - engineering-math
created: 2025-09-15
aliases:
  - Separation of Variables
  - SOV
subject: "[[Mathematics]]"
parent:
  - Partial Differential Equations (PDEs)
---
### Method of Separation of Variables
#separation-of-variables #pde-solver

> The **Method of Separation of Variables** is arguably the most important technique for solving linear homogeneous partial differential equations. The core strategy is to convert a single, difficult PDE involving multiple independent variables into a set of simpler ordinary differential equations (ODEs), each involving only one variable. This method is fundamental for solving the wave, heat, and Laplace equations, which are ubiquitous in electromagnetics and other engineering fields.

#### The Core Principle: Product Solution
The method begins with a crucial assumption: that the solution to the PDE can be expressed as a product of functions, where each function depends on only one of the independent variables.

For a function $u(x,t)$, we assume a solution of the form:
$$\boxed{\quad u(x, t) = X(x) T(t) \quad}$$
where $X(x)$ is a function of $x$ only, and $T(t)$ is a function of $t$ only.

---
#### The General Procedure
#separation-of-variables/procedure

1.  **Assume the Product Form**: Start with the assumption $u(x, t) = X(x) T(t)$.

2.  **Substitute into the PDE**: Differentiate the product form and substitute it into the given PDE.

3.  **Separate the Variables**: Algebraically manipulate the equation so that all terms involving one variable are on one side, and all terms involving the other variable are on the other side.
    For example: $\frac{X''(x)}{X(x)} = \frac{T'(t)}{k T(t)}$.

4.  **Introduce the Separation Constant**: Since the left side depends only on $x$ and the right side depends only on $t$, and they are equal for all $x$ and $t$, both sides must be equal to a constant. This is called the **separation constant** (often denoted as $-\lambda^2$, $\lambda^2$, or $k$).
    $$ \frac{X''}{X} = -\lambda^2 \quad \text{and} \quad \frac{T'}{kT} = -\lambda^2 $$

5.  **Solve the ODEs**: This separation creates two independent ODEs:
    *   $X'' + \lambda^2 X = 0$
    *   $T' + k\lambda^2 T = 0$
    Solve these using standard methods for [[Linear Homogeneous ODEs with Constant Coefficients|linear ODEs]].

6.  **Apply Boundary Conditions (BCs)**: Use the given boundary conditions on the spatial ODE (the one involving $X(x)$). This will restrict the possible values of the separation constant $\lambda$, turning the problem into a [[Boundary Value Problems (BVP)|Boundary Value Problem]]. The allowed values of $\lambda$ are called **eigenvalues**.

7.  **Apply the Principle of Superposition**: The PDE is linear, so a sum of solutions is also a solution. The general solution is an infinite sum of all possible product solutions found in the previous step.
    $$ u(x, t) = \sum_{n=1}^\infty u_n(x,t) = \sum_{n=1}^\infty C_n X_n(x) T_n(t) $$

8.  **Apply Initial Conditions (ICs)**: Use the initial condition(s) to find the values of the constants $C_n$. This final step almost always requires constructing a [[Fourier Series Representation of Periodic Functions|Fourier Series]] of the initial condition function.

---
#### Applicability and Limitations
*   **Works for**: Linear and homogeneous PDEs.
*   **Requires**: The boundary conditions must also be homogeneous. If they are not, other techniques must be used first.
*   **Domain**: The method is most effective for simple geometries like rectangles, circles, or cylinders where the boundaries are constant coordinates.

---
#### Key Applications in Electrical Engineering
*   **[[The Wave Equation]]**: Modeling voltage and current waves on a [[Transmission Lines|transmission line]].
*   **[[The Heat Equation]]**: Modeling heat dissipation in semiconductor devices or windings of a transformer.
*   **[[Laplace's Equation]]**: Finding the electrostatic potential ($V$) in a charge-free region given the potential on the boundaries (e.g., inside a rectangular waveguide or between capacitor plates).

---
### Related Concepts
#pde/related-concepts

> [[Partial Differential Equations (PDEs)]]
> [[Boundary Value Problems (BVP)]]
> [[Fourier Series Representation of Periodic Functions]]
> [[Linear Homogeneous ODEs with Constant Coefficients]]
> [[The Wave Equation]]
> [[The Heat Equation]]
> [[Laplace's Equation]]