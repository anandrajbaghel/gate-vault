---
tags:
  - vector-calculus
  - calculus
  - fundamental-theorems
  - surface-integrals
  - triple-integrals
  - divergence-theorem
  - engineering-math
created: 2025-09-09
aliases:
  - Gauss's Theorem
  - Divergence Theorem
subject: "[[Mathematics]]"
parent:
  - Vector Calculus
---
### Gauss's Divergence Theorem
#divergence-theorem #vector-calculus #fundamental-theorems #flux

> The **Divergence Theorem**, also known as Gauss's Theorem, is a cornerstone of vector calculus. It establishes a profound relationship between the total **flux** of a vector field through a closed surface and the [[Vector Differential Operators|divergence]] of the field within the volume enclosed by that surface. Intuitively, it states that the net outward flow from a region is equal to the sum of all the sources and sinks inside it.

The theorem is the three-dimensional generalization of the flux form of [[Green's Theorem]].

#### The Theorem Statement
#divergence-theorem/formula

Let $E$ be a solid region in $\mathbb{R}^3$ bounded by a closed, piecewise-smooth surface $S$. Let the surface $S$ be oriented with a positive (outward-pointing) normal vector. Let $\mathbf{F}$ be a vector field whose components have continuous partial derivatives in an open region containing $E$. Then:
$$\boxed{\quad \unicode{x222F} _S \mathbf{F} \cdot d\mathbf{S} = \iiint_E (\nabla \cdot \mathbf{F}) \, dV \quad}$$
Where:
* The left side is a [[surface integrals|surface integral]] representing the total flux of the field $\mathbf{F}$ through the closed surface $S$.
* The right side is a [[Triple Integrals|triple integral]] of the divergence of $\mathbf{F}$ over the solid volume $E$.

---
#### Intuitive Meaning
#flux #source-sink

Imagine a fluid flowing with a velocity field $\mathbf{F}$.
* The **divergence**, $\nabla \cdot \mathbf{F}$, at a point represents the "source strength" of the fluid at that point. A positive divergence means fluid is being created (a source), and a negative divergence means fluid is being destroyed (a sink).
* The **flux**, $\unicode{x222F} _S \mathbf{F} \cdot d\mathbf{S}$, represents the total net rate of fluid flowing out of the volume $E$ across its boundary surface $S$.

The Divergence Theorem states that the **total net outflow from the volume is equal to the sum of the strengths of all the sources and sinks inside the volume**. If a field is solenoidal (incompressible, $\nabla \cdot \mathbf{F} = 0$) within a region, then the net flux through any closed surface in that region must be zero—whatever flows in must also flow out.

---
#### Applications
#divergence-theorem/applications

1.  **Simplifying Flux Integrals**: The theorem is a powerful computational tool. It allows us to convert a surface integral, which might involve parameterizing several complex surfaces, into a single triple integral over a simpler solid region. This is particularly useful if the divergence of the field is a simple function (e.g., a constant or zero).

2.  **Electromagnetism (Gauss's Law)**: The theorem is the mathematical foundation for Gauss's Law for electricity, one of [[Gauss's Law - Maxwell's equations|Maxwell's Equations]]. It relates the total electric flux $\unicode{x222F} \mathbf{E} \cdot d\mathbf{S}$ through a closed surface to the total charge enclosed, $Q_{enc}$. The differential form, $\nabla \cdot \mathbf{E} = \rho / \epsilon_0$, is derived directly from the integral form using the Divergence Theorem.

3.  **Fluid Dynamics and Conservation Laws**: It is used to derive the **continuity equation**, which expresses the conservation of mass. The theorem provides a general framework for any conservation law, stating that the rate of decrease of a quantity in a volume is equal to the net flux of that quantity across its boundary.

---
### Related Concepts
#related-concepts

> [[Green's Theorem]] (The 2D special case of the Divergence Theorem)

[[Stokes' Theorem]]
[[Surface Integrals]]
[[Triple Integrals]]
[[Vector Differential Operators]]
[[Electromagnetic Fields]]