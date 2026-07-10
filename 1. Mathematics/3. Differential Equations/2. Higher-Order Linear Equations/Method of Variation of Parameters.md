---
tags:
  - calculus
  - differential-equations
  - ode
  - wronskian
  - engineering-math
created: 2025-09-15
aliases:
  - Variation of Parameters
  - Lagrange's Method
  - "Example : Wronskian"
  - "Example : Method of Variation of Parameters"
subject: "[[Mathematics]]"
parent: "[[Linear Non-Homogeneous ODEs with Constant Coefficients]]"
confidence: 9
---

```mermaid
mindmap
  root((Method of Variation of Parameters))
    Purpose
      Finds the Particular Integral (y_p) for Non-Homogeneous ODEs
    Advantage
      General Method: Works for any forcing function R(x), unlike Undetermined Coefficients
    Standard Form
      y'' + P(x)y' + Q(x)y = R(x)
    Core Idea
      Start with the complementary function y_c = c₁y₁ + c₂y₂
      Replace constants c₁, c₂ with functions u₁(x), u₂(x)
      y_p = u₁(x)y₁ + u₂(x)y₂
    The Formulas
      u₁'(x) = -y₂R(x) / W
      u₂'(x) = y₁R(x) / W
      Wronskian (W) = y₁y₂' - y₂y₁'
    Procedure
      1. Find y_c = c₁y₁ + c₂y₂
      2. Calculate Wronskian W
      3. Find u₁' and u₂'
      4. Integrate to get u₁ and u₂
      5. Construct y_p = u₁y₁ + u₂y₂
```

---
### Method of Variation of Parameters
#variation-of-parameters #wronskian #particular-integral

> The **Method of Variation of Parameters** is a powerful and general technique for finding the particular integral ($y_p$) of a linear non-homogeneous ordinary differential equation. Unlike the Method of Undetermined Coefficients, it is not restricted to specific forms of the forcing function $R(x)$ and can be applied to any continuous $R(x)$. The method works by "varying" the parameters (constants) of the complementary function.

#### The General Formula
#variation-of-parameters/formula
Consider a second-order linear ODE in standard form:
$$ y'' + P(x)y' + Q(x)y = R(x) $$
First, find the complementary function ($y_c$) by solving the homogeneous part:
$$ y_c(x) = c_1 y_1(x) + c_2 y_2(x) $$
The Method of Variation of Parameters states that the particular integral ($y_p$) can be written as:
$$ y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x) $$
where $u_1(x)$ and $u_2(x)$ are found by integrating their derivatives:
$$\boxed{\quad u_1(x) = -\int \frac{y_2(x) R(x)}{W(x)} \, dx \quad}$$
$$\boxed{\quad u_2(x) = \int \frac{y_1(x) R(x)}{W(x)} \, dx \quad}$$

Here, $W(x)$ is the **Wronskian** of the solutions $y_1$ and $y_2$:
$$\boxed{\quad W = W(y_1, y_2) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_2 y_1' \quad}$$
The Wronskian for a linear ODE with constant coefficients is guaranteed to be non-zero if $y_1$ and $y_2$ are linearly independent.

---
#### Step-by-Step Procedure
#variation-of-parameters/procedure

1.  **Find Complementary Function ($y_c$)**: Solve the associated homogeneous equation to find $y_c = c_1 y_1 + c_2 y_2$. Identify the two linearly independent solutions, $y_1$ and $y_2$.
2.  **Calculate the Wronskian ($W$)**: Compute $W = y_1 y_2' - y_2 y_1'$.
3.  **Ensure Standard Form**: Make sure the original ODE has a coefficient of 1 for the $y''$ term. If not, divide the entire equation by the leading coefficient to correctly identify $R(x)$.
4.  **Find $u_1(x)$ and $u_2(x)$**: Use the formulas to integrate and find $u_1$ and $u_2$. (We can ignore the constants of integration here, as they would be absorbed into the complementary function).
5.  **Construct the Particular Integral ($y_p$)**: The particular integral is $y_p = u_1 y_1 + u_2 y_2$.
6.  **Form the General Solution**: The complete solution is $y(x) = y_c(x) + y_p(x)$.

---
#### Example
Find the general solution of $y'' + y = \tan(x)$.
*Note: The Method of Undetermined Coefficients cannot be used here because of the $\tan(x)$ term.*

1.  **Find $y_c$**: The characteristic equation is $m^2 + 1 = 0 \implies m = \pm j$.
    The roots are complex conjugates $\alpha \pm j\beta$ with $\alpha=0, \beta=1$.
    So, $y_c = c_1 \cos(x) + c_2 \sin(x)$.
    This gives us $y_1 = \cos(x)$ and $y_2 = \sin(x)$.

2.  **Calculate Wronskian**:
    $y_1' = -\sin(x)$, $y_2' = \cos(x)$.
    $W = y_1 y_2' - y_2 y_1' = (\cos x)(\cos x) - (\sin x)(-\sin x) = \cos^2 x + \sin^2 x = 1$.

3.  **Standard Form**: The equation is already in standard form, with $R(x) = \tan(x)$.

4.  **Find $u_1$ and $u_2$**:
    $$\begin{align}
    u_1 &= -\int \frac{y_2 R(x)}{W} \, dx = -\int \frac{\sin(x) \tan(x)}{1} \, dx = -\int \frac{\sin^2(x)}{\cos(x)} \, dx \\
    &= -\int \frac{1-\cos^2(x)}{\cos(x)} \, dx = -\int (\sec x - \cos x) \, dx = -(\ln|\sec x + \tan x| - \sin x) \\
    u_2 &= \int \frac{y_1 R(x)}{W} \, dx = \int \frac{\cos(x) \tan(x)}{1} \, dx = \int \sin(x) \, dx = -\cos(x)
    \end{align}$$

5.  **Construct $y_p$**:
    $$\begin{align}
    y_p &= u_1 y_1 + u_2 y_2 \\
    &= [-(\ln|\sec x + \tan x| - \sin x)]\cos x + [-\cos x]\sin x \\
    &= -\cos(x)\ln|\sec x + \tan x| + \sin x \cos x - \sin x \cos x \\
    &= -\cos(x)\ln|\sec x + \tan x|
    \end{align}$$

6.  **General Solution**:
    $y(x) = y_c + y_p = c_1 \cos(x) + c_2 \sin(x) - \cos(x)\ln|\sec x + \tan x|$.

---
### Related Concepts
#calculus/related-concepts

> [[Calculus - Linear Non-Homogeneous ODEs with Constant Coefficients]]
> [[Linear Homogeneous ODEs with Constant Coefficients]]
> [[Linear Algebra - Wronskian]]
> [[Calculus - Integration]]