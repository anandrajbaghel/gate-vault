---
tags:
  - measurements
  - energy-measurement
  - induction-meter
  - gate
created: 2025-10-18
aliases:
  - Energy Meter Construction
  - Energy Meter Principle
  - Energy Meter Operation
subject: "[[Electrical & Electronic Measurements]]"
parent: "[[Single-Phase Induction Type Energy Meter]]"
modified: 2026-08-04T09:27:56
---
### Construction, Principle, and Operation of an Energy Meter
#energy-meter #induction-principle #kwh-measurement

> The single-phase induction type energy meter is the most common device used for domestic and industrial energy billing. It is an integrating instrument which works on the induction principle to measure the total electrical energy consumed over a specified period.

### Principle of Operation
#energy-meter/principle #ferraris-principle

The operation is based on the **induction motor principle** (specifically Ferraris's principle). A net driving torque is produced on a rotatable aluminum disc when it is subjected to two alternating magnetic fluxes that have a phase difference between them.

1.  Two electromagnets produce two alternating fluxes, $\phi_1$ and $\phi_2$.
2.  These fluxes induce eddy currents, $i_{e1}$ and $i_{e2}$, in the aluminum disc.
3.  A torque is produced by the interaction of one flux with the eddy current created by the other flux (i.e., $\phi_1$ interacts with $i_{e2}$, and $\phi_2$ interacts with $i_{e1}$).
4.  For a net torque to be produced, the two fluxes must have a phase difference. In the energy meter, this is arranged such that the driving torque is directly proportional to the power being consumed.

---

### Construction
#energy-meter/construction

An energy meter is built from four essential systems:

1.  **Driving System:** This creates the driving torque.
    -   **Shunt Magnet (Potential Coil):** An E-shaped laminated electromagnet with a coil of many turns of fine wire. It is connected across the supply, so its excitation is proportional to the **voltage (V)**. The coil is made highly inductive so its flux ($\phi_{sh}$) lags the voltage by almost $90^\circ$.
    -   **Series Magnet (Current Coil):** A U-shaped laminated electromagnet with a coil of a few turns of thick wire. It is connected in series with the load, so its excitation is proportional to the **load current (I)**. Its flux ($\phi_s$) is in phase with the current.

2.  **Moving System:**
    -   A lightweight **aluminum disc** mounted on a vertical spindle. It is placed in the air gap of the two electromagnets. The spindle is supported by a jewel bearing system to minimize friction.

3.  **Braking System:**
    -   A strong, C-shaped **permanent magnet** (the brake magnet) is positioned at the edge of the aluminum disc. This system provides a braking torque to control the disc's speed, ensuring it is proportional to the power.

4.  **Registering System:**
    -   A mechanism of gears and dials, driven by the rotating spindle, which continuously counts the total number of revolutions. It is calibrated to display the reading directly in **kilowatt-hours (kWh)**.

---

### Operation
#energy-meter/operation

1.  **Producing the Driving Torque ($T_d$):**
    The shunt coil produces flux $\phi_{sh} \propto V$ (lagging V by $\approx 90^\circ$). The series coil produces flux $\phi_s \propto I$ (in phase with I). The net driving torque on the disc is proportional to the interaction of these fluxes and the eddy currents they induce. The final expression for the average driving torque is:
    $$\boxed{\quad T_d \propto V I \cos(\phi) = P \quad}$$
    Thus, the driving torque is directly proportional to the **true power** consumed by the load.

2.  **Producing the Braking Torque ($T_b$):**
    As the disc rotates, it cuts the magnetic field of the permanent brake magnet. This induces eddy currents within the disc. According to Lenz's law, the interaction of these eddy currents with the magnetic field creates a torque that opposes the rotation. This braking torque is found to be directly proportional to the **speed of rotation (N)** of the disc.
    $$\boxed{\quad T_b \propto N \quad}$$

3.  **Achieving Steady Speed:**
    For any given power consumption, the disc will accelerate until the driving torque is exactly balanced by the braking torque.
    $$ T_d = T_b $$
    $$ P \propto N $$
    This is the crucial relationship in an energy meter: the **steady speed of the disc is directly proportional to the power being consumed**.

4.  **Measuring Energy:**
    Energy is power integrated over time ($E = \int P \, dt$). The total number of revolutions of the disc is its speed integrated over time ($\text{Revs} = \int N \, dt$).
    Since $P \propto N$, it follows that:
    $$ \int P \, dt \propto \int N \, dt $$
    $$\boxed{\quad E \propto \text{Total Revolutions} \quad}$$
    The gear system is calibrated via a **meter constant (K)**, usually in revs/kWh, to convert the number of revolutions into a direct reading of energy consumed.

---

### Related Concepts
#topic/related-concepts

> [[Single-Phase Induction Type Energy Meter]]

[[Errors and Adjustments in Energy Meters]]
[[Construction, Principle, and Operation]]
[[Electrodynamometer Wattmeter]]
[[Eddy Currents]]
[[Power Factor]]
