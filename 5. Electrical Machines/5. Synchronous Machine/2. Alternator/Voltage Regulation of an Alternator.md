---
tags:
  - electrical-machines/synchronous-machines
  - alternator
  - voltage-regulation
  - machine-performance
created: 2025-07-19
aliases:
  - Alternator Voltage Regulation
  - Synchronous Generator Voltage Regulation
  - VR of Alternator
subject: "[[Electrical Machines]]"
parent: "[[Synchronous Machines]]"
modified: 2026-07-23T20:53:01
---
### Voltage Regulation of an Alternator
#voltage-regulation #alternator #machine-performance

Voltage regulation (VR) of an alternator is a measure of the change in its terminal voltage from a no-load condition to a full-load condition, assuming constant speed and field excitation. It quantifies the generator's ability to maintain a constant voltage as the load varies. A smaller value of voltage regulation is desirable.

The percentage voltage regulation is defined as:
$$\boxed{\quad \% \text{VR} = \frac{|E_f| - |V_t|}{|V_t|} \times 100\% \quad}$$
Where:
* $|E_f|$ is the magnitude of the no-load terminal voltage (which is equal to the induced EMF).
* $|V_t|$ is the magnitude of the full-load terminal voltage.

> Expressed per unit or percentage of full-load voltage.

---
#### Factors Affecting Voltage Regulation
The change in terminal voltage is caused by three main factors when the alternator is loaded:
1.  **Armature Resistance Drop ($I_a R_a$)**: Voltage drop due to the resistance of the armature winding.
2.  **Armature Leakage Reactance Drop ($jI_a X_{al}$)**: Voltage drop due to the [[Ideal and Practical Transformers#^leakage-flux|leakage flux]] in the armature winding.
3.  **Effect of Armature Reaction**: The primary factor that makes voltage regulation dependent on the load power factor. The armature flux interacts with the main field flux, either weakening it (demagnetizing), strengthening it (magnetizing), or distorting it (cross-magnetizing).

These effects are modeled using the [[Equivalent Circuit and Phasor Diagram of an Alternator|alternator's equivalent circuit]], where the voltage regulation is calculated from the phasor equation $\vec{E_f} = \vec{V_t} + \vec{I_a}Z_s$.

---
#### Dependence on Load Power Factor
The voltage regulation of an alternator is highly dependent on the power factor (PF) of the load it supplies.

##### 1. Lagging Power Factor (Inductive Load)
*   **Armature Reaction**: Demagnetizing. The armature flux opposes the main field flux, weakening the net flux and reducing the induced EMF.
*   **Phasor Diagram**: The reactive drop $jI_aX_s$ adds significantly to the terminal voltage phasor, resulting in a large excitation EMF $E_f$.
*   **Result**: A large **positive voltage regulation**. The terminal voltage drops significantly as the load increases.

##### 2. Unity Power Factor (Resistive Load)
*   **Armature Reaction**: Cross-magnetizing. The armature flux distorts the main field flux, causing a slight reduction in the net flux.
*   **Phasor Diagram**: The voltage drops are not in line to the same extent as in the lagging case.
*   **Result**: A small **positive voltage regulation**. The voltage drop is less severe than for a lagging load.

##### 3. Leading Power Factor (Capacitive Load)
*   **Armature Reaction**: Magnetizing. The armature flux aids the main field flux, strengthening the net flux. This can cause the internal EMF to increase.
*   **Phasor Diagram**: The reactive drop $jI_aX_s$ opposes the terminal voltage phasor to some extent.
*   **Result**: The voltage regulation can be **zero or even negative**. A negative VR means the full-load terminal voltage is *higher* than the no-load voltage. This phenomenon occurs when the magnetizing effect of the armature reaction is greater than the voltage drops due to resistance and leakage reactance.

---
#### Significance of Voltage Regulation
A power system requires a stable voltage supply. An alternator with low voltage regulation is preferred because its terminal voltage remains relatively constant with changes in load. High voltage regulation implies that significant adjustments to the field excitation would be needed to maintain a constant terminal voltage as the load varies, or external voltage control equipment would be required.

---
### Related Concepts
#voltage-regulation/related-concepts

> [[Equivalent Circuit and Phasor Diagram of an Alternator]]

[[Armature Reaction and Synchronous Reactance]]
[[Voltage Regulation Methods]]
[[Power System - Voltage Control]]
