---
subject:
  - "[[Power Systems]]"
tags:
  - ps
---
### **Transmission Line Parameters & Performance**

**Q.** What is the formula for the Inductance ($L$) per phase per meter of a three-phase line with equilateral spacing ($D$)?
?
$$
\boxed{\quad L = 2 \times 10^{-7} \ln\left(\frac{D}{r'}\right) \quad \text{H/m} \quad}
$$
Where:
- $D$ = Spacing between conductors
- $r'$ = Geometric Mean Radius (GMR) $= 0.7788r$ (for solid conductors)

#power-system / [[Transmission Line Parameters]]

---
**Q.** What is the formula for the Capacitance ($C$) per phase per meter of a three-phase line with equilateral spacing ($D$)?
?
$$
\boxed{\quad C = \frac{2\pi\epsilon_0}{\ln\left(\frac{D}{r}\right)} \quad \text{F/m} \quad}
$$
Where $r$ is the actual radius of the conductor (not $r'$).

#power-system / [[Transmission Line Parameters]]

---
**Q.** How is the Geometric Mean Distance (GMD) calculated for a three-phase line with asymmetrical spacing ($D_{12}, D_{23}, D_{31}$)?
?
$$
\boxed{\quad \text{GMD} = \sqrt[3]{D_{12} \cdot D_{23} \cdot D_{31}} \quad}
$$

#power-system / [[Transmission Line Parameters]]

---
**Q.** What is the formula for the characteristic impedance ($Z_c$) of a lossless transmission line?
?
$$
\boxed{\quad Z_c = \sqrt{\frac{L}{C}} \quad}
$$
For overhead lines, $Z_c \approx 400 \, \Omega$. For cables, $Z_c \approx 40 \, \Omega$.

#power-system / [[Transmission Line Performance]]

---
**Q.** What is the formula for the Propagation Constant ($\gamma$) of a transmission line?
?
$$
\boxed{\quad \gamma = \alpha + j\beta = \sqrt{(R + j\omega L)(G + j\omega C)} \quad}
$$
For a lossless line ($R=0, G=0$), $\alpha=0$ and $\beta = \omega\sqrt{LC}$.

#power-system / [[Transmission Line Performance]]

---
**Q.** State the ABCD constants for a Short Transmission Line.
?
$$
\begin{pmatrix} A & B \\ C & D \end{pmatrix} = \begin{pmatrix} 1 & Z \\ 0 & 1 \end{pmatrix}
$$
Where $Z$ is the total series impedance.

#power-system / [[Transmission Line Performance]]

---
**Q.** State the ABCD constants for a Medium Transmission Line (Nominal $\pi$ Model).
?
$$
\begin{pmatrix} A & B \\ C & D \end{pmatrix} = \begin{pmatrix} 1 + \frac{YZ}{2} & Z \\ Y(1 + \frac{YZ}{4}) & 1 + \frac{YZ}{2} \end{pmatrix}
$$

#power-system / [[Transmission Line Performance]]

---
**Q.** State the ABCD constants for a Medium Transmission Line (Nominal T Model).
?
$$
\begin{pmatrix} A & B \\ C & D \end{pmatrix} = \begin{pmatrix} 1 + \frac{YZ}{2} & Z(1 + \frac{YZ}{4}) \\ Y & 1 + \frac{YZ}{2} \end{pmatrix}
$$

#power-system / [[Transmission Line Performance]]

---
**Q.** What is the condition for a transmission line network to be reciprocal?
?
$$
\boxed{\quad AD - BC = 1 \quad}
$$
This holds true for all passive transmission line networks.

#power-system / [[Transmission Line Performance]]

---
**Q.** What is the condition for a transmission line network to be symmetrical?
?
$$
\boxed{\quad A = D \quad}
$$

#power-system / [[Transmission Line Performance]]

---
**Q.** What is the formula for Surge Impedance Loading (SIL)?
?
$$
\boxed{\quad \text{SIL} = \frac{V_{LL}^2}{Z_c} \quad \text{MW} \quad}
$$
Where $V_{LL}$ is the line-to-line voltage in kV.

#power-system / [[Transmission Line Performance]]

---
**Q.** What is the simplified formula for the percentage voltage regulation of a short transmission line?
?
$$
\boxed{\quad \% \text{Reg} = \frac{I_R (R \cos\phi_r \pm X \sin\phi_r)}{V_R} \times 100 \quad}
$$
Use '+' for lagging loads and '-' for leading loads.

#power-system / [[Voltage Regulation]]

---
**Q.** What is the Ferranti Effect voltage rise approximation for a line of length $l$?
?
The receiving end voltage is higher than the sending end at no-load by approximately:
$$
\boxed{\quad V_R - V_S \approx \frac{V_S \omega^2 l^2 LC}{2} \quad}
$$
Or simply $\Delta V \propto l^2$.

#power-system / [[Transmission Line Performance]]

---
**Q.** What is the formula for the sag ($S$) of a conductor with weight $w$ per unit length, span $L$, and tension $T$?
?
$$
\boxed{\quad S = \frac{w L^2}{8 T} \quad}
$$
This assumes a parabolic shape (for small sags).

#power-system / [[Mechanical Design]]

---
**Q.** What is the Critical Disruptive Voltage ($V_d$) in Corona analysis?
?
$$
\boxed{\quad V_d = g_0 \delta m_0 r \ln\left(\frac{D}{r}\right) \quad}
$$
Where $g_0$ is the breakdown strength of air (30 kV/cm peak), $\delta$ is air density factor, and $m_0$ is surface irregularity factor.

#power-system / [[Corona]]

---
**Q.** How is Corona Power Loss ($P_c$) related to the frequency ($f$) and supply voltage ($V$)?
?
$$
\boxed{\quad P_c \propto (f + 25) \sqrt{\frac{r}{D}} (V - V_d)^2 \quad}
$$

#power-system / [[Corona]]

---
### **Underground Cables**

**Q.** How does the insulation resistance ($R_{ins}$) of a cable vary with its length ($l$)?
?
$$
\boxed{\quad R_{ins} = \frac{\rho}{2\pi l} \ln\left(\frac{R}{r}\right) \quad}
$$
Insulation resistance is **inversely proportional** to length.

#power-system / [[Cables]]

---
**Q.** What is the formula for the maximum ($g_{max}$) and minimum ($g_{min}$) dielectric stress in a single-core cable?
?
$$
\boxed{\quad g_{max} = \frac{V}{r \ln(R/r)} \quad ; \quad g_{min} = \frac{V}{R \ln(R/r)} \quad}
$$
The relationship is $g_{max} \times r = g_{min} \times R$.

#power-system / [[Cables]]

---
**Q.** What is the condition for the most economical size of a cable conductor?
?
For a fixed outer sheath radius ($R$) and voltage ($V$), the gradient is minimum when:
$$
\boxed{\quad \frac{R}{r} = e \approx 2.718 \quad}
$$

#power-system / [[Cables]]

---
### **Fault Analysis**

**Q.** What is the transformation matrix $A$ used to convert symmetrical components ($I_{012}$) to phase currents ($I_{abc}$)?
?
$$
\begin{pmatrix} I_a \\ I_b \\ I_c \end{pmatrix} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & a^2 & a \\ 1 & a & a^2 \end{pmatrix} \begin{pmatrix} I_0 \\ I_1 \\ I_2 \end{pmatrix}
$$
Where $a = 1\angle 120^\circ$.

#power-system / [[Symmetrical Components]]

---
**Q.** What is the formula for the fault current ($I_f$) in a Single Line-to-Ground (LG) fault?
?
$$
\boxed{\quad I_f = 3I_0 = \frac{3 E_a}{Z_1 + Z_2 + Z_0 + 3Z_f} \quad}
$$
Where $Z_f$ is the external fault impedance.

#power-system / [[Fault Analysis]]

---
**Q.** What is the formula for the fault current ($I_f$) in a Line-to-Line (LL) fault?
?
$$
\boxed{\quad I_f = \sqrt{3} I_1 = \frac{\sqrt{3} E_a}{Z_1 + Z_2 + Z_f} \quad}
$$
Note: Zero sequence impedance ($Z_0$) is not involved in LL faults.

#power-system / [[Fault Analysis]]

---
**Q.** What is the relation between sequence networks for a Line-to-Line-to-Ground (LLG) fault?
?
The three sequence networks (Positive, Negative, and Zero) are connected in **parallel**.
$$
I_1 + I_2 + I_0 = 0 \quad (\text{if } Z_f=0)
$$

#power-system / [[Fault Analysis]]

---
**Q.** What is the fault current for a balanced Three-Phase (LLL) fault?
?
$$
\boxed{\quad I_f = \frac{E_a}{Z_1 + Z_f} \quad}
$$
Only the positive sequence network is involved.

#power-system / [[Fault Analysis]]

---
**Q.** How is the Short Circuit MVA (SC MVA) calculated using per-unit impedance?
?
$$
\boxed{\quad \text{SC MVA} = \frac{\text{Base MVA}}{X_{th(pu)}} \quad}
$$

#power-system / [[Fault Analysis]]

---
### **Power System Stability**

**Q.** State the Swing Equation in terms of the inertia constant $H$.
?
$$
\boxed{\quad \frac{2H}{\omega_s} \frac{d^2\delta}{dt^2} = P_m - P_e \quad}
$$
Where $P_m$ and $P_e$ are in per-unit. $H$ is in seconds (MJ/MVA).

#power-system / [[Stability]]

---
**Q.** What is the relationship between Inertia Constant $H$ (MJ/MVA) and Angular Momentum $M$ (MJ-s/elect. rad)?
?
$$
\boxed{\quad M = \frac{2H}{\omega_s} = \frac{GH}{\pi f} \quad}
$$

#power-system / [[Stability]]

---
**Q.** What is the Steady State Stability Limit (SSSL) of a system with reactance $X$ connecting voltages $E$ and $V$?
?
$$
\boxed{\quad P_{max} = \frac{E V}{X} \quad}
$$

#power-system / [[Steady-State Stability Limit]]

---
**Q.** State the formula for the Critical Clearing Angle ($\delta_{cr}$) for a fault near the generator bus (with pre-fault $P_{max1}$, fault $P_{max2}=0$, post-fault $P_{max3}$).
?
$$
\boxed{\quad \cos \delta_{cr} = \frac{P_m (\delta_{max} - \delta_0) + P_{max3} \cos \delta_{max}}{P_{max3}} \quad}
$$
(This is for the specific case where power during fault is zero).

#power-system / [[Stability]]

---
**Q.** What is the frequency of oscillation of the rotor for small disturbances?
?
$$
\boxed{\quad \omega_n = \sqrt{\frac{\omega_s P_s}{2H}} \quad}
$$
Where $P_s$ is the synchronizing power coefficient ($P_s = \frac{dP}{d\delta}$).

#power-system / [[Stability]]

---
### **Load Flow Studies**

**Q.** In a Y-Bus matrix, what is the value of a diagonal element $Y_{ii}$?
?
$Y_{ii}$ is the sum of all admittances connected directly to bus $i$ (including shunt admittances to ground).
$$
Y_{ii} = \sum y_{ik} + y_{i(shunt)}
$$

#power-system / [[Load Flow]]

---
**Q.** In a Y-Bus matrix, what is the value of an off-diagonal element $Y_{ij}$?
?
$Y_{ij}$ is the negative of the admittance connected between bus $i$ and bus $j$.
$$
\boxed{\quad Y_{ij} = -y_{ij} \quad}
$$

#power-system / [[Load Flow]]

---
**Q.** What are the specified (known) quantities for a Slack Bus (Reference Bus)?
?
Voltage magnitude ($|V|$) and Voltage angle ($\delta$).
(Unknowns are P and Q).

#power-system / [[Load Flow]]

---
**Q.** What are the specified (known) quantities for a PV Bus (Generator Bus)?
?
Real Power ($P$) and Voltage magnitude ($|V|$).
(Unknowns are Q and $\delta$).

#power-system / [[Load Flow]]

---
**Q.** What is the size of the Jacobian Matrix for a system with $N$ buses and $N_g$ voltage-controlled buses (PV buses)?
?
$$
\boxed{\quad \text{Size} = (2N - 2 - N_g) \times (2N - 2 - N_g) \quad}
$$

#power-system / [[Load Flow]]

---
### **Economic Load Dispatch**

**Q.** What is the condition for economic dispatch including transmission losses?
?
$$
\boxed{\quad L_1 \frac{dC_1}{dP_1} = L_2 \frac{dC_2}{dP_2} = \lambda \quad}
$$
Where $L_i$ is the penalty factor for plant $i$.

#power-system / [[Economic Dispatch]]

---
**Q.** What is the formula for the Penalty Factor ($L_i$) of plant $i$?
?
$$
\boxed{\quad L_i = \frac{1}{1 - \frac{\partial P_L}{\partial P_i}} \quad}
$$
Where $\frac{\partial P_L}{\partial P_i}$ is the incremental transmission loss.

#power-system / [[Economic Dispatch]]

---
### **Power System Protection**

**Q.** What is the Plug Setting Multiplier (PSM) for an overcurrent relay?
?
$$
\boxed{\quad \text{PSM} = \frac{\text{Fault Current}}{\text{Current Setting} \times \text{CT Ratio}} \quad}
$$

#power-system / [[Protection]]

---
**Q.** State the Universal Torque Equation for a relay.
?
$$
\boxed{\quad T = K_1 I^2 + K_2 V^2 + K_3 VI \cos(\theta - \tau) + K_4 \quad}
$$
Where $T$ is net torque, $K_4$ is spring torque.

#power-system / [[Protection]]

---
**Q.** For a Distance Relay, what ratio does it measure to detect faults?
?
It measures the ratio of Voltage to Current ($V/I = Z$). If the measured impedance is less than the set impedance, it trips.

#power-system / [[Protection]]

---
**Q.** Match the distance relay types (Impedance, Reactance, Mho) with their primary applications.
?
- **Reactance Relay:** Earth faults, Short lines (Unaffected by arc resistance).
- **Impedance Relay:** Phase faults, Medium lines.
- **Mho Relay:** Long lines, Power swings (Directional property).

#power-system / [[Protection]]

---
**Q.** What is the circulating current ($I$) in a Differential Protection scheme for a transformer during an internal fault (simplistic view)?
?
The difference between the secondary currents of the CTs on the primary and secondary sides.
$$
I = |i_1 - i_2|
$$

#power-system / [[Protection]]

---
**Q.** What is the formula for the arc resistance ($R_{arc}$) generally used in protection studies (Warrington's formula)?
?
$$
\boxed{\quad R_{arc} = \frac{8750 \cdot L}{I^{1.4}} \quad}
$$
Where L is arc length and I is arc current.

#power-system / [[Protection]]

---
