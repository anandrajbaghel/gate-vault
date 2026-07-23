---
tags:
  - signals-and-systems
  - sampling
  - digital-signal-processing
  - ct-to-dt
created: 2025-09-24
aliases:
  - Signal Sampling
  - Ideal Sampling
  - Impulse Train Sampling
subject: "[[Signals & Systems]]"
parent: Sampling
modified: 2026-07-23T16:51:21
---
### Representation of a CT signal by its Samples
#sampling/ideal #ct-to-dt #impulse-train

Sampling is the process of converting a continuous-time (CT) signal into a discrete-time signal by taking its values, or "samples," at discrete, uniformly spaced instants of time. This is the fundamental bridge between the analog world (CT signals) and the digital world (discrete-time signals), forming the basis of all digital signal processing (DSP).

#### 1. The Ideal Sampling Process
#time-domain-sampling

Mathematically, the process of ideal sampling can be modeled as the multiplication of the continuous-time signal $x(t)$ with a periodic impulse train, $s(t)$. This impulse train is also known as a Dirac comb or Shah function.

The **sampling function** $s(t)$ is defined as an infinite series of Dirac delta functions separated by the sampling period $T_s$:
$$\boxed{\quad s(t) = \sum_{n=-\infty}^{\infty} \delta(t - nT_s) \quad}$$
where $T_s$ is the sampling period and $f_s = 1/T_s$ (or $\omega_s = 2\pi/T_s$) is the sampling frequency.

The **sampled signal**, denoted as $x_s(t)$, is the product of the original signal and the sampling function:
$$x_s(t) = x(t) \cdot s(t) = x(t) \sum_{n=-\infty}^{\infty} \delta(t - nT_s)$$
Using the sifting property of the delta function, $f(t)\delta(t-t_0) = f(t_0)\delta(t-t_0)$, we get:
$$\boxed{\quad x_s(t) = \sum_{n=-\infty}^{\infty} x(nT_s) \delta(t - nT_s) \quad}$$
This equation represents the sampled signal as a train of impulses. The weight (area) of each impulse at time $t=nT_s$ is equal to the value of the original signal $x(t)$ at that instant.

---
#### 2. The Spectrum of the Sampled Signal
#frequency-domain #spectrum-replication

The most crucial insight into the sampling process comes from analyzing its effect in the frequency domain. We can find the Fourier Transform of the sampled signal, $X_s(\omega)$, by applying the [[Convolution and Multiplication Properties of CTFT|multiplication property]] of the Fourier transform.

Multiplication in the time domain corresponds to convolution in the frequency domain:
$$x_s(t) = x(t)s(t) \quad \leftrightarrow \quad X_s(\omega) = \frac{1}{2\pi} [X(\omega) * S(\omega)]$$
First, we need the Fourier Transform of the periodic impulse train $s(t)$. This is a standard result from the analysis of [[Fourier Transform of Periodic Signals]]:
$$S(\omega) = \mathcal{F}\left\{\sum_{n=-\infty}^{\infty} \delta(t - nT_s)\right\} = \omega_s \sum_{k=-\infty}^{\infty} \delta(\omega - k\omega_s)$$
where $\omega_s = 2\pi/T_s$.

Now, we convolve the original signal's spectrum $X(\omega)$ with $S(\omega)$:
$$\begin{align}
X_s(\omega) &= \frac{1}{2\pi} \left[ X(\omega) * \left( \omega_s \sum_{k=-\infty}^{\infty} \delta(\omega - k\omega_s) \right) \right] \\
&= \frac{\omega_s}{2\pi} \sum_{k=-\infty}^{\infty} \left[ X(\omega) * \delta(\omega - k\omega_s) \right]
\end{align}$$
Using the convolution property with a shifted impulse, $f(\omega) * \delta(\omega - \omega_0) = f(\omega - \omega_0)$, we get:
$$X_s(\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X(\omega - k\omega_s)$$
This is the fundamental result of the sampling process.
$$\boxed{\quad X_s(\omega) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X(\omega - k\omega_s) \quad}$$
**Interpretation:** The spectrum of the sampled signal, $X_s(\omega)$, is an infinite sum of periodically repeated copies of the original signal's spectrum, $X(\omega)$. Each copy is scaled by $1/T_s$ and is shifted in frequency by an integer multiple of the sampling frequency, $k\omega_s$.

---
#### 3. Graphical Interpretation

Imagine a signal $x(t)$ whose spectrum $X(\omega)$ is band-limited, meaning it is zero for frequencies beyond some maximum frequency $\omega_M$.

1.  **Original Spectrum:** $X(\omega)$ is a shape (e.g., a triangle) centered at $\omega=0$ and extending from $-\omega_M$ to $+\omega_M$.
2.  **Sampling Process:** When $x(t)$ is sampled, its spectrum $X(\omega)$ is replicated.
3.  **Sampled Spectrum:** $X_s(\omega)$ will have copies of the triangular spectrum centered at $\omega = 0, \pm\omega_s, \pm2\omega_s, \ldots$.

This periodic replication of the spectrum is the key to understanding both how a signal can be perfectly reconstructed from its samples and how errors like aliasing can occur. This directly leads to the conditions stated in the sampling theorem.

---
### Related Concepts
#sampling/related-concepts

> [[The Sampling Theorem (Nyquist-Shannon Theorem)]]

[[Effect of Undersampling (Aliasing)]]
[[Reconstruction from Samples using Interpolation]]
[[Continuous-Time Fourier Transform (CTFT)]]
[[Convolution and Multiplication Properties of CTFT]]
[[Fourier Transform of Periodic Signals]]
[[Discrete-Time Fourier Transform (DTFT)]]