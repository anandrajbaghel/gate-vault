---
tags:
  - signals-and-systems
  - fourier-transform
  - ctft-properties
  - convolution
  - lti-systems
created: 2025-09-24
aliases:
  - Convolution Theorem
  - Multiplication Property of CTFT
  - CTFT Convolution Property
subject: "[[Signals & Systems]]"
parent:
  - Continuous-Time Fourier Transform (CTFT)
modified: 2026-07-23T16:44:23
---
### Convolution and Multiplication Properties of CTFT
#fourier-transform/properties

> The convolution and multiplication properties of the Continuous-Time Fourier Transform (CTFT) are duals of each other and are among the most important properties in signal processing and LTI system analysis. They establish a fundamental relationship: a complex convolution in one domain becomes a simple multiplication in the other domain.

Throughout this note, we use the notation $x(t) \leftrightarrow X(\omega)$ and $h(t) \leftrightarrow H(\omega)$.

---
#### The Convolution Property (The Convolution Theorem)
#ctft/convolution #convolution-theorem #lti-systems

This property states that **convolution in the time domain corresponds to multiplication in the frequency domain**.

> The convolution of two signals $x(t)$ and $h(t)$ is defined as:
> $$(x * h)(t) = \int_{-\infty}^{\infty} x(\tau)h(t-\tau)d\tau$$
> The Fourier transform of this convolution is the product of their individual Fourier transforms:
> $$\boxed{\quad x(t) * h(t) \quad \leftrightarrow \quad X(\omega)H(\omega) \quad}$$

**Significance in LTI System Analysis:**
This theorem is the cornerstone of frequency-domain analysis for [[4. Signal & Systems/1. Signals and Systems - Fundamentals/3. System Properties/Linearity|Linear]] Time-Invariant (LTI) systems.
1.  The output $y(t)$ of an LTI system is the [[Continuous-Time Convolution Integral|convolution]] of the input signal $x(t)$ with the system's [[Impulse Response of an LTI System|impulse response]] $h(t)$.
    $$y(t) = x(t) * h(t)$$
2.  Applying the convolution theorem, we can analyze the system in the frequency domain by simple multiplication:
    $$Y(\omega) = X(\omega)H(\omega)$$
    where:
    *   $Y(\omega)$ is the spectrum of the output signal.
    *   $X(\omega)$ is the spectrum of the input signal.
    *   $H(\omega)$ is the **Frequency Response** of the system, defined as the Fourier transform of the impulse response, $H(\omega) = \mathcal{F}\{h(t)\}$.

This property transforms a computationally intensive convolution integral into a much simpler algebraic multiplication, making it easier to analyze how a system modifies the frequency components of an input signal (i.e., filtering).

---
#### The Multiplication Property
#ctft/multiplication #modulation #windowing

This property is the dual of the convolution theorem. It states that **multiplication in the time domain corresponds to convolution in the frequency domain**, scaled by a factor of $1/(2\pi)$.

> The Fourier transform of the product of two signals $x(t)$ and $h(t)$ is:
> $$\boxed{\quad x(t)h(t) \quad \leftrightarrow \quad \frac{1}{2\pi} [X(\omega) * H(\omega)] \quad}$$
> where the convolution in the frequency domain is defined as:
> $$(X * H)(\omega) = \int_{-\infty}^{\infty} X(\xi)H(\omega-\xi)d\xi$$

**Significance and Applications:**
1.  **Modulation:** This property is fundamental to communications. When a baseband signal $x(t)$ is multiplied by a sinusoidal carrier, e.g., $\cos(\omega_c t)$, its spectrum $X(\omega)$ gets convolved with the spectrum of the cosine, which consists of two impulses at $\pm\omega_c$. This convolution operation shifts copies of the baseband spectrum to be centered at the carrier frequencies, which is the principle of Amplitude Modulation (AM).

2.  **Windowing:** In digital signal processing, we often analyze a signal over a finite time window. This is achieved by multiplying the signal $x(t)$ by a window function $w(t)$ (e.g., a rectangular pulse). In the frequency domain, this means the signal's true spectrum $X(\omega)$ is convolved with the window's spectrum $W(\omega)$ (e.g., a sinc function). This convolution causes "smearing" or **spectral leakage**, an important effect to consider in spectral analysis.

---
#### Duality Summary

The two properties showcase the elegant symmetry between the time and frequency domains.

| Time Domain Operation                   | Frequency Domain Operation                                |
| --------------------------------------- | --------------------------------------------------------- |
| Convolution: `x(t) * h(t)`              | Multiplication: `X(ω)H(ω)`                                |
| Multiplication: `x(t)h(t)`              | Convolution: `(1/2π)[X(ω) * H(ω)]`                         |

---
### Related Concepts
#fourier-transform/related-concepts

> [[Continuous-Time Fourier Transform (CTFT)]]

[[Impulse Response of an LTI System]]
[[Frequency Response of LTI Systems]]
[[Continuous-Time Convolution Integral]]
[[Filtering Concepts]]
[[Properties of the CTFT (Linearity, Duality, Time/Frequency Shifting)]]
[[The Sampling Theorem (Nyquist-Shannon Theorem)]]