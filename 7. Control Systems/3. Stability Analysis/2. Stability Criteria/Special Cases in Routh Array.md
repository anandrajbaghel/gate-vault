---
tags:
  - control-systems
  - stability-analysis
  - routh-array
  - routh-hurwitz
  - special-cases
  - auxiliary-equation
created: 2025-10-11
aliases:
  - Routh Array Special Cases
  - Routh Array Difficulties
  - Special Cases in Routh Array (Row of Zeros, First Element Zero)
  - "Example : Special Cases in Routh Array"
subject: "[[Control Systems]]"
parent: "[[Routh-Hurwitz Stability Criterion]]"
modified: 2026-08-04T10:32:34
---
### Special Cases in Routh Array
#control-systems/stability #routh-hurwitz/special-cases

> While constructing the Routh array is typically a straightforward process, two special cases can arise that require specific procedures to complete the stability analysis: (1) a zero appearing as the first element in a row, and (2) an entire row becoming zero. Properly handling these cases is crucial for a correct stability assessment.

---
#### Case 1: Zero in the First Column (Only)
#routh-array/zero-element

> See [[Routh-Hurwitz Special Case-1]]

This case occurs when the first element of a row is zero, but at least one other element in that row is non-zero.

-   **The Problem:** The zero in the first column would be used as a divisor to calculate the elements of the next row, leading to a division-by-zero error and halting the array construction.

-   **The Solution (Epsilon Method):**
    1.  Replace the zero in the first column with a very small positive number, **epsilon ($\epsilon$)**.
    2.  Continue calculating the rest of the Routh array as usual. The elements in the subsequent rows will now be functions of $\epsilon$.
    3.  Examine the signs of the elements in the first column by taking the limit as **$\epsilon \to 0^+$**.
    4.  Count the number of sign changes in the first column to determine the number of RHP poles.

---
##### Example
#routh-hurwitz/special-case-1 

For a characteristic equation $Q(s) = s^4 + s^3 + 2s^2 + 2s + 3 = 0$

| $s^4$ | 1 | 2 | 3 |
| :--- | :--- | :--- | :--- |
| $s^3$ | 1 | 2 | |
| $s^2$ | $\frac{1 \cdot 2 - 1 \cdot 2}{1} = 0 \to \epsilon$ | $\frac{1 \cdot 3 - 1 \cdot 0}{1} = 3$ | |
| $s^1$ | $\frac{\epsilon \cdot 2 - 1 \cdot 3}{\epsilon} = 2 - \frac{3}{\epsilon}$ | | |
| $s^0$ | 3 | | |

To analyze the first column: `[1, 1, ε, 2 - 3/ε, 3]`.
As $\epsilon \to 0^+$, the term $(2 - 3/\epsilon)$ approaches $-\infty$.
The signs are `[+, +, +, -, +]`. There are **two sign changes** (from $+$ to $-$ and from $-$ to $+$). Therefore, the system has **two poles in the RHP** and is unstable.

---
#### Case 2: An Entire Row of Zeros
#routh-array/row-of-zeros #auxiliary-equation

> See [[Routh-Hurwitz Special Case-2]]

This is a more significant case, indicating a special property of the pole locations.

-   **The Significance:** A row of all zeros indicates that the characteristic equation has roots that are **symmetrically located with respect to the origin** of the s-plane. This implies the presence of one or more of the following:
    -   A pair of real roots with opposite signs (e.g., $s = \pm \sigma$).
    -   A pair of roots on the imaginary axis (e.g., $s = \pm j\omega$). This leads to **marginal stability**.
    -   Complex conjugate roots in quadrantal symmetry (e.g., $s = \pm \sigma \pm j\omega$).
    In any of these scenarios, the system is **not asymptotically stable**.

-   **The Solution (Auxiliary Equation Method):**
    1.  **Form the Auxiliary Equation, $A(s)$:** Create a polynomial using the coefficients of the row *just above* the row of zeros. This polynomial will always be of even order.
    2.  **Differentiate $A(s)$:** Find the derivative of the auxiliary polynomial with respect to $s$, i.e., $\frac{dA(s)}{ds}$.
    3.  **Replace:** Replace the row of zeros in the Routh array with the coefficients of the derivative polynomial $\frac{dA(s)}{ds}$.
    4.  **Continue:** Proceed with constructing the rest of the array as usual.

-   **Interpretation of Results:**
    -   The roots of the auxiliary equation, $A(s)=0$, are the actual symmetrically located poles of the system.
    -   The stability of these symmetric poles is determined by the number of sign changes in the first column of the Routh array **from the replaced row downwards**.
    -   If there are **no sign changes** below the auxiliary row, the symmetric poles lie on the **jω-axis**, and the system is marginally stable. The roots of $A(s)=0$ give the frequency of oscillation.
    -   If there are sign changes, these correspond to the number of symmetric roots in the RHP.

---
### Related Concepts
#control-systems/related-concepts

> [[Routh-Hurwitz Stability Criterion]]

[[Relationship between Pole Location and System Stability]]
[[Concept and Definition of Root Locus]]
[[Nyquist Stability Criterion]]