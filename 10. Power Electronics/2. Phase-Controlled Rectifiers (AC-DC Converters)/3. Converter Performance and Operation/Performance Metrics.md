---
tags:
  - power-electronics
  - rectifiers
  - ac-dc-converters
  - power-quality
  - performance-metrics
created: 2025-10-15
aliases:
  - Rectifier Performance Metrics
  - Converter Performance Analysis
  - Input Power Factor
  - Displacement Factor
  - Harmonic Factor
  - Total Harmonic Distortion
  - THD
  - DPF
  - Distortion Factor
  - Fundamental Power Factor
  - Power Factor in Non-Sinusoidal Systems
subject: "[[Power Electronics]]"
parent:
  - Phase-Controlled Rectifiers (AC-DC Converters)
modified: 2026-08-04T10:10:27
---
### Performance Metrics for Phase-Controlled Rectifiers
#power-electronics #rectifiers #power-quality #performance-metrics

> Phase-controlled rectifiers draw non-sinusoidal current from the AC mains, which introduces [[#Total Harmonic Distortion (THD)|harmonic distortion]] and leads to a poor power factor. Performance metrics are crucial to quantify the quality of power conversion, analyze the impact on the AC source, and comply with standards like IEEE-519. These metrics primarily evaluate the input AC current waveform.

#### Input Current Analysis
#harmonics #fourier-series

The input current $i_s(t)$ drawn by a rectifier is periodic but non-sinusoidal. It can be represented by a [[Fourier Series|Fourier Series]]:
$$i_s(t) = I_{dc} + \sum_{n=1}^{\infty} a_n \cos(n\omega t) + \sum_{n=1}^{\infty} b_n \sin(n\omega t)$$
The RMS value of the fundamental component is $I_{s1}$, and the total RMS value of the current is $I_s$.
$$I_s = \sqrt{\sum_{n=1}^{\infty} I_{sn}^2} = \sqrt{I_{s1}^2 + I_{s2}^2 + I_{s3}^2 + \dots}$$
> **where $I_{sn}$ is the RMS value of the n-th harmonic.**

---
#### Displacement Factor (DPF) or Fundamental Power Factor
#displacement-factor #fundamental-power-factor

The Displacement Factor is the cosine of the phase angle difference $(\phi_1)$ between the **fundamental component** of the input current $(I_{s1})$ and the sinusoidal input voltage $(V_s)$.
$$\boxed{\quad DPF = \cos(\phi_1) \quad}$$
* This is the power factor as seen by a conventional wattmeter that only responds to fundamental frequencies.
* For an ideal rectifier with a highly inductive load (constant DC current), the DPF is approximately equal to $\cos(\alpha)$, where $\alpha$ is the firing angle.

---
#### Total Harmonic Distortion (THD)
#thd #harmonics #distortion

THD quantifies the amount of distortion in a waveform compared to its fundamental component. For the input current, it is defined as the ratio of the RMS value of all harmonic components to the RMS value of the fundamental component.
$$\boxed{\quad THD_i = \frac{\sqrt{\sum_{n=2,3,...}^{\infty} I_{sn}^2}}{I_{s1}} = \frac{\sqrt{I_s^2 - I_{s1}^2}}{I_{s1}} \quad}$$
* A higher THD indicates a more distorted current waveform, which can cause issues like overheating in transformers and interference with other equipment.

---
#### Input Power Factor (PF)
#power-factor

The true Input Power Factor is the ratio of the total average power (Real Power, $P$) delivered to the load, to the total apparent power ($S$) drawn from the source.
$$PF = \frac{\text{Real Power (P)}}{\text{Apparent Power (S)}}$$
The real power is transferred only by the fundamental components:
$$P = V_s I_{s1} \cos(\phi_1)$$
The apparent power is the product of total RMS voltage and total RMS current:
$$S = V_s I_s$$
Therefore, the power factor is:
$$\begin{align}
PF &= \frac{V_s I_{s1} \cos(\phi_1)}{V_s I_s} \\
 &= \left(\frac{I_{s1}}{I_s}\right) \cos(\phi_1)
\end{align}$$
The term $\frac{I_{s1}}{I_s}$ is called the **Distortion Factor ($g$ or $k_d$)**. It relates the total RMS current to its fundamental component.

The distortion factor can be expressed in terms of THD:
$$g = \frac{I_{s1}}{I_s} = \frac{I_{s1}}{\sqrt{I_{s1}^2 + \sum_{n=2}^{\infty} I_{sn}^2}} = \frac{1}{\sqrt{1 + \left(\frac{\sqrt{\sum_{n=2}^{\infty} I_{sn}^2}}{I_{s1}}\right)^2}} = \frac{1}{\sqrt{1 + THD^2}}$$
This leads to the most important relationship for rectifier performance:
$$\boxed{\quad PF = g \times DPF = \frac{1}{\sqrt{1 + THD^2}} \times \cos(\phi_1) \quad}$$
* **Key Insight**: The true power factor is degraded by two factors: the phase shift of the fundamental current (Displacement Factor) and the presence of harmonics (Distortion Factor). For a pure sinusoidal current with no harmonics, $THD=0$, $g=1$, and $PF=DPF$.

> See [[Distortion Power and True Power Factor]]

---
##### Power Factor of Standard Rectifiers (GATE High Yield)
#gate/formulas

Assume **Ripple Free Load Current** (High Inductance Load, $I_0 = \text{constant}$) for full-wave and three-phase cases.

| Rectifier Type | Input Current Waveform | Distortion Factor (DF) | Displacement PF (DPF) | **Input Power Factor (PF)** |
| :--- | :--- | :--- | :--- | :--- |
| **1-$\phi$ Half Wave** (R-Load) | Sinusoidal (Half) | $1/\sqrt{2} \approx 0.707$ | $1$ | **0.707** |
| **1-$\phi$ Full Converter** (Bridge) | Square Wave | $\frac{2\sqrt{2}}{\pi} \approx 0.9$ | $\cos \alpha$ | $\boxed{\frac{2\sqrt{2}}{\pi} \cos \alpha \approx 0.9 \cos \alpha}$ |
| **1-$\phi$ Semi Converter** | Stepped | $\sqrt{\frac{2(1+\cos\alpha)}{\pi(\pi-\alpha)}}$ | $\cos(\alpha/2)$ | $\sqrt{\frac{2(1+\cos\alpha)}{\pi(\pi-\alpha)}} \cos(\alpha/2)$ |
| **3-$\phi$ Full Converter** (Bridge) | Quasi-Square (120°) | $\frac{3}{\pi} \approx 0.955$ | $\cos \alpha$ | $\boxed{\frac{3}{\pi} \cos \alpha \approx 0.955 \cos \alpha}$ |

> [!warning] GATE Tip
> * **1-$\phi$ Full Converter:** PF decreases linearly with $\cos \alpha$. At $\alpha=0$ (Diode Bridge), PF $\approx 0.9$.
> * **3-$\phi$ Full Converter:** PF is higher than 1-$\phi$. At $\alpha=0$, PF $\approx 0.955$.
> * **Semi-Converters** always have a **better** (higher) power factor than Full Converters for the same firing angle because the freewheeling action reduces the RMS input current while maintaining the same active power transfer.

---
### Related Concepts
#performance-metrics/related-concepts

> [[Phase-Controlled Rectifiers]]

[[Fourier Series]]
[[Single-Phase Full-Wave Bridge Controlled Rectifier]]
[[Effect of Source Inductance (Commutation Overlap)]]
[[Power Quality]]
[[Power Factor of Rectifiers]]