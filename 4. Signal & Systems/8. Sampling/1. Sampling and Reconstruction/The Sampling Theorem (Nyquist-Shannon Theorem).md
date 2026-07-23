---
tags:
  - signals-and-systems
  - sampling
  - nyquist-theorem
  - dsp
  - reconstruction
created: 2025-09-24
aliases:
  - Nyquist-Shannon Sampling Theorem
  - Nyquist Theorem
  - Nyquist Criterion
subject: "[[Signals & Systems]]"
parent:
  - Sampling
modified: 2026-07-23T16:51:30
---
### The Sampling Theorem (Nyquist-Shannon Theorem)
#nyquist-theorem #sampling #signal-reconstruction

The Sampling Theorem is arguably the most important theorem in digital signal processing. It provides the precise conditions under which a continuous-time signal can be perfectly reconstructed, without any loss of information, from a sequence of its samples.

#### 1. The Statement of the Theorem
#nyquist-criterion #band-limited

The theorem states:

> A continuous-time signal $x(t)$ that is **band-limited** to a maximum frequency of $f_M$ Hz (or $\omega_M$ rad/s) can be uniquely and completely recovered from its samples if the sampling frequency, $f_s$, is strictly greater than twice the maximum signal frequency.

This condition is known as the **Nyquist Criterion**.
$$\boxed{\quad f_s > 2f_M \quad \text{ or } \quad \omega_s > 2\omega_M \quad}$$

*   **Band-limited Signal:** A signal is band-limited if its Fourier transform $X(\omega)$ is zero for all frequencies above a certain maximum, i.e., $X(\omega) = 0$ for $|\omega| > \omega_M$.

---
#### 2. The Nyquist Rate and Nyquist Frequency
#nyquist-rate #nyquist-frequency

Two critical terms are associated with the sampling theorem:

1.  **Nyquist Rate:** The minimum sampling rate required to avoid information loss for a given band-limited signal. It is equal to exactly twice the maximum frequency of the signal.
    $$\boxed{\quad \omega_{\text{Nyquist}} = 2\omega_M \quad}$$
    To satisfy the theorem, one must sample at a rate *above* the Nyquist rate. Sampling *at* the Nyquist rate is the theoretical limit and requires an ideal "brick-wall" filter for reconstruction.

2.  **Nyquist Frequency:** The highest frequency component that can be unambiguously represented by a given sampling rate $f_s$. It is equal to half the sampling frequency.
    $$\boxed{\quad f_{\text{Nyquist}} = \frac{f_s}{2} \quad}$$
    Any frequency component in the original signal above the Nyquist frequency will be "aliased" to a lower frequency in the sampled signal's spectrum.

---
#### 3. Rationale: The Frequency Domain Perspective
#frequency-domain #aliasing

The theorem's validity is best understood by looking at the spectrum of the sampled signal, as derived in [[Representation of a CT signal by its Samples]]. Sampling in time causes the original signal's spectrum, $X(\omega)$, to be replicated periodically in the frequency domain at integer multiples of the sampling frequency, $\omega_s$.
$$X_s(\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X(\omega - k\omega_s)$$

*   **Case 1: Over-sampling ($\omega_s > 2\omega_M$)**: The spectral replicas of $X(\omega)$ are separated by a "guard band" of width $\omega_s - 2\omega_M$. The original spectrum centered at $\omega=0$ does not overlap with its shifted copies. Because the replicas are distinct, the original spectrum can be perfectly isolated using a low-pass filter.

*   **Case 2: Under-sampling ($\omega_s < 2\omega_M$)**: The spectral replicas overlap. The high-frequency content from one replica gets mixed with the low-frequency content of the adjacent one. This distortion is called **[[Effect of Undersampling (Aliasing)|aliasing]]**, and it is an irreversible process. Once aliasing occurs, the original signal cannot be recovered.

---
#### 4. Perfect Reconstruction: The Interpolation Formula
#signal-reconstruction #interpolation #ideal-lpf

If the Nyquist criterion is met, the original signal $x(t)$ can be recovered by passing the sampled signal $x_s(t)$ through an **ideal low-pass filter**.

**Filter Specifications:**
*   **Cutoff Frequency ($\omega_c$):** The filter's cutoff must be placed between the original spectrum's edge and the start of the first replica: $\omega_M < \omega_c < \omega_s - \omega_M$. A common choice is the Nyquist frequency, $\omega_c = \omega_s/2$.
*   **Gain:** The filter must have a gain of $T_s$ in the passband to cancel the $1/T_s$ scaling factor introduced during sampling.

In the frequency domain, reconstruction is simply:
$$X(\omega) = X_s(\omega) \cdot H_{LPF}(\omega)$$
In the time domain, this corresponds to convolving the sampled signal (an impulse train) with the filter's impulse response, which is a sinc function. This leads to the **Whittaker-Shannon Interpolation Formula**:
$$\boxed{\quad x(t) = \sum_{n=-\infty}^{\infty} x(nT_s) \cdot \text{sinc}\left(\frac{t - nT_s}{T_s}\right) \quad}$$
where $\text{sinc}(u) = \frac{\sin(\pi u)}{\pi u}$. This formula shows that the continuous-time signal is a weighted sum of shifted sinc functions, with the weights being the sample values $x(nT_s)$.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe 
    src="https://www.youtube.com/embed/7eFGY6JVTnc?start=0"
    style="position: absolute; top:0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

---
### Related Concepts
#sampling/related-concepts
> [[Representation of a CT signal by its Samples]]

[[Effect of Undersampling (Aliasing)]]
[[Reconstruction from Samples using Interpolation]]
[[Filtering Concepts]]
[[Discrete-Time Fourier Transform (DTFT)]]
[[Bandwidth in Signals & Systems]]