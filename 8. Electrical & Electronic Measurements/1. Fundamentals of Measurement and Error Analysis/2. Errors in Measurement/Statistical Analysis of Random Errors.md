---
tags:
  - measurements
  - error-analysis
  - statistics
  - random-error
  - gate
created: 2023-11-03
aliases:
  - Statistical Error Analysis
  - Random Error Analysis
  - Mean
  - Standard Deviation
  - Statistical Analysis of Random Errors (Mean, Standard Deviation)
subject: "[[Electrical & Electronic Measurements]]"
parent:
  - Fundamentals of Measurement and Error Analysis
modified: 2026-08-04T10:35:52
---
### Statistical Analysis of Random Errors
#error-analysis #statistics #random-error

> Since [[Types of Errors|Random Errors]] are unpredictable and fluctuate, they cannot be eliminated. However, they can be analyzed using statistical methods. This analysis allows us to determine the most probable true value of a measurement and to quantify the uncertainty or dispersion (i.e., the [[Accuracy and Precision|precision]]) of the results.

---
#### Arithmetic Mean
#arithmetic-mean #best-estimate

For a set of $n$ readings ($x_1, x_2, \ldots, x_n$) of a quantity, the **arithmetic mean** ($\bar{x}$) is the most probable or best-estimated value of the true quantity.

$$\boxed{\quad \bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n} = \frac{\sum_{i=1}^{n} x_i}{n} \quad}$$

---
#### Deviation from the Mean
#deviation

The **deviation** ($d_i$) of a single reading is its difference from the arithmetic mean of the set. It indicates how much each individual measurement differs from the most probable value.

$$d_i = x_i - \bar{x}$$

By definition, the algebraic sum of the deviations for a set of readings is zero: $\sum_{i=1}^{n} d_i = 0$.

---
#### Measures of Dispersion (Precision)

Dispersion measures describe the spread of the data around the mean value. A smaller dispersion indicates higher precision.

###### Average Deviation
The average deviation ($D$) is the average of the absolute values of the deviations. It is an indicator of the precision of the measurements.

$$\boxed{\quad D = \frac{|d_1| + |d_2| + \dots + |d_n|}{n} = \frac{\sum_{i=1}^{n} |d_i|}{n} \quad}$$

###### Standard Deviation ($\sigma$)
The **standard deviation** is the most significant and widely used measure of dispersion for random errors. It represents the root-mean-square (RMS) value of the deviations. For a finite sample of $n$ readings, the unbiased estimate of the standard deviation is:

$$\boxed{\quad \sigma = \sqrt{\frac{d_1^2 + d_2^2 + \dots + d_n^2}{n-1}} = \sqrt{\frac{\sum_{i=1}^{n} d_i^2}{n-1}} \quad}$$

-   The denominator is $(n-1)$ (known as Bessel's correction) because the sample mean $\bar{x}$ is used to calculate deviations, which removes one degree of freedom from the data. For large $n$ ($n > 20$), using $n$ instead of $n-1$ makes little difference.
-   A small standard deviation indicates that the measurements are closely clustered around the mean, implying high precision.

###### Variance ($\sigma^2$)
The **variance** is the square of the standard deviation. It is also known as the mean square deviation.

$$\boxed{\quad \sigma^2 = \frac{\sum_{i=1}^{n} d_i^2}{n-1} \quad}$$

---
#### Normal (Gaussian) Distribution of Errors
#normal-distribution #gaussian-distribution

Experience shows that random errors in measurements often follow a **Normal** or **Gaussian distribution**. This distribution is characterized by a bell-shaped curve that is symmetric about the mean value.

-   Small errors are more probable than large errors.
-   Positive and negative errors of the same magnitude are equally probable.

For this distribution, the standard deviation defines specific **confidence intervals**:
-   **$\bar{x} \pm \sigma$**: 68.27% of all readings are expected to lie within this range.
-   **$\bar{x} \pm 2\sigma$**: 95.45% of all readings are expected to lie within this range.
-   **$\bar{x} \pm 3\sigma$**: 99.73% of all readings are expected to lie within this range.

Readings outside the $\pm 3\sigma$ range are statistically very unlikely and may be considered for rejection as potential gross errors or outliers.

###### Probable Error ($r$)
The **probable error** or **likely error** defines a range around the mean where there is a 50% probability that any single reading will fall.

$$\boxed{\quad r = 0.6745 \sigma \quad}$$

The range is $\bar{x} \pm r$. This means there is an equal chance that a random reading will be inside or outside this range.

---
### Related Concepts
#topic/related-concepts

> [[Types of Errors]]

[[Accuracy and Precision]]
[[Limiting Errors (Guarantee Errors)]]
[[Confidence Intervals]]
[[Normal Distribution]]