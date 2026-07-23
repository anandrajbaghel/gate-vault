---
tags:
  - dsp
  - signals-systems
  - multirate
  - downsampling
  - decimation
  - aliasing
created: 2025-09-08
aliases:
  - Downsampling
subject: "[[Signals & Systems]]"
parent:
  - Multirate Signal Processing
modified: 2026-07-23T16:52:37
---
### Decimation
#decimation #downsampling #multirate-dsp

> **Decimation** is the process of decreasing the sampling rate of a discrete-time signal by an integer factor, $M$. It is a core operation in multirate signal processing. A properly executed decimation involves two fundamental steps: low-pass filtering followed by downsampling. Simply discarding samples without filtering will lead to **aliasing**.

The primary purpose of decimation is to reduce the number of samples that need to be processed, stored, or transmitted, thereby lowering computational complexity and data bandwidth.

---
#### The Decimation Process
#decimation/process #anti-aliasing-filter

To decimate a signal $x[n]$ by an integer factor $M$, we perform the following two steps:

1.  **Anti-Aliasing Filtering**:
    *   The signal $x[n]$ is first passed through a digital **low-pass filter (LPF)**, $h[n]$.
    *   **Purpose**: This step is crucial to prevent aliasing. It removes the high-frequency components of the signal that would otherwise fold over into lower frequencies after the sampling rate is reduced.
    *   **Filter Specification**: The filter must have a normalized cutoff frequency less than or equal to $\pi/M$.
        $$\boxed{\quad \omega_c = \frac{\pi}{M} \quad}$$
    *   The output of this filter is an intermediate signal, $w[n] = x[n] * h[n]$.

2.  **Downsampling (Subsampling)**:
    *   The filtered signal $w[n]$ is then downsampled by the factor $M$.
    *   This is a purely mathematical operation where we keep only every $M$-th sample and discard the $M-1$ samples in between.
    *   The final decimated signal is $y[n]$.
        $$\boxed{\quad y[n] = w[nM] \quad}$$

---
#### Effect in the Frequency Domain
#frequency-domain-effects

Let the Discrete-Time Fourier Transform (DTFT) of the filtered signal $w[n]$ be $W(e^{j\omega})$. When this signal is downsampled to produce $y[n]$, its spectrum $Y(e^{j\omega})$ is related to $W(e^{j\omega})$ by:
$$\boxed{\quad Y(e^{j\omega}) = \frac{1}{M} \sum_{k=0}^{M-1} W\left(e^{j\frac{(\omega - 2\pi k)}{M}}\right) \quad}$$
This equation reveals two key effects:
1.  **Stretching**: The frequency axis is scaled (expanded) by a factor of $M$. Frequencies in $W(e^{j\omega})$ are mapped to $M\omega$ in $Y(e^{j\omega})$. What was a narrow-band signal becomes a wide-band signal.
2.  **Replication**: The stretched spectrum is replicated at intervals of $2\pi$. The summation shows $M-1$ shifted and scaled copies of the original spectrum are added.

The anti-aliasing filter ensures that the original signal's spectrum is band-limited to $|\omega| < \pi/M$. After stretching by $M$, the resulting spectrum occupies the band $|\omega| < \pi$, perfectly filling the new Nyquist interval without any of the replicas overlapping. If the filtering step is skipped, the stretched replicas will overlap, causing aliasing.

---
#### For Z-transform
#decimation 

$$\boxed{\quad y[n] = x[M n] \;\;\Longleftrightarrow\;\; Y(z) = \frac{1}{M} \sum_{k=0}^{M-1} X\!\left( z^{1/M} e^{j 2\pi k / M} \right) \quad}$$


---
### Related Concepts
#related-concepts

> [[Interpolation (Upsampling)]] (The opposite process of increasing the sampling rate)

[[Sample Rate Conversion]] (The combination of interpolation and decimation to change the sampling rate by a rational factor L/M)
[[Effect of Undersampling (Aliasing)|Aliasing]] (The distortion that decimation is designed to prevent)
[[The Sampling Theorem (Nyquist-Shannon Theorem)|Nyquist-Shannon Sampling Theorem]]
[[Digital Filters]]
[[Multirate Signal Processing - Sampling Rate Conversion]]
[[Fast Fourier Transform (FFT)]] (Decimation-in-time and decimation-in-frequency are key FFT algorithms)
