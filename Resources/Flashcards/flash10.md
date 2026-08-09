---
subject:
  - "[[Power Electronics]]"
tags:
  - pe
---
### **Power Semiconductor Devices**

**Q.** What is the formula for the average switching power loss ($P_{sw}$) in a power switch (like a BJT or IGBT) during one switching cycle?
?
$$
\boxed{\quad P_{sw} = \frac{1}{6} V_{sw} I_{sw} (t_{on} + t_{off}) f_s \quad}
$$
Where $f_s$ is the switching frequency, $V_{sw}$ is the off-state voltage, and $I_{sw}$ is the on-state current. (Assuming linear rise/fall of V and I).

#power-electronics / [[Power Devices]]

---
**Q.** Differentiate between Latching Current ($I_L$) and Holding Current ($I_H$) of a Thyristor (SCR).
?
- **Latching Current ($I_L$):** The minimum anode current required to **maintain** the SCR in the ON state immediately after it is triggered and the gate signal is removed.
- **Holding Current ($I_H$):** The minimum anode current below which the SCR turns OFF.
- **Relationship:** $I_L > I_H$ (Typically $I_L \approx 2 \text{ to } 3$ times $I_H$).

#power-electronics / [[Thyristors]]

---
**Q.** What is the purpose of a Snubber Circuit?
?
A Snubber circuit (typically an RC series circuit connected across the switch) protects the device against high **$dv/dt$** (rate of change of voltage), preventing false triggering.
- **$di/dt$ protection** is provided by an Inductor in series.

#power-electronics / [[Protection]]

---
### **Phase Controlled Rectifiers (AC to DC)**

**Q.** What is the Average Output Voltage ($V_0$) of a Single-Phase Full-Wave Fully Controlled Bridge Rectifier with continuous conduction?
?
$$
\boxed{\quad V_0 = \frac{2V_m}{\pi} \cos\alpha \quad}
$$
Where $V_m$ is the peak supply voltage and $\alpha$ is the firing angle.

#power-electronics / [[Rectifiers]]

---
**Q.** What is the Average Output Voltage ($V_0$) of a Single-Phase Semi-Converter (Half Controlled) with continuous conduction?
?
$$
\boxed{\quad V_0 = \frac{V_m}{\pi} (1 + \cos\alpha) \quad}
$$
Note: This is always positive (1-quadrant operation).

#power-electronics / [[Rectifiers]]

---
**Q.** What is the Average Output Voltage ($V_0$) of a Three-Phase Full Converter (6-Pulse Bridge) with continuous conduction?
?
$$
\boxed{\quad V_0 = \frac{3V_{ml}}{\pi} \cos\alpha \quad}
$$
Where $V_{ml}$ is the peak **line-to-line** voltage ($V_{ml} = \sqrt{2} V_{L(rms)}$).

#power-electronics / [[Rectifiers]]

---
**Q.** How does Source Inductance ($L_s$) affect the output of a Single-Phase Full Converter?
?
It causes a voltage drop due to commutation overlap ($\mu$). The reduction in average voltage is:
$$
\boxed{\quad \Delta V_0 = 4 f L_s I_0 \quad \text{or} \quad \frac{\omega L_s}{\pi} I_0 \quad}
$$
Where $I_0$ is the constant load current.

#power-electronics / [[Rectifiers]]

---
**Q.** How does Source Inductance ($L_s$) affect the output of a Three-Phase Full Converter?
?
The reduction in average voltage is:
$$
\boxed{\quad \Delta V_0 = 6 f L_s I_0 \quad \text{or} \quad \frac{3\omega L_s}{\pi} I_0 \quad}
$$

#power-electronics / [[Rectifiers]]

---
**Q.** For a Single-Phase Full Converter with a highly inductive load (ripple-free current), what is the Fundamental Displacement Factor (FDF)?
?
$$
\boxed{\quad \text{FDF} = \cos\alpha \quad}
$$
The Input Power Factor is: $\text{PF} = \frac{2\sqrt{2}}{\pi} \cos\alpha$.

#power-electronics / [[Rectifiers]]

---
**Q.** For a Three-Phase Full Converter, what is the condition for two converters to operate in Dual Mode (Circulating Current Mode)?
?
The sum of their firing angles must be $180^\circ$.
$$
\boxed{\quad \alpha_1 + \alpha_2 = 180^\circ \quad}
$$
In this mode, $V_{dc1} = -V_{dc2}$.

#power-electronics / [[Rectifiers]]

---
**Q.** What is the Peak Inverse Voltage (PIV) rating for a thyristor in a Single-Phase Full Bridge Rectifier?
?
$$
\boxed{\quad \text{PIV} = V_m \quad}
$$
Where $V_m$ is the peak supply voltage. (Note: For Mid-point configuration, PIV is $2V_m$).

#power-electronics / [[Rectifiers]]

---
### **DC-DC Converters (Choppers)**

**Q.** Output Voltage ($V_0$) formula for a Buck Converter (Step-Down).
?
$$
\boxed{\quad V_0 = D \cdot V_{in} \quad}
$$
Where $D = T_{on}/T$ is the Duty Cycle.

#power-electronics / [[Choppers]]

---
**Q.** Output Voltage ($V_0$) formula for a Boost Converter (Step-Up).
?
$$
\boxed{\quad V_0 = \frac{V_{in}}{1-D} \quad}
$$

#power-electronics / [[Choppers]]

---
**Q.** Output Voltage ($V_0$) formula for a Buck-Boost Converter.
?
$$
\boxed{\quad V_0 = - V_{in} \frac{D}{1-D} \quad}
$$
Note the polarity reversal.

#power-electronics / [[Choppers]]

---
**Q.** Formula for Peak-to-Peak Inductor Current Ripple ($\Delta I_L$) in a Buck Converter.
?
$$
\boxed{\quad \Delta I_L = \frac{V_0 (1-D)}{f L} \quad}
$$

#power-electronics / [[Choppers]]

---
**Q.** Formula for Peak-to-Peak Inductor Current Ripple ($\Delta I_L$) in a Boost Converter.
?
$$
\boxed{\quad \Delta I_L = \frac{V_{in} D}{f L} \quad}
$$

#power-electronics / [[Choppers]]

---
**Q.** What is the Critical Inductance ($L_c$) for a Buck Converter to remain in Continuous Conduction Mode (CCM)?
?
The boundary condition is $\Delta I_L = 2 I_{avg}$.
$$
\boxed{\quad L_c = \frac{(1-D)R}{2f} \quad}
$$

#power-electronics / [[Choppers]]

---
**Q.** How is the average output voltage of a Step-Down Chopper related to load resistance R in Discontinuous Conduction Mode (DCM)?
?
In DCM, the output voltage depends on the load.
$$
V_0 = V_{in} \left( \frac{\beta}{T} \right) \quad \text{(approx)}
$$
More accurately, $V_0$ increases as the load current decreases in DCM.

#power-electronics / [[Choppers]]

---
**Q.** What is the pulse width modulation (PWM) limit for a Commutation Circuit?
?
In forced commutation (like Voltage Commutation), the maximum duty cycle is limited because the capacitor must be charged and discharged. The frequency is limited by the turn-off time of the SCR.

#power-electronics / [[Choppers]]

---
### **DC-AC Converters (Inverters)**

**Q.** What is the RMS value of the fundamental component of the output voltage ($V_{01}$) for a Single-Phase Full Bridge VSI (Square Wave)?
?
$$
\boxed{\quad V_{01(rms)} = \frac{4V_s}{\pi\sqrt{2}} \approx 0.9 V_s \quad}
$$
Where $V_s$ is the DC source voltage.
The total RMS output voltage is $V_{or} = V_s$.

#power-electronics / [[Inverters]]

---
**Q.** In a Three-Phase VSI operating in $180^\circ$ conduction mode, what are the RMS Phase and Line voltages?
?
- **Phase Voltage:** $V_{ph(rms)} = \frac{\sqrt{2}}{3} V_s$
- **Line Voltage:** $V_{L(rms)} = \sqrt{\frac{2}{3}} V_s \approx 0.816 V_s$

#power-electronics / [[Inverters]]

---
**Q.** In a Three-Phase VSI operating in $120^\circ$ conduction mode, what are the RMS Phase and Line voltages?
?
- **Phase Voltage:** $V_{ph(rms)} = \frac{1}{\sqrt{2}} V_s$
- **Line Voltage:** $V_{L(rms)} = \sqrt{\frac{1}{2}} V_s \approx 0.707 V_s$

#power-electronics / [[Inverters]]

---
**Q.** What is the Modulation Index ($m_a$) in Sinusoidal Pulse Width Modulation (SPWM)?
?
$$
\boxed{\quad m_a = \frac{V_{control}}{V_{tri}} \quad}
$$
Where $V_{control}$ is the peak amplitude of the reference sine wave and $V_{tri}$ is the peak amplitude of the carrier triangle wave.
If $m_a \le 1$, the fundamental output voltage is linear: $V_{01} = m_a V_s$.

#power-electronics / [[Inverters]]

---
**Q.** What harmonics are eliminated in a Single-Phase Full Bridge Inverter?
?
All **Even** harmonics and **Triplen** harmonics (3, 9, 15...) are absent in the line-to-line output voltage (for 3-phase).
In single phase square wave, output contains harmonics of order $n = 1, 3, 5, 7 \dots$ with amplitude $V_n = V_1/n$.

#power-electronics / [[Inverters]]

---
**Q.** Current Source Inverter (CSI) requires what component at the input?
?
A large Inductor ($L$) in series with the DC source to maintain a constant current input.

#power-electronics / [[Inverters]]

---
### **AC Voltage Controllers & Cycloconverters**

**Q.** What is the RMS Output Voltage ($V_{or}$) of a Single-Phase AC Voltage Controller with R-load?
?
$$
\boxed{\quad V_{or} = V_s \sqrt{\frac{1}{\pi} \left( \pi - \alpha + \frac{\sin 2\alpha}{2} \right)} \quad}
$$
Where $\alpha$ is the firing angle.

#power-electronics / [[AC Voltage Controllers]]

---
**Q.** What is the range of output frequency ($f_0$) for a Step-Down Cycloconverter (Single-Phase)?
?
The output frequency is typically limited to:
$$
\boxed{\quad f_0 \le \frac{1}{3} f_s \quad}
$$
To maintain a reasonable waveform quality with line commutation.

#power-electronics / [[Cycloconverters]]

---
### **Harmonics & Power Quality**

**Q.** Formula for Total Harmonic Distortion (THD) of voltage.
?
$$
\boxed{\quad \text{THD} = \sqrt{\left( \frac{V_{rms}}{V_{1(rms)}} \right)^2 - 1} \quad}
$$
Where $V_{rms}$ is the total RMS value and $V_{1(rms)}$ is the fundamental RMS value.

#power-electronics / [[Power Quality]]

---
**Q.** What is the Input Power Factor (IPF) in terms of Displacement Factor (DF) and Distortion Factor ($\mu$)?
?
$$
\boxed{\quad \text{IPF} = \text{DF} \times \mu = \cos\phi_1 \times \frac{I_{s1}}{I_{sr}} \quad}
$$
Where $I_{s1}$ is fundamental RMS current and $I_{sr}$ is total RMS supply current.

#power-electronics / [[Power Quality]]

---
**Q.** What are the dominant harmonics in a 6-pulse converter?
?
Harmonics of order:
$$
\boxed{\quad n = 6k \pm 1 \quad (k=1, 2, 3\dots) \quad}
$$
i.e., 5th, 7th, 11th, 13th...

#power-electronics / [[Harmonics]]

---
