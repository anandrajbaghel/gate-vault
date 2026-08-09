---
tags:
  - control-systems
  - state-space
  - duality
  - controllability
  - observability
  - modern-control
created: 2025-09-21
aliases:
  - Duality Principle
  - Duality in Control Systems
subject: "[[Control Systems]]"
parent:
  - Controllability and Observability
modified: 2026-08-04T10:17:07
---
### Principle of Duality
#control-systems/state-space #duality #controllability #observability

> The **Principle of Duality**, introduced by Rudolf Kalman, reveals a fundamental symmetry in LTI systems between the concepts of [[Controllability|controllability]] and [[Observability|observability]]. It states that the conditions for observability of a system are identical to the conditions for controllability of a related "dual" system. This powerful principle means that any theorem, proof, or design algorithm related to controllability has a direct counterpart for observability, and vice versa.

#### The Dual System
#duality/dual-system

For a given LTI system (the "primal" system), described by the state-space matrices $(A, B, C)$:
-   State Equation: $\dot{\mathbf{x}} = A\mathbf{x} + B\mathbf{u}$
-   Output Equation: $\mathbf{y} = C\mathbf{x}$

The **dual system** is a mathematical construct defined by the matrices $(A^*, B^*, C^*)$, where:
$$ \boxed{\quad A^* = A^T, \quad B^* = C^T, \quad C^* = B^T \quad} $$
-   Dual State Equation: $\dot{\mathbf{z}} = A^T\mathbf{z} + C^T\mathbf{v}$
-   Dual Output Equation: $\mathbf{w} = B^T\mathbf{z}$

---
### Statement of the Duality Principle
#duality/principle-statement

The principle establishes a direct link between the controllability/observability of a primal system and the observability/controllability of its dual.

> 1.  The primal system $(A, B)$ is **controllable** if and only if its dual system, described by $(A^T, C^T)$, is **observable**.
> 2.  The primal system $(A, C)$ is **observable** if and only if its dual system, described by $(A^T, B^T)$, is **controllable**.

---
#### Proof via Kalman's Tests
#duality/proof
The principle can be proven by comparing the Kalman matrices for a system and its dual. Let's compare the observability matrix of the primal system with the controllability matrix of its dual.

-   **Observability Matrix of Primal System (S)**:
    $$ Q_o(A, C) = \begin{bmatrix} C \\ CA \\ CA^2 \\ \vdots \\ CA^{n-1} \end{bmatrix} $$
-   **Controllability Matrix of Dual System (S*)**: The dual system for observability has matrices $A^*=A^T$ and $B^*=C^T$.
    $$ Q_c(A^*, B^*) = Q_c(A^T, C^T) = \begin{bmatrix} C^T & A^T C^T & (A^T)^2 C^T & \dots & (A^T)^{n-1} C^T \end{bmatrix} $$

Using the matrix transpose property $(XY)^T = Y^T X^T$, we can see that:
$$(A^T C^T)^T = (C^T)^T (A^T)^T = CA$$
By transposing the entire dual controllability matrix, we find:
$$ [Q_c(A^T, C^T)]^T = \begin{bmatrix} (C^T)^T \\ (A^T C^T)^T \\ ((A^T)^2 C^T)^T \\ \vdots \\ ((A^T)^{n-1} C^T)^T \end{bmatrix} = \begin{bmatrix} C \\ CA \\ CA^2 \\ \vdots \\ CA^{n-1} \end{bmatrix} = Q_o(A, C) $$
Since the rank of a matrix is equal to the rank of its transpose ($\text{rank}(M) = \text{rank}(M^T)$), it follows that:
$$ \boxed{\quad \text{rank}[Q_o(A, C)] = \text{rank}[Q_c(A^T, C^T)] \quad} $$
Therefore, the primal system is observable if and only if the dual system is controllable.

---
### Implications and Applications
#duality/applications

-   **Theoretical Efficiency**: Any theorem proven for controllability can be immediately applied to observability by considering the dual system. This halves the theoretical effort.
-   **Design Symmetry**: The duality extends to design algorithms. The problem of designing a **state-feedback controller** (e.g., pole placement) for a controllable system $(A, B)$ is mathematically dual to designing a **state observer** for an observable system $(A, C)$. The algorithm for finding the controller gain matrix $K$ for the pair $(A, B)$ is the same as finding the observer gain matrix $L$ for the dual pair $(A^T, C^T)$.

---
### Related Concepts
#related-concepts

> [[Controllability]]

[[Observability]]
[[Controllability]]
[[Observability]]
[[State-Space Representation of LTI Systems]]
