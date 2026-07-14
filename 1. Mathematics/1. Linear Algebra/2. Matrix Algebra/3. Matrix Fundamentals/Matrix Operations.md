---
tags:
  - linear-algebra
  - matrix-theory
  - engineering-math
created: 2025-09-15
aliases:
  - Matrix Algebra
  - Matrix Arithmetic
  - Matrix Operations (Addition, Multiplication)
  - Trace of a Matrix
  - Matrix Trace
  - "Example : Matrix Multiplication"
  - Matrix Row and Column Notation
  - Matrices
subject: "[[Mathematics]]"
parent: Linear Algebra
trends:
  - "[[trends - Matrix]]"
formula:
  - "Trace of a Matrix : $$\\text{tr}(A) = \\sum_{i=1}^n A_{ii}$$"
---
### Matrix Operations
#matrix-algebra #linear-algebra #matrix-manipulation

> Matrix operations are the fundamental arithmetic rules for manipulating matrices. These include addition, subtraction, scalar multiplication, and matrix multiplication. These operations are the building blocks for [[Solving Systems of Linear Equations]], representing linear transformations, and are extensively used in various engineering disciplines like circuit analysis, [[control systems]], and signal processing.

$$
\text{Matrix} =
\begin{bmatrix}
\begin{array}{c|c|c}
* & \text{C} & *\\
\hline
\text{R} & \text{O} & \text{W}\\
\hline
* & \text{L} & * \\
* & \text{U} & * \\
* & \text{M} & * \\
* & \text{N} & * 
\end{array}
\end{bmatrix}_{6 \times 3}
$$
![[Matrix Representation.png]]

> [!warning]- Looking at the Matrix Structure can save Time 🕒
> Before doing any calculation, check the shape:
> - **Diagonal?** — then powers/[[Properties of Transpose and Inverse|inverse]]/[[Eigenvalues and Eigenvectors|eigenvalues]] are trivial.
> - **Triangular?** — [[Eigenvalues and Eigenvectors|eigenvalues]] are on the diagonal.
> - **[[Block Matrices|Block Diagonal]]?** — solve each block separately.
> - **Sparse (many zeros)?** — direct multiplication is easier.
> - **[[Symmetric Matrices|Symmetric]]?** — real eigenvalues and orthogonal diagonalization.
> - **[[Skew-Symmetric Matrices|Skew-Symmetric]]?** — eigenvalues purely imaginary.
> - **Projection matrix?** — check if $A^2=A$.
> - **Nilpotent-like?** — check if many rows/columns are shifting.
>
> This step already tells us the best approach.

---
#### Matrix Addition and Subtraction
#matrix-addition #matrix-subtraction

Matrix addition and subtraction are performed element-wise.

* **Condition**: The matrices must have the same dimensions (i.e., same number of rows and columns).
* **Addition**: If $A = [a_{ij}]$ and $B = [b_{ij}]$ are both $m \times n$ matrices, their sum $C = A + B$ is an $m \times n$ matrix where each element is $c_{ij} = a_{ij} + b_{ij}$.
* **Subtraction**: Similarly, the difference $D = A - B$ is an $m \times n$ matrix where each element is $d_{ij} = a_{ij} - b_{ij}$.

**Properties of Addition**:
* **Commutative**: $A + B = B + A$
* **Associative**: $(A + B) + C = A + (B + C)$

---
#### Scalar Multiplication
#scalar-multiplication

A matrix $A$ can be multiplied by a scalar (a single number) $c$.

* **Definition**: The product $cA$ is a matrix of the same dimension as $A$, where each element is multiplied by the scalar $c$.
* **Formula**: If $A = [a_{ij}]$, then $(cA)_{ij} = c \cdot a_{ij}$.
* **Example**:
    $$ 2 \begin{bmatrix} 1 & 8 \\ -3 & 4 \end{bmatrix} = \begin{bmatrix} 2 \cdot 1 & 2 \cdot 8 \\ 2 \cdot (-3) & 2 \cdot 4 \end{bmatrix} = \begin{bmatrix} 2 & 16 \\ -6 & 8 \end{bmatrix} $$

---
#### Matrix Multiplication
#matrix-multiplication #dot-product

Matrix multiplication is the process of multiplying two matrices to produce a third matrix. It is **not** an element-wise operation.

* **Condition**: For the product $C = AB$ to be defined, the number of columns of matrix $A$ must be equal to the number of rows of matrix $B$.
    *   If $A$ is an $m \times n$ matrix and $B$ is an $n \times p$ matrix, the resulting matrix $C$ will have dimensions $m \times p$.

* **Method**: The element $c_{ij}$ (in the $i$-th row, $j$-th column of the product matrix) is calculated by taking the dot product of the $i$-th row of matrix $A$ with the $j$-th column of matrix $B$.

The formula for the element $c_{ij}$ is:
$$\boxed{\quad c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj} \quad}$$

---
##### Example
#matrix-multiplication/example 

Let $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ and $B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}$. Then $C = AB$ is:
$$\begin{align}
C &= \begin{bmatrix} (1 \cdot 5 + 2 \cdot 7) & (1 \cdot 6 + 2 \cdot 8) \\ (3 \cdot 5 + 4 \cdot 7) & (3 \cdot 6 + 4 \cdot 8) \end{bmatrix} \\
 &= \begin{bmatrix} (5 + 14) & (6 + 16) \\ (15 + 28) & (18 + 32) \end{bmatrix} \\ &= \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}
\end{align}$$

---
##### Properties of Matrix Multiplication
#matrix-multiplication/properties

1. **Non-Commutative**: This is a critical property. In general, matrix multiplication is not commutative.
    $$\boxed{\quad AB \neq BA \quad}$$
2. **Associative**: Multiplication is associative, provided the dimensions are compatible.
    $$\quad (AB)C = A(BC)$$
3. **Distributive**: Multiplication is distributive over addition.
    $$\quad A(B+C) = AB + AC$$
    $$\quad (A+B)C = AC + BC$$
4. **Multiplicative Identity**: The [[Linear Algebra - Identity Matrix|Identity Matrix]] $I$ acts like the number 1. For any matrix $A$, $AI = A$ and $IA = A$.

---
#### The Trace
#matrix-trace

The trace of an $n \times n$ square matrix $A$, denoted $\text{tr}(A)$, is the sum of the elements on its main diagonal.
$$\text{tr}(A) = \sum_{i=1}^n A_{ii}$$

**Properties of the Trace:**
* $\text{tr}(A+B) = \text{tr}(A) + \text{tr}(B)$
* $\text{tr}(cA) = c \cdot \text{tr}(A)$
* **Cyclic Property**: The trace is invariant under cyclic permutations of the matrices in a product.
    $$\boxed{\quad \text{tr}(AB) = \text{tr}(BA) \quad}$$
    This extends to more matrices, e.g., $\text{tr}(ABC) = \text{tr}(BCA) = \text{tr}(CAB)$.

---
#### Applications in Engineering
#matrix-applications

* **Solving Systems of Linear Equations**: Representing a system of equations in the form $Ax=b$ is fundamental to almost all fields.
* **Circuit Analysis**: Used in mesh and nodal analysis to solve for currents and voltages in [[Electric Circuits]].
* **Control Systems**: The state-space representation of systems heavily relies on matrix operations to describe system dynamics.
* **Computer Graphics**: Used for transformations like rotation, scaling, and translation of objects.
* **Power Systems**: Load flow studies and fault analysis use large matrices (e.g., [[Bus Admittance Matrix (Y-bus) Formulation|Y-bus Matrix]]) to model the power grid.

---

> [!warning] Special Patterns
> 1. If each row sums to same constant → [[Eigenvalues and Eigenvectors|eigenvalue]] = that constant.
> 2. If one row/column is zero → [[Determinant of a Matrix|determinant]] = 0
> 3. If rows/columns are multiples → [[Rank of a Matrix|rank]]-deficient
> 4. If matrix is rotation-like → eigenvalues complex

---
### Related Concepts
#matrix-theory/related-concepts

> [[Determinant of a Matrix]]
> [[Properties of Transpose and Inverse]]

[[Minors and Cofactors]]
[[Adjoint of a Matrix]]
[[Block Matrices|Block Matrix]]
[[Solving Systems of Linear Equations]]
[[Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
[[Identity Matrix]]
[[Control Systems]]
[[Electric Circuits]]
