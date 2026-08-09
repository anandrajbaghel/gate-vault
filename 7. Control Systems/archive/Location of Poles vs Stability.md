### Location of Poles v/s Stability
#location-of-poles #stability 

---
##### Case - 1 : LHS
#location-of-poles/lhs
###### 1. All poles in LHS
![[Location of Poles vs Stability Case - 1.png]]

###### 2. All poles in LHS

![[Location of Poles vs Stability Case - 2.png]]

###### 3. All poles in LHS

![[Location of Poles vs Stability Case - 3.png]]

---
##### Case - 2 : RHS
#location-of-poles/rhs
###### 1. Atleast one pole in RHS

![[Location of Poles vs Stability Case - 4.png]]

###### 2. One or more poles in RHS


|                                                   |                                                   |
| ------------------------------------------------- | ------------------------------------------------- |
| ![[Location of Poles vs Stability Case - 5a.png]] | ![[Location of Poles vs Stability Case - 5b.png]] |
| ![[Location of Poles vs Stability Case - 5c.png]] | ![[Location of Poles vs Stability Case - 5d.png]] |

---
##### Case - 3 : Origin
#location-of-poles/origin
###### 1. One pole on Origin

![[Location of Poles vs Stability Case - 6.png]]
$$H(s) = \frac{1}{s} \leftrightarrow h(t) = u(t)$$
→ Power signal → Marginal Stable
###### 2. Multiple pole on Origin

![[Location of Poles vs Stability Case - 7.png]]

$$H(s) = \frac{1}{s^2} \leftrightarrow h(t) = tu(t)$$
$$\int_{-\infty}^{\infty}|h(t)|dt → \infty$$
→ higher energy nor power → unstable system

---
##### Case - 4 : Imaginary Axis
#location-of-poles/imaginary-axis 
###### 1. Non-Repeated poles on Imaginary Axis

![[Location of Poles vs Stability Case - 8.png]]

###### 2. Non-Repeated poles on Imaginary Axis

![[Location of Poles vs Stability Case - 9.png]]

###### 3. Repeated poles on Imaginary Axis

![[Location of Poles vs Stability Case - 10.png]]

---
##### First Order Polynomial
#first-order-polynomial/location-of-poles

$$D(s) = a_0s^1 + a_1$$

$a_0, a_1 \gt 0$ → all roots in LHP
$a_0, a_1 \lt 0$ → all roots in RHP

---

##### Second Order Polynomial
#second-order-polynomial/location-of-poles

$$D(s) = a_0s^2 + a_1s^1 + a_2$$

$a_0, a_1, a_2 \gt 0$ → all roots in LHP
$a_0, a_1, a_2 \lt 0$ → all roots in RHP

---

##### Third Order Polynomial
#third-order-polynomial/location-of-poles
$$D(s) = a_0s^3 + a_1s^2 + a_2s^1 + a_3$$
$a_0,a_1,a_2,a_3 \gt 0$
→ 3 Real roots → All roots in LHP

$a_0,a_1,a_2,a_3 \gt 0$
→ 1 Real root → LHP
→ 2 Complex roots → **DO NOT KNOW**

---