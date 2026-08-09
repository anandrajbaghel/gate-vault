---
question paper: "[[ee_2022]]"
original: "[[ee_2022.pdf]]"
question: "[[ee_2022#^q49]]"
similar question:
  - "[[ee_2023#^q50]]"
aliases:
  - "Example : Discrete Time Fourier Series"
tags:
  - example/fourier-series/discrete-time
---
### Discrete Time Fourier Series Example

![[ee_2022#^q49]]

---
#### Solution (step-by-step)

###### Step 1
For DTFS with period $N$ the coefficients are periodic: $a_{k+N}=a_k$. Here $N=3$.  
    So index reduction modulo $3$ gives  
    $$a_{-3}=a_{0}=2,\qquad a_{4}=a_{4-3}=a_{1}=1.$$  
    All other $a_k$ (in the set ${a_0,a_1,a_2}$) are zero unless stated.
    
###### Step 2
The signal (using $N=3$) is  
    $$x[n]=\sum_{k=0}^{2} a_k e^{j\frac{2\pi k n}{3}} = a_0 + a_1 e^{j\frac{2\pi n}{3}} + a_2 e^{j\frac{4\pi n}{3}}.$$  
    With $a_0=2,;a_1=1,;a_2=0$ this becomes  
    $$x[n]=2 + e^{j\frac{2\pi n}{3}}.$$
    
###### Step 3
Now manipulate candidate forms to match this. Let $\theta=\frac{2\pi n}{6}=\frac{\pi n}{3}$. Note $2\theta=\frac{2\pi n}{3}$. Use  
    $$2e^{j\theta}\cos\theta = e^{j\theta}(e^{j\theta}+e^{-j\theta}) = e^{j2\theta}+1.$$  
    Hence  
    $$1 + 2e^{j\theta}\cos\theta = 1 + (e^{j2\theta}+1) = 2 + e^{j2\theta} = 2 + e^{j\frac{2\pi n}{3}}.$$
    
###### Step 4
That expression is exactly our $x[n]$, so the matching option is (B).

---
#### Answer

**Option (B) $1 + 2e^{j(\frac{2\pi}{6}n)} \cos(\frac{2\pi}{6}n)$ is the correct option.** 
