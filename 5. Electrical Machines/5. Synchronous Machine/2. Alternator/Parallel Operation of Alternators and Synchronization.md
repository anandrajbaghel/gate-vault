---
tags:
  - electrical-machines/synchronous-machines
  - power-system-operation
  - parallel-operation
  - synchronization
created: 2025-07-20
aliases:
  - Paralleling Alternators
  - Synchronization of Generators
  - Synchronizing
  - Synchroscope
  - Synchronizing Power
subject: "[[Electrical Machines]]"
parent: "[[Synchronous Machines]]"
formula:
  - "Conditions for Synchronization : $$\\begin{align*} \\text{1. } & \\text{Equal Voltage Magnitudes} \\quad (|V_{\\text{incoming}}| = |V_{\\text{busbar}}|) \\\\ \\text{2. } & \\text{Same Frequency} \\quad (f_{\\text{incoming}} = f_{\\text{busbar}}) \\\\ \\text{3. } & \\text{Same Phase Sequence} \\\\ \\text{4. } & \\text{Zero Phase Angle Difference}\\end{align*}$$"
modified: 2026-07-23T20:52:48
---
### Parallel Operation of Alternators and Synchronization
#parallel-operation #synchronization #power-system-operation 

> Parallel operation of alternators involves connecting two or more generators to a common busbar to supply a larger load. The process of correctly connecting an incoming alternator to a live busbar is called **synchronization**. This is a fundamental practice in power generation systems.

#### Reasons for Parallel Operation
#reliability #efficiency #load-sharing

Operating alternators in parallel offers several significant advantages:
1.  **Increased Capacity**: Multiple units can supply a total load that is greater than the capacity of any single unit.
2.  **Reliability & Continuity**: If one generator fails or needs to be taken offline for maintenance, the remaining units can continue to supply the load, preventing a total power outage.
3.  **Efficiency**: Generators are most efficient when operating near their rated load. During periods of light load, one or more units can be shut down, allowing the remaining units to operate in their high-efficiency range.
4.  **Flexibility for Maintenance**: Individual units can be taken out of service for scheduled inspection and maintenance without interrupting the power supply.

---
#### Conditions for Synchronization
#synchronization-conditions #synchroscope #lamp-method 

For a smooth and safe connection of an incoming alternator to a live busbar (or another alternator), the following four conditions must be met at the instant the synchronizing switch is closed. Failure to meet these conditions can result in severe mechanical stresses and large circulating currents, potentially damaging the machines.

$$\boxed{\quad
\begin{align*}
\text{1. } & \text{Equal Voltage Magnitudes} \quad (|V_{\text{incoming}}| = |V_{\text{busbar}}|) \\
\text{2. } & \text{Same Frequency} \quad (f_{\text{incoming}} = f_{\text{busbar}}) \\
\text{3. } & \text{Same Phase Sequence} \\
\text{4. } & \text{Zero Phase Angle Difference}
\end{align*}
\quad}$$

> [!warning] Instrument Used
> The phase sequence is checked only once during installation. The other three conditions are checked and adjusted during each synchronization procedure using instruments like voltmeters, frequency meters, and a **[[synchroscope]]** or a **lamp method**.

---
#### Procedure for Synchronization
#synchroscope

1. The prime mover of the incoming alternator is started and its speed is adjusted so its frequency is slightly higher than the busbar frequency. This causes the phase angle to change slowly.
2. The field excitation of the incoming machine is adjusted until its terminal voltage equals the busbar voltage.
3. The synchroscope is observed. It indicates the difference in frequency (by its speed of rotation) and the phase angle difference (by its pointer position).
4. When the synchroscope pointer rotates very slowly and approaches the 12 o'clock (zero phase difference) position, the synchronizing breaker is closed.

---
#### Load Sharing Between Parallel Alternators
#load-sharing #governor-droop #excitation-control

Once synchronized, the alternators are "locked" to the system frequency. The sharing of real and reactive power among them is controlled independently.
##### 1. Real Power (kW) Sharing
#real-power-sharing 

The real power delivered by an alternator is controlled by adjusting the power input from its prime mover.

- For the dynamic hardware control loop behind this adjustment, see [[Governor Control System]].
- For the steady-state load-allocation calculations, see [[Speed Regulation (Droop)]].

---
##### 2. Reactive Power (kVAR) Sharing
#reactive-power-sharing

The reactive power delivered by an alternator is controlled by adjusting its **DC field excitation current**.
* To make an alternator deliver more reactive power (i.e., operate at a more lagging power factor), its field excitation is increased. This increases the magnitude of its internal EMF, $E_f$.
* Changing the excitation primarily affects the reactive power output and has a negligible effect on the real power output.

$$\boxed{\quad
\begin{align*}
\text{Real Power (kW)} & \longleftrightarrow \text{Prime Mover Governor Control} \\
\text{Reactive Power (kVAR)} & \longleftrightarrow \text{Field Excitation Control}
\end{align*}
\quad}$$

---
#### Synchronizing Power
#synchronizing-power

If an alternator's rotor angle $\delta$ deviates from its steady-state value due to a disturbance, a restoring power is developed that pushes it back towards the stable operating point. This is called the **synchronizing power**. The stiffness of this restoring action is given by the synchronizing power coefficient:
$$P_{sync} = \frac{dP}{d\delta} = \frac{3|E_f||V_t|}{X_s} \cos\delta$$
This synchronizing power is what keeps the machines operating in unison.

---
### Related Concepts
#parallel-operation/related-concepts

> [[Power-Angle Characteristics for Synchronous Machines]]

[[Effect of Excitation on Armature Current|V-curves]]
[[Effect of Excitation on Armature Current|Inverted V-curves]]
[[Equivalent Circuit and Phasor Diagram of an Alternator]]
[[EMF Equation of an Alternator]]
[[Steady-State Stability]]
[[Infinite Bus]]
[[Load Frequency Control (LFC)]]
