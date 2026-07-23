---
tags:
  - power-systems
  - lfc
  - control-systems
  - interconnected-systems
  - ace
created: 2025-10-14
aliases:
  - Multi-Area LFC
  - Interconnected System LFC
subject: "[[Power System]]"
parent: "[[Load Frequency Control (LFC)]]"
modified: 2026-07-23T21:26:39
---
### Two-Area Load Frequency Control
#load-frequency-control #interconnected-systems #tie-line-control

> **Two-Area Load Frequency Control** extends the LFC problem to an interconnected system consisting of two control areas linked by a transmission line (tie-line). The control objectives are now twofold: not only to regulate the system frequency but also to maintain the net power exchange (tie-line flow) at its scheduled value.

#### System Model and Tie-Line Dynamics
#tie-line-model

The system consists of two [[Single Area Load Frequency Control (Uncontrolled and Controlled Case)|single-area systems]], each with its own governor, turbine, and generator-load dynamics. They are coupled through the tie-line.

The power transferred from Area 1 to Area 2 over a lossless tie-line is:
$$ P_{tie12} = \frac{|V_1||V_2|}{X_{12}} \sin(\delta_1 - \delta_2) $$
where $\delta_1$ and $\delta_2$ are the power angles of the areas' equivalent generators. For small deviations, this can be linearized:
$$ \Delta P_{tie12} = T_{12}(\Delta \delta_1 - \Delta \delta_2) $$
$T_{12}$ is the **synchronizing coefficient** or stiffness of the tie-line. Since $\Delta \delta = 2\pi \int \Delta f dt$, the transfer function for the tie-line power deviation is:
$$\boxed{\quad \Delta P_{tie12}(s) = \frac{2\pi T_{12}}{s}(\Delta F_1(s) - \Delta F_2(s)) \quad}$$
This block connects the two single-area models.

---
#### Uncontrolled Case (Primary Control Only)
#primary-control #uncontrolled-lfc

Consider a step load increase $\Delta P_{D1}$ in Area 1.

**Mechanism**:
1.  The load change initially causes frequency $f_1$ to drop.
2.  Due to the tie-line coupling, the drop in $f_1$ causes power to flow from Area 2 to Area 1, which in turn causes frequency $f_2$ to drop.
3.  Governors in **both** areas respond to their local frequency drops via droop action, increasing their generation.
4.  The system eventually settles at a new, common steady-state frequency $f_{ss}$ which is lower than the nominal frequency. The tie-line power also settles at a new value, meaning Area 2 is now helping to supply the load in Area 1.

**Steady-State Analysis**:
The steady-state frequency deviation is common for both areas:
$$\boxed{\quad \Delta f_{ss} = \frac{-\Delta P_{D1}}{B_1 + B_2} = \frac{-\Delta P_{D1}}{(D_1 + 1/R_1) + (D_2 + 1/R_2)} \quad}$$
The steady-state deviation in tie-line power is:
$$\boxed{\quad \Delta P_{tie12,ss} = \frac{-B_2}{B_1 + B_2} \Delta P_{D1} \quad}$$
**Conclusion**: Primary control alone results in steady-state errors in both frequency and scheduled tie-line power flow.

---
#### Controlled Case (Secondary Control with ACE)
#secondary-control #area-control-error #controlled-lfc

To eliminate both steady-state errors, supplementary integral controllers are used in each area. The control input for these controllers is the **Area Control Error (ACE)**. For interconnected operation, the definition of ACE is modified to include the tie-line power deviation.

**Area Control Error (ACE)**:
The ACE for each area is a linear combination of the tie-line power deviation and the frequency deviation.
-   **For Area 1**:
    $$\boxed{\quad ACE_1 = \Delta P_{tie12} + B_1 \Delta f_1 \quad}$$
-   **For Area 2**:
    $$\boxed{\quad ACE_2 = \Delta P_{tie21} + B_2 \Delta f_2 \quad}$$
where $\Delta P_{tie21} = -\Delta P_{tie12}$. The constant $B_i = D_i + 1/R_i$ is the Area Frequency Response Characteristic (AFRC).

**Mechanism**:
1.  Each area's integral controller acts on its own ACE: $\Delta P_{Ci}(s) = -\frac{K_{Ii}}{s} ACE_i(s)$.
2.  The objective of each controller is to drive its own ACE to zero.
3.  Consider a load change $\Delta P_{D1}$ in Area 1. Both $ACE_1$ and $ACE_2$ will become non-zero initially.
4.  The integral controllers in *both* areas will act to restore their respective ACEs to zero.
5.  When both $ACE_1=0$ and $ACE_2=0$ in the steady state, the only way to satisfy both equations simultaneously is for **$\Delta f_1 = \Delta f_2 = 0$** and **$\Delta P_{tie12} = 0$**.

**Conclusion**: The use of ACE-based integral control ensures that each control area ultimately accounts for its own load changes. This cooperative control action successfully restores both the system frequency and the tie-line power flow to their scheduled values, eliminating all steady-state errors.

---
### Related Concepts
#lfc/related-concepts

> [[Load Frequency Control (LFC)]]

[[Single Area Load Frequency Control (Uncontrolled and Controlled Case)]]
[[Concept of Area Control Error (ACE)]]
[[Governor Control System]]
[[Speed Regulation (Droop)]]