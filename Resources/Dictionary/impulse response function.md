### Impulse Response Function
*Linear Time-Invariant (LTI) Systems*

The **impulse response function**, denoted as $g(t)$, is the output of a system when an impulse input (specifically, the Dirac delta function, $δ(t)$) is applied to it. This function completely characterizes the behavior of a [[LTI|Linear Time-Invariant]] (LTI) system.

Alternatively, for an LTI system described by its transfer function $G(s)$ in the Laplace domain, the impulse response function $g(t)$ is the inverse Laplace transform of $G(s)$

#weighting-function
$$g(t)=\mathcal{L}^{−1}{G(s)}$$
- This function $g(t)$ is also commonly referred to as the **weighting function** of the system.

> Therefore, the transfer function and impulse-response function of a linear, time-invariant system contain the same information about the system dynamics.
> (In practice, a pulse input with a very short duration compared with the significant time constants of the system can be considered an impulse.)

---
###### Derivation in the Laplace Domain

Consider an LTI system with a transfer function $G(s)$, where $G(s)=\frac{Y(s)}{X(s)}$​, with $Y(s)$ being the Laplace transform of the output $y(t)$ and $X(s)$ being the Laplace transform of the input $x(t)$.

When the input is a unit impulse, $x(t)=δ(t)$, its Laplace transform is
$$X(s)=\mathcal{L}\{δ(t)\}=1$$
Substituting $X(s)=1$ into the transfer function equation
$$G(s)=\frac{Y(s)​}{1}$$
$$Y(s)=G(s)$$
Therefore, the Laplace transform of the output $y(t)$ when the input is a unit impulse is equal to the system's transfer function $G(s)$. Taking the inverse Laplace transform of $Y(s)$ yields the impulse response function
$$y(t)=\mathcal{L}^{−1}\{Y(s)\}=\mathcal{L}^{−1}\{G(s)\}=g(t)$$