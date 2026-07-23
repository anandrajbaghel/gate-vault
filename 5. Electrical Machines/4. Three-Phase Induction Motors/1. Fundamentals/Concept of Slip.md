---
tags:
  - electrical-machines
  - induction-motors
  - slip
  - asynchronous-motor
created: 2025-09-17
aliases:
  - Slip in Induction Motor
  - Asynchronous Motor Slip
  - Slip Significance
  - Asynchronous Motor
  - Concept of Slip and its Significance
subject: "[[Electrical Machines]]"
parent:
  - Three-Phase Induction Motors
  - "[[Induction Machines]]"
formula:
  - "Slip : $$s = \\frac{N_s - N_r}{N_s}$$"
  - "Rotor Speed (in terms of Slip) : $$N_r = N_s (1 - s)$$"
  - "Rotor Induced EMF : $$E_r = s \\cdot E_0$$"
  - "Rotor Reactance : $$X_r = s \\cdot (2\\pi f_s L_r) = s \\cdot X_0$$"
modified: 2026-07-23T20:44:02
---
### Concept of Slip and its Significance
#induction-motors #slip

> **Slip** is the fundamental quantity that governs the operation of an induction motor. ==It is defined as the relative speed between the stator's [[Rotating Magnetic Field (RMF)]] and the mechanical speed of the rotor, expressed as a fraction or percentage of the synchronous speed.== The existence of slip is essential for the motor to produce torque.

#### Definition of Slip
#slip/definition

The ==slip ($s$) of an induction motor is given by the formula==:
$$\boxed{\quad s = \frac{N_s - N_r}{N_s}\quad}$$
Where:
-   $N_s$ = Synchronous speed of the RMF in RPM.
-   $N_r$ = ==Actual mechanical speed of the rotor in RPM==.

The ==rotor speed ($N_r$) can be expressed in terms of synchronous speed and slip==:
$$\boxed{\quad N_r = N_s (1 - s) \quad}$$
At standstill (starting), the rotor speed $N_r=0$, so the slip $s=1$. At an ideal no-load condition, the rotor speed is very close to the synchronous speed, so the slip is nearly zero ($s \approx 0$). For a typical motor at full load, the slip is in the range of 2% to 5% (i.e., $s = 0.02$ to $0.05$).

> [!info]- Converting RPM to rad/sec
> 
> > [!pyq]- PYQ : 2020
> > ![[ee_2017(2)#^q14]]
>
> To convert rotational speed from revolutions per minute (RPM, typically denoted as $N$) to mechanical angular velocity in radians per second (rad/s, denoted as $\omega_m$):
> 
> $$\omega_m = \frac{2\pi N}{60}$$
> 
> **Key Points & Derivation:**
> * **The Logic:** 1 full revolution equals $2\pi$ radians, and 1 minute equals $60$ seconds. Multiplying by $\frac{2\pi}{60}$ (which simplifies to $\frac{\pi}{30}$) perfectly converts the units.
> * **Power & Torque:** The most critical place you will need this is in the mechanical power equation: $P_{mech} = \tau_{ind} \omega_m$. You **must** use rad/sec here; using RPM will result in the wrong torque value.
> 
> > [!examtip] Exam Strategy
> > ==When a question asks for a speed in rad/sec (like the speed of rotor flux), calculate everything in RPM first. Apply this conversion as your very last step to avoid carrying messy $\pi$ decimals through your intermediate steps.==

> [!error] Relative Speeds in a 3-Phase Induction Motor
> 
> > [!pyq]- PYQ : 2020
> > ![[ee_2011#^q39]]
> 
> When solving relative speed problems, always define all speeds with respect to the **stationary stator structure** first:
> - **Speed of Stator ($N_{stator}$)** = 0
> - **Speed of Stator RMF ($N_s$)** = $$\frac{120f}{P}$$
> - **Speed of Rotor ($N_r$)** = $$N_s(1 - s)$$
> - **Speed of Rotor Field w.r.t Rotor** = $$sN_s$$
> - **Speed of Rotor Field in Space** = $$N_r + sN_s = N_s$$
> 
> > [!success] Key Exam Takeaways
> > 1. The relative speed between the Stator RMF and Rotor RMF is always **ZERO** ([[Frequency of Rotor Current and EMF#Magnetic Locking of Rotor and Stator Fields|Magnetic Locking]]).
> > 2. The relative speed of the rotor with respect to the stator RMF is always **negative** ($-sN_s$), because the rotor mechanically trails the magnetic field.

---
#### Significance and Effects of Slip
#slip/significance

Slip is not just a mathematical value; it is a direct measure of the motor's load and directly determines the key electrical parameters of the rotor circuit. Without slip, there is no relative motion, no induced EMF, and therefore no torque.

##### 1. Frequency of Rotor Current and EMF
#rotor-current/frequency 

![[Frequency of Rotor Current and EMF#Derivation of Rotor Frequency]]

---
##### 2. Magnitude of Rotor Induced EMF
#rotor-emf

The induced EMF in the rotor is directly proportional to the relative speed between the rotor and the RMF.
Let $E_2$ be the induced EMF in the rotor at standstill ($s=1$). The induced EMF at any slip $s$, denoted $E_{2r}$, is:
$$\begin{align}
E_{2r} \propto (N_s - N_r) \implies E_{2r} \propto s N_s
\end{align}$$
Therefore, the running rotor EMF is slip times the standstill EMF:
$$\boxed{\quad E_{2r} = s E_2 \quad}$$

---
##### 3. Rotor Reactance
#rotor-reactance 

The reactance of the rotor winding depends on its frequency ($X = 2\pi f L$).
Let $X_2$ be the rotor reactance at standstill ($s=1$), where the frequency is $f$.
$$ X_2 = 2 \pi f L_2 $$
The reactance at any slip $s$, where the frequency is $f_r = s f$, is:
$$ X_{2r} = 2 \pi f_r L_2 = 2 \pi (s f) L_2 = s (2 \pi f L_2) $$
$$\boxed{\quad X_{2r} = s X_2 \quad}$$
The rotor resistance ($R_2$) is assumed to be independent of frequency.

---
#### Slip in Different Operating Modes
#slip/operating-modes 

The value of slip determines the motor's mode of operation:
* **Motoring Mode**: $0 < s < 1$. The rotor rotates in the same direction as the RMF but at a speed less than synchronous speed ($0 < N_r < N_s$). The machine draws electrical power and delivers mechanical power.
* **Standstill**: $s = 1$. This occurs when the rotor is stationary ($N_r = 0$), such as at the moment of starting. The relative speed is at its maximum.
* **[[Induction Generator Operation#Induction Generator Operation|Generating Mode (Induction Generator)]]**: $s < 0$. The rotor is driven by a prime mover at a speed *above* synchronous speed ($N_r > N_s$). The machine draws mechanical power and delivers electrical power back to the supply.
* **Braking Mode (Plugging)**: $s > 1$. This occurs when the rotor is rotating in the opposite direction to the RMF, or when the direction of the RMF is reversed while the motor is running. The machine draws electrical power and acts as a brake, producing a torque that opposes the rotation.

---
### Related Concepts
#slip/related-concepts

> [[Rotating Magnetic Field (RMF)]]

[[Frequency of Rotor Current and EMF]]
[[Equivalent Circuit of a Three-Phase Induction Motor]]
[[Torque-Slip Characteristics of Induction Motor]]
[[Induction Generator Operation]]