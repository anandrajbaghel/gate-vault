---
tags:
  - transformers
  - electrical-machines
  - static-device
  - mutual-induction
  - power-systems
  - core-concept
created: 2025-06-07
subject: "[[5. Electrical Machines/Electrical Machines|Electrical Machines]]"
parent: "[[5. Electrical Machines/Electrical Machines|Electrical Machines]]"
modified: 2026-07-23T20:37:38
---
### Transformers
#transformers #electrical-machines #core-concept

> A **Transformer** is a static electrical device that transfers electrical energy from one alternating-current (AC) circuit to another at the same frequency, but with a change in voltage and current levels. It is a fundamental component in power systems for transmission and distribution.

Transformers work on the principle of [[Faraday's Law of Induction|Faraday's Law of Induction]] and **mutual induction** between two or more coils. As a static device, it has no moving parts, which leads to very high operational efficiency (typically >95%).

#### Principle of Operation
#transformer-principle #mutual-induction #electromagnetic-induction

The operation of a transformer is based on the principle of mutual induction.
1.  **Primary Winding**: An alternating voltage $V_1$ is applied to the primary winding, causing an alternating current $I_1$ to flow.
2.  **Magnetic Flux**: This alternating current produces a time-varying magnetic flux $\phi$ in the transformer's [[Magnetic Circuits|magnetic core]].
3.  **Mutual Induction**: According to Faraday's Law, this changing flux links with the secondary winding and induces an electromotive force (EMF), or voltage $V_2$, across it.
4.  **Energy Transfer**: If a load is connected to the secondary winding, the induced voltage $V_2$ drives a current $I_2$ through it, thus transferring power from the primary to the secondary circuit.

Crucially, the **frequency of the AC power remains unchanged** during the transformation.

#### Construction of a Transformer
#transformer-construction #core-windings #lamination

A basic transformer consists of two main components:
1.  **Magnetic Core**: Provides a low-reluctance path for the magnetic flux. It is typically made of thin, laminated sheets of high-grade silicon steel.
    *   **Laminations** are used to minimize [[Losses and Efficiency in Electrical Machines|eddy current losses]].
    *   **Silicon Steel** is used to reduce [[Losses and Efficiency in Electrical Machines|hysteresis losses]].
2.  **Windings**: Two sets of insulated copper or aluminum conductors.
    *   **Primary Winding**: The winding connected to the AC power source.
    *   **Secondary Winding**: The winding connected to the load.

#### Ideal Transformer
#ideal-transformer #transformer-assumptions #turns-ratio

An ideal transformer is a lossless theoretical model used for analysis. It has the following properties:
*   Winding resistances are zero (no copper losses).
*   The core has infinite permeability, meaning no current is needed to establish flux.
*   There are no core losses (hysteresis or eddy currents).
*   There is no magnetic leakage; all flux from the primary links the secondary.

For an ideal transformer, the voltage and current ratios are determined by the **turns ratio ($a$)**:
*   **Voltage Ratio**: $\frac{V_2}{V_1} = \frac{N_2}{N_1} = a$
*   **Current Ratio**: $\frac{I_1}{I_2} = \frac{N_2}{N_1} = a$
Where:
*   $V_1, V_2$ are primary and secondary voltages.
*   $I_1, I_2$ are primary and secondary currents.
*   $N_1, N_2$ are the number of turns in the primary and secondary windings.

#### Classification of Transformers
#transformer-classification #step-up-transformer #step-down-transformer

Transformers can be classified in several ways:
1.  **Based on Voltage Level**:
    *   **Step-Up Transformer**: $V_2 > V_1$ ($N_2 > N_1$). Used to increase voltage, e.g., at power generation stations.
    *   **Step-Down Transformer**: $V_2 < V_1$ ($N_2 < N_1$). Used to decrease voltage, e.g., in distribution networks for residential supply.
2.  **Based on Construction**:
    *   **Core Type**: Windings surround a considerable part of the core.
    *   **Shell Type**: The core surrounds a considerable part of the windings.
3.  **Based on Supply**:
    *   **[[Single Phase Transformer]]**: Operates on a single-phase supply.
    - **[[Three-Phase Transformers]]**: Operates on a three-phase supply.

---
### Related Concepts

> [[5. Electrical Machines/Electrical Machines|Electrical Machines]] (parent topic)

[[Three-phase Transformer Connections]] (another key transformer type)
[[Faraday's Law in Integral and Point Form|Faraday's Law of Induction]] (the fundamental principle)
[[Losses and Efficiency in a Transformer]] (key performance metrics)
[[Autotransformers|Autotransformer]] (a special type of transformer)