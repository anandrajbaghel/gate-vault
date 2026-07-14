---
tags:
  - mathematics
  - algebra
  - polynomials
  - roots-of-equations
created: 2025-09-06
aliases:
  - Zeros of Polynomials
  - Polynomial Roots
  - Conjugate Root Theorem
  - Descartes' Rule of Signs
  - Complex Conjugate Root Theorem
  - Rational Root Theorem
  - Multiplicity of a Root
  - Irrational Conjugate Root Theorem
subject: "[[Mathematics]]"
parent: "[[Theory of Equations]]"
---
### Roots of Polynomials
#roots-of-equations #polynomials #algebra

> A **root** (or **zero**) of a polynomial $P(x)$ is a number $\alpha$ such that $P(\alpha) = 0$. Finding the roots of polynomial equations is a central problem in algebra.

#### The Fundamental Theorem of Algebra
#fundamental-theorem-of-algebra

![[Theory of Equations#Fundamental Theorem of Algebra]]
#### Nature and Properties of Roots
#polynomial/root-properties

##### 1. Conjugate Root Theorems
#conjugate-root-theorem 

For a polynomial $P(x)$ with specific types of coefficients:

> [!definition] Complex Conjugate Root Theorem
> ==If the coefficients of $P(x)$ are all **real numbers**, and if $z = a + ib$ is a complex root, then its conjugate $\bar{z} = a - ib$ must also be a root.==

* **Irrational Conjugate Root Theorem**: If the coefficients of $P(x)$ are all **rational numbers**, and if $a + \sqrt{b}$ (where $\sqrt{b}$ is irrational) is a root, then its conjugate $a - \sqrt{b}$ must also be a root.

---
##### 2. Descartes' Rule of Signs
#descartes-rule-of-signs

This rule provides the maximum number of real roots for a polynomial with real coefficients.
* The number of **positive real roots** is at most the number of sign changes in the sequence of coefficients of $P(x)$.
* The number of **negative real roots** is at most the number of sign changes in the sequence of coefficients of $P(-x)$.
The actual number of roots can be less than this maximum by an even integer.

---
##### 3. Location of Roots
#location-of-roots 

* **[[Intermediate Value Theorem]]**: If $P(x)$ is a polynomial with real coefficients, and for two numbers $a$ and $b$, $P(a)$ and $P(b)$ have opposite signs, then there must be at least one real root between $a$ and $b$.
* **[[Mean Value Theorems|Rolle's Theorem]]**: Between any two distinct real roots of a polynomial $P(x)$, there exists at least one real root of its derivative, $P'(x)$.

---
#### Methods for Finding Roots
#root-finding

##### 1. Low-Degree Polynomials

* **Linear Equation** ($ax+b=0$): The root is $x = -b/a$.
* **Quadratic Equation** ($ax^2+bx+c=0$): The roots are given by the quadratic formula:
    $$\boxed{\quad x = \frac{-b \pm \sqrt{b^2-4ac}}{2a} \quad}$$
    The nature of the roots depends on the discriminant, $\Delta = b^2-4ac$.

##### 2. Rational Root Theorem
#rational-root-theorem

This theorem is crucial for finding roots of higher-degree polynomials with integer coefficients.
> If the polynomial $P(x) = a_n x^n + \dots + a_1 x + a_0 = 0$ has integer coefficients, then any rational root must be of the form $p/q$, where:
> *   $p$ is an integer factor of the constant term $a_0$.
> *   $q$ is an integer factor of the leading coefficient $a_n$.

By listing all possible fractions $p/q$, one can test them using synthetic division or direct substitution to find a root. Once a root $\alpha$ is found, the polynomial can be factored as $(x-\alpha)Q(x)$, where $Q(x)$ is a polynomial of degree $n-1$.

---
#### Multiplicity of a Root
#multiplicity-of-roots

A root $\alpha$ has **multiplicity** $k$ if $(x-\alpha)^k$ is a factor of the polynomial $P(x)$, but $(x-\alpha)^{k+1}$ is not.
*   A root of multiplicity 1 is a **simple root**.
*   A root of multiplicity 2 is a **double root**, 3 is a **triple root**, and so on.

##### Multiplicity and Derivatives
The multiplicity of a root is directly related to the derivatives of the polynomial.
> A number $\alpha$ is a root of $P(x)$ with multiplicity $k \ge 2$ if and only if:
> $$P(\alpha) = P'(\alpha) = P''(\alpha) = \dots = P^{(k-1)}(\alpha) = 0$$
> and $P^{(k)}(\alpha) \neq 0$.

This means a double root of $P(x)$ is a simple root of its derivative $P'(x)$. This is a very useful property for solving problems involving repeated roots.

---
### Related Concepts
#related-concepts

> [[Theory of Equations]] (Parent Concept)

[[Numerical Methods]] (For approximating roots, e.g., Newton-Raphson)
[[Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]] (Finding eigenvalues involves solving the characteristic polynomial)
[[Theory of Equations|Vieta's Formulas]]
[[Differential Calculus]] (Rolle's Theorem, Derivatives)

