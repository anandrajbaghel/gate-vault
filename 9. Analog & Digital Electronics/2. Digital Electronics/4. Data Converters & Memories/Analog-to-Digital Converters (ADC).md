---
tags:
  - data-converters
  - adc
  - analog-electronics
  - digital-electronics
  - interface
created: 2025-11-05
aliases:
  - ADC
  - A/D Converter
  - Analog-to-Digital Converter
  - Analog-to-Digital Converters (ADC) - Flash, Successive Approximation (SAR), Dual Slope
subject: "[[Analog & Digital Electronics]]"
parent:
  - Data Converters and Memories
modified: 2026-08-04T09:08:11
---
### Analog-to-Digital Converters (ADC)
#adc #data-converter #analog-to-digital

> An **Analog-to-Digital Converter (ADC or A/D Converter)** is a circuit that converts a continuous analog signal (voltage or current) into a discrete-time, discrete-amplitude digital number. ADCs are the essential bridge between the real analog world and the digital world of microprocessors and signal processing. The ADC process involves three steps: **sampling**, **quantization**, and **encoding**.

---
#### Flash (Parallel) ADC
#flash-adc #parallel-adc

The Flash ADC is the <u>fastest</u> type of ADC available. It uses a parallel architecture of comparators to determine the digital output in a single step.

*   **Structure**: It consists of a voltage divider with $2^N$ resistors, $2^N-1$ comparators, and a $2^N-1$-to-N priority encoder.
*   **Operation**: The resistor string creates $2^N-1$ unique reference voltages. The input analog voltage ($V_{in}$) is simultaneously compared to all these reference voltages. The outputs of the comparators form a "thermometer code" (all comparators below $V_{in}$ are HIGH, all above are LOW). A priority encoder then converts this thermometer code into an N-bit binary output.
*   **Conversion Time**: The conversion happens in a single clock cycle, limited only by the propagation delay of the comparators and the encoder.
    $$\boxed{\quad T_c \approx T_{pd(\text{comparator})} + T_{pd(\text{encoder})} \quad}$$

**Advantages**:
*   Extremely fast conversion speed.

**Disadvantages**:
*   **High Hardware Complexity**: An N-bit ADC requires $2^N-1$ comparators. The number of components doubles with each additional bit of resolution, making it impractical and power-hungry for high-resolution converters (e.g., a 10-bit Flash ADC needs 1023 comparators).

---
#### Successive Approximation Register (SAR) ADC
#sar-adc #successive-approximation-adc

The SAR ADC is one of the most widely used architectures due to its excellent balance of speed, resolution, and power consumption. It operates like a digital scale, using a binary search algorithm to find the digital code that best matches the analog input.

*   **Structure**: Consists of a comparator, a [[Digital-to-Analog Converters (DAC) - Weighted Resistor, R-2R Ladder|DAC]], a Successive Approximation Register (SAR) logic unit, and a clock.
*   **Operation**:
    1.  The SAR starts by setting the MSB to 1 and all other bits to 0.
    2.  This digital "guess" is fed to the DAC, which converts it to an analog voltage ($V_{DAC}$).
    3.  The comparator compares the input voltage $V_{in}$ with $V_{DAC}$.
    4.  If $V_{in} > V_{DAC}$, the MSB is kept at 1. If $V_{in} < V_{DAC}$, the MSB is reset to 0.
    5.  The process repeats for the next bit, moving from MSB down to LSB, one bit per clock cycle.
*   **Conversion Time**: An N-bit conversion takes N clock cycles.
    $$\boxed{\quad T_c = N \times T_{clk} \quad}$$

---
#### Dual-Slope ADC
#dual-slope-adc #integrating-adc

The Dual-Slope ADC is an integrating-type converter known for its high accuracy and excellent noise immunity, making it ideal for precision measurement instruments like digital multimeters.

*   **Structure**: An integrator (op-amp with capacitor), a comparator, a counter, and control logic.
*   **Operation**: The conversion occurs in two distinct phases:
    1.  **Phase 1 (Input Integration)**: The analog input $V_{in}$ is applied to the integrator for a fixed time period, $T_1 = 2^N \times T_{clk}$. The integrator's output voltage ramps up to a level directly proportional to $V_{in}$.
    2.  **Phase 2 (Reference Integration)**: The integrator input is switched to a stable, negative reference voltage, $-V_{ref}$. The counter starts, and the integrator output ramps down. The counter measures the time ($T_2$) it takes for the integrator output to return to zero.

The digital output is the count ($n$) from the counter during Phase 2. The relationship is derived from the fact that the charge gained equals the charge lost:
$$\begin{align}
V_{in} \cdot T_1 &= V_{ref} \cdot T_2 \\
V_{in} \cdot (2^N T_{clk}) &= V_{ref} \cdot (n \cdot T_{clk}) \\
\implies V_{in} &= V_{ref} \left( \frac{n}{2^N} \right)
\end{align}$$
The final count $n$ is the digital representation of $V_{in}$.

**Advantages**:
*   **High Accuracy**: Accuracy depends on the stability of the reference voltage, not on the precise values of the resistor, capacitor, or clock frequency (as they cancel out).
*   **Excellent Noise Rejection**: The integration process averages out high-frequency noise.

**Disadvantages**:
*   **Very Slow**: The conversion time is variable and can be long, up to $2 \times 2^N$ clock cycles.

---
### Related Concepts

> [[Digital-to-Analog Converters (DAC) - Weighted Resistor, R-2R Ladder]]

[[Specifications of DACs and ADCs]]
[[Ideal Op-Amp]]
[[Comparators and Schmitt Triggers]]
[[Counters - Asynchronous (Ripple) and Synchronous Counters]]
[[Analog & Digital Electronics]]
