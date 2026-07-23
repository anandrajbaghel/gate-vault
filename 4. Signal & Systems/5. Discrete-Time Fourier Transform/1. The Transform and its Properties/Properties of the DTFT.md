---
tags:
  - signals-and-systems
  - dtft
  - dtft-properties
  - dsp
created: 2025-09-24
aliases:
  - DTFT Properties
  - Discrete-Time Fourier Transform Properties
  - "Parseval's Relation : DTFT"
subject: "[[Signals & Systems]]"
parent:
  - Discrete-Time Fourier Transform (DTFT)
formula:
  - "Periodicity of the DTFT : $$X(e^{j(\\omega+2\\pi)}) = \\sum_{n=-\\infty}^{\\infty} x[n] e^{-j\\omega n} = X(e^{j\\omega})$$"
modified: 2026-07-23T16:46:18
---
### Properties of the Discrete-Time Fourier Transform (DTFT)
#dtft/properties #dsp #fourier-analysis

> The properties of the DTFT are analogous to those of the [[Properties of the CTFT|Continuous-Time Fourier Transform]] and are crucial for analyzing and manipulating discrete-time signals and systems. They establish relationships between time-domain operations and their corresponding effects in the frequency domain.

Throughout this note, we use the notation $x[n] \leftrightarrow X(e^{j\omega})$ and $y[n] \leftrightarrow Y(e^{j\omega})$.

---
#### 1. Periodicity
#dtft/periodicity

Unlike the CTFT, the DTFT spectrum is **always periodic** with a period of $2\pi$. This is a direct consequence of the discrete nature of the time variable $n$.
$$\boxed{\quad X(e^{j(\omega+2\pi)}) = X(e^{j\omega}) \quad}$$
**Significance:** All the unique spectral information is contained in any interval of length $2\pi$, usually $[-\pi, \pi]$ or $[0, 2\pi]$.

---
#### 2. Linearity
#dtft/linearity

The DTFT of a linear combination of signals is the same linear combination of their individual DTFTs.
$$\boxed{\quad a x[n] + b y[n] \quad \leftrightarrow \quad a X(e^{j\omega}) + b Y(e^{j\omega}) \quad}$$
**Significance:** Allows the decomposition of complex signals into simpler parts for analysis.

---
#### 3. Time Shifting and Frequency Shifting
#dtft/time-shifting #dtft/frequency-shifting

*   **Time Shifting:** A delay of $n_0$ samples in the time domain introduces a linear phase shift in the frequency domain.
    $$\boxed{\quad x[n-n_0] \quad \leftrightarrow \quad e^{-j\omega n_0} X(e^{j\omega}) \quad}$$

*   **Frequency Shifting (Modulation):** Multiplying the time-domain signal by a complex exponential shifts the spectrum in frequency.
    $$\boxed{\quad e^{j\omega_0 n} x[n] \quad \leftrightarrow \quad X(e^{j(\omega - \omega_0)}) \quad}$$

---
#### 4. Conjugation and Symmetry Properties
#dtft/symmetry

*   **Conjugation:** $x^*[n] \leftrightarrow X^*(e^{-j\omega})$
*   **Time Reversal:** $x[-n] \leftrightarrow X(e^{-j\omega})$

**Conjugate Symmetry for Real Signals:** If $x[n]$ is a real-valued sequence, then its DTFT exhibits conjugate symmetry:
$$\boxed{\quad X(e^{j\omega}) = X^*(e^{-j\omega}) \quad \text{ for real } x[n] \quad}$$
This implies:
*   **Magnitude is Even:** $|X(e^{j\omega})| = |X(e^{-j\omega})|$
*   **Phase is Odd:** $\angle X(e^{j\omega}) = -\angle X(e^{-j\omega})$

---
#### 5. Convolution Property
#dtft/convolution #lti-systems

Convolution in the time domain corresponds to multiplication in the frequency domain. This is the cornerstone of discrete-time LTI system analysis.
$$\boxed{\quad x[n] * y[n] \quad \leftrightarrow \quad X(e^{j\omega})Y(e^{j\omega}) \quad}$$
where the convolution sum is $(x*y)[n] = \sum_{k=-\infty}^{\infty} x[k]y[n-k]$.
**Significance:** For an LTI system with impulse response $h[n]$, the output spectrum is $Y(e^{j\omega}) = H(e^{j\omega})X(e^{j\omega})$, where $H(e^{j\omega})$ is the [[Frequency Response of Discrete-Time LTI Systems|frequency response]].

---
#### 6. Multiplication Property (Windowing)
#dtft/multiplication #windowing

Multiplication in the time domain corresponds to **periodic convolution** in the frequency domain.
$$\boxed{\quad x[n] y[n] \quad \leftrightarrow \quad \frac{1}{2\pi} \int_{2\pi} X(e^{j\theta})Y(e^{j(\omega-\theta)}) d\theta \quad}$$
**Significance:** This explains the phenomenon of **spectral leakage** when a finite-length window is applied to a signal for analysis (e.g., in the DFT). The signal's true spectrum gets convolved with the spectrum of the window function.

---
#### 7. Differencing and Accumulation
#dtft/differencing #dtft/accumulation

These are the discrete-time analogues of differentiation and integration.
*   **First Difference (Time Domain):** This is analogous to differentiation.
    $$\boxed{\quad x[n] - x[n-1] \quad \leftrightarrow \quad (1 - e^{-j\omega}) X(e^{j\omega}) \quad}$$
    This is a simple high-pass filtering operation.

*   **Accumulation (Time Domain):** This is analogous to integration.
    $$\boxed{\quad \sum_{k=-\infty}^{n} x[k] \quad \leftrightarrow \quad \frac{1}{1-e^{-j\omega}}X(e^{j\omega}) + \pi X(e^{j0})\sum_{k=-\infty}^{\infty}\delta(\omega - 2\pi k) \quad}$$
    The impulse train term accounts for the DC component accumulation.

---
#### 8. Differentiation in Frequency
#dtft/frequency-differentiation

Multiplying the time-domain sequence by the index $n$ corresponds to differentiation of the spectrum.
$$\boxed{\quad n x[n] \quad \leftrightarrow \quad j \frac{d}{d\omega} X(e^{j\omega}) \quad}$$

---
#### 9. Parseval's Relation
#parsevals-theorem #energy-conservation

This property relates the energy of the signal in the time and frequency domains.
$$\boxed{\quad \sum_{n=-\infty}^{\infty} |x[n]|^2 = \frac{1}{2\pi} \int_{2\pi} |X(e^{j\omega})|^2 d\omega \quad}$$
**Significance:** Energy is conserved across the transform. The total energy can be calculated by summing the squared magnitudes in time or integrating the energy spectral density over one period in frequency.

---
### Related Concepts
#dtft/related-concepts

> [[Discrete-Time Fourier Transform (DTFT)]]

[[Representation of Aperiodic Discrete-Time Signals]]
[[Frequency Response of Discrete-Time LTI Systems]]
[[Properties of the CTFT]]
[[The Z-Transform]]