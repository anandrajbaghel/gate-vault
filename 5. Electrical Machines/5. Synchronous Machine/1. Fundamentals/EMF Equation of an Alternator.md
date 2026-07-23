---
tags:
  - electrical-machines/synchronous-machines
  - alternator
  - emf-equation
  - winding-factors
created: 2025-07-17
aliases:
  - EMF Equation of Synchronous Generator
  - Alternator EMF Equation
subject: "[[Electrical Machines]]"
parent: "[[Synchronous Machines]]"
modified: 2026-07-23T20:51:13
---
### EMF Equation of an Alternator
#emf-equation #alternator #synchronous-generator

> The EMF equation of an alternator relates the magnitude of the generated RMS voltage per phase to the machine's parameters such as its speed, magnetic flux per pole, and the details of its armature winding.

#### Derivation of the EMF Equation
#emf-derivation

The derivation starts from the fundamental principle of Faraday's Law.

1.  **Flux Cut by a Conductor**:
    Let $\Phi$ be the flux per pole (in Webers, Wb).
    Let $P$ be the number of poles.
    In one revolution, the total flux cut by a single conductor is $\Phi \times P$.

2.  **Time for One Revolution**:
    Let $N_s$ be the synchronous speed in rpm.
    Time taken for one revolution is $dt = \frac{60}{N_s}$ seconds.

3.  **Average EMF Induced per Conductor**:
    From Faraday's Law, the average EMF induced is $e_{avg} = \frac{d\phi}{dt}$.
    $$e_{avg} = \frac{\text{Flux cut}}{\text{Time taken}} = \frac{\Phi P}{60/N_s} = \frac{\Phi P N_s}{60} \text{ Volts}$$
    > For a sinusoidally distributed flux, the waveshape of the induced emf will be sinusoidal.

    We know the relationship between frequency and speed is $f = \frac{P N_s}{120}$, which implies $N_s = \frac{120f}{P}$. Substituting $N_s$:
    $$e_{avg} = \frac{\Phi P}{60} \left(\frac{120f}{P}\right) = 2f\Phi \text{ Volts}$$

4.  **RMS EMF per Conductor**:
    For a sinusoidal waveform, the Form Factor ($K_f$) is the ratio of RMS value to the average value.
    $K_f = \frac{\text{RMS}}{\text{Average}} = \frac{\pi}{2\sqrt{2}} \approx 1.11$.
    Therefore, the RMS value of EMF induced per conductor is:
    $$E_{rms/cond} = K_f \times e_{avg} = 1.11 \times 2f\Phi = 2.22 f\Phi \text{ Volts}$$

5.  **EMF per Phase (Ideal Case)**:
    Let $T_{ph}$ be the number of turns in the coils connected in series per phase.
    Let $Z_{ph}$ be the number of conductors in series per phase. Since one turn has two conductors, $Z_{ph} = 2T_{ph}$.
    Assuming all conductors of a phase are concentrated in a single slot (concentrated winding) and the coil span is equal to the pole pitch (full-pitch winding), the total induced EMF per phase is the algebraic sum:
    $$E_{ph} = (E_{rms/cond}) \times Z_{ph} = (2.22 f\Phi) \times (2 T_{ph})$$
    $$\implies E_{ph} = 4.44 f \Phi T_{ph}$$
    This is the EMF equation for an ideal alternator.


> [!warning] Transformer and Synchronous Machine : EMF Equation Relation
> 1. It may be noted that the above equation is the same as that of a [[Principle of Operation of a Transformer#The Transformer EMF Equation|transformer]].
> 2. In case of a synchronous machine the relative motion of steady rotor flux and stator coils produce the voltage which is the same as that produced in a transformer by a time varying flux in association with stationary coils.

---
#### Winding Factors
#winding-factors

In practice, armature windings are distributed in multiple slots and are often short-pitched to improve the waveform and save copper. These practices reduce the induced EMF slightly, which is accounted for by winding factors.

##### 1. Pitch Factor or Chording Factor ($K_p$)
#pitch-factor

Windings are often short-pitched, meaning the coil span is less than the pole pitch (180° electrical). If a coil is short-pitched by an angle $\alpha$ electrical degrees, the EMFs in the two coil sides are out of phase by $\alpha$.
$$\boxed{\quad K_p = \cos(\alpha/2) \quad}$$
*   $K_p \le 1$. For a full-pitch coil, $\alpha=0$, so $K_p = 1$.
*   **Advantage**: Short-pitching helps in eliminating specific harmonics from the output voltage waveform.

##### 2. Distribution Factor or Breadth Factor ($K_d$)
#distribution-factor

The conductors of a phase are distributed over several slots under a pole. The EMFs induced in conductors in different slots are not in phase. The distribution factor accounts for this phase difference.
$$\boxed{\quad K_d = \frac{\sin(m\beta/2)}{m \sin(\beta/2)} \quad}$$
where:
*   $m$ = number of slots per pole per phase.
*   $\beta$ = angular displacement between adjacent slots (slot angle) in electrical degrees.
*   $K_d \le 1$. For a concentrated winding, $m=1$, so $K_d = 1$.
*   **Advantage**: Distributing the winding results in a smoother, more sinusoidal output voltage waveform.

The **Winding Factor ($K_w$)** is the product of the pitch and distribution factors.
$$\boxed{\quad K_w = K_p \times K_d \quad}$$

---
#### Final EMF Equation (Practical)
#practical-emf-equation

The actual induced EMF per phase is obtained by multiplying the ideal EMF by the winding factor.
$$\boxed{\quad E_{ph} = 4.44 K_w f \Phi T_{ph} \quad \text{Volts} \quad}$$
Or,
$$\boxed{\quad E_{ph} = 4.44 K_p K_d f \Phi T_{ph} \quad \text{Volts} \quad}$$
This equation gives the **RMS value of the per-phase generated EMF at no-load**.

#### Line Voltage
The line voltage ($E_L$) depends on the stator winding connection:
*   **For Star (Y) Connection**: $E_L = \sqrt{3} E_{ph}$
*   **For Delta ($\Delta$) Connection**: $E_L = E_{ph}$

---
### Related Concepts
#alternator/related-concepts

> [[Constructional Features of Synchronous Machines]]

[[Armature Winding Factors in Synchronous Machines]]
[[Principle of Operation as a Generator (Alternator)]]
[[Armature Reaction and Synchronous Reactance]]
[[Voltage Regulation of an Alternator]]
[[Internal EMF]]
