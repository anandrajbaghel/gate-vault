---
tags:
  - signals-and-systems
  - fourier-analysis
  - integral-transforms
created: 2025-09-24
aliases:
  - Fourier Transform from Fourier Series
  - Aperiodic Signal Spectrum
subject: "[[Signals & Systems]]"
parent:
  - Continuous-Time Fourier Transform (CTFT)
modified: 2026-07-23T16:44:40
---
### Development of the Fourier Transform from Fourier Series
#fourier-series #fourier-transform #aperiodic-signal #limit-process

> The [[Continuous-Time Fourier Transform (CTFT)]] is a natural extension of the [[Exponential Fourier Series]] for analyzing aperiodic signals. The core idea is to treat an aperiodic signal as a periodic signal with an infinite period ($T_0 \to \infty$).

#### 1. Starting Point: The Exponential Fourier Series
#fourier-series/exponential

For a periodic signal $x_T(t)$ with fundamental period $T_0$ and fundamental frequency $\omega_0 = 2\pi/T_0$, the exponential Fourier series pair is given by:

*   **Synthesis Equation (Reconstruction):**
    $$x_T(t) = \sum_{k=-\infty}^{\infty} c_k e^{j k \omega_0 t}$$
*   **Analysis Equation (Coefficients):**
    $$c_k = \frac{1}{T_0} \int_{-T_0/2}^{T_0/2} x_T(t) e^{-j k \omega_0 t} dt$$
Here, the spectrum consists of impulses at discrete frequencies $k\omega_0$, with weights $c_k$.

---
#### 2. The Limiting Process: Aperiodic Signal as $T_0 \to \infty$
#limit-process #aperiodic-signal

Let's consider an aperiodic signal $x(t)$ that is of finite duration or otherwise absolutely integrable (an [[Energy and Power Signals|energy signal]]). We can construct a periodic version of it, $x_T(t)$, by repeating $x(t)$ every $T_0$ seconds.

The aperiodic signal $x(t)$ can be recovered by letting the period go to infinity:
$$x(t) = \lim_{T_0 \to \infty} x_T(t)$$

As $T_0 \to \infty$:
1.  The fundamental frequency $\omega_0 = 2\pi/T_0 \to 0$.
2.  The frequency components $k\omega_0$ become very closely spaced. The discrete spectrum essentially becomes a continuous spectrum.

---
#### 3. Derivation: From Summation to Integral
#fourier-transform/derivation

Let's manipulate the Fourier Series equations for this limiting case.

1.  **Define a Spectral Envelope:**
    The coefficients $c_k$ depend on $T_0$. As $T_0$ increases, the amplitudes of the coefficients $c_k$ decrease, proportional to $1/T_0$. To get a function that doesn't vanish in the limit, we define a new function $X(\omega)$ which is the *envelope* of the spectrum.
    Let's define $X(k\omega_0) = c_k T_0$.
    From the analysis equation for $c_k$:
    $$X(k\omega_0) = T_0 \cdot c_k = \int_{-T_0/2}^{T_0/2} x_T(t) e^{-j k \omega_0 t} dt$$

2.  **Transition to Continuous Frequency:**
    In the limit as $T_0 \to \infty$, the discrete frequency variable $k\omega_0$ becomes the continuous frequency variable $\omega$. The integral's limits cover the entire signal, as $x_T(t)$ becomes $x(t)$.
    So, the spectral envelope becomes the **Fourier Transform**:
    $$\boxed{\quad X(\omega) = \int_{-\infty}^{\infty} x(t) e^{-j \omega t} dt \quad}$$
    This is the **Analysis Equation** for the CTFT.

3.  **From Synthesis Sum to Integral:**
    Now let's look at the synthesis equation.
    $$x_T(t) = \sum_{k=-\infty}^{\infty} c_k e^{j k \omega_0 t}$$
    Substitute $c_k = \frac{X(k\omega_0)}{T_0}$ and $T_0 = \frac{2\pi}{\omega_0}$:
    $$\begin{align}
    x_T(t) &= \sum_{k=-\infty}^{\infty} \frac{X(k\omega_0)}{T_0} e^{j k \omega_0 t} \\
     &= \sum_{k=-\infty}^{\infty} X(k\omega_0) e^{j k \omega_0 t} \frac{\omega_0}{2\pi} \\
     &= \frac{1}{2\pi} \sum_{k=-\infty}^{\infty} X(k\omega_0) e^{j k \omega_0 t} \omega_0
    \end{align}$$
    As $T_0 \to \infty$, we have $\omega_0 \to d\omega$ (an infinitesimal change in frequency). The summation over discrete harmonics becomes a Riemann sum, which in the limit becomes an integral over the continuous frequency $\omega$.
    $$x(t) = \lim_{T_0 \to \infty} x_T(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) e^{j \omega t} d\omega$$
    This gives us the **Inverse Fourier Transform (Synthesis Equation)**:
    $$\boxed{\quad x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) e^{j \omega t} d\omega \quad}$$

---
#### 4. Summary of the Transition

| Fourier Series (Periodic, Period $T_0$)                  | $\xrightarrow{\text{Let } T_0 \to \infty}$ | Fourier Transform (Aperiodic)                             |
| -------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------- |
| Discrete frequency spectrum at $k\omega_0$                 | $\longrightarrow$                         | Continuous frequency spectrum $\omega$                    |
| **Analysis:**                                            |                                           | **Analysis:**                                             |
| $c_k = \frac{1}{T_0}\int_{T_0} x_T(t)e^{-jk\omega_0 t} dt$   | $\longrightarrow$                         | $X(\omega) = \int_{-\infty}^{\infty} x(t)e^{-j\omega t} dt$ |
| **Synthesis:**                                           |                                           | **Synthesis (Inverse):**                                  |
| $x_T(t) = \sum_{k=-\infty}^{\infty} c_k e^{jk\omega_0 t}$ | $\longrightarrow$                         | $x(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty} X(\omega)e^{j\omega t} d\omega$ |

This derivation shows that the Fourier transform isn't a completely new concept but a logical evolution of Fourier series analysis applied to non-periodic signals.

---
### Related Concepts
#fourier-transform/related-concepts

> [[Continuous-Time Fourier Transform (CTFT)]]

[[Exponential Fourier Series]]
[[Concept of Frequency Spectrum]]
[[Fourier Transform of Aperiodic Signals]]
[[Fourier Transform of Periodic Signals]]