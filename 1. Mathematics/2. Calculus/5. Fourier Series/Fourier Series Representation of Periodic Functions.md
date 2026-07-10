---
tags:
  - fourier-series
  - signal-processing
  - periodic-functions
  - frequency-domain
  - engineering-math
created: 2025-09-15
aliases:
  - Fourier Series
  - FS
subject: "[[Signals & Systems|Signals & Systems]]"
parent: "[[Periodic Signals]]"
confidence: 10
---
### Fourier Series Representation of Periodic Functions
#fourier-series #periodic-signal #spectral-analysis

> The **Fourier Series** is a mathematical tool that decomposes any "well-behaved" periodic function into an infinite sum of harmonically related sinusoidal functions (sines and cosines) or complex exponentials. It reveals the **frequency spectrum** of a periodic signal, showing the amplitude and phase of its DC component, fundamental frequency, and all its harmonics. This is fundamental to signal processing, communications, and power electronics.

#### Dirichlet Conditions for Convergence
#dirichlet-conditions #convergence

For a periodic function $f(t)$ to have a convergent Fourier series, it must satisfy the Dirichlet conditions over any single period:
1.  $f(t)$ must be absolutely integrable: $\int_{T_0} |f(t)| \, dt < \infty$.
2.  $f(t)$ must have a finite number of maxima and minima (bounded variation).
3.  $f(t)$ must have a finite number of finite discontinuities.

*Note: Virtually all signals encountered in engineering satisfy these conditions.*

---
#### Forms of the Fourier Series
A periodic function $f(t)$ with fundamental period $T$ and fundamental angular frequency $\omega_0 = 2\pi/T$ can be represented in three equivalent forms.

##### 1. Trigonometric Fourier Series
#trigonometric-fourier-series

This form expresses the function as a sum of sine and cosine terms.
$$\boxed{\quad f(t) = a_0 + \sum_{n=1}^{\infty} \left( a_n \cos(n\omega_0 t) + b_n \sin(n\omega_0 t) \right) \quad}$$
The coefficients are found using Euler's formulas:
*   **DC Component ($a_0$)**: The average value of the signal.
    $$\boxed{\quad a_0 = \frac{1}{T} \int_T f(t) \, dt \quad}$$
*   **Cosine Coefficients ($a_n$)**:
    $$\boxed{\quad a_n = \frac{2}{T} \int_T f(t) \cos(n\omega_0 t) \, dt \quad}$$
*   **Sine Coefficients ($b_n$)**:
    $$\boxed{\quad b_n = \frac{2}{T} \int_T f(t) \sin(n\omega_0 t) \, dt \quad}$$

##### 2. Exponential Fourier Series
#exponential-fourier-series

This is the most compact and widely used form in signal analysis.
$$\boxed{\quad f(t) = \sum_{n=-\infty}^{\infty} c_n e^{jn\omega_0 t} \quad}$$
The complex Fourier coefficient $c_n$ is given by:
$$\boxed{\quad c_n = \frac{1}{T} \int_T f(t) e^{-jn\omega_0 t} \, dt \quad}$$
**Relationship to Trigonometric Coefficients** (for a real signal $f(t)$):
*   $c_0 = a_0$
*   $c_n = \frac{a_n - jb_n}{2}$ for $n > 0$
*   $c_{-n} = \frac{a_n + jb_n}{2} = c_n^*$ (The coefficients are conjugate symmetric)

---
#### Effect of Signal Symmetry on Coefficients
#signal-symmetry #even-odd-symmetry

Exploiting symmetry is a crucial shortcut for calculating coefficients.
1.  **Even Symmetry ($f(t) = f(-t)$)**:
    *   The signal consists of only a DC component and cosine terms.
    *   $\boxed{b_n = 0 \text{ for all } n}$.
    *   $a_n = \frac{4}{T} \int_0^{T/2} f(t) \cos(n\omega_0 t) \, dt$.
2.  **Odd Symmetry ($f(t) = -f(-t)$)**:
    *   The signal consists of only sine terms. The DC value is zero.
    *   $\boxed{a_n = 0 \text{ for all } n}$.
    *   $b_n = \frac{4}{T} \int_0^{T/2} f(t) \sin(n\omega_0 t) \, dt$.
3.  **Half-Wave Symmetry ($f(t) = -f(t - T/2)$)**:
    *   The signal contains **no even harmonics**. The DC value is zero.
    *   $\boxed{c_n = a_n = b_n = 0 \text{ for } n = 0, 2, 4, \dots}$.

---
#### Parseval's Theorem for Power
#parsevals-theorem #signal-power

This theorem equates the average power of a signal in the time domain to the sum of the powers of its Fourier series components (harmonics).
The average power $P_{avg}$ is:
$$ P_{avg} = \frac{1}{T} \int_T |f(t)|^2 \, dt $$
In terms of Fourier coefficients:
$$\boxed{\quad P_{avg} = \sum_{n=-\infty}^{\infty} |c_n|^2 = a_0^2 + \frac{1}{2}\sum_{n=1}^{\infty} (a_n^2 + b_n^2) \quad}$$

---
### Related Concepts
#fourier-series/related-concepts

> [[Fourier Transforms]] (The Fourier Transform is the counterpart of the Fourier Series for non-periodic signals)

[[Periodic Signals]]
[[LTI System Analysis]]
[[Power Electronics]] (Harmonic analysis of inverter/rectifier waveforms)
