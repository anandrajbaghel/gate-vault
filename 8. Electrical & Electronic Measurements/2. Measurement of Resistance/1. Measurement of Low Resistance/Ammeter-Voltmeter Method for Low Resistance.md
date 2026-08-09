---
tags:
  - measurements
  - resistance-measurement
  - dc-circuits
  - low-resistance
  - gate
created: 2023-11-06
aliases:
  - Ammeter Voltmeter Method
  - V-I Method for Low Resistance
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - Measurement of Low Resistance
modified: 2026-08-04T09:07:20
---
### Ammeter-Voltmeter Method for Low Resistance
#ohm-law #vi-method #resistance-measurement

> The Ammeter-Voltmeter method is the most direct way to measure resistance, based on Ohm's Law ($R = V/I$). However, the finite resistances of the measuring instruments themselves introduce systematic errors. The choice of circuit connection is critical to minimize this error, especially for low resistance values.

#### Circuit Configuration for Low Resistance
#low-resistance-connection #loading-effect

For measuring **low resistance**, the preferred configuration is to connect the voltmeter directly across the unknown resistance ($R_x$), as shown below. The ammeter is placed such that it measures the combined current flowing through the resistor and the voltmeter.

*   **Source --- Ammeter ---+--- Resistor ($R_x$) --- Ground**
*   **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**
*   **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+----- Voltmeter -----+**

###### Analysis
-   **Voltmeter Reading (V):** It accurately measures the voltage across the unknown resistance, $V_x$.
-   **Ammeter Reading (I):** It measures the sum of the current through the resistor ($I_x$) and the current drawn by the voltmeter ($I_v$).
    $$I = I_x + I_v$$
-   **Measured Resistance ($R_m$):** The resistance calculated from the readings is:
    $$R_m = \frac{V}{I} = \frac{V_x}{I_x + I_v}$$
-   **True Resistance ($R_x$):** The actual resistance is $R_x = V_x / I_x$.

Since the denominator in the expression for $R_m$ is larger than the true current $I_x$, the measured resistance value is **less than the true value**.
$$R_m < R_x$$

The measured value $R_m$ is the parallel combination of the true resistance $R_x$ and the voltmeter's internal resistance $R_v$.
$$\boxed{\quad R_m = R_x || R_v = \frac{R_x R_v}{R_x + R_v} \quad}$$

---
#### Error and Correction
#error-analysis #correction-factor

The error introduced by the voltmeter's current can be calculated and corrected for if the voltmeter's resistance ($R_v$) is known.

###### Correction Formula
The true resistance $R_x$ can be calculated from the measured resistance $R_m$ and the voltmeter resistance $R_v$:
$$\boxed{\quad R_x = \frac{R_m R_v}{R_v - R_m} \quad}$$

###### Relative Error
The relative systematic error is given by:
$$\begin{align}
\epsilon_r &= \frac{R_m - R_x}{R_x} \\
 &= \frac{\frac{R_x R_v}{R_x + R_v} - R_x}{R_x} = \frac{R_v}{R_x + R_v} - 1
\end{align}$$
$$\boxed{\quad \epsilon_r = -\frac{R_x}{R_x + R_v} \quad}$$

This configuration is suitable for **low resistance** because $R_x$ is much smaller than $R_v$ (e.g., $R_x=1\Omega$, $R_v=1M\Omega$). Therefore, the term $-R_x/(R_x+R_v)$ becomes very small, resulting in a negligible error.

---
#### Comparison with High Resistance Configuration
#comparison #high-resistance-connection

For completeness, the alternative connection places the ammeter in series with only the resistor, and the voltmeter measures the voltage across the series combination of the ammeter and resistor.
-   **Measured Resistance:** $R_m = R_x + R_a$ (where $R_a$ is the ammeter resistance).
-   **Relative Error:** $\epsilon_r = +R_a / R_x$.

This error becomes very large when $R_x$ is small (since $R_x$ is in the denominator). For instance, if $R_x=0.1\Omega$ and $R_a=0.1\Omega$, the error is 100%. This confirms why this connection is unsuitable for low resistance measurement.

---
### Related Concepts
#topic/related-concepts

> [[Kelvin's Double Bridge]]

[[Ammeter-Voltmeter Method for Medium Resistance]]
[[Loading Effect]]
[[Measurement of Resistance]]
[[Sources of Systematic Errors]]
[[PMMC Instruments]]
