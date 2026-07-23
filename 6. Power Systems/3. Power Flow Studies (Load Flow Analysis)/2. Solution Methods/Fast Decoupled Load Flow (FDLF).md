---
tags:
  - power-systems
  - load-flow
  - newton-raphson
  - fdlf
  - numerical-methods
created: 2025-10-12
aliases:
  - FDLF
  - Fast Decoupled Load Flow Method
  - Decoupled Load Flow
subject: "[[Power System]]"
parent: "[[Power Flow Studies (Load Flow Analysis)]]"
modified: 2026-07-23T21:20:57
---
### Fast Decoupled Load Flow (FDLF)
#power-systems/load-flow #fdlf #newton-raphson

> The **Fast Decoupled Load Flow (FDLF)** method is a widely used derivative of the [[Newton-Raphson Method for Load Flow|Newton-Raphson (NR)]] method that simplifies the problem by exploiting the physical properties of high-voltage power transmission systems. Its primary advantages are a significant increase in computational speed and a reduction in memory requirements, making it highly suitable for real-time analysis and contingency studies.

#### Principle and Key Assumptions
#fdlf/principle

The FDLF method is based on the strong physical coupling between **real power (P) and voltage angle (δ)**, and between **reactive power (Q) and voltage magnitude (|V|)**. Conversely, the coupling between P-|V| and Q-δ is weak. This observation is mathematically valid under a set of reasonable assumptions for EHV/HV transmission systems:

1.  **High X/R Ratio:** For transmission lines, the reactance $X$ is much larger than the resistance $R$. This implies that the line admittance $y_{ij} = g_{ij} + jb_{ij}$ has a very small real part ($g_{ij} \ll b_{ij}$).
2.  **Small Angle Differences:** The voltage angle difference between two connected buses is typically small, so $\cos(\delta_i - \delta_j) \approx 1$ and $\sin(\delta_i - \delta_j) \approx \delta_i - \delta_j$.
3.  **Flat Voltage Profile:** Voltage magnitudes across the system are usually close to the nominal value, i.e., $|V_i| \approx 1.0$ per unit.

---
#### Decoupling the Jacobian Matrix
#fdlf/decoupling

The standard Newton-Raphson update equation is:
$$
\begin{bmatrix} \Delta P \\ \Delta Q \end{bmatrix} =
\begin{bmatrix} J_{11} & J_{12} \\ J_{21} & J_{22} \end{bmatrix}
\begin{bmatrix} \Delta \delta \\ \Delta |V| \end{bmatrix}
\quad \text{where} \quad J = \begin{bmatrix} \frac{\partial P}{\partial \delta} & \frac{\partial P}{\partial |V|} \\ \frac{\partial Q}{\partial \delta} & \frac{\partial Q}{\partial |V|} \end{bmatrix}
$$
By applying the key assumptions, the elements of the off-diagonal sub-matrices ($J_{12} = \frac{\partial P}{\partial |V|}$ and $J_{21} = \frac{\partial Q}{\partial \delta}$) become negligible compared to the diagonal sub-matrices. Setting these off-diagonal blocks to zero decouples the system into two separate sets of linear equations:

1.  **Real Power-Angle Equation:**
    $$\boxed{\quad [\Delta P] = [B'] [\Delta \delta] \quad}$$
2.  **Reactive Power-Voltage Equation:**
    $$\boxed{\quad [\Delta Q] = [B''] [\Delta |V|] \quad}$$

---
#### The B' and B'' Matrices
#fdlf/b-matrix

The matrices $[B']$ and $[B'']$ are approximations of the Jacobian sub-matrices $\frac{\partial P}{\partial \delta}$ and $\frac{\partial Q}{\partial |V|}$, respectively. They are **constant matrices** whose elements are derived from the susceptances of the [[Bus Admittance Matrix (Y-bus) Formulation|Y-bus matrix]], neglecting the resistances.

*   The crucial advantage is that **[B'] and [B''] are calculated only once** at the beginning of the load flow study.
*   Their inverse (or more efficiently, their LU factorization) is also computed only once.
*   This avoids the computationally expensive step of recalculating and inverting a large Jacobian matrix at every single iteration, which is the main bottleneck of the full NR method.

---
#### Algorithm
#fdlf/algorithm

The FDLF algorithm proceeds by solving the two decoupled equations iteratively.

1.  **Initialization:**
    *   Initialize voltages with a flat start ($1.0 \angle 0^\circ$).
    *   Compute the constant matrices $[B']$ and $[B'']$ from the Y-bus data.
    *   Compute the LU factorizations of $[B']$ and $[B'']$.

2.  **Start Iteration (k):**
    *   Calculate the real power mismatch $\Delta P_i^{(k)} = P_{i,spec} - P_{i,calc}^{(k)}$.
    *   Solve for the angle correction: $[\Delta \delta^{(k)}] = [B']^{-1} [\Delta P^{(k)}]$.
    *   Update the angles: $[\delta^{(k+1)}] = [\delta^{(k)}] + [\Delta \delta^{(k)}]$.
    *   Using the newly updated angles, calculate the reactive power mismatch $\Delta Q_i^{(k)} = Q_{i,spec} - Q_{i,calc}^{(k)}$.
    *   Solve for the voltage magnitude correction: $[\Delta |V|^{(k)}] = [B'']^{-1} [\Delta Q^{(k)}]$.
    *   Update the voltage magnitudes: $[|V|^{(k+1)}] = [|V|^{(k)}] + [\Delta |V|^{(k)}]$.

3.  **Convergence Check:**
    *   Check if the maximum absolute value in the mismatch vectors, $\max(|\Delta P_i|, |\Delta Q_i|)$, is below the specified tolerance $\epsilon$.
    *   If not converged, repeat the iteration.

---
#### Characteristics and Comparison
#fdlf/characteristics

*   **Convergence:** The FDLF method has a **linear convergence** rate. Although this is theoretically slower than the quadratic convergence of the full NR method, each iteration is so fast that the overall solution time is often much less. It typically requires slightly more iterations than NR (e.g., 5-10 iterations).
*   **Advantages:**
    *   **Speed:** Extremely fast per iteration. The overall speed is 5-10 times faster than the full NR method.
    *   **Memory:** Requires significantly less memory because the full Jacobian is never formed or stored.
    *   **Reliability:** Very reliable for its intended application (transmission systems).
*   **Disadvantages:**
    *   **Applicability:** The underlying assumptions may not hold for systems with low X/R ratios (like distribution networks or underground cable systems), leading to poor convergence or inaccurate results.

---
### Related Concepts
#power-systems/related-concepts

> [[Newton-Raphson Method for Load Flow]]

[[Gauss-Seidel Method for Load Flow]]
[[Bus Admittance Matrix (Y-bus) Formulation]]
[[Power Flow Equations]]