---
title: Current-Commutated Chopper
tags:
  - current-commutated-choppers
  - current-commutated-chopper
aliases:
---
### Current-Commutated Chopper

> Uses a resonant LC circuit to generate an oscillatory current that opposes and cancels the forward current of the main thyristor, turning it off.

![[Pasted image 20250829204645.png]]
###### Assumptions for this chopper are
1. Load current is constant 
2. Thyristors and diodes are ideal elements
##### Modes of Operations

> The chopper operation, for convenience, is divided into certain modes

1. [[#Mode I]]
2. [[#Mode II]]
3. [[#Mode III]]
4. [[#Mode IV]]
5. [[#Mode V]]
---
###### Mode I

###### Mode II

###### Mode III

###### Mode IV

###### Mode V

---
##### Design Consideration

> The values of commutating components $C$ and $L$ can be obtained
###### Commutating Capacitance $C$ 

---
##### Merits
1. It is capable of commutating any amount of load current.
2. No commutating inductor is required that is normally costly, bulky and noisy.
3. As it can work at high frequencies in the order of kHz, filtering's requirements are minimal.

##### Demerits
1. Peak load voltage is equal to twice the supply voltage. This peak can however be reduced by filtering.
2. For high-power applications, efficiency may become low because low because of higher switching losses at high operating frequencies.
3. Freewheeling diode is subjected to twice the supply voltage.
4. The commutating capacitor has to carry full load current at a frequency of half the chopping frequency.
5. One pair of SCRs should be turned on only when the other pair is commutated. This can be done by sensing the capacitor current that is alternating.

---
### Related Concepts

> [[Voltage-Commutated Chopper]] (previous topic)

[[Choppers]] (parent topic)