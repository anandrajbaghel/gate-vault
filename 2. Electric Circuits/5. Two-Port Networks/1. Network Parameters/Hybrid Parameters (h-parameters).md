---
tags:
  - electric-circuits
  - two-port-networks
  - network-analysis
  - transistor-models
  - h-parameters
created: 2025-07-29
aliases:
  - h-parameters
  - Hybrid Parameters
subject: "[[Electric Circuits]]"
parent: "[[Two-Port Networks]]"
confidence: 9
formula:
  - "Hybrid Parameters (h-parameters) : $$\\begin{bmatrix} V_1 \\\\ I_2 \\end{bmatrix} = \\begin{bmatrix} h_{11} & h_{12} \\\\ h_{21} & h_{22} \\end{bmatrix} \\begin{bmatrix} I_1 \\\\ V_2 \\end{bmatrix}$$"
---
### Hybrid Parameters (h-parameters)
#h-parameters #two-port-networks #transistor-models #hybrid-parameters

> **Hybrid parameters**, or **h-parameters**, are a set of properties for two-port networks that use a "hybrid" mix of variables. ==They express the input voltage ($V_1$) and output current ($I_2$) in terms of the input current ($I_1$) and output voltage ($V_2$).== This specific combination makes them extremely useful for modeling electronic devices like transistors, where it's natural to treat the input current and output voltage as independent variables.

#### Defining Equations
#h-parameters/definition

The relationship between the port variables is defined by the following pair of equations:
$$
\begin{align}
V_1 &= h_{11}I_1 + h_{12}V_2 \\
I_2 &= h_{21}I_1 + h_{22}V_2
\end{align}
$$
In matrix form, this is expressed as:
$$\boxed{\quad \begin{bmatrix} V_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} h_{11} & h_{12} \\ h_{21} & h_{22} \end{bmatrix} \begin{bmatrix} I_1 \\ V_2 \end{bmatrix} \quad}$$
The h-parameters have mixed units: $h_{11}$ is an impedance $(\Omega)$, $h_{22}$ is an admittance $(S)$, and $h_{12}$ and $h_{21}$ are dimensionless gains.

---
#### Parameter Calculation (Mixed-Condition Tests)
#h-parameters/calculation

The h-parameters are determined by applying both short-circuit ($V=0$) and open-circuit ($I=0$) conditions to the ports.

1.  **From Short-Circuiting Port 2 ($V_2=0$)**:
    *   **$h_{11}$ (Short-Circuit Input Impedance)**:
        $$\boxed{\quad h_{11} = \left. \frac{V_1}{I_1} \right|_{V_2=0} \quad (\Omega)}$$
> [!pyq]-
> ![[ee_2018#^q19]]

    *   **$h_{21}$ (Short-Circuit Forward Current Gain)**:
        $$\boxed{\quad h_{21} = \left. \frac{I_2}{I_1} \right|_{V_2=0} \quad \text{(dimensionless)}}$$

2.  **From Open-Circuiting Port 1 ($I_1=0$)**:
    *   **$h_{22}$ (Open-Circuit Output Admittance)**:
        $$\boxed{\quad h_{22} = \left. \frac{I_2}{V_2} \right|_{I_1=0} \quad (S)}$$
    *   **$h_{12}$ (Open-Circuit Reverse Voltage Gain)**:
        $$\boxed{\quad h_{12} = \left. \frac{V_1}{V_2} \right|_{I_1=0} \quad \text{(dimensionless)}}$$

---
#### Application to Transistor Models
#bjt-model

H-parameters are the basis for the most common low-frequency, small-signal model for Bipolar Junction Transistors (BJTs). A second subscript is added to denote the configuration (e.g., 'e' for common-emitter).
*   $h_{11} \rightarrow \mathbf{h_{ie}}$ (input impedance)
*   $h_{12} \rightarrow \mathbf{h_{re}}$ (reverse voltage ratio)
*   $h_{21} \rightarrow \mathbf{h_{fe}}$ (forward current gain, also known as $\beta_{ac}$)
*   $h_{22} \rightarrow \mathbf{h_{oe}}$ (output admittance)

---
#### Conditions for Reciprocity and Symmetry
#reciprocity #symmetry

1.  **Reciprocity**: For a network to be reciprocal:
    $$\boxed{\quad h_{12} = -h_{21} \quad}$$
    Note the negative sign, which is a key difference from $Z$ and $Y$ parameters.
2.  **Symmetry**: For a network to be symmetrical:
    $$\boxed{\quad \Delta_h = h_{11}h_{22} - h_{12}h_{21} = 1 \quad}$$

---
#### Equivalent Circuit
#h-parameters/equivalent-circuit

The defining equations directly lead to a standard equivalent circuit model, which is widely used for transistors. It consists of a dependent voltage source on the input side and a dependent current source on the output side.

---
#### Application: Series-Parallel Connection

When two networks are connected in a series-parallel (or cascade) configuration, the overall h-parameter matrix of the combined network is the sum of the individual h-parameter matrices.
$$\boxed{\quad [h]_{\text{total}} = [h]_A + [h]_B \quad}$$

---
### Related Concepts
#h-parameters/related-concepts

> [[Two-Port Networks]] (The parent category of network parameters)

[[Impedance Parameters (Z-parameters)]] and [[Admittance Parameters (Y-parameters)]] (Alternative parameter sets)
[[Transmission Parameters (ABCD-parameters)]]
[[Bipolar Junction Transistor (BJT)]] (The primary application domain for h-parameters)
[[Reciprocity Theorem]]
[[Nodal Analysis]]
