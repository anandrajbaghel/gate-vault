---
tags:
  - steady-state-error/non-unity-feedback-system
created: 2025-07-23
aliases:
  - Error at Summer Output (Nagrath Gopal's approach)
  - Error as R(s) - C(s) (Norman Nise's approach)
  - Actuating Error with Reference Adjustment (B.C. Kuo's approach)
  - Non-Unity Feedback System Error Calculations
subject:
  - "[[Control Systems]]"
parent:
  - "[[Steady-State Error]]"
modified: 2026-07-23T07:53:54
---
### Steady State Error ($e_{ss}$) for Non-Unity Feedback System
#steady-state-error/non-unity-feedback-system 

In non-unity feedback systems, the feedback transfer function $H(s)$ is not equal to $1$. The definition of "error" can vary, leading to different formulas.

![[error2.png]]

Common approaches to defining and calculating error:
1.  Error at the summer output ($E_a(s)$, often called actuating error).
2.  Error as $R(s) - C(s)$.
3.  Error as $R_{ref}(s) - C(s)$ where $R_{ref}(s)$ is the equivalent reference input if $H(0) \neq 1$.

---
#### Calculation of Steady State Error for Non-Unity Feedback
#steady-state-error/non-unity-feedback-system/calculation 

##### 🔥Method 1: Error at Summer Output (Nagrath Gopal's approach)
#steady-state-error/non-unity-feedback-system/nagrath-gopal 

Here, ==the error $E_a(s)$ is the direct output of the summing junction==: $$\boxed{\quad E_a(s) = R(s) - B(s) = R(s) - C(s)H(s) \quad}$$
The [[Closed-Loop Transfer Function (CLTF)|closed-loop transfer function]] is $\frac{C(s)}{R(s)} = \frac{G(s)}{1+G(s)H(s)}$, so $$C(s) = R(s)\frac{G(s)}{1+G(s)H(s)}$$
Substituting $C(s)$:
$$E_a(s) = R(s) - R(s)\frac{G(s)H(s)}{1+G(s)H(s)} = R(s)\left[1 - \frac{G(s)H(s)}{1+G(s)H(s)}\right]$$
$$\boxed{\quad E_a(s) = R(s) \frac{1}{1+G(s)H(s)} \quad}$$
The steady-state actuating error $e_{a,ss}$ is:
$$\boxed{\quad e_{a,ss} = \lim_{s\to0}sE_a(s) = \lim_{s\to0}\frac{sR(s)}{1+G(s)H(s)}\quad}$$

> [!pyq]- PYQ : 2021
> ![[ee_2021#^q11]]

> [!memory] Condition 
> All poles of $\frac{sR(s)}{1+G(s)H(s)}$ must be in the LHP (i.e., the closed-loop system is stable).
> 
> ==This is the **default method** if "error" is not explicitly defined otherwise for a non-unity feedback system.==

---
##### Method 2: Error as $R(s) - C(s)$ (Norman Nise's approach)
#steady-state-error/non-unity-feedback-system/norman-nise 

Here, error $e(t)$ is defined as $e(t) = r(t) - c(t)$, so $E(s) = R(s) - C(s)$.
Let $T(s) = \frac{C(s)}{R(s)} = \frac{G(s)}{1+G(s)H(s)}$ be the closed-loop transfer function.
Then $C(s) = R(s)T(s)$.
$$\begin{align}
E(s) &= R(s) - R(s)T(s) \\
&= R(s)[1 - T(s)]
\end{align}$$
The steady-state error $e_{ss}$ is:
$$e_{ss} = \lim_{s\to0}sE(s) = \lim_{s\to0}sR(s)[1 - T(s)]$$
$$\boxed{\quad e_{ss} = \lim_{s\to0}sR(s)\left[1 - \frac{G(s)}{1+G(s)H(s)}\right] = \lim_{s\to0}sR(s)\left[\frac{1+G(s)H(s) - G(s)}{1+G(s)H(s)}\right]\quad}$$

> [!memory] Condition 
> All poles of $sR(s)[1-T(s)]$ must be in the LHP.

Alternatively, one can find an equivalent forward path transfer function $G'(s)$ for an equivalent unity feedback system:

![[error3.png]]

If we want $\frac{G(s)}{1+G(s)H(s)} = \frac{G'(s)}{1+G'(s)}$, then solving for $G'(s)$ gives:
$$\boxed{\quad G'(s) =\frac{G(s)}{1+G(s)H(s) - G(s)}\quad}$$
Then, the error $E(s) = R(s) - C(s)$ can be found using the unity feedback formula with $G'(s)$:
$$e_{ss} = \lim_{s\to0}\frac{sR(s)}{1+G'(s)}$$
Substituting $G'(s)$ leads to the same result as above.

---
##### Method 3: Actuating Error with Reference Adjustment (B.C. Kuo's approach)
#steady-state-error/non-unity-feedback-system/bc-kuo 

This approach considers the error $e(t)$ to be the difference between an "ideal" or "effective" reference input and the system output $c(t)$, especially when $H(s)$ has a non-unity DC gain ($H(0) \neq 1$).
The premise is that $e(t) = r_{ideal}(t) - c(t)$.
![[error4.png]]
Let the error signal be defined relative to the input of the controller, often considered as $R'(s)$ such that $R'(s)H(s)$ is the desired output value that $C(s)$ should track. This often simplifies to $e(t) = \frac{1}{k_H}r(t) - c(t)$ in steady state if $H(0)=k_H$.
The error is generally $e(t) = \text{reference signal} - c(t)$.
Let $k_H = \lim_{s\to0}H(s)$. If $H(s)$ has no zeros at the origin, $k_H = H(0)$.
If $H(s) = s^N F(s)$ where $F(0) \neq 0$, then $k_H = \lim_{s\to0}F(s)$.

###### Case 1: $H(s)$ has no zero at the origin ($H(0) = k_H \neq 0$)
#steady-state-error/non-unity-feedback-system/bc-kuo/case1 

The error is considered as $e(t) = \frac{r(t)}{k_H} - c(t)$ or more generally, the error $e(t)$ leads to $e_{ss}$ computed as:
$$\boxed{\quad e_{ss} = \lim_{s\to0}\frac{sR(s)}{k_H}(1-k_HT(s))\quad}$$
where $k_H = H(0) = \lim_{s\to0}H(s)$ and $T(s) = \frac{C(s)}{R(s)} = \frac{G(s)}{1+G(s)H(s)}$.
**Condition:** All poles of $\frac{sR(s)}{k_H}(1-k_HT(s))$ must be in LHP.

This can be interpreted as: for $c(t)$ to perfectly track $r(t)$ in steady state, the actuating error $E_a(s) = R(s) - C(s)H(s)$ would need $R(s) \approx C(s)H(s)$. If $C(s) \approx R(s)$, then $E_a(s) \approx R(s)(1-H(s))$. If $H(0) \neq 1$, there will be an inherent error. Kuo's method adjusts the reference.

###### Case 2: $H(s)$ has an $N^{th}$ order zero at the origin ($H(s) = s^N F(s)$, with $F(0) \neq 0$)
#steady-state-error/non-unity-feedback-system/bc-kuo/case2 

Here, $H(0) = 0$. The previous formula for $k_H$ would lead to division by zero.
Let $k_F = \lim_{s\to0}F(s)$.
The steady-state error is:
$$\boxed{\quad e_{ss} = \lim_{s\to0}\frac{sR(s)}{s^N k_F}(1-s^N k_F T(s))\quad}$$
where $k_F = \lim_{s\to0} \frac{H(s)}{s^N}$.
**Condition:** All poles of $\frac{sR(s)}{s^N k_F}(1-s^N k_F T(s))$ must be in LHP.

---
#### Summary of Non-Unity Feedback Error Calculations
#steady-state-error/non-unity-feedback-system/summary 

The choice of formula depends on how "error" is defined for the specific problem:

1.  **Error at summer output ($E_a(s) = R(s) - B(s)$):**
	==Default method if not specified==
	$$\boxed{\quad e_{a,ss} = \lim_{s\to0}\frac{sR(s)}{1+G(s)H(s)}\quad}$$
2.  **Error as $E(s) = R(s) - C(s)$:** $$\boxed{\quad e_{ss} = \lim_{s\to0}sR(s)[1-T(s)] = \lim_{s\to0}sR(s)\left[1 - \frac{G(s)\quad}{1+G(s)H(s)}\right]}$$
3.  **Error considering feedback gain $H(0)$ (Kuo's $e(t) = \text{ref} - c(t)$):**
- If $H(0)=k_H \neq 0$
$$\boxed{\quad e_{ss} = \lim_{s\to0} \frac{sR(s)}{k_H}[1-k_HT(s)]\quad}$$
- If $H(s)=s^N F(s)$ with $F(0)=k_F \neq 0$
$$\boxed{\quad e_{ss} = \lim_{s\to0} \frac{sR(s)}{s^N k_F}[1-s^N k_F T(s)]\quad}$$


---
### Related Concepts
#steady-state-error/related-concepts

> [[Steady-State Error]]

[[Static Error Constants]]
[[Error Analysis for different System Types (Type 0, 1, 2)]]
[[Generalized Error Series]]

