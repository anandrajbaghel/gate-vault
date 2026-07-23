---
tags:
  - signal-processing
  - signals-and-systems
  - lti-systems
  - difference-equations
  - discrete-time
  - gate-ee
created: 2025-09-24
aliases:
  - LCCDE (DT)
  - Linear Constant-Coefficient Difference Equations
  - Infinite Impulse Response (IIR)
  - Finite Impulse Response (FIR)
subject: "[[Signals & Systems]]"
parent:
  - "[[LTI|Linear Time-Invariant (LTI) Systems]]"
modified: 2026-07-23T16:39:39
---
### Linear Constant-Coefficient Difference Equations (DT)
#lccde-dt #difference-equations #lti-systems

> A **Linear Constant-Coefficient Difference Equation (LCCDE)** is the fundamental time-domain model for a discrete-time [[LTI|Linear Time-Invariant (LTI) system]]. It defines the relationship between the input sequence $x[n]$ and the output sequence $y[n]$ by relating the current output to past outputs and to current and past inputs. These equations are the foundation of digital filters and many other discrete-time signal processing algorithms.

> [!memory] Linear Constant-Coefficient (LCC) Equation
> An LCC equation is a **linear differential equation whose coefficients are fixed constants**, making it solvable using exponentials or Laplace methods.

---
#### General Form
#lccde-form-dt

An N-th order LCCDE has the general form:
$$\boxed{\quad \sum_{k=0}^{N} a_k y[n-k] = \sum_{m=0}^{M} b_m x[n-m] \quad}$$
Assuming $a_0 = 1$ (if not, the equation can be normalized), we can write this in a more explicit, computable form:
$$ y[n] = - \sum_{k=1}^{N} a_k y[n-k] + \sum_{m=0}^{M} b_m x[n-m] $$
-   $a_k$ and $b_m$ are the constant coefficients.
-   $N$ is the **order** of the system.

#### Recursive vs. Non-Recursive (IIR vs. FIR)
This structure leads to a critical classification of discrete-time systems:
-   **Recursive (IIR)**: If any $a_k \neq 0$ for $k \ge 1$, the output $y[n]$ depends on previous output values. This feedback structure typically leads to an **Infinite Impulse Response (IIR)**.
-   **Non-Recursive (FIR)**: If all $a_k = 0$ for $k \ge 1$, the equation simplifies to $y[n] = \sum_{m=0}^{M} b_m x[n-m]$. The output is a weighted sum of only present and past inputs. This structure guarantees a **Finite Impulse Response (FIR)**.

---
#### Solution in the Time Domain
#time-domain-solution-dt

The complete solution is the sum of the homogeneous and particular solutions.
$$\boxed{\quad y[n] = y_h[n] + y_p[n] \quad}$$

##### Homogeneous Solution ($y_h[n]$) - The Natural Response
This is the system's response to initial conditions, with the input set to zero: $\sum_{k=0}^{N} a_k y[n-k] = 0$.
1.  Assume a solution of the form $y_h[n] = \lambda^n$.
2.  Substitute into the equation to get the **characteristic equation**:
    $$\boxed{\quad \sum_{k=0}^{N} a_k \lambda^{N-k} = 0 \quad}$$
3.  The roots $\lambda_1, \lambda_2, \dots, \lambda_N$ determine the form of $y_h[n]$. For distinct roots:
    $$y_h[n] = C_1 \lambda_1^n + C_2 \lambda_2^n + \dots + C_N \lambda_N^n$$
    The constants $C_k$ are found from the initial conditions.

##### Particular Solution ($y_p[n]$) - The Forced Response
This is the response to the input $x[n]$, and its form generally mimics the input sequence.

---
#### Zero-Input and Zero-State Response
#zir-zsr-dt

A more physical decomposition of the total response is:
$$\boxed{\quad \text{Total Response} = \text{Zero-Input Response (ZIR)} + \text{Zero-State Response (ZSR)} \quad}$$
-   **Zero-Input Response (ZIR)**: The output due to initial conditions (the initial state of the system memory), assuming $x[n]=0$.
-   **Zero-State Response (ZSR)**: The output due to the input $x[n]$, assuming the system is initially at rest (zero initial conditions). The ZSR is the convolution of the input with the impulse response.
    $$\boxed{\quad y_{ZSR}[n] = x[n] * h[n] \quad}$$

---
#### Relation to System Functions

##### Impulse Response, $h[n]$
The [[Impulse Response of an LTI System|impulse response]] $h[n]$ is the Zero-State Response when the input is a unit impulse sequence, $x[n] = \delta[n]$.

##### Transfer Function, $H(z)$
The most efficient way to solve LCCDEs is with the [[The Z-Transform|Z-Transform]]. Applying the transform to the LCCDE (using the time-shift property and assuming zero initial conditions) gives:
$$ Y(z) \sum_{k=0}^{N} a_k z^{-k} = X(z) \sum_{m=0}^{M} b_m z^{-m} $$
The [[The Transfer Function H(z)|transfer function]] $H(z) = Y(z)/X(z)$ is a rational function of $z^{-1}$ (or $z$).
$$\boxed{\quad H(z) = \frac{Y(z)}{X(z)} = \frac{\sum_{m=0}^{M} b_m z^{-m}}{\sum_{k=0}^{N} a_k z^{-k}} \quad}$$
The coefficients of the transfer function are the coefficients of the difference equation. The roots of the characteristic equation are the **poles** of the system.

---
### Related Concepts
#lccde-dt/related-concepts

> [[The Transfer Function H(z)]]

[[Impulse Response of an LTI System]]
[[The Z-Transform|Z-Transforms]]
[[Poles and Zeros in the z-domain]]
[[Zero-Input and Zero-State Response]]
[[Digital Filters]]