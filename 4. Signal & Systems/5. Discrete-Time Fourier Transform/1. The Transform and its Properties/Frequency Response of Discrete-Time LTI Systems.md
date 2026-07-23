---
tags:
  - signals-and-systems
  - lti-systems
  - frequency-response
  - dtft
  - dsp
  - digital-filters
created: 2025-09-24
aliases:
  - Discrete-Time Frequency Response
  - H(e^jω)
  - Digital Filter Frequency Response
subject: "[[Signals & Systems]]"
parent:
  - Discrete-Time Fourier Transform (DTFT)
modified: 2026-07-23T16:46:05
---
### Frequency Response of Discrete-Time LTI Systems
#frequency-response #lti-systems #dtft #dsp #digital-filters

> The **Frequency Response** of a discrete-time Linear Time-Invariant (LTI) system describes its steady-state behavior when subjected to sinusoidal inputs. It is a fundamental tool for analyzing and designing digital filters and other discrete-time systems. The frequency response, denoted by $H(e^{j\omega})$, is the [[Representation of Aperiodic Discrete-Time Signals|Discrete-Time Fourier Transform (DTFT)]] of the system's [[Impulse Response of an LTI System|impulse response]].

---
#### 1. Eigenfunction Property of Discrete-Time LTI Systems
#lti-systems/eigenfunction #complex-exponential

Similar to the continuous-time case, complex exponentials are [[eigenfunctions]] of discrete-time LTI systems. When the input is a complex exponential sequence, the output is the same sequence scaled by a complex constant.

Let the input to an LTI system with impulse response $h[n]$ be $x[n] = e^{j\omega_0 n}$. The output $y[n]$ is given by the [[Discrete-Time Convolution Sum|convolution sum]]:
$$\begin{align}
y[n] &= x[n] * h[n] = \sum_{k=-\infty}^{\infty} h[k] x[n-k] \\
&= \sum_{k=-\infty}^{\infty} h[k] e^{j\omega_0 (n-k)} \\
&= e^{j\omega_0 n} \left( \sum_{k=-\infty}^{\infty} h[k] e^{-j\omega_0 k} \right)
\end{align}$$
The term in the parenthesis is the DTFT of the impulse response $h[n]$, evaluated at the frequency $\omega = \omega_0$. Let's call this complex constant $H(e^{j\omega_0})$.

Thus, the output is:
$$\boxed{\quad y[n] = H(e^{j\omega_0}) \cdot e^{j\omega_0 n} = H(e^{j\omega_0}) \cdot x[n] \quad}$$
The function $H(e^{j\omega})$ is the **eigenvalue** corresponding to the eigenfunction $e^{j\omega n}$.

---
#### 2. Definition of Frequency Response
#frequency-response/definition

The **Frequency Response $H(e^{j\omega})$** of a discrete-time LTI system is formally defined as the DTFT of its [[Impulse Response of an LTI System|impulse response]] $h[n]$.
$$\boxed{\quad H(e^{j\omega}) = \mathcal{F}\{h[n]\} = \sum_{n=-\infty}^{\infty} h[n] e^{-j\omega n} \quad}$$

---
#### 3. Magnitude and Phase Response
#magnitude-response #phase-response

Since $H(e^{j\omega})$ is a complex-valued function of the continuous frequency variable $\omega$, it can be expressed in polar form:
$$H(e^{j\omega}) = |H(e^{j\omega})| e^{j\angle H(e^{j\omega})}$$
*   **Magnitude Response $|H(e^{j\omega})|$**: The **gain** of the system at frequency $\omega$.
*   **Phase Response $\angle H(e^{j\omega})$**: The **phase shift** introduced by the system at frequency $\omega$.

For a real sinusoidal input, $x[n] = A\cos(\omega_0 n + \phi)$, the steady-state output of a stable LTI system is:
$$\boxed{\quad y[n] = A |H(e^{j\omega_0})| \cos(\omega_0 n + \phi + \angle H(e^{j\omega_0})) \quad}$$
The output is a sinusoid of the same frequency $\omega_0$, with its amplitude scaled by the gain and its phase shifted by the phase response at that frequency.

---
#### 4. Periodicity of the Frequency Response
#dtft/periodicity

A key property of the DTFT is that it is always periodic with a period of $2\pi$. Therefore, the frequency response of any discrete-time LTI system is also periodic.
$$H(e^{j(\omega+2\pi)}) = H(e^{j\omega})$$
This means all the information about the system's frequency response is contained within the frequency interval $[-\pi, \pi]$ or $[0, 2\pi]$.

---
#### 5. Frequency Response from Difference Equations
#difference-equation

For a system described by a [[Linear Constant-Coefficient Difference Equations (DT)|linear constant-coefficient difference equation]], we can find the frequency response by taking the DTFT of the equation and applying the time-shifting property ($x[n-n_0] \leftrightarrow e^{-j\omega n_0} X(e^{j\omega})$).
$$\sum_{k=0}^{N} a_k y[n-k] = \sum_{k=0}^{M} b_k x[n-k]$$
Transforming both sides yields:
$$Y(e^{j\omega}) \sum_{k=0}^{N} a_k e^{-j\omega k} = X(e^{j\omega}) \sum_{k=0}^{M} b_k e^{-j\omega k}$$
The frequency response is the ratio $H(e^{j\omega}) = Y(e^{j\omega}) / X(e^{j\omega})$:
$$\boxed{\quad H(e^{j\omega}) = \frac{\sum_{k=0}^{M} b_k e^{-j\omega k}}{\sum_{k=0}^{N} a_k e^{-j\omega k}} \quad}$$

---
#### 6. Relationship to the Z-Transform
#z-transform #transfer-function

The frequency response is directly related to the system's Z-domain [[The Transfer Function H(z)|transfer function]], $H(z)$. It can be obtained by evaluating $H(z)$ on the unit circle in the z-plane.
$$\boxed{\quad H(e^{j\omega}) = H(z)|_{z=e^{j\omega}} \quad}$$
This relationship holds if and only if the **Region of Convergence (ROC)** of the transfer function $H(z)$ includes the unit circle. This is also the condition for the system to be **BIBO stable**.

---
### Related Concepts
#frequency-response/related-concepts

> [[Discrete-Time Fourier Transform (DTFT)]]

[[Impulse Response of an LTI System]]
[[Discrete-Time Convolution Sum]]
[[Linear Constant-Coefficient Difference Equations (DT)]]
[[The Transfer Function H(z)]]
[[Causality and Stability in the z-domain]]