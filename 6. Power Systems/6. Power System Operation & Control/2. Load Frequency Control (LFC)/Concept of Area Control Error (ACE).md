---
tags:
  - power-systems
  - lfc
  - control-systems
  - agc
  - tie-line-bias
created: 2025-10-14
aliases:
  - ACE
  - Tie-Line Bias Control
subject: "[[Power System]]"
parent: "[[Load Frequency Control (LFC)]]"
modified: 2026-07-23T21:26:14
---
### Concept of Area Control Error (ACE)
#area-control-error #load-frequency-control #secondary-control

> The **Area Control Error (ACE)** is a composite signal used in the secondary stage of [[Load Frequency Control (LFC)]], also known as Automatic Generation Control (AGC). It serves as the input to an integral controller to automatically correct for frequency deviations and, in interconnected systems, deviations in the scheduled power exchange over tie-lines. The fundamental goal of the control system is to drive the ACE of each control area to zero.

#### Purpose and Objectives
#ace/purpose

The primary control (governor droop) can arrest a frequency decline but leaves a steady-state error. Secondary control, using the ACE signal, is designed to achieve two main objectives:
1.  **Restore System Frequency**: Bring the frequency back to its nominal value (e.g., 50 or 60 Hz) following a disturbance.
2.  **Maintain Scheduled Interchange**: Ensure the net power flow over tie-lines to neighboring areas returns to its scheduled value.

By accomplishing these, the ACE-based control ensures that each control area ultimately meets its own load changes without imposing a long-term burden on its neighbors.

---
#### Formulation of ACE
#ace/formula

The mathematical definition of ACE depends on whether the control area is isolated or part of an interconnection.

##### 1. Single (Isolated) Area
For an isolated system, the only objective is to correct the frequency. The ACE is directly proportional to the frequency deviation.
$$\boxed{\quad \text{ACE} = B \cdot \Delta f \quad}$$
where:
-   $\Delta f = f_{actual} - f_{scheduled}$ is the frequency deviation.
-   $B$ is the **Frequency Bias Factor**.

##### 2. Interconnected Area (Tie-Line Bias Control)
In an interconnected system, the control must also manage power flows. This is achieved through **Tie-Line Bias Control**, where the ACE is a linear combination of the tie-line power error and the frequency error.
$$\boxed{\quad \text{ACE}_i = (P_{tie,i,actual} - P_{tie,i,scheduled}) + B_i (f_{actual} - f_{scheduled}) \quad}$$
This is more commonly written in terms of deviation variables:
$$\boxed{\quad \text{ACE}_i = \Delta P_{tie,i} + B_i \Delta f \quad}$$
-   $\Delta P_{tie,i}$ is the net tie-line power flow deviation for Area `i`. A positive value means the area is exporting more power than scheduled.
-   $\Delta f$ is the frequency deviation (common to all interconnected areas in steady state).
-   $B_i$ is the Frequency Bias Factor for Area `i`.

---
#### Frequency Bias Factor (B)
#frequency-bias-factor

The **Frequency Bias Factor (B)** is a crucial parameter that determines how much a control area should contribute to correcting a frequency deviation. It is a negative constant (in MW/Hz), reflecting that generation should increase when frequency drops.

Ideally, the bias factor is set equal to the area's natural frequency response, known as the **Area Frequency Response Characteristic (AFRC)**.
$$\boxed{\quad B_i = \beta_i = D_i + \frac{1}{R_i} \quad}$$
-   $D_i$: The frequency sensitivity of the area's load (load damping).
-   $R_i$: The equivalent speed regulation (droop) of the generators in the area.

Setting $B_i = \beta_i$ ensures that when a disturbance occurs, the control action is initially confined to the area where the disturbance originated, a principle known as "non-interactive control".

---
#### Role in Automatic Generation Control (AGC)
#agc #integral-control

The calculated ACE is fed into an integral controller, which adjusts the reference power set-point of the generators in the area.
$$ \Delta P_{C,i}(t) = -K_I \int \text{ACE}_i(t) dt $$
The integral action ensures that the controller's output will continue to change as long as the ACE is non-zero. The system only reaches a stable steady state when the controller output stops changing, which occurs only when $\text{ACE}_i = 0$.

When $\text{ACE}_i = \Delta P_{tie,i} + B_i \Delta f = 0$ for all interconnected areas, it forces both the frequency error ($\Delta f$) and the tie-line power error ($\Delta P_{tie,i}$) to return to zero. This elegantly achieves both control objectives simultaneously.

---
### Related Concepts
#ace/related-concepts

> [[Two-Area Load Frequency Control]]

[[Single Area Load Frequency Control (Uncontrolled and Controlled Case)]]
[[Load Frequency Control (LFC)]]
[[Speed Regulation (Droop)]]
[[Integral Control]]
