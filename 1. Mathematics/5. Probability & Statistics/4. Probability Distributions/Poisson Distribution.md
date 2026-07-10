---
tags:
  - probability-theory
  - discrete-distributions
  - statistics
  - queueing-theory
  - noise-modeling
  - engineering-math
created: 2025-09-15
aliases:
  - Poisson RV
  - Po(λ)
subject: "[[Mathematics]]"
parent: "[[Probability Distributions]]"
confidence: 10
---
### Poisson Distribution
#poisson-distribution #discrete-probability #rare-events

> The **Poisson Distribution** is a [[Discrete Random Variables|discrete probability distribution]] that models the number of events occurring within a fixed interval of time or space, given that these events happen with a known constant average rate and are independent of the time since the last event. It is often used to describe "rare" events. Its most notable application in electrical engineering is in modeling **shot noise** in semiconductor devices.

#### Conditions for a Poisson Process
An experiment can be modeled by a Poisson distribution if it satisfies these conditions:
1.  **Independent Events**: The occurrence of one event does not affect the probability of another event occurring.
2.  **Constant Rate**: The average rate at which events occur is constant for the interval of interest.
3.  **No Simultaneous Events**: Two events cannot occur at the exact same instant.
4.  The probability of an event in a very small sub-interval is proportional to the length of that sub-interval.

---
#### Probability Mass Function (PMF)
#pmf #poisson-formula

If a random variable $X$ follows a Poisson distribution, denoted $X \sim Po(\lambda)$, the probability of observing exactly $k$ events in an interval is given by its PMF:
$$\boxed{\quad P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!} \quad}$$
for $k = 0, 1, 2, \dots$.

*   $\lambda$ (lambda) is the average number of events per interval (the rate parameter).
*   $k$ is the number of occurrences.
*   $e$ is the base of the natural logarithm ($e \approx 2.71828$).

---
#### Mean, Variance, and Standard Deviation
#expected-value #variance

The most distinguishing property of the Poisson distribution is that its mean and variance are equal.

*   **Mean (Expected Value)**:
    $$\boxed{\quad E[X] = \mu = \lambda \quad}$$
*   **Variance**:
    $$\boxed{\quad \text{Var}(X) = \sigma^2 = \lambda \quad}$$
*   **Standard Deviation**:
    $$\sigma = \sqrt{\lambda}$$

This property is a useful identifier: if a problem describes a discrete count where the mean and variance are approximately equal, a Poisson model is a strong candidate.

---
#### Relationship to Other Distributions

* **Limit of the Binomial Distribution**: The Poisson distribution is a limiting case of the [[Binomial Distribution]]. When the number of trials $n$ is very large ($n \to \infty$) and the probability of success $p$ is very small ($p \to 0$), the Binomial distribution $B(n,p)$ can be approximated by a Poisson distribution with parameter $\lambda = np$. This is useful for calculations where $n$ is large and $p$ is small.
* **[[Exponential Distribution]]**: The Poisson and Exponential distributions are closely related. If the number of events per unit time follows a Poisson distribution with rate $\lambda$, then the **time between consecutive events** follows an Exponential distribution with parameter $\lambda$.

---
#### Applications in Electrical Engineering
*   **Shot Noise**: The current in electronic devices like diodes and transistors consists of discrete charge carriers (electrons, holes). The random arrival of these carriers at a junction constitutes a Poisson process, leading to a noise current known as shot noise.
*   **Telecommunications**: Modeling the number of phone calls arriving at a switching center or the number of data packets arriving at a router within a specific time frame.
*   **Photonics**: The number of photons detected by a photodetector in an optical communication system over a given interval.
*   **Reliability Engineering**: The number of failures of a component in a given time period.

---
### Related Concepts
#probability-theory/related-concepts

> [[Discrete Random Variables]]

[[Probability Distributions]]
[[Probability Mass Function (PMF)]]
[[Binomial Distribution]]
[[Exponential Distribution]]