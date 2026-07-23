---
tags:
  - signal-processing
  - signals-and-systems
  - lti-systems
  - differential-equations
  - time-domain-analysis
  - gate-ee
created: 2025-09-24
aliases:
  - LCCDE
  - Linear Constant-Coefficient Differential Equations
subject: "[[Signals & Systems]]"
parent:
  - "[[LTI|Linear Time-Invariant (LTI) Systems]]"
modified: 2026-07-23T16:39:50
---
### Linear Constant-Coefficient Differential Equations (CT)
#lccde #differential-equations #lti-systems

> A **Linear Constant-Coefficient Differential Equation (LCCDE)** is the standard time-domain representation for a continuous-time [[LTI|Linear Time-Invariant (LTI) system]]. It describes the relationship between the input signal $x(t)$ and the output signal $y(t)$ using a weighted sum of their derivatives. Many physical systems, such as RLC circuits, are naturally described by LCCDEs.

> [!memory] Linear Constant-Coefficient (LCC) Equation
> An LCC equation is a **linear differential equation whose coefficients are fixed constants**, making it solvable using exponentials or Laplace methods.

---
#### General Form
#lccde-form

An N-th order LCCDE has the general form:
$$\boxed{\quad \sum_{k=0}^{N} a_k \frac{d^k y(t)}{dt^k} = \sum_{m=0}^{M} b_m \frac{d^m x(t)}{dt^m} \quad}$$
where:
-   $a_k$ and $b_m$ are the constant coefficients of the system.
-   $N$ is the **order** of the system, which is the highest derivative of the output $y(t)$.
-   It is assumed $M \le N$ for the system to be physically realizable.

---
#### Solution in the Time Domain
#time-domain-solution

The complete solution to an LCCDE is the sum of two components: the homogeneous solution and the particular solution.
$$\boxed{\quad y(t) = y_h(t) + y_p(t) \quad}$$

##### Homogeneous Solution ($y_h(t)$) - The Natural Response
The homogeneous solution is the system's response to its own internal state, without any external input driving it (i.e., for $x(t)=0$). It describes how the system naturally returns to equilibrium from its initial conditions.
1.  Set the right-hand side (input side) of the equation to zero: $\sum_{k=0}^{N} a_k \frac{d^k y(t)}{dt^k} = 0$.
2.  Assume a solution of the form $y_h(t) = e^{\lambda t}$.
3.  This leads to the **characteristic equation**:
    $$\boxed{\quad \sum_{k=0}^{N} a_k \lambda^k = 0 \quad}$$
4.  The roots $\lambda_1, \lambda_2, \dots, \lambda_N$ of this polynomial determine the form of $y_h(t)$. For distinct roots, the solution is:
    $$y_h(t) = C_1 e^{\lambda_1 t} + C_2 e^{\lambda_2 t} + \dots + C_N e^{\lambda_N t}$$
    The constants $C_k$ are determined from the initial conditions.

##### Particular Solution ($y_p(t)$) - The Forced Response
The particular solution is the system's steady-state response to the specific input signal $x(t)$. The form of $y_p(t)$ mimics the form of the input.

| If input $x(t)$ is... | Assume particular solution $y_p(t)$ is... |
| :-------------------- | :---------------------------------------- |
| Constant, $K$         | Constant, $A$                             |
| $e^{\alpha t}$        | $A e^{\alpha t}$                          |
| $\cos(\omega t)$      | $A\cos(\omega t) + B\sin(\omega t)$       |
| Polynomial, $t^n$     | Polynomial, $\sum_{k=0}^n A_k t^k$        |

---
#### Zero-Input and Zero-State Response
#zero-input-response #zero-state-response

This is an alternative and often more insightful way to decompose the total response.
$$\boxed{\quad \text{Total Response} = \text{Zero-Input Response (ZIR)} + \text{Zero-State Response (ZSR)} \quad}$$

-   **Zero-Input Response (ZIR)**: The output of the system due to the initial conditions alone, assuming the input $x(t)=0$ for all time.
-   **Zero-State Response (ZSR)**: The output of the system due to the input $x(t)$ alone, assuming the system is initially "at rest" (all initial conditions are zero). The ZSR is equivalent to the convolution of the input with the impulse response.
    $$\boxed{\quad y_{ZSR}(t) = x(t) * h(t) \quad}$$

---
#### Relation to System Functions

##### Impulse Response, $h(t)$
The [[Impulse Response of an LTI System|impulse response]] $h(t)$ is the Zero-State Response of the system when the input is a unit impulse, $x(t) = \delta(t)$.

##### Transfer Function, $H(s)$
The easiest way to solve LCCDEs is using the [[Calculus - Laplace Transforms|Laplace Transform]], which converts the differential equation into an algebraic one. Applying the transform to the LCCDE (assuming zero initial conditions) gives:
$$ Y(s) \sum_{k=0}^{N} a_k s^k = X(s) \sum_{m=0}^{M} b_m s^m $$
The [[The Transfer Function H(s)|transfer function]] $H(s) = Y(s)/X(s)$ is then a rational function whose coefficients are the coefficients of the LCCDE.
$$\boxed{\quad H(s) = \frac{Y(s)}{X(s)} = \frac{\sum_{m=0}^{M} b_m s^m}{\sum_{k=0}^{N} a_k s^k} = \frac{B(s)}{A(s)} \quad}$$
The roots of the characteristic equation ($A(\lambda)=0$) are the **poles** of the system.

---
### Related Concepts
#lccde/related-concepts

> [[The Transfer Function H(s)]]

[[Impulse Response of an LTI System]]
[[The Laplace Transform]]
[[Poles and Zeros of a Transfer Function]]
[[Zero-Input and Zero-State Response]]
[[Resonance|RLC Circuits]]