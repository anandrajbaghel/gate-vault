---
tags:
  - formula
---
**Q.** State the formula for the synchronous speed ($N_s$) of an AC machine.
?
$$
\boxed{\quad N_s = \frac{120 \times f}{P} \quad}
$$
Where:
- $N_s$ = Synchronous speed in Revolutions Per Minute (RPM)
- $f$ = Supply frequency in Hertz (Hz)
- $P$ = Number of poles

#electrical-machines / [[Synchronous Machines]] & [[Induction Motors]]

---
**Q.** How is the slip ($s$) of an induction motor defined?
?
$$
\boxed{\quad s = \frac{N_s - N_r}{N_s} \quad}
$$
Where:
- $N_s$ = Synchronous speed
- $N_r$ = Rotor speed

#electrical-machines / [[Induction Motors]]

---
**Q.** What is the relationship between the line voltage ($V_L$) and phase voltage ($V_{ph}$) in a star-connected three-phase system?
?
$$
\boxed{\quad V_L = \sqrt{3} V_{ph} \quad}
$$
And the line current ($I_L$) is equal to the phase current ($I_{ph}$).

#electric-circuits / [[Three-Phase Circuits]]

---
**Q.** What is the relationship between the line current ($I_L$) and phase current ($I_{ph}$) in a delta-connected three-phase system?
?
$$
\boxed{\quad I_L = \sqrt{3} I_{ph} \quad}
$$
And the line voltage ($V_L$) is equal to the phase voltage ($V_{ph}$).

#electric-circuits / [[Three-Phase Circuits]]

---
**Q.** Write the EMF equation for a transformer.
?
$$
\boxed{\quad E = 4.44 \times f \times N \times \phi_m \quad}
$$
Where:
- $E$ = RMS value of induced EMF (in Volts)
- $f$ = Frequency of AC supply (in Hz)
- $N$ = Number of turns in the winding
- $\phi_m$ = Maximum flux in the core (in Webers, Wb)

#electrical-machines / [[Transformers]]

---
**Q.** For a DC shunt motor, how is the torque ($T$) related to the armature current ($I_a$)?
?
In a DC shunt motor, the field flux ($\phi$) is practically constant. Since torque is proportional to the product of flux and armature current ($T \propto \phi I_a$), the torque is directly proportional to the armature current.
$$
\boxed{\quad T \propto I_a \quad}
$$

#electrical-machines / [[Principle of Operation of DC Motors]]

---
**Q.** For a DC series motor, what is the relationship between torque ($T$) and armature current ($I_a$) before saturation?
?
In a DC series motor, the field flux ($\phi$) is produced by the armature current, so $\phi \propto I_a$. Given that torque $T \propto \phi I_a$, the torque is proportional to the square of the armature current.
$$
\boxed{\quad T \propto I_a^2 \quad}
$$

#electrical-machines / [[Principle of Operation of DC Motors]]

---
**Q.** What is the formula for the resonant frequency ($f_0$) of a series RLC circuit?
?
$$
\boxed{\quad f_0 = \frac{1}{2\pi\sqrt{LC}} \quad}
$$
Where:
- $L$ = Inductance in Henries (H)
- $C$ = Capacitance in Farads (F)

#electric-circuits / [[Resonance]]

---
**Q.** According to Ohm's Law, how is voltage ($V$) related to current ($I$) and resistance ($R$)?
?
$$
\boxed{\quad V = I \times R \quad}
$$
Voltage is directly proportional to both current and resistance.

#electric-circuits / [[Ohm's Law]]

---
**Q.** What is the formula for the time constant ($\tau$) of a series RC circuit?
?
$$
\boxed{\quad \tau = R \times C \quad}
$$
Where:
- $R$ = Resistance in Ohms ($\Omega$)
- $C$ = Capacitance in Farads (F)

#electric-circuits / [[Transients]]

---
**Q.** What is the formula for the time constant ($\tau$) of a series RL circuit?
?
$$
\boxed{\quad \tau = \frac{L}{R} \quad}
$$
Where:
- $L$ = Inductance in Henries (H)
- $R$ = Resistance in Ohms ($\Omega$)

#electric-circuits / [[Transients]]

---
**Q.** What is the formula for the average power ($P$) in a single-phase AC circuit?
?
$$
\boxed{\quad P = V_{rms} \times I_{rms} \times \cos(\theta) \quad}
$$
Where:
- $V_{rms}$ = RMS value of voltage
- $I_{rms}$ = RMS value of current
- $\cos(\theta)$ = Power factor

#electric-circuits / [[AC Power Analysis]]

---
**Q.** How is the speed of a DC motor related to back EMF ($E_b$) and flux ($\phi$)?
?
The speed ($N$) of a DC motor is directly proportional to the back EMF and inversely proportional to the flux per pole.
$$
\boxed{\quad N \propto \frac{E_b}{\phi} \quad}
$$

#electrical-machines / [[Principle of Operation of DC Motors]]

---
**Q.** State the voltage transformation ratio (K) of a transformer.
?
$$
\boxed{\quad K = \frac{V_2}{V_1} = \frac{E_2}{E_1} = \frac{N_2}{N_1} \quad}
$$
Where V, E, and N are the voltage, EMF, and number of turns respectively, with subscripts 1 for primary and 2 for secondary.

#electrical-machines / [[Transformers]]

---
**Q.** What is the formula for the output of a Linear Time-Invariant (LTI) system?
?
The output $y(t)$ is the convolution of the input signal $x(t)$ with the system's impulse response $h(t)$.
$$
\boxed{\quad y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau)h(t-\tau)d\tau \quad}
$$

#signals-and-systems / [[LTI Systems]]

---
**Q.** Write down the final value theorem of Laplace Transform.
?
If the Laplace transform of a function $f(t)$ is $F(s)$, then the final value is given by:
$$
\boxed{\quad \lim_{t \to \infty} f(t) = \lim_{s \to 0} sF(s) \quad}
$$
This is applicable only if all poles of $sF(s)$ lie in the left-half of the s-plane.

#mathematics / [[The Laplace Transform]]

---
**Q.** Write down the initial value theorem of Laplace Transform.
?
If the Laplace transform of a function $f(t)$ is $F(s)$, then the initial value is given by:
$$
\boxed{\quad \lim_{t \to 0} f(t) = \lim_{s \to \infty} sF(s) \quad}
$$

#mathematics / [[The Laplace Transform]]

---
**Q.** What is the transfer function of a standard second-order system?
?
$$
\boxed{\quad T(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} \quad}
$$
Where:
- $\omega_n$ = Natural frequency
- $\zeta$ = Damping ratio

#control-systems / [[Second-Order Systems]]

---
**Q.** How is the steady-state error ($e_{ss}$) calculated for a unity feedback system?
?
$$
\boxed{\quad e_{ss} = \lim_{s \to 0} \frac{s R(s)}{1 + G(s)} \quad}
$$
Where:
- $R(s)$ is the Laplace transform of the input signal.
- $G(s)$ is the open-loop transfer function.

#control-systems / [[Steady-State Error]]

---
**Q.** State Gauss's law for electric fields in its integral form.
?
The net electric flux through any closed surface is equal to the total charge enclosed divided by the permittivity of the medium.
$$
\boxed{\quad \oint_S \vec{D} \cdot d\vec{S} = Q_{enc} \quad}
$$
Where $\vec{D}$ is the electric flux density and $Q_{enc}$ is the enclosed charge.

#electromagnetic-fields / [[Gauss's Law]]

---
**Q.** State Ampere's circuital law in its integral form for magnetostatics.
?
The line integral of the magnetic field intensity $\vec{H}$ around any closed path is equal to the direct current enclosed by that path.
$$
\boxed{\quad \oint_L \vec{H} \cdot d\vec{l} = I_{enc} \quad}
$$

#electromagnetic-fields / [[Ampere's Law]]

---
**Q.** What is the formula for the characteristic impedance ($Z_0$) of a lossless transmission line?
?
$$
\boxed{\quad Z_0 = \sqrt{\frac{L}{C}} \quad}
$$
Where:
- $L$ = Inductance per unit length
- $C$ = Capacitance per unit length

#electromagnetic-fields / [[Transmission Lines]]

---
**Q.** What is the formula for Surge Impedance Loading (SIL) of a transmission line?
?
$$
\boxed{\quad \text{SIL} = \frac{V_{rated}^2}{Z_0} \quad}
$$
Where:
- $V_{rated}$ = Rated line voltage
- $Z_0$ = Characteristic impedance of the line

#power-system / [[Transmission Lines]]

---
**Q.** Write the swing equation, which describes the rotor dynamics of a synchronous machine.
?
$$
\boxed{\quad M \frac{d^2\delta}{dt^2} = P_m - P_e \quad}
$$
Where:
- $M$ = Inertia constant
- $\delta$ = Rotor angle
- $P_m$ = Mechanical power input
- $P_e$ = Electrical power output

#power-system / [[Power System Stability]]

---
**Q.** For a lossless transmission line, what is the formula for the propagation velocity ($v_p$)?
?
$$
\boxed{\quad v_p = \frac{1}{\sqrt{LC}} \quad}
$$
Where:
- $L$ = Inductance per unit length
- $C$ = Capacitance per unit length

#electromagnetic-fields / [[Transmission Lines]]

---
**Q.** What is the formula for the voltage gain of an ideal non-inverting operational amplifier?
?
$$
\boxed{\quad A_v = \frac{V_{out}}{V_{in}} = 1 + \frac{R_f}{R_1} \quad}
$$
Where:
- $R_f$ is the feedback resistor.
- $R_1$ is the resistor connected to the inverting input.

#analog-electronics / [[Operational Amplifiers]]

---
**Q.** What is the formula for the voltage gain of an ideal inverting operational amplifier?
?
$$
\boxed{\quad A_v = \frac{V_{out}}{V_{in}} = -\frac{R_f}{R_{in}} \quad}
$$
Where:
- $R_f$ is the feedback resistor.
- $R_{in}$ is the input resistor.

#analog-electronics / [[Operational Amplifiers]]

---
**Q.** State the Shockley diode equation.
?
$$
\boxed{\quad I = I_s \left( e^{\frac{V_D}{nV_T}} - 1 \right) \quad}
$$
Where:
- $I$ = Diode current
- $I_s$ = Reverse saturation current
- $V_D$ = Voltage across the diode
- $n$ = Ideality factor
- $V_T$ = Thermal voltage

#analog-electronics / [[Diodes]]

---
**Q.** In a Bipolar Junction Transistor (BJT), how are the currents ($I_E$, $I_B$, $I_C$) related?
?
The emitter current is the sum of the base current and the collector current.
$$
\boxed{\quad I_E = I_B + I_C \quad}
$$

#analog-electronics / [[Transistors]]

---
**Q.** How is the collector current ($I_C$) related to the base current ($I_B$) in a BJT?
?
$$
\boxed{\quad I_C = \beta I_B \quad}
$$
Where $\beta$ is the common-emitter current gain.

#analog-electronics / [[Transistors]]

---
**Q.** How is the collector current ($I_C$) related to the emitter current ($I_E$) in a BJT?
?
$$
\boxed{\quad I_C = \alpha I_E \quad}
$$
Where $\alpha$ is the common-base current gain.

#analog-electronics / [[Transistors]]

---
**Q.** What is the formula for the quality factor (Q) of a series RLC circuit at resonance?
?
$$
\boxed{\quad Q = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 CR} = \frac{1}{R}\sqrt{\frac{L}{C}} \quad}
$$
Where $\omega_0$ is the resonant angular frequency.

#electric-circuits / [[Resonance]]

---
**Q.** What is the formula for the per-unit (p.u.) value of an electrical quantity?
?
$$
\boxed{\quad \text{Per-unit value} = \frac{\text{Actual value}}{\text{Base value}} \quad}
$$

#power-system / [[Per-Unit System]]

---
**Q.** State De Morgan's first theorem in Boolean algebra.
?
The complement of a logical AND is the logical OR of the complements.
$$
\boxed{\quad \overline{A \cdot B} = \overline{A} + \overline{B} \quad}
$$

#digital-electronics / [[Boolean Algebra and Logic Gates|Boolean Algebra]]

---
**Q.** State De Morgan's second theorem in Boolean algebra.
?
The complement of a logical OR is the logical AND of the complements.
$$
\boxed{\quad \overline{A + B} = \overline{A} \cdot \overline{B} \quad}
$$

#digital-electronics / [[Boolean Algebra and Logic Gates|Boolean Algebra]]

---
**Q.** What is the formula relating the rise time ($t_r$) and the 3-dB bandwidth (BW) of a first-order system?
?
$$
\boxed{\quad t_r \approx \frac{0.35}{\text{BW}} \quad}
$$

#control-systems / [[First-Order Systems]]

---
**Q.** What is the formula for the peak time ($t_p$) of an underdamped second-order system?
?
$$
\boxed{\quad t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}} \quad}
$$
Where $\omega_d$ is the damped natural frequency.

#control-systems / [[Second-Order Systems]]

---
**Q.** How is the percentage overshoot (%OS) related to the damping ratio ($\zeta$) for a second-order system?
?
$$
\boxed{\quad \%OS = 100 \times e^{\frac{-\zeta\pi}{\sqrt{1-\zeta^2}}} \quad}
$$

#control-systems / [[Second-Order Systems]]

---
**Q.** What is the formula for the energy stored in an inductor ($L$)?
?
$$
\boxed{\quad W_L = \frac{1}{2} L I^2 \quad}
$$
Where $I$ is the current flowing through the inductor.

#electric-circuits / [[Inductors]]

---
**Q.** What is the formula for the energy stored in a capacitor ($C$)?
?
$$
\boxed{\quad W_C = \frac{1}{2} C V^2 \quad}
$$
Where $V$ is the voltage across the capacitor.

#electric-circuits / [[Capacitors]]

---
**Q.** State the Fourier Transform of a unit impulse signal $\delta(t)$.
?
$$
\boxed{\quad \mathcal{F}\{\delta(t)\} = 1 \quad}
$$

#signals-and-systems / [[Fourier Transforms]]

---
**Q.** State the inverse relationship between the common-base current gain ($\alpha$) and the common-emitter current gain ($\beta$) of a BJT.
?
$$
\boxed{\quad \alpha = \frac{\beta}{1+\beta} \quad \text{and} \quad \beta = \frac{\alpha}{1-\alpha} \quad}
$$

#analog-electronics / [[Transistors]]

---
**Q.** What is the formula for the drain current ($I_D$) of an n-channel MOSFET in the saturation region?
?
$$
\boxed{\quad I_D = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2 \quad}
$$
Where:
- $\mu_n C_{ox}$ = Process transconductance parameter
- $W/L$ = Aspect ratio of the device
- $V_{GS}$ = Gate-to-Source voltage
- $V_{th}$ = Threshold voltage

#analog-electronics / [[Transistors]]

---
**Q.** In a power system, how is the fault level (MVA) related to the per-unit impedance ($Z_{pu}$)?
?
$$
\boxed{\quad \text{Fault MVA} = \frac{\text{Base MVA}}{Z_{pu}} \quad}
$$
Where $Z_{pu}$ is the Thevenin impedance at the point of fault.

#power-system / [[Fault Analysis]]

---
**Q.** What is the formula for the duty cycle ($D$) of a boost converter?
?
$$
\boxed{\quad V_{out} = \frac{V_{in}}{1-D} \quad \implies \quad D = 1 - \frac{V_{in}}{V_{out}} \quad}
$$
Where $V_{in}$ is the input voltage and $V_{out}$ is the output voltage.

#power-electronics / [[DC-DC Converters]]

---
**Q.** What is the formula for the duty cycle ($D$) of a buck converter?
?
$$
\boxed{\quad V_{out} = D \times V_{in} \quad \implies \quad D = \frac{V_{out}}{V_{in}} \quad}
$$
Where $V_{in}$ is the input voltage and $V_{out}$ is the output voltage.

#power-electronics / [[DC-DC Converters]]

---
**Q.** How is the power ($P$) transmitted by a synchronous generator related to the power angle ($\delta$)?
?
For a cylindrical rotor machine, neglecting resistance, the power is proportional to the sine of the power angle.
$$
\boxed{\quad P = \frac{|E_f||V_t|}{X_s} \sin(\delta) \quad}
$$
Where:
- $|E_f|$ = Excitation EMF magnitude
- $|V_t|$ = Terminal voltage magnitude
- $X_s$ = Synchronous reactance

#electrical-machines / [[Synchronous Machines]]

---
**Q.** For an ideal diode, what is its resistance in forward bias and reverse bias?
?
- Forward Bias Resistance: $R_f = 0$
- Reverse Bias Resistance: $R_r = \infty$

#analog-electronics / [[Diodes]]

---
**Q.** State the formula for the Poynting vector ($\vec{S}$).
?
The Poynting vector represents the directional energy flux density of an electromagnetic field.
$$
\boxed{\quad \vec{S} = \vec{E} \times \vec{H} \quad}
$$
Where $\vec{E}$ is the electric field and $\vec{H}$ is the magnetic field intensity.

#electromagnetic-fields / [[Poynting Vector]]

---
**Q.** What is the relationship between the number of nodes (N), branches (B), and independent loops (L) in a network?
?
$$
\boxed{\quad L = B - N + 1 \quad}
$$

#electric-circuits / [[Network Topology]]

---
