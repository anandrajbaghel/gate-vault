---
tags:
  - control-systems
  - root-locus
  - stability-analysis
  - positive-feedback
created: 2026-06-16
aliases:
  - Zero-Degree Root Locus
  - Positive Feedback Root Locus
  - Complementary Root Locus
subject: "[[Control Systems]]"
parent:
  - "[[Rules for Constructing the Root Locus]]"
modified: 2026-08-04T09:24:07
---
### Complementary (Zero-Degree) Root Locus
#control-systems/root-locus #positive-feedback

> The **Complementary Root Locus** (or $0^\circ$ Root Locus) is used to analyze systems with **positive feedback** or systems where the open-loop gain $K$ is negative ($-\infty < K < 0$). While the general methodology remains the same as the standard negative feedback locus, several critical rules and formulas must be adjusted because the baseline angle requirement shifts from $180^\circ$ to $0^\circ$.

#### The Characteristic Equation
#characteristic-equation/positive-feedback

For a standard positive feedback system, the closed-loop transfer function is

![[Closed-Loop Transfer Function (CLTF)#^positive-feedback-tf]]

Therefore, the characteristic equation becomes:
$$1 - G(s)H(s) = 0 \implies G(s)H(s) = 1$$
This means that for a point to be on the complementary root locus, the open-loop transfer function evaluated at that point must equal the real number $1$. 

---

#### Modified Construction Rules
#root-locus/construction/zero-degree-rules

Because the target value is $+1$ instead of $-1$, the fundamental [[Angle and Magnitude Conditions|Angle Condition]] changes, which cascades into several other rule modifications. The **Magnitude Condition** ($|G(s)H(s)| = 1$) remains exactly the same.

##### 1. The $0^\circ$ Angle Condition
Instead of odd multiples of $180^\circ$, the angle of $G(s)H(s)$ must be an **even multiple of $180^\circ$** (which is equivalent to $0^\circ$, $360^\circ$, etc.).
$$\boxed{\quad \angle G(s)H(s) = q360^\circ \quad \text{for } q = 0, \pm 1, \pm 2, \dots \quad}$$

---
##### 2. Locus on the Real Axis

![[Rules for Constructing the Root Locus#^locus-on-real-axis-for-positive-feedback]]

---
##### 3. Angle of Asymptotes ($\phi_a$)
The $P-Z$ branches going to infinity approach asymptotes at different angles compared to negative feedback.
$$\boxed{\quad \phi_a = \frac{q360^\circ}{P-Z} \quad} \quad \text{for } q = 0, 1, 2, \dots, (P-Z-1)$$
*Note: The formula for the [[Centroid and Asymptotes#Centroid ($ sigma_a$)|Centroid]] ($\sigma_a$) remains unchanged.*

---
##### 4. Angle of Departure and Arrival
The baseline angle in the formula shifts from $180^\circ$ to $0^\circ$ (or $360^\circ$).
- **Angle of Departure ($\theta_d$) from a complex pole $p_j$:**
  $$\boxed{\quad \theta_d = 0^\circ - \left( \sum_{k \neq j} \angle(p_j - p_k) - \sum_{i} \angle(p_j - z_i) \right) \quad}$$
- **Angle of Arrival ($\theta_a$) to a complex zero $z_i$:**
  $$\boxed{\quad \theta_a = 0^\circ + \left( \sum_{j} \angle(z_i - p_j) - \sum_{k \neq i} \angle(z_i - z_k) \right) \quad}$$

---

#### Unchanged Rules
#root-locus/unchanged-rules

The following properties and calculations are identical to the standard $180^\circ$ root locus:
1.  **Symmetry:** The locus is strictly symmetrical about the real axis.
2.  **Number of Branches:** $N = \max(P, Z)$.
3.  **Start and End Points:** Branches start at open-loop poles ($K=0$) and end at open-loop zeros or infinity ($K=\infty$).
4.  **Centroid Calculation:** $\sigma_a = \frac{\sum \text{poles} - \sum \text{zeros}}{P-Z}$.
5.  **[[Breakaway and Break-in Points]]:** Calculated using $\frac{dK}{ds} = 0$. (Just ensure you isolate $K$ correctly from $1 - K \cdot P(s) = 0$).

---
### Related Concepts
#control-systems/related-concepts

> [[Concept and Definition of Root Locus]]

[[Rules for Constructing the Root Locus]]
[[Angle and Magnitude Conditions]]