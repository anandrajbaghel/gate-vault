---
tags:
  - correlation
  - signals
  - probability
  - statistics
  - random-processes
  - convolution
created: 2025-09-08
aliases:
  - Cross-correlation
  - Auto-correlation
  - Correlation Coefficient
subject:
  - "[[Signals & Systems]]"
  - "[[Mathematics]]"
parent:
  - "[[Random Variables]]"
  - "[[LTI System Analysis]]"
modified: 2026-07-23T16:52:34
---
### Correlation
#correlation #statistics #signals-and-systems

> **Correlation** is a measure of the mutual relationship between two variables or signals. The concept is applied in two major contexts in engineering:
> 1.  **In Probability**: It describes the degree of linear dependence between two [[random variables]].
> 2.  **In Signals & Systems**: It measures the similarity between two signals as a function of a time lag applied to one of them.

> [!summary]- Correlation — exam-ready summary (GATE)
> **Definitions**
> - **Cross-correlation:**  
>   $R_{xy}(\tau)=\displaystyle\int_{-\infty}^{\infty} x(t)\,y^*(t-\tau)\,dt$
> - **Autocorrelation:**  
>   $R_{xx}(\tau)=\displaystyle\int_{-\infty}^{\infty} x(t)\,x^*(t-\tau)\,dt
>   = x(t)*x^*(-t)$
>
> **Key properties**
> - Conjugate symmetry:  
>   $R_{xx}(\tau)=R_{xx}^*(-\tau)$  
>   (for real signals → $R_{xx}(\tau)=R_{xx}(-\tau)$)
> - Zero-lag value (energy / power):  
>   $R_{xx}(0)=\displaystyle\int_{-\infty}^{\infty}|x(t)|^2dt$
> - Cauchy–Schwarz bound:  
>   $|R_{xy}(\tau)|\le\sqrt{R_{xx}(0)\,R_{yy}(0)}$
>
> **Frequency-domain relations**
> - Autocorrelation:  
>   $R_{xx}(\tau)\xleftrightarrow{\mathcal F}S_{xx}(\omega)=|X(j\omega)|^2$
> - Cross-correlation:  
>   $R_{xy}(\tau)\xleftrightarrow{\mathcal F}X(j\omega)Y^*(j\omega)$
>
> **Exam traps (very important)**
> - **Correlation = time reversal + complex conjugate**  
>   $x(t)*x(-t)$ is **NOT** autocorrelation unless $x(t)$ is real.
> - PSD is always non-negative because $S_{xx}(\omega)=|X(j\omega)|^2$.
> - Correlation is for **similarity / delay detection**, not system response.
>
> **Matched filter link**
> - Matched filter output is a correlation operation.
> - Maximum SNR occurs at the correlation peak.
>
> **GATE checklist**
> - Use $R_{xx}(0)$ to find energy or power.
> - Use cross-correlation peak to find time delay.
> - Don’t confuse convolution properties with correlation purpose.

---
#### Correlation in Probability and Statistics
#correlation/statistics #random-variables #covariance

In this context, the strength of the linear relationship between two random variables, $X$ and $Y$, is quantified by the **Pearson correlation coefficient ($\rho_{XY}$)**.

First, the **covariance** measures the joint variability:
$$\text{Cov}(X,Y) = E[(X-\mu_X)(Y-\mu_Y)] = E[XY] - E[X]E[Y]$$
The correlation coefficient is the normalized version of the covariance.
$$\boxed{\quad \rho_{XY} = \frac{\text{Cov}(X,Y)}{\sigma_X \sigma_Y} \quad}$$
where $\sigma_X$ and $\sigma_Y$ are the standard deviations of X and Y.

*   **Properties of $\rho$**:
    *   The value of $\rho$ is always between -1 and +1, i.e., $-1 \le \rho \le 1$.
    *   $\rho = +1$: Perfect positive linear correlation.
    *   $\rho = -1$: Perfect negative linear correlation.
    *   $\rho = 0$: The variables are **uncorrelated** (no linear relationship).

*   **Independence vs. Correlation**:
    *   If two random variables are **independent**, then they are **uncorrelated** ($\rho=0$).
    *   However, the converse is **not** generally true. Two variables can be uncorrelated ($\rho=0$) but still be dependent through a non-linear relationship (e.g., if $Y=X^2$ and $X$ is symmetric about 0).
    *   **Exception**: For jointly **Gaussian** random variables, being uncorrelated *does* imply independence.

---
#### Correlation in Signals and Systems
#correlation/signals 

Here, correlation measures the similarity between two signals, $x(t)$ and $y(t)$, as a function of a time-shift, $\tau$.

##### Cross-Correlation
#cross-correlation 

> [!success]- Layman’s Explanation of Cross-Correlation
> Imagine you have two signals — like two pieces of music, or two sets of waves.
> 
> **Signal A**: This is your reference — maybe a known pattern like a heartbeat sound.
> **Signal B**: This is something you're analyzing — a long recording where you suspect the heartbeat might appear.
> 
> You want to slide **Signal A** over **Signal B** to check how similar they are at each position.
> 
> Each time you slide **Signal A** a little to the right (or left), you multiply the overlapping values and add them up. If the patterns match well at a certain position, the total will be large — like a "ding!" saying: They match here!
> 
> Think of it like matching a key shape (**Signal A**) to a lock groove (**Signal B**). Cross-correlation measures how well the key fits into the lock at different positions.

This measures the similarity between two different signals, $x(t)$ and a time-shifted $y(t)$. For energy signals:
$$\boxed{\quad R_{xy}(\tau) = \int_{-\infty}^{\infty} x(t) y^*(t-\tau) dt \quad}$$
The cross-correlation operation is equivalent to convolution with a time-reversed and [[conjugate signal|conjugated signal]]:
$$\boxed{\quad R_{xy}(t) = x(t) * y^*(-t) \quad}$$

---
##### Auto-Correlation
#auto-correlation 

> [!success]- Layman’s Explanation of Autocorrelation
> Imagine you're watching a video of ocean waves coming in. The waves rise and fall in a repeating way. Now, you ask:
> 
> "**How similar is this wave pattern to itself a few seconds later?**"
> 
> That's what autocorrelation does — it compares a signal with itself, but shifted in time.
> 
> It's like taking a copy of the signal and sliding it over itself:
> If the pattern repeats regularly, you'll see strong matches at regular intervals.
> If it’s random (like static noise), it won’t match much, even with shifts.
> 
> Think of autocorrelation like holding up a mirror to the signal and seeing how well it lines up with itself as you shift the reflection left and right.

This is a special case where a signal's similarity with a shifted version of itself is measured.
$$\boxed{\quad R_{xx}(\tau) = \int_{-\infty}^{\infty} x(t) x^*(t-\tau) dt = x(t) * x^*(-t) \quad}$$
*   **Properties of Autocorrelation**:
    1.  **Maximum at Origin**: The maximum value of the autocorrelation function occurs at $\tau=0$. $|R_{xx}(\tau)| \le R_{xx}(0)$.
    2.  **Value at Origin**: The value at $\tau=0$ is the total energy (for energy signals) or average power (for power signals) of the signal.
        $$\boxed{\quad R_{xx}(0) = E_x = \int_{-\infty}^{\infty} |x(t)|^2 dt \quad}$$
    3.  **Symmetry**: Autocorrelation is a conjugate symmetric function: $R_{xx}(\tau) = R_{xx}^*(\tau)$. For real signals, this means it is an **even function**: $R_{xx}(\tau) = R_{xx}(-\tau)$.
    4.  **Wiener-Khinchin Theorem**: This fundamental theorem states that the autocorrelation function of a signal and its **Power Spectral Density (PSD)** form a Fourier transform pair.
        $$\boxed{\quad R_{xx}(\tau) \xleftrightarrow{\mathcal{F}} S_{xx}(\omega) \quad}$$

---
### Related Concepts
#related-concepts

> [[Discrete Random Variables]] & [[Continuous Random Variables]]

[[Standard Deviation and Variance]]
[[Continuous-Time Convolution Integral|Convolution]]
[[Fourier Transforms]]
[[Power Spectral Density (PSD)]]
[[Signals & Systems]]
