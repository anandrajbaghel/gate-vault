---
title: Switching Characteristics of Thyristor
parent: "[[Power Thyristors]]"
tags:
---
> Switching, dynamic or transient characteristics of thyristors.
##### Switching Characteristics During Turn-on

![[Pasted image 20250818185906.png]]

The turn-on process of a thyristor is not instantaneous. It involves a time delay for the device to transition from the forward blocking state to the forward conducting state. The total turn-on time, $t_{on}$​, is the sum of three distinct time intervals: the delay time ($t_d​$), the rise time ($t_r​$), and the spreading time ($t_{sp}$​), although the last one is not usually specified in detail.
![[Pasted image 20250818185934.png|400]]
1. **Delay Time ($t_d​$)**: This is the time interval from the moment a gate pulse is applied until the anode current starts to rise to 10% of its final value. During this period, the forward voltage across the thyristor remains high, and the gate current flows and builds up charge near the gate terminal, preparing the device for conduction. The anode voltage, in turn, begins to drop from its initial value.

2. **Rise Time ($t_r$)**: This is the time it takes for the anode current to rise from 10% to 90% of its final value. Simultaneously, the forward voltage across the thyristor drops significantly as the device fully enters the conduction phase. The rise time depends on the gate current and the stray inductance of the circuit. A higher gate current can help reduce the rise time.

3. **Spreading Time ($t_{sp}$)**: After the anode current reaches 90% of its final value, the conduction area of the thyristor spreads across the entire junction. The spreading time is the time required for this to happen. Although not always explicitly mentioned as a separate component of ton​, it is an important part of the turn-on process.

The total turn-on time is given by: $$t_{on}​=t_d​+t_r​$$
The rate of rise of anode current, $di/dt$, must be kept within the device's specified rating to prevent localized heating and permanent damage to the thyristor.
##### Switching Characteristics During Turn-off

![[Pasted image 20250818190145.png]]

The turn-off process is more complex than turn-on because a thyristor is a latching device and cannot be turned off simply by removing the gate signal when it is conducting. Instead, the anode current must be forced to zero or below the holding current for a sufficient time.

The total turn-off time of a thyristor, $t_{off}$​, is the time required for it to regain its forward blocking capability after the anode current has been reduced to zero by the external commutation circuit. It consists of two main intervals: the reverse recovery time ($t_{rr}$​) and the gate recovery time ($t_{gr}$​).

1. **Reverse Recovery Time ($t_{rr}$)**: This is the time from the instant the anode current becomes zero to the instant the reverse recovery current decays to 25% of its peak reverse value. This time is needed to remove the excess charge carriers from the outer junctions ($J_1$​ and $J_3$​) of the thyristor. During this period, the thyristor still conducts a reverse current.

2. **Gate Recovery Time ($t_{gr}$)**: This is the time required to remove the remaining charge carriers from the center junction ($J_2$​) after the reverse recovery process is complete. The thyristor can withstand a forward voltage only after this time, otherwise, it may turn on prematurely, which is known as reapplied $dv/dt$ triggering.

The total turn-off time is: $$t_{off​}=t_{rr}​+t_{gr}​$$
The turn-off time is a crucial parameter for a thyristor, as it determines the maximum operating frequency of the circuit. Forcing the anode current to be below the holding current for a period longer than the device's turn-off time is essential for successful commutation. This process is known as **circuit turn-off time**, $t_c$​ and it must be greater than the device's turn-off time, i.e., $t_c​>t_{off​}$

---
### Summary

The switching characteristics of a thyristor are defined by its turn-on and turn-off times.

1. **Turn-on time ($t_{on​}$)** is the sum of delay time and rise time. A high gate current and slow anode current rise rate ($di/dt$) are preferred to ensure a smooth and safe turn-on.
2. **Turn-off time ($t_{off​}$)** is the sum of reverse recovery time and gate recovery time. It's crucial for the circuit to provide a turn-off time greater than the thyristor's turn-off time to prevent commutation failure.

---
### Related Concepts

[[Static V-I Characteristics of Thyristor]]
