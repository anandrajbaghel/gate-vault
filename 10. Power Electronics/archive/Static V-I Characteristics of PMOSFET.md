---
title: Power MOSFET Characteristics
parent: "[[Power MOSFETs]]"
tags:
  - power-mosfet
  - pmosfet/characteristics
  - power-mosfet/characteristics
  - pmosfet
aliases:
  - PMOSFET Characteristics
  - power mosfet characteristics
  - power mosfet transfer characteristics
  - power mosfet output characteristics
  - power mosfet switching characteristics
  - pmosfet transfer characteristics
  - pmosfet output characteristics
  - pmosfet switching characteristics
---
The source terminal $S$ is taken as common terminal, between the i/p and o/p of a MOSFET.

![[Pasted image 20250810110511.png]]

---
##### Transfer Characteristics
#pmosfet/transfer-characteristics #power-mosfet/transfer-characteristics 

> Shows variation of drain current $I_D$ as function of gate-source voltage $V_{GS}$

$V_{GST}$ is 
1. an important parameter of MOSFET
2. the minimum positive voltage between gate and source to induce n-channel
---
##### Output Characteristics
#pmosfet/output-characteristics #power-mosfet/output-characteristics 

> Indicates the variation of drain current $I_D$ as a function of drain-source voltage $V_{DS}$ with gate-source voltage $V_{GS}$​ as a parameter.

![[Pasted image 20250815164107.png]]

1. **Low VDS​ Region:** For small values of $V_{DS}$​, the graph of $I_D$​ versus $V_{DS}$​ is almost linear, which signifies a constant on-resistance $R_{DS}​=V_{DS​}/I_D$​
2. **Saturation Region:** As $V_{DS}​$ increases, the output characteristic becomes relatively flat, indicating that the drain current is nearly constant.
3. **Load Line and Operating Points:** A load line can be used to intersect the output characteristics at two points, $A$ and $B$. Point $A$ represents the fully-on condition, while point $B$ represents the fully-off state.
4. **Power MOSFET Operation:** A power MOSFET operates as a switch, similar to a BJT, with states at $A$ or $B$.
5. **Turn-On Process:** When a power MOSFET is driven with a large gate-source voltage, it turns on. The turn-on drain-source voltage $V_{DS,ON​}$ is small, and the MOSFET acts as a closed switch. This state is called the ohmic region. The device's characteristics move from the cut-off region to the active region and finally to the ohmic region.
6. **Turn-Off Process:** When the PMOSFET is turned off, it follows the reverse path, moving from the ohmic region back to the cut-off state.
---
##### Switching Characteristics
#pmosfet/switching-characteristics #power-mosfet/switching-characteristics 

> Switching characteristics of a power MOSFET are primarily influenced by its internal capacitances and the gate drive circuit's impedance.

The switching process has distinct [[#Turn-On Process|turn-on]] and [[#Turn-Off Process|turn-off]] phases, each with specific time delays.

![[Pasted image 20250815174127.png]]
###### Turn-On Process
#pmosfet/switching-characteristics/turn-on-process 

1. **Delay Time ($t_{dn​}$):** The turn-on process begins with an initial delay. During this time, the device's input capacitance charges to the gate threshold voltage, $V_{GST​}$.
2. **Rise Time ($t_r​$):** Following the delay, the gate voltage rises to a value, $V_{GSP}​$, which is sufficient to fully turn on the MOSFET. During this period, the drain current ID​ increases from zero to its full "on" value.
3. **Total Turn-On Time ($t_{on​}$):** The total time required for the MOSFET to turn on is the sum of the delay and rise times: $t_{on​} = t_{dn​}+t_r​$. This time can be shortened by using a low-impedance gate-drive source.
###### Turn-Off Process
#pmosfet/switching-characteristics/turn-off-process 

1. **Delay Time ($t_{df}$):** The turn-off process starts when the gate voltage is removed. The turn-off delay time is the period during which the input capacitance discharges from the overdrive gate voltage, $V_1$​, down to $V_{GSP​}$
2. **Fall Time ($t_f$):** This is the time during which the input capacitance discharges from $V_{GSP​}$ to the threshold voltage, $V_{GST​}$. During this period, the drain current $I_D​$ falls from its full "on" value to zero.
3. **Complete Turn-Off:** The PMOSFET is considered fully off when the gate-source voltage, VGS​, drops to a value less than or equal to the threshold voltage, VGST​.
##### Applications of PMOSFET
#pmosfet/application #power-mosfet/application 

1. **On-resistance and Power Loss:** The on-resistance of a MOSFET increases with its voltage rating. This characteristic makes the device quite **lossy** in high-current applications.
2. **Parallel Operation:** PMOSFETs are relatively easy to operate in parallel. This is due to their **positive temperature coefficient**, which helps to balance the current among parallel devices and also reduces the risk of a "second breakdown effect."
3. **Common Applications:** PMOSFETs are widely used in **high-frequency switching applications**, particularly in **switched-mode power supplies** and **inverters**.
4. **Performance Ratings:** These devices are available with significant ratings, such as **500 V** and **140 A**, suitable for a range of power applications from a few watts to several kilowatts ($kW$).

---
### Related Concepts

[[Power MOSFETs]]

---
### Videos

1. How a MOSFET works as a switch from this video: Using Power MOSFET Switching. ![u](https://www.youtube.com/watch?v=F1PzBf6As8w&vl=en)