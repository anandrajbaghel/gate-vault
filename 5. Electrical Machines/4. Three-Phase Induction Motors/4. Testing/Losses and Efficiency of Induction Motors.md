---
tags:
  - electrical-machines
  - induction-motors
  - losses
  - efficiency
  - power-flow
created: 2025-09-17
aliases:
  - IM Losses
  - Induction Motor Efficiency
subject: "[[Electrical Machines]]"
parent:
  - Three-Phase Induction Motors
  - "[[Induction Machines]]"
modified: 2026-07-23T20:50:04
---
### Losses and Efficiency of Induction Motors
#induction-motors #losses #efficiency

> The efficiency of an induction motor is a measure of how effectively it converts electrical energy into useful mechanical work. It is defined as the ratio of the output mechanical power to the input electrical power. Understanding the various losses that occur during this conversion process is essential for calculating efficiency and analyzing motor performance.

> [!success]- Power Flow in Induction Machine
> ![[Power Flow Diagram and Torque Development#Power Flow Diagram (Power Stages)]]

---
#### Classification of Losses
#losses

The losses in a three-phase induction motor are broadly classified into two categories: constant losses and variable losses.

##### 1. Constant Losses
These losses are considered to be constant for a motor operating at a constant supply voltage, frequency, and speed.
*   **Stator Core (or Iron) Loss ($P_{core}$)**: This consists of hysteresis and eddy current losses in the stator core. It depends on the supply voltage and frequency, which are typically constant.
*   **Mechanical Losses ($P_{mech}$)**: These are the friction losses in the bearings and windage losses due to air resistance against the rotating rotor.

##### 2. Variable Losses
These losses vary with the load on the motor, as they are dependent on the current drawn.
* **Stator Copper Loss ($P_{s,cu}$)**: The heat loss in the stator winding due to its resistance.
    $$\boxed{\quad P_{s,cu} = 3 I_1^2 R_1 \quad}$$
    Where $I_1$ is the stator current per phase and $R_1$ is the stator resistance per phase.
* **Rotor Copper Loss ($P_{rcu}$)**: The heat loss in the rotor winding or bars. This is the most significant variable loss and is directly dependent on slip.
    $$\boxed{\quad P_{rcu} = 3 I_2'^2 R_2' \quad}$$
    ==A crucial relationship links this loss to the air gap power ($P_g$) and slip ($s$):==
    $$\boxed{\quad P_{rcu} = s \cdot P_g \quad}$$
    This loss is also known as **slip power**. ^rotor-copper-loss

---
#### Power Flow and Efficiency
#power-flow #efficiency

The [[Power Flow Diagram and Torque Development#Power Flow Diagram (Power Stages)|power flow diagram]] provides a clear picture of how input power is converted to output power and where the losses occur.

The overall efficiency ($\eta$) of the motor is:
$$\begin{align}
\boxed{\eta = \frac{\text{Output Power}}{\text{Input Power}} = \frac{P_{out}}{P_{in}}}
\end{align}$$
$$\begin{align}
\eta = \frac{P_{in} - \text{Total Losses}}{P_{in}}
\end{align}$$

---
#### Condition for Maximum Efficiency
#maximum-efficiency

Similar to other electrical machines, ==the efficiency of an induction motor is maximum when the losses that are dependent on the load are equal to the losses that are independent of the load==.

$$\boxed{\quad \text{Variable Losses} = \text{Constant Losses} \quad}$$
In an induction motor, this means:
$$\boxed{\quad (P_{s,cu} + P_{rcu}) = (P_{core} + P_{mech}) \quad}$$
==The condition for maximum efficiency occurs at a specific load current (and hence a specific slip)== where the total copper losses equal the sum of the core and mechanical losses.

---
### Related Concepts
#losses/related-concepts

> [[Power Flow Diagram and Torque Development]]

[[Equivalent Circuit of a Three-Phase Induction Motor]]
[[Concept of Slip]]
[[No-Load and Blocked Rotor Tests]]