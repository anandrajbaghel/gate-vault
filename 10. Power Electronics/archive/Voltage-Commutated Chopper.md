---
title: Voltage-Commuted Chopper
tags:
  - classical-chopper
aliases:
  - parallel-capacitor turn-off chopper
  - impulse-commuted chopper
  - classical chopper
  - jones choppers
---
> A **voltage-commutated chopper**, uses a capacitor charged by the DC source voltage to turn off the main thyristor. It is primarily used to convert a fixed DC input voltage into a variable DC output voltage. This type of chopper belongs to the category of choppers that employ ***forced commutation[^1] techniques***, which are necessary for thyristors since they cannot be turned off by simply removing the gate signal.
##### Charging of the Capacitor

> Working of this chopper can start only if the capacitor $C$ is charged with polarities as shown.

![[Voltage-commuted chopper.png]]
###### Assumptions for this chopper are
1. Load current is constant 
2. Thyristors and diodes are ideal elements
###### Charging of Capacitor C
This can be achieved in one of the two ways 
1. Close switch $S$ so that capacitor gets charged to voltage $V_s$ through source $V_s$ , $C$ , $S$ and charging resistor $R_C$ . Switch $S$ is then opened.
2. Auxiliary thyristor $TA$ is triggered so that $C$ gets charged through source $V_s$ , $C$ , $TA$ and the $RLE$ load. The charging current through capacitor $C$ decays and as it reaches zero, $V_c = V_s$ and $TA$ is turned off.
##### Modes of Operations

> The chopper operation, for convenience, is divided into certain modes

1. [[#Mode I]]
2. [[#Mode II]]
3. [[#Mode III]]
4. [[#Mode IV]]

---
###### Mode I

> Main thyristor is triggered at $t=0$ and $RLE$ load gets connected across source $V_s$ so that voltage $V_o = V_s$ 

![[Voltage-Commuted Chopper - MODE I.png]]

There are two current paths 


###### Mode II

![[Pasted image 20250826202327.png]]

###### Mode III

![[Pasted image 20250826202348.png]]

###### Mode IV

![[Pasted image 20250826202604.png]]

---

##### Design Consideration

> The values of commutating components $C$ and $L$ can be obtained
###### Commutating Capacitor $C$ 

> Value depends upon the turn-off time $t_c$ of the main thyristor $T_1$. During this time $t_c$ , capacitor voltage changes linearly from $(-V_s)$ to zero $(0)$. ([[#Mode III]])

$$i_c = C\frac{dv}{dt} \implies I_c = C\frac{V_s}{t_c} \quad \text{or} \quad C=\frac{t_c \cdot I_o}{V_s}$$
The commutation circuit turn-off time $t_c$ must be greater than the thyristor turn-off time $t_q$ . 
Let $t_c = t_q + \Delta t$

$$\boxed{\quad C=\frac{(t_q + \Delta t) \cdot I_o}{V_s}\quad}$$
###### Commutating Inductor $L$ 

> The current $i_c$ , when $T_1$ is triggered, flows through the ringing circuit formed by $C$ , $T_1$ , $L$ $D$ 

$$i_c = \frac{V_s}{\omega_0L}\sin{\omega_0t} \quad \text{where } \omega_0=\frac{1}{\sqrt{LC}}$$
> Peak Capacitor Current

$$I_{cp} = \frac{V_s}{\omega_0L} = V_s\sqrt{\frac{C}{L}}$$
This current flows trough $T_1$ when it is turned-on. As $T_1$ handles load current as well as $I_{cp}$ , peak capacitor current should not be too large. **It is usual to take $I_{cp}$ less than, or equal to, load current  $I_0$**. 
$$I_{cp} \le I_0 \quad or \quad V_s\sqrt{\frac{C}{L}} \le I_0$$
or $$L \ge \left(\frac{V_s}{I_0}\right)^2C$$
$$t_{c1} = \frac{t_1}{2}$$
But $$\omega_0t_1 = \pi \quad t_1 = \frac{\pi}{\omega_0} = \pi\sqrt{LC}$$
$$
\begin{align}
 \therefore  \quad \quad t_{c1} &= \frac{\pi}{2}\sqrt{LC} \\
 L &= \left \{ \frac{2t_{c1}}{\pi} \right \}^2\cdot \frac{1}{C}
\end{align}
$$
Peak current trough $T_1$ is given by $$i_{T1P} = I_0 + V_s \cdot \sqrt{\frac{C}{L}}$$
Peak voltage across $T_1$ and $TA$ is 
$$v_{T1P} = v_{TAp} = \pm V_s$$
Peak current trough $TA$ is 
$$i_{TAp} = \frac{CV_s}{t_c}=I_0$$
Peak Voltage across freewheeling diode
$$v_{fdp} = 2 V_s$$
Peak diode current
$$i_{Dp} = V_s\sqrt{\frac{C}{L}} \quad \text{= Peak Capacitor Current}$$
##### Features

1. Average voltage $V_0$
$$V_0 = \frac{V_s\cdot t_2 + 2V_s(t_3-t_2)(1/2)}{T}=\frac{V_s}{T}[T_{on} + (t_3 - t_2)] \quad \quad \text{(as } t_2 = T_{on}\text{)}$$
	During the interval $(t_3 - t_2)$, the voltage across $C$ changes from $-V_s$ to $V_s$ , i.e. total change is $2V_s$ 
$$\begin{align}
\therefore \quad \quad I_0 &= C\frac{2V_s}{(t_3 - t_2)}  \quad \text{or} \quad t_3 -t_2 = \frac{2CV_s}{I_0}\\
 \therefore \quad \quad V_0 &= \frac{V_s}{T}\left[ T_{on} + \frac{2V_s}{I_0}C \right ] = \frac{V_s}{T}T_{on}^\prime
\end{align}$$
where $$T_{on}^\prime = T_{on} + \frac{2V_s}{I_0}C = \text{effective on period}$$
2. Minimum on period $$t_1 = \frac{\pi}{\omega_0} = \pi\sqrt{LC}$$
	Minimum duty cycle, $$\alpha_{mn} = \frac{t_1}{T} = \pi f\sqrt{LC}$$
	Minimum load voltage,
$$\begin{align}
V_{0,mn} &= \alpha_{mn}\cdot V_s + \frac{2V_s\cdot2t_c}{2T} \\
&= V_s(\alpha_{mn} - 2ft_c) = V_s(\pi f\sqrt{LC} + 2ft_c)\\
 &= f\cdot V_s[t_1+2t_c]
\end{align}$$
Maximum on period is $(T-2t_c)$. This gives maximum value of duty cycle as $$\alpha_{mx} = \frac{T-2t_c}{T} = (1 - 2ft_c)$$
Maximum load or output voltage $V_{0,mx}$ is given by $$V_{0,mx} = \alpha_{mx}\cdot V_s + \frac{2V_s\cdot 2t_c}{2T} = V_s [\alpha_{mx} + 2ft_c] = V_s [1-2ft_c + 2ft_c] = V_s$$
3. If the main thyristor $T_1$ fails to turn off when $TA$ is triggered, $C$ is completely discharged. The commutation, therefore, cannot be resumed in the next cycle and therefore control lost must be regained by turning off $T_1$ by interrupting the supply.
4. The circuit cannot be operated at no load and voltage spikes.

---
### Related Concepts

> [[Current-Commutated Choppers]] (next topic)

[[Choppers]] (parent topic)

[^1]: Commutation here means turning off of the main thyristor.
