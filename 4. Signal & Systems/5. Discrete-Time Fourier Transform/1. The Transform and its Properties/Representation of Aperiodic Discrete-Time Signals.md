---
tags:
  - signals-and-systems
  - dtft
  - discrete-time-signals
  - frequency-domain
  - aperiodic-signals
created: 2025-09-24
aliases:
  - DTFT of Aperiodic Signals
  - Discrete-Time Fourier Transform for Aperiodic Signals
  - "Example : Common DTFTs"
  - Analysis Equation (Forward DTFT)
  - Synthesis Equation (Inverse DTFT)
  - Discrete-Time Fourier Transform (DTFT)
  - DTFT
subject: "[[Signals & Systems]]"
parent: Discrete-Time Fourier Transform (DTFT)
formula:
  - "DTFT Analysis Equation (Forward Discrete-Time Fourier Transform) : $$X(e^{j\\omega}) = \\mathcal{F}\\{x[n]\\} = \\sum_{n=-\\infty}^{\\infty} x[n] e^{-j\\omega n}$$"
  - "DTFT Synthesis Equation (Inverse Discrete-Time Fourier Transform) : $$x[n] = \\mathcal{F}^{-1}\\{X(e^{j\\omega})\\}= \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} X(e^{j\\omega}) e^{j\\omega n} d\\omega = \\frac{1}{2\\pi} \\int_{2\\pi} X(e^{j\\omega}) e^{j\\omega n} d\\omega$$"
modified: 2026-07-23T16:46:27
---
### Representation of Aperiodic Discrete-Time Signals
#dtft #aperiodic-signal #frequency-spectrum

> ==The Discrete-Time Fourier Transform (DTFT) is the tool used to analyze the frequency content of **aperiodic, discrete-time signals**.== It is the discrete-time counterpart to the [[Fourier Transform of Aperiodic Signals|Continuous-Time Fourier Transform (CTFT)]]. The DTFT maps a discrete-time sequence, $x[n]$, which is a function of an integer variable $n$, to a continuous and periodic function of frequency, $X(e^{j\omega})$.

#### The DTFT Pair
#dtft/definition #integral-transform

The relationship between a discrete-time signal and its spectrum is defined by the DTFT analysis and synthesis equations.

*   **Analysis Equation (Forward DTFT):**
    This equation transforms the signal from the discrete-time domain to the continuous frequency domain.
    $$\boxed{\quad X(e^{j\omega}) = \mathcal{F}\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n} \quad}$$

*   **Synthesis Equation (Inverse DTFT):**
    This equation reconstructs the discrete-time signal from its frequency-domain representation.
    $$\boxed{\quad x[n] = \mathcal{F}^{-1}\{X(e^{j\omega})\}= \frac{1}{2\pi} \int_{-\pi}^{\pi} X(e^{j\omega}) e^{j\omega n} d\omega = \frac{1}{2\pi} \int_{2\pi} X(e^{j\omega}) e^{j\omega n} d\omega \quad}$$
    The integration range is typically $[-\pi, \pi]$ or $[0, 2\pi]$ due to the periodicity of $X(e^{j\omega})$.

The pair is denoted as $x[n] \leftrightarrow X(e^{j\omega})$. The notation $X(e^{j\omega})$ is used to emphasize that the DTFT is closely related to the [[The Z-Transform|The Z-Transform]], $X(z)$, evaluated on the unit circle in the z-plane, where $z = e^{j\omega}$.

---
#### Periodicity of the DTFT Spectrum
#dtft/periodicity

A fundamental property of the DTFT is that its spectrum, $X(e^{j\omega})$, is **always periodic with a period of $2\pi$**.

**Proof:**
$$\begin{align}
X(e^{j(\omega+2\pi)}) &= \sum_{n=-\infty}^{\infty} x[n] e^{-j(\omega+2\pi)n} \\
&= \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n} e^{-j2\pi n}
\end{align}$$
Since $n$ is an integer, Euler's identity gives $e^{-j2\pi n} = \cos(2\pi n) - j\sin(2\pi n) = 1$.
Therefore:
$$\boxed{\quad X(e^{j(\omega+2\pi)}) = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n} = X(e^{j\omega}) \quad}$$
This means all the unique information about the spectrum is contained within any single interval of length $2\pi$, typically chosen as $[-\pi, \pi]$ or $[0, 2\pi]$. This periodicity is a direct consequence of the discrete nature of the time variable $n$.

---
#### Convergence Condition
#dtft/convergence

For the infinite summation in the DTFT analysis equation to converge, the discrete-time signal $x[n]$ must be **absolutely summable**.
$$\boxed{\quad \sum_{n=-\infty}^{\infty} |x[n]| < \infty \quad}$$
This is the discrete-time equivalent of the absolute integrability condition for the CTFT. Signals that satisfy this condition are discrete-time [[Energy and Power Signals|energy signals]].

---
#### Relationship to other Transforms
#DTFT-relations #CTFT #Z-transform #DFT

* **Relationship to Continuous-Time Fourier Transform (CTFT)**:
    The DTFT is intrinsically linked to the CTFT through the process of [[Signal Processing - Sampling|sampling]]. When a continuous-time signal $x_c(t)$ is sampled at $f_s = 1/T_s$ to get $x[n] = x_c(nT_s)$, the DTFT of $x[n]$ is a periodic replication of the CTFT of $x_c(t)$:
    $$ X(e^{j\Omega}) = \frac{1}{T_s} \sum_{k=-\infty}^{\infty} X_c\left(j\frac{\Omega}{T_s} - j\frac{2\pi k}{T_s}\right) $$
    where $X_c(j\omega)$ is the CTFT of $x_c(t)$, and $\Omega = \omega T_s$. This formula shows how spectral replicas (images) are formed due to sampling, and how aliasing occurs if the sampling rate is too low.

* **Relationship to Z-Transform**:
    The DTFT is a special case of the [[Fourier Transforms|Fourier Transform]]. If the [[Region of Convergence (ROC) for the Z-Transform|Region of Convergence (ROC)]] of the Z-Transform of $x[n]$ includes the unit circle $|z|=1$, then the DTFT is obtained by evaluating the Z-Transform on the unit circle:
    $$ X(e^{j\Omega}) = X(z)\Big|_{z=e^{j\Omega}} $$
    This connection is crucial for [[System - Stability|stability analysis]] (poles inside unit circle) and [[Frequency Response|frequency response]] of [[LTI Systems]].

* **Relationship to Discrete Fourier Transform (DFT)**:
    The [[Discrete Fourier Transform (DFT)]] is a sampled version of the DTFT. If $X(e^{j\Omega})$ is the DTFT of a finite-length sequence $x[n]$ (padded with zeros to length $N$), then the $N$-point DFT $X[k]$ samples $X(e^{j\Omega})$ at $N$ discrete frequencies:
    $$ X[k] = X(e^{j\Omega})\Big|_{\Omega = \frac{2\pi k}{N}} \quad \text{for } k=0, 1, \dots, N-1 $$

---
#### Examples of Common DTFTs
#dtft/examples

1.  **Right-Sided Exponential Sequence:**
    Let $x[n] = a^n u[n]$ with $|a| < 1$ for convergence.
    $$\begin{align}
    X(e^{j\omega}) &= \sum_{n=0}^{\infty} a^n e^{-j\omega n} = \sum_{n=0}^{\infty} (ae^{-j\omega})^n
    \end{align}$$
    This is a geometric series which converges to:
    $$\boxed{\quad a^n u[n] \quad \leftrightarrow \quad \frac{1}{1 - ae^{-j\omega}}, \quad |a|<1 \quad}$$

2.  **Discrete-Time Rectangular Pulse:**
    Let $x[n] = 1$ for $|n| \le N_1$ and 0 otherwise.
    $$\begin{align}
    X(e^{j\omega}) &= \sum_{n=-N_1}^{N_1} 1 \cdot e^{-j\omega n}
    \end{align}$$
    Using the formula for a finite geometric sum, this becomes:
    $$\boxed{\quad x[n] = \begin{cases} 1 & |n| \le N_1 \\ 0 & |n| > N_1 \end{cases} \quad \leftrightarrow \quad \frac{\sin(\omega(N_1+1/2))}{\sin(\omega/2)} \quad}$$
    This is known as the Dirichlet kernel or discrete-time sinc function.

3.  **Unit Impulse Sequence:**
    Let $x[n] = \delta[n]$.
    $$X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} \delta[n] e^{-j\omega n} = 1 \cdot e^{-j\omega \cdot 0} = 1$$
    $$\boxed{\quad \delta[n] \quad \leftrightarrow \quad 1 \quad}$$
    A single impulse in time contains all frequencies with equal magnitude and zero phase.

---
#### Properties of DTFT
#DTFT-properties #linearity #time-shift #frequency-shift #convolution

Many properties are analogous to the continuous-time Fourier Transform:

1. **Linearity**: $DTFT\{ax_1[n] + bx_2[n]\} = aX_1(e^{j\Omega}) + bX_2(e^{j\Omega})$
2. **Time Shift**: $DTFT\{x[n-n_0]\} = e^{-j\Omega n_0} X(e^{j\Omega})$
3. **Frequency Shift (Modulation)**: $DTFT\{e^{j\Omega_0 n} x[n]\} = X(e^{j(\Omega - \Omega_0)})$
4. **Convolution Property**: Convolution in the time domain becomes multiplication in the frequency domain. This is the bedrock of [[Frequency-Domain Analysis]] for LTI systems: $$ y[n] = x[n] * h[n] \iff Y(e^{j\Omega}) = X(e^{j\Omega}) H(e^{j\Omega}) $$where $H(e^{j\Omega})$ is the [[Frequency Response]] of the LTI system.
5. **Multiplication Property**: Multiplication in the time domain corresponds to circular convolution in the frequency domain.
6. **Parseval's Relation**: Relates the energy of a signal in the time domain to its energy in the frequency domain.

---
### Related Concepts
#dtft/related-concepts 

>  [[Properties of the DTFT]]

[[Frequency Response of Discrete-Time LTI Systems]]
[[Representation of Periodic Discrete-Time Signals|Discrete-Time Fourier Series]]
[[Fourier Transform of Aperiodic Signals|Continuous-Time Fourier Transform for Aperiodic Signals]]
[[The Z-Transform]] (DTFT is the Z-Transform evaluated on the unit circle)
[[Exponential and Sinusoidal Signals]]
