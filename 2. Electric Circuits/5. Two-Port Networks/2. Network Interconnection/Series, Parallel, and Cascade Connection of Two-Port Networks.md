---
tags:
  - electric-circuits
  - two-port-networks
  - network-analysis
  - series-connection
  - parallel-connection
  - cascade-connection
created: 2025-07-30
aliases:
  - Interconnection of Two-Port Networks
  - Two-Port Connections
  - Series Two-Port Networks
  - Parallel Two-Port Networks
  - Cascaded Two-Port Networks
subject: "[[Electric Circuits]]"
parent: "[[Two-Port Networks]]"
confidence: 9
---

### Interconnection of Two-Port Networks
#two-port-connections #network-analysis

> Complex systems are often built by interconnecting simpler two-port networks. The choice of two-port parameters is crucial as each set is ideally suited for a specific type of connection, allowing the overall parameters of the combined network to be found easily. The key is to [[Conversion between Parameters|convert]] the parameters of the individual networks to the appropriate type for the connection and then apply the corresponding combination rule.

#### Series Connection
#series-connection #z-parameters

In a series connection, the input ports of the networks are connected in series, and the output ports are connected in series. This results in the individual port voltages adding up while the port currents remain the same.

*   **Suitable Parameters**: [[Impedance Parameters (Z-parameters)]]
*   **Combination Rule**: The Z-matrix of the combined network is the sum of the individual Z-matrices.
    $$\boxed{\quad [Z]_{\text{total}} = [Z]_A + [Z]_B \quad}$$

#### Parallel Connection
#parallel-connection #y-parameters

In a parallel connection, the input ports are in parallel, and the output ports are in parallel. This results in the individual port currents adding up while the port voltages remain the same.

*   **Suitable Parameters**: [[Admittance Parameters (Y-parameters)]]
*   **Combination Rule**: The Y-matrix of the combined network is the sum of the individual Y-matrices.
    $$\boxed{\quad [Y]_{\text{total}} = [Y]_A + [Y]_B \quad}$$

#### Cascade (Chain) Connection
#cascade-connection #abcd-parameters

In a cascade connection, the output of the first network is connected directly to the input of the second network. This is the most common configuration for multi-stage systems like amplifiers and filters.

*   **Suitable Parameters**: [[Transmission Parameters (ABCD-parameters)]]
*   **Combination Rule**: The T-matrix of the combined network is the **matrix product** of the individual T-matrices. The order of multiplication is critical and follows the signal path.
    $$\boxed{\quad [T]_{\text{total}} = [T]_A \cdot [T]_B \quad}$$

#### Series-Parallel Connection
#series-parallel-connection #h-parameters

In this configuration, the input ports are connected in series, and the output ports are connected in parallel.

*   **Suitable Parameters**: [[Hybrid Parameters (h-parameters)]]
*   **Combination Rule**: The h-matrix of the combined network is the sum of the individual h-matrices.
    $$\boxed{\quad [h]_{\text{total}} = [h]_A + [h]_B \quad}$$

#### Parallel-Series Connection
#parallel-series-connection #g-parameters

In this configuration, the input ports are connected in parallel, and the output ports are connected in series.

*   **Suitable Parameters**: [[Inverse Hybrid Parameters (g-parameters)]]
*   **Combination Rule**: The g-matrix of the combined network is the sum of the individual g-matrices.
    $$\boxed{\quad [g]_{\text{total}} = [g]_A + [g]_B \quad}$$

---
#### Validity of Connections (Brune's Test)
#port-condition #brune-test

A critical assumption for the simple addition rules (for all but the cascade connection) is that the interconnection **must not violate the port condition** of the individual networks. The port condition states that the current entering the top terminal of a port must be equal to the current leaving the bottom terminal of the same port.

Certain interconnections can create alternative paths for current, violating this condition. For example, in a parallel connection, a path might exist between the input and output ports through the lower connection wires.

*   **Test**: A connection is valid if the potential difference between the two unconnected terminals of a port is zero when the other port is excited (Brune's test).
*   **Practical Solution**: To guarantee the validity of a connection, an **isolation transformer** with a 1:1 turns ratio is often placed between the networks. This ensures that the port conditions are maintained.

---
### Related Concepts
#two-port-connections/related-concepts

> [[Two-Port Networks]] (Parent Topic)

[[Impedance Parameters (Z-parameters)]]
[[Admittance Parameters (Y-parameters)]]
[[Hybrid Parameters (h-parameters)]]
[[Inverse Hybrid Parameters (g-parameters)]]
[[Transmission Parameters (ABCD-parameters)]]
[[Conversion between Parameters]]
[[Matrix Algebra]]