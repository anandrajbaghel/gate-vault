---
tags:
  - probability-theory
  - discrete-distributions
  - statistics
  - engineering-math
created: 2025-09-15
aliases:
  - Binomial RV
  - B(n,p)
subject: "[[Mathematics]]"
parent:
  - Probability Distributions
---
### Binomial Distribution
#binomial-distribution #discrete-probability #bernoulli-trials

> The **Binomial Distribution** is one of the most important [[Discrete Random Variables|discrete probability distributions]]. It models the number of successes ($k$) in a fixed number of independent trials ($n$), where each trial has only two possible outcomes (success or failure) and the probability of success ($p$) is constant for every trial. It is widely used in quality control, reliability, and digital communications.

#### Conditions for a Binomial Experiment (Bernoulli Trials)
A random experiment can be modeled by a Binomial distribution if and only if it satisfies the following four conditions:
1.  **Fixed Number of Trials**: The experiment consists of a fixed number of trials, denoted by $n$.
2.  **Two Possible Outcomes**: Each trial has only two possible outcomes, which are labeled as "success" or "failure".
3.  **Constant Probability of Success**: The probability of success, denoted by $p$, is the same for each trial. The probability of failure is then $q = 1-p$.
4.  **Independent Trials**: The outcome of each trial is independent of the outcomes of all other trials.

---
#### Probability Mass Function (PMF)
#pmf #binomial-formula

If a random variable $X$ follows a Binomial distribution, denoted $X \sim B(n, p)$, the probability of getting exactly $k$ successes in $n$ trials is given by its PMF:
$$\boxed{\quad P(X=k) = \binom{n}{k} p^k (1-p)^{n-k} = \binom{n}{k} p^k q^{n-k} \quad}$$
for $k = 0, 1, 2, \dots, n$.

*   $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ is the binomial coefficient, representing the number of ways to choose $k$ successful trials from a total of $n$ trials.
*   $p^k$ is the probability of achieving $k$ successes.
*   $q^{n-k}$ is the probability of having $n-k$ failures.

> [!pyq]- PYQ : 2019
> ![[ee_2019#^q40]]

---
#### Mean, Variance, and Standard Deviation
#expected-value #variance

For a Binomial random variable $X \sim B(n, p)$, the key statistical measures are given by simple formulas:

*   **Mean (Expected Value)**: The average number of successes.
    $$\boxed{\quad E[X] = \mu = np \quad}$$
*   **Variance**: The spread of the number of successes.
    $$\boxed{\quad \text{Var}(X) = \sigma^2 = np(1-p) = npq \quad}$$
*   **Standard Deviation**:
    $$\sigma = \sqrt{npq}$$

*Note: For a Binomial distribution, the variance is always less than the mean ($npq < np$, since $q<1$).*

---
#### Relationship to Other Distributions

*   **[[Bernoulli Distribution]]**: A Bernoulli distribution is a special case of the Binomial distribution where $n=1$. A Binomial random variable is the sum of $n$ independent and identically distributed Bernoulli random variables.
*   **[[Poisson Distribution]]**: The Poisson distribution is a limiting case of the Binomial distribution when the number of trials $n$ is very large, the probability of success $p$ is very small, and the mean $\lambda = np$ is a finite constant.
*   **[[Normal Distribution]]**: For a large number of trials $n$ (typically when $np \ge 5$ and $nq \ge 5$), the shape of the Binomial distribution can be well-approximated by a Normal distribution with $\mu = np$ and $\sigma^2 = npq$.

---
### Related Concepts
#probability-theory/related-concepts

> [[Discrete Random Variables]]

[[Probability Distributions]]
[[Probability Mass Function (PMF)]]
[[Bernoulli Distribution]]
[[Poisson Distribution]]
[[Normal Distribution]]