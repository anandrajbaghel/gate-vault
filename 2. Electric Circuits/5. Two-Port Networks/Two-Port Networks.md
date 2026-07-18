---
tags:
  - electric-circuits
  - network-analysis
  - two-port-networks
  - circuit-modeling
  - network-parameters
created: 2025-07-28
aliases:
  - Two-Port Network
  - Four-Terminal Network
subject: "[[Electric Circuits]]"
parent: "[[Circuit Analysis Techniques]]"
modified: 2026-07-16
---
### Two-Port Networks
#two-port-networks #network-analysis #circuit-modeling

> A **two-port network** is a way of modeling an electrical circuit or device by treating it as a "[[black box]]" with four terminals, grouped into an **input port** and an **output port**. Instead of analyzing the internal details of the circuit, we characterize it by the relationships between the voltage and current at each port. This abstraction is fundamental to the analysis of complex systems like amplifiers, filters, and transmission lines.

#### The Port Variables
#port-variables

A two-port network has four variables:

![[two_port_network.jpg]]
*   $V_1$: Voltage at the input port
*   $I_1$: Current at the input port
*   $V_2$: Voltage at the output port
*   $I_2$: Current at the output port

By convention, both currents $I_1$ and $I_2$ are defined as flowing **into** their respective ports. (The only exception is for [[Transmission Parameters (ABCD-parameters)]], where $I_2$ is often defined as flowing out). These four variables are related by two linear equations.

---
#### Two-Port Parameter Sets
#network-parameters

The choice of which two variables are independent and which two are dependent gives rise to different sets of parameters. Each set is suited for different types of analysis and circuit interconnections.

| Parameter Set | Independent Variables | Dependent Variables | Matrix Equation |
| :--- | :--- | :--- | :--- |
| [[Impedance Parameters (Z-parameters)]] | $I_1, I_2$ | $V_1, V_2$ | $[V] = [Z][I]$ |
| [[Admittance Parameters (Y-parameters)]]| $V_1, V_2$ | $I_1, I_2$ | $[I] = [Y][V]$ |
| [[Hybrid Parameters (h-parameters)]] | $I_1, V_2$ | $V_1, I_2$ | $\begin{bmatrix} V_1 \\ I_2 \end{bmatrix} = [h]\begin{bmatrix} I_1 \\ V_2 \end{bmatrix}$ |
| [[Inverse Hybrid Parameters (g-parameters)]]| $V_1, I_2$ | $I_1, V_2$ | $\begin{bmatrix} I_1 \\ V_2 \end{bmatrix} = [g]\begin{bmatrix} V_1 \\ I_2 \end{bmatrix}$ |
| [[Transmission Parameters (ABCD-parameters)]]| $V_2, -I_2$ | $V_1, I_1$ | $\begin{bmatrix} V_1 \\ I_1 \end{bmatrix} = [T]\begin{bmatrix} V_2 \\ -I_2 \end{bmatrix}$|

---
#### Conditions for Reciprocity and Symmetry
#reciprocity #symmetry

These are two key properties that simplify the analysis of a two-port network.
* **Reciprocity**: The network is passive and contains only [[bilateral]] elements. Its transfer characteristics are the same in both directions.
* **Symmetry**: The network's ports are interchangeable; its electrical properties are identical when viewed from either port.
The specific mathematical conditions for these properties depend on the parameter set being used, as detailed in [[Condition for Symmetry and Reciprocity]].

> [!concept] Linear two-port inference (==NON RECIPROCAL==)
> For a linear two-port, the port voltage/current relationships are linear even if the network is **nonreciprocal**.
> 
> If load current observations at a port are given for different load resistances, first infer the [[Thevenin's Theorem|Thevenin equivalent]]:
> $$I = \frac{V_{th}}{R_{th}+R_L}$$
> 
> Once $R_{th}$ is fixed, $V_{th}$ varies linearly with the excitation at the other port.
> Reciprocity is **not required** for this inference.

---
#### Interconnection of Two-Port Networks
#two-port-connections

The power of the two-port network model lies in its ability to simplify the analysis of interconnected circuits. Each type of connection is best analyzed using a specific parameter set.
*   **Series**: Add [[Impedance Parameters (Z-parameters)|Z-matrices]].
*   **Parallel**: Add [[Admittance Parameters (Y-parameters)|Y-matrices]].
*   **Cascade (Chain)**: Multiply [[Transmission Parameters (ABCD-parameters)|T-matrices]].
*   **Series-Parallel**: Add [[Hybrid Parameters (h-parameters)|h-matrices]].
*   **Parallel-Series**: Add [[Inverse Hybrid Parameters (g-parameters)|g-matrices]].
This is covered in detail in [[Series, Parallel, and Cascade Connection of Two-Port Networks]].

---
### Related Concepts
#two-port-networks/related-concepts

> [[Impedance Parameters (Z-parameters)]]

[[Admittance Parameters (Y-parameters)]]
[[Hybrid Parameters (h-parameters)]]
[[Inverse Hybrid Parameters (g-parameters)]]
[[Transmission Parameters (ABCD-parameters)]]
[[Condition for Symmetry and Reciprocity]]
[[Series, Parallel, and Cascade Connection of Two-Port Networks]]
[[Conversion between Parameters]]
[[Network Theorems]]
[[Bipolar Junction Transistor (BJT)]] (A key application area)