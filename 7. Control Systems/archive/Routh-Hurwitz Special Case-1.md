---
tags:
  - routh-hurwitz/special-case-1
created: 2025-10-29
aliases:
  - "First Element of a Row is Zero : Routh-Hurwitz"
  - "Example : Routh-Hurwitz Special Case 1 : First Element of a Row is Zero"
  - Epsilon Method
subject: "[[Control Systems]]"
parent: Stability Criteria
modified: 2026-07-19
---
### First Element of a Row is Zero (but not entire row)
#routh-criteria/special-case/single-element-0

> If the first element of any row (say, $s^k$ row) becomes zero, while other elements in that row are not all zero.

**Method:** ==Replace the zero with a small positive quantity $\epsilon$, complete the Routh array, and then analyze the signs in the first column by letting $\epsilon \to 0^+$.==

#### Example
$$\boxed{\quad D(s) = 3s^4 + s^3 + 3s^2 + s + 2 \quad}$$

| Power   | Coeff 1                                                                            | Coeff 2                                         | Coeff 3 | Sign (as $\epsilon \to 0^+$) |
| ------- | ---------------------------------------------------------------------------------- | ----------------------------------------------- | ------- | ---------------------------- |
| $$s^4$$ | $$3$$                                                                              | $$3$$                                           | $$2$$   | $$+$$                        |
| $$s^3$$ | $$1$$                                                                              | $$1$$                                           | $$0$$   | $$+$$                        |
| $$s^2$$ | $$\frac{1\cdot3-3\cdot1}{1} = 0 \to \epsilon$$                                     | $$\frac{1\cdot2-3\cdot0}{1} = 2$$               | $$0$$   | $$+$$                        |
| $$s^1$$ | $$\frac{\epsilon\cdot1-1\cdot2}{\epsilon} = 1-\frac{2}{\epsilon}$$                 | $$\frac{\epsilon\cdot0-1\cdot0}{\epsilon} = 0$$ | $$0$$   | $$-$$                        |
| $$s^0$$ | $$\frac{(1-\frac{2}{\epsilon})\cdot2 - \epsilon\cdot0}{1-\frac{2}{\epsilon}} = 2$$ |                                                 |         | $$+$$                        |

###### Analysis
*   $s^4: +$
*   $s^3: +$
*   $s^2: +$ (as $\epsilon \to 0^+$)
*   $s^1: -$ (sign change from $s^2$ to $s^1$)
*   $s^0: +$ (sign change from $s^1$ to $s^0$)

There are **two sign changes** in the first column. Therefore, there are **two roots in the RHP** (unstable system). The remaining $4-2=2$ roots are in the LHP.

---
### Related Concepts
#related-concepts 

> [[Routh-Hurwitz Special Case-2]]

[[Routh-Hurwitz Stability Criterion]]
[[Special Cases in Routh Array]]
[[Nyquist Stability Criterion]]