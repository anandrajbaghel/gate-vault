---
tags:
  - signal-processing
  - signals-and-systems
  - lti-systems
  - convolution
  - time-domain-analysis
  - gate-ee
created: 2025-09-24
aliases:
  - Convolution
  - Convolution Integral
  - Continuous-Time Convolution
  - Integral of a Convolution
  - "Video : What is Convolution? (3Blue1Brown)"
  - The Convolution Theorem
subject: "[[Signals & Systems]]"
parent:
  - Linear Time-Invariant (LTI) Systems
youtube:
  - KuXjwB4LzSA
formula:
  - "Convolution (Continuous) : $$y(t) = x(t) * h(t) = \\int_{-\\infty}^{\\infty} x(\\tau) h(t-\\tau) d\\tau$$"
  - "Properties/Convolution with an Impulse : $$x(t) * \\delta(t-t_0) = x(t-t_0)$$"
modified: 2026-07-22T17:31:30
---
### Continuous-Time Convolution Integral
#convolution #lti-systems #time-domain-analysis

> The **convolution integral** is the fundamental mathematical operation used to determine the output of a [[LTI|Linear Time-Invariant (LTI) system]] in the time domain. ==It expresses the output signal, $y(t)$, as a function of the input signal, $x(t)$, and the system's [[Impulse Response of an LTI System|impulse response]], $h(t)$. The convolution operation is denoted by an asterisk ($*$).==
$$\boxed{\quad y(t) = x(t) * h(t) \quad}$$

#### Definition of the Convolution Integral
#convolution-formula

The convolution of two continuous-time signals, $x(t)$ and $h(t)$, is defined by the integral:
$$\boxed{\quad y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t-\tau) d\tau \quad}$$
Here, $\tau$ is the integration variable (a dummy variable). The integral calculates the output $y(t)$ for each specific value of time $t$.

> [!memory] Interpretation
> The convolution integral can be interpreted as a "weighted average" of the input signal $x(t)$. The impulse response $h(t)$ acts as the weighting function. For each time $t$, the output is a sum of the contributions from all past inputs, each weighted by how long ago it occurred, as defined by the shape of $h(t)$.

---
#### Graphical Convolution: The "Flip and Shift" Method
#graphical-convolution

![[Graphical and Analytical Convolution#Graphical Convolution The "Flip and Shift" Method]]

#### 🔥Properties of Convolution
#convolution-properties

Convolution is an algebraic operation with several key properties that are useful for analysis and simplification.

- **Commutative Property**: The order of convolution does not matter. This is extremely useful, as it allows us to choose the simpler of the two functions to flip and shift. $$\boxed{\quad x(t) * h(t) = h(t) * x(t) \quad}$$
- **Associative Property**: For systems in cascade, the overall impulse response is the convolution of the individual impulse responses. $$\boxed{\quad [x(t) * h_1(t)] * h_2(t) = x(t) * [h_1(t) * h_2(t)] \quad}$$
- **Distributive Property**: For systems in parallel, the overall impulse response is the sum of the individual impulse responses. $$\boxed{\quad x(t) * [h_1(t) + h_2(t)] = [x(t) * h_1(t)] + [x(t) * h_2(t)] \quad}$$
- **Convolution with an Impulse**: Convolving a signal with a shifted impulse simply shifts the signal. $$\boxed{\quad x(t) * \delta(t-t_0) = x(t-t_0) \quad}$$

> [!memory]- Useful results / Frequency-domain interpretation
> 
> > **Integral of a Convolution**
>
> The integral of a convolution equals the product of the integrals of the signals.
> 1. Valid for all absolutely integrable signals.
> 2. Doesn’t hold for signals like pure sinusoids (which don’t have a finite integral).
> 3. Always valid for finite-duration, causal signals.
> $$\int_{-\infty}^{\infty} (x_1*x_2)(t)\,dt = \left(\int_{-\infty}^{\infty} x_1(t)\,dt\right)\left(\int_{-\infty}^{\infty} x_2(t)\,dt\right)$$
> 
> ---
> $$\int_{-\infty}^{\infty} y(t)\,dt = Y(j0) = X_1(j0)\,X_2(j0) = \left(\int_{-\infty}^{\infty} x_1(t)\,dt\right) \left(\int_{-\infty}^{\infty} x_2(t)\,dt\right)$$
> 
> ---
> ###### Why it works?
> Because convolution in time domain corresponds to multiplication in frequency domain, and integrating in time corresponds to evaluating the frequency response at $\omega = 0$.
> That is,
> $$Y(j\omega) = X_1(j\omega) X_2(j\omega) \Rightarrow Y(0) = X_1(0)X_2(0)$$
> and
> $$X(0) = \int x(t)dt$$
> The Fourier Transform of a signal at zero frequency equals the time integral of that signal.

---
#### The Convolution Theorem
#convolution-theorem

The **Convolution Theorem** is one of the most powerful results in signal processing. It states that convolution in the time domain is equivalent to simple multiplication in the frequency domain.

> **Time Domain**: $$y(t) = x(t) * h(t)$$
> **Frequency Domain**: $$\boxed{\quad Y(\omega) = X(\omega)H(\omega) \quad}$$

This theorem often provides a much easier path to finding the system's output, especially for complex signals, by avoiding direct integration.

> [!mistake] Critical Exam Traps
> * **LTI Prerequisite**: $y(t) = x(t) * h(t)$ holds **ONLY** if the system is both **Linear** AND **Time-Invariant**. If a system is non-linear or time-varying, convolution cannot be applied.
> * **DT Step Convolution Scale**: Remember $u[n] * u[n] = (n+1)u[n]$, NOT $n u[n]$.

> [!examtip] High-Yield Standard Convolution Results
> **Discrete-Time:**
> * $u[n] * u[n] = (n + 1) u[n]$
> * $a^n u[n] * u[n] = \frac{1 - a^{n+1}}{1 - a} u[n] \quad (a \neq 1)$
> 
> **Continuous-Time:**
> * $\text{rect}(t/T) * \text{rect}(t/T) =$ Triangular pulse of total duration $2T$
> * $\text{rect}(t/T_1) * \text{rect}(t/T_2) =$ Trapezoidal pulse of total duration $T_1 + T_2 \quad (T_1 \neq T_2)$
> * $u(t) * u(t) = r(t) = t u(t)$
> * $e^{-at} u(t) * e^{-bt} u(t) = \frac{e^{-at} - e^{-bt}}{b - a} u(t) \quad (a \neq b)$
> * $e^{-at} u(t) * e^{-at} u(t) = t e^{-at} u(t)$

---
### Related Concepts
#convolution/related-concepts

> [[Impulse Response of an LTI System]]

[[Properties of Convolution]]
[[Discrete-Time Convolution Sum]] (The discrete-time counterpart)
[[LTI|Linear Time-Invariant (LTI) Systems]]
[[Graphical and Analytical Convolution]]
[[The Laplace Transform]] ($s= \sigma + i\omega$)
[[Fourier Transforms]] ($s= i\omega$ , here $\sigma = 0$)
