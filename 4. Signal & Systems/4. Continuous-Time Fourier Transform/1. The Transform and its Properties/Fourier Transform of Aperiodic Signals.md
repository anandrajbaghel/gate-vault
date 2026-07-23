---
tags:
  - signals-and-systems
  - fourier-transform
  - aperiodic-signals
  - frequency-domain
created: 2025-09-24
aliases:
  - CTFT of Aperiodic Signals
  - Continuous-Time Fourier Transform for Aperiodic Signals
  - "Examples : Common Aperiodic Signal Transforms"
  - Gaussian Pulse
subject: "[[Signals & Systems]]"
parent:
  - Continuous-Time Fourier Transform (CTFT)
modified: 2026-07-23T16:44:59
---
### Fourier Transform of Aperiodic Signals
#fourier-transform #aperiodic-signal #frequency-spectrum

> The Continuous-Time Fourier Transform (CTFT) is the primary mathematical tool for analyzing the frequency content of aperiodic (non-periodic) signals. While the Fourier Series represents periodic signals as a sum of discrete frequency components (harmonics), the Fourier Transform represents an aperiodic signal as an integral of a continuous spectrum of frequencies. This concept arises from treating an aperiodic signal as a periodic one with an infinite period, as detailed in the [[Development of the Fourier Transform from Fourier Series]].

#### The CTFT Pair
#fourier-transform/definition #integral-transform

For an aperiodic signal $x(t)$, its Fourier Transform $X(\omega)$ (or $X(j\omega)$) is found using the **Analysis Equation**. The original signal can be reconstructed from its spectrum using the **Synthesis Equation**. Together, they form the Fourier Transform pair.

*   **Analysis Equation (Forward Transform):**
    This equation transforms the signal from the time domain to the frequency domain.
    $$\boxed{\quad X(\omega) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt \quad}$$

*   **Synthesis Equation (Inverse Transform):**
    This equation transforms the spectrum from the frequency domain back to the time domain.
    $$\boxed{\quad x(t) = \mathcal{F}^{-1}\{X(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) e^{j\omega t} d\omega \quad}$$

The pair is often denoted as $x(t) \leftrightarrow X(\omega)$. Here, $\omega$ is the angular frequency in radians/second.

---
#### Existence of the Fourier Transform (Dirichlet Conditions)
#fourier-transform/existence #dirichlet-conditions

For the Fourier Transform integral to converge, the signal $x(t)$ must satisfy a set of sufficient conditions known as the **Dirichlet Conditions**:

1.  **Absolute Integrability:** The signal must be absolutely integrable. This is the most crucial condition for aperiodic signals.
    $$\boxed{\quad \int_{-\infty}^{\infty} |x(t)| dt < \infty \quad}$$
    Signals that satisfy this are [[Energy and Power Signals|energy signals]], meaning they have finite energy. Most transient or pulse-like signals fall into this category.

2.  **Finite Number of Maxima and Minima:** Within any finite time interval, $x(t)$ must have a finite number of peaks and valleys.

3.  **Finite Number of Discontinuities:** Within any finite time interval, $x(t)$ can only have a finite number of finite discontinuities. Infinite discontinuities are not allowed.

> **Note:** Some important signals, like the unit step function $u(t)$ or a constant DC signal, are not absolutely integrable. Their Fourier transforms do not exist in the ordinary sense but can be found using generalized functions, specifically the Dirac delta function $\delta(\omega)$.

---
#### Interpreting the Spectrum $X(\omega)$
#frequency-spectrum/magnitude-phase

The Fourier Transform $X(\omega)$ is a complex-valued function of frequency. It is usually described by its magnitude and phase.
$$X(\omega) = |X(\omega)| e^{j\angle X(\omega)}$$
*   **Magnitude Spectrum $|X(\omega)|$**: This represents the amplitude or strength of the frequency component $\omega$ in the signal $x(t)$. It is an even function for real-valued $x(t)$ (i.e., $|X(\omega)| = |X(-\omega)|$).
*   **Phase Spectrum $\angle X(\omega)$**: This represents the phase shift of the frequency component $\omega$. It is an odd function for real-valued $x(t)$ (i.e., $\angle X(\omega) = -\angle X(-\omega)$).

The pair of plots, magnitude and phase versus frequency, provides a complete frequency-domain description of the signal.

---
#### Examples of Common Aperiodic Signal Transforms
#fourier-transform/examples

1.  **Rectangular Pulse:**
    Let $x(t)$ be a rectangular pulse of width $\tau$ and height $A$: $x(t) = A \cdot \text{rect}(t/\tau)$.
    $$\text{rect}(t/\tau) = \begin{cases} 1 & |t| < \tau/2 \\ 0 & |t| > \tau/2 \end{cases}$$
    Its Fourier Transform is a sinc function.
    $$\boxed{\quad A \cdot \text{rect}(t/\tau) \quad \leftrightarrow \quad A\tau \cdot \text{sinc}\left(\frac{\omega\tau}{2\pi}\right) = A\tau \frac{\sin(\omega\tau/2)}{\omega\tau/2} \quad}$$
    This shows a fundamental trade-off: a signal that is sharply limited in time has a spectrum that is infinitely spread out in frequency.

2.  **Single-Sided Exponential Decay:**
    Let $x(t) = e^{-at}u(t)$ with $a > 0$. This is a causal, decaying exponential.
    $$\begin{align}
    X(\omega) &= \int_{-\infty}^{\infty} e^{-at}u(t) e^{-j\omega t} dt = \int_{0}^{\infty} e^{-(a+j\omega)t} dt \\
     &= \left[ \frac{e^{-(a+j\omega)t}}{-(a+j\omega)} \right]_0^\infty = 0 - \frac{1}{-(a+j\omega)}
    \end{align}$$
    $$\boxed{\quad e^{-at}u(t) \quad \leftrightarrow \quad \frac{1}{a+j\omega} \quad}$$
    This is a cornerstone result that directly links to the [[The Laplace Transform|Laplace Transform]].

3.  **Gaussian Pulse:**
    Let $x(t) = e^{-at^2}$ with $a > 0$. The Fourier transform of a Gaussian function is also a Gaussian function.
    $$\boxed{\quad e^{-at^2} \quad \leftrightarrow \quad \sqrt{\frac{\pi}{a}} e^{-\omega^2/(4a)} \quad}$$
    This unique property is central to the Heisenberg Uncertainty Principle and highlights that signals well-localized in both time and frequency are Gaussian.

---
### Related Concepts
#fourier-transform/related-concepts

> [[Continuous-Time Fourier Transform (CTFT)]]

[[Development of the Fourier Transform from Fourier Series]]
[[Fourier Transform of Periodic Signals]]
[[Properties of the CTFT]]
[[Energy and Power Signals]]
[[Rectangular Pulse, and Sinc Functions]]
[[The Laplace Transform]]