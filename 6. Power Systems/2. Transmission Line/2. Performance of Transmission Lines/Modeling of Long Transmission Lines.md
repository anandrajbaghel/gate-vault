---
tags:
  - power-system
  - transmission-lines
  - line-modeling
  - long-lines
  - distributed-parameters
  - wave-equation
created: 2025-10-11
aliases:
  - Long Line Model
  - Distributed Parameter Line Model
  - Rigorous Solution for Transmission Lines
  - Modeling of Long Transmission Lines (Rigorous Solution)
subject: "[[Power System]]"
parent:
  - Performance of Transmission Lines
formula:
  - "ABCD Parameters (Long TL) : $$\\begin{bmatrix} V_s \\\\ I_s \\end{bmatrix} = \\begin{bmatrix} \\cosh(\\gamma l) & Z_c \\sinh(\\gamma l) \\\\ \\frac{1}{Z_c}\\sinh(\\gamma l) & \\cosh(\\gamma l) \\end{bmatrix} \\begin{bmatrix} V_r \\\\ I_r \\end{bmatrix}$$"
  - "Propagation Constant : $$\\gamma = \\sqrt{zy} = \\alpha + j\\beta$$"
modified: 2026-07-23T21:18:26
---
### Modeling of Long Transmission Lines (Rigorous Solution)
#long-line-model #distributed-parameters #wave-equation

> For transmission lines longer than 250 km, the parameters of resistance, inductance, and capacitance cannot be accurately represented by lumped models. Instead, they must be treated as **uniformly distributed** along the entire length of the line. This requires a rigorous solution based on solving the differential equations that describe voltage and current along the line.

#### The Wave Equations
#transmission-line-equations

Let $z = r + jωl$ be the series impedance per unit length and $y = g + jωc$ be the shunt admittance per unit length. By considering an infinitesimal section $dx$ of the line, we can write the following differential equations:
$$ \frac{dV(x)}{dx} = z I(x) $$
$$ \frac{dI(x)}{dx} = y V(x) $$
Differentiating again and substituting gives the second-order **[[Wave Equation Derived from Maxwell's Equations|wave equations]]**:
$$ \frac{d^2V(x)}{dx^2} = zy V(x) = \gamma^2 V(x) $$
$$ \frac{d^2I(x)}{dx^2} = zy I(x) = \gamma^2 I(x) $$
---
#### Propagation Constant ($\gamma$) and Characteristic Impedance ($Z_c$)
#propagation-constant #characteristic-impedance

The solution of these equations introduces two fundamental parameters:

1.  **Propagation Constant ($\gamma$)**: It determines how the voltage and current waves change as they travel along the line.
    $$\boxed{\quad \gamma = \sqrt{zy} = \alpha + j\beta \quad}$$
    -   $\alpha$ is the **attenuation constant** (in nepers/km), representing the decay of the wave's magnitude.
    -   $\beta$ is the **phase constant** (in radians/km), representing the phase shift per unit length.

2.  **Characteristic Impedance ($Z_c$)**: It is the impedance seen looking into an infinitely long line. It's also known as the surge impedance.
    $$\boxed{\quad Z_c = \sqrt{\frac{z}{y}} = \sqrt{\frac{r+j\omega l}{g+j\omega c}} \quad (\text{Ohms})}$$
    For a **lossless line** ($r=0, g=0$), $Z_c = \sqrt{L/C}$, which is a purely real quantity called the **Surge Impedance**.

---
#### Rigorous Solution and ABCD Parameters
#transmission-line/long/solution #abcd-parameters/long 

The solution to the wave equations, expressed in terms of sending-end ($V_s, I_s$) and receiving-end ($V_r, I_r$) quantities for a line of total length $l$, is given in hyperbolic form:
$$\begin{align}
V_s &= V_r \cosh(\gamma l) + I_r Z_c \sinh(\gamma l) \\
I_s &= V_r \frac{1}{Z_c} \sinh(\gamma l) + I_r \cosh(\gamma l)
\end{align}$$
By comparing these to the standard two-port network equations, the exact ABCD parameters for a long line are:
$$\boxed{\quad \begin{bmatrix} V_s \\ I_s \end{bmatrix} = \begin{bmatrix} \cosh(\gamma l) & Z_c \sinh(\gamma l) \\ \frac{1}{Z_c}\sinh(\gamma l) & \cosh(\gamma l) \end{bmatrix} \begin{bmatrix} V_r \\ I_r \end{bmatrix} \quad}$$
-   $A = D = \cosh(\gamma l)$
-   $B = Z_c \sinh(\gamma l)$
-   $C = \frac{1}{Z_c}\sinh(\gamma l)$

The network is symmetrical ($A=D$) and reciprocal ($AD-BC=1$).

---
#### Equivalent π-Model of a Long Line
#equivalent-pi-model

For inclusion in larger system studies (like load flow), it is extremely useful to represent the distributed-parameter long line by an **equivalent lumped-parameter π-model**. This model has the *exact same* ABCD parameters as the long line and thus behaves identically from a terminal perspective.

![[Long Line Equivalent Pi.png]]

The parameters of this equivalent-π model are given by:
-   **Total Series Arm Impedance ($Z'$)**:
    $$\boxed{\quad Z' = Z_c \sinh(\gamma l) = Z \frac{\sinh(\gamma l)}{\gamma l} \quad}$$
    where $Z=zl$ is the total series impedance of the line.

-   **Total Shunt Arm Admittance ($Y'$)**, split into two halves ($Y'/2$):
    $$\boxed{\quad \frac{Y'}{2} = \frac{1}{Z_c} \tanh\left(\frac{\gamma l}{2}\right) = \frac{Y}{2} \frac{\tanh(\gamma l/2)}{(\gamma l/2)} \quad}$$
    where $Y=yl$ is the total shunt admittance of the line.

---
### Related Concepts
#power-system/related-concepts

> [[Modeling of Medium Transmission Lines]]

[[ABCD Parameters (Generalized Circuit Constants)]]
[[Surge Impedance and Surge Impedance Loading (SIL)]]
[[Ferranti Effect]]
[[Power Flow through a Transmission Line]] (General Power Flow Equations (Using ABCD Parameters))