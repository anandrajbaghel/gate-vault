---
title: Power Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs)
parent: "[[Power Transistors]]"
tags:
  - mosfet
  - power-mosfet
---
> **MOSFET** : Metal Oxide Semiconductor Field Effect Transistor
> 1. voltage controlled device.
> 2. unipolar device
> 3. Control signal (or gate current) required is very less compared to control signal (or base current) required in [[Bipolar junction transistors (BJTs)|BJTs]]
> 4. applications in low-power high frequency converters

### Types of Power MOSFETs

1. **[[#n-channel enhancement]]** (planar MOSFETs)
2. p-channel enhancement
3. **[[#DMOS]]** (double-diffused MOSFETs)

### n-channel enhancement

> for low power electronics

![[Pasted image 20250809202524.png]]

##### Disadvantage
1. Conducting n-channel in between drain and source gives large on-state resistance.

---
### DMOS

> **Double-Diffused Metal-Oxide-Semiconductor Field-Effect Transistor**
> (for high power electronics)

##### Types of DMOS
1.  **Vertical DMOS** [Current flows vertically from the top (source) to the bottom (drain), and this vertical structure enables higher current and power handling with lower on-resistance for low-voltage conditions.]
2. **Lateral DMOS** [Current flows laterally across the device; this structure is favored for RF and analog applications requiring high voltage and high-frequency performance.]

![[Pasted image 20250809210055.png]]
##### High-Power MOSFET Construction

> construction of a high-power **n-channel planar diffused metal-oxide-semiconductor (DMOS) structure**, which is common for power MOSFETs.

1. A **high-resistivity n- layer** is grown on an **n+ substrate**.
2. The thickness of this n- layer determines the **voltage-blocking capability** of the device.
3. A metal layer is deposited on the other side of the n+ substrate to form the **drain terminal**.
4. **p regions** are diffused into the n- layer.
5. **n+ regions** are then diffused into the p regions.
6. An **SiO2​ layer** is added and etched to create openings for the **source and gate terminals**.
7. A single power MOSFET device is actually composed of a **parallel connection of thousands of these basic MOSFET cells** on a single silicon chip.

##### Operation of an N-Channel DMOS Power MOSFET

- **Gate Voltage at Zero:** When the gate-source voltage ($V_{GS}​$) is zero, the $n^--p^-$ junctions are reverse-biased. No electric field is formed, and consequently, no current flows from the drain to the source.
- **Gate Voltage is Positive:** When a positive voltage is applied to the gate terminal relative to the source, an electric field is created. This field draws electrons to form an **n-channel** in the $p^-$ regions, which allows current ($I_D​$) to flow from the drain to the source. The magnitude of this current increases as the gate voltage increases. The length of this n-channel can be controlled, and using a short channel length can result in a low **on-resistance**.
##### Parasitic Bipolar Junction Transistor (BJT)

![[Pasted image 20250810105534.png|400]]

A parasitic `npn` BJT exists within the structure of an N-channel DMOS power MOSFET, with its components defined as:

- **Base:** The p-body.
- **Emitter:** The n+ layer (which is also the source of the MOSFET).
- **Collector:** The n- layer (which is also the drain of the MOSFET).

Because the source terminal is connected to both the base and emitter of this parasitic BJT, the potential difference between them is always zero. This keeps the parasitic BJT in a **cut-off state**, preventing it from interfering with the MOSFET's operation.
##### Parasitic Diode in PMOSFETs

A **parasitic diode** exists in a power MOSFET, with the **source acting as the anode** and the **drain as the cathode**. This diode can be used in circuits like half-bridge or full-bridge rectifiers. The text notes that this diode, also called an **in-built diode**, gives PMOSFETs an almost zero reverse voltage blocking capability, which can be an advantage in inverter circuits.
##### PMOSFET Operation

In a PMOSFET, electrons flow from the **source to the drain** when the source is negative and the drain is positive. This current flows through the n+ layer, the n-channel in the p layer, and then through the n- and n+ layers to the drain.
##### PMOSFET Turn-off and Frequency

PMOSFETs are **majority carrier devices**, meaning current conduction is due only to the movement of electrons. This eliminates the time delays caused by the removal of minority carriers during the turn-off process. This results in a very fast turn-off time, typically around 100 ns, allowing PMOSFETs to operate at frequencies ranging from 1 to 10 MHz.

---
### Related Concepts

[[Static V-I Characteristics of PMOSFET]]
[[Static V-I Characteristics of PMOSFET#Applications of PMOSFET|PMOSFET Applications]]
[[Power Transistors]] (parent topic)

[^1]

[^1]: A mixture of silicon atoms and pentavalent atoms, deposited on wafer, forms a layer of n-type semiconductor on heated surface. This layer is called epitaxial layer.
