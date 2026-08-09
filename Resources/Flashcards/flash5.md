---
tags:
  - mix
---
**Q.** In the low-slip region of an induction motor's operation, how is the developed torque ($T$) related to the slip ($s$)?
?
In the low-slip (or stable) region, the torque is approximately directly proportional to the slip.
$$
\boxed{\quad T \propto s \quad}
$$

#electrical-machines / [[Induction Motors]]

---
**Q.** What is the formula for the zero-sequence component ($I_0$) of a set of three-phase unbalanced currents ($I_a, I_b, I_c$)?
?
$$
\boxed{\quad I_0 = \frac{1}{3}(I_a + I_b + I_c) \quad}
$$
The zero-sequence current is one-third of the phasor sum of the three-phase currents.

#power-system / [[Symmetrical Components]]

---
**Q.** State the commonly used approximation for the damping ratio ($\zeta$) based on the Phase Margin (PM) of a second-order system.
?
$$
\boxed{\quad \zeta \approx \frac{\text{PM (in degrees)}}{100} \quad}
$$
This provides a quick estimate of the system's damping from its frequency response.

#control-systems / [[Frequency Response]]

---
**Q.** How is the Slew Rate (SR) of an operational amplifier defined?
?
The Slew Rate is defined as the maximum rate of change of the output voltage.
$$
\boxed{\quad SR = \left. \frac{dV_{out}}{dt} \right|_{max} \quad}
$$
It limits the full-power bandwidth of the amplifier.

#analog-electronics / [[Operational Amplifiers]]

---
**Q.** What is the formula for the Discrete-Time Fourier Transform (DTFT) of a discrete sequence $x[n]$?
?
$$
\boxed{\quad X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n]e^{-j\omega n} \quad}
$$
The result is a continuous and periodic function of frequency $\omega$.

#signals-and-systems / [[Discrete-Time Fourier Transform]]

---
**Q.** What is the RMS value of a half-wave rectified sinusoidal waveform with a peak amplitude of $V_m$?
?
$$
\boxed{\quad V_{rms} = \frac{V_m}{2} \quad}
$$

#analog-electronics / [[Rectifiers]]

---
**Q.** The voltage regulation of an alternator calculated using the synchronous impedance method is generally pessimistic. Why?
?
Because it assumes the synchronous reactance ($X_s$) is constant, while in reality, magnetic saturation at higher field currents causes $X_s$ to decrease. This leads to a calculated voltage drop that is larger than the actual value.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the condition for the most economic load dispatch between two power plant units with incremental fuel costs $\frac{dC_1}{dP_1}$ and $\frac{dC_2}{dP_2}$?
?
For the most economical operation, the incremental fuel costs of both units must be equal.
$$
\boxed{\quad \frac{dC_1}{dP_1} = \frac{dC_2}{dP_2} \quad}
$$

#power-system / [[Economic Load Dispatch]]

---
**Q.** For a memory chip organized as $2^N \times M$ bits, how many address lines are required?
?
N address lines are required to select one of the $2^N$ memory locations.

#digital-electronics / [[Semiconductor Memories]]

---
**Q.** State Snell's Law for the refraction of an electromagnetic wave at the boundary between two media with refractive indices $n_1$ and $n_2$.
?
$$
\boxed{\quad n_1 \sin(\theta_1) = n_2 \sin(\theta_2) \quad}
$$
Where $\theta_1$ and $\theta_2$ are the angles of incidence and refraction, respectively, measured with respect to the normal.

#electromagnetic-fields / [[Wave Propagation]]

---
**Q.** For a single-phase half-wave controlled rectifier with a purely resistive load, what is the conduction angle of the thyristor if the firing angle is $\alpha$?
?
The thyristor conducts from $\alpha$ to $\pi$. Therefore, the conduction angle is:
$$
\boxed{\quad \text{Conduction Angle} = \pi - \alpha \quad}
$$

#power-electronics / [[Controlled Rectifiers]]

---
**Q.** What is the formula for the settling time ($t_s$) of a second-order system for a 2% tolerance band?
?
The settling time is approximately four times the time constant of the system's envelope.
$$
\boxed{\quad t_s \approx \frac{4}{\zeta \omega_n} \quad}
$$
Where $\zeta$ is the damping ratio and $\omega_n$ is the natural frequency.

#control-systems / [[Second-Order Systems]]

---
**Q.** The position error constant ($K_p$) for a Type 0 system is?
?
For a Type 0 system, the position error constant is a finite, non-zero value.
$$
\boxed{\quad K_p = \lim_{s \to 0} G(s)H(s) = \text{Constant} \quad}
$$

#control-systems / [[Steady-State Error]]

---
**Q.** The velocity error constant ($K_v$) for a Type 1 system is?
?
For a Type 1 system, the velocity error constant is a finite, non-zero value.
$$
\boxed{\quad K_v = \lim_{s \to 0} sG(s)H(s) = \text{Constant} \quad}
$$

#control-systems / [[Steady-State Error]]

---
**Q.** What is the formula for the Gain-Bandwidth Product (GBWP) of an operational amplifier?
?
For a standard op-amp with a single-pole frequency response, the product of the open-loop gain ($A_{ol}$) and the bandwidth ($BW$) is constant.
$$
\boxed{\quad \text{GBWP} = A_{ol} \times BW \quad}
$$

#analog-electronics / [[Operational Amplifiers]]

---
**Q.** What is the Laplace transform of a unit ramp function, $r(t) = t \cdot u(t)$?
?
$$
\boxed{\quad \mathcal{L}\{r(t)\} = \frac{1}{s^2} \quad}
$$

#mathematics / [[The Laplace Transform]]

---
**Q.** How is the power factor of an AC circuit defined in terms of active power (P), reactive power (Q), and apparent power (S)?
?
The power factor is the ratio of the active power to the apparent power.
$$
\boxed{\quad \text{Power Factor} = \cos(\theta) = \frac{P}{S} = \frac{P}{\sqrt{P^2 + Q^2}} \quad}
$$

#electric-circuits / [[AC Power Analysis]]

---
**Q.** How many selection lines ($m$) are required for a multiplexer with $N$ inputs?
?
The number of selection lines is related to the number of inputs by the formula:
$$
\boxed{\quad m = \log_2(N) \quad}
$$

#digital-electronics / [[Combinational Circuits]]

---
**Q.** State the Lorentz Force equation, which describes the total force on a point charge $q$ moving with velocity $\vec{v}$ in an electric field $\vec{E}$ and a magnetic field $\vec{B}$.
?
$$
\boxed{\quad \vec{F} = q(\vec{E} + \vec{v} \times \vec{B}) \quad}
$$

#electromagnetic-fields / [[Magnetostatics]]

---
**Q.** What is the formula for the average output voltage of a three-phase full converter operating with a continuous current and a firing angle $\alpha$?
?
$$
\boxed{\quad V_{dc} = \frac{3V_{mL}}{\pi}\cos(\alpha) \quad}
$$
Where $V_{mL}$ is the peak value of the line-to-line supply voltage.

#power-electronics / [[Controlled Rectifiers]]

---
**Q.** What is the condition on rotor resistance ($R_2$) and standstill rotor reactance ($X_2$) for achieving maximum starting torque in a three-phase induction motor?
?
Maximum starting torque is achieved when the rotor resistance per phase is equal to the standstill rotor reactance per phase.
$$
\boxed{\quad R_2 = X_2 \quad}
$$

#electrical-machines / [[Induction Motors]]

---
**Q.** In a multi-core underground cable, where is the dielectric stress the highest?
?
The dielectric stress (electric field intensity) is maximum at the surface of the conductor due to the cylindrical geometry.

#power-system / [[Cables]]

---
**Q.** How is the 'type' of a control system determined from its open-loop transfer function, $G(s)H(s)$?
?
The 'type' of the system is the number of poles of the open-loop transfer function located at the origin of the s-plane.

#control-systems / [[Steady-State Error]]

---
**Q.** What is the maximum theoretical efficiency of a Class A transformer-coupled power amplifier?
?
The maximum possible efficiency is 50%.

#analog-electronics / [[Power Amplifiers]]

---
**Q.** State the Divergence Theorem, which relates the flux of a vector field through a closed surface to the divergence of the field in the volume enclosed.
?
$$
\boxed{\quad \oint_S \vec{F} \cdot d\vec{S} = \int_V (\nabla \cdot \vec{F}) dV \quad}
$$
It converts a surface integral into a volume integral.

#mathematics / [[Vector Calculus]]

---
**Q.** In a purely inductive AC circuit, what is the phase relationship between the current and the voltage?
?
The current lags the voltage by 90 degrees ($\pi/2$ radians).

#electric-circuits / [[AC Circuits]]

---
**Q.** In a purely capacitive AC circuit, what is the phase relationship between the current and the voltage?
?
The current leads the voltage by 90 degrees ($\pi/2$ radians).

#electric-circuits / [[AC Circuits]]

---
**Q.** For a single-line-to-ground (SLG) fault on phase 'a' of a power system, what is the relationship between the sequence currents ($I_{a0}, I_{a1}, I_{a2}$)?
?
For an SLG fault, the positive, negative, and zero sequence currents at the fault location are equal.
$$
\boxed{\quad I_{a1} = I_{a2} = I_{a0} = \frac{I_f}{3} \quad}
$$

#power-system / [[Fault Analysis]]

---
**Q.** A J-K flip-flop is said to be in the "toggle" mode when its inputs are?
?
The J-K flip-flop toggles its output state on each clock pulse when both inputs are high.
$$
\boxed{\quad J=1, K=1 \quad}
$$

#digital-electronics / [[Sequential Circuits]]

---
**Q.** What is the formula for the speed of propagation ($v$) of an electromagnetic wave in a lossless medium?
?
$$
\boxed{\quad v = \frac{1}{\sqrt{\mu \epsilon}} \quad}
$$
Where $\mu$ is the permeability and $\epsilon$ is the permittivity of the medium.

#electromagnetic-fields / [[Wave Propagation]]

---
**Q.** What is the total RMS output voltage of a single-phase full-bridge inverter that produces a square wave output from a DC input voltage of $V_s$?
?
For a square wave that alternates between $+V_s$ and $-V_s$, the RMS value is constant and equal to the DC input voltage.
$$
\boxed{\quad V_{rms} = V_s \quad}
$$

#power-electronics / [[Inverters]]

---
**Q.** How is the Gain Margin (GM) of a system determined from its Bode plot?
?
The Gain Margin is the negative of the magnitude (in dB) of the open-loop transfer function, measured at the phase crossover frequency ($\omega_{pc}$).
$$
\boxed{\quad \text{GM (in dB)} = -20 \log_{10}|G(j\omega_{pc})H(j\omega_{pc})| \quad}
$$

#control-systems / [[Frequency Response]]

---
**Q.** The phenomenon of "crawling" in an induction motor, where it runs at a stable speed of about one-seventh of its synchronous speed, is caused by what?
?
Crawling is caused by the presence of odd space harmonics (especially the 7th harmonic) in the air gap flux wave produced by the stator winding.

#electrical-machines / [[Induction Motors]]

---
**Q.** What is the primary function of a Buchholz relay in a power system?
?
It is a gas-actuated relay installed in oil-immersed transformers to protect them against all internal faults, such as incipient winding faults, core faults, and oil leakage.

#power-system / [[Protective Relays]]

---
**Q.** What is the Early effect (or base-width modulation) in a Bipolar Junction Transistor (BJT)?
?
It is the effect of the variation in the effective base width due to a change in the collector-base junction voltage. It causes the collector current to be slightly dependent on the collector-emitter voltage in the active region.

#analog-electronics / [[Transistors]]

---
**Q.** For a causal and stable Linear Time-Invariant (LTI) system, where must all the poles of its transfer function $H(s)$ lie in the s-plane?
?
All poles must lie in the left-half of the s-plane (LHP).

#signals-and-systems / [[LTI Systems]]

---
**Q.** State the formula for the coefficient of coupling ($k$) between two magnetically coupled coils.
?
$$
\boxed{\quad k = \frac{M}{\sqrt{L_1 L_2}} \quad}
$$
Where $M$ is the mutual inductance, and $L_1$ and $L_2$ are the self-inductances of the coils. The value of $k$ ranges from 0 to 1.

#electric-circuits / [[Magnetically Coupled Circuits]]

---
**Q.** What is the minimum number of flip-flops ($m$) required to construct a MOD-N synchronous counter?
?
The minimum number of flip-flops required is the smallest integer 'm' that satisfies the condition:
$$
\boxed{\quad 2^m \ge N \quad}
$$

#digital-electronics / [[Sequential Circuits]]

---
**Q.** State Stokes' Theorem, which relates the circulation of a vector field around a closed loop to the flux of its curl through the surface enclosed by the loop.
?
$$
\boxed{\quad \oint_L \vec{F} \cdot d\vec{l} = \int_S (\nabla \times \vec{F}) \cdot d\vec{S} \quad}
$$
It converts a line integral into a surface integral.

#mathematics / [[Vector Calculus]]

---
**Q.** A system with a transfer function that has one or more poles in the right-half of the s-plane is classified as what?
?
Unstable.

#control-systems / [[Stability]]

---
**Q.** The "V-curves" for a synchronous motor are plots of which two quantities?
?
The V-curves are plots of the armature current ($I_a$) on the y-axis versus the field current ($I_f$) on the x-axis, for various constant mechanical loads.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the primary purpose of adding a series capacitor to a long high-voltage transmission line?
?
To compensate for the line's series inductive reactance ($X_L$). This reduces the total series impedance, increases the power transfer capability, and improves voltage stability.

#power-system / [[FACTS Devices]]

---
**Q.** The input impedance and output impedance of an ideal operational amplifier are?
?
- Input Impedance ($Z_{in}$) = Infinite ($\infty$)
- Output Impedance ($Z_{out}$) = Zero (0)

#analog-electronics / [[Operational Amplifiers]]

---
**Q.** The time period ($T$) of a sinusoidal AC waveform is related to its frequency ($f$) by which formula?
?
The period is the reciprocal of the frequency.
$$
\boxed{\quad T = \frac{1}{f} \quad}
$$

#electric-circuits / [[AC Circuits]]

---
**Q.** How is the 2's complement of a binary number calculated?
?
By inverting all the bits (taking the 1's complement) and then adding 1 to the result.

#digital-electronics / [[Number Systems]]

---
**Q.** What is the value of the intrinsic impedance of free space ($\eta_0$)?
?
The intrinsic impedance of free space is a physical constant.
$$
\boxed{\quad \eta_0 = \sqrt{\frac{\mu_0}{\epsilon_0}} \approx 120\pi \approx 377 \, \Omega \quad}
$$

#electromagnetic-fields / [[Wave Propagation]]

---
**Q.** What is the main function of a freewheeling diode used across an inductive load in a power electronics converter?
?
It provides a continuous path for the current in the inductive load when the main switching device is turned off. This prevents the development of high voltage spikes across the switch and allows the stored energy in the inductor to dissipate safely.

#power-electronics / [[Diodes]]

---
