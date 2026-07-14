---
tags:
  - calculus
  - differential-equations
  - ode
  - variable-coefficient-ode
  - engineering-math
created: 2025-09-15
aliases:
  - Cauchy's Equation
  - Euler's Equation
  - Equidimensional Equation
subject: "[[Mathematics]]"
parent:
  - Second-Order Linear ODEs
---
### Cauchy-Euler Equation
#cauchy-euler-equation #variable-coefficient-ode

> The **Cauchy-Euler Equation** is a special type of linear ordinary differential equation with **variable coefficients**. Its defining characteristic is that the power of the independent variable ($x$) in the coefficient of each term matches the order of the derivative in that term. This specific structure allows it to be transformed into a much simpler linear ODE with **constant coefficients** through a clever substitution.

#### Standard Form
The standard second-order homogeneous Cauchy-Euler equation is:
$$\boxed{\quad a x^2 \frac{d^2y}{dx^2} + b x \frac{dy}{dx} + c y = 0 \quad}$$
where $a, b,$ and $c$ are constants. The key is to notice the pattern: the term with the second derivative ($y''$) has an $x^2$ coefficient, the first derivative ($y'$) has an $x$ coefficient, and the function ($y$) has an $x^0$ coefficient.

---
#### Solution Method and the Auxiliary Equation
There are two common ways to solve the homogeneous equation. Both lead to the same algebraic auxiliary equation.

##### Method 1: Assume a Solution $y = x^m$ (Direct Method)
This is the fastest method for the homogeneous case.
1.  Assume the solution is of the form $y = x^m$.
2.  Find the derivatives: $y' = mx^{m-1}$ and $y'' = m(m-1)x^{m-2}$.
3.  Substitute these into the ODE:
    $$ a x^2 [m(m-1)x^{m-2}] + b x [mx^{m-1}] + c [x^m] = 0 $$
4.  Simplify the expression:
    $$ a m(m-1)x^m + b m x^m + c x^m = 0 $$
    $$ [a m(m-1) + b m + c] x^m = 0 $$
5.  Since $x^m \neq 0$, the term in the brackets must be zero. This gives the **Auxiliary Equation**:
    $$\boxed{\quad am(m-1) + bm + c = 0 \quad}$$
    or, when expanded: $am^2 + (b-a)m + c = 0$.

##### Method 2: Substitution $x = e^t$ (Transformational Method)
This method is more fundamental and is required for solving non-homogeneous Cauchy-Euler equations.
1.  Let $x = e^t$, which implies $t = \ln(x)$.
2.  Use the chain rule to transform the derivatives with respect to $x$ into derivatives with respect to $t$. Let $D = \frac{d}{dt}$. This yields the following key transformations:
    *   $\boxed{x \frac{dy}{dx} = \frac{dy}{dt} = Dy}$
    *   $\boxed{x^2 \frac{d^2y}{dx^2} = \frac{d^2y}{dt^2} - \frac{dy}{dt} = (D^2 - D)y = D(D-1)y}$
3.  Substituting these into the ODE gives a constant-coefficient ODE in $t$:
    $$ a(D^2 - D)y + b(D)y + cy = 0 \implies [aD^2 + (b-a)D + c]y = 0 $$
    The characteristic equation is $am^2 + (b-a)m + c = 0$, identical to the one from Method 1.

---
#### General Solution based on Roots
The form of the solution depends on the roots ($m_1, m_2$) of the auxiliary equation. Note the analogy to constant-coefficient ODEs: $e^{mx}$ is replaced by $x^m$, and $x$ is replaced by $\ln(x)$.

##### Case 1: Real and Distinct Roots ($m_1 \neq m_2$)
$$\boxed{\quad y(x) = c_1 x^{m_1} + c_2 x^{m_2} \quad}$$

##### Case 2: Real and Repeated Roots ($m_1 = m_2 = m$)
$$\boxed{\quad y(x) = (c_1 + c_2 \ln(x)) x^m \quad}$$
(The `ln(x)` term is analogous to the `x` term in the constant-coefficient case).

##### Case 3: Complex Conjugate Roots ($m = \alpha \pm j\beta$)
$$\boxed{\quad y(x) = x^\alpha [c_1 \cos(\beta \ln(x)) + c_2 \sin(\beta \ln(x))] \quad}$$

---
#### Non-Homogeneous Cauchy-Euler Equation
To solve $ax^2y'' + bxy' + cy = R(x)$:
1.  Use the substitution $x=e^t$ to transform the equation into a constant-coefficient non-homogeneous ODE:
    $$ [aD^2 + (b-a)D + c]y = R(e^t) $$
2.  Solve this new equation for $y(t)$ using the methods for [[Calculus - Linear Non-Homogeneous ODEs with Constant Coefficients|non-homogeneous ODEs]] (Undetermined Coefficients or Variation of Parameters) to find $y(t) = y_c(t) + y_p(t)$.
3.  Substitute back $t = \ln(x)$ to obtain the final solution $y(x)$.

---
### Related Concepts
#calculus/related-concepts

> [[Calculus - Second-Order Linear ODEs]]
> [[Linear Homogeneous ODEs with Constant Coefficients]]
> [[Linear Non-Homogeneous ODEs with Constant Coefficients]]