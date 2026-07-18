---
tags:
  - electric-circuits
  - two-port-networks
  - network-analysis
  - impedance
  - z-parameters
created: 2025-07-29
aliases:
  - Z-parameters
  - Impedance Parameters
  - Open-Circuit Parameters
subject: "[[Electric Circuits]]"
parent: "[[Two-Port Networks]]"
confidence: 9
---

```mermaid
mindmap
  root((Z-Parameters))
    Definition
      (Relate port voltages to port currents)
      (V = ZI)
      (Open-Circuit Parameters)
    Defining Equations
      V₁ = Z₁₁I₁ + Z₁₂I₂
      V₂ = Z₂₁I₁ + Z₂₂I₂
      Matrix Form
    Parameter Calculation
      (Open-Circuit Tests)
      Z₁₁ = V₁/I₁ | I₂=0 (Input Impedance)
      Z₂₁ = V₂/I₁ | I₂=0 (Forward Transfer Impedance)
      Z₂₂ = V₂/I₂ | I₁=0 (Output Impedance)
      Z₁₂ = V₁/I₂ | I₁=0 (Reverse Transfer Impedance)
    Properties
      Reciprocity: Z₁₂ = Z₂₁
      Symmetry: Z₁₁ = Z₂₂
    Equivalent Circuit
      T-Network (for reciprocal networks)
      Dependent Voltage Source Model (general)
    Applications
      Series Connection of Two-Ports
      ([Z] = [Z]ₐ + [Z]ₑ)
      Analysis of feedback amplifiers, filters
```

---
### Impedance Parameters (Z-parameters)
#z-parameters #two-port-networks #open-circuit-parameters

> **Impedance parameters**, or **Z-parameters**, are a set of properties used to describe the electrical behavior of linear two-port networks. They relate the port voltages ($V_1, V_2$) to the port currents ($I_1, I_2$) with the currents as the independent variables. They are also known as **open-circuit parameters** because they are calculated under open-circuit conditions ($I=0$).

#### Defining Equations
#z-parameters/definition

The relationship between the port voltages and currents is defined by the following pair of linear equations:
$$
\begin{align}
V_1 &= Z_{11}I_1 + Z_{12}I_2 \\
V_2 &= Z_{21}I_1 + Z_{22}I_2
\end{align}
$$
In matrix form, this is expressed as:

$$\boxed{\quad \begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} Z_{11} & Z_{12} \\ Z_{21} & Z_{22} \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} \quad \text{or} \quad [V] = [Z][I] \quad}$$

By convention, currents $I_1$ and $I_2$ are assumed to be flowing **into** the network at their respective ports. All parameters ($Z_{11}, Z_{12}, Z_{21}, Z_{22}$) have units of Ohms ($\Omega$).

#### Parameter Calculation (Open-Circuit Tests)
#z-parameters/calculation

The individual Z-parameters are determined by setting one of the port currents to zero (i.e., open-circuiting the port) and then measuring the voltage-to-current ratios.

1.  **To find $Z_{11}$ and $Z_{21}$ (Open-circuit Port 2, i.e., $I_2=0$)**:
    *   **$Z_{11}$ (Open-Circuit Input Impedance)**:
        $$\boxed{\quad Z_{11} = \left. \frac{V_1}{I_1} \right|_{I_2=0} \quad}$$
    *   **$Z_{21}$ (Open-Circuit Forward Transfer Impedance)**:
        $$\boxed{\quad Z_{21} = \left. \frac{V_2}{I_1} \right|_{I_2=0} \quad}$$

2.  **To find $Z_{22}$ and $Z_{12}$ (Open-circuit Port 1, i.e., $I_1=0$)**:
    *   **$Z_{22}$ (Open-Circuit Output Impedance)**:
        $$\boxed{\quad Z_{22} = \left. \frac{V_2}{I_2} \right|_{I_1=0} \quad}$$
    *   **$Z_{12}$ (Open-Circuit Reverse Transfer Impedance)**:
        $$\boxed{\quad Z_{12} = \left. \frac{V_1}{I_2} \right|_{I_1=0} \quad}$$

#### Conditions for Reciprocity and Symmetry
#reciprocity #symmetry

1.  **Reciprocity**: A network is **reciprocal** if the ratio of the response voltage at one port to the excitation current at another port is the same if the excitation and response ports are interchanged. This implies the network contains only passive, bilateral elements.
    $$\boxed{\quad Z_{12} = Z_{21} \quad}$$
2.  **Symmetry**: A network is **symmetrical** if its electrical properties are the same when viewed from either port.
    $$\boxed{\quad Z_{11} = Z_{22} \quad}$$
    A symmetrical network is always reciprocal, but a reciprocal network is not necessarily symmetrical.

#### Equivalent Circuit
#z-parameters/equivalent-circuit

Any linear two-port network can be modeled using its Z-parameters. For a **reciprocal** network, a simple passive **T-network** is a common equivalent circuit.
The component values are:
*   $Z_a = Z_{11} - Z_{12}$
*   $Z_b = Z_{22} - Z_{12}$
*   $Z_c = Z_{12}$ (since $Z_{12} = Z_{21}$)

For a general (non-reciprocal) network, the equivalent circuit includes dependent voltage sources.

#### Application: Series Connection
#series-connection

Z-parameters are particularly useful for analyzing two-port networks connected in **series**. When two networks, A and B, are connected in series, the overall Z-parameter matrix of the combined network is simply the sum of the individual Z-parameter matrices.
$$\boxed{\quad [Z]_{\text{total}} = [Z]_A + [Z]_B \quad}$$
$$\begin{bmatrix} Z_{11} & Z_{12} \\ Z_{21} & Z_{22} \end{bmatrix}_{\text{total}} = \begin{bmatrix} Z_{11A} & Z_{12A} \\ Z_{21A} & Z_{22A} \end{bmatrix} + \begin{bmatrix} Z_{11B} & Z_{12B} \\ Z_{21B} & Z_{22B} \end{bmatrix}$$

---
### Related Concepts
#z-parameters/related-concepts

> [[Two-Port Networks]] (The parent category of network parameters)

[[Admittance Parameters (Y-parameters)]] (The dual of Z-parameters, useful for parallel connections)
[[Hybrid Parameters (h-parameters)]] and [[ABCD Parameters]] (Other common two-port representations)
[[Reciprocity Theorem]] (The underlying principle for the condition $Z_{12} = Z_{21}$)
[[Network Theorems]]