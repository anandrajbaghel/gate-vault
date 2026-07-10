---
tags:
  - probability
  - statistics
  - expected-value
  - random-variables
  - engineering-math
created: 2025-09-08
aliases:
  - Expectation
  - Mean
  - First Moment
subject: "[[Mathematics]]"
parent:
  - Probability and Statistics
confidence: 9
---
### Expected Value
#expected-value #mean #expectation

> The **expected value** (or expectation, mean) of a [[Random Variables|random variable]] is the long-run average value of the outcomes of the experiment it represents. It is a weighted average of all possible values the random variable can take, where the weights are their corresponding probabilities. The expected value represents the "center of mass" of the probability distribution.

It is often denoted as $E[X]$, $\mu_X$, or simply $\mu$.

> [!warning] Points to note
> Expected value is the theoretical mean of a random variable; mean is the numerical average of observed data.
> 
> $$\bar{x} \;\xrightarrow[n\to\infty]{}\; E[X]$$
> As the number of observations increases, the **sample mean approaches the expected value**.

---
#### Calculation for a Random Variable
#expected-value/calculation

##### Discrete Random Variable (DRV)
For a discrete random variable $X$ that can take values $x_1, x_2, \dots$ with probabilities $P(X=x_1), P(X=x_2), \dots$, the expected value is the sum of each value multiplied by its probability.
$$\boxed{\quad E[X] = \sum_{i} x_i P(X=x_i) \quad}$$

##### Continuous Random Variable (CRV)
For a continuous random variable $X$ with a [[probability density function (PDF)]] $f(x)$, the expected value is the integral of $x$ times its PDF over the entire range of $x$.
$$\boxed{\quad E[X] = \int_{-\infty}^{\infty} x f(x) dx \quad}$$

---
#### Expected Value of a Function of a Random Variable
#lotus

To find the expectation of a function of a random variable, $g(X)$, we do not need to find the probability distribution of $g(X)$. We can compute it directly using the distribution of $X$. This is sometimes called the Law of the Unconscious Statistician (LOTUS).

*   **For a DRV**:
    $$E[g(X)] = \sum_i g(x_i) P(X=x_i)$$
*   **For a CRV**:
    $$\boxed{\quad E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) dx \quad}$$
A crucial application of this is in defining the [[Standard Deviation and Variance|Variance]]: $\text{Var}(X) = E[(X-\mu)^2]$.

---
#### Properties of Expectation
#properties-of-expectation

The most important property is the **linearity of expectation**.
Let $X$ and $Y$ be random variables and $a, b, c$ be constants.
1.  **Expectation of a constant**:
    $$\boxed{\quad E[c] = c \quad}$$
2.  **Scaling and Shifting**:
    $$\boxed{\quad E[aX + b] = aE[X] + b \quad}$$
3.  **Sum of Random Variables**: The expectation of a sum is the sum of expectations.
    $$\boxed{\quad E[X + Y] = E[X] + E[Y] \quad}$$
> [!IMPORTANT] This property holds regardless of whether X and Y are independent or dependent.

4.  **Product of Independent Random Variables**: If (and only if) $X$ and $Y$ are independent, the expectation of their product is the product of their expectations.
    $$\boxed{\quad E[XY] = E[X]E[Y] \quad \text{(if X, Y are independent)}}$$

---
#### Expected Values for Common Distributions
#standard-distributions

| Distribution           | Expected Value ($E[X]$) |
| ---------------------- | ----------------------- |
| Bernoulli($p$)         | $p$                     |
| Binomial($n, p$)       | $np$                    |
| Poisson($\lambda$)     | $\lambda$               |
| Uniform($a, b$)        | $\frac{a+b}{2}$         |
| Exponential($\lambda$) | $\frac{1}{\lambda}$     |
| Gaussian($\mu, \sigma^2$) | $\mu$                 |

---
### Related Concepts
#related-concepts

> [[Random Variables]]

[[Standard Deviation and Variance]] (The second central moment, built upon expectation)
[[Probability Distributions]]
[[Moment Generating Function]] (A tool used to find all moments, including the mean)