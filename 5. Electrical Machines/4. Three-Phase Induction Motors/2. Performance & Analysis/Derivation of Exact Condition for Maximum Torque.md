---
tags:
  - electrical-machines
  - induction-motors
  - motor-torque
  - derivation
created: 2026-06-10
aliases:
  - Exact Condition for Maximum Torque Derivation
  - Thevenin Derivation of Max Torque
subject: "[[Electrical Machines]]"
parent:
  - "[[Torque-Slip Characteristics of Induction Motor]]"
  - "[[Starting Torque, Maximum Torque and Full Load Torque]]"
formula:
  - "Exact Slip at Maximum Torque : $$s_m = \\frac{R_2'}{\\sqrt{R_1^2 + (X_1 + X_2')^2}}$$"
modified: 2026-07-23T20:44:40
---

### Derivation: Exact Condition for Maximum Torque
#induction-motors #derivation #maximum-torque

> This note derives the exact slip at which maximum torque occurs ($s_m$) by applying the Maximum Power Transfer Theorem to the exact/approximate equivalent circuit of a 3-phase induction motor, taking stator impedance into account.

#### 1. The Circuit Model and Air-Gap Power
To find the maximum torque, we analyze the power transferred across the air gap ($P_g$). From the [[Equivalent Circuit of a Three-Phase Induction Motor]], the torque developed is directly proportional to the air-gap power:
$$T_{dev} = \frac{P_g}{\omega_s}$$

The air-gap power per phase is the power dissipated in the effective rotor resistance ($\frac{R_2'}{s}$):
$$P_g = (I_2')^2 \left(\frac{R_2'}{s}\right)$$

#### 2. Expressing the Rotor Current ($I_2'$)
Using the equivalent circuit (moving the magnetizing branch to the terminals to simplify the series path, or applying a Thevenin equivalent where $X_m \gg X_1$), the magnitude of the rotor current referred to the stator is:
$$I_2' = \frac{V_1}{\sqrt{\left(R_1 + \frac{R_2'}{s}\right)^2 + (X_1 + X_2')^2}}$$
Where:
* $V_1$ = Stator phase voltage
* $R_1, X_1$ = Stator resistance and leakage reactance
* $R_2', X_2'$ = Rotor resistance and leakage reactance referred to stator
* $s$ = Slip

Substituting $I_2'$ into the $P_g$ equation:
$$P_g = \frac{V_1^2}{\left(R_1 + \frac{R_2'}{s}\right)^2 + (X_1 + X_2')^2} \left(\frac{R_2'}{s}\right)$$

#### 3. Applying the Maximum Power Transfer Theorem
Torque is maximized when $P_g$ is maximized. The variable in this circuit is the mechanical load, represented by the slip-dependent resistance $\frac{R_2'}{s}$. 

According to the [[Maximum Power Transfer Theorem#Maximum Power Transfer Theorem|Maximum Power Transfer Theorem]], maximum power is delivered to a load resistance when its value equals the magnitude of the source impedance looking back from the load terminals. 

Looking back from the resistance $\frac{R_2'}{s}$, the series impedance of the circuit is:
$$Z_{\text{series}} = R_1 + j(X_1 + X_2')$$

The magnitude of this impedance is:
$$|Z_{\text{series}}| = \sqrt{R_1^2 + (X_1 + X_2')^2}$$

Equating the load resistance to this magnitude gives the condition for maximum air-gap power (and thus maximum torque):
$$\frac{R_2'}{s} = \sqrt{R_1^2 + (X_1 + X_2')^2}$$

#### 4. Solving for the Exact Slip ($s_m$)
Rearranging the equation above to solve for the slip at which this maximum torque occurs ($s_m$):
$$\boxed{\quad s_m = \frac{R_2'}{\sqrt{R_1^2 + (X_1 + X_2')^2}} \quad}$$

---
#### 5. Application: Maximum Starting Torque
At the moment of starting, the rotor is stationary, meaning slip $s = 1$. 

To achieve maximum torque exactly at starting, we substitute $s = 1$ into our maximum transfer condition. This dictates the total rotor resistance required ($R_{2(\text{total})}'$):
$$\boxed{\quad R_{2(\text{total})}' = \sqrt{R_1^2 + (X_1 + X_2')^2} \quad}$$

*If $R_1$ and $X_1$ are neglected (assumed to be 0), this perfectly simplifies to the common approximation $s_m = \frac{R_2'}{X_2'}$ and $R_2' = X_2'$ for starting.*

---
### Related Concepts

> [[Starting Torque, Maximum Torque and Full Load Torque]]

[[Equivalent Circuit of a Three-Phase Induction Motor]]
[[Effect of Rotor Resistance on Torque-Slip Curve]]