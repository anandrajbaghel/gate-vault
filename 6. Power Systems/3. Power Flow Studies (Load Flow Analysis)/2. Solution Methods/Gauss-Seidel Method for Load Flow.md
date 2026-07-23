---
tags:
  - power-systems
  - load-flow
  - gauss-seidel
  - iterative-methods
  - numerical-methods
created: 2025-10-12
aliases:
  - GS Method for Load Flow
  - Gauss-Seidel Load Flow
subject: "[[Power System]]"
parent: "[[Power Flow Studies (Load Flow Analysis)]]"
modified: 2026-07-23T21:21:02
---
### Gauss-Seidel Method for Load Flow
#power-systems/load-flow #gauss-seidel #iterative-methods

> The Gauss-Seidel (GS) method is an iterative numerical technique used to solve the set of non-linear [[Power Flow Equations|power flow equations]]. It is a relatively simple method that calculates the voltage at each bus sequentially, using the most recently updated voltage values of other buses within the same iteration.

#### Principle of the Method
#gauss-seidel/principle

The method is based on rearranging the power flow equation to solve for the voltage at a single bus, $V_i$. The current injected into bus 'i' is:
$$I_i = \frac{P_i - jQ_i}{V_i^*}$$
From the [[Bus Admittance Matrix (Y-bus) Formulation|Y-bus matrix]], we also have:
$$I_i = \sum_{j=1}^{N} Y_{ij}V_j = Y_{ii}V_i + \sum_{j=1, j\neq i}^{N} Y_{ij}V_j$$
Equating these two expressions and solving for $V_i$ gives the core iterative formula:
$$V_i = \frac{1}{Y_{ii}} \left[ \frac{P_i - jQ_i}{V_i^*} - \sum_{j=1, j\neq i}^{N} Y_{ij}V_j \right]$$
This equation is solved iteratively for each bus until the voltages converge.

---
#### Algorithm and Step-by-Step Procedure
#gauss-seidel/algorithm

**Step 1: Initialization**
*   Set iteration count $k=0$.
*   Initialize bus voltages. A common practice is a **flat start**:
    *   Slack bus voltage $V_s$ is fixed at its specified value (e.g., $1.0 \angle 0^\circ$).
    *   For all PQ buses, set $V_i^{(0)} = 1.0 \angle 0^\circ$.
    *   For all PV buses, set $V_i^{(0)} = |V_{i,spec}| \angle 0^\circ$.
*   Define a convergence tolerance, $\epsilon$.

**Step 2: Iteration ($k \to k+1$)**
For each bus $i = 1, 2, ..., N$ (excluding the slack bus):

##### For a PQ Bus:
The real power $P_i$ and reactive power $Q_i$ are specified. The voltage for the $(k+1)^{th}$ iteration is calculated using the values from the current iteration. Note that for buses $j<i$, the already updated voltage $V_j^{(k+1)}$ is used.
$$\boxed{\quad V_i^{(k+1)} = \frac{1}{Y_{ii}} \left[ \frac{P_{i,spec} - jQ_{i,spec}}{(V_i^{(k)})^*} - \sum_{j=1}^{i-1} Y_{ij}V_j^{(k+1)} - \sum_{j=i+1}^{N} Y_{ij}V_j^{(k)} \right] \quad}$$

##### For a PV Bus:
The real power $P_i$ and voltage magnitude $|V_{i,spec}|$ are specified.
1.  **Calculate Reactive Power ($Q_i$):** First, calculate the reactive power $Q_i^{(k+1)}$ using the most recent voltage values.
    $$\begin{align}
    Q_i^{(k+1)} &= -\text{Im} \left[ (V_i^{(k)})^* \sum_{j=1}^{N} Y_{ij}V_j \right] \\
    &= -\text{Im} \left[ (V_i^{(k)})^* \left( \sum_{j=1}^{i-1} Y_{ij}V_j^{(k+1)} + \sum_{j=i}^{N} Y_{ij}V_j^{(k)} \right) \right]
    \end{align}$$
2.  **Check Q-Limits:** Compare the calculated $Q_i^{(k+1)}$ with the generator's reactive power limits, $Q_{i,min}$ and $Q_{i,max}$.
    *   If $Q_{i,min} \leq Q_i^{(k+1)} \leq Q_{i,max}$: The bus remains a PV bus. $Q_i$ is updated to $Q_i^{(k+1)}$.
    *   If $Q_i^{(k+1)} > Q_{i,max}$: The limit is violated. The bus is temporarily treated as a PQ bus with $Q_i = Q_{i,max}$.
    *   If $Q_i^{(k+1)} < Q_{i,min}$: The limit is violated. The bus is temporarily treated as a PQ bus with $Q_i = Q_{i,min}$.
3.  **Calculate Voltage ($V_i$):** Compute an intermediate voltage $V_{i,calc}^{(k+1)}$ using the PQ bus formula with $P_{i,spec}$ and the updated $Q_i^{(k+1)}$ (or its limit).
4.  **Enforce Voltage Magnitude:** The voltage magnitude must be maintained. The final updated voltage is obtained by keeping the specified magnitude and taking the angle from the calculated voltage.
    $$V_i^{(k+1)} = |V_{i,spec}| \angle \delta_{i,calc}^{(k+1)}$$

**Step 3: Acceleration Factor**
To improve the slow convergence rate, an acceleration factor $\alpha$ can be used.
$$V_{i, accelerated}^{(k+1)} = V_i^{(k)} + \alpha (V_{i,calc}^{(k+1)} - V_i^{(k)})$$
A typical value for $\alpha$ is around 1.6.

**Step 4: Convergence Check**
After completing iterations for all buses, check if the maximum voltage change is within the tolerance:
$$\max_i |V_i^{(k+1)} - V_i^{(k)}| \leq \epsilon$$
If the condition is met, the solution has converged. Otherwise, increment the iteration count ($k=k+1$) and return to Step 2.

---
#### Characteristics and Convergence
#gauss-seidel/convergence

*   **Convergence Rate:** The Gauss-Seidel method has a **linear** rate of convergence. The number of iterations required increases almost directly with the number of buses in the system.
*   **Advantages:**
    *   Simple algorithm and easy to program.
    *   Requires less memory compared to the Newton-Raphson method as it does not involve calculating and storing a Jacobian matrix.
*   **Disadvantages:**
    *   **Slow convergence:** Requires a large number of iterations for large systems.
    *   **Poor convergence characteristics:** May fail to converge for heavily loaded systems, systems with large R/X ratios, or with a poor choice of slack bus.

---
### Related Concepts
#power-systems/related-concepts

> [[Power Flow Studies (Load Flow Analysis)]]

[[Newton-Raphson Method for Load Flow]]
[[Power Flow Equations]]
[[Bus Classification (Slack, PQ, PV)]]
[[Bus Admittance Matrix (Y-bus) Formulation]]