---
tags:
  - electric-circuits
  - circuit-elements
  - ohms-law
  - passive-components
aliases:
  - Resistor
  - Resistance
  - Infinite Ladder Impedance
  - Infinite Ladder Networks
  - Equivalent Resistance
  - Infinite Ladder Resistance
created: 2025-09-11
subject: "[[Electric Circuits]]"
parent: "[[Circuit Elements]]"
confidence: 9
---
### Resistors
#resistors #resistance

> A **resistor** is a passive two-terminal electrical component that implements electrical resistance as a circuit element. Its primary function is to reduce current flow, adjust signal levels, divide voltages, and terminate transmission lines, among other uses. The SI unit for resistance is the **Ohm ($\Omega$)**.

#### Ohm's Law
#ohms-law

Ohm's Law states that for a linear resistor, the voltage across it is directly proportional to the current flowing through it, provided the temperature and other physical conditions remain unchanged.
$$\boxed{\quad V = IR \quad}$$
*   $V$ is the voltage across the resistor in Volts (V).
*   $I$ is the current flowing through the resistor in Amperes (A).
*   $R$ is the resistance in Ohms ($\Omega$).

The V-I characteristic of an ideal resistor is a straight line passing through the origin, which makes it a **[[Linearity in Electric Circuits|linear]]** and **[[bilateral]]** element.

---
#### Resistance and Resistivity
#resistance-formula #resistivity

The resistance of a component is a physical property determined by its material and geometry.
$$\boxed{\quad R = \rho \frac{l}{A} \quad}$$
*   $\rho$ (rho) is the **resistivity** of the material (in $\Omega \cdot m$), an intrinsic property.
*   $l$ is the length of the conductor in meters (m).
*   $A$ is the cross-sectional area in square meters ($m^2$).

---
#### Power Dissipation in Resistors
#power-dissipation #joule-heating

Resistors are passive elements, meaning they can only absorb or dissipate power, never generate it. This energy is dissipated in the form of heat, a phenomenon known as Joule heating.
$$\boxed{\quad P = VI = I^2R = \frac{V^2}{R} \quad}$$
The power dissipated is always a positive quantity. The unit is Watts (W).

---
#### Conductance
#conductance

Conductance ($G$) is the reciprocal of resistance and is a measure of how easily current can flow through an element.
$$G = \frac{1}{R} = \frac{I}{V}$$
The SI unit of conductance is the **Siemens (S)**, sometimes also called the mho ($\mho$).

---
#### Resistors in Series and Parallel
#series-resistors #parallel-resistors

##### Resistors in Series
#series-resistors 

When resistors are connected end-to-end, the same current flows through them. The equivalent resistance is the sum of individual resistances.
$$\boxed{\quad R_{eq} = R_1 + R_2 + \dots + R_n \quad}$$
This configuration acts as a **[[Voltage Divider Rule|voltage divider]]**.

---
##### Resistors in Parallel
#parallel-resistors 

When resistors are connected across the same two nodes, the same voltage is applied across them. The reciprocal of the equivalent resistance is the sum of the reciprocals of individual resistances.
$$\boxed{\quad \frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n} \quad}$$
For the common case of two parallel resistors:
$$\boxed{\quad R_{eq} = \frac{R_1 R_2}{R_1 + R_2} \quad}$$
This configuration acts as a **[[Current Divider Rule|current divider]]**.

> [!related]
> [[Phasors and Impedance Concept#Combining Impedances]]
> *(for equivalent infinite impedance/resistance)*

---
#### Star-Delta (Wye-Delta) Transformation
#star-delta-transformation

This is a technique to simplify networks where resistors are not in simple series or parallel, such as in a bridge circuit.

> [!refer]
> [[Star-Delta Transformation]]

##### Delta-to-Star (Π-to-Y) Conversion
#delta-to-star/resistance 

To find the resistance in one arm of the star network:
$$R_1 = \frac{R_{12} R_{31}}{R_{12} + R_{23} + R_{31}}$$
(Resistance = Product of adjacent arms in Delta / Sum of all arms in Delta)

---
##### Star-to-Delta (Y-to-Π) Conversion
#star-to-delta/resistance

To find the resistance in one arm of the delta network:
$$R_{12} = R_1 + R_2 + \frac{R_1 R_2}{R_3}$$
(Resistance = Sum of two adjacent star arms + (Product of same two arms / Third arm))

---
#### Temperature Dependence of Resistance
#temperature-coefficient

The resistance of most materials changes with temperature. This relationship is approximately linear over a certain range.
$$\boxed{\quad R_T = R_{ref}[1 + \alpha(T - T_{ref})] \quad}$$
*   $R_T$ is the resistance at temperature $T$.
*   $R_{ref}$ is the resistance at a reference temperature $T_{ref}$ (usually $20^\circ C$).
*   $\alpha$ is the **temperature coefficient of resistance**.
    *   Conductors have a positive temperature coefficient (PTC).
    *   Semiconductors and insulators typically have a negative temperature coefficient (NTC).

---
### Related Concepts
#related-concepts

> [[Ohm's Law]]

[[Series and Parallel Circuits]]
[[Kirchhoff's Laws]]
[[Voltage Divider Rule]]
[[Current Divider Rule]]
[[Inductors]] and [[Capacitors]] (the other two fundamental passive elements)
[[Power and Energy in Circuits]]
