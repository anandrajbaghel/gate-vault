---
tags:
  - power-systems
  - economic-operation
  - eld
  - optimization
  - transmission-losses
created: 2025-10-14
aliases:
  - ELD with losses
  - Economic Dispatch with losses
  - Penalty Factor Method
subject: "[[Power System]]"
parent:
  - Economic Operation of Power Systems
modified: 2026-07-23T21:25:35
---
### Economic Load Dispatch (ELD) including losses
#economic-load-dispatch #transmission-losses #penalty-factor

> When transmission losses are considered in Economic Load Dispatch, the problem becomes more realistic and complex. The location of generating units relative to the load centers now plays a crucial role. The objective is still to minimize the total fuel cost, but the power balance constraint must account for the real power lost in the transmission network.

#### Objective and Constraints
#eld/objective-function #eld/constraints

1.  **Objective Function: Minimize Total Fuel Cost ($C_T$)**
    This remains the same as the lossless case.
    $$ C_T = \sum_{i=1}^{N} C_i(P_{Gi}) = \sum_{i=1}^{N} (a_i P_{Gi}^2 + b_i P_{Gi} + c_i) $$

2.  **Constraint Equation: Power Balance with Losses**
    The total power generated must now supply both the system demand ($P_D$) and the total transmission losses ($P_L$).
    $$\boxed{\quad \sum_{i=1}^{N} P_{Gi} = P_D + P_L \quad}$$

---
#### Transmission Loss Modeling (B-Coefficients)
#b-coefficients #krons-loss-formula

The total system loss, $P_L$, can be expressed as a quadratic function of the generator power outputs using **Kron's Loss Formula**, which utilizes a matrix of **B-coefficients**.
$$\boxed{\quad P_L = \sum_{i=1}^{N} \sum_{j=1}^{N} P_{Gi} B_{ij} P_{Gj} \quad}$$
In expanded matrix form:
$$ P_L = [P_{G1} \ P_{G2} \ \dots] \begin{bmatrix} B_{11} & B_{12} & \dots \\ B_{21} & B_{22} & \dots \\ \vdots & \vdots & \ddots \end{bmatrix} \begin{bmatrix} P_{G1} \\ P_{G2} \\ \vdots \end{bmatrix} $$
-   The $B_{ij}$ coefficients are constants that depend on the transmission network's impedance and configuration. They are typically assumed to be constant for a given system loading condition.

---
#### Optimality Condition and the Penalty Factor
#penalty-factor #equal-lambda-criterion

To find the minimum cost, a Lagrange multiplier formulation is used. The key result is a modified optimality condition.

The cost of supplying a small increase in load demand is met by increasing the generation of all units such that each unit's **incremental production cost, penalized for its effect on losses**, is the same.
This condition is expressed using a **Penalty Factor ($L_i$)**:
$$\boxed{\quad IC_i \times L_i = \lambda \quad \text{or} \quad \frac{dC_i}{dP_{Gi}} \times L_i = \lambda \quad}$$
where:
-   $IC_i$ is the incremental fuel cost of unit $i$.
-   $\lambda$ is the system incremental cost (or system lambda) in Rs/MWh.
-   $L_i$ is the **Penalty Factor** of unit $i$, defined as:
    $$\boxed{\quad L_i = \frac{1}{1 - \frac{\partial P_L}{\partial P_{Gi}}} \quad}$$

The partial derivative $\frac{\partial P_L}{\partial P_{Gi}}$ is the **incremental transmission loss (ITL)** for unit $i$. It represents how much the total system losses change for a 1 MW change in generation at unit $i$.
Using the B-coefficient formula, this is calculated as:
$$\boxed{\quad \frac{\partial P_L}{\partial P_{Gi}} = 2 \sum_{j=1}^{N} B_{ij} P_{Gj} \quad}$$
*   **Intuition**: A penalty factor $L_i > 1$ means that to deliver 1 MW of power to the load from generator $i$, the unit must generate more than 1 MW to account for the increase in system losses. A generator electrically far from the load will have a higher penalty factor and will be dispatched less, while a generator close to the load will have a penalty factor near 1.

---
#### Solution Algorithm (Iterative)
#eld/algorithm #iterative-method

Unlike the lossless case, a direct analytical solution for the optimal dispatch is not possible because the penalty factors $L_i$ depend on the very generator powers $P_{Gi}$ we are trying to find. Therefore, an **iterative solution** is required.

**Coordination Equations:** The set of equations to be solved are:
1.  $(2a_i P_{Gi} + b_i) \times L_i = \lambda \quad$ for $i=1, \dots, N$
2.  $\sum_{i=1}^{N} P_{Gi} = P_D + P_L$

**Iterative Procedure:**
1.  **Initialization**: Make an initial guess for the generator powers $P_{Gi}^{(0)}$. Often, a lossless dispatch is a good starting point.
2.  **Iteration `k`**:
    a. Calculate the total losses $P_L^{(k)}$ using the B-coefficient formula with the current generator powers $P_{Gi}^{(k-1)}$.
    b. Calculate the power balance error: $\Delta P^{(k)} = P_D + P_L^{(k)} - \sum P_{Gi}^{(k-1)}$. If $|\Delta P|$ is less than a tolerance, stop.
    c. Calculate the incremental losses $\frac{\partial P_L}{\partial P_{Gi}}^{(k)}$ for each generator.
    d. Calculate the penalty factors $L_i^{(k)}$ for each generator.
    e. Solve for a new system lambda $\lambda^{(k)}$ using the power balance equation. This itself is complex, so often $\lambda$ is updated iteratively (e.g., using a gradient method). A common approach is to guess $\lambda$, calculate all $P_{Gi}$, check the power balance, and adjust $\lambda$ up or down.
    f. Calculate the new dispatch for each generator $P_{Gi}^{(k)}$ based on the current $\lambda^{(k)}$ and $L_i^{(k)}$.
    $$P_{Gi}^{(k)} = \frac{(\lambda^{(k)}/L_i^{(k)}) - b_i}{2a_i}$$
    g. Check for generator limit violations and fix them as in the lossless case.
3.  **Repeat**: Go to step 2 with the updated power values. Continue until the power balance is satisfied to a desired accuracy.

---
### Related Concepts
#eld/related-concepts

> [[Economic Load Dispatch (ELD) neglecting losses]]

[[Optimal Power Flow (OPF)]]
[[Power Flow Studies (Load Flow Analysis)]]
[[Per-Unit System]]
[[Newton-Raphson Method for Load Flow]]