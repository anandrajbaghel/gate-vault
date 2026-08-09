---
parent: "[[Power Transistors]]"
tags:
  - BJTs
  - BJT
  - Transistors
  - power-transistors
aliases:
  - BJTs
  - BJT
Book: P.S. Bimbhra
---
> **A bipolar transistor is a three-layer, two junction `npn` or `pnp` semiconductor device.** `pnp` & `npn` types can be obtained.
> 
> The term **bipolar** denotes that the current flow in the device is due to the movement of both holes and electrons.
> 
> A BJT has three terminals named **collector** (C), **emitter** (E) and **base** (B). An emitter is indicated by an arrowhead indicating the direction of emitter current. No arrow is associated with base or collector. Is a current controlled device.
> 
> *Power transistors of `npn` type are easy to manufacture and are cheaper also.*

![[Types BJT - NPN & PNP.png]]

### Steady-state Characteristics
#BJTs/steady-state-characteristics 

Out of the three possible circuit configurations for a transistor, common-emitter arrangement is more common in switching applications. So, a common emitter `npn` circuit for obtaining its characteristics is considered.

##### Input Characteristics
#BJTs/input-characteristics 

> **A graph between base current $I_B$ and *base-emitter* voltage $V_{BE}$ gives input characteristics.** As the *base-emitter* junction of a transistor is like a diode, $I_B$ versus $V_{BE}$ graph resembles a diode curve.

When *collector-emitter* voltage $V_{CE2}$ is more than $V_{CE1}$, base current, for the same $V^-_{BE}$, decreases.

![[BJT NPN Input & Output Characteristics.png]]

##### Output Characteristics
#BJTs/output-characteristics 

> **A graph between *collector* current $I_c$ and *collector-emitter* voltages $V_{CE}$ gives output characteristics of a transistor.**

For zero base current, i.e. for $I_B$ = 0, as voltage $V_{CE}$ is increased, a small leakage (collector) current exists. As the base current is increased from $I_B$ = 0 to $I_{B_1}$, $I_{B_1}$, etc. collector current also rises.
### Further Understanding of Output Characteristics

**[[#Output Characteristics]]**

![[BJTs Output Characteristics.png]]

→ In *saturation region* acts like a **switch**
→ In *active region* acts like an **amplifier**

> Almost vertically rising curve is the breakdown region which must be avoided at all costs.

Collector current $I_C$ is given by
#BJTs/load-line 
$$\boxed{\quad I_C = \frac{V_{CC}-V_{CE}}{R_C}\quad}$$
also this is the equation of load line.

> A **Load line** is the locus of all possible operating points.

##### Forward Current Gain ($\alpha$)
#BJTs/forward-current-gain #BJTs/alpha 
$$\alpha = \frac{I_C}{I_E}$$
> As $I_C \lt I_E$ , value of $\alpha$ varies from 0.95 to 0.99

##### Current Gain ($\beta$)
#BJTs/current-gain #BJTs/beta 

In a transistor, base current is effectively the input current and collector current is the output current.
$$\beta = \frac{I_C}{I_B} = h_{FE}$$
> As $I_B$ is much smaller, $\beta$ is much more than unity; its value varies from 50 to 300. In another system of analysis, called $h$ parameters, $h_{FE}$ is used in place of $\beta$


---
##### Transistor Switch
#BJTs/transistor-switch 

When a transistor operates as a switch, it functions in one of two regions: the **saturation region** or the **cut-off region**.

In the **saturation region**, the transistor is considered a **closed switch**. Ideally, at point A, the collector-emitter voltage ($V_{CE​}$) is 0. In reality, a large base current causes the transistor to operate at point A', resulting in a small saturation voltage ($V_{CES​}$), which is typically around 1 V.

In the **cut-off region**, the transistor is an **open switch**. Ideally, at point B, the collector current ($I_C$​) is 0. When the base signal is reduced to zero, the transistor turns off, shifting its operation to point B'. A small leakage current ($I_{CEO​}$) still flows in the collector circuit even when the transistor is off.
![[KVL RB and VB]]
→ Applying KVL for circuit consisting $V_B$ , $R_B$ and emitter
$$\begin{align}
V_B - R_BI_B -V_{BE} &= 0 \\
 I_B &= \frac{V_B - V_{BE}}{R_B}
\end{align}$$
→ also
$$\begin{align}
V_{CC} &= V_{CE} + I_CR_C \\
V_{CE} &= V_{CC} - \frac{\beta \cdot R_C}{R_B}(V_B - V_{BE})
\end{align}$$
→ also
$$\begin{align}
V_{CE} &= V_{CB} + V_{BE} \\
V_{CB} &= V_{CE} - V_{BE}
\end{align}$$
If $V_{CES}$ is the collector-emitter saturation voltage, then collector current $I_{CS}$ is given by
$$I_{CS} = \frac{V_{CC}-V_{CES}}{R_C}$$
and the corresponding value of minimum base current, that produces saturation, is
$$I_{BS} = \frac{I_{CS}}{\beta}$$

**Active Region:** If the base current is **less than** a specific value, $I_{BS}$​, the transistor operates in the active region, which is between the saturation and cut-off points.
**Saturation Region:** If the base current is **more than** $I_{BS}$​, the transistor enters the saturation region. In this state, the collector-emitter voltage ($V_{CES​}$) is nearly zero. The collector current ($I_{CS}$​) is determined by the formula $I_{CS}​=V_{CC}​/R_C$​ and remains constant even if the base current increases further.
##### Overdrive Factor (ODF)
#BJTs/overdrive-factor #BJTs/ODF 

When the base current is significantly higher than $I_{BS}$​, the transistor achieves a state called **"hard drive"** or **"hard saturation"**. This increases the transistor's on-state losses. To ensure reliable switching, practical circuits are designed for a hard-drive state. The **overdrive factor (ODF)** is defined as the ratio of the base current ($I_{B}$​) to the minimum base current required for saturation ($I_{BS}$​).
$$ODF = \frac{I_B}{I_{BS}}$$

##### Forced Current Gain ($\beta_f$)
#BJTs/forced-current-gain #BJTs/beta-f 
$$\beta_f = \frac{I_{CS}}{I_B} \lt \text{natural current Gain }\beta \text{ or } h_{FE}$$
##### Total Power Loss
#BJTs/power-loss 

> Total power loss in the two junctions of a transistor

$$P_T = V_{BE}I_B + V_{CE}I_C$$
Under **saturated state** conditions, both junctions in a power transistor are forward biased.

---
### Related Concepts

[[10. Power Electronics/archive/BJT Switching Performance]]