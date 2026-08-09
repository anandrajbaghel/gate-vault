---
tags:
  - power-electronics
  - thyristor
  - commutation
  - control-circuits
created: 2025-10-15
aliases:
  - Thyristor Commutation
  - SCR Commutation
subject: "[[Power Electronics]]"
parent:
  - Power Semiconductor Devices
modified: 2026-08-04T10:41:03
---
### Thyristor Commutation Techniques
#thyristor-commutation #scr-turn-off #forced-commutation #natural-commutation

> **Commutation** is the process of turning OFF a conducting thyristor (SCR). Since a conventional SCR cannot be turned OFF using the gate terminal once conduction starts, commutation must be achieved externally. The process involves two essential conditions:
> 1.  The anode current ($I_A$) must be reduced below the device's holding current ($I_H$).
> 2.  A reverse voltage must be maintained across the thyristor for a finite period, known as the **circuit turn-off time ($t_c$)**, which must be greater than the **device turn-off time ($t_q$)**.
> $$\boxed{\quad t_c > t_q \quad}$$
> Commutation techniques are broadly classified into two categories based on the source of the turn-off voltage.

#### Natural or Line Commutation
#natural-commutation #line-commutation

Natural commutation occurs in circuits powered by an AC source, where the voltage naturally reverses its polarity. No external components are needed to facilitate the turn-off process.

*   **Principle**: When the AC supply voltage reverses polarity, it forward-biases another device in the circuit or simply becomes negative. This applies a reverse voltage across the conducting thyristor, and the load current naturally falls to zero. The negative supply voltage keeps the device reverse-biased for the entire negative half-cycle, which is typically much longer than the required $t_q$.
*   **Applications**: This technique is inherent to AC circuits and is used in:
    *   Phase-controlled rectifiers (AC-DC converters)
    *   AC voltage controllers
    *   Cycloconverters
*   **Advantages**: Highly reliable and requires no extra components, making it simple and efficient.

> [!example] Applied Case: Bridge Rectifiers
> In a [[Single-Phase Full-Wave Bridge Controlled Rectifier]], natural commutation is the standard. However, if a freewheeling diode is added, it acts as a "commutation aid" that terminates SCR conduction exactly at the supply zero-crossing.
> - **Condition for Turn-off:** $t_c = \frac{\alpha}{\omega}$ (for the period the device is reverse biased).
> - **Key Requirement:** $t_c > t_q$ must still be satisfied to prevent commutation failure.

---
#### Forced Commutation
#forced-commutation #dc-commutation

Forced commutation is necessary in DC circuits (e.g., choppers and inverters) where there is no natural reversal of source voltage to turn off the thyristor. It uses external energy storage elements, primarily inductors (L) and capacitors (C), to momentarily force the current through the thyristor to zero or apply a reverse voltage across it.

##### Classification of Forced Commutation Circuits

Forced commutation methods are categorized into classes based on the circuit arrangement and the principle of operation.

*   **Class A: Load Commutation (Self-Commutation)**
    *   **Principle**: The thyristor is part of an underdamped RLC circuit. When the thyristor is triggered, the current flows as a sinusoidal pulse. The current naturally goes to zero and then attempts to reverse. Since the thyristor cannot conduct reverse current, it turns off automatically.
    *   **Application**: Used in series inverters where the resonant components are part of the load itself.

*   **Class B: Resonant-Pulse Commutation (Self-Commutation)**
    *   **Principle**: A resonant LC circuit generates an oscillatory current that opposes the load current through the SCR. When the thyristor is turned on, the LC circuit is also set into oscillation. The resonant current from the LC circuit eventually opposes the load current, and when the magnitude of the resonant current equals the load current, the net current through the thyristor becomes zero, turning it off.
    *   **Application**: Used in some chopper circuits.

*   **Class C: Complementary Commutation**
    *   **Principle**: This method uses two thyristors, often operating in a complementary fashion. Turning on one thyristor commutates the other. A capacitor is connected (often between the anodes or cathodes) such that triggering the second thyristor (T2) applies the capacitor's pre-charged voltage as a reverse bias across the first, already conducting thyristor (T1), turning it off.
    *   **Application**: McMurray-Bedford inverter, some DC choppers.

*   **Class D: Auxiliary Commutation (Impulse Commutation)**
    *   **Principle**: An auxiliary thyristor (Ta) with a smaller rating is used to turn off the main power thyristor (Tm). To commutate Tm, Ta is triggered. This discharges a commutating capacitor, which applies a reverse voltage pulse across Tm or diverts the load current away from it long enough for it to turn off.
    *   **Application**: Very common in high-power chopper circuits (e.g., Jones chopper).

*   **Class E: External Pulse Commutation**
    *   **Principle**: A high-energy pulse from an external source is applied to turn off the conducting thyristor. This pulse is typically injected through a pulse transformer, creating a reverse voltage across the main thyristor.
    *   **Application**: High-performance circuits where precise turn-off is needed. It's less common due to the need for a separate high-power pulse source.

*   **Class F: AC Line Commutation**
    *   **Principle**: This is essentially natural commutation, but classified here as a method where a full AC voltage cycle is applied across the conducting device to turn it off. The negative half-cycle of the AC voltage commutates the thyristor.
    *   **Application**: AC-AC converters like cycloconverters.

> [!warning] Note on Freewheeling
> In phase-controlled rectifiers with inductive loads, the FWD provides an alternate path for inductive current at source zero-crossing, allowing the SCR current to fall below the holding current and turn OFF ($\pi$), effectively shortening the conduction angle of the SCRs from $\pi$ to $(\pi - \alpha)$. This prevents the "forced" negative voltage conduction usually seen in RL loads.

---
### Related Concepts
#thyristor-commutation/related-concepts

> [[Static and Dynamic Characteristics of Thyristors (Turn-on and Turn-off)]]

[[Conduction Modes in Power Electronics]]
[[Commutation Failure and Overlap]]
[[Gate Turn-Off Thyristor (GTO) and TRIAC]] (GTOs were developed to avoid the need for forced commutation circuits)
[[Single-Phase Full-Wave Bridge Controlled Rectifier]] (Example of Natural Commutation)
[[DC-DC Converters (Choppers)]] (Primary application of Forced Commutation)
[[DC-AC Converters (Inverters)]] (Primary application of Forced Commutation)
