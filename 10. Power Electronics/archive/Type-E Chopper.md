---
title: Type-E Choppers; Four-quadrant Chopper
tags:
  - choppers/type/E
  - type-E-chopper
---
### Type-E Chopper

> Consists of four semiconductor switches $CH1$ to $CH4$ and four diodes $D1$ to $D2$ in antiparallel. 

![[Pasted image 20250825193831.png]]

##### First Quadrant Operation
1. Operate as step-down chopper in this quadrant 
2. $CH4$ and $CH1$ is **on** : $V_o = V_s$ ; 
3. $CH3$ is **off** 
4. When $CH1$ is turned **off**, positive current freewheels through $CH4$ , $D2$ 
5. Both $V_o$ and $I_o$ can be controlled 
##### Second Quadrant Operation
1. Operate as [[Step-up Choppers|step-up chopper]] in this quadrant 
2. Load must contain emf $E$ 
3. $CH2$ is **on** : $V_o = V_s$ ; Reverse current flows through $L$ , $CH2$ , $D4$ and $E$ ; Inductance $L$ stores energy ; when $C2$ is turned off, current is fed back to source through diodes $D1$ , $D4$ 
4. $CH1$ , $CH3$ and $CH4$ is **off** 

##### Third Quadrant Operation
1. k
2. Polarity of load emf $E$ must be reversed for this quadrant working. 
3. $CH2$ is **on** and $CH3$ is operated
4. $CH1$ is **off** : 
5. When $CH3$ is turned-off, negative current freewheels through $CH2$ , $D4$ 
6. Operates as a **step-down** chopper.

##### Fourth Quadrant Operation
1. i
2. $CH4$ is operated : Positive current flows through $CH4$ , $D2$ , $L$ and $E$ ; Inductance $L$ stores energy during the this time
3. Rest all are switched **off** 
4. When $CH4$ is turned **off** : Current is fed back to source through didoes $D2$ , $D3$ 
5. Load voltage is negative, but load current is positive leading to the chopper operation in the fourth quadrant; Also power is fed back from load to source
6. Chopper operates as [[Step-up Choppers|step-up chopper]] 


---
### Related Concepts

> [[Choppers]] (parent topic)

[[Type-A Chopper]] (First Quadrant Chopper)
[[Type-B Chopper]] (Second Quadrant Chopper)
[[Type-C Chopper]] (2 Quadrant Type-A Chopper)
[[Type-D Chopper]] (2 Quadrant Type-B Chopper)
