---
tags:
  - signals-and-systems
  - dsp
  - frequency-domain
  - gate
created: 2026-07-23T16:53:31
aliases:
  - Relation between DTFT and DFS
  - Sampling the DTFT
subject: "[[Signals & Systems]]"
parent:
  - "[[Representation of Aperiodic Discrete-Time Signals|Discrete-Time Fourier Transform (DTFT)]]"
modified: 2026-07-23T16:53:31
---
### Relation between DTFT and DFS
#signals-and-systems/transforms #dtft #dfs

> The **Discrete Time Fourier Transform (DTFT)** and the **Discrete Fourier Series (DFS)** are intimately related. The DFS coefficients of a periodic signal can be viewed as **sampled values** of the DTFT of one period of that signal. Conversely, the DTFT of a periodic signal consists of **impulses** located at the harmonic frequencies defined by the DFS.

#### 1. Sampling the Spectrum (Finite to Periodic)
#dtft/sampling

Consider a finite-duration sequence $x[n]$ of length $N$ (i.e., $x[n] = 0$ outside $0 \le n \le N-1$).
Its **DTFT**, $X(e^{j\omega})$, is a continuous function of frequency $\omega$:
$$X(e^{j\omega}) = \sum_{n=0}^{N-1} x[n] e^{-j\omega n}$$

Now, consider a periodic sequence $\tilde{x}[n]$ formed by periodically repeating $x[n]$ with period $N$.
Its **DFS** coefficients, $\tilde{X}[k]$, are given by:
$$\tilde{X}[k] = \sum_{n=0}^{N-1} \tilde{x}[n] e^{-j\frac{2\pi}{N}kn}$$

Comparing the two equations, we see that the variable $\omega$ in the DTFT is replaced by the discrete frequency $\frac{2\pi}{N}k$ in the DFS.

**The Relationship:**
$$\boxed{\quad \tilde{X}[k] = X(e^{j\omega}) \Big|_{\omega = \frac{2\pi}{N}k} \quad}$$

*   **Interpretation:** The DFS coefficients $\tilde{X}[k]$ represent samples of the continuous DTFT spectrum $X(e^{j\omega})$ taken at $N$ equally spaced points around the unit circle in the frequency domain.
*   **Frequency Sampling Interval:** $\Delta \omega = \frac{2\pi}{N}$.

#### 2. DTFT of a Periodic Signal
#dtft/periodic-signal

While the DTFT is primarily defined for absolutely summable (aperiodic) signals, it can be defined for periodic signals using Dirac delta functions (impulses) in the frequency domain.

Let $\tilde{x}[n]$ be a periodic signal with period $N$ and DFS coefficients $\tilde{X}[k]$.
The sequence can be expressed as a sum of complex exponentials (Inverse DFS):
$$\tilde{x}[n] = \frac{1}{N} \sum_{k=0}^{N-1} \tilde{X}[k] e^{j\frac{2\pi}{N}kn}$$

Taking the DTFT of this representation, and using the property that the Fourier transform of a complex exponential $e^{j\omega_0 n}$ is a train of impulses $2\pi \sum_l \delta(\omega - \omega_0 - 2\pi l)$:

$$\boxed{\quad \tilde{X}(e^{j\omega}) = \frac{2\pi}{N} \sum_{k=-\infty}^{\infty} \tilde{X}[k] \delta\left(\omega - \frac{2\pi}{N}k\right) \quad}$$
*(Note: Since $\tilde{X}[k]$ is periodic with $N$, the sum runs over all $k$, creating an infinite train of impulses).*

**Key Insights:**
1.  **Discretization:** Because the signal is periodic in time, its spectrum is discrete (impulses) in frequency.
2.  **Harmonics:** The impulses are located at harmonic frequencies $\omega_k = \frac{2\pi}{N}k$.
3.  **Magnitude:** The area (strength) of each impulse is proportional to the corresponding DFS coefficient $\tilde{X}[k]$.

#### Summary Table

| Feature | Finite Sequence $x[n]$ | Periodic Sequence $\tilde{x}[n]$ |
| :--- | :--- | :--- |
| **Time Domain** | Aperiodic (Finite Duration) | Periodic (Infinite Duration) |
| **Transform Used** | DTFT | DFS (or DTFT with impulses) |
| **Frequency Domain** | Continuous Spectrum $X(e^{j\omega})$ | Discrete Spectrum $\tilde{X}[k]$ |
| **Relation** | Base Shape | **Sampled** version of Base Shape |

---
### Related Concepts
#topic/related-concepts

> [[Discrete Time Fourier Transform (DTFT)]]
> [[Discrete Fourier Series (DFS)]]

[[Discrete Fourier Transform (DFT)]] (The DFT is numerically identical to the DFS for one period)
[[Sampling Theorem]] (Analogous concept: Sampling in time $\leftrightarrow$ Periodicity in frequency; Here: Periodicity in time $\leftrightarrow$ Sampling in frequency)
[[Z-Transform]] (DTFT is Z-transform evaluated on unit circle)