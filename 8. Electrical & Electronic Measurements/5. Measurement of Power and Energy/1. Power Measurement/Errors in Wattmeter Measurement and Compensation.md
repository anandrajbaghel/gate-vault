---
tags:
  - measurements
  - power-measurement
  - error-analysis
  - wattmeter
  - gate
created: 2025-10-18
aliases:
  - Wattmeter Errors
  - Wattmeter Compensation
subject: "[[Electrical & Electronic Measurements]]"
parent: "[[Electrodynamometer Wattmeter]]"
modified: 2026-08-04T09:40:21
---
### Errors in Wattmeter Measurement and Compensation
#wattmeter-error #power-measurement #error-compensation

> While the electrodynamometer wattmeter is a highly accurate instrument, its practical application is subject to several errors. These errors arise from the instrument's own power consumption, inherent imperfections like coil inductance, and susceptibility to external factors. Understanding these errors and their compensation methods is crucial for precise power measurement.

#### 1. Errors due to Wattmeter Connection
#wattmeter-connections #measurement-error

A wattmeter measures the power consumed by the load, but it also measures the power consumed in one of its own coils, depending on the connection.

##### a. Potential Coil Connected on Load Side
-   The current coil (CC) measures the sum of load current ($I_L$) and potential coil current ($I_p$).
-   The wattmeter reading is:
    $$ P_{measured} = P_{load} + P_{potential\_coil} $$
    $$\boxed{\quad P_{measured} = P_{load} + \frac{V_L^2}{R_p} \quad}$$
-   This connection is preferred for **high current, low voltage loads**, where the small potential coil current ($I_p$) is negligible compared to the large load current ($I_L$).

##### b. Potential Coil Connected on Supply Side
-   The current coil measures only the true load current ($I_L$).
-   The potential coil (PC) measures the voltage drop across both the load and the current coil.
-   The wattmeter reading is:
    $$ P_{measured} = P_{load} + P_{current\_coil} $$
    $$\boxed{\quad P_{measured} = P_{load} + I_L^2 R_c \quad}$$
-   This connection is preferred for **low current, high voltage loads**, where the voltage drop across the current coil ($I_L R_c$) is negligible compared to the large load voltage.

##### Compensation for Connection Error
A **compensating coil** can be used to eliminate this error. It is an additional coil with the same number of turns as the main current coil, wound directly on top of it. It is connected in series with the potential coil and carries the current $I_p$. By winding it in opposition to the main current coil, its magnetic field cancels out the field produced by the $I_p$ component of the current in the main coil, making the wattmeter read only the true load power.

---

#### 2. Error due to Potential Coil Inductance
#phase-angle-error #inductance-error

This is the most significant error in AC power measurement, especially at low power factors.
-   **Cause:** The potential coil circuit is not purely resistive; it has some inductance ($L_p$). This causes the current in the potential coil ($i_p$) to lag the load voltage ($v_L$) by a small phase angle, $\beta$.
    $$ \beta = \tan^{-1}\left(\frac{\omega L_p}{R_p}\right) $$
-   **Effect:** The wattmeter measures the phase difference between the current coil current ($i_L$) and the potential coil current ($i_p$). This measured angle is $(\phi - \beta)$ for a lagging load, instead of the true power factor angle $\phi$.
-   **True Power:** $P_{true} = V_L I_L \cos(\phi)$
-   **Measured Power:** $P_{measured} = V_L I_L \cos(\phi - \beta)$ (assuming the voltage across PC is approximately $V_L$).
-   The **Correction Factor (CF)** is:
    $$ CF = \frac{P_{true}}{P_{measured}} = \frac{\cos(\phi)}{\cos(\phi - \beta)} $$
-   **Conclusion:** The wattmeter reads **high** for lagging power factors ($\cos(\phi-\beta) > \cos\phi$) and **low** for leading power factors. The error is largest at low power factors.

##### Compensation for Inductance Error
This error can be minimized by connecting a capacitor in parallel with a portion of the multiplier resistor. This capacitor's leading reactive current component compensates for the lagging current caused by the coil's inductance, effectively making the potential coil circuit's overall impedance resistive.

---

#### 3. Other Errors

-   **Stray Magnetic Field Error:** The weak operating field of the air-cored dynamometer is easily affected by external magnetic fields.
    -   **Compensation:** Using a soft iron case for magnetic shielding or employing an **astatic construction** where two identical mechanisms on the same spindle are arranged to cancel out the effect of a uniform external field.

-   **Eddy Current Error:** The alternating field from the coils can induce eddy currents in surrounding metal parts, which creates an opposing magnetic field and causes the meter to read low.
    -   **Compensation:** Using non-metallic support structures and high-resistivity materials.

-   **Temperature Error:** Changes in temperature can alter the resistance of the copper coils and the stiffness of the control springs.
    -   **Compensation:** Using materials with low temperature coefficients of resistance (like Manganin) for the multiplier and swamping resistors.

---

### Related Concepts
#topic/related-concepts

> [[Electrodynamometer Wattmeter]]

[[Low Power Factor (LPF) Wattmeter]]
[[Power Factor]]
[[Torque Equation of an Electrodynamometer Instrument]]
[[Phasor Diagram]]
[[Measurement of Power in Three-Phase Circuits]]
