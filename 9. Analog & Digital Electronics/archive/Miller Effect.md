---
tags:
  - analog-electronics
  - amplifiers
  - frequency-response
  - capacitance
  - miller-effect
  - common-emitter
  - common-source
created: 2025-09-08
aliases:
  - Miller Capacitance
  - Miller's Theorem
subject: "[[Analog & Digital Electronics]]"
parent: "[[Frequency Response]]"
modified: 2026-08-04T10:03:04
---
### Miller Effect
#miller-effect #frequency-response #bandwidth-limitation

> The Miller effect describes the phenomenon in inverting voltage amplifiers where a feedback capacitance connected between the input and output appears as a much larger capacitance at the input terminals. This "multiplied" capacitance becomes the dominant factor limiting the high-frequency performance and bandwidth of the amplifier.

It is the single most important parasitic effect that determines the upper cutoff frequency ($f_H$) of [[Common Emitter Amplifier|Common Emitter]] and [[Common Source Amplifier|Common Source]] amplifiers.

#### Miller's Theorem
#millers-theorem #capacitance-multiplication
The effect is quantified by Miller's theorem. It states that an impedance $Z_f$ connected between the input and output nodes of an amplifier with voltage gain $A_v$ can be replaced by two equivalent impedances: one at the input ($Z_{in}$) and one at the output ($Z_{out}$).

*   **Input Impedance**:
    $Z_{in} = \frac{Z_f}{1 - A_v}$
*   **Output Impedance**:
    $Z_{out} = \frac{Z_f A_v}{A_v - 1}$

For a feedback capacitor $C_f$, its impedance is $Z_f = \frac{1}{j\omega C_f}$. The equivalent input impedance is:
$$Z_{in} = \frac{1}{j\omega C_f (1-A_v)} = \frac{1}{j\omega C_{in,miller}}$$
This corresponds to an equivalent **Miller input capacitance**:
$$\boxed{\quad C_{in,miller} = C_f (1-A_v) \quad}$$
Similarly, the **Miller output capacitance** is $C_{out,miller} = C_f (1 - 1/A_v)$, which is approximately equal to $C_f$ since $|A_v| \gg 1$.

---
#### Impact on Amplifier Frequency Response
#high-frequency-pole #bandwidth
For a standard inverting amplifier (like a CE or CS stage), the voltage gain $A_v$ is a large negative number.
*   Let's say $A_v = -100$.
*   The Miller capacitance is $C_{in,miller} = C_f(1 - (-100)) = 101 C_f$.
The small physical feedback capacitance is magnified by a factor of approximately $|A_v|+1$.

This large effective input capacitance ($C_{in, total} = C_{internal} + C_{in,miller}$) interacts with the equivalent resistance seen by the input source ($R_{sig,eq}$) to form a low-pass RC filter. This creates a **dominant pole** at a much lower frequency than would be expected from the physical capacitances alone.
The upper cutoff frequency ($f_H$) is determined by this input pole:
$$\omega_H = \frac{1}{R_{sig,eq} \cdot C_{in, total}}$$
Since $C_{in, total}$ is large due to the Miller effect, $\omega_H$ is low, thus severely **limiting the amplifier's bandwidth**.

---
#### Application to Transistor Amplifiers
#common-emitter #common-source #parasitic-capacitance
In real transistors, the feedback capacitance $C_f$ is an internal parasitic capacitance.

1.  **Common Emitter (BJT)**: The feedback capacitance is the **base-collector capacitance, $C_{bc}$** (also called $C_\mu$). The total input capacitance that determines the high-frequency response is:
    $$C_{in} = C_{be} + C_{bc}(1 - A_v)$$

2.  **Common Source (MOSFET)**: The feedback capacitance is the **gate-drain capacitance, $C_{gd}$**. The total input capacitance is:
    $$C_{in} = C_{gs} + C_{gd}(1 - A_v)$$

The Miller effect is not significant in Common Collector/Drain or Common Base/Gate configurations because they do not have a large, inverting voltage gain between the input and output terminals where the feedback capacitance is connected.

#### Mitigation of the Miller Effect
#cascode-amplifier
The most effective way to combat the Miller effect is to reduce the voltage gain ($A_v$) across the feedback capacitance. The **Cascode Amplifier** is a circuit designed specifically for this purpose. It stacks a [[Common Base Amplifier|Common Base]] (or [[Common Gate Amplifier|Common Gate]]) stage on top of a CE (or CS) stage. This arrangement keeps the voltage gain of the first stage low (around -1), which prevents the Miller multiplication of its parasitic capacitance, leading to a much wider bandwidth.

---
### Related Concepts
#related-concepts

> [[Frequency Response]]

[[Common Emitter Amplifier]]
[[Common Source Amplifier]]
[[Cascode Amplifier]] (A technique to mitigate the Miller effect)
[[Parasitic Capacitances]]
[[Bandwidth in Signals & Systems]]
[[Poles and Zeros]]