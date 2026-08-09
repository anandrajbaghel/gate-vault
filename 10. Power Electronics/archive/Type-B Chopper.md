---
title: Type-B Choppers; Second-quadrant Chopper
tags:
  - second-quadrant-chopper
  - choppers/second-quadrant
  - choppers/type/B
---
#type-B-chopper 

> Load must contain a DC source $E$ , like a battery (or a DC Motor) in this chopper.
> The power flow in type-B chopper is always from load to source.
> $V_o \gt V_s$ : **[[Step-up Choppers|Step-up chopper]]** 

![[Pasted image 20250823225312.png]]

1. $CH2$ is **on** : $V_o = 0$ ; load voltage $E$ drives current through $L$ and $CH2$ ; inductance $L$ stores energy during $T_{on}$ (= on period) of $CH2$
2. $CH2$ is **off** : $V_o = \left( E + L\frac{di}{dt} \right) \gt V_s$ ; diode $D2$ is forward biased - allowing power to flow to the source 
3. Current $i_o$ flows out of the load, current is therefore treated as negative
4. $V_o$ is always positive

---
### Related Concepts

> [[Type-C Chopper]] (2 Quadrant Type-A Chopper)

[[Choppers]] (parent topic)
[[Type-A Chopper]] (First Quadrant Chopper)
[[Type-D Chopper]] (2 Quadrant Type-B Chopper)
[[Type-E Chopper]] (4 Quadrant Chopper)