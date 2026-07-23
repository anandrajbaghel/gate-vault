---
tags:
  - signals-and-systems
  - sampling
  - reconstruction
  - interpolation
  - dsp
created: 2025-09-24
aliases:
  - Signal Reconstruction
  - Interpolation Formula
  - Ideal Reconstruction
subject: "[[Signals & Systems]]"
parent:
  - Sampling
modified: 2026-07-23T16:50:58
---
### Reconstruction from Samples using Interpolation
#signal-reconstruction #interpolation #ideal-lpf #dsp

> If a continuous-time signal has been sampled according to the [[The Sampling Theorem (Nyquist-Shannon Theorem)|Nyquist-Shannon Sampling Theorem]], it is possible to perfectly reconstruct the original signal from its samples. This process is fundamentally a form of **interpolation**—creating a continuous function that passes through all the discrete sample points.

The key to perfect reconstruction is the use of an ideal low-pass filter.

---
#### 1. Ideal Reconstruction in the Frequency Domain
#frequency-domain #ideal-lpf

The process of [[Representation of a CT signal by its Samples|sampling]] creates periodic replicas of the original signal's spectrum, $X(\omega)$, in the frequency domain. The spectrum of the sampled signal is:
$$X_s(\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X(\omega - k\omega_s)$$
To reconstruct the original signal, we must isolate the baseband spectrum (the replica centered at $\omega=0$) and eliminate all the higher-frequency replicas. This is achieved by passing the sampled signal through an **ideal low-pass reconstruction filter**, $H_{LPF}(\omega)$.

The filter must have two key characteristics:
1.  **Gain:** A constant gain of $T_s$ in the passband to cancel the $1/T_s$ scaling from the sampling process.
2.  **Cutoff Frequency ($\omega_c$):** The cutoff must lie between the highest frequency of the signal, $\omega_M$, and the start of the first replica, $\omega_s - \omega_M$. A common choice is the Nyquist frequency, $\omega_c = \omega_s/2$.

The frequency response of the ideal reconstruction filter is:
$$\boxed{\quad H_{LPF}(\omega) = \begin{cases} T_s & |\omega| \le \omega_s/2 \\ 0 & |\omega| > \omega_s/2 \end{cases} \quad}$$
The reconstructed spectrum is then simply $X(\omega) = X_s(\omega) \cdot H_{LPF}(\omega)$.

---
#### 2. Ideal Reconstruction in the Time Domain: Whittaker-Shannon Formula
#time-domain #interpolation #sinc-function

The time-domain equivalent of multiplying by an ideal LPF in frequency is convolving with the filter's impulse response. The impulse response of an ideal LPF is a sinc function:
$$h_{LPF}(t) = \mathcal{F}^{-1}\{H_{LPF}(\omega)\} = \text{sinc}\left(\frac{t}{T_s}\right) = \frac{\sin(\pi t/T_s)}{\pi t/T_s}$$
The reconstructed signal $x(t)$ is the convolution of the sampled impulse train $x_s(t)$ with this sinc function:
$$\begin{align}
x(t) &= x_s(t) * h_{LPF}(t) \\
&= \left( \sum_{n=-\infty}^{\infty} x(nT_s) \delta(t - nT_s) \right) * \text{sinc}\left(\frac{t}{T_s}\right)
\end{align}$$
Using the sifting property of convolution, this simplifies to the **Whittaker-Shannon Interpolation Formula**:
$$\boxed{\quad x(t) = \sum_{n=-\infty}^{\infty} x(nT_s) \cdot \text{sinc}\left(\frac{t - nT_s}{T_s}\right) \quad}$$
This formula reveals that the original continuous signal can be expressed as a weighted sum of infinitely many sinc functions. Each sinc function is centered at a sampling instant $nT_s$ and is scaled by the corresponding sample value $x(nT_s)$.

---
#### 3. Practical Reconstruction: Zero-Order Hold (ZOH)
#zero-order-hold #practical-reconstruction

Ideal reconstruction is physically impossible because the ideal LPF (with its sinc impulse response) is **non-causal** and has an infinite duration. The most common practical method for reconstruction is the **Zero-Order Hold (ZOH)**.

A ZOH is a device (part of a Digital-to-Analog Converter, or DAC) that receives a sample value and holds it constant for one entire sampling period, $T_s$. This creates a "staircase" approximation of the original signal.

*   **Impulse Response:** The impulse response of a ZOH is a rectangular pulse of width $T_s$.
    $$h_{ZOH}(t) = \begin{cases} 1 & 0 \le t < T_s \\ 0 & \text{otherwise} \end{cases}$$
*   **Frequency Response:** The Fourier transform of this rectangular pulse is a sinc function:
    $$H_{ZOH}(\omega) = T_s e^{-j\omega T_s/2} \text{sinc}\left(\frac{\omega T_s}{2\pi}\right)$$
    The ZOH acts as a crude low-pass filter but introduces two forms of distortion:
    1.  **Amplitude Distortion:** The sinc function magnitude droops in the passband, attenuating higher frequencies more than lower ones.
    2.  **Phase Distortion:** The linear phase term $e^{-j\omega T_s/2}$ corresponds to a constant delay of $T_s/2$.

In practice, a ZOH is followed by a practical analog low-pass filter (a "smoothing filter") to remove the sharp corners of the staircase output and further approximate the original signal.

---
### Related Concepts
#reconstruction/related-concepts

> [[The Sampling Theorem (Nyquist-Shannon Theorem)]]

[[Representation of a CT signal by its Samples]]
[[Effect of Undersampling (Aliasing)]]
[[Zero-Order Hold (ZOH)]]
[[Filtering Concepts]]
[[Rectangular Pulse, and Sinc Functions]]