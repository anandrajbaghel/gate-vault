---
tags:
  - signals
  - circuits
  - ac-analysis
  - measurements
  - basic-concepts
created: 2025-09-10
aliases:
  - RMS Value
  - Average Value
  - Effective Value
  - Form Factor
  - Crest Factor
  - Peak-to-Peak Voltage
  - Peak Voltage
  - Average Value Calculation
  - Root Mean Square
  - RMS Value of Non-Sinusoidal Waveforms
subject: "[[Electric Circuits]]"
parent: "[[AC Circuit Analysis]]"
confidence: 9
---
### RMS and Average Values
#ac-analysis #signal-properties

> ==For time-varying waveforms, particularly AC signals, the instantaneous value is constantly changing. To analyze these signals, especially for power calculations, we use specific metrics to represent the waveform's "effective" value as a single, constant number.== The two most important metrics are the **Average Value** and the **Root Mean Square (RMS) Value**.

#### Average Value
#average-value

The average value of a periodic signal $v(t)$ over a period $T$ is the value of a DC source that would transfer the same amount of charge as the periodic signal in the same time period. It is the algebraic sum of the areas under the curve divided by the period.

The general formula is:
$$\boxed{\quad V_{avg} = \frac{1}{T} \int_0^T v(t) dt \quad}$$
* **Full-Cycle Average**: For a symmetrical AC waveform (like a pure sine wave), the positive area cancels the negative area over a full cycle. Thus, the average value over a full cycle is **zero**.
* **Half-Cycle Average**: Because the full-cycle average is often zero, the average value is sometimes calculated over a half-cycle for rectification analysis. For a sinusoid $v(t) = V_m \sin(\omega t)$:
    $$\boxed{\quad V_{avg, half} = \frac{2V_m}{\pi} \approx 0.637 V_m \quad}$$

> [!related] Measurement
> A [[Construction and Principle of Operation of PMMC|Permanent Magnet Moving Coil (PMMC)]] instrument measures the average value of a current.

---
#### RMS (Root Mean Square) or Effective Value
#rms-value #effective-value

==The RMS value of a periodic signal is the value of a DC source that would dissipate the same amount of power (produce the same heating effect) in a given resistor as the periodic signal.== This is the most important value for power calculations in AC circuits.

The name "Root Mean Square" describes the mathematical process:
1. **Square** the signal: $v(t)^2$.
2. Take the **Mean** (average) of the squared signal over one period.
3. Take the square **Root** of the mean.

==The general formula is:==
$$\boxed{\quad V_{rms} = \sqrt{\frac{1}{T} \int_0^T [v(t)]^2 dt} \quad}$$

> [!pyq]- PYQ : 2020
> ![[ee_2020#^q6]]

> [!memory] Note (DC offset)
> If a waveform contains a DC component and an AC component, $$I_{\text{rms}} = \sqrt{I_{\text{DC}}^2 + I_{\text{AC,rms}}^2}$$ since the AC component has zero average over a cycle.

* For a sinusoidal waveform $v(t) = V_m \sin(\omega t)$: $$\boxed{\quad V_{rms} = \frac{V_m}{\sqrt{2}} \approx 0.707 V_m \quad}$$

> [!important] Note
> Unless specified otherwise, AC voltage or current values (e.g., a 230V supply) are always given as RMS values.

> [!refer] Reference
> [[Interpreting Given Value Data]]

---
#### Form Factor and Crest Factor
#form-factor #crest-factor

These are dimensionless ratios that describe the shape of a waveform.

1. **Form Factor ($K_f$)**: The ratio of the RMS value to the half-cycle average value.
    $$\boxed{\quad K_f = \frac{V_{rms}}{V_{avg}} \quad}$$
    *   For a sinusoidal wave, $K_f = (\frac{V_m}{\sqrt{2}}) / (\frac{2V_m}{\pi}) \approx 1.11$.

2. **Crest Factor ($K_c$) or Peak Factor ($K_p$)**: The ratio of the peak (maximum) value to the RMS value. It indicates how "peaky" a waveform is.
    $$\boxed{\quad K_c = \frac{V_{peak}}{V_{rms}} = \frac{V_m}{V_{rms}} \quad}$$
    *   For a sinusoidal wave, $K_c = V_m / (\frac{V_m}{\sqrt{2}}) = \sqrt{2} \approx 1.414$.

---
#### Values for Common Waveforms

| Waveform                  | Peak Value$(V_P = V_m)$ |       RMS Value        | Average Value (Half) | Form Factor $(K_f)$ | Crest Factor $(K_c)$ |
| :------------------------ | :---------------------: | :--------------------: | :------------------: | :-----------------: | :------------------: |
| Sinusoidal                |          $V_m$          | $\frac{V_m}{\sqrt{2}}$ |  $\frac{2V_m}{\pi}$  |       $1.11$        |      $\sqrt{2}$      |
| Half-Wave Rectified Sine  |          $V_m$          |    $\frac{V_m}{2}$     |  $\frac{V_m}{\pi}$   |       $1.57$        |          2           |
| Full-Wave Rectified Sine  |          $V_m$          | $\frac{V_m}{\sqrt{2}}$ |  $\frac{2V_m}{\pi}$  |       $1.11$        |      $\sqrt{2}$      |
| Square Wave (Symmetrical) |          $V_m$          |         $V_m$          |        $V_m$         |         $1$         |         $1$          |
| Triangular Wave           |          $V_m$          | $\frac{V_m}{\sqrt{3}}$ |   $\frac{V_m}{2}$    |       $1.15$        |      $\sqrt{3}$      |

> [!memory] Important Dividing Factor
> 
> 1. $V_{P-P}$ to $V_P$ : $V_P = \frac{V_{P-P}}{2}$
> 2. $V_P$ to $V_{RMS}$ : $V_P = V_{RMS} \times \sqrt2$
> 3. $V_{P-P}$ to $V_{RMS}$ : $V_{RMS} = \frac{V_{P-P}}{2\sqrt2}$

---
### Related Concepts
#related-concepts

> [[AC Circuit Analysis]] (Parent Concept)

[[Construction and Principle of Operation of PMMC]]
[[AC Power Analysis]] (Uses RMS values extensively)
[[Uncontrolled Rectifiers]] (Produces half-wave and full-wave rectified signals)
[[Electrical & Electronic Measurements]] (Discusses instruments like PMMC and True RMS meters)
[[Signals & Systems]] (Provides the mathematical foundation for signal analysis)