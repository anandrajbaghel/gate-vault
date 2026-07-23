---
tags:
  - dynamic-braking
  - rheostatic-braking
  - electric-braking
  - energy-dissipation
  - dc-motors
  - electrical-machines
  - fundamental-concept
created: 2025-06-07
aliases:
  - Rheostatic Braking
subject:
  - "[[Electrical Machines]]"
parent:
  - Electric Braking
modified: 2026-07-23T21:00:58
---
### Dynamic Braking
#dynamic-braking #rheostatic-braking #electric-braking

> **Dynamic Braking**, also known as **Rheostatic Braking**, is a method of electric braking where the motor is disconnected from its power source and its armature terminals are connected across a variable resistor, known as the **braking resistor**. The motor then acts as a generator, converting the kinetic energy of the load into electrical energy, which is then dissipated as heat in the braking resistor.

Unlike [[Regenerative Braking|regenerative braking]], energy is wasted as heat rather than returned to the supply. However, it provides effective braking without relying on the power source being receptive.

#### Principle of Operation
#dynamic-braking-principle

The process for a DC motor is as follows:
1.  **Disconnection**: The motor's armature is disconnected from the main power supply ($V_t$).
2.  **Field Excitation**: The field winding must remain excited by a separate source (or by residual magnetism in a shunt motor) to produce a magnetic flux ($\phi$).
3.  **Generator Action**: The motor, now driven by the momentum of its load, continues to rotate. Its conductors cut the magnetic flux, inducing a back-EMF ($E_b = K\phi N$).
4.  **Braking Current**: This induced EMF drives a current ($I_b$) through the closed circuit formed by the armature and the braking resistor ($R_b$).
    $$ I_b = \frac{E_b}{R_a + R_b} $$
    where $R_a$ is the armature resistance.
5.  **Braking Torque**: The flow of this braking current through the field flux produces a counter-torque ($T_b \propto \phi I_b$) that opposes the motion of the rotor, thus creating a braking effect.
6.  **Energy Dissipation**: The electrical energy generated is dissipated as heat in the resistor bank according to the formula $P = I_b^2 (R_a + R_b)$.

The magnitude of the braking torque can be controlled by varying the resistance of the braking resistor ($R_b$). A lower resistance results in a higher braking current and a stronger braking torque.

#### Application in Different Machine Types
#dc-motor-braking #induction-motor-braking

1.  **DC Motors**:
    *   Dynamic braking is straightforward to implement, especially for separately excited and shunt motors. The armature is simply switched from the supply to the braking resistor.
    *   For series motors, the field winding must be disconnected from the armature and connected to a separate supply, or the connections must be reversed to ensure the field current continues to flow in the same direction to maintain flux.

2.  **AC Induction Motors**:
    *   Dynamic braking can be achieved by disconnecting the stator from the AC supply and injecting a DC current into one or two of the stator phases.
    *   This DC current creates a stationary magnetic field in the air gap.
    *   The rotating rotor bars cut this stationary field, inducing an EMF and current in the rotor.
    *   The interaction produces a braking torque. The kinetic energy is dissipated as heat in the rotor bars themselves.

#### Advantages and Disadvantages
#dynamic-braking-pros-cons

##### Advantages
*   **Independent of Power Supply**: It can be used even if the main power supply fails, as long as the field can be excited.
*   **Controlled Braking**: Provides smooth and controllable braking by adjusting the braking resistor.
*   **Simple and Reliable**: The control logic is relatively simple compared to regenerative braking.

##### Disadvantages
*   **Energy Inefficiency**: All the braking energy is wasted as heat.
*   **Braking Resistors Required**: Requires large, expensive resistor banks capable of dissipating significant amounts of heat. This adds cost, size, and weight to the system.
*   **No Holding Torque**: Like regenerative braking, the braking effect diminishes as the speed decreases and disappears at standstill. It cannot hold a load stationary.

#### Comparison with Other Braking Methods

| Feature | Regenerative Braking | Dynamic Braking | Plugging |
| :--- | :--- | :--- | :--- |
| **Energy** | Returned to supply (efficient) | Dissipated as heat (wasted) | Wasted in machine and supply |
| **Braking Torque** | Smooth, controlled | Smooth, controlled | Very high, harsh |
| **Complexity** | High (requires receptive source) | Medium (needs resistor bank) | Simple (reverses supply) |
| **Application** | EVs, elevators, cranes | Locomotives, industrial drives | Emergency stop, quick reversal |

---
### Related Concepts

[[Regenerative Braking]] (The energy-saving alternative)
[[Plugging (Counter-current Braking)]] (The harshest braking method)
[[Electric Braking]] (The parent category)
[[DC Motors - Characteristics and Speed Control]] (Where dynamic braking is often applied)
[[Losses and Efficiency in Electrical Machines]] (The braking energy is a dissipated loss)