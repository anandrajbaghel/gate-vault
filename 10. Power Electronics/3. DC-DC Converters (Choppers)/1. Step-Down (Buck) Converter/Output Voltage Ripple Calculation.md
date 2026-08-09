---
tags:
  - power-electronics
  - dc-dc-converters
  - design-calculation
  - ripple-analysis
  - buck-converter
created: 2025-10-15
aliases:
  - Output Ripple
  - Voltage Ripple Calculation
  - Capacitor Sizing
  - Peak-to-Peak Output Ripple
  - Delta Vo
  - Effect of Equivalent Series Resistance (ESR)
subject: "[[Power Electronics]]"
parent:
  - "[[Buck Converter]]"
  - "[[Boost Converter]]"
  - "[[Buck-Boost Converter]]"
question:
  - "[[ee_2022#^q61]]"
modified: 2026-08-04T10:09:44
---
### Output Voltage Ripple Calculation
#power-electronics #ripple-analysis #converter-design #capacitor-sizing

> The output of a DC-DC converter is not a perfect DC voltage but has a small high-frequency AC component superimposed on it, known as the **output voltage ripple ($\Delta V_o$)**. This ripple is a critical performance parameter, and its calculation is essential for selecting the output filter capacitor (C) to meet the design specifications of a power supply.

#### Cause of Voltage Ripple
The ripple is primarily caused by the AC component of the current flowing into the output stage. The output capacitor's job is to absorb this ripple current, smoothing the voltage.

*   The current flowing into the capacitor is $i_C(t) = i_L(t) - I_o$, where $i_L(t)$ is the inductor current and $I_o$ is the DC load current.
*   When $i_L(t) > I_o$, the capacitor charges.
*   When $i_L(t) < I_o$, the capacitor discharges.
*   This continuous charging and discharging creates the voltage ripple $\Delta V_o$.

---
#### Fundamental Derivation Principle
#capacitor/derivation

The ripple is calculated using the charge-voltage relationship of a capacitor:
$$V = \frac{Q}{C} \implies \boxed{\quad \Delta V_o = \frac{\Delta Q}{C} \quad}$$

Where $\Delta Q$ is the accumulation (or depletion) of charge in the capacitor during a specific interval. This is found by calculating the **Area** under the capacitor current waveform ($i_C$ vs $t$) using the [[capacitor ampere-second balance]] principle.

---
#### Ripple Calculation for [[Buck Converter]] (CCM)
#buck-converter #voltage-ripple

In a buck converter operating in CCM, the inductor current has a triangular ripple ($\Delta I_L$) centered around the average DC current $I_o$. The voltage ripple is derived from the change in charge on the capacitor.

The change in capacitor charge ($\Delta Q$) is the area of the current-time graph for $i_C(t)$ when it is positive. This corresponds to the area of the small triangle formed by the inductor current ripple above the average value $I_o$.
*   Base of the triangle = Half the switching period = $T_s / 2$.
*   Height of the triangle = Half the peak-to-peak current ripple = $\Delta I_L / 2$.

$$\Delta Q = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times \frac{T_s}{2} \times \frac{\Delta I_L}{2} = \frac{T_s \Delta I_L}{8}$$
Using the fundamental capacitor equation $\Delta Q = C \cdot \Delta V_o$:
$$\Delta V_o = \frac{\Delta Q}{C} = \frac{T_s \Delta I_L}{8C}$$
Since $f_s = 1/T_s$, <u>the ripple voltage in terms of the current ripple is:</u>
$$\boxed{\quad \Delta V_o = \frac{\Delta I_L}{8 C f_s} \quad}$$
By substituting the expression for a buck converter's current ripple, $\Delta I_L = \frac{V_o(1-D)}{L f_s}$:
$$\boxed{\quad \Delta V_o = \frac{V_o(1-D)}{8 L C f_s^2} \quad}$$
<u>This is the fundamental equation used for sizing the L and C filter components in a buck converter.</u>

---
#### Ripple Calculation for [[Boost Converter|Boost]] and [[Buck-Boost Converter|Buck-Boost]] Converters (CCM)
The ripple calculation for Boost and Buck-Boost converters is different because their output current is **discontinuous**. The diode only delivers current to the output stage when the switch is OFF.

*   When the switch is ON (for time $DT_s$), the entire load current $I_o$ is supplied by the output capacitor.
*   This causes the capacitor to discharge, and the change in charge is $\Delta Q = I_o \cdot DT_s$.
*   The <u>peak-to-peak voltage ripple is therefore:</u>
$$\Delta V_o = \frac{\Delta Q}{C} = \frac{I_o D T_s}{C}$$
$$\boxed{\quad \Delta V_o = \frac{I_o D}{C f_s} = \frac{V_o D}{R C f_s} \quad (\text{For Boost \& Buck-Boost})}$$
*   **Key Insight:** <u>The ripple voltage in Boost and Buck-Boost converters is significantly larger than in a Buck converter for the same components because the capacitor must handle the full load current for a portion of the cycle.</u>

---
#### Effect of Equivalent Series Resistance (ESR)
#capacitor-esr #practical-design

Real capacitors have a small internal resistance called Equivalent Series Resistance ($R_{ESR}$). The AC ripple current ($\Delta I_L$) flowing through this resistance creates a voltage drop that adds to the ripple from charging/discharging.
$$\Delta V_{o, ESR} = \Delta I_L \times R_{ESR}$$
The total output ripple is a combination of the capacitive ripple and the ESR ripple. In many high-frequency designs, **the ESR component is the dominant source of output voltage ripple.**
$$\Delta V_{o, total} \approx \Delta V_{o, cap} + \Delta V_{o, ESR}$$
Using low-ESR capacitors (e.g., ceramic or polymer capacitors) is crucial for designing low-ripple power supplies.

---
### Related Concepts
#ripple-analysis/related-concepts

> [[Buck Converter in Continuous Conduction Mode (CCM)]]

[[Boost Converter in Continuous Conduction Mode (CCM)]]
[[Buck-Boost Converter]]
[[Capacitor Ampere-Second Balance]]
[[Inductor Ripple Current]] (Crucial input for Buck ripple)
[[Buck Converter]]
[[Boost Converter]]