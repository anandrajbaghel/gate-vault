---
tags:
  - electrostatics
  - potential-theory
  - pde
  - uniqueness
  - electromagnetic-fields
created: 2025-10-17
aliases:
  - Uniqueness Theorem for Electrostatics
subject: "[[Electromagnetic Fields]]"
parent:
  - Electrostatics
modified: 2026-08-04T10:46:27
---
### Uniqueness Theorem
#electrostatics/uniqueness-theorem #potential-theory

> The **Uniqueness Theorem** is a powerful principle in electrostatics which states that if a solution to Poisson's (or Laplace's) equation can be found that satisfies the given boundary conditions for a region, then that solution is the only possible solution.

This theorem is immensely practical because it validates any method—no matter how unorthodox—used to find a potential field. If the resulting potential field satisfies the governing differential equation (Poisson's/Laplace's) and matches the specified potential or field values on the boundaries of the problem, we are guaranteed that we have found the correct and only solution.

---
#### Formal Statement
#uniqueness-theorem/statement
A solution $V$ to Poisson's equation, $\nabla^2 V = -\rho_v/\varepsilon$, within a volume $v$, is uniquely determined if the potential $V$ (a **Dirichlet condition**) or its normal derivative $\partial V/\partial n$ (a **Neumann condition**) is specified on the boundary surface $S$ enclosing the volume.

---
#### Importance and Application
#uniqueness-theorem/application

The primary importance of the Uniqueness Theorem is that it provides justification for solution techniques that might otherwise seem like "tricks."

##### Justification for the Method of Images
#method-of-images
The **[[Method of Images]]** is the most prominent application of this theorem. In this method, we solve a problem (e.g., a point charge near a conducting plane) by "guessing" a configuration of fictitious image charges placed outside the region of interest.
1.  We propose an arrangement of image charges.
2.  We calculate the potential field produced by the original charges *and* the fictitious image charges.
3.  We check if this calculated potential satisfies the boundary conditions of the original problem (e.g., $V=0$ on the conducting plane).
4.  If it does, the Uniqueness Theorem guarantees that the potential we found is the correct and only solution for the region of interest (the space where the image charges are not located).

Without the Uniqueness Theorem, we would have no way of knowing if the solution obtained via the Method of Images was the correct one, or just one of many possibilities.

##### Solving Laplace's Equation
When we solve Laplace's equation ($\nabla^2 V = 0$) using techniques like separation of variables, we typically find a general solution with several unknown constants. We then use the boundary conditions of the specific problem to solve for these constants. The Uniqueness Theorem assures us that once we have found the constants that make our solution fit the boundaries, we have found the one and only correct solution.

---
#### Conceptual Proof Outline
The proof relies on assuming there are two different solutions, $V_1$ and $V_2$, to the same problem and then showing their difference must be zero.
1.  Assume $V_1$ and $V_2$ both satisfy $\nabla^2 V = -\rho_v/\varepsilon$ and the same boundary conditions.
2.  Define the difference potential: $V_d = V_1 - V_2$.
3.  $V_d$ must satisfy Laplace's equation: $\nabla^2 V_d = \nabla^2(V_1-V_2) = (-\rho_v/\varepsilon) - (-\rho_v/\varepsilon) = 0$.
4.  On the boundary, since $V_1$ and $V_2$ are equal (same B.C.s), their difference $V_d$ is zero.
5.  A key property of solutions to Laplace's equation (harmonic functions) is that they cannot have local maxima or minima within the region; the extreme values must lie on the boundary.
6.  Since $V_d=0$ everywhere on the boundary, its maximum and minimum are both 0. This forces $V_d=0$ everywhere inside the region as well.
7.  Therefore, $V_1 - V_2 = 0 \implies V_1 = V_2$. The solution is unique.

---
### Related Concepts
#topic/related-concepts

> [[Poisson's Equation]]
> [[Laplace's Equation]]
> [[Method of Images]]

[[Boundary Conditions for Electrostatic Fields]]
[[Electric Potential and Potential Difference (V)]]
[[Partial Differential Equations (PDEs)]]