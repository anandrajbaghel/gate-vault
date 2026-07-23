---
tags:
  - signal-processing
  - signals-and-systems
  - lti-systems
  - impulse-response
  - convolution
  - gate-ee
created: 2025-09-24
aliases:
  - Impulse Response
  - h(t)
  - h[n]
  - DNA
  - fingerprint
subject: "[[Signals & Systems]]"
parent:
  - "[[LTI|Linear Time-Invariant (LTI) Systems]]"
modified: 2026-07-23T16:37:18
---
### The Impulse Response of an LTI System
#impulse-response #lti-systems #system-characterization

> ==The **impulse response** of a [[LTI]], denoted by $h(t)$ for continuous-time or $h[n]$ for discrete-time, is the output of the system when the input is a unit impulse function ($\delta(t)$ or $\delta[n]$).== This single signal is profoundly important because it **completely characterizes** the LTI system. Knowing the impulse response is equivalent to knowing the system itself.

$$ x(t) = \delta(t) \quad \rightarrow \quad \boxed{\text{LTI System}} \quad \rightarrow \quad y(t) = h(t) $$

#### 🧬 The "DNA" of an LTI System 
#system-fingerprint

The impulse response is often called the "DNA" or "fingerprint" of an LTI system. This is because, due to the properties of linearity and time-invariance, if you know the system's response to a simple impulse, you can determine its response to *any* arbitrary input signal using the operation of [[Continuous-Time Convolution Integral|convolution]].

---
#### Input-Output Relationship: Convolution
#convolution

The output $y(t)$ of any LTI system is the convolution of the input signal $x(t)$ with the system's impulse response $h(t)$.

-   **Continuous-Time (CT)**: The output is given by the **convolution integral**.
    $$\boxed{\quad y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t-\tau) d\tau \quad}$$
-   **Discrete-Time (DT)**: The output is given by the **convolution sum**.
    $$\boxed{\quad y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k] \quad}$$
This relationship is the central result of LTI system theory in the time domain.

---
#### Determining System Properties from the Impulse Response
#system-properties/impulse-response 

The impulse response provides a direct way to test for key system properties.

1.  **Causality**: An LTI system is causal if its output does not depend on future inputs. This translates to the impulse response being zero for negative time.
    $$\boxed{\quad \text{Causal LTI System} \iff h(t) = 0 \text{ for } t < 0 \quad}$$
    (For DT: $h[n]=0$ for $n<0$)
> [!pyq]- PYQ : 2019
> ![[ee_2019#^q7]]

2.  **Stability (BIBO)**: An LTI system is BIBO stable if its impulse response is absolutely integrable (for CT) or absolutely summable (for DT).
    $$\boxed{\quad \text{Stable LTI System} \iff \int_{-\infty}^{\infty} |h(t)| dt < \infty \quad}$$
    (For DT: $\sum_{n=-\infty}^{\infty}|h[n]| < \infty$)

3.  **Memory**: An LTI system is memoryless if and only if its impulse response is a scaled impulse.
    $$ \text{Memoryless LTI System} \iff h(t) = K \delta(t) $$

---
#### The Link to the Frequency Domain
#transfer-function

The impulse response provides the bridge between the time-domain and frequency-domain analysis of an LTI system.

> [!memory]
> The **Transfer Function** (or Frequency Response) of an LTI system is the [[Fourier Transforms|Fourier Transform]] (or [[The Laplace Transform|Laplace]]/[[The Z-Transform|Z-Transforms]]) of its impulse response.

-   **CT (Fourier)**: $$H(\omega) = \mathcal{F}\{h(t)\}$$
-   **CT (Laplace)**: $$H(s) = \mathcal{L}\{h(t)\}$$
-   **DT (DTFT)**: $$H(e^{j\Omega}) = \mathcal{F}\{h[n]\}$$
-   **DT (Z-Transform)**: $$H(z) = \mathcal{Z}\{h[n]\}$$

This transforms the convolution operation in the time domain into a much simpler **multiplication** operation in the frequency domain:
$$\boxed{\quad Y(\omega) = X(\omega)H(\omega) \quad}$$

---
### Related Concepts
#impulse-response/related-concepts

> [[LTI]]

[[Transfer Function and Impulse Response]] (in Control System)
[[Continuous-Time Unit Impulse and Unit Step Functions]]
[[Discrete-Time Unit Impulse and Unit Step Sequences]]
[[Continuous-Time Convolution Integral]]
[[Discrete-Time Convolution Sum]]
[[Causality of LTI Systems in terms of Impulse Response]]
[[Stability of LTI Systems in terms of Impulse Response]]
[[The Transfer Function H(s)]]
[[The Transfer Function H(z)]]

