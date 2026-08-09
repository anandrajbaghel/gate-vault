---
tags:
  - power-electronics
  - rectifiers
  - ac-dc-converter
  - phase-control
created: 2025-10-15
aliases:
  - Half-wave controlled rectifier
  - Single-phase one-pulse converter
  - Single-Phase Half-Wave Controlled Rectifier (R, RL, RLE loads)
subject: "[[Power Electronics]]"
parent:
  - "[[Phase-Controlled Rectifiers]]"
modified: 2026-08-04T10:28:40
---
### Single-Phase Half-Wave Controlled Rectifier
#rectifier #phase-control #ac-dc-converter

> The single-phase half-wave controlled rectifier is the simplest type of AC-to-DC converter. It uses a single thyristor (SCR) to control the power flow to the load. By varying the **firing angle ($\alpha$)**—the point in the AC cycle at which the SCR is triggered—the average DC output voltage can be controlled. It is also known as a one-pulse converter because it generates one pulse of load current for each cycle of the source voltage.

#### Purely Resistive (R) Load
#rectifier/r-load

![[Circuit - Single-Phase Controlled Half-Wave Rectifier (R Load).png]]

* **Operation**: During the positive half-cycle of the AC supply ($0 < \omega t < \pi$), the SCR is forward-biased. It is triggered into conduction by a gate pulse at $\omega t = \alpha$. Current flows through the load from $\alpha$ to $\pi$. At $\omega t = \pi$, the source voltage and hence the load current become zero. Since the current falls below the holding current, the SCR turns off naturally (natural commutation). It remains off during the entire negative half-cycle.
* **Conduction Angle**: $(\pi - \alpha)$

##### Waveforms & Equations

![[Waveform - Single-Phase Half-Wave Controlled Rectifier (R Load).png]]

* **Average Output Voltage ($V_{dc}$)**:
    $$\begin{align}
    V_{dc} &= \frac{1}{2\pi} \int_{\alpha}^{\pi} V_m \sin(\omega t) d(\omega t) \\
     &= \frac{V_m}{2\pi} [-\cos(\omega t)]_{\alpha}^{\pi}
    \end{align}$$
    $$\boxed{\quad V_{dc} = \frac{V_m}{2\pi} (1 + \cos\alpha) \quad}$$
* **Average Output Current ($I_{dc}$)**: $I_{dc} = \frac{V_{dc}}{R}$
* **RMS Output Voltage ($V_{rms}$)**:
    $$V_{rms} = \sqrt{\frac{1}{2\pi} \int_{\alpha}^{\pi} (V_m \sin(\omega t))^2 d(\omega t)}$$
    $$\boxed{\quad V_{rms} = \frac{V_m}{2} \sqrt{\frac{1}{\pi} \left( (\pi - \alpha) + \frac{\sin(2\alpha)}{2} \right)} \quad}$$
* **RMS Output Current ($I_{rms}$)**: $I_{rms} = \frac{V_{rms}}{R}$

> [!warning]- Ripple Factor — Single-Phase Half-Wave Controlled Rectifier
> #ripple-factor
> Ripple factor is defined as  
> $$ r = \frac{V_{\text{ac,rms}}}{V_{\text{dc}}} = \sqrt{\left(\frac{V_{\text{rms}}}{V_{\text{dc}}}\right)^2 - 1}$$
>
> - The **definition of ripple factor is universal** (same for all converters and loads).  
> - The **numerical value of $r$ depends on the load**, because $V_{\text{rms}}$ and $V_{\text{dc}}$ depend on current/voltage waveform shape.
>
> **Load-wise remarks (Half-Wave Controlled Rectifier):**
> - **R load:** Discontinuous current → **highest ripple**
> - **RL load (no freewheeling):** Extended conduction → ripple **reduces**
> - **RL load (with freewheeling diode):** Ripple **further reduced**
> - **RLE load:** Depends on back-emf $E$ and firing angle $\alpha$; ripple may reduce or increase
>
> ⚠️ Do **not** use R-load ripple values directly for RL or RLE loads.

---
#### Resistive-Inductive (RL) Load
#rectifier/rl-load

![[Circuit - Single-Phase Controlled Half-Wave Rectifier (RL Load).png]]

* **Operation**: Conduction starts at $\alpha$ as with the R-load. However, due to the energy stored in the inductor, the current does not fall to zero at $\omega t = \pi$. The inductor forces the SCR to continue conducting even when the supply voltage becomes negative. The SCR turns off only when the inductor has fully discharged its energy and the current falls to zero. This occurs at the **extinction angle ($\beta$)**, where $\beta > \pi$.
* **Negative Voltage**: The output voltage is negative from $\omega t = \pi$ to $\omega t = \beta$. This reduces the average DC output voltage and worsens the power factor.
* **Conduction Angle**: $(\beta - \alpha)$

##### Waveforms & Equations

![[Waveform - Single-Phase Half-Wave Controlled Rectifier (RL Load).png]]

*   **Average Output Voltage ($V_{dc}$)**:
    $$V_{dc} = \frac{1}{2\pi} \int_{\alpha}^{\beta} V_m \sin(\omega t) d(\omega t)$$
    $$\boxed{\quad V_{dc} = \frac{V_m}{2\pi} (\cos\alpha - \cos\beta) \quad}$$
    The value of $\beta$ depends on R, L, and $\alpha$, and is found by solving the transcendental equation for the load current.

##### RL Load with Freewheeling Diode (FWD)
#freewheeling-diode

To prevent the output voltage from going negative, a **freewheeling diode (FWD)** is connected in parallel with the RL load.
*   **Operation**: From $\alpha$ to $\pi$, the SCR conducts and supplies power to the load. At $\omega t = \pi$, as the supply voltage tries to reverse, the FWD becomes forward-biased. The inductor current is transferred from the SCR to the FWD. The load current now "freewheels" through the diode and the load, decaying exponentially. The SCR turns off at $\pi$.
*   **Effect**:
    1.  The output voltage is prevented from becoming negative (it is [[Clipper and Clamper Circuits|clamped]] to zero).
    2.  The average DC voltage is increased compared to the case without an FWD.
    3.  The input power factor is improved.
    4.  The load current waveform is smoother.
*   **Average Output Voltage (with FWD)**: Since the voltage is zero after $\pi$, the expression becomes identical to the resistive load case.
    $$\boxed{\quad V_{dc} = \frac{V_m}{2\pi} (1 + \cos\alpha) \quad}$$

---
#### RLE Load (with Back EMF)
#rectifier/rle-load

This configuration models applications like battery charging or controlling a DC motor, where the load includes a DC voltage source (back EMF, E).
*   **Operation**: The SCR can only conduct when two conditions are met:
    1.  It is forward-biased and receives a gate pulse ($\omega t \ge \alpha$).
    2.  The instantaneous supply voltage is greater than the back EMF ($v_s > E$).
*   Let $\theta_1 = \sin^{-1}(E/V_m)$. The SCR can only be fired in the range $\theta_1 < \alpha < (\pi - \theta_1)$.
*   Conduction starts at $\alpha$ and continues until the extinction angle $\beta$, where the energy stored in the inductor is depleted and the load current falls to zero.
*   **Average Output Voltage ($V_{dc}$)**:
    $$V_{dc} = \frac{1}{2\pi} \int_{\alpha}^{\beta} (V_m \sin(\omega t)) d(\omega t)$$
    This is similar in form to the RL load, but the conditions for conduction ($\alpha, \beta$) are different. The average current flowing into the battery is $I_{dc} = \frac{V_{dc} - E}{R}$.

---
### Related Concepts
#rectifier/related-concepts

> [[Silicon Controlled Rectifier (SCR)]]

[[Thyristor Firing (Triggering) Circuits (R, RC, UJT)]]
[[Single-Phase Full-Wave Center-Tapped Controlled Rectifier]]
[[Single-Phase Full-Wave Bridge Controlled Rectifier]]
[[Performance Metrics]]
