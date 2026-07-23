---
tags:
  - power-system
  - transmission-lines
  - voltage-regulation
  - ferranti-effect
  - line-capacitance
created: 2025-10-11
aliases:
  - Line Capacitance Effect
  - Ferranti Effect
subject: "[[Power System]]"
parent:
  - Performance of Transmission Lines
trends:
  - "[[trends - Ferranti Effect]]"
modified: 2026-07-23T21:18:21
---
### Ferranti Effect
#ferranti-effect #voltage-rise #charging-current

> The **Ferranti Effect** is a phenomenon observed in medium and long AC transmission lines where the voltage at the receiving (load) end of the line is higher than the voltage at the sending end ($|V_r| > |V_s|$). ==This effect is most prominent under **no-load** or **very light load** conditions.==

#### Cause and Explanation
#ferranti-effect/cause 

The Ferranti effect is a consequence of the interplay between the line's distributed shunt capacitance and series inductance.

1.  **Charging Current**: A long transmission line has a significant amount of shunt capacitance distributed along its length. Even under no-load, this capacitance draws a leading current from the sending end, known as the **charging current ($I_c$)**.
2.  **Interaction with Inductance**: This charging current flows through the series inductance of the line. This creates a voltage drop across the inductance which is approximately 180° out of phase with the sending-end voltage.
3.  **Voltage Rise**: This phase relationship causes the voltage to rise along the line from the sending end to the receiving end.

---
#### Phasor Diagram Analysis
Let's analyze the effect using a simplified model of the line, considering only its series reactance ($X_L$) and shunt admittance ($Y = j\omega C$). At no-load, the current is purely the charging current, $I_s = I_c$.

-   The sending-end voltage ($V_s$) is the phasor sum of the receiving-end voltage ($V_r$) and the voltage drop across the line impedance.
    $$ V_s = V_r + I_c Z $$
-   For a no-load condition, let's consider the receiving half of a Nominal-π model. The charging current at the receiving end is $I_{c2} = V_r(Y/2)$. This current flows through the line impedance Z.
-   Let's approximate for the whole line: The charging current $I_c$ leads the receiving-end voltage $V_r$ by nearly 90°.
-   The voltage drop across the line inductance is $jI_c X_L$.
-   The phasor $jI_c$ leads $I_c$ by 90°. Therefore, the phasor $jI_c X_L$ leads $V_r$ by approximately $180^\circ$.
-   As shown in the phasor diagram below, the inductive drop ($I_c X_L$) is in phase opposition to $V_r$, causing the magnitude of $V_s$ to be less than $V_r$.

![[FerrantiEffectPhasor.png]]

From the diagram, neglecting resistance:
$$\boxed{\quad |V_s| \approx |V_r| - |I_c|X_L \quad \implies \quad |V_r| > |V_s| \quad}$$

---
#### Analysis using ABCD Parameters
For a transmission line at no-load ($I_r = 0$), the relationship between sending and receiving end voltages is:
$$ V_s = A V_r \implies |V_r| = \frac{|V_s|}{|A|} $$
-   For a lossless long line, $A = \cos(\beta l)$, where $\beta$ is the phase constant and $l$ is the line length.
-   Since $\beta l > 0$, the value of $\cos(\beta l)$ is always less than 1.
-   Therefore, $|V_r| = \frac{|V_s|}{\cos(\beta l)} > |V_s|$.
This shows that for any length of line, the Ferranti effect is theoretically present. It is negligible for short lines but becomes significant for medium and long lines.

---
#### Consequences and Mitigation
-   **Consequences**: The overvoltage at the receiving end can stress the insulation of connected equipment, potentially leading to failure. This is a critical issue in EHV (Extra High Voltage) systems.
-   **Mitigation**: To counteract the voltage rise, **shunt reactors** are connected at the receiving end of the line.
    -   Shunt reactors are essentially large inductors.
    -   They draw a lagging reactive current from the line.
    -   This lagging current compensates for the leading charging current produced by the line capacitance, thereby absorbing the surplus reactive power and bringing the voltage down to a safe, nominal level.

---
### Related Concepts
#power-system/related-concepts

> [[Capacitance of Single-phase and Three-phase Lines]] (The physical cause of the effect)

[[Modeling of Medium Transmission Lines]]
[[Modeling of Long Transmission Lines]] (Where the effect is most pronounced)
[[Voltage Regulation and Transmission Efficiency]] (Ferranti effect results in negative voltage regulation)
[[Methods of Voltage Control]] (Shunt reactors are a primary method of voltage control)
[[Reactive Power Compensation]]