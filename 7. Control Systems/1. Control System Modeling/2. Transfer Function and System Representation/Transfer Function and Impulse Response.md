---
tags:
  - control-systems
  - system-modeling
  - transfer-function
  - impulse-response
  - laplace-transform
created: 2025-09-23
aliases:
  - Transfer Function
  - Impulse Response
  - What is the relationship between Transfer Function and Impulse Response?
  - Characteristic Equation of a Transfer Function
subject: "[[Control Systems]]"
parent:
  - Control System Modeling
formula:
  - Characteristic Equation of a Transfer Function :  $1+G(s)H(s)=0$
modified: 2026-08-04T10:42:49
---
### Transfer Function and Impulse Response
#control-systems/modeling #transfer-function #impulse-response

> The **Transfer Function** and the **Impulse Response** are two fundamental descriptions of a Linear Time-Invariant (LTI) system. They are two sides of the same coin: *the impulse response describes the system in the time domain*, while the *transfer function describes it in the frequency (or complex frequency 's') domain*. Their relationship through the [[The Laplace Transform|Laplace Transform]] is the cornerstone of classical control theory.

> [!concept]- The Core Bridge: Frequency Domain Analysis
> **Signals & Systems** establishes the analytical foundation: 
> $$H(s) = \frac{Y(s)}{X(s)} = \mathcal{L}\{h(t)\}$$
> showing that convolution in the time domain ($y(t) = x(t) * h(t)$) simplifies to algebraic multiplication in the $s$-domain ($Y(s) = X(s)H(s)$).
>
> **Control Systems** inherits this mathematical architecture to evaluate closed-loop dynamics. By setting the characteristic equation $1 + G(s)H(s) = 0$, you utilize the pole-zero principles established in S&S to predict absolute stability and shape transient performance without solving cumbersome differential equations.
>
> > [!refer] 
> > [[Signal & Systems]]: Focuses on the properties of $H(s)$ and its ROC.
> > [[Control Systems]]: Focuses on manipulating $H(s)$ via feedback loops.

---
#### Transfer Function
#transfer-function

The **transfer function**, denoted $H(s)$, of an LTI system is defined as the ratio of the Laplace transform of the output, $Y(s)$, to the Laplace transform of the input, $X(s)$, assuming all initial conditions are zero.

$$\boxed{\quad H(s) = \frac{\mathcal{L}\{\text{output}(t)\}}{\mathcal{L}\{\text{input}(t)\}} = \frac{Y(s)}{X(s)} \bigg|_{\text{zero initial conditions}}\quad}$$

-   **Derivation:** It is derived by taking the Laplace transform of the system's governing differential equation.
-   **System Property:** The transfer function is a property of the system itself, determined by its physical parameters, and is independent of the input signal's magnitude and nature.

---
##### Poles and Zeros
#poles-and-zeros 

The transfer function is typically a rational function in $s$:
$$H(s) = \frac{N(s)}{D(s)} = K \frac{(s-z_1)(s-z_2)...}{(s-p_1)(s-p_2)...}$$
- **Poles ($p_i$)**: The roots of the denominator polynomial $D(s)$. The values of $s$ for which $H(s) \to \infty$. The poles of the transfer function dictate the system's stability and the characteristics of its transient response (e.g., speed, oscillations).
- **Zeros ($z_i$)**: The roots of the numerator polynomial $N(s)$. The values of $s$ for which $H(s) = 0$. Zeros influence the shape and amplitude of the system's response.
- **Characteristic Equation**: The equation formed by setting the denominator of the closed-loop transfer function to zero, $D(s)=0$ (or more generally $1+G(s)H(s)=0$), is called the **characteristic equation**. Its roots are the poles of the closed-loop system.

---
#### Impulse Response
#impulse-response

The **impulse response**, denoted $h(t)$, is the output of an LTI system when the input is a unit impulse function ([[Continuous-Time Unit Impulse and Unit Step Functions#The Unit Impulse Function, $ delta(t)$|Dirac delta function]], $\delta(t)$).
$$\text{If } x(t) = \delta(t), \text{ then } y(t) = h(t)$$
- **Time-Domain Characterization:** The impulse response $h(t)$ completely characterizes the system's dynamics in the time domain. It represents the system's natural, unforced response.

---
#### The Fundamental Relationship
#convolution #laplace-transform

The transfer function and impulse response are a [[The Laplace Transform|Laplace transform]] pair.

$$\boxed{\quad H(s) = \mathcal{L}\{h(t)\} = \int_{0}^{\infty} h(t) e^{-st} dt \quad}$$
$$\boxed{\quad h(t) = \mathcal{L}^{-1}\{H(s)\} \quad}$$

This relationship leads to a powerful tool for system analysis: the **[[Continuous-Time Convolution Integral|Convolution Theorem]]**. The output $y(t)$ of an LTI system for an arbitrary input $x(t)$ is the convolution of the input with the system's impulse response.

-   **In the Time Domain (Convolution):**
    $$y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau)h(t-\tau)d\tau$$
-   **In the Laplace Domain (Multiplication):**
    Taking the Laplace transform of the convolution integral simplifies it to simple multiplication.
    $$\boxed{\quad Y(s) = X(s)H(s) \quad}$$
This algebraic relationship is why the transfer function is so widely used. It allows us to analyze systems using simple algebra instead of solving complex differential equations.

---
#### Stability from the Transfer Function
#stability/transfer-function 

The stability of an LTI system can be determined directly from the poles of its transfer function $H(s)$.
-   **Stable:** The system is BIBO (Bounded-Input, Bounded-Output) stable if and only if all the poles of $H(s)$ lie in the **left-half of the s-plane** (LHP), i.e., they all have negative real parts. This ensures that the impulse response $h(t)$ decays to zero as $t \to \infty$.
-   **Unstable:** If at least one pole lies in the **right-half of the s-plane** (RHP) (positive real part), the system is unstable. The impulse response will grow without bound.
-   **Marginally Stable:** If one or more non-repeated poles lie on the **imaginary axis** (zero real part), with all other poles in the LHP, the system is marginally stable. The impulse response will oscillate indefinitely.

---
### Related Concepts
#control-systems/related-concepts

> [[Mathematical Modeling of Physical Systems (Mechanical, Electrical)]]

[[Unit Step, Ramp, Parabolic, and Impulse Signals]]
[[The Laplace Transform]]
[[DC Gain]]
[[State-Space Representation of LTI Systems]] (Alternative system representation)
[[Routh-Hurwitz Stability Criterion]] (Method to check pole locations without solving for them)
[[First-Order System Response]]
[[Second-Order System Response]]
[[Type and Order of Control Systems]]