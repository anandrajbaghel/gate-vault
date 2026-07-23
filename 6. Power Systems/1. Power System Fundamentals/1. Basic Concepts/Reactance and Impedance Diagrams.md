---
tags:
  - power-system
  - power-system/fundamentals
  - power-system-analysis
  - equivalent-circuit
created: 2025-10-11
aliases:
  - Impedance Diagram
  - Reactance Diagram
  - Per-Phase Equivalent Circuit
subject: "[[Power System]]"
parent:
  - Power System Fundamentals
modified: 2026-07-16
---
### Reactance and Impedance Diagrams
#impedance-diagram #reactance-diagram #power-system-analysis

> ==Impedance and Reactance diagrams are the per-phase equivalent circuits derived from a **[[Single Line Diagram Representation|Single Line Diagram (SLD)]]**.== They are the essential tools for performing quantitative analysis of a power system, such as load flow and fault studies. These diagrams are almost universally drawn using **[[Per-Unit System|per-unit]]** quantities to simplify calculations across different voltage levels.

#### Impedance Diagram
#equivalent-circuit/impedance

An impedance diagram is a complete per-phase equivalent circuit of the power system. It aims to represent the system as accurately as possible under steady-state operating conditions.

-   **Purpose**: It is primarily used for **[[Power Flow Studies (Load Flow Analysis)|Power Flow (Load Flow) analysis]]**, where accurate modeling of power flows and losses is crucial.
-   **Components Represented**:
    1.  **Generators**: Modeled as an ideal voltage source in series with its internal impedance ($Z_g = R_a + jX_s$).
    2.  **Transformers**: Modeled by their series leakage impedance ($Z_t = R_t + jX_t$). The shunt magnetizing branch is usually neglected as the magnetizing current is very small.
    3.  **Transmission Lines**: Modeled using their [[Modeling of Medium Transmission Lines|nominal-π model]], which includes the series impedance ($Z_l = R_l + jX_l$) and the total shunt admittance ($Y_l = G + jB$) split at both ends.
    4.  **Loads**: Represented as constant impedances or admittances connected between the bus and the neutral/ground reference.

The impedance diagram provides the necessary circuit information to formulate the [[Bus Admittance Matrix (Y-bus) Formulation|bus admittance matrix (Y-bus)]] for load flow studies.

#### Reactance Diagram
#equivalent-circuit/reactance

A reactance diagram is a simplified version of the impedance diagram, specifically created for **[[Fault Analysis]]**. The simplifications are justified by the nature of a short-circuit fault.

-   **Purpose**: Used to calculate short-circuit currents during a fault. During a fault, the current is very large and is primarily limited by the reactance of the system components.
-   **Simplifying Assumptions**:
    1.  **Neglect All Resistances**: In generators, transformers, and transmission lines, the reactance is significantly larger than the resistance ($X \gg R$). Neglecting R simplifies calculations without introducing significant error.
    2.  **Neglect All Shunt Admittances**: The shunt admittances of transmission lines (representing line capacitance) and the magnetizing branch of transformers are omitted. The currents through these shunt paths are negligible compared to the massive fault currents.
    3.  **Neglect All Static Loads**: Static loads (like lighting, heaters) are represented by high impedances and are ignored, as they draw very little current compared to the fault path. (Note: Rotating loads like induction motors are included as they contribute to the fault current).
    4.  **Assume Ideal Pre-fault Conditions**: All synchronous machine internal voltages (EMFs) are assumed to be equal, in-phase, and typically set to $1.0 \angle 0^\circ$ pu. This assumes the system was operating at no-load before the fault, which gives the worst-case (highest) fault current.

By applying these assumptions, the impedance diagram reduces to a simple circuit containing only series reactances and ideal voltage sources.

#### Comparison

| Feature               | Impedance Diagram                                                                  | Reactance Diagram                                                                |
| --------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Primary Use**       | [[Power Flow Studies (Load Flow Analysis)]]                                        | [[Fault Analysis]] (Short-circuit studies)                                       |
| **Resistance (R)**    | Included                                                                           | Neglected                                                                        |
| **Shunt Admittance (Y)** | Included (for lines, transformers)                                                 | Neglected                                                                        |
| **Static Loads**      | Included (as constant impedance/power)                                             | Neglected                                                                        |
| **Complexity**        | More complex, accurately models losses                                             | Highly simplified, focuses on limiting fault current                             |
| **Represents**        | Steady-state operation                                                             | The instant a fault occurs                                                       |

---
### Related Concepts
#power-system/related-concepts

> [[Single Line Diagram Representation]] (The starting point for creating these diagrams)

[[Per-Unit System]] (The numerical system used in these diagrams)
[[Power Flow Studies (Load Flow Analysis)]] (The main application of impedance diagrams)
[[Fault Analysis]] (The main application of reactance diagrams)
[[Bus Admittance Matrix (Y-bus) Formulation]] (Derived from the impedance diagram)
[[Sequence Impedances and Networks of Synchronous Machines]] (Used to build reactance diagrams for unsymmetrical faults)