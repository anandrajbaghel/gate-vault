---
tags:
  - linear-algebra
  - matrix-theory
  - polynomials
  - diagonalization
  - engineering-math
created: 2025-09-09
aliases:
  - Minimal Polynomial of a Matrix
  - How to find the Minimal Polynomial?
  - "Example : Minimal Polynomial"
subject: "[[Mathematics]]"
parent: "[[Characteristic Polynomial and Equation]]"
confidence: 9
---
### Minimal Polynomial
#minimal-polynomial #linear-algebra #diagonalization

> The **minimal polynomial** of a square matrix $A$ is the unique monic polynomial of the *lowest possible degree* that "annihilates" the matrix (i.e., when the matrix is substituted into the polynomial, the result is the zero matrix). While the [[Cayley-Hamilton Theorem]] tells us that the [[Characteristic Polynomial and Equation#Definition and Derivation|characteristic polynomial]] always annihilates a matrix, the minimal polynomial is the most efficient or "minimal" such polynomial that does so. It provides a definitive test for whether a matrix is diagonalizable.

#### Definition
#minimal-polynomial/definition

The **minimal polynomial** $m(\lambda)$ of an $n \times n$ matrix $A$ is the unique monic polynomial of least positive degree such that:
$$\boxed{\quad m(A) = \mathbf{0} \quad}$$
*   **Monic**: The coefficient of the highest degree term is 1.
*   **Annihilates A**: Substituting the matrix $A$ into the polynomial yields the zero matrix.
*   **Least Degree**: Any other polynomial $p(\lambda)$ for which $p(A)=\mathbf{0}$ must be a multiple of $m(\lambda)$.

---
#### Relationship with the Characteristic Polynomial
#characteristic-polynomial #cayley-hamilton

The minimal polynomial, $m(\lambda)$, and the [[Characteristic Polynomial and Equation#Definition and Derivation|characteristic polynomial]], $\chi(\lambda)$, of a matrix $A$ are closely related:

1.  **Divisibility**: The minimal polynomial always **divides** the characteristic polynomial.
    $$\boxed{\quad m(\lambda) \ | \ \chi(\lambda) \quad}$$
    This is a direct consequence of the [[Cayley-Hamilton Theorem]], which states that $\chi(A)=\mathbf{0}$. Since $m(\lambda)$ is the polynomial of least degree with this property, it must divide $\chi(\lambda)$.

2.  **Shared Roots**: The minimal polynomial and the characteristic polynomial have the **exact same set of roots**. These roots are the eigenvalues of the matrix. The difference lies in the multiplicity of these roots.

If the characteristic polynomial factors as $\chi(\lambda) = (\lambda - \lambda_1)^{a_1}(\lambda - \lambda_2)^{a_2} \dots (\lambda - \lambda_k)^{a_k}$, then the minimal polynomial will have the form:
$$ m(\lambda) = (\lambda - \lambda_1)^{b_1}(\lambda - \lambda_2)^{b_2} \dots (\lambda - \lambda_k)^{b_k} $$
where $1 \le b_i \le a_i$ for each $i$.

---
#### The Ultimate Test for Diagonalizability
#diagonalizability-test

The minimal polynomial provides a powerful and precise condition for determining if a matrix is [[Diagonalization of a Matrix|diagonalizable]].

> An $n \times n$ matrix $A$ is [[Diagonalization of a Matrix|diagonalizable]] if and only if its minimal polynomial $m(\lambda)$ can be factored into **distinct linear factors**.

$$\boxed{\quad \text{A is diagonalizable} \iff m(\lambda) = (\lambda - \lambda_1)(\lambda - \lambda_2) \dots (\lambda - \lambda_k) \quad}$$
where all the eigenvalues $\lambda_1, \dots, \lambda_k$ are distinct. This means that no eigenvalue is a repeated root in the minimal polynomial (all exponents $b_i$ are 1).

---
#### How to Find the Minimal Polynomial
#minimal-polynomial/computation

1.  **Step 1: Find the Characteristic Polynomial**: Compute $\chi(\lambda) = \det(A - \lambda I)$ and find its roots (the eigenvalues).
2.  **Step 2: List Potential Candidates**: The minimal polynomial must be a divisor of the characteristic polynomial and must have the same distinct roots. List all possible monic divisors of $\chi(\lambda)$ that satisfy this.
3.  **Step 3: Test the Candidates**: Start with the candidate of the lowest degree. For each candidate polynomial $p(\lambda)$, compute $p(A)$. The first one you find for which $p(A) = \mathbf{0}$ is the minimal polynomial.

---
##### Example
#minimal-polynomial/example

If $\chi(\lambda) = (\lambda-2)^2(\lambda-5)$, the possible minimal polynomials are:
*   $m_1(\lambda) = (\lambda-2)(\lambda-5)$
*   $m_2(\lambda) = (\lambda-2)^2(\lambda-5)$

First, test $m_1(\lambda)$. Compute $(A-2I)(A-5I)$. If this product is the zero matrix, then $m_1(\lambda)$ is the minimal polynomial, and the matrix is diagonalizable. If not, the minimal polynomial must be $m_2(\lambda) = \chi(\lambda)$, and the matrix is not diagonalizable.

---
### Related Concepts
#related-concepts

> [[Characteristic Polynomial and Equation]]

[[Cayley-Hamilton Theorem]]
[[Diagonalization]]
[[Eigenvalues and Eigenvectors]]