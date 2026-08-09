---
title: Type-D Choppers; Two-quadrant type-B Chopper
tags:
  - choppers/type/D
---
#type-D-chopper 

> Direction of load current is always positive.

![[Pasted image 20250825193317.png]]

1. $CH1$ and $CH2$ is **on** : $V_o = V_s$ ; 
2. $CH1$ and  is **off** : $V_o = -V_s$ ; both diodes $D1$ and $D2$ conducts
3. $V_o$ is positive when choppers turn-on time $T_{on}$ is more than their turn-off time $T_{off}$ 
4. Direction of load current is always positive.
5. As average values of $i_o$ and $V_o$ are positive, chopper operation in first quadrant is obtained and power flows from load to source.
6. When $V_o$ is negative then fourth quadrant operation of type-D chopper is obtained and power flows from load to source.
7. Average value of output voltage is $$\boxed{\quad V_o = \frac{V_s\cdot T_{on} - V_s\cdot T_{off}}{T} = V_s \frac{T_{on}-T_{off}}{T}\quad}$$
	1. $T_{on} \gt T_{off}$ , $\alpha \gt 0.5$ , $V_o$ is positive
	2. $T_{on} \lt T_{off}$ , $\alpha \lt 0.5$ , $V_o$ is negative
	3. $T_{on} = T_{off}$ , $\alpha = 0$ , $V_o = 0$ 

---
### Related Concepts

> [[Type-E Chopper]] (4 Quadrant Chopper)

[[Choppers]] (parent topic)
[[Type-A Chopper]] (First Quadrant Chopper)
[[Type-B Chopper]] (Second Quadrant Chopper)
[[Type-C Chopper]] (2 Quadrant Type-A Chopper)
