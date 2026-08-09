---
original: "[[ee_2024.pdf]]"
question paper: "[[ee_2024]]"
question: "[[ee_2024#^q33]]"
aliases:
  - "Example : Fourier Transform Derivative"
tags:
  - example/fourier-transform-derivative
---
### FT Derivative Example

![[ee_2024#^q33]]

---
#### Solution (step-by-step)

Given:
$$
x(t)=e^{-t^{4}}\cos t
$$
##### Step 1: Write $\cos t$ using exponentials  
$$
\cos t=\frac{e^{jt}+e^{-jt}}{2}
$$
So,
$$
x(t)=\frac{1}{2}e^{-t^{4}}(e^{jt}+e^{-jt})
$$
##### Step 2: Fourier transform  
$$
X(\omega)=\int_{-\infty}^{\infty}x(t)e^{-j\omega t}\,dt
$$

Substitute:
$$
X(\omega)=\frac{1}{2}\int_{-\infty}^{\infty}e^{-t^{4}}e^{-j(\omega-1)t}\,dt
+\frac{1}{2}\int_{-\infty}^{\infty}e^{-t^{4}}e^{-j(\omega+1)t}\,dt
$$

Define:
$$
F(\xi)=\int_{-\infty}^{\infty}e^{-t^{4}}e^{-j\xi t}\,dt
$$

Thus:
$$
X(\omega)=\frac{1}{2}F(\omega-1)+\frac{1}{2}F(\omega+1)
$$

##### Step 3: Parity  
Since $e^{-t^{4}}$ is even and real, its Fourier transform is:
$$
F(\xi)\ \text{is real and even} \\
F(-\xi)=F(\xi)
$$

Step 4: Differentiate  
$$
X'(\omega)=\frac{1}{2}F'(\omega-1)+\frac{1}{2}F'(\omega+1)
$$

Evaluate at $\omega=0$:
$$
X'(0)=\frac{1}{2}F'(-1)+\frac{1}{2}F'(1)
$$

Since derivative of an even function is odd:
$$
F'(-1)=-F'(1)
$$

Thus:
$$
X'(0)=\frac{1}{2}(-F'(1))+\frac{1}{2}F'(1)=0
$$

---
##### Answer
The correct answer is $X'(0)=0.0$
