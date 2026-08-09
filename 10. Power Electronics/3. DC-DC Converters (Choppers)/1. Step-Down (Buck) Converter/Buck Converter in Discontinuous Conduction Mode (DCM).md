---
tags:
  - power-electronics
  - dc-dc-converters
  - choppers
  - buck-converter
  - dcm-analysis
created: 2025-10-15
aliases:
  - Buck Converter DCM Analysis
  - Discontinuous Conduction Mode Buck
subject: "[[Power Electronics]]"
parent:
  - "[[Buck Converter]]"
modified: 2026-08-04T09:15:21
---
### Analysis of Buck Converter in DCM
#power-electronics #buck-converter #dcm #steady-state-analysis

> Discontinuous Conduction Mode (DCM) occurs in a buck converter at light load conditions (i.e., when the load current $I_o$ is below a critical value). In this mode, the energy stored in the inductor is fully depleted and its current falls to zero before the end of the switching cycle. The primary consequence is that the output voltage is no longer solely dependent on the duty cycle ($D$), but also on the load resistance ($R$), inductance ($L$), and switching frequency ($f_s$), leading to poorer voltage regulation.

> [!warning]- Discontinuous Conduction Mode (DCM) — How to Recognize & Understand
> A DC–DC converter operates in **DCM** if the **inductor current becomes zero for a finite time in every switching period**.
>
> **Physical meaning**
> - The inductor is **fully demagnetized** before the next cycle.
> - Energy transfer occurs in **discrete packets**, not continuously.
>
> **Waveform characteristics**
> - Inductor current is **triangular**, starting from zero, rising to a peak, and returning to zero.
> - A **zero-current interval** exists where both switch and diode are OFF.
>
> **Mathematical identification clues**
> - Since $I_{\min}=0$,
>   $$\Delta I_L = I_{\text{peak}}$$
>
> - Average output current equals the area of the current triangle:
>   $$I_0 = \frac{1}{T_s}\left(\frac{1}{2} D T_s I_{\text{peak}}\right)$$
>   $$I_0 = \frac{1}{2} D I_{\text{peak}}$$
>
> - Peak switch current equals peak inductor current:
>   $$I_{S,\text{peak}} = I_{\text{peak}}$$
>
> **Contrast with CCM**
> - In CCM: $I_{\min} > 0$
> - In CCM: $\Delta I_L = I_{\max}-I_{\min} \neq I_{\text{peak}}$
> - Peak current cannot be found without knowing the DC offset.
>
> **Exam insight**
> > If a problem allows a unique peak current to be calculated using only $D$, $\Delta I_L$, and $I_0$, the converter **must** be operating in DCM.

---
#### Inductor Current and Three Operating States
In DCM, the switching cycle $T_s$ is divided into three distinct states, unlike the two states in [[Buck Converter in Continuous Conduction Mode (CCM)|CCM]].

![[CCM BCM & DCM (Buck Converter).png]]

1.  **State 1: Switch ON ($0 < t \le DT_s$)**
    *   The switch S is closed. The voltage across the inductor is $v_L = V_{in} - V_o$.
    *   The inductor current $i_L$ ramps up linearly from zero to its peak value, $I_{L,peak}$.
    $$I_{L,peak} = \frac{V_{in} - V_o}{L} DT_s$$

2.  **State 2: Switch OFF, Diode ON ($DT_s < t \le (D+D_1)T_s$)**
    *   The switch S opens, and the freewheeling diode D conducts. The voltage across the inductor is $v_L = -V_o$.
    *   The inductor current ramps down from $I_{L,peak}$ to zero over a time interval $D_1 T_s$.
    $$I_{L,peak} = \frac{V_o}{L} D_1 T_s$$

3.  **State 3: Switch OFF, Diode OFF ($(D+D_1)T_s < t \le T_s$)**
    *   Since the inductor current is zero, the diode D turns off. Both the switch and diode are open.
    *   The inductor current remains zero for the rest of the cycle.
    *   The load current is supplied entirely by the output capacitor C during this interval.

---
#### Voltage Relationship in DCM
#dcm-analysis/voltage-relationship 

In DCM, the simple relationship $V_o = D \cdot V_{in}$ is no longer valid. To find the new relationship, we use the principle that the average inductor current must equal the average load current in steady state.

The average inductor current $I_L$ is the area of the triangular current pulse divided by the period $T_s$:
$$I_o = I_L = \frac{1}{T_s} \left(\frac{1}{2} \cdot I_{L,peak} \cdot (D+D_1)T_s\right) = \frac{I_{L,peak}(D+D_1)}{2}$$
By equating the two expressions for $I_{L,peak}$ from State 1 and State 2:
$$\frac{V_{in} - V_o}{L} DT_s = \frac{V_o}{L} D_1 T_s \implies D_1 = D \frac{V_{in} - V_o}{V_o}$$
Now, substitute $D_1$ and $I_{L,peak}$ (from State 1) into the equation for $I_o$:
$$\begin{align}
I_o &= \frac{1}{2} \left( \frac{V_{in} - V_o}{L} DT_s \right) \left( D + D \frac{V_{in} - V_o}{V_o} \right) \\
&= \frac{D(V_{in} - V_o)}{2L f_s} \left( \frac{DV_o + DV_{in} - DV_o}{V_o} \right) \\
I_o &= \frac{D^2 (V_{in} - V_o) V_{in}}{2 L f_s V_o}
\end{align}$$
Substituting $I_o = V_o/R$ and letting the voltage gain be $M = V_o/V_{in}$:
$$\frac{V_o}{R} = \frac{D^2 (V_{in} - M V_{in}) V_{in}}{2 L f_s M V_{in}} = \frac{D^2 V_{in} (1-M)}{2 L f_s M}$$
$$\frac{M V_{in}}{R} = \frac{D^2 V_{in} (1-M)}{2 L f_s M} \implies M^2 = \frac{R D^2 (1-M)}{2 L f_s}$$
Rearranging gives a quadratic equation for M:
$$M^2 + M \left(\frac{R D^2}{2 L f_s}\right) - \frac{R D^2}{2 L f_s} = 0$$
Solving this for the positive root gives the voltage transfer ratio in DCM:
$$\boxed{\quad M = \frac{V_o}{V_{in}} = \frac{2}{1 + \sqrt{1 + \frac{4K}{D^2}}} \quad \text{where} \quad K = \frac{2Lf_s}{R} \quad}$$
* **Key Insight:** The output voltage $V_o$ is now a function of the load resistance $R$. As the load becomes lighter (R increases), K decreases, and the voltage gain M increases for a fixed duty cycle $D$. This is why voltage regulation is poorer in DCM.

---
### Related Concepts
#dcm-analysis/related-concepts

> [[Buck Converter]]

[[Buck Converter in Continuous Conduction Mode (CCM)]]
[[CCM-DCM Boundary]]
[[DC-DC Converters (Choppers)]]