---
original: "[[ee_2023.pdf]]"
question paper: "[[ee_2023]]"
question: "[[ee_2023#^q47]]"
tags:
  - "#example/ssl/synchronous-motor"
aliases:
  - "Example : Static Stability Limit (Synchronous Motor Excitation Voltage)"
---
### Static Stability Limit Example

![[ee_2023#^q47]]

---
### Solution (step-by-step)

To find the excitation voltage ($E_f$) of the synchronous motor at its static stability limit, we use the power-flow equations for a synchronous machine with armature resistance.

---
#### 1. Given Parameters (per unit)

* **Synchronous Impedance ($Z_s$):** $0.1 + j0.3 \text{ p.u.}$
    * Armature Resistance ($R_a$): $0.1 \text{ p.u.}$
    * Synchronous Reactance ($X_s$): $0.3 \text{ p.u.}$
* **Static Stability Limit ($P_{max}$):** $2.5 \text{ p.u.}$
* **Terminal Voltage ($V$):** $1.0 \angle 0^\circ \text{ p.u.}$ (Assumed standard)

---
#### 2. Magnitude of Synchronous Impedance

First, we calculate the magnitude $|Z_s|$ and its square:
$$|Z_s| = \sqrt{R_a^2 + X_s^2} = \sqrt{0.1^2 + 0.3^2} = \sqrt{0.01 + 0.09} = \sqrt{0.1}$$
$$|Z_s|^2 = 0.1$$

---
#### 3. Maximum Power Formula

The static stability limit (maximum mechanical power developed) for a synchronous motor is given by:
$$P_{max} = \frac{V \cdot E_f}{|Z_s|} - \frac{E_f^2 \cdot R_a}{|Z_s|^2}$$

---
#### 4. Calculation of Excitation Voltage ($E_f$)

Substitute the known values into the equation:
$$2.5 = \frac{1.0 \cdot E_f}{\sqrt{0.1}} - \frac{E_f^2 \cdot 0.1}{0.1}$$

Simplify the coefficients:
* $\frac{1}{\sqrt{0.1}} = \sqrt{10} \approx 3.1623$
* $\frac{0.1}{0.1} = 1$

The equation becomes:
$$2.5 = 3.1623 E_f - E_f^2$$

Rearrange into a standard quadratic equation ($ax^2 + bx + c = 0$):
$$E_f^2 - 3.1623 E_f + 2.5 = 0$$

Using the quadratic formula $E_f = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$$E_f = \frac{3.1623 \pm \sqrt{(3.1623)^2 - 4(1)(2.5)}}{2(1)}$$
$$E_f = \frac{3.1623 \pm \sqrt{10 - 10}}{2}$$
$$E_f = \frac{3.1623 \pm 0}{2}$$
$$E_f = 1.58115$$

---
#### Answer

**The excitation voltage in per unit is 1.58.**