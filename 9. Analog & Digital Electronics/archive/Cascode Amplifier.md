---
tags:
  - amplifiers
  - analog-electronics
  - high-frequency-amplifier
  - cascode
  - miller-effect
created: 2025-09-08
aliases:
  - Cascode
subject: "[[Analog & Digital Electronics]]"
parent: Amplifiers
modified: 2026-08-04T09:16:51
---
### Cascode Amplifier
#cascode-amplifier #high-frequency-amplifier #miller-effect

> The cascode amplifier is a two-stage amplifier configuration that offers high gain, high input impedance, high output impedance, and, most importantly, a significantly wider bandwidth compared to a standard single-stage amplifier. It achieves this by effectively eliminating the bandwidth-limiting [[Miller Effect]].

The cascode configuration consists of a [[Common Emitter Amplifier|Common Emitter]] (or [[Common Source Amplifier|Common Source]]) input stage followed by a [[Common Base Amplifier|Common Base]] (or [[Common Gate Amplifier|Common Gate]]) output stage.

#### Structure
*   **BJT Cascode**: A CE stage feeds into a CB stage. The output of the CE transistor (its collector) is connected to the input of the CB transistor (its emitter).
*   **MOSFET Cascode**: A CS stage feeds into a CG stage. The output of the CS transistor (its drain) is connected to the input of the CG transistor (its source).

#### How it Mitigates the Miller Effect
#miller-effect-mitigation #bandwidth-extension

The primary limitation of a single-stage CE or CS amplifier is the Miller effect, where the feedback capacitance ($C_{bc}$ or $C_{gd}$) is multiplied by the stage's high voltage gain, creating a large input capacitance that forms a low-frequency pole.

The cascode structure cleverly circumvents this problem:
1.  The input stage (CE/CS, transistor Q1) acts as a transconductance amplifier, converting the input voltage to a current ($i_c = g_{m1} v_{in}$). It drives the output stage.
2.  The output stage (CB/CG, transistor Q2) has a very low input impedance (approximately $r_{e2}$ or $1/g_{m2}$). This low impedance serves as the load for the first stage.
3.  Because the load resistance for Q1 is very low, the voltage gain of the first stage ($A_{v1} = -g_{m1} R_{load1} \approx -g_{m1}r_{e2}$) is very small, approximately **-1**.
4.  Since the voltage gain across the parasitic capacitance ($C_{bc1}$ or $C_{gd1}$) is only about -1, the Miller multiplication factor $(1-A_{v1})$ is only about 2.
5.  With no significant Miller capacitance at the input, the input pole is pushed to a much higher frequency, resulting in a **dramatically increased bandwidth**.
6.  The second stage (CB/CG) provides the high voltage gain for the overall amplifier.

---
#### Small-Signal Analysis
#cascode/analysis

Assuming two identical transistors with parameters $g_m$ and $r_o$.

*   **Overall Transconductance ($G_m$)**: The transconductance of the cascode is simply the transconductance of the first stage.
    $$\boxed{\quad G_m \approx g_{m1} \quad}$$

*   **Output Impedance ($R_{out}$)**: The cascode configuration has a very high output impedance because it "stacks" the output resistances of the two transistors. The output impedance looking into the collector/drain of Q2 is significantly boosted.
    $$\boxed{\quad R_{out} \approx g_{m2}r_{o2}r_{o1} \quad}$$
    This is much higher than the output resistance of a single stage ($r_o$).

*   **Voltage Gain ($A_v$)**: The voltage gain is the product of the overall transconductance and the total output load resistance ($R_L \parallel R_{out}$).
    $$\boxed{\quad A_v = -G_m (R_{out} \parallel R_L) \approx -g_{m1} (R_{out} \parallel R_L) \quad}$$
    Due to the very high $R_{out}$ of the cascode, a very high voltage gain can be achieved.

#### Summary of Advantages
*   **High Bandwidth**: The primary advantage, due to mitigation of the Miller effect.
*   **High Voltage Gain**: Achieved due to the high output impedance.
*   **High Output Impedance**: Useful for driving high-impedance loads or for use as the gain stage in an op-amp.
*   **Good Input-Output Isolation**: The CB/CG stage acts as a shield, preventing output signals from feeding back to the input.

The main disadvantage is the increased **voltage headroom** requirement. Since two transistors are stacked, the minimum required output voltage for both to remain in the active/saturation region is higher than for a single-stage amplifier.

---
### Related Concepts
#related-concepts

> [[Miller Effect]] (The problem that the cascode solves)

[[Common Emitter Amplifier]] & [[Common Source Amplifier]] (The input stage)
[[Common Base Amplifier]] & [[Common Gate Amplifier]] (The output stage)
[[Frequency Response]]