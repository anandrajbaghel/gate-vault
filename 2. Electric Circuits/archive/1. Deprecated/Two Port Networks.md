---
tags:
  - electric-circuits
  - network-analysis
  - circuit-modeling
  - z-parameters
  - y-parameters
  - h-parameters
  - abcd-parameters
aliases:
  - Two Port Network
  - 2-Port Networks
created: 2025-09-12
subject: "[[Electric Circuits]]"
parent:
  - Network Analysis Techniques
confidence: 9
---

```mermaid
mindmap
  root((Two-Port Networks))
    Concept
      (Four-terminal black box)
      (Models complex circuits)
      (Relates input & output V/I)
    Parameters
      Z-Parameters (Impedance)
      Y-Parameters (Admittance)
      h-Parameters (Hybrid)
      ABCD-Parameters (Transmission)
    Properties
      Reciprocity
        ($Z_{12}=Z_{21}$, $Y_{12}=Y_{21}$, etc.)
      Symmetry
        ($Z_{11}=Z_{22}$, $A=D$, etc.)
    Interconnections
      Series (Z-params add)
      Parallel (Y-params add)
      Cascade (ABCD matrices multiply)
```

---
### Two-Port Networks
#two-port-networks

> A **two-port network** is an electrical network or circuit with two pairs of terminals, an **input port** and an **output port**. It serves as a "black box" model to describe the relationship between the input voltage and current ($V_1, I_1$) and the output voltage and current ($V_2, I_2$), without needing to know the internal circuit details. This is essential for modeling components like [[Transistors]], [[Filters]], and [[Transformers]].

The standard convention defines both currents, $I_1$ and $I_2$, as flowing **into** the network.

---
#### Z-Parameters (Impedance Parameters)
#z-parameters #impedance-parameters

The Z-parameters relate the port voltages to the port currents. They are also known as open-circuit parameters because they are determined under open-circuit conditions ($I=0$).
$$\boxed{\quad \begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} Z_{11} & Z_{12} \\ Z_{21} & Z_{22} \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} \quad}$$
*   $Z_{11} = \frac{V_1}{I_1}\bigg|_{I_2=0}$ : Open-circuit input impedance.
*   $Z_{12} = \frac{V_1}{I_2}\bigg|_{I_1=0}$ : Open-circuit reverse transfer impedance.
*   $Z_{21} = \frac{V_2}{I_1}\bigg|_{I_2=0}$ : Open-circuit forward transfer impedance.
*   $Z_{22} = \frac{V_2}{I_2}\bigg|_{I_1=0}$ : Open-circuit output impedance.

---
#### Y-Parameters (Admittance Parameters)
#y-parameters #admittance-parameters

The Y-parameters relate the port currents to the port voltages. They are also known as short-circuit parameters because they are determined under short-circuit conditions ($V=0$).
$$\boxed{\quad \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} Y_{11} & Y_{12} \\ Y_{21} & Y_{22} \end{bmatrix} \begin{bmatrix} V_1 \\ V_2 \end{bmatrix} \quad}$$
*   $Y_{11} = \frac{I_1}{V_1}\bigg|_{V_2=0}$ : Short-circuit input admittance.
*   $Y_{12} = \frac{I_1}{V_2}\bigg|_{V_1=0}$ : Short-circuit reverse transfer admittance.
*   $Y_{21} = \frac{I_2}{V_1}\bigg|_{V_2=0}$ : Short-circuit forward transfer admittance.
*   $Y_{22} = \frac{I_2}{V_2}\bigg|_{V_1=0}$ : Short-circuit output admittance.

---
#### h-Parameters (Hybrid Parameters)
#h-parameters #hybrid-parameters

The h-parameters use a mix (hybrid) of variables, relating $V_1$ and $I_2$ to $I_1$ and $V_2$. They are very useful for modeling [[Transistors]].
$$\boxed{\quad \begin{bmatrix} V_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} h_{11} & h_{12} \\ h_{21} & h_{22} \end{bmatrix} \begin{bmatrix} I_1 \\ V_2 \end{bmatrix} \quad}$$
*   $h_{11} = \frac{V_1}{I_1}\bigg|_{V_2=0}$ : Short-circuit input impedance ($\Omega$).
*   $h_{12} = \frac{V_1}{V_2}\bigg|_{I_1=0}$ : Open-circuit reverse voltage gain (dimensionless).
*   $h_{21} = \frac{I_2}{I_1}\bigg|_{V_2=0}$ : Short-circuit forward current gain (dimensionless).
*   $h_{22} = \frac{I_2}{V_2}\bigg|_{I_1=0}$ : Open-circuit output admittance (S).

---
#### ABCD-Parameters (Transmission Parameters)
#abcd-parameters #transmission-parameters

The ABCD-parameters relate the input port variables to the output port variables. They are particularly useful for analyzing cascaded networks.
**Note the negative sign on $I_2$**, which assumes current is leaving the output port, which is standard for transmission lines.
$$\boxed{\quad \begin{bmatrix} V_1 \\ I_1 \end{bmatrix} = \begin{bmatrix} A & B \\ C & D \end{bmatrix} \begin{bmatrix} V_2 \\ -I_2 \end{bmatrix} \quad}$$
*   $A = \frac{V_1}{V_2}\bigg|_{-I_2=0}$ : Open-circuit reverse voltage gain.
*   $B = \frac{V_1}{-I_2}\bigg|_{V_2=0}$ : Short-circuit transfer impedance.
*   $C = \frac{I_1}{V_2}\bigg|_{-I_2=0}$ : Open-circuit transfer admittance.
*   $D = \frac{I_1}{-I_2}\bigg|_{V_2=0}$ : Short-circuit reverse current gain.

---
#### Conditions for Reciprocity and Symmetry
#reciprocity #symmetry

These are two key properties of two-port networks.

**Reciprocity**: The network behaves the same way if the input and output ports are swapped.
*   **Z-params**: $\boxed{Z_{12} = Z_{21}}$
*   **Y-params**: $\boxed{Y_{12} = Y_{21}}$
*   **h-params**: $\boxed{h_{12} = -h_{21}}$
*   **ABCD-params**: $\boxed{AD - BC = 1}$

**Symmetry**: The network is electrically identical when viewed from either port.
*   **Z-params**: $\boxed{Z_{11} = Z_{22}}$
*   **Y-params**: $\boxed{Y_{11} = Y_{22}}$
*   **h-params**: $\boxed{\det(h) = h_{11}h_{22} - h_{12}h_{21} = 1}$
*   **ABCD-params**: $\boxed{A = D}$

---
#### Interconnection of Two-Port Networks
#two-port-interconnection

*   **Series Connection**: The Z-parameters of the individual networks add up. $[Z]_{total} = [Z]_A + [Z]_B$.
*   **Parallel Connection**: The Y-parameters of the individual networks add up. $[Y]_{total} = [Y]_A + [Y]_B$.
*   **Cascade Connection**: The ABCD (Transmission) matrices of the individual networks are multiplied. $[T]_{total} = [T]_A [T]_B$.

---
### Related Concepts
#related-concepts

> [[Dependent Sources]] (The building blocks for parameter models)

[[Network Theorems]] (Used to find the individual parameters)
[[Transformers]] (A common two-port network)
[[Transistors]] (Frequently modeled using h-parameters)
[[Filters]] (Their transfer functions are analyzed using two-port methods)