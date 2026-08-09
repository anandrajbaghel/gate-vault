---
tags:
  - measurements
  - ac-bridges
  - capacitance-measurement
  - gate
  - electrical-engineering
created: 2025-10-18
aliases:
  - De Sauty Bridge
  - Simple Capacitance Bridge
  - "Unknown Capacitance : De Sauty's Bridge"
  - "Bridge : De Sauty's Bridge - Unknown Capacitance"
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - AC Bridges
modified: 2026-08-04T09:31:21
---
### De Sauty's Bridge
#ac-bridges #capacitance-measurement #measurements

> De Sauty's Bridge is the simplest form of AC bridge used for measuring an unknown capacitance by comparing it with a standard capacitor. In its basic form, it assumes the capacitors are perfect (lossless), which is impractical. The modified version of the bridge attempts to account for dielectric loss, but for precision measurements, it is superseded by the [[Schering Bridge]].

#### Simple De Sauty's Bridge (for Ideal Capacitors)
#simple-desauty-bridge

This bridge is analogous to the Wheatstone bridge for resistance measurement.
-   **Arm AB (Z1)**: A standard non-inductive resistor $R_1$.
-   **Arm BC (Z2)**: A standard non-inductive resistor $R_2$ (variable).
-   **Arm CD (Z3)**: The unknown capacitor $C_x$.
-   **Arm DA (Z4)**: A standard capacitor $C_s$.

For ideal capacitors, the impedances are:
$Z_1 = R_1$, $Z_2 = R_2$, $Z_3 = \frac{1}{j\omega C_x}$, $Z_4 = \frac{1}{j\omega C_s}$

##### Derivation
The balance condition is $Z_1 Z_3 = Z_2 Z_4$.
$$\begin{align}
R_1 \left( \frac{1}{j\omega C_x} \right) &= R_2 \left( \frac{1}{j\omega C_s} \right) \\
\frac{R_1}{C_x} &= \frac{R_2}{C_s}
\end{align}$$
Solving for the unknown capacitance $C_x$:
$$\boxed{\quad C_x = C_s \frac{R_1}{R_2} \quad}$$

##### Limitation
This simple configuration can only be balanced if the capacitors $C_x$ and $C_s$ are perfect (i.e., have zero dielectric loss). A real capacitor has some leakage, which can be modeled as a resistance in parallel or series. This introduces a resistive component to the impedance of the capacitive arms, preventing the phase balance condition ($\theta_1 + \theta_3 = \theta_2 + \theta_4$) from being met, as the phase angles of the capacitive arms will not be exactly $-90^\circ$. Therefore, a sharp null point is unattainable in practice.

#### Modified De Sauty's Bridge
#modified-desauty-bridge #dielectric-loss

To account for the inherent dielectric loss in real capacitors, the bridge is modified. The imperfection is modeled by a small equivalent series resistance ($r_x$ for $C_x$, and $r_s$ for $C_s$).
The impedances of the arms are now:
-   $Z_1 = R_1$
-   $Z_2 = R_2$
-   $Z_3 = r_x + \frac{1}{j\omega C_x}$
-   $Z_4 = r_s + \frac{1}{j\omega C_s}$

##### Derivation
Using the balance condition $Z_1 Z_3 = Z_2 Z_4$:
$$\begin{align}
R_1 \left( r_x + \frac{1}{j\omega C_x} \right) &= R_2 \left( r_s + \frac{1}{j\omega C_s} \right) \\
R_1 r_x + \frac{R_1}{j\omega C_x} &= R_2 r_s + \frac{R_2}{j\omega C_s} \\
R_1 r_x - j\frac{R_1}{\omega C_x} &= R_2 r_s - j\frac{R_2}{\omega C_s}
\end{align}$$
Equating the real and imaginary parts gives two independent balance conditions:

1.  **Equating Real Parts:**
    $$ R_1 r_x = R_2 r_s \implies \boxed{\quad r_x = r_s \frac{R_2}{R_1} \quad} $$

2.  **Equating Imaginary Parts:**
    $$ \frac{R_1}{\omega C_x} = \frac{R_2}{\omega C_s} \implies \boxed{\quad C_x = C_s \frac{R_1}{R_2} \quad} $$

The **dissipation factor (D)** of a series RC circuit is given by $D = \omega CR$. The balance conditions also imply:
$$ \frac{r_x}{R_1} = \frac{r_s}{R_2} \quad \text{and} \quad \omega C_x R_1 = \omega C_s R_2 $$
$$ \implies \omega C_x r_x = \omega C_s r_s $$
$$\boxed{\quad D_x = D_s \quad}$$
Balance is achieved only when the dissipation factors of the two capacitors are equal. This is a significant limitation, as it requires a standard capacitor with an adjustable series resistance, which is not always practical.

---
### Related Concepts
#ac-bridges/related-concepts

> [[Schering Bridge (for Dielectric Loss Measurement)|Schering Bridge]] (The superior and practical method for measuring capacitance and dielectric loss)

[[General Equation for Bridge Balance]]
[[AC Bridges]]
[[Dielectric Loss and Dissipation Factor]]
[[Capacitance]]
[[Complex Impedance]]
