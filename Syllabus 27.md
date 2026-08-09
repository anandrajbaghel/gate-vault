---
syllabus 27: "[[GATE_ee_27.pdf]]"
question base: "[[question papers.base]]"
all notes: "[[all zettelkasten.base]]"
---
### Electrical Engineering
#EE 
#### Section 1: [[Mathematics]]
#engineering-mathematics

**[[Linear Algebra]]**: [[Matrix Operations|Matrix Algebra]], [[Solving Systems of Linear Equations|Systems of Linear Equations]], [[Eigenvalues and Eigenvectors|Eigen Values]], [[Eigenvalues and Eigenvectors|Eigen Vectors]].

**Calculus**: [[Mean value theorems]], Theorems of integral calculus, Evaluation of definite and improper integrals, [[Partial Derivatives]], [[Maxima and Minima (Multivariable)|Maxima and minima]], Multiple integrals[^8], [[Fourier Series Representation of Periodic Functions|Fourier Series]], [[Vector identities]], [[Directional derivatives]], [[Line Integrals|Line Integral]], [[Surface Integrals|Surface Integral]], [[Triple Integrals|Volume Integrals]], [[Stokes' Theorem]], Gauss’s theorem, [[Gauss's Divergence Theorem|Divergence Theorem]], [[Green's Theorem]].
**Differential Equations**: First order equations[^17] (linear and nonlinear), Higher order linear differential equations[^18] with constant coefficients, [[Method of Variation of Parameters]], [[Cauchy-Euler Equation|Cauchy's Equation]], [[Cauchy-Euler Equation|Euler's equation]], [[Initial Value Problems (IVP)|Initial]] and [[Boundary Value Problems (BVP)|boundary]] value problems, Partial Differential Equations, [[Method of Separation of Variables]].

**Complex Variables**: [[Analytic functions]], [[Cauchy's Integral Theorem|Cauchy's integral Theorem]], [[Cauchy's Integral Formula|Cauchy's integral Formula]], [[Taylor series]], [[Laurent series]], [[Residue theorem]], Solution integrals.

**Probability and Statistics**: [[Concept of Sampling|Sampling theorems]], [[Conditional probability]], [[Mean, Median, Mode|Mean]], [[Mean, Median, Mode|Median]], [[Mean, Median, Mode|Mode]], [[Standard Deviation and Variance|Standard Deviation]], Random variables[^7], Discrete and Continuous distributions, [[Poisson distribution]], [[Normal distribution]], [[Binomial distribution]], Correlation analysis, [[Linear Regression|Regression Analysis]].

#### Section 2: [[Electric Circuits]]
#electric-circuits 

**Network Elements**: Ideal [[Ideal Independent Sources|voltage]] and [[Ideal Independent Sources|current]] sources, [[Dependent Sources]], [[Resistors|R]], [[Inductors|L]], [[Capacitors|C]], M elements;
**Network solution methods**: [[Kirchhoff's Laws|KCL]], [[Kirchhoff's Laws|KVL]], [[Nodal Analysis|Node]] and [[Mesh Analysis]];
**Network Theorems**: [[Thevenin's Theorem|Thevenin’s]], [[Norton's Theorem|Norton’s]], [[Superposition Theorem|Superposition]] and [[2. Electric Circuits/2. Network Theorems/1. DC & AC Network Theorems/Maximum Power Transfer Theorem|Maximum Power Transfer theorem]];
Transient response of DC and AC networks, [[AC Circuits|sinusoidal steady-state analysis]], [[Resonance]], [[Two-Port Networks|two port network]], balanced three phase circuits, [[Star-Delta Transformation]], [[Complex Power and the Power Triangle#Complex Power and the Power Triangle|complex power]] and power factor in AC circuits.

#### Section 3: [[Electromagnetic Fields]]
#electromagnetic-fields 

[[Coulomb's Law|Coulomb's Law]], [[Electric Field Intensity (E)|Electric Field Intensity]], [[Electric Flux Density (D)|Electric Flux Density]], [[Gauss's Law|Gauss's Law - Maxwell's equations]], [[Divergence of a Vector Field|Divergence]], Electric field and potential due to point, line, plane and spherical charge distributions, Effect of dielectric medium, Capacitance of simple configurations, [[Biot-Savart's Law|Biot-Savart Law]], [[Ampere's Circuital Law|Ampere's Law]], Curl, [[Faraday's Law in Integral and Point Form|Faraday's Law]], Lorentz force, Inductance, Magnetomotive force, Reluctance, Magnetic circuits, Self and Mutual inductance of simple configuration

#### Section 4: [[Signal & Systems]]
#signals-and-systems 

Representation of continuous and discrete time signals, shifting[^1] and scaling[^1] properties, [[LTI|Linear Time-Invariant System]] and causal systems, [[Fourier Series]] representation of continuous and discrete time periodic signals, sampling theorem, Applications of [[Fourier Transforms|Fourier Transform]] for continuous and discrete time signals, [[The Laplace Transform|Laplace Transform]] and [[The Z-Transform|Z transform]]. R.M.S. value, average value calculation for any general periodic waveform.

#### Section 5: [[Electrical Machines]]
#electrical-machines 

**Single phase transformer**: [[Equivalent Circuit of a Transformer|equivalent circuit]], [[Phasor Diagram of a Transformer|phasor diagram]], [[Transformer Tests#Open Circuit (OC) Test|open circuit]] and [[Transformer Tests#Short Circuit (SC) Test|short circuit tests]], [[Voltage Regulation of a Transformer|regulation]] and [[Losses and Efficiency in a Transformer|efficiency]];
**Three-phase transformers**: [[Three-phase Transformer Connections|connections]], [[Vector Groups of Three-phase Transformers|vector groups]], [[Parallel Operation of Transformers|parallel operation]]; [[Autotransformers|Auto-transformer]], *Electromechanical energy conversion principles*[^10];
**DC machines**: separately excited[^13], [[Types of DC Motors|series and shunt]], motoring[^11] and generating[^12] mode of operation and their characteristics, [[speed control of dc motors]];
**Three-phase induction machines**: [[Rotating Magnetic Field (RMF)|principle of operation]], types, performance[^15], torque-speed characteristics[^14], [[No-Load and Blocked Rotor Tests#No-Load Test|no-load]] and [[No-Load and Blocked Rotor Tests#Blocked Rotor Test|blocked-rotor tests]], [[Equivalent Circuit of a Three-Phase Induction Motor|equivalent circuit]], [[Starting Methods for Induction Motors|starting]] and [[Speed Control of Induction Motors|speed control]]; Operating principle of single-phase induction motors[^16];
**Synchronous machines**[^2]: cylindrical and salient pole machines, performance and characteristics, regulation and parallel operation of generators, starting of synchronous motors; Types of losses and efficiency calculations of electric machines.

#### Section 6: [[Power Systems]]
#power-systems 

Basic concepts of electrical power generation, AC and DC transmission concepts, Models and performance of transmission lines and cables, Economic Load Dispatch (with and without considering transmission losses), Series and shunt compensation, Electric field distribution and insulators, Distribution systems, Per‐unit quantities, Bus admittance matrix, Gauss- Seidel and Newton-Raphson load flow methods, Voltage and Frequency control, Power factor correction, Symmetrical components, Symmetrical and unsymmetrical fault analysis, Principles of over‐ current, differential, directional and distance protection; Circuit breakers, System stability concepts, Equal area criterion.

#### Section 7: [[Control Systems]]
#control-systems 

[[Mathematical Modeling of Physical Systems (Mechanical, Electrical)|Mathematical modelling and representation of systems]], [[Feedback principle]], [[Transfer Function and Impulse Response|Transfer Function]], *Block diagrams*[^9] and [[Signal Flow Graph (SFG)|Signal flow graphs]], Transient and Steady‐state analysis of linear time invariant systems, Stability analysis using [[Routh-Hurwitz Stability Criterion|Routh-Hurwitz]] and [[Nyquist Stability Criterion|Nyquist criteria]], [[Bode Plots|Bode Plots]], [[Concept and Definition of Root Locus|Root loci]], [[Lag Compensator|Lag]], [[Lead Compensator|Lead]] and [[Lag-Lead Compensator|Lead‐Lag compensators]]; [[Proportional (P) Controller|P]], [[Proportional-Integral (PI) Controller|PI]] and [[Proportional-Integral-Derivative (PID) Controller|PID controllers]]; [[State-Space Representation of LTI Systems|State Space Model]], [[Solution of State Equations|Solution of state equations of LTI systems]].

#### Section 8: [[Electrical & Electronic Measurements]]
#electrical-and-electronics-measurements

Bridges and Potentiometers, Measurement of voltage, current, power, energy and power factor; Instrument transformers, Digital voltmeters and multi-meters, Phase, Time and Frequency measurement; Oscilloscopes, Error analysis.

#### Section 9: [[Analog & Digital Electronics]]
#analog-and-digital-electronics 

Simple diode circuits: clipping, clamping, rectifiers; Amplifiers: biasing, equivalent circuit and frequency response; oscillators and feedback amplifiers; operational amplifiers: characteristics and applications; single stage active filters, Active Filters: Sallen Key, Butterwoth, VCOs and timers, combinatorial and sequential logic circuits, multiplexers, demultiplexers, Schmitt triggers, sample and hold circuits, A/D and D/A converters.

#### Section 10: [[Power Electronics]]
#power-electronics 

Static V-I characteristics and firing/gating circuits for [[Static V-I Characteristics of Thyristor|Thyristor]], [[Static V-I Characteristics of PMOSFET|MOSFET]], [[Static V-I Characteristics of IGBT|IGBT]]; [[Choppers|DC to DC conversion]]: [[Buck Converter|Buck]], [[Boost Converter|Boost]] and [[Buck-Boost Converter|Buck-Boost Converters]]; [[Single-Phase Uncontrolled Rectifiers|Single]] and [[Three-Phase Uncontrolled Rectifiers|three-phase configuration of uncontrolled rectifiers]]; Voltage[^3] and Current[^4] commutated Thyristor based converters; Bidirectional ac to dc voltage source converters; Magnitude and Phase of line current harmonics for uncontrolled and thyristor based converters; Power factor and Distortion Factor of AC to DC converters; Single- phase and three-phase voltage and current source inverters, sinusoidal pulse width modulation.

### All Topics

[^1]: 1. [[Properties of Continuous-Time Fourier Series]]
	2. [[Properties of the CTFT]]
	3. [[Properties of the Laplace Transform]]
	4. [[Properties of the Z-Transform]]

[^3]: [[Voltage-Commutated Chopper]]

[^4]: [[Current-Commutated Choppers]]

[^7]: 1. [[Discrete Random Variables]]
	2. [[Continuous Random Variables]]

[^8]: 1. [[Double Integrals]]
	2. [[Triple Integrals]]
	3. [[Volume Integrals]]
	4. [[Applications of Multiple Integrals (Area, Volume)]]

[^9]: 1. [[Block Diagram Representation]]
	2. [[Block Diagram Reduction Techniques]]

[^10]: 1. [[Singly and Doubly Excited Systems]]
	2. [[Generated EMF and Torque Equations]]
	3. [[Energy Balance in Electromechanical Systems]]
	4. [[Force and Torque in Magnetic Field Systems]]
	5. [[Concept of Co-energy]]

[^11]: [[Characteristics of DC Motors]] 

[^12]: [[Characteristics of DC Generators]] 

[^13]: 1. [[Singly and Doubly Excited Systems]]
	2. [[Starting of DC Motors]]

[^14]: 1. [[Torque-Slip Characteristics of Induction Motor]]

[^15]: 1. [[Effect of Rotor Resistance on Torque-Slip Curve]]
	2. [[Equivalent Circuit of a Three-Phase Induction Motor]]
	3. [[Induction Generator Operation]]
	4. [[Power Flow Diagram and Torque Development]]
	5. [[Starting Torque, Maximum Torque and Full Load Torque]]
	6. [[Torque-Slip Characteristics of Induction Motor]] 

[^16]: 1. [[Why Single-Phase Induction Motors are Not Self-Starting]]
	2. [[Principle of Operation of Single-Phase Induction Motor]]
	3. [[Equivalent Circuit of a Single-Phase Induction Motor]]
	4. [[Types of Single-Phase Induction Motors]]

[^17]: 1. [[First-Order Differential Equations]]
	2. [[Solving First-Order Non-Linear ODEs]]

[^18]: 1. [[Second-Order Differential Equations]]
