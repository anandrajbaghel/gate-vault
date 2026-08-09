---
title: Type-C Choppers; Two-quadrant type-A Chopper
tags:
  - choppers/type/C
---
#type-C-chopper 

> This type of chopper is obtained by connecting [[Type-A Chopper|type-A]] and [[Type-B Chopper|type-B]] choppers in parallel.
> $CH1$ and $CH2$ should not be **on** simultaneously as this would lead to a direct short circuit on the supply lines.
> The type of chopper configuration is used for motoring and [[Regenerative Braking]] of DC motors.

![[Pasted image 20250825182806.png]]

1. $CH2$ is **on** : $V_o = 0$ ; freewheeling diode $FD$ conducts
2. $CH1$ is **on** : $V_o = V_s$ ; diode $D2$ conducts
3. $CH1$ and $FD$ operate together as [[Type-A Chopper|type-A]] chopper in first quadrant; load current is positive
4. $CH2$ and $D2$ operates together as [[Type-B Chopper|type-B]] chopper in second quadrant; load current is negative
5. Average load voltage $V_o$ is always positive; average load current $i_o$ may be positive or negative
6. Power flow may be from source to load (first-quadrant operation) or from load to source (second-quadrant operation).

##### Waveforms

> Output voltage, output current, source current and thyristor (or chopper) current waveforms for type-C chopper for its operation in first quadrant.

![[Pasted image 20250825191037.png]]


---
### Related Concepts

> [[Type-D Chopper]] (2 Quadrant Type-B Chopper)

[[Choppers]] (parent topic)
[[Type-A Chopper]] (First Quadrant Chopper)
[[Type-B Chopper]] (Second Quadrant Chopper)
[[Type-E Chopper]] (4 Quadrant Chopper)