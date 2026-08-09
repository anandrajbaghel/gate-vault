---
original: "[[ee_2020.pdf]]"
question paper: "[[ee_2020]]"
question: "[[ee_2020#^q4]]"
aliases:
  - "Example : ROC Z-Transform"
tags:
  - example/roc-z-transform
---
### ROC Z-Transform Example

![[ee_2020#^q4]]

---
#### Solution (step-by-step)

**Given:** $x[n]=\left(\tfrac{1}{2}\right)^n,1[n]$, where $1[n]=u[n]$ (unit step: $0$ for $n<0$, $1$ for $n\ge0$). We need the $z$-transform of $x[n-k]$ for $k>0$ and its ROC.

1. Write the $z$-transform of the original (unshifted) sequence:  
$$
X(z)=\sum_{n=-\infty}^{\infty} x[n]z^{-n}  
=\sum_{n=0}^{\infty}\left(\tfrac{1}{2}\right)^n z^{-n}  
=\sum_{n=0}^{\infty}\left(\tfrac{1}{2}z^{-1}\right)^n.  
$$
    
2. Sum the geometric series (valid when the series converges):  
$$  
X(z)=\frac{1}{1-\tfrac{1}{2}z^{-1}} \quad\text{provided}\quad \left|\tfrac{1}{2}z^{-1}\right|<1.  
$$
    
3. Convert the convergence condition into $|z|$:  
$$  
\left|\tfrac{1}{2}z^{-1}\right|<1 \iff |z^{-1}|<2 \iff \frac{1}{|z|}<2 \iff |z|>\tfrac{1}{2}.  
$$  
    So the ROC for $X(z)$ is $|z|>\tfrac{1}{2}$.
    
4. Use the time-shift property for $x[n-k]$ ($k>0$):  
$$  
\mathcal{Z}{x[n-k]}=z^{-k}X(z)=\frac{z^{-k}}{1-\tfrac{1}{2}z^{-1}}.  
$$  
    Shifting a causal (right-sided) sequence by a finite positive $k$ does **not** change the ROC, so the ROC remains $|z|>\tfrac{1}{2}$.

---
#### Answer

$\displaystyle \frac{z^{-k}}{1-\tfrac{1}{2}z^{-1}}$ with ROC $\boxed{|z|>\tfrac{1}{2}}$ — option **(D)**.
