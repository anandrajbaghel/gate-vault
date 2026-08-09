---
tags:
  - measurements
  - resistance-measurement
  - dc-circuits
  - low-resistance
  - null-method
  - gate
created: 2023-11-08
aliases:
  - DC Potentiometer
  - Potentiometer
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - Measurement of Low Resistance
modified: 2026-08-04T10:14:54
---
### Potentiometer Method
#potentiometer #null-method #voltage-comparison

> A DC Potentiometer is a precision instrument used for measuring an unknown voltage by comparing it with a known voltage. It operates on a **null deflection principle**, meaning at the point of measurement (balance), it draws no current from the source being measured. This eliminates the **[[Loading Effect]]**, making it one of the most accurate measurement methods available. While its primary function is voltage measurement, this capability is adapted for the precise measurement of current and resistance.

#### Principle of a DC Potentiometer
#potentiometer/principle

A potentiometer works by balancing the unknown voltage against a known voltage drop along a uniform slide wire.
1.  A stable working current from a supply battery is passed through a long, uniform resistance wire (the slide wire).
2.  This creates a uniform and linear voltage drop along the length of the wire. The voltage at any point is directly proportional to its length from the zero end.
3.  The unknown voltage source is connected in opposition to the slide wire voltage, with a galvanometer in the circuit as a null detector.
4.  The sliding contact is moved along the wire until the galvanometer shows zero deflection. At this **balance point**, the unknown voltage is exactly equal to the voltage drop across that portion of the slide wire.

$$\text{Unknown Voltage } E_x \propto \text{Balancing Length } l_x$$

###### Standardization
Before measurement, the potentiometer must be **standardized** to calibrate its scale. This is done by replacing the unknown voltage with a **standard cell** (e.g., a Weston Cadmium cell) with a very stable and accurately known EMF, $E_s$. The working current is adjusted with a rheostat until the balance is achieved at a pre-marked length ($l_s$) on the scale corresponding to the standard cell's voltage. This establishes a known voltage-to-length ratio ($k = E_s/l_s$), making direct voltage readings possible.

---
#### Measurement of Low Resistance
#low-resistance-measurement #potentiometer/resistance

The potentiometer's ability to measure voltage without drawing current makes it ideal for accurately measuring low resistances. The method involves comparing the voltage drop across the unknown low resistance ($R_x$) with the voltage drop across a known standard low resistance ($S$).

###### Circuit and Procedure
1.  A separate low-voltage, high-current supply is used to drive a steady current ($I$) through the unknown resistance ($R_x$) and the standard resistance ($S$) connected in series. The standard resistor $S$ should be of a similar order of magnitude as $R_x$.
2.  The potentiometer is first connected across the terminals of the unknown resistor $R_x$. The sliding contact is adjusted to find the balance point. Let the balancing length be $l_x$. The voltage drop across $R_x$ is:
    $$V_x = I \cdot R_x$$
    At balance, $V_x = k \cdot l_x$, where $k$ is the voltage/length calibration of the slide wire.
3.  Next, without changing the current $I$, the potentiometer is switched to connect across the terminals of the standard resistor $S$. A new balance point is found at length $l_s$. The voltage drop across $S$ is:
    $$V_s = I \cdot S$$
    At balance, $V_s = k \cdot l_s$.

###### Calculation
By taking the ratio of the two voltage measurements:
$$\frac{V_x}{V_s} = \frac{I \cdot R_x}{I \cdot S} = \frac{k \cdot l_x}{k \cdot l_s}$$
The main circuit current ($I$) and the potentiometer calibration constant ($k$) both cancel out. This is a significant advantage, as the main current only needs to be stable during the two measurements, not precisely known. Similarly, the potentiometer does not strictly need to be standardized, as long as its working current is stable.

The unknown resistance is then calculated as:
$$\boxed{\quad R_x = S \times \frac{l_x}{l_s} \quad}$$

This method is highly accurate because it's a four-terminal measurement that negates the resistance of connecting leads and contacts.

---
### Related Concepts
#topic/related-concepts

> [[Kelvin's Double Bridge]]

[[Measurement of Low Resistance]]
[[Ammeter-Voltmeter Method for Low Resistance]]
[[Wheatstone Bridge and Sensitivity Analysis]]
[[Sources of Systematic Errors]]
[[Loading Effect]]
