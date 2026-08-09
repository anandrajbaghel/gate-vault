---
subject:
  - "[[Electrical Machines]]"
tags:
  - em-tests
---
### **DC Machines**

**Q.** What is the primary purpose of **Swinburne’s Test** on a DC machine?
?
It is an indirect method used to determine the efficiency of a DC shunt or compound machine at any desired load by measuring no-load losses. It cannot be used for DC series motors (danger of runaway speed).

#electrical-machines / [[DC Machines]]

---
**Q.** In **Swinburne’s Test**, which losses are assumed constant?
?
Iron losses (Core losses) and Mechanical losses (Friction and Windage) are assumed constant.

#electrical-machines / [[DC Machines]]

---
**Q.** What is the main advantage of **Hopkinson’s Test** (Back-to-Back Test)?
?
It is a regenerative test requiring two identical DC machines. It determines efficiency and temperature rise under **full-load conditions** while drawing only the power required to supply losses from the mains.

#electrical-machines / [[DC Machines]]

---
**Q.** Why is **Field’s Test** performed?
?
It is performed to find the efficiency of two identical **DC Series Motors**. Since series motors cannot be tested at no-load (Swinburne's), this test connects them in series to test stability and efficiency.

#electrical-machines / [[DC Machines]]

---
**Q.** What is the **Retardation Test** (Running Down Test) used for?
?
It is used to separate the stray losses (Iron, Friction, and Windage losses) of a DC machine. By observing the rate of deceleration ($\frac{dN}{dt}$), the moment of inertia and rotational losses can be calculated.

#electrical-machines / [[DC Machines]]

---
**Q.** What is the limitation of the **Brake Test**?
?
It is a direct loading test. Its limitation is that it can only be performed on **small rating** motors because the entire output power is wasted as heat in the brake drum.

#electrical-machines / [[DC Machines]]

---
### **Transformers**

**Q.** On which side is the **Open Circuit (O.C.) Test** usually performed and why?
?
It is performed on the **Low Voltage (LV)** side (HV is kept open).
**Reason:** To apply rated voltage safely and use low-range instruments (Voltmeter and Wattmeter).

#electrical-machines / [[Transformers]]

---
**Q.** On which side is the **Short Circuit (S.C.) Test** usually performed and why?
?
It is performed on the **High Voltage (HV)** side (LV is shorted).
**Reason:** To conduct rated current at a lower voltage (typically 5-10% of rated), keeping the current magnitude within manageable range for instruments.

#electrical-machines / [[Transformers]]

---
**Q.** What parameters are obtained from the **Open Circuit (O.C.) Test**?
?
1.  Core Losses (Iron Losses, $P_i$).
2.  Shunt branch parameters: Magnetizing reactance ($X_m$) and Core loss resistance ($R_c$).

#electrical-machines / [[Transformers]]

---
**Q.** What parameters are obtained from the **Short Circuit (S.C.) Test**?
?
1.  Full-load Copper Losses ($P_{cu}$).
2.  Series branch parameters: Equivalent Resistance ($R_{eq}$) and Equivalent Leakage Reactance ($X_{eq}$).

#electrical-machines / [[Transformers]]

---
**Q.** What is the purpose of **Sumpner’s Test** (Back-to-Back Test) on transformers?
?
It determines the **temperature rise** and efficiency of two identical transformers under full-load conditions without actually loading them. The power source only supplies the iron and copper losses.

#electrical-machines / [[Transformers]]

---
**Q.** How are Iron Losses separated into Hysteresis and Eddy Current losses?
?
By performing the O.C. test at different frequencies ($f$) and voltages ($V$) while maintaining the $V/f$ ratio constant.
$$
\frac{P_{iron}}{f} = A + B \cdot f
$$
Where A represents Hysteresis loss constant and B represents Eddy current loss constant.

#electrical-machines / [[Transformers]]

---
### **Induction Motors**

**Q.** What information does the **No-Load Test** on a 3-phase induction motor provide?
?
It provides:
1.  Constant losses: Iron loss + Friction & Windage loss.
2.  Magnetizing current ($I_\mu$) and No-load reactance ($X_0$).
(Similar to Transformer O.C. test, but Friction/Windage is included).

#electrical-machines / [[Induction Motors]]

---
**Q.** What information does the **Blocked Rotor Test** provide?
?
It provides:
1.  Full-load Copper losses ($I^2 R$).
2.  Total equivalent leakage impedance ($R_{eq}$ and $X_{eq}$) referred to the stator.
(Performed at reduced voltage, $s=1$).

#electrical-machines / [[Induction Motors]]

---
**Q.** How do you separate Friction and Windage losses from Core losses in an Induction Motor?
?
By plotting the **No-Load Power Input ($P_{nl}$) vs. Voltage Squared ($V^2$)**.
Extrapolating the curve to $V^2 = 0$ gives the Friction and Windage losses (since Iron loss becomes zero at zero voltage).

#electrical-machines / [[Induction Motors]]

---
### **Synchronous Machines**

**Q.** What is the purpose of the **Slip Test** on a synchronous machine?
?
To determine the direct-axis synchronous reactance ($X_d$) and quadrature-axis synchronous reactance ($X_q$) of a **Salient Pole** machine.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** In the **Slip Test**, how are $X_d$ and $X_q$ calculated from the oscillograph readings?
?
$$
X_d = \frac{V_{max}}{I_{min}} \quad ; \quad X_q = \frac{V_{min}}{I_{max}}
$$
(Note: $X_d > X_q$).

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the **ZPF (Zero Power Factor) Method** or **Potier Triangle Method** used for?
?
It is used to determine the Voltage Regulation of an alternator. It accurately separates the **Armature Leakage Reactance ($X_l$)** and the **Armature Reaction MMF**. It yields the most accurate results among indirect methods.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** How do the EMF and MMF methods compare regarding Voltage Regulation?
?
1.  **EMF Method (Synchronous Impedance):** Pessimistic (Gives a value higher than actual).
2.  **MMF Method (Ampere-Turn):** Optimistic (Gives a value lower than actual).

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the **V-Curve** test?
?
It tests the variation of **Armature Current ($I_a$)** with **Field Current ($I_f$)** at a constant active load.
- $I_a$ is minimum at Unity Power Factor.
- $I_a$ increases for both lagging (under-excited) and leading (over-excited) regions.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the **Inverted V-Curve** test?
?
It tests the variation of **Power Factor** with **Field Current ($I_f$)** at constant load. The peak of the curve corresponds to Unity Power Factor.

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What parameters are derived from the **Open Circuit Characteristic (OCC)** and **Short Circuit Characteristic (SCC)**?
?
The **Synchronous Impedance ($Z_s$)**.
$$
Z_s = \frac{\text{Open Circuit Voltage (at a specific } I_f)}{\text{Short Circuit Current (at the same } I_f)}
$$
Used for calculating voltage regulation (EMF Method).

#electrical-machines / [[Synchronous Machines]]

---
**Q.** What is the procedure for the **Heat Run Test** on a synchronous generator?
?
Since large generators cannot be fully loaded for thermal testing, it is operated as a synchronous condenser (unloaded motor) with variable excitation, or using regenerative methods, to simulate heating conditions.

#electrical-machines / [[Synchronous Machines]]

---
