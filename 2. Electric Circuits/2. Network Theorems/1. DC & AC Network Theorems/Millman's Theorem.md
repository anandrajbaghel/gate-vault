---
tags:
  - electric-circuits
  - network-theorems
  - circuit-analysis
  - parallel-circuits
created: 2025-07-27
aliases:
  - Millman's Theorem
  - Parallel Generator Theorem
  - Thévenin Voltage
  - Thévenin Resistance
subject: "[[Electric Circuits]]"
parent: "[[Network Theorems]]"
confidence: 9
formula:
  - "Millman's theorem (Using Resistances) : $$V_{AB} = \\frac{\\frac{V_1}{R_1} + \\frac{V_2}{R_2} + \\dots + \\frac{V_n}{R_n}}{\\frac{1}{R_1} + \\frac{1}{R_2} + \\dots + \\frac{1}{R_n}} = \\frac{\\sum_{k=1}^{n} \\frac{V_k}{R_k}}{\\sum_{k=1}^{n} \\frac{1}{R_k}}$$"
  - "Millman's theorem (Using Conductances) : $$V_{AB} = \\frac{\\sum_{k=1}^{n} V_k G_k}{\\sum_{k=1}^{n} G_k} = \\frac{\\sum_{k=1}^{n} I_k}{\\sum_{k=1}^{n} G_k}$$"
---
### Millman's Theorem
#millmans-theorem #network-theorem #parallel-circuits

> ==**Millman's Theorem** provides a method to find the common voltage across a set of parallel branches in an electrical network.== It is particularly useful when the branches contain different voltage sources. The theorem simplifies the parallel network into a single equivalent voltage source in series with an equivalent resistance.

It can be thought of as a combination of Thévenin's and Norton's theorems, or as a special case of [[Nodal Analysis]] applied to a circuit with two main nodes.

#### Statement of the Theorem
#millmans-theorem/statement

Consider a number of parallel branches connected between two nodes, A and B. Let the $k$-th branch contain a voltage source $V_k$ in series with a resistance $R_k$. Millman's theorem states that the voltage $V_{AB}$ between the nodes A and B is given by:
$$\boxed{\quad V_{AB} = \frac{\frac{V_1}{R_1} + \frac{V_2}{R_2} + \dots + \frac{V_n}{R_n}}{\frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n}} = \frac{\sum_{k=1}^{n} \frac{V_k}{R_k}}{\sum_{k=1}^{n} \frac{1}{R_k}} \quad}$$
> [!important] Sign Convention
> It is crucial to be consistent with polarities. ==$A$ common convention is to assign a positive sign to voltages $V_k$ if they push current towards node $A$, and a negative sign if they push current away from $A$ (towards $B$).==

The term $V_k/R_k$ is the short-circuit current of the $k$-th branch. Using conductances ($G_k = 1/R_k$), the formula becomes more elegant:
$$\boxed{\quad V_{AB} = \frac{\sum_{k=1}^{n} V_k G_k}{\sum_{k=1}^{n} G_k} = \frac{\sum_{k=1}^{n} I_k}{\sum_{k=1}^{n} G_k} \quad}$$
where $I_k$ is the current from the equivalent Norton source for that branch.

> [!pyq]- PYQ : 2019
> ![[ee_2019#^q42]]

---
#### Millman's Equivalent Circuit
#millmans-equivalent-circuit #thevenin-equivalent

Millman's theorem allows the entire set of parallel branches to be replaced by a single Thévenin equivalent circuit where:

1. **Millman Voltage ([[Thevenin's Theorem#Finding the Thevenin Voltage|Thévenin Voltage]])**: The voltage $V_{AB}$ calculated from the formula is the Thévenin equivalent voltage.
    $$V_{Th} = V_{AB}$$
2. **Millman Resistance ([[Thevenin's Theorem#Finding the Thevenin Impedance|Thévenin Resistance]])**: The equivalent resistance is the parallel combination of all branch resistances, which is the reciprocal of the denominator in the voltage formula.
    $$\boxed{\quad R_{Th} = \frac{1}{\frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n}} = \frac{1}{\sum_{k=1}^{n} G_k} \quad}$$

---
#### Procedure for Application
#millmans-theorem/procedure

1. Identify the set of branches that are in parallel.
2. If any branch contains a current source in parallel with a resistor, use [[Source Transformation]] to convert it into an equivalent voltage source in series with that resistor.
3. If a branch contains only a resistor, its corresponding source voltage $V_k$ is zero.
4. Choose a reference polarity for the voltage to be calculated (e.g., A is positive with respect to B).
5. Apply the Millman's formula, carefully assigning signs to the voltage sources based on the chosen reference polarity.
6. The result $V_{AB}$ will be the voltage across the parallel combination.

---
#### Limitations
#millmans-theorem/limitation

* The theorem cannot be used if any parallel branch consists of an **[[Ideal Independent Sources|ideal voltage source]]** (i.e., a voltage source with zero series resistance). In this case, the term $1/R_k$ in the denominator becomes infinite, making the expression undefined. (In such a trivial case, the voltage across the parallel branches is already fixed by that ideal source, so no theorem is needed).
* It is not applicable to circuits with non-linear or unilateral elements.

---
### Related Concepts
#millmans-theorem/related-concepts

> [[Network Theorems]] (Parent topic)

[[Nodal Analysis]] (Millman's theorem is effectively a formulaic solution to a two-node nodal analysis problem)
[[Thevenin's Theorem]] and [[Norton's Theorem]] (The derivation of Millman's involves converting each branch to its Norton equivalent, summing them, and then converting the final result back to a Thévenin equivalent)
[[Source Transformation]] (A key tool used to prepare a circuit for the application of Millman's theorem)
[[Parallel Circuits]]