---
tags:
  - routh-hurwitz/special-case-2
created: 2025-10-29
aliases:
  - How to form Auxiliary Equation in Routh-Hurwitz?
  - "Auxiliary Equation formation in Routh-Hurwitz Special Case 2 : All Elements Zero"
  - "Example : Routh-Hurwitz Special Case 2 : Entire Odd Row Element is Zero"
  - Auxiliary Equation
subject: "[[Control Systems]]"
parent:
  - Stability Criteria
  - "[[Routh-Hurwitz Stability Criterion]]"
---
### All Elements of an Odd Row Become Zero
#routh-criteria/special-case/all-element-odd-row-0

> When all the elements of an entire row (this row will always correspond to an odd power of $s$ if the row above it corresponds to an even power, or vice-versa, unless it's the $s^0$ row which can't be all zero unless $a_N=0$) become zero. This indicates roots symmetric about the origin.

1.  Form the **Auxiliary Equation (AE)**, $A(s)$, using the coefficients of the row *immediately preceding* the row of zeros. $A(s)$ will always be an even polynomial (contains only even powers of $s$).
2.  The roots of $A(s)$ are also roots of the original characteristic equation $D(s)$. These are the symmetrically located roots.
3.  To continue the Routh array, differentiate $A(s)$ with respect to $s$, i.e., $\frac{dA(s)}{ds}$.
4.  Replace the row of zeros with the coefficients of $\frac{dA(s)}{ds}$.
5.  Continue the Routh array construction. The number of sign changes in the *remaining part* of the first column (from the row of $dA(s)/ds$ downwards) indicates the number of roots of $A(s)$ that are in the RHP.

---
#### Odd Row Becomes Zero ONCE
#routh-criteria/special-case/odd-row-zero-once

> [!pyq]- PYQ : 2018
> ![[ee_2018#^q34]]

##### Example
$$\boxed{\quad D(s) = s^4 + s^3 - 3s^2 - s + 2\quad}$$

| Power   | Coeff 1                          | Coeff 2                     | Coeff 3 | Sign                    |                  |
| ------- | -------------------------------- | --------------------------- | ------- | ----------------------- | ---------------- |
| $$s^4$$ | $$1$$                            | $$-3$$                      | $$2$$   | $$+$$                   |                  |
| $$s^3$$ | $$1$$                            | $$-1$$                      | $$0$$   | $$+$$                   |                  |
| $$s^2$$ | $$\frac{1(-3)-1(-1)}{1} = -2$$   | $$\frac{1(2)-1(0)}{1} = 2$$ | $$0$$   | $$-$$ (1st sign change) |                  |
| $$s^1$$ | $$\frac{(-2)(-1)-1(2)}{-2} = 0$$ | $$0$$                       | $$0$$   |                         | **Row of Zeros** |

---
###### 1. Auxiliary Equation (AE) Formation

From the $s^2$ row (row above zeros): $A(s) = -2s^2 + 2s^0 = -2s^2 + 2$.
Derivative: $\frac{dA(s)}{ds} = -4s^1 + 0 = -4s$.
Replace $s^1$ row coefficients with $[-4, 0]$.

---
###### 2. Continue Routh Table

| Power   | Coeff 1                            | Coeff 2 | Coeff 3 | Sign                    |                                      |
| ------- | ---------------------------------- | ------- | ------- | ----------------------- | ------------------------------------ |
| $$s^4$$ | $$1$$                              | $$-3$$  | $$2$$   | $$+$$                   |                                      |
| $$s^3$$ | $$1$$                              | $$-1$$  | $$0$$   | $$+$$                   |                                      |
| $$s^2$$ | $$-2$$                             | $$2$$   | $$0$$   | $$-$$                   |                                      |
| $$s^1$$ | $$-4$$                             | $$0$$   |         | $$-$$                   | (No sign change from $s^2$ to $s^1$) |
| $$s^0$$ | $$\frac{(-4)(2)-(-2)(0)}{-4} = 2$$ |         |         | $$+$$ (2nd sign change) |                                      |

---
###### 3. Analysis
* Total sign changes in the first column: 2 (from $s^3$ to $s^2$, and from $s^1$ to $s^0$).
    So, 2 roots are in the RHP.
* The auxiliary equation $$A(s) = -2s^2 + 2 = 0 \implies s^2 = 1 \implies s = \pm 1$$
    These are symmetric roots. One ($s=+1$) is in RHP, one ($s=-1$) is in LHP.
* Number of sign changes *below* the AE (or from AE coefficients row): The $s^2$ row is $[-2, 2]$.
    Derivative row ($s^1$) is $[-4]$.
    $s^0$ row is $[2]$.
    Sign changes from $s^2$ row downwards: $(-2) \to (-4)$ (no change), $(-4) \to (2)$ (one change).
    This one sign change below the AE row indicates that one root of $A(s)$ is in RHP (which is $s=+1$).
* The other RHP root (total 2 RHP roots) must come from $D(s)/A(s)$.

---
###### 4. Overall Pole Locations

* Roots of $A(s)$: $s = +1, -1$.
* Total RHP roots = 2. One is $s=+1$.
* Total LHP roots = $4 (\text{total}) - 2 (\text{RHP}) = 2$. One is $s=-1$.
* The polynomial $$\frac{D(s)}{A(s)} = \frac{s^4 + s^3 - 3s^2 - s + 2}{-2s^2+2} = -\frac{1}{2}s^2 - \frac{1}{2}s + 1$$
    Roots of $$-\frac{1}{2}s^2 - \frac{1}{2}s + 1 = 0 \implies s^2 + s - 2 = 0 \implies (s+2)(s-1)=0 \implies s=-2, s=1$$
* So the poles are: $s=+1, s=-1, s=-2, s=+1$.
    Poles: $1, 1, -1, -2$. Two in RHP ($1,1$), two in LHP ($-1,-2$). System is **Unstable**.
    ![[example2.png]] (Roots of AE: $\pm 1$)
    ![[example2.1.png]] (Roots of $D(s)/A(s)$ are $1, -2$)

---
#### Odd Row Becomes Zero MORE THAN ONCE
#routh-criteria/special-case/odd-row-more-than-once-zero

> This usually indicates repeated symmetric roots, often on the $j\omega$-axis or repeated at the origin. The procedure is similar: form AE, differentiate, replace, continue.

##### Example
$$\boxed{\quad D(s) = s^6 + 3s^5 + 4s^4 + 6s^3 + 5s^2 + 3s + 2 \quad}$$

| Power   | Coeff 1                         | Coeff 2                         | Coeff 3                         | Coeff 4 | Sign  | Remarks                                                     |
| :------ | :------------------------------ | :------------------------------ | :------------------------------ | :------ | :---- | :---------------------------------------------------------- |
| $$s^6$$ | $$1$$                           | $$4$$                           | $$5$$                           | $$2$$   | $$+$$ |                                                             |
| $$s^5$$ | $$3$$                           | $$6$$                           | $$3$$                           | $$0$$   | $$+$$ | (Can divide by 3: $1, 2, 1, 0$)                             |
| $$s^4$$ | $$\frac{1\cdot4-1\cdot2}{1}=2$$ | $$\frac{1\cdot5-1\cdot1}{1}=4$$ | $$\frac{1\cdot2-1\cdot0}{1}=2$$ | $$0$$   | $$+$$ | (Can divide by 2: $1, 2, 1, 0$) -> **1st AE from this row** |
| $$s^3$$ | $$\frac{1\cdot2-1\cdot2}{1}=0$$ | $$\frac{1\cdot1-1\cdot1}{1}=0$$ | $$0$$                           | $$0$$   |       | *Row of Zeros*                                              |

---
###### 1. First Auxiliary Equation (AE1)
From $s^4$ row (using simplified $1,2,1$): $$A_1(s) = s^4 + 2s^2 + 1 = (s^2+1)^2$$
$$\frac{dA_1(s)}{ds} = 4s^3 + 4s$$
Coefficients are $[4, 4, 0, 0]$. (Can simplify to $[1,1]$ for $s^3, s^1$ terms).

---
###### 2. Continue Routh Table

| Power   | Coeff 1                         | Coeff 2                         | Coeff 3 | Coeff 4 | Sign  | Remarks                      |
| :------ | :------------------------------ | :------------------------------ | :------ | :------ | :---- | :--------------------------- |
| $$s^6$$ | $$1$$                           | $$4$$                           | $$5$$   | $$2$$   | $$+$$ |                              |
| $$s^5$$ | $$1$$                           | $$2$$                           | $$1$$   | $$0$$   | $$+$$ | (Simplified)                 |
| $$s^4$$ | $$1$$                           | $$2$$                           | $$1$$   | $$0$$   | $$+$$ | (Simplified, AE1)            |
| $$s^3$$ | $$1$$                           | $$1$$                           | $$0$$   | $$0$$   | $$+$$ | (From $dA_1/ds$, simplified) |
| $$s^2$$ | $$\frac{1\cdot2-1\cdot1}{1}=1$$ | $$\frac{1\cdot1-1\cdot0}{1}=1$$ | $$0$$   | $$0$$   | $$+$$ | -> **2nd AE from this row**  |
| $$s^1$$ | $$\frac{1\cdot1-1\cdot1}{1}=0$$ | $$0$$                           |         |         |       | *Row of Zeros*               |

---
###### 3. Second Auxiliary Equation (AE2)
From $s^2$ row: $A_2(s) = s^2 + 1$.
$\frac{dA_2(s)}{ds} = 2s$. Coefficients are $[2, 0]$. (Can simplify to $[1,0]$).

---
###### Continue Routh Table

| Power   | Coeff 1                 | Coeff 2 | Coeff 3 | Coeff 4 | Sign  | Remarks                      |
| :------ | :---------------------- | :------ | :------ | :------ | :---- | :--------------------------- |
| ...     | ...                     | ...     | ...     | ...     |       |                              |
| $$s^2$$ | $$1$$                   | $$1$$   | $$0$$   | $$0$$   | $$+$$ | (AE2)                        |
| $$s^1$$ | $$1$$                   | $$0$$   |         |         | $$+$$ | (From $dA_2/ds$, simplified) |
| $$s^0$$ | $(1\cdot1-1\cdot0)/1=1$ |         |         |         | $$+$$ |                              |

---
###### 4. Analysis
* No sign changes in the first column. This implies no roots of $D(s)$ are in the RHP.
* The roots of $A_1(s) = (s^2+1)^2 = 0$ are $s = \pm j, \pm j$ (repeated roots on $j\omega$-axis).
* Since there are no sign changes below the row for $A_1(s)$, all roots of $A_1(s)$ must be on the $j\omega$-axis (which they are).
* The system has repeated poles on the imaginary axis, hence it is **Unstable**.
* The polynomial $$D(s)/A_1(s) = (s^6 + 3s^5 + 4s^4 + 6s^3 + 5s^2 + 3s + 2) / (s^4+2s^2+1) = s^2+3s+2$$
    Roots of $s^2+3s+2=0 \implies (s+1)(s+2)=0 \implies s=-1, s=-2$. (These are in LHP).
* Total poles: $\pm j$ (twice), $-1$, $-2$. Four poles on $j\omega$-axis (repeated), two in LHP.
    ![[example3.png]] (Roots of $A_1(s)$: $\pm j, \pm j$)
    ![[example3.2.png]] (Roots of $D(s)/A_1(s)$ are $-1, -2$)

The presence of $A_2(s)$ and its derivative simply confirms that the roots of $A_1(s)$ (which are $s=\pm j$ repeated) are indeed on the $j\omega$-axis due to no sign changes below.

---
### Related Concepts
#related-concepts 

> [[Routh-Hurwitz Special Case-1]]

[[Routh-Hurwitz Stability Criterion]]
[[Special Cases in Routh Array]]
[[Nyquist Stability Criterion]]