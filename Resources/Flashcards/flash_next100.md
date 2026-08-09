---
about:
  - 100 frequently used formula after
  - "[[flash_top100]]"
tags:
  - next100
---
### Electrical Circuits (Continued)

**Q.** In a transient analysis, how does an uncharged capacitor behave at the instant a switch is closed ($t=0^+$)?
?
An uncharged capacitor behaves like a short circuit ($V_C=0$) at $t=0^+$ because the voltage across it cannot change instantaneously.

#electric-circuits / [[Transients]]

---
**Q.** How does an inductor with no initial current behave at the instant a switch is closed (t=0+)?
?
An inductor with no initial current behaves like an open circuit ($I_L=0$) at t=0+ because the current through it cannot change instantaneously.

#electric-circuits / [[Transients]]

---
**Q.** What is the Laplace domain equivalent impedance of an inductor L with an initial current of $I_0$?
?
The inductor is represented by an impedance $sL$ in series with a voltage source $L I_0$.
$$
\boxed{\quad V(s) = sLI(s) - LI_0 \quad}
$$

#electric-circuits / [[Laplace Transforms in Circuits]]

---
**Q.** What is the formula for the bandwidth (BW) of a series RLC resonant circuit?
?
$$
\boxed{\quad BW = f_2 - f_1 = \frac{R}{2\pi L} = \frac{f_0}{Q} \quad}
$$
Where $f_0$ is the resonant frequency and Q is the quality factor.

#electric-circuits / [[Resonance]]

---
**Q.** In a two-port network, how are the Z-parameters (Impedance parameters) defined?
?
$$
\begin{align}
V_1 &= Z_{11}I_1 + Z_{12}I_2 \\
V_2 &= Z_{21}I_1 + Z_{22}I_2
\end{align}
$$
They are called open-circuit parameters because they are measured with one of the ports open-circuited ($I_1=0$ or $I_2=0$).

#electric-circuits / [[Two-Port Networks]]

---
**Q.** How are the Y-parameters (Admittance parameters) of a two-port network defined?
?
$$
\begin{align}
I_1 &= Y_{11}V_1 + Y_{12}V_2 \\
I_2 &= Y_{21}V_1 + Y_{22}V_2
\end{align}
$$
They are called short-circuit parameters because they are measured with one of the ports short-circuited ($V_1=0$ or $V_2=0$).

#electric-circuits / [[Two-Port Networks]]

---
**Q.** For a two-port network to be reciprocal, what condition must its parameters satisfy?
?
- For Z-parameters: $Z_{12} = Z_{21}$
- For Y-parameters: $Y_{12} = Y_{21}$
- For ABCD-parameters: $AD - BC = 1$

#electric-circuits / [[Two-Port Networks]]

---
**Q.** For a two-port network to be symmetrical, what condition must its parameters satisfy?
?
- For Z-parameters: $Z_{11} = Z_{22}$
- For Y-parameters: $Y_{11} = Y_{22}$
- For ABCD-parameters: $A = D$

#electric-circuits / [[Two-Port Networks]]

---
**Q.** What is the formula for the RMS value of a periodic current waveform $i(t)$ composed of a DC component $I_0$ and several AC harmonic components with RMS values $I_1, I_2, ...$?
?
$$
\boxed{\quad I_{rms} = \sqrt{I_0^2 + I_1^2 + I_2^2 + \dots + I_n^2} \quad}
$$

#electric-circuits / [[AC Circuits]]

---
### Electrical Machines (Continued)

**Q.** What is the formula for the slip at which maximum torque occurs ($s_{T_{max}}$) in an induction motor?
?
The slip for maximum torque is the ratio of rotor resistance to standstill rotor reactance.
$$
\boxed{\quad s_{T_{max}} = \frac{R_2}{X_2} \quad}
$$

#electrical-machines / [[Induction Motors]]

---
**Q.** The V-curves and Inverted V-curves of a synchronous motor are plots of which quantities?
?
- **V-curves:** Armature Current ($I_a$) vs. Field Current ($I_f$) at constant load.
- **Inverted V-curves:** Power Factor (PF) vs. Field Current ($I_f$) at constant load.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the formula for the synchronizing power ($P_{syn}$) of a synchronous alternator?
?
$$
\boxed{\quad P_{syn} = \frac{d P}{d \delta} = \frac{|E_f||V_t|}{X_s} \cos(\delta) \quad}
$$
It indicates the machine's ability to remain in synchronism.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the primary condition for the satisfactory parallel operation of two single-phase transformers?
?
The transformers must have the same voltage ratio and the same per-unit impedance. A slight difference in voltage ratio is permissible, but the per-unit impedances should be nearly equal for proper load sharing.

#electrical-machines / [[Transformers]]

---
**Q.** What is the formula for the saving in copper in an autotransformer compared to a two-winding transformer with the same rating?
?
$$
\boxed{\quad \text{Copper Saving} = K \times (\text{Copper in a two-winding transformer}) \quad}
$$
Where $K$ is the transformation ratio ($V_2/V_1$).

#electrical-machines / [[Transformers]]

---
**Q.** In the speed control of a DC shunt motor, how is speed ($N$) related to armature resistance ($R_a$) and field flux ($\phi$)?
?
- **Armature Control:** $N \propto V - I_a R_a$ (Speed decreases as added series resistance increases).
- **Field Control:** $N \propto 1/\phi$ (Speed increases as field flux is weakened).

#electrical-machines / [[DC Machines]]

---
**Q.** What is armature reaction in a DC machine?
?
It is the effect of the magnetic field set up by the armature current on the distribution of flux under the main poles. It causes flux distortion and has a demagnetizing effect.

#electrical-machines / [[DC Machines]]

---
**Q.** What causes the phenomena of "cogging" and "crawling" in induction motors?
?
- **Cogging (Magnetic Locking):** Caused by the number of stator slots being equal to or an integral multiple of the rotor slots, leading to failure to start.
- **Crawling:** Caused by space harmonics in the air gap flux, causing the motor to run at a sub-synchronous speed (typically 1/7th of $N_s$).

#electrical-machines / [[Induction Motors]]

---
**Q.** What are the two main purposes of the damper windings in a synchronous machine?
?
1.  To dampen rotor oscillations (hunting).
2.  To provide starting torque for synchronous motors (acting like a squirrel-cage induction motor during start-up).

#electrical-machines / [[Synchronous Machines]]

---
**Q.** For a stepper motor, what is the formula for the step angle ($\alpha$)?
?
$$
\boxed{\quad \alpha = \frac{N_s - N_r}{N_s \cdot N_r} \times 360^\circ \quad}
$$
Where $N_s$ is the number of stator poles (or teeth) and $N_r$ is the number of rotor teeth.

#electrical-machines / [[Special Machines]]

---
### Power Systems (Continued)

**Q.** In the Newton-Raphson load flow method, what is the size of the Jacobian matrix for a system with N buses, where Bus 1 is the slack bus and there are $N_g$ generator buses?
?
The size of the Jacobian matrix is:
$$
\boxed{\quad [ (N-1) + (N - 1 - N_g) ] \times [ (N-1) + (N - 1 - N_g) ] \quad}
$$
This corresponds to the unknown variables ($\Delta\delta$ and $\Delta|V|/|V|$).

#power-system / [[Load Flow Studies]]

---
**Q.** What is the formula for the per-unit fault current ($I_{f(pu)}$) for a single-line-to-ground (SLG) fault?
?
$$
\boxed{\quad I_{f(pu)} = \frac{3 \cdot E_{a(pu)}}{Z_1 + Z_2 + Z_0 + 3Z_f} \quad}
$$
Where $Z_1, Z_2, Z_0$ are the sequence impedances and $Z_f$ is the fault impedance.

#power-system / [[Fault Analysis]]

---
**Q.** For a line-to-line (LL) fault, what is the formula for the fault current ($I_{f(pu)}$)?
?
$$
\boxed{\quad I_{f(pu)} = \frac{\sqrt{3} \cdot E_{a(pu)}}{Z_1 + Z_2 + Z_f} \quad}
$$

#power-system / [[Fault Analysis]]

---
**Q.** What does the Equal Area Criterion state for power system stability?
?
For the system to be stable, the accelerating area ($A_1$) during a fault must be less than or equal to the maximum available decelerating area ($A_2$) after the fault is cleared.
$$
\boxed{\quad A_1 \le A_2 \quad}
$$

#power-system / [[Classification of Power System Stability|Power System Stability]]

---
**Q.** What is the Ferranti effect in long transmission lines?
?
It is the phenomenon where the receiving-end voltage ($V_r$) becomes greater than the sending-end voltage ($V_s$) under no-load or light-load conditions, due to the charging current flowing through the line inductance.

#power-system / [[Transmission Lines]]

---
**Q.** What is the formula for the inductance of a single-phase two-wire transmission line?
?
$$
\boxed{\quad L = \frac{\mu_0}{\pi} \ln\left(\frac{d}{r'}\right) \quad \text{H/m} \quad}
$$
Where $d$ is the distance between conductors and $r'$ is the geometric mean radius ($r' = r e^{-1/4}$).

#power-system / [[Transmission Lines]]

---
**Q.** What is the formula for the capacitance of a single-phase two-wire transmission line?
?
$$
\boxed{\quad C = \frac{\pi \epsilon_0}{\ln(d/r)} \quad \text{F/m} \quad}
$$
Where $d$ is the distance between conductors and $r$ is the radius of each conductor.

#power-system / [[Transmission Lines]]

---
**Q.** What is the formula for insulation resistance of a single-core cable?
?
$$
\boxed{\quad R_{ins} = \frac{\rho}{2\pi l} \ln\left(\frac{R}{r}\right) \quad}
$$
Where $\rho$ is the resistivity of the insulation, $l$ is the cable length, $R$ is the outer radius, and $r$ is the inner radius. Note that resistance is inversely proportional to length.

#power-system / [[Cables]]

---
**Q.** What is the primary application of a Mho relay in transmission line protection?
?
A Mho relay is a high-speed directional relay primarily used for the protection of long transmission lines against phase faults, as it is less affected by power swings.

#power-system / [[Protective Relays]]

---
### Control Systems (Continued)

**Q.** What is the condition for a system to be stable according to the Routh-Hurwitz stability criterion?
?
For a system to be stable, all the elements in the first column of the Routh array must have the same sign (and be non-zero).

#control-systems / [[Stability]]

---
**Q.** How are the breakaway and break-in points determined in a root locus plot?
?
They are the solutions to the equation:
$$
\boxed{\quad \frac{dK}{ds} = 0 \quad}
$$
Where K is the gain, expressed as a function of 's' from the characteristic equation.

#control-systems / [[Breakaway and Break-in Points]]

---
**Q.** What is the formula for the angle of departure of the root locus from a complex pole ($p_c$)?
?
$$
\boxed{\quad \theta_{dep} = 180^\circ - (\sum \text{angles from other poles}) + (\sum \text{angles from zeros}) \quad}
$$

#control-systems / [[Angle of Departure and Angle of Arrival]]

---
**Q.** What does a slope of -40 dB/decade on a Bode magnitude plot indicate?
?
It indicates the presence of two poles or a double pole at the origin. In general, a slope of $-20n$ dB/decade indicates 'n' poles.

#control-systems / [[Frequency Response]]

---
**Q.** What is the purpose of a lead compensator in a control system?
?
A lead compensator is used to improve the transient response of a system. It adds positive phase margin, which increases the damping and speed of the response.

#control-systems / [[Lead Compensator]]

---
**Q.** What is the purpose of a lag compensator in a control system?
?
A lag compensator is used to improve the steady-state accuracy of a system by increasing the low-frequency gain, without significantly affecting the transient response.

#control-systems / [[Lag Compensator]]

---
**Q.** What is the formula for the transfer function $G(s)$ from a state-space model ($A, B, C, D$)?
?
$$
\boxed{\quad G(s) = C(sI - A)^{-1}B + D \quad}
$$
Where $I$ is the identity matrix.

#control-systems / [[Transfer Function from State Space Model]]

---
**Q.** What is the formula for the Controllability Matrix ($Q_c$)?
?
$$
\boxed{\quad Q_c = [B \quad AB \quad A^2B \quad \dots \quad A^{n-1}B] \quad}
$$
The system is controllable if the rank of $Q_c$ is equal to the order of the system (n).

#control-systems / [[Controllability]]

---
**Q.** What is the formula for the Observability Matrix ($Q_o$)?
?
$$
\boxed{\quad Q_o = [C^T \quad A^T C^T \quad (A^T)^2 C^T \quad \dots \quad (A^T)^{n-1} C^T]^T \quad}
$$
The system is observable if the rank of $Q_o$ is equal to the order of the system (n).

#control-systems / [[Observability]]

---
### Analog & Digital Electronics (Continued)

**Q.** What is the maximum theoretical efficiency of a half-wave rectifier and a full-wave rectifier?
?
- **Half-Wave Rectifier:** 40.6%
- **Full-Wave Rectifier (Center-tapped or Bridge):** 81.2%

#analog-electronics / [[Rectifiers]]

---
**Q.** What is the primary function of a clamper circuit?
?
A clamper circuit adds a DC level to an AC signal, effectively shifting the entire waveform up or down so that the positive or negative peak is "clamped" to a specific voltage level (often zero).

#analog-electronics / [[Diodes]]

---
**Q.** What are the conditions for a BJT to operate in the saturation region?
?
Both the base-emitter (BE) junction and the base-collector (BC) junction must be forward-biased. In this region, the transistor acts like a closed switch.

#analog-electronics / [[Transistors]]

---
**Q.** What are the conditions for a BJT to operate in the cut-off region?
?
Both the base-emitter (BE) junction and the base-collector (BC) junction must be reverse-biased. In this region, the transistor acts like an open switch.

#analog-electronics / [[Transistors]]

---
**Q.** State the Barkhausen criterion for sustained oscillations in an oscillator circuit.
?
For sustained oscillations, two conditions must be met:
1.  The magnitude of the loop gain ($|A\beta|$) must be unity (1).
2.  The total phase shift around the loop must be 0° or an integer multiple of 360°.

#analog-electronics / [[Oscillators]]

---
**Q.** How many comparators are required for an N-bit flash-type Analog-to-Digital Converter (ADC)?
?
A flash ADC requires ($2^N - 1$) comparators.

#digital-electronics / [[Data Converters]]

---
**Q.** What is the formula for the resolution of an N-bit Digital-to-Analog Converter (DAC)?
?
$$
\boxed{\quad \text{Resolution (Step Size)} = \frac{V_{ref}}{2^N} \quad}
$$
Where $V_{ref}$ is the full-scale reference voltage.

#digital-electronics / [[Data Converters]]

---
**Q.** What is the race-around condition in a JK flip-flop, and how is it avoided?
?
It is a condition where the output of the flip-flop toggles continuously during a single clock pulse when J=1, K=1, and the clock pulse width is greater than the propagation delay. It is avoided by using master-slave or edge-triggered flip-flops.

#digital-electronics / [[Sequential Circuits]]

---
**Q.** What are setup time and hold time for a flip-flop?
?
- **Setup Time ($t_{su}$):** The minimum time the data input must be stable *before* the active clock edge.
- **Hold Time ($t_h$):** The minimum time the data input must be stable *after* the active clock edge.

#digital-electronics / [[Sequential Circuits]]

---
**Q.** What is the primary advantage of a Schmitt trigger over a standard comparator?
?
A Schmitt trigger has two different threshold voltages (upper and lower), which creates hysteresis. This makes it highly immune to noise on the input signal and prevents false triggering.

#analog-electronics / [[Comparators]]

---
### Signals & Systems and EMT (Continued)

**Q.** What is the formula for the skin depth ($\delta$) of an electromagnetic wave in a good conductor?
?
$$
\boxed{\quad \delta = \frac{1}{\sqrt{\pi f \mu \sigma}} \quad}
$$
Where $f$ is frequency, $\mu$ is permeability, and $\sigma$ is conductivity. It is the depth at which the field amplitude decays to 1/e (about 37%) of its surface value.

#electromagnetic-fields / [[Wave Propagation]]

---
**Q.** State the time-shifting property of the Fourier Transform.
?
If $x(t) \leftrightarrow X(j\omega)$, then:
$$
\boxed{\quad x(t-t_0) \leftrightarrow e^{-j\omega t_0} X(j\omega) \quad}
$$
A shift in the time domain corresponds to a phase shift in the frequency domain.

#signals-and-systems / [[Fourier Transforms]]

---
**Q.** What are the conditions on the Region of Convergence (ROC) for the Laplace transform of a causal and stable LTI system?
?
For a system to be both causal and stable, all of its poles must lie in the left-half of the s-plane, and the ROC must include the entire right-half plane, including the $j\omega$ axis.

#signals-and-systems / [[The Laplace Transform]]

---
**Q.** State Biot-Savart's Law for the differential magnetic field ($d\vec{H}$) produced by a differential current element ($I d\vec{l}$).
?
$$
\boxed{\quad d\vec{H} = \frac{I d\vec{l} \times \vec{R}}{4\pi R^3} \quad}
$$
Where $\vec{R}$ is the vector from the current element to the point of interest.

#electromagnetic-fields / [[Magnetostatics]]

---
**Q.** What are the boundary conditions for the tangential component of the magnetic field ($\vec{H}$) at the interface of two different magnetic media?
?
$$
\boxed{\quad \vec{H}_{t1} - \vec{H}_{t2} = \vec{K} \quad}
$$
The difference in the tangential components is equal to the surface current density ($\vec{K}$). If no surface current exists, the tangential components are continuous ($\vec{H}_{t1} = \vec{H}_{t2}$).

#electromagnetic-fields / [[Magnetostatics]]

---
### Engineering Mathematics (Continued)

**Q.** What is the formula for the gradient of a scalar field V?
?
$$
\boxed{\quad \nabla V = \frac{\partial V}{\partial x}\hat{a}_x + \frac{\partial V}{\partial y}\hat{a}_y + \frac{\partial V}{\partial z}\hat{a}_z \quad}
$$
The gradient points in the direction of the maximum rate of increase of V.

#mathematics / [[Vector Calculus]]

---
**Q.** What is the formula for the divergence of a vector field $\vec{A} = A_x\hat{a}_x + A_y\hat{a}_y + A_z\hat{a}_z$?
?
$$
\boxed{\quad \nabla \cdot \vec{A} = \frac{\partial A_x}{\partial x} + \frac{\partial A_y}{\partial y} + \frac{\partial A_z}{\partial z} \quad}
$$
Divergence is a scalar quantity representing the net outward flux per unit volume.

#mathematics / [[Vector Calculus]]

---
**Q.** What is the formula for the curl of a vector field $\vec{A}$ in Cartesian coordinates?
?
$$
\boxed{\quad \nabla \times \vec{A} = \begin{vmatrix} \hat{a}_x & \hat{a}_y & \hat{a}_z \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ A_x & A_y & A_z \end{vmatrix} \quad}
$$
Curl is a vector quantity representing the circulation per unit area.

#mathematics / [[Vector Calculus]]

---
**Q.** What is the Rank of a matrix?
?
The rank of a matrix is the maximum number of linearly independent rows (or columns) in the matrix. It is also the dimension of the largest non-zero determinant of any square sub-matrix.

#mathematics / [[Linear Algebra]]

---
**Q.** What is the formula for the probability mass function of a Poisson distribution?
?
$$
\boxed{\quad P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!} \quad}
$$
Where $\lambda$ is the average number of events in an interval and $k$ is the number of occurrences. It models the probability of a given number of events occurring in a fixed interval of time or space.

#mathematics / [[Probability]]

---
