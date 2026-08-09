---
tags:
  - power-electronics
  - dc-dc-converters
  - choppers
  - buck-converter
  - ccm-analysis
created: 2025-10-15
aliases:
  - Buck Converter CCM Analysis
  - Continuous Conduction Mode Buck
  - Critical Inductance
  - Boundary Condition between CCM and DCM
subject: "[[Power Electronics]]"
parent:
  - "[[Buck Converter]]"
modified: 2026-08-04T09:15:17
---
### Analysis of Buck Converter in CCM
#power-electronics #buck-converter #ccm #steady-state-analysis

> This analysis quantifies the performance of a buck converter operating in Continuous Conduction Mode (CCM), where the inductor current $i_L(t)$ remains positive throughout the entire switching cycle. This is the intended mode of operation for most medium-to-high power applications as it makes better use of the magnetic and semiconductor components and results in lower peak currents.

**Assumptions for Analysis:**
1.  The converter is in steady-state.
2.  The switching period is $T_s$, and the switching frequency is $f_s = 1/T_s$.
3.  All components (switch, diode, inductor, capacitor) are ideal.
4.  The output voltage ripple is small, so we can approximate the voltage across the capacitor as constant at $V_o$.

---
#### Inductor Current Analysis
#inductor-ripple-current

The average current through the inductor, $I_L$, must equal the average DC load current, $I_o$, because the average current through the capacitor in steady-state is zero.
$$I_L = I_o = \frac{V_o}{R}$$

##### Inductor Current Ripple ($\Delta I_L$)
#inductor-ripple-current 

> See [[Inductor Ripple Current]] for derivation

The peak-to-peak ripple of the inductor current is determined by the voltage across it and the time duration for which that voltage is applied.

![[Inductor Current Ripple.png]]

*   **During Switch ON time ($DT_s$):**
    $v_L = V_{in} - V_o$. The current ramps up.
    $\Delta i_{L(ON)} = \frac{V_{in} - V_o}{L} \cdot DT_s$
*   **During Switch OFF time ($(1-D)T_s$):**
    $v_L = -V_o$. The current ramps down. The magnitude of the change is:
    $\Delta i_{L(OFF)} = \frac{V_o}{L} \cdot (1-D)T_s$

In steady state, the rise in current must equal the fall in current. This ripple is denoted as $\Delta I_L$.
$$\boxed{\quad \Delta I_L = \frac{V_o(1-D)}{L f_s} \quad}$$
(Using $V_{in} - V_o = V_o/D - V_o = V_o(1-D)/D$ in the first equation also yields this result).

The maximum and minimum inductor currents are:
$$I_{L,max} = I_L + \frac{\Delta I_L}{2} = I_o + \frac{\Delta I_L}{2}$$
$$I_{L,min} = I_L - \frac{\Delta I_L}{2} = I_o - \frac{\Delta I_L}{2}$$

> [!danger] Crucial PYQ Concept: Capacitor vs. Inductor Current
> In a [[Buck Converter]], applying [[Kirchhoff's Laws#Kirchhoff's Current Law (KCL)|KCL]] at the output node gives:
> $$i_L(t) = i_C(t) + i_o(t)$$
> Assuming the load current is a perfectly smooth DC value ($I_o$), the capacitor acts as a filter and absorbs the entire AC ripple component of the inductor current:
> $$i_C(t) = i_L(t) - I_o$$
> 
> **Key consequences for solving graphical PYQs:**
> 1. **Waveform Shape:** The capacitor current graph is exactly the same as the inductor current graph, just shifted down by the DC load current $I_o$.
> 2. **Identical Slopes:** Because $I_o$ is a constant, the derivative of both sides is equal. Therefore, you can calculate the inductor voltage using the slope of the *capacitor* current:
>    $$\frac{di_C}{dt} = \frac{di_L}{dt} \implies v_L = L \frac{di_C}{dt}$$
> 3. **Peak-to-Peak Equivalence:** The peak-to-peak amplitude of the capacitor current is equal to the peak-to-peak inductor ripple ($\Delta I_C = \Delta I_L$).
^1

> [!example] Current through the Switch $S$
> In a CCM buck converter, **the switch current equals the inductor current throughout the ON interval**.
> $$i_S(t) = i_L(t) \quad \text{for } 0 \le t \le T_{on}$$

---
#### Output Voltage Ripple Analysis
#output-voltage-ripple

The output voltage ripple ($\Delta V_o$) is caused by the AC component of the inductor current charging and discharging the output capacitor.

![[Output Voltage Ripple Calculation#Ripple Calculation for Buck Converter (CCM)]]

This formula is critical for selecting L and C values to meet a specified output voltage ripple.

---
#### Exam Pitfall: Average vs. RMS Power

> See [[ee_2019#^q37]]

When a PYQ asks for "Load Power" in a Buck converter without specifying "Average" or "RMS," check if both results are in the options.

1. **Average Power ($P_{avg}$):** Assumes the output is filtered to a constant DC level. $$P_{avg} = \frac{(V_{avg})^2}{R} = \frac{(D V_{in})^2}{R}$$ *Use this for: Electronics, battery charging, or if an LC filter is explicitly mentioned.*

2. **RMS/Total Power ($P_{rms}$):** Accounts for the heating effect of the ripple/pulsed waveform. For a purely resistive load seeing the "chopped" input (or if the capacitor is small): $$V_{rms} = \sqrt{D} \cdot V_{in}$$ $$P_{total} = \frac{(V_{rms})^2}{R} = \frac{D \cdot V_{in}^2}{R}$$

---
#### Boundary Condition between CCM and DCM
#ccm-dcm-boundary #critical-inductance

The converter operates at the boundary between Continuous and Discontinuous Conduction Mode when the inductor current just touches zero, i.e., $I_{L,min} = 0$.

![[CCM BCM & DCM (Buck Converter).png]]

This occurs when the average inductor current is exactly half of the peak-to-peak ripple:
$$I_{L,crit} = I_{o,crit} = \frac{\Delta I_L}{2}$$
If the load current $I_o$ drops below this critical value, the converter enters DCM.

##### Critical Inductance ($L_c$)
#critical-inductance 

The critical inductance is the minimum inductance required to maintain CCM for a given load resistance $R$ and duty cycle $D$. We find it by setting the load current $I_o = V_o/R$ equal to the critical current.
$$\begin{align}
\frac{V_o}{R} &= \frac{\Delta I_L}{2} = \frac{1}{2} \left(\frac{V_o(1-D)}{L_c f_s}\right) \\
\frac{1}{R} &= \frac{1-D}{2 L_c f_s}
\end{align}$$
Solving for $L_c$ gives:
$$\boxed{\quad L_c = \frac{(1-D)R}{2f_s} \quad}$$
If the inductance $L > L_c$, the converter will operate in CCM for that specific load R. Designers often choose L to be about 25% larger than $L_c$ at the minimum expected load current to ensure CCM operation.

---
### Related Concepts
#ccm-analysis/related-concepts

> [[Buck Converter]]

[[Buck Converter in Discontinuous Conduction Mode (DCM)]]
[[Inductor Ripple Current]]
[[Power BJT, Power MOSFET, and IGBT]]
[[DC-DC Converters (Choppers)]]
[[Design and selection of L and C components]]
[[Inductor Volt-Second Balance]]