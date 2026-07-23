---
tags:
  - frequency-response
  - transfer-function
  - lti-systems
  - bode-plot
created: 2026-07-04
aliases:
  - H(jw)
  - Sinusoidal Transfer Function
  - Frequency Domain Analysis
  - Magnitude and Phase Response
subject:
  - "[[Signals & Systems]]"
  - "[[Control Systems]]"
  - "[[Analog & Digital Electronics]]"
parent: "[[System Analysis]]"
modified: 2026-07-23T16:53:25
---
### Frequency Domain Transfer Function
#frequency-response #transfer-function 

> The frequency response of a stable, Linear Time-Invariant (LTI) system is derived directly from its Laplace domain [[The Transfer Function H(s)|transfer function]] $H(s)$ by evaluating it along the imaginary axis. We make the substitution $s = j\omega$, where $\omega$ is the angular frequency.

$$\boxed{\quad H(j\omega) = H(s)\big|_{s=j\omega} \quad}$$

Because $H(j\omega)$ evaluates to a complex number for any specific frequency $\omega$, it is completely described by two components: its **Magnitude** and its **Phase**.

---

#### Magnitude and Phase Responses
#magnitude-response #phase-response

The complex function $H(j\omega)$ can be expressed in polar form:
$$H(j\omega) = |H(j\omega)| e^{j\angle H(j\omega)}$$

##### 1. Magnitude Response (Gain)
#magnitude-response #gain 

The ratio of the output amplitude to the input amplitude.
$$\text{Gain} = |H(j\omega)|$$
In engineering, this is usually plotted on a logarithmic scale in decibels (dB):
$$M_{dB} = 20 \log_{10} |H(j\omega)|$$

---
##### 2. Phase Response (Phase Shift)
#phase-response #phase-shift 

The phase angle added to the input signal by the system.
$$\phi = \angle H(j\omega)$$
* If $\phi < 0$, the output **lags** the input.
* If $\phi > 0$, the output **leads** the input.

---

#### Steady-State Sinusoidal Response
#concept #sinusoidal-response

The greatest power of $H(j\omega)$ is predicting how a system reacts to continuous sine waves. 

If you drive a stable LTI system with a sinusoidal input:
$$x(t) = A \cos(\omega_0 t + \theta)$$

After all initial transient responses die out, the **steady-state output** will be a sinusoid of the *exact same frequency*, simply scaled by the magnitude and shifted by the phase of $H(j\omega_0)$:
$$\boxed{\quad y_{ss}(t) = A|H(j\omega_0)| \cos\big(\omega_0 t + \theta + \angle H(j\omega_0)\big) \quad}$$

---

#### Graphical Representations
#bode-plot #nyquist-plot

Because $H(j\omega)$ is a function of frequency, it is visualized using specific plots depending on the engineering domain:
* **[[Bode Plots]]:** The industry standard. Two semi-log plots graphing Magnitude (dB) vs. $\log(\omega)$ and Phase (degrees) vs. $\log(\omega)$.
* **[[Nyquist Plots]]:** A polar plot mapping the complex values of $H(j\omega)$ as $\omega$ varies from $-\infty$ to $\infty$. Critical for closed-loop stability analysis in control systems.
* **[[Polar Plots]]:** Similar to Nyquist, but typically only plotted for $\omega$ from $0$ to $\infty$.

---
### Related Concepts

> [[Half-Power Frequency (-3dB)]] (Where magnitude drops to $1/\sqrt{2}$)

[[Bandwidth in Signals & Systems]] (System speed and limits)
[[Filters MOC]] (Using $H(j\omega)$ to block or pass specific frequencies)