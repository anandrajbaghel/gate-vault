---
tags:
  - control-systems
  - stability-analysis
  - root-locus
  - graphical-method
  - s-plane
created: 2025-10-13
aliases:
  - Root Locus
  - Root Locus Method
  - RLocus
  - The Two Conditions for a Point to be on the Root Locus
subject: "[[Control Systems]]"
parent:
  - Root Locus
modified: 2026-08-04T09:24:28
---
### Concept and Definition of Root Locus
#control-systems/root-locus #graphical-method #stability-analysis

> The **Root Locus** is a powerful ==graphical method for analyzing the behavior of a closed-loop control system==. It is a plot of the paths (loci) of the closed-loop poles in the $s$-plane as a system parameter, typically the open-loop gain **K**, is varied from $0$ to $\infty$ (infinity). This technique provides deep insight into how changes in gain affect the system's stability and transient response.

![[Rules for Constructing the Root Locus#^quick-checks]]

> [!warning]- Root-Locus — Universal Cheat-Sheet
> #cheatsheet 
> 
> **Purpose:** quick, exam-ready steps to construct/analyse root-locus for any $G(s)H(s)$.
> 1. Write $G(s)H(s)$ in pole/zero form; list poles $p_i$ and zeros $z_i$.  
> 2. Number of branches $N=\max(P,Z)$. Branches start at poles ($K=0$) and end at zeros or $\infty$ ($K\to\infty$).  
> 3. **Real-axis rule:** a point $x$ on real axis belongs to RL iff the count of real poles+zeros **to the right of $x$** is odd.  
> 4. **Asymptotes** (for $P>Z$): number $=P-Z$, centroid
>    $$\sigma_a=\dfrac{\sum p_i-\sum z_i}{P-Z},$$
>    angles
>    $$\phi_a=\dfrac{(2q+1)180^\circ}{P-Z},\quad q=0,1,\dots$$
> 5. **Breakaway / break-in:** get $K(s)$ from $1+K\frac{N(s)}{D(s)}=0\Rightarrow K(s)=\frac{-D(s)}{N(s)}$ and solve $\dfrac{dK}{ds}=0$. **Keep only real roots lying on RL real segments.**  
> 6. **Angle of departure / arrival** (from a complex pole $p_k$ or zero $z_k$): use the small-$ε$ limit of the angle condition. A concise form for departure from pole $p_k$ is
>    $$\theta_d=\Big(\sum_{\text{zeros}} \angle(p_k-z_i)\Big)-\Big(\sum_{\substack{\text{poles}\\ j\neq k}} \angle(p_k-p_j)\Big)-180^\circ\pmod{360^\circ}.$$
>    Convert result into $[0^\circ,360^\circ)$. (Arrival is analogous swapping roles.)
> 7. **Imaginary-axis crossing / marginal stability:** use Routh–Hurwitz or set $s=j\omega$ and solve angle + magnitude conditions. **Do not** use real-axis odd-count rule off the real axis.  
> 8. **Magnitude check:** for any candidate $s$ on locus compute $K$ from $|G(s)H(s)|=1$. Verify sign (K>0 if required).
> 
> **Quick reminder:** angles are measured from the pole/zero location to the test point; keep track of quadrant (or use $\operatorname{atan2}$).

---
#### The Characteristic Equation
#characteristic-equation

The foundation of the root locus method is the **characteristic equation** of the closed-loop system. For a system with a forward path $G(s)$ and a feedback path $H(s)$, the [[Closed-Loop Transfer Function (CLTF)#The Standard Formula|closed-loop transfer function]] is:
$$T(s) = \frac{G(s)}{1 + G(s)H(s)}$$
The closed-loop poles are the roots of the denominator, so the characteristic equation is:
$$1 + G(s)H(s) = 0$$
Let the [[Open-Loop Transfer Function (OLTF)#Definition and Formulation|open-loop transfer function]] $G(s)H(s)$ be represented by $K \cdot P(s)$, where K is the variable gain. The equation becomes:
$$1 + K \cdot P(s) = 0 \implies K \cdot P(s) = -1$$
==This simple equation, $G(s)H(s) = -1$, is the key. A point $s$ in the complex plane is a closed-loop pole (i.e., it is on the root locus) if and only if it satisfies this equation for some real, positive value of $K$.==

---
#### The Two Conditions for a Point to be on the Root Locus
#root-locus/conditions 

The complex equation $G(s)H(s) = -1$ can be broken down into two separate conditions: one for the angle (phase) and one for the magnitude.

##### 1. The Angle Condition
#angle-condition 

The complex number $-1$ has a magnitude of 1 and an angle that is any odd multiple of $180^\circ$. Therefore, for a point $s$ to be on the root locus, it must satisfy the **angle condition**:
$$\boxed{\quad \angle G(s)H(s) = (2q + 1)180^\circ \quad \text{for } q = 0, \pm 1, \pm 2, \dots \quad}$$
Let the open-loop poles be $p_j$ and zeros be $z_i$. The angle of $G(s)H(s)$ is calculated as:
$$ \sum_{i} \angle(s+z_i) - \sum_{j} \angle(s+p_j) = (2q+1)180^\circ $$
> [!success] Significance
> The angle condition is the primary rule used to **determine the shape and location of the root locus**. It tells us which points in the s-plane are *potential* closed-loop poles.

---
##### 2. The Magnitude Condition
#magnitude-condition 

For the same point $s$ on the locus, the magnitude must also be satisfied:
$$\boxed{\quad |G(s)H(s)| = |-1| = 1 \quad}$$
> [!success] Significance
> The magnitude condition is used to **find the specific value of the gain K** required to place a closed-loop pole at that particular point $s$ on the locus. If $G(s)H(s) = K \frac{\prod |s+z_i|}{\prod |s+p_j|}$, then: $$\boxed{\quad K = \frac{\text{Product of distances from open-loop poles}}{\text{Product of distances from open-loop zeros}} = \frac{\prod_j |s+p_j|}{\prod_i |s+z_i|} \quad}$$

---
#### Purpose and Application
-   **Stability Analysis:** By observing the locus, we can see if and at what value of gain K the poles cross the imaginary axis into the RHP, causing instability.
-   **Transient Response Analysis:** We can use the root locus to choose a gain K that places the dominant closed-loop poles at a desired location to achieve specific performance, such as a desired damping ratio ($\zeta$) or settling time.
-   **System Design:** It visually shows the effect of adding compensator poles and zeros, making it an invaluable tool for designing controllers.

---
### Related Concepts
#control-systems/related-concepts

> [[Rules for Constructing the Root Locus]]
> [[Complementary (Zero-Degree) Root Locus]]

[[Relationship between Pole Location and System Stability]]
[[Routh-Hurwitz Stability Criterion]]
[[Nyquist Stability Criterion]]
[[Second-Order System Response]]
[[Time-Domain Specifications]]