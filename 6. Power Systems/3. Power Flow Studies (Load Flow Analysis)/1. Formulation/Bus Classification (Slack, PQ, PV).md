---
tags:
  - power-systems
  - load-flow
  - bus-classification
  - power-system-analysis
created: 2025-10-12
aliases:
  - Bus Types
  - Load Flow Bus Classification
  - Slack Bus
  - PQ Bus
  - PV Bus
subject: "[[Power System]]"
parent: "[[Power Flow Studies (Load Flow Analysis)]]"
modified: 2026-07-22T20:17:11
---
### Bus Classification for Load Flow Studies
#power-systems/load-flow #bus-classification

> In a power system network, ==each bus (or node) is characterized by four quantities: Real Power ($P$), Reactive Power ($Q$), Voltage Magnitude ($|V|$), and Voltage Angle ($\delta$)==. In a load flow (or power flow) study, two of these four quantities are specified (known) for each bus. The objective is to solve for the remaining two unknown quantities. ==Buses are classified into three types based on which two quantities are known.==

#### 1. PQ Bus (Load Bus)
#pq-bus #load-bus

This is the most common type of bus in a power system. It represents a point where a load is connected to the network.

* ==**Specified (Known) Quantities**:==
    * Net Real Power consumed, $P_i$
    * Net Reactive Power consumed, $Q_i$
    (By convention, power consumed is treated as negative power injected into the bus).
* ==**Unknown Quantities to be Solved**:==
    * Voltage Magnitude, $|V_i|$
    * Voltage Angle, $\delta_i$

==Most buses in a system are PQ buses as the power demand at load centers is generally known or forecasted.== The primary goal of load flow analysis is often to determine the voltage profile ($|V_i|$ and $\delta_i$) at these load buses.

> [!examtip] Voltage-controlled load bus (exam rule)
> ==If a load bus is explicitly stated as *voltage-controlled*, its voltage magnitude $|V|$ is specified via reactive support.==
> 
> ==**In load-flow modeling, it is treated as a PV bus** (even though it is not a generator).==

---
#### 2. PV Bus (Generator Bus / Voltage-Controlled Bus)
#pv-bus #generator-bus #voltage-controlled-bus

These buses represent generating stations or points where voltage is controlled, such as a [[synchronous condenser]] connection point.

*   **Specified (Known) Quantities**:
    *   Net Real Power injected, $P_i$ (set by the turbine governor based on economic dispatch).
    *   Voltage Magnitude, $|V_i|$ (maintained constant by the generator's [[Automatic Voltage Regulator (AVR)]] which adjusts the field excitation).
*   **Unknown Quantities to be Solved**:
    *   Reactive Power injected, $Q_i$
    *   Voltage Angle, $\delta_i$

> [!pyq]- PYQ : 2020
> ![[ee_2020#^q9]]

**Reactive Power Limits ($Q$-limits):**
A crucial aspect of PV buses is that a generator has a limited capacity to supply or absorb reactive power. These limits are denoted as $Q_{i,min}$ and $Q_{i,max}$.
*   During the iterative solution of the load flow, if the calculated reactive power $Q_i$ violates these limits (i.e., $Q_i < Q_{i,min}$ or $Q_i > Q_{i,max}$), the bus type is changed.
*   The bus is treated as a **PQ bus** for subsequent iterations, where $Q_i$ is fixed at the violated limit ($Q_{i,min}$ or $Q_{i,max}$), and the voltage magnitude $|V_i|$ is now treated as an unknown variable.

> [!examtip] PV bus at reactive power limit
> For a PV bus, $P$ and $|V|$ are specified.
> If the generator hits its reactive limit
> $$Q = Q_{\max}\ \text{or}\ Q_{\min}$$
> then voltage control is lost, $Q$ becomes fixed, and $|V|$ becomes unknown.
> 
> **Hence, the PV bus is treated as a PQ bus.**

---
#### 3. Slack Bus (Swing Bus or Reference Bus)
#slack-bus #swing-bus #reference-bus

To solve the power flow equations, one bus must serve as a reference point for voltage angles and power balance.

*   **Specified (Known) Quantities**:
    *   Voltage Magnitude, $|V_s|$ (often $1.0$ p.u.)
    *   Voltage Angle, $\delta_s$ (set to $0^\circ$ as the system reference).
*   **Unknown Quantities to be Solved**:
    *   Real Power injected, $P_s$
    *   Reactive Power injected, $Q_s$

**Role of the Slack Bus:**
The total power generated in a system must equal the total load demand plus the total system losses ($P_{gen} = P_{load} + P_{losses}$). However, the system losses are unknown until the load flow study is complete. The Slack Bus is assigned to a generator that supplies the difference between the total system load/generation and the system losses. It "swings" to accommodate this slack in power, hence the name. There can only be **one** Slack Bus in a power system model. Typically, the bus connected to the largest generating station is chosen for this role.

---
#### Summary of Bus Types

#bus-classification/summary

A concise summary of the specified and unspecified variables for each bus type is crucial for problem-solving.

| Bus Type | Name                               | Specified (Known) Variables | Unknown (To be Calculated) Variables |
| -------- | ---------------------------------- | --------------------------- | ------------------------------------ |
| Type 1   | $$\text{PQ (Load Bus)}$$           | $$P,Q$$                     | $$\|V\|, \delta$$                    |
| Type 2   | $$\text{PV (Generator Bus)}$$      | $$P,\|V\|$$                 | $$Q,\delta$$                         |
| Type 3   | $$\text{Slack (Swing/Reference)}$$ | $$\|V\|,\delta$$            | $$P,Q$$                              |

---
### Related Concepts
#power-systems/related-concepts

> [[Power Flow Studies (Load Flow Analysis)]]

[[Bus Admittance Matrix (Y-bus) Formulation]]
[[Power Flow Equations]]
[[Gauss-Seidel Method for Load Flow]]
[[Newton-Raphson Method for Load Flow]]
[[Economic Load Dispatch (ELD) neglecting losses]]
[[Voltage and Reactive Power Control]]
[[Automatic Voltage Regulator (AVR)]]