---
tags:
  - signals-and-systems
  - lti-systems
  - frequency-response
  - filtering
  - control-systems
created: 2025-09-24
aliases:
  - Frequency Response
  - H(jω)
  - System Frequency Response
subject: "[[Signals & Systems]]"
parent:
  - Continuous-Time Fourier Transform (CTFT)
modified: 2026-07-23T16:45:52
---

### Frequency Response of LTI Systems
#frequency-response #lti-systems #filtering #steady-state-analysis

> The **Frequency Response** of a Linear Time-Invariant (LTI) system is a measure of how the system responds to sinusoidal inputs of different frequencies. It is one of the most important concepts for analyzing and designing systems, especially filters. The frequency response, denoted by $H(\omega)$ or $H(j\omega)$, completely characterizes the steady-state behavior of a stable LTI system.

#### 1. Eigenfunction Property of LTI Systems
#lti-systems/eigenfunction #complex-exponential

The foundation of frequency response lies in the fact that complex exponentials are **[[eigenfunctions]]** of LTI systems. An eigenfunction of a system is an input signal that passes through the system, producing an output that is the same function, scaled by a constant (the eigenvalue).

Let the input to an LTI system with [[Impulse Response of an LTI System|impulse response]] $h(t)$ be a complex exponential $x(t) = e^{j\omega_0 t}$. The output $y(t)$ is given by the [[Continuous-Time Convolution Integral|convolution]]:
$$\begin{align}
y(t) &= x(t) * h(t) = \int_{-\infty}^{\infty} h(\tau) x(t-\tau) d\tau \\
&= \int_{-\infty}^{\infty} h(\tau) e^{j\omega_0 (t-\tau)} d\tau \\
&= e^{j\omega_0 t} \int_{-\infty}^{\infty} h(\tau) e^{-j\omega_0 \tau} d\tau
\end{align}$$
The integral on the right is the [[Fourier Transforms|Fourier Transform]] of the impulse response $h(t)$, evaluated at the specific frequency $\omega = \omega_0$. Let's call this complex constant $H(\omega_0)$.

Thus, the output is:
$$\boxed{\quad y(t) = H(\omega_0) \cdot e^{j\omega_0 t} = H(\omega_0) \cdot x(t) \quad}$$
This shows that the output is the original complex exponential input, scaled by the complex number $H(\omega_0)$. The function $H(\omega)$ is the **[[Eigenvalues and Eigenvectors|eigenvalue]]** corresponding to the [[eigenfunctions|eigenfunction]] $e^{j\omega t}$.

---
#### 2. Definition of Frequency Response
#frequency-response/definition

The **Frequency Response $H(\omega)$** of an LTI system is formally defined as the Fourier Transform of its [[Impulse Response of an LTI System|impulse response]] $h(t)$.
$$\boxed{\quad H(\omega) = \mathcal{F}\{h(t)\} = \int_{-\infty}^{\infty} h(t) e^{-j\omega t} dt \quad}$$
The notation $H(j\omega)$ is also commonly used to emphasize the connection to the Laplace Transform [[The Transfer Function H(s)|transfer function]] $H(s)$.

---
#### 3. Magnitude and Phase Response
#magnitude-response #phase-response

Since $H(\omega)$ is a complex-valued function, it can be expressed in polar form:
$$H(\omega) = |H(\omega)| e^{j\angle H(\omega)}$$
*   **Magnitude Response $|H(\omega)|$**: This represents the **gain** of the system at frequency $\omega$. It tells us how much the amplitude of an input sinusoid at frequency $\omega$ is amplified or attenuated.
*   **Phase Response $\angle H(\omega)$**: This represents the **phase shift** introduced by the system at frequency $\omega$.

For a real sinusoidal input, $x(t) = A\cos(\omega_0 t + \phi)$, the steady-state output of a stable LTI system is:
$$\boxed{\quad y(t) = A |H(\omega_0)| \cos(\omega_0 t + \phi + \angle H(\omega_0)) \quad}$$
The output is also a sinusoid of the *same frequency* $\omega_0$, but its amplitude is scaled by $|H(\omega_0)|$ and its phase is shifted by $\angle H(\omega_0)$.

---
#### 4. Relationship to the Transfer Function
#transfer-function #laplace-transform

> See [[Frequency Response from Transfer Function]]

For an LTI system described by a [[Linear Constant-Coefficient Differential Equations (CT)|linear constant-coefficient differential equation]], we can find the frequency response by taking the Fourier transform of the equation. This leads to:
$$H(\omega) = \frac{Y(\omega)}{X(\omega)}$$
This is the same algebraic form as the Laplace-domain [[The Transfer Function H(s)|transfer function]] $H(s)$. The frequency response can be obtained directly from the transfer function by replacing the complex variable $s$ with $j\omega$.
$$\boxed{\quad H(\omega) = H(s)|_{s=j\omega} \quad}$$
This is a powerful shortcut that connects the s-domain analysis (poles and zeros) to the frequency-domain behavior of the system. This is valid only if the Region of Convergence (ROC) of $H(s)$ includes the $j\omega$-axis (which implies system stability).

---
#### 5. Applications: Filtering
#filtering

The shape of the magnitude response $|H(\omega)|$ determines the filtering characteristics of the system.
*   **Low-Pass Filter (LPF):** Allows low frequencies to pass ($|H(\omega)| \approx 1$ for small $\omega$) and attenuates high frequencies ($|H(\omega)| \approx 0$ for large $\omega$).
*   **High-Pass Filter (HPF):** Attenuates low frequencies and allows high frequencies to pass.
*   **Band-Pass Filter (BPF):** Allows a specific band of frequencies to pass and attenuates frequencies outside this band.
*   **Band-Stop Filter (BSF) / Notch Filter:** Attenuates a specific band of frequencies.

The frequency response is a fundamental tool for designing and analyzing these filters.

---
### Related Concepts
#frequency-response/related-concepts

> [[Continuous-Time Fourier Transform (CTFT)]]

[[Impulse Response of an LTI System]]
[[Response of LTI Systems to Complex Exponentials]]
[[Convolution and Multiplication Properties of CTFT]]
[[The Transfer Function H(s)]]
[[Filtering Concepts]]
[[Bandwidth in Signals & Systems]]
[[Control Systems]] (Bode plots are graphical representations of frequency response)