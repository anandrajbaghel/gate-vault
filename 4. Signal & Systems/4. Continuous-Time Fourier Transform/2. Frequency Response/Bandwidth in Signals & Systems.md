---
tags:
  - signals-and-systems
  - frequency-domain
  - communication
  - control-systems
  - filtering
created: 2025-09-24
aliases:
  - BW
  - Signal Bandwidth
  - System Bandwidth
  - -3dB Bandwidth
subject: "[[Signals & Systems]]"
parent: "[[Frequency Response of LTI Systems]]"
modified: 2026-07-23T16:45:19
---
### Bandwidth
#bandwidth #frequency-response #time-frequency-tradeoff

> **Bandwidth** is a fundamental concept that describes the range of frequencies present in a signal or the range of frequencies that a system can effectively process. It is a measure of the "width" of a function in the frequency domain. There is a critical distinction between the bandwidth of a signal and the bandwidth of a system.

#### System Bandwidth
#system-bandwidth #3db-bandwidth

System bandwidth is defined by the system's [[Frequency Response of LTI Systems|frequency response]], $H(\omega)$. It specifies the range of frequencies over which the system passes input signals without significant attenuation.

The most common definition is the **-3dB Bandwidth** (or half-power bandwidth).

*   **For Low-Pass Systems:** The bandwidth is the frequency $\omega_c$ at which the magnitude response $|H(\omega)|$ drops to $1/\sqrt{2}$ (or approximately 0.707) of its DC value, $|H(0)|$.
    $$\boxed{\quad |H(\omega_c)| = \frac{|H(0)|}{\sqrt{2}} \quad}$$
    The bandwidth is the range from 0 to $\omega_c$ (or $f_c$ in Hz).

*   **For Band-Pass Systems:** The bandwidth is the difference between the upper and lower -3dB frequencies, $\omega_{c2}$ and $\omega_{c1}$.
    $$\boxed{\quad BW = \omega_{c2} - \omega_{c1} \quad}$$

**Significance:**
*   A system's bandwidth determines the fastest-changing signal it can handle. A wider bandwidth system can process signals with more rapid variations.
*   In control systems, bandwidth is an indicator of the speed of response.
*   In communication, the bandwidth of a channel limits the maximum data rate that can be transmitted through it.

---
#### Signal Bandwidth
#signal-bandwidth

Signal bandwidth refers to the range of frequencies where a signal's frequency spectrum contains most of its energy. Since the spectra of many time-limited signals are theoretically infinite (e.g., a rect pulse has an infinite sinc spectrum), practical definitions are used.

*   **Absolute Bandwidth:** The range of frequencies where the signal's spectrum $X(\omega)$ is non-zero. This is often infinite and not practical.
*   **-3dB Bandwidth (Half-Power Bandwidth):** The range of frequencies where the magnitude spectrum $|X(\omega)|$ is at or above $1/\sqrt{2}$ of its peak value. This is a very common measure.
*   **Null-to-Null Bandwidth:** For pulse-like signals whose spectra have distinct lobes (like a sinc function), this is the width of the main lobe between the first two nulls (zeros). For $A\tau \text{sinc}(\omega\tau/2\pi)$, the first null occurs when $\omega\tau/2 = \pi$, so $\omega = 2\pi/\tau$. The null-to-null bandwidth is $2 \times (2\pi/\tau) = 4\pi/\tau$ rad/s.
*   **Energy-based Bandwidth:** The band of frequencies that contains a specified percentage (e.g., 90% or 99%) of the total signal energy.

---
#### Relationship Between Rise Time and Bandwidth
#rise-time #bandwidth-tradeoff

There is a fundamental inverse relationship between a system's bandwidth and its time-domain response speed, specifically its **rise time**. Rise time ($t_r$) is the time it takes for a system's output to rise from 10% to 90% of its final value in response to a step input.

For a first-order low-pass system, this relationship is given by the approximation:
$$\boxed{\quad t_r \approx \frac{0.35}{f_{BW}} \quad \text{ or } \quad t_r \cdot f_{BW} \approx 0.35 \quad}$$
where $f_{BW}$ is the -3dB bandwidth in Hertz (Hz).

**Significance:**
This relationship embodies the **time-frequency uncertainty principle**:
*   A system with a **large bandwidth** can respond very quickly (it has a **small rise time**). It can process signals with sharp, fast features.
*   A system with a **small bandwidth** is slow to respond (it has a **large rise time**) and will smooth out sharp features in an input signal.

This trade-off is crucial in the design of amplifiers, filters, and control systems.

---
### Related Concepts
#bandwidth/related-concepts 

> [[Frequency Response of LTI Systems]]

[[Filtering Concepts]]
[[Continuous-Time Fourier Transform (CTFT)]]
[[The Transfer Function H(s)]]
[[Control Systems]]
[[Signals & Systems - Fundamentals]]