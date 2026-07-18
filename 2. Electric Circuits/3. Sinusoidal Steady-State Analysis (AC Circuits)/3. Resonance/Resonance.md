---
tags:
  - electric-circuits
  - ac-circuits
  - resonance
  - rlc-circuits
  - frequency-response
aliases:
  - RLC Circuits
  - Resonant Frequency
created: 2025-09-11
subject: "[[Electric Circuits]]"
parent: "[[AC Circuits]]"
confidence: 9
---
### Resonance
#resonance #frequency-response

> ==**Resonance** is a steady-state condition in an RLC circuit where the inductive reactance ($X_L$) and capacitive reactance ($X_C$) are equal in magnitude, causing the net [[reactance]] to be zero.== At the resonant frequency, the circuit behaves as purely resistive, and the voltage and current are in phase, resulting in a **unity power factor**.

#### Resonant Frequency
#resonant-frequency

==The resonant frequency is the angular frequency at which resonance occurs.== It is determined by the values of inductance and capacitance in the circuit.
$$\omega_0 L = \frac{1}{\omega_0 C}$$
$$\omega_0^2 = \frac{1}{LC}$$
$$\boxed{\quad \omega_0 = \frac{1}{\sqrt{LC}} \quad (\text{rad/s}) \quad \text{and} \quad f_0 = \frac{\omega_0}{2\pi}  = \frac{1}{2\pi\sqrt{LC}} \quad (\text{Hz}) \quad}$$

---
#### Series Resonance
#series-resonance

> [!refer]
> [[Series Resonance in RLC Circuits#Condition for Resonance|Condition for Series Resonance]]
> [[Series Resonance in RLC Circuits#Characteristics at Resonance|Characteristics at Series Resonance]]

---
#### Parallel Resonance (Tank Circuit)
#parallel-resonance

> [!refer]
> [[Parallel Resonance in RLC Circuits#Condition for Resonance|Condition for Parallel Resonance]]
> [[Parallel Resonance in RLC Circuits#Characteristics at Resonance|Characteristics at Parallel Resonance]]

---
#### Quality Factor (Q)
#quality-factor

> [!refer]
> [[Quality Factor (Q-Factor)#Fundamental Definition|Fundamental Definition]]
> [[Quality Factor (Q-Factor)#Formulas for RLC Circuits|Formulas for Quality Factor for RLC Circuits]]

#### Bandwidth (BW) and Half-Power Frequencies
#bandwidth #half-power-frequency 

> [!refer]
> [[Bandwidth and Selectivity#Bandwidth (BW)|Bandwidth in RLC Circuit]] (in [[Bandwidth and Selectivity]])
> [[Bandwidth and Selectivity#Half-Power Frequencies (-3dB Frequencies)|Half-Power Frequencies]] (in [[Bandwidth and Selectivity]])
> [[Bandwidth and Selectivity#The Relationship via Quality Factor (Q)|The Relationship via Quality Factor (Q)]] (in [[Bandwidth and Selectivity]])

---
### Related Concepts
#related-concepts

> [[AC Circuits]]

[[RLC Circuits]]
[[Impedance and Admittance]]
[[Filters]] (Resonant circuits are the basis for band-pass and band-stop filters)
[[AC Power Analysis]]
[[LC Circuit Transients]]