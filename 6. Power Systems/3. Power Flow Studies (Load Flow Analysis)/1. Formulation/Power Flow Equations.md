---
tags:
  - power-systems
  - load-flow
  - power-flow-equations
  - network-analysis
created: 2025-10-12
aliases:
  - Load Flow Equations
  - Power Flow Formulation
subject: "[[Power System]]"
parent: "[[Power Flow Studies (Load Flow Analysis)]]"
modified: 2026-07-22T21:10:03
---
### Power Flow Equations
#power-systems/load-flow #network-equations

> The **Power Flow Equations** (or Load Flow Equations) are a set of non-linear, simultaneous algebraic equations that govern the flow of power in an electrical network. They relate the *real* and *reactive power* injections at each bus to the *voltage magnitudes* and *angles* of all buses in the system. Solving these equations is the primary objective of a power flow study.

#### Derivation
#power-flow-equations/derivation

The equations are derived from two fundamental principles: Kirchhoff's Current Law (KCL) and the definition of complex power.

1.  From the [[Bus Admittance Matrix (Y-bus) Formulation|Y-bus matrix]], the injected current at any bus 'i' is given by KCL:
    $$ I_i = \sum_{j=1}^{N} Y_{ij} V_j $$
    where N is the total number of buses.

2.  The complex power injected into bus 'i' is defined as:
    $$ S_i = P_i + jQ_i = V_i I_i^* $$
    where $I_i^*$ is the complex conjugate of the current $I_i$.

3.  Substituting the expression for $I_i$ into the power equation gives the general complex power flow equation:
    $$ P_i + jQ_i = V_i \left( \sum_{j=1}^{N} Y_{ij} V_j \right)^* = V_i \sum_{j=1}^{N} Y_{ij}^* V_j^* $$

---
#### Polar Form of Power Flow Equations
#power-flow-equations/polar-form

For iterative solution methods, it is most convenient to express the equations in polar coordinates. Let the bus voltages and Y-bus elements be represented in polar form:
*   Bus Voltage: $V_k = |V_k| \angle \delta_k$
*   Y-bus Element: $Y_{ij} = |Y_{ij}| \angle \theta_{ij}$

Substituting these into the complex power equation:
$$\begin{align}
P_i + jQ_i &= \left(|V_i| \angle \delta_i \right) \sum_{j=1}^{N} \left(|Y_{ij}| \angle -\theta_{ij} \right) \left(|V_j| \angle -\delta_j \right) \\
&= \sum_{j=1}^{N} |V_i| |V_j| |Y_{ij}| \angle (\delta_i - \delta_j - \theta_{ij})
\end{align}$$
Using Euler's identity, $e^{j\phi} = \cos\phi + j\sin\phi$, we can separate the real and imaginary parts.

**1. Real Power Injection Equation ($P_i$):**
The real part of the equation gives the net real power injected into bus 'i'.
$$\boxed{\quad P_i = \sum_{j=1}^{N} |V_i| |V_j| |Y_{ij}| \cos(\delta_i - \delta_j - \theta_{ij}) \quad}$$

**2. Reactive Power Injection Equation ($Q_i$):**
The imaginary part gives the net reactive power injected into bus 'i'.
$$\boxed{\quad Q_i = \sum_{j=1}^{N} |V_i| |V_j| |Y_{ij}| \sin(\delta_i - \delta_j - \theta_{ij}) \quad}$$

These two equations are defined for each bus $i = 1, 2, ..., N$. This forms a system of $2N$ real equations for an N-bus system.

---
#### Nature and Significance
#power-flow-equations/significance

*   **Non-linear:** The equations are non-linear due to the product of voltage magnitude terms ($|V_i||V_j|$) and the trigonometric functions of the angle differences. This non-linearity prevents a direct analytical solution.
*   **Coupled:** The power at any single bus 'i' is dependent on the voltage magnitudes and angles of all other buses connected to it. This interdependence requires that all equations be solved simultaneously.
*   **Foundation of Load Flow Analysis:** These equations are the mathematical model of the power system in its steady-state. Iterative numerical methods, such as [[Gauss-Seidel Method for Load Flow|Gauss-Seidel]] and [[Newton-Raphson Method for Load Flow|Newton-Raphson]], are employed to solve this system of equations for the unknown variables (|V| and $\delta$) at each bus.

---
### Related Concepts
#power-systems/related-concepts

> [[Power Flow Studies (Load Flow Analysis)]]

[[Bus Classification (Slack, PQ, PV)]]
[[Bus Admittance Matrix (Y-bus) Formulation]]
[[Gauss-Seidel Method for Load Flow]]
[[Newton-Raphson Method for Load Flow]]