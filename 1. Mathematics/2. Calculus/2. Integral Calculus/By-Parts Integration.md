---
tags:
  - by-parts
  - integration/by-parts
  - by-parts-integration
created: 2026-07-01
aliases:
  - "Example : By-Parts Integration"
---
### By-Parts Integration

> [!pyq] PYQ : 2020
> ![[ee_2020#^q16]]

> [!refer]
> [[Solving First-Order Linear ODEs]]

> Let $$y = \int 2x e^x\, dx$$

Now **this integral requires integration by parts**.

Let
- $u=2x → du=2dx$
- $dv = e^xdx  → v = e^x$ 

> [!error]- Integration by Parts — LIATE rule
> To choose functions in $\int u\,dv$, pick **$u$** according to the priority:
> **L → I → A → T → E**
> - **L**: Logarithmic ($\ln x$)
> - **I**: Inverse trigonometric ($\tan^{-1}x$, $\sin^{-1}x$)
> - **A**: Algebraic ($x^n$)
> - **T**: Trigonometric ($\sin x,\cos x$)
> - **E**: Exponential ($e^x, a^x$)
>
> Choose **$u$** as the function appearing **earlier** in LIATE; the rest is **$dv$**.
> $$\int u\,dv = uv - \int v\,du$$


Apply: $$\int u\,dv = uv - \int v\,du$$Thus: $$\int 2x e^x dx = 2x e^x - \int 2 e^x dx$$Factor $2e^x$: $$\int 2x e^x dx = 2e^x (x - 1) + C$$$$\boxed{\quad y = 2e^x (x - 1) + C\quad}$$

---