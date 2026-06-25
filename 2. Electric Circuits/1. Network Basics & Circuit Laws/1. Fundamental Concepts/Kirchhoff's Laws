---
tags:
  - electric-circuits
  - network-theorems
  - kcl
  - kvl
aliases:
  - Kirchhoff's Laws
  - KCL
  - KVL
  - Kirchhoff's Circuit Laws
created: 2025-09-11
subject: "[[Electric Circuits]]"
parent: "[[Network Theorems]]"
---
###### Mind Map

```mermaid
mindmap
  root((Kirchhoff's Laws))
    Kirchhoff's Current Law : KCL
      Junction Rule
      Principle
        Conservation of Charge
      Statement
        Sum of currents entering a node = Sum of currents leaving
        \sum I_in = \sum I_out
        Algebraic sum of currents at a node is zero
      Application
        Foundation of **Nodal Analysis**
    Kirchhoff's Voltage Law : KVL
      Loop Rule
      Principle
        Conservation of Energy
      Statement
        Sum of voltage rises = Sum of voltage drops in a loop
        Algebraic sum of voltages in a closed loop is zero
        \sum V = 0
      Application
        Foundation of **Mesh Analysis**
```

---
### Kirchhoff's Laws
#kirchhoffs-laws #network-analysis

> Kirchhoff's circuit laws are two fundamental principles that form the foundation of electric circuit analysis. They deal with the conservation of charge and energy within a circuit, providing a systematic way to determine currents and voltages in any network, regardless of its complexity.

#### Kirchhoff's Current Law (KCL)
#kcl #junction-rule

Also known as Kirchhoff's first law or the junction rule, KCL is based on the **principle of conservation of electric charge**.

> [!definition] Statement
> The algebraic sum of all currents entering and leaving a node (or a junction) must be equal to zero.

This means that the total current flowing into any point in a circuit must be equal to the total current flowing out of that same point. Charge cannot be created or destroyed at a junction.

Mathematically, it is expressed in two equivalent ways:
1.  Sum of currents entering = Sum of currents leaving
    $$\boxed{\quad \sum I_{in} = \sum I_{out} \quad}$$
2.  The algebraic sum of all currents at a node is zero.
    $$\boxed{\quad \sum_{k=1}^{n} I_k = 0 \quad}$$
    Here, a sign convention is used, for example:
    *   Currents entering a node are considered positive (+).
    *   Currents leaving a node are considered negative (-).

KCL is the fundamental principle behind [[Nodal Analysis]].

---
#### Kirchhoff's Voltage Law (KVL)
#kvl #loop-rule

Also known as Kirchhoff's second law or the loop rule, KVL is based on the **principle of conservation of energy**.

> [!definition] Statement
> The algebraic sum of all the potential differences (voltages) around any closed loop or mesh in a circuit must be equal to zero.

This implies that as you traverse a closed path and return to the starting point, the net change in electric potential is zero. In other words, the sum of voltage rises (from sources) must equal the sum of voltage drops (across components like resistors) in any closed loop.

Mathematically, it is expressed as:
$$\boxed{\quad \sum_{k=1}^{n} V_k = 0 \quad}$$
To apply KVL, a sign convention for traversing the loop is necessary:
*   **Voltage Rise**: Moving from a negative (-) terminal to a positive (+) terminal of an element (like a battery) is considered a voltage rise (e.g., $+V_s$).
*   **Voltage Drop**: Moving from a positive (+) to a negative (-) terminal is a voltage drop. When traversing a resistor in the *same direction* as the assumed current flow, it is a voltage drop (e.g., $-IR$).

KVL is the fundamental principle behind [[Mesh Analysis]].

---
### Related Concepts
#related-concepts

> [[Nodal Analysis]] (Direct application of KCL)
> [[Mesh Analysis]] (Direct application of KVL)

[[Ohm's Law]]
[[Series and Parallel Circuits]]
[[Network Theorems]]
