---
tags:
  - signal-processing
  - signals-and-systems
  - lti-systems
  - eigenfunctions
  - frequency-response
  - gate-ee
created: 2025-09-24
aliases:
  - Eigenfunctions of LTI Systems
  - LTI System Response to Exponentials
subject: "[[Signals & Systems]]"
parent:
  - Fourier Series Representation of Periodic Signals
modified: 2026-07-23T16:43:39
---
### Response of LTI Systems to Complex Exponentials
#eigenfunction #frequency-response #lti-systems

> The response of a [[LTI|Linear Time-Invariant (LTI) system]] to a complex exponential input is remarkably simple and forms the basis of all frequency-domain analysis (including Fourier and Laplace/Z transforms). **Complex exponentials are the eigenfunctions of LTI systems.** This means that when the input is a complex exponential, the output is the same complex exponential, merely scaled by a complex constant (the eigenvalue).

> [!warning] Eigenfunctions
> A function that, when an [[operator]] (such as a derivative, integral, or system operator) acts on it, gives back the **same function**, only multiplied by a constant called the **[[Eigenvalues and Eigenvectors|eigenvalues]]**.

> See [[Eigen-signals of LTI Systems]]

---
#### Continuous-Time (CT) Eigenfunction Analysis
#ct-eigenfunction

Let the input to a CT LTI system with impulse response $h(t)$ be a complex exponential $x(t) = e^{st}$, where $s = \sigma + j\omega$ is a complex number.

The output $y(t)$ is found by the convolution integral:
$$\begin{align}
y(t) &= \int_{-\infty}^{\infty} h(\tau) x(t-\tau) d\tau \\
&= \int_{-\infty}^{\infty} h(\tau) e^{s(t-\tau)} d\tau \\
&= \int_{-\infty}^{\infty} h(\tau) e^{st} e^{-s\tau} d\tau \\
&= e^{st} \left( \int_{-\infty}^{\infty} h(\tau) e^{-s\tau} d\tau \right)
\end{align}$$
The term in the parenthesis is a constant that depends only on the system's impulse response $h(t)$ and the complex frequency $s$. It is, by definition, the [[The Laplace Transform|Laplace Transform]] of the impulse response, which is the system's [[The Transfer Function H(s)|transfer function]], $H(s)$.

Therefore, the output is:
$$\boxed{\quad y(t) = H(s) \cdot e^{st} \quad \text{where} \quad H(s) = \int_{-\infty}^{\infty} h(\tau) e^{-s\tau} d\tau \quad}$$
-   **Eigenfunction**: The input signal, $e^{st}$.
-   **Eigenvalue**: The complex scaling factor, $H(s)$, which is the system's transfer function evaluated at the input's complex frequency $s$.

---
#### Discrete-Time (DT) Eigenfunction Analysis
#dt-eigenfunction

The same property holds for discrete-time LTI systems. Let the input be $x[n] = z^n$.
The output $y[n]$ is found by the convolution sum:
$$\begin{align}
y[n] &= \sum_{k=-\infty}^{\infty} h[k] x[n-k] \\
&= \sum_{k=-\infty}^{\infty} h[k] z^{n-k} \\
&= \sum_{k=-\infty}^{\infty} h[k] z^n z^{-k} \\
&= z^n \left( \sum_{k=-\infty}^{\infty} h[k] z^{-k} \right)
\end{align}$$
The term in the parenthesis is the [[The Z-Transform|Z-Transform]] of the impulse response, which is the system's [[The Transfer Function H(z)|transfer function]], $H(z)$.

Therefore, the output is:
$$\boxed{\quad y[n] = H(z) \cdot z^n \quad \text{where} \quad H(z) = \sum_{k=-\infty}^{\infty} h[k] z^{-k} \quad}$$
-   **Eigenfunction**: The input sequence, $z^n$.
-   **Eigenvalue**: The complex scaling factor, $H(z)$.

---
#### Application: Sinusoidal Steady-State Response (Frequency Response)
#frequency-response

This eigenfunction property is the reason frequency-domain analysis is so powerful. Consider a purely sinusoidal input, which is a special case where $s=j\omega_0$.
The input is $x(t) = A\cos(\omega_0 t + \phi)$. Using Euler's formula:
$$ x(t) = \frac{A}{2} \left( e^{j(\omega_0 t + \phi)} + e^{-j(\omega_0 t + \phi)} \right) = \frac{A e^{j\phi}}{2}e^{j\omega_0 t} + \frac{A e^{-j\phi}}{2}e^{-j\omega_0 t} $$
This is a sum of two complex exponentials. By linearity, the output is the sum of the responses to each term:
$$ y(t) = \frac{A e^{j\phi}}{2} [H(j\omega_0) e^{j\omega_0 t}] + \frac{A e^{-j\phi}}{2} [H(-j\omega_0) e^{-j\omega_0 t}] $$
Since $h(t)$ is real, $H(-j\omega_0) = H^*(j\omega_0)$. Letting $H(j\omega_0) = |H(j\omega_0)|e^{j\angle H(j\omega_0)}$, and after some algebra, the terms combine to give the final steady-state response:
$$\boxed{\quad y(t) = A|H(j\omega_0)| \cos(\omega_0 t + \phi + \angle H(j\omega_0)) \quad}$$
**Interpretation**: An LTI system **never changes the frequency** of a sinusoidal input. It only:
1.  **Scales the Amplitude** by a factor of $|H(j\omega_0)|$ (the magnitude of the frequency response).
2.  **Shifts the Phase** by an amount $\angle H(j\omega_0)$ (the phase of the frequency response).

---
### Related Concepts
#eigenfunction/related-concepts

> [[Fourier Series|Fourier Series]] and [[Fourier Transforms]] (These tools decompose arbitrary signals into a sum/integral of complex exponentials, allowing this property to be used).

[[Eigen-signals of LTI Systems]]
[[The Transfer Function H(s)]]
[[The Transfer Function H(z)]]
[[Frequency Response of LTI Systems]]
[[AC Circuit Analysis]] (Phasor analysis is a direct application of this principle).