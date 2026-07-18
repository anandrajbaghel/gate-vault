---
tags:
  - electric-circuits
  - circuit-elements
  - inductors
  - energy-storage
  - passive-components
aliases:
  - Inductor
  - Inductance
  - Henry (H)
  - "H : Henry"
created: 2025-09-11
subject: "[[Electric Circuits]]"
parent: "[[Circuit Elements]]"
confidence: 9
---
### Inductors
#inductors #inductance

> ==An **inductor** is a passive two-terminal electrical component that stores energy in a **magnetic field** when electric current flows through it.== The fundamental property of an inductor is to **oppose any change in the electric current** flowing through it. The ==SI unit for inductance is the **Henry ($H$)**==.

#### V-I Relationship
#inductor/vi-relationship

The voltage across an inductor is directly proportional to the rate of change of current through it.
$$\boxed{\quad V(t) = L \frac{di(t)}{dt} \quad}$$
* $V(t)$ is the instantaneous voltage across the inductor.
* $L$ is the inductance in Henries (H).
* $\frac{di(t)}{dt}$ is the instantaneous rate of change of current in Amperes per second (A/s).
* Voltage leads current by 90°. In the phasor domain $\mathbf{V} = L(j\omega\mathbf{I})$.

Conversely, the current through the inductor can be found by integrating the voltage:
$$i(t) = \frac{1}{L} \int_{-\infty}^{t} v(\tau)d\tau = i(t_0) + \frac{1}{L} \int_{t_0}^{t} v(\tau)d\tau$$

---
#### Physical Properties of Inductance
#inductance-formula

The inductance of a coil (like a solenoid) depends on its physical construction.
$$\boxed{\quad L = \frac{\mu N^2 A}{l} \quad}$$
*   $\mu$ is the permeability of the core material ($\mu = \mu_0 \mu_r$).
*   $N$ is the number of turns in the coil.
*   $A$ is the cross-sectional area.
*   $l$ is the length of the coil.

---
#### Energy Storage
#inductor/energy-storage

An inductor stores energy in its magnetic field. The amount of energy stored is a function of the current flowing through it.
$$\boxed{\quad W_L = \frac{1}{2} L I^2 \quad}$$
*   $W_L$ is the energy in Joules (J).
*   $L$ is the inductance in Henries (H).
*   $I$ is the current in Amperes (A).

An ideal inductor does not dissipate energy; it only stores and releases it.

---
#### Continuity of Current
#inductor/current-continuity

This is the most critical property of an inductor in circuit analysis. The V-I relationship implies that for the voltage across an inductor to be finite, the current must be a continuous function of time.

> [!memory]
> The current through an inductor cannot change instantaneously.

This means the current just after a switching event ($t=0^+$) is the same as the current just before the event ($t=0^-$).
$$\boxed{\quad i_L(0^+) = i_L(0^-) \quad}$$
An instantaneous change in current would require an infinite voltage, which is not physically possible. This principle is fundamental to solving [[Transient Analysis|transient circuits]].

---
#### Behavior in DC Circuits (Steady State)
#inductor/dc-behavior

In a DC circuit that has reached steady state, the current is constant.
Since the current is not changing, $\frac{di}{dt} = 0$.
The voltage across the inductor is therefore:
$$V_L = L \frac{di}{dt} = L(0) = 0 \ V$$
A zero voltage drop across an element means it behaves like a **short circuit**.

> [!memory]
> In a DC steady-state condition, an inductor acts as a **short circuit**.

---
#### Inductors in Series and Parallel
#series-inductors #parallel-inductors

Inductors combine in the same way as [[Resistors]].

##### Inductors in Series
The equivalent inductance is the sum of individual inductances.
$$\boxed{\quad L_{eq} = L_1 + L_2 + \dots + L_n \quad}$$

##### Inductors in Parallel
The reciprocal of the equivalent inductance is the sum of the reciprocals of the individual inductances.
$$\boxed{\quad \frac{1}{L_{eq}} = \frac{1}{L_1} + \frac{1}{L_2} + \dots + \frac{1}{L_n} \quad}$$
For two inductors in parallel:
$$\boxed{\quad L_{eq} = \frac{L_1 L_2}{L_1 + L_2} \quad}$$

---
### Related Concepts
#related-concepts

> [[Capacitors]] (The dual passive element, stores energy in an electric field)
> [[Resistors]] (The passive element that dissipates energy)
> [[Transient Analysis]] and [[RLC Circuits]] (Where inductor properties are crucial)

[[AC Circuits]] (Analysis using impedance $Z_L = j\omega L$)
[[Electromagnetic Fields]]
[[Mutual Inductance]]
[[Inductance and Mutual Inductance]]
[[Circuit Elements]]
