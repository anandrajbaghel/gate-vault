---
original: "[[ee_2023.pdf]]"
question: "[[ee_2023#^q49]]"
question paper: "[[ee_2023]]"
---
![[ee_2023#^q49]]

---
#### Solution (step-by-step)


Given
$$
x[n]=1+3\sin\!\left(\tfrac{15\pi}{8}n+\tfrac{3\pi}{4}\right)-5\sin\!\left(\tfrac{\pi}{3}n-\tfrac{\pi}{4}\right).
$$

A discrete-time sinusoid $\sin(\omega n+\phi)$ is periodic iff $\dfrac{\omega}{2\pi}=\dfrac{p}{q}$ is rational. The fundamental period for that sinusoid is the smallest positive integer $N$ such that $\omega N=2\pi k$ (i.e. $N=q$).

1. For the first term $\omega_1=\dfrac{15\pi}{8}$:
   $$
   \frac{\omega_1}{2\pi}=\frac{15\pi/8}{2\pi}=\frac{15}{16}\quad\Rightarrow\quad N_1=16.
   $$

2. For the second term $\omega_2=\dfrac{\pi}{3}$:
   $$
   \frac{\omega_2}{2\pi}=\frac{\pi/3}{2\pi}=\frac{1}{6}\quad\Rightarrow\quad N_2=6.
   $$

The overall signal is periodic with fundamental period equal to the least common multiple of $N_1$ and $N_2$:
$$
N=\mathrm{lcm}(16,6)=48.
$$

(Quick check: $\omega_1\cdot48=\tfrac{15\pi}{8}\cdot48=90\pi=2\pi\cdot45$ and $\omega_2\cdot48=\tfrac{\pi}{3}\cdot48=16\pi=2\pi\cdot8$, both integer multiples of $2\pi$.)

**Answer:** $N = 48$.
