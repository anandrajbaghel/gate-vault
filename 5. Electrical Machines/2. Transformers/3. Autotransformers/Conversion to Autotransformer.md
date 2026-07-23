---
tags:
  - electrical-machines
  - transformers
  - autotransformer
  - transformer-conversion
created: 2026-06-13
aliases:
  - Two-Winding to Autotransformer Conversion
  - Additive and Subtractive Polarity
subject: "[[Electrical Machines]]"
parent:
  - "[[Autotransformers|Autotransformer]]"
formula:
  - "Autotransformer kVA Rating : $$S_{auto} = S_{2w} \\times \\left( \\frac{a_{auto}}{a_{auto} - 1} \\right)$$"
modified: 2026-07-23T20:35:30
---
### Conversion of a Two-Winding Transformer to an Autotransformer
#transformer-conversion #kVA-rating

> A standard two-winding transformer can be reconnected as an autotransformer to handle a much larger kVA load than its nameplate rating. The two windings are connected in series, and the way they are connected (polarity) determines the new voltage levels.

Given a two-winding transformer with rating $S_{2w}$ and voltages $V_1 / V_2$:

#### 1. Additive Polarity Configuration
#additive-polarity #configuration

> [!pyq]- PYQ : 2026
> ![[ee_2026#^q17]]

The primary and secondary windings are connected such that their voltages add up.
- **Input Voltage ($V_H$)**: $V_1 + V_2$
- **Output Voltage ($V_X$)**: $V_1$ (or $V_2$, depending on the tap)
- **New Transformation Ratio ($a_{auto}$)**: $\frac{V_1 + V_2}{V_1}$

---
#### 2. Subtractive Polarity Configuration
#subtractive-polarity #configuration 

The windings are connected such that their voltages oppose each other.
- **Input Voltage ($V_H$)**: $V_1$
- **Output Voltage ($V_X$)**: $V_1 - V_2$
- **New Transformation Ratio ($a_{auto}$)**: $\frac{V_1}{V_1 - V_2}$

---
#### Power Rating Enhancement
#power-rating-enhancement

When converted, the windings still carry their original rated currents, but the total power delivered to the load increases because of the direct conductive power transfer. 

The new apparent power rating of the autotransformer ($S_{auto}$) can be calculated using the autotransformer's voltage ratio $a_{auto}$ (where $a_{auto} > 1$):
$$\boxed{\quad S_{auto} = S_{2w} \times \left( \frac{a_{auto}}{a_{auto} - 1} \right) \quad}$$

> [!example] Efficiency Impact
> Because the core and copper losses remain identical to the two-winding configuration (since the windings operate at their rated voltages and currents), but the total output power $S_{auto}$ is much higher, the **per-unit efficiency of the autotransformer is significantly higher** than when it was operated as a two-winding transformer.

---
### Related Concepts
#transformer-conversion/related

> [[Autotransformers]]

[[Losses and Efficiency in a Transformer]]