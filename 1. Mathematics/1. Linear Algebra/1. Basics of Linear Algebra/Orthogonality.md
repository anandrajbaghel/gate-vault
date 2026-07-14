---
tags:
  - linear-algebra
  - signal-processing
  - fourier-analysis
  - vector-spaces
  - engineering-math
created: 2025-09-09
aliases:
  - Orthogonal
  - Orthogonal Functions
  - Orthogonal Vectors
  - Orthonormal
subject: "[[Mathematics]]"
parent: Linear Algebra
---
### Orthogonality
#orthogonality #linear-algebra #signal-decomposition

> Orthogonality is a generalization of the geometric concept of being perpendicular. In [[Vector Space Definition and Properties|vector spaces]], it signifies that two elements are "independent" in a specific linear algebraic sense. This concept is fundamental in mathematics, signal processing, and communications, as it allows for the decomposition of complex signals or data into simpler, non-interfering components.

#### Orthogonality of Vectors
#vector-orthogonality

Two vectors $\mathbf{u}$ and $\mathbf{v}$ in an [[Inner Product Space|inner product space]] are **orthogonal** if their inner product (dot product in Euclidean space) is zero.
$$\boxed{\quad \mathbf{u} \cdot \mathbf{v} = \sum_{i=1}^n u_i v_i = 0 \quad}$$
Geometrically, this means the angle between them is $90^\circ$ ($\cos\theta=0$).
* A set of vectors is an **orthogonal set** if every pair of distinct vectors in the set is orthogonal.
* An **orthonormal set** is an orthogonal set where each vector has a norm (length) of 1.

---
#### Orthogonality of Functions (Signals)
#function-orthogonality #inner-product

The concept of orthogonality extends from discrete vectors to continuous functions (signals). The dot product's summation is replaced by an integral over a specified interval $[t_1, t_2]$.

Two complex functions (signals) $\phi_m(t)$ and $\phi_n(t)$ are said to be **orthogonal** over the interval $[t_1, t_2]$ if their inner product is zero.
$$\boxed{\quad \langle \phi_m(t), \phi_n(t) \rangle = \int_{t_1}^{t_2} \phi_m(t) \phi_n^*(t) \, dt = 0 \quad \text{for } m \neq n \quad}$$
where $\phi_n^*(t)$ is the complex conjugate of $\phi_n(t)$.

*   **Norm**: The "energy" or squared norm of a function is its inner product with itself: $||\phi_n(t)||^2 = \int_{t_1}^{t_2} |\phi_n(t)|^2 \, dt$.
*   **Orthonormal Functions**: A set of functions is orthonormal if it is orthogonal and the norm of each function is 1.
    $$ \int_{t_1}^{t_2} \phi_m(t) \phi_n^*(t) \, dt = \delta_{mn} = \begin{cases} 1 & m=n \\ 0 & m \neq n \end{cases} $$

> [!warning]- Orthogonality ==Important==
> ##### 1. Orthogonality of DC term with cosine terms
> $$\int_0^T 1 \cdot \cos(n\omega t)\, dt \implies\int_0^T \cos(n\omega t)\,dt= \left[\frac{\sin(n\omega t)}{n\omega}\right]_0^T$$
> $$\sin(n\omega T) = \sin(n\cdot 2\pi)=0,\quad \sin(0)=0$$
> $$\boxed{\quad \int_0^T 1\cdot \cos(n\omega t)\,dt=0\quad}$$
> So **DC is orthogonal to every cosine term** : $1 \perp \cos(n\omega t)$.
> 
> ---
> ##### 2. Orthogonality between different cosine harmonics
> > Use the [[Trigonometric Identities#^ptosformula|identity]] $\cos A \cos B = \frac{1}{2}[\cos(A-B) + \cos(A+B)]$
> 
> $$\int_0^T \cos(m\omega t)\cos(n\omega t)\,dt=\frac12\int_0^T \cos((m-n)\omega t)\,dt+\frac12\int_0^T \cos((m+n)\omega t)\,dt$$
> 
> *Both integrals become zero because each results in a sine term evaluated over a full period.*
> Thus $$\cos(m\omega t)\perp \cos(n\omega t)\quad (m\neq n)$$

---
#### Principle of Orthogonality
#orthogonality-principle #signal-approximation #least-squares

This principle is key to approximating a function $f(t)$ using a set of orthogonal basis functions $\{\phi_k(t)\}$. We represent $f(t)$ as a linear combination:
$$ f(t) \approx \hat{f}(t) = \sum_{k=1}^N c_k \phi_k(t) $$
The **principle of orthogonality** states that the set of coefficients $c_k$ that minimizes the mean squared error between $f(t)$ and its approximation $\hat{f}(t)$ is the one for which the error vector $e(t) = f(t) - \hat{f}(t)$ is orthogonal to every basis function $\phi_k(t)$.
$$ \langle e(t), \phi_k(t) \rangle = \langle f(t) - \sum_{j} c_j \phi_j(t), \phi_k(t) \rangle = 0 $$
Because the basis functions are orthogonal, this allows for a simple calculation of each coefficient, independent of the others:
$$\boxed{\quad c_k = \frac{\langle f(t), \phi_k(t) \rangle}{||\phi_k(t)||^2} = \frac{\int_{t_1}^{t_2} f(t) \phi_k^*(t) \, dt}{\int_{t_1}^{t_2} |\phi_k(t)|^2 \, dt} \quad}$$
This is the core idea behind the [[Fourier Series]], where we project a signal onto the orthogonal basis of sines and cosines.

---
#### Orthogonal Matrices
#orthogonal-matrix

A square matrix $Q$ is **orthogonal** if its columns (and rows) form an orthonormal set of vectors. This leads to a defining property:
$$\boxed{\quad Q^T Q = Q Q^T = I \quad \text{or} \quad Q^{-1} = Q^T \quad}$$
Multiplying by an orthogonal matrix is equivalent to a rotation and/or reflection, which **preserves lengths and angles**.
$$ ||Q\mathbf{x}||^2 = (Q\mathbf{x})^T(Q\mathbf{x}) = \mathbf{x}^T Q^T Q \mathbf{x} = \mathbf{x}^T I \mathbf{x} = ||\mathbf{x}||^2 $$

---
### Related Concepts
#related-concepts

> [[Fourier Series]] (A prime example of decomposition using an orthogonal basis)

[[Fourier Transforms]]
[[Vector Space Definition and Properties|Vector Spaces]]
[[Gram-Schmidt Orthonormalization Process]] (A method to construct an orthonormal basis from a set of linearly independent vectors)
[[Linear Regression|Least Squares Method]]
[[Signals & Systems]]


