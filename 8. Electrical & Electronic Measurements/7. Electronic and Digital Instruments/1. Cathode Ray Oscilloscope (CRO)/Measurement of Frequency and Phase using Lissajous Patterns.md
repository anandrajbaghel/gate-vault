---
tags:
  - cro
  - oscilloscope
  - lissajous-patterns
  - frequency-measurement
  - phase-measurement
  - electronic-instruments
  - gate
created: 2025-10-18
aliases:
  - Lissajous Figures
  - Lissajous Patterns
  - CRO Frequency Measurement
  - CRO Phase Measurement
  - "Example : Measurement of Frequency and Phase using Lissajous Patterns"
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - Cathode Ray Oscilloscope (CRO)
modified: 2026-08-04T10:01:16
---
### Measurement of Frequency and Phase using Lissajous Patterns
#cro/measurement #lissajous-patterns

> **Lissajous Patterns** (or Lissajous Figures) are produced on the CRO screen when sinusoidal signals are applied simultaneously to both the vertical (Y) and horizontal (X) deflection plates. To generate these patterns, the CRO is operated in the **X-Y mode**, which disconnects the internal time base generator and allows an external signal to control the horizontal deflection. The shape of the resulting pattern is determined by the ratio of the frequencies and the phase difference between the two applied signals.

#### Measurement of Frequency
#frequency-measurement #lissajous-frequency

This method is used to determine an unknown signal frequency by comparing it with a known signal frequency.
1.  The signal with the known frequency ($f_{known}$) is applied to one input (e.g., vertical, $f_v$), and the signal with the unknown frequency ($f_{unknown}$) is applied to the other input (e.g., horizontal, $f_h$).
2.  The CRO is set to X-Y mode.
3.  The resulting stationary Lissajous pattern is analyzed. The ratio of the two frequencies is given by the ratio of the number of tangencies (points of contact) with vertical and horizontal lines.

The governing formula is:
$$\boxed{\quad \frac{f_v}{f_h} = \frac{\text{Number of horizontal tangencies}}{\text{Number of vertical tangencies}} = \frac{N_h}{N_v} \quad}$$
*   $f_v$: Frequency of the signal on the vertical plates.
*   $f_h$: Frequency of the signal on the horizontal plates.
*   $N_h$: Number of points where the pattern touches a horizontal tangent line.
*   $N_v$: Number of points where the pattern touches a vertical tangent line.

**Example Patterns:**
*   **1:1 Ratio ($f_v = f_h$)**: The pattern is a circle, an ellipse, or a straight line. ($N_h=1, N_v=1$).
*   **2:1 Ratio ($f_v = 2f_h$)**: The pattern is a figure '8' lying horizontally. ($N_h=2, N_v=1$).
*   **1:2 Ratio ($f_v = f_h/2$)**: The pattern is a figure '8' standing vertically. ($N_h=1, N_v=2$).

This method is most accurate for simple integer frequency ratios (e.g., 1:1, 1:2, 2:3).

#### Measurement of Phase Difference
#phase-measurement #lissajous-phase

This method is used to find the phase difference ($\phi$) between two sinusoidal signals of the **same frequency**.
1.  The two signals of equal frequency are applied to the vertical and horizontal inputs.
2.  The resulting pattern will be an ellipse (or its degenerate forms: a circle or a straight line).
3.  The phase difference can be calculated by measuring the intercepts of the ellipse on the axes.

The phase angle $\phi$ is given by:
$$\boxed{\quad \sin(\phi) = \frac{y_0}{y_{max}} = \frac{x_0}{x_{max}} \quad}$$
where:
*   $y_0$ is the intercept on the y-axis.
*   $y_{max}$ is the maximum vertical deflection from the center.
*   $x_0$ is the intercept on the x-axis.
*   $x_{max}$ is the maximum horizontal deflection from the center.

**Key Patterns for Different Phase Angles:**
*   **$\phi = 0^\circ$ or $360^\circ$**: A straight line with a positive slope (in quadrants I and III).
*   **$\phi = 180^\circ$**: A straight line with a negative slope (in quadrants II and IV).
*   **$\phi = 90^\circ$ or $270^\circ$**: A circle if amplitudes are equal ($y_{max}=x_{max}$), or an ellipse with its major and minor axes aligned with the horizontal and vertical screen axes.
*   **Other angles**: For other phase shifts, the pattern is a tilted ellipse. The tilt direction helps resolve the ambiguity between $\phi$ and $180^\circ - \phi$ (since $\sin\phi = \sin(180^\circ - \phi)$). If the ellipse lies in quadrants I and III, $0^\circ < \phi < 90^\circ$ or $270^\circ < \phi < 360^\circ$. If it lies in quadrants II and IV, $90^\circ < \phi < 270^\circ$.

---
### Related Concepts
#topic/related-concepts

> [[Cathode Ray Oscilloscope (CRO)]]

[[Block Diagram of a CRO]]
[[Measurement of Voltage and Time Period]]
[[Electronic and Digital Instruments]]
[[Signal & Systems]]
[[Phasor Diagrams]]
