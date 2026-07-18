---
tags:
  - filters-moc
  - frequency-response
  - signal-processing
  - map-of-content
  - electric-circuits
aliases:
  - Filters
  - Filters MOC
  - Electrical Filters
  - Frequency Selective Circuits
created: 2026-07-04
subject:
  - "[[Electric Circuits]]"
  - "[[Signals & Systems]]"
  - "[[Analog & Digital Electronics]]"
parent:
  - "[[System Analysis]]"
  - "[[Frequency Response]]"
confidence: 100
---
### Filters (Map of Content)
#filters-moc #frequency-response

> In electrical engineering, a **filter** is a frequency-selective network that modifies the amplitude and phase characteristics of a signal with respect to frequency. It passes signals in the **passband** and attenuates signals in the **stopband**.

```mermaid
mindmap
  root((Filters MOC))
    **Theory** - Signals and Systems
      Filtering Concepts
      Ideal vs Practical
      Distortion
    **Topologies**
      Low-Pass : LPF
      High-Pass : HPF
      Bandpass : BPF
      Band-Stop : Notch
      All-Pass : APF
    **Hardware Realization** - Analog
      Passive : RLC
      Active : Op-Amps
    **Power Supply** - Power Electronics
      Rectifier Smoothing
````

---
#### 1. Mathematical Theory (Signals & Systems)

These notes cover the abstract math of Linear Time-Invariant (LTI) systems acting as filters.

- [[Filtering Concepts]] (Ideal vs. Practical, Sinc Impulse Response, Distortion)
- [[Bandwidth in Signals & Systems]] (System speed and time-frequency trade-offs)
- [[Frequency Domain Transfer Function]] ($H(j\omega)$ derivations)
- [[Half-Power Frequency (-3dB)]] (The math behind the cutoff boundary)

---
#### 2. Filter Topologies
#topology/filters 

These notes detail the standard second-order transfer functions, pole-zero plots, and frequency response characteristics for each shape.
- [[Low-Pass Filter]]
- [[High-Pass Filter]]
- [[Bandpass Filter]]
- [[Notch Filter]]
- [[All-Pass Filter]]

---
#### 3. Hardware Implementations (Analog & Circuits)
 
These notes cover how to physically build the topologies using real components.
- [[Passive Filters (RLC)]] (RC, RL, Series/Parallel RLC) 
- [[Active Filters (First and Second Order)]] (Sallen-Key, Multiple Feedback, State Variable)
- [[Bandwidth and Selectivity]] (Tuning Q-factor in RLC circuits)

> [!mistake] AC Ripple Reduction
> If you are looking for capacitor or choke circuits used to smooth pulsating DC from a diode bridge, those belong in Power Electronics.
> 
> > [!refer]
> > [[Rectifier Smoothing Filters]]

---
### Related Concepts

> [[The Laplace Transform]]

[[Bode Plots]]
[[Resonance]]