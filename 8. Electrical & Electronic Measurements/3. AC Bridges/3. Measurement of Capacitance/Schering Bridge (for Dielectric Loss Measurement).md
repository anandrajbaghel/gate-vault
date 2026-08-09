---
tags:
  - measurements
  - ac-bridges
  - capacitance-measurement
  - dielectric-loss
  - high-voltage
  - gate
  - electrical-engineering
created: 2025-10-18
aliases:
  - Schering Bridge
  - Capacitance Bridge
  - "Capacitance & Associated Dielectric Loss : Schering Bridge"
  - "Bridge : Schering Bridge - Capacitance & Dielectric Loss"
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - AC Bridges
define:
  - "Capacitance & Associated Dielectric Loss : Schering Bridge"
modified: 2026-07-23T08:17:13
---
### Schering Bridge (for Dielectric Loss Measurement)
#ac-bridges #capacitance-measurement #dielectric-loss

> The Schering Bridge is the most important and widely used AC bridge for the precise measurement of capacitance and its associated dielectric loss. It is the standard method for testing insulators, bushings, insulating oils, and power cables, particularly in high-voltage applications, due to its accuracy and inherent safety features.

#### Circuit Diagram and Impedances
#ac-bridges/circuit-diagram #schering-bridge

The Schering Bridge is configured with the following components:
-   **Arm AB (Z1)**: The unknown capacitor $C_x$ and its equivalent series loss resistance $r_x$.
    -   $Z_1 = r_x + \frac{1}{j\omega C_x}$
-   **Arm BC (Z2)**: A standard non-inductive resistor $R_2$.
    -   $Z_2 = R_2$
-   **Arm CD (Z3)**: A standard, high-quality (ideally lossless) capacitor $C_3$, often a high-voltage air or gas capacitor.
    -   $Z_3 = \frac{1}{j\omega C_3}$
-   **Arm DA (Z4)**: A variable non-inductive resistor $R_4$ in parallel with a variable capacitor $C_4$.
    -   $Y_4 = \frac{1}{Z_4} = \frac{1}{R_4} + j\omega C_4$

The bridge is balanced by varying $R_4$ and $C_4$.

#### Derivation of Balance Equations
#ac-bridges/derivation

The balance condition is $Z_1 Z_4 = Z_2 Z_3$. Using the admittance for the parallel arm is more convenient: $Z_1 = Z_2 Z_3 Y_4$.
$$\begin{align}
r_x + \frac{1}{j\omega C_x} &= R_2 \left( \frac{1}{j\omega C_3} \right) \left( \frac{1}{R_4} + j\omega C_4 \right) \\
r_x - j\frac{1}{\omega C_x} &= \frac{R_2}{j\omega C_3 R_4} + \frac{R_2 (j\omega C_4)}{j\omega C_3} \\
r_x - j\frac{1}{\omega C_x} &= \frac{R_2 C_4}{C_3} - j\frac{R_2}{\omega C_3 R_4}
\end{align}$$
Equating the real and imaginary parts of the equation provides the two balance conditions:

1.  **Equating Real Parts:**
    $$\boxed{\quad r_x = R_2 \frac{C_4}{C_3} \quad}$$

2.  **Equating Imaginary Parts:**
    $$ \frac{1}{\omega C_x} = \frac{R_2}{\omega C_3 R_4} $$
    $$\boxed{\quad C_x = C_3 \frac{R_4}{R_2} \quad}$$

#### Dissipation Factor (Dielectric Loss)
#dissipation-factor #dielectric-loss

The **dissipation factor (D)**, also known as loss tangent ($\tan \delta$), is a measure of the energy dissipated in the dielectric of the capacitor. It is defined as:
$$ D = \tan \delta = \omega C_x r_x $$
By substituting the balance equations for $C_x$ and $r_x$:
$$\begin{align}
D &= \omega \left( C_3 \frac{R_4}{R_2} \right) \left( R_2 \frac{C_4}{C_3} \right) \\
&= \omega R_4 C_4
\end{align}$$
$$\boxed{\quad D = \omega R_4 C_4 \quad}$$
This remarkably simple result shows that the dissipation factor of the unknown capacitor can be directly calculated from the values of the components in the parallel balancing arm and the source frequency.

#### Advantages and Applications
#schering-bridge/advantages

-   **High Precision**: Provides highly accurate measurements of both capacitance and dissipation factor.
-   **Simple Balance Equations**: The final equations for $C_x$ and $r_x$ are simple and independent of frequency.
-   **High-Voltage Applications**: It is the standard for high-voltage testing. For safety, the detector and the arms with variable components ($R_2$, $R_4$, $C_4$) are at a low potential with respect to ground. The high voltage is applied across the unknown capacitor ($C_x$) and the standard capacitor ($C_3$), which are designed to handle it. The operator making adjustments is therefore protected from high voltages.
-   **Dielectric Testing**: Used to determine the quality of insulating materials by measuring their dielectric constant and loss angle.

---
### Related Concepts
#ac-bridges/related-concepts

> [[De Sauty's Bridge]] (The simpler, less practical precursor)

[[General Equation for Bridge Balance]]
[[AC Bridges]]
[[Dielectric Loss and Dissipation Factor]]
[[Capacitance Measurement]]
[[High Voltage Engineering]]
[[Complex Impedance]]
