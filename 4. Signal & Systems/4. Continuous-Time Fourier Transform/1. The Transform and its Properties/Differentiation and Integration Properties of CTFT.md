---
tags:
  - signals-and-systems
  - fourier-transform
  - ctft-properties
  - calculus
created: 2025-09-24
aliases:
  - CTFT Differentiation Property
  - CTFT Integration Property
  - Fourier Transform of a Derivative
  - Fourier Transform of an Integral
subject: "[[Signals & Systems]]"
parent:
  - Continuous-Time Fourier Transform (CTFT)
modified: 2026-07-23T16:44:56
---
### Differentiation and Integration Properties of CTFT
#fourier-transform/properties #calculus-in-frequency-domain

> The differentiation and integration properties are fundamental to the application of Fourier transforms in solving engineering problems. They show how calculus operations in the time domain are converted into simpler algebraic operations in the frequency domain, which is particularly useful for analyzing [[Linear Constant-Coefficient Differential Equations (CT)|LTI systems described by differential equations]].

Throughout this note, we use the notation $x(t) \leftrightarrow X(\omega)$.

---
#### Differentiation in the Time Domain
#ctft/differentiation

The Fourier transform of the derivative of a signal $x(t)$ is obtained by multiplying the transform of the signal, $X(\omega)$, by a factor of $j\omega$.

> If $x(t) \leftrightarrow X(\omega)$, then its first derivative with respect to time is:
> $$\boxed{\quad \frac{d}{dt}x(t) \quad \leftrightarrow \quad j\omega X(\omega) \quad}$$
> This can be generalized for the n-th derivative:
> $$\boxed{\quad \frac{d^n}{dt^n}x(t) \quad \leftrightarrow \quad (j\omega)^n X(\omega) \quad}$$

**Derivation Sketch:**
The property can be derived by differentiating the inverse Fourier transform synthesis equation:
$$\begin{align}
x(t) &= \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) e^{j\omega t} d\omega \\
\frac{d}{dt}x(t) &= \frac{d}{dt} \left[ \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) e^{j\omega t} d\omega \right] \\
 &= \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) \frac{d}{dt}(e^{j\omega t}) d\omega \\
 &= \frac{1}{2\pi} \int_{-\infty}^{\infty} \underbrace{[j\omega X(\omega)]}_{\text{New Spectrum}} e^{j\omega t} d\omega
\end{align}$$
This final line is the inverse Fourier transform of $[j\omega X(\omega)]$.

**Significance:**
*   **Solving Differential Equations:** This property converts a differential equation for a signal/system in the time domain into an algebraic equation in the frequency domain, which is much easier to solve. For example, $y''(t) + ay'(t) + by(t) = x(t)$ becomes $(j\omega)^2 Y(\omega) + a(j\omega)Y(\omega) + bY(\omega) = X(\omega)$.
*   **High-Pass Filtering Effect:** The multiplication by $j\omega$ means that the magnitude of the spectrum is scaled by $\omega$. This acts as a high-pass filter, as it amplifies higher frequency components and attenuates lower ones. $|j\omega X(\omega)| = \omega|X(\omega)|$.

---
#### Integration in the Time Domain
#ctft/integration

The Fourier transform of the integral of a signal involves dividing the signal's transform by $j\omega$. However, it also requires an additional impulse term to correctly handle any DC component (average value) that accumulates in the integral.

> If $y(t) = \int_{-\infty}^{t} x(\tau)d\tau$, then its Fourier transform is:
> $$\boxed{\quad \int_{-\infty}^{t} x(\tau)d\tau \quad \leftrightarrow \quad \frac{1}{j\omega}X(\omega) + \pi X(0)\delta(\omega) \quad}$$

**Explanation of the Impulse Term:**
*   $X(0)$ is the value of the Fourier transform at $\omega=0$, which is equal to the total area under the time-domain signal: $X(0) = \int_{-\infty}^{\infty} x(\tau)d\tau$. This represents the DC component of $x(t)$.
*   If a signal $x(t)$ has a non-zero average value ($X(0) \neq 0$), its integral will grow or decrease indefinitely (like a ramp), and the resulting signal will not be absolutely integrable, meaning its standard Fourier transform doesn't converge.
*   The impulse term $\pi X(0)\delta(\omega)$ precisely accounts for the DC component present in the integrated signal.
*   **Important Special Case:** If the signal $x(t)$ has zero DC value (i.e., $X(0)=0$), the impulse term vanishes, and the property simplifies to $\int_{-\infty}^{t} x(\tau)d\tau \leftrightarrow \frac{1}{j\omega}X(\omega)$.

**Significance:**
*   **Analyzing Integrator Systems:** This property is used to analyze systems that perform integration.
*   **Low-Pass Filtering Effect:** The division by $j\omega$ means the spectral magnitude is scaled by $1/\omega$. This acts as a low-pass filter, attenuating higher frequencies and amplifying lower ones. $|\frac{1}{j\omega}X(\omega)| = \frac{1}{\omega}|X(\omega)|$.

---
#### Duality: Differentiation in the Frequency Domain
#ctft/frequency-differentiation

By the [[Properties of the CTFT|duality property]], differentiation in one domain corresponds to multiplication by a time variable in the other.

> Differentiation in the frequency domain corresponds to multiplication by $-jt$ in the time domain.
> $$\boxed{\quad -jt x(t) \quad \leftrightarrow \quad \frac{d}{d\omega}X(\omega) \quad}$$

This property is less common in basic system analysis but is useful in more advanced topics like signal duration analysis and group delay calculations.

---
### Related Concepts
#fourier-transform/related-concepts

> [[Continuous-Time Fourier Transform (CTFT)]]

[[Linear Constant-Coefficient Differential Equations (CT)]]
[[Frequency Response of LTI Systems]]
[[Filtering Concepts]]
[[Properties of the CTFT (Linearity, Duality, Time/Frequency Shifting)]]
[[Convolution and Multiplication Properties of CTFT]]