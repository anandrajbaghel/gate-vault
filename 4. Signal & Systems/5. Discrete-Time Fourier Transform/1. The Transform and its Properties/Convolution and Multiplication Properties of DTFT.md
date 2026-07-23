---
tags:
  - signals-and-systems
  - dtft
  - dtft-properties
  - convolution
  - lti-systems
  - dsp
created: 2025-09-24
aliases:
  - DTFT Convolution Property
  - DTFT Multiplication Property
  - DTFT Convolution Theorem
subject: "[[Signals & Systems]]"
parent: "[[Properties of the DTFT]]"
modified: 2026-07-23T16:46:01
---
### Convolution and Multiplication Properties of DTFT
#dtft/properties #convolution #multiplication #lti-systems

> The convolution and multiplication properties of the Discrete-Time Fourier Transform (DTFT) are dual concepts that form the bedrock of frequency-domain analysis for discrete-time signals and systems. They establish that a convolution operation in one domain transforms into a simpler multiplication operation in the other domain.

Throughout this note, we use the notation $x[n] \leftrightarrow X(e^{j\omega})$ and $h[n] \leftrightarrow H(e^{j\omega})$.

---
#### The Convolution Property
#dtft/convolution #convolution-theorem #lti-systems

This property states that **convolution in the discrete-time domain corresponds to multiplication in the frequency domain**.

> The convolution of two discrete-time sequences $x[n]$ and $h[n]$ is defined by the convolution sum:
> $$(x * h)[n] = \sum_{k=-\infty}^{\infty} x[k]h[n-k]$$
> The DTFT of this convolution is the product of their individual DTFTs:
> $$\boxed{\quad x[n] * h[n] \quad \leftrightarrow \quad X(e^{j\omega})H(e^{j\omega}) \quad}$$

**Significance in Discrete-Time LTI System Analysis:**
This property is fundamental to the analysis of discrete-time LTI systems.
1.  The output sequence $y[n]$ of a discrete-time LTI system is the [[Discrete-Time Convolution Sum|convolution]] of the input sequence $x[n]$ with the system's [[Impulse Response of an LTI System|impulse response]] $h[n]$.
    $$y[n] = x[n] * h[n]$$
2.  By applying the convolution property, the analysis in the frequency domain becomes a simple multiplication:
    $$Y(e^{j\omega}) = X(e^{j\omega})H(e^{j\omega})$$
    where:
    *   $Y(e^{j\omega})$ is the spectrum of the output sequence.
    *   $X(e^{j\omega})$ is the spectrum of the input sequence.
    *   $H(e^{j\omega})$ is the **[[Frequency Response of Discrete-Time LTI Systems|frequency response]]** of the system, defined as the DTFT of the impulse response, $H(e^{j\omega}) = \mathcal{F}\{h[n]\}$.

This property allows us to analyze digital filters and other discrete-time systems easily by examining how the system's frequency response, $H(e^{j\omega})$, scales the input signal's frequency components.

---
#### The Multiplication Property
#dtft/multiplication #windowing #spectral-leakage

This property is the dual of the convolution theorem. It states that **multiplication in the time domain corresponds to periodic convolution in the frequency domain**.

> The DTFT of the product of two sequences $x[n]$ and $h[n]$ is:
> $$\boxed{\quad x[n]h[n] \quad \leftrightarrow \quad \frac{1}{2\pi} \int_{2\pi} X(e^{j\theta})H(e^{j(\omega-\theta)}) d\theta \quad}$$
> The integral is a **periodic convolution**, taken over any interval of length $2\pi$.

**Significance and Applications:**
The primary application of this property is in understanding the effect of **windowing** in digital signal processing.
*   To analyze the frequency content of a long signal, we often select a finite-length segment for computation (e.g., for the DFT/FFT). This is equivalent to multiplying the original signal $x[n]$ by a finite-length window function $w[n]$ (like a rectangular or Hamming window).
*   In the frequency domain, this means the true spectrum of the signal, $X(e^{j\omega})$, is convolved with the spectrum of the window, $W(e^{j\omega})$.
*   Since the window's spectrum is not an ideal impulse, this convolution "smears" or "blurs" the original spectrum. This effect is known as **spectral leakage**, where the energy from one frequency component leaks into adjacent frequency bins.

---
#### Duality Summary

| Time Domain Operation                   | Frequency Domain Operation                                |
| --------------------------------------- | --------------------------------------------------------- |
| Convolution: `x[n] * h[n]`              | Multiplication: `X(e^{jω})H(e^{jω})`                      |
| Multiplication: `x[n]h[n]`              | Periodic Convolution: `(1/2π)[X(e^{jω}) * H(e^{jω})]`       |

---
### Related Concepts
#dtft/related-concepts
> [[Properties of the DTFT]]

[[Discrete-Time Convolution Sum]]
[[Frequency Response of Discrete-Time LTI Systems]]
[[Representation of Aperiodic Discrete-Time Signals]]
[[The Z-Transform]]