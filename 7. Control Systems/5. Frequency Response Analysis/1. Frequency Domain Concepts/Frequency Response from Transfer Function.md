---
tags:
  - control-systems
  - frequency-response
  - bode-plots
  - nyquist-plots
  - stability-analysis
created: 2025-10-21
aliases:
  - Frequency Response
  - Sinusoidal Response
  - H(jω)
  - "Example : First-Order System"
  - Magnitude Response
  - Phase Response
  - Sinusoidal Steady-State Response
  - Steady-State Response to Sinusoidal Input
subject: "[[Control Systems]]"
parent:
  - Frequency Domain Concepts
modified: 2026-08-03T07:59:40
---
### Frequency Response from Transfer Function
#control-systems/frequency-response

> ==**Frequency response** is the steady-state response of a stable Linear Time-Invariant (LTI) system to a sinusoidal input signal.== It describes how the system modifies the amplitude and phase of the input sinusoid as a function of its frequency, $\omega$. This analysis is fundamental to understanding system stability, [[Bandwidth in Signals & Systems]], and [[Filtering Concepts|filtering]] characteristics.

If the input to a stable system with [[Transfer Function and Impulse Response|transfer function]] $H(s)$ is a sinusoid:
$$r(t) = A \sin(\omega t)$$
Then, after the initial transients die out, the steady-state output will also be a sinusoid of the *same frequency*, but with a modified amplitude and a phase shift:
$$c_{ss}(t) = B \sin(\omega t + \phi)$$
The frequency response $H(j\omega)$ is the complex function that relates the output to the input, defining the magnitude ratio $(B/A)$ and the phase shift $(\phi)$.

---
#### Obtaining the Frequency Response Function
#frequency-response/derivation

The frequency response function, denoted $H(j\omega)$, is obtained by substituting $s=j\omega$ into the system's transfer function $H(s)$.
$$\boxed{\quad H(j\omega) = H(s) \bigg|_{s=j\omega} \quad}$$
The resulting function $H(j\omega)$ is a complex number for any given value of $\omega$. It can be expressed in polar form, which directly relates to the output sinusoid's properties.
$$H(j\omega) = |H(j\omega)| e^{j\angle H(j\omega)}$$

---
#### Magnitude and Phase Response
#magnitude-response #phase-response

The two components of the complex function $H(j\omega)$ define the system's behavior at each frequency.

**1. Magnitude Response, $|H(j\omega)|$**
-   **Definition:** The ratio of the output sinusoid's amplitude to the input sinusoid's amplitude.
-   **<u>Formula:</u>**
    $$\boxed{\quad |H(j\omega)| = \frac{B}{A} \quad}$$
-   **Decibel (dB) Scale:** In practice, especially for [[Bode Plots]], the magnitude is often expressed in decibels.
    $$\boxed{\quad M_{dB} = 20 \log_{10} |H(j\omega)| \quad}$$

> [!pyq]- PYQ : 2016, 2014, 2012
> ![[ee_2016(2)#^q18]]
> 
> ---
> ![[ee_2016(1)#^q6]]
> 
> ---
> ![[ee_2014(2)#^q19]]
> 
> ---
> ![[ee_2012#^q6]]

**2. Phase Response, $\angle H(j\omega)$**
-   **Definition:** The phase shift, $\phi$, of the output sinusoid relative to the input sinusoid.
-   **Formula:**
    $$\boxed{\quad \phi = \angle H(j\omega) \quad}$$
-   **Interpretation:**
    -   If $\phi < 0$, the output **lags** the input.
    -   If $\phi > 0$, the output **leads** the input.

---
#### Graphical Representations
#frequency-response/plots

Because $H(j\omega)$ is a function of frequency, it is typically visualized using one of the following graphical methods:
- **[[Bode Plots]]:** A pair of plots showing Magnitude (in dB) vs. Frequency (log scale) and Phase (in degrees) vs. Frequency (log scale). This is the most common representation.
- **[[Nyquist Plots|Nyquist Plot]]:** A polar plot of $H(j\omega)$ where the real part is plotted against the imaginary part as $\omega$ varies from 0 to $\infty$. It is a powerful tool for stability analysis.
- **[[Polar Plots|Polar Plot]]:** A direct plot of the magnitude $|H(j\omega)|$ versus the phase angle $\angle H(j\omega)$ on polar coordinates.

---
#### Significance and Applications
#frequency-response-significance #filter-analysis #system-performance

* **Sinusoidal Steady-State Response**: For a sinusoidal input $x(t) = A\cos(\omega_0 t + \phi)$, the LTI system's steady-state output will be $y(t) = A|H(j\omega_0)|\cos(\omega_0 t + \phi + \angle H(j\omega_0))$. This demonstrates how the system changes the amplitude and phase of each frequency component.
* **Filter Characterization and Design**: The most common application. Frequency response plots (Bode plots for CT, magnitude/phase plots for DT) directly visualize the passband, stopband, and transition band characteristics of filters (e.g., [[Low-Pass Filter]], [[High-Pass Filter]], [[Bandpass Filter]]).
* **System Analysis**: Allows engineers to determine how a system will react to various types of input signals based on their frequency content. For example, a system with a flat magnitude response and linear phase response over a certain frequency range is considered "distortionless" for signals within that range.
* **Audio and Communication Systems**: Crucial for understanding how audio amplifiers, equalizers, and communication channels modify signals.
* **Relationship to Poles and Zeros**: The shape of the frequency response is directly influenced by the locations of the [[Poles and Zeros of a Transfer Function|poles and zeros]] of the transfer function. Poles close to the frequency axis tend to cause peaks (resonance), while zeros cause nulls (attenuation).

---
#### Ideal vs. Practical Frequency Responses
#ideal-response #practical-response #filter-types

* **Ideal Filters**: Have perfectly flat passbands, infinite attenuation in stopbands, and infinitely sharp transitions. These are non-causal and non-realizable.
* **Practical Filters**: Exhibit ripples in passbands, finite attenuation in stopbands, and finite transition bands. Their design involves trade-offs between performance metrics like cutoff frequency, transition bandwidth, and stopband attenuation.

---
#### Example: First-Order System
#example 

Consider a simple low-pass filter with the transfer function:
$$H(s) = \frac{K}{\tau s + 1}$$
To find its frequency response, we substitute $s=j\omega$:
$$H(j\omega) = \frac{K}{1 + j\omega\tau}$$
-   **Magnitude Response:**
    $$\begin{align}
    |H(j\omega)| &= \frac{|K|}{|1 + j\omega\tau|} \\
    &= \frac{K}{\sqrt{1^2 + (\omega\tau)^2}}
    \end{align}$$
    $$\boxed{\quad |H(j\omega)| = \frac{K}{\sqrt{1 + (\omega\tau)^2}} \quad}$$
-   **Phase Response:**
    $$\begin{align}
    \angle H(j\omega) &= \angle(K) - \angle(1 + j\omega\tau) \\
    &= 0 - \tan^{-1}\left(\frac{\omega\tau}{1}\right)
    \end{align}$$
    $$\boxed{\quad \angle H(j\omega) = -\tan^{-1}(\omega\tau) \quad}$$
This shows that as frequency $\omega$ increases, the system's gain decreases, and the phase lag approaches $-90^\circ$.

---
### Related Concepts
#control-systems/related-concepts

> [[Correlation between Time and Frequency Response]]
> [[Transfer Function and Impulse Response]]
> [[Response of LTI Systems to Complex Exponentials]]

[[Bode Plots]]
[[Procedure for Drawing Bode Plots]]
[[Polar Plots]]
[[Nyquist Plots]]
[[Nyquist Stability Criterion]]
[[Transfer Function and Impulse Response]]
[[Gain Margin (GM)]]
[[Phase Margin (PM)]]