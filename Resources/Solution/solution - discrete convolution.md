---
original: "[[ee_2017(2).pdf]]"
question paper: "[[ee_2017(2)]]"
question: "[[ee_2017(2)#^q32]]"
aliases:
  - "Example : Discrete Convolution (for Cascaded System)"
tags:
  - example/convolution/discrete
---
### Discrete Convolution Example

![[ee_2017(2)#^q32]]

---
#### Solution (step-by-step)

Given:  
$h_1(n) = \{\underset{\uparrow}{1}, -1\}$ with origin at first sample ($h_1[0]=1,h_1[1]=-1$) 
$h_2(n) = \{\underset{\uparrow}{1}, 1\}$ with origin at first sample ($h_2[0]=1,h_2[1]=1$) 
Output sequence (origin at first sample): $y(n) = \{\underset{\uparrow}{1}, 2, 1, -1, -2, -1\}$ 

##### Step 1 : overall impulse response
Convolution $h[n]=h_1[n]*h_2[n]$. Compute only nonzero terms:
$$\begin{align}
h[0] &= h_1[0]\,h_2[0] = 1\cdot1 = 1\\
h[1] &= h_1[0]\,h_2[1] + h_1[1]\,h_2[0] = 1\cdot1 + (-1)\cdot1 = 0\\
h[2] &= h_1[1]\,h_2[1] = (-1)\cdot1 = -1
\end{align}$$
So $$h[n]=\{1,\,0,\, -1\} \quad\text{(origin at first element, i.e. $h[0]=1$)}$$
##### Step 2 : convolution relation
Because $h[0]=1,\ h[1]=0,\ h[2]=-1$:
$$y[n]=x[n]*h[n]=x[n]-x[n-2].$$
##### Step 3 : solve for $x[n]$
Assume $x[n]=0$ for $n<0$. Let indices start at $n=0$ (first element of sequences)
$$\begin{align}
n=0:&\quad y_0 = x_0 \implies x_0 = 1\\
n=1:&\quad y_1 = x_1 \implies x_1 = 2\\
n=2:&\quad y_2 = x_2 - x_0 \implies x_2 = y_2 + x_0 = 1 + 1 = 2\\
n=3:&\quad y_3 = x_3 - x_1 \implies x_3 = y_3 + x_1 = -1 + 2 = 1
\end{align}$$
Check consistency for later outputs (with $x_4=x_5=0$):
$$\begin{align}
n=4:&\quad y_4 = -x_2 \implies x_2 = -y_4 = -(-2) = 2 \quad\text{(consistent)}\\
n=5:&\quad y_5 = -x_3 \implies x_3 = -y_5 = -(-1) = 1 \quad\text{(consistent)}
\end{align}$$
Thus $$x[n]=\{1,\,2,\,2,\,1\}.$$

---
###### Answer

**Option (D)** $x(n)=\{1,2,2,1\}$
