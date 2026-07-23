---
tags:
  - electrical-machines
  - transformers
  - equivalent-circuit
  - circuit-modeling
created: 2025-09-16
aliases:
  - Transformer Equivalent Circuit
  - Transformer Model
subject: "[[Electrical Machines]]"
parent:
  - Single-phase Transformers
modified: 2026-07-23T20:31:11
---
### Equivalent Circuit of a Transformer
#transformers #equivalent-circuit #circuit-modeling

> The equivalent circuit of a transformer is a circuit model that represents all the electrical characteristics of a practical transformer, such as its losses, voltage drops, and magnetizing current. It allows the performance of a real transformer to be analyzed using standard circuit theory.

#### Components of the Equivalent Circuit
#transformer-parameters #winding-impedance #excitation-branch

A practical transformer's behavior is modeled by an ideal transformer along with external resistors and inductors representing its imperfections:

1.  **Series Branch (Winding Impedances)**: These components are in series with the windings.
    *   $R_1, R_2$: Primary and secondary winding resistances, which account for the **copper losses** ($I^2R$ losses).
    *   $X_1, X_2$: Primary and secondary **leakage reactances**, which account for the voltage drop due to [[Ideal and Practical Transformers#^leakage-flux|leakage flux]] (flux that does not link both windings).

2.  **Shunt Branch (Excitation Branch)**: This parallel branch is connected across the primary induced EMF ($E_1$) and models the transformer's no-load behavior. It draws the no-load current $I_0$.
    *   **Core Loss Resistance ($R_c$)**: Represents the **core losses** (hysteresis and eddy currents). The current through it, $I_c$, is the core loss component of $I_0$.
    *   **Magnetizing Reactance ($X_m$)**: Represents the current required to establish the mutual magnetic flux in the core. The current through it, $I_m$, is the magnetizing component of $I_0$.

---
#### Exact Equivalent Circuit and Impedance Referral
#exact-equivalent-circuit #impedance-referral

The exact equivalent circuit directly models all the components. However, for analysis, it is inconvenient because the primary and secondary are separate circuits. To solve this, all secondary-side quantities are "referred" to the primary side (or vice-versa) using the turns ratio, $a = N_1/N_2$.

**Referring Secondary Quantities to the Primary Side:**
$$\boxed{\quad R_2' = a^2 R_2 \quad}$$
$$\boxed{\quad X_2' = a^2 X_2 \quad}$$
$$\boxed{\quad V_2' = a V_2 \quad \text{and} \quad I_2' = I_2 / a \quad}$$
where the prime (') denotes a referred quantity.

This results in the **Exact Equivalent Circuit Referred to the Primary Side**, where the ideal transformer element is eliminated, and all impedances can be combined for analysis.

The total series impedance referred to the primary is:
-   **Equivalent Resistance**: $R_{eq,1} = R_1 + R_2' = R_1 + a^2 R_2$
-   **Equivalent Reactance**: $X_{eq,1} = X_1 + X_2' = X_1 + a^2 X_2$

![[Pasted image 20250920175637.png]]

![[Transformer Equivalent Circuit.png]]

---
#### Approximate Equivalent Circuit
#approximate-equivalent-circuit

The exact circuit can be further simplified. The no-load current ($I_0$) is typically very small compared to the full-load current (2-5%). Therefore, the voltage drop across the primary impedance ($Z_1$) due to $I_0$ is negligible.

This allows a very useful approximation: the entire shunt (excitation) branch can be moved to the input terminals ($V_1$).

![[Pasted image 20250920180029.png]]

**Advantages of the Approximate Model:**
*   It greatly simplifies calculations for voltage regulation and efficiency.
*   The primary and referred secondary impedances are now directly in series and can be easily combined into a single equivalent impedance, $Z_{eq,1}$.
*   The total input current $I_1$ is a simple phasor sum of the no-load current $I_0$ and the referred load current $I_2'$: $\vec{I_1} = \vec{I_0} + \vec{I_2'}$.
*   This model provides results with acceptable accuracy for most practical engineering problems.

---
### Related Concepts
#equivalent-circuit/related

> [[Ideal and Practical Transformers]]

[[Phasor Diagram of a Transformer]]
[[Transformer Tests]] (Used to find the parameters $R_c$, $X_m$, $R_eq$, and $X_eq$)
[[Voltage Regulation of a Transformer]] (Calculated using the equivalent circuit)
[[Losses and Efficiency in a Transformer]]