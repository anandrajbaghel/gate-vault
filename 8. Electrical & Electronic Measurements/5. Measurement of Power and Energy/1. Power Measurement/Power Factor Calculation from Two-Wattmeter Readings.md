---
tags:
  - measurements
  - power-measurement
  - power-factor
  - two-wattmeter-method
  - gate
created: 2025-10-18
aliases:
  - PF from Wattmeter Readings
  - Power Factor from W1 and W2
subject: "[[Electrical & Electronic Measurements]]"
parent: "[[Blondel's Theorem and the Two-Wattmeter Method]]"
formula:
  - "Power Factor (Two-Wattmeter Readings) : $$\\tan(\\phi) = \\sqrt{3} \\frac{W_2 - W_1}{W_1 + W_2} \\implies \\text{Power Factor} = \\cos(\\phi)$$"
modified: 2026-08-04T10:15:27
---
### Power Factor Calculation from Two-Wattmeter Readings
#power-factor #two-wattmeter-method #calculation

> In a balanced three-phase system, the readings from the two-wattmeter method not only provide the total active power but can also be used to determine the power factor angle ($\phi$) and the power factor ($\cos\phi$) of the load. This is achieved by analyzing the sum and difference of the two wattmeter readings.

#### Derivation of the Power Factor Formula
#power-factor-derivation

For a balanced, star-connected, inductive load with phase sequence R-Y-B, the readings of the two wattmeters are given by:
- Reading of Wattmeter 1 (in Line R): ![[Measurement of Power in Three-Phase Circuits#^wattmeter1-reading]]
- Reading of Wattmeter 2 (in Line B): ![[Measurement of Power in Three-Phase Circuits#^wattmeter2-reading]]

where $\phi$ is the power factor angle of the load (lagging).

1.  **Sum of the Readings:**
    The sum gives the total active power ($P_T$): ![[Measurement of Power in Three-Phase Circuits#^total-active-power]]

2.  **Difference of the Readings:**
    The difference is related to the total reactive power ($Q_T$):
    $$ W_2 - W_1 = V_L I_L \sin(\phi) $$

3.  **Ratio of Difference to Sum:**
    By dividing the difference by the sum, we can isolate $\tan(\phi)$:
    $$ \frac{W_2 - W_1}{W_1 + W_2} = \frac{V_L I_L \sin(\phi)}{\sqrt{3} V_L I_L \cos(\phi)} = \frac{\tan(\phi)}{\sqrt{3}} $$
    Rearranging this gives the key formula for the power factor angle:

$$\boxed{\quad \tan(\phi) = \sqrt{3} \frac{W_2 - W_1}{W_1 + W_2} \quad}$$
^tan

Once $\phi$ is calculated, the power factor is found by:

$$\boxed{\quad \text{Power Factor} = \cos(\phi) \quad}$$
^pf

> See [[ee_2018#^q5]]

> [!warning] Critical Condition: Balanced Load
> It is absolutely essential to remember that these formulas for reactive power and power factor are **only valid for a balanced load**.
> * **Reason**: The individual wattmeter reading formulas ($W_1 = V_L I_L \cos(30^\circ - \phi)$ and $W_2 = V_L I_L \cos(30^\circ + \phi)$) are derived based on the symmetrical phasor relationships that only exist in a balanced system.
> * ==While $P_{3\phi} = W_1 + W_2$ is true for both balanced and unbalanced loads, the relationship for reactive power, $Q_{3\phi} = \sqrt{3}(W_1 - W_2)$, is not. Therefore, any power factor calculation based on it is also restricted to balanced loads.==

---

#### Step-by-Step Calculation
1.  **Obtain Readings:** Record the values of $W_1$ and $W_2$. If one meter deflects backward, its connections are reversed to get a reading, and this value is treated as **negative**.
2.  **Calculate Sum & Difference:** Compute the algebraic sum ($W_1+W_2$) and the difference ($W_2-W_1$).
3.  **Calculate $\tan(\phi)$:** Substitute the sum and difference into the formula.
4.  **Find Angle $\phi$**: Calculate $\phi = \arctan\left(\sqrt{3} \frac{W_2 - W_1}{W_1 + W_2}\right)$.
5.  **Find Power Factor:** Calculate $\cos(\phi)$.

---

#### Interpretation of Readings for Power Factor Determination
The relationship between the two wattmeter readings provides a quick way to determine the power factor of a balanced load.

| Condition                      | Power Factor Angle ($\phi$) | Power Factor ($\cos\phi$) |
| ------------------------------ | --------------------------- | ------------------------- |
| $W_1 = W_2$ (Both positive)    | $0^\circ$                   | 1 (Unity)                 |
| $W_2 > W_1$ (Both positive)    | $0^\circ < \phi < 60^\circ$ | $1 > \text{PF} > 0.5$     |
| $W_1 = 0$, $W_2 > 0$           | $60^\circ$                  | 0.5                       |
| $W_1$ is negative, $W_2$ is positive | $60^\circ < \phi < 90^\circ$ | $0.5 > \text{PF} > 0$      |
| $W_1 = -W_2$                   | $90^\circ$                  | 0 (Zero)                  |

**Note on Lagging vs. Leading PF:**
-   For a **lagging** power factor, $W_2 > W_1$.
-   For a **leading** power factor, the roles of the wattmeters are swapped, so $W_1 > W_2$. The formula magnitude remains the same.
-   Therefore, if $W_2 - W_1$ is positive, the load is inductive (lagging). If it's negative, the load is capacitive (leading).

---

### Related Concepts
#topic/related-concepts

> [[Blondel's Theorem and the Two-Wattmeter Method]]

[[Measurement of Power in Three-Phase Circuits]]
[[Power Factor]]
[[Three-Phase Circuits]]
[[Phasor Diagram]]
[[Electrodynamometer Wattmeter]]
