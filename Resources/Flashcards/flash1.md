---
subject:
  - "[[Power Systems]]"
tags:
  - flashcards
---
**Q.** As per a Newton-Raphson load-flow formulation, a system/bus is treated as?
?
Slack Bus (voltage magnitudes $(|V|)$ and voltage angles $(\delta)$)

#power-system / [[Bus Classification (Slack, PQ, PV)]]
 
---
**Q.** What is the main difference between a radial and a ring main distribution system?
?
A radial distribution system has a single power source and the feeders radiate out to the consumers, while a ring main system has a closed loop that can be fed from one or more sources, providing better reliability.

#power-system / [[Distribution Systems]]

---
**Q.** What is the purpose of a load flow study in power system analysis?
?
A load flow study is performed to determine the steady-state operating characteristics of a power system, including voltage magnitudes, phase angles, and power flows for a given load and generation condition.

#power-system / [[Load Flow Studies]]

---
**Q.** In a power system network, each bus (or node) is characterized by four quantities:
?
Real Power ($P$), Reactive Power ($Q$), Voltage Magnitude ($|V|$), and Voltage Angle ($\delta$).

#power-system / [[Bus Classification (Slack, PQ, PV)]]

---
**Q.** What is the first and fastest-acting line of defense against frequency deviations in a power system?
?
Governor Control System.

#power-system / [[Governor Control System]]

---
**Q.** Which of the signals satisfies Dirichlet's conditions.
1. Sine Waves,
2. Square Waves,
3. Triangular Waves, and
4. Rectified Waveforms
?
All of the above mentioned signals satisfies Dirichlet's conditions.

#mathematics / [[Dirichlet's Conditions]]

---
**Q.** For a smooth and safe connection of an incoming alternator to a live busbar (or another alternator) what are the four conditions must be met at the instant the synchronizing switch is closed?
?
1. Equal Voltage Magnitudes $(|V_{incoming}| = |V_{busbar}|)$
2. Same Frequency $(f_{incoming} = f_{busbar})$
3. Same Phase Sequence
4. Zero Phase Angle Difference

#electrical-machines / [[Parallel Operation of Alternators and Synchronization]]

#electric-circuits / [[Phase Sequence]]

---
**Q.** What are the rarest types of fault to occur in practical world? Are these types of fault sever?
?
The two types are
1. Line-to-line-to-line (LLL) and
2. Line-to-line-to-line-to-ground (LLLG).

These are rare and sever types of fault (their analysis is crucial because they typically result in the **largest fault currents**).

#power-system / [[Analysis of Symmetrical Faults]]

---
**Q.** How to calculate Electrical Angle from Mechanical Angle?
?
$$\boxed{\quad \text{Electrical Angle} = \text{Mechanical Angle} \times \text{Pole-Pairs}\quad}$$

#electrical-machines /

---
**Q.** Relation between Induced EMF $(E \text{ or } E_f)$ , Excitation EMF $(E_f)$ and Back EMF $(E_b)$ in context of Synchronous Motor.
?
In short all are equal.
- The rotor field winding is excited with DC → creates a rotating magnetic field.
- This field cuts the stator conductors → **induces EMF $E$** in the stator.
- In a **motor**, this induced emf **opposes** the applied terminal voltage $V$. Hence it is also called **back emf**.
- Since it originates from rotor excitation, it is also called **excitation emf**.

So, $E = E_f = E_b$ they all represent the _same phasor quantity_ inside the motor.

Under motor operation
$$V = E + jI X_s + I R_s$$
(neglect $R_s$ , $V \approx E + jI X_s$)
Here:

- $V$: applied terminal voltage (supply)
- $E$: excitation or back emf (induced emf)
- $I$: stator current
- $X_s$: synchronous reactance

#electrical-machines / [[Effect of Excitation on Armature Current]]

---
**Q.** How is convolution in time domain related to **operation** (*Is there a direct operation or some other relation?*) in frequency domain?
?
Convolution in time domain = **Multiplication** in frequency domain.
$$\boxed{\quad (f * g)(t) = \int_{-\infty}^{\infty} f(\tau)g(t-\tau)d\tau \quad \leftrightarrow \quad F(\omega)G(\omega) \quad}$$

Multiplication in time domain = Convolution in frequency domain, scaled by $(1/2\pi)$.
$$\boxed{\quad f(t)g(t) \quad \leftrightarrow \quad \frac{1}{2\pi} (F * G)(\omega) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\xi)G(\omega-\xi)d\xi \quad}$$

#mathematics / [[Fourier Transforms]]

#signals-and-systems / [[Continuous-Time Convolution Integral]] & [[Discrete-Time Convolution Sum]]

---
**Q.** For a practical DC generator, the average generated EMF across the brushes is given by the equation.
?
$$\boxed{\quad E_g = \frac{\phi Z N P}{60 A}\quad}$$
Where:
- $E_g$ = Generated EMF (Volts)
- $\phi$ = Flux per pole (Webers, Wb)
- $Z$ = Total number of armature conductors
- $N$ = Speed of armature rotation (Revolutions Per Minute, RPM)
- $P$ = Number of poles
- $A$ = Number of parallel paths in the armature winding
  1. For a Lap Winding, $A = P$
  2. For a Wave Winding, $A = 2$


#electrical-machines / [[Principle of Operation of DC Generators]]

---
**Q.** For a practical DC generator, the generated EMF is directly proportional to?
?
The average generated EMF across the brushes is given by the equation.
$$E_g = \frac{\phi Z N P}{60 A}$$
For a given machine, $P$, $Z$, and $A$ are constant. Therefore, the generated EMF is directly proportional to the speed and the flux per pole.
$$ \boxed{\quad E_g \propto \phi N \quad}$$

#electrical-machines / [[Principle of Operation of DC Generators]]

---
**Q.** Torque of a DC Motor is directly proportional to what parameters?
?
Torque Equation of a DC Motor is given by:
$$\quad T = \frac{PZ}{2\pi A} \phi I_a$$
For a given machine,
1. $P$ (Number of Poles),
2. $Z$ (Total Number of armature conductors) and
3. $A$ (Number of parallel paths in the armature winding for Lap Winding $P$ and for Wave Winding 2)

are constants, so the torque is directly proportional to the flux $(\phi)$ and the armature current $(I_a)$:
$$\boxed{\quad T \propto \phi I_a \quad}$$

#electrical-machines / [[Principle of Operation of DC Motors]]

---
