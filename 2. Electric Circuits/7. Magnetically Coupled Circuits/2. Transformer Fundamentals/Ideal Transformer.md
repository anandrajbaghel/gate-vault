---
tags:
  - electric-circuits
  - magnetic-circuits
  - transformer
  - circuit-analysis
  - ideal-device
created: 2025-08-08
aliases:
  - Ideal Transformer
  - Impedance Reflection
subject: "[[Electric Circuits]]"
parent: "[[Linear Transformer]]"
confidence: 9
formula:
  - "Impedance Reflection : $$Z_{in} = Z_L' = \\left(\\frac{N_1}{N_2}\\right)^2 Z_L = \\frac{Z_L}{n^2}$$"
---
### Ideal Transformer
#ideal-transformer #transformer #circuit-analysis

> An **ideal transformer** is a theoretical, lossless two-port device used to simplify the analysis of magnetically coupled circuits. It represents a [[Linear Transformer]] in the limit of perfect magnetic coupling and infinite winding inductances. While no real transformer is truly ideal, this model is an excellent approximation for many practical power and electronics applications.

#### Assumptions for an Ideal Transformer
#ideal-transformer/assumptions

An ideal transformer is defined by three key assumptions:

1.  **Perfect Coupling ($k=1$)**: All magnetic flux produced by the primary winding links with the secondary winding, and vice-versa. There is no [[Ideal and Practical Transformers#^leakage-flux|leakage flux]].
2.  **Infinite Permeability ($\mu \to \infty$)**: The magnetic core has zero [[reluctance]]. This implies that an infinitesimally small [[magnetomotive force|magnetomotive force (MMF)]] is required to establish the flux. Consequently, the magnetizing current is zero.
3.  **Lossless Operation**:
    *   **Zero Winding Resistance**: The primary and secondary coils are made of perfect conductors ($R_1 = R_2 = 0$).
    *   **No Core Losses**: There are no hysteresis or eddy current losses in the core.

From assumptions 1 and 2, it follows that the self-inductances of the windings ($L_1, L_2$) must also be infinite to produce finite voltages.

---
#### Voltage and Current Relationships
#turns-ratio #voltage-ratio #current-ratio

The behavior of an ideal transformer is governed by its **turns ratio**, defined as $n = N_2 / N_1$.

*   **Voltage Ratio**: The voltage across each winding is directly proportional to its number of turns.
    $$\boxed{\quad \frac{V_2}{V_1} = \frac{N_2}{N_1} = n \quad}$$
    *   If $n > 1$, it's a **step-up** transformer.
    *   If $n < 1$, it's a **step-down** transformer.

*   **Current Ratio**: Since the transformer is lossless, the input power must equal the output power ($P_{in} = P_{out}$). This means the apparent power is conserved ($S_{in} = S_{out}$).
    $$V_1 I_1 = V_2 I_2$$
    Rearranging gives the current relationship:
    $$\boxed{\quad \frac{I_2}{I_1} = \frac{V_1}{V_2} = \frac{N_1}{N_2} = \frac{1}{n} \quad}$$
    The current is transformed in the **inverse** ratio of the turns. A step-up transformer (which steps up voltage) is a step-down transformer for current, and vice-versa.

---
#### Impedance Reflection
#impedance-reflection #impedance-matching

One of the most important properties of an ideal transformer is its ability to change the apparent impedance of a load. If a load impedance $Z_L$ is connected to the secondary, the impedance seen from the primary side ($Z_{in}$ or $Z_L'$) is:
$$Z_{in} = \frac{V_1}{I_1} = \frac{V_2/n}{nI_2} = \frac{1}{n^2} \frac{V_2}{I_2} = \frac{Z_L}{n^2}$$
$$\boxed{\quad Z_{in} = Z_L' = \left(\frac{N_1}{N_2}\right)^2 Z_L = \frac{Z_L}{n^2} \quad}$$
This property is widely used for **impedance matching** to achieve maximum power transfer between a source and a load.

> See [[Analysis of Circuits with Magnetic Coupling#Concept Reflected Impedance|Magnetically Coupled Circuits Analysis]]

---
#### Dot Convention for Ideal Transformers
#dot-convention

The dot convention determines the relative polarity of the voltages and currents.
*   **Voltage**: The dotted terminals have the same polarity at any given instant. If $V_1$ is positive at its dot, $V_2$ will also be positive at its dot.
*   **Current**: If current $I_1$ enters the dotted terminal of the primary, current $I_2$ will **leave** the dotted terminal of the secondary to satisfy the MMF balance ($N_1I_1 = N_2I_2$).

---
### Related Concepts
#ideal-transformer/related-concepts

> [[Linear Transformer]] (The more general model from which the ideal case is derived)

[[2. Electric Circuits/2. Network Theorems/1. DC & AC Network Theorems/Maximum Power Transfer Theorem]] (Impedance matching is a key application)
[[Magnetic Circuits]] (The physical basis for transformer action)
[[AC Power Analysis]]
[[Electrical Machines]] (Practical transformers are a core topic)
[[Dot Convention]]