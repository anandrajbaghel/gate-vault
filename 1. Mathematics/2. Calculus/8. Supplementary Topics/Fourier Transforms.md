---
tags:
  - calculus/transforms
  - signal-processing
  - frequency-domain
  - pde-solver
  - engineering-math
created: 2025-06-20
aliases:
  - Fourier Transform
  - Parseval's Theorem (Rayleigh's Energy Theorem)
  - Properties of the Fourier Transform
  - "Properties : Fourier Transform (FT)"
  - Differentiation in Frequency Domain
  - Modulation Property of Fourier Transform
  - FT
  - Inverse Fourier Transform
subject: "[[Mathematics]]"
parent:
  - Calculus
confidence: 9
importance:
  - very high
youtube:
  - spUNpyF58BY
formula:
  - "Fourier Transform : $$F(\\omega) = \\mathcal{F}\\{f(t)\\} = \\int_{-\\infty}^{\\infty} f(t) e^{-i\\omega t} dt$$"
  - "Inverse Fourier Transform : $$f(t) = \\mathcal{F}^{-1}\\{F(\\omega)\\} = \\frac{1}{2\\pi} \\int_{-\\infty}^{\\infty} F(\\omega) e^{i\\omega t} d\\omega$$"
  - "Parseval's Theorem (Rayleigh's Energy Theorem) : $$\\int_{-\\infty}^{\\infty} |f(t)|^2 dt = \\frac{1}{2\\pi} \\int_{-\\infty}^{\\infty} |F(\\omega)|^2 d\\omega$$"
---
### Fourier Transforms
#fourier-transform #frequency-analysis #signal-decomposition #integral-transform

> ==The Fourier Transform is an integral transform that decomposes a function of time (or space) into its constituent frequencies.== It transforms a signal from the time (or spatial) domain to the frequency domain, ==revealing the signal's frequency spectrum==. This is invaluable in engineering for analyzing signals, systems, and solving [[First-Order Differential Equations|differential equations]].

> [!Hint]- Visualization
> ![[Signal Visualization - Sine 50Hz & 120Hz.png]]
> - **Top Plot (Time Domain):** This shows the original signal — a combination of two sine waves (50 Hz and 120 Hz). It looks complex because both frequencies are added together.
> - **Bottom Plot (Frequency Domain):** This is the **Fourier Transform**. You can clearly see two spikes at **50 Hz** and **120 Hz** — these are the exact frequency components that made up the original signal.
> 
> This is how the Fourier Transform "reveals" the hidden ingredients of a signal.
> 
> ---
> #### See more
> ![[hello.m4a|Hello Audio]]
> [[Signal Visualization - Hello Audio.png|Hello Audio Fourier Transform]]
> 
> [[Signal Visualization - Fourier Transform of Square, Noisy Sine & White Noise.png|Fourier Transform of Square, Noisy Sine and White Nose]]
> [[SS - Fourier Transform Magnitude - 5 & 20 Hz summed sine wave.png|Fourier Transform for 5 & 20 Hz Summed Sine Wave]]
> 
> ---
> ![[SS - Fourier Transform - Signal e(j2pi10t).png]]
> The plot shows the **frequency spectrum of the complex sinusoid** $x(t) = e^{j2\pi 10t}$
> 1. There is a **single sharp peak at 10 Hz**.
> 2. No peak at –10 Hz, because complex exponentials are one-sided in frequency.
> 3. This confirms: a complex sinusoid has all its energy at a **single frequency**.

---
#### Definition of the Fourier Transform
#fourier-transform/definition #frequency-domain

==The **Fourier Transform** of a function $f(t)$ is denoted by $F(\omega)$ (or $\mathcal{F}\{f(t)\}$) and is defined as:==
$$\boxed{\quad F(\omega) = \mathcal{F}\{f(t)\} = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt \quad}$$
where $\omega = 2\pi f$ is the angular frequency ($f$ is the ordinary frequency).
==The function $f(t)$ can be recovered from $F(\omega)$ by the **Inverse Fourier Transform**:==
$$\boxed{\quad f(t) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega \quad}$$
==The pair $f(t) \leftrightarrow F(\omega)$ is called a [[Fourier Transform Standard Pairs Table|Fourier Transform pair]].==

> [!pyq]- PYQ : 2018
> ![[ee_2018#^q40]]

* **Existence**: For the transform to exist, $f(t)$ typically needs to satisfy certain conditions (e.g., Dirichlet conditions: piecewise continuous, finite number of maxima/minima and discontinuities, and absolutely integrable $\int_{-\infty}^{\infty} |f(t)| dt < \infty$).
* **Notation Conventions**: ==The placement of $2\pi$ factors and the use of $\omega$ vs. $f$ can vary. Another common convention== $$\boxed{\quad F(f) = \int_{-\infty}^{\infty} f(t) e^{-i2\pi f t} dt\quad} \quad \text{and} \quad \boxed{\quad f(t) = \int_{-\infty}^{\infty} F(f) e^{i2\pi f t} df\quad}$$
	(Here, the $2\pi$ is "absorbed" into the definition of frequency $f$).

> [!fail] When NOT to integrate in Fourier Transform
> Avoid direct integration if the signal:
> - Matches a [[Fourier Transform Standard Pairs Table|standard FT pair]]
> - Is obtained by [[#🔥Properties of the Fourier Transform|time shifting]], [[#🔥Properties of the Fourier Transform|scaling]], or [[#🔥Properties of the Fourier Transform|modulation]]
> - Is multiplied by $\cos(\omega_0 t)$ or $e^{j\omega_0 t}$
> 
> Use [[#🔥Properties of the Fourier Transform|properties]] first. Integration is a last resort in exams.

---
#### 🔥Properties of the Fourier Transform
#fourier-transform/properties 

> [!refer]
> [[Fourier Transform Standard Pairs Table|Fourier Transform Pairs]]
> [[Properties of the CTFT]] (in details)

Let $f(t) \leftrightarrow F(\omega)$ and $g(t) \leftrightarrow G(\omega)$.
1. **Linearity**: $a f(t) + b g(t) \leftrightarrow a F(\omega) + b G(\omega)$.
2. ⭐ **Time Shifting**: $f(t-t_0) \leftrightarrow e^{-i\omega t_0} F(\omega)$. (Delay in time = phase shift in frequency). 
3. ⭐ **Frequency Shifting (Modulation)**: $e^{i\omega_0 t} f(t) \leftrightarrow F(\omega - \omega_0)$.
> [!example]- Symmetric Frequency Shifting ($\cos(\omega_0 t)$)
> Suppose instead of $e^{i\omega_0 t}$, base function, $x(t)$ is multiplied by $\cos(\omega_0 t)$.
> - $e^{i\omega_0 t}x(t)$ - Single Frequency Shift
> - $\cos(\omega_0 t)x(t)$ - Two Symmetric Shifts ([[Bandpass Filter|bandpass]])
> 
> By [[Algebra of Complex Numbers#Euler's Formula & Conversions|Euler's Formula]] $$\cos(\omega_0 t)=\frac{1}{2}\left(e^{i\omega_0 t} + e^{-i\omega_0 t}\right)$$ 
> $$x(t)\cos(\omega_0 t)=\frac{1}{2}\Big[x(t)e^{i\omega_0 t} + x(t)e^{-i\omega_0 t}\Big]$$
> $$\Rightarrow \mathcal{F}\{x(t)\cos(\omega_0 t)\}=\frac{1}{2}\Big[X(\omega-\omega_0) + X(\omega+\omega_0)\Big]$$
> 
> ---
> If given $y(t) = x(at)\cos(\omega_0 t)$
> Step 1: Scaling property $$x(at) \xleftrightarrow{\mathcal F} \frac{1}{|a|}X\!\left(\frac{\omega}{a}\right)$$
> Step 2: Modulation (cosine) $$x(at)\cos(\omega_0 t) = \frac{1}{2}\Big[x(at)e^{j\omega_0 t} + x(at)e^{-j\omega_0 t}\Big]$$
> 
> $$\Rightarrow Y(\omega) = \frac{1}{2|a|} \Bigg[X\!\left(\frac{\omega-\omega_0}{a}\right) + X\!\left(\frac{\omega+\omega_0}{a}\right) \Bigg]$$

4. ⭐ **Time Scaling**: For $a \neq 0$, $f(at) \leftrightarrow \frac{1}{|a|} F\left(\frac{\omega}{a}\right)$. (Compression in time = expansion in frequency, and vice-versa: uncertainty principle idea).
5. ⭐ **Symmetry (Duality)**: If $f(t) \leftrightarrow F(\omega)$, then $F(t) \leftrightarrow 2\pi f(-\omega)$.
6. **Differentiation in Time Domain**:
    *   $f'(t) \leftrightarrow i\omega F(\omega)$
    *   $f^{(n)}(t) \leftrightarrow (i\omega)^n F(\omega)$
    (Transforms differentiation into multiplication by $i\omega$).
7. **Integration in Time Domain**: $\int_{-\infty}^t f(\tau)d\tau \leftrightarrow \frac{1}{i\omega}F(\omega) + \pi F(0)\delta(\omega)$ (the $\delta(\omega)$ term accounts for DC component).
8. ⭐ **Differentiation in Frequency Domain**: $(-it)f(t) \leftrightarrow \frac{dF(\omega)}{d\omega}$.
> [!example]- Exam Corollary: Derivative at $\omega = 0$
> Using $(-it)f(t) \leftrightarrow \dfrac{dF(\omega)}{d\omega}$,
> $$\boxed{\quad \frac{dX(\omega)}{d\omega}\Big|_{\omega=0}= -i\int_{-\infty}^{\infty} t\,x(t)\,dt \quad}$$
> If $t\,x(t)$ is an **odd function**, the integral is zero ⇒ $\dfrac{dX}{d\omega}\big|_{\omega=0}=0$

9. ⭐ **Convolution Theorem**:
    $$\boxed{\quad (f * g)(t) = \int_{-\infty}^{\infty} f(\tau)g(t-\tau)d\tau \quad \leftrightarrow \quad F(\omega)G(\omega) \quad}$$
    ([[Continuous-Time Convolution Integral|Convolution]] in time domain = multiplication in frequency domain).
10. ⭐ **Multiplication Theorem**:
    $$\boxed{\quad f(t)g(t) \quad \leftrightarrow \quad \frac{1}{2\pi} (F * G)(\omega) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\xi)G(\omega-\xi)d\xi \quad}$$
    (Multiplication in time domain = convolution in frequency domain, scaled by $1/2\pi$).

> [!warning] Real-Valued Function ($x(t)$)
> Fourier Transform of a real-valued function $x(t)$
> - If $x(t)$ is even then $F(\omega) = \mathcal{F}\{f(t)\}$ is real & even.
> - If $x(t)$ is odd then $F(\omega) = \mathcal{F}\{f(t)\}$ is imaginary & odd.
> - If $x(t)$ is real but neither even nor odd then $X(\omega)$ is complex in general.
> 
> ---
> ###### Maximum of $|X(\omega)|$ — Area Rule
> If $x(t)$ is **real, even, non-negative**, and absolutely integrable, then the magnitude of its Fourier transform is maximum at $\omega = 0$.
> $$X(\omega) = \int_{-\infty}^{\infty} x(t)e^{-j\omega t}\,dt$$
> At $\omega = 0$, $$X(0) = \int_{-\infty}^{\infty} x(t)\,dt$$
> Hence, $$\max_{\omega}|X(\omega)| = X(0)$$
> 
> > [!success] Exam note
> > Use this directly for triangular, rectangular, or any symmetric positive pulse. Do **not** compute full $X(\omega)$ unless explicitly asked.

---
#### Parseval's Theorem (Rayleigh's Energy Theorem)
#parsevals-theorem #energy-conservation

Relates the energy of a signal in the time domain to its energy in the frequency domain:
$$\boxed{\quad \int_{-\infty}^{\infty} |f(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |F(\omega)|^2 d\omega \quad}$$
(If using $F(f)$, the $1/2\pi$ factor might be $1$). This is a statement of energy conservation.

---
#### Dirac Delta Function
#dirac-delta-fourier

The Fourier transform of the Dirac delta function $\delta(t)$ is 1.
$\delta(t) \leftrightarrow 1$.
Conversely, $1 \leftrightarrow 2\pi\delta(\omega)$.
This means an impulse contains all frequencies with equal amplitude. A constant DC signal is an impulse at zero frequency.

---
#### Relationship to [[Fourier Series]]
#fourier-series-fourier-transform

* **Fourier Series**: Decomposes a *periodic* function into a sum of discrete sinusoids (harmonics).
* **Fourier Transform**: Decomposes a *non-periodic* (or aperiodic) function into a continuous spectrum of frequencies.
The Fourier Transform can be viewed as the limiting case of a Fourier Series as the period of the function approaches infinity.

---
#### Discrete Fourier Transform (DFT) and Fast Fourier Transform (FFT)
#dft #fft #numerical-fourier-transform

* **Discrete Fourier Transform (DFT)**: For signals that are discrete in time (sampled) and finite in duration.
    $X_k = \sum_{n=0}^{N-1} x_n e^{-i2\pi kn/N}$.
* **Fast Fourier Transform (FFT)**: An extremely efficient algorithm for computing the DFT. It revolutionized digital signal processing by making frequency analysis computationally feasible.
This is what is typically implemented in software (e.g., MATLAB `fft`, Python `scipy.fft`).

---
#### Applications in Engineering
#fourier-transform/applications

1. **Signal Processing**:
    * **Spectral Analysis**: Identifying dominant frequencies in a signal (e.g., in audio, vibrations, biomedical signals like ECG/EEG).
    * **Filtering**: Designing filters (low-pass, high-pass, band-pass, notch) by manipulating the signal's frequency spectrum to remove unwanted frequencies (noise) or select desired ones.
2. **Image Processing**:
    * 2D Fourier Transform is used for image filtering (sharpening, blurring), noise removal, and image compression (e.g., JPEG uses a related transform, the DCT).
3. **Communications Systems**:
    * **Modulation/Demodulation**: Shifting baseband signals to higher carrier frequencies for transmission and back.
    * Analyzing bandwidth requirements.
4. **Solving [[Partial Differential Equations (PDEs)|Partial Differential Equations (PDEs)]]**:
    * Transforms spatial derivatives into multiplication by $ik$ (wavenumber), simplifying PDEs into ODEs or algebraic equations (e.g., heat equation, wave equation on infinite domains).
5. **System Analysis ([[LTI|Linear Time-Invariant]] - LTI Systems)**:
    * The **frequency response** $H(\omega)$ of an LTI system is the Fourier Transform of its impulse response $h(t)$.
    * Output spectrum $Y(\omega) = H(\omega)X(\omega)$, where $X(\omega)$ is input spectrum.
6. **Quantum Mechanics**: Momentum and position wavefunctions are Fourier transform pairs.
7. **Optics**: Fraunhofer diffraction patterns are Fourier transforms of the aperture shape.
8. **Vibration Analysis**: Identifying natural frequencies and mode shapes of structures.
9. **Geophysics**: Analyzing seismic data.

---
#### Variants of Fourier Transform
#fourier-variants

1. **Fourier Cosine Transform / Fourier Sine Transform**: Used for even/odd functions or functions defined on a semi-infinite interval with specific boundary conditions.
2. **Short-Time Fourier Transform (STFT) / Gabor Transform**: Analyzes how the frequency content of a signal changes over time by applying FT to windowed segments of the signal (time-frequency analysis).
3. **Wavelet Transform**: Another time-frequency analysis tool, offering variable resolution (good time resolution for high frequencies, good frequency resolution for low frequencies).

---
### Related Concepts 
#fourier-transform/related-concepts 

> [[The Laplace Transform]] (Related integral transform, $s= \sigma + i\omega$; FT is often seen as Laplace with $\sigma=0$)

[[Fourier Transform Standard Pairs Table]]
[[Properties of the CTFT]]
[[The Z-Transform|Z-Transforms]] (Discrete-time counterpart for signals and systems analysis, related to DFT)
[[Fourier Series|Fourier Series]] (For periodic signals)
[[Complex Analysis]] (Fourier transform integrals can be evaluated using contour integration)
[[Control Systems]]
[[Properties of the DTFT]]
[[Partial Differential Equations (PDEs)]]

