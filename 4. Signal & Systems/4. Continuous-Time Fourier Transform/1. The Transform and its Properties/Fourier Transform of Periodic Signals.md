---
tags:
  - signals-and-systems
  - fourier-transform
  - periodic-signals
  - dirac-delta
created: 2025-09-24
aliases:
  - CTFT of Periodic Signals
  - Fourier Transform of Periodic Functions
  - "Example : Fourier Transform of a Cosine Wave"
  - "Example : Fourier Transform of a Periodic Impulse Train (Comb Function)"
subject: "[[Signals & Systems]]"
parent:
  - Continuous-Time Fourier Transform (CTFT)
modified: 2026-07-23T16:45:04
---

### Fourier Transform of Periodic Signals
#fourier-transform #periodic-signal #frequency-spectrum #dirac-delta

> While the [[Continuous-Time Fourier Transform (CTFT)]] is defined for aperiodic, absolutely integrable signals, it can be extended to handle periodic signals using the [[Continuous-Time Unit Impulse and Unit Step Functions|Dirac delta function]]. This provides a unified framework for frequency analysis of both periodic and aperiodic signals.

The key insight is that the frequency spectrum of a periodic signal is not continuous. Instead, it is discrete, consisting of impulses located at the harmonic frequencies of the signal.

---
#### Derivation from the Fourier Series
#fourier-series #fourier-transform/derivation

Let $x(t)$ be a periodic signal with fundamental period $T_0$ and fundamental frequency $\omega_0 = 2\pi/T_0$. Its [[Exponential Fourier Series]] representation is:
$$x(t) = \sum_{k=-\infty}^{\infty} c_k e^{j k \omega_0 t}$$
where $c_k$ are the Fourier Series coefficients.

To find the Fourier Transform $X(\omega)$, we can apply the transform to the series representation of $x(t)$. Assuming linearity, we can transform it term by term:
$$X(\omega) = \mathcal{F}\{x(t)\} = \mathcal{F}\left\{ \sum_{k=-\infty}^{\infty} c_k e^{j k \omega_0 t} \right\} = \sum_{k=-\infty}^{\infty} c_k \mathcal{F}\{e^{j k \omega_0 t}\}$$
We need the Fourier Transform of a complex exponential, $e^{j\omega_a t}$. This is a standard transform pair involving the Dirac delta function:
$$\mathcal{F}\{e^{j\omega_a t}\} = 2\pi \delta(\omega - \omega_a)$$
Applying this to our case, where $\omega_a = k\omega_0$:
$$\mathcal{F}\{e^{j k \omega_0 t}\} = 2\pi \delta(\omega - k\omega_0)$$
Substituting this back into the expression for $X(\omega)$, we get the Fourier Transform of the periodic signal $x(t)$:
$$\boxed{\quad X(\omega) = \sum_{k=-\infty}^{\infty} 2\pi c_k \delta(\omega - k\omega_0) \quad}$$
This equation shows that the spectrum $X(\omega)$ consists of a train of impulses in the frequency domain. Each impulse is located at a harmonic frequency $k\omega_0$ and has a weight (area) of $2\pi c_k$.

---
#### Example 1: Fourier Transform of a Cosine Wave
#fourier-transform/example #cosine-transform

Consider the signal $x(t) = \cos(\omega_0 t)$.
Using Euler's identity, we can write it in a form that directly reveals its Fourier Series coefficients:
$$x(t) = \frac{1}{2}e^{j\omega_0 t} + \frac{1}{2}e^{-j\omega_0 t}$$
By comparing this to the Fourier series definition, we can see that the only non-zero coefficients are for $k=1$ and $k=-1$:
$$c_1 = \frac{1}{2}, \quad c_{-1} = \frac{1}{2}, \quad \text{and } c_k = 0 \text{ for } k \neq \pm 1$$
Now, using the formula $X(\omega) = \sum_{k=-\infty}^{\infty} 2\pi c_k \delta(\omega - k\omega_0)$:
$$\begin{align}
X(\omega) &= 2\pi \left( c_1 \delta(\omega - 1\cdot\omega_0) + c_{-1} \delta(\omega - (-1)\cdot\omega_0) \right) \\
&= 2\pi \left( \frac{1}{2} \delta(\omega - \omega_0) + \frac{1}{2} \delta(\omega + \omega_0) \right)
\end{align}$$
$$\boxed{\quad \mathcal{F}\{\cos(\omega_0 t)\} = \pi[\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] \quad}$$
The spectrum of a pure cosine consists of two impulses of weight $\pi$ located at $\pm\omega_0$.

---
#### Example 2: Fourier Transform of a Periodic Impulse Train (Comb Function)
#fourier-transform/example #comb-function #sampling

Consider a periodic impulse train, also known as the comb function:
$$x(t) = \sum_{n=-\infty}^{\infty} \delta(t - nT_0)$$
This signal is periodic with period $T_0$. First, we find its Fourier Series coefficients, $c_k$:
$$\begin{align}
c_k &= \frac{1}{T_0} \int_{-T_0/2}^{T_0/2} x(t) e^{-jk\omega_0 t} dt \\
&= \frac{1}{T_0} \int_{-T_0/2}^{T_0/2} \delta(t) e^{-jk\omega_0 t} dt \\
&= \frac{1}{T_0} e^{-jk\omega_0 \cdot 0} = \frac{1}{T_0}
\end{align}$$
All Fourier coefficients are equal to $1/T_0$. Now, we apply the main formula for the transform:
$$\begin{align}
X(\omega) &= \sum_{k=-\infty}^{\infty} 2\pi c_k \delta(\omega - k\omega_0) \\
&= \sum_{k=-\infty}^{\infty} 2\pi \left(\frac{1}{T_0}\right) \delta(\omega - k\omega_0)
\end{align}$$
Since $\omega_0 = 2\pi/T_0$, we have $2\pi/T_0 = \omega_0$.
$$\boxed{\quad \mathcal{F}\left\{\sum_{n=-\infty}^{\infty} \delta(t - nT_0)\right\} = \omega_0 \sum_{k=-\infty}^{\infty} \delta(\omega - k\omega_0) \quad}$$
This remarkable result shows that the Fourier transform of a periodic impulse train in time is another periodic impulse train in frequency. This property is fundamental to the theory of [[The Sampling Theorem (Nyquist-Shannon Theorem)|sampling]].

---
### Related Concepts
#fourier-transform/related-concepts

> [[Continuous-Time Fourier Transform (CTFT)]]

[[Exponential Fourier Series]]
[[Continuous-Time Unit Impulse and Unit Step Functions]]
[[Fourier Transform of Aperiodic Signals]]
[[The Sampling Theorem (Nyquist-Shannon Theorem)]]