---
title: Laplace Standard Table
tags:
  - Laplace
  - InverseLaplace
  - Standard
  - Table
  - reference
  - Mathematics
aliases:
  - "Table : Standard Laplace"
  - Common Laplace Transform Pairs
  - Common Laplace Transform Properties
formula:
  - "Properties/Laplace - Integration in Frequency : $$\\frac{f(t)}{t} \\Leftrightarrow \\int_s^\\infty F(\\sigma)d\\sigma$$"
  - "Properties/Laplace - Frequency Shifting : $$e^{-at}f(t) \\Leftrightarrow F(s+a)$$"
  - "Properties/Laplace - Time Shifting : $$f(t-t_0)u(t-t_0) \\quad , t_0 > 0 \\Leftrightarrow e^{-st_0}F(s)$$"
trends:
  - "[[trends - Laplace Transform]]"
---
### Common Laplace Transform Pairs

This table lists common time-domain functions $f(t)$ (assuming $f(t)=0$ for $t<0$, often multiplied by $u(t)$) and their corresponding Laplace Transforms $F(s) = \mathcal{L}\{f(t)\}$.

|        | $f(t)$ (Time Domain)                   | $F(s)$ (Laplace Domain)             | Name/Type                   |
| ------ | -------------------------------------- | ----------------------------------- | --------------------------- |
| $$🌟$$ | $$\delta(t)$$                          | $$1$$                               | Unit Impulse                |
| $$🌟$$ | $$u(t)$$ or $1$ (for $t \ge 0$)        | $$\frac{1}{s}$$                     | Unit Step                   |
|        | $$u(t-1)$$                             | $$\frac{e^{-s}}{s}$$                | Unit Step starting at t = 1 |
| $$🌟$$ | $$t \cdot u(t)$$                       | $$\frac{1}{s^2}$$                   | Unit Ramp                   |
| $$🌟$$ | $$t^n \cdot u(t)$$ ($n \ge 0$ integer) | $$\frac{n!}{s^{n+1}}$$              | Polynomial                  |
| $$🌟$$ | $$\frac{t^n}{n!} \cdot u(t)$$          | $$\frac{1}{s^{n+1}}$$               | Normalized Polynomial       |
| $$🌟$$ | $$e^{-at} \cdot u(t)$$                 | $$\frac{1}{s+a}$$                   | Exponential Decay/Growth    |
| $$🌟$$ | $$t e^{-at} \cdot u(t)$$               | $$\frac{1}{(s+a)^2}$$               | Damped Ramp                 |
| $$🌟$$ | $$t^n e^{-at} \cdot u(t)$$             | $$\frac{n!}{(s+a)^{n+1}}$$          | Damped Polynomial           |
| $$🌟$$ | $$\sin(\omega t) \cdot u(t)$$          | $$\frac{\omega}{s^2+\omega^2}$$     | Sine Wave                   |
| $$🌟$$ | $$\cos(\omega t) \cdot u(t)$$          | $$\frac{s}{s^2+\omega^2}$$          | Cosine Wave                 |
|        | $$e^{-at}\sin(\omega t) \cdot u(t)$$   | $$\frac{\omega}{(s+a)^2+\omega^2}$$ | Damped Sine Wave            |
|        | $$e^{-at}\cos(\omega t) \cdot u(t)$$   | $$\frac{s+a}{(s+a)^2+\omega^2}$$    | Damped Cosine Wave          |
|        | $$\sinh(at) \cdot u(t)$$               | $$\frac{a}{s^2-a^2}$$               | Hyperbolic Sine             |
|        | $$\cosh(at) \cdot u(t)$$               | $$\frac{s}{s^2-a^2}$$               | Hyperbolic Cosine           |

---
### Common Laplace Transform Properties

Let $\mathcal{L}\{f(t)\} = F(s)$ and $\mathcal{L}\{g(t)\} = G(s)$.

|        | Property                 | Time Domain                                                             | Laplace Domain                                                                       |
| ------ | ------------------------ | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| $$🌟$$ | Linearity                | $$a f(t) + b g(t)$$                                                     | $$a F(s) + b G(s)$$                                                                  |
| $$🌟$$ | Time Shifting            | $$f(t-t_0)u(t-t_0)$$, $t_0 > 0$                                         | $$e^{-st_0}F(s)$$                                                                    |
| $$🌟$$ | Frequency Shifting       | $$e^{-at}f(t)$$                                                         | $$F(s+a)$$                                                                           |
| $$🌟$$ | Time Scaling             | $$f(at), \quad a > 0$$                                                  | $$\frac{1}{a}F(\frac{s}{a})$$                                                        |
| $$🌟$$ | Differentiation in Time  | $$\frac{df(t)}{dt}$$                                                    | $$sF(s) - f(0^-)$$                                                                   |
| $$🌟$$ |                          | $$\frac{d^n f(t)}{dt^n}$$                                               | $$s^nF(s) - s^{n-1}f(0^-) - \dots - f^{(n-1)}(0^-)$$                                 |
| $$🌟$$ | Integration in Time      | $$\int_0^t f(\tau)d\tau$$                                               | $$\frac{F(s)}{s}$$                                                                   |
| $$🌟$$ | Differentiation in Freq. | $$t f(t)$$                                                              | $$-\frac{dF(s)}{ds}$$                                                                |
| $$🌟$$ | Integration in Freq.     | $$\frac{f(t)}{t}$$ (if limit exists)                                    | $$\int_s^\infty F(\sigma)d\sigma$$                                                   |
| $$🌟$$ | Convolution              | $$f(t) * g(t) = \int_0^t f(\tau)g(t-\tau)d\tau$$                        | $$F(s)G(s)$$                                                                         |
| $$🌟$$ | Initial Value Theorem    | $$f(0^+)$$ (if limit exists)                                            | $$\lim_{s\to\infty}sF(s)$$                                                           |
| $$🌟$$ | Final Value Theorem      | $$\lim_{t\to\infty}f(t)$$ (if limit exists and poles of $sF(s)$ in LHP) | $$\lim_{s\to0}sF(s)$$ ([[Properties of the Laplace Transform\|Final Value Theorem]]) |

---
### Related Concepts
#table/standard-laplace-transform

>  [[The Laplace Transform]]

[[Fourier Transform Standard Pairs Table]]
[[Properties of the Laplace Transform]]
[[Inverse Laplace Transform using Partial Fraction Expansion]]
