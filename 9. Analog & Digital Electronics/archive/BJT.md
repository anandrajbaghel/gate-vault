---
tags:
  - bjt
  - transistor
  - semiconductor-device
  - analog-electronics
created: 2025-09-08
aliases:
  - Bipolar Junction Transistor
  - NPN
  - PNP
subject: "[[Analog & Digital Electronics]]"
parent:
  - Semiconductor Devices and Circuits
modified: 2026-08-04T09:11:41
---
### BJT (Bipolar Junction Transistor)
#bjt #transistor #semiconductor

> A Bipolar Junction Transistor (BJT) is a three-terminal semiconductor device that functions as an amplifier or a switch. It is a current-controlled device where a small current at the base terminal controls a much larger current between the collector and emitter terminals. The term "bipolar" signifies that both electrons and holes are involved in the current conduction process.

#### Structure and Types
#bjt/structure
A BJT consists of three alternating layers of P-type and N-type semiconductor material, forming two PN junctions.
1. **Emitter (E)**: Heavily doped to inject a large number of charge carriers (electrons or holes) into the base.
2. **Base (B)**: Very thin and lightly doped, allowing most carriers from the emitter to pass through to the collector.
3. **Collector (C)**: Moderately doped and physically the largest region, designed to collect the charge carriers.

There are two types of BJTs:
* **NPN**: A P-type base layer is sandwiched between an N-type emitter and an N-type collector. Current flows from collector to emitter.
* **PNP**: An N-type base layer is sandwiched between a P-type emitter and a P-type collector. Current flows from emitter to collector.

---
#### Modes of Operation
#bjt/operation-regions
The operation of a BJT is determined by the biasing of its two PN junctions: the Base-Emitter (BE) junction and the Base-Collector (BC) junction.

| Region           | Base-Emitter (BE) Junction | Base-Collector (BC) Junction | Application      |
| ---------------- | -------------------------- | ---------------------------- | ---------------- |
| **Active**       | Forward Biased             | Reverse Biased               | **Amplifier**    |
| **Saturation**   | Forward Biased             | Forward Biased               | **Closed Switch**|
| **Cutoff**       | Reverse Biased             | Reverse Biased               | **Open Switch**  |
| **Reverse Active**| Reverse Biased             | Forward Biased               | Rarely Used      |

For amplifier applications, the BJT must be biased in the **Active Region**.

---
#### Current Relationships and Gains
#bjt/currents #alpha-beta-gamma
The fundamental current relationship in a BJT is given by Kirchhoff's Current Law:
$$\boxed{\quad I_E = I_C + I_B \quad}$$

Three important current gain parameters define the transistor's amplifying properties:
1. **Common-Base Current Gain ($\alpha$)**: The ratio of collector current to emitter current. Its value is always slightly less than 1.
    $$\boxed{\quad \alpha = \frac{I_C}{I_E} \quad}$$
2. **Common-Emitter Current Gain ($\beta$ or $h_{FE}$)**: The ratio of collector current to base current. This is the primary measure of a BJT's amplification capability, with typical values from 50 to 400.
    $$\boxed{\quad \beta = \frac{I_C}{I_B} \quad}$$
3. **Common-Collector Current Gain ($\gamma$)**: The ratio of emitter current to base current.
    $$\boxed{\quad \gamma = \frac{I_E}{I_B} \quad}$$

##### Relationships between $\alpha$, $\beta$, and $\gamma$
These parameters are interrelated:
$$\boxed{\quad \beta = \frac{\alpha}{1-\alpha} \quad} \quad \text{and} \quad \boxed{\quad \alpha = \frac{\beta}{1+\beta} \quad}$$
$$\boxed{\quad \gamma = 1 + \beta \quad}$$

---
#### BJT Configurations
#bjt/configurations
A BJT can be connected in three different configurations in a circuit, depending on which terminal is common to both the input and output.

1. **Common Emitter (CE)**: Input at Base, Output at Collector. This is the most widely used configuration as it provides both high current gain ($\beta$) and high voltage gain. The output signal is inverted (180° phase shift).
2. **Common Base (CB)**: Input at Emitter, Output at Collector. It has a high voltage gain, but its current gain ($\alpha$) is approximately unity (no current gain). It features low input impedance and high output impedance, making it suitable for high-frequency applications.
3. **Common Collector (CC) or Emitter Follower**: Input at Base, Output at Emitter. It has a high current gain ($\gamma$) and a voltage gain of approximately 1. Its key features are high input impedance and low output impedance, making it ideal for use as a voltage buffer for impedance matching.

#### Characteristics Curves
#bjt/characteristics

* **Input Characteristics**: A plot of input current (e.g., $I_B$ for CE) versus input voltage (e.g., $V_{BE}$ for CE) for a constant output voltage ($V_{CE}$). It resembles the forward characteristic of a PN diode.
* **Output Characteristics**: A plot of output current (e.g., $I_C$) versus output voltage (e.g., $V_{CE}$) for various constant levels of input current ($I_B$). These curves show the active, saturation, and cutoff regions.

#### Early Effect (Base-Width Modulation)
#early-effect
In the active region, the output characteristic curves are not perfectly flat but have a slight positive slope. This is due to the **Early effect**. As the reverse bias across the collector-base junction ($V_{CB}$) increases, the depletion region width increases, which reduces the effective width of the base. This has two main consequences:
1. Less chance for recombination in the narrower base, increasing $\beta$.
2. The charge gradient in the base increases, causing the collector current $I_C$ to increase slightly.

When the sloped characteristic lines are extrapolated backward, they intersect the voltage axis at a point called the **Early Voltage ($V_A$)**.

---
### Related Concepts
#related-concepts

> [[BJT Amplifiers]] (The primary application of BJTs)

[[Transistor Biasing]] (Techniques to set the DC operating point)
[[Small Signal Analysis]] (Method for analyzing amplifier behavior)
[[Diodes]] (The fundamental PN junction building block)
[[MOSFET]] (The other major type of transistor, a voltage-controlled device)
[[Semiconductor Devices]]