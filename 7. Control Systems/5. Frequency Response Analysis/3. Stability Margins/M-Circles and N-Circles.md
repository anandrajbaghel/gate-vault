---
tags:
  - control-systems
  - frequency-response
  - graphical-method
  - m-circles
  - n-circles
  - nichols-chart
created: 2025-11-01
aliases:
  - Constant M-circles
  - Constant N-circles
  - M and N Circles
subject: "[[Control Systems]]"
parent:
  - Frequency Domain Analysis
modified: 2026-08-04T09:57:21
---
### M-Circles and N-Circles
#control-systems/frequency-response #m-circles #n-circles

> **M-circles** and **N-circles** are graphical tools used in frequency-domain analysis to determine the closed-loop frequency response of a unity feedback system directly from its open-loop frequency response plot (like a [[Polar Plots|Polar plot]] or [[Nyquist Plots|Nyquist plot]]). They represent the loci of constant magnitude (M) and constant phase (N) of the closed-loop system in the complex $G(s)$-plane.

#### Closed-Loop Transfer Function

For a unity feedback system, the closed-loop transfer function $T(s)$ is:
$$T(s) = \frac{C(s)}{R(s)} = \frac{G(s)}{1+G(s)}$$
The frequency response is obtained by letting $s=j\omega$. Let $G(j\omega) = x + jy$.
$$T(j\omega) = \frac{x+jy}{1+x+jy}$$
The magnitude and phase of the closed-loop response are:
-   **Magnitude:** $M = |T(j\omega)| = \frac{\sqrt{x^2+y^2}}{\sqrt{(1+x)^2+y^2}}$
-   **Phase:** $\alpha = \angle T(j\omega)$

---
#### M-Circles (Constant Magnitude Loci)
#m-circles

M-circles are the loci of points in the G(s)-plane for which the magnitude of the closed-loop transfer function, $M$, is constant.

-   **Derivation:** By setting $M = \text{constant}$ in the magnitude equation and rearranging, we get the equation of a family of circles.
    $$M^2 = \frac{x^2+y^2}{(1+x)^2+y^2} \implies \left(x + \frac{M^2}{M^2-1}\right)^2 + y^2 = \left(\frac{M}{M^2-1}\right)^2$$
-   **Properties:**
    -   **Center:** $\left(-\frac{M^2}{M^2-1}, 0\right)$
    -   **Radius:** $R = \left|\frac{M}{M^2-1}\right|$
    -   For $M=1$, the equation becomes $x=-1/2$, which is a straight vertical line.
    -   For $M \to \infty$ (instability), the center and radius approach the critical point `(-1, j0)`.

-   **Application:**
    By superimposing the M-circles on the Nyquist plot of the open-loop function $G(j\omega)$:
    -   **Resonant Peak ($M_r$):** The largest value of M for the M-circle that is just tangent to the $G(j\omega)$ plot.
    -   **Resonant Frequency ($\omega_r$):** The frequency on the $G(j\omega)$ plot at this point of tangency.
    -   **Bandwidth ($\omega_b$):** The frequency at which the $G(j\omega)$ plot intersects the M-circle for $M=1/\sqrt{2}$ (or -3 dB).

---
#### N-Circles (Constant Phase Loci)
#n-circles

N-circles are the loci of points in the G(s)-plane for which the phase angle $\alpha$ of the closed-loop transfer function is constant.

-   **Derivation:** Let $N = \tan(\alpha)$. The phase equation leads to the equation of a family of circles.
    $$\left(x+\frac{1}{2}\right)^2 + \left(y-\frac{1}{2N}\right)^2 = \left(\frac{1}{4} + \frac{1}{4N^2}\right)$$
-   **Properties:**
    -   **Center:** $\left(-\frac{1}{2}, \frac{1}{2N}\right)$
    -   **Radius:** $R = \sqrt{\frac{1}{4} + \left(\frac{1}{2N}\right)^2}$
    -   All N-circles pass through the origin $(0,0)$ and the critical point `(-1, j0)`.

-   **Application:**
    Used to find the closed-loop phase response at any given frequency by observing where the $G(j\omega)$ plot intersects the corresponding N-circle.

---
#### The Nichols Chart
#nichols-chart

In practice, using M and N circles on a polar plot is cumbersome. The **Nichols Chart** is a more convenient tool that combines this information.
-   **Axes:** The Nichols chart plots the open-loop gain in dB ($20\log|G(j\omega)|$) on the y-axis versus the open-loop phase in degrees ($\angle G(j\omega)|$) on the x-axis.
-   **Contours:** The M-circles and N-circles are pre-plotted as contours on this chart.
-   **Procedure:** The open-loop frequency response of the system is plotted on the Nichols chart. The closed-loop performance metrics ($M_r, \omega_b$, etc.) and stability margins (GM, PM) can then be read directly from the intersections of the plotted curve with the M and N contours.

---
### Related Concepts
#control-systems/related-concepts

> [[Nichols Chart]]

[[Polar Plots]]
[[Nyquist Plots]]
[[Correlation between Time and Frequency Response]]
[[Gain Margin (GM)]]
[[Phase Margin (PM)]]