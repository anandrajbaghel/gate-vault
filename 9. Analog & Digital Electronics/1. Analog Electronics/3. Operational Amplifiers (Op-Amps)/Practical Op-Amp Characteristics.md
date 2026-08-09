---
tags:
  - analog-electronics
  - op-amp
  - practical-op-amp
  - gate-ee
created: 2025-10-15
aliases:
  - Practical Op-Amp
  - Non-ideal Op-Amp
  - Practical Op-Amp Characteristics (CMRR, Slew Rate, Offset Voltages)
subject: "[[Analog & Digital Electronics]]"
parent:
  - Operational Amplifiers (Op-Amps)
modified: 2026-08-04T10:16:31
---
### Practical Op-Amp Characteristics
#practical-op-amp

> The [[Ideal Op-Amp|ideal op-amp model]] is a powerful tool for circuit analysis, but real-world op-amps have limitations that cause deviations from ideal behavior. These practical characteristics introduce errors and performance limits that must be considered in precision circuit design. They can be broadly categorized into DC errors and AC/dynamic limitations.

#### DC Errors

These are imperfections that affect the DC performance of the op-amp, leading to an output voltage error even with zero input signal.

1.  **Input Offset Voltage ($V_{OS}$):**
    *   **Definition:** A small DC voltage that exists between the inverting and non-inverting terminals, even when they are shorted together. It's the differential input voltage required to make the output exactly zero.
    *   **Effect:** This offset voltage is amplified by the circuit's closed-loop gain, producing a DC error at the output.
        $$V_{out(error)} = V_{OS} \left(1 + \frac{R_f}{R_1}\right) \quad (\text{for both inverting/non-inverting amps})$$

2.  **Input Bias Current ($I_B$):**
    *   **Definition:** A small DC current that must flow into (or out of) the input terminals to bias the internal transistors. It is the average of the two input currents.
        $$I_B = \frac{I_{B+} + I_{B-}}{2}$$
    *   **Effect:** These currents flow through the external resistors, creating voltage drops that are amplified, leading to an output error.

3.  **Input Offset Current ($I_{OS}$):**
    *   **Definition:** The mismatch or difference between the two input bias currents.
        $$I_{OS} = |I_{B+} - I_{B-}|$$
    *   **Effect:** It causes a DC output error, especially when the equivalent DC resistances seen from the two input terminals to ground are not equal. To minimize the error from *bias current*, a compensation resistor $R_{comp} = R_1 || R_f$ is often added to the non-inverting terminal. This technique, however, does not eliminate the error caused by the *offset current*.

#### AC and Dynamic Limitations

These characteristics limit the performance of the op-amp for AC signals, especially at high frequencies or for large signal swings.

1.  **Finite Open-Loop Gain ($A_{OL}$) and Bandwidth (BW):**
    *   **Description:** Real op-amps have a finite, frequency-dependent gain. The open-loop gain is very high at DC and then rolls off at -20 dB/decade.
    *   **Gain-Bandwidth Product (GBWP):** For most op-amps, the product of gain and bandwidth is constant. GBWP is also the frequency at which the open-loop gain drops to 1 (0 dB), known as the unity-gain frequency ($f_T$).
        $$\boxed{\quad BW_{closed-loop} \approx \frac{GBWP}{|A_{closed-loop}|} \quad}$$
    *   **Effect:** There is a direct trade-off between the closed-loop gain and the available bandwidth.

2.  **Slew Rate (SR):**
    *   **Definition:** The maximum rate at which the op-amp's output voltage can change, measured in Volts per microsecond (V/µs).
    *   **Cause:** The limited ability of the internal circuitry to charge and discharge internal compensating capacitors.
    *   **Effect:** For large-amplitude, high-frequency signals, the output may be unable to "keep up" with the ideal output, resulting in slew-induced distortion (e.g., a sine wave becomes a triangle wave). The maximum frequency ($f_{max}$) for an undistorted sinusoidal output of peak amplitude $V_p$ is limited by the slew rate:
        $$\boxed{\quad SR = 2\pi f_{max} V_p \quad}$$
        This $f_{max}$ is called the **full-power bandwidth**.

#### Common-Mode Rejection Ratio (CMRR)
*   **Definition:** A measure of an op-amp's ability to reject signals that are common to both inputs (common-mode voltage, $V_{cm}$) while amplifying the signals that are different (differential voltage, $V_d$). It is the ratio of the differential gain to the common-mode gain.
    $$\boxed{\quad CMRR_{dB} = 20 \log_{10} \left| \frac{A_d}{A_c} \right| \quad}$$
*   **Effect:** An ideal op-amp has infinite CMRR ($A_c = 0$). A finite CMRR in a practical op-amp means that some portion of the common-mode input signal will appear at the output, which is a source of error in differential and instrumentation amplifier circuits.

#### Other Practical Limitations
*   **Output Voltage Swing:** The output voltage cannot reach the positive and negative supply rails ($\pm V_{CC}$). It is limited to saturation levels ($\pm V_{sat}$) which are typically 1 to 2 volts below the supply voltages.
*   **Finite Input/Output Impedance:** While $R_{in}$ is very high and $R_{out}$ is very low, they are not infinite and zero, respectively. This can lead to minor loading effects in critical applications.

---
### Related Concepts
#related-concepts

> [[Ideal Op-Amp]]

[[Differential Amplifiers]]
[[Instrumentation Amplifier]]
[[Frequency Response of Amplifiers (Low-frequency and High-frequency analysis)]]