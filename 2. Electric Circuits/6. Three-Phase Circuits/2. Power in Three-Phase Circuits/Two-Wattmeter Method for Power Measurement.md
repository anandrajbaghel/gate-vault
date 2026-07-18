---
tags:
  - electrical-measurements
  - power-measurement
  - three-phase
  - ac-circuits
created: 2025-08-01
aliases:
  - Two Wattmeter Method
  - 3-Phase Power Measurement
  - Blondel's Theorem
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - Power Measurement
confidence: 9
---
### Two-Wattmeter Method for 3-Phase Power Measurement
#two-wattmeter-method #power-measurement #three-phase #blondels-theorem

> The **Two-Wattmeter Method** is the most common and versatile method ==for measuring the total active power in a three-phase, three-wire system==. ==Its major advantage is that it provides the correct total power for **any load condition**, whether it is balanced or unbalanced, and regardless of whether the load is star (Y) or delta (Δ) connected.==

> [!memory] Application of Blondel's Theorem
> The method is a direct application of **[[Blondel's Theorem and the Two-Wattmeter Method|Blondel's Theorem]]**, which states that the total power in a system with '$N$' conductors can be measured using '$N-1$' wattmeters. For a 3-phase, 3-wire system, $N=3$, so $N-1=2$ wattmeters are required.

---
#### Circuit Connection
#two-wattmeter-method/connection

![[Two-Wattmeter Method for Power Measurement Circuit.png]]

The connection is made as follows:
*   The **Current Coils (CC)** of the two wattmeters ($W_1$ and $W_2$) are connected in series with any two of the three lines (e.g., R-phase and Y-phase).
*   The **Potential Coils (PC)** of each wattmeter are connected between the line containing its own current coil and the third line (the B-phase in this example), which acts as the common point.

---
#### Principle and Power Formulas
#two-wattmeter-method/formulas

The instantaneous total power in the 3-phase system is the sum of the instantaneous powers in each phase ($p_R + p_Y + p_B$). It can be proven that the sum of the instantaneous readings of the two wattmeters is exactly equal to this total instantaneous power. Therefore, the average total power is the sum of the average readings of the wattmeters.

For a **balanced load** with a phase angle $\phi$, the individual wattmeter readings are given by:

![[Measurement of Power in Three-Phase Circuits#^wattmeter1-reading]]

![[Measurement of Power in Three-Phase Circuits#^wattmeter2-reading]]

Where $V_L$ and $I_L$ are the line voltage and line current, and $\phi$ is the phase angle of the load (angle between phase voltage and phase current).

* **Total [[AC Power Analysis#Average (Real or True) Power, P|Active Power]] ($P_{3\phi}$)**: This is the fundamental equation of the method and is always valid.

![[Measurement of Power in Three-Phase Circuits#^total-active-power]]

Where $W_1$ and $W_2$ are the readings of the two wattmeters.

*   **Total [[AC Power Analysis#Reactive Power, Q|Reactive Power]] ($Q_{3\phi}$)**: For a balanced load, the total reactive power can also be determined from the wattmeter readings.

![[Measurement of Power in Three-Phase Circuits#^total-reactive-power]]

---
#### Power Factor Determination (For Balanced Loads)
#power-factor

The power factor of a balanced load can be calculated directly from the two wattmeter readings.
We know that for a balanced load, $\tan(\phi) = Q/P$.

![[Power Factor Calculation from Two-Wattmeter Readings#^tan]]

From this, the phase angle $\phi$ and the power factor $\cos(\phi)$ can be found.
$$\boxed{\quad \phi = \tan^{-1}\left(\sqrt{3} \frac{W_1 - W_2}{W_1 + W_2}\right) \quad}$$
![[Power Factor Calculation from Two-Wattmeter Readings#^pf]]

> See [[ee_2018#^q5]]

---
#### Analysis of Wattmeter Readings (For Balanced Loads)
#wattmeter-reading-analysis

The relationship between $W_1$ and $W_2$ provides direct insight into the load's power factor. (Assuming a lagging load).

| Power Factor ($\cos\phi$) | Phase Angle ($\phi$) | $W_1$ vs $W_2$ | Remarks |
| :--- | :--- | :--- | :--- |
| 1 | 0° | $W_1 = W_2$ | Both readings are positive and equal. |
| 0.866 | 30° | $W_1 = 2W_2$ | One reading is double the other. |
| **0.5** | **60°** | **$W_2 = 0$** | One wattmeter reads zero. Total power is read by $W_1$. |
| < 0.5 | 60° < $\phi$ < 90° | $W_2$ is negative | One wattmeter shows a negative reading. |
| 0 | 90° | $W_1 = -W_2$ | Readings are equal and opposite. $P_{total}=0$. |

*   **Negative Reading**: If the power factor is less than 0.5, one of the wattmeters ($W_2$ in this convention) will try to read negative. To get a measurement, the connections of either its potential coil or current coil must be reversed. The actual reading is then taken as negative for calculation purposes.

---
### Related Concepts
#two-wattmeter-method/related-concepts

> [[AC Power Analysis]] (Defines Active, Reactive, Apparent Power)

[[Three-Phase Circuits]] (The system in which this measurement is applied)
[[Power Factor]] (The quantity being determined)
[[Wattmeter]] (The measuring instrument used)