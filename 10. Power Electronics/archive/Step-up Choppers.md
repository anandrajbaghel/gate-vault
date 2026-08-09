---
title: Step-up Choppers
tags:
  - step-up-choppers
  - choppers
  - choppers/step-up
aliases:
  - step-up chopper
  - step-up choppers
  - Step-up chopper
---
### Step-up Choppers
#step-up-choppers 

> A Large inductor $L$ in series with source voltage $V_s$ is essential.

![[Pasted image 20250823162136.png]]

1. $CH$ is **on** : Inductor stores energy during $T_{on}$ period; current increases from $I_1$ to $I_2$ ; inductor voltage $v_L = V_s$ 
2. $CH$ is **off** : Energy flows from inductor through the diode and load for a time $T_{off}$ ; current decreases from $I_2$ to $I_1$ ; using KVL we get inductor voltage $v_L = V_o - V_s$
3. As current tends to decrease, polarity of the emf induced in $L$ is reversed
4. Voltage across the load $$\boxed{\quad V_o = V_s + L\cdot(di/dt)\quad}$$
5. Assuming linear variation of output current, the energy input to inductor from the source, during the period $T_{on}$ is $$\begin{align} W_{in} &= \text{(voltage across L)(average current through L)}\cdot T_{on} \\ &= V_s\cdot \left\{ \frac{I_1 + I_2}{2} \right\}\cdot T_{on} \end{align}$$
6. Energy released during $T_{off}$ $$\begin{align} W_{off} &= \text{(voltage across L)(average current through L)}\cdot T_{off} \\ &= (V_o - V_s)\cdot \left\{ \frac{I_1 + I_2}{2} \right\}\cdot T_{off} \end{align}$$
7. Considering the system to be lossless, $W_{in} = W_{off}$ $$V_o = V_s \frac{T}{T_{off}} = V_s\frac{T}{T-T_{on}}=V_s\frac{1}{1-\alpha}$$
![[Pasted image 20250823162352.png]]
8. Chopper is **off** $\alpha = 0$ and $V_o = V_s$
9. Chopper is **on** $\alpha = 1$ and $V_o = \infty$
10. In practice, chopper is turned on and off so that $\alpha$ is variable and the required step-up average output voltage $(V_o)$ is obtained.

---
##### Use as Regenerative Braking of DC Motors
#regenerative-braking #dc-motors 

> The principle of step-up chopper can be employed for the regenerative braking of dc motors.

![[Pasted image 20250823183432.png]]
1. $CH$ is **on** : $L$ stores energy
2. $CH$ is **off** : $L$ releases energy
3. $E_a$ (motor armature voltage) represents $V_s$
4. $E_a/(1-\alpha)$ exceeds $V_o$ : DC machine works as DC generator ; Armature current $I_a$ flows opposite to motoring mode - Power flows from DC machine to source $V_o$ causing regenerative braking of DC motor.
5. $E_a \propto$ field flux and motor speed
6. Even at decreasing motor speeds, regenerative braking can be made to take place provided duty cycle and field flux are so adjusted that $E_a/(1-\alpha) \gt V_o$ 

---
### Related Concepts

> [[Choppers]] (parent topic) (Step-down Choppers)

[[Regenerative Braking]]
[[Dynamic Braking]]
