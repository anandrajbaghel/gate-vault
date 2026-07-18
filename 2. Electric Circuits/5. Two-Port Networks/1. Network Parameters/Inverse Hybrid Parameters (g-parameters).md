---
tags:
  - electric-circuits
  - two-port-networks
  - network-analysis
  - g-parameters
created: 2025-07-29
aliases:
  - g-parameters
  - Inverse Hybrid Parameters
subject: "[[Electric Circuits]]"
parent: "[[Two-Port Networks]]"
confidence: 9
---
### Inverse Hybrid Parameters (g-parameters)
#g-parameters #two-port-networks #inverse-hybrid-parameters

> **Inverse Hybrid parameters**, or **g-parameters**, are a set of properties for two-port networks that are the inverse of the more common [[Hybrid Parameters (h-parameters)]]. They express the input current ($I_1$) and output voltage ($V_2$) in terms of the input voltage ($V_1$) and output current ($I_2$). This set of variables makes them particularly useful for analyzing parallel-series interconnections of two-port networks.

#### Defining Equations
#g-parameters/definition

The relationship between the port variables is defined by the following pair of equations:
$$
\begin{align}
I_1 &= g_{11}V_1 + g_{12}I_2 \\
V_2 &= g_{21}V_1 + g_{22}I_2
\end{align}
$$

In matrix form, this is expressed as:
$$\boxed{\quad \begin{bmatrix} I_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} g_{11} & g_{12} \\ g_{21} & g_{22} \end{bmatrix} \begin{bmatrix} V_1 \\ I_2 \end{bmatrix} \quad}$$
The g-parameters have mixed units: $g_{11}$ is an admittance (S), $g_{22}$ is an impedance ($\Omega$), and $g_{12}$ and $g_{21}$ are dimensionless gains.

#### Parameter Calculation (Mixed-Condition Tests)
#g-parameters/calculation

The g-parameters are determined by applying both open-circuit ($I=0$) and short-circuit ($V=0$) conditions to the ports.

1.  **From Open-Circuiting Port 2 ($I_2=0$)**:
    *   **$g_{11}$ (Open-Circuit Input Admittance)**:
        $$\boxed{\quad g_{11} = \left. \frac{I_1}{V_1} \right|_{I_2=0} \quad (S)}$$
    *   **$g_{21}$ (Open-Circuit Forward Voltage Gain)**:
        $$\boxed{\quad g_{21} = \left. \frac{V_2}{V_1} \right|_{I_2=0} \quad \text{(dimensionless)}}$$

2.  **From Short-Circuiting Port 1 ($V_1=0$)**:
    *   **$g_{22}$ (Short-Circuit Output Impedance)**:
        $$\boxed{\quad g_{22} = \left. \frac{V_2}{I_2} \right|_{V_1=0} \quad (\Omega)}$$
    *   **$g_{12}$ (Short-Circuit Reverse Current Gain)**:
        $$\boxed{\quad g_{12} = \left. \frac{I_1}{I_2} \right|_{V_1=0} \quad \text{(dimensionless)}}$$

#### Conditions for Reciprocity and Symmetry
#reciprocity #symmetry

1.  **Reciprocity**: For a network to be reciprocal:
    $$\boxed{\quad g_{12} = -g_{21} \quad}$$
    Similar to h-parameters, this condition includes a negative sign.
2.  **Symmetry**: For a network to be symmetrical:
    $$\boxed{\quad \Delta_g = g_{11}g_{22} - g_{12}g_{21} = 1 \quad}$$

#### Equivalent Circuit
#g-parameters/equivalent-circuit

The defining equations directly lead to a standard equivalent circuit model. It consists of a dependent current source on the input side and a dependent voltage source on the output side, which is the inverse configuration of the h-parameter model.

#### Application: Parallel-Series Connection
#parallel-series-connection

G-parameters are the natural choice for analyzing two-port networks connected in a **parallel-series** configuration (input ports in parallel, output ports in series). When two networks, A and B, are connected in this way, the overall g-parameter matrix of the combined network is the sum of the individual g-parameter matrices.
$$\boxed{\quad [g]_{\text{total}} = [g]_A + [g]_B \quad}$$

---
### Related Concepts
#g-parameters/related-concepts

> [[Two-Port Networks]] (The parent category of network parameters)

[[Hybrid Parameters (h-parameters)]] (The inverse parameter set, related by $[g] = [h]^{-1}$)
[[Impedance Parameters (Z-parameters)]] and [[Admittance Parameters (Y-parameters)]] (Alternative parameter sets)
[[Reciprocity Theorem]]