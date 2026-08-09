---
tags:
  - measurements
  - indicating-instruments
  - electrodynamometer
  - torque-equation
  - gate
created: 2025-10-18
aliases:
  - Dynamometer Torque
  - Electrodynamometer Torque Equation
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - Electrodynamometer Type Instruments
modified: 2026-08-04T10:42:13
---
### Torque Equation of an Electrodynamometer Instrument
#electrodynamometer #torque-equation #mutual-inductance

> The deflecting torque in an electrodynamometer instrument arises from the electromagnetic interaction between the magnetic fields produced by the current in the fixed coils and the current in the moving coil. The torque is directly related to the change in mutual inductance between the coils as the moving coil rotates.

#### General Derivation of Instantaneous Torque
#torque-derivation #electromagnetic-torque

Let:
-   $i_1$ = Instantaneous current in the fixed coils (FC)
-   $i_2$ = Instantaneous current in the moving coil (MC)
-   $L_1$ = Self-inductance of the fixed coils
-   $L_2$ = Self-inductance of the moving coil
-   $M$ = Mutual inductance between the fixed and moving coils. $M$ is a function of the deflection angle, $\theta$.

The magnetic fields produced by $i_1$ and $i_2$ interact to produce a torque. This torque acts to align the moving coil with the fixed coil, which corresponds to the position of maximum mutual inductance.

The instantaneous deflecting torque ($t_d$) can be derived from the energy stored in the magnetic field of the coils. The resulting expression is:
$$\boxed{\quad t_d(t) = i_1(t) \cdot i_2(t) \frac{dM}{d\theta} \quad}$$
This is the fundamental torque equation. Its application depends on whether the instrument is used on DC or AC and how the coils are connected.

---

#### For DC Operation
#dc-operation

If the instrument is measuring steady DC currents $I_1$ and $I_2$, the torque is constant:
$$ T_d = I_1 I_2 \frac{dM}{d\theta} $$
The pointer comes to rest when the deflecting torque equals the controlling spring torque ($T_c = K_s \theta$).
$$ I_1 I_2 \frac{dM}{d\theta} = K_s \theta \implies \theta = \frac{I_1 I_2}{K_s} \frac{dM}{d\theta} $$

---

#### For AC Operation (Average Torque)
#ac-operation #average-torque

When measuring AC, both $i_1(t)$ and $i_2(t)$ are time-varying, and so is the instantaneous torque $t_d(t)$. Due to the inertia of the moving system, the pointer responds to the **average torque** over one full cycle.

Let the currents be sinusoidal:
-   $i_1(t) = I_{m1} \sin(\omega t)$
-   $i_2(t) = I_{m2} \sin(\omega t - \phi)$
where $\phi$ is the phase angle between the two currents.

The average torque is:
$$\begin{align}
T_d &= \frac{1}{T} \int_0^T t_d(t) dt = \frac{1}{T} \int_0^T i_1(t) i_2(t) \frac{dM}{d\theta} dt \\
&= \left( \frac{1}{T} \int_0^T I_{m1} \sin(\omega t) \cdot I_{m2} \sin(\omega t - \phi) dt \right) \frac{dM}{d\theta} \\
&= (\frac{I_{m1}I_{m2}}{2} \cos\phi) \frac{dM}{d\theta} \\
&= (I_{1,rms} I_{2,rms} \cos\phi) \frac{dM}{d\theta}
\end{align}$$
The average deflecting torque for AC is:
$$\boxed{\quad T_d = I_1 I_2 \cos(\phi) \frac{dM}{d\theta} \quad}$$
where $I_1$ and $I_2$ are the RMS values of the currents in the fixed and moving coils, respectively.

---

#### Torque in Specific Applications

##### 1. As an Ammeter or Voltmeter
The fixed and moving coils are connected in series, so $i_1(t) = i_2(t) = i(t)$. The phase angle between the currents is zero ($\phi = 0, \cos\phi=1$).
-   **Instantaneous Torque:** $t_d(t) = i(t)^2 \frac{dM}{d\theta}$
-   **Average Torque (AC):** $T_d = I_{rms}^2 \frac{dM}{d\theta}$
The deflection $\theta$ is proportional to $I_{rms}^2$, resulting in a **non-linear, square-law scale**.

##### 2. As a Wattmeter
The fixed coils (Current Coil) carry the load current ($i_1 = i_L$), and the moving coil (Potential Coil) carries a current proportional to the load voltage ($i_2 = v_L/R_p$).
-   **Instantaneous Torque:** $t_d(t) = i_L(t) \cdot \frac{v_L(t)}{R_p} \frac{dM}{d\theta} \propto p(t)$ (instantaneous power).
-   **Average Torque (AC):** The average torque is proportional to the average power. The phase angle $\phi$ between $i_L$ and $i_p$ (and hence $v_L$) is the power factor angle of the load.
    $$ T_d = I_{L,rms} \cdot I_{p,rms} \cdot \cos(\phi) \frac{dM}{d\theta} = I_{L,rms} \frac{V_{L,rms}}{R_p} \cos(\phi) \frac{dM}{d\theta} $$
    Since $V_{L,rms} I_{L,rms} \cos(\phi)$ is the average power $P_{avg}$,
    $$ T_d = \left(\frac{1}{R_p}\frac{dM}{d\theta}\right) P_{avg} $$
The term in the parenthesis is an instrument constant. Therefore, $T_d \propto P_{avg}$. The deflection $\theta$ is directly proportional to the average power, resulting in a **linear scale**.

---

### Related Concepts
#topic/related-concepts

> [[Use as Ammeter, Voltmeter, and Wattmeter]]

[[Construction and Principle of Operation of PMMC]]
[[Errors in Wattmeter Measurement and Compensation]]
[[Torque Equation of a PMMC Instrument]]
[[Torque Equation of an MI Instrument]]
[[Mutual Inductance]]
