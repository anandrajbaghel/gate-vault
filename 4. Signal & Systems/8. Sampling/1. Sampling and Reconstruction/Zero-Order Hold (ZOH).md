---
tags:
  - signals-and-systems
  - sampling
  - reconstruction
  - dac
  - practical-reconstruction
created: 2025-09-24
aliases:
  - ZOH
  - Zero Order Hold
subject: "[[Signals & Systems]]"
parent: "[[Reconstruction from Samples using Interpolation]]"
modified: 2026-07-23T16:51:46
---
### Zero-Order Hold (ZOH)
#zero-order-hold #dac #practical-reconstruction #staircase-approximation

> The **Zero-Order Hold (ZOH)** is the simplest and most common method for practical signal reconstruction from a sequence of samples. It is a fundamental component of most Digital-to-Analog Converters (DACs). Instead of using the ideal (and non-realizable) sinc interpolation, the ZOH creates a continuous-time signal by holding the value of each sample constant for the duration of one sampling period, $T_s$. The result is a "staircase" approximation of the original signal.

#### 1. Time-Domain Operation and Impulse Response
#zoh/time-domain #impulse-response

The ZOH can be modeled as an LTI system that takes an ideal sampled impulse train, $x_s(t)$, as input and produces the staircase output, $x_{ZOH}(t)$.
$$x_s(t) = \sum_{n=-\infty}^{\infty} x(nT_s) \delta(t - nT_s)$$
The operation of the ZOH is defined by its impulse response, $h_{ZOH}(t)$. The response to a single impulse $\delta(t)$ at the input is a rectangular pulse of height 1 and duration $T_s$.
$$\boxed{\quad h_{ZOH}(t) = \begin{cases} 1 & 0 \le t < T_s \\ 0 & \text{otherwise} \end{cases} \quad}$$
This can also be written using the [[Continuous-Time Unit Impulse and Unit Step Functions|unit step function]]: $h_{ZOH}(t) = u(t) - u(t-T_s)$.

The output signal is the convolution of the input impulse train with this rectangular impulse response:
$$x_{ZOH}(t) = x_s(t) * h_{ZOH}(t)$$

---
#### 2. Frequency Response of the ZOH
#zoh/frequency-response #sinc-droop

The behavior of the ZOH as a filter is understood by its frequency response, $H_{ZOH}(\omega)$, which is the Fourier transform of its impulse response. The transform of the rectangular pulse is a sinc function with a linear phase term.
$$H_{ZOH}(\omega) = \mathcal{F}\{h_{ZOH}(t)\} = \int_{0}^{T_s} 1 \cdot e^{-j\omega t} dt = \frac{1 - e^{-j\omega T_s}}{j\omega}$$
This can be rewritten in a more intuitive sinc form:
$$\boxed{\quad H_{ZOH}(\omega) = T_s \text{sinc}\left(\frac{\omega T_s}{2\pi}\right) e^{-j\omega T_s/2} \quad}$$
where $\text{sinc}(u) = \frac{\sin(\pi u)}{\pi u}$.

*   **Magnitude Response:** $|H_{ZOH}(\omega)| = T_s \left| \text{sinc}\left(\frac{\omega T_s}{2\pi}\right) \right| = \left| \frac{\sin(\omega T_s/2)}{\omega/2} \right|$.
    This magnitude response has the shape of a sinc function. It acts as a low-pass filter, but it is not ideal. Notably, it has nulls (zeros) at integer multiples of the sampling frequency, $\omega = k\frac{2\pi}{T_s} = k\omega_s$ for $k \neq 0$. This helps to attenuate the unwanted spectral replicas from sampling.

*   **Phase Response:** $\angle H_{ZOH}(\omega) = -\omega T_s/2$ (plus phase shifts of $\pi$ where the sinc function becomes negative). The dominant term is a linear phase shift, which corresponds to a constant time delay of $T_s/2$.

---
#### 3. Distortion Caused by the ZOH
#amplitude-distortion #phase-distortion

While the ZOH is a practical and simple reconstruction filter, it introduces distortion compared to the ideal reconstruction.

1.  **Amplitude Distortion (Sinc Droop):** The magnitude response is not flat in the desired passband ($|\omega| < \omega_s/2$). It gradually "droops" from its peak at DC ($\omega=0$). This causes higher-frequency components of the original signal to be attenuated more than lower-frequency components. This distortion can be corrected in more advanced systems using an equalizer (an "inverse sinc" filter).

2.  **Phase Distortion:** The linear phase introduces a fixed delay of half a sampling period ($T_s/2$). This is usually not considered a severe form of distortion, as it delays all frequency components equally.

3.  **Imperfect Attenuation:** The ZOH does not completely eliminate the spectral replicas; it only attenuates them. The first side-lobe of the sinc magnitude is only about 13 dB lower than the main lobe. For this reason, a ZOH in a DAC is almost always followed by a simple analog low-pass filter (a "smoothing filter") to further suppress these high-frequency artifacts.

---
### Related Concepts
#zoh/related-concepts

> [[Reconstruction from Samples using Interpolation]]

[[The Sampling Theorem (Nyquist-Shannon Theorem)]]
[[Analog & Digital Electronics]] (Digital-to-Analog Converters)
[[Ramp, Signum, Rectangular Pulse, and Sinc Functions]]
[[Frequency Response of LTI Systems]]