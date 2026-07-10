---
tags:
  - probability-theory
  - continuous-distributions
  - statistics
  - central-limit-theorem
  - engineering-math
created: 2025-09-15
aliases:
  - Gaussian Distribution
  - Bell Curve
subject: "[[Mathematics]]"
parent:
  - Probability Distributions
confidence: 10
---
### Normal (Gaussian) Distribution
#normal-distribution #gaussian-distribution #bell-curve #central-limit-theorem

> The **Normal Distribution**, also known as the **Gaussian Distribution** or "bell curve," is arguably the most important [[Continuous Random Variables|continuous probability distribution]] in all of science and engineering. Its prevalence is explained by the [[Central Limit Theorem]], which states that the sum of a large number of independent random variables will be approximately normally distributed, regardless of their original distribution. It is the default model for many natural phenomena, measurement errors, and, crucially for electrical engineers, **thermal noise**.

![[Standard Normal Distribution.png]]

---
#### Probability Density Function (PDF)
#pdf #normal-pdf

A random variable $X$ that follows a Normal distribution, denoted $X \sim N(\mu, \sigma^2)$, has a PDF given by:
$$\boxed{\quad f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2} \quad}$$
*   $\mu$ is the **mean** of the distribution, which determines the center of the bell curve.
*   $\sigma^2$ is the **variance** ($\sigma$ is the standard deviation), which determines the spread or width of the curve.

---
#### Standard Normal Distribution ($Z$)
#standard-normal-distribution #z-score

Directly integrating the Normal PDF is not possible in terms of elementary functions. To calculate probabilities, we transform any Normal distribution into the **Standard Normal Distribution**, which has a mean of 0 and a variance of 1, denoted $Z \sim N(0, 1)$.

The transformation is done by calculating the **Z-score**:
$$\boxed{\quad Z = \frac{X - \mu}{\sigma} \quad}$$
The Z-score represents how many standard deviations an observation $X$ is from the mean $\mu$. The probabilities for the standard normal variable $Z$ are pre-calculated and available in **Z-tables**.

---
#### Key Properties and the Empirical Rule
#empirical-rule

1. **Symmetry**: The distribution is perfectly symmetric about its mean, $\mu$.
2. **Central Tendency**: The **Mean = Median = Mode**.
3. **The Empirical Rule (68-95-99.7 Rule)**: For any Normal distribution, the probability of an observation falling within a certain number of standard deviations from the mean is constant:
    *   $P(\mu - \sigma \le X \le \mu + \sigma) \approx 0.6827$ (**~68%** of data is within $\pm 1\sigma$)
    *   $P(\mu - 2\sigma \le X \le \mu + 2\sigma) \approx 0.9545$ (**~95%** of data is within $\pm 2\sigma$)
    *   $P(\mu - 3\sigma \le X \le \mu + 3\sigma) \approx 0.9973$ (**~99.7%** of data is within $\pm 3\sigma$)

---
#### Central Limit Theorem (CLT)
#central-limit-theorem

The reason for the Normal distribution's ubiquity is the **Central Limit Theorem**.

> **Theorem**: The sum (or average) of a large number of independent and identically distributed random variables will be approximately normally distributed, regardless of the underlying distribution of the individual variables.

**Implication**: Any physical phenomenon that arises from the sum of many small, independent effects (like the random motion of electrons causing thermal noise) will tend to follow a Normal distribution.

---
#### Applications in Electrical Engineering

* **Thermal Noise (Johnson-Nyquist Noise)**: The random thermal motion of charge carriers in a resistor creates a noise voltage that is modeled as a zero-mean Gaussian random process. This is the fundamental noise floor in most electronic systems.
* **Statistical Signal Processing**: The Normal distribution is often used to model the noise component in a received signal, $y(t) = s(t) + n(t)$, where $n(t)$ is Gaussian noise.
* **Communication Systems**: In digital communications, the effect of Additive White Gaussian Noise (AWGN) on a signal is a primary factor in determining bit error rates.
* **Approximation**: The Normal distribution serves as a good approximation for the [[Binomial Distribution|Binomial]] and [[Poisson Distribution|Poisson]] distributions under certain conditions (e.g., for Binomial, when $n$ is large).

---
### Related Concepts
#probability-theory/related-concepts

> [[Continuous Random Variables]]

[[Probability Distributions]]
[[Probability Density Function (PDF)]]
[[Central Limit Theorem]]
[[Standard Deviation and Variance]]
[[Noise]]
