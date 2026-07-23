---
tags:
  - power-systems
  - economic-operation
  - eld
  - transmission-losses
  - optimization
created: 2025-10-14
aliases:
  - B-coefficients
  - Penalty Factor
  - Kron's Loss Formula
  - Incremental Transmission Loss
subject: "[[Power System]]"
parent: "[[Economic Load Dispatch (ELD) including losses]]"
formula:
  - "Penalty Factor : $$L_i = \\frac{1}{1 - \\frac{\\partial P_L}{\\partial P_{Gi}}}$$"
modified: 2026-07-23T21:25:46
---
### Penalty Factors and B-coefficients
#power-system-losses #optimization-parameters

> In the economic dispatch of power systems with transmission losses, **B-coefficients** are used to create a mathematical model of the network losses. The **Penalty Factor** is a derived quantity that quantifies the marginal cost of transmission losses associated with each generating unit, ensuring that generators electrically closer to load centers are dispatched more heavily.

#### B-Coefficients and the Loss Formula
#b-coefficients #krons-loss-formula

To incorporate losses into the ELD problem, the total transmission loss ($P_L$) is expressed as a function of the generator power outputs. The most common representation is **Kron's Loss Formula**, which uses a matrix of **B-coefficients**.

$$\boxed{\quad P_L = \sum_{i=1}^{N} \sum_{j=1}^{N} P_{Gi} B_{ij} P_{Gj} \quad}$$
In matrix form: $P_L = \mathbf{P_G}^T \mathbf{B} \mathbf{P_G}$, where $\mathbf{P_G}$ is the vector of generator outputs and $\mathbf{B}$ is the loss coefficient matrix.

-   **Nature of B-Coefficients**: The coefficients $B_{ij}$ are constants derived from the physical parameters (resistance, reactance) and topology of the transmission network.
-   **Assumptions**: Their derivation assumes that individual load currents are a constant fraction of the total load and that the generator voltage profiles are relatively constant. For a given system configuration, they are treated as constants.

---
#### Incremental Transmission Loss (ITL)
#incremental-transmission-loss

The **Incremental Transmission Loss (ITL)** for a specific generator `i` is the rate at which the total system loss changes with respect to a change in that generator's output. It is the partial derivative of the loss formula:
$$ \text{ITL}_i = \frac{\partial P_L}{\partial P_{Gi}} $$
By differentiating Kron's Loss Formula with respect to $P_{Gi}$ (and noting that the matrix $\mathbf{B}$ is symmetric, i.e., $B_{ij} = B_{ji}$), we get:
$$\boxed{\quad \frac{\partial P_L}{\partial P_{Gi}} = 2 \sum_{j=1}^{N} B_{ij} P_{Gj} \quad}$$
This value tells us how many megawatts of system loss are added for each megawatt increase in generation from unit `i`.

---
#### The Penalty Factor ($L_i$)
#penalty-factor

The **Penalty Factor** of a generating unit `i` is a dimensionless factor ($\ge 1$ in most cases) that scales its incremental fuel cost to account for its impact on transmission losses.

##### Derivation
The power balance equation is $P_D + P_L = \sum P_{Gi}$. For a small change in demand $dP_D$, the change in generation and losses must be balanced:
$$ dP_D + dP_L = \sum dP_{Gi} $$
The total change in loss is $dP_L = \sum_i \frac{\partial P_L}{\partial P_{Gi}} dP_{Gi}$. The system lambda ($\lambda$) is the incremental cost of *delivered* power. For a dispatch change at only unit `i`, the cost of delivered power is:
$$\begin{align}
\lambda &= \frac{\text{Incremental Cost of Production}}{\text{Incremental Power Delivered}} \\
 &= \frac{dC_i}{dP_{Gi} - dP_{L,i}} = \frac{IC_i \cdot dP_{Gi}}{dP_{Gi} - (\frac{\partial P_L}{\partial P_{Gi}})dP_{Gi}} \\
 &= \frac{IC_i \cdot dP_{Gi}}{dP_{Gi} (1 - \frac{\partial P_L}{\partial P_{Gi}})} \\
\implies \lambda &= IC_i \left( \frac{1}{1 - \frac{\partial P_L}{\partial P_{Gi}}} \right)
\end{align}$$
The term in the parenthesis is defined as the penalty factor $L_i$.
$$\boxed{\quad L_i = \frac{1}{1 - \frac{\partial P_L}{\partial P_{Gi}}} \quad}$$

##### Physical Interpretation
-   The penalty factor $L_i$ represents the additional generation required from unit `i` to deliver 1 MW of power to the load, accounting for the marginal increase in losses.
-   **If $L_i = 1.05$**, it means that to supply an additional 1 MW to the load, generator `i` must increase its output by 1.05 MW. The extra 0.05 MW is consumed as increased transmission losses.
-   Generators electrically **far** from the load centers typically have a **higher** penalty factor.
-   Generators located **at** the load center have a penalty factor close to **1**.

---
#### Role in the ELD Optimality Condition
#eld/optimality-condition

The penalty factor modifies the equal incremental cost criterion of the lossless case. For the most economic operation considering losses, the condition is that all dispatched generators must operate at the same **penalized incremental cost**:
$$\boxed{\quad IC_1 L_1 = IC_2 L_2 = \dots = IC_N L_N = \lambda \quad}$$
This condition forces units with high penalty factors (those contributing more to losses) to operate at a lower incremental fuel cost (and thus lower power output) than units with low penalty factors. This intelligently balances the cost of generation against the cost of transmission losses.

---
### Related Concepts
#eld/related-concepts

> [[Economic Load Dispatch (ELD) including losses]]

[[Optimal Power Flow (OPF)]]
[[Power Flow Studies (Load Flow Analysis)]]
[[Economic Load Dispatch (ELD) neglecting losses]]