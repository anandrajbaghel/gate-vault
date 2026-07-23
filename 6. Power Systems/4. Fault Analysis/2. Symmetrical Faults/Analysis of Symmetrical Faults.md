---
tags:
  - power-systems
  - fault-analysis
  - symmetrical-faults
  - short-circuit-analysis
created: 2025-10-12
aliases:
  - Three-Phase Faults
  - 3-Phase Fault Analysis
  - Balanced Faults
  - Analysis of Symmetrical Faults (Three-Phase Faults)
subject: "[[Power System]]"
parent:
  - Fault Analysis
formula:
  - "Fault Current (LLL or LLLG fault) : $$I_f = \\frac{V_{th}}{Z_{th}}$$"
modified: 2026-07-23T21:22:24
---
### Analysis of Symmetrical Faults (Three-Phase Faults)
#power-systems/fault-analysis #symmetrical-faults

> A **symmetrical fault**, or **three-phase balanced fault**, is ==a short circuit that involves all three phases of a power system simultaneously==. The two types are <u>line-to-line-to-line (LLL)</u> and <u>line-to-line-to-line-to-ground (LLLG)</u>. Although they are the rarest type of fault to occur in practice, their analysis is crucial because ==they typically result in the **largest fault currents**, which determine the required interrupting capacity of circuit breakers and other protective equipment==.

#### Key Characteristic: System Remains Balanced
#symmetrical-faults/balanced-system

==The defining feature of a symmetrical fault is that the three-phase system remains perfectly balanced, even after the fault occurs.== The currents and voltages in each phase are equal in magnitude and displaced by 120°. This symmetry provides a major simplification for analysis:

* The entire three-phase system can be analyzed using a **per-phase equivalent circuit**.

> [!memory] Important
> ==Only the **[[Concept of Symmetrical Components#1. Positive Sequence Components (Subscript 1)|positive sequence network]]** is required, as no [[Analysis of Unbalanced Systems (Introduction)|unbalance]] exists to create negative or zero sequence components.==
> 
> > [!examtip] Exam Note
> > For any symmetrical (3-phase) fault, only the positive sequence network is active.
> > 
> > ==Neutral grounding and zero-sequence impedance have no effect on 3-phase fault current.==

---
#### Fault Current Calculation using Thevenin's Theorem
#short-circuit-calculation

> [!refer]
> [[Thevenin's Theorem]]
> [[Z-bus Matrix#🔥Application in Fault Analysis|Z-bus Matrix Application in Fault Analysis]]

==The fault current at any point in the network is calculated by applying Thevenin's theorem to the positive sequence network.== The network is simplified into an equivalent voltage source ($V_{th}$) and an equivalent impedance ($Z_{th}$) as viewed from the fault location.

* **$V_{th}$ (Thevenin Voltage):** ==This is the open-circuit voltage at the fault point before the fault occurs (the pre-fault voltage).== For most studies, the system is assumed to be operating at nominal voltage and unloaded, so ==$V_{th}$ is typically taken as **1.0 p.u.**==
* **$Z_{th}$ (Thevenin Impedance):** ==This is the equivalent impedance of the positive sequence network looking back into the system from the fault point, with all voltage sources short-circuited.==

> [!info] Neglecting Resistance in Fault Analysis
> In high-voltage power systems, the network's inductive reactance is significantly larger than its resistance ($X \gg R$). For short-circuit calculations, it is standard practice to ignore resistance entirely to simplify the math, meaning $Z_{th} \approx jX_{th}$.
> 
> > [!refer]
> > [[Internal EMF#Different Models for Internal EMF]] for how this applies to machine reactances.

==The symmetrical RMS fault current is then calculated as:==
$$\boxed{\quad I_f = \frac{V_{th}}{Z_{th}} \quad}$$

> [!pyq]- PYQ : 2019
> ![[ee_2019#^q50]]

---
#### Time-Varying Nature of Fault Current
#fault-current-transients

The fault current supplied by a synchronous generator is not constant but varies with time. This is due to the changing reactance of the machine immediately following a fault. The fault current is divided into three stages:

1.  **Subtransient Period:** Lasts for the first few cycles (10-20 ms). The fault current is at its maximum value, limited by the **subtransient reactance ($X_d''$)**. This is the value used for setting the interrupting ratings of circuit breakers.
    $$\boxed{\quad I_f'' = \frac{V_{th}}{X_d''} \quad}$$
2.  **Transient Period:** A period of decay following the subtransient stage, lasting for about 0.5 to 2 seconds. The current is limited by the **transient reactance ($X_d'$)**.
    $$\boxed{\quad I_f' = \frac{V_{th}}{X_d'} \quad}$$
3.  **Steady-State Period:** The final, sustained value of the fault current after all transients have died out. It is limited by the **synchronous reactance ($X_d$)**.
    $$\boxed{\quad I_f = \frac{V_{th}}{X_d} \quad}$$
The relationship between the reactances and currents is: $X_d'' < X_d' < X_d$, which implies $I_f'' > I_f' > I_f$.

---
#### Short Circuit MVA
#short-circuit-mva

The **Short Circuit MVA (or Fault Level)** is a measure of the severity of a fault and the strength of the system at that point. A higher fault level indicates a "stiffer" system (lower impedance).

![[Short Circuit MVA#Short Circuit MVA]]

---
### Related Concepts
#power-systems/related-concepts

> [[Fault Analysis]]

[[Z-bus Matrix#🔥Application in Fault Analysis|Application of Z-bus Matrix in Fault Analysis]]
[[Current Limiting Reactors]]
[[Per-Unit System]]
[[Sequence Impedances and Networks of Synchronous Machines]]
[[Analysis of Single Line-to-Ground (LG) Fault]] (Unsymmetrical)
[[Parallel Sources in Fault Analysis]]
[[Internal EMF]]