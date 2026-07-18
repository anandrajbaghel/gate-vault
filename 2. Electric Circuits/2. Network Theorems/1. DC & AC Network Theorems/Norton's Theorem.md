---
tags:
  - electric-circuits
  - network-theorems
  - norton-theorem
  - equivalent-circuits
aliases:
  - Norton's Theorem
  - Norton Equivalent Circuit
created: 2025-09-11
subject: "[[Electric Circuits]]"
parent: "[[Network Theorems]]"
confidence: 9
---
### Norton's Theorem
#norton-theorem #equivalent-circuits #network-analysis

> Norton's Theorem is a powerful tool in circuit analysis that allows any complex two-terminal **linear, bilateral network** to be simplified into a practical current source. It is the dual of [[Thevenin's Theorem]].

---
#### Statement
#norton/statement

> "Any two-terminal linear bilateral network can be replaced by an equivalent circuit consisting of an independent current source, $I_N$, in parallel with an equivalent resistance, $R_N$."

*   **Norton Current ($I_N$)**: The current source's value is the **short-circuit current** ($I_{sc}$) between the two terminals of the network.
*   **Norton Resistance ($R_N$)**: The resistance is the equivalent resistance of the network looking back from the two terminals, with all independent sources deactivated (voltage sources shorted, current sources opened). It is identical to the Thevenin resistance ($R_N = R_{Th}$).

![[Pasted image 202509111500.png]]

---
#### Procedure to Find the Norton Equivalent Circuit
#norton/procedure

Given a circuit, to find the Norton equivalent across terminals 'a' and 'b':

##### Step 1: Find the Norton Resistance ($R_N$)
#norton/resistance

This procedure is identical to finding the Thevenin resistance.
1.  **Identify Terminals**: Identify the two terminals (e.g., across the load) where the equivalent circuit is to be found.
2.  **Deactivate Independent Sources**:
    *   Replace all independent **voltage sources** with a **short circuit**.
    *   Replace all independent **current sources** with an **open circuit**.
3.  **Keep Dependent Sources**: Do not deactivate dependent sources.
4.  **Calculate Resistance**:
    *   **Case 1 (No Dependent Sources)**: The equivalent resistance seen from the terminals is $R_N$.
    *   **Case 2 (With Dependent Sources)**: Apply a test voltage source $V_T$ (or a test current source $I_T$) across the terminals and find the resulting current $I_T$ (or voltage $V_T$). Then,
    $$\boxed{\quad R_N = R_{Th} = \frac{V_T}{I_T} \quad}$$

##### Step 2: Find the Norton Current ($I_N$)
#norton/current

1.  **Short the Terminals**: Place a short circuit across the terminals 'a' and 'b'.
2.  **Calculate Current**: Calculate the current flowing through this short circuit using any standard analysis method (mesh, nodal, superposition). This current is the Norton current.
    $$\boxed{\quad I_N = I_{sc} \quad}$$
    *(The direction of $I_N$ in the equivalent circuit is the same as the direction of the calculated short-circuit current from 'a' to 'b'.)*

---
#### Relationship with Thevenin's Theorem
#thevenin-norton-duality #source-transformation

Thevenin's and Norton's theorems are duals and their equivalent circuits are interchangeable through [[Source Transformation]]. This is a very important relationship for solving problems efficiently.

$$\boxed{\quad R_N = R_{Th} \quad}$$
$$\boxed{\quad I_N = \frac{V_{Th}}{R_{Th}} \quad}$$
$$\boxed{\quad V_{Th} = I_N \times R_N \quad}$$

Knowing one equivalent circuit allows you to find the other instantly.

---
#### When to Use Norton's Theorem
#norton/application

*   Norton's theorem is particularly useful when it is easier to calculate the **short-circuit current** than the open-circuit voltage. This is often the case in circuits with multiple parallel branches or current sources.
*   It is ideal for finding the current or power delivered to a variable load resistor, as the complex part of the circuit is simplified to just two components.

---
### Related Concepts
#related-concepts

> [[Thevenin's Theorem]] (The direct dual of Norton's Theorem)

[[Source Transformation]] (The method for converting between Thevenin and Norton equivalents)
[[Superposition Theorem]]
[[Maximum Power Transfer Theorem]]
[[Dependent Sources]]
[[Network Theorems]]
