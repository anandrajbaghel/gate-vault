---
tags:
  - calculus
  - differential-equations
  - ode
  - linear-ode
  - forced-response
  - engineering-math
created: 2025-09-15
aliases:
  - Non-Homogeneous ODEs
  - Forced Response
  - Particular Integral
subject: "[[Mathematics]]"
parent:
  - "[[Second-Order Differential Equations]]"
---
### Linear Non-Homogeneous ODEs with Constant Coefficients
#non-homogeneous-ode #particular-integral #forced-response

> A **linear non-homogeneous ODE** has a non-zero term on the right-hand side, $R(x)$, known as the **forcing function** or input. It describes a system's behavior under the influence of an external stimulus. The complete solution is a superposition of the system's **natural response** (the solution to the homogeneous part) and its **forced response** (a particular solution that depends on the input).

#### The General Solution: $y = y_c + y_p$
#complementary-function #particular-integral

The general solution to the non-homogeneous ODE $ay'' + by' + cy = R(x)$ is the sum of two parts:
$$\boxed{\quad y(x) = y_c(x) + y_p(x) \quad}$$
1.  **Complementary Function ($y_c$)**: This is the general solution to the associated homogeneous equation, $ay'' + by' + cy = 0$. It is found using the [[Linear Homogeneous ODEs with Constant Coefficients|characteristic equation method]] and contains the arbitrary constants ($c_1, c_2$). It represents the system's **transient response**.
2.  **Particular Integral ($y_p$)**: This is **any** specific solution that satisfies the full non-homogeneous equation. It contains no arbitrary constants and represents the system's **steady-state response** to the forcing function $R(x)$.

---
#### Method 1: Undetermined Coefficients
#undetermined-coefficients

This method is a systematic way of "guessing" the form of the particular integral $y_p$ based on the form of the forcing function $R(x)$. It is only applicable when $R(x)$ is a polynomial, an exponential, a sine/cosine, or a sum/product of these.

| If $R(x)$ is... | The guess for $y_p$ is... |
| :--- | :--- |
| A constant, $k$ | A constant, $A$ |
| A polynomial of degree $n$ | $A_n x^n + \dots + A_1 x + A_0$ |
| An exponential, $ke^{ax}$ | $A e^{ax}$ |
| A sine or cosine, $k \sin(\beta x)$ or $k \cos(\beta x)$ | $A \cos(\beta x) + B \sin(\beta x)$ |

**Procedure**:
1. Choose the appropriate form for $y_p$ from the table.
2. Differentiate $y_p$ to find $y_p'$ and $y_p''$.
3. Substitute $y_p, y_p', y_p''$ into the original ODE.
4. Equate coefficients of like terms to solve for the unknown constants ($A, B, \dots$).

##### The Modification Rule
This is a critical step and a common source of error.

> **Rule**: If any term in your initial guess for $y_p$ is already a part of the complementary function $y_c$, you must multiply your entire guess by $x$. If that new guess is still a part of $y_c$ (which happens with repeated roots), multiply by $x$ again (i.e., by $x^2$).
> $$\boxed{\quad \text{If guess for } y_p \text{ is in } y_c \implies \text{ New guess} = x \cdot (\text{Old guess}) \quad}$$

---
#### Method 2: Variation of Parameters
#variation-of-parameters #wronskian

This is a more powerful and general method that works for any forcing function $R(x)$. If the complementary function is $y_c = c_1 y_1(x) + c_2 y_2(x)$, the particular integral is given by:
$$\boxed{\quad y_p(x) = -y_1 \int \frac{y_2 R(x)}{W} \, dx + y_2 \int \frac{y_1 R(x)}{W} \, dx \quad}$$
where $W$ is the **Wronskian** of $y_1$ and $y_2$:
$$\boxed{\quad W = W(y_1, y_2) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_2 y_1' \quad}$$

---
#### Connection to System Response
#transient-response #steady-state-response

In engineering systems like RLC circuits, the solution components have direct physical meaning:
*   **Complementary Function ($y_c$)**: Represents the **transient response**. For a stable system, these terms contain decaying exponentials ($e^{-\alpha t}$) and die out over time, leaving only the steady-state response. This part depends on the circuit's components (R, L, C).
*   **Particular Integral ($y_p$)**: Represents the **steady-state response**. This is the long-term behavior of the circuit, which is dictated by the input source $R(x)$. For example, a sinusoidal input will result in a sinusoidal steady-state output.

---
### Related Concepts
#calculus/related-concepts

> [[Linear Homogeneous ODEs with Constant Coefficients]]

[[Differential Equations]]
[[RLC Circuits]]
[[System Response (Transient & Steady-State)]]
[[Wronskian]]