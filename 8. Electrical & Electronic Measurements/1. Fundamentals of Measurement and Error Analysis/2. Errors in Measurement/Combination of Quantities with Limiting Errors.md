---
tags:
  - measurements
  - error-analysis
  - error-propagation
  - gate
created: 2023-11-05
aliases:
  - Error Propagation
  - Propagation of Errors
  - "Error : General Formula"
  - "Example : Limiting Error"
subject: "[[Electrical & Electronic Measurements]]"
parent: "[[Limiting Errors (Guarantee Errors)]]"
modified: 2026-08-04T09:20:36
---
### Combination of Quantities with Limiting Errors
#error-propagation #limiting-error #error-analysis

> When a final quantity is calculated from multiple independent measurements, the [[Limiting Errors (Guarantee Errors)|limiting errors]] of these individual measurements propagate and combine. The following rules are used to determine the maximum possible error (worst-case scenario) in the computed quantity.

#### Basis for Derivation (Total Differential)
#error-propagation/theory

The rules for error combination are derived from the total differential of a function. For a function $Y = f(X_1, X_2, \ldots, X_n)$, the infinitesimal change in $Y$ is:
$$dY = \frac{\partial f}{\partial X_1}dX_1 + \frac{\partial f}{\partial X_2}dX_2 + \dots + \frac{\partial f}{\partial X_n}dX_n$$
For error analysis, we replace the differentials with finite increments (the errors, $\delta X_i$) and take the worst-case sum by adding the absolute values of each term.
$$\delta Y \approx \left|\frac{\partial f}{\partial X_1}\right||\delta X_1| + \left|\frac{\partial f}{\partial X_2}\right||\delta X_2| + \dots + \left|\frac{\partial f}{\partial X_n}\right||\delta X_n|$$
This general formula is the foundation for all specific cases.

---
#### Sum and Difference of Quantities
#error-propagation/sum-difference

For addition ($Y = X_1 + X_2$) or subtraction ($Y = X_1 - X_2$), the **absolute limiting error** of the result is the sum of the absolute limiting errors of the individual quantities.

$$\boxed{\quad \delta Y = |\delta X_1| + |\delta X_2| \quad}$$

---
##### Example
#error/sum-and-difference/example

Two resistors $R_1 = 100 \pm 2 \, \Omega$ and $R_2 = 50 \pm 1 \, \Omega$ are connected in series. The total resistance is $R_T = R_1 + R_2$.
-   Nominal Resistance: $R_T = 100 + 50 = 150 \, \Omega$
-   Absolute Error: $\delta R_T = |\delta R_1| + |\delta R_2| = 2 \, \Omega + 1 \, \Omega = 3 \, \Omega$
-   Result: $R_T = 150 \pm 3 \, \Omega$

---
#### Product and Division of Quantities
#error-propagation/product-division

For multiplication ($Y = X_1 X_2$) or division ($Y = X_1 / X_2$), the **relative limiting error** of the result is the sum of the relative limiting errors of the individual quantities.

$$\boxed{\quad \frac{\delta Y}{|Y|} = \left|\frac{\delta X_1}{X_1}\right| + \left|\frac{\delta X_2}{X_2}\right| \quad}$$

---
##### Example
#error/product-and-division/example 

Power is calculated from voltage $V = 100 \pm 1 \, V$ and current $I = 10 \pm 0.2 \, A$. The power is $P = V \times I$.
-   Nominal Power: $P = 100V \times 10A = 1000 \, W$
-   Relative Error in V: $\epsilon_V = \frac{1V}{100V} = 1\%$
-   Relative Error in I: $\epsilon_I = \frac{0.2A}{10A} = 2\%$
-   Relative Error in P: $\epsilon_P = \epsilon_V + \epsilon_I = 1\% + 2\% = 3\%$
-   Absolute Error in P: $\delta P = 3\% \times 1000W = 30 \, W$
-   Result: $P = 1000 \pm 30 \, W$

---
#### Quantity Raised to a Power
#error-propagation/power-law

For a quantity raised to a power ($Y = X^n$), the **relative limiting error** of the result is $|n|$ times the relative limiting error of the original quantity.

$$\boxed{\quad \frac{\delta Y}{|Y|} = |n| \left|\frac{\delta X}{X}\right| \quad}$$

**Example**: The power dissipated in a resistor $R = 100 \pm 2 \, \Omega$ is calculated from the current $I = 2 \pm 0.05 \, A$, using the formula $P = I^2 R$.
This is a composite function involving both power and product rules.

1.  **Nominal Power**: $P = (2A)^2 \times 100\Omega = 400 \, W$.
2.  **Relative Error in I**: $\epsilon_I = \frac{0.05A}{2A} = 2.5\%$.
3.  **Relative Error in R**: $\epsilon_R = \frac{2\Omega}{100\Omega} = 2\%$.
4.  **Total Relative Error in P**: The function is $P = I^2 \times R^1$.
    $$\begin{align}
    \frac{\delta P}{P} &= |2| \left|\frac{\delta I}{I}\right| + |1| \left|\frac{\delta R}{R}\right| \\
    &= 2 \times (2.5\%) + 1 \times (2\%) = 5\% + 2\% = 7\%
    \end{align}$$
5.  **Absolute Error in P**: $\delta P = 7\% \times 400W = 28 \, W$.
6.  **Result**: $P = 400 \pm 28 \, W$.

---
### Related Concepts
#topic/related-concepts

> [[Limiting Errors (Guarantee Errors)]]

[[Types of Errors]]
[[Accuracy and Precision]]
[[Statistical Analysis of Random Errors]]
[[Differential Equations]]
