---
title: BJTs
tags:
  - BJTs
  - BJT
  - Transistors
  - power-transistors
Book: P.S. Bimbhra
parent: "[[Bipolar junction transistors (BJTs)]]"
---
![[BJT Switching Performance.png]]
### BJT Switching Performance

A Bipolar Junction Transistor (BJT) does not switch instantly due to its internal capacitances. The total turn-on time (ton​) is the sum of two components: delay time ($t_d​$) and rise time ($t_r$​).
##### Delay Time (td​)

**Definition:** The time required for the collector current ($i_C$​) to rise from zero to 0.1$I_{CS}$​ and for the collector-emitter voltage ($v_{CE​}$) to fall from $V_{CC​}$​ to 0.9$V_{CC​}$.
**Cause:** This delay is caused by the time it takes to charge the base-emitter capacitance to the base-emitter saturation voltage ($V_{BES}$​), which is about 0.7 $V$.
##### Rise Time (tr​)

**Definition:** The time it takes for the collector current ($i_C$​) to increase from 0.1$I_{CS​}$ to 0.9$I_{CS​}$ and for the collector-emitter voltage ($v_{CE}$​) to fall from 0.9$V_{CC​}$ to 0.1$V_{CC​}$​.
**Cause:** This time is dependent on the transistor junction capacitances.

##### Total Turn-On Time (ton​)

**Formula:** $t_{on​} = t_d​ + t_r$​.
**Duration:** The total turn-on time is typically in the range of 30 to 300 nanoseconds.

To turn a Bipolar Junction Transistor (BJT) off, the input voltage and base current are reversed. This initiates the turn-off process, which has two main stages: storage time and fall time.

---

### Storage Time (ts​)

**Storage time** is the time it takes to remove excess charge carriers from the base of the transistor. It begins when the base current is reversed. During this time, the collector current remains high, but then begins to fall from its saturation value (ICS​) to 0.9ICS​. Simultaneously, the collector-emitter voltage rises from its saturation value (VCES​) to 0.1VCC​. A negative base current (IB2​) speeds up the removal of these excess carriers, which reduces the storage time and, consequently, the total turn-off time.

---

### Fall Time (tf​)

**Fall time** is the period after storage time when the transistor transitions to the cut-off state. During this time, the collector current drops from 0.9ICS​ to 0.1ICS​, while the collector-emitter voltage rises from 0.1VCC​ to 0.9VCC​.

---

### Total Turn-Off Time (toff​)

The **total turn-off time** is the sum of the storage time and fall time (toff​=ts​+tf​). The total turn-off time, along with the turn-on time (ton​), determines the switching frequency (f=1/T) of the transistor.

---
## Safe Operating Area (SOA)

The **safe operating area (SOA)** of a power transistor defines the safe limits for its collector current (IC​) and collector-emitter voltage (VCE​). To ensure reliable operation, the transistor's operating point must always remain within this area. Manufacturers specify two types of safe operating areas:

![[Pasted image 20250809151209.png]]

### Forward-Bias Safe Operating Area (FBSOA)

The **FBSOA** pertains to transistor operation when it is being turned on (forward-biased base-emitter junction). It is a plot of IC​ versus VCE​ and has several boundaries for DC and single-pulse operation:

- **Boundary AB:** The maximum DC and continuous current limit for VCE​ below 80 V.
- **Boundary BC:** For VCE​ above 80 V, the collector current must be reduced to keep the junction temperature safe.
- **Boundary CD:** The secondary breakdown limit, which requires further current reduction at even higher VCE​ to avoid device failure.
- **Boundary DE:** The maximum voltage capability of the transistor.

For pulsed operation, a transistor can handle more peak power, as long as the average power loss remains within safe limits. The FBSOA increases as the pulse width decreases. These curves are typically provided for a case temperature of 25°C and may need to be adjusted for actual working conditions.

---

### Reverse-Bias Safe Operating Area (RBSOA)

The **RBSOA** specifies the safe operating limits for a transistor during **turn-off**, when the base-emitter junction is reverse-biased or the base current is zero. It is also a plot of IC​ versus VCE​. The size of the RBSOA decreases as the magnitude of the reverse-bias on the base-emitter junction increases.