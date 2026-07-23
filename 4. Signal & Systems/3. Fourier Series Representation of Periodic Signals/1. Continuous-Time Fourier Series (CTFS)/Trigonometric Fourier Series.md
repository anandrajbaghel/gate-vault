---
tags:
  - signal-processing
  - signals-and-systems
  - fourier-series
  - frequency-domain
  - ctfs
  - gate-ee
created: 2025-09-24
aliases:
  - Fourier Series (Trigonometric)
  - Sine-Cosine Fourier Series
subject: "[[Signals & Systems]]"
parent:
  - Continuous-Time Fourier Series (CTFS)
modified: 2026-07-23T16:43:58
---
### Trigonometric Fourier Series
#fourier-series #trigonometric-fourier-series #frequency-spectrum

> The **Trigonometric Fourier Series** provides a way to represent any reasonably well-behaved periodic signal, $x(t)$, as an infinite sum of sine and cosine functions. This decomposition is based on the [[Orthogonality]] of sinusoidal signals. It reveals the frequency content of a signal by breaking it down into a DC component and a series of harmonically related sinusoids.

---
#### The Fourier Series Representation
#fourier-synthesis

A periodic signal $x(t)$ with fundamental period $T_0$ (and fundamental frequency $\omega_0 = 2\pi/T_0$) can be synthesized by the series:
$$\boxed{\quad x(t) = a_0 + \sum_{k=1}^{\infty} \left( a_k \cos(k\omega_0 t) + b_k \sin(k\omega_0 t) \right) \quad}$$
-   $a_0$: The **DC component** or average value of the signal.
-   $a_k$: The coefficient for the k-th cosine harmonic.
-   $b_k$: The coefficient for the k-th sine harmonic.

---
#### Analysis Formulas for Coefficients
#fourier-analysis

The coefficients are calculated by integrating the signal over one period, $T_0$.

-   **DC Component ($a_0$)**: $$\boxed{\quad a_0 = \frac{1}{T_0} \int_{T_0} x(t) dt \quad}$$
-   **Cosine Coefficients ($a_k$)**: $$\boxed{\quad a_k = \frac{2}{T_0} \int_{T_0} x(t) \cos(k\omega_0 t) dt \quad \text{for } k \ge 1 \quad}$$
-   **Sine Coefficients ($b_k$)**: $$\boxed{\quad b_k = \frac{2}{T_0} \int_{T_0} x(t) \sin(k\omega_0 t) dt \quad \text{for } k \ge 1 \quad}$$

---
#### Exploiting Signal Symmetry (Calculation Shortcuts)
#fourier-symmetry #gate-trick

Using symmetry properties of the signal can drastically reduce the calculation effort.

-   **Even Symmetry**: If $x(t)$ is an [[Signal Properties (Periodic & Aperiodic, Even & Odd)|even signal]] ($x(t)=x(-t)$), it is composed of only a DC component and cosine terms.
    $$\boxed{\quad b_k = 0 \quad \text{for all } k \quad}$$
    The $a_k$ coefficients can be found by integrating over half the period:
    $$ a_k = \frac{4}{T_0} \int_{0}^{T_0/2} x(t) \cos(k\omega_0 t) dt $$

-   **Odd Symmetry**: If $x(t)$ is an [[Signal Properties (Periodic & Aperiodic, Even & Odd)|odd signal]] ($x(t)=-x(-t)$), it is composed of only sine terms.
    $$\boxed{\quad a_0 = 0 \quad \text{and} \quad a_k = 0 \quad \text{for all } k \quad}$$
    The $b_k$ coefficients can be found by integrating over half the period:
    $$ b_k = \frac{4}{T_0} \int_{0}^{T_0/2} x(t) \sin(k\omega_0 t) dt $$

-   **Half-Wave Symmetry**: If $x(t) = -x(t - T_0/2)$, the signal is symmetric over half a period. This implies the signal contains **no even harmonics**.
    $$\boxed{\quad a_k = 0 \quad \text{and} \quad b_k = 0 \quad \text{for all even } k \quad}$$
    The series will only have terms for $k = 1, 3, 5, \dots$

---
#### Compact Trigonometric Form
#amplitude-phase-fourier-series

The series can also be written in a more compact amplitude-phase form:
$$\boxed{\quad x(t) = C_0 + \sum_{k=1}^{\infty} C_k \cos(k\omega_0 t + \phi_k) \quad}$$
where the coefficients are related by:
-   $C_0 = a_0$
-   $C_k = \sqrt{a_k^2 + b_k^2}$ (Amplitude of the k-th harmonic)
-   $\phi_k = -\arctan\left(\frac{b_k}{a_k}\right)$ (Phase of the k-th harmonic)

---
### Related Concepts
#trigonometric-fourier-series/related-concepts

> [[Exponential Fourier Series]] (The more compact, complex exponential form)

[[Signal Properties (Periodic & Aperiodic, Even & Odd)]]
[[Concept of Frequency Spectrum]]
[[Relationship to Fourier Series]]
