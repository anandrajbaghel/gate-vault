---
tags:
  - power-systems
  - power-system-protection
  - differential-protection
  - relaying
  - transformer-protection
  - generator-protection
created: 2025-10-14
aliases:
  - Differential Protection
  - Percentage Differential Relay
  - Biased Differential Relay
subject: "[[Power System]]"
parent:
  - Protective Relays
modified: 2026-07-23T21:29:35
---
### Differential Relays (Simple and Percentage Differential)
#differential-protection #unit-protection #relaying

> **Differential Protection** is a highly selective and fast-acting method of protection based on Kirchhoff's Current Law (KCL). It compares the current entering a protected zone with the current leaving it. Any difference between these currents indicates a fault within the zone. It is a **unit protection** scheme, meaning its operation is confined to its specific [[Zones of Protection|zone]], making it inherently selective and easy to coordinate.

#### Principle of Operation
#differential-protection/principle

The principle is straightforward: for a healthy power system component (transformer, generator, etc.), the current entering must equal the current leaving.
*   **External Fault / Normal Condition**: $I_1 = I_2$. The secondary currents from the [[Instrument Transformers (CT and PT)|CTs]] ($I_1'$ and $I_2'$) are equal and circulate between the CTs. No current flows through the relay's operating coil. $I_{op} = |I_1' - I_2'| = 0$.
*   **Internal Fault**: $I_1 \neq I_2$. The currents entering and leaving are no longer balanced. The difference, called the **spill current** or **differential current**, flows through the relay's operating coil, causing it to trip. $I_{op} = |I_1' - I_2'| > 0$.

---
#### Simple Differential Relay
#simple-differential-relay

A simple differential relay consists of a standard overcurrent relay connected to receive the spill current. It will trip if $I_{op}$ exceeds its pick-up setting. While simple, this design suffers from several major drawbacks that limit its sensitivity and security:

*   **CT Ratio Mismatch**: It's impossible for two CTs to have identical characteristics. This slight mismatch causes a small spill current during normal operation or, more significantly, during heavy external faults, which can cause a false trip.
*   **CT Saturation**: During a severe *external* fault, the high current can saturate one of the CTs. The saturated CT produces a distorted, smaller secondary current, creating a large *false* differential current and leading to mal-operation.
*   **Transformer Tap Changing (OLTC)**: Changing the tap on a transformer alters its voltage and current ratio. This creates an inherent mismatch between the CT ratios, resulting in a spill current during normal load.
*   **Magnetizing Inrush Current**: When a transformer is first energized, it draws a large transient current (inrush current) in its primary winding with no corresponding current in the secondary. This appears as a severe internal fault to a simple differential relay.

To prevent false trips due to these issues, the relay's pick-up setting must be made high (desensitized), which compromises its ability to detect genuine low-level internal faults.

---
#### Percentage Differential Relay (Biased Relay)
#percentage-differential-relay #biased-relay

The **Percentage Differential Relay** was developed to overcome the limitations of the simple relay. It adds a **restraining coil** to the scheme, which provides a bias against tripping during external faults.

*   **Principle**: The relay's operation is controlled by the ratio of the differential current to the average through-current.
    *   **Operating Current ($I_{op}$)**: Senses the fault and provides the tripping torque. $I_{op} = |I_1' - I_2'|$
    *   **Restraining Current ($I_{r}$)**: Senses the load/throughput current and provides a counter-torque to prevent false trips. $I_{r} = \frac{|I_1'| + |I_2'|}{2}$

*   **Trip Condition**: The relay operates only if the operating current is greater than a fixed percentage (K) of the restraining current.
    $$\boxed{\quad \text{Trip if } I_{op} > K \cdot I_r \quad \implies \quad |I_1' - I_2'| > K \cdot \frac{|I_1'| + |I_2'|}{2} \quad}$$
    The constant **K** is the **percentage bias** or **slope** of the relay. A typical setting might be 20% to 40%.

*   **Operation**:
    *   **External Fault**: Both $I_{op}$ (due to mismatch) and $I_r$ are large. The large restraining current $I_r$ produces a strong counter-torque, preventing a trip.
    *   **Internal Fault**: The operating current $I_{op}$ becomes very large, while the restraining current $I_r$ is comparatively small. The operating torque easily overcomes the restraining torque, and the relay trips quickly.

*   **Harmonic Restraint**: For transformer protection, percentage differential relays are equipped with a **2nd harmonic restraint** unit. It blocks the relay from tripping if the differential current has a high 2nd harmonic content, which is a key signature of magnetizing inrush, not a fault.

---
### Related Concepts
#differential-protection/related-concepts

> [[Protective Relays]]

[[Instrument Transformers (CT and PT)]]
[[Transformer Protection (including Buchholz Relay)]]
[[Generator Protection]]
[[Busbar Protection]]
[[Zones of Protection]]