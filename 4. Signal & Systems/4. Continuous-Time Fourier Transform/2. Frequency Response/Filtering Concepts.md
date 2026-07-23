---
tags:
  - signals-and-systems
  - filtering
  - lti-systems
  - frequency-response
  - brick-wall-filter
created: 2026-07-04
aliases:
  - Filtering
  - Ideal Filters
  - Phase Distortion
  - Amplitude Distortion
  - Signal Filtering
  - Practical Filters
  - '"Brick-wall" Magnitude Response'
subject: "[[Signals & Systems]]"
parent: "[[Filters]]"
modified: 2026-07-23T16:45:28
---
### Filtering Concepts (LTI Systems)
#filtering #lti-systems #frequency-selective

> ==**Filtering** is the process of modifying a signal by attenuating or removing unwanted frequency components while allowing desired frequency components to pass through.== In the context of signals and systems, filtering is one of the most common applications of Linear Time-Invariant (LTI) systems. The core idea is to design a system with a specific [[Frequency Response of LTI Systems|frequency response]] $H(\omega)$ that reshapes the frequency spectrum of the input signal.

The fundamental relationship in the frequency domain is:
$$\boxed{\quad Y(\omega) = H(\omega)X(\omega) \quad}$$
* The magnitude response $|H(\omega)|$ shapes the amplitude.
* The phase response $\angle H(\omega)$ shapes the time-delay of frequency components.

---

#### Ideal Filters
#ideal-filters #brick-wall-filter

An ideal filter perfectly passes frequencies within its **passband** (gain of 1) and completely blocks frequencies in its **stopband** (gain of 0).

##### Characteristics of Ideal Filters
#ideal-filters/characteristics #brick-wall-filter 

1. **"Brick-wall" Magnitude Response:** Instantaneous transition between passband and stopband.
2. **Linear Phase Response:** Within the passband, $\angle H(\omega) = -\omega t_d$. This ensures that all passing frequency components are delayed by the exact same amount of time ($t_d$), preventing the waveform from warping.

##### Physical Realizability (Non-Causality)
#physical-realizability/ideal-filters 

Let's analyze an ideal Low-Pass Filter with cutoff $\omega_c$ and zero phase delay. Its frequency response is a rectangular pulse.
Taking the Inverse Fourier Transform to find the impulse response $h(t)$:
$$\boxed{\quad h_{LPF}(t) = \frac{\omega_c}{\pi} \text{sinc}\left(\frac{\omega_c t}{\pi}\right) = \frac{\sin(\omega_c t)}{\pi t} \quad}$$
The sinc function extends from $t = -\infty$ to $t = \infty$. Because $h(t) \neq 0$ for $t < 0$, the system is **non-causal**. It would require knowledge of future inputs to compute the current output. Therefore, **ideal filters are physically impossible to build**.

---

#### Practical Filters
#practical-filters #filter-specifications

Because ideal filters are impossible, practical filters approximate the brick-wall response.

##### Key Practical Deviations

* **Transition Band:** The gradual slope between the passband and stopband (e.g., -20 dB/decade roll-off).
* **Cutoff Frequency ($\omega_c$):** Because there is no perfect cliff, the boundary is defined at the [[Half-Power Frequency (-3dB)]], where gain drops to $1/\sqrt{2}$.
* **Ripple:** Variations in gain allowed in the passband ($\delta_1$) or stopband ($\delta_2$) to achieve a steeper transition band (e.g., Chebyshev filters).

---

#### Filter Distortion
#amplitude-distortion #phase-distortion

If a signal's frequency components are not scaled and delayed uniformly, the output waveform $y(t)$ will be distorted compared to $x(t)$.

##### 1. Amplitude Distortion

Occurs when $|H(\omega)|$ is not perfectly flat across the signal's bandwidth. Different frequencies are amplified or attenuated by different amounts.

##### 2. Phase (Delay) Distortion
Occurs when $\angle H(\omega)$ is non-linear. The time delay for a specific frequency is given by the **Group Delay**:
$$t_g(\omega) = -\frac{d}{d\omega} \angle H(\omega)$$
If $\angle H(\omega)$ is non-linear, $t_g$ is not constant. Different frequency components arrive at the output at different times, severely smearing the waveform (critical failure in digital communications).

> [!pyq] Exam Tip
> GATE questions often test phase distortion by providing an input signal with two frequency components (e.g., $x(t) = \sin(10t) + \sin(100t)$) and a non-linear $H(\omega)$. You must calculate the steady-state output and prove the fundamental shape has changed.

---
### Related Concepts

> [[Filters|Filters MOC]] (to see how these theoretical concepts are mapped onto real hardware)

