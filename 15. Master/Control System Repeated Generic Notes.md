---
aliases:
  - Control System Formula
  - Control System Examples
tags:
  - "#control-system"
  - control-systems
---

---
#### Time Constant Form Conversion Step

> [!example]- Time Constant Form Conversion Step
> Let $$G(s) = \frac{10}{(s+2)(s+5)}$$
>
> ##### Step 1: Compute time constants
>
> $\tau_1 = \frac{1}{2},\quad \tau_2 = \frac{1}{5}$
>
> ##### Step 2: Rewrite each pole
>
> $s+2 = \frac{1}{\tau_1}(1+s\tau_1)$
> $s+5 = \frac{1}{\tau_2}(1+s\tau_2)$
>
> i.e. $$s+2 = 2(1+0.5s),\quad s+5 = 5(1+0.2s)$$
>
> ##### Step 3: Substitute
>
> $$G(s)=\frac{10}{2 \cdot 5 (1+0.5s)(1+0.2s)}$$
> $$G(s)=\frac{1}{(1+0.5s)(1+0.2s)}$$
>
> This is the **time-constant form**.
^time-constant-form-conversion

---
