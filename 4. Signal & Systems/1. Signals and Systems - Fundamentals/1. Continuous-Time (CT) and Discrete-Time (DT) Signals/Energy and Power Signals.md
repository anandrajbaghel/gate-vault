---
tags:
  - signal-processing
  - signals-and-systems
  - energy-signals
  - power-signals
  - signal-classification
  - gate-ee
created: 2025-09-23
aliases:
  - Energy Signals
  - Power Signals
  - Signal Energy and Power
  - Power of Periodic Signals
subject: "[[Signals & Systems]]"
parent:
  - Signals & Systems - Fundamentals
modified: 2026-07-23T16:29:11
---
### Energy and Power Signals
#energy-signals #power-signals #signal-classification

> This classification categorizes signals based on their strength. The **energy** of a signal is a measure of its total strength over its entire duration, while its **power** is a measure of its average strength over time. This concept is analogous to [[Power and Energy in Circuits|electrical energy and power]] dissipated in a 1-ohm resistor, where the signal represents voltage or current.

A signal can be an energy signal, a power signal, or neither, but it cannot be both.

---
#### Signal Energy
#signal-energy

The total energy $E$ of a signal is found by integrating (for CT) or summing (for DT) the squared magnitude of the signal over all time.

-   **Continuous-Time (CT)**: The energy of a signal $x(t)$ is given by:
    $$\boxed{\quad E = \int_{-\infty}^{\infty} |x(t)|^2 dt \quad}$$
-   **Discrete-Time (DT)**: The energy of a signal $x[n]$ is given by:
    $$\boxed{\quad E = \sum_{n=-\infty}^{\infty} |x[n]|^2 \quad}$$

A signal is called an **Energy Signal** if its total energy is finite and non-zero ($0 < E < \infty$). For an energy signal, the average power is zero ($P=0$).

-   **Typical Energy Signals**: Signals that are time-limited (e.g., rectangular pulse) or signals that decay to zero as $|t| \to \infty$ (e.g., a decaying exponential).

> [!important] Exam Corollary: Energy under amplitude & time scaling
> For continuous-time signals:
> - If $y(t)=A\,x(a t - b)$ then
> $$
> \boxed{\;E_y = \frac{|A|^2}{|a|}\,E_x\;}
> $$
> (Time-shift $b$ does not change energy.)
>
> Quick checklist:
> - Amplitude $A$ → energy multiplies by $|A|^2$.
> - Time-scale $a$ → energy multiplies by $1/|a|$ (compression increases energy).
> - Time-shift $b$ → no effect.
>
> For discrete-time:
> - If $y[n]=A\,x[n-n_0]$ then $E_y=|A|^2 E_x$ (shift does nothing).
> - **Caveat ([[Decimation]]/expansion):** for $y[n]=x[M n]$ (downsampling) or $y[n]=x[n/M]$ (upsampling/interpolation) the energy relation is not a simple $1/|M|$ rule; aliasing, sample-selection, and indexing matter — handle each case by direct summation or use the multirate Z/DTFT formulas.
>
> ✳️ Memorize the CT boxed formula — that is the one examiners expect to see and use. 

---
#### Signal Power
#signal-power

The average power $P$ of a signal is the time average of its energy. This is used for signals that persist indefinitely and would otherwise have infinite energy.

-   **Continuous-Time (CT)**: The average power of a signal $x(t)$ is given by:
    $$\boxed{\quad P = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} |x(t)|^2 dt \quad}$$
-   **Discrete-Time (DT)**: The average power of a signal $x[n]$ is given by:
    $$\boxed{\quad P = \lim_{N \to \infty} \frac{1}{2N+1} \sum_{n=-N}^{N} |x[n]|^2 \quad}$$

A signal is called a **Power Signal** if its average power is finite and non-zero ($0 < P < \infty$). For a power signal, the total energy is infinite ($E = \infty$).

-   **Typical Power Signals**: Periodic signals (like sinusoids), constant (DC) signals, and some random signals.

---
#### Power of Periodic Signals
#periodic-signal-power #average-power 

For periodic signals, the time-averaging limit is not needed. The average power can be calculated by averaging over a single fundamental period.

-   **CT Periodic Signal** with period $T_0$:
    $$\boxed{\quad P = \frac{1}{T_0} \int_{T_0} |x(t)|^2 dt \quad}$$
    (The integral is taken over any interval of length $T_0$).
-   **DT Periodic Signal** with period $N_0$:
    $$\boxed{\quad P = \frac{1}{N_0} \sum_{n=\langle N_0 \rangle} |x[n]|^2 \quad}$$
    (The sum is taken over any $N_0$ consecutive samples).

> For a sinusoid $x(t) = A\cos(\omega_0 t + \phi)$, the average power is $P = A^2/2$.

---
#### Classification Summary

| Signal Type     | Total Energy (E)       | Average Power (P)    | Examples                                     |
| --------------- | ---------------------- | -------------------- | -------------------------------------------- |
| **Energy Signal** | $0 < E < \infty$       | $P=0$                | $e^{-at}u(t)$ for $a>0$, rectangular pulse     |
| **Power Signal**  | $E = \infty$           | $0 < P < \infty$     | $\cos(\omega_0t)$, constant DC signal, $u(t)$ |
| **Neither**     | $E = \infty$           | $P = \infty$         | $t u(t)$ (ramp signal), $e^{at}u(t)$ for $a>0$  |

---
### Related Concepts
#energy-power-signals/related-concepts

> [[Fourier Transforms|Parseval's Theorem (Rayleigh's Energy Theorem)]] (Relates energy in the time domain to energy in the frequency domain)

[[Orthogonality]]
[[Signal Properties (Periodic & Aperiodic, Even & Odd)]]
[[Fourier Series|Fourier Series]] (Analysis tool for periodic power signals)
[[Continuous-Time Unit Impulse and Unit Step Functions]]