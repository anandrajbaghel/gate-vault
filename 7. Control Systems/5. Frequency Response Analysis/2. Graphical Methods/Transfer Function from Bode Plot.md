---
tags:
  - control-systems
  - frequency-response
  - bode-plots
  - transfer-function
created: 2026-05-22
aliases:
  - Reverse Bode Plot
  - Bode Plot to Transfer Function
  - Bode Plot Slope Changes
subject:
  - "[[Control Systems]]"
parent:
  - "[[Bode Plots]]"
question:
  - "[[ee_2026#^q29]]"
  - "[[ee_2019#^q29]]"
  - "[[ee_2016(1)#^q30]]"
modified: 2026-08-03T08:03:20
---
### Deriving Transfer Function from Bode Plot
#control-systems/frequency-response #gate/problem-solving

> A common GATE problem involves deriving $G(s)$ from a given Bode magnitude plot.

#### Steps
#steps/transfer-function-from-bode-plot

1. **Check the Horizontal Axis Units:** Identify if the frequency is given in angular frequency $\omega$ (rad/s) or cyclic frequency $f$ (Hz). If in Hz, remember that $\omega = 2\pi f$.
2. **Identify Initial Slope:** ==Determines the type of system== ($s^N$ or $1/s^N$ at the origin). Calculate the ==initial gain constant== using a known low-frequency point.
	> [!info]- Constant Gain
	> ![[Bode Plots#1. Constant Gain (K)]]
3. **Identify Corner Frequencies:** Pinpoint the exact frequencies where the slope changes.
4. **Calculate Change in Slope:**
    * Slope changes by $-20\text{ dB/dec} \rightarrow$ Pole added at that corner frequency.
    * Slope changes by $+20\text{ dB/dec} \rightarrow$ Zero added at that corner frequency.
5. **Write Standard Form:**
    * **Time-Constant Form:** $G(s) = \frac{K (1 + s/\omega_{z1}) \dots}{s^N (1 + s/\omega_{p1}) \dots}$ (where $K$ is the system DC gain when $s \to 0$ if $N=0$).
    * **Zero-Pole-Gain Form:** $G(s) = \frac{A (s + \omega_{z1}) \dots}{s^N (s + \omega_{p1}) \dots}$

> [!pyq]- PYQ : 2019
> ![[ee_2019#^q29]]

> [!success] Bode Plot Linear Approximations & Axis Pitfalls
> 
> > [!pyq]- PYQ : 2016
> > ![[ee_2016(1)#^q30]]
> 
> In an asymptotic Bode plot, the magnitude $M$ (in dB) is a linear function of $\log_{10} \omega$ (or $\log_{10} f$).
> 
> **Key Equation:**
> $$M_2 - M_1 = \text{Slope} \times \log_{10}\left(\frac{\omega_2}{\omega_1}\right)$$
> 
> **Quick Ratios:**
> - If $\Delta M = 6\text{ dB}$, the frequency ratio is $\approx 2$ (one octave).
> - If $\Delta M = 20\text{ dB}$ (for a $\pm 20\text{ dB/dec}$ slope), the frequency ratio is $10$ (one decade).
> 
> **⚠️ GATE Trap:** If the horizontal axis is given in $f\text{ (Hz)}$, convert your corner frequencies using $\omega = 2\pi f$ before compiling the final $G(s)$ expression, unless the problem's options explicitly approximate $s \approx f$.

---

### Related Concepts
#bode-plots/related-concepts

> [[Bode Plots]] (Parent topic)

[[Transfer Function from State Space Model]]
[[Stability Analysis from Bode Plots]]
[[Procedure for Drawing Bode Plots]]
[[Frequency Response from Transfer Function]]
[[Gain Margin (GM)]]
[[Phase Margin (PM)]]
[[Polar Plots]]
[[Nyquist Plots]]
[[Time Delay Systems]]
[[DC Gain]]
[[Correlation between Time and Frequency Response]]