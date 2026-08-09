---
aliases:
  - "Example : Routh Criteria"
---

### RH
#routh-criteria #routh-table #rh-criteria 

$$T(s) = \frac{C(s)}{R(s)} = \frac{N(s)}{D(s)}$$

→ for stability we check denominator polynomial $D(s)$
$$\boxed{D(s) → \text{Roots of }D(s) = \text{Poles of }T(s)}$$

> **Methods of Calculation of Location of Roots for Higher Order Polynomials**

#routh-criteria/higher-order-polynomial/location-of-poles

$$D(s) = a_0s^6 + a_1s^5 + a_2s^4 + a_3s^3 + a_4s^2 + a_5s^1 + a_6$$

![[RH TABLE.png]]
###### Important Observation/Points to Remember
#routh-criteria/rules #routh-table/rules #rh-criteria/rules 

1. If any row of RH Table is multiplied or divided by positive constant → Then result does not change
2. If all the elements of first column is having same sign then → Then no roots will be in RHP
3. If all the coefficient of $1^{st}$ column are having same sign and there is **NO ODD ROW ZERO ROWS** → then all the roots will be in LHP
4. If there is "**ODD ROW**" or "**ODD ROWS**" which is COMPLETELY ZERO → FEW ROOTS will be SYMMETRIC ABOUT ORIGIN
5. The **NUMBER OF SIGN CHANGES** in first column indicates number of roots in RHP

---
##### First Order Polynomial
#routh-criteria/first-order-polynomial/example

$$D(s) = a_1s + a_0 \quad \text{(given: } a_0,a_1 \gt 0\text{)}$$

|         |         |                        |                    |
| ------- | ------- | ---------------------- | ------------------ |
| $$s^1$$ | $$a_1$$ | → Odd row is not zero  | → All roots in LHP |
| $$s^0$$ | $$a_0$$ | → 1st Column same sign |                    |

---
##### Second Order Polynomial
#routh-criteria/second-order-polynomial/example

$$D(s) = a_2s^2 + a_1s + a_0 \quad \text{(given: } a_0,a_1,a_2 \gt 0\text{)}$$

|         |         |                                                 |                    |
| ------- | ------- | ----------------------------------------------- | ------------------ |
| $$s^2$$ | $$a_2$$ |                                                 |                    |
| $$s^1$$ | $$a_1$$ | → Odd row is not zero<br>→ 1st Column same sign | → All roots in LHP |
| $$s^0$$ | $$a_0$$ |                                                 |                    |


---
##### Third Order Polynomial
#routh-criteria/third-order-polynomial/example

$$D(s) = a_0s^3 + a_1s^2 + a_2s^1 + a_3 \quad \text{(given: } a_0,a_1,a_2,a_3 \gt 0\text{)}$$

|         |         |                                                                                        |                                           |
| ------- | ------- | -------------------------------------------------------------------------------------- | ----------------------------------------- |
| $$s^3$$ | $$a_0$$ | $\text{1)}\quad a_1a_2\gt a_0a_3$<br><br>→ If Odd row no zero                          | → All roots in LHP                        |
| $$s^2$$ | $$a_1$$ | $\text{2)}\quad a_1a_2\lt a_0a_3$<br><br>→ If Odd row no zero<br>→ 2 times sign change | → 1LHP + 2RHP                             |
| $$s^1$$ | $$a_2$$ | $\text{3)}\quad a_1a_2 = a_0a_3$<br><br>→If One odd row zero                           | →Few roots will be symmetric about origin |
| $$s^0$$ | $$a_3$$ |                                                                                        |                                           |
|         |         |                                                                                        |                                           |

---
##### ⭕ Special Cases - 1st Element of **any row** becomes 0
#routh-criteria/special-case/single-element-0

==Special Case==

> If 1st element of any row becomes zero while all other elements of that row are not all zero

---
**Question :** $D(s) = 3s^4 + s^3 + 3s^2 + s + 2$

|                 |       | $$s^i$$ | $$s^i$$           | $$s^{i-2}$$ | $$s^{i-4}$$ |                            |                       |
| --------------- | ----- | ------- | ----------------- | ----------- | ----------- | -------------------------- | --------------------- |
|                 | $$+$$ | $$s^4$$ | $$3$$             | $$3$$       | $$2$$       |                            |                       |
|                 | $$+$$ | $$s^3$$ | $$1$$             | $$1$$       | $$0$$       |                            |                       |
| $$\Rightarrow$$ | $$+$$ | $$s^2$$ | $$0$$             | $$2$$       | $$0$$       |                            |                       |
|                 | $$-$$ | $$s^1$$ | $$\frac{d-2}{d}$$ | $$0$$       | $$0$$       | → Sign changes from + to - | → One root in RHP     |
|                 | $$+$$ | $$s^0$$ | $$2$$             |             |             | → Sign changes from - to + | → Another root in RHP |
→ For $0$ assuming $d$ such that : $d\to0^+$
$$\frac{d-2}{d}=1-\frac{2}{d} = 1-\infty=-\infty$$

→ 2 Roots each LHP & RHP

---
##### 🔴 Special Cases - All Elements of **Odd Row becomes 0**
#routh-criteria/special-case/all-element-odd-row-0

> When all the elements of odd row becomes zero

1. [[#1 If odd row becomes zero once.|Odd Row becomes zero ONCE]]
2. [[#1+ If odd row becomes zero more than once or twice.|Odd Row becomes zero MORE THAN ONCE]]

---
###### 1 : If **odd row** becomes **zero once**.
#routh-criteria/special-case/odd-row-zero-once

==Special Case==

---
**Question :** $D(s) = s^4 + s^3 - 3s^2 - s + 2$

|                 |       | $$s^i$$ | $$s^i$$ | $$s^{i-2}$$ | $$s^{i-4}$$ |                                                                         |
| --------------- | ----- | ------- | ------- | ----------- | ----------- | ----------------------------------------------------------------------- |
|                 | $$+$$ | $$s^4$$ | $$1$$   | $$-3$$      | $$2$$       |                                                                         |
|                 | $$+$$ | $$s^3$$ | $$1$$   | $$-1$$      | $$0$$       |                                                                         |
|                 | $$-$$ | $$s^2$$ | $$-2$$  | $$2$$       | $$0$$       | → **Formation of Auxiliary Equation from this row**                     |
| $$\Rightarrow$$ | $$-$$ | $$s^1$$ | $$0$$   | $$0$$       | $$0$$       | → Row elements all zero<br>→ *Few roots will be symmetric about Origin* |
|                 | $$+$$ | $$s^0$$ | $$2$$   |             |             |                                                                         |

---
**Auxiliary Equation (AE)**
#routh-criteria/special-case/auxiliary-equation/formation

→ One Auxiliary Equation formed
$$A(s) = -2s^2+2$$
$$\frac{dA(s)}{ds} = -4s$$
---
**Concept 1** - For Location of Roots
#routh-criteria/special-case/concept-1

> Location

$$\begin{align}
\text{No. of roots on imaginary axis } &= \text{(highest order AE) }-2\times\text{(No. of sign changes below AE)} \\
&= 2 - 2\times1 \\
&= 0
\end{align}
$$
→ Roots in RHP = 2
→ Roots in LHP = 2

---
**Concept 2** - For Exact Values of the Roots
#routh-criteria/special-case/concept-2 

> Exact Value

$A(s)$ is always a factor of $D(s)$ $\implies$ Roots of $A(s)$ = Roots of $D(s)$
Remaining roots/poles using →
$$\boxed{\frac{D(s)}{A(s)} = Q(s) = 0}$$

| First Step is to find Roots of $A(s)$                   | Then find Roots of $\frac{D(s)}{A(s)}$                   |
| ------------------------------------------------------- | -------------------------------------------------------- |
| $$A(s) = -2s^2+2$$ $$-2s^2 + 2 = 0 \implies s = \pm 1$$ | $$\frac{D(s)}{A(s)} = 0$$$$-s^2-s+2 \implies s = 1, -2$$ |
| ![[example2.png]]                                       | ![[example2.1.png]]                                      |

---
###### 1+ : If **odd row** becomes **zero more than once**
#routh-criteria/special-case/odd-row-more-than-once-zero

==Special Case==

---
**Question :** $D(s) = s^6 + 3s^5 + 4s^4 + 6s^3 + 5s^2 + 3s + 2$

|                 |       | $$s^i$$ | $$s^i$$ | $$s^{i-2}$$ | $$s^{i-4}$$ | $$s^{i-6}$$ |                                                  |
| --------------- | ----- | ------- | ------- | ----------- | ----------- | ----------- | ------------------------------------------------ |
|                 | $$+$$ | $$s^6$$ | $$1$$   | $$4$$       | $$5$$       | $$2$$       |                                                  |
|                 | $$+$$ | $$s^5$$ | $$1$$   | $$2$$       | $$1$$       | $$0$$       |                                                  |
|                 | $$+$$ | $$s^4$$ | $$1$$   | $$2$$       | $$1$$       | $$0$$       | → **1st AE**                                     |
| $$\Rightarrow$$ | $$+$$ | $$s^3$$ | $$0$$   | $$0$$       | $$0$$       | $$0$$       | → *Few roots will be symmetric about Origin*     |
|                 | $$+$$ | $$s^2$$ | $$1$$   | $$1$$       | $$0$$       | $$0$$       | → **2nd AE**                                     |
| $$\Rightarrow$$ | $$+$$ | $$s^1$$ | $$0$$   | $$0$$       |             |             | → *Few roots will be symmetric about Origin*<br> |
|                 | $$+$$ | $$s^0$$ | $$1$$   |             |             |             |                                                  |

---
**Auxiliary Equations (AE)**
#routh-criteria/special-case/auxiliary-equation/formation 

→ Two Auxiliary Equation formed
$$A_1(s) = s^4 + 2s^2 + 1 \quad \quad A_2(s) = s^2 + 1$$
$$\frac{dA_1(s)}{ds} = 4s^3 + 4s \quad \quad \frac{dA_2(s)}{ds} = 2s$$
→ $A_2(s)$, The Second Auxiliary Equation and its Derivative is **REDUNDANT**, it is only used to continue the table.

---
**Concept 1** - For Location of Roots
#routh-criteria/special-case/concept-1 

→ Imaginary Axis $= 4-2\times(0) = 4$
→ RHP $= 0$
→ LHP $= 2$

---
**Concept 2** - For Exact Values of the Roots
#routh-criteria/special-case/concept-2 

| First Step is to find Roots of $A_1(s)$                          | Then find Roots of $\frac{D(s)}{A_1(s)}$                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| $$A_1(s) = s^4 + 2s^2 + 1$$$$(s^2+1)^2 = 0$$$$s = \pm j, \pm j$$ | $$\frac{D(s)}{A_1(s)} = s^2 + 3s + 2$$$$s^2 + 3s + 2 = 0$$<br>$$s = -1, -2$$ |
| ![[example3.png]]                                                | ![[example3.2.png]]                                                          |


