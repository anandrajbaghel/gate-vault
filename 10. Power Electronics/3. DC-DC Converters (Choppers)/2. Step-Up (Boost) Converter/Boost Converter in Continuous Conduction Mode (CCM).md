---
tags:
  - power-electronics
  - dc-dc-converters
  - choppers
  - boost-converter
  - ccm-analysis
created: 2025-10-15
aliases:
  - Boost Converter CCM Analysis
  - Continuous Conduction Mode Boost
  - Boundary Condition between CCM and DCM for Boost Converter
subject: "[[Power Electronics]]"
parent:
  - "[[Boost Converter]]"
modified: 2026-08-04T09:14:29
---

### Analysis of Boost Converter in CCM
#power-electronics #boost-converter #ccm #steady-state-analysis

> This analysis examines the steady-state performance of a boost converter in Continuous Conduction Mode (CCM), where the <u>inductor current never falls to zero</u>. This mode is preferred for higher power levels as it leads to lower peak stresses on components and better utilization of the inductor. <u>The analysis focuses on calculating the current and voltage ripples, which are essential for component selection and design.</u>

**Assumptions for Analysis:**
1.  The converter is operating in steady-state.
2.  Components are ideal (zero voltage drops, zero ESR).
3.  The output voltage ripple is small, so the output voltage is considered constant at $V_o$.

---
#### Input and Inductor Current Analysis
#inductor-ripple-current #input-current

In a boost converter, the inductor is in series with the input source, so the average inductor current ($I_L$) is equal to the average input current ($I_{in}$). We can find this relationship using power balance (assuming 100% efficiency, $P_{in} = P_{out}$).
$$V_{in} I_{in} = V_o I_o \implies V_{in} I_L = \frac{V_{in}}{1-D} I_o$$
$$\boxed{\quad I_L = I_{in} = \frac{I_o}{1-D} \quad}$$
This shows the <u>average input current is larger than the output current</u>.

##### Inductor Current Ripple ($\Delta I_L$)
#inductor-ripple-current 

> See [[Inductor Ripple Current]] for derivation

The peak-to-peak ripple is determined by the voltage across the inductor.

![[Inductor Current Ripple.png]]

* <u>**During Switch ON time ($DT_s$):**</u>
    $v_L = V_{in}$. The current ramps up. The total rise is:
    $$\Delta I_L = \frac{V_{in}}{L} DT_s = \frac{V_{in}D}{L f_s}$$
* <u>**During Switch OFF time ($(1-D)T_s$):**</u>
    $v_L = V_{in} - V_o$. The current ramps down. The magnitude of the fall is the same in steady state.

<u>The peak-to-peak inductor current ripple is</u>:
$$\boxed{\quad \Delta I_L = \frac{V_{in}D}{L f_s} \quad}$$
<u>The maximum and minimum inductor currents are</u>:
$$I_{L,max} = I_L + \frac{\Delta I_L}{2} = \frac{I_o}{1-D} + \frac{V_{in}D}{2Lf_s}$$
$$I_{L,min} = I_L - \frac{\Delta I_L}{2} = \frac{I_o}{1-D} - \frac{V_{in}D}{2Lf_s}$$

---
#### Output Voltage Ripple Analysis
#output-voltage-ripple

In a boost converter, the output stage is disconnected from the input when the switch is ON, forcing the capacitor to supply the entire load current.

![[Output Voltage Ripple Calculation#Ripple Calculation for Boost Converter Boost and Buck-Boost Converter Buck-Boost Converters (CCM)]]

---
#### Boundary Condition between CCM and DCM
#ccm-dcm-boundary #critical-inductance

The converter is at the boundary between CCM and DCM when the inductor current just falls to zero, i.e., $I_{L,min} = 0$.
This means the average inductor current must be equal to half the ripple:
$$I_{L,crit} = \frac{\Delta I_L}{2}$$
Substituting the expressions for $I_L$ and $\Delta I_L$:
$$\frac{I_o}{1-D} = \frac{1}{2} \left( \frac{V_{in}D}{L_c f_s} \right)$$
Now, substitute $I_o = V_o/R$ and $V_o = V_{in}/(1-D)$:
$$\frac{V_{in}/(1-D)}{R(1-D)} = \frac{V_{in}D}{2 L_c f_s}$$
$$\frac{V_{in}}{R(1-D)^2} = \frac{V_{in}D}{2 L_c f_s}$$
Solving for the critical inductance, $L_c$:
$$\boxed{\quad L_c = \frac{D(1-D)^2 R}{2f_s} \quad}$$
If the inductance used ($L$) is greater than $L_c$ for a given load, the converter will operate in CCM. This calculation is crucial for ensuring CCM operation under the lightest expected load conditions.

---
### Related Concepts
#ccm-analysis/related-concepts

> [[Boost Converter]]

[[Boost Converter in Discontinuous Conduction Mode (DCM)]]
[[Conduction Modes in Power Electronics]]
[[DC-DC Converters (Choppers)]]
[[Output Voltage Ripple Calculation]]
[[Inductor Volt-Second Balance]]
