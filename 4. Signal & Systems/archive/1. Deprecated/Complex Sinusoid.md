---
tags:
  - signal-processing
  - complex-numbers
  - sinusoids
  - fourier-analysis
  - phasors
aliases:
  - Complex Sinusoid
  - Complex Exponential
created: 2025-09-12
subject: "[[Signals & Systems|Signals & Systems]]"
parent: Elementary Signals
modified: 2026-07-23T16:52:21
---
### Complex Sinusoid
#complex-sinusoid #complex-exponential

> A **complex sinusoid** (or complex exponential) is a fundamental signal in engineering that generalizes the concept of sines and cosines into the complex plane. It is a function of time that rotates in the complex plane at a constant frequency, and its real and imaginary parts represent real-world sinusoids. It is the mathematical backbone of [[Phasor Analysis]] and [[Fourier Transforms|Fourier analysis]].

#### Mathematical Representation
#complex-sinusoid/definition

A complex sinusoidal signal $x(t)$ is represented as:
$$\boxed{\quad x(t) = A e^{j(\omega_0 t + \phi)} \quad}$$
*   $A$ is the real-valued amplitude.
*   $\omega_0$ is the angular frequency in rad/s.
*   $\phi$ is the initial phase angle in radians.

Using [[Euler's Formula]], this can be expanded into its real and imaginary components:
$$\boxed{\quad x(t) = A[\cos(\omega_0 t + \phi) + j\sin(\omega_0 t + \phi)] \quad}$$
*   **Real Part**: $\text{Re}\{x(t)\} = A\cos(\omega_0 t + \phi)$
*   **Imaginary Part**: $\text{Im}\{x(t)\} = A\sin(\omega_0 t + \phi)$

The complex sinusoid is a vector in the complex plane with:
*   **Magnitude**: $|x(t)| = |A e^{j(\omega_0 t + \phi)}| = A |e^{j(\omega_0 t + \phi)}| = A$. The magnitude is **constant** for all time.
*   **Phase**: $\angle x(t) = \omega_0 t + \phi$. The phase angle **increases linearly with time**.

Graphically, it represents a point rotating counter-clockwise (for $\omega_0 > 0$) around a circle of radius $A$ in the complex plane, tracing out a helical path in 3D (real, imaginary, time axes).

---
#### Relationship to Phasors
#phasors

The complex sinusoid is directly related to the concept of a phasor. A phasor is simply the complex amplitude of the sinusoid, capturing its magnitude and initial phase.
$$\text{If } x(t) = A e^{j(\omega_0 t + \phi)} = (A e^{j\phi})e^{j\omega_0 t}$$
Then the corresponding phasor is:
$$\mathbf{X} = A e^{j\phi} = A \angle \phi$$

---
#### Significance in Signals and Systems
#complex-sinusoid/significance

##### 1. Mathematical Convenience
It is much easier to perform mathematical operations like differentiation and integration on exponential functions than on trigonometric functions.
*   $\frac{d}{dt}(e^{j\omega_0 t}) = j\omega_0 e^{j\omega_0 t}$ (Differentiation becomes multiplication)
*   $\int e^{j\omega_0 t} dt = \frac{1}{j\omega_0} e^{j\omega_0 t}$ (Integration becomes division)
This property transforms linear differential equations into simpler algebraic equations, which is the basis of frequency-domain analysis.

##### 2. Eigenfunction of LTI Systems
This is one of the most important properties in signal processing.
> A complex sinusoid is an **eigenfunction** of a [[LTI|Linear Time-Invariant (LTI) system]]. This means that if the input to an LTI system is a complex sinusoid, the output will be the **same complex sinusoid**, only scaled by a complex constant.

If the input is $x(t) = e^{j\omega_0 t}$, and the system has an impulse response $h(t)$, the output is:
$$y(t) = x(t) * h(t) = H(j\omega_0) e^{j\omega_0 t}$$
The complex scaling factor $H(j\omega_0)$ is the system's **frequency response** at the frequency $\omega_0$, which is the Fourier transform of the impulse response. This property makes Fourier analysis an incredibly powerful tool for analyzing LTI systems.

##### 3. Foundation of Fourier Analysis
The [[Fourier Series]] and [[Fourier Transforms|Fourier Transform]] are built on the principle that any practical signal can be represented as a sum or integral of complex sinusoids.

---
### Related Concepts
#related-concepts

> [[Euler's Formulae for Fourier Coefficients|Euler's Formulas]] (The core mathematical identity)

[[AC Circuit Analysis|Phasor Analysis]] (The practical application in circuit analysis)
[[Fourier Transforms]]
[[Fourier Series|Fourier Series]]
[[LTI]] (Where complex sinusoids are eigenfunctions)
[[Signals & Systems]]