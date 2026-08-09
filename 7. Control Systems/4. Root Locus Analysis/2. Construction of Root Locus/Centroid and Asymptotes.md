---
tags:
  - control-systems
  - root-locus
  - stability-analysis
  - graphical-method
created: 2025-10-16
aliases:
  - Root Locus Asymptotes
  - Root Locus Centroid
  - "Example : Centroid and Asymptotes"
subject: "[[Control Systems]]"
parent:
  - "[[Rules for Constructing the Root Locus|Construction of Root Locus]]"
modified: 2026-08-04T09:17:03
---
### Centroid and Asymptotes in Root Locus
#control-systems/root-locus #asymptotes #centroid

> For a control system where the number of open-loop poles ($P$) is greater than the number of open-loop zeros ($Z$), $P-Z$ branches of the root locus will approach infinity as the gain $K \to \infty$. **Asymptotes** are the straight lines that these branches approach at large distances from the origin. The **centroid** is the single point on the real axis where all these asymptotes intersect. Calculating the centroid and the angles of the asymptotes is a crucial step in sketching the overall shape of the root locus.

Let $P$ be the number of finite open-loop poles and $Z$ be the number of finite open-loop zeros.

---
#### Asymptotes of the Root Locus
#root-locus/asymptotes

[[asymptotes]] define the direction in which the locus branches travel towards infinity.

##### 1. Number of Asymptotes
The number of branches going to infinity, and therefore the number of asymptotes, is the difference between the number of poles and zeros.

$$\boxed{\quad \text{Number of asymptotes} = P - Z \quad}$$
^number-of-asymptotes

##### 2. Angle of Asymptotes ($\phi_a$)

The angles of these straight-line asymptotes are calculated using the following formula, which is derived from the angle condition for a test point $s$ that is very far from the origin.

$$\boxed{\quad \phi_a = \frac{(2q+1)180^\circ}{P-Z} \quad} \quad \text{for } q = 0, 1, 2, \dots, (P-Z-1)$$
^angle-of-asymptotes

##### Example Calculation of Angles

-   If $P-Z=1$, $\phi_a = 180^\circ$.
-   If $P-Z=2$, $\phi_a = \frac{180^\circ}{2}, \frac{540^\circ}{2} \implies 90^\circ, 270^\circ$.
-   If $P-Z=3$, $\phi_a = \frac{180^\circ}{3}, \frac{540^\circ}{3}, \frac{900^\circ}{3} \implies 60^\circ, 180^\circ, 300^\circ$.
-   If $P-Z=4$, $\phi_a = 45^\circ, 135^\circ, 225^\circ, 315^\circ$.

---
#### Centroid ($\sigma_a$)
#root-locus/centroid

The centroid is the center of gravity of the pole-zero configuration and is the point on the real axis from which the asymptotes radiate.

##### Formula

The formula for the centroid is the sum of the real parts of the poles minus the sum of the real parts of the zeros, divided by the number of asymptotes.

$$\boxed{\quad \sigma_a = \frac{\sum_{i=1}^{P} (\text{Real part of pole } p_i) - \sum_{j=1}^{Z} (\text{Real part of zero } z_j)}{P-Z} \quad}$$
    ^centroid

> [!note] Important Notes
> - The centroid is **always a real number**.
> - The centroid is a property of the asymptotes and **does not have to be a point on the root locus itself**.
> - This calculation includes **all** finite poles and zeros, including any that are complex. For a complex conjugate pair like $-\alpha \pm j\beta$, the sum of their real parts is simply $-2\alpha$.

---
#### Example
Consider the open-loop transfer function: $G(s)H(s) = \frac{K(s+4)}{s(s+2)(s^2+2s+2)}$.
-   Poles: $p_1=0$, $p_2=-2$, $p_3=-1+j1$, $p_4=-1-j1$. ($P=4$)
-   Zeros: $z_1=-4$. ($Z=1$)

**1. Number of Asymptotes:**
   $P-Z = 4-1 = 3$.

**2. Angles of Asymptotes:**
   $q=0: \phi_1 = \frac{180^\circ}{3} = 60^\circ$
   $q=1: \phi_2 = \frac{540^\circ}{3} = 180^\circ$
   $q=2: \phi_3 = \frac{900^\circ}{3} = 300^\circ$

**3. Centroid:**
   $\sum \text{Re}\{\text{poles}\} = 0 + (-2) + (-1) + (-1) = -4$
   $\sum \text{Re}\{\text{zeros}\} = -4$
   $$\sigma_a = \frac{(-4) - (-4)}{4-1} = \frac{0}{3} = 0$$
   The asymptotes intersect at the origin ($s=0$).

---
### Related Concepts
#control-systems/related-concepts

> [[Rules for Constructing the Root Locus]]

[[Angle and Magnitude Conditions]]
[[Concept and Definition of Root Locus]]