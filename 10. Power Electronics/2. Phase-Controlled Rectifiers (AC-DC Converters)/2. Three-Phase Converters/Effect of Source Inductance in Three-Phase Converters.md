---
tags:
  - power-electronics
  - rectifiers
  - three-phase
  - commutation
  - overlap
created: 2025-10-15
aliases:
  - 3-Phase Commutation Overlap
  - Overlap in 6-Pulse Converters
subject: "[[Power Electronics]]"
parent:
  - Phase-Controlled Rectifiers (AC-DC Converters)
modified: 2026-08-04T09:36:02
---
### Effect of Source Inductance in Three-Phase Converters
#commutation-overlap #source-inductance #rectifier-performance

> In practical three-phase systems, the AC source always possesses some inductance ($L_s$), primarily due to transformer leakage reactance. This inductance fundamentally alters the behavior of controlled rectifiers by preventing the instantaneous transfer of current from one thyristor to the next. This leads to a period of **commutation overlap**, where thyristors from two different phases conduct simultaneously. The primary consequence of this overlap is a reduction in the average DC output voltage, which is dependent on the load current. This effect is crucial for accurately predicting the voltage regulation of any practical converter.

#### The Commutation Overlap Phenomenon in a 6-Pulse Converter
#commutation-overlap 

In an ideal 6-pulse converter, when an incoming thyristor is fired, the outgoing thyristor immediately turns off. In reality, the source inductance in the commutating phases opposes this sudden change.

*   **Process**: Consider the commutation from T5 (Phase C) to T1 (Phase A) in the upper group. When T1 is fired at $\omega t = 30^\circ + \alpha$, the current $i_A$ begins to rise from zero, and the current $i_C$ begins to fall from the full DC load current, $I_d$. Because of $L_s$, this change takes time.
*   **Overlap Period**: For a duration known as the **overlap angle ($\mu$)**, both T5 and T1 conduct simultaneously. During this time, phases A and C are effectively shorted together through their respective inductances. The output DC voltage is the average of the two phase voltages, $v_{dc} = (v_a + v_c)/2$. This causes a "notch" in the DC voltage waveform. The overlap ends when the current in the outgoing thyristor (T5) has completely fallen to zero.

---
#### Analysis and Voltage Drop Calculation
#voltage-drop/calculation 

The voltage driving the commutation from phase C to phase A is the line-to-line voltage $v_{ac}$. During the overlap, the KVL for the commutating loop is:
$$v_{ac} = v_a - v_c = L_s \frac{di_a}{dt} - L_s \frac{di_c}{dt}$$
Assuming a constant DC load current $I_d$, we have $i_a + i_c = I_d$, which implies $\frac{di_a}{dt} = -\frac{di_c}{dt}$. The KVL equation simplifies to:
$$v_{ac} = 2L_s \frac{di_a}{dt}$$
Integrating this over the overlap period to find the total change in current (from 0 to $I_d$) gives the equation for the overlap angle $\mu$:
$$\boxed{\quad \cos\alpha - \cos(\alpha+\mu) = \frac{2\omega L_s I_d}{V_{mL}} = \frac{2X_s I_d}{V_{mL}} \quad}$$
where $X_s = \omega L_s$ is the source reactance per phase and $V_{mL}$ is the peak line-to-line voltage.

##### Voltage Drop ($\Delta V_d$)
#voltage-drop 

The overlap causes a loss of voltage-time area in the output waveform. There are 6 commutations per cycle, so the total reduction in the DC voltage is 6 times the average loss per commutation. This voltage drop is found to be:
$$\boxed{\quad \Delta V_d = \frac{3\omega L_s}{\pi} I_d = \frac{3X_s}{\pi} I_d \quad}$$
**Key Insights**:
1.  The voltage drop is directly proportional to the source inductance ($L_s$) and the DC load current ($I_d$).
2.  The voltage drop is **independent of the firing angle ($\alpha$)**. This means the converter behaves like a DC voltage source with an equivalent internal resistance of $R_{eq} = \frac{3X_s}{\pi}$.

---
##### Final Output Voltage Equation
#final-output-voltage 

The actual DC output voltage of a three-phase full converter with source inductance is:
$$V_{dc} = V_{dc(ideal)} - \Delta V_d$$

> [!info]- Ideal Voltage Reference
> ![[Three-Phase Full-Bridge Controlled Rectifier#Waveforms and Equations (Continuous Conduction Mode)]]

Subtracting the overlap drop gives the final practical equation:
$$\boxed{\quad V_{dc} = \frac{3V_{mL}}{\pi} \cos\alpha - \frac{3X_s}{\pi} I_d \quad}$$

---
#### Consequences of Commutation Overlap
#consequences #commutation-overlap/consequences

1. **Voltage Regulation**: The output voltage now droops as the load current increases. This is a form of load regulation.
2. **Harmonic Distortion**: The overlap changes the shape of the input AC current waveform from ideal rectangular blocks to a trapezoidal shape, altering its harmonic content.

> [!danger] Commutation Failure in Inverter Mode
> In inverter mode ($\alpha > 90^\circ$), the overlap angle $\mu$ becomes critical. Commutation MUST finish before the line-to-line voltage reverses polarity. 
> 
> **Absolute Safe Limit:**
> $$\boxed{\quad \alpha + \mu < 180^\circ \quad}$$
> (Often written with an extinction angle margin $\gamma$: $\alpha + \mu + \gamma = 180^\circ$)
> 
> If $\alpha + \mu \ge 180^\circ$ (due to a current spike or AC voltage dip), the outgoing SCR is re-biased into conduction. This short-circuits the DC source, causing a catastrophic fault.

---
### Related Concepts
#commutation-overlap/related-concepts

> [[Three-Phase Full-Bridge Controlled Rectifier]]

[[Effect of Source Inductance (Commutation Overlap)]] (The single-phase case)
[[Performance Metrics]]
[[Dual Converters (Circulating and Non-Circulating Current Modes)]]
