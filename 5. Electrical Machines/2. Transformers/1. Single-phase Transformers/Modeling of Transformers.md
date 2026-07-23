---
tags:
  - transformer-modeling
  - equivalent-circuit
  - electrical-machines
  - power-systems
created: 2025-09-08
aliases:
  - Equivalent Circuit of Transformer
  - Transformer Model
subject:
  - "[[5. Electrical Machines/Electrical Machines|Electrical Machines]]"
parent:
  - "[[Transformers]]"
modified: 2026-07-23T20:31:32
---
### Modeling of Transformers
#transformer-modeling #equivalent-circuit

> To analyze the performance of a real transformer, such as calculating its efficiency and voltage regulation, it is essential to represent it with an electrical circuit model. This model, known as the **equivalent circuit**, accounts for the physical imperfections like [[Ideal and Practical Transformers#^winding-resistance|winding resistance]], [[Ideal and Practical Transformers#^leakage-flux|flux leakage]], and [[Ideal and Practical Transformers#^core-losses|core losses]] that are neglected in an ideal transformer.

#### The Ideal Transformer
#ideal-transformer

![[Ideal and Practical Transformers#The Ideal Transformer]]

---
#### The Practical Transformer
#practical-transformer

![[Ideal and Practical Transformers#The Practical Transformer]]

---
#### Referring Parameters to One Side
#impedance-referral

To simplify analysis, it is convenient to transfer all parameters to a single side (either primary or secondary), creating a single equivalent circuit.
An impedance $Z_2$ on the secondary side can be referred to the primary side as $Z_2'$.
$$\boxed{\quad Z_2' = Z_2 \cdot a^2 \quad}$$
Conversely, an impedance $Z_1$ on the primary can be referred to the secondary as $Z_1'$.
$$\boxed{\quad Z_1' = Z_1 / a^2 \quad}$$

* **Total Equivalent Impedance referred to Primary**:
    $$Z_{01} = (R_1 + R_2') + j(X_1 + X_2')$$
    $$\boxed{\quad R_{01} = R_1 + a^2 R_2 \quad} \quad \text{and} \quad \boxed{\quad X_{01} = X_1 + a^2 X_2 \quad}$$
* **Total Equivalent Impedance referred to Secondary**:
    $$Z_{02} = (R_1' + R_2) + j(X_1' + X_2)$$
    $$\boxed{\quad R_{02} = \frac{R_1}{a^2} + R_2 \quad} \quad \text{and} \quad \boxed{\quad X_{02} = \frac{X_1}{a^2} + X_2 \quad}$$

---
#### Approximate Equivalent Circuit
#approximate-model

In the exact circuit, the shunt excitation branch is located between the primary and secondary impedances, making calculations cumbersome. A highly accurate simplification is the **approximate equivalent circuit**.

* **Approximation**: The shunt branch ($R_c \parallel X_m$) is moved to the supply terminals.
* **Justification**: The no-load current ($I_0$) flowing through the excitation branch is very small (2-5% of the full-load current). Therefore, the voltage drop across the primary series impedance ($R_1 + jX_1$) due to $I_0$ is negligible.
This approximation allows us to combine the primary and referred secondary series impedances directly, greatly simplifying the analysis for voltage regulation and efficiency. This is the model used in most transformer calculations.

---
#### Phasor Diagram of the Approximate Model
#phasor-diagram

The phasor diagram for the approximate model (referred to primary) under a lagging power factor load is crucial for understanding [[Voltage Regulation#Voltage Regulation of a Transformer|voltage regulation]].
* Start with the referred secondary voltage $V_2'$ as the reference phasor.
* The referred load current $I_2'$ lags $V_2'$ by the power factor angle $\phi$.
* The voltage drop across the total equivalent resistance, $I_2'R_{01}$, is drawn in phase with $I_2'$.
* The voltage drop across the total equivalent reactance, $I_2'X_{01}$, is drawn leading $I_2'$ by 90°.
* The vector sum of $V_2'$, $I_2'R_{01}$, and $I_2'X_{01}$ gives the primary supply voltage $V_1$.
    $$\vec{V_1} = \vec{V_2'} + \vec{I_2'}(R_{01} + jX_{01})$$

---
### Related Concepts
#related-concepts

> [[Voltage Regulation of a Transformer]] (Calculated using the equivalent circuit)

[[Losses and Efficiency in a Transformer]] (Losses are modeled in the equivalent circuit)
[[Transformer Tests]] (Used to determine the parameters of the equivalent circuit)
[[Transformers]] (Parent topic)
[[Phasors]]
[[AC Circuit Analysis]]