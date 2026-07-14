---
tags:
  - calculus
  - differential-equations
  - pde
  - mathematical-physics
  - engineering-math
  - transmission-lines
created: 2025-09-15
aliases:
  - Wave Equation
subject: "[[Mathematics]]"
parent:
  - Partial Differential Equations (PDEs)
formula:
  - "Wave Equation (One Dimensional) (PDEs) : $$\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2} \\quad \\text{or} \\quad u_{tt} = c^2 u_{xx}$$"
  - "Wave Equation (Two Dimensional) (PDEs) : $$\\frac{\\partial^2 u}{\\partial t^2} = c^2\\left( \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} \\right)$$"
---
### The Wave Equation
#wave-equation #pde #transmission-lines #electromagnetic-waves

> ==The **Wave Equation** is a second-order linear partial differential equation that describes the propagation of waves through a medium or vacuum.== It is a cornerstone of physics and engineering, modeling a vast range of phenomena including vibrating strings, sound waves, light waves, and, critically for electrical engineering, the propagation of voltage and current waves along [[Transmission Lines|transmission lines]] and electromagnetic fields in space.

#### The One-Dimensional Wave Equation
#1d-wave-equation

The standard form of the wave equation for a function $u(x,t)$ in one spatial dimension $x$ and time $t$ is:
$$\boxed{\quad \frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2} \quad \text{or} \quad u_{tt} = c^2 u_{xx} \quad}$$
*   $u(x,t)$ represents the displacement or amplitude of the wave at position $x$ and time $t$.
*   $c$ is a positive constant representing the **wave propagation speed**. Its value depends on the physical properties of the medium (e.g., for a transmission line, $c = 1/\sqrt{LC}$).

The equation states that the acceleration of the wave at a point ($u_{tt}$) is proportional to its curvature ($u_{xx}$).

---
#### The Two-Dimensional Wave Equation
#2d-wave-equation

The standard form of the wave equation for a function $u(x,y,t)$ in two spatial dimension $x$, $y$ and time $t$ is:
$$\boxed{\quad \frac{\partial^2 u}{\partial t^2} = c^2\left( \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} \right) \quad}$$

> [!pyq]- PYQ : 2019
> ![[ee_2019#^q3]]

---
#### d'Alembert's Solution (Infinite Domain)
#dalemberts-formula #traveling-waves

For a wave propagating on an infinite or semi-infinite string (i.e., without reflections from boundaries), a general solution was found by d'Alembert.
$$\boxed{\quad u(x, t) = F(x - ct) + G(x + ct) \quad}$$
*   **$F(x - ct)$**: Represents a wave of arbitrary shape $F$ traveling in the **positive x-direction** (forward) with speed $c$.
*   **$G(x + ct)$**: Represents a wave of arbitrary shape $G$ traveling in the **negative x-direction** (backward) with speed $c$.

This elegant solution shows that any solution to the 1D wave equation can be expressed as the superposition of a forward-traveling wave and a backward-traveling wave.

---
#### Solution using Separation of Variables (Finite Domain)
#separation-of-variables #standing-waves

When the wave is confined to a finite interval (e.g., a transmission line of a fixed length with specific boundary conditions), the [[Method of Separation of Variables|separation of variables]] method is used.
This approach typically leads to solutions that are **standing waves**, which are superpositions of sinusoidal waves that do not propagate but oscillate in place. The solution involves:
1.  Assuming a product solution $u(x,t) = X(x)T(t)$.
2.  Separating the PDE into two ODEs for $X(x)$ and $T(t)$.
3.  Solving the ODE for $X(x)$ as a [[Boundary Value Problems (BVP)|boundary value problem]] to find the spatial modes (eigenfunctions).
4.  Constructing the general solution as a [[Fourier Series Representation of Periodic Functions|Fourier series]] of these modes.
5.  Using the initial conditions (initial displacement and velocity) to determine the Fourier coefficients.

---
#### Applications in Electrical Engineering

1.  **Transmission Lines (The Telegrapher's Equations)**:
    For a lossless transmission line, the voltage $v(x,t)$ and current $i(x,t)$ both satisfy the wave equation:
    $$\frac{\partial^2 v}{\partial x^2} = LC \frac{\partial^2 v}{\partial t^2} \quad \text{and} \quad \frac{\partial^2 i}{\partial x^2} = LC \frac{\partial^2 i}{\partial t^2}$$
    Here, the propagation speed is $c = 1/\sqrt{LC}$. This is a direct application of the 1D wave equation, describing how signals travel along cables.

2.  **Electromagnetic Waves**:
    In free space (a region with no charges or currents), [[Maxwell's equations]] can be manipulated to show that the electric field ($\vec{E}$) and magnetic field ($\vec{B}$) each satisfy the three-dimensional wave equation:
    $$\nabla^2 \vec{E} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} \quad \text{and} \quad \nabla^2 \vec{B} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{B}}{\partial t^2}$$
    Here, the propagation speed is $c = 1/\sqrt{\mu_0 \epsilon_0}$, the speed of light. This proves that light is an electromagnetic wave.

---
### Related Concepts
#pde/related-concepts

> [[Partial Differential Equations (PDEs)]]

[[Method of Separation of Variables]]
[[Fourier Series Representation of Periodic Functions]]
[[Transmission Lines]]
[[Electromagnetic Fields]]
[[Maxwell's Equations]]
[[The Heat Equation]]
[[Laplace's Equation]]