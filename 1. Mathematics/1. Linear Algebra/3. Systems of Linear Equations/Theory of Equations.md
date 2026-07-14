---
tags:
  - mathematics
  - algebra
  - polynomials
  - theory-of-equations
created: 2025-09-06
aliases:
  - Polynomial Equations
  - Algebraic Equations
  - Vieta's Formulas
  - Fundamental Theorem of Algebra
subject: "[[Mathematics]]"
parent:
  - "[[Linear Algebra]]"
formula:
  - "Sum of the Roots (taken one at a time) : $$\\sum_{i=1}^n \\alpha_i = \\alpha_1 + \\alpha_2 + \\dots + \\alpha_n = -\\frac{a_{n-1}}{a_n}$$"
  - "Sum of the Products of Roots (taken two at a time) : $$\\sum_{1 \\le i < j \\le n} \\alpha_i \\alpha_j = \\alpha_1\\alpha_2 + \\alpha_1\\alpha_3 + \\dots = +\\frac{a_{n-2}}{a_n}$$"
  - "Product of the Roots : $$\\prod_{i=1}^n \\alpha_i = \\alpha_1 \\alpha_2 \\dots \\alpha_n = (-1)^n \\frac{a_0}{a_n}$$"
---
### Theory of Equations
#polynomials #algebra #roots-of-equations

> The **Theory of Equations** is a branch of algebra that deals with the study of polynomial equations. It focuses on the existence and nature of the roots (or zeros) of a polynomial, and the relationship between the roots and the coefficients of the polynomial.

#### General Polynomial Equation
#polynomial/definition

A polynomial equation of degree $n$ in one variable $x$ is an equation of the form:
$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 = 0$$
where $a_n, a_{n-1}, \dots, a_0$ are coefficients (which can be real or complex numbers), $a_n \neq 0$, and $n$ is a non-negative integer called the **degree** of the polynomial. ==The values of $x$ that satisfy this equation are called its **roots** or **zeros**.==

---
#### Fundamental Theorem of Algebra
#fundamental-theorem-of-algebra

> [!definition] Fundamental Theorem of Algebra
> Every non-constant single-variable polynomial ==with complex coefficients has at least one complex root==.
> 
> ==A direct consequence of this theorem is that a polynomial of degree $n \ge 1$ has exactly $n$ roots in the complex number system, when counting roots with their [[multiplicity|multiplicities]].==

> [!pyq]- PYQ : 2020
> ![[ee_2020#^q1]]

---
#### Relationship Between Roots and Coefficients (Vieta's Formulas)
#vietas-formulas

==For the polynomial equation $a_n x^n + \dots + a_0 = 0$ with roots $\alpha_1, \alpha_2, \dots, \alpha_n$:==
1.  **Sum of the roots (taken one at a time)**:
    $$\boxed{\quad \sum_{i=1}^n \alpha_i = \alpha_1 + \alpha_2 + \dots + \alpha_n = -\frac{a_{n-1}}{a_n} \quad}$$
2.  **Sum of the products of roots (taken two at a time)**:
    $$\boxed{\quad \sum_{1 \le i < j \le n} \alpha_i \alpha_j = \alpha_1\alpha_2 + \alpha_1\alpha_3 + \dots = +\frac{a_{n-2}}{a_n} \quad}$$
3.  **Product of the roots**:
    $$\boxed{\quad \prod_{i=1}^n \alpha_i = \alpha_1 \alpha_2 \dots \alpha_n = (-1)^n \frac{a_0}{a_n} \quad}$$

> [!example] Example : For a cubic equation
> $$ax^3+bx^2+cx+d=0$$ with roots $\alpha, \beta, \gamma$:
> 1. $\alpha + \beta + \gamma = -b/a$
> 2. $\alpha\beta + \beta\gamma + \gamma\alpha = c/a$
> 3. $\alpha\beta\gamma = -d/a$

---
#### Nature of Roots
#polynomial/root-properties

1.  **[[Roots of Polynomials#1. Conjugate Root Theorems|Complex Conjugate Root Theorem]]**: If a polynomial has **real coefficients**, and if $a+ib$ is a root, then its complex conjugate $a-ib$ must also be a root.
2.  **[[Roots of Polynomials#1. Conjugate Root Theorems|Irrational Conjugate Root Theorem]]**: If a polynomial has **rational coefficients**, and if $a+\sqrt{b}$ (where $\sqrt{b}$ is irrational) is a root, then its conjugate $a-\sqrt{b}$ must also be a root.

##### Descartes' Rule of Signs
#descartes-rule-of-signs

Provides an upper bound on the number of positive or negative real roots of a polynomial $P(x)$ with real coefficients.
*   **Positive Real Roots**: The number of positive real roots is either equal to the number of sign changes in the coefficients of $P(x)$ or less than that by an even number.
*   **Negative Real Roots**: The number of negative real roots is either equal to the number of sign changes in the coefficients of $P(-x)$ or less than that by an even number.

---
#### Transformation of Equations
#polynomial/transformation

Given an equation $P(x)=0$ with roots $\alpha_1, \dots, \alpha_n$, we can form a new equation with transformed roots:
* **Roots with opposite sign** (i.e., $-\alpha_i$): Replace $x$ with $-x$. The new equation is $P(-x)=0$.
* **Roots multiplied by a constant $k$** (i.e., $k\alpha_i$): Replace $x$ with $x/k$. The new equation is $P(x/k)=0$.
* **Roots diminished by a constant $h$** (i.e., $\alpha_i - h$): Replace $x$ with $x+h$. The new equation is $P(x+h)=0$.
* **Reciprocal roots** (i.e., $1/\alpha_i$): Replace $x$ with $1/x$ and multiply by $x^n$. The new equation is $x^n P(1/x)=0$.

---
#### Equations with Special Root Formations
#polynomial/special-roots

A common problem type involves roots in a specific progression.
* **Roots in Arithmetic Progression (A.P.)**: Assume the roots for a cubic equation as $(a-d), a, (a+d)$. Their sum is $3a = -b/a$, which directly gives one root, $a$.
* **Roots in Geometric Progression (G.P.)**: Assume the roots for a cubic equation as $a/r, a, ar$. Their product is $a^3 = -d/a$, which directly gives one root, $a$.
* **Roots in Harmonic Progression (H.P.)**: The reciprocals of the roots are in A.P. First, find the equation with reciprocal roots by substituting $x=1/y$, then solve for the roots of the new equation which will be in A.P.

---
### Related Concepts
#related-concepts

> [[Complex Analysis]] (Fundamental Theorem of Algebra)

[[Roots of Polynomials]]
[[Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]] (The characteristic equation is a polynomial whose roots are the eigenvalues)
[[Numerical Methods]] (Used to find approximate roots for higher-degree polynomials, e.g., Newton-Raphson Method)
