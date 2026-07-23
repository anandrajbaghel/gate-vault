---
tags:
  - electrical-machines/synchronous-machines
  - armature-reaction
  - synchronous-reactance
  - synchronous-impedance
  - equivalent-circuit
created: 2025-07-18
aliases:
  - Armature Reaction in Alternators
  - Synchronous Reactance
  - Xs
  - Synchronous Impedance
  - Zs
  - Armature Leakage Reactance
  - Reactance of Armature Reaction
subject: "[[Electrical Machines]]"
parent: "[[Synchronous Machines]]"
modified: 2026-07-16
---
###### Navigation

> [!Navigation]
> - [[Armature Reaction]] (for DC Machines)

---
### Armature Reaction and Synchronous Reactance
#electrical-machines #armature-reaction #synchronous-reactance #synchronous-impedance

> When an alternator is connected to a load, current flows through the armature (stator) windings. This armature current produces its own magnetic field, known as the **armature flux ($\Phi_a$)**. The **armature reaction** is the effect of this armature flux on the main field flux ($\Phi_f$) produced by the rotor. This interaction distorts and/or changes the magnitude of the net air-gap flux, which in turn affects the terminal voltage. The nature of the armature reaction is critically dependent on the power factor of the load.

#### Effect of Load Power Factor on Armature Reaction
#armature-reaction/power-factor

The phase relationship between the induced EMF ($E_f$) and the armature current ($I_a$) determines the nature of the armature reaction.

1.  **Unity Power Factor (UPF) Load (Resistive)**
    *   $I_a$ is in phase with $E_f$.
    *   The armature flux ($\Phi_a$) is 90° behind the main flux ($\Phi_f$).
    *   **Effect**: The armature flux distorts the main flux by strengthening the trailing pole tip and weakening the leading pole tip. This effect is known as **cross-magnetizing**. It causes a slight reduction in terminal voltage due to flux waveform distortion.

2.  **Zero Power Factor (ZPF) Lagging Load (Purely Inductive)**
    *   $I_a$ lags $E_f$ by 90°.
    *   The armature flux ($\Phi_a$) is in direct opposition to the main flux ($\Phi_f$).
    *   **Effect**: The armature flux directly opposes and weakens the main flux. This is a **purely demagnetizing** effect, causing a significant drop in terminal voltage.

3.  **Zero Power Factor (ZPF) Leading Load (Purely Capacitive)**
    *   $I_a$ leads $E_f$ by 90°.
    *   The armature flux ($\Phi_a$) is in the same direction as the main flux ($\Phi_f$).
    *   **Effect**: The armature flux aids the main flux, strengthening it. This is a **purely magnetizing** effect, causing a rise in terminal voltage.

4.  **General Lagging/Leading PF Load**
    *   The armature current $I_a$ has two components: one in phase with $E_f$ and one in quadrature.
    *   **Effect**: The armature reaction is a combination of cross-magnetizing and either demagnetizing (for lagging loads) or magnetizing (for leading loads).

---
#### Synchronous Reactance ($X_s$) and Impedance ($Z_s$)
#synchronous-reactance #synchronous-impedance 

For circuit analysis, it is convenient to model the complex effects of armature reaction and flux leakage as reactances.

1.  **Armature Leakage Reactance ($X_{al}$ or $X_l$)**:
    This component accounts for the [[Ideal and Practical Transformers#^leakage-flux|leakage flux]], which is a part of the armature flux that links only the armature winding and does not cross the air gap to interact with the main field. This leakage flux induces a self-EMF in the armature winding, which is modeled as a voltage drop across a reactance $X_{al}$.
^armature-leakage-reactance

2.  **Reactance of Armature Reaction ($X_{ar}$)**:
    This is a fictitious reactance used to model the voltage drop caused by the armature reaction. The armature flux $\Phi_a$ induces a voltage $E_{ar}$ in the stator. Since $\Phi_a$ is proportional to $I_a$, the induced voltage $E_{ar}$ is also proportional to $I_a$ and lags it by 90°. This voltage drop can be represented by $jI_a X_{ar}$.
^armature-reaction-reactance

The **Synchronous Reactance ($X_s$)** is the sum of these two reactances. It represents the total reactive voltage drop within the machine.
$$\boxed{\quad X_s = X_{al} + X_{ar} \quad}$$
The **Synchronous Impedance ($Z_s$)** is the total internal impedance of the alternator per phase, combining the effective armature resistance ($R_a$) and the synchronous reactance ($X_s$).
$$\boxed{\quad Z_s = R_a + jX_s \quad}$$
In most alternators, the reactance is much larger than the resistance, i.e., $X_s \gg R_a$, so it's often approximated that $Z_s \approx jX_s$.

> [!refer]
> [[Open and Short Circuit Characteristics of an Alternator#Determination of Synchronous Impedance|Determination of Synchronous Impedance]]
> (*from Open Circuit Test (OC) and Short Circuit Test (SC)*)

---
#### Equivalent Circuit of an Alternator
#equivalent-circuit #alternator-model

Using the concept of synchronous impedance, a practical alternator can be modeled by a simple per-phase equivalent circuit. It consists of an ideal voltage source representing the no-load induced EMF ($E_f$) in series with the synchronous impedance ($Z_s$).

Applying KVL to the per-phase equivalent circuit gives the fundamental voltage equation of the alternator:

![[Internal EMF#1. EMF behind Synchronous Impedance ($E_f$)]]

This simplified model is crucial for analyzing alternator performance, including calculating voltage regulation and power characteristics.

---
### Related Concepts
#armature-reaction/related-concepts

> [[Voltage Regulation of an Alternator]]

[[EMF Equation of an Alternator]]
[[Voltage Regulation Methods]]
[[Power-Angle Characteristics for Synchronous Machines]]
[[Constructional Features of Synchronous Machines]]
[[Internal EMF]]