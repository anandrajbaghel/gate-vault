---
subject:
  - "[[Electrical Machines]]"
tags:
  - em
---
### **Transformers**

**Q.** State the EMF equation of a transformer.
?
$$
\boxed{\quad E = 4.44 f N \phi_m \quad}
$$
Where:
- $f$ = Frequency
- $N$ = Number of turns
- $\phi_m$ = Maximum flux in the core ($B_m \times A$)

#electrical-machines / [[Transformers]]

---
**Q.** What is the condition for maximum efficiency in a transformer?
?
Maximum efficiency occurs when the Copper Loss (Variable Loss) equals the Iron Loss (Constant Loss).
$$
\boxed{\quad P_{cu} = P_i \quad \text{or} \quad I^2 R_{eq} = P_i \quad}
$$

#electrical-machines / [[Transformers]]

---
**Q.** What is the formula for the load fraction ($x$) at which maximum efficiency occurs?
?
$$
\boxed{\quad x = \sqrt{\frac{P_i}{P_{cu(fl)}}} \quad}
$$
Where $P_i$ is Iron loss and $P_{cu(fl)}$ is full-load copper loss. The KVA at max efficiency is $x \times S_{rated}$.

#electrical-machines / [[Transformers]]

---
**Q.** What is the simplified formula for Voltage Regulation of a transformer?
?
$$
\boxed{\quad \% \text{Reg} = \frac{I(R_{eq}\cos\phi \pm X_{eq}\sin\phi)}{V_{rated}} \times 100 \quad}
$$
- Use '$+$' for lagging power factor.
- Use '$-$' for leading power factor.

#electrical-machines / [[Transformers]]

---
**Q.** What is the condition for Zero Voltage Regulation?
?
Zero regulation occurs at a leading power factor when:
$$
\boxed{\quad \tan\phi = -\frac{R_{eq}}{X_{eq}} \quad}
$$
This implies the voltage rise due to capacitive load cancels the voltage drop.

#electrical-machines / [[Transformers]]

---
**Q.** What is the condition for Maximum Voltage Regulation?
?
Maximum regulation occurs at a lagging power factor when:
$$
\boxed{\quad \tan\phi = \frac{X_{eq}}{R_{eq}} \quad}
$$
Here, the power factor angle equals the impedance angle of the transformer.

#electrical-machines / [[Transformers]]

---
**Q.** What is the formula for the weight of copper in an Auto-transformer ($W_{auto}$) compared to a 2-winding transformer ($W_{2wdg}$)?
?
$$
\boxed{\quad W_{auto} = (1 - K) \times W_{2wdg} \quad}
$$
Where $K = \frac{V_L}{V_H}$ (Transformation ratio < 1).
Alternatively, Saving in Copper = $K \times W_{2wdg}$.

#electrical-machines / [[Transformers]]

---
**Q.** How is the load shared ($S_A, S_B$) between two transformers connected in parallel with impedances $Z_A$ and $Z_B$ (in p.u.)?
?
$$
\boxed{\quad S_A = S_{total} \frac{Z_B}{Z_A + Z_B} \quad ; \quad S_B = S_{total} \frac{Z_A}{Z_A + Z_B} \quad}
$$
Load sharing is inversely proportional to their per-unit impedances.

#electrical-machines / [[Transformers]]

---
### **DC Machines**

**Q.** State the EMF equation of a DC Generator.
?
$$
\boxed{\quad E_g = \frac{\phi Z N P}{60 A} \quad}
$$
Where:
- $P$ = Poles, $Z$ = Conductors
- $A$ = Parallel paths ($A=P$ for Lap, $A=2$ for Wave)
- $N$ = Speed in RPM

#electrical-machines / [[DC Machines]]

---
**Q.** State the Torque equation of a DC Motor.
?
$$
\boxed{\quad T = \frac{P Z \phi I_a}{2\pi A} = K_a \phi I_a \quad}
$$
Torque is independent of speed.

#electrical-machines / [[DC Machines]]

---
**Q.** What is the condition for maximum power output in a DC Motor?
?
Maximum power is developed when the Back EMF ($E_b$) is half of the supply voltage ($V$).
$$
\boxed{\quad E_b = \frac{V}{2} \quad}
$$

#electrical-machines / [[DC Machines]]

---
**Q.** How is the speed ($N$) of a DC shunt motor related to Back EMF ($E_b$) and Flux ($\phi$)?
?
$$
\boxed{\quad N \propto \frac{E_b}{\phi} = \frac{V - I_a R_a}{\phi} \quad}
$$

#electrical-machines / [[DC Machines]]

---
**Q.** For a DC Series Motor, what is the relationship between Torque ($T$) and Armature Current ($I_a$)?
?
- **Before Saturation:** $\phi \propto I_a \implies T \propto I_a^2$
- **After Saturation:** $\phi = \text{const} \implies T \propto I_a$

#electrical-machines / [[DC Machines]]

---
**Q.** For a DC Series Motor, what is the relationship between Speed ($N$) and Torque ($T$)?
?
$$
\boxed{\quad N \propto \frac{1}{\sqrt{T}} \quad}
$$
This implies that at light loads (low torque), the speed becomes dangerously high.

#electrical-machines / [[DC Machines]]

---
### **Induction Machines**

**Q.** What is the formula for Slip ($s$) in an induction motor?
?
$$
\boxed{\quad s = \frac{N_s - N_r}{N_s} \quad}
$$

#electrical-machines / [[Induction Motors]]

---
**Q.** What is the frequency of the rotor induced EMF ($f_r$)?
?
$$
\boxed{\quad f_r = s \cdot f_s \quad}
$$
Where $f_s$ is the stator supply frequency.

#electrical-machines / [[Induction Motors]]

---
**Q.** What is the ratio of Rotor Copper Loss ($P_{cu}$) to Rotor Input Power ($P_{in}$)?
?
$$
\boxed{\quad P_{cu} = s \cdot P_{in} \quad}
$$

#electrical-machines / [[Induction Motors]]

---
**Q.** What is the ratio of Gross Mechanical Power Developed ($P_{mech}$) to Rotor Input Power ($P_{in}$)?
?
$$
\boxed{\quad P_{mech} = (1 - s) \cdot P_{in} \quad}
$$

#electrical-machines / [[Induction Motors]]

---
**Q.** What is the approximate formula for Torque ($T$) in the low slip region?
?
In the low slip region (normal operation), $sX_2 \ll R_2$:
$$
\boxed{\quad T \propto \frac{s V^2}{R_2} \quad}
$$
Torque is directly proportional to slip.

#electrical-machines / [[Induction Motors]]

---
**Q.** What is the formula for the slip at maximum torque ($s_{mT}$)?
?
$$
\boxed{\quad s_{mT} = \frac{R_2}{\sqrt{R_{th}^2 + (X_{th} + X_2)^2}} \approx \frac{R_2}{X_2} \quad}
$$
Note: $s_{mT}$ depends on rotor resistance ($R_2$).

#electrical-machines / [[Induction Motors]]

---
**Q.** What is the formula for Maximum Torque ($T_{max}$)?
?
$$
\boxed{\quad T_{max} \approx \frac{3}{2\omega_s} \frac{V^2}{X_2} \quad}
$$
Important: $T_{max}$ is **independent** of rotor resistance ($R_2$), though the speed at which it occurs depends on $R_2$.

#electrical-machines / [[Induction Motors]]

---
**Q.** How does the starting torque ($T_{st}$) of a squirrel cage induction motor vary with supply voltage ($V$) and frequency ($f$)?
?
$$
\boxed{\quad T_{st} \propto \left( \frac{V}{f} \right)^2 \quad}
$$
Or simply $T_{st} \propto V^2$.

#electrical-machines / [[Induction Motors]]

---
**Q.** What is the relationship between Full Load Torque ($T_{fl}$) and Maximum Torque ($T_{max}$)?
?
$$
\boxed{\quad \frac{T_{fl}}{T_{max}} = \frac{2 s_{fl} s_{mT}}{s_{fl}^2 + s_{mT}^2} \quad}
$$

#electrical-machines / [[Induction Motors]]

---
**Q.** For a 3-phase induction motor, what is the relationship between line current with Star-Delta starter ($I_{st(Y\Delta)}$) and Direct-On-Line starter ($I_{st(DOL)}$)?
?
$$
\boxed{\quad I_{st(Y\Delta)} = \frac{1}{3} I_{st(DOL)} \quad}
$$
Similarly, Starting Torque with Y-$\Delta$ is $1/3$ of DOL starting torque.

#electrical-machines / [[Induction Motors]]

---
### **Synchronous Machines**

**Q.** State the EMF equation of an Alternator including winding factors.
?
$$
\boxed{\quad E_{ph} = 4.44 K_p K_d f \phi T_{ph} \quad}
$$
Where $K_p$ is the pitch factor and $K_d$ is the distribution factor.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the Pitch Factor ($K_p$) for a coil short-pitched by angle $\alpha$?
?
$$
\boxed{\quad K_p = \cos\left(\frac{\alpha}{2}\right) \quad}
$$
Where $\alpha$ is the chording angle.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the Distribution Factor ($K_d$) for a winding with $m$ slots/pole/phase and slot angle $\gamma$?
?
$$
\boxed{\quad K_d = \frac{\sin(m\gamma/2)}{m \sin(\gamma/2)} \quad}
$$

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the Power Angle equation for a Cylindrical Rotor Synchronous Machine?
?
$$
\boxed{\quad P = \frac{E_f V_t}{X_s} \sin\delta \quad}
$$
Maximum power occurs at $\delta = 90^\circ$.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the Power Angle equation for a Salient Pole Synchronous Machine?
?
$$
\boxed{\quad P = \frac{E_f V_t}{X_d} \sin\delta + \frac{V_t^2}{2}\left(\frac{1}{X_q} - \frac{1}{X_d}\right) \sin 2\delta \quad}
$$
The second term is the Reluctance Power.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the formula for Voltage Regulation of an alternator?
?
$$
\boxed{\quad \% \text{Reg} = \frac{|E_f| - |V_t|}{|V_t|} \times 100 \quad}
$$
Where $E_f$ is the excitation EMF calculated as:
$E_f = \sqrt{(V\cos\phi + I_a R_a)^2 + (V\sin\phi \pm I_a X_s)^2}$

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the Short Circuit Ratio (SCR) of a synchronous machine?
?
$$
\boxed{\quad \text{SCR} = \frac{1}{X_{s(saturated, pu)}} \quad}
$$
A higher SCR implies a larger air gap, better stability, but a larger, more expensive machine.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the Synchronizing Torque coefficient ($P_{syn}$)?
?
$$
\boxed{\quad P_{syn} = \frac{dP}{d\delta} = \frac{E_f V_t}{X_s} \cos\delta \quad}
$$
(For cylindrical rotor). This defines the "electrical stiffness" of the coupling.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** For a Synchronous Motor, how is the reactive power ($Q$) related to excitation?
?
- **Over-excited ($E_f \cos\delta > V_t$):** Delivers Reactive Power (Acts like a Capacitor).
- **Under-excited ($E_f \cos\delta < V_t$):** Absorbs Reactive Power (Acts like an Inductor).

#electrical-machines / [[Synchronous Machines]]

---
### **Single Phase Motors**

**Q.** Why is a single-phase induction motor not self-starting?
?
Because the pulsating magnetic field produced by a single-phase winding can be resolved into two rotating magnetic fields of equal magnitude rotating in opposite directions (Double Revolving Field Theory), resulting in zero net starting torque.

#electrical-machines / [[Special Machines]]

---
**Q.** What is the speed-torque characteristic of a Universal Motor?
?
It has a high starting torque and variable speed characteristics (Series Motor characteristics).
$$
\boxed{\quad N \propto \frac{1}{\sqrt{T}} \quad}
$$
It can operate on both AC and DC.

#electrical-machines / [[Special Machines]]

---