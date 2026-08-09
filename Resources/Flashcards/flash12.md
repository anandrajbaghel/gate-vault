---
subject:
  - "[[Mathematics]]"
  - "[[Signal & Systems]]"
tags:
  - LFZ-transforms
---
### Laplace Transform (LT)

**Q.** What is the integral definition of the bilateral (two-sided) Laplace Transform of a function $f(t)$?
?
$$
\boxed{\quad F(s) = \mathcal{L}\{f(t)\} = \int_{-\infty}^{\infty} f(t)e^{-st} dt \quad}
$$
Where $s = \sigma + j\omega$ is a complex variable.

#signals-and-systems / [[The Laplace Transform]]

---
**Q.** What is the integral definition of the unilateral (one-sided) Laplace Transform?
?
$$
\boxed{\quad F(s) = \int_{0^{-}}^{\infty} f(t)e^{-st} dt \quad}
$$
This is the most common form used in engineering for causal signals and systems (where $f(t) = 0$ for $t<0$).

#signals-and-systems / [[The Laplace Transform]]

---
**Q.** What is the Laplace transform of the unit impulse function, $\delta(t)$?
?
$$
\boxed{\quad \mathcal{L}\{\delta(t)\} = 1 \quad}
$$
The Region of Convergence (ROC) is the entire s-plane.

#signals-and-systems / [[The Laplace Transform]]

---
**Q.** What is the Laplace transform of the unit step function, $u(t)$?
?
$$
\boxed{\quad \mathcal{L}\{u(t)\} = \frac{1}{s} \quad}
$$
ROC: $Re(s) > 0$.

#signals-and-systems / [[The Laplace Transform]]

---
**Q.** What is the Laplace transform of the function $e^{-at}u(t)$?
?
$$
\boxed{\quad \mathcal{L}\{e^{-at}u(t)\} = \frac{1}{s+a} \quad}
$$
ROC: $Re(s) > -a$.

#signals-and-systems / [[The Laplace Transform]]

---
**Q.** What is the Laplace transform of $\sin(\omega_0 t)u(t)$ and $\cos(\omega_0 t)u(t)$?
?
$$
\begin{align}
\mathcal{L}\{\sin(\omega_0 t)u(t)\} &= \frac{\omega_0}{s^2 + \omega_0^2} \\
\mathcal{L}\{\cos(\omega_0 t)u(t)\} &= \frac{s}{s^2 + \omega_0^2}
\end{align}
$$
For both, the ROC is $Re(s) > 0$.

#signals-and-systems / [[The Laplace Transform]]

---
**Q.** State the time-shifting property of the Laplace Transform.
?
If $\mathcal{L}\{f(t)\} = F(s)$, then for $t_0 > 0$:
$$
\boxed{\quad \mathcal{L}\{f(t-t_0)u(t-t_0)\} = e^{-st_0} F(s) \quad}
$$

#signals-and-systems / [[Properties of the Laplace Transform]]

---
**Q.** State the frequency-shifting property of the Laplace Transform.
?
If $\mathcal{L}\{f(t)\} = F(s)$, then:
$$
\boxed{\quad \mathcal{L}\{e^{s_0 t}f(t)\} = F(s-s_0) \quad}
$$
The ROC also shifts by $Re(s_0)$.

#signals-and-systems / [[Properties of the Laplace Transform]]

---
**Q.** What is the Laplace transform of the time-derivative of a function, $\frac{df(t)}{dt}$?
?
For the unilateral transform:
$$
\boxed{\quad \mathcal{L}\left\{\frac{df(t)}{dt}\right\} = sF(s) - f(0^{-}) \quad}
$$
Where $f(0^{-})$ is the initial condition just before t=0.

#signals-and-systems / [[Properties of the Laplace Transform]]

---
**Q.** State the convolution property of the Laplace Transform.
?
Convolution in the time domain corresponds to multiplication in the s-domain.
$$
\boxed{\quad \mathcal{L}\{f_1(t) * f_2(t)\} = F_1(s) F_2(s) \quad}
$$
The ROC of the result is the intersection of the individual ROCs.

#signals-and-systems / [[Properties of the Laplace Transform]]

---
**Q.** State the Initial Value Theorem of the Laplace Transform.
?
$$
\boxed{\quad f(0^{+}) = \lim_{t \to 0^{+}} f(t) = \lim_{s \to \infty} sF(s) \quad}
$$
(Provided the limit exists).

#signals-and-systems / [[Properties of the Laplace Transform]]

---
**Q.** State the Final Value Theorem of the Laplace Transform.
?
$$
\boxed{\quad \lim_{t \to \infty} f(t) = \lim_{s \to 0} sF(s) \quad}
$$
This theorem is valid only if all the poles of $sF(s)$ are in the left-half of the s-plane.

#signals-and-systems / [[Properties of the Laplace Transform]]

---
### Fourier Transform (FT)

**Q.** What is the integral definition of the Continuous-Time Fourier Transform (CTFT)?
?
$$
\boxed{\quad X(j\omega) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{\infty} x(t)e^{-j\omega t} dt \quad}
$$
This transforms a time-domain signal into its frequency-domain representation.

#signals-and-systems / [[Fourier Transforms]]

---
**Q.** What is the integral definition of the Inverse Continuous-Time Fourier Transform (ICTFT)?
?
$$
\boxed{\quad x(t) = \mathcal{F}^{-1}\{X(j\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(j\omega)e^{j\omega t} d\omega \quad}
$$

#signals-and-systems / [[Fourier Transforms]]

---
**Q.** What is the Fourier transform of a rectangular pulse, $x(t) = rect(t/\tau)$?
?
$$
\boxed{\quad X(j\omega) = \tau \cdot \text{sinc}\left(\frac{\omega\tau}{2\pi}\right) = \tau \frac{\sin(\omega\tau/2)}{\omega\tau/2} \quad}
$$
A rectangular pulse in time corresponds to a sinc function in frequency.

#signals-and-systems / [[Fourier Transforms]]

---
**Q.** What is the Fourier transform of a constant DC signal, $x(t)=A$?
?
$$
\boxed{\quad X(j\omega) = 2\pi A \delta(\omega) \quad}
$$
A DC signal's frequency content is an impulse at zero frequency.

#signals-and-systems / [[Fourier Transforms]]

---
**Q.** State the Duality property of the Fourier Transform.
?
If $x(t) \leftrightarrow X(j\omega)$, then the Fourier transform of the function $X(t)$ is:
$$
\boxed{\quad \mathcal{F}\{X(t)\} = 2\pi x(-j\omega) \quad}
$$

#signals-and-systems / [[Fourier Transform Properties]]

---
**Q.** State Parseval's theorem for the energy of a signal in the context of the Fourier Transform.
?
The energy of a signal can be computed in either the time or frequency domain.
$$
\boxed{\quad E = \int_{-\infty}^{\infty} |x(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |X(j\omega)|^2 d\omega \quad}
$$

#signals-and-systems / [[Fourier Transform Properties]]

---
**Q.** What is the definition of the Discrete-Time Fourier Transform (DTFT) for a sequence $x[n]$?
?
$$
\boxed{\quad X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n]e^{-j\omega n} \quad}
$$
The DTFT is a continuous and periodic function of frequency $\omega$ with period $2\pi$.

#signals-and-systems / [[Discrete-Time Fourier Transform]]

---
**Q.** What is the formula for the Discrete Fourier Series (DFS) coefficients ($a_k$) of a periodic discrete signal $x[n]$ with period N?
?
$$
\boxed{\quad a_k = \frac{1}{N} \sum_{n=0}^{N-1} x[n]e^{-jk(2\pi/N)n} \quad}
$$

#signals-and-systems / [[Discrete Fourier Series]]

---
**Q.** What is the formula for the Discrete Fourier Transform (DFT) of a finite-duration sequence $x[n]$ of length N?
?
$$
\boxed{\quad X[k] = \sum_{n=0}^{N-1} x[n]e^{-j(2\pi/N)kn} \quad \text{for } k = 0, 1, \dots, N-1 \quad}
$$
The DFT provides sampled values of the DTFT.

#signals-and-systems / [[Discrete Fourier Transform]]

---
### **Z-Transform**

**Q.** What is the definition of the bilateral Z-Transform of a discrete sequence $x[n]$?
?
$$
\boxed{\quad X(z) = \mathcal{Z}\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n]z^{-n} \quad}
$$
Where $z$ is a complex variable.

#signals-and-systems / [[Z-Transform]]

---
**Q.** What is the Z-transform of the unit impulse sequence, $\delta[n]$?
?
$$
\boxed{\quad \mathcal{Z}\{\delta[n]\} = 1 \quad}
$$
ROC: entire z-plane.

#signals-and-systems / [[Z-Transform]]

---
**Q.** What is the Z-transform of the unit step sequence, $u[n]$?
?
$$
\boxed{\quad \mathcal{Z}\{u[n]\} = \frac{z}{z-1} \quad \text{or} \quad \frac{1}{1-z^{-1}} \quad}
$$
ROC: $|z| > 1$.

#signals-and-systems / [[Z-Transform]]

---
**Q.** What is the Z-transform of the sequence $a^n u[n]$?
?
$$
\boxed{\quad \mathcal{Z}\{a^n u[n]\} = \frac{z}{z-a} \quad \text{or} \quad \frac{1}{1-az^{-1}} \quad}
$$
ROC: $|z| > |a|$.

#signals-and-systems / [[Z-Transform]]

---
**Q.** State the time-shifting property of the Z-Transform.
?
If $\mathcal{Z}\{x[n]\} = X(z)$, then:
$$
\boxed{\quad \mathcal{Z}\{x[n-n_0]\} = z^{-n_0} X(z) \quad}
$$

#signals-and-systems / [[Z-Transform Properties]]

---
**Q.** State the convolution property of the Z-Transform.
?
Convolution in the time domain corresponds to multiplication in the z-domain.
$$
\boxed{\quad \mathcal{Z}\{x_1[n] * x_2[n]\} = X_1(z) X_2(z) \quad}
$$
The ROC of the result is at least the intersection of the individual ROCs.

#signals-and-systems / [[Z-Transform Properties]]

---
**Q.** What is the Z-transform of the sequence $n \cdot a^n u[n]$?
?
This is an application of the "multiplication by n" property.
$$
\boxed{\quad \mathcal{Z}\{n \cdot a^n u[n]\} = -z \frac{d}{dz}\left(\frac{z}{z-a}\right) = \frac{az}{(z-a)^2} \quad}
$$
ROC: $|z| > |a|$.

#signals-and-systems / [[Z-Transform Properties]]

---
### **Relationships Between Transforms**

**Q.** How is the Fourier Transform (CTFT) related to the Laplace Transform?
?
The Fourier Transform is the Laplace Transform evaluated on the imaginary axis ($s = j\omega$).
$$
\boxed{\quad X(j\omega) = F(s)|_{s=j\omega} \quad}
$$
This relationship holds only if the Region of Convergence (ROC) of the Laplace transform includes the $j\omega$ axis.

#signals-and-systems / [[Transform Relationships]]

---
**Q.** How is the Discrete-Time Fourier Transform (DTFT) related to the Z-Transform?
?
The DTFT is the Z-Transform evaluated on the unit circle ($z = e^{j\omega}$).
$$
\boxed{\quad X(e^{j\omega}) = X(z)|_{z=e^{j\omega}} \quad}
$$
This relationship holds only if the ROC of the Z-transform includes the unit circle.

#signals-and-systems / [[Transform Relationships]]

---
**Q.** How is the Discrete Fourier Transform (DFT) related to the Z-Transform?
?
The DFT provides N equally spaced samples of the Z-Transform around the unit circle.
$$
\boxed{\quad X[k] = X(z)|_{z=e^{j(2\pi/N)k}} \quad}
$$

#signals-and-systems / [[Transform Relationships]]

---
### **Region of Convergence (ROC)**

**Q.** What does the Region of Convergence (ROC) represent for a transform?
?
The ROC is the set of values of the complex variable ($s$ for Laplace, $z$ for Z-transform) for which the transform's integral or sum converges to a finite value.

#signals-and-systems / [[region of convergence]]

---
**Q.** What is the ROC for a right-sided signal in the Laplace domain?
?
The ROC is a right-half plane, extending to the right of the rightmost pole.
$$
\boxed{\quad Re(s) > \sigma_{max} \quad}
$$

#signals-and-systems / [[region of convergence]]

---
**Q.** What is the ROC for a left-sided signal in the Laplace domain?
?
The ROC is a left-half plane, extending to the left of the leftmost pole.
$$
\boxed{\quad Re(s) < \sigma_{min} \quad}
$$

#signals-and-systems / [[region of convergence]]

---
**Q.** What is the ROC for a two-sided signal in the Laplace domain?
?
The ROC is a vertical strip in the s-plane between two poles.
$$
\boxed{\quad \sigma_1 < Re(s) < \sigma_2 \quad}
$$

#signals-and-systems / [[region of convergence]]

---
**Q.** What is the ROC for a right-sided (causal) sequence in the Z-domain?
?
The ROC is the exterior of a circle, extending outwards from the outermost pole.
$$
\boxed{\quad |z| > r_{max} \quad}
$$

#signals-and-systems / [[region of convergence]]

---
**Q.** What is the ROC for a left-sided (anti-causal) sequence in the Z-domain?
?
The ROC is the interior of a circle, extending inwards from the innermost pole.
$$
\boxed{\quad |z| < r_{min} \quad}
$$

#signals-and-systems / [[region of convergence]]

---
**Q.** For a causal and stable LTI system, what must be true about the location of its poles and its ROC in the s-plane?
?
- All poles must be in the left-half of the s-plane.
- The ROC must include the imaginary ($j\omega$) axis.

#signals-and-systems / [[Stability]]

---
**Q.** For a causal and stable discrete-time LTI system, what must be true about the location of its poles and its ROC in the z-plane?
?
- All poles must be inside the unit circle.
- The ROC must include the unit circle.

#signals-and-systems / [[Stability]]

---
