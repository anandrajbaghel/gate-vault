---
tags:
  - signal-processing
  - signals-and-systems
  - fourier-analysis
  - frequency-domain
  - spectrum
  - gate-ee
created: 2025-09-24
aliases:
  - Frequency Spectrum
  - Signal Spectrum
  - Magnitude and Phase Spectrum
subject: "[[Signals & Systems]]"
parent:
  - Continuous-Time Fourier Series (CTFS)
modified: 2026-07-23T16:41:56
---
### Concept of Frequency Spectrum
#frequency-spectrum #fourier-analysis #magnitude-spectrum #phase-spectrum

> The **frequency spectrum** of a signal is its representation in the frequency domain. It provides a powerful alternative to the time-domain waveform by decomposing the signal into its constituent frequency components. Instead of viewing the signal's amplitude versus time, we view the amplitude and phase of its sinusoidal components versus frequency. This is the fundamental output of Fourier analysis.

---
#### Components of the Spectrum
#spectrum-components

A complete frequency spectrum consists of two parts, both plotted against frequency ($\omega$ or $f$):

##### 1. Magnitude Spectrum
The magnitude spectrum shows the "strength" or "amplitude" of each frequency component present in the signal.
-   For a periodic signal with [[Exponential Fourier Series|Fourier Series coefficients]] $c_k$:
    $$\boxed{\quad \text{Magnitude Spectrum} = |c_k| \text{ vs. } k\omega_0 \quad}$$
-   For an aperiodic signal with a [[Fourier Transforms|Fourier Transform]] $X(\omega)$:
    $$\boxed{\quad \text{Magnitude Spectrum} = |X(\omega)| \text{ vs. } \omega \quad}$$

##### 2. Phase Spectrum
The phase spectrum shows the phase shift (or relative timing) of each frequency component.
-   For a periodic signal:
    $$\boxed{\quad \text{Phase Spectrum} = \angle c_k \text{ vs. } k\omega_0 \quad}$$
-   For an aperiodic signal:
    $$\boxed{\quad \text{Phase Spectrum} = \angle X(\omega) \text{ vs. } \omega \quad}$$

Together, the magnitude and phase spectra contain all the information needed to perfectly reconstruct the original time-domain signal.

---
#### Discrete vs. Continuous Spectra
#discrete-spectrum #continuous-spectrum

The nature of the spectrum depends on whether the time-domain signal is periodic or aperiodic.

##### Discrete Spectrum (Line Spectrum)
-   **Source**: Arises from the Fourier Series of a **periodic signal**.
-   **Appearance**: Consists of a series of vertical lines (impulses) located at integer multiples of the fundamental frequency, $\omega_0$. The height of each line represents the magnitude (or phase) of that harmonic. The spectrum is zero between the harmonics.
-   **Reason**: A periodic signal is composed of a fundamental frequency and its harmonics only; no other frequencies are present.

##### Continuous Spectrum
-   **Source**: Arises from the Fourier Transform of an **aperiodic signal**.
-   **Appearance**: A continuous curve defined for all frequencies.
-   **Reason**: An aperiodic signal can be thought of as a periodic signal with an infinite period, meaning the spacing between harmonics becomes infinitesimally small, forming a continuum of frequencies.

---
#### Two-Sided vs. One-Sided Spectrum
#two-sided-spectrum #one-sided-spectrum

The [[Exponential Fourier Series|Exponential Fourier Series]] and the standard [[Fourier Transforms|Fourier Transform]] mathematically produce a **two-sided spectrum**, which includes both positive and negative frequencies.

-   **Negative Frequencies**: These are a mathematical construct arising from Euler's formula ($e^{j\omega t} = \cos(\omega t) + j\sin(\omega t)$ and $e^{-j\omega t} = \cos(\omega t) - j\sin(\omega t)$). They are necessary to represent real sinusoids using complex exponentials.
-   **Conjugate Symmetry**: For any real-valued signal $x(t)$, the spectrum exhibits conjugate symmetry:
    $$ |X(-\omega)| = |X(\omega)| \quad \text{(Magnitude is Even)} $$
    $$ \angle X(-\omega) = -\angle X(\omega) \quad \text{(Phase is Odd)} $$

Because of this symmetry, all information is contained in the positive frequencies. For practical purposes, especially when using the [[Trigonometric Fourier Series]], we often use a **one-sided spectrum**:
-   The DC component ($f=0$) remains the same.
-   The magnitudes of all positive frequency components are **doubled**.
-   The negative frequency components are discarded.

---
### Related Concepts
#frequency-spectrum/related-concepts

> [[Exponential Fourier Series]]

[[Trigonometric Fourier Series]]
[[Fourier Transforms]]
[[Properties of Continuous-Time Fourier Series]]
[[Parseval's Theorem]]
[[Frequency Response of LTI Systems]]
[[Bandwidth in Signals & Systems]]