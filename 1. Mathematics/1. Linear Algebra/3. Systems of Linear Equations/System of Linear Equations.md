---
tags:
  - linear-algebra
  - matrix-theory
  - system-of-equations
  - gaussian-elimination
  - engineering-math
created: 2025-09-09
aliases:
  - Linear Equations
  - System of Equations
subject: "[[Mathematics]]"
parent:
  - "[[Linear Algebra]]"
confidence: 9
---
### System of Linear Equations
#system-of-equations #linear-algebra

> A system of linear equations is a collection of one or more linear equations involving the same set of variables. The central problem of linear algebra is to find a set of values for these variables that simultaneously satisfies all equations in the system.

The system can be represented in matrix form:
$$\boxed{\quad A\mathbf{x} = \mathbf{b} \quad}$$
*   $A$: The $m \times n$ coefficient matrix.
*   $\mathbf{x}$: The $n \times 1$ column vector of variables.
*   $\mathbf{b}$: The $m \times 1$ column vector of constants.

---
#### Types of Solutions
#consistent-system #inconsistent-system

Every system of linear equations has either:
1.  **No Solution**: The system is called **inconsistent**.
2.  **Exactly One Solution**: The system is called **consistent** and has a unique solution.
3.  **Infinitely Many Solutions**: The system is called **consistent**.

---
#### Analysis of Solutions using Rank
#rank-of-a-matrix #consistency-check

The nature of the solution is determined by comparing the rank of the coefficient matrix $A$ with the rank of the augmented matrix $[A | \mathbf{b}]$. Let $n$ be the number of variables.

1.  **No Solution (Inconsistent)**:
    *   Condition: The rank of the coefficient matrix is less than the rank of the augmented matrix.
        $$\boxed{\quad \text{rank}(A) < \text{rank}([A | \mathbf{b}]) \quad}$$
    *   This occurs when row reduction leads to a contradiction, like $0 = 1$.

2.  **Unique Solution (Consistent)**:
    *   Condition: The ranks are equal and match the number of variables.
        $$\boxed{\quad \text{rank}(A) = \text{rank}([A | \mathbf{b}]) = n \quad}$$
    *   This means there are no free variables.

3.  **Infinitely Many Solutions (Consistent)**:
    *   Condition: The ranks are equal but are less than the number of variables.
        $$\boxed{\quad \text{rank}(A) = \text{rank}([A | \mathbf{b}]) < n \quad}$$
    *   The number of free variables is given by $n - \text{rank}(A)$.

---
#### Methods of Solution
#gaussian-elimination #cramers-rule

1.  **Gaussian Elimination**: The most robust method. It uses elementary row operations to transform the augmented matrix $[A | \mathbf{b}]$ into **row echelon form**. The solution is then found by back substitution.
2.  **Gauss-Jordan Elimination**: An extension of Gaussian elimination where the matrix is transformed into **reduced row echelon form**. The solution can be read directly from the matrix.
3.  **[[Inverse of a Matrix|Matrix Inverse Method]]**: If $A$ is a square and invertible matrix, the unique solution is given by:
    $$\boxed{\quad \mathbf{x} = A^{-1}\mathbf{b} \quad}$$
4.  **Cramer's Rule**: If $A$ is square and invertible, each variable can be found using determinants:
    $$\boxed{\quad x_i = \frac{\det(A_i)}{\det(A)} \quad}$$
    where $A_i$ is the matrix formed by replacing the $i$-th column of $A$ with the vector $\mathbf{b}$. This method is computationally inefficient for large systems.

---
### Related Concepts
#related-concepts

> [[Homogeneous System of Linear Equations]]

[[Non-Homogeneous System of Linear Equations]]
[[Consistency of Linear Equations]]
[[Rank of a Matrix]]
[[Matrix Operations]]
[[Cramer's Rule]]
[[Determinant of a Matrix]]