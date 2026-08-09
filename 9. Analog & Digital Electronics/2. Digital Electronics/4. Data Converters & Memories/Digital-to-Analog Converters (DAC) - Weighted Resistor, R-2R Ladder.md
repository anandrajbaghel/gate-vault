---
tags:
  - data-converters
  - dac
  - analog-electronics
  - digital-electronics
  - interface
created: 2025-11-04
aliases:
  - DAC
  - D/A Converter
  - Digital-to-Analog Converter
subject: "[[Analog & Digital Electronics]]"
parent:
  - Data Converters and Memories
modified: 2026-08-04T09:34:25
---
### Digital-to-Analog Converters (DAC)
#dac #data-converter #digital-to-analog

> A **Digital-to-Analog Converter (DAC or D/A Converter)** is a circuit that serves as a critical interface between the digital and analog domains. It takes a digital input code (typically a binary number) and converts it into a proportional analog quantity, either voltage or current. The core principle of most DACs is to generate a weighted sum of currents or voltages according to the input binary word.

#### Binary-Weighted Resistor DAC
#weighted-resistor-dac

This is the simplest DAC architecture. It uses a summing [[Ideal Op-Amp|op-amp]] with a set of binary-weighted input resistors. For an N-bit DAC, resistors with values $R, 2R, 4R, \dots, 2^{N-1}R$ are used. Each resistor is connected to a reference voltage ($V_{ref}$) or ground through a switch controlled by a corresponding bit of the digital input.

*   **Operation**: The MSB controls the switch for the smallest resistor (largest current), and the LSB controls the switch for the largest resistor (smallest current). The op-amp sums these weighted currents to produce an output voltage.

For a 4-bit DAC with inputs $B_3B_2B_1B_0$ (where $B_3$ is MSB), the output voltage is given by:
$$\boxed{\quad V_{out} = - \frac{R_f}{R} \left( \frac{B_3}{1} + \frac{B_2}{2} + \frac{B_1}{4} + \frac{B_0}{8} \right) V_{ref} \quad}$$

**Advantages**:
*   Simple and conceptually straightforward design.
*   Fast conversion speed due to the direct summation.

**Disadvantages**:
*   **Impractical for High Resolution**: For an N-bit DAC, a very wide range of resistor values is required. For example, an 8-bit DAC would need resistors from R to 128R. Fabricating a wide range of highly accurate, stable resistors on an IC is extremely difficult and costly.
*   **Accuracy Issues**: The accuracy of the DAC is limited by the precision of the resistors, especially the one for the MSB.

---
#### R-2R Ladder DAC
#r2r-ladder-dac

The R-2R Ladder DAC is the most popular and practical architecture. It overcomes the limitations of the weighted-resistor type by using only **two** resistor values: R and 2R.

*   **Structure**: A ladder-like network of resistors is connected to switches controlled by the digital input bits. The output of the ladder network is then fed to an op-amp.
*   **Operation**: The unique property of the R-2R ladder is that the current is successively halved at each node as you move down the ladder from the MSB. Each bit switch directs the current from its node to either ground or the op-amp's virtual ground, effectively summing the weighted currents.

The output voltage for an N-bit R-2R DAC is directly proportional to the fractional binary value of the input code. If the feedback resistor of the op-amp is $R_f = R$, the output is:
$$\boxed{\quad V_{out} = -V_{ref} \left( \sum_{i=0}^{N-1} \frac{B_i}{2^{N-i}} \right) = -V_{ref} \frac{(\text{Decimal Value of Input})}{2^N} \quad}$$
where $B_{N-1}$ is the MSB.

**Advantages**:
*   **High Accuracy**: Requires only two matched resistor values, which can be fabricated with high precision and good thermal tracking on an IC.
*   **Better Monotonicity**: Since the resistor ratios are consistent, it's easier to ensure that the output voltage always increases with the digital input code.
*   Suitable for high-resolution DACs.

**Disadvantages**:
*   Slightly slower conversion speed compared to the binary-weighted type due to the propagation delay through the ladder network.

---
### Related Concepts

> [[Analog-to-Digital Converters (ADC)]]

[[Specifications of DACs and ADCs]]
[[Ideal Op-Amp]]
[[Analog & Digital Electronics]]