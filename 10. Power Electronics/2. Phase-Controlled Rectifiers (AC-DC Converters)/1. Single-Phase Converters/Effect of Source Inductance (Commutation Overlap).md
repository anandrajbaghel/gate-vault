---
tags:
  - power-electronics
  - rectifiers
  - commutation
  - source-inductance
  - overlap
created: 2025-10-15
aliases:
  - Commutation Overlap
  - Overlap Angle
  - Source Reactance Effect
subject: "[[Power Electronics]]"
parent: Phase-Controlled Rectifiers (AC-DC Converters)
modified: 2026-08-04T09:35:58
---
### Effect of Source Inductance (Commutation Overlap)
#commutation-overlap #source-inductance #rectifier-performance

> In ideal rectifier analysis, the AC source is assumed to have zero impedance. However, in any practical system, the AC source always has some inductance ($L_s$), arising from transformer leakage reactance and the impedance of the power lines. This **source inductance** prevents the load current from commutating (transferring) instantaneously from one pair of thyristors to the next. This non-instantaneous transfer results in a phenomenon called **commutation overlap**, which reduces the average DC output voltage and affects the converter's performance.

#### The Commutation Overlap Phenomenon
#overlap-angle

When an incoming pair of thyristors is fired, the outgoing pair does not turn off immediately because the source inductance opposes the change in current direction. For a brief period, both the incoming and outgoing pairs of thyristors conduct simultaneously. This period is known as the **overlap period**, and its duration is the **overlap angle ($\mu$)**.

*   **Effect on Circuit**: During the overlap, the output terminals of the rectifier are effectively short-circuited through the source inductance. This causes the instantaneous output voltage to drop to zero (for a single-phase bridge) or to an average of two phase voltages (for a three-phase bridge). This creates a "notch" in the output voltage waveform.

---
#### Analysis in a Single-Phase Full Converter
Consider a fully-controlled bridge rectifier operating in Continuous Conduction Mode (CCM) with load current $I_d$.
*   At $\omega t = \alpha$, thyristors T1 and T2 are conducting.
*   At $\omega t = \pi + \alpha$, thyristors T3 and T4 are fired.
*   Because of $L_s$, the current in T1/T2 cannot drop to zero instantly, and the current in T3/T4 cannot rise to $I_d$ instantly.
*   From $\pi+\alpha$ to $\pi+\alpha+\mu$, all four thyristors conduct. The AC source is short-circuited through the SCRs.

##### Derivation of Voltage Drop
During the overlap, the KVL equation for the commutating loop is:
$$v_s = L_s \frac{di_{in}}{dt} - L_s \frac{di_{out}}{dt}$$
Since the load current $I_d$ is constant, $i_{in} + i_{out} = I_d$, which implies $\frac{di_{in}}{dt} = -\frac{di_{out}}{dt}$.
$$v_s = 2L_s \frac{di_{in}}{dt}$$
Integrating this over the overlap period (from $\alpha$ to $\alpha+\mu$) to find the total charge transferred:
$$\int_{\alpha/\omega}^{(\alpha+\mu)/\omega} V_m \sin(\omega t) dt = \int_{0}^{I_d} 2L_s di_{in}$$
$$\frac{V_m}{\omega} [-\cos(\omega t)]_{\alpha}^{\alpha+\mu} = 2L_s I_d$$
This gives the relation for the overlap angle $\mu$:
$$\boxed{\quad \cos\alpha - \cos(\alpha+\mu) = \frac{2\omega L_s I_d}{V_m} = \frac{2X_s I_d}{V_m} \quad}$$
where $X_s = \omega L_s$ is the source reactance.

The reduction in the average DC voltage is due to the lost area (the notch) in the voltage waveform during each overlap. The average voltage drop, $\Delta V_d$, is this lost area divided by the half-period $\pi$.
$$\Delta V_d = \frac{1}{\pi} \times (\text{Area lost per commutation}) = \frac{1}{\pi} \int_{\alpha}^{\alpha+\mu} V_m \sin(\omega t) dt$$
From the previous integration, this area is equal to $2\omega L_s I_d$.
$$\boxed{\quad \Delta V_d = \frac{2\omega L_s I_d}{\pi} = \frac{2X_s I_d}{\pi} \quad}$$
The key result is that the voltage drop is directly proportional to the source inductance and the DC load current, and is **independent of the firing angle $\alpha$**.

---
##### Final Output Voltage Equation
The actual DC output voltage is the ideal voltage minus the voltage drop due to overlap.
$$V_{dc} = V_{dc(ideal)} - \Delta V_d$$

> [!info]- Ideal Single-Phase Voltage Reference
> ![[Single-Phase Full-Wave Bridge Controlled Rectifier#Waveforms & Equations (CCM)]]

Subtracting the overlap drop gives the final practical equation:
$$\boxed{\quad V_{dc} = \frac{2V_m}{\pi} \cos\alpha - \frac{2X_s I_d}{\pi} \quad}$$

---
#### Effect on Three-Phase Full Converter
The same principle applies. The commutation occurs between two phases, and the commutating voltage is the line-to-line voltage. The voltage drop is found to be:
$$\boxed{\quad \Delta V_d = \frac{3X_s I_d}{\pi} \quad}$$
And the final output voltage is:
$$\boxed{\quad V_{dc} = \frac{3V_{mL}}{\pi} \cos\alpha - \frac{3X_s I_d}{\pi} \quad}$$
where $V_{mL}$ is the peak line-to-line voltage.

#### Commutation Failure
In inverter mode ($\alpha > 90^\circ$), the commutation process must be completed before the AC commutating voltage reverses polarity. This means the condition **$\alpha + \mu < 180^\circ$** must be strictly met. If the overlap is too long (due to high $I_d$ or low AC voltage) and this condition is violated, the outgoing thyristor will be forward-biased again and turn back on. This is called **commutation failure**, a severe fault that results in a short circuit on the DC side.

---
### Related Concepts
#commutation-overlap/related-concepts

> [[Single-Phase Full-Wave Bridge Controlled Rectifier]]

[[Three-Phase Full-Bridge Controlled Rectifier]]
[[Thyristor Commutation Techniques]]
[[Performance Metrics]]
