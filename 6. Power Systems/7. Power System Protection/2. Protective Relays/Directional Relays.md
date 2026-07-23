---
tags:
  - power-systems
  - power-system-protection
  - directional-protection
  - relaying
  - selectivity
created: 2025-10-14
aliases:
  - Directional Protection
  - Directional Overcurrent Relay
subject: "[[Power System]]"
parent:
  - Protective Relays
modified: 2026-07-23T21:29:31
---
### Directional Relays
#directional-protection #relaying #selectivity

> A **Directional Relay** is a protective relay that operates based on the direction of fault current or power flow. Unlike a standard [[Overcurrent Relays|overcurrent relay]] which is "blind" to direction, a directional relay uses a reference quantity to operate only for faults in a specified "forward" direction and remains inoperative for faults in the "reverse" direction. This feature is essential for achieving selectivity in looped or parallel-fed networks.

![[Directional Relay.png]]

---
#### Principle of Operation
#directional-protection/principle

![[Principle of Operation of Directional Relay.png]]

A directional relay requires two inputs to make a directional decision:
1.  **Operating Quantity**: This is the current ($I_{op}$) from the protected circuit's CT.
2.  **Polarizing Quantity**: This is a stable reference phasor, typically a voltage ($V_{pol}$) from a PT or a current from another circuit. This quantity must be present and relatively unaffected during the fault.

The relay compares the phase angle between these two quantities. The torque produced by the relay is a function of the magnitudes of the two inputs and the angle between them.
$$\boxed{\quad T = K \cdot |V_{pol}| \cdot |I_{op}| \cos(\phi - \tau) \quad}$$
where:
*   $K$ is a constant.
*   $\phi$ is the phase angle between $V_{pol}$ and $I_{op}$.
*   $\tau$ is the **Maximum Torque Angle (MTA)** or Relay Characteristic Angle (RCA). This is a design angle in the relay, set to make the relay most sensitive to faults with a specific power factor angle.

The relay operates (produces positive torque) only when the current vector $I_{op}$ lies within a specific range, typically when $|\phi - \tau| < 90^\circ$.

---
#### Need for Directional Relays
#directional-protection/need

Directional relays are indispensable in systems where fault current can flow in more than one direction. The classic examples are:
*   **Ring Main Systems**: In a closed loop, a fault at any point is fed from both directions. Simple overcurrent relays cannot be coordinated because they cannot distinguish between the forward and reverse fault currents, leading to non-selective tripping of healthy feeders.
*   **Parallel Feeders**: When two lines operate in parallel between two substations, a fault on one line will be fed from the sending end and also from the healthy parallel line at the receiving end. Directional relays are required at the receiving end to prevent the healthy line from tripping.

By using directional relays, we can ensure that only the breakers on the faulty section trip, preserving the integrity of the rest of the system.

#### Structure of a Directional Overcurrent Relay
A directional overcurrent relay combines two elements whose contacts are wired in series. The relay trips only if **both** elements operate:
1.  **Directional Unit**: This is essentially a power relay that senses the direction of the fault. It doesn't have a time delay. It simply closes its contact if the flow is in the tripping direction, supervising the overcurrent unit.
2.  **Overcurrent (Non-Directional) Unit**: This is a standard instantaneous or IDMT element. It measures the magnitude of the fault current and provides the desired time-current characteristic.

#### Relay Connections and Polarization (90° Connection)
#relay-connections #polarization

The choice of polarizing voltage is critical. For a phase-'a' fault, the voltage $V_a$ can collapse to near zero, making it an unreliable polarizing quantity. Therefore, a voltage from the healthy phases is used.

The most common scheme is the **90° Connection** or **Quadrature Connection**:
*   For the relay protecting **Phase A**: Operating Current = $I_a$, Polarizing Voltage = $V_{bc}$.
*   For the relay protecting **Phase B**: Operating Current = $I_b$, Polarizing Voltage = $V_{ca}$.
*   For the relay protecting **Phase C**: Operating Current = $I_c$, Polarizing Voltage = $V_{ab}$.

**Reason for 90° Connection**:
In a typical power system, the line impedance is highly inductive, meaning the fault current ($I_a$) lags the phase voltage ($V_a$) by a large angle (e.g., 60°-80°). In the 90° connection, the polarizing voltage ($V_{bc}$) lags the phase voltage ($V_a$) by 90°. This brings the operating current ($I_a$) and polarizing voltage ($V_{bc}$) nearly into phase for typical fault conditions. By setting the relay's MTA ($\tau$) to match the expected fault angle (e.g., $\tau = 45^\circ$), we can ensure the relay produces maximum torque and is therefore most sensitive to real-world fault conditions.

---
### Related Concepts
#power-system-protection/related-concepts

> [[Overcurrent Relays]]

[[Desirable Qualities of a Protective Relay|Characteristics of Protective Relays]]
[[Transmission Line Protection]]
[[Instrument Transformers (CT and PT)]]
[[Bandwidth and Selectivity|Selectivity]]
[[Fault Calculations|Fault Analysis]]
[[Distance Relays|Distance Relays]]
[[Differential Relays]]
