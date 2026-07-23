---
tags:
  - signal-processing
  - signals-and-systems
  - standard-signals
  - exponential-signals
  - sinusoidal-signals
  - eulers-formula
  - gate-ee
created: 2025-09-23
aliases:
  - Exponentials and Sinusoids
  - Euler's Formula
subject: "[[Signals & Systems]]"
parent:
  - Standard Signals
modified: 2026-07-23T16:34:07
---
### Exponential and Sinusoidal Signals
#exponential-signals #sinusoidal-signals #eulers-formula

> Exponential and sinusoidal signals are arguably the most important class of signals in the analysis of [[LTI|Linear Time-Invariant (LTI) systems]]. This is because complex exponential signals are the [[Response of LTI Systems to Complex Exponentials|eigenfunctions of LTI systems]]. Sinusoidal signals, through Euler's formula, can be represented as sums of complex exponentials, making their analysis straightforward.

---
#### Continuous-Time Exponential Signals
#exponential-signals

The most general form is the **complex exponential signal**.

-   **Complex Exponential**: A signal of the form $x(t) = C e^{st}$, where $C$ and $s$ are, in general, complex numbers. Let $s = \sigma + i\omega$. Then:
    $$\begin{align}
    x(t) &= C e^{(\sigma + i\omega)t} \\
     &= C e^{\sigma t} e^{i\omega t} \\
     &= C e^{\sigma t} (\cos(\omega t) + i\sin(\omega t))
    \end{align}$$
    -   The real part, $\sigma$, determines the rate of **growth** ($\sigma > 0$) or **decay** ($\sigma < 0$). It is the damping factor.
    -   The imaginary part, $\omega$, determines the **frequency of oscillation**.

-   **Real Exponential**: If $s$ is purely real ($s = a$, so $\omega=0$), the signal is a real exponential.
    $$\boxed{\quad x(t) = C e^{at} \quad}$$
    -   If $a > 0$, it is a growing exponential.
    -   If $a < 0$, it is a decaying exponential.
    -   If $a = 0$, it is a constant (DC) signal.

---
#### Continuous-Time Sinusoidal Signals
#sinusoidal-signals

Sinusoidal signals are the quintessential periodic signals used in engineering.

-   **General Form**:
    $$\boxed{\quad x(t) = A \cos(\omega_0 t + \phi) \quad}$$
-   **Parameters**:
    -   $A$: **Amplitude** - the peak value of the signal.
    -   $\omega_0$: **Angular Frequency** (in rad/s).
    -   $\phi$: **Phase** (in radians) - the time shift of the signal relative to a pure cosine.
-   **Periodicity**: Sinusoidal signals are periodic with fundamental period $T_0$.
    $$ T_0 = \frac{2\pi}{\omega_0} $$

---
#### The Bridge: Euler's Formula
#eulers-formula

Euler's formula provides the fundamental link between complex exponentials and sinusoids. It is a cornerstone of signal analysis.

-   **Euler's Formula**:
    $$\boxed{\quad e^{i\theta} = \cos(\theta) + i\sin(\theta) \quad}$$
-   **Inverse Relations**: This allows us to express sinusoids as a sum of two complex exponentials.
    $$\boxed{\quad \cos(\theta) = \frac{e^{i\theta} + e^{-i\theta}}{2} \quad}$$
    $$\boxed{\quad \sin(\theta) = \frac{e^{i\theta} - e^{-i\theta}}{2i} \quad}$$

**Significance**: This relationship means that the response of an LTI system to a sinusoidal input can be found by calculating its response to two complex exponential inputs (which is simple, as they are eigenfunctions) and then summing the results. This is the foundation of frequency-domain analysis and the [[Fourier Transforms|Fourier Transform]].

---
#### Discrete-Time Signals
#discrete-time-signals

The concepts translate directly to discrete-time signals.
-   **Exponential Sequence**: $x[n] = C\alpha^n$. The behavior depends on whether $|\alpha|$ is greater than, less than, or equal to 1.
-   **Sinusoidal Sequence**: $x[n] = A\cos(\Omega_0 n + \phi)$.
-   **Periodicity Condition**: A discrete-time sinusoid is periodic only if its frequency $\Omega_0$ is a rational multiple of $2\pi$, i.e., $\Omega_0 = 2\pi(k/N)$ for integers $k, N$.

---
### Related Concepts
#exponential-sinusoidal/related-concepts

> [[Response of LTI Systems to Complex Exponentials]]

[[Fourier Series|Fourier Series]] (Decomposing periodic signals into sinusoids/exponentials)
[[Fourier Transforms]] (Decomposing aperiodic signals into a spectrum of sinusoids/exponentials)
[[The Laplace Transform]] (Generalizes the concept of frequency to the complex frequency 's')
[[AC Circuit Analysis]] (Phasors are a direct application of complex exponentials for analyzing sinusoidal steady-state)
[[Signal Properties (Periodic & Aperiodic, Even & Odd)]]
