---
tags:
  - signals-and-systems
  - fourier-transform
  - ctft-properties
created: 2025-09-24
aliases:
  - CTFT Properties
  - Fourier Transform Properties (Linearity, Duality, Shifting)
  - "Example : Rect/Sinc Pair"
  - Properties of the CTFT (Linearity, Duality, Time or Frequency Shifting)
  - Property of CTFT
subject: "[[Signals & Systems]]"
parent:
  - Continuous-Time Fourier Transform (CTFT)
modified: 2026-07-23T16:45:09
---

### Properties of the CTFT (Linearity, Duality, Time/Frequency Shifting)
#fourier-transform/properties

> The Continuous-Time Fourier Transform (CTFT) possesses several fundamental properties that simplify the analysis of signals and systems. These properties describe how operations on a signal in the time domain affect its representation in the frequency domain, and vice-versa. Throughout this note, we use the notation $x(t) \leftrightarrow X(\omega)$ and $y(t) \leftrightarrow Y(\omega)$ to denote Fourier transform pairs.

#### 1. Linearity
#ctft/linearity

The Fourier transform is a linear operation. This means that the transform of a linear combination of signals is the same linear combination of their individual transforms.

> If $x(t) \leftrightarrow X(\omega)$ and $y(t) \leftrightarrow Y(\omega)$, then for any constants $a$ and $b$:
> $$\boxed{\quad a x(t) + b y(t) \quad \leftrightarrow \quad a X(\omega) + b Y(\omega) \quad}$$

**Significance:** This property is a direct consequence of the linearity of the integral operator. It is incredibly powerful as it allows us to break down complex signals into simpler, standard components (like exponentials or rectangular pulses), find their individual transforms, and then combine them to find the transform of the original signal. This is the foundation of [[4. Signal & Systems/1. Signals and Systems - Fundamentals/3. System Properties/Linearity|Linear]] Time-Invariant (LTI) system analysis.

---
#### 2. Time Shifting
#ctft/time-shifting

Shifting a signal in the time domain by $t_0$ does not change the magnitude of its Fourier transform, but it introduces a linear phase shift in the frequency domain.

> For a real constant $t_0$:
> $$\boxed{\quad x(t - t_0) \quad \leftrightarrow \quad e^{-j\omega t_0} X(\omega) \quad}$$

**Interpretation:**
*   **Magnitude:** The magnitude of the new spectrum is $|e^{-j\omega t_0} X(\omega)| = |e^{-j\omega t_0}| \cdot |X(\omega)| = 1 \cdot |X(\omega)| = |X(\omega)|$. The magnitude spectrum is unaffected by a time shift.
*   **Phase:** The phase of the new spectrum is $\angle(e^{-j\omega t_0} X(\omega)) = \angle(e^{-j\omega t_0}) + \angle(X(\omega)) = -\omega t_0 + \angle(X(\omega))$. A linear phase term, $-\omega t_0$, is added to the original phase spectrum.

**Significance:** This property is crucial for understanding the effect of delays in systems. A simple time delay in a system corresponds to a linear phase response.

---
#### 3. Frequency Shifting (Modulation)
#ctft/frequency-shifting #modulation

Multiplying a signal by a complex exponential in the time domain results in a shift of its spectrum in the frequency domain.

> For a real constant $\omega_0$:
> $$\boxed{\quad e^{j\omega_0 t} x(t) \quad \leftrightarrow \quad X(\omega - \omega_0) \quad}$$

**Significance:** This property is the mathematical foundation of **amplitude modulation (AM)** used in communication systems. To transmit a low-frequency baseband signal $x(t)$, it is multiplied by a high-frequency sinusoidal carrier, such as $\cos(\omega_0 t)$. Using [[Algebra of Complex Numbers|Euler's identity]]:
$$x(t)\cos(\omega_0 t) = x(t) \left( \frac{e^{j\omega_0 t} + e^{-j\omega_0 t}}{2} \right)$$
Using the linearity and frequency shifting properties, the transform is:
$$\mathcal{F}\{x(t)\cos(\omega_0 t)\} = \frac{1}{2} [X(\omega - \omega_0) + X(\omega + \omega_0)]$$
This shows that the original signal's spectrum $X(\omega)$ is shifted to be centered around the carrier frequencies $\pm\omega_0$.

---
#### 4. Duality (Symmetry)
#ctft/duality

Duality is a powerful property that highlights the symmetry between the time and frequency domains in the Fourier transform definitions. It states that if a particular signal shape exists in the time domain, a similar shape will exist in the frequency domain for a different time-domain signal.

> If $x(t) \leftrightarrow X(\omega)$, then the transform of the function $X(t)$ is:
> $$\boxed{\quad X(t) \quad \leftrightarrow \quad 2\pi x(-\omega) \quad}$$

**Example: rect/sinc pair**
*   We know that a rectangular pulse in time gives a sinc function in frequency:
    $$\text{rect}(t) \leftrightarrow \text{sinc}\left(\frac{\omega}{2\pi}\right) = \frac{\sin(\omega/2)}{\omega/2}$$
*   Using the duality property, we can find the transform of a sinc function in time. Let $X(t) = \text{sinc}(t/2\pi)$. According to duality, its transform is $2\pi x(-\omega)$. Here $x(t)=\text{rect}(t)$, so $x(-\omega) = \text{rect}(-\omega) = \text{rect}(\omega)$ since the rect function is even.
    $$\text{sinc}\left(\frac{t}{2\pi}\right) \leftrightarrow 2\pi \cdot \text{rect}(\omega)$$
This result shows that the ideal low-pass filter (a rectangular function in frequency) has an impulse response that is a sinc function in time.

---
### Related Concepts
#fourier-transform/related-concepts

> [[Continuous-Time Fourier Transform (CTFT)]]

[[Fourier Transforms]]
[[Convolution and Multiplication Properties of CTFT]]
[[Differentiation and Integration Properties of CTFT]]
[[Time Scaling Property of CTFT]]
[[Filtering Concepts]]
[[Development of the Fourier Transform from Fourier Series]]