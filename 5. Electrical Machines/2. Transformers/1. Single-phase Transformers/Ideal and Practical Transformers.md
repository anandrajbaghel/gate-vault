---
tags:
  - electrical-machines
  - transformers
  - ideal-transformer
  - practical-transformer
  - equivalent-circuit
created: 2025-09-16
aliases:
  - Ideal Transformer
  - Practical Transformer
  - No-Load Current in Practical Transformer
  - Leakage Flux
  - Leakage Reactance
subject: "[[Electrical Machines]]"
parent:
  - Single-phase Transformers
modified: 2026-07-16
---
### Ideal and Practical Transformers
#transformers #ideal-transformer #practical-transformer

> ==The concept of an **ideal transformer** provides a simplified, lossless model that is fundamental to understanding the principles of voltage, current, and impedance transformation.== <u>The **practical transformer** model builds upon this by incorporating the real-world imperfections and losses that occur in an actual device.</u>

> [!concept] Conceptual Bridge: The Rotating Machine
> The principles of the ideal and practical transformer form the exact theoretical basis for the [[Construction of Three-Phase Induction Motors|3-phase induction motor]]. ==An induction motor can essentially be analyzed as a practical transformer with a rotating secondary winding and an air gap.== 

---
#### The Ideal Transformer
#ideal-transformer

An ideal transformer is a theoretical model that possesses the following properties:
1. **Zero Winding Resistance**: The primary and secondary windings are assumed to have zero resistance. This implies no $I^2R$ (copper) losses and no voltage drop across the windings.
2. **No Leakage Flux**: All the magnetic flux produced by the primary winding is assumed to link with the secondary winding, and vice versa. The coefficient of coupling is unity ($k=1$).
3. **No Core Losses**: There are no hysteresis or eddy current losses in the transformer core.
4. **Infinite Permeability ($\mu = \infty$)**: The core has infinite magnetic permeability, meaning an infinitesimally small magnetizing current is required to establish the flux in the core.

##### Characteristics of an Ideal Transformer
#ideal-transformer/characteristics 

- **Efficiency**: It is 100% efficient, as there are no losses. Input power equals output power ($P_{in} = P_{out}$).
- **Voltage and Current Ratios**: The relationships are exact and governed purely by the turns ratio, $a = N_1/N_2$.
    $$\boxed{\quad \frac{V_1}{V_2} = \frac{E_1}{E_2} = \frac{N_1}{N_2} = a \quad}$$
    $$\boxed{\quad \frac{I_2}{I_1} = \frac{N_1}{N_2} = a \quad}$$

---
#### The Practical Transformer
#practical-transformer

A practical, real-world transformer deviates from the ideal model in several key aspects, all of which contribute to losses and voltage regulation.

1. **Winding Resistance ($R_1, R_2$)**: The copper windings have finite resistance, causing:
    * **Copper Losses**: Power loss in the form of heat ($I_1^2 R_1$ and $I_2^2 R_2$).
    * **Voltage Drops**: Resistive voltage drops ($I_1R_1$ and $I_2R_2$) within the windings.
    > [!refer]
    > [[Losses and Efficiency in a Transformer#2. Copper Losses (or $I 2R$ Losses, $P_{cu}$)|Losses and Efficiency in a Transformer > Copper Losses]]

^winding-resistance

2. **Magnetic Leakage (Leakage Reactance $X_1, X_2$)**: ==Not all flux links both windings. The flux that links only one winding is called **leakage flux** ($\Phi_{L1}, \Phi_{L2}$).== This leakage flux induces a self-EMF in its own winding, which is represented by an inductive reactance in series with the winding, called **leakage reactance** ($X_1, X_2$). ![[Main Flux & Leakage Flux.png|300]]

^leakage-flux

3. **Core Losses ($P_c$)**: The alternating magnetic flux in the iron core causes two types of power loss:
    * **Hysteresis Loss**: Energy lost due to the repeated reversal of magnetic domains in the core material.
    * **Eddy Current Loss**: Energy lost due to circulating currents (eddy currents) induced in the core material by the changing flux.
    These losses are constant for a given supply voltage and frequency and are represented by a resistive component in the transformer's equivalent circuit. ![[Losses and Efficiency in a Transformer#^hysteresis-eddy-losses]]

^core-losses

4. **Finite Permeability (Magnetizing Current $I_m$)**: A real core requires a finite magnetizing current ($I_m$) to establish the necessary magnetic flux ($\Phi$). This current lags the applied voltage by 90°.

^finite-permeability

##### No-Load Current ($I_0$)
Even when the secondary is open-circuited, a practical transformer draws a small current from the source, called the **no-load current ($I_0$)**. This current has two components:
-   **Core Loss Component ($I_c$ or $I_w$)**: An active component in phase with the applied voltage $V_1$. It supplies the core losses.
- **Magnetizing Component ($I_m$)**: A reactive component that lags $V_1$ by 90°. It sets up the magnetic flux in the core.
	> [!pyq]- PYQ : GATE EE 2026
	> ![[ee_2026#^q31]]

The no-load current is the phasor sum of these two components:
$$\vec{I_0} = \vec{I_c} + \vec{I_m} \quad \implies \quad I_0 = \sqrt{I_c^2 + I_m^2}$$
Typically, $I_0$ is only 2-5% of the full-load rated current.

> [!info] Transition to Circuit Analysis
> Every non-ideality listed above translates directly into a circuit parameter in the [[Equivalent Circuit of a Transformer]]. 
> - **$R_1, R_2$** model the physical winding resistance.
> - **$X_1, X_2$** model the magnetic [[#^leakage-flux|leakage flux]].
> - A parallel shunt branch ($R_c \parallel X_m$) models the core losses and finite permeability, which draws the no-load current $I_0$.

---
### Related Concepts
#transformer-models/related

> [[Equivalent Circuit of a Transformer]] (The model that incorporates all practical aspects)

[[Phasor Diagram of a Transformer]]
[[Transformer Tests]] (Used to determine the parameters of a practical transformer)
[[Losses and Efficiency in a Transformer]]