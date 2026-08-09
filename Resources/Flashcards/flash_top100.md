---
about:
  - Top 100 frequently used formulas.
tags:
  - top100
---
### Electrical Circuits

**Q.** State the fundamental relationship between voltage ($V$), current ($I$), and resistance ($R$) as defined by Ohm's Law.
?
$$
\boxed{\quad V = I \times R \quad}
$$

#electric-circuits / [[Ohm's Law]]

---
**Q.** What principle does Kirchhoff's Current Law (KCL) state regarding currents at a node?
?
It states that the algebraic sum of currents entering a node (or a closed boundary) is zero.
$$
\boxed{\quad \sum I_{entering} = \sum I_{leaving} \quad}
$$

#electric-circuits / [[Kirchhoff's Laws]]

---
**Q.** What principle does Kirchhoff's Voltage Law (KVL) state regarding voltages in a closed loop?
?
It states that the algebraic sum of all voltages around any closed loop in a circuit is equal to zero.
$$
\boxed{\quad \sum V_{rise} = \sum V_{drop} \quad}
$$

#electric-circuits / [[Kirchhoff's Laws]]

---
**Q.** What is the formula for the current ($i$) flowing through a capacitor ($C$) in terms of the voltage ($v$) across it?
?
$$
\boxed{\quad i(t) = C \frac{dv(t)}{dt} \quad}
$$
The current is proportional to the rate of change of voltage.

#electric-circuits / [[Capacitors]]

---
**Q.** What is the formula for the voltage ($v$) across an inductor ($L$) in terms of the current ($i$) flowing through it?
?
$$
\boxed{\quad v(t) = L \frac{di(t)}{dt} \quad}
$$
The voltage is proportional to the rate of change of current.

#electric-circuits / [[Inductors]]

---
**Q.** What is the formula for the energy ($W_L$) stored in an inductor?
?
$$
\boxed{\quad W_L = \frac{1}{2} L I^2 \quad}
$$
Where $L$ is the inductance and $I$ is the current flowing through it.

#electric-circuits / [[Inductors]]

---
**Q.** What is the formula for the energy ($W_C$) stored in a capacitor?
?
$$
\boxed{\quad W_C = \frac{1}{2} C V^2 \quad}
$$
Where $C$ is the capacitance and $V$ is the voltage across it.

#electric-circuits / [[Capacitors]]

---
**Q.** State the formula for the time constant ($\tau$) of a series RC circuit.
?
$$
\boxed{\quad \tau = RC \quad}
$$

#electric-circuits / [[Time Constant]]

---
**Q.** State the formula for the time constant ($\tau$) of a series RL circuit.
?
$$
\boxed{\quad \tau = \frac{L}{R} \quad}
$$

#electric-circuits / [[Time Constant]]

---
**Q.** What is the formula for the resonant frequency ($f_0$) of a series or parallel RLC circuit?
?
$$
\boxed{\quad f_0 = \frac{1}{2\pi\sqrt{LC}} \quad}
$$

#electric-circuits / [[Resonance]]

---
**Q.** What is the formula for the Quality Factor (Q) of a series RLC circuit at resonance?
?
$$
\boxed{\quad Q = \frac{\omega_0 L}{R} = \frac{1}{R}\sqrt{\frac{L}{C}} \quad}
$$

#electric-circuits / [[Resonance]]

---
**Q.** What is the formula for the active power ($P$) in a single-phase AC circuit?
?
$$
\boxed{\quad P = V_{rms} I_{rms} \cos(\phi) \quad}
$$
Where $\cos(\phi)$ is the power factor.

#electric-circuits / [[AC Power Analysis]]

---
**Q.** What is the formula for the reactive power ($Q$) in a single-phase AC circuit?
?
$$
\boxed{\quad Q = V_{rms} I_{rms} \sin(\phi) \quad}
$$

#electric-circuits / [[AC Power Analysis]]

---
**Q.** What is the formula for the apparent power ($S$) in a single-phase AC circuit?
?
$$
\boxed{\quad S = V_{rms} I_{rms} = \sqrt{P^2 + Q^2} \quad}
$$

#electric-circuits / [[AC Power Analysis]]

---
**Q.** Provide a formula for converting resistances from a Star (Y) network ($R_A, R_B, R_C$) to a Delta ($\Delta$) network (e.g., $R_{AB}$).
?
$$
\boxed{\quad R_{AB} = \frac{R_A R_B + R_B R_C + R_C R_A}{R_C} \quad}
$$

#electric-circuits / [[Star-Delta Transformation]]

---
**Q.** According to the Maximum Power Transfer Theorem, what is the condition on the load resistance ($R_L$) for it to absorb maximum power from a source with Thevenin resistance ($R_{th}$)?
?
The load resistance must be equal to the Thevenin equivalent resistance of the source network.
$$
\boxed{\quad R_L = R_{th} \quad}
$$

#electric-circuits / [[Maximum Power Transfer Theorem]]

---
### Electrical Machines

**Q.** State the formula for the synchronous speed ($N_s$) of an AC machine.
?
$$
\boxed{\quad N_s = \frac{120 f}{P} \quad}
$$
Where $f$ is the supply frequency in Hz and $P$ is the number of poles.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** How is the slip ($s$) of an induction motor defined in terms of synchronous speed ($N_s$) and rotor speed ($N_r$)?
?
$$
\boxed{\quad s = \frac{N_s - N_r}{N_s} \quad}
$$

#electrical-machines / [[Concept of Slip|Slip of an Induction Machine]]

---
**Q.** What is the relationship between the frequency of the rotor frequency ($f_r$) and the supply frequency ($f$) in an induction motor?
?
$$
\boxed{\quad f_r = s \cdot f \quad}
$$
The rotor frequency is the supply frequency multiplied by the slip.

#electrical-machines / [[Concept of Slip|Relationship between frequencies of rotor and supply]]

---
**Q.** Write the general EMF equation for a DC generator.
?
$$
\boxed{\quad E_g = \frac{\phi Z N P}{60 A}\quad}
$$
Where $\phi$ is flux/pole, $Z$ is total conductors, $N$ is speed in RPM, $P$ is poles, and $A$ is parallel paths.

#electrical-machines / [[Principle of Operation of DC Generators]]

---
**Q.** The torque ($T$) developed by a DC motor is proportional to which two quantities?
?
The torque is directly proportional to the field flux ($\phi$) and the armature current ($I_a$).
$$
\boxed{\quad T \propto \phi I_a \quad}
$$

#electrical-machines / [[Principle of Operation of DC Motors]]

---
**Q.** State the EMF equation for a transformer.
?
$$
\boxed{\quad E = 4.44 f N \phi_m \quad}
$$
Where $f$ is frequency, $N$ is the number of turns, and $\phi_m$ is the maximum flux in the core.

#electrical-machines / [[Principle of Operation of a Transformer|Transformer]]

---
**Q.** What is the voltage transformation ratio ($K$) of a transformer in terms of voltages and turns?
?
$$
\boxed{\quad K = \frac{V_2}{V_1} = \frac{E_2}{E_1} = \frac{N_2}{N_1} \quad}
$$

#electrical-machines / [[Principle of Operation of a Transformer|Transformer]]

---
**Q.** What is the general condition for achieving maximum efficiency in a transformer or DC machine?
?
Maximum efficiency occurs when the variable losses (Copper Losses) are equal to the constant losses (Iron or Core Losses).
$$
\boxed{\quad P_{cu} = P_{iron} \quad}
$$

#electrical-machines / [[Losses and Efficiency in a Transformer]]

---
**Q.** How is the percentage voltage regulation of a transformer defined?
?
$$
\boxed{\quad \% \text{Reg} = \frac{V_{no-load} - V_{full-load}}{V_{full-load}} \times 100 \quad}
$$

#electrical-machines / [[Voltage Regulation of a Transformer]]

---
**Q.** What is the formula for the electrical power ($P$) developed by a cylindrical rotor synchronous generator?
?
$$
\boxed{\quad P = \frac{|E_f||V_t|}{X_s} \sin(\delta) \quad}
$$
Where $E_f$ is excitation EMF, $V_t$ is terminal voltage, $X_s$ is synchronous reactance, and $\delta$ is the power angle.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** Write the proportional relationship for the torque ($T$) of an induction motor in terms of slip ($s$) and rotor parameters ($R_2, X_2$).
?
$$
\boxed{\quad T \propto \frac{s R_2 V^2}{R_2^2 + (sX_2)^2} \quad}
$$

#electrical-machines / [[Torque-Slip Characteristics of Induction Motor|Torque-Slip Characteristics of Induction Motor]]

---
### Power Systems

**Q.** What is the formula for calculating the per-unit (p.u.) value of a quantity?
?
$$
\boxed{\quad \text{Per-unit value} = \frac{\text{Actual value}}{\text{Base value}} \quad}
$$

#power-system / [[Per-Unit System]]

---
**Q.** How do you convert a per-unit impedance ($Z_{pu, old}$) from an old base to a new base?
?
$$
\boxed{\quad Z_{pu, new} = Z_{pu, old} \times \left( \frac{\text{Base MVA}_{new}}{\text{Base MVA}_{old}} \right) \times \left( \frac{\text{Base kV}_{old}}{\text{Base kV}_{new}} \right)^2 \quad}
$$

#power-system / [[Per-Unit System]]

---
**Q.** How is the short-circuit Fault MVA related to the per-unit Thevenin impedance ($Z_{pu}$) at the fault point?
?
$$
\boxed{\quad \text{Fault MVA} = \frac{\text{Base MVA}}{Z_{pu}} \quad}
$$

#power-system / [[Fault Calculations]]

---
**Q.** State the swing equation that describes the rotor dynamics of a synchronous machine.
?
$$
\boxed{\quad M \frac{d^2\delta}{dt^2} = P_m - P_e \quad}
$$
Where $M$ is the inertia constant, $\delta$ is the rotor angle, $P_m$ is mechanical input power, and $P_e$ is electrical output power.

#power-system / [[Swing Equation]]

---
**Q.** What is the formula for Surge Impedance Loading (SIL) of a transmission line?
?
$$
\boxed{\quad \text{SIL} = \frac{V_{rated}^2}{Z_0} \quad}
$$
Where $V_{rated}$ is the rated line voltage and $Z_0$ is the characteristic impedance.

#power-system / [[Surge Impedance and Surge Impedance Loading (SIL)|Surge Impedance Loading]]

---
**Q.** What is the formula for the characteristic impedance ($Z_0$) of a lossless transmission line?
?
$$
\boxed{\quad Z_0 = \sqrt{\frac{L}{C}} \quad}
$$
Where L and C are the inductance and capacitance per unit length, respectively.

#power-system / [[Surge Impedance and Surge Impedance Loading (SIL)|Characteristic Impedance]]

---
**Q.** What is the condition for economic load dispatch between multiple power plants, neglecting transmission losses?
?
The incremental fuel costs of all generating units must be equal to a common value, lambda ($\lambda$).
$$
\boxed{\quad \frac{dC_1}{dP_1} = \frac{dC_2}{dP_2} = \dots = \lambda \quad}
$$

#power-system / [[Economic Load Dispatch (ELD) neglecting losses]]

---
**Q.** What is the formula for the zero-sequence component ($I_0$) of a set of unbalanced three-phase currents ($I_a, I_b, I_c$)?
?
$$
\boxed{\quad I_0 = \frac{1}{3}(I_a + I_b + I_c) \quad}
$$

#power-system / [[Symmetrical Components]]

---
**Q.** How is the string efficiency of an insulator string defined?
?
$$
\boxed{\quad \eta = \frac{\text{Voltage across string}}{n \times (\text{Voltage across disc nearest to conductor})} \times 100 \quad}
$$
Where 'n' is the total number of insulator discs.

#power-system / [[Insulators]]

---
### Control Systems

**Q.** What is the standard transfer function for a second-order system?
?
$$
\boxed{\quad T(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2} \quad}
$$
Where $\omega_n$ is the natural frequency and $\zeta$ is the damping ratio.

#control-systems / [[Second-Order Systems]]

---
**Q.** What is the formula for the peak time ($t_p$) of an underdamped second-order system?
?
$$
\boxed{\quad t_p = \frac{\pi}{\omega_d} = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}} \quad}
$$
Where $\omega_d$ is the damped frequency of oscillation.

#control-systems / [[Second-Order Systems]]

---
**Q.** How is the percentage overshoot (%OS) of a second-order system related to its damping ratio ($\zeta$)?
?
$$
\boxed{\quad \%OS = e^{\frac{-\zeta\pi}{\sqrt{1-\zeta^2}}} \times 100 \quad}
$$

#control-systems / [[Second-Order Systems]]

---
**Q.** What is the approximate formula for the settling time ($t_s$) of a second-order system for a 2% tolerance band?
?
$$
\boxed{\quad t_s \approx \frac{4}{\zeta\omega_n} \quad}
$$
It is approximately four times the system's time constant.

#control-systems / [[Second-Order Systems]]

---
**Q.** What is the formula for the steady-state error ($e_{ss}$) for a unity feedback system?
?
$$
\boxed{\quad e_{ss} = \lim_{s \to 0} \frac{s R(s)}{1 + G(s)} \quad}
$$
Where $R(s)$ is the input and $G(s)$ is the open-loop transfer function.

#control-systems / [[Steady-State Error]]

---
**Q.** How is the static position error constant ($K_p$) defined?
?
$$
\boxed{\quad K_p = \lim_{s \to 0} G(s)H(s) \quad}
$$

#control-systems / [[Steady-State Error]]

---
**Q.** How is the static velocity error constant ($K_v$) defined?
?
$$
\boxed{\quad K_v = \lim_{s \to 0} s G(s)H(s) \quad}
$$

#control-systems / [[Steady-State Error]]

---
**Q.** How is the static acceleration error constant ($K_a$) defined?
?
$$
\boxed{\quad K_a = \lim_{s \to 0} s^2 G(s)H(s) \quad}
$$

#control-systems / [[Steady-State Error]]

---
**Q.** What is the formula for the centroid of the asymptotes in a root locus plot?
?
$$
\boxed{\quad \sigma = \frac{\sum (\text{Real part of finite poles}) - \sum (\text{Real part of finite zeros})}{\text{Number of finite poles} - \text{Number of finite zeros}} \quad}
$$

#control-systems / [[Centroid and Asymptotes]]

---
**Q.** What is the formula for the angles of the asymptotes in a root locus plot?
?
$$
\boxed{\quad \theta_k = \frac{(2k+1)180^\circ}{P-Z} \quad}
$$
Where P is the number of poles and Z is the number of zeros.

#control-systems / [[Centroid and Asymptotes]]

---
**Q.** How is the Gain Margin (GM) of a system defined in terms of its frequency response?
?
It is the reciprocal of the magnitude of the open-loop transfer function at the phase crossover frequency ($\omega_{pc}$).
$$
\boxed{\quad \text{GM} = \frac{1}{|G(j\omega_{pc})H(j\omega_{pc})|} \quad}
$$

#control-systems / [[Frequency Response]]

---
**Q.** How is the Phase Margin (PM) of a system defined from its Bode plot?
?
$$
\boxed{\quad \text{PM} = 180^\circ + \angle G(j\omega_{gc})H(j\omega_{gc}) \quad}
$$
Where $\omega_{gc}$ is the gain crossover frequency.

#control-systems / [[Frequency Response]]

---
### Analog & Digital Electronics

**Q.** What is the voltage gain ($A_v$) of an ideal inverting operational amplifier?
?
$$
\boxed{\quad A_v = -\frac{R_f}{R_{in}} \quad}
$$
Where $R_f$ is the feedback resistor and $R_{in}$ is the input resistor.

#analog-electronics / [[Operational Amplifiers]]

---
**Q.** What is the voltage gain ($A_v$) of an ideal non-inverting operational amplifier?
?
$$
\boxed{\quad A_v = 1 + \frac{R_f}{R_1} \quad}
$$
Where $R_f$ is the feedback resistor and $R_1$ is the resistor to ground.

#analog-electronics / [[Operational Amplifiers]]

---
**Q.** State the Shockley equation for the current ($I$) through a diode.
?
$$
\boxed{\quad I = I_s (e^{\frac{V_D}{nV_T}} - 1) \quad}
$$
Where $I_s$ is reverse saturation current and $V_T$ is thermal voltage.

#analog-electronics / [[Diodes]]

---
**Q.** What are the fundamental current relationships in a Bipolar Junction Transistor (BJT)?
?
$$
\boxed{\quad I_E = I_B + I_C \quad ; \quad I_C = \beta I_B \quad ; \quad \alpha = \frac{\beta}{1+\beta} \quad}
$$

#analog-electronics / [[Transistors]]

---
**Q.** State the formula for the drain current ($I_D$) of a MOSFET operating in the saturation region.
?
$$
\boxed{\quad I_D = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2 \quad}
$$

#analog-electronics / [[Transistors]]

---
**Q.** How is the Common Mode Rejection Ratio (CMRR) expressed in decibels (dB)?
?
$$
\boxed{\quad \text{CMRR}_{dB} = 20 \log_{10} \left| \frac{A_d}{A_c} \right| \quad}
$$
Where $A_d$ is the differential gain and $A_c$ is the common-mode gain.

#analog-electronics / [[Operational Amplifiers]]

---
**Q.** State De Morgan's theorems for Boolean algebra.
?
$$
\boxed{\quad \overline{A \cdot B} = \overline{A} + \overline{B} \quad \text{and} \quad \overline{A + B} = \overline{A} \cdot \overline{B} \quad}
$$

#digital-electronics / [[Boolean Algebra and Logic Gates|Boolean Algebra]]

---
**Q.** How many selection lines ($m$) are required for a multiplexer with $N$ input lines?
?
The relationship is given by:
$$
\boxed{\quad 2^m = N \quad \text{or} \quad m = \log_2(N) \quad}
$$

#digital-electronics / [[Combinational Circuits]]

---
**Q.** What is the minimum number of flip-flops ($m$) required to design a MOD-N counter?
?
The minimum number of flip-flops must satisfy the condition:
$$
\boxed{\quad 2^m \ge N \quad}
$$

#digital-electronics / [[Sequential Circuits]]

---
### Signals & Systems

**Q.** What is the integral formula for the Continuous-Time Fourier Transform (CTFT) of a signal $x(t)$?
?
$$
\boxed{\quad X(j\omega) = \int_{-\infty}^{\infty} x(t)e^{-j\omega t} dt \quad}
$$

#signals-and-systems / [[Fourier Transforms]]

---
**Q.** What is the integral formula for the Inverse Continuous-Time Fourier Transform (ICTFT)?
?
$$
\boxed{\quad x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(j\omega)e^{j\omega t} d\omega \quad}
$$

#signals-and-systems / [[Fourier Transforms]]

---
**Q.** Write the convolution integral for finding the output $y(t)$ of an LTI system with input $x(t)$ and impulse response $h(t)$.
?
$$
\boxed{\quad y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau)h(t-\tau)d\tau \quad}
$$

#signals-and-systems / [[Convolution]]

---
**Q.** What is the integral definition of the one-sided Laplace Transform of a function $f(t)$?
?
$$
\boxed{\quad F(s) = \int_{0}^{\infty} f(t)e^{-st} dt \quad}
$$

#signals-and-systems / [[The Laplace Transform]]

---
**Q.** What is the summation formula for the Z-Transform of a discrete sequence $x[n]$?
?
$$
\boxed{\quad X(z) = \sum_{n=-\infty}^{\infty} x[n]z^{-n} \quad}
$$

#signals-and-systems / [[The Z-Transform]]

---
**Q.** State the Final Value Theorem of the Laplace Transform.
?
$$
\boxed{\quad \lim_{t \to \infty} f(t) = \lim_{s \to 0} sF(s) \quad}
$$
(Provided the poles of $sF(s)$ are in the left-half plane).

#signals-and-systems / [[The Laplace Transform]]

---
**Q.** State the Initial Value Theorem of the Laplace Transform.
?
$$
\boxed{\quad \lim_{t \to 0} f(t) = \lim_{s \to \infty} sF(s) \quad}
$$

#signals-and-systems / [[The Laplace Transform]]

---
**Q.** State Parseval's theorem for the energy ($E$) of a signal $x(t)$.
?
$$
\boxed{\quad E = \int_{-\infty}^{\infty} |x(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |X(\omega)|^2 d\omega \quad}
$$
It relates energy in the time domain to energy in the frequency domain.

#signals-and-systems / [[Fourier Transforms]]

---
**Q.** What is the condition for perfect reconstruction of a signal according to the Nyquist Sampling Theorem?
?
The sampling frequency ($f_s$) must be at least twice the maximum frequency component ($f_m$) of the signal.
$$
\boxed{\quad f_s \ge 2f_m \quad}
$$

#signals-and-systems / [[Sampling]]

---
### Electromagnetic Fields (EMT)

**Q.** State Gauss's law for electricity in its differential (point) form.
?
$$
\boxed{\quad \nabla \cdot \vec{D} = \rho_v \quad}
$$
Where $\vec{D}$ is the electric flux density and $\rho_v$ is the volume charge density.

#electromagnetic-fields / [[Maxwell's Equations]]

---
**Q.** State Faraday's law of induction in its differential (point) form.
?
$$
\boxed{\quad \nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \quad}
$$
Where $\vec{E}$ is the electric field and $\vec{B}$ is the magnetic flux density.

#electromagnetic-fields / [[Maxwell's Equations]]

---
**Q.** State the Ampere-Maxwell law in its differential (point) form.
?
$$
\boxed{\quad \nabla \times \vec{H} = \vec{J} + \frac{\partial \vec{D}}{\partial t} \quad}
$$
Where $\vec{H}$ is magnetic field intensity and $\vec{J}$ is current density.

#electromagnetic-fields / [[Maxwell's Equations]]

---
**Q.** State Gauss's law for magnetism in its differential (point) form.
?
$$
\boxed{\quad \nabla \cdot \vec{B} = 0 \quad}
$$
This implies that magnetic monopoles do not exist.

#electromagnetic-fields / [[Maxwell's Equations]]

---
**Q.** What is the Lorentz Force equation for the force ($\vec{F}$) on a moving charge ($q$)?
?
$$
\boxed{\quad \vec{F} = q(\vec{E} + \vec{v} \times \vec{B}) \quad}
$$
It combines the forces from electric ($\vec{E}$) and magnetic ($\vec{B}$) fields.

#electromagnetic-fields / [[Magnetostatics]]

---
**Q.** What is the formula for the Poynting vector ($\vec{S}$), which represents power flow density?
?
$$
\boxed{\quad \vec{S} = \vec{E} \times \vec{H} \quad}
$$

#electromagnetic-fields / [[Poynting Vector]]

---
**Q.** What is the formula and approximate value for the intrinsic impedance of free space ($\eta_0$)?
?
$$
\boxed{\quad \eta_0 = \sqrt{\frac{\mu_0}{\epsilon_0}} \approx 120\pi \approx 377 \, \Omega \quad}
$$

#electromagnetic-fields / [[Wave Propagation]]

---
**Q.** State the formula for the capacitance ($C$) of a parallel plate capacitor.
?
$$
\boxed{\quad C = \frac{\epsilon A}{d} \quad}
$$
Where $\epsilon$ is the permittivity, A is the plate area, and d is the plate separation.

#electromagnetic-fields / [[Electrostatics]]

---
**Q.** State the formula for the inductance ($L$) of a long solenoid.
?
$$
\boxed{\quad L = \frac{\mu N^2 A}{l} \quad}
$$
Where $\mu$ is permeability, $N$ is total turns, $A$ is cross-sectional area, and $l$ is length.

#electromagnetic-fields / [[Magnetostatics]]

---
### Power Electronics

**Q.** What is the output voltage ($V_{out}$) of an ideal Buck (Step-Down) converter in terms of input voltage ($V_{in}$) and duty cycle ($D$)?
?
$$
\boxed{\quad V_{out} = D \cdot V_{in} \quad}
$$

#power-electronics / [[DC-DC Converters]]

---
**Q.** What is the output voltage ($V_{out}$) of an ideal Boost (Step-Up) converter?
?
$$
\boxed{\quad V_{out} = \frac{V_{in}}{1-D} \quad}
$$

#power-electronics / [[DC-DC Converters]]

---
**Q.** What is the output voltage ($V_{out}$) of an ideal Buck-Boost converter?
?
$$
\boxed{\quad V_{out} = -V_{in} \left( \frac{D}{1-D} \right) \quad}
$$
Note the voltage polarity is inverted.

#power-electronics / [[DC-DC Converters]]

---
**Q.** Give the formula for the average output voltage ($V_{avg}$) of a single-phase half-wave controlled rectifier with a resistive load and firing angle $\alpha$.
?
$$
\boxed{\quad V_{avg} = \frac{V_m}{2\pi}(1 + \cos\alpha) \quad}
$$
Where $V_m$ is the peak input voltage.

#power-electronics / [[Controlled Rectifiers]]

---
**Q.** Give the formula for the average output voltage ($V_{avg}$) of a single-phase full-wave controlled rectifier with a resistive load and firing angle $\alpha$.
?
$$
\boxed{\quad V_{avg} = \frac{V_m}{\pi}(1 + \cos\alpha) \quad}
$$

#power-electronics / [[Controlled Rectifiers]]

---
**Q.** What is the RMS output voltage of a single-phase full-bridge inverter that produces a square wave output from a DC input of $V_s$?
?
$$
\boxed{\quad V_{rms} = V_s \quad}
$$

#power-electronics / [[Inverters]]

---
### Engineering Mathematics

**Q.** State Cauchy's Integral Formula for a function $f(z)$ analytic inside and on a simple closed contour C.
?
$$
\boxed{\quad f(a) = \frac{1}{2\pi j} \oint_C \frac{f(z)}{z-a} dz \quad}
$$
Where 'a' is any point inside C.

#mathematics / [[Complex Analysis]]

---
**Q.** State the Residue Theorem for integrating a complex function $f(z)$ around a closed contour C.
?
$$
\boxed{\quad \oint_C f(z) dz = 2\pi j \sum (\text{Residues at poles inside C}) \quad}
$$

#mathematics / [[Complex Analysis]]

---
**Q.** How are the eigenvalues ($\lambda$) of a square matrix A determined?
?
By solving the characteristic equation:
$$
\boxed{\quad \det(A - \lambda I) = 0 \quad}
$$
Where $I$ is the identity matrix.

#mathematics / [[Linear Algebra]]

---
**Q.** What is the fundamental property of a Probability Density Function (PDF), $f(x)$?
?
The integral of the PDF over its entire domain must be equal to 1.
$$
\boxed{\quad \int_{-\infty}^{\infty} f(x) dx = 1 \quad}
$$

#mathematics / [[Probability]]

---
**Q.** State Euler's identity, which relates the complex exponential to trigonometric functions.
?
$$
\boxed{\quad e^{j\theta} = \cos(\theta) + j\sin(\theta) \quad}
$$

#mathematics / [[Complex Numbers]]

---
**Q.** State the Divergence Theorem (or Gauss's Theorem).
?
$$
\boxed{\quad \oint_S \vec{F} \cdot d\vec{S} = \int_V (\nabla \cdot \vec{F}) dV \quad}
$$
It relates the flux through a closed surface to the divergence within the volume.

#mathematics / [[Vector Calculus]]

---
**Q.** State Stokes' Theorem.
?
$$
\boxed{\quad \oint_L \vec{F} \cdot d\vec{l} = \int_S (\nabla \times \vec{F}) \cdot d\vec{S} \quad}
$$
It relates the line integral over a closed loop to the curl over the enclosed surface.

#mathematics / [[Vector Calculus]]

---
**Q.** What is the iterative formula for the Newton-Raphson method for finding the root of an equation $f(x)=0$?
?
$$
\boxed{\quad x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \quad}
$$

#mathematics / [[Numerical Methods]]

---
### Miscellaneous Important Formulas

**Q.** What is the RMS value of a half-wave rectified sinusoidal waveform with a peak amplitude of $V_m$?
?
$$
\boxed{\quad V_{rms} = \frac{V_m}{2} \quad}
$$

#analog-electronics / [[Rectifiers]]

---
**Q.** What is the RMS value of a full-wave rectified sinusoidal waveform with a peak amplitude of $V_m$?
?
$$
\boxed{\quad V_{rms} = \frac{V_m}{\sqrt{2}} \quad}
$$

#analog-electronics / [[Rectifiers]]

---
**Q.** What is the formula for the ripple factor ($\gamma$)?
?
$$
\boxed{\quad \gamma = \sqrt{\left(\frac{V_{rms}}{V_{dc}}\right)^2 - 1} \quad}
$$
It quantifies the ripple content in a rectified DC signal.

#analog-electronics / [[Rectifiers]]

---
**Q.** In a balanced three-phase star (Y) connected system, what is the relationship between line voltage ($V_L$) and phase voltage ($V_{ph}$)?
?
$$
\boxed{\quad V_L = \sqrt{3} V_{ph} \quad}
$$

#electric-circuits / [[Three-Phase Circuits]]

---
**Q.** In a balanced three-phase delta ($\Delta$) connected system, what is the relationship between line current ($I_L$) and phase current ($I_{ph}$)?
?
$$
\boxed{\quad I_L = \sqrt{3} I_{ph} \quad}
$$

#electric-circuits / [[Three-Phase Circuits]]

---
**Q.** What is the formula for total three-phase active power in a balanced system using line quantities?
?
$$
\boxed{\quad P = \sqrt{3} V_L I_L \cos(\phi) \quad}
$$

#electric-circuits / [[Three-Phase Circuits]]

---
**Q.** What is the formula for total three-phase reactive power in a balanced system using line quantities?
?
$$
\boxed{\quad Q = \sqrt{3} V_L I_L \sin(\phi) \quad}
$$

#electric-circuits / [[Three-Phase Circuits]]

---
**Q.** State the formula for the coefficient of coupling ($k$) between two magnetically coupled coils.
?
$$
\boxed{\quad k = \frac{M}{\sqrt{L_1 L_2}} \quad}
$$
Where $M$ is the mutual inductance and $L_1, L_2$ are the self-inductances.

#electric-circuits / [[Magnetically Coupled Circuits]]

---
**Q.** What is the Gain-Bandwidth Product (GBWP) of an operational amplifier?
?
For a standard op-amp, the product of the open-loop voltage gain ($A_{ol}$) and its bandwidth is constant.
$$
\boxed{\quad \text{GBWP} = A_{ol} \times \text{Bandwidth} \quad}
$$

#analog-electronics / [[Operational Amplifiers]]

---
**Q.** What is the Laplace transform of the function $f(t) = t^n$?
?
$$
\boxed{\quad \mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}} \quad}
$$

#mathematics / [[The Laplace Transform]]

---
**Q.** What is the fundamental relationship between the electric field intensity ($\vec{E}$) and the electric potential ($V$)?
?
The electric field is the negative of the gradient of the electric potential.
$$
\boxed{\quad \vec{E} = -\nabla V \quad}
$$

#electromagnetic-fields / [[Electrostatics]]

---
