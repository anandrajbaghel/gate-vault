---
tags:
  - control-system
  - state-space
  - mathematical-modeling
  - gate
created: 2026-08-04T10:09:16
aliases:
  - Complete Observability
  - Kalman's Observability Test
  - State Estimation
  - Gilbert's Observability Test
subject: "[[Control Systems]]"
parent: "[[State-Variable Analysis and Design]]"
modified: 2026-08-04T10:09:16
---
### Observability
#control-system/state-space #observability

> A system is said to be **completely observable** if every initial state $x(t_0)$ can be uniquely determined from the observation of the output $y(t)$ and the input $u(t)$ over a finite time interval $t_0 \le t \le t_f$. In simpler terms, it means that every internal state variable leaves a "footprint" on the output of the system.

#### Kalman's Test for Observability
#state-space/kalman-test #gate/formulas

This is the standard algebraic test for checking the observability of a Linear Time-Invariant (LTI) system defined by $\mathbf{\dot{x}} = Ax + Bu$ and $\mathbf{y} = Cx + Du$.

We construct the **Observability Matrix ($Q_o$)**:
$$\boxed{\quad Q_o = \begin{bmatrix} C \\ CA \\ CA^2 \\ \vdots \\ CA^{n-1} \end{bmatrix} \quad}$$
Where:
*   $A$ is the system matrix of size $n \times n$.
*   $C$ is the output matrix of size $p \times n$ ($p$ is the number of outputs).
*   $Q_o$ will have dimensions $pn \times n$.

**Condition for Observability:**
The system is completely observable if and only if the rank of the observability matrix is equal to the order of the system ($n$).
$$\boxed{\quad \text{Rank}(Q_o) = n \quad}$$

**For SISO Systems (Single Input, Single Output):**
In a SISO system, $C$ is a row vector ($1 \times n$), making $Q_o$ a square matrix ($n \times n$). The rank condition simplifies to checking the determinant:
$$\boxed{\quad |Q_o| \neq 0 \implies \text{Observable} \quad}$$
If $|Q_o| = 0$, the system is unobservable.

---
#### Gilbert's Test for Observability
#state-space/gilbert-test

Similar to controllability, Gilbert's test applies when the system matrix $A$ has **distinct eigenvalues** and the system has been transformed into the **Diagonal Canonical Form** via a [[State-Space Transformation]] using the modal matrix $M$.

Let the transformed output equation be:
$$\mathbf{y} = \tilde{C}z + Du$$
(where $\tilde{C} = CM$).

**Condition:**
The system is completely observable if and only if **no column of the transformed output matrix $\tilde{C}$ is entirely zero**.
*   *Interpretation:* If a column $j$ in $\tilde{C}$ is entirely zero, the corresponding state variable $z_j$ does not contribute anything to the output vector $y$. Thus, $z_j$ is "hidden" from the output, making the system unobservable.

---
#### Principle of Duality
#state-space/duality

There is a fundamental mathematical symmetry between Controllability and Observability, defined by the **Principle of Duality**.

*   A system represented by the pair $(A, B)$ is **controllable** if and only if the dual system represented by the pair $(A^T, B^T)$ is **observable**.
*   A system represented by the pair $(A, C)$ is **observable** if and only if the dual system represented by the pair $(A^T, C^T)$ is **controllable**.

This allows us to test observability using the controllability test machinery by just transposing the matrices.

---
#### Transfer Function and Pole-Zero Cancellation
#control-system/transfer-function #gate/concept

Just like controllability, the observability of a system is closely tied to its transfer function $G(s) = C(sI - A)^{-1}B + D$.

*   If a **Pole-Zero Cancellation** occurs in the derivation of the transfer function from the state-space model, the system is **either Uncontrollable, Unobservable, or both**.
*   An unobservable pole (eigenvalue) represents a dynamic mode of the system that might be unstable but will never show up in the output response.

---
#### Application: State Observers (Estimators)
#control-system/design

In practical control systems, it is often too expensive or physically impossible to place a sensor on every single state variable.
*   If a system is completely observable, we can design a **State Observer** (like a Luenberger Observer or Kalman Filter).
*   An observer uses the mathematical model of the system, along with the known inputs $u(t)$ and measured outputs $y(t)$, to continuously calculate an estimate of the unmeasured internal states $\hat{x}(t)$.
*   These estimated states can then be fed into a State Feedback Controller ($u = -K\hat{x}$).

---
### Related Concepts
#topic/related-concepts

> [[Controllability]] (The dual concept)

[[State-Variable Analysis and Design]]
[[State-Space Transformation]] (Diagonalization required for Gilbert's Test)
[[Transfer Function]]
[[Linear Algebra - Matrices]] (Rank, Determinant, Transpose)