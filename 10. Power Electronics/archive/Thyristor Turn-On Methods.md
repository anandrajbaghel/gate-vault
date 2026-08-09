---
title: Thyristor Turn-On Methods
parent: "[[Power Thyristors]]"
tags:
---
#thyristors/turn-on-methods 

With **anode positive** *w.r.t.* **cathode**, a thyristor can be turned on by any one of the following techniques.

1. [[#Forward Voltage Triggering]]
2. [[#Gate Triggering]]
3. [[#dv/dt Triggering]]
4. [[#Temperature Triggering]]
5. [[#Light Triggering]]

---
### Techniques
##### Forward Voltage Triggering
#thyristors/turn-on-methods/forward-voltage-triggering

When a thyristor is forward-biased (anode is positive with respect to the cathode) and the gate is open, it operates in the forward blocking state. It conducts a small leakage current. If the forward voltage is increased, a point is reached where the current rises sharply, and the thyristor switches to the forward conduction state. This voltage is known as the **forward breakover voltage (VBO​)**. At this voltage, the thyristor turns ON. This method is generally avoided in practical applications because it can lead to high heat dissipation and potential device damage.

##### Gate Triggering
#thyristors/turn-on-methods/gate-triggering 

This is the most common and practical method for turning on a thyristor. When the thyristor is forward-biased, a small positive voltage or current pulse is applied to the gate terminal. This injects charge carriers into the gate region, initiating the turn-on process. By controlling the timing of this gate pulse, the instant of turn-on can be precisely controlled, a concept known as **phase control**. The gate signal can be a DC signal, a single pulse, or a pulse train.
![[Pasted image 20250818175511.png]]

1. **DC Gate Triggering**: A continuous DC voltage is applied to the gate. This keeps the thyristor ON as long as the anode current is maintained.
2. **Pulse Gate Triggering**: A short-duration pulse is applied to the gate. This is efficient as it saves gate power, and a single pulse is usually sufficient to trigger the thyristor into conduction.
3. **Pulse Train Triggering**: A series of pulses is used, which is particularly useful for inductive loads where a single pulse might not be enough to turn on the thyristor if the anode current hasn't reached the latching current yet.

The gate trigger signal must meet specific criteria defined by the **gate characteristics** of the thyristor to ensure reliable triggering without damaging the device. This includes meeting the minimum gate current and voltage thresholds.

##### dv/dt Triggering
#thyristors/turn-on-methods/dv-dt-triggering 

A thyristor has parasitic capacitances across its junctions. When a rapidly rising forward voltage (VA​) is applied across the thyristor, a displacement current flows through the junction capacitances. This current can act like a gate current and prematurely turn ON the device even without a formal gate pulse. This phenomenon is called **dv/dt triggering**. A higher dv/dt rating for a thyristor indicates a greater ability to withstand a fast-changing voltage without turning ON unintentionally. A [[snubber circuits|snubber circuit]], typically a series RC network, is often connected in parallel with the thyristor to limit the dv/dt and prevent false triggering.

##### Temperature Triggering
#thyristors/turn-on-methods/temperature-triggering

In this method, the temperature of the thyristor is raised. An increase in temperature causes a rise in the concentration of electron-hole pairs and the magnitude of the leakage current in the device. If the temperature rises high enough, the leakage current can become large enough to trigger the regenerative action and turn on the thyristor, even with no gate signal applied. This method is purely a characteristic of the device and is considered a malfunction rather than a controlled turn-on method.

##### Light Triggering
#thyristors/turn-on-methods/light-triggering 

Some thyristors, known as **Light-Activated SCRs (LASCRs)**, can be turned ON by shining a light source on their gate region. The light energy creates electron-hole pairs, which act as the gate current to trigger the device. This method is often used in high-voltage DC (HVDC) transmission where electrical isolation is critical.

---
### Summary of Key Takeaways
#thyristors/turn-on-methods/summary

1. **Forward Voltage Triggering**: Turning ON by increasing forward voltage beyond breakover voltage. Not recommended for practical use.
2. **Gate Triggering**: The standard, most reliable method using a small gate current pulse. Enables precise control over the turn-on instant.
3. **dv/dt Triggering**: An undesirable effect caused by a high rate of change of forward voltage across the thyristor. Prevented by snubber circuits.
4. **Temperature Triggering**: Caused by an increase in leakage current at high temperatures. An uncontrolled and undesirable turn-on method.
5. **Light Triggering**: Used in special devices (LASCRs) where a light pulse is used to turn on the device, providing electrical isolation.

For a comprehensive understanding, it's essential to study the [[Static V-I Characteristics of Thyristor|static V-I characteristics of a thyristor]], which graphically represent these turn-on conditions.

---
### Related Concepts

> [[Switching Characteristics of Thyristor]]

