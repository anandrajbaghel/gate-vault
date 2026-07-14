---
tags:
  - linear-algebra
  - matrix-theory
  - mathematics
  - power-systems
  - control-systems
  - engineering-math
created: 2025-09-08
aliases:
  - Partitioned Matrices
  - Block Matrix
  - "Example : Block Matrix"
  - Block Diagonal Matrix
  - Schur complement
subject: "[[Mathematics]]"
parent: Linear Algebra
---
### Block Matrices
#block-matrices #partitioned-matrices #linear-algebra

> A **block matrix** or **partitioned matrix** is a matrix that is interpreted as being broken down into sections called **blocks** or **submatrices**. This partitioning can simplify matrix operations and reveal underlying structures, especially in large-scale engineering systems.

Any matrix can be partitioned into blocks by inserting horizontal and vertical lines between its rows and columns. For example, a 3x3 matrix can be partitioned into a 2x2 block structure:
$$\mathbf{P} =
\begin{bmatrix}
\begin{array}{cc|c}
2 & 1 & 0\\
-1 & 0 & 0\\
\hline
0 & 0 & 1
\end{array}
\end{bmatrix}
=
\begin{bmatrix}
\mathbf{A} & \mathbf{B} \\
\mathbf{C} & \mathbf{D}
\end{bmatrix}
$$

Where the blocks are

$$\mathbf{A} = \begin{bmatrix} 2 & 1 \\ -1 & 0 \end{bmatrix} \ \ \ \ \  \mathbf{B} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \ \ \ \ \  \mathbf{C} = \begin{bmatrix} 0 & 0 \end{bmatrix} \ \ \ \ \ \mathbf{D} = \begin{bmatrix} 1 \end{bmatrix}$$

---
For example, a $4 \times 4$ matrix $\mathbf{M}$ can be partitioned into four $2 \times 2$ blocks:
$$ \mathbf{M} = \begin{bmatrix}
\begin{array}{cc|cc}
m_{11} & m_{12}  & m_{13} & m_{14} \\
m_{21} & m_{22} & m_{23} & m_{24} \\
\hline
m_{31} & m_{32} & m_{33} & m_{34} \\
m_{41} & m_{42} & m_{43} & m_{44}
\end{array}
\end{bmatrix}
= \begin{bmatrix}
\mathbf{A} & \mathbf{B} \\
\mathbf{C} & \mathbf{D}
\end{bmatrix} $$
where $\mathbf{A}, \mathbf{B}, \mathbf{C}, \mathbf{D}$ are $2 \times 2$ matrices.

---
#### Operations on Block Matrices
#block-matrix-operations

Let two block matrices be $\mathbf{M} = \begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{C} & \mathbf{D} \end{bmatrix}$ and $\mathbf{N} = \begin{bmatrix} \mathbf{E} & \mathbf{F} \\ \mathbf{G} & \mathbf{H} \end{bmatrix}$

##### Block Matrix Addition
#block-matrix/addition 

If two matrices are partitioned in the same way, they can be added block-wise, just like adding elements.
$$ \begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{C} & \mathbf{D} \end{bmatrix} + \begin{bmatrix} \mathbf{E} & \mathbf{F} \\ \mathbf{G} & \mathbf{H} \end{bmatrix} = \begin{bmatrix} \mathbf{A}+\mathbf{E} & \mathbf{B}+\mathbf{F} \\ \mathbf{C}+\mathbf{G} & \mathbf{D}+\mathbf{H} \end{bmatrix} $$
##### Block Matrix Multiplication
#block-matrix/multiplication 

Block matrices can be multiplied by treating the blocks as if they were scalar elements, provided the dimensions of the submatrices are compatible for multiplication.
$$\boxed{\quad \mathbf{MN} = \begin{bmatrix}
\mathbf{A} & \mathbf{B} \\
\mathbf{C} & \mathbf{D}
\end{bmatrix}
\begin{bmatrix}
\mathbf{E} & \mathbf{F} \\
\mathbf{G} & \mathbf{H}
\end{bmatrix} =
\begin{bmatrix}
\mathbf{AE+BG} & \mathbf{AF+BH} \\
\mathbf{CE+DG} & \mathbf{CF+DH}
\end{bmatrix} \quad}$$
For this to be valid, the number of columns in blocks $\mathbf{A}$ and $\mathbf{C}$ must match the number of rows in blocks $\mathbf{E}$ and $\mathbf{G}$, and so on.

---
#### Special Forms and Properties
#block-diagonal #block-triangular

##### Block Diagonal Matrix
A block matrix is **block diagonal** if the off-diagonal blocks are zero matrices.
$$ \mathbf{P} = \begin{bmatrix} \mathbf{A} & \mathbf{0} \\ \mathbf{0} & \mathbf{D} \end{bmatrix} $$
* **Determinant**: The determinant is the product of the determinants of the diagonal blocks.
    $$\boxed{\quad \det(\mathbf{P}) = \det(\mathbf{A}) \cdot \det(\mathbf{D}) \quad}$$
* **Inverse**: The inverse is found by inverting each diagonal block individually.
    $$\boxed{\quad \begin{bmatrix} \mathbf{A} & \mathbf{0} \\ \mathbf{0} & \mathbf{D} \end{bmatrix}^{-1} = \begin{bmatrix} \mathbf{A}^{-1} & \mathbf{0} \\ \mathbf{0} & \mathbf{D}^{-1} \end{bmatrix} \quad}$$

##### Block Triangular Matrix
#block-triangular-matrix #block-upper-triangular 

A block matrix is **block triangular** if the blocks above or below the main diagonal are zero matrices.
$$ \mathbf{P} = \begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{0} & \mathbf{D} \end{bmatrix} \quad (\text{Block Upper Triangular}) $$
* **Determinant**: The determinant is the product of the determinants of the diagonal blocks.
    $$\boxed{\quad \det(\mathbf{P}) = \det(\mathbf{A}) \cdot \det(\mathbf{D}) \quad}$$

---
#### Inverse of a 2x2 Block Matrix
#block-matrix/inversion

For a general $2 \times 2$ block matrix $\mathbf{M} = \begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{C} & \mathbf{D} \end{bmatrix}$, its inverse is given by:
$$ \mathbf{M}^{-1} = \begin{bmatrix}
(\mathbf{A-BD^{-1}C})^{-1} & -(\mathbf{A-BD^{-1}C})^{-1}\mathbf{BD}^{-1} \\
-\mathbf{D^{-1}C}(\mathbf{A-BD^{-1}C})^{-1} & \mathbf{D}^{-1} + \mathbf{D^{-1}C}(\mathbf{A-BD^{-1}C})^{-1}\mathbf{BD}^{-1}
\end{bmatrix} $$
This formula is complex but important. The term $\mathbf{A-BD^{-1}C}$ is known as the **Schur complement** of $\mathbf{D}$.

---
#### Applications
#applications/power-systems #applications/control-systems

1. **Power Systems**: The [[Y-bus Matrix]] of two power systems connected by tie-lines can be naturally represented as a block matrix. This simplifies the analysis of power flow between the two systems.
    $$ \mathbf{Y}_{bus} = \begin{bmatrix} \mathbf{Y}_{AA} & \mathbf{Y}_{AB} \\ \mathbf{Y}_{BA} & \mathbf{Y}_{BB} \end{bmatrix} $$
    Here, $\mathbf{Y}_{AA}$ and $\mathbf{Y}_{BB}$ represent the internal networks of systems $A$ and $B$, while $\mathbf{Y}_{AB}$ represents the tie-line connections.

2. **Control Systems**: The [[State-Space Representation of LTI Systems|State-Space Analysis]] of a linear time-invariant (LTI) system is often written using a block matrix called the system matrix.
    $$ \begin{bmatrix} \dot{x} \\ y \end{bmatrix} = \begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{C} & \mathbf{D} \end{bmatrix} \begin{bmatrix} x \\ u \end{bmatrix} $$
    Here, $\mathbf{A}$, $\mathbf{B}$, $\mathbf{C}$, and $\mathbf{D}$ are the state, input, output, and feedforward matrices, respectively.

---
### Related Concepts
#related-concepts

> [[Matrix Operations]]

[[Two-Port Networks]] (A key application area)
[[State-Space Representation of LTI Systems|State-Space Analysis]] (Another application area in control systems)
[[Bus Admittance Matrix (Y-bus) Formulation]] & [[Kron Reduction]]
[[Properties of Transpose and Inverse]]
[[Determinant of a Matrix]]
[[Jacobian]]
