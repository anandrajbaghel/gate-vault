---
tags:
  - electromagnetic-fields
  - maxwells-equations
  - amperes-law
  - gate
created: 2025-10-17
aliases:
  - Ampere's Law Inconsistency
  - Failure of Ampere's Law
subject: "[[Electromagnetic Fields]]"
parent:
  - Displacement Current and Maxwell's Equations
modified: 2026-08-04T09:48:39
---
### Inconsistency of Ampere's Law for Time-Varying Fields
#amperes-law/inconsistency #maxwells-equations #continuity-equation

> **Ampere's Circuital Law** in its original magnetostatic form is fundamentally inconsistent with the principle of conservation of charge for time-varying fields. This inconsistency was a major theoretical problem that led James Clerk Maxwell to introduce the concept of **displacement current**, thereby completing his set of equations for electromagnetism.

#### The Mathematical Contradiction
#vector-calculus #divergence

Ampere's Law in its original point form is:
$$\nabla \times \mathbf{H} = \mathbf{J}$$
A fundamental theorem of vector calculus states that the divergence of the curl of any vector field is identically zero. Applying the divergence operator to both sides of Ampere's Law gives:
$$\nabla \cdot (\nabla \times \mathbf{H}) \equiv 0$$
This implies that for Ampere's Law to hold, the divergence of the current density must also be zero:
$$\nabla \cdot \mathbf{J} = 0$$
This condition means that current must flow in continuous, unbroken loops; it has no sources or sinks.

---
#### Conflict with the Equation of Continuity
#equation-of-continuity #charge-conservation

The principle of conservation of charge is expressed mathematically by the **Equation of Continuity**:
$$\boxed{\quad \nabla \cdot \mathbf{J} = -\frac{\partial \rho_v}{\partial t} \quad}$$
where $\rho_v$ is the volume charge density. This equation states that the net outflow of current from a volume (the divergence of $\mathbf{J}$) must be equal to the rate of decrease of charge within that volume.

The conflict is now clear:
- Ampere's Law requires $\nabla \cdot \mathbf{J} = 0$.
- The Equation of Continuity allows $\nabla \cdot \mathbf{J} \neq 0$ whenever the charge density at a point is changing with time (i.e., for any non-steady current).

Therefore, the original form of Ampere's Law is only valid for **magnetostatics**, where all currents are steady and $\partial \rho_v / \partial t = 0$. It fails for time-varying fields.

---
#### The Charging Capacitor Paradox
#capacitor #thought-experiment

This classic thought experiment vividly illustrates the failure of Ampere's Law. Consider a parallel plate capacitor being charged by a time-varying current $I(t)$. We apply the integral form of Ampere's Law, $\oint_L \mathbf{H} \cdot d\mathbf{l} = I_{enc}$, to a circular loop $L$ around the connecting wire.

**Case 1: Flat Surface $S_1$**
- We choose a flat, disc-like surface $S_1$ bounded by the loop $L$. This surface is pierced by the wire.
- The enclosed conduction current is $I_{enc} = I(t)$.
- Ampere's Law gives: $\oint_L \mathbf{H} \cdot d\mathbf{l} = I(t)$.

**Case 2: Balloon-like Surface $S_2$**
- We choose a different surface $S_2$ that is also bounded by the same loop $L$, but this surface passes between the capacitor plates, avoiding the wire.
- Since no charge carriers (conduction current) flow through the dielectric gap of the capacitor, the enclosed conduction current is $I_{enc} = 0$.
- Ampere's Law gives: $\oint_L \mathbf{H} \cdot d\mathbf{l} = 0$.

**The Paradox**: The line integral $\oint_L \mathbf{H} \cdot d\mathbf{l}$ cannot simultaneously be equal to $I(t)$ and $0$. The value of the line integral should only depend on the boundary loop $L$, not on the arbitrary surface $S$ chosen. This contradiction demonstrates the law's failure.

---
#### The Resolution
#maxwells-correction
The paradox is resolved by Maxwell's addition of the **displacement current** term ($\partial \mathbf{D} / \partial t$) to Ampere's Law. This new term accounts for the changing electric field in the capacitor gap, making the "total current" continuous and ensuring the law gives a consistent result regardless of the surface chosen.

---
### Related Concepts
#topic/related-concepts

> [[Concept of Displacement Current (Jd)]]

[[Ampere's Circuital Law]]
[[Equation of Continuity]]
[[Maxwell's Equations in Final Form]]
[[Divergence of a Vector Field]]
[[Curl of a Vector Field]]
[[Gauss's Law]]