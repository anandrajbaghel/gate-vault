---
tags:
  - measurements
  - ac-bridges
  - frequency-measurement
  - oscillators
  - gate
  - electrical-engineering
created: 2025-10-18
aliases:
  - Wien Bridge
  - Frequency Bridge
  - "Frequency Measurement : Wien's Bridge"
  - "Bridge : Wien's Bridge - Frequency Measurement"
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - AC Bridges
define:
  - "Frequency Measurement : Wien's Bridge"
modified: 2026-07-23T08:17:49
---
### Wien's Bridge (for Frequency Measurement)
#ac-bridges #frequency-measurement #wien-bridge-oscillator

> Wien's Bridge is a type of AC bridge that is primarily used for the accurate measurement of frequency. It is also famously used as the frequency-determining element in the Wien Bridge Oscillator, a popular circuit for generating low-frequency sine waves. The bridge is frequency-selective, meaning it will only achieve balance at a single, specific frequency determined by its resistance and capacitance values.

#### Circuit Diagram and Impedances
#ac-bridges/circuit-diagram #wien-bridge

A common configuration of the Wien's Bridge for measurement consists of four arms:
-   **Arm AB (Z1)**: A resistor $R_1$ in series with a capacitor $C_1$.
    -   $Z_1 = R_1 + \frac{1}{j\omega C_1}$
-   **Arm BC (Z2)**: A standard non-inductive resistor $R_2$.
    -   $Z_2 = R_2$
-   **Arm CD (Z3)**: A standard non-inductive resistor $R_3$.
    -   $Z_3 = R_3$
-   **Arm DA (Z4)**: A resistor $R_4$ in parallel with a capacitor $C_4$.
    -   $Z_4 = \frac{R_4}{1+j\omega C_4 R_4}$

The bridge is balanced by varying some of these components, often using ganged controls for $R_1/R_4$ and $C_1/C_4$.

#### Derivation of Balance Equations
#ac-bridges/derivation

The balance condition is $Z_1 Z_3 = Z_2 Z_4$.
$$\begin{align}
(R_1 + \frac{1}{j\omega C_1}) R_3 &= R_2 \left( \frac{R_4}{1+j\omega C_4 R_4} \right) \\
(R_1 R_3 - j\frac{R_3}{\omega C_1}) (1+j\omega C_4 R_4) &= R_2 R_4 \\
R_1 R_3 + j\omega C_4 R_4 R_1 R_3 - j\frac{R_3}{\omega C_1} - j^2 \frac{\omega C_4 R_4 R_3}{\omega C_1} &= R_2 R_4 \\
\left( R_1 R_3 + \frac{C_4 R_4 R_3}{C_1} \right) + j\left( \omega C_4 R_4 R_1 R_3 - \frac{R_3}{\omega C_1} \right) &= R_2 R_4
\end{align}$$
Equating the real and imaginary parts to zero (since the right-hand side is purely real):

1.  **Imaginary Part = 0:**
    $$\begin{align}
    \omega C_4 R_4 R_1 R_3 - \frac{R_3}{\omega C_1} &= 0 \\
    \omega^2 C_1 C_4 R_1 R_4 R_3 &= R_3 \\
    \omega^2 &= \frac{1}{R_1 R_4 C_1 C_4} \\
    \omega &= \frac{1}{\sqrt{R_1 R_4 C_1 C_4}}
    \end{align}$$
    The frequency at which the bridge balances is:
    $$\boxed{\quad f = \frac{1}{2\pi\sqrt{R_1 R_4 C_1 C_4}} \quad}$$

2.  **Real Part = Right Hand Side:**
    $$\begin{align}
    R_1 R_3 + \frac{C_4 R_4 R_3}{C_1} &= R_2 R_4 \\
    \end{align}$$
    Dividing by $R_3$:
    $$ R_1 + \frac{C_4 R_4}{C_1} = \frac{R_2 R_4}{R_3} $$
    This gives the required ratio of resistances:
    $$\boxed{\quad \frac{R_2}{R_3} = \frac{R_1}{R_4} + \frac{C_4}{C_1} \quad}$$

#### Special Case
#wien-bridge/special-case

In many applications, especially oscillators, the components are chosen for simplicity. A common choice is:
$$ R_1 = R_4 = R \quad \text{and} \quad C_1 = C_4 = C $$
Substituting these into the balance equations:
1.  **Frequency:**
    $$ f = \frac{1}{2\pi\sqrt{R \cdot R \cdot C \cdot C}} = \frac{1}{2\pi RC} $$
2.  **Resistance Ratio:**
    $$ \frac{R_2}{R_3} = \frac{R}{R} + \frac{C}{C} = 1 + 1 = 2 \implies \boxed{R_2 = 2R_3} $$
This means for this simple configuration, the bridge balances when the frequency is $1/(2\pi RC)$ and the resistance ratio of the other two arms is exactly 2.

#### Applications
#wien-bridge/applications

1.  **Frequency Measurement**: By using a calibrated set of ganged resistors and capacitors, the bridge can be balanced to find the frequency of an unknown AC source with high precision, especially in the audio frequency range.
2.  **Wien Bridge Oscillator**: The Wien bridge network is used as the positive feedback loop in an amplifier circuit. At the resonant frequency, the network provides zero phase shift, causing the circuit to oscillate. The condition $R_2 = 2R_3$ implies that the network has an attenuation of $1/3$ at this frequency. Therefore, the amplifier must have a gain of exactly 3 to sustain stable oscillations.

---
### Related Concepts
#ac-bridges/related-concepts

> [[Wien Bridge Oscillator]]

[[General Equation for Bridge Balance]]
[[AC Bridges]]
[[Resonance]]
[[Audio Frequency Oscillators]]
[[Feedback Amplifiers]]