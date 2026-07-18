---
tags:
  - electric-circuits
  - network-theorems
  - star-delta
  - wye-delta
aliases:
  - Star-Delta Transformation
  - Wye-Delta Transformation
  - Y-Δ Transformation
  - T-Π Transformation
created: 2025-09-11
subject: "[[Electric Circuits]]"
parent: "[[Network Theorems]]"
confidence: 9
formula:
  - "Delta-to-Star (Δ → Y) Transformation (Resistance) : $$\\quad R_1 = \\frac{R_{ca} R_{ab}}{R_{ab} + R_{bc} + R_{ca}} \\quad$$ $$\\quad R_2 = \\frac{R_{ab} R_{bc}}{R_{ab} + R_{bc} + R_{ca}} \\quad$$ $$\\quad R_3 = \\frac{R_{bc} R_{ca}}{R_{ab} + R_{bc} + R_{ca}} \\quad$$"
  - "Star-to-Delta (Y → Δ) Transformation (Resistance) : $$\\quad R_{ab} = R_1 + R_2 + \\frac{R_1R_2}{R_3} \\quad$$ $$\\quad R_{bc} = R_2 + R_3 + \\frac{R_2R_3}{R_1} \\quad$$ $$\\quad R_{ca} = R_3 + R_1 + \\frac{R_3R_1}{R_2} \\quad$$"
---
### Star-Delta Transformation
#star-delta-transformation #wye-delta

> The **Star-Delta (or Wye-Delta, Y-Δ)** transformation is a mathematical technique used in circuit analysis to convert a three-terminal resistive or impedance network from a "Star" (Y) configuration to an equivalent "Delta" ($\Delta$) configuration, or vice versa. Its primary purpose is to simplify circuits that cannot be reduced using standard [[Series and Parallel Circuits|series and parallel]] combinations, such as **bridge circuits**.

---
#### The Configurations
#star-configuration #delta-configuration

*   **Star (Y) or T Network**: Consists of three elements connected to a common central node, with the other three ends forming the terminals.
*   **Delta ($\Delta$) or Pi ($\Pi$) Network**: Consists of three elements connected end-to-end in a closed loop, with the terminals at the three connection points.

![[Pasted image 202509112200.png]]

---
#### Transformation Formulas
#star-delta-formulas

##### Delta-to-Star (Δ → Y) Conversion
#delta-to-star

This transformation is used to find the equivalent star-network resistances ($R_1, R_2, R_3$) from a known delta network ($R_{ab}, R_{bc}, R_{ca}$).

**Rule**: The resistance of any arm in the star network is the product of the two adjacent delta resistances connected to that same terminal, divided by the sum of all three delta resistances.
$$\boxed{\quad R_1 = \frac{R_{ca} R_{ab}}{R_{ab} + R_{bc} + R_{ca}} \quad}$$
$$\boxed{\quad R_2 = \frac{R_{ab} R_{bc}}{R_{ab} + R_{bc} + R_{ca}} \quad}$$
$$\boxed{\quad R_3 = \frac{R_{bc} R_{ca}}{R_{ab} + R_{bc} + R_{ca}} \quad}$$

> [!warning] Ammeter Reading in Star Connection
> In a star-connected load, each line conductor is in series with one phase.
> Hence, an ammeter in the line measures the **phase current**:
> $$I_L = I_{ph}$$

---
##### Star-to-Delta (Y → Δ) Conversion
#star-to-delta

This transformation is used to find the equivalent delta-network resistances ($R_{ab}, R_{bc}, R_{ca}$) from a known star network ($R_1, R_2, R_3$).

**Rule**: The resistance of any arm in the delta network is the sum of the two adjacent star resistances plus the product of the same two resistances divided by the third star resistance.
A more symmetric way to write this is:
$$R_{ab} = \frac{R_1R_2 + R_2R_3 + R_3R_1}{R_3}$$
$$\boxed{\quad R_{ab} = R_1 + R_2 + \frac{R_1R_2}{R_3} \quad}$$
$$\boxed{\quad R_{bc} = R_2 + R_3 + \frac{R_2R_3}{R_1} \quad}$$
$$\boxed{\quad R_{ca} = R_3 + R_1 + \frac{R_3R_1}{R_2} \quad}$$

> [!warning] Star → Delta Current Calculation
> After converting a star load to delta:
> $$
> I_{\Delta,ph} = \frac{V_{LL}}{Z_\Delta}
> $$
> This is **delta phase (branch) current**, **not line current**.
> 
> For an ammeter in the line:
> $$
> I_L = \sqrt{3}\, I_{\Delta,ph}
> $$
> Forgetting the $\sqrt{3}$ factor leads to a wrong answer.

---
#### Special Case: Balanced System
#balanced-star-delta

This is a very important and frequently used case, especially in [[Three-Phase Circuits]].
If all resistances in one configuration are equal:
*   In Delta: $R_{ab} = R_{bc} = R_{ca} = R_\Delta$
*   In Star: $R_1 = R_2 = R_3 = R_Y$

The relationship simplifies to:
$$\boxed{\quad R_Y = \frac{R_\Delta}{3} \quad}$$
$$\boxed{\quad R_\Delta = 3R_Y \quad}$$
This relationship holds for complex impedances as well, i.e., $\mathbf{Z}_Y = \mathbf{Z}_\Delta / 3$.

---
#### Applicability
#star-delta/applicability

The transformation is valid for:
1.  **Resistive Networks** (DC circuits).
2.  **Complex Impedance Networks** (AC circuits). The same formulas apply, but all resistances ($R$) are replaced with complex impedances ($\mathbf{Z}$).

---
### Related Concepts
#related-concepts

> [[Three-Phase Circuits]] (Where the balanced star-delta conversion is fundamental)
> [[Network Theorems]] (It's a key tool for circuit simplification)
> [[Bridge Circuits]] (A classic application where this transformation is needed)

[[Resistors]]
[[Series and Parallel Circuits]]
[[Impedance and Admittance]]