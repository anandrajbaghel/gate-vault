---
tags:
  - power-electronics
  - ac-ac-converters
  - voltage-controller
  - phase-control
  - thyristors
created: 2025-10-15
aliases:
  - AC Chopper with R and RL Load
  - Phase Controlled AC Voltage Controller
subject: "[[Power Electronics]]"
parent: "[[AC Voltage Controllers]]"
modified: 2026-08-04T10:27:58
---
### Single-Phase AC Voltage Controller with R and RL Loads
#ac-voltage-controller #phase-control #thyristors

> A single-phase AC voltage controller uses phase control to vary the RMS voltage delivered to a load. The behavior of the circuit, particularly the current waveform and conduction period, is highly dependent on the nature of the load—whether it is purely resistive (R) or inductive (RL).

#### Circuit Topology
The circuit consists of a pair of anti-parallel thyristors (SCRs) or a single TRIAC connected in series between the AC source ($v_s = V_m \sin(\omega t)$) and the load. Thyristor T1 controls the positive half-cycle, and T2 controls the negative half-cycle.

---
### Analysis with Resistive (R) Load
#resistive-load

This is the simplest case to analyze.
*   **Operation:** Thyristor T1 is fired at a delay angle $\alpha$ in the positive half-cycle. It starts conducting, and current flows through the resistive load. Since the voltage and current are in phase, the current falls to zero at $\omega t = \pi$. At this point, T1 naturally commutates (turns OFF). Similarly, T2 is fired at $\pi+\alpha$ and conducts until $2\pi$.
*   **Conduction Angle ($\gamma$):** The thyristor conducts from $\alpha$ to $\pi$. The conduction angle is $\gamma = \pi - \alpha$.
*   **RMS Output Voltage ($V_o$):**
    $$\begin{align}
    V_o &= \left[ \frac{1}{\pi} \int_{\alpha}^{\pi} (V_m \sin(\omega t))^2 d(\omega t) \right]^{1/2} \\
    &= V_s \left[ \frac{1}{\pi} \int_{\alpha}^{\pi} (1 - \cos(2\omega t)) d(\omega t) \right]^{1/2} \\
    &= V_s \left[ \frac{1}{\pi} \left( (\pi - \alpha) - \left[-\frac{\sin(2\omega t)}{2}\right]_{\alpha}^{\pi} \right) \right]^{1/2}
    \end{align}$$
    $$\boxed{\quad V_o = V_s \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}} \quad}$$
    where $V_s = V_m/\sqrt{2}$ is the RMS source voltage.
*   **Power Factor:** The input current has the same waveform as the output voltage, but the source voltage is sinusoidal. The power factor is found by $PF = P_{in}/S_{in}$. For a resistive load, the average power is $P = V_o^2/R$. The RMS source current is $I_s = V_o/R$.
    $$PF = \frac{V_o^2 / R}{V_s (V_o/R)} = \frac{V_o}{V_s}$$
    Since the fundamental current lags the voltage due to delayed firing, the PF is **lagging**.

---
### Analysis with Inductive (RL) Load
#inductive-load #extinction-angle

The presence of an inductor significantly changes the circuit's behavior.
*   **Operation:** When T1 is fired at $\alpha$, the current begins to build up. Due to the inductor's energy storage, the current **does not** fall to zero at $\omega t = \pi$ even though the voltage has gone negative. The thyristor continues to conduct until all the stored energy in the inductor is dissipated.
*   **Extinction Angle ($\beta$):** The angle at which the current finally falls to zero and the thyristor turns OFF is called the extinction angle, $\beta$. For an RL load, **$\beta > \pi$**.
*   **Conduction Angle ($\gamma$):** The conduction angle is now $\gamma = \beta - \alpha$.
*   **Output Current ($i_o(t)$):** The current from $\alpha$ to $\beta$ is found by solving the differential equation $L\frac{di_o}{dt} + Ri_o = V_m \sin(\omega t)$. The solution consists of a steady-state sinusoidal component and an exponentially decaying transient component. The extinction angle $\beta$ is found by numerically solving the transcendental equation $i_o(\beta)=0$.
*   **RMS Output Voltage ($V_o$):**
    **This is a critical point.** The output *voltage* is connected to the source from $\alpha$ to $\pi$ (and $\pi+\alpha$ to $2\pi$). The fact that current flows beyond $\pi$ does not change the voltage waveform across the load terminals. Therefore, the expression for the RMS output voltage is **exactly the same** as for a purely resistive load.
    $$\boxed{\quad V_o = V_s \sqrt{1 - \frac{\alpha}{\pi} + \frac{\sin(2\alpha)}{2\pi}} \quad}$$
*   **Power Factor:** The power factor for an RL load is even lower than for a resistive load. It is a function of both the firing angle $\alpha$ and the load's intrinsic power factor angle $\phi = \tan^{-1}(\omega L / R)$. The power factor decreases as $\alpha$ increases.

---
### Related Concepts
#ac-ac-converters/related-concepts

> [[Principle of On-Off Control and Phase Control]]

[[AC-AC Converters]]
[[Silicon Controlled Rectifier (SCR)]]
[[TRIAC]]
[[Performance Metrics]]