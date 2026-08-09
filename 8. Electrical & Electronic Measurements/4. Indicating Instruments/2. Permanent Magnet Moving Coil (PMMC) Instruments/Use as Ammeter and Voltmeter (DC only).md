---
tags:
  - measurements
  - indicating-instruments
  - pmmc
  - ammeter
  - voltmeter
  - gate
  - electrical-engineering
created: 2025-10-18
aliases:
  - PMMC Ammeter
  - PMMC Voltmeter
  - PMMC Range Extension
  - Voltmeter Extension Range
  - PMMC Instruments
  - Why PMMC works only for DC?
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - Permanent Magnet Moving Coil (PMMC) Instruments
modified: 2026-08-04T10:46:53
---
### Use as Ammeter and Voltmeter (DC only)
#pmmc #ammeter #voltmeter #range-extension

> ==The basic Permanent Magnet Moving Coil (PMMC) instrument is essentially a very sensitive galvanometer.== Its coil is designed to handle only a small current (microamperes or milliamperes) and can only withstand a small voltage across it. To measure larger currents and voltages, its range must be extended using external resistors. ==A crucial characteristic is that PMMC instruments are fundamentally **DC-only** devices.==

#### Why PMMC works only for DC?
#pmmc/dc-only

The deflecting torque in a PMMC instrument is directly proportional to the current: $T_d \propto I$.
-   **With DC**: A steady current produces a steady, unidirectional torque, resulting in a stable deflection.
-   **With AC**: The alternating current reverses its direction every half-cycle. This causes the torque to reverse direction as well. Due to the high moment of inertia of the moving system, the pointer cannot follow these rapid reversals. The average torque over a full cycle is zero, so the pointer simply vibrates at its zero position or fails to move at all. Therefore, a standard PMMC instrument reads the average value of the current, which is zero for a sine wave.

---
#### PMMC as a DC Ammeter
#pmmc/ammeter

To measure a large current ($I$) that exceeds the meter's full-scale deflection current ($I_{fsd}$ or $I_m$), most of the current must be bypassed around the sensitive meter movement. This is achieved by connecting a low-resistance resistor, called a **shunt ($R_{sh}$)**, in parallel with the meter.

-   **Principle**: Current Division.
-   **Let**:
    -   $I$ = Total current to be measured.
    -   $I_m$ = Full-scale deflection current of the meter.
    -   $I_{sh}$ = Current through the shunt resistor.
    -   $R_m$ = Internal resistance of the meter coil.
    -   $R_{sh}$ = Resistance of the shunt.

Since the shunt is in parallel with the meter, the voltage drop across both is the same:
$$\begin{align}
V_m &= V_{sh} \\
I_m R_m &= I_{sh} R_{sh}
\end{align}$$
The total current $I$ is the sum of the meter current and shunt current: $I = I_m + I_{sh}$, so $I_{sh} = I - I_m$.
$$ I_m R_m = (I - I_m) R_{sh} $$
Solving for the required shunt resistance:
$$ R_{sh} = \frac{I_m R_m}{I - I_m} $$
The **multiplying factor** of the shunt is defined as $m = \frac{I}{I_m}$. This means the new range is 'm' times the original range.
$$ I = m I_m $$
Substituting this into the equation for $R_{sh}$:
$$ R_{sh} = \frac{I_m R_m}{m I_m - I_m} = \frac{I_m R_m}{I_m(m - 1)} $$
$$\boxed{\quad R_{sh} = \frac{R_m}{m - 1} \quad}$$

---
#### PMMC as a DC Voltmeter
#pmmc/voltmeter

To measure a large voltage ($V$) that exceeds the meter's full-range voltage ($V_m = I_m R_m$), a high-resistance resistor, called a **multiplier ($R_{se}$)**, is connected in series with the meter.

-   **Principle**: Voltage Division.
-   **Let**:
    -   $V$ = Total voltage to be measured.
    -   $V_m$ = Voltage across the meter at full-scale deflection ($V_m = I_m R_m$).
    -   $I_m$ = Full-scale deflection current of the meter.
    -   $R_m$ = Internal resistance of the meter coil.
    -   $R_{se}$ = Resistance of the series multiplier.

The total voltage $V$ is the sum of the voltage drops across the multiplier and the meter:
$$\begin{align}
V &= V_{se} + V_m \\
V &= (I_m R_{se}) + (I_m R_m) \\
V &= I_m (R_{se} + R_m)
\end{align}$$
Solving for the required multiplier resistance:
$$ R_{se} = \frac{V}{I_m} - R_m $$
The **multiplying factor** for the voltmeter is defined as $m = \frac{V}{V_m} = \frac{V}{I_m R_m}$.
$$ V = m (I_m R_m) $$
Substituting this into the equation for $R_{se}$:
$$ R_{se} = \frac{m I_m R_m}{I_m} - R_m = m R_m - R_m $$
$$\boxed{\quad R_{se} = R_m (m - 1) \quad}$$

> [!pyq]- PYQ : 2019
> ![[ee_2019#^q32]]

##### Sensitivity of a Voltmeter
#voltmeter-sensitivity

The sensitivity (S) of a voltmeter is a figure of merit that indicates the current required for full-scale deflection. It is expressed in Ohms per Volt ($\Omega/V$).
$$\boxed{\quad S = \frac{1}{I_{fsd}} \quad (\Omega/V) \quad}$$
A higher sensitivity means a smaller full-scale deflection current is needed, which implies the voltmeter draws less current from the circuit under test, making it more accurate.
The total resistance of the voltmeter for a range $V$ can be calculated as $R_T = S \times V$. Then, $R_{se} = R_T - R_m$.

---
### Related Concepts
#topic/related-concepts

> [[Permanent Magnet Moving Coil (PMMC) Instruments]]

[[Shunts for Ammeter Range Extension]]
[[Multipliers for Voltmeter Range Extension]]
[[Instrument Range Extension]]
[[Torque Equation of a PMMC Instrument]]
[[Errors in PMMC Instruments]]