---
tags:
  - electric-circuits
  - magnetic-circuits
  - transformer
  - mutual-inductance
  - circuit-analysis
created: 2025-08-09
aliases:
  - Dot Rule
  - Dot Convention in Transformer
subject: "[[Electric Circuits]]"
parent: "[[Linear Transformer]]"
confidence: 9
---
### The Dot Convention
#dot-convention #mutual-inductance #magnetic-coupling

> The **dot convention** is a standard notation used in circuit diagrams to specify the polarity of the voltage induced in a coil due to mutual inductance. Since the mutually induced voltage can either add to or subtract from the self-induced voltage, the dot convention removes this ambiguity, which is essential for correctly applying KVL in [[Analysis of Circuits with Magnetic Coupling|magnetically coupled circuits]].

#### The Fundamental Rule (Voltage Perspective)
#dot-convention/rule

The dot convention is based on the following rule:

> [!quote] Fundamental Rule
> If a current **enters** the dotted terminal of one coil, the voltage induced in the second coil will be **positive** at the dotted terminal of the second coil.

Conversely, if a current *leaves* the dotted terminal of one coil, the induced voltage in the second coil will be *negative* at its dotted terminal.

---
#### Application in Mesh Analysis (Current Perspective)
#mesh-analysis #dot-convention/application

When writing KVL (mesh) equations, the rule is typically applied by looking at the directions of the mesh currents relative to the dots. This determines the sign of the mutual inductance term ($M \frac{di}{dt}$ or $j\omega M \mathbf{I}$).

1.  **Positive (+) Sign for the Mutual Term (Aiding Fluxes)**
    The mutual term is **positive** if the two mesh currents **both enter** or **both leave** the dotted terminals of their respective coils.
    $$\boxed{\quad V_{\text{mutual}} = + M \frac{di_{\text{other}}}{dt} \quad \text{or} \quad \mathbf{V}_{\text{mutual}} = +(j\omega M)\mathbf{I}_{\text{other}} \quad}$$

2.  **Negative (-) Sign for the Mutual Term (Opposing Fluxes)**
    The mutual term is **negative** if one mesh current **enters** a dotted terminal while the other mesh current **leaves** its dotted terminal.
    $$\boxed{\quad V_{\text{mutual}} = - M \frac{di_{\text{other}}}{dt} \quad \text{or} \quad \mathbf{V}_{\text{mutual}} = -(j\omega M)\mathbf{I}_{\text{other}} \quad}$$

---
#### Physical Meaning
#dot-convention/physical-meaning

The dot marking is a shorthand notation for the physical winding direction of the coils. If two coils are wound on a common core in the same direction (e.g., both wound clockwise when viewed from the same end), then the starting terminals of both windings would be given dots. A current entering the start of both windings would create magnetic fluxes that add together (aiding). If one coil were wound in the opposite direction, its dot would be placed on its finishing terminal.

---
### Related Concepts
#dot-convention/related-concepts

> [[Linear Transformer]] (The circuit model where this convention is applied)

[[Concept of Mutual Inductance]] (The physical phenomenon the convention describes)
[[Analysis of Circuits with Magnetic Coupling]] (The process where the convention is used)
[[Mesh Analysis]] (The primary circuit analysis technique used with coupled coils)
[[Faraday's Law of Induction]] (The fundamental principle of induced voltage)