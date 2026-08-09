---
tags:
  - control-systems
  - root-locus
  - stability-analysis
  - s-plane
created: 2025-10-14
aliases:
  - Angle Condition
  - Magnitude Condition
  - Root Locus Conditions
subject: "[[Control Systems]]"
parent:
  - "[[Concept and Definition of Root Locus|Root Locus]]"
modified: 2026-08-04T09:09:29
---
### Angle and Magnitude Conditions
#root-locus/conditions #angle-condition #magnitude-condition

> The **Angle and Magnitude Conditions** are the two fundamental mathematical requirements that a point in the s-plane must satisfy to be a part of the root locus. They are derived directly from the characteristic equation, $1 + G(s)H(s) = 0$, which can be rewritten as $G(s)H(s) = -1$. These two conditions separate the complex equation into a phase (angle) requirement and a magnitude requirement.

#### The Angle Condition
#angle-condition

The angle condition is the primary tool used to determine the **shape and location** of the root locus. It checks if a point is a valid candidate for being on the locus.

-   **Derivation:** The complex number $-1$ has an angle that is any odd multiple of $180^\circ$. Therefore, for a point $s$ to be on the root locus, the phase angle of the [[Open-Loop Transfer Function (OLTF)|open-loop transfer function]] $G(s)H(s)$ evaluated at that point must satisfy this condition.
-   **Condition:**
    $$\boxed{\quad \angle G(s)H(s) = (2q + 1)180^\circ \quad \text{for } q = 0, \pm 1, \pm 2, \dots \quad}$$
-   **Formula in terms of Poles and Zeros:**
    Let the open-loop transfer function have zeros at $z_i$ and poles at $p_j$. For a test point $s$, the condition is:
    $$ \sum_{i} \angle(s-z_i) - \sum_{j} \angle(s-p_j) = (2q+1)180^\circ $$
    This means: (Sum of angles from open-loop zeros to $s$) - (Sum of angles from open-loop poles to $s$) = an odd multiple of $180^\circ$.
-   **Purpose:** To test if any given point in the s-plane lies on the root locus. The set of all points that satisfy this condition forms the complete root locus plot. All the [[Rules for Constructing the Root Locus]] are derived from this condition.

---
#### The Magnitude Condition
#magnitude-condition

The magnitude condition is used **after** the locus is drawn to find the specific value of the **gain K** required to place a closed-loop pole at a particular point on the locus.

-   **Derivation:** The complex number $-1$ has a magnitude of 1. Therefore, for a point $s$ that is already known to be on the root locus, the magnitude of the open-loop transfer function must be unity.
-   **Condition:**
    $$\boxed{\quad |G(s)H(s)| = 1 \quad}$$
-   **Formula for finding Gain K:**
    Let the [[Open-Loop Transfer Function (OLTF)|open-loop transfer function]] be $G(s)H(s) = K \frac{\prod(s-z_i)}{\prod(s-p_j)}$. The condition becomes:
    $$|K| \frac{\prod |s-z_i|}{\prod |s-p_j|} = 1$$
    Solving for K gives:
    $$\boxed{\quad K = \frac{\prod_j |s-p_j|}{\prod_i |s-z_i|} = \frac{\text{Product of distances from poles to } s}{\text{Product of distances from zeros to } s} \quad}$$
-   **Purpose:** To calibrate the locus by assigning a specific gain value $K$ to every point on the plotted curve.

---
#### Analogy and Summary
#analogy #summary 

A simple analogy helps distinguish the two roles:
-   **Angle Condition:** Acts like a **map**. It shows you all the possible roads (the locus) that the closed-loop poles can travel on.
-   **Magnitude Condition:** Acts like a **milestone marker** on the road. Once you are on the road, it tells you your exact location (the value of K).

| Condition     | Purpose                                 | Formula                             | Usage                                       |
| :------------ | :-------------------------------------- | :---------------------------------- | :------------------------------------------ |
| **Angle**     | Determines the **shape** of the locus.  | $\angle G(s)H(s) = (2q+1)180^\circ$ | Used to sketch the locus.                   |
| **Magnitude** | Determines the **gain K** on the locus. | $G(s)H(s) = 1$                      | Used to find K for a desired pole location. |

---
### Related Concepts
#control-systems/related-concepts

> [[Concept and Definition of Root Locus]]

[[Rules for Constructing the Root Locus]]
[[Complex Analysis]]
