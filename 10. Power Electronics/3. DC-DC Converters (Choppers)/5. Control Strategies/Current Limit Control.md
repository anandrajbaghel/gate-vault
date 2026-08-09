---
tags:
  - power-electronics
  - dc-dc-converters
  - control-strategies
  - protection-circuits
  - current-mode-control
created: 2025-10-15
aliases:
  - Current Limiting
  - Overcurrent Protection (OCP)
  - Cycle-by-Cycle Current Limiting
subject: "[[Power Electronics]]"
parent:
  - DC-DC Converters (Choppers)
modified: 2026-08-04T09:30:06
---
### Current Limit Control
#power-electronics #chopper-control #protection-circuit #overcurrent

> **Current Limit Control** is a crucial protection mechanism integrated into the control circuits of DC-DC converters. Its primary function is to monitor the current through the main power switch or inductor and turn the switch OFF if the current exceeds a predetermined safe limit. This not only protects the semiconductor switch from catastrophic failure but also prevents the inductor from saturating and provides inherent short-circuit protection for the entire converter.

#### Principle of Operation
The control strategy operates on a simple and fast **Sense-Compare-Act** loop within each switching cycle:
1.  **Sense:** The instantaneous current flowing through the switch ($I_{switch}$) or inductor ($I_L$) is measured. This is commonly done using a low-value series sense resistor or by sensing the voltage drop across the MOSFET's on-resistance ($R_{DS(on)}$).
2.  **Compare:** The sensed current signal (converted to a voltage) is fed into one input of a comparator. The other input is a fixed reference voltage corresponding to the desired current limit ($I_{limit}$).
3.  **Act:** If the sensed current exceeds the limit, the comparator's output changes state. This output signal is used to reset the main PWM latch, immediately terminating the switch's ON-pulse for the remainder of that cycle.

---
#### Types of Current Limit Schemes

##### 1. Peak Current Limiting (Cycle-by-Cycle)
#cycle-by-cycle-limit

This is the most common and direct form of current limiting.
*   **Operation:** The switch current is monitored continuously during its ON time. The moment it hits the threshold $I_{limit}$, the switch is turned off. It remains off until the next clock pulse begins a new cycle.
*   **Advantage:** Provides instantaneous, cycle-by-cycle protection against current spikes caused by load transients or input voltage changes. It's the fastest form of overcurrent protection.
*   **Disadvantage (Subharmonic Oscillation):** In buck-derived converters (Buck, Buck-Boost, Cuk), when operating with a duty cycle $D > 0.5$, peak current limiting can lead to an instability called **subharmonic oscillation**. The current waveform no longer repeats every cycle ($T_s$) but starts alternating between a higher peak and a lower peak over a $2T_s$ period, leading to increased output ripple and instability. This is a critical issue that is solved using **slope compensation**.

##### 2. Hiccup Mode Protection
#hiccup-mode

This is a fault-response mode designed to handle persistent overcurrent conditions, such as a dead short at the output.
*   **Operation:** The system uses a counter. If the cycle-by-cycle current limit is triggered for a certain number of consecutive cycles (e.g., 8 or 16), the controller assumes a permanent fault exists. It then completely shuts down the converter for an extended "cool-down" period. After this delay, it attempts to restart. If the short circuit is still present, the cycle repeats.
*   **Advantage:** Drastically reduces the average power dissipation during a prolonged fault. A simple cycle-by-cycle limit under a short circuit would still deliver significant power, leading to overheating. Hiccup mode prevents this by operating in short bursts, keeping the average power and temperature very low.

---
#### Current Limit in Control Architectures
The implementation of current limiting depends on the overall control strategy:

*   **In Voltage Mode Control:** The primary feedback loop regulates the output voltage. Current limiting is a separate, secondary circuit that acts as a simple overriding protection mechanism.
*   **In Current Mode Control:** This is a more advanced strategy where the current signal is an integral part of the feedback loop itself. The voltage error amplifier's output sets the peak current reference ($I_{limit}$) for the PWM comparator on a dynamic basis. This method provides inherent cycle-by-cycle current limiting, faster transient response, and automatic line voltage feed-forward.

---
### Related Concepts
#protection-circuit/related-concepts

> [[DC-DC Converters (Choppers)]]

[[Time Ratio Control (Constant Frequency, Variable Frequency)]]
[[Power BJT, Power MOSFET, and IGBT]]
[[Control Systems]]
[[Inductor Saturation]]