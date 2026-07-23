---
tags:
  - electrical-machines
  - induction-motors
  - power-flow
  - torque-development
  - efficiency
created: 2025-09-17
aliases:
  - IM Power Flow
  - Induction Motor Power Stages
  - Torque Development in IM
  - Rotor Efficiency in Three-Phase Induction Motor
subject: "[[Electrical Machines]]"
parent:
  - Three-Phase Induction Motors
formula:
  - "Rotor Efficiency (Three-Phase Induction Motors) : $$ \\text{Rotor Efficiency} = \\frac{P_m}{P_g} = \\frac{(1-s)P_g}{P_g} = 1-s $$"
  - "Power-Slip Relationship (Three-Phase Induction Motors) : $$P_g : P_{rcu} : P_m = 1 : s : (1-s)$$"
modified: 2026-07-23T20:46:28
---
### Power Flow Diagram and Torque Development
#induction-motors #power-flow #torque-development

> The **power flow diagram** illustrates the various stages of energy conversion in an induction motor, from the electrical input to the mechanical output, accounting for the losses at each stage. The torque developed by the motor is directly related to this power transfer.

#### Power Flow Diagram (Power Stages)
#power-flow

The power flows sequentially through the motor as follows:

1.  **Stator Electrical Input ($P_{in}$)**
    This is the total 3-phase electrical power supplied to the stator winding.
    $$ P_{in} = \sqrt{3} V_L I_L \cos\theta $$

    ---
    **Stator Losses**
    *   **Stator Copper Loss ($P_{s,cu}$)**: Heat loss in the stator winding ($3 I_1^2 R_1$).
    *   **Stator Core Loss ($P_{core}$)**: Hysteresis and eddy current losses in the stator core.
    ---
    **$\downarrow$**
3.  **Air Gap Power ($P_g$)**
    This is the power transferred from the stator to the rotor across the air gap. It is the input power to the rotor.
    $$P_g = P_{in} - P_{s,cu} - P_{core}$$
    Mathematically, from the equivalent circuit, it is the total power dissipated in the fictitious resistance $R_2'/s$:
    $$\boxed{\quad P_g = 3 I_2'^2 \left(\frac{R_2'}{s}\right) \quad}$$

    ---
    **Rotor Losses**
    *   **Rotor Copper Loss ($P_{rcu}$)**: Heat loss in the rotor bars/winding ($3 I_2'^2 R_2'$). This is the only loss in the rotor's electrical circuit.
	    $$\boxed{\quad P_{rcu} = s \cdot P_g \quad}$$
	    > See [[Equivalent Circuit of a Three-Phase Induction Motor#^rotor-copper-loss-and-gross-meechanical-power-developed|derivation]]
    ---
    **$\downarrow$**

4.  **Gross Mechanical Power Developed ($P_m$ or $P_{dev}$)**
    This is the power converted from electrical to mechanical form. It is the power that drives the rotor.
    $$ P_m = P_g - P_{rcu} $$

    ---
    **Mechanical Losses**
    *   **Friction and Windage Losses ($P_{mech}$)**: Losses due to bearing friction and air resistance against the rotating rotor.
    ---
    **$\downarrow$**

5.  **Shaft Power or Output Power ($P_{out}$ or $P_{sh}$)**
    This is the final, useful mechanical power available at the motor shaft.
    $$ P_{out} = P_m - P_{mech} $$

![[Power Flow in Induction Machines.png]]

---
#### Torque Development
#torque-development

Torque is produced by the interaction of the stator and rotor magnetic fields. The expressions for torque can be directly derived from the power at different stages.

##### Gross Torque (or Developed Torque)
#gross-torque #developed-torque 

This is the total electromagnetic torque developed by the motor. It is related to the power transferred across the air gap ($P_g$).
$$\boxed{\quad T_{g} \text{ or } T_{dev} = \frac{P_g}{\omega_s} = \frac{P_g}{2\pi N_s / 60} \quad}$$
Where $\omega_s$ is the synchronous angular speed in rad/s, and $N_s$ is the synchronous speed in RPM.

---
##### Shaft Torque (or Load Torque)
#shaft-torque #load-torque 

This is the useful torque available at the shaft to drive the mechanical load. It is related to the output power ($P_{out}$).
$$\boxed{\quad T_{sh} = \frac{P_{out}}{\omega_r} = \frac{P_{out}}{2\pi N_r / 60} \quad}$$
Where $\omega_r$ is the actual rotor angular speed in rad/s, and $N_r$ is the rotor speed in RPM.

The difference between the gross torque and shaft torque accounts for the torque required to overcome the mechanical losses ($T_{loss} = P_{mech}/\omega_r$).
$$ T_g = T_{sh} + T_{loss} $$

---
#### The Fundamental Power-Slip Relationship
#slip-power #power-slip-relationship 

A crucial set of relationships, derived from the [[Equivalent Circuit of a Three-Phase Induction Motor|equivalent circuit]], links the air gap power, rotor copper loss, and mechanical power developed through slip ($s$).

We know from the power flow:
1. Rotor Copper Loss: $P_{rcu} = s \cdot P_g$
2. Gross Mechanical Power: $P_m = P_g - P_{rcu} = P_g - s \cdot P_g = (1-s)P_g$ ^gross-mechanical-power

This gives the most important ratio for induction motor analysis:
$$\boxed{\quad P_g : P_{rcu} : P_m = 1 : s : (1-s) \quad}$$

##### Implications
#implications 

* This relationship allows for quick calculation of the power stages if the slip and one of the power values are known.
* It highlights that the rotor copper loss is also called **slip power**, as it is directly proportional to slip.
* Motor efficiency is highly dependent on slip. A lower slip means lower rotor copper loss and higher efficiency.
    $$ \text{Rotor Efficiency} = \frac{P_m}{P_g} = \frac{(1-s)P_g}{P_g} = 1-s $$

---
### Related Concepts
#power-flow/related-concepts

> [[Equivalent Circuit of a Three-Phase Induction Motor]]

[[Torque-Slip Characteristics of Induction Motor]]
[[Concept of Slip]]
[[Losses and Efficiency of Induction Motors]]