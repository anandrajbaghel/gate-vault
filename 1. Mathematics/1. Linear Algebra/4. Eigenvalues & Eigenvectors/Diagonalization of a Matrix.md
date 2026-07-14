---
tags:
  - linear-algebra
  - matrix-theory
  - eigenvalues
  - diagonalization
  - engineering-math
  - matrix-decomposition
created: 2025-09-15
aliases:
  - Matrix Diagonalization
  - Diagonalizable Matrix
  - Eigen-decomposition
  - Diagonalization
  - diagonalizable
subject: "[[Mathematics]]"
parent: "[[Eigenvalues and Eigenvectors]]"
---
### Diagonalization of a Matrix
#matrix-diagonalization #eigen-decomposition #linear-transformation

> **Diagonalization** is the process of decomposing a square matrix $A$ into a product of three matrices: an [[Inverse of a Matrix|invertible matrix]] $P$, a diagonal matrix $D$, and the inverse of $P$. This process, known as eigen-decomposition, is possible only for matrices with a sufficient number of [[Linear Independence and Dependence of Vectors|linearly independent]] [[Eigenvalues and Eigenvectors|eigenvectors]]. It is a powerful tool because it simplifies complex [[Matrix Operations]], such as calculating high powers of a matrix, by converting them into simpler operations on a diagonal matrix.

> [!important] Layman Explanation
> Diagonalization means rewriting a matrix in a new coordinate system where it acts in the simplest possible way—stretching each direction independently—so the matrix becomes a clean diagonal table.
> 
> or
> 
> Diagonalization means finding a nicer viewpoint where a matrix becomes easy to work with — instead of twisting and mixing things, it only stretches them.

---
#### Definition of a Diagonalizable Matrix
#diagonalization/definition

An $n \times n$ matrix $A$ is said to be **diagonalizable** if it is similar to a diagonal matrix. This means there exists an invertible matrix $P$ such that:
$$\boxed{\quad A = PDP^{-1} \quad}$$
or, equivalently, $D = P^{-1}AP$.

*   **D**: A **diagonal matrix** whose entries on the main diagonal are the eigenvalues of $A$.
*   **P**: An **invertible matrix** (also called the **modal matrix**) whose columns are the $n$ linearly independent eigenvectors of $A$. The $i$-th column of $P$ is the eigenvector corresponding to the eigenvalue in the $i$-th column of $D$.

#### Condition for Diagonalizability
#diagonalizability/condition

An $n \times n$ matrix $A$ is diagonalizable if and only if it has **$n$ linearly independent eigenvectors**.

This leads to two practical tests:
1.  **Sufficient Condition (Distinct Eigenvalues - The Easy Test)**: If an $n \times n$ matrix has $n$ distinct eigenvalues, it is **guaranteed** to be diagonalizable. This is because eigenvectors corresponding to distinct eigenvalues are always linearly independent.
2.  **Necessary and Sufficient Condition (Multiplicities - The Full Test)**: A matrix is diagonalizable if and only if, for every eigenvalue $\lambda$, its **Geometric Multiplicity (GM)** is equal to its **Algebraic Multiplicity (AM)**.
	$$\boxed{\quad \text{Diagonalizable} \iff \text{GM}(\lambda) = \text{AM}(\lambda) \text{ for all eigenvalues } \lambda \quad}$$
    * **Algebraic Multiplicity (AM)**: The number of times an eigenvalue $(\lambda)$ appears as a root of the characteristic equation.
    * **Geometric Multiplicity (GM)**: The number of linearly independent eigenvectors associated with that eigenvalue $(\lambda)$ (i.e., the dimension of the eigenspace). For any eigenvalue, $1 \le GM \le AM$.

---
#### 🔥The Diagonalization Process
#diagonalization/procedure

1.  **Find Eigenvalues**: Solve the [[Characteristic Polynomial and Equation|characteristic equation]] $\det(A - \lambda I) = 0$ to find the eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$.
2.  **Find Eigenvectors**: For each distinct eigenvalue $\lambda_i$, find a basis for the null space of the matrix $(A - \lambda_i I)$ to get the linearly independent eigenvectors.
3.  **Check for Diagonalizability**: Count the total number of linearly independent eigenvectors found. If this number is equal to the size of the matrix ($n$), the matrix is diagonalizable. If it's less than $n$, the matrix is not diagonalizable.
4.  **Construct $P$ and $D$**:
    * Form the matrix $P$ by placing the eigenvectors as its columns.
    * Form the diagonal matrix $D$ by placing the corresponding eigenvalues on the main diagonal. The order of eigenvalues in $D$ must match the order of the eigenvectors in $P$.
5.  **Find $P^{-1}$**: Calculate the [[Inverse of a Matrix|inverse]] of the matrix $P$. The final diagonalized form is $A = PDP^{-1}$.

---
#### Applications of Diagonalization
#diagonalization/applications

The primary utility of diagonalization is simplifying matrix operations.

##### Computing Matrix Powers
Calculating $A^k$ for large $k$ is computationally intensive. Diagonalization makes it trivial.
$$\begin{align}
A^k &= (PDP^{-1})^k = (PDP^{-1})(PDP^{-1})\dots(PDP^{-1}) \\
&= PD(P^{-1}P)D(P^{-1}\dots P)DP^{-1} \\
&= PD^kP^{-1}
\end{align}$$
Since $D$ is diagonal, $D^k$ is found by simply raising each diagonal element to the power of $k$.
$$\boxed{\quad A^k = P D^k P^{-1} \quad}$$

* **Other Applications**: Solving systems of linear [[Calculus - Differential Equations|differential equations]], analyzing Markov chains, and understanding linear transformations in geometry.

---
#### Orthogonal Diagonalization for Symmetric Matrices
#orthogonal-diagonalization #symmetric-matrix #spectral-theorem

A special, more powerful form of diagonalization exists for real symmetric matrices.

* **Spectral Theorem**: An $n \times n$ real matrix $A$ can be orthogonally diagonalized if and only if it is **symmetric** ($A = A^T$).
* **Definition**: In this case, the matrix of eigenvectors $P$ can be chosen to be an **orthogonal matrix** (meaning its columns are orthonormal vectors and $P^{-1} = P^T$). The diagonalization becomes: $$\boxed{\quad A = PDP^T \quad}$$
Here, $P$ is an **orthogonal matrix** (meaning its columns are an orthonormal set of vectors, and $P^{-1} = P^T$). The matrix $D$ still contains the eigenvalues, which for a symmetric matrix are always real.

This form is numerically more stable and easier to work with since finding the transpose is much simpler than finding the inverse.

---
### Related Concepts
#linear-algebra/related-concepts

> [[Eigenvalues and Eigenvectors]]

[[Properties of Eigenvalues and Eigenvectors]]
[[Characteristic Polynomial and Equation]]
[[Orthogonality]]
[[Linear Independence and Dependence of Vectors]]
[[Inverse of a Matrix]]
[[Linear Transformation]]
[[Control System]]
[[Differential Equations]]