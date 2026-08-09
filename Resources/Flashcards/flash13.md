---
subject:
  - "[[Electrical Machines]]"
tags:
  - flashcards
---
#### **Section 1: Fundamentals & Magnetic Circuits**

**Q.** In a linear electromagnetic system, what is the formula for mechanical force derived from co-energy ($W_c$) with respect to position ($x$)?
?
$$\boxed{\quad F_f = +\left( \frac{\partial W_f'(i, x)}{\partial x} \right)_{i=\text{const}} \quad}$$

#electrical-machines / [[Concept of Co-energy]]

---

**Q.** What is the physical significance of laminating the core in an electrical machine? Which type of loss does it primarily reduce?
?
Physical Significance of Laminating the Core – Electrical Machines

|Aspect|Description|
|---|---|
|Purpose of Lamination|The core of electrical machines (transformers, motors, generators) is laminated to reduce **eddy current losses**.|
|Construction Detail|The solid iron core is replaced with **thin steel sheets (laminations)**, each insulated from the next by a thin oxide layer or varnish.|
|Reasoning|Eddy currents are circular currents induced in the core by changing magnetic flux. Laminations increase the resistance path for these currents, thus reducing their magnitude.|
|Loss Reduced|Eddy Current Loss|
|Additional Effect|Minimizes core heating, improving machine efficiency and preventing thermal damage.|
|Note|Lamination does **not** significantly affect **hysteresis loss**—that depends on the core material (e.g., silicon steel reduces hysteresis).|

*Summary*
Laminating the core physically restricts eddy current flow, thereby **reducing eddy current losses** and improving the efficiency of the electrical machine.

#electrical-machines / 

---

**Q.** State the relationship between MMF, reluctance ($\mathcal{R}$), and magnetic flux ($\Phi$) in a magnetic circuit. What is the electrical analogy to this law?
?
The relationship between MMF, flux, and reluctance is described by an equation analogous to Ohm's Law:
$$ \boxed{\quad \Phi = \frac{\mathcal{F}}{\mathcal{R}} \quad} \quad \text{or} \quad \mathcal{F} = \Phi \mathcal{R} $$
This law is the cornerstone of magnetic circuit analysis.

| Magnetic Circuit | Electric Circuit |
| :--- | :--- |
| Flux ($\Phi$) | Current ($I$) |
| MMF ($\mathcal{F}$) | EMF ($V$) |
| Reluctance ($\mathcal{R}$) | Resistance ($R$) |

#electrical-machines / [[Magnetic Circuits]]

---
#### **Section 2: Transformers**

4.  What is the fundamental principle of operation of a transformer?

---

**Q.** Write down the complete RMS EMF equation for a single-phase transformer.
?
The alternating flux in the core can be represented by a sinusoidal waveform, $\Phi(t) = \Phi_{max} \sin(\omega t)$.
According to Faraday's Law, the instantaneous induced EMF in a winding with $N$ turns is:
$$e(t) = N \frac{d\Phi}{dt} = N \frac{d}{dt}(\Phi_{max} \sin(\omega t)) = N\omega\Phi_{max}\cos(\omega t)$$
The peak value of this EMF is $E_{max} = N\omega\Phi_{max} = 2\pi f N \Phi_{max}$.
The RMS value of the induced EMF is $E_{rms} = \frac{E_{max}}{\sqrt{2}} = \frac{2\pi f N \Phi_{max}}{\sqrt{2}}$.

$$\boxed{\quad E_{rms} = 4.44 f N \Phi_{max} \quad}$$
This equation is valid for both the primary ($E_1$, $N_1$) and secondary ($E_2$, $N_2$) windings, as they are linked by the same flux $\Phi_{max}$ at the same frequency $f$.

#electrical-machines / [[Principle of Operation of a Transformer]]

---

6.  Which test is performed to determine the core (iron) losses of a transformer, and on which side (HV or LV) is it usually performed? Why?

---

7.  Which test is performed to find the equivalent resistance and leakage reactance (and thus, full-load copper losses)?

---

8.  What is the condition for achieving maximum efficiency in a transformer?

---

9.  Why is the voltage regulation of a transformer with a leading power factor load sometimes negative?

---

10. Name three essential conditions for the successful parallel operation of two three-phase transformers.

---

11. What is the primary advantage of an autotransformer over a two-winding transformer?

---

#### **Section 3: DC Machines**

12. What is the primary function of the commutator in a DC machine?

---

13. Write the expression for the back EMF ($E_b$) in a DC motor in terms of flux, speed, and machine constants.

---

14. Why is a starting resistor (starter) necessary for medium and large DC motors?

---

15. What is Armature Reaction? What are its two primary demagnetizing and cross-magnetizing effects?

---

16. Name the two most common methods for controlling the speed of a DC shunt motor.

---

17. Compare the speed-torque characteristics of a DC Shunt Motor, a Series Motor, and a Cumulatively Compounded Motor.

---

18. Why should a DC series motor never be started without a mechanical load?

---

#### **Section 4: Three-Phase Induction Motors**

19. How is the rotating magnetic field (RMF) produced in the stator of a three-phase induction motor?

---

20. Define 'slip' ($s$) and write its formula in terms of synchronous speed ($N_s$) and rotor speed ($N_r$).

---

21. What is the frequency of the rotor currents in an induction motor?

---

22. Sketch the complete torque-slip characteristic of a three-phase induction motor, indicating the starting torque, maximum torque, and the stable operating region.

---

23. What happens to the starting torque and the slip at maximum torque if the rotor resistance is increased?

---

24. Explain why a single-phase induction motor is not self-starting.

---

25. Name two common methods for starting a squirrel cage induction motor.

---

#### **Section 5: Synchronous Machines**

26. Why must a synchronous motor run at synchronous speed?

---

27. Define voltage regulation for an alternator. Is a lower or higher value generally desirable?

---

28. What is the physical significance of the power angle, $\delta$, in a synchronous machine?

---

29. What are V-curves and Inverted V-curves for a synchronous motor? What variables are plotted on the axes for each?

---

30. What is 'hunting' in a synchronous machine, and what constructional feature is added to the machine to mitigate it?

---

31. How can a synchronous motor be used to improve the power factor of a power system? What is this mode of operation called?

---

32. What is the key difference in the power-angle equation between a cylindrical rotor and a salient pole synchronous machine?

---

