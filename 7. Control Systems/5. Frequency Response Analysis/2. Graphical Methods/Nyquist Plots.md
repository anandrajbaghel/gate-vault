---
tags:
  - control-systems
  - frequency-response
  - nyquist-plots
  - stability-criterion
  - graphical-method
created: 2025-10-26
aliases:
  - Nyquist Plot
  - Nyquist Stability Criterion
  - Nyquist Criterion
subject: "[[Control Systems]]"
parent: Graphical Methods for Frequency Response
modified: 2026-07-16
---
### Nyquist Plots
#control-systems/frequency-response #nyquist-plot

> The **Nyquist plot** is a powerful graphical technique used to determine the stability of a closed-loop system by analyzing its open-loop [[Frequency Response from Transfer Function|frequency response]]. It is a [[Mapping of Contours|mapping]] of a specific contour, which encloses the entire right-half of the $s$-plane, into the complex $G(s)H(s)$-plane. The resulting plot, when analyzed with the [[Nyquist Stability Criterion]], can determine not only absolute stability but also relative stability, even for systems that are open-loop unstable.

#### The Nyquist Contour (in the s-plane)
#nyquist-contour

The Nyquist plot is not just a plot for $s=j\omega$ where $\omega$ goes from $0 \to \infty$ (that is the [[Polar Plots|Polar Plot]]). It is a mapping of the entire **Nyquist contour**, which is a path in the $s$-plane specifically designed to enclose the entire Right-Half Plane (RHP). This contour consists of:
1. The entire imaginary axis from $s=-j\infty$ to $s=+j\infty$.
2. A semicircle of infinite radius, $s = R e^{j\theta}$ (where $R \to \infty$), that connects $+j\infty$ to $-j\infty$ through the RHP.
3. **Modification:** If there are any open-loop poles on the $jω$-axis, the contour takes an infinitesimally small semicircular detour around them into the RHP to avoid the singularity.

> Nyquist checks $s\to\infty$ because the contour is closed at infinity, not at $s=0$.

> [!warning]- Nyquist Mapping vs Argument Principle (GATE Trap)
> In Nyquist analysis, **two logically different steps** are involved:
> 
> **(1) Mapping of the contour (Geometry):**
> - Each part of the Nyquist contour in the $s$-plane is **mapped point-by-point** through $G(s)H(s)$.
> - This step answers **WHERE the contour goes** in the $G(s)H(s)$-plane.
> - Example:  
>   For $s = Re^{j\theta},\ R\to\infty$,
>   $$\lim_{|s|\to\infty} G(s)H(s) = \text{finite constant}$$
>   ⇒ the **entire infinite semicircle collapses to a single point**.
> 
> **(2) Argument Principle (Topology):**
> - Applied **after the mapping is known**.
> - Counts **encirclements**, not locations.
> - For Nyquist:
>   - Encirclement of **origin** → $1+G(s)H(s)$
>   - Encirclement of **$(-1+j0)$** → $G(s)H(s)$
> 
> 🔴 **GATE confusion source:**  
> Mapping questions ask **“to which point does it map?”**  
> Stability questions ask **“how many encirclements?”**  
> These are mathematically related but **conceptually independent steps**.

---
#### Principle of Argument
#principle-of-argument

The Nyquist criterion is based on [[Principle of Argument|Cauchy's Principle of Argument]] from complex analysis. It states that if you map a closed contour from one complex plane (the s-plane) to another (the F(s)-plane), the number of times the resulting plot encircles the origin is equal to the number of zeros minus the number of poles of F(s) enclosed by the original contour.
$$N = Z - P$$
Where:
-   $N$: Number of clockwise (CW) encirclements of the origin.
-   $Z$: Number of zeros of F(s) inside the contour.
-   $P$: Number of poles of F(s) inside the contour.

---
#### The Nyquist Stability Criterion
#nyquist-stability-criterion

To analyze the stability of a closed-loop system, we are interested in the roots of the characteristic equation, $1 + G(s)H(s) = 0$.
Let's define our function as $F(s) = 1 + G(s)H(s)$.
-   The **zeros** of $F(s)$ are the **closed-loop poles**.
-   The **poles** of $F(s)$ are the same as the **open-loop poles** of $G(s)H(s)$.

Applying the Principle of Argument to $F(s)$, where the contour encloses the RHP:
$N_{origin}$ = (Number of closed-loop poles in RHP) - (Number of open-loop poles in RHP).

For convenience, instead of plotting $1+G(s)H(s)$ and counting encirclements of the origin, we plot just **$G(s)H(s)$** and count the encirclements of the **critical point $(-1+j0)$**. This gives the same result. The criterion then becomes:
$$\boxed{\quad Z = N + P \quad}$$
Where:
- **Z:** The number of **closed-loop poles in the RHP**. For the system to be stable, **Z must be 0**.
- **N:** The number of **net clockwise (CW) encirclements** of the critical point $(-1, j0)$ by the Nyquist plot. (Note: Counter-clockwise encirclements are counted as negative).
- **P:** The number of **open-loop poles of G(s)H(s) in the RHP**. This is known by inspecting the open-loop transfer function before starting the analysis.

**Procedure for Stability Analysis:**
1. Find the number of open-loop poles in the RHP, $P$.
2. Sketch the Nyquist plot for $G(s)H(s)$. The part for $\omega: 0 \to \infty$ is the Polar Plot. The part for $\omega: -\infty \to 0$ is its mirror image about the real axis.
3. Count the net clockwise encirclements of the `(-1, j0)` point to find $N$.
4. Calculate $Z = N + P$.
5. If $Z=0$, the closed-loop system is stable. Otherwise, it is unstable.

---
#### Relative Stability from the Nyquist Plot
#nyquist-plot/relative-stability

[[Gain Margin (GM)]] and [[Phase Margin (PM)]] can be found directly from the Nyquist plot, just as with the Polar Plot.

> [!warning]- Negative real-axis crossing (Nyquist)
> A Nyquist plot lies on the **negative real axis** when  
> $$\angle G(j\omega) = -\pi$$
> For time-delay systems,
> $$\angle G(j\omega) = \angle G_0(j\omega) - \omega T$$
> Solve the phase condition **first**, then substitute the same $\omega$ in
> $$|G(j\omega)|$$
> to get the intersection point $(-|G|, 0)$.

- **Gain Margin (GM):** Let the plot intersect the negative real axis at $(-x, 0)$. Then $\boxed{\quad GM = 1/x \quad}$.
- **Phase Margin (PM):** Let the plot intersect the unit circle at a point with angle $\phi$. Then $\boxed{\quad PM = 180^\circ + \phi \quad}$.

> [!fail] GATE trap
> Negative real-axis intersection ≠ stability conclusion.  
> It only identifies the **phase crossover frequency**.
> Encirclements of $(-1, j0)$ are a **separate step**.

---
### Related Concepts
#control-systems/related-concepts

> [[Polar Plots]]

[[Nyquist Stability Criterion]]
[[Bode Plots]]
[[Gain Margin (GM)]]
[[Phase Margin (PM)]]
[[Principle of Argument]]
[[Routh-Hurwitz Stability Criterion]]