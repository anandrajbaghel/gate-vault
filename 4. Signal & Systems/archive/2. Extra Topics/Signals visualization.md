![[SS - Sine - Noisy Sampling & Quantization.png]]

![[SS - Chirp - Noisy Sampling & Quantization.png]]


![[SS - ECG - Noisy Sampling & Quantization.png]]

The plots show how **Gaussian noise affects sampling and quantization** of the sine, chirp, and ECG signals. You can clearly see the distortion in sampled points and quantized steps compared to a clean signal.

---

![[SS - Original Sine, Sampling & Quantization.png]]

**Original Analog Signal**
    - A smooth sine wave of frequency **5 Hz**.
    - Acts as our "ideal" continuous-time input.

**Sampling**
    - Sampled at **50 Hz** → sampling interval = **0.02 seconds**.
    - Red dots represent discrete-time samples taken from the analog signal.

**Quantization**
    - Quantized to **3 bits** → **8 levels**.
    - Approximate **step size ≈ 0.286**.
    - Each sample is rounded to the nearest quantization level, creating a stair-step output.

---
![[SS - Sine - Noisy Sampling.png]]

![[SS - Sine - Noisy Quantization.png]]

**First plot** shows the analog + noise signal with **sampling only**
    - 🕒 **Sampling Interval**: 0.02 s (50 Hz)

**Second plot** adds **quantization** on top of the sampled points
    - 🎚️ **Quantization Levels**: 8 (from 3 bits)
    - 🪜 **Quantization Step Size**: ≈ 0.25 (based on signal range)

---
