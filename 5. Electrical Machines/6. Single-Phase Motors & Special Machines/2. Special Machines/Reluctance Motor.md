---
tags:
  - electrical-machines/special-machines
  - reluctance-motor
  - synchronous-motor
  - variable-reluctance
created: 2025-07-28
aliases:
  - Reluctance Motor
  - Synchronous Reluctance Motor
  - SynRM
subject: "[[Electrical Machines]]"
parent:
  - Single-Phase Induction Motors and Special Machines
modified: 2026-07-23T20:57:03
---
### Reluctance Motor
#reluctance-motor #synchronous-motor #special-machines

> A [[reluctance]] motor is a type of [[synchronous motors|synchronous motor]] that operates based on the principle of **variable reluctance**. ==It has a simple and rugged construction, with no windings, brushes, or permanent magnets on its rotor.== The torque is produced because ==the salient-pole rotor tends to align itself with the stator's rotating magnetic field (RMF) in a position of minimum magnetic reluctance==.

![[Reluctance Motor.gif]]


---
#### Principle of Operation
#reluctance-principle

The fundamental principle is that a piece of ferromagnetic material placed in a magnetic field will experience a force that tries to align it with the flux lines in a way that minimizes the reluctance of the magnetic path.

1.  **Stator Field**: The three-phase stator winding, when energized, produces a standard [[Rotating Magnetic Field (RMF)|Rotating Magnetic Field (RMF)]] that rotates at synchronous speed ($N_s$).
2.  **Rotor Action**: The rotor is constructed with [[Salient Pole Rotor.png|salient poles]] (protruding sections) to create a non-uniform air gap. The axis along the salient poles is the path of low reluctance (the **direct-axis**), and the axis between the poles is the path of high reluctance (the **quadrature-axis**). ![[D-axis & Q-axis Salient Pole Machine.png]]
3.  **Torque Production**: The stator's RMF exerts a magnetic "pull" on the salient poles of the rotor. This pull creates a **reluctance torque**, which continuously drags the rotor poles along with the rotating field. The rotor thus "locks" into synchronism with the RMF and runs at a constant speed, $N_s$.

---
#### Construction
#reluctance-motor/construction

*   **Stator**: The stator is identical to that of a standard three-phase induction or synchronous motor, containing a distributed three-phase winding.
*   **Rotor**: The rotor is the defining component. It is a cylindrical iron core with salient poles or cutouts. Crucially, it has **no DC field winding or permanent magnets**. To make the motor self-starting, a squirrel-cage winding (damper bars) is also embedded in the rotor structure.

---
#### Torque Production and Characteristics
#reluctance-torque

The reluctance motor can be seen as a salient pole synchronous machine with zero field excitation ($E_f = 0$). The torque is purely **reluctance torque**. From the [[Salient Pole Machines - Two Reaction Theory|Two Reaction Theory]], the power equation for a machine with no excitation is:
$$\boxed{\quad P = |V_t|^2 \frac{X_d - X_q}{2X_d X_q} \sin(2\delta) \quad}$$

> [!info]- Full Power Equation of a Salient Pole Machine with excitation ($E_f$)
> ![[Power-Angle Characteristics for Synchronous Machines#Power Equation for a Salient Pole Alternator]]

The torque is given by $T = P/\omega_s$. This equation shows that:
*   Torque exists only if there is saliency, i.e., the direct-axis reactance ($X_d$) is not equal to the quadrature-axis reactance ($X_q$).
*   The torque is proportional to $\sin(2\delta)$, meaning the maximum torque (pull-out torque) occurs at a load angle $\delta = 45^\circ$.

##### Key Characteristics:
*   **Starting**: The motor starts as an induction motor due to the squirrel-cage winding. As it accelerates to a speed close to synchronous speed, the reluctance torque becomes dominant and "pulls" the rotor into synchronism.
*   **Running Speed**: It runs at a constant synchronous speed, $N_s = 120f/P$.
*   **Power Factor**: Reluctance motors have a characteristically **low, lagging power factor**. This is because they must draw all their magnetizing current from the AC supply to establish the air-gap flux, as there is no separate DC excitation source.
*   **Torque Density**: They generally have a lower torque-per-unit-volume compared to induction or permanent magnet motors.
*   **Efficiency**: Generally lower than that of an equivalent induction motor.

---
#### Note on Switched Reluctance Motors (SRM)
#switched-reluctance-motor #srm 

It is important to distinguish the synchronous reluctance motor from a **Switched Reluctance Motor (SRM)**. An SRM is a completely different machine that is [[Singly and Doubly Excited Systems#Singly Excited Systems|singly-excited]] (only stator is wound), has salient poles on both stator and rotor, and operates by sequentially switching DC current to the stator phases to pull the rotor from one position to the next. It is not a synchronous motor and requires a power electronic controller and position feedback.

---
### Advantages and Disadvantages

**Advantages**:
*   Simple, cheap, and extremely rugged rotor construction.
*   No brushes, commutator, or permanent magnets.
*   No rotor copper losses (in synchronous operation).
*   Can be built for high-temperature operation due to the absence of magnets.

**Disadvantages**:
*   Low power factor and efficiency.
*   Lower torque density than other motor types.
*   Requires a starting mechanism (squirrel cage).
*   Can have significant torque ripple and noise.

---
### Applications
Reluctance motors are used in applications requiring constant speed where simplicity and low cost are more important than high performance.
*   Textile industry (spinning and weaving machines).
*   Signaling devices, timers, and clocks.
*   Certain types of pumps and fans.

---
### Related Concepts
#reluctance-motor/related-concepts

> [[Salient Pole Machines - Two Reaction Theory]]

[[Stepper Motors]] (Especially the Variable Reluctance type)
[[Rotating Magnetic Field (RMF)]]
[[Power-Angle Characteristics for Synchronous Machines]]
