---
original: "[[ee_2021.pdf]]"
question paper: "[[ee_2021]]"
question: "[[ee_2021#^q35]]"
aliases:
  - "Example : YBus Matrix Formulation"
tags:
  - example/ybus-matrix-formulation
---
### YBus Matrix Formulation Example

![[ee_2021#^q35]]

---
#### Solution (step-by-step)

A 3-bus network with ideal voltage-source buses is shown. All impedances are $Z_1=Z_2=Z_3=Z_4=j\,\Omega$. Find the $Y_{bus}$ for buses 1,2,3.
##### Step 1 : admittances

All impedances are $j\,\Omega$, so each admittance is $$Y = \frac{1}{Z} = \frac{1}{j} = -j.$$
Thus $Y_1=Y_2=Y_3=Y_4=-j$.
##### Step 2: form 4x4 nodal admittance matrix (nodes 1,2,3,4)

Using $Y_{ii}=\sum$ admittances at node $i$ and $Y_{ij}=-Y_{branch}$ for a branch between $i$ and $j$, the 4x4 matrix (rows/cols = 1,2,3,4) is:

$$
Y_{4\times4}=\begin{bmatrix}
 -j & 0  & 0  & +j\\
  0 & -j & 0  & +j\\
  0 & 0  & -j & +j\\
 +j & +j & + j & -4j
\end{bmatrix}.
$$

Explanation: e.g. $Y_{11}=Y_1=-j$, $Y_{14}=-Y_1=+j$, and $Y_{44}=Y_1+Y_2+Y_3+Y_4=-4j$.

##### Step 3: Kron reduction of node 4 to get 3x3 $Y_{bus}$ (buses 1--3)

Partition as $$Y=\begin{bmatrix}Y_{aa} & Y_{ab}\\ Y_{ba} & Y_{bb}\end{bmatrix},$$
where $Y_{aa}$ is $3\times3$ for buses 1--3, $Y_{bb}$ is scalar for node 4, and $Y_{ab}$ is $3\times1$.

Kron reduction formula: $$Y_{\text{reduced}} = Y_{aa} - Y_{ab}Y_{bb}^{-1}Y_{ba}.$$
Here $$Y_{aa} = -jI_3,\quad Y_{ab}=\begin{bmatrix}j\\j\\j\end{bmatrix},\quad Y_{bb}=-4j.$$
So $$Y_{bb}^{-1}=\frac{1}{-4j}=\frac{j}{4}.$$
Compute the outer product: $$Y_{ab}Y_{ba}=\begin{bmatrix}j\\j\\j\end{bmatrix}[j\ j\ j] = j^2\mathbf{1}_{3\times3} = -\mathbf{1}_{3\times3}$$
Then $$Y_{ab}Y_{bb}^{-1}Y_{ba} = \frac{j}{4}(-\mathbf{1}) = -\frac{j}{4}\mathbf{1}$$
Thus $$Y_{\text{reduced}} = -jI_3 -\big(-\tfrac{j}{4}\mathbf{1}\big) = -jI_3 + \tfrac{j}{4}\mathbf{1}.$$
##### Step 4: final 3x3 $Y_{bus}$ (rows/cols = Bus1, Bus2, Bus3)

Writing the matrix explicitly:

$$
Y_{bus} = \begin{bmatrix}
-\tfrac{3j}{4} & \tfrac{j}{4} & \tfrac{j}{4}\\[6pt]
\tfrac{j}{4} & -\tfrac{3j}{4} & \tfrac{j}{4}\\[6pt]
\tfrac{j}{4} & \tfrac{j}{4} & -\tfrac{3j}{4}
\end{bmatrix}
= \frac{j}{4}\begin{bmatrix}-3 & 1 & 1\\ 1 & -3 & 1\\ 1 & 1 & -3\end{bmatrix}.
$$

Off-diagonals are $+j/4$, diagonals are $-3j/4$.

> [!warning] Notes
> This result assumes the central junction (node 4) is not a bus with an ideal source; the ideal voltage sources at buses 1,2,3 are to ground and treated as bus terminals. The internal hub node is eliminated via Kron reduction.

---
#### Answer

**Option (C) is the correct option**