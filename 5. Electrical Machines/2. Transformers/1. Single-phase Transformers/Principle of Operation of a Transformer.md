---
tags:
  - electrical-machines
  - transformers
  - mutual-induction
  - ac-circuits
  - energy-transfer
created: 2025-09-16
aliases:
  - Transformer Operation
  - Mutual Induction Principle
  - Why Transformers Do Not Work on DC?
  - RMS EMF
  - Transformer EMF Equation
subject: "[[Electrical Machines]]"
parent:
  - Single-phase Transformers
trends:
  - "[[trends - Transformers]]"
formula:
  - "EMF Equation for Transformer : $$E_{rms} = 4.44 f N \\Phi_{max}$$"
  - "Transformation Ratio (Transformer) : $$\\frac{I_2}{I_1} = \\frac{V_1}{V_2} = \\frac{N_1}{N_2} = a$$"
modified: 2026-07-21T15:00:54
---
### Principle of Operation of a Transformer
#transformers #mutual-induction #faradays-law

> A transformer is a static electrical device that transfers electrical energy from one AC circuit to another through the process of electromagnetic induction. It can change voltage and current levels without changing the frequency of the system. Its operation is based entirely on **Faraday's Law of Mutual Induction**.

#### Core Principle: Mutual Induction
#mutual-induction

The fundamental principle behind a transformer is [[Mutual Inductance|mutual induction]] between two coils that are magnetically coupled. It states that when the [[magnetic flux]] produced by one coil changes and links with a second coil, an electromotive force (EMF) is induced in the second coil.

For this to happen, two conditions are essential:
1.  **Alternating Current (AC) Supply**: To produce a continuously changing magnetic flux ($\frac{d\Phi}{dt} \neq 0$).
2.  **Magnetic Coupling**: The two coils (windings) must be placed close enough for the flux from one to link the other. This is achieved by winding them on a common laminated iron core.

---
#### Operational Steps
#transformer-operation

1.  **Primary Winding Excitation**: An AC voltage source $V_1$ is connected to the terminals of the primary winding.
2.  **Flux Production**: This voltage drives a small alternating current, known as the magnetizing current ($I_m$), through the primary winding. This current establishes a time-varying [[magnetic flux]] ($\Phi$) in the iron core.
3.  **Flux Linkage**: The high-permeability core confines the flux, guiding it to link with both the primary and secondary windings.
4.  **Self-Induced EMF ($E_1$)**: As the changing flux links the primary winding itself, it induces a counter-EMF or back-EMF, $E_1$, across it. According to Lenz's Law, this EMF opposes the applied voltage $V_1$. In an [[Ideal and Practical Transformers#The Ideal Transformer|ideal transformer]], $V_1 = E_1$.
5.  **Mutually Induced EMF ($E_2$)**: The same changing flux also links the secondary winding, inducing a mutually induced EMF, $E_2$, across its terminals.
6.  **Energy Transfer**: If a load is connected to the secondary winding, the EMF $E_2$ acts as a voltage source, driving a current $I_2$ through the load and delivering power to it.

---
#### The Transformer EMF Equation
#transformer-emf-equation

The alternating flux in the core can be represented by a sinusoidal waveform, $\Phi(t) = \Phi_{max} \sin(\omega t)$.
According to Faraday's Law, the instantaneous induced EMF in a winding with $N$ turns is:
$$e(t) = N \frac{d\Phi}{dt} = N \frac{d}{dt}(\Phi_{max} \sin(\omega t)) = N\omega\Phi_{max}\cos(\omega t)$$
The peak value of this EMF is $E_{max} = N\omega\Phi_{max} = 2\pi f N \Phi_{max}$.
The RMS value of the induced EMF is $E_{rms} = \frac{E_{max}}{\sqrt{2}} = \frac{2\pi f N \Phi_{max}}{\sqrt{2}}$.

$$\boxed{\quad E_{rms} = 4.44 f N \Phi_{max} \quad}$$
This equation is valid for both the primary ($E_1$, $N_1$) and secondary ($E_2$, $N_2$) windings, as they are linked by the same flux $\Phi_{max}$ at the same frequency $f$.

![[Transformer - emf induced in the windings due to linkage of alternating flux.png|400]]

> [!important] The $V/f$ Ratio and Flux Density
> 
> > See [[ee_2026#^q31]]
> 
> By rearranging the EMF equation ($V \approx E_{rms} = 4.44 f N A_c B_m$), we can extract a critical proportionality for transformer analysis under varying supply conditions:
> $$B_m \propto \frac{V}{f}$$
> - If $\frac{V}{f}$ is **constant**, the core's peak flux density $B_m$ remains constant, preventing core saturation.
> - If $\frac{V}{f}$ **increases**, $B_m$ increases, which drastically increases the magnetizing current ($I_m$) and pushes the core toward saturation.
^v-f-ratio

---
#### Voltage and Current Transformation Ratios
#turns-ratio #transformation-ratio

Since the same flux links both windings, we can write:
$E_1 = 4.44 f N_1 \Phi_{max}$
$E_2 = 4.44 f N_2 \Phi_{max}$
Dividing these two equations gives the **voltage transformation ratio**:
$$\boxed{\quad \frac{E_1}{E_2} = \frac{N_1}{N_2} = a \quad}$$
where $a$ is the **turns ratio**.
- If $a > 1$ ($N_1 > N_2$), it is a **step-down** transformer.
- If $a < 1$ ($N_1 < N_2$), it is a **step-up** transformer.

For an ideal transformer (100% efficient), the input power equals the output power:
$P_{in} = P_{out} \implies V_1 I_1 = V_2 I_2$
This gives the **current transformation ratio**:
$$\boxed{\quad \frac{I_2}{I_1} = \frac{V_1}{V_2} = \frac{N_1}{N_2} = a \quad}$$
This shows that current is transformed in the inverse ratio of the turns.

---
#### Why Transformers Do Not Work on DC?
#transformer-dc-supply

If a DC voltage is applied to the primary winding, it produces a constant current, which in turn creates a constant [[magnetic flux]].
- Since the flux is constant, its rate of change is zero ($\frac{d\Phi}{dt} = 0$).
- According to Faraday's Law, no EMF will be induced in the secondary winding ($E_2=0$), and no power will be transferred.
- Furthermore, the primary winding has very low DC resistance. Applying a DC voltage will cause an extremely large steady current to flow ($I = V_{DC}/R_{primary}$), which can overheat and burn the winding, effectively short-circuiting the source.

---
### Related Concepts
#transformer-operation/related

> [[Ideal and Practical Transformers]]

[[Faraday's Law in Integral and Point Form|Faraday's Law of Induction]]
[[Magnetic Circuits]]
[[Losses and Efficiency in a Transformer]]
[[AC Circuits]]
