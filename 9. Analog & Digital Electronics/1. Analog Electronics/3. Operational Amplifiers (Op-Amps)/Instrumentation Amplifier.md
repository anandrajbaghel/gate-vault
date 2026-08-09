---
tags:
  - analog-electronics
  - op-amp
  - amplifiers
  - instrumentation-amplifier
  - gate-ee
created: 2025-10-15
aliases:
  - In-Amp
  - IA
subject: "[[Analog & Digital Electronics]]"
parent:
  - Operational Amplifiers (Op-Amps)
modified: 2026-08-04T09:50:46
---
### Instrumentation Amplifier
#instrumentation-amplifier

> An **Instrumentation Amplifier (In-Amp)** is a high-performance, integrated circuit differential amplifier designed for the precise amplification of small differential signals, often in the presence of large common-mode voltages or noise. It is characterized by a very high input impedance, high Common-Mode Rejection Ratio (CMRR), low output impedance, and a gain that can be accurately set by a single external resistor.

#### Circuit Structure and Operation
#three-op-amp-configuration

The classic and most common implementation of an In-Amp uses a three op-amp configuration. This can be broken down into two stages:

1.  **Input Buffer Stage:** Consists of two op-amps (A1 and A2) configured as non-inverting amplifiers.
    *   The input signals ($V_1$ and $V_2$) are applied directly to the high-impedance non-inverting terminals of A1 and A2. This prevents loading of the signal source.
    *   These two op-amps share a common gain-setting resistor, $R_{gain}$. This stage amplifies the differential component of the input signal while passing the common-mode component with unity gain.

2.  **Output Difference Stage:** Consists of a standard [[Op-Amp Circuits|difference amplifier]] (A3).
    *   This stage takes the outputs of the buffer stage ($V_{o1}$ and $V_{o2}$) as its inputs.
    *   It rejects the common-mode signal that was passed by the first stage and provides a final single-ended output voltage that is proportional to the original differential input. Typically, the resistors in this stage are matched to provide a unity gain ($R_f/R_i = 1$).

#### Gain Equation Derivation
#gain-equation

Let's analyze the input stage. Due to the virtual short in A1 and A2, the voltages at their inverting terminals are $V_1$ and $V_2$ respectively. The current flowing through the gain resistor $R_{gain}$ is:
$$I_{gain} = \frac{V_1 - V_2}{R_{gain}}$$
Since no current flows into the op-amp inputs, this same current must flow through the two feedback resistors (labeled R). The output voltages of the first stage are:
\begin{align}
V_{o1} &= V_1 + I_{gain} \cdot R \\
V_{o2} &= V_2 - I_{gain} \cdot R
\end{align}
The differential voltage input to the second stage is:
\begin{align}
V_{o1} - V_{o2} &= (V_1 + I_{gain}R) - (V_2 - I_{gain}R) \\
&= (V_1 - V_2) + 2 I_{gain} R \\
&= (V_1 - V_2) + 2 \left(\frac{V_1 - V_2}{R_{gain}}\right) R \\
&= (V_1 - V_2) \left(1 + \frac{2R}{R_{gain}}\right)
\end{align}
The output difference stage is typically configured for unity gain, so its output $V_{out}$ is equal to its differential input ($V_{o1} - V_{o2}$). Note: The difference amp subtracts $V_{o2}$ from $V_{o1}$, so the signs work out correctly. Some conventions swap $V_1$ and $V_2$. If the output stage is $(V_{o2} - V_{o1})$, the final gain expression is with respect to $(V_2 - V_1)$.
Assuming the difference amplifier provides $V_{out} = V_{o2} - V_{o1}$:
$$\boxed{\quad V_{out} = (V_2 - V_1) \left(1 + \frac{2R}{R_{gain}}\right) \quad}$$

#### Advantages Over a Simple Difference Amplifier
*   **Very High Input Impedance:** This is the most significant advantage. It allows the In-Amp to be connected to sensitive sources like Wheatstone bridges or biological sensors without drawing current and altering their behavior.
*   **Easily Adjustable Gain:** The differential gain can be precisely set by adjusting a single resistor, $R_{gain}$, without affecting the common-mode rejection characteristics of the circuit.
*   **Very High CMRR:** The symmetrical design allows for extremely effective rejection of common-mode noise.

#### Applications
Instrumentation amplifiers are essential in applications requiring the extraction of a small signal from a noisy environment.
*   **Sensor and Transducer Interfacing:** Amplifying signals from thermocouples, strain gauges (in a Wheatstone bridge), and pressure sensors.
*   **Medical Instrumentation:** Used in ECG, EEG, and EMG devices to amplify weak bio-potentials.
*   **Data Acquisition Systems (DAS):** As a front-end amplifier to process sensor data before it is digitized by an ADC.
*   **Test and Measurement Equipment:** In multimeters, oscilloscopes, and other measurement devices.

---
### Related Concepts
#related-concepts

> [[Differential Amplifiers]]

[[Op-Amp Circuits]]
[[Ideal Op-Amp]]
[[Electrical & Electronic Measurements]]