---
tags:
  - power-systems
  - power-system-protection
  - instrument-transformers
  - current-transformer
  - potential-transformer
created: 2025-10-14
aliases:
  - CT and PT
  - Current Transformer
  - Potential Transformer
  - Voltage Transformer
  - VT
subject: "[[Power System]]"
parent:
  - Power System Protection
modified: 2026-07-23T21:28:12
---
### Instrument Transformers (CT and PT)
#instrument-transformer #current-transformer #potential-transformer

> Instrument transformers are essential components in high-voltage AC systems used to provide standardized, safe, and accurate representations of high primary currents and voltages for measuring instruments and protective relays. They perform two primary functions:
> 1.  **Transformation**: They step down high currents (CT) or voltages (PT) to manageable levels (e.g., 1A/5A for CTs, 110V for PTs).
> 2.  **Isolation**: They provide galvanic (electrical) isolation between the high-voltage power circuit and the low-voltage secondary circuits, ensuring the safety of personnel and equipment.

|                    |                                              |
| ------------------ | -------------------------------------------- |
| ![[Relay - Impedance Relay CT & PT.jpg]] | ![[Relay - Impedance Relay in Transmission Line.jpg]] |
|                    |                                              |

---
#### Current Transformer (CT)
#current-transformer

A Current Transformer is designed to produce a secondary current that is accurately proportional to the primary current flowing through its primary winding.

*   **Connection**: The primary winding (which has very few turns, often just a single conductor bar) is connected in **series** with the high-current line.
*   **Operation**: It functions as a current source. It steps down the current and consequently steps up the voltage. The primary current is determined by the load on the power system, not by the CT's own burden.
*   **Transformation Ratio ($K_{c}$)**:
    $K_c = \frac{\text{Rated Primary Current}}{\text{Rated Secondary Current}}$ (e.g., 1000/5 A, 400/1 A).
    The relationship is approximately $I_1 N_1 \approx I_2 N_2$.

*   **Critical Safety Rule: The Secondary of a CT Must NEVER be Open-Circuited**
    When the secondary is open, $I_2 = 0$. The entire primary current $I_1$ acts as the magnetizing current. This huge magnetizing current drives the core into deep saturation. The flux changes very rapidly from positive to negative saturation, inducing a **dangerously high voltage** ($V_2 = N_2 \frac{d\phi}{dt}$) across the open secondary terminals. This can cause insulation failure, arcing, and is a severe safety hazard.

> [!danger] Always short-circuit the CT secondary terminals before disconnecting any instrument or relay.

---
#### Potential Transformer (PT) or Voltage Transformer (VT)
#potential-transformer

A Potential Transformer is a conventional two-winding transformer designed to produce a secondary voltage that is accurately proportional to the primary voltage.

*   **Connection**: The primary winding (with many turns) is connected in **parallel** with the high-voltage line.
*   **Operation**: It functions as a voltage source, similar to a standard step-down power transformer, but with a much smaller VA rating.
*   **Transformation Ratio ($K_{v}$)**:
    $K_v = \frac{\text{Rated Primary Voltage}}{\text{Rated Secondary Voltage}}$ (e.g., 132kV/110V).

*   **Critical Safety Rule: The Secondary of a PT Must NEVER be Short-Circuited**
    Short-circuiting the secondary terminals would draw an extremely large current from the primary supply, as the PT's primary is connected directly to the high-voltage line. This would cause the windings to overheat and burn out very quickly. For this reason, the secondary circuit of a PT is always protected with fuses or a miniature circuit breaker (MCB).

---
#### Errors in Instrument Transformers
#transformer-errors #ratio-error #phase-angle-error

Ideally, an instrument transformer should introduce no errors. However, due to the exciting current required to magnetize the core, two types of errors exist:

1.  **Ratio Error**: The actual transformation ratio deviates from the nominal (nameplate) ratio.
    $$\text{Ratio Error (\%)} = \frac{\text{Nominal Ratio } (K_n) - \text{Actual Ratio } (R)}{\text{Actual Ratio } (R)} \times 100\%$$
2.  **Phase Angle Error ($\theta$)**: A phase difference is introduced between the primary quantity and the reversed secondary quantity. This is particularly important for power-measuring instruments and directional relays.

---
#### Comparison of CT and PT
#comparison/ct-with-pt 

| Feature                  | Current Transformer (CT)                              | Potential Transformer (PT/VT)                             |
| ------------------------ | ----------------------------------------------------- | --------------------------------------------------------- |
| **Connection in Circuit**| Primary in **Series** with the line                   | Primary in **Parallel** with the line                     |
| **Primary Winding**      | Few turns, thick wire                                 | Many turns, thin wire                                     |
| **Secondary Winding**    | Many turns, thin wire                                 | Few turns, thin wire                                      |
| **Normal Secondary**     | Connected to low-impedance ammeter/relay coil         | Connected to high-impedance voltmeter/relay coil        |
| **Dangerous Condition**  | **Open-circuited secondary** (causes high voltage)    | **Short-circuited secondary** (causes high current)       |
| **Function**             | Acts like a **current source**                        | Acts like a **voltage source**                            |

---
### Related Concepts
#power-system-protection/related-concepts

> [[Principles and Need for Protective Schemes]]

[[Circuit Breakers]]
[[Overcurrent Relays]]
[[Distance Relays]]
[[Differential Relays]]
[[Electrical & Electronic Measurements]]
