---
tags:
  - power-systems
  - power-system-protection
  - protection-zones
  - relaying
  - selectivity
created: 2025-10-14
aliases:
  - Protection Zones
  - Protective Zones
subject: "[[Power System]]"
parent:
  - Power System Protection
modified: 2026-07-23T21:29:20
---
### Zones of Protection
#power-system-protection #protection-zones #selectivity

> **Zones of Protection** refer to the practice of dividing a power system into distinct, protected segments. Each zone is equipped with its own protective relays and circuit breakers, designed to detect and isolate faults occurring only within that specific segment. The fundamental goal is to achieve **selectivity**, ensuring that a fault is cleared with minimal disruption to the rest of the power system.

#### Definition and Purpose
#protection-zones/definition

A power system is not protected as a single entity. Instead, it is broken down into logical sections, where each major component constitutes a separate zone. These zones include:
*   Generators
*   Transformers
*   Busbars
*   Transmission lines and feeders
*   Large motors

The boundaries of a protective zone are defined by the physical location of the **[[Instrument Transformers (CT and PT)|Current Transformers (CTs)]]**. The relays associated with a zone receive current information from these CTs. If a fault occurs inside the zone, the relays operate and send a trip signal to the adjacent [[Circuit Breakers]] to disconnect and isolate the faulty component.

$$\boxed{\quad \text{A fault inside a zone must trip the breakers defining that zone. A fault outside must not.} \quad}$$

#### The Principle of Overlapping Zones
#protection-zones/overlap

A critical design principle is that **adjacent zones of protection must overlap**. If zones were merely touching at a boundary point (e.g., at a circuit breaker), a fault occurring precisely at that point would be a "blind spot," lying outside both zones. This would leave the fault undetected by any primary protection scheme.

To prevent this, zones are overlapped. The overlap region typically contains the circuit breaker.

*   **How it works**: A fault occurring in the overlap region will appear as an internal fault to *both* adjacent protective schemes.
*   **Consequence**: Both sets of relays will operate, tripping the circuit breakers for both zones. While this disconnects a slightly larger portion of the system than necessary, it is a safe and acceptable outcome that guarantees no part of the system is left unprotected. The primary goal is to clear the fault; selectivity is slightly compromised in this specific case to ensure reliability.

  *(Conceptual Diagram: A fault on the bus side of the line circuit breaker falls within both the bus protection zone and the line protection zone.)*

#### Typical Zones in a Power System
#protection-zones/examples

1.  **Generator Zone**: The zone is defined by CTs on both the neutral and terminal sides of the generator windings. It protects against internal faults like winding-to-ground or inter-turn faults.
2.  **Transformer Zone**: Bounded by CTs on the primary (HV) and secondary (LV) sides of the transformer. [[Differential Relays|Differential protection]] is commonly used. Often, a generator and its step-up transformer are protected as a single **generator-transformer unit zone**.
3.  **Busbar Zone**: This is a critical zone as a bus fault affects all connected circuits. The zone is defined by CTs on every circuit connected to the bus. Bus differential protection is used.
4.  **Transmission Line Zone**: This zone covers the length of a transmission line between two substations. It is defined by CTs at each end of the line. [[Distance Relays|Distance protection]] or line differential protection is typically employed.

---
### Related Concepts
#power-system-protection/related-concepts

> [[Principles and Need for Protective Schemes]]

[[Primary and Backup Protection]]
[[Instrument Transformers (CT and PT)]]
[[Circuit Breakers]]
[[Differential Relays]]
[[Distance Relays]]