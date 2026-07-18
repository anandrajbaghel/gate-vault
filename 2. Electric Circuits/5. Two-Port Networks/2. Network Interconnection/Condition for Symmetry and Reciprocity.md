---
tags:
  - electric-circuits
  - two-port-networks
  - network-analysis
  - reciprocity
  - symmetry
created: 2025-07-30
aliases:
  - Conditions for Two-Port Networks
  - Reciprocity and Symmetry Conditions
subject: "[[Electric Circuits]]"
parent: "[[Two-Port Networks]]"
confidence: 9
---

```mermaid
mindmap
  root((Conditions for Symmetry & Reciprocity))
    Reciprocity
      Definition
        (Interchange of excitation & response)
        (Network must be passive & bilateral)
      Conditions
        Z-parameters: Z₁₂ = Z₂₁
        Y-parameters: Y₁₂ = Y₂₁
        h-parameters: h₁₂ = -h₂₁
        g-parameters: g₁₂ = -g₂₁
        T-parameters (ABCD): AD - BC = 1
    Symmetry
      Definition
        (Ports are interchangeable)
        (Input/Output impedances are equal)
      Conditions
        Z-parameters: Z₁₁ = Z₂₂
        Y-parameters: Y₁₁ = Y₂₂
        h-parameters: Δh = 1
        g-parameters: Δg = 1
        T-parameters (ABCD): A = D
```

---
### Condition for Symmetry and Reciprocity
#reciprocity #symmetry #two-port-networks

> **Reciprocity** and **Symmetry** are two fundamental properties that characterize the behavior of a two-port network. These properties simplify network analysis and can be quickly identified by examining the relationships between the network's two-port parameters.

#### Reciprocity
#reciprocity

A network is **reciprocal** if the ratio of the response (voltage or current) at one port to the excitation (voltage or current) at another port remains the same when the positions of the excitation and response are interchanged.

*   **Physical Meaning**: A reciprocal network is one that is made up of linear, passive, and bilateral elements (resistors, inductors, capacitors). It contains no dependent sources, transistors, or op-amps. The [[Reciprocity Theorem]] is a formal statement of this property.

*   **Mathematical Conditions**: The condition for reciprocity can be expressed for each parameter set:
    *   **Z-parameters**: $Z_{12} = Z_{21}$
    *   **Y-parameters**: $Y_{12} = Y_{21}$
    *   **h-parameters**: $h_{12} = -h_{21}$
    *   **g-parameters**: $g_{12} = -g_{21}$
    *   **T-parameters (ABCD)**: $AD - BC = 1$

#### Symmetry
#symmetry

A network is **symmetrical** if its input and output ports can be interchanged without changing the port voltages and currents.

*   **Physical Meaning**: A symmetrical network has identical characteristics when viewed from either port. The input impedance of one port is equal to the input impedance of the other port. Physically, such a network often has a mirror-image layout. A T-network with two identical series arms is a classic example.

*   **Mathematical Conditions**: The condition for symmetry can be expressed for each parameter set:
    *   **Z-parameters**: $Z_{11} = Z_{22}$
    *   **Y-parameters**: $Y_{11} = Y_{22}$
    *   **h-parameters**: $\Delta_h = h_{11}h_{22} - h_{12}h_{21} = 1$
    *   **g-parameters**: $\Delta_g = g_{11}g_{22} - g_{12}g_{21} = 1$
    *   **T-parameters (ABCD)**: $A = D$

> **Note**: A symmetrical network is always reciprocal. However, a reciprocal network is not necessarily symmetrical.

#### Summary Table
#summary-table

| Parameter Set | Condition for Reciprocity | Condition for Symmetry |
| :--- | :--- | :--- |
| **Z-parameters** | $\boxed{Z_{12} = Z_{21}}$ | $\boxed{Z_{11} = Z_{22}}$ |
| **Y-parameters** | $\boxed{Y_{12} = Y_{21}}$ | $\boxed{Y_{11} = Y_{22}}$ |
| **h-parameters** | $\boxed{h_{12} = -h_{21}}$ | $\boxed{\Delta_h = 1}$ |
| **g-parameters** | $\boxed{g_{12} = -g_{21}}$ | $\boxed{\Delta_g = 1}$ |
| **T-parameters (ABCD)** | $\boxed{AD - BC = 1}$ | $\boxed{A = D}$ |

---
### Related Concepts
#reciprocity-symmetry/related-concepts

> [[Two-Port Networks]] (Parent Topic)

[[Impedance Parameters (Z-parameters)]]
[[Admittance Parameters (Y-parameters)]]
[[Hybrid Parameters (h-parameters)]]
[[Inverse Hybrid Parameters (g-parameters)]]
[[Transmission Parameters (ABCD-parameters)]]
[[Reciprocity Theorem]] (The underlying theorem for the reciprocity condition)