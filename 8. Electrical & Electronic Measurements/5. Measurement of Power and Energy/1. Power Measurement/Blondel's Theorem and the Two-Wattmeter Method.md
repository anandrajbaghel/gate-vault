---
tags:
  - measurements
  - power-measurement
  - three-phase
  - wattmeter
  - gate
created: 2025-10-18
aliases:
  - Blondel's Theorem
  - 2-Wattmeter Method
  - Two Wattmeter Method of Power Measurement
subject: "[[Electrical & Electronic Measurements]]"
parent: "[[Measurement of Power in Three-Phase Circuits]]"
modified: 2026-08-04T09:14:08
---
### Blondel's Theorem and the Two-Wattmeter Method
#blondels-theorem #two-wattmeter-method #power-measurement

> Blondel's theorem provides the theoretical foundation for measuring power in any polyphase system. Its most important practical application is the **[[Measurement of Power in Three-Phase Circuits|two-wattmeter method]]**, a versatile technique for accurately measuring the total power in any three-phase, three-wire system, regardless of load balance or connection type.

#### Blondel's Theorem
#blondels-theorem

The theorem states that if a network is supplied by '$n$' conductors, the total power supplied to the network can be measured by summing the readings of '$n-1$' wattmeters.

The wattmeters are connected such that:
- Each of the '$n-1$' conductors has one current coil connected in it.
- The corresponding potential coil of each wattmeter is connected between its own conductor and the remaining 'n'th conductor, which serves as a common point for all potential coils.

**Consequences for 3-Phase Systems:**

- **3-Phase, 4-Wire System (e.g., Star with neutral):** Here, $n=4$. According to the theorem, $n-1 = 3$ wattmeters are required.
- **3-Phase, 3-Wire System (e.g., Star without neutral, or Delta):** Here, $n=3$. The theorem dictates that $n-1 = 2$ wattmeters are sufficient to measure the total power.

---

#### The Two-Wattmeter Method
#two-wattmeter-method

This method is the direct application of Blondel's theorem to a 3-phase, 3-wire system.

##### Connection and Principle
The current coils of two wattmeters ($W_1$ and $W_2$) are connected in any two of the three lines (e.g., lines R and B). The potential coil of each wattmeter is connected from its own line to the third line (line Y), which is the common point.

The fundamental principle is that the total average power consumed by the load at any instant is the algebraic sum of the readings of the two wattmeters. This holds true for both balanced and unbalanced loads.
$$\boxed{\quad P_{Total} = W_1 + W_2 \quad}$$
This is an **algebraic sum**. If one wattmeter gives a negative reading, it must be subtracted.

##### Analysis for Balanced Loads
For a balanced 3-phase load with line voltage $V_L$, line current $I_L$, and a lagging power factor angle $\phi$, the individual wattmeter readings can be expressed as:
$$\boxed{\quad W_1 = V_L I_L \cos(30^\circ + \phi) \quad}$$
$$\boxed{\quad W_2 = V_L I_L \cos(30^\circ - \phi) \quad}$$

##### Power and Power Factor Calculation from Readings
By manipulating these two equations, we can determine the total active power, reactive power, and the power factor of the balanced load.

1.  **Total Active Power (P):**
    $P = W_1 + W_2 = V_L I_L[\cos(30^\circ + \phi) + \cos(30^\circ - \phi)] = \sqrt{3} V_L I_L \cos(\phi)$. This confirms the fundamental result.

2.  **Total Reactive Power (Q):**
    $W_2 - W_1 = V_L I_L[\cos(30^\circ - \phi) - \cos(30^\circ + \phi)] = V_L I_L \sin(\phi)$.
    The total 3-phase reactive power is $Q = \sqrt{3} V_L I_L \sin(\phi)$. Therefore:
    $$\boxed{\quad Q_{Total} = \sqrt{3} (W_2 - W_1) \quad}$$

3.  **Power Factor Angle ($\phi$) and Power Factor ($\cos\phi$):**
    Dividing the expression for reactive power by the one for active power:
    $$ \tan(\phi) = \frac{Q}{P} = \frac{\sqrt{3}(W_2-W_1)}{W_1+W_2} $$
    $$\boxed{\quad \tan(\phi) = \sqrt{3} \frac{W_2 - W_1}{W_1 + W_2} \quad}$$
    From this, the power factor angle $\phi$ can be calculated, and subsequently the power factor $\cos(\phi)$.

##### Interpretation of Readings (for Balanced Load)
- **If Power Factor = 1 (UPF):** $\phi=0^\circ$. $W_1 = W_2$. Both readings are positive and equal.
- **If Power Factor = 0.5 lag:** $\phi=60^\circ$. $W_1 = V_L I_L \cos(90^\circ) = 0$. The total power is read by $W_2$ alone.
- **If Power Factor < 0.5 lag:** $\phi > 60^\circ$. The term $(30^\circ+\phi)$ becomes greater than $90^\circ$, so $\cos(30^\circ+\phi)$ is negative. $W_1$ will give a negative reading. To measure it, the connections of its current coil (or potential coil) must be reversed, and the reading is treated as negative in the calculations.
- **If Power Factor = 0 (ZPF):** $\phi=90^\circ$. $W_1 = -W_2$. The readings are equal and opposite, and the total power is $P = W_1+W_2=0$.

---

### Related Concepts
#topic/related-concepts

> [[Measurement of Power in Three-Phase Circuits]]

[[Electrodynamometer Wattmeter]]
[[Power Factor]]
[[Three-Phase Circuits]]
[[Phasor Diagram]]
[[Errors in Wattmeter Measurement and Compensation]]
