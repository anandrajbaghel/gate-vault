---
tags:
  - power-systems
  - fault-analysis
  - protection
  - reactors
created: 2025-10-12
aliases:
  - Fault Limiting Reactor
  - Series Reactor
subject: "[[Power System]]"
parent:
  - Fault Analysis
modified: 2026-07-23T21:22:27
---
### Current Limiting Reactors
#power-systems/fault-analysis #protection #reactors

> A **Current Limiting Reactor** is a large inductive coil with high reactance and low resistance. It is intentionally connected in series with power system components (like generators, feeders, or bus sections) to increase the total impedance of the circuit. Its primary function is to limit the magnitude of short-circuit currents to a level that the installed circuit breakers and other equipment can safely withstand and interrupt.

#### Principle of Operation
#reactors/principle

The magnitude of a short-circuit fault current ($I_{sc}$) is inversely proportional to the Thevenin impedance ($Z_{th}$) of the system as seen from the fault point: $I_{sc} = V_{th} / Z_{th}$.

By adding a reactor with reactance $X_R$ in the fault path, the total impedance increases.
$$ Z_{th, new} = Z_{th, old} + jX_R $$
This increase in impedance directly leads to a reduction in the fault current and, consequently, the [[Short Circuit MVA|Short Circuit MVA]].
$$ I_{sc, new} < I_{sc, old} $$

---
#### Percentage Reactance (%X)
#reactors/percentage-reactance

Reactors are typically specified by their **percentage reactance**. This is defined as the percentage of the phase voltage dropped across the reactor when the full-load rated current of the circuit flows through it.

$$\boxed{\quad \%X = \frac{I_{rated} \times X_{R}}{V_{phase}} \times 100 \quad}$$
Where:
*   $I_{rated}$ is the full load current of the circuit.
*   $X_R$ is the reactance of the reactor in ohms.
*   $V_{phase}$ is the phase voltage of the circuit.

For example, a "10% reactor" on a 500 A feeder means it will cause a 10% voltage drop when carrying 500 A.

---
#### Placement of Reactors
#reactors/location

The location of the reactor is a crucial design choice, with each configuration offering different advantages.

1.  **Generator Reactors:** Placed in series with each generator.
    *   **Pros:** Provides excellent protection for the generator itself from any external short circuit.
    *   **Cons:** A fault on one feeder is fed by all other generators, and the reactor does not limit this combined current. There is a constant power loss and voltage drop for all power generated.

2.  **Feeder Reactors:** Placed in series with each outgoing feeder from the busbar. This is the most common method.
    *   **Pros:** A fault on a feeder is localized, and the bus voltage is not severely affected, maintaining supply to healthy feeders.
    *   **Cons:** Provides no protection for faults occurring on the main busbar itself. The busbar fault is fed directly by all connected generators.

3.  **Bus-Bar Reactors:** Used to split a large busbar into sections, limiting the total fault MVA fed into any single fault.
    *   **Ring System:** Sections are connected in a ring via reactors. A fault in one section is fed mainly by its own generator, with limited current from adjacent sections through the reactors.
    *   **Tie-Bar System:** An auxiliary bus-bar (the tie-bar) connects to the main bus sections via reactors, providing more operational flexibility.
    *   **Pros:** Significantly limits the fault MVA, localizes faults, and improves overall system reliability and continuity of service.

---
#### Advantages and Disadvantages
#reactors/pros-cons

##### Advantages
*   **Protection:** Reduces fault currents, protecting generators, transformers, and switchgear from excessive mechanical and thermal stresses.
*   **Cost Savings:** Allows the use of circuit breakers with lower interrupting capacity, which are less expensive.
*   **Improved Reliability:** Localizes the effects of a fault, preventing a widespread system outage.

##### Disadvantages
*   **Voltage Drop:** Introduces a continuous voltage drop during normal operation, which can negatively affect voltage regulation.
*   **Power Loss:** Causes a constant reactive power ($I^2X$) loss, reducing the overall efficiency of the system.
*   **Reduced Stability:** The additional series reactance increases the total transfer impedance between generators, which can reduce the power system's transient and steady-state stability limits.

---
### Related Concepts
#power-systems/related-concepts

> [[Analysis of Symmetrical Faults]]

[[Short Circuit MVA]]
[[Circuit Breakers]]
[[Power System Protection]]
[[Per-Unit System]]
