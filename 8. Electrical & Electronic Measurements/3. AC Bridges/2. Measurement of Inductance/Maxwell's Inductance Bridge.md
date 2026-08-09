---
tags:
  - measurements
  - ac-bridges
  - inductance-measurement
  - gate
  - electrical-engineering
created: 2025-10-18
aliases:
  - Maxwell Bridge
  - Maxwell's Inductance-Capacitance Bridge
  - "Unknown Inductance & it's Internal Resistance : Maxwell's Inductance Bridge"
  - "Bridge : Maxwell's Inductance Bridge - Unknown Inductance & it's Internal Resistance"
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - AC Bridges
define:
  - "Unknown Inductance & it's Internal Resistance : Maxwell's Inductance Bridge"
modified: 2026-07-23T08:13:58
---
### Maxwell's Inductance Bridge
#ac-bridges #inductance-measurement #measurements

> Maxwell's Inductance-Capacitance Bridge is an AC bridge used to measure an unknown inductance ($L_x$) and its internal resistance ($R_x$) by comparing it with a standard variable capacitor. This bridge is particularly well-suited for measuring coils with a **medium Quality Factor (Q)**, typically in the range of 1 to 10. It is a modification of the Maxwell's Inductance Bridge and is more practical because high-quality, precise standard capacitors are easier and cheaper to manufacture than standard inductors.

> [!pyq]- PYQ : 2021
> ![[ee_2021#^q12]]

#### Circuit Diagram and Impedances
#ac-bridges/circuit-diagram #maxwell-bridge

The bridge consists of four arms with the following components:
-   **Arm AB**: The unknown inductor $L_x$ in series with its effective resistance $R_x$.
    -   $Z_1 = R_x + j\omega L_x$
-   **Arm BC**: A standard non-inductive resistor $R_3$.
    -   $Z_3 = R_3$
-   **Arm AD**: A standard non-inductive resistor $R_2$.
    -   $Z_2 = R_2$
-   **Arm DC**: A standard variable capacitor $C_4$ in parallel with a standard variable non-inductive resistor $R_4$.
    -   $Y_4 = \frac{1}{Z_4} = \frac{1}{R_4} + j\omega C_4$

The variables for balancing are typically $R_4$ and $C_4$.

#### Derivation of Balance Equations
#ac-bridges/derivation

The balance condition for an AC bridge is given by the equation:
$$ Z_1 Z_4 = Z_2 Z_3 $$
It is often easier to work with admittance for the parallel arm:
$$ Z_1 = Z_2 Z_3 Y_4 $$
Substituting the expressions for the impedances and admittance:
$$\begin{align}
R_x + j\omega L_x &= (R_2 R_3) \left( \frac{1}{R_4} + j\omega C_4 \right) \\
R_x + j\omega L_x &= \frac{R_2 R_3}{R_4} + j(\omega C_4 R_2 R_3)
\end{align}$$
To satisfy this complex equality, we equate the real and imaginary parts separately.

1.  **Equating Real Parts:**
    $$\boxed{\quad R_x = \frac{R_2 R_3}{R_4} \quad}$$

2.  **Equating Imaginary Parts:**
    $$\begin{align}
    \omega L_x &= \omega C_4 R_2 R_3 \\
    \implies L_x &= C_4 R_2 R_3
    \end{align}$$
    $$\boxed{\quad L_x = R_2 R_3 C_4 \quad}$$

Notice that both balance equations are independent of the supply frequency.

#### Quality Factor (Q) of the Coil
#quality-factor #maxwell-bridge

The quality factor of the unknown coil is defined as $Q_x = \frac{\omega L_x}{R_x}$. By substituting the derived expressions for $L_x$ and $R_x$ at balance, we get:
$$\begin{align}
Q_x &= \frac{\omega (R_2 R_3 C_4)}{\left(\frac{R_2 R_3}{R_4}\right)} \\
&= \omega C_4 R_4
\end{align}$$
$$\boxed{\quad Q_x = \omega C_4 R_4 \quad}$$

#### Phasor Diagram at Balance
#ac-bridges/phasor-diagram

At balance, nodes B and D are at the same potential. Let $E_{AC}$ be the supply voltage.
-   The voltage drops $V_{AB}$ and $V_{AD}$ are equal ($V_{AB} = V_{AD}$).
-   The voltage drops $V_{BC}$ and $V_{DC}$ are equal ($V_{BC} = V_{DC}$).
-   Also, $V_{AB} + V_{BC} = E_{AC}$ and $V_{AD} + V_{DC} = E_{AC}$.
-   In arm ADC, $I_2$ flows through $R_2$ and splits into $I_{C4}$ (through $C_4$) and $I_{R4}$ (through $R_4$). The voltage $V_{DC}$ is common to both parallel components. $I_{C4}$ leads $V_{DC}$ by $90^\circ$, while $I_{R4}$ is in phase with $V_{DC}$. The total current $I_2$ is the phasor sum of $I_{C4}$ and $I_{R4}$.
-   The phasor diagram visually confirms that the sum of phase angles of opposite arms are equal $(\theta_1 + \theta_4 = \theta_2 + \theta_3)$. Since $R_2$ and $R_3$ are pure resistors, $\theta_2 = \theta_3 = 0$. Thus, at balance, $\theta_1 = -\theta_4$. This means the unknown inductive arm must have a positive phase angle equal in magnitude to the negative phase angle of the parallel RC arm.

#### Advantages and Disadvantages
#maxwell-bridge/pros-cons

##### Advantages
-   The balance equations for $L_x$ and $R_x$ are independent of the source frequency.
-   It uses a standard capacitor, which is less bulky, cheaper, and easier to shield from external stray magnetic fields compared to a standard inductor.
-   The measurement expressions are simple and do not involve complex terms.

##### Disadvantages
-   It is not suitable for measuring coils with a high Q-factor (Q > 10). For high Q, $R_x$ is very small, which requires $R_4$ to be very large ($R_4 = R_2 R_3 / R_x$). A very high-value precision variable resistor is expensive and impractical. [[Hay's Bridge (for High Q coils)|Hay's Bridge]] is used for high-Q coils.
-   It is also not suitable for coils with a very low Q-factor (Q < 1), as achieving a sharp balance point can be difficult. [[Anderson's Bridge]] is preferred for low-Q coils.

---
### Related Concepts
#ac-bridges/related-concepts

> [[Hay's Bridge]]

[[General Equation for Bridge Balance]]
[[AC Bridges]]
[[Anderson's Bridge]]
[[Owen's Bridge]]
[[Quality Factor (Q Factor)]]
[[Complex Impedance]]
