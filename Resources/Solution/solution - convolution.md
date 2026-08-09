---
original: "[[ee_2023.pdf]]"
question paper: "[[ee_2023]]"
question: "[[ee_2023#^q31]]"
tags:
  - example/convolution
aliases:
  - "Example : Convolution"
---
### Convolution Example

![[ee_2023#^q31]]

---
#### Solution (step-by-step)

**Given signals (from the figure):**

- $x(t)=1$ for $-1\le t\le 1$, and $x(t)=0$ otherwise (rectangular pulse of width $2$).
- $y(t)=t-3$ for $1\le t\le 5$, and $y(t)=0$ otherwise.

We want $z(t)=x(t)*y(t)$.

---

##### Convolution expression
By definition
$$
z(t)=(x*y)(t)=\int_{-\infty}^{\infty} x(\tau)\,y(t-\tau)\,d\tau.
$$
Since $x(\tau)=1$ only for $\tau\in[-1,1]$, this reduces to
$$
z(t)=\int_{-1}^{1} y(t-\tau)\,d\tau.
$$
Put $u=t-\tau$. When $\tau$ runs from $-1$ to $1$, $u$ runs from $t+1$ down to $t-1$. Changing limits (or noticing the integral over the interval of length $2$) gives
$$
z(t)=\int_{t-1}^{\,t+1} y(u)\,du.
$$
Thus $z(t)$ is the integral of $y(u)$ over the length-$2$ window $[t-1,t+1]$. Because $y(u)$ is nonzero only on $[1,5]$, we only get contribution when $[t-1,t+1]$ overlaps $[1,5]$. Compute $z(t)$ by cases.

---

##### Case analysis (overlap of $[t-1,t+1]$ with $[1,5]$)

**1.** For $t<0$ or $t\ge 6$: no overlap $\Rightarrow$
$$
z(t)=0.
$$

**2.** For $0\le t<2$ the overlap is $[1,\;t+1]$. Since $y(u)=u-3$ on $[1,5]$,
$$\begin{align*}
z(t)&=\int_{1}^{t+1}(u-3)\,du
= \left[\tfrac{1}{2}u^2-3u\right]_{1}^{t+1} \\
&= \left(\tfrac{1}{2}(t+1)^2-3(t+1)\right) - \left(\tfrac{1}{2}\cdot1^2-3\cdot1\right) \\
&= \tfrac{1}{2}(t^2+2t+1)-3t-3 -\left(\tfrac{1}{2}-3\right) \\
&= \tfrac{1}{2}t^2 + t + \tfrac{1}{2} -3t -3 -\left(-\tfrac{5}{2}\right) \\
&= \tfrac{1}{2}t^2 -2t \\
&= \frac{t(t-4)}{2}.
\end{align*}$$

**3.** For $2\le t\le 4$ the whole window $[t-1,t+1]\subset[1,5]$, so
$$\begin{align*}
z(t)&=\int_{t-1}^{t+1}(u-3)\,du
= \left[\tfrac{1}{2}u^2-3u\right]_{t-1}^{t+1} \\
&= \big(\tfrac{1}{2}(t+1)^2-3(t+1)\big)-\big(\tfrac{1}{2}(t-1)^2-3(t-1)\big) \\
&=2t-6.
\end{align*}$$

**4.** For $4< t<6$ the overlap is $[t-1,\;5]$. Thus
$$\begin{align*}
z(t)&=\int_{t-1}^{5}(u-3)\,du
= \left[\tfrac{1}{2}u^2-3u\right]_{t-1}^{5} \\
&= \big(\tfrac{1}{2}\cdot25-3\cdot5\big) - \big(\tfrac{1}{2}(t-1)^2-3(t-1)\big) \\
&= \big(\tfrac{25}{2}-15\big) - \big(\tfrac{1}{2}(t^2-2t+1)-3t+3\big) \\
&= \big(-\tfrac{5}{2}\big) - \big(\tfrac{1}{2}t^2 -t +\tfrac{1}{2} -3t +3\big) \\
&= -\tfrac{5}{2} -\tfrac{1}{2}t^2 +4t -\tfrac{7}{2} \\
&= -\tfrac{1}{2}t^2 +4t -6.
\end{align*}$$

---

##### Summary (piecewise $z(t)$)
$$
z(t)=
\begin{cases}
0, & t<0,\\[4pt]
\displaystyle \frac{t(t-4)}{2}, & 0\le t<2,\\[6pt]
\displaystyle 2t-6, & 2\le t\le 4,\\[6pt]
\displaystyle -\tfrac{1}{2}t^2+4t-6, & 4<t<6,\\[4pt]
0, & t\ge6.
\end{cases}
$$

---

##### Where is $z(t)$ maximum?

Evaluate or inspect the pieces:

- On $[2,4]$, $z(t)=2t-6$ is linear increasing from $z(2)=-2$ to $z(4)=2$.
- On $(4,6)$, $z(t)=-\tfrac{1}{2}t^2+4t-6$ is a concave-down quadratic with value $z(4)=2$ and $z(6)=0$, so it decreases after $t=4$.
- On $[0,2)$, $z(t)=\tfrac12 t^2-2t$ is $\le 0$ (has minimum negative values), so it does not exceed the value at $t=4$.

Thus the maximum occurs at the boundary $t=4$, with
$$
z(4)=2.
$$

**Answer:** $T_1 = 4$ seconds.

---

#### Graphical solution

**Key idea (graphical view).**  
$x(t)=1$ on $[-1,1]$ so convolution
$$z(t)=(x*y)(t)=\int_{t-1}^{t+1} y(u)\,du$$
is just the area under $y(u)$ inside the window $[t-1,t+1]$ (window length = 2). To solve graphically, slide this length-2 window along the $u$-axis and compute the signed area of $y(u)$ inside the window. The value $z(t)$ is exactly that area for window centered at $t$.

---

##### Steps to do it on the plot (by hand)

1. **Draw the window**: for a chosen $t$ draw the interval $[t-1,t+1]$ on the $u$-axis (mark its left and right ends).

2. **Find overlap with $y$**: recall $y(u)=u-3$ only for $u\in[1,5]$ (zero elsewhere). So the only contribution is the portion of $[t-1,t+1]$ that lies inside $[1,5]$.

3. **Three typical window positions to try (graphically):**
   - Window mostly left: when $t<0$ the window lies left of $1$ → no overlap → area $=0$.
   - Window partially overlapping left end: when $0\le t<2$ the overlap is $[1,t+1]$. On the graph this includes negative values of $y(u)$ near $u=1$, so area is negative (you can estimate area as area under the straight line $u-3$).
   - Window fully inside support: when $2\le t\le4$ the window $[t-1,t+1]$ lies entirely inside $[1,5]$. Graphically this is easiest — the area is the trapezoid under the straight line $y=u-3$ between $u=t-1$ and $u=t+1$. As you slide from $t=2$ to $t=4$ the window moves right and the whole area becomes larger (because the line $u-3$ is increasing), so $z(t)$ increases linearly.
   - Window overlapping right end: when $4<t<6$ the overlap is $[t-1,5]$ and the area now decreases as the window slides beyond the region of large positive slope.

4. **Locate the maximum visually**:  
   - On paper, slide the length-2 window and watch how the *signed* area under the slanted line $y=u-3$ changes. The area becomes largest when the window includes the largest positive values of $y$ and excludes negative parts.  
   - That happens when the window covers the rightmost portion of the support as much as possible without extending past $5$. The best you can do is make the left edge of the window land at $u=3$ so the window is $[3,5]$. That corresponds to center $t=4$.
   - Graphically you can see that any earlier window still includes some negative part near $u=1$ or lower positive values; any later window loses some of the positive portion near $u=5$.

5. **Confirm by simple area sketch**: draw the triangle/trapezoid shapes:
   - For window $[3,5]$, $y(u)$ runs from $0$ at $u=3$ up to $2$ at $u=5$ (a right triangle of base 2 and height 2). Area = $\tfrac12\cdot 2\cdot 2 = 2$.  
   - For any other valid window you either include some negative area or lose part of that triangle, so area \(<2\).

Therefore the maximum occurs at $t=4$ (window $[3,5]$) and the maximum value is $z(4)=2$.

---

##### Short checklist to reproduce on paper
- Sketch $y(u)$ and mark support $[1,5]$ and the line $u-3$.
- Draw a length-2 interval $[t-1,t+1]$ and slide it rightwards while watching the signed area under $y(u)$ inside that interval.
- Stop where the interval contains the highest positive segment without including negative part — that is $[3,5]$ → $t=4$.

**Answer (graphical):** $T_1 = 4\,$s, with maximum area $z(4)=2$.
