---
tags:
  - electric-circuits
  - circuit-elements
  - capacitors
  - energy-storage
  - passive-components
aliases:
  - Capacitor
  - Capacitance
  - Energy Stored in Capacitor
created: 2025-09-11
subject: "[[Electric Circuits]]"
parent: "[[Circuit Elements]]"
confidence: 9
---
### Capacitors
#capacitors #capacitance

> A **capacitor** is a passive two-terminal electrical component that stores energy in an **electric field**. Its fundamental property is to **oppose any change in the voltage** across its terminals. The SI unit for capacitance is the **Farad ($F$)**.

#### I-V Relationship
#capacitor/iv-relationship

The current flowing through a capacitor is directly proportional to the rate of change of voltage across it.
$$\boxed{\quad I(t) = C \frac{dv(t)}{dt} \quad}$$
* $I(t)$ is the instantaneous current through the capacitor.
* $C$ is the capacitance in Farads (F).
* $\frac{dv(t)}{dt}$ is the instantaneous rate of change of voltage in Volts per second (V/s).
* Current leads voltage by 90° (or voltage lags current by 90°). In the phasor domain $\mathbf{I} = C(j\omega\mathbf{V})$.

Conversely, the voltage across the capacitor can be found by integrating the current:
$$v(t) = \frac{1}{C} \int_{-\infty}^{t} i(\tau)d\tau = v(t_0) + \frac{1}{C} \int_{t_0}^{t} i(\tau)d\tau$$

---
#### Physical Properties of Capacitance
#capacitance-formula

The capacitance of a simple parallel-plate capacitor is determined by its geometry and the dielectric material between its plates.
$$\boxed{\quad C = \frac{\epsilon A}{d} \quad}$$
*   $\epsilon$ is the permittivity of the dielectric material ($\epsilon = \epsilon_0 \epsilon_r$).
*   $A$ is the overlapping surface area of the plates.
*   $d$ is the distance between the plates.

---
#### Energy Storage
#capacitor/energy-storage

A capacitor stores energy in the electric field established between its plates. The amount of energy stored is a function of the voltage across it.
$$\boxed{\quad W_C = \frac{1}{2} C V^2 \quad}$$
*   $W_C$ is the energy in Joules (J).
*   $C$ is the capacitance in Farads (F).
*   $V$ is the voltage in Volts (V).

An ideal capacitor does not dissipate energy; it only stores and releases it.

---
#### Continuity of Voltage
#capacitor/voltage-continuity

This is the most critical property of a capacitor in circuit analysis. The I-V relationship implies that for the current through a capacitor to be finite, the voltage across it must be a continuous function of time.
> **The voltage across a capacitor cannot change instantaneously.**

This means the voltage just after a switching event ($t=0^+$) is the same as the voltage just before the event ($t=0^-$).
$$\boxed{\quad v_C(0^+) = v_C(0^-) \quad}$$
An instantaneous change in voltage would require an infinite current, which is not physically possible. This principle is fundamental to solving [[Transient Analysis|transient circuits]].

---
#### Behavior in DC Circuits (Steady State)
#capacitor/dc-behavior

In a DC circuit that has reached steady state, the voltage is constant.
Since the voltage is not changing, $\frac{dv}{dt} = 0$.
The current through the capacitor is therefore:
$$I_C = C \frac{dv}{dt} = C(0) = 0 \ A$$
Zero current flow means the component behaves like an **open circuit**.
> In a DC steady-state condition, a capacitor acts as an **open circuit**.

---
#### Capacitors in Series and Parallel
#series-capacitors #parallel-capacitors

Capacitors combine in a manner opposite to that of resistors and inductors.

##### Capacitors in Parallel
The equivalent capacitance is the sum of individual capacitances.
$$\boxed{\quad C_{eq} = C_1 + C_2 + \dots + C_n \quad}$$

##### Capacitors in Series
The reciprocal of the equivalent capacitance is the sum of the reciprocals of the individual capacitances.
$$\boxed{\quad \frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \dots + \frac{1}{C_n} \quad}$$
For two capacitors in series:
$$\boxed{\quad C_{eq} = \frac{C_1 C_2}{C_1 + C_2} \quad}$$

---
### Related Concepts
#related-concepts

> [[Inductors]] (The dual passive element, stores energy in a magnetic field)
> [[Resistors]] (The passive element that dissipates energy)
> [[Transient Analysis]] and [[RLC Circuits]] (Where capacitor properties are crucial)

[[AC Circuits]] (Analysis using impedance $Z_C = \frac{1}{j\omega C}$)
[[Electromagnetic Fields]]
[[Circuit Elements]]
