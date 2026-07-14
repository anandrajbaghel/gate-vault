---
tags:
  - linear-algebra
  - matrix-theory
  - engineering-math
  - systems-of-equations
created: 2025-09-15
aliases:
  - System of Linear Equations
  - Linear Equations
  - Ax=b
  - Augmented Matrix
  - Rouché–Capelli Theorem
subject: "[[Mathematics]]"
parent:
  - "[[Linear Algebra]]"
---
### Solving Linear Algebraic Equations
#linear-systems #matrix-algebra #gaussian-elimination

> A system of linear equations is a collection of linear equations involving the same set of variables. The primary goal is to find the values of these variables that satisfy all equations simultaneously. Using matrix algebra, we can represent such a system in the compact form $Ax = b$, which allows us to analyze the existence and uniqueness of solutions and compute them systematically. This is a cornerstone of engineering problem-solving, appearing in circuit analysis, control systems, and power systems.

#### Matrix Representation of Linear Systems
#matrix-form #augmented-matrix

A system of $m$ linear equations with $n$ variables ($x_1, x_2, \dots, x_n$) can be written as:
$$\begin{align}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n &= b_2 \\
\vdots \quad &= \quad \vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n &= b_m
\end{align}$$
This can be expressed in matrix form $Ax = b$:
$$ \begin{bmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} \end{bmatrix}_{m \times n} \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}_{n \times 1} = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{bmatrix}_{m \times 1} $$
*   $A$ is the **coefficient matrix**.
*   $x$ is the **vector of variables**.
*   $b$ is the **constant vector**.
The **Augmented Matrix**, denoted $[A|b]$, is formed by appending the constant vector $b$ as an extra column to the coefficient matrix $A$.

---
#### Consistency of Linear Systems (Rouché–Capelli Theorem)
#consistency #rouche-capelli-theorem #unique-solution #infinite-solutions

The existence of solutions is determined by comparing the rank of the coefficient matrix, $\text{rank}(A)$, with the rank of the augmented matrix, $\text{rank}([A|b])$. Let $r = \text{rank}(A)$ and $n$ be the number of variables.

$$\boxed{
\begin{array}{l|l|l}
\textbf{Condition} & \textbf{System Type} & \textbf{Number of Solutions} \\
\hline
\text{rank}(A) < \text{rank}([A|b]) & \text{Inconsistent} & \text{No Solution} \\
\hline
\text{rank}(A) = \text{rank}([A|b]) = r & \text{Consistent} & \text{At least one solution} \\
\qquad \hookrightarrow \text{If } r = n & & \text{Unique Solution} \\
\qquad \hookrightarrow \text{If } r < n & & \text{Infinitely Many Solutions} \\
\end{array}
}$$

*   For the infinite solutions case, the number of free variables (independent parameters) is $n - r$.

---
#### Homogeneous Systems ($Ax = 0$)
#homogeneous-system #trivial-solution #non-trivial-solution

A system is homogeneous if the constant vector $b$ is the zero vector.
* A homogeneous system is **always consistent** because $x=0$ (the **Trivial Solution**) is always a possible solution.
* **Trivial Solution Only**: The system has only the trivial solution ($x=0$) if $\text{rank}(A) = n$. For a square matrix, this is equivalent to $\det(A) \neq 0$.
* **Non-Trivial (Infinite) Solutions**: The system has non-trivial solutions (in addition to the trivial one) if $\text{rank}(A) < n$. For a square matrix, this is equivalent to $\det(A) = 0$. This condition is fundamental for finding [[Eigenvalues and Eigenvectors|eigenvectors]].

---
#### Methods for Solving Linear Systems
#gaussian-elimination #cramers-rule #matrix-inverse-method

1.  **Gaussian Elimination**:
    *   **Process**: Use elementary row operations to transform the augmented matrix $[A|b]$ into an upper triangular **row echelon form**.
    *   **Solution**: Solve for the variables using back substitution starting from the last non-zero row. This is the most reliable and generally applicable method.

2.  **Gauss-Jordan Elimination**:
    *   **Process**: An extension of Gaussian elimination where the matrix is further reduced to **reduced row echelon form** (an identity matrix if $A$ is invertible).
    *   **Solution**: The solution for each variable can be read directly from the final column of the augmented matrix.

3.  **Matrix Inversion Method**:
    *   **Condition**: The matrix $A$ must be square ($m=n$) and non-singular ($\det(A) \neq 0$).
    *   **Formula**: The unique solution is given by:
        $$\boxed{\quad x = A^{-1}b \quad}$$

4.  **Cramer's Rule**:
    *   **Condition**: The matrix $A$ must be square and non-singular.
    *   **Formula**: The value for each variable $x_i$ is given by the ratio of two determinants:
        $$\boxed{\quad x_i = \frac{\det(A_i)}{\det(A)} \quad}$$
        where $A_i$ is the matrix formed by replacing the $i$-th column of $A$ with the constant vector $b$.
    *   **Usefulness**: Primarily for $2 \times 2$ and $3 \times 3$ systems in hand calculations. It is computationally inefficient for larger systems.

---
### Related Concepts
#linear-algebra/related-concepts

> [[Rank of a Matrix]]

[[Determinant of a Matrix|Determinant]]
[[Properties of Transpose and Inverse|Matrix Inverse]]
[[Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
[[Electric Circuits]] (Mesh and Nodal Analysis)
[[Control Systems]] (State-Space Representation)