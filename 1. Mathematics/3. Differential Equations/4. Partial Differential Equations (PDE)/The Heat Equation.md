---
tags:
  - calculus
  - differential-equations
  - pde
  - mathematical-physics
  - heat-transfer
  - engineering-math
created: 2025-09-15
aliases:
  - Heat Equation
  - Diffusion Equation
  - "Video : Solving Heat Equation (3Blue1Brown)"
subject: "[[Mathematics]]"
parent:
  - Partial Differential Equations (PDEs)
confidence: 10
youtube:
  - ToIXSwZ1pJU
formula:
  - "Heat Equation (PDEs) : $$\\quad \\frac{\\partial u}{\\partial t} = k \\frac{\\partial^2 u}{\\partial x^2} \\quad \\text{or} \\quad u_t = k u_{xx}$$"
---
 ### The Heat Equation
#heat-equation #pde #diffusion #transient-analysis

> ==The **Heat Equation** is a second-order linear partial differential equation that describes how the distribution of a quantity, such as heat, changes over time in a given region.== It is a fundamental equation for all diffusion-like processes. Unlike the [[The Wave Equation|wave equation]] which describes propagation, the Heat Equation describes a **smoothing and decaying** process. ==Its solutions are characterized by a transient part that dies out, leaving a final steady-state distribution.==

#### Mathematical Formulation
#heat-equation/formulation

The standard form of ==the one-dimensional heat equation== for a function $u(x,t)$ is:
$$\boxed{\quad \frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2} \quad \text{or} \quad u_t = k u_{xx} \quad}$$
* ==$u(x,t)$ is the temperature at position $x$ and time $t$.==
* ==$k$ is the **thermal diffusivity** of the material, a constant that determines how quickly heat diffuses.==

**Physical Interpretation**: The equation states that the rate of change of temperature at a point ($u_t$) is directly proportional to the curvature (second spatial derivative, $u_{xx}$) of the temperature profile at that point.
*   If a point is a local maximum (like a hot spot, $u_{xx} < 0$), its temperature will decrease ($u_t < 0$).
*   If a point is a local minimum (a cold spot, $u_{xx} > 0$), its temperature will increase ($u_t > 0$). This is what causes the temperature profile to "smooth out" over time.

In three dimensions, the equation is written using the Laplacian operator: $u_t = k \nabla^2 u$.

> [!pyq]- PYQ : 2019
> ![[ee_2019#^q3]]

---
#### Solution using Separation of Variables
#separation-of-variables

For a finite domain (e.g., a rod of length L), the [[Method of Separation of Variables|separation of variables]] is the standard solution technique.
1.  Assume a solution of the form $u(x, t) = X(x)T(t)$.
2.  Substituting into the PDE and separating variables leads to two ODEs:
    *   $T'(t) + k\lambda^2 T(t) = 0$
    *   $X''(x) + \lambda^2 X(x) = 0$
3.  The crucial result comes from the time-dependent ODE. Its solution is:
    $$\boxed{\quad T(t) = C e^{-k\lambda^2 t} \quad}$$
    This shows that for any non-trivial solution, the time-dependent part is a **decaying exponential**. This confirms the dissipative, smoothing nature of the heat equation; all initial variations (transients) will eventually die out.
4.  The general solution is constructed as a [[Fourier Series Representation of Periodic Functions|Fourier series]] of these decaying modes, with coefficients determined by the initial temperature distribution.

---
#### Steady-State and Transient Solutions
#steady-state #transient-response

The complete solution to a heat conduction problem is often expressed as the sum of two parts:
$$ u(x,t) = u_{ss}(x) + u_{tr}(x,t) $$
1.  **Steady-State Solution ($u_{ss}(x)$)**: This is the final temperature distribution after an infinite amount of time has passed. In this state, the temperature no longer changes with time, so $\frac{\partial u}{\partial t} = 0$. The heat equation simplifies to:
    $$ k \frac{d^2 u}{dx^2} = 0 \quad \implies \quad \frac{d^2 u}{dx^2} = 0 $$
    This is [[Laplace's Equation]] in one dimension. Its solution is a straight line $u_{ss}(x) = C_1x + C_2$, where the constants are determined by the boundary conditions.

2.  **Transient Solution ($u_{tr}(x,t)$)**: This is the part of the solution that decays to zero as $t \to \infty$. It describes how the initial temperature distribution evolves into the final steady-state profile. This is the part found using separation of variables with homogeneous boundary conditions.

---
#### Applications in Electrical Engineering

*   **Thermal Management**: The primary application is modeling heat dissipation due to **Joule heating** ($P=I^2R$) in electronic components like resistors, transformer windings, and especially power semiconductors (MOSFETs, IGBTs). The heat equation helps in designing effective heat sinks to keep device temperatures within safe operating limits.
*   **Diffusion of Charge Carriers**: The diffusion of minority charge carriers (electrons or holes) in the base of a bipolar junction transistor (BJT) or in a semiconductor diode is governed by the Diffusion Equation, which is mathematically identical to the heat equation.

---
### Related Concepts
#pde/related-concepts

> [[Partial Differential Equations (PDEs)]]

[[Method of Separation of Variables]]
[[Fourier Series Representation of Periodic Functions]]
[[Laplace's Equation]] (The steady-state case)
[[The Wave Equation]] (Hyperbolic, describes propagation vs. Parabolic, describes diffusion)
[[Boundary Value Problems (BVP)]]