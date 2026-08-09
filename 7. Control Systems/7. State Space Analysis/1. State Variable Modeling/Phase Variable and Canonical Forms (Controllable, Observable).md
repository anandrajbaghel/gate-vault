---
tags:
  - control-systems
  - state-space
  - canonical-forms
  - phase-variable
  - modern-control
created: 2025-09-21
aliases:
  - Phase Variable Form
  - Canonical Forms
  - CCF
  - OCF
  - Controllable Canonical Form (CCF)
subject: "[[Control Systems]]"
parent: "[[State-Space Representation of LTI Systems]]"
modified: 2026-08-04T10:11:27
---
### Phase Variable and Canonical Forms
#control-systems/state-space #canonical-forms

> When converting a system model from a transfer function or differential equation to a state-space representation, the choice of state variables is not unique. **Canonical forms** provide standardized structures for the state-space matrices ($A, B, C, D$) that are easy to derive and have special properties related to controllability and observability. The **Phase Variable Form** is a common starting point that leads directly to the Controllable Canonical Form.

---
#### Phase Variable Form
#phase-variable-form

For an n-th order system, **phase variables** are a specific choice of state variables defined as the system output and its first $n-1$ derivatives.
Given a differential equation:
$$ y^{(n)} + a_{n-1} y^{(n-1)} + \dots + a_1 \dot{y} + a_0 y = u $$
The state variables are chosen as:
$$\begin{align}
x_1 &= y \\
x_2 &= \dot{y} = \dot{x}_1 \\
&\vdots \\
x_n &= y^{(n-1)} = \dot{x}_{n-1}
\end{align}$$
This selection directly leads to a state model where the system dynamics are captured in a specific structure, known as the Controllable Canonical Form.

---
### Controllable Canonical Form (CCF)
#controllable-canonical-form

This is one of the most common canonical forms. It is directly constructed from the coefficients of the system's transfer function.
Given: $G(s) = \frac{b_{n-1}s^{n-1} + \dots + b_1s + b_0}{s^n + a_{n-1}s^{n-1} + \dots + a_1s + a_0}$

The CCF state-space representation is:
$$ \boxed{ A_{ccf} = \begin{bmatrix} 0 & 1 & 0 & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \dots & 1 \\ -a_0 & -a_1 & -a_2 & \dots & -a_{n-1} \end{bmatrix}, \quad B_{ccf} = \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 0 \\ 1 \end{bmatrix} }$$
$$ \boxed{ C_{ccf} = \begin{bmatrix} b_0 & b_1 & \dots & b_{n-1} \end{bmatrix}, \quad D = [0] }$$
(Note: A non-zero D term exists if the transfer function is improper or has a $b_n$ term).

**Key Property**: A system represented in CCF is **guaranteed to be controllable**, provided no pole-zero cancellations occurred in the original transfer function.

---
### Observable Canonical Form (OCF)
#observable-canonical-form

The Observable Canonical Form is the **dual** of the CCF. Its matrices are related to the CCF matrices by transposition.
$$ A_{ocf} = A_{ccf}^T, \quad B_{ocf} = C_{ccf}^T, \quad C_{ocf} = B_{ccf}^T $$

For the same transfer function, the OCF representation is:
$$ \boxed{ A_{ocf} = \begin{bmatrix} 0 & 0 & \dots & -a_0 \\ 1 & 0 & \dots & -a_1 \\ 0 & 1 & \dots & -a_2 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & -a_{n-1} \end{bmatrix}, \quad B_{ocf} = \begin{bmatrix} b_0 \\ b_1 \\ \vdots \\ b_{n-1} \end{bmatrix} }$$
$$ \boxed{ C_{ocf} = \begin{bmatrix} 0 & 0 & \dots & 1 \end{bmatrix}, \quad D = [0] }$$

**Key Property**: A system represented in OCF is **guaranteed to be observable**, provided no pole-zero cancellations occurred.

---
### Importance of Canonical Forms
- **Systematic Conversion**: They provide a direct, algorithm-like method to obtain a state-space model from a transfer function.
- **Simplifies Analysis**: The fixed structure simplifies theoretical analysis. For example, checking for controllability of a CCF system is trivial.
- **Standardization**: Provides a common basis for comparing and designing control systems.

---
### Related Concepts
#related-concepts

> [[State-Space Representation of LTI Systems]]

[[State-Space Model from Transfer Function]]
[[Controllability]]
[[Observability]]
[[Principle of Duality]]
