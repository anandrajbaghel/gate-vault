---
tags:
  - measurements
  - ac-bridges
  - inductance-measurement
  - high-q-coils
  - gate
  - electrical-engineering
created: 2025-10-18
aliases:
  - Hay Bridge
  - High Q Bridge
  - Hay's Bridge
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - AC Bridges
modified: 2026-07-23T08:15:09
---
### Hay's Bridge (for High Q coils)
#ac-bridges #inductance-measurement #high-q-coils

> Hay's Bridge is an AC bridge used for measuring the inductance of coils with a high **Quality Factor (Q > 10)**. It is a modification of [[Maxwell's Inductance Bridge]], where the standard capacitor is placed in series with a variable resistor, instead of in parallel. This configuration makes it particularly suitable for measuring high-Q inductors, as it allows for a practical and small value for the variable balancing resistor.

#### Circuit Diagram and Impedances
#ac-bridges/circuit-diagram #hays-bridge

The arrangement of components in Hay's Bridge is as follows:
-   **Arm AB**: The unknown inductor $L_x$ in series with its effective resistance $R_x$.
    -   $Z_1 = R_x + j\omega L_x$
-   **Arm BC**: A standard non-inductive resistor $R_3$.
    -   $Z_3 = R_3$
-   **Arm AD**: A standard non-inductive resistor $R_2$.
    -   $Z_2 = R_2$
-   **Arm DC**: A standard variable capacitor $C_4$ in **series** with a standard variable non-inductive resistor $R_4$.
    -   $Z_4 = R_4 + \frac{1}{j\omega C_4} = R_4 - \frac{j}{\omega C_4}$

The bridge is balanced by varying $R_4$ and $C_4$.

#### Derivation of Balance Equations
#ac-bridges/derivation

The general balance condition is $Z_1 Z_4 = Z_2 Z_3$. Substituting the impedance expressions:
$$\begin{align}
(R_x + j\omega L_x) \left( R_4 - \frac{j}{\omega C_4} \right) &= R_2 R_3 \\
\left( R_x R_4 + \frac{\omega L_x}{\omega C_4} \right) + j\left( \omega L_x R_4 - \frac{R_x}{\omega C_4} \right) &= R_2 R_3
\end{align}$$
Equating the real and imaginary parts of the equation:

1.  **Imaginary Part:**
    $$\begin{align}
    \omega L_x R_4 - \frac{R_x}{\omega C_4} &= 0 \\
    \implies R_x &= \omega^2 C_4 R_4 L_x
    \end{align}$$

2.  **Real Part:**
    $$ R_x R_4 + \frac{L_x}{C_4} = R_2 R_3 $$

Now, substitute the expression for $R_x$ from the imaginary part into the real part equation:
$$\begin{align}
(\omega^2 C_4 R_4 L_x) R_4 + \frac{L_x}{C_4} &= R_2 R_3 \\
L_x (\omega^2 C_4^2 R_4^2 + 1) &= R_2 R_3 C_4
\end{align}$$
Solving for $L_x$ and then for $R_x$:
$$\boxed{\quad L_x = \frac{R_2 R_3 C_4}{1 + \omega^2 C_4^2 R_4^2} \quad}$$
$$\boxed{\quad R_x = \frac{\omega^2 C_4^2 R_4 R_2 R_3}{1 + \omega^2 C_4^2 R_4^2} \quad}$$
These balance equations are dependent on the supply frequency, $\omega$.

#### Quality Factor and High-Q Approximation
#quality-factor #hays-bridge

The quality factor of the coil is $Q = \frac{\omega L_x}{R_x}$. From the imaginary part balance equation:
$$ \frac{\omega L_x}{R_x} = \frac{1}{\omega C_4 R_4} $$
$$\boxed{\quad Q = \frac{1}{\omega C_4 R_4} \quad}$$
We can rewrite the expression for $L_x$ in terms of Q:
$$ L_x = \frac{R_2 R_3 C_4}{1 + (1/Q)^2} $$
For **High-Q coils (Q > 10)**, the term $(1/Q)^2$ becomes very small ($< 0.01$) and can be neglected.
$$ (1/Q)^2 \ll 1 $$
This simplifies the inductance equation to:
$$\boxed{\quad L_x \approx R_2 R_3 C_4 \quad (\text{for } Q > 10) \quad}$$
This simplified expression is independent of frequency and is identical to the inductance equation for a Maxwell bridge.

#### Advantages and Disadvantages
#hays-bridge/pros-cons

##### Advantages
-   **Ideal for High-Q Coils**: The bridge is specifically designed for and gives accurate measurements for coils with Q > 10.
-   **Practical Resistance Value**: From the Q-factor equation, $R_4 = \frac{1}{\omega C_4 Q}$. For a high Q, the required value of the variable resistor $R_4$ is small, which is practical and economical to produce. This is the primary advantage over the Maxwell bridge, which would require an impractically large parallel resistor.

##### Disadvantages
-   **Frequency Dependent**: The exact balance equations depend on the source frequency. Therefore, the frequency of the AC source must be known precisely and must be stable for an accurate measurement.
-   **Not for Low-Q Coils**: This bridge is not suitable for measuring coils with low Q-factors. For low Q, the term $(1/Q)^2$ is significant and cannot be ignored, and the required value of $R_4$ would become large.

---
### Related Concepts
#ac-bridges/related-concepts

> [[Maxwell's Inductance Bridge]] (for Medium Q coils)

[[General Equation for Bridge Balance]]
[[AC Bridges]]
[[Anderson's Bridge]] (for Low Q coils)
[[Quality Factor (Q Factor)]]
[[Complex Impedance]]