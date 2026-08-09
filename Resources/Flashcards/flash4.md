---
about:
  - Mixed formulas.
tags:
  - mix
---
**Q.** What is the formula for the Root Mean Square (RMS) value of a periodic waveform $f(t)$ with period T?
?
$$
\boxed{\quad F_{rms} = \sqrt{\frac{1}{T} \int_{0}^{T} [f(t)]^2 dt} \quad}
$$

#electric-circuits / [[AC Circuits]]

---
**Q.** How is the average power ($P$) in a purely resistive circuit related to the RMS voltage ($V_{rms}$) and resistance ($R$)?
?
$$
\boxed{\quad P = \frac{V_{rms}^2}{R} \quad}
$$
Power is directly proportional to the square of the RMS voltage and inversely proportional to the resistance.

#electric-circuits / [[AC Power Analysis]]

---
**Q.** State the formula for the capacitance ($C$) of a parallel plate capacitor.
?
$$
\boxed{\quad C = \frac{\epsilon A}{d} \quad}
$$
Where:
- $\epsilon$ = Permittivity of the dielectric material
- $A$ = Area of each plate
- $d$ = Distance between the plates

#electromagnetic-fields / [[Electrostatics]]

---
**Q.** What is the formula for the inductance ($L$) of a long solenoid?
?
$$
\boxed{\quad L = \frac{\mu N^2 A}{l} \quad}
$$
Where:
- $\mu$ = Permeability of the core material
- $N$ = Total number of turns
- $A$ = Cross-sectional area of the solenoid
- $l$ = Length of the solenoid

#electromagnetic-fields / [[Magnetostatics]]

---
**Q.** What is the relationship between the frequency of the rotor current ($f_r$) and the supply frequency ($f$) in an induction motor with slip ($s$)?
?
$$
\boxed{\quad f_r = s \times f \quad}
$$
The frequency of the rotor current is directly proportional to the slip and the supply frequency.

#electrical-machines / [[Induction Motors]]

---
**Q.** How is the maximum torque ($T_{max}$) of an induction motor related to the supply voltage ($V$)?
?
The maximum torque is directly proportional to the square of the supply voltage.
$$
\boxed{\quad T_{max} \propto V^2 \quad}
$$

#electrical-machines / [[Induction Motors]]

---
**Q.** What is the condition for maximum efficiency of a transformer?
?
Maximum efficiency occurs when the variable losses (Copper Loss, $P_{cu}$) are equal to the constant losses (Iron Loss, $P_i$).
$$
\boxed{\quad P_{cu} = P_i \quad}
$$

#electrical-machines / [[Transformers]]

---
**Q.** According to Steinmetz's formula, how is hysteresis loss ($P_h$) in a magnetic material related to frequency ($f$) and maximum flux density ($B_m$)?
?
$$
\boxed{\quad P_h \propto B_m^x \cdot f \quad}
$$
Where 'x' is the Steinmetz exponent, typically between 1.5 and 2.5.

#electrical-machines / [[Transformers]]

---
**Q.** How are eddy current losses ($P_e$) related to the frequency ($f$) and maximum flux density ($B_m$) of the alternating magnetic field?
?
Eddy current losses are proportional to the square of the frequency and the square of the maximum flux density.
$$
\boxed{\quad P_e \propto B_m^2 \cdot f^2 \quad}
$$

#electrical-machines / [[Transformers]]

---
**Q.** What is the formula for the Form Factor of an AC waveform?
?
$$
\boxed{\quad \text{Form Factor} = \frac{\text{RMS Value}}{\text{Average Value}} \quad}
$$
For a sinusoidal waveform, this value is approximately 1.11.

#electric-circuits / [[AC Circuits]]

---
**Q.** What is the formula for the Crest Factor (or Peak Factor) of an AC waveform?
?
$$
\boxed{\quad \text{Crest Factor} = \frac{\text{Peak Value}}{\text{RMS Value}} \quad}
$$
For a sinusoidal waveform, this value is $\sqrt{2}$ (approximately 1.414).

#electric-circuits / [[AC Circuits]]

---
**Q.** What is the formula for the centroid of the asymptotes in a root locus plot?
?
$$
\boxed{\quad \sigma = \frac{\sum (\text{Real part of finite poles}) - \sum (\text{Real part of finite zeros})}{\text{Number of finite poles} - \text{Number of finite zeros}} \quad}
$$

#control-systems / [[Rules for Constructing the Root Locus]]

---
**Q.** State the formula for the angles of the asymptotes in a root locus plot.
?
$$
\boxed{\quad \theta_k = \frac{(2k+1)180^\circ}{P-Z} \quad}
$$
Where:
- $k = 0, 1, 2, ...$
- $P$ = Number of finite poles
- $Z$ = Number of finite zeros

#control-systems / [[Rules for Constructing the Root Locus]]

---
**Q.** State the Nyquist stability criterion.
?
$$
\boxed{\quad N = P - Z \quad}
$$
Where:
- $N$ = Number of encirclements of the critical point (-1+j0) by the Nyquist plot in the counter-clockwise direction.
- $P$ = Number of open-loop poles in the right-half of the s-plane.
- $Z$ = Number of closed-loop poles in the right-half of the s-plane (for stability, Z must be 0).

#control-systems / [[Nyquist Stability Criterion]]

---
**Q.** What is the formula for the position error constant ($K_p$)?
?
$$
\boxed{\quad K_p = \lim_{s \to 0} G(s)H(s) \quad}
$$
It is used to find the steady-state error for a step input.

#control-systems / [[Steady-State Error]]

---
**Q.** What is the formula for the velocity error constant ($K_v$)?
?
$$
\boxed{\quad K_v = \lim_{s \to 0} s G(s)H(s) \quad}
$$
It is used to find the steady-state error for a ramp input.

#control-systems / [[Steady-State Error]]

---
**Q.** How do you calculate the new per-unit impedance when the base MVA and base kV are changed?
?
$$
\boxed{\quad Z_{pu, new} = Z_{pu, old} \times \left( \frac{\text{Base MVA}_{new}}{\text{Base MVA}_{old}} \right) \times \left( \frac{\text{Base kV}_{old}}{\text{Base kV}_{new}} \right)^2 \quad}
$$

#power-system / [[Per-Unit System]]

---
**Q.** State the formula for reluctance ($R_m$) of a magnetic circuit.
?
$$
\boxed{\quad R_m = \frac{l}{\mu A} \quad}
$$
Where:
- $l$ = length of the magnetic path
- $\mu$ = permeability of the material
- $A$ = cross-sectional area

#electrical-machines / [[Magnetic Circuits]]

---
**Q.** State the relationship between the electric field intensity ($\vec{E}$) and the electric potential ($V$).
?
The electric field is the negative gradient of the electric potential.
$$
\boxed{\quad \vec{E} = -\nabla V \quad}
$$

#electromagnetic-fields / [[Electrostatics]]

---
**Q.** Write Maxwell's first equation (Gauss's law for electricity) in its differential (point) form.
?
$$
\boxed{\quad \nabla \cdot \vec{D} = \rho_v \quad}
$$
Where $\vec{D}$ is the electric flux density and $\rho_v$ is the volume charge density.

#electromagnetic-fields / [[Maxwell's Equations]]

---
**Q.** Write Maxwell's fourth equation (Ampere-Maxwell law) in its differential (point) form.
?
$$
\boxed{\quad \nabla \times \vec{H} = \vec{J} + \frac{\partial \vec{D}}{\partial t} \quad}
$$
Where $\vec{H}$ is the magnetic field intensity, $\vec{J}$ is the current density, and $\frac{\partial \vec{D}}{\partial t}$ is the displacement current density.

#electromagnetic-fields / [[Maxwell's Equations]]

---
**Q.** What is the formula for the Voltage Standing Wave Ratio (VSWR)?
?
$$
\boxed{\quad \text{VSWR} = \frac{1 + |\Gamma|}{1 - |\Gamma|} \quad}
$$
Where $|\Gamma|$ is the magnitude of the voltage reflection coefficient.

#electromagnetic-fields / [[Transmission Lines]]

---
**Q.** What is the formula for the propagation constant ($\gamma$) of a transmission line?
?
$$
\boxed{\quad \gamma = \alpha + j\beta = \sqrt{(R+j\omega L)(G+j\omega C)} \quad}
$$
Where R, L, G, C are the per-unit-length parameters, $\alpha$ is the attenuation constant, and $\beta$ is the phase constant.

#electromagnetic-fields / [[Transmission Lines]]

---
**Q.** State the formula for the total three-phase active power ($P$) in a balanced system using line quantities ($V_L$, $I_L$).
?
$$
\boxed{\quad P = \sqrt{3} \times V_L \times I_L \times \cos(\theta) \quad}
$$
Where $\cos(\theta)$ is the power factor.

#electric-circuits / [[Three-Phase Circuits]]

---
**Q.** What is the ratio of rotor copper loss : gross rotor output : rotor input power in an induction motor?
?
The ratio is proportional to slip ($s$).
$$
\boxed{\quad P_{cu} : P_{mech} : P_{in} = s : (1-s) : 1 \quad}
$$

#electrical-machines / [[Induction Motors]]

---
**Q.** What is the formula for the string efficiency of an insulator string?
?
$$
\boxed{\quad \text{String Efficiency} = \frac{\text{Voltage across the string}}{n \times \text{Voltage across the disc nearest to the conductor}} \times 100\% \quad}
$$
Where 'n' is the number of insulator discs in the string.

#power-system / [[Insulators]]

---
**Q.** How is the current ($i_C$) flowing through a capacitor related to the voltage ($v_C$) across it?
?
The current is proportional to the rate of change of voltage.
$$
\boxed{\quad i_C(t) = C \frac{dv_C(t)}{dt} \quad}
$$

#electric-circuits / [[Capacitors]]

---
**Q.** How is the voltage ($v_L$) across an inductor related to the current ($i_L$) flowing through it?
?
The voltage is proportional to the rate of change of current.
$$
\boxed{\quad v_L(t) = L \frac{di_L(t)}{dt} \quad}
$$

#electric-circuits / [[Inductors]]

---
**Q.** What is the formula for the output voltage ($V_{out}$) of a buck-boost converter?
?
$$
\boxed{\quad V_{out} = -V_{in} \left( \frac{D}{1-D} \right) \quad}
$$
Where D is the duty cycle. The negative sign indicates a polarity inversion.

#power-electronics / [[DC-DC Converters]]

---
**Q.** What is the formula for the Common Mode Rejection Ratio (CMRR) in dB?
?
$$
\boxed{\quad \text{CMRR}_{dB} = 20 \log_{10} \left| \frac{A_d}{A_c} \right| \quad}
$$
Where $A_d$ is the differential gain and $A_c$ is the common-mode gain.

#analog-electronics / [[Operational Amplifiers]]

---
**Q.** What is the Laplace transform of the function $f(t) = e^{-at}$?
?
$$
\boxed{\quad \mathcal{L}\{e^{-at}\} = \frac{1}{s+a} \quad}
$$

#mathematics / [[The Laplace Transform]]

---
**Q.** What is the Z-transform of a discrete unit step sequence $u[n]$?
?
$$
\boxed{\quad \mathcal{Z}\{u[n]\} = \frac{z}{z-1} \quad}
$$

#signals-and-systems / [[The Z-Transform]]

---
**Q.** State Parseval's theorem for energy signals in the context of the Fourier Transform.
?
The theorem states that the total energy of a signal can be calculated either by integrating the squared magnitude of the signal in the time domain or in the frequency domain.
$$
\boxed{\quad E = \int_{-\infty}^{\infty} |x(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |X(\omega)|^2 d\omega \quad}
$$

#signals-and-systems / [[Fourier Transforms]]

---
**Q.** How many two-input NAND gates are required to realize a two-input XOR gate?
?
Four.

#digital-electronics / [[Boolean Algebra and Logic Gates|Logic Gates]]

---
**Q.** How many states can an N-bit binary counter have?
?
An N-bit counter can have $2^N$ distinct states.
$$
\boxed{\quad \text{Number of states} = 2^N \quad}
$$

#digital-electronics / [[Sequential Circuits]]

---
**Q.** What is the ripple factor of a half-wave rectifier?
?
$$
\boxed{\quad \gamma = 1.21 \quad}
$$
The ripple factor is defined as the ratio of the RMS value of the AC component of the output voltage to the DC value of the output voltage.

#analog-electronics / [[Rectifiers]]

---
**Q.** What is the ripple factor of a full-wave rectifier?
?
$$
\boxed{\quad \gamma = 0.48 \quad}
$$
It is significantly lower than that of a half-wave rectifier, indicating a smoother DC output.

#analog-electronics / [[Rectifiers]]

---
**Q.** The Open-Circuit Test (O.C. Test) on a transformer is performed to determine which parameters?
?
It determines the core losses (hysteresis and eddy current losses) and the shunt branch parameters (magnetizing reactance $X_m$ and core loss resistance $R_c$).

#electrical-machines / [[Transformers]]

---
**Q.** The Short-Circuit Test (S.C. Test) on a transformer is performed to determine which parameters?
?
It determines the full-load copper losses and the series equivalent impedance ($R_{eq}$ and $X_{eq}$).

#electrical-machines / [[Transformers]]

---
**Q.** The synchronizing power of a synchronous machine is proportional to what?
?
The synchronizing power is directly proportional to the synchronous reactance ($X_s$) and the cosine of the power angle ($\delta$).
$$
\boxed{\quad P_{sync} \propto \frac{\cos(\delta)}{X_s} \quad}
$$

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the relationship between the number of poles ($P$) and the speed ($N$) of an AC machine for a constant frequency?
?
The speed is inversely proportional to the number of poles.
$$
\boxed{\quad N \propto \frac{1}{P} \quad}
$$

#electrical-machines / [[AC Machines]]

---
**Q.** What is the formula for the critical clearing angle ($\delta_{cr}$) in power system stability analysis?
?
$$
\boxed{\quad \cos(\delta_{cr}) = \frac{(\delta_{max} - \delta_0)P_m + P_{max2}\cos(\delta_{max}) - P_{max1}\cos(\delta_0)}{P_{max2} - P_{max1}} \quad}
$$
This formula relates the maximum power transfer capabilities before, during, and after a fault to the rotor angles.

#power-system / [[Classification of Power System Stability|Power System Stability]]

---
**Q.** What is the defining characteristic of a Y-bus (Admittance) matrix for a power system network?
?
The diagonal elements ($Y_{ii}$) are the sum of all admittances connected to bus 'i', and the off-diagonal elements ($Y_{ij}$) are the negative of the admittance connected between buses 'i' and 'j'.

#power-system / [[Load Flow Studies]]

---
**Q.** In a BJT, how is the thermal voltage ($V_T$) calculated?
?
$$
\boxed{\quad V_T = \frac{kT}{q} \quad}
$$
Where:
- $k$ = Boltzmann's constant
- $T$ = Absolute temperature in Kelvin
- $q$ = Charge of an electron

At room temperature (~300K), $V_T$ is approximately 26 mV.

#analog-electronics / [[Semiconductors]]

---
**Q.** What is the formula for the RMS value of a triangular wave with peak voltage $V_p$?
?
$$
\boxed{\quad V_{rms} = \frac{V_p}{\sqrt{3}} \quad}
$$

#electric-circuits / [[AC Circuits]]

---
**Q.** What is the condition on the loop gain ($A\beta$) for sustained oscillations in an oscillator circuit (Barkhausen criterion)?
?
The magnitude of the loop gain must be unity ($|A\beta| = 1$), and the phase shift around the loop must be 0° or an integer multiple of 360°.

#analog-electronics / [[Oscillators]]

---
**Q.** The speed of a DC series motor at no-load is?
?
Theoretically, it is dangerously high (infinite) because the flux ($\phi$) approaches zero.
$$
N \propto \frac{E_b}{\phi} \implies \text{As } I_a \to 0, \phi \to 0, \text{ so } N \to \infty
$$

#electrical-machines / [[Principle of Operation of DC Motors]]

---
**Q.** For a lossless power transmission line, the sending end voltage ($V_s$) and receiving end voltage ($V_r$) are related by which matrix equation?
?
$$
\begin{pmatrix} V_s \\ I_s \end{pmatrix} = \begin{pmatrix} \cos(\beta l) & jZ_0 \sin(\beta l) \\ j\frac{1}{Z_0}\sin(\beta l) & \cos(\beta l) \end{pmatrix} \begin{pmatrix} V_r \\ I_r \end{pmatrix}
$$
Where $\beta$ is the phase constant and $l$ is the line length.

#power-system / [[Transmission Lines]]

---
**Q.** How is the charging current ($I_c$) of a transmission line related to the system voltage ($V$) and capacitive reactance ($X_c$)?
?
The charging current is directly proportional to the voltage and system frequency (since $X_c = 1/(2\pi fC)$).
$$
\boxed{\quad I_c = \frac{V}{X_c} = V \cdot (2\pi fC) \quad}
$$

#power-system / [[Transmission Lines]]

---
