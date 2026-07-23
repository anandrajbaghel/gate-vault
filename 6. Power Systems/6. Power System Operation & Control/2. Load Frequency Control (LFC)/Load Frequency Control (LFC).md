---
tags:
  - power-systems
  - lfc
  - power-system-control
  - frequency-control
  - ace
  - agc
created: 2025-09-08
aliases:
  - LFC
  - Automatic Generation Control
  - AGC
  - Tie-Line Bias Control
subject: "[[Power System]]"
parent:
  - Power System Control
  - Power System Operation
modified: 2026-07-23T21:34:38
---
### Load Frequency Control (LFC)
#load-frequency-control #automatic-generation-control

> **Load Frequency Control (LFC)**, ==also known as **Automatic Generation Control (AGC)**, is a crucial control strategy in power systems designed to maintain the system's frequency at its nominal value and to regulate the power interchange between interconnected control areas to their scheduled values==. This is achieved by continuously balancing the real power generation against the ever-changing load demand and losses.

The entire LFC system is a [[Open-Loop and Closed-Loop (Feedback) Control Systems#Closed-Loop (Feedback) Control System|closed-loop feedback]] control system.

#### Objectives of LFC
#lfc/objectives #load-frequency-control/objectives 

1. **Frequency Regulation**: To ensure that the steady-state frequency error ($\Delta f$) is zero following a load change.
2. **Tie-Line Power Regulation**: In an interconnected system, to ensure that the steady-state error in the net power flow on the tie-lines ($\Delta P_{tie}$) is zero.

---
#### Control Loops

##### 1. Primary LFC (Governor Control)
#primary-control #governor-droop

This is the first and fastest line of defense against frequency deviations. It is a local, [[Proportional (P) Controller|proportional control]] action performed by the governor of each generator.
* **Principle**: The governor is set to have a "[[drooping]]" characteristic, defined by its **speed regulation parameter (R)**.
* **Action**: If the system frequency drops, the governor automatically increases the mechanical power input to the generator's turbine.
* **Equation**: The change in generator mechanical power ($\Delta P_g$) is proportional to the frequency deviation ($\Delta f$).
    $$\boxed{\quad \Delta P_g = -\frac{1}{R} \Delta f \quad}$$
* **Limitation**: Primary control alone will **stabilize** the frequency after a disturbance but will **not** restore it to the nominal value. It always results in a non-zero steady-state frequency error.

---
##### 2. Secondary LFC (Integral Control / AGC)
#secondary-control #area-control-error

This is a slower, centralized, and supplementary control that acts to eliminate the steady-state errors left by the primary control.
* **Principle**: An integral controller is used to sense the **Area Control Error (ACE)** and adjust the reference power set-point ($\Delta P_{ref}$) of the generators in the area.
* **Action**: The integral action continues until the ACE is driven to zero, which in turn brings both the frequency deviation and tie-line power deviation back to zero.

---
#### LFC Models

##### Single-Area System
#single-area-lfc

In an isolated power system, the only goal is to regulate frequency.
* The steady-state frequency deviation after a load change $\Delta P_D$ with only primary control is:
    $$\boxed{\quad \Delta f_{ss} = \frac{-\Delta P_D}{D + 1/R} \quad}$$
    where $D$ is the load damping constant and $R$ is the governor speed regulation.
* The **Area Control Error (ACE)** for a single area is defined as:
    $$\boxed{\quad ACE = B \Delta f \quad}$$
    where $B$ is the area's frequency bias factor, with units of MW/Hz.
* The secondary control loop adjusts the generation to force $ACE \to 0$, which implies $\Delta f \to 0$.

---
##### Two-Area System (Interconnected)
#two-area-lfc #tie-line-bias-control

This is the practical case for large power grids. Each control area is responsible for handling its own load changes while maintaining scheduled power exchange with its neighbors.
* The control objective is to maintain $\Delta f = 0$ and $\Delta P_{tie} = 0$.
* The **Area Control Error (ACE)** for a given area (e.g., Area 1, connected to Area 2) is a linear combination of the frequency deviation and the tie-line power deviation.
    $$\boxed{\quad ACE_1 = B_1 \Delta f_1 + \Delta P_{tie, 12} \quad}$$
    Where:
    * $B_1$ is the frequency bias factor for Area 1.
    * $\Delta f_1$ is the frequency deviation in Area 1.
    * $\Delta P_{tie, 12}$ is the deviation in the power flowing *out* of Area 1 to Area 2.
* By using this composite ACE as the control signal, each area's AGC will automatically respond to correct for load changes within its own boundaries, thus restoring both frequency and scheduled tie-line flow. This is known as **Tie-Line Bias Control**.

---
### Related Concepts
#related-concepts

> [[Power System Operation and Control]]

[[Classification of Power System Stability|Power System Stability]] (Specifically, frequency stability)
[[Automatic Voltage Regulator (AVR)]]
[[Swing Equation]] (Describes the generator rotor dynamics)
[[Economic Load Dispatch (ELD) neglecting losses|ELD without losses]] & [[Economic Load Dispatch (ELD) including losses|ELD with losses]] (AGC/LFC determines the total generation change, while ELD determines how to distribute that change among the units)
[[Load Frequency Control (LFC)]] (The LFC is a classic multi-variable feedback control system)
[[Control Systems]]
