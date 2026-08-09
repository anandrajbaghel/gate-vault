---
tags:
  - power-electronics
  - dc-dc-converters
  - buck-boost-converter
  - ccm-analysis
  - ripple-analysis
created: 2025-10-15
aliases:
  - Buck-Boost Converter Analysis
  - Buck-Boost Waveforms
subject: "[[Power Electronics]]"
parent:
  - "[[Buck-Boost Converter]]"
modified: 2026-08-04T09:15:34
---
### Analysis and Waveforms of a Buck-Boost Converter (CCM)
#power-electronics #buck-boost-converter #ccm #steady-state-analysis

> This note provides a detailed analysis of the buck-boost converter operating in Continuous Conduction Mode (CCM). The focus is on deriving the expressions for inductor current ripple, output voltage ripple, and the boundary conditions for CCM operation. Understanding these parameters is crucial for selecting appropriate components (L, C, switch, diode) and designing a stable converter.

**Assumptions for Analysis:**
1.  The converter is operating in steady-state.
2.  Components are ideal (zero voltage drops, zero ESR).
3.  The output voltage ripple is small, and the output voltage is considered constant at its average value, $V_o$. Remember that $V_o$ is a negative quantity.

---
#### Inductor and Component Current Analysis
#inductor-ripple-current #component-stress

##### Average Inductor Current ($I_L$)
The diode conducts only when the switch is OFF (for a duration of $(1-D)T_s$), and during this time, it carries the inductor current. The average current through the diode must equal the DC load current, $I_o$.
$$I_o = I_{D,avg} = \frac{1}{T_s} \int_{DT_s}^{T_s} i_L(t) dt \approx (1-D)I_L$$
Therefore, the average inductor current is:
$$\boxed{\quad I_L = \frac{I_o}{1-D} \quad}$$
*Note: Since $V_o$ is negative, $I_o$ is typically shown flowing out of the negative terminal, making its value also negative. For magnitude calculations, we use $|I_o|$.*

##### Inductor Current Ripple ($\Delta I_L$)
The peak-to-peak ripple is calculated from the ON state of the switch.
*   **During Switch ON time ($DT_s$):**
    $v_L = V_{in}$. The current ramps up. The total rise is:
    $$\Delta I_L = \frac{V_{in}}{L} DT_s = \frac{V_{in}D}{L f_s}$$
The maximum and minimum inductor currents are:
$$I_{L,max} = I_L + \frac{\Delta I_L}{2} \qquad I_{L,min} = I_L - \frac{\Delta I_L}{2}$$

##### Switch and Diode Currents
The switch and diode currents are pulsating and discontinuous, leading to high component stress.
*   **Peak Switch Current = Peak Diode Current = $I_{L,max}$**.
*   The components must be rated to handle these high peak currents, which are significantly larger than the average input or output currents.

---
#### Output Voltage Ripple Analysis ($\Delta V_o$)
#output-voltage-ripple

![[Output Voltage Ripple Calculation#Ripple Calculation for Boost Converter Boost and Buck-Boost Converter Buck-Boost Converters (CCM)]]

---
#### Boundary Condition between CCM and DCM
#ccm-dcm-boundary #critical-inductance

The boundary is defined by the point where the inductor current just touches zero, i.e., $I_{L,min} = 0$. This implies that the average current is half the ripple.
$$I_L = \frac{\Delta I_L}{2}$$
Substituting the expressions for $I_L$ and $\Delta I_L$:
$$\frac{|I_o|}{1-D} = \frac{1}{2} \left( \frac{V_{in}D}{L_c f_s} \right)$$
Now, use $|I_o| = |V_o|/R$ and the voltage relation $|V_o| = V_{in} \frac{D}{1-D}$:
$$\frac{1}{1-D} \left( \frac{V_{in} D}{R(1-D)} \right) = \frac{V_{in}D}{2 L_c f_s}$$
$$\frac{V_{in} D}{R(1-D)^2} = \frac{V_{in}D}{2 L_c f_s}$$
Solving for the critical inductance, $L_c$:
$$\boxed{\quad L_c = \frac{(1-D)^2 R}{2f_s} \quad}$$
If the inductance $L > L_c$ for a given load R, the converter will operate in CCM.

---
#### Ideal Waveforms (CCM)
*   **$v_L(t)$:** Rectangular waveform. It is $+V_{in}$ for $DT_s$ and $V_o$ (a negative value) for $(1-D)T_s$.
*   **$i_L(t)$:** Trapezoidal waveform, ramping up from $I_{L,min}$ to $I_{L,max}$ and then back down.
*   **$i_S(t)$:** Pulsating current. Follows $i_L(t)$ during the ON time and is zero otherwise.
*   **$i_D(t)$:** Pulsating current. Follows $i_L(t)$ during the OFF time and is zero otherwise.

---
### Related Concepts
#ccm-analysis/related-concepts

> [[Buck-Boost Converter]]

[[DC-DC Converters (Choppers)]]
[[Buck Converter in Continuous Conduction Mode (CCM)]]
[[Boost Converter in Continuous Conduction Mode (CCM)]]