---
tags:
  - signal-processing
  - signals-and-systems
  - lti-systems
  - memoryless-systems
  - dynamic-systems
  - impulse-response
  - gate-ee
created: 2025-09-24
aliases:
  - Memory in LTI Systems
  - Memoryless LTI Systems
  - "Examples : LTI Systems with Memory"
subject: "[[Signals & Systems]]"
parent:
  - Properties of LTI Systems
modified: 2026-07-23T16:38:59
---
### LTI Systems with and without Memory
#memory-in-lti-systems #memoryless-lti #impulse-response

> The property of [[Memory and Memoryless Systems|memory]] in a system describes whether its output depends solely on the present input or also on past/future inputs. For [[LTI|Linear Time-Invariant (LTI) systems]], this property can be determined definitively and easily by inspecting the system's [[Impulse Response of an LTI System|impulse response]], $h(t)$ or $h[n]$.

#### Memoryless LTI Systems (Static)
#memoryless-lti

A system is memoryless if its output at any time is a function of the input only at that same time. For an LTI system, this imposes a very strict condition on its impulse response.

> An LTI system is **memoryless** if and only if its impulse response is a scaled impulse function located at the origin.

-   **Continuous-Time (CT)**:
    $$\boxed{\quad h(t) = K \delta(t) \quad \text{for some constant K} \quad}$$
-   **Discrete-Time (DT)**:
    $$\boxed{\quad h[n] = K \delta[n] \quad \text{for some constant K} \quad}$$

##### Why This Condition Holds
The output of an LTI system is given by the convolution of the input with the impulse response. If $h(t) = K\delta(t)$, the output is:
$$\begin{align}
y(t) &= x(t) * h(t) \\
 &= x(t) * (K\delta(t)) \\
 &= K \cdot (x(t) * \delta(t)) \\
 &= K x(t)
\end{align}$$
The output $y(t)$ is simply a scaled version of the input $x(t)$, clearly depending only on the present input value. Any other form of $h(t)$ would involve integrating or summing over other values of the input, thus requiring memory.

-   **Example**: An ideal amplifier or attenuator, where $y(t) = Kx(t)$, is a memoryless LTI system.

---
#### LTI Systems with Memory (Dynamic)
#lti-with-memory

An LTI system has **memory** if its impulse response is anything other than a scaled impulse at the origin. If $h(t)$ has any non-zero value for $t \neq 0$, the system must "remember" or weight past or future inputs.

> An LTI system has **memory** if and only if $h(t) \neq K\delta(t)$ (or $h[n] \neq K\delta[n]$).

##### Examples of LTI Systems with Memory
1.  **Ideal Delay**: $h[n] = \delta[n-n_0]$ for $n_0 \neq 0$.
    -   The output is $y[n] = x[n] * \delta[n-n_0] = x[n-n_0]$. The system must store the input for $n_0$ samples, so it has memory.

2.  **Integrator**: $h(t) = u(t)$.
    -   The impulse response is non-zero for all $t>0$. The convolution integral $y(t) = \int_{-\infty}^t x(\tau) d\tau$ clearly shows the system accumulates all past input values, which requires memory.

3.  **Moving Average Filter**: $h[n] = \frac{1}{M+1}\sum_{k=0}^M \delta[n-k]$.
    -   The impulse response is a train of impulses, not a single impulse at $n=0$. The system averages the current and $M$ past inputs, requiring memory to store those past values.

---
### Related Concepts
#lti-memory/related-concepts

> [[Impulse Response of an LTI System]]

[[Memory and Memoryless Systems]] (The general property note)
[[Causality of LTI Systems in terms of Impulse Response]]
[[Stability of LTI Systems in terms of Impulse Response]]
[[Continuous-Time Convolution Integral]]
[[Properties of Convolution]]