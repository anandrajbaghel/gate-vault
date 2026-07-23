---
tags:
  - signal-processing
  - signals-and-systems
  - fourier-series
  - discrete-time
  - dtfs
  - gate-ee
created: 2025-09-24
aliases:
  - DTFS
  - Discrete-Time Fourier Series
  - Fourier Series (Discrete)
subject: "[[Signals & Systems]]"
parent:
  - Discrete-Time Fourier Series (DTFS)
formula:
  - "Discrete-Time Fourier Series (DTFS) (Synthesis Equation) : $$x[n] = \\sum_{k=\\langle N \\rangle} a_k e^{j k \\Omega_0 n} = \\sum_{k=0}^{N-1} a_k e^{j k (2\\pi/N) n}$$"
  - "Discrete-Time Fourier Series (DTFS) (Analysis Equation) : $$a_k = \\frac{1}{N} \\sum_{n=\\langle N \\rangle} x[n] e^{-j k \\Omega_0 n} = \\frac{1}{N} \\sum_{n=0}^{N-1} x[n] e^{-j k (2\\pi/N) n}$$"
  - "Parseval's Theorem for DTFS : $$\\frac{1}{N} \\sum_{n=\\langle N \\rangle} |x[n]|^2 = \\sum_{k=\\langle N \\rangle} |a_k|^2$$"
modified: 2026-07-23T16:44:12
---
### Discrete-Time Fourier Series (DTFS)
#dtfs #discrete-time-fourier #frequency-spectrum

> The **Discrete-Time Fourier Series (DTFS)** is the representation for **periodic discrete-time signals**. It decomposes a periodic sequence $x[n]$ with fundamental period $N$ into a **finite sum** of harmonically related complex exponential sequences. This is a fundamental distinction from its continuous-time counterpart, which requires an infinite sum. The DTFS is the theoretical foundation for the computationally vital [[Discrete Fourier Transform (DFT) & Fast Fourier Transform (FFT)|Discrete Fourier Transform (DFT)]].

---
#### The DTFS Pair
#dtfs-formulas

A periodic discrete-time signal $x[n]$ with fundamental period $N$ (i.e., $x[n] = x[n+N]$) can be represented by the DTFS pair.

-   **Synthesis Equation**: This equation reconstructs the signal $x[n]$ from its $N$ unique Fourier coefficients ($a_k$).
    $$\boxed{\quad x[n] = \sum_{k=\langle N \rangle} a_k e^{j k \Omega_0 n} = \sum_{k=0}^{N-1} a_k e^{j k (2\pi/N) n} \quad}$$

-   **Analysis Equation**: This equation analyzes the signal $x[n]$ to find its Fourier coefficients ($a_k$).
    $$\boxed{\quad a_k = \frac{1}{N} \sum_{n=\langle N \rangle} x[n] e^{-j k \Omega_0 n} = \frac{1}{N} \sum_{n=0}^{N-1} x[n] e^{-j k (2\pi/N) n} \quad}$$
Here, $\Omega_0 = 2\pi/N$ is the fundamental angular frequency, and the notation $\sum_{k=\langle N \rangle}$ denotes a sum over any $N$ consecutive values of $k$.

---
#### Key Properties and Differences from CTFS
#dtfs-vs-ctfs #dtfs-properties

1.  **Finite Summation**: The DTFS is a **finite sum** of $N$ terms, not an infinite series. This is because there are only $N$ distinct complex exponential sequences of the form $e^{jk(2\pi/N)n}$. For values of $k$ outside the range $0, 1, \dots, N-1$, the sequences simply repeat (e.g., $e^{j(k+N)\Omega_0 n} = e^{jk\Omega_0 n} \cdot e^{jN\Omega_0 n} = e^{jk\Omega_0 n} \cdot e^{j2\pi n} = e^{jk\Omega_0 n}$).

2.  **Periodic Coefficients**: The Fourier coefficients $a_k$ are themselves a **periodic sequence** with period $N$.
    $$\boxed{\quad a_k = a_{k+N} \quad}$$
    This confirms that there are only $N$ unique coefficients needed to fully describe the signal. We typically consider the coefficients $a_0, a_1, \dots, a_{N-1}$.

3.  **Conjugate Symmetry**: For a real-valued signal $x[n]$, the coefficients exhibit conjugate symmetry:
    $$\boxed{\quad a_k = a_{-k}^* \quad \text{or equivalently} \quad a_k = a_{N-k}^* \quad}$$
    This implies that the magnitude spectrum is even ($|a_k| = |a_{N-k}|$) and the phase spectrum is odd ($\angle a_k = -\angle a_{N-k}|$) about the point $N/2$.

---
#### Parseval's Theorem for DTFS
#parsevals-theorem-dtfs

This theorem relates the average power of the signal in the time domain to the sum of the powers of its frequency components.
$$\boxed{\quad \frac{1}{N} \sum_{n=\langle N \rangle} |x[n]|^2 = \sum_{k=\langle N \rangle} |a_k|^2 \quad}$$
The total average power is the sum of the powers in each of the $N$ harmonic components.

---
### Related Concepts
#dtfs/related-concepts

> [[Continuous-Time Fourier Series (CTFS)]]

[[Discrete-Time Fourier Transform (DTFT)]]
[[Discrete Fourier Transform (DFT) & Fast Fourier Transform (FFT)]] (The DFT is essentially one period of the DTFS, made computable)
[[Signal Properties (Periodic & Aperiodic, Even & Odd)]]
[[Response of LTI Systems to Complex Exponentials]]