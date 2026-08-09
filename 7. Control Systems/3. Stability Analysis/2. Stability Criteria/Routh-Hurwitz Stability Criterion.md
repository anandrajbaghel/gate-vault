---
tags:
  - control-systems
  - stability-analysis
  - routh-array
  - algebraic-criterion
created: 2025-10-10
aliases:
  - Routh Array
  - Routh-Hurwitz Criterion
  - R-H Criterion
  - "Routh-Hurwitz Special Case 1 : A Zero in First Column"
  - "Routh-Hurwitz Special Case 2 : An Entire Row of Zeros"
  - Construction of Routh Array
subject: "[[Control Systems]]"
parent:
  - Stability Criteria
modified: 2026-08-04T10:26:24
---
### Routh-Hurwitz Stability Criterion
#control-systems/stability #routh-hurwitz

> The **Routh-Hurwitz criterion** is an algebraic method used to determine the stability of a Linear Time-Invariant (LTI) system without having to compute the actual locations of the closed-loop poles. It allows us to find the number of poles that lie in the right-half of the $s$-plane (RHP) directly from the coefficients of the system's [[characteristic equation]].

#### The Characteristic Equation
#characteristic-equation

The criterion is applied to the **characteristic equation** of the system, which is obtained by setting the denominator of the [[Closed-Loop Transfer Function (CLTF)|closed-loop transfer function]] to zero:
$$1 + G(s)H(s) = 0$$
Let the characteristic equation be a polynomial in $s$:
$$Q(s) = a_n s^n + a_{n-1} s^{n-1} + \cdots + a_1 s + a_0 = 0$$
##### Necessary (but not sufficient) Conditions for Stability

For a system to be stable, it is necessary that:
1.  All coefficients ($a_n, a_{n-1}, \dots, a_0$) of the polynomial are present.
2.  All coefficients have the same sign (typically all positive).
If either of these conditions is not met, the system is guaranteed to have poles in the RHP or on the $jω$-axis, and is therefore unstable. If the conditions are met, the system *may* be stable, and the Routh array must be constructed.

---
#### Constructing the Routh Array
#routh-array

The Routh array is a systematic way to organize the coefficients of the characteristic equation.
1.  The first two rows are formed directly from the polynomial coefficients.
2.  Subsequent rows are calculated from the elements of the two rows immediately preceding them.

For the polynomial $a_n s^n + a_{n-1} s^{n-1} + a_{n-2} s^{n-2} + \dots + a_0 = 0$:

| $s^n$ | $a_n$ | $a_{n-2}$ | $a_{n-4}$ | ... |
| :--- | :--- | :--- | :--- | :--- |
| $s^{n-1}$ | $a_{n-1}$ | $a_{n-3}$ | $a_{n-5}$ | ... |
| $s^{n-2}$ | $b_1$ | $b_2$ | $b_3$ | ... |
| $s^{n-3}$ | $c_1$ | $c_2$ | $c_3$ | ... |
| ... | ... | ... | ... | ... |
| $s^0$ | $f_1$ | | | |

The coefficients are calculated as follows:
$$ b_1 = \frac{a_{n-1}a_{n-2} - a_n a_{n-3}}{a_{n-1}} \qquad b_2 = \frac{a_{n-1}a_{n-4} - a_n a_{n-5}}{a_{n-1}} $$
$$ c_1 = \frac{b_1 a_{n-3} - a_{n-1} b_2}{b_1} \qquad c_2 = \frac{b_1 a_{n-5} - a_{n-1} b_3}{b_1} $$
The process continues until the $s^0$ row is completed.

---
#### The Routh-Hurwitz Stability Criterion
#routh-hurwitz/criterion

1. **Stability:** ==The system is stable if and only if **all the elements in the first column** of the [[#Constructing the Routh Array|Routh array]] have the **same sign**.==
2. **Instability:** The number of **sign changes** in the first column is exactly equal to the number of closed-loop poles in the **right-half plane (RHP)**.

> [!pyq]- PYQ : GATE EE 2020, 2019
> ![[ee_2020#^q35]]
> 
> ---
> ![[ee_2019#^q15]]

---
#### Special Cases in the Routh Array
#routh-hurwitz/special-cases

##### Case 1: A Zero in the First Column (but not an entire row of zeros)
#routh-hurwitz/special-case-1 

- **Problem:** A zero in the first column causes division by zero when calculating the next row.
- **Solution:** Replace the zero with a very small positive number, epsilon ($\epsilon$), and complete the array. Then, analyze the signs in the first column by taking the limit as $\epsilon \to 0^+$.

---
##### Case 2: An Entire Row of Zeros
#routh-hurwitz/special-case-2 

- **Significance:** This indicates that the characteristic equation has roots that are symmetric with respect to the origin of the s-plane. This could be:
    - A pair of roots on the imaginary axis (e.g., $\pm j\omega$).
    - A pair of real roots with opposite signs (e.g., $\pm \sigma$).
    - Quadrantal roots (e.g., $\pm \sigma \pm j\omega$).
    If this occurs, the system is not strictly stable (it could be marginally stable or unstable).
- **Procedure:**
    1. Form the **[[Routh-Hurwitz Special Case-2#Example|Auxiliary Equation]]**, $A(s)$, using the coefficients from the row just *above* the row of zeros. The polynomial $A(s)$ will always be of even order.
    2. Differentiate the auxiliary equation with respect to s: $\frac{dA(s)}{ds}$.
    3. Replace the row of zeros with the coefficients of the derivative polynomial.
    4. Continue constructing the rest of the array as usual.

> [!trick]- Routh Array: Row Scaling vs. Unscaled Derivative
> When encountering a **Row of Zeros (ROZ)**, you can calculate the subsequent rows using either the scaled rows or the raw, unscaled rows. Both methods yield identical sign changes in the first column:
> 
> * **The Scaled Path:** If you divide a row by a positive common factor to simplify the numbers, you must continue using those simplified values for all future cross-multiplications. If you form the auxiliary equation from a scaled row, the derivative coefficients you insert into the row of zeros will automatically align with your scaled system.
> * **The Unscaled Path:** If you prefer to use the raw coefficients without any simplification, you must use the direct, unscaled derivative of the auxiliary polynomial. The numbers will be larger, but the calculations remain perfectly consistent.
> 
> > [!mistake] Note
> > Never mix scaled numbers from one row with unscaled numbers from another row during cross-multiplication. Choose one approach for the row transition and stick to it to ensure the first-column signs remain correct.

> [!pyq]- PYQ : 2018
> ![[ee_2018#^q34]]

> [!example]- Solved Example
> [[Routh-Hurwitz Special Case-2]]

- **Interpretation:** The roots of the auxiliary equation $A(s)=0$ are the symmetrically located poles of the system. The number of sign changes in the first column *below* the auxiliary row indicates the number of these symmetric poles that are in the RHP.

> [!concept] Routh–Hurwitz: Imaginary-Axis Poles (Rule)
> 
> > [!pyq]- PYQ : GATE EE 2020
> > ![[ee_2020#^q36]]
> 
> $$\boxed{\quad \text{Imaginary-axis poles} \iff \text{a complete row of the Routh array becomes zero} \quad}$$
> Procedure:
> - ==Set the entire zero row $=0$==
> - ==Solve for the parameter (e.g., $K$)==
> - ==Form the [[Routh-Hurwitz Special Case-2#Example|auxiliary equation]] from the row above==
> - ==Roots of the auxiliary equation give $s=\pm j\omega$==
> 
> > [!examtip]
> > Only first element $=0$ (row not zero)
> > $\Rightarrow$ use $\epsilon$ [[Routh-Hurwitz Special Case-1|method]],
> > **not** imaginary-axis poles

---
#### Applications
#routh-hurwitz/application 

- **Absolute Stability:** Determine if a system is stable or not.
- **Relative Stability:** Find the range of a system parameter (like gain K) for which the system remains stable.
- **Marginal Stability:** Find the value of K that places poles on the jω-axis, causing sustained oscillations. The frequency of these oscillations can be found by solving the auxiliary equation formed at this value of K.

---
### Related Concepts
#control-systems/related-concepts

> [[Relationship between Pole Location and System Stability]]

[[Routh-Hurwitz Special Case-2]]
[[Special Cases in Routh Array]]
[[Concept and Definition of Root Locus|Root Locus]]
[[Nyquist Stability Criterion]]
[[Concept of Stability]]
