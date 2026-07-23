---
tags:
  - power-systems
  - load-flow
  - newton-raphson
  - iterative-methods
  - numerical-methods
created: 2025-10-12
aliases:
  - NR Method for Load Flow
  - Newton-Raphson Load Flow
subject: "[[Power System]]"
parent: "[[Power Flow Studies (Load Flow Analysis)]]"
modified: 2026-07-22T20:19:47
---
### Newton-Raphson Method for Load Flow
#power-systems/load-flow #newton-raphson #iterative-methods

> The **Newton-Raphson (NR) method** is a powerful and widely-used iterative algorithm for solving the non-linear [[Power Flow Equations|power flow equations]]. It is the preferred method for large-scale power systems due to its fast convergence and high accuracy. The method works by linearizing the power flow equations around an initial guess and iteratively solving for corrections to the voltage magnitudes and angles.

> [!prerequisite] Prerequisites & Backlinks
> Before deep-diving into this iteration protocol, ensure you understand how the network equations are bundled via [[Bus Admittance Matrix (Y-bus) Formulation]] and how univariate root-finding scales up from [[Solving Non-Linear Algebraic Equations]].

---
#### Principle of the Method
#newton-raphson/principle

The Newton-Raphson method is based on a first-order [[Taylor series]] expansion of the power flow equations around the current operating point (voltage magnitudes and angles). The core idea is to find the error, or **power mismatch**, between the specified (scheduled) power and the power calculated from the current voltage estimates. This mismatch is then used to calculate a correction vector for the voltages.

1.  **Power Mismatch Equations:**
    For each bus 'i', the power mismatch is defined as:
    *   Real Power Mismatch: $\Delta P_i = P_{i, spec} - P_{i, calc}$
    *   Reactive Power Mismatch: $\Delta Q_i = Q_{i, spec} - Q_{i, calc}$
    The goal of the load flow is to drive these mismatches to zero (or within a small tolerance).

> [!formula] Active and Reactive Calculated Power Equations
> 
> For an $N$-bus system, the calculated real and reactive power injected at bus $i$ using the bus admittance matrix elements $Y_{ij} = G_{ij} + jB_{ij}$ are:
> 
> $$P_{i, calc} = |V_i| \sum_{j=1}^{N} |V_j| (G_{ij}\cos\delta_{ij} + B_{ij}\sin\delta_{ij})$$
> 
> $$Q_{i, calc} = |V_i| \sum_{j=1}^{N} |V_j| (G_{ij}\sin\delta_{ij} - B_{ij}\cos\delta_{ij})$$
> 
> where $\delta_{ij} = \delta_i - \delta_j$.

2.  **Linearized Relationship:**
    The NR method relates the power mismatches to the corrections in voltage angle ($\Delta\delta$) and magnitude ($\Delta|V|$) through a matrix of partial derivatives called the **Jacobian Matrix (J)**.
    $$\boxed{\quad
    \begin{bmatrix} \Delta P \\ \Delta Q \end{bmatrix} =
    \begin{bmatrix} J_{11} & J_{12} \\ J_{21} & J_{22} \end{bmatrix}
    \begin{bmatrix} \Delta \delta \\ \Delta |V| \end{bmatrix}
    \quad}$$
    This is a system of linear equations that is solved at each iteration.

---
#### The Jacobian Matrix (J)
#newton-raphson/jacobian-matrix

The Jacobian matrix is the key to the NR method. Its elements are the partial derivatives of the real and reactive power flow equations with respect to the voltage angles and magnitudes, evaluated at the current iteration's state.

$$ J = \begin{bmatrix} J_{11} & J_{12} \\ J_{21} & J_{22} \end{bmatrix} =
\begin{bmatrix}
\frac{\partial P}{\partial \delta} & \frac{\partial P}{\partial |V|} \\
\frac{\partial Q}{\partial \delta} & \frac{\partial Q}{\partial |V|}
\end{bmatrix} $$

*   $J_{11} = \frac{\partial P}{\partial \delta}$: Relates changes in real power to changes in voltage angle.
*   $J_{12} = \frac{\partial P}{\partial |V|}$: Relates changes in real power to changes in voltage magnitude.
*   $J_{21} = \frac{\partial Q}{\partial \delta}$: Relates changes in reactive power to changes in voltage angle.
*   $J_{22} = \frac{\partial Q}{\partial |V|}$: Relates changes in reactive power to changes in voltage magnitude.

> [!derivation] Analytical Expressions for Jacobian Elements
> 
> **Off-Diagonal Elements ($i \neq j$):**
> 
> $$\frac{\partial P_i}{\partial \delta_j} = |V_i||V_j|(G_{ij}\sin\delta_{ij} - B_{ij}\cos\delta_{ij})$$
> $$\frac{\partial P_i}{\partial |V_j|} = |V_i|(G_{ij}\cos\delta_{ij} + B_{ij}\sin\delta_{ij})$$
> 
> **Diagonal Elements ($i = j$):**
> 
> $$\frac{\partial P_i}{\partial \delta_i} = -Q_{i, calc} - |V_i|^2 B_{ii}$$
> $$\frac{\partial P_i}{\partial |V_i|} = \frac{P_{i, calc}}{|V_i|} + |V_i|G_{ii}$$

The size of the Jacobian matrix depends on the number of **state variables**, not directly on the number of buses.

- Number of voltage angle variables: $(N - 1)$ (excluding slack bus)
- Number of voltage magnitude variables: $N_{PQ}$

> [!examtip] What decides bus type
> Bus type is decided by **which quantities are specified vs unknown**,
> not by physical labels like *generator* or *load*.

Hence, the overall Jacobian size is:
$$
\boxed{(N - 1 + N_{PQ}) \times (N - 1 + N_{PQ})}
$$
- $N$ is the total number of buses including Slack, PQ, and PV buses

> [!mistake] NR equation count
> Number of nonlinear equations
> $$= \text{(non-slack angles)} + \text{(PQ voltage magnitudes)}$$
> Always count bus types **after** PV↔PQ reclassification.

| Submatrix  | Final Dimension            |
| ---------- | -------------------------- |
| $$J_{11}$$ | $$(N - 1) \times (N - 1)$$ |
| $$J_{12}$$ | $$(N - 1) \times N_{PQ}$$  |
| $$J_{21}$$ | $$N_{PQ} \times (N - 1)$$  |
| $$J_{22}$$ | $$N_{PQ} \times N_{PQ}$$   |
- $N$ is total number bus including Slack, PQ and PV Buses

> [!pyq]- PYQ : 2021
> ![[ee_2021#^q9]]

---
#### Treatment of PV and PQ Buses in NR Load Flow
#bus/pv #bus/pq 

- **Slack Bus**
  - Voltage magnitude and angle are fixed
  - No mismatch equations are written

- **PV Bus**
  - Real power mismatch equation ($\Delta P$) is included
  - Reactive power mismatch equation ($\Delta Q$) is **not included**
  - Voltage magnitude $|V|$ is fixed
  - Voltage angle $\delta$ is updated

- **PQ Bus**
  - Both real and reactive power mismatch equations ($\Delta P$, $\Delta Q$) are included
  - Both voltage angle $\delta$ and magnitude $|V|$ are updated

Hence, the Jacobian submatrices $J_{21}$ and $J_{22}$ correspond only to **PQ buses**.

> [!mistake] Bus-type change is dynamic
> PV ↔ PQ classification can change **during iterations** due to reactive power limits.
> Always re-count $N_{PQ}$ **after convergence logic**, not before.

> [!trick] Dynamic Jacobian Resizing
> 
> If a PV bus violates its reactive power limits ($Q_{i, min} > Q_{i, calc}$ or $Q_{i, calc} > Q_{i, max}$), it is converted into a **PQ bus** for subsequent iterations:
> 
> 1. Set $Q_{i, spec}$ to the hit limit.
>     
> 2. The voltage magnitude $|V_i|$ becomes an _unknown state variable_.
>     
> 3. **Result:** The size of the Jacobian matrix increases by $1 \times 1$.
>     

---
#### 🔥Jacobian Size Determination (Exam-Oriented Rule)
#newton-raphson/jacobian-size #exam-rule

For Newton–Raphson load flow in **polar coordinates**:

- Number of voltage angle variables:
$$N_\delta = N - 1$$
(excluding the slack bus)

- Number of voltage magnitude variables:
$$N_{|V|} = N_{PQ}$$
(only PQ buses)

Hence, the total number of state variables is:
$$N_{states} = (N - 1) + N_{PQ}$$

Therefore, the Jacobian matrix size is:
$$\boxed{\quad N_{states} \times N_{states} \quad}$$

---
#### Algorithm and Step-by-Step Procedure
#newton-raphson/algorithm

**Step 1: Initialization**
*   Set iteration count $k=0$.
*   Initialize bus voltages using a **flat start**: $V_i^{(0)} = 1.0 \angle 0^\circ$ for all PQ buses, and $|V_i^{(0)}|=|V_{i,spec}| \angle 0^\circ$ for PV buses. The slack bus voltage is fixed.

> [!concept] Notes
> A flat start is effective because transmission networks are predominantly **inductive**, which ensures weak coupling between real power–voltage magnitude and reactive power–voltage angle.


**Step 2: Calculate Power Mismatches**
*   At iteration $k$, use the current voltages $V_i^{(k)}$ to calculate $P_{i,calc}^{(k)}$ and $Q_{i,calc}^{(k)}$ for all PQ and PV buses using the power flow equations.
*   Compute the mismatch vectors $\Delta P^{(k)}$ and $\Delta Q^{(k)}$.

**Step 3: Form the Jacobian Matrix**
*   Calculate the elements of the Jacobian matrix $J^{(k)}$ by evaluating the partial derivatives using the current voltage values $V_i^{(k)}$.

**Step 4: Solve for Corrections**

* Solve the linear system of equations to obtain the correction vector:
$$
[J^{(k)}]
\begin{bmatrix} \Delta \delta^{(k)} \\ \Delta |V|^{(k)} \end{bmatrix}
=
\begin{bmatrix} \Delta P^{(k)} \\ \Delta Q^{(k)} \end{bmatrix}
$$

> [!concept] Notes
> In practice, the Jacobian matrix is **not explicitly inverted**.  
> Numerical techniques such as **[[LU Decomposition]]** are used to solve the system efficiently.


**Step 5: Update State Variables**
*   Update the voltage angles and magnitudes for the next iteration:
    $$\begin{align}
    \delta_i^{(k+1)} &= \delta_i^{(k)} + \Delta \delta_i^{(k)} \\
    |V_i|^{(k+1)} &= |V_i|^{(k)} + \Delta |V_i|^{(k)}
    \end{align}$$

**Step 6: Convergence Check**
*   Check if the largest element in the power mismatch vector is below a specified tolerance $\epsilon$:
    $$\max(|\Delta P_i^{(k)}|, |\Delta Q_i^{(k)}|) \leq \epsilon$$
*   If converged, the process stops. Otherwise, increment the iteration count ($k=k+1$) and return to Step 2.

---
#### Characteristics and Convergence
#newton-raphson/convergence

*   **Convergence Rate:** The Newton-Raphson method exhibits **quadratic convergence**, which means the error is squared at each iteration. This makes it extremely fast, typically converging in 3-5 iterations regardless of system size.
*   **Advantages:**
    *   Very fast convergence.
    *   Highly reliable and accurate, even for large and complex systems.
    *   Convergence is not sensitive to the choice of the slack bus.
*   **Disadvantages:**
    *   More complex to program compared to the [[Gauss-Seidel Method for Load Flow|Gauss-Seidel method]].
    *   Computationally intensive per iteration due to the need to form and repeatedly factorize the Jacobian matrix.
    *   Requires a large amount of computer memory to store the Jacobian.

> [!examtip] Convergence Dependency
> While the NR method features **quadratic convergence** ($e_{k+1} \propto e_k^2$), this property is strictly _local_. If the initial guess (voltage profile) is far from the true solution, the method can completely diverge. This is why a strategic **flat start** is required.

---
#### Reason for Fast Convergence in Power Systems
#newton-raphson/fast-convergence

In power systems:
- Real power ($P$) is strongly coupled with voltage angle ($\delta$)
- Reactive power ($Q$) is strongly coupled with voltage magnitude ($|V|$)

This weak cross-coupling enables rapid convergence of the Newton–Raphson method and forms the basis for the **[[Fast Decoupled Load Flow (FDLF)]]** method.

---
### Related Concepts
#power-systems/related-concepts

>  [[Fast Decoupled Load Flow (FDLF)]] (A simplified and faster variant of the NR method)

[[Gauss-Seidel Method for Load Flow]]
[[Power Flow Equations]]
[[Bus Classification (Slack, PQ, PV)]]
[[Bus Admittance Matrix (Y-bus) Formulation]]
[[Taylor Series]]