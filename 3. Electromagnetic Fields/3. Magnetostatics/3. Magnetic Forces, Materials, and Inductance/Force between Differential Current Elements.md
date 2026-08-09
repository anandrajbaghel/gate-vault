---
tags:
  - magnetostatics
  - magnetic-force
  - ampere-force
  - current-elements
  - electromagnetic-fields
created: 2025-10-17
aliases:
  - Ampere's Force Law
  - Force between Wires
subject: "[[Electromagnetic Fields]]"
parent:
  - Magnetostatics
modified: 2026-08-04T09:42:30
---
### Force between Differential Current Elements
#magnetostatics/force #ampere-force-law

> Just as static charges exert forces on each other ([[Coulomb's Law]]), steady currents also exert forces on one another. **Ampere's Force Law** is the fundamental principle that quantifies the force between two differential current elements. It is a combined application of the [[Biot-Savart's Law|Biot-Savart Law]] and the [[Lorentz Force Equation]].

The interaction can be understood as a two-step process:
1.  One current element ($I_2 d\vec{l}_2$) creates a magnetic field ($d\vec{B}_2$) at all points in space.
2.  This magnetic field exerts a force ($d(d\vec{F}_1)$) on the other current element ($I_1 d\vec{l}_1$).

---
#### The Fundamental Law
#magnetic-force/law

Consider two differential current elements, $I_1 d\vec{l}_1$ and $I_2 d\vec{l}_2$.
The differential magnetic field $d\vec{B}_2$ produced by element 2 at the location of element 1 is given by Biot-Savart's Law:
$$d\vec{B}_2 = \frac{\mu I_2}{4\pi} \frac{d\vec{l}_2 \times \hat{a}_{R21}}{R_{21}^2}$$
where $\vec{R}_{21}$ is the vector from element 2 to element 1.

The force exerted by this field on element 1 is given by the law for the [[Force on a Differential Current Element]]:
$$d(d\vec{F}_1) = I_1 d\vec{l}_1 \times d\vec{B}_2$$
Combining these two expressions gives the force on element 1 due to element 2:
$$\boxed{\quad d(d\vec{F}_1) = \frac{\mu I_1 I_2}{4\pi} \frac{d\vec{l}_1 \times (d\vec{l}_2 \times \hat{a}_{R21})}{R_{21}^2} \quad}$$
The total force $\vec{F}_1$ on a complete current loop $L_1$ due to a second loop $L_2$ is found by integrating this expression over both loops:
$$\vec{F}_1 = \frac{\mu I_1 I_2}{4\pi} \oint_{L1} \oint_{L2} \frac{d\vec{l}_1 \times (d\vec{l}_2 \times \hat{a}_{R21})}{R_{21}^2}$$
For complete closed loops, Newton's third law holds: $\vec{F}_1 = -\vec{F}_2$.

---
#### Application: Force Between Two Parallel Infinite Conductors
#force-between-wires #parallel-wires

This is a classic and very important application of the force law. Consider two infinitely long, parallel conductors separated by a distance $d$, carrying currents $I_1$ and $I_2$.

1.  **Field from Wire 1 at Wire 2**: Wire 1 creates a magnetic field $\vec{B}_1$ at the location of wire 2. From [[Ampere's Circuital Law|Ampere's Law]], the magnitude of this field is:
    $$B_1 = \frac{\mu I_1}{2\pi d}$$
    The direction of $\vec{B}_1$ is determined by the right-hand rule.

2.  **Force on Wire 2**: The field $\vec{B}_1$ is uniform along the length of wire 2 and perpendicular to the current $I_2$. The force on a segment of length $L$ of wire 2 is:
    $$\begin{align}
    \vec{F}_2 &= I_2 (\vec{L} \times \vec{B}_1) \\
    F_2 &= I_2 L B_1 \sin(90^\circ) \\
    &= I_2 L \left(\frac{\mu I_1}{2\pi d}\right)
    \end{align}$$

3.  **Force per Unit Length**: The force per unit length on wire 2 is:
    $$\boxed{\quad \frac{F}{L} = \frac{\mu I_1 I_2}{2\pi d} \quad}$$

**Direction of the Force**:
-   **Attraction**: If the currents $I_1$ and $I_2$ are in the **same direction**, the force is attractive, pulling the wires together.
-   **Repulsion**: If the currents are in **opposite directions**, the force is repulsive, pushing the wires apart.

This result is fundamental and is used to provide the official SI definition of the Ampere.

---
### Related Concepts
#topic/related-concepts

> [[Force on a Differential Current Element]]

[[Biot-Savart's Law]]
[[Lorentz Force Equation]]
[[Ampere's Circuital Law]]
[[Inductance and Mutual Inductance]]
[[Magnetic Field of Finite and Infinite Conductors]]
[[Magnetic Flux Density (B)]]