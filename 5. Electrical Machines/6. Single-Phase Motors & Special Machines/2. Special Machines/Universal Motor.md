---
tags:
  - electrical-machines/special-machines
  - universal-motor
  - ac-dc-motor
  - series-motor
created: 2025-07-26
aliases:
  - Universal Motor
  - AC Series Motor
subject: "[[Electrical Machines]]"
parent:
  - Single-Phase Induction Motors and Special Machines
modified: 2026-07-23T20:57:18
---
### Universal Motor
#universal-motor #ac-series-motor #special-machines

> A universal motor is a special type of motor that is designed to operate on either single-phase AC or DC supply at approximately the same speed and output. It is essentially a **series-wound DC motor** that has been specifically modified to work effectively on AC power. Its ability to run at very high speeds (well above the 3000/3600 rpm limit of induction motors) makes it very useful in compact, high-power applications.

#### Construction
#universal-motor/construction

The construction of a universal motor is identical to that of a conventional DC series motor, with two key modifications for AC operation:
1.  **Laminated Core**: Both the stator core and the field poles (as well as the armature) are made of laminations. This is essential to minimize the **eddy current losses** that would otherwise be significant when the field is subjected to the alternating flux of an AC supply.
2.  **Windings**: It has a field winding on the stator and an armature winding on the rotor, with a commutator and brushes to supply current to the armature. The field winding and armature winding are connected in series.

---
#### Principle of Operation
#universal-motor/principle

The motor's ability to run on both AC and DC stems from its series connection.
*   **On DC Supply**: It behaves exactly like a standard DC series motor. The field winding produces a magnetic field, and the armature conductors carry current within this field, producing a torque according to the motor principle. Since $\Phi \propto I_a$, the torque is proportional to the square of the armature current ($T \propto I_a^2$).

*   **On AC Supply**: This is where its unique property is demonstrated.
    *   Because the field and armature windings are in series, the same current flows through both. Therefore, the field flux ($\Phi$) and the armature current ($I_a$) are in phase (or nearly in phase).
    *   During the positive half-cycle of the AC supply, the flux and armature current are in a certain direction, producing a unidirectional torque.
    *   During the negative half-cycle, the direction of the supply current reverses. This simultaneously reverses **both** the direction of the field flux and the direction of the armature current.
    *   Since torque is proportional to the product of flux and armature current ($T \propto \Phi \times I_a$), the direction of the torque remains the same:
        $$ \text{Torque} \propto (-\Phi) \times (-I_a) = \Phi I_a $$
    *   Therefore, the motor develops a pulsating but unidirectional torque throughout the entire AC cycle, causing the rotor to turn continuously.

---
#### Characteristics
#universal-motor/characteristics

*   **Torque-Speed Characteristic**: It exhibits the typical characteristic of a series motor:
    *   **Very high starting torque**.
    *   Variable speed: The speed is low at high loads and very high at low loads.
    *   The motor must **never be operated at no-load**, as the speed can theoretically rise to a dangerously high value and cause mechanical damage.
*   **Performance on AC vs. DC**: For the same supply voltage, the motor's performance is generally better on DC than on AC.
    *   **Speed**: The speed is lower on AC due to the voltage drop across the series reactance of the field and armature windings ($jI_a(X_{se} + X_a)$), which is absent in DC operation.
    *   **Efficiency**: Lower on AC due to higher iron losses (eddy currents and hysteresis) and reactance drop.
    *   **Power Factor**: On AC, the motor has a lagging power factor (typically 0.7-0.9) due to the inductive reactance of the windings.
    *   **Sparking**: Commutation is more problematic on AC, leading to more severe sparking at the brushes.

---
#### Applications
#universal-motor/applications
Universal motors are used where a high power-to-weight ratio, high speed, and high starting torque are required. Their ability to run on standard AC mains makes them extremely popular in:
*   **Portable Power Tools**: Drills, saws, sanders.
*   **Home Appliances**: Vacuum cleaners, blenders, food mixers, sewing machines.
*   **Other**: Hair dryers, grinders.

---
### Related Concepts
#universal-motor/related-concepts

> [[Types of DC Motors]]

[[Principle of Operation of DC Motors]]
[[Commutation and Methods of Improvement]]
