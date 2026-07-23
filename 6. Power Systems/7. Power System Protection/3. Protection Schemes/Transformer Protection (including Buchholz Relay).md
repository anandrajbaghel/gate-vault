---
tags:
  - power-systems
  - power-system-protection
  - transformer
  - protection-schemes
  - buchholz-relay
created: 2025-10-14
aliases:
  - Transformer Protection
  - Buchholz Relay
subject: "[[Power System]]"
parent:
  - Protection Schemes
modified: 2026-07-23T21:30:29
---
### Transformer Protection (including Buchholz Relay)
#transformer-protection #protection-schemes #buchholz-relay

> Transformer protection schemes are designed to safeguard transformers from both internal faults (e.g., winding short circuits) and abnormal external conditions (e.g., overloads, through-faults). Due to their high cost and importance, transformers are equipped with multiple, often redundant, protection systems. The two main protection schemes are **Differential Protection** and the **Buchholz Relay**.

#### Percentage Differential Protection (ANSI 87T)
#differential-protection #transformer-protection

This is the primary protection for internal phase-to-phase and phase-to-ground faults in transformers rated above 5 MVA. It is a [[Differential Relays|percentage biased differential scheme]] that compares currents on the primary (HV) and secondary (LV) sides.

However, applying differential protection to transformers presents unique challenges:
1.  **CT Ratio Mismatch**: The currents on the HV and LV sides are different. The [[Instrument Transformers (CT and PT)|CT]] ratios must be chosen to compensate for the transformer's voltage ratio, so the secondary currents are balanced during normal operation.
2.  **Phase Shift**: In Star-Delta (Y-Δ) transformers, there is a 30° phase shift between the primary and secondary line currents. This is corrected by connecting the CTs in the opposite configuration (i.e., CTs on the Star side are connected in Delta, and CTs on the Delta side are connected in Star).
3.  **Magnetizing Inrush Current**: When a transformer is energized, a large transient magnetizing current flows in the primary winding but not the secondary. This appears as a severe internal fault. To prevent false tripping, the relay uses **2nd harmonic restraint**. The inrush current is rich in 2nd harmonics, so the relay is blocked if this harmonic component is significant.
4.  **Over-excitation (Overfluxing)**: Occurs when the voltage-to-frequency ratio ($V/f$) exceeds its nominal value. This saturates the core and causes high magnetizing currents rich in 5th harmonics. The relay uses **5th harmonic restraint** to prevent tripping during this condition.
5.  **Tap Changing (OLTC)**: On-load tap changers vary the transformer ratio, creating a natural mismatch. The percentage bias ($K$) of the relay is set high enough to ensure it remains stable during tap changes.

---
#### Buchholz Relay
#buchholz-relay #gas-actuated-relay

The Buchholz relay is a mechanical, gas-and-oil-actuated relay used on **oil-immersed transformers equipped with a conservator tank**. It is installed in the pipe connecting the main tank to the conservator and is extremely effective at detecting incipient (slowly developing) faults below the oil level.

It provides a two-stage operation:
1.  **Alarm Stage (Upper Float)**
    *   **Cause**: Slow accumulation of gas due to minor or incipient faults like insulation breakdown, core hot spots, or bad electrical contacts. The gas rises and collects in the relay chamber.
    *   **Operation**: As gas collects, the oil level in the relay drops, causing the upper float to tilt and close a mercury switch, which activates an **alarm**.

2.  **Trip Stage (Lower Float)**
    *   **Cause**: A severe internal fault, such as a winding short circuit or bushing flashover, causes rapid vaporization of oil, generating a large volume of gas. This creates a high-pressure oil surge that travels towards the conservator.
    *   **Operation**: The oil surge pushes against a baffle plate connected to the lower float. The movement of this float closes a second mercury switch, which sends an instantaneous **trip** signal to the circuit breakers on both sides of the transformer.

---
#### Other Important Protection Schemes

1.  **Restricted Earth Fault (REF) Protection**
    *   **Purpose**: Provides high-speed, high-sensitivity protection for winding earth faults, especially near the neutral point where differential relays may be less sensitive.
    *   **Principle**: It's a differential scheme that balances the sum of the phase CT secondary currents against the current from a CT in the neutral-to-ground connection. It operates only for faults within its zone.

2.  **Overcurrent (OC) Protection (ANSI 50/51)**
    *   Provides backup protection for internal faults and primary protection for external through-faults. [[Overcurrent Relays|IDMT relays]] are used on both HV and LV sides.

3.  **Thermal Overload Protection (ANSI 49)**
    *   Protects the windings from overheating due to sustained overloads. It uses the transformer's thermal time constant to trip before insulation damage occurs. It monitors current and sometimes oil/winding temperature.

4.  **Pressure Relief Device (PRD)**
    *   A mechanical device that rapidly opens to release extreme internal pressure built up during a severe fault, preventing the transformer tank from exploding. It includes a contact for tripping.

5.  **Overfluxing (V/Hz) Protection (ANSI 24)**
    *   The magnetic flux in the core is proportional to the $V/f$ ratio. Overfluxing can occur due to overvoltage or under-frequency operation, leading to core saturation and overheating. A dedicated $V/Hz$ relay is used to protect against this, primarily for generator-transformer units.

---
### Related Concepts
#transformer-protection/related-concepts

> [[Differential Relays]]

[[Overcurrent Relays]]
[[Instrument Transformers (CT and PT)]]
[[Generator Protection]]
[[Zones of Protection]]