---
tags:
  - power-systems
  - lfc
  - control-systems
  - droop
  - speed-regulation
created: 2025-10-14
aliases:
  - Droop
  - Speed Droop
  - Governor Droop
  - Load Sharing Between Parallel Generators
subject: "[[Power System]]"
parent: "[[Load Frequency Control (LFC)]]"
formula:
  - "Speed Regulation Constant (R) (Governor Droop) : $$R = \\frac{f_{no-load} - f_{full-load}}{f_{rated}}$$"
modified: 2026-07-15
---
### Speed Regulation (Droop)
#speed-regulation #droop #parallel-operation

> **Speed Regulation**, commonly known as **Droop**, is a fundamental characteristic intentionally designed into a generator's governor control system. ==It defines a linear relationship where the generator's steady-state speed (and thus frequency) is allowed to decrease as its real power output increases.== This characteristic is essential for ensuring stable parallel operation and proportional load sharing among multiple generators in an interconnected power system.

#### Definition and Characteristic Curve
#droop-characteristic

The droop characteristic is represented by a downward-sloping line on a ==Frequency vs. Power Output graph==.

![[Droop Characteristic.png]]

==The **Speed Regulation constant (R)** is formally defined as the change in frequency from no-load to full-load, expressed as a fraction or percentage of the nominal frequency.==
$$\boxed{\quad R = \frac{f_{no-load} - f_{full-load}}{f_{rated}} \quad}$$
A typical value for R is 4% or 5% (0.04 or 0.05 p.u.).

> [!memory] 
> ==When generator increases power output from no-load to full-load power $P_r$ the frequency decreases by $R\%$ of the **rated frequency** $f_n$==
> - $f_n = 50$ in India
> 
> To increase the generator output from no-load to full-load power $P_r$, the frequency must drop by $$\left( \frac{R}{100} \right)f_n$$

The slope of this characteristic line gives the steady-state relationship between a change in frequency ($\Delta f$) and a change in the generator's mechanical power output ($\Delta P_G$).
$$\boxed{\quad \Delta P_G = -\frac{1}{R} \Delta f \quad}$$
$$f = f_0 - R_1P_1$$
- Here, $R$ is the regulation or droop constant, typically in units of Hz/MW or in per-unit.
- ==The negative sign indicates that an increase in power output ($\Delta P_G > 0$) results in a decrease in frequency ($\Delta f < 0$).==

> [!faq] Why intentional droop?
> ==If all generators operated with $0\%$ regulation (isochronous), they would fight each other to control the system frequency, leading to instability in parallel operation. Droop allows them to share load peacefully.==

> [!pyq]- PYQ : GATE EE 2020
> ![[ee_2020#^q23]]

---
#### Purpose of the Droop Characteristic
#droop/purpose

1. **Stable Parallel Operation**: If two generators with isochronous governors (zero droop, meaning they try to hold frequency perfectly constant) are connected, they will "fight" for control. The slightest frequency deviation would cause one to try to take all the load while the other sheds all its load, leading to large power swings and instability. The droop characteristic ensures that as a generator takes on more load, its speed reference is slightly lowered, allowing it to find a stable operating point with other generators.

2. **Proportional Load Sharing**: Droop allows the system to automatically distribute a change in load among all connected generators in a predetermined manner. Generators with a smaller droop value (a "steeper" characteristic line) are more sensitive to frequency changes and will pick up a larger share of the load for a given frequency drop.

---
#### Load Sharing Between Parallel Generators
#load-sharing

Consider two generators operating in parallel at a frequency $f_0$, sharing a total load. Let a new load $\Delta P_D$ be added to the system. The system frequency will drop by a common amount $\Delta f$ to a new value $f_1$.

The response of each generator is governed by its droop characteristic:
-   For Generator 1: $\Delta P_{G1} = -\frac{1}{R_1} \Delta f$
-   For Generator 2: $\Delta P_{G2} = -\frac{1}{R_2} \Delta f$

Since the frequency drop $\Delta f$ is the same for both, we can write:
$$ \Delta f = -R_1 \Delta P_{G1} = -R_2 \Delta P_{G2} $$
This gives the fundamental rule for load sharing:
$$\boxed{\quad \frac{\Delta P_{G1}}{\Delta P_{G2}} = \frac{R_2}{R_1} \quad}$$
The change in load picked up by each generator is inversely proportional to its droop constant.

The total change in generation must equal the change in load demand (neglecting changes in load damping):
$$ \Delta P_D = \Delta P_{G1} + \Delta P_{G2} $$
Using the relationship above, we can solve for the individual load pickup:
$$\boxed{\quad \Delta P_{G1} = \Delta P_D \left( \frac{R_2}{R_1 + R_2} \right) \quad \text{and} \quad \Delta P_{G2} = \Delta P_D \left( \frac{R_1}{R_1 + R_2} \right) \quad}$$
*Note: This assumes R is in consistent units (e.g., Hz/MW). If R is given in percent on the machine's own base MVA, it must be converted to a common base before applying these formulas.*

> [!important] Droop Control with Unequal Ratings
> When generators of different rated powers operate in parallel, real power sharing is  
> $$ \frac{P_1}{P_2} = \frac{P_{1,\text{rated}}}{P_{2,\text{rated}}} \cdot \frac{R_2(\%)}{R_1(\%)} $$
> Equal droop percentages result in power sharing proportional to machine ratings.

---
### Related Concepts
#droop/related-concepts

> [[Governor Control System]]

[[Load Frequency Control (LFC)]]
[[Single Area Load Frequency Control (Uncontrolled and Controlled Case)]]
[[Two-Area Load Frequency Control]]
[[Steady-State Error]]
