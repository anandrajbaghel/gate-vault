---
subject:
  - "[[Mathematics]]"
tags:
  - mt
---
### **Linear Algebra**

**Q.** What is the condition for a system of linear equations $AX=B$ to have a unique solution?
?
$$
\boxed{\quad \rho(A) = \rho(A|B) = n \quad}
$$
Where $\rho$ is the rank and $n$ is the number of variables.

#mathematics / [[Linear Algebra]]

---
**Q.** What is the condition for a system $AX=B$ to have infinite solutions?
?
$$
\boxed{\quad \rho(A) = \rho(A|B) < n \quad}
$$

#mathematics / [[Linear Algebra]]

---
**Q.** What is the condition for a system $AX=B$ to have no solution (Inconsistent)?
?
$$
\boxed{\quad \rho(A) \neq \rho(A|B) \quad}
$$

#mathematics / [[Linear Algebra]]

---
**Q.** State the Cayley-Hamilton Theorem.
?
Every square matrix satisfies its own characteristic equation.
$$
\boxed{\quad |A - \lambda I| = 0 \implies P(A) = 0 \quad}
$$
Used to find $A^{-1}$ or higher powers of A.

#mathematics / [[Linear Algebra]]

---
**Q.** What is the sum of the eigenvalues of a matrix $A$?
?
The sum of eigenvalues equals the Trace of the matrix (sum of principal diagonal elements).
$$
\boxed{\quad \sum \lambda_i = \text{Trace}(A) \quad}
$$

#mathematics / [[Linear Algebra]]

---
**Q.** What is the product of the eigenvalues of a matrix $A$?
?
The product of eigenvalues equals the Determinant of the matrix.
$$
\boxed{\quad \prod \lambda_i = |A| \quad}
$$

#mathematics / [[Linear Algebra]]

---
**Q.** What is the inverse of a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$?
?
$$
\boxed{\quad A^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} \quad}
$$

#mathematics / [[Linear Algebra]]

---
**Q.** What are the eigenvalues of a triangular (upper or lower) or diagonal matrix?
?
The eigenvalues are simply the **diagonal elements** themselves.

#mathematics / [[Linear Algebra]]

---
**Q.** What is the property of eigenvalues for a Real Symmetric Matrix?
?
The eigenvalues are always **Real**.

#mathematics / [[Linear Algebra]]

---
**Q.** What is the property of eigenvalues for a Skew-Symmetric Matrix?
?
The eigenvalues are either **Zero or Purely Imaginary**.

#mathematics / [[Linear Algebra]]

---
**Q.** What is the condition for a matrix $A$ to be Orthogonal?
?
$$
\boxed{\quad A^T = A^{-1} \quad \text{or} \quad A A^T = I \quad}
$$
Determinant is always $\pm 1$.

#mathematics / [[Linear Algebra]]

---
**Q.** State the Rank-Nullity Theorem.
?
$$
\boxed{\quad \text{Rank}(A) + \text{Nullity}(A) = n \quad}
$$
Where $n$ is the number of columns (variables).

#mathematics / [[Linear Algebra]]

---
### **Calculus (Differential & Integral)**

**Q.** State L'Hopital's Rule for limits of the form $0/0$ or $\infty/\infty$.
?
$$
\boxed{\quad \lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)} \quad}
$$

#mathematics / [[Calculus]]

---
**Q.** What is the standard limit for $\lim_{x \to 0} \frac{\sin x}{x}$?
?
$$
\boxed{\quad 1 \quad}
$$

#mathematics / [[Calculus]]

---
**Q.** What is the standard limit for $\lim_{x \to \infty} (1 + \frac{1}{x})^x$?
?
$$
\boxed{\quad e \quad}
$$

#mathematics / [[Calculus]]

---
**Q.** State the Taylor Series expansion of $f(x)$ about $x=a$.
?
$$
\boxed{\quad f(x) = f(a) + (x-a)f'(a) + \frac{(x-a)^2}{2!}f''(a) + \dots \quad}
$$

#mathematics / [[Calculus]]

---
**Q.** State the Maclaurin Series expansion for $e^x$.
?
$$
\boxed{\quad e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots \quad}
$$

#mathematics / [[Calculus]]

---
**Q.** What is the condition for a function $y=f(x)$ to have a local maximum at $x=a$?
?
$$
\boxed{\quad f'(a) = 0 \quad \text{and} \quad f''(a) < 0 \quad}
$$

#mathematics / [[Calculus]]

---
**Q.** What is the condition for a function $y=f(x)$ to have a local minimum at $x=a$?
?
$$
\boxed{\quad f'(a) = 0 \quad \text{and} \quad f''(a) > 0 \quad}
$$

#mathematics / [[Calculus]]

---
**Q.** State the Leibniz Rule for differentiation under the integral sign.
?
$$
\frac{d}{dx} \int_{\phi(x)}^{\psi(x)} f(x,t) dt = \int_{\phi(x)}^{\psi(x)} \frac{\partial f}{\partial x} dt + f(x, \psi(x)) \psi'(x) - f(x, \phi(x)) \phi'(x)
$$

#mathematics / [[Calculus]]

---
**Q.** What is the Gamma Function formula $\Gamma(n)$ for integer $n$?
?
$$
\boxed{\quad \Gamma(n) = (n-1)! \quad}
$$
Also, $\Gamma(1/2) = \sqrt{\pi}$.

#mathematics / [[Calculus]]

---
**Q.** What is the relationship between Beta and Gamma functions?
?
$$
\boxed{\quad \beta(m,n) = \frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)} \quad}
$$
Also, $\beta(m,n) = \int_0^1 x^{m-1}(1-x)^{n-1} dx$.

#mathematics / [[Calculus]]

---
**Q.** What is the Jacobian $J$ of transformation from $(x,y)$ to $(u,v)$?
?
$$
\boxed{\quad J = \frac{\partial(x,y)}{\partial(u,v)} = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix} \quad}
$$

#mathematics / [[Calculus]]

---
**Q.** What is the formula for the length of a curve $y=f(x)$ from $a$ to $b$?
?
$$
\boxed{\quad L = \int_{a}^{b} \sqrt{1 + \left(\frac{dy}{dx}\right)^2} dx \quad}
$$

#mathematics / [[Calculus]]

---
### **Vector Calculus**

**Q.** What is the Gradient of a scalar field $\phi$?
?
$$
\boxed{\quad \nabla \phi = \frac{\partial \phi}{\partial x}\hat{i} + \frac{\partial \phi}{\partial y}\hat{j} + \frac{\partial \phi}{\partial z}\hat{k} \quad}
$$
It represents the normal vector to the surface $\phi(x,y,z)=c$.

#mathematics / [[Vector Calculus]]

---
**Q.** What is the Directional Derivative of $\phi$ in the direction of vector $\vec{a}$?
?
$$
\boxed{\quad D.D. = \nabla \phi \cdot \frac{\vec{a}}{|\vec{a}|} \quad}
$$
Maximum directional derivative is $|\nabla \phi|$.

#mathematics / [[Vector Calculus]]

---
**Q.** What is the condition for a vector $\vec{F}$ to be Solenoidal?
?
$$
\boxed{\quad \nabla \cdot \vec{F} = 0 \quad (\text{Divergence is zero}) \quad}
$$

#mathematics / [[Vector Calculus]]

---
**Q.** What is the condition for a vector $\vec{F}$ to be Irrotational (Conservative)?
?
$$
\boxed{\quad \nabla \times \vec{F} = 0 \quad (\text{Curl is zero}) \quad}
$$
Implies $\vec{F} = \nabla \phi$.

#mathematics / [[Vector Calculus]]

---
**Q.** State the Gauss Divergence Theorem.
?
$$
\boxed{\quad \iint_S \vec{F} \cdot \hat{n} dS = \iiint_V (\nabla \cdot \vec{F}) dV \quad}
$$
Relates closed surface integral to volume integral.

#mathematics / [[Vector Calculus]]

---
**Q.** State Stokes' Theorem.
?
$$
\boxed{\quad \oint_C \vec{F} \cdot d\vec{r} = \iint_S (\nabla \times \vec{F}) \cdot \hat{n} dS \quad}
$$
Relates line integral to open surface integral.

#mathematics / [[Vector Calculus]]

---
**Q.** State Green's Theorem in a plane.
?
$$
\boxed{\quad \oint_C (M dx + N dy) = \iint_R \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) dx dy \quad}
$$

#mathematics / [[Vector Calculus]]

---
**Q.** What is the angle $\theta$ between two vectors $\vec{A}$ and $\vec{B}$?
?
$$
\boxed{\quad \cos\theta = \frac{\vec{A} \cdot \vec{B}}{|\vec{A}||\vec{B}|} \quad}
$$

#mathematics / [[Vector Calculus]]

---
### **Differential Equations**

**Q.** What is the Integrating Factor (IF) for a linear differential equation $\frac{dy}{dx} + Py = Q$?
?
$$
\boxed{\quad \text{IF} = e^{\int P dx} \quad}
$$
Solution: $y(\text{IF}) = \int Q(\text{IF}) dx + C$.

#mathematics / [[Differential Equations]]

---
**Q.** What is the condition for $M dx + N dy = 0$ to be an Exact Differential Equation?
?
$$
\boxed{\quad \frac{\partial M}{\partial y} = \frac{\partial N}{\partial x} \quad}
$$
Solution: $\int_{y=\text{const}} M dx + \int (\text{terms of N free from x}) dy = C$.

#mathematics / [[Differential Equations]]

---
**Q.** For the auxiliary equation with roots $m_1, m_2$ (Real and Distinct), what is the Complementary Function (CF)?
?
$$
\boxed{\quad y = C_1 e^{m_1 x} + C_2 e^{m_2 x} \quad}
$$

#mathematics / [[Differential Equations]]

---
**Q.** For the auxiliary equation with roots $\alpha \pm i\beta$ (Complex Conjugates), what is the CF?
?
$$
\boxed{\quad y = e^{\alpha x} (C_1 \cos \beta x + C_2 \sin \beta x) \quad}
$$

#mathematics / [[Differential Equations]]

---
**Q.** What is the Particular Integral (PI) for $f(D)y = e^{ax}$ if $f(a) \neq 0$?
?
$$
\boxed{\quad \text{PI} = \frac{1}{f(a)} e^{ax} \quad}
$$
If $f(a)=0$, multiply by $x$ and differentiate denominator.

#mathematics / [[Differential Equations]]

---
**Q.** What is the Particular Integral (PI) for $f(D^2)y = \sin(ax)$ if $f(-a^2) \neq 0$?
?
$$
\boxed{\quad \text{PI} = \frac{1}{f(-a^2)} \sin(ax) \quad}
$$
Replace $D^2$ with $-a^2$.

#mathematics / [[Differential Equations]]

---
**Q.** State the Wronskian $W$ of two solutions $y_1$ and $y_2$.
?
$$
\boxed{\quad W = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} \quad}
$$
If $W \neq 0$, solutions are linearly independent.

#mathematics / [[Differential Equations]]

---
### **Complex Variables**

**Q.** What are the Cauchy-Riemann (C-R) equations for $f(z) = u + iv$ to be analytic?
?
$$
\boxed{\quad \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \quad}
$$

#mathematics / [[Complex Analysis]]

---
**Q.** State Cauchy's Integral Formula.
?
If $f(z)$ is analytic inside and on curve C, and $a$ is inside C:
$$
\boxed{\quad \oint_C \frac{f(z)}{z-a} dz = 2\pi i f(a) \quad}
$$

#mathematics / [[Complex Analysis]]

---
**Q.** How do you find the Residue of $f(z)$ at a simple pole $z=a$?
?
$$
\boxed{\quad \text{Res}(z=a) = \lim_{z \to a} (z-a)f(z) \quad}
$$

#mathematics / [[Complex Analysis]]

---
**Q.** State the Residue Theorem.
?
$$
\boxed{\quad \oint_C f(z) dz = 2\pi i (\sum \text{Residues inside C}) \quad}
$$

#mathematics / [[Complex Analysis]]

---
**Q.** What is the Residue at a pole of order $n$ at $z=a$?
?
$$
\boxed{\quad \text{Res}(z=a) = \frac{1}{(n-1)!} \lim_{z \to a} \frac{d^{n-1}}{dz^{n-1}} [(z-a)^n f(z)] \quad}
$$

#mathematics / [[Complex Analysis]]

---
### **Probability and Statistics**

**Q.** Formula for Conditional Probability $P(A|B)$.
?
$$
\boxed{\quad P(A|B) = \frac{P(A \cap B)}{P(B)} \quad}
$$

#mathematics / [[Probability]]

---
**Q.** Condition for two events A and B to be Independent.
?
$$
\boxed{\quad P(A \cap B) = P(A) \cdot P(B) \quad}
$$

#mathematics / [[Probability]]

---
**Q.** State Bayes' Theorem.
?
$$
\boxed{\quad P(A_i|B) = \frac{P(B|A_i)P(A_i)}{\sum P(B|A_k)P(A_k)} \quad}
$$

#mathematics / [[Probability]]

---
**Q.** What is the Probability Mass Function (PMF) of a Binomial Distribution?
?
$$
\boxed{\quad P(X=x) = \binom{n}{x} p^x q^{n-x} \quad}
$$
Mean $= np$, Variance $= npq$.

#mathematics / [[Probability]]

---
**Q.** What is the PMF of a Poisson Distribution?
?
$$
\boxed{\quad P(X=x) = \frac{e^{-\lambda} \lambda^x}{x!} \quad}
$$
Mean $= \lambda$, Variance $= \lambda$.

#mathematics / [[Probability]]

---
**Q.** What is the Probability Density Function (PDF) of a Uniform Distribution over $[a, b]$?
?
$$
\boxed{\quad f(x) = \frac{1}{b-a} \quad \text{for } a \le x \le b \quad}
$$
Mean $= \frac{a+b}{2}$.

#mathematics / [[Probability]]

---
**Q.** What is the PDF of an Exponential Distribution?
?
$$
\boxed{\quad f(x) = \lambda e^{-\lambda x} \quad \text{for } x \ge 0 \quad}
$$
Mean $= \frac{1}{\lambda}$.

#mathematics / [[Probability]]

---
**Q.** What is the PDF of a Normal (Gaussian) Distribution?
?
$$
\boxed{\quad f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2} \quad}
$$

#mathematics / [[Probability]]

---
### **Numerical Methods**

**Q.** State the Newton-Raphson iteration formula.
?
$$
\boxed{\quad x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \quad}
$$
Convergence order is **Quadratic** (2).

#mathematics / [[Numerical Methods]]

---
**Q.** State the Trapezoidal Rule for integration.
?
$$
\boxed{\quad \int y dx = \frac{h}{2} [(y_0 + y_n) + 2(y_1 + y_2 + \dots + y_{n-1})] \quad}
$$

#mathematics / [[Numerical Methods]]

---
**Q.** State Simpson's 1/3 Rule.
?
$$
\boxed{\quad \int y dx = \frac{h}{3} [(y_0 + y_n) + 4(\text{Sum of odds}) + 2(\text{Sum of evens})] \quad}
$$
Applicable when the number of intervals ($n$) is **even**.

#mathematics / [[Numerical Methods]]

---
**Q.** State Simpson's 3/8 Rule.
?
$$
\boxed{\quad \int y dx = \frac{3h}{8} [(y_0 + y_n) + 3(y_1+y_2+y_4+y_5\dots) + 2(y_3+y_6\dots)] \quad}
$$
Applicable when $n$ is a multiple of **3**.

#mathematics / [[Numerical Methods]]

---
**Q.** What is Euler's Method formula for solving ODEs?
?
$$
\boxed{\quad y_{n+1} = y_n + h f(x_n, y_n) \quad}
$$

#mathematics / [[Numerical Methods]]

---
### **Laplace Transforms (Math Context)**

**Q.** What is $L\{t^n\}$?
?
$$
\boxed{\quad \frac{n!}{s^{n+1}} \quad \text{or} \quad \frac{\Gamma(n+1)}{s^{n+1}} \quad}
$$

#mathematics / [[The Laplace Transform]]

---
**Q.** What is $L\{e^{at}\}$?
?
$$
\boxed{\quad \frac{1}{s-a} \quad}
$$

#mathematics / [[The Laplace Transform]]

---
**Q.** What is $L\{\sin at\}$?
?
$$
\boxed{\quad \frac{a}{s^2 + a^2} \quad}
$$

#mathematics / [[The Laplace Transform]]

---
**Q.** What is $L\{\cos at\}$?
?
$$
\boxed{\quad \frac{s}{s^2 + a^2} \quad}
$$

#mathematics / [[The Laplace Transform]]

---
**Q.** What is $L\{t f(t)\}$?
?
$$
\boxed{\quad -\frac{d}{ds} F(s) \quad}
$$

#mathematics / [[The Laplace Transform]]

---
### **Fourier Series**

**Q.** What is the formula for the Fourier coefficient $a_0$ in interval $[-\pi, \pi]$?
?
$$
\boxed{\quad a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) dx \quad}
$$
(Note: Some texts use $1/2\pi$, check if the series starts with $a_0$ or $a_0/2$). Typically for $f(x) = \frac{a_0}{2} + \sum \dots$, the above formula holds.

#mathematics / [[Fourier Series]]

---
**Q.** What is the value of Fourier coefficients $a_n$ for an **Odd** function?
?
$$
\boxed{\quad a_n = 0 \quad}
$$
Only sine terms ($b_n$) exist for odd functions.

#mathematics / [[Fourier Series]]

---
**Q.** What is the value of Fourier coefficients $b_n$ for an **Even** function?
?
$$
\boxed{\quad b_n = 0 \quad}
$$
Only cosine terms ($a_n$) and DC ($a_0$) exist for even functions.

#mathematics / [[Fourier Series]]

---
### **Miscellaneous**

**Q.** What is the sum of an infinite Geometric Progression (GP) with $|r| < 1$?
?
$$
\boxed{\quad S_\infty = \frac{a}{1-r} \quad}
$$

#mathematics / [[Algebra]]

---
**Q.** What is the formula for $\log_b a$?
?
$$
\boxed{\quad \frac{\ln a}{\ln b} \quad}
$$

#mathematics / [[Algebra]]

---
**Q.** Standard trigonometric identity for $\cos 2A$.
?
$$
\boxed{\quad \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A \quad}
$$

#mathematics / [[Trigonometry]]

---
**Q.** Formula for the Scalar Triple Product $\vec{A} \cdot (\vec{B} \times \vec{C})$.
?
$$
\boxed{\quad \begin{vmatrix} A_x & A_y & A_z \\ B_x & B_y & B_z \\ C_x & C_y & C_z \end{vmatrix} \quad}
$$
Represents the volume of the parallelepiped.

#mathematics / [[Vector Algebra]]

---
**Q.** Order of convergence for the Secant Method.
?
$$
\boxed{\quad 1.618 \quad (\text{Golden Ratio}) \quad}
$$

#mathematics / [[Numerical Methods]]

---
**Q.** What is the Correlation Coefficient $r$?
?
$$
\boxed{\quad r = \frac{\text{Cov}(X,Y)}{\sigma_x \sigma_y} \quad}
$$
Range is $[-1, 1]$.

#mathematics / [[Statistics]]

---
