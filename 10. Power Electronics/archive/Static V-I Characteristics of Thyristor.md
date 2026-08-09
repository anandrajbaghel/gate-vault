---
title: Static V-I Characteristics of Thyristor
parent: "[[Power Thyristors]]"
tags: 
aliases:
  - static V-I characteristics of a thyristor
  - terminal characteristics of thyristors
---
### Terminal Characteristics of Thyristors
#thyristors/terminal-characteristics

>SCR is an unidirectional device (very low resistance in the forward conduction and very high resistance in the reverse direction) that blocks the current flow from cathode to anode. Unlike the diode, a thyristor also blocks current flow from anode to cathode until it is triggered into conduction by A proper gate signal between gate and cathode terminals.

![[Pasted image 20250817185834.png]]
##### SCR Static V-I Characteristics has three basic modes of operation

> Describes the relationship between the anode current $(I_A​)$ and the anode-to-cathode voltage $(V_{AK})$ at a constant gate current $(I_G)$

1. [[#Reverse Blocking Mode]]
2. [[#Forward Blocking (off-state) Mode]]
3. [[#Forward Conduction (on-state)]]
##### Reverse Blocking Mode
#thyristors/v-i-characteristics/reverse-blocking-mode 

This mode of operation occurs when the cathode is made positive with respect to the anode. This means the SCR is reverse-biased. In this condition, the outer junctions $J_1$​ and $J_3$​ are reverse-biased, while the inner junction $J_2$​ is forward-biased.

1. A small **reverse leakage current** flows through the device.
2. As the reverse voltage increases, the junctions $J_1​$ and $J_3​$ eventually break down at a voltage called the **reverse breakdown voltage** (VBR​).
3. At this point, a large reverse current flows, and the SCR loses its blocking capability.
4. Continuous operation in this region can lead to permanent damage to the device due to high power dissipation.
##### Forward Blocking (off-state) Mode
#thyristors/v-i-characteristics/forward-blocking-mode

This mode occurs when the anode is positive with respect to the cathode, but the gate current is zero ($I_G​=0$) or insufficient to turn on the device999. In this state, the junctions $J_1$​ and $J_3​$ are forward-biased, but the central junction $J_2$​ is reverse-biased.

1. The SCR is in a non-conducting state, blocking the flow of forward current.
2. A small **forward leakage current** flows, similar to the reverse blocking mode, which is negligible.
3. The SCR remains in this mode until the anode-to-cathode voltage exceeds the **forward breakover voltage** ($V_{BO}​$) or a gate signal is applied.
4. Applying a gate pulse injects charge carriers, leading to the device's turn-on at a voltage lower than $V_{BO​}$.
##### Forward Conduction (on-state)
#thyristors/v-i-characteristics/forward-conduction 

The SCR enters the forward conduction mode when it transitions from the forward blocking mode to the conducting state. This transition is initiated when the anode-to-cathode voltage exceeds

VBO​ or a sufficient gate current is applied

1. Once turned on, the SCR acts like a closed switch, conducting a large forward current with a very small voltage drop across it (typically 1-2 V). This small voltage drop is known as the **on-state voltage drop**
2. The device stays in this mode even after the gate signal is removed, due to its internal regenerative action, as long as the anode current is above a minimum value called the **holding current ($I_H​$)**.
3. To turn off the SCR, the anode current must be reduced below the holding current level, and a reverse voltage must be applied for a sufficient time (commutation). This is unlike a Bipolar Junction Transistor (BJT) or MOSFET, which can be turned off simply by removing the gate signal.

---
### Related Concepts

> [[Thyristor Turn-On Methods]]

[[Static V-I Characteristics of MOSFETs]]
[[Static V-I Characteristics of IGBTs]]
