---
title: Control Strategies for Choppers
---
> The average value of output voltage, $V_o$ can be controlled through $\alpha$ by opening & closing the semiconductor switch periodically

$$V_{avg.} = \boxed{\quad V_o = \frac{T_{on}}{T_{on}+T_{off}}V_s = \frac{T_{on}}{T}V = \alpha \ V_s \quad}$$
Control Strategies for varying duty ratio/duty cycle $\alpha$ are as follows
1. **[[#Time Ratio Control (TRC)]]** (*comprises of [[#Constant Frequency System]] also called PWM scheme & [[#Variable Frequency System]] also called frequency-modulation-scheme*)
2. **[[#Current-limit Control]]**

---
##### Time Ratio Control (TRC)
#choppers/control-strategies/time-ratio-control #choppers/control-strategies/trc

> Time ratio $T_{on}/T$ (as duty ration or duty cycle) is varied

Strategies used
1. [[#Constant Frequency System]]
2. [[#Variable Frequency System]]

---
###### Constant Frequency System
#choppers/control-strategies/constant-frequency-system #choppers/control-strategies/pwm-scheme 

![[Pasted image 20250821185250.png]]
1. **On-time $(T_{on})$ is varied**
2.  Chopping frequency $(f)$ or Chopping period $(T)$ is kept constant.

> Variation of $T_{on}$ means adjustment of pulse width, this scheme is also called *pulse-width-modulation scheme*.

---
###### Variable Frequency System
#choppers/control-strategies/variable-frequency-system 

![[Pasted image 20250821185947.png]]
1. Either *(i)* on-time $(T_{on})$ is kept constant, or *(ii)* off-time $(T_{off})$ is kept constant.
2. **Chopping frequency $(f)$ or Chopping period $(T)$ is varied**.

> Also called *frequency-modulation-scheme*.
###### Disadvantages over [[#Constant Frequency System]]
#choppers/control-strategies/trc/comparison

1. The chopping frequency has to be varied over a wide range for the control of output voltage in frequency modulation. Filter design for such wide frequency variation is, therefore, quite difficult
2. For the control of $\alpha$ frequency variation would be wide. As such, there is a possibility of interference with signaling and telephone lines in frequency modulation scheme
3. The large off-time in frequency modulation scheme may make the load current discontinuous which is undesirable

---
##### Current-limit Control
#choppers/control-strategies/current-limit-control

1. Chopper is switched **off** when load current reaches maximum load current $(I_{o,mx})$
2. Chopper is switched **on** when load current reaches minimum load current $(I_{o,mn})$
![[Pasted image 20250822133954.png|400]]

> After switch is turned off load current freewheels and begins to decay exponentially (*from $I_{o,mx}$ to $I_{o,mn}$*)

1. Load current fluctuates between $I_{o,mx}$ & $I_{o,mn}$ and hence it is continuous : it gives **Switching Frequency**
2. **Ripple Current** $(=I_{o,mx} - I_{o,mn})$
3. For lower *ripple current*, higher *switching frequency* is required and thus more switching losses.
4. It also involves feedback loop, the trigger circuitry for the chopper is very complex.

**[[#Constant Frequency System|PWM technique]] is, therefore, the commonly chosen control strategy.**

---
### Related Concepts

> [[Choppers]] (parent topic)

