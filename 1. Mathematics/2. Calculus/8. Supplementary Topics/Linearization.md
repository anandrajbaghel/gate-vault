---
tags:
  - linearization
  - control-systems
  - analog-electronics
  - approximation
  - taylor-series
  - mathematics
created: 2025-09-08
aliases:
  - Linear Approximation
subject:
  - "[[Control Systems]]"
  - "[[Analog & Digital Electronics]]"
  - "[[Mathematics]]"
parent:
  - System Analysis
confidence: 9
---
### Linearization
#linearization #approximation #taylor-series

> **Linearization** is a powerful technique used to approximate a non-linear function or system with a simpler linear model. This approximation is valid only for small deviations around a specific point, known as the **operating point** or **equilibrium point**. The core principle of linearization is to use the tangent line at the operating point to represent the function's behavior in its immediate vicinity.

The mathematical foundation for linearization is the first-order [[Taylor Series]] expansion.

#### Application in Control Systems
#control-systems #state-space #jacobian

Linearization is fundamental to the analysis and design of controllers for non-linear systems. It allows us to apply the vast toolkit of linear control theory (e.g., transfer functions, stability criteria, root locus) to a non-linear system, provided it operates close to its equilibrium.

Consider a non-linear, time-invariant system described by the state-space model:
$$\dot{\mathbf{x}} = f(\mathbf{x}, \mathbf{u})$$
1.  **Find the Equilibrium Point**: First, find the equilibrium point $(\mathbf{x}_0, \mathbf{u}_0)$ by setting the derivative to zero: $f(\mathbf{x}_0, \mathbf{u}_0) = 0$.
2.  **Define Deviation Variables**: Define new variables that represent small deviations from the equilibrium point:
    *   $\Delta\mathbf{x} = \mathbf{x} - \mathbf{x}_0$
    *   $\Delta\mathbf{u} = \mathbf{u} - \mathbf{u}_0$
    *   $\Delta\dot{\mathbf{x}} = \dot{\mathbf{x}} - \dot{\mathbf{x}}_0 = \dot{\mathbf{x}}$ (since $\dot{\mathbf{x}}_0=0$)
3.  **Perform Taylor Series Expansion**: Expand the function $f(\mathbf{x}, \mathbf{u})$ around $(\mathbf{x}_0, \mathbf{u}_0)$ and neglect higher-order terms.
    $$\dot{\mathbf{x}} \approx f(\mathbf{x}_0, \mathbf{u}_0) + \frac{\partial f}{\partial \mathbf{x}}\bigg|_{(\mathbf{x}_0, \mathbf{u}_0)} (\mathbf{x} - \mathbf{x}_0) + \frac{\partial f}{\partial \mathbf{u}}\bigg|_{(\mathbf{x}_0, \mathbf{u}_0)} (\mathbf{u} - \mathbf{u}_0)$$
    Since $f(\mathbf{x}_0, \mathbf{u}_0) = 0$, this simplifies to the standard linear state-space form:
    $$\Delta\dot{\mathbf{x}} = \mathbf{A}\Delta\mathbf{x} + \mathbf{B}\Delta\mathbf{u}$$
    Where **A** and **B** are the **Jacobian matrices** evaluated at the equilibrium point:
    $$\boxed{\quad \mathbf{A} = \frac{\partial f}{\partial \mathbf{x}}\bigg|_{(\mathbf{x}_0, \mathbf{u}_0)} \quad} \quad \text{and} \quad \boxed{\quad \mathbf{B} = \frac{\partial f}{\partial \mathbf{u}}\bigg|_{(\mathbf{x}_0, \mathbf{u}_0)} \quad}$$

---
#### Application in Analog Electronics
#small-signal-analysis #q-point

Linearization is the entire basis for **[[Small Signal Analysis]]** of electronic circuits containing non-linear devices like diodes, BJTs, and MOSFETs.
*   **Non-linear System**: The device's exponential or square-law I-V characteristic (e.g., $I_C = I_S e^{V_{BE}/V_T}$).
*   **Operating Point**: The DC **Quiescent Point (Q-point)**, established by [[Transistor Biasing]].
*   **Small Deviations**: The small AC input signals (e.g., $v_{be}, v_{gs}$).

The slope of the characteristic curve at the Q-point gives the key small-signal parameter. For example, the transconductance ($g_m$) of a BJT is the slope of the $I_C$ vs. $V_{BE}$ curve at the Q-point.
$$\begin{align}
g_m &= \frac{dI_C}{dV_{BE}} \bigg|_{Q-point} \\
 &= \frac{I_{CQ}}{V_T}
\end{align}$$
The non-linear relationship is then replaced by a linear approximation for the AC signals:
$$i_c \approx g_m v_{be}$$
This linear relationship is the core of the [[BJT Small-Signal Model]], which is then used to analyze the AC performance (gain, impedance) of an amplifier.

---
### Related Concepts
#related-concepts

> [[Small Signal Analysis]] (The direct application in electronics)

[[State-Space Representation of LTI Systems]]
[[Taylor Series]] (The mathematical basis)
[[Jacobian]] (The tool used for linearization)
[[BJT Small-Signal Model]] & [[MOSFET Amplifiers]] (Specific examples)
[[Control Systems]]
