---
tags:
  - power-systems
  - lfc
  - control-systems
  - frequency-control
  - ace
created: 2025-10-14
aliases:
  - Single Area LFC
  - LFC of an Isolated Power System
  - Primary and Secondary Frequency Control
subject: "[[Power System]]"
parent: "[[Load Frequency Control (LFC)]]"
modified: 2026-07-23T21:26:29
---
### Single Area Load Frequency Control
#load-frequency-control #primary-control #secondary-control

> **Single Area Load Frequency Control (LFC)** analyzes the frequency regulation of an isolated power system (or a large, coherent area of an interconnected system). The goal is to maintain the system frequency at its nominal value following disturbances, primarily changes in load demand ($\Delta P_D$). The control is typically analyzed in two stages: the fast-acting primary control (uncontrolled case) and the slower, corrective secondary control (controlled case).

#### System Model
#lfc-model

The single area is modeled by three main components, represented by first-order transfer functions in a block diagram:
1.  **Governor Model**: $G_g(s) = \frac{1}{1+sT_g}$
2.  **Turbine Model**: $G_t(s) = \frac{1}{1+sT_t}$
3.  **Generator-Load Model**: $G_p(s) = \frac{K_p}{1+sT_p} = \frac{1/D}{1+s(2H/fD)}$
This forms a closed-loop system with a feedback path representing the [[Speed Regulation (Droop)|governor droop (R)]].

---
#### Uncontrolled Case (Primary Control Only)
#primary-control #uncontrolled-lfc

This case considers only the intrinsic response of the governor-turbine system to a frequency deviation. It is also known as **primary frequency control**.

**Mechanism**:
1.  A step increase in load ($\Delta P_D$) creates a power imbalance.
2.  The generator's kinetic energy supplies the deficit, causing its speed and the system frequency to drop.
3.  The [[Governor Control System]] senses the frequency drop and, due to its droop characteristic, increases the mechanical power input to the generator ($\Delta P_G = -\frac{1}{R} \Delta f$).
4.  The system stabilizes at a new, lower frequency where the increased generation matches the new load.

**Steady-State Analysis**:
At steady state ($t \to \infty$, or $s \to 0$), the power balance equation is:
$$ \Delta P_G - \Delta P_D = \Delta P_{load} = D \cdot \Delta f_{ss} $$
where $D$ is the load damping constant (MW/Hz), representing the frequency sensitivity of the load.
From the governor's droop action, we have $\Delta P_G = -\frac{1}{R} \Delta f_{ss}$. Substituting this into the power balance equation:
$$\begin{align}
-\frac{1}{R} \Delta f_{ss} - \Delta P_D &= D \cdot \Delta f_{ss} \\
-\Delta P_D &= \left( D + \frac{1}{R} \right) \Delta f_{ss}
\end{align}$$
This gives the steady-state frequency deviation for the uncontrolled case:
$$\boxed{\quad \Delta f_{ss} = \frac{-\Delta P_D}{D + \frac{1}{R}} \quad}$$
The term $B = D + \frac{1}{R}$ is called the **Area Frequency Response Characteristic (AFRC)**.
**Conclusion**: Primary control alone cannot restore the frequency to its nominal value; it only arrests the frequency decay and leaves a permanent steady-state error.

---
#### Controlled Case (Secondary Control)
#secondary-control #integral-control #controlled-lfc

To eliminate the steady-state frequency error, a supplementary controller is added. This is **secondary frequency control** or **Automatic Generation Control (AGC)**.

**Mechanism**:
An **integral controller** is added to the system. This controller's job is to automatically reset the frequency to its scheduled value.
1.  The controller measures the frequency deviation, $\Delta f$, and calculates the **Area Control Error (ACE)**. For a single area:
    $$\boxed{\quad \text{ACE} = B \Delta f = \left(D + \frac{1}{R}\right) \Delta f \quad}$$
2.  The integral controller continuously integrates the ACE over time. Its output is a command signal, $\Delta P_C$, sent to the governor's speed changer.
    $$ \Delta P_C(t) = -K_I \int \text{ACE}(t) dt \quad \implies \quad \Delta P_C(s) = -\frac{K_I}{s} \text{ACE}(s) $$
    where $K_I$ is the integral gain.
3.  This command signal forces the governor to further increase or decrease generation until the ACE is driven to zero.
4.  Since ACE is proportional to $\Delta f$, the controller will only stop acting when $\Delta f_{ss} = 0$.

**Steady-State Analysis**:
The presence of the integrator ($1/s$ term) in the forward path of the control loop increases the system type by one with respect to the disturbance input. For a step load change (step disturbance), a Type 1 system will have **zero steady-state error**.
**Conclusion**: The addition of the integral controller (secondary control) successfully eliminates the steady-state frequency error and restores the system frequency to its nominal value after a load disturbance.

---
### Related Concepts
#lfc/related-concepts

> [[Load Frequency Control (LFC)]]

[[Governor Control System]]
[[Speed Regulation (Droop)]]
[[Two-Area Load Frequency Control]]
[[Concept of Area Control Error (ACE)]]
[[Steady-State Error]]
[[Integral Control]]
