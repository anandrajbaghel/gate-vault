---
tags:
  - control-systems
  - root-locus
  - stability-analysis
  - system-dynamics
created: 2025-10-17
aliases:
  - Breakaway points
  - Break-in points
  - Root Locus Break points
  - "Example : Breakaway and Break-in Points"
subject: "[[Control Systems]]"
parent:
  - "[[Rules for Constructing the Root Locus|Construction of Root Locus]]"
modified: 2026-08-04T09:14:51
---
### Breakaway and Break-in Points
#control-systems/root-locus #breakaway-points

> ==**Breakaway** and **break-in points** are specific locations on the real axis of the $s$-plane where branches of the root locus either depart from or arrive at the real axis.== They signify points where the closed-loop poles transition between being real and distinct to becoming complex conjugates (breakaway) or vice versa (break-in).

-  **Breakaway Point:** This is a point on the real axis where two or more root locus branches leave the real axis and enter the complex plane. ==This typically occurs on a locus segment that exists **between two adjacent open-loop poles**.==
^breakaway-point

- **Break-in Point:** This is a point on the real axis where two or more branches enter the real axis from the complex plane. ==This typically occurs on a locus segment that exists **between two adjacent open-loop zeros**.==
^break-in-point

---
#### The Condition for Break Points
#root-locus/break-points-condition

As the gain $K$ is varied, the closed-loop poles move along the locus. At a [[#^breakaway-point|breakaway]] or [[#^break-in-point|break-in point]], multiple roots of the characteristic equation are located at the same point. This corresponds to a point on the real axis where the gain $K$ is at a local maximum (for breakaway) or a local minimum (for break-in).

==The condition to find these points is that the rate of change of gain with respect to the pole location $s$ is zero.== $$\boxed{\quad \frac{dK}{ds} = 0 \quad}$$

---
#### Calculation Procedure
#root-locus/break-points-calculation

To find the breakaway and break-in points for a given [[Open-Loop Transfer Function (OLTF)|open-loop transfer function]] $G(s)H(s)$:

1.  **Formulate an expression for K:** From the characteristic equation, $1 + G(s)H(s) = 0$, isolate the gain $K$.
    $$K = \frac{-1}{G(s)H(s)}$$
    (Assuming $G(s)H(s) = K \cdot P(s)$, then $K = -1/P(s)$).

2.  **Differentiate with respect to s:** Calculate the derivative of the expression for $K$ with respect to $s$.
    $$\frac{dK}{ds}$$

3.  **Solve for s:** Set the derivative equal to zero and solve for the roots of the resulting equation.
    $$\frac{dK}{ds} = 0$$

> [!failure] Not final yet
> The solutions to this equation are the **candidates** for the break points.

4.  **Validate the roots:** Not all solutions of $\frac{dK}{ds} = 0$ are valid break points. A valid break point must satisfy two conditions:
    1. ==It must be **real**.==
    2. ==It must lie on a segment of the **real axis that is part of the root locus**== (i.e., [[rules for constructing the root locus#Rule 4 Locus on the Real Axis|it must have an odd number of real poles and zeros to its right]]).

> See [[ee_2017(2)#^q34]]
> & [[ee_2016(2)#^q52]]
> & [[ee_2015(2)#^q64]]
^calculation-question

---
##### Example
#example 

Find the breakaway point for the system with open-loop transfer function: $G(s)H(s) = \frac{K}{s(s+4)}$.

1.  **Find K(s):**
    $1 + \frac{K}{s(s+4)} = 0 \implies s(s+4) + K = 0 \implies K = -s(s+4) = -s^2 - 4s$.

2.  **Differentiate:**
    $\frac{dK}{ds} = -2s - 4$.

3.  **Solve for s:**
    $-2s - 4 = 0 \implies s = -2$.

4.  **Validate:**
    1. The root $s=-2$ is real.
    2. The ==open-loop poles== are at $s=0$ and $s=-4$. The real axis segment between -4 and 0 is part of the root locus (any point here has one pole to its right).
    3. Since $s=-2$ lies on this segment, it is a **valid breakaway point**.

The two branches starting from the poles at 0 and -4 move towards each other, meet at $s=-2$, and then break away from the real axis to become complex conjugates.

---
### Related Concepts
#control-systems/related-concepts

> [[Rules for Constructing the Root Locus]]

[[Angle of Departure and Angle of Arrival]]
[[Centroid and Asymptotes]]
[[Concept and Definition of Root Locus]]