---
tags:
  - choppers
  - dc-dc-converter
  - power-electronics
aliases:
  - choppers
created: 2025-09-02
subject: "[[Power Electronics]]"
parent: "[[converters]]"
modified: 2026-08-04T09:17:37
---
### Choppers
#choppers 

> Choppers : A chopper is a ***power electronic circuit that converts direct current (DC) to direct current (DC)*** , uses a switching mechanism to convert one DC voltage to another DC voltage.

#### AC Link Choppers
#ac-link-choppers 

DC is first converted to AC by an [[Inverters|inverter]] and then AC is stepped-up or stepped-down by a transformer which is then converted back to dc by a diode [[Rectifiers|rectifier]].

![[Pasted image 20250821181400.png]]
1. costly
2. bulky
3. less efficient

---
#### DC Choppers
#dc-choppers 

> Involves **one step conversion**, hence more efficient.
> *A chopper is dc equivalent to an ac [[Transformer]] having continuously variable turns ratio.*
> 1. step-up choppers
> 2. **step-down choppers** (mainly we study)

![[Pasted image 20250821181600.png]]
- When the switch is off, no current can flow.
- When the switch is on, current flows in the direction of arrow only.
- Voltage drop across these semiconductor (in *on-state*) is around $0.5 \ V$ to $2.5 \ V$ often neglected.
---
##### Used power semiconductors
#choppere/used-power-semiconductors 

> **These semiconductors are unidirectional devices**; polarities of output voltage $V_o$ and the direction of output current $I_o$ are, therefore, restricted.

1. force commuted [[Power Thyristors|thyristor]]
2. power BJTs
3. [[Power MOSFETs]]
4. GTOs
5. [[IGBT|IGBTs]]

---
##### Principle of Chopper Operation
#choppers/operating-principle #chopping-period #duty-cycle #chopping-frequency 

> It connects source to load and disconnects the load from source at a **fast speed**. In this manner, a chopped load voltage appears.

![[Pasted image 20250820185110.png]]

1. $T_{on}$ : Chopper is on and load voltage is equal to source voltage $V_s$
2. $T_{off}$ : Chopper is off, load current flows through the freewheeling diode $FD$, as a result, load terminals are short circuited by $FD$ and load voltage is therefore zero $(0 \ V)$ during $T_{off}$
3. So a chopped dc voltage is produced at the load terminals
$$V_{avg.} = V_o = \frac{T_{on}}{T_{on}+T_{off}}V_s = \frac{T_{on}}{T}V = \alpha \ V_s$$
$$T=T_{on}+T_{off} = \boxed{\quad\text{Chopping Period}\quad}$$
$$\alpha = \frac{T_{on}}{T} = \boxed{\quad\text{Duty Cycle}\quad}$$
$$f = \frac{1}{T} = \boxed{\quad\text{Chopping Frequency}\quad}$$
4. **Load voltage can be controlled by varying duty cycle $\alpha$** 
5. **Load voltage is independent of load current.**

---
##### Step UP/Down Chopper
#choppers/step-up #choppers/step-down 

1. [[Buck Converter]] (Step-Down Converter)
2. [[Boost Converter]] (Step-Up Converter)
3. [[Buck-Boost Converter]] (Step-Up or Step-Down)

---
##### Quadrant of Operation (Types of Chopper Circuits)
#choppers/quadrant-operation

1. [[Type-A Chopper]] (First Quadrant Chopper)
2. [[Type-B Chopper]] (Second Quadrant Chopper)
3. [[Type-C Chopper]] (2 Quadrant Type-A Chopper)
4. [[Type-D Chopper]] (2 Quadrant Type-B Chopper)
5. [[Type-E Chopper]] (4 Quadrant Chopper)

> Both [[Type-A Chopper|type-A]] and [[Type-B Chopper|type-B]] chopper configurations have a common negative terminal between their input and output circuits.

---
##### Thyristor Based Chopper Circuits
#choppers/thyristor-based 

1. [[Voltage-Commutated Chopper]]
2. [[Current-Commutated Choppers]]
3. [[Load-Commuted Chopper]]

---
### Related Concepts
#related-concepts 

> [[Control Strategies for Choppers]] (Controlling using $\alpha$)

[[Power Thyristors]] (uncontrolled semiconductor used in choppers)
[[Step-up Choppers]] 
[[Multiphase Chopper]]
