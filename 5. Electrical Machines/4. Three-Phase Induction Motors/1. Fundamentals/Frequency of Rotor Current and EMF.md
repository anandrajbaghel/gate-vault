---
tags:
  - electrical-machines
  - induction-motors
  - slip
  - rotor-frequency
created: 2025-09-17
aliases:
  - Rotor Frequency
  - Slip Frequency
  - Rotor Frequency of Negative Sequence Currents
subject: "[[Electrical Machines]]"
parent:
  - Three-Phase Induction Motors
  - "[[Induction Machines]]"
formula:
  - "Rotor Frequency : $$f_r = s \\cdot f_s$$"
modified: 2026-07-23T20:44:09
---
### Frequency of Rotor Current and EMF
#induction-motors #rotor-frequency #slip

> The frequency of the EMF and current induced in the rotor of an induction motor is not equal to the supply frequency. Instead, it is directly proportional to the **slip ($s$)**. This frequency is often called the **slip frequency**.

#### Derivation of Rotor Frequency
#rotor-frequency/derivation

The frequency of induced EMF in any AC machine is given by the formula $$f = \frac{PN}{120}$$, ==where $N$ is the relative speed between the magnetic field and the conductors==.

1.  In an induction motor, the magnetic field rotates at synchronous speed ($N_s$) and the rotor rotates at speed ($N_r$).
2.  The relative speed between the stator's RMF and the rotor conductors is $N_{rel} = N_s - N_r$.
3.  Therefore, the frequency of the EMF induced in the rotor ($f_r$) is:
    $$ f_r = \frac{P (N_s - N_r)}{120} $$
4.  We know the [[Concept of Slip#Definition of Slip|definition of slip]] is $$s = \frac{N_s - N_r}{N_s}$$, which can be rearranged to give the ==relative speed==: $$\boxed{\quad N_s - N_r = s N_s \quad}$$ ^relative-speed
5.  Substituting this into the rotor frequency equation: $$ f_r = \frac{P (s N_s)}{120} = s \left( \frac{P N_s}{120} \right) $$
6.  The term $\left( \frac{P N_s}{120} \right)$ is the formula for the supply frequency, $f$.

This gives the fundamental relationship for rotor frequency: $$\boxed{\quad f_r = s f \quad}$$ ^rotor-frequency

Where:
-   ==$f_r$ is the frequency of rotor current and EMF (in Hz)==.
-   $s$ is the slip.
-   $f$ is the supply frequency (in Hz).

> [!danger]- Rotor Frequency of Negative Sequence Currents
> ![[Concept of Symmetrical Components#2. Negative Sequence Components (Subscript 2)]]

---
#### Significance of Rotor Frequency
#rotor-frequency/significance 

The value of the rotor frequency changes drastically with the operating condition of the motor:

##### At Standstill ($s=1$)
#slip/standstill 

When the rotor is stationary, the slip is 1. Therefore, $$f_r = 1 \times f = f$$
==At the moment of starting, the frequency of the rotor current is the same as the supply frequency. The motor behaves like a transformer with a short-circuited secondary, where primary and secondary frequencies are identical.==

---
##### During Normal Operation ($s$ is small)

Under normal load, slip is typically very low (e.g., $s=0.04$). For a 50 Hz supply:
$$ f_r = 0.04 \times 50 \text{ Hz} = 2 \text{ Hz} $$
The rotor frequency is very low. This has a significant impact on the rotor impedance ($Z_r = R_2 + j(sX_2)$), making the rotor circuit highly resistive during normal operation since the reactance term ($sX_2$) becomes very small.

---
##### Magnetic Locking of Rotor and Stator Fields
#magnetic-locking 

The stator's RMF rotates at speed $N_s$ in space. The rotor's own magnetic field rotates at a speed of $s N_s$ *with respect to the rotor surface*. The rotor itself is rotating at speed $N_r$.
Therefore, the speed of the rotor's magnetic field in space is:
$$\begin{align}
\text{Speed of Rotor Field} &= \text{Rotor Speed} + \text{Speed of Rotor Field w.r.t Rotor} \\
 &= N_r + s N_s \\
 &= N_s(1-s) + s N_s \\
 &= N_s - s N_s + s N_s = N_s
\end{align}$$
This shows that ==both the stator and rotor magnetic fields rotate at the same speed ($N_s$) in space. They are stationary with respect to each other, creating a "magnetic lock" that allows for the continuous production of torque==.

> [!warning] Exam Interpretation — “Generator supply frequency”
> “Generator supply frequency” refers to the **stator (grid) frequency**, not the rotor speed.
> Hence, $$N_s = \frac{120 f}{P}$$
> must be calculated using the given frequency, but **rotor speed ≠ synchronous speed** unless slip is zero.

---
### Related Concepts
#rotor-frequency/related-concepts

> [[Concept of Slip]]

[[Rotating Magnetic Field (RMF)]]
[[Equivalent Circuit of a Three-Phase Induction Motor]]
[[Torque-Slip Characteristics of Induction Motor]]