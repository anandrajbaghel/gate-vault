---
tags:
  - signal-processing
  - signals-and-systems
  - system-properties
  - system-classification
  - gate-ee
created: 2025-09-23
aliases:
  - Systems
  - System Properties
  - System Classification
subject: "[[Signals & Systems]]"
parent:
  - System Properties
modified: 2026-07-23T16:35:27
---
### System Definition and Classification
#system-basics #system-classification #signal-processing

> In signals and systems, ==a **system** is a mathematical model of a physical process that acts on an input signal to produce an output signal==. It can be viewed as a transformation or an operator that maps an input function to an output function. Classifying systems based on their fundamental properties is the first step in analysis, as it determines which mathematical tools (e.g., convolution, Fourier, Laplace, Z-transforms) are appropriate to use.

A system $\mathcal{T}$ transforms an input signal $x(t)$ into an output signal $y(t)$:
$$ y(t) = \mathcal{T}\{x(t)\} $$

---
#### Basic System Classifications

##### 1. Continuous-Time vs. Discrete-Time Systems
#continuous-time-systems #discrete-time-systems

This is the most basic classification, based on the type of signals the system processes.
-   **Continuous-Time (CT) System**: A system that takes a continuous-time signal $x(t)$ as input and produces a continuous-time signal $y(t)$ as output. These are often described by [[Linear Constant-Coefficient Differential Equations (CT)|differential equations]].
-   **Discrete-Time (DT) System**: A system that processes a discrete-time signal $x[n]$ to yield a discrete-time signal $y[n]$. These are often described by [[Linear Constant-Coefficient Difference Equations (DT)|difference equations]].

---
#### Key System Properties for Classification

The following properties are independent of each other and are crucial for characterizing a system's behavior. The most important class of systems in signal processing, **LTI systems**, are those that are both Linear and Time-Invariant.

##### 1. Memory vs. Memoryless (Static vs. Dynamic)
#memoryless-systems #systems-with-memory

-   **Memoryless (Static)**: The output $y(t)$ at any time $t$ depends *only* on the input $x(t)$ at the *same* time $t$.
    -   *Example*: A resistor, where $v(t) = R \cdot i(t)$.
-   **System with Memory (Dynamic)**: The output at any time $t$ depends on past or future values of the input.
    -   *Example*: An integrator, $y(t) = \int_{-\infty}^{t} x(\tau) d\tau$, or a delay, $y[n] = x[n-1]$. The system must "remember" past inputs.

##### 2. Causality
#causal-systems #non-causal-systems

-   **Causal System**: The output at any time $t$ depends *only* on the present and past values of the input (i.e., on $x(\tau)$ for $\tau \le t$). The system does not anticipate the future.
    -   All real-time physical systems are causal.
    -   *Example*: $y[n] = x[n] + x[n-1]$.
-   **Non-causal System**: The output depends on future values of the input.
    -   These systems are not physically realizable for real-time processing but can be implemented in applications where data is pre-recorded (e.g., image processing, offline signal analysis).
    -   *Example*: $y[n] = x[n+1] - x[n]$.

##### 3. Linearity
#linear-systems #nonlinear-systems

A system is linear if it satisfies the **principle of superposition**, which is a combination of the additivity and homogeneity properties.
1.  **Additivity**: $\mathcal{T}\{x_1(t) + x_2(t)\} = \mathcal{T}\{x_1(t)\} + \mathcal{T}\{x_2(t)\}$
2.  **Homogeneity (Scaling)**: $\mathcal{T}\{ax(t)\} = a\mathcal{T}\{x(t)\}$

A system is linear if for any two inputs $x_1(t)$ and $x_2(t)$ and any constants $a_1$ and $a_2$:
$$\boxed{\quad \mathcal{T}\{a_1 x_1(t) + a_2 x_2(t)\} = a_1 \mathcal{T}\{x_1(t)\} + a_2 \mathcal{T}\{x_2(t)\} \quad}$$
If a system fails this test, it is **non-linear**. A simple check: a zero input must produce a zero output for a linear system (if $x(t)=0$, then $y(t)=0$).

##### 4. Time-Invariance
#time-invariant-systems #time-varying-systems

-   **Time-Invariant (TI) System**: The characteristics of the system do not change over time. A time shift in the input signal results in an identical time shift in the output signal.
    -   If $y(t) = \mathcal{T}\{x(t)\}$, then a system is time-invariant if $\mathcal{T}\{x(t-t_0)\} = y(t-t_0)$ for any $t_0$.
    -   *Example*: An ideal RLC circuit with constant component values.
-   **Time-Varying System**: The system's behavior changes with time.
    -   *Example*: $y(t) = t \cdot x(t)$. The amplification factor depends on time $t$.

##### 5. Stability (BIBO Stability)
#bibo-stability #stable-systems

-   **Bounded-Input, Bounded-Output (BIBO) Stable**: A system is BIBO stable if every bounded input signal results in a bounded output signal.
    -   "Bounded" means the signal's magnitude does not go to infinity.
    -   Formally: If $|x(t)| \le M_x < \infty$ for all $t$, then the output must satisfy $|y(t)| \le M_y < \infty$ for all $t$.
    -   *Example of an Unstable System*: An ideal integrator. A bounded step input $x(t) = u(t)$ produces an unbounded ramp output $y(t) = r(t)$.

##### 6. Invertibility
#invertible-systems

-   **Invertible System**: A system is invertible if distinct inputs produce distinct outputs. If a system is invertible, an **inverse system** exists which, when cascaded with the original system, yields the original input signal.
    -   *Example*: An amplifier with gain 2, $y(t) = 2x(t)$, is invertible. The inverse system is an attenuator with gain 0.5.
    -   *Example of a Non-invertible System*: A squaring device, $y(t) = x^2(t)$, is not invertible because the sign information of the input is lost.

---
### Related Concepts
#system-classification/related-concepts

> [[LTI|Linear Time-Invariant (LTI) Systems]] (The most important class of systems, satisfying both linearity and time-invariance)

[[Memory and Memoryless Systems]]
[[Invertibility and Inverse Systems]]
[[Causality]]
[[Stability (BIBO Stability)]]
[[Time-Invariance]]
[[Linearity in Electric Circuits]]
[[Impulse Response of an LTI System]]
[[Continuous-Time Convolution Integral]]