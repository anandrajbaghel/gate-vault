---
original: "[[ee_2023.pdf]]"
question paper: "[[ee_2023]]"
question: "[[ee_2023#^q47]]"
aliases:
  - "Example : Synchronous Motor Excitation Voltage Calculation"
tags:
  - example/synchronous-motor-excitation-voltage-calculation
---
### Synchronous Motor Excitation Voltage Calculation Example

![[ee_2023#^q47]]

---
#### Solution (step-by-step)
##### Step 1: Identify Given Parameters

1. Synchronous Impedance ($Z_s$): $0.1 + j0.3$ per unit (p.u.)
2. Static Stability Limit ($P_{max}$): $2.5$ p.u.
3. Terminal Voltage ($V$): We assume the terminal voltage is at the reference value, so $V = 1.0$ p.u.
4. $R_a = 0.1$ p.u.
5. $X_s = 0.3$ p.u.

##### Step 2: Determine the Correct Formula

The "static stability limit" refers to the maximum developed mechanical power ($P_{dev,max}$) that the motor can produce before it loses synchronism. When the armature resistance ($R_a$) is considered, the formula for the developed power is:

$$P_{dev} = \frac{EV}{|Z_s|}\cos(\delta - \theta) - \frac{E^2}{|Z_s|}\cos(\theta)$$

where:
*   $E$ is the excitation voltage.
*   $\delta$ is the power angle.
*   $|Z_s|$ is the magnitude of the synchronous impedance.
*   $\theta$ is the angle of the synchronous impedance.

Maximum power is developed when the term $\cos(\delta - \theta) = 1$, which occurs when $\delta = \theta$. Therefore, the formula for the static stability limit is:

$$P_{max} = \frac{EV}{|Z_s|} - \frac{E^2 R_a}{|Z_s|^2}$$

Note: $\cos(\theta) = \frac{R_a}{|Z_s|}$

##### Step 3: Calculate Impedance Magnitude

Next, we calculate the magnitude of the synchronous impedance, $|Z_s|$: $$|Z_s| = \sqrt{R_a^2 + X_s^2} = \sqrt{0.1^2 + 0.3^2} = \sqrt{0.01 + 0.09} = \sqrt{0.1} \text{ p.u.}$$
So, $|Z_s|^2 = 0.1$ p.u.

##### Step 4: Solve for Excitation Voltage (E)

Now, we substitute the known values into the static stability limit formula:

$$\begin{align}
2.5 &= \frac{E \times 1.0}{\sqrt{0.1}} - \frac{E^2 \times 0.1}{0.1} \\
2.5 &= \frac{E}{\sqrt{0.1}} - E^2
\end{align}$$

To solve for $E$, we rearrange this into a standard quadratic equation of the form $$ax^2 + bx + c = 0$$
$$E^2 - \left(\frac{1}{\sqrt{0.1}}\right)E + 2.5 = 0$$

We can solve this using the quadratic formula, $E = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
*   $a = 1$
*   $b = -\frac{1}{\sqrt{0.1}} \approx -3.162$
*   $c = 2.5$

First, calculate the discriminant ($b^2 - 4ac$):
$$b^2 - 4ac = \left(-\frac{1}{\sqrt{0.1}}\right)^2 - 4(1)(2.5) = \frac{1}{0.1} - 10 = 10 - 10 = 0$$

Since the discriminant is zero, there is a single unique solution for $E$:
$$E = \frac{-b}{2a} = \frac{-(-1/\sqrt{0.1})}{2(1)} = \frac{1}{2\sqrt{0.1}}$$$$E = \frac{1}{2 \times 0.316227...} = \frac{1}{0.632455...} \approx 1.5811 \text{ p.u.}$$ 
---
##### Answer

The correct numerical value is $1.58 \text{ p.u.}$
