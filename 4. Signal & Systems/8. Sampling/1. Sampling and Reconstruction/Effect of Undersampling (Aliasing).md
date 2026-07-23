---
tags:
  - signals-and-systems
  - sampling
  - aliasing
  - dsp
  - nyquist
created: 2025-09-24
aliases:
  - Aliasing
  - Undersampling
  - Spectral Folding
subject: "[[Signals & Systems]]"
parent:
  - Sampling
modified: 2026-07-23T16:50:48
---
### Effect of Undersampling (Aliasing)
#aliasing #undersampling #nyquist-criterion #spectral-folding

> **Aliasing** is an irreversible effect that occurs when a continuous-time signal is sampled at a rate insufficient to capture its high-frequency content. It causes high-frequency components in the original signal to falsely appear as lower frequencies in the sampled data, leading to a distorted representation of the original signal.

This phenomenon occurs when the [[The Sampling Theorem (Nyquist-Shannon Theorem)|Nyquist Criterion]] is violated, i.e., when the sampling frequency $f_s$ is less than twice the maximum frequency $f_M$ present in the signal ($f_s < 2f_M$).

---
#### 1. The Frequency Domain Perspective: Spectral Overlap
#frequency-domain #spectral-overlap

The cause of aliasing is best visualized in the frequency domain. As shown in [[Representation of a CT signal by its Samples]], the spectrum of a sampled signal, $X_s(\omega)$, consists of replicas of the original spectrum, $X(\omega)$, centered at integer multiples of the sampling frequency $\omega_s$.

If $\omega_s < 2\omega_M$, the spectral replicas are spaced too closely together, causing them to overlap. The tail of the replica centered at $\omega_s$ extends into the baseband region of the replica centered at $\omega=0$. The portion of the spectrum above the Nyquist frequency ($\omega_s/2$) is "folded" back into the frequency range $[0, \omega_s/2]$.

This overlap corrupts the original baseband spectrum. The high-frequency content becomes indistinguishable from the low-frequency content, and this distortion cannot be removed by filtering after sampling.

---
#### 2. Calculating the Aliased Frequency
#aliased-frequency

When a sinusoidal component of frequency $f$ is sampled at a rate $f_s$, and $f$ is higher than the Nyquist frequency ($f_s/2$), it will appear as a lower frequency, $f_a$, in the sampled data.

The aliased frequency $f_a$ is the absolute difference between the original frequency $f$ and the nearest integer multiple of the sampling frequency $f_s$.
$$\boxed{\quad f_a = |f - k \cdot f_s| \quad}$$
where $k$ is an integer chosen such that $f_a \le f_s/2$.

**Example:**
*   A system samples at **$f_s = 100 \text{ Hz}$**. The Nyquist frequency is $f_s/2 = 50 \text{ Hz}$.
*   An input sinusoid has a frequency of **$f = 80 \text{ Hz}$**. This is above the Nyquist frequency.
*   The nearest multiple of $f_s$ is $1 \cdot 100 = 100$.
*   The aliased frequency is $f_a = |80 - 100| = 20 \text{ Hz}$.
*   Therefore, after sampling, the 80 Hz tone will be indistinguishable from a 20 Hz tone.

---
#### 3. Intuitive Examples
#aliasing/examples #wagon-wheel-effect

*   **The Wagon-Wheel Effect:** In films, the wheels of a moving vehicle can sometimes appear to be rotating slowly, standing still, or even spinning backward. This is a form of temporal aliasing. The camera's frame rate (the sampling frequency) is too low to capture the rapid rotation of the wheel's spokes (the high-frequency signal).
*   **Time Domain Illustration:** If a high-frequency sine wave is sampled too slowly, the collected sample points can perfectly trace out a lower-frequency sine wave, demonstrating aliasing directly.

---
#### 4. How to Prevent Aliasing
#anti-aliasing-filter #oversampling

Since aliasing is an irreversible process, it must be prevented *before* sampling occurs. There are two primary methods:

1.  **Sufficiently High Sampling Rate (Oversampling):** The most direct approach is to ensure the sampling rate is high enough to satisfy the Nyquist criterion for all frequency components of interest. One must sample at $f_s > 2f_M$.

2.  **Anti-Aliasing Filter:** This is the standard engineering practice. Before the continuous-time signal reaches the sampler (A/D converter), it is passed through an **analog low-pass filter**. This filter, called the **anti-aliasing filter**, removes or significantly attenuates all frequency components above the Nyquist frequency ($f_s/2$). This ensures that the signal being sampled is band-limited and meets the conditions of the sampling theorem.

---
### Related Concepts
#aliasing/related-concepts

> [[The Sampling Theorem (Nyquist-Shannon Theorem)]]

[[Representation of a CT signal by its Samples]]
[[Reconstruction from Samples using Interpolation]]
[[Filtering Concepts]]