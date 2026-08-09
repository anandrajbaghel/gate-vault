---
original: "[[ee_2023.pdf]]"
question paper: "[[ee_2023]]"
question: "[[ee_2023#^q50]]"
similar question:
  - "[[ee_2022#^q49]]"
aliases:
  - "Example : DTFT and DFS"
tags:
  - example/dtft-and-dfs
---
### DTFT and DFS Example

![[ee_2023#^q50]]

---
#### Solution (step-by-step)

Given:
$$X(\Omega) = (1+\cos\Omega)e^{-j\Omega}$$

Write in complex exponential form:
$$
X(\Omega)
= e^{-j\Omega} + \cos\Omega \, e^{-j\Omega}
= e^{-j\Omega} + \frac12 e^{-j\Omega}e^{j\Omega} + \frac12 e^{-j\Omega}e^{-j\Omega}
$$
$$X(\Omega)=\frac12 + e^{-j\Omega} + \frac12 e^{-j2\Omega}$$

From DTFT definition: $$X(\Omega)=\sum_{n=-\infty}^{\infty} x[n]e^{-j\Omega n}$$
Thus the sequence is: $$x[0]=\frac12,\quad x[1]=1,\quad x[2]=\frac12,\quad x[n]=0\ \text{otherwise}$$

---

### Fourier series coefficient for \(N=5\)

Definition: $$a_k=\frac{1}{N}\sum_{n=0}^{N-1} x_p[n]\, e^{-j\frac{2\pi kn}{N}}$$

Given:  
$x_p[n]=x[n]$ for $n=0,1,2$ and $x_p[n]=0$ for $n=3,4$

So:
$$a_3=\frac{1}{5}\left(
x[0]e^{-j\frac{2\pi(3)(0)}{5}} +
x[1]e^{-j\frac{2\pi(3)(1)}{5}} +
x[2]e^{-j\frac{2\pi(3)(2)}{5}}
\right)$$
Compute exponentials: $$e^{-j\frac{6\pi}{5}}=-0.809016 + j0.587785$$
$$e^{-j\frac{12\pi}{5}}=e^{-j\frac{2\pi}{5}} = 0.309017 - j0.951057$$
Substitute values:
$$a_3=\frac{1}{5}\left(
0.5 + (-0.809016 + j0.587785) + 0.5(0.309017 - j0.951057)
\right)$$
Real and imaginary parts:
$$\Re = 0.5 - 0.809016 + 0.1545085 = -0.1545085$$
$$\Im = 0 + 0.587785 - 0.4755285 = 0.1122565$$
So: $$a_3 = -0.0309017 + j0.0224513$$
Magnitude: $$|a_3| = \sqrt{(-0.0309017)^2 + (0.0224513)^2}
\approx 0.0382$$
---

#### Answer

**Correct numerical value $|a_3| = 0.038$**

