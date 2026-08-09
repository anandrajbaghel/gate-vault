---
tags:
  - control-systems
  - frequency-response
  - graphical-method
  - nichols-chart
  - m-circles
  - n-circles
created: 2025-11-02
aliases:
  - Nichols Plot
  - Nichols Chart Analysis
subject: "[[Control Systems]]"
parent:
  - Graphical Methods for Frequency Response
modified: 2026-08-04T10:07:23
---
### Nichols Chart
#control-systems/frequency-response #nichols-chart

> The **Nichols Chart** is a graphical tool used in frequency domain analysis that plots the open-loop magnitude (in dB) versus the open-loop phase (in degrees) of a system. It serves as an alternative to Bode or Nyquist plots and has the unique advantage of displaying both open-loop and closed-loop frequency response information on a single graph.

The chart's background is a grid of pre-plotted **[[M-Circles and N-Circles|M-circles and N-circles]]**, which represent the loci of constant magnitude and phase for the equivalent closed-loop unity feedback system.

---
#### The Nichols Plot Axes
#nichols-chart/axes

Unlike Bode plots (which use frequency as the common x-axis) or Nyquist plots (which use a complex plane), the Nichols chart uses:
-   **Vertical Axis (Y-axis):** Open-loop magnitude, $|G(j\omega)H(j\omega)|$, in decibels (dB).
-   **Horizontal Axis (X-axis):** Open-loop phase, $\angle G(j\omega)H(j\omega)$, in degrees.

The frequency $\omega$ is a parameter that varies along the plotted curve.

---
#### Procedure for Analysis using Nichols Chart
#nichols-chart/procedure

1.  **Calculate Frequency Response:** For the open-loop transfer function $G(s)H(s)$, calculate the magnitude (in dB) and phase (in degrees) for a range of frequencies, $\omega$.
2.  **Plot the Locus:** Plot the calculated (Phase, Magnitude) points onto the Nichols chart. This creates the Nichols plot for the system.
3.  **Analyze the Plot:** Extract performance and stability information by observing the intersections and tangencies of the plotted locus with the chart's key points and contours.

---
#### Reading Performance and Stability from the Chart
#nichols-chart/analysis

The Nichols Chart allows for the direct determination of both relative stability margins and key closed-loop performance metrics.

**1. Stability Margins ([[Gain Margin (GM)]] and [[Phase Margin (PM)]])**
-   **Phase Crossover Point:** The point where the Nichols plot intersects the **-180° phase line**.
    -   **Gain Margin (GM):** The negative of the magnitude (in dB) at this intersection point. It is the vertical distance from the intersection point up to the 0 dB line.
-   **Gain Crossover Point:** The point where the Nichols plot intersects the **0 dB magnitude line**.
    -   **Phase Margin (PM):** The horizontal distance (in degrees) from this intersection point to the -180° phase line. It is calculated as $PM = 180^\circ + (\text{phase at 0 dB})$.

**2. Closed-Loop Performance**
-   **Resonant Peak ($M_r$):** The value of the M-contour (in dB) that is just **tangent** to the Nichols plot. The point of tangency corresponds to the resonant frequency, $\omega_r$.
-   **Bandwidth ($\omega_b$):** The frequency at which the Nichols plot intersects the **-3 dB M-contour**.

**3. Stability Condition**
The critical point `(0 dB, -180°)` on the Nichols chart corresponds to the `(-1, j0)` point in the Nyquist plot. For a stable, open-loop stable system, the Nichols plot must pass to the **right** of this critical point.

> [!danger] Nichols Chart and RHP Poles
> #nichols-chart/limitations
> 
> The standard visual stability rule (the locus passing to the "right" of the **(0 dB, -180°)** critical point) assumes an open-loop stable, minimum-phase system. 
> 
> If the open-loop transfer function $G(s)H(s)$ has poles in the Right-Half Plane (RHP), this simple boundary check is invalid. You must instead analyze the encirclements of the critical point, equivalent to applying the full [[Nyquist Stability Criterion]].
^nichols-applicability-limit

---
#### Advantages of the Nichols Chart
-   **Combined Information:** It combines the magnitude and phase information from the two Bode plots into a single graph.
-   **Direct Closed-Loop Info:** The effect of changing the open-loop gain is a simple vertical shift of the entire plot, making it easy to see how gain adjustments affect stability margins and closed-loop performance ($M_r$).
-   **Design Tool:** It is particularly useful for designing compensators, as the effects of the compensator on the frequency response can be easily added to the original plot.

---
### Related Concepts
#control-systems/related-concepts

> [[M-Circles and N-Circles]]

[[Bode Plots]]
[[Nyquist Plots]]
[[Gain Margin (GM)]]
[[Phase Margin (PM)]]
[[Relative Stability Analysis]]