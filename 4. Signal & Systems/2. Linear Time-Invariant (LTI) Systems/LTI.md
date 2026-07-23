---
updated: 2026-07-13
tags:
  - lti-systems
  - signals-and-systems
  - control-systems
  - map-of-content
aliases:
  - LTI Systems MOC
  - Linear Time-Invariant Systems
  - Linear Time-Invariant (LTI) Systems
  - Linear Time-Invariant (LTI) system
created: 2026-07-04
subject:
  - "[[Signals & Systems]]"
  - "[[Control Systems]]"
parent: "[[System Analysis]]"
modified: 2026-07-23T16:40:04
---
### Linear Time-Invariant (LTI) Systems
#lti-systems #signals-and-systems #map-of-content

> ==An **LTI (Linear Time-Invariant) System** is a mathematical model of a physical system that satisfies two fundamental properties: **Linearity** (satisfying superposition and homogeneity) and **Time-Invariance** (a time shift in the input causes an identical time shift in the output).== Because of these properties, the behavior of the entire system can be completely characterized by its [[Impulse Response of an LTI System|impulse response]] $h(t)$.

```mermaid
mindmap
  root((LTI Systems))
    Core Properties
      Linearity
        Superposition
        Homogeneity
      Time Invariance
        Shift Invariance
    Time Domain Analysis
      Impulse Response h t
      Convolution Integral / Sum
      Step Response
    Frequency Domain Analysis
      Frequency Response H j omega
      Fourier Transform
      Magnitude and Phase
    Complex Domain Analysis
      Transfer Function H s / H z
      Laplace / Z Transform
      Poles and Zeros
    System Characteristics
      Causality
      Stability BIBO
      Invertibility
````

---
#### 1. Core Properties & Definitions

These atomic notes define the absolute mathematical boundaries of what makes a system LTI.

- [[Linearity|Linearity and Superposition]] (The additivity and scaling principles)
- [[Time-Invariance]] (Response does not depend on absolute time)
- [[Causality]] (System does not anticipate the future)
- [[BIBO Stability]] (Bounded-Input Bounded-Output constraints)

---
#### 2. Time-Domain Analysis

In the time domain, the output $y(t)$ of an LTI system is simply the convolution of the input signal $x(t)$ with the system's impulse response $h(t)$.
$$\boxed{\quad y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau)h(t-\tau)d\tau \quad}$$

- [[Impulse Response of an LTI System]] ($h(t)$ or $h[n]$) 
- [[Continuous-Time Convolution Integral]]
- [[Discrete-Time Convolution Sum]]
- [[First-Order System Response]] (System response to $u(t)$)
- [[Interconnection of LTI Systems]] (Series, Parallel, and Feedback cascades)

---
#### 3. Transform Domain Analysis (Laplace & Z)

Convolution in the time domain becomes algebraic multiplication in the complex domain. This is the foundation of [[Control Systems]].
$$Y(s) = X(s)H(s)$$

- [[The Transfer Function H(s)]] (Continuous time) 
- [[The Transfer Function H(z)]] (Discrete time)
- [[Poles and Zeros of a Transfer Function]] (The roots that dictate transient behavior)
- [[Block Diagram Reduction]] (Simplifying complex LTI models)

---
#### 4. Frequency Domain Analysis

If you feed a complex exponential $e^{j\omega t}$ into an LTI system, the output is the _exact same_ complex exponential, just scaled in magnitude and shifted in phase by $H(j\omega)$.

- [[Frequency Domain Transfer Function]] (Substituting $s = j\omega$)  
- [[Filtering Concepts]] (How LTI systems reshape spectra)
- [[Bode Plots]] (Visualizing $H(j\omega)$)
- [[Distortionless Transmission]] (Conditions for linear phase and flat magnitude)  

> [!examtip] Exam Strategy
> GATE heavily tests the boundaries of LTI systems. You will frequently be given a mathematical operator (e.g., $y(t) = t \cdot x(t)$ or $y(t) = x(t^2)$) and asked to classify if it is Linear, Time-Invariant, Causal, and Stable.
> 
> > [!hint]
> > Always test Time-Invariance first, as time-scaling or time-reversing inside the argument immediately breaks it.

---
### Related Concepts

> [[State-Space Representation of LTI Systems]] (Modern control theory for MIMO LTI systems)

[[Nyquist Stability Criterion]]
