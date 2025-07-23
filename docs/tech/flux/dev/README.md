---
title: FLUX.1 [dev]
icon: 'fluent-color:number-symbol-square-32'
---

## FLUX.1 **[dev]**
The **[dev]** model for non-commercial image generation. You can download the model as an open source checkpoint under the FLUX.1 non-commercial licence from Huggingface and install it on your own computer. The quality of the images generated is comparable to the results of the **[pro]** model.

## Model Cheat Sheet

### Dev Safetensors
| Precision | File Size | Steps       | VRAM Req'     | Source                                                         | Download   |
| --------- |:---------:|:-----------:|:-------------:|:--------------------------------------------------------------:| ---------- |
| `FP16`    | `24 GB`   | `20` - `30` | `24 GB`       | [Black Forrest Labs](https://huggingface.co/black-forest-labs) | [Download](https://huggingface.co/black-forest-labs/FLUX.1-dev/blob/main/flux1-dev.safetensors) |
| `FP8`     | `17 GB`   | `20` - `30` | `12 GB`       | [lllyasviel](https://huggingface.co/lllyasviel)                | [Download](https://huggingface.co/lllyasviel/flux1_dev/blob/main/flux1-dev-fp8.safetensors) |
| `NF4`     | `12 GB`   | `20` - `30` | `6 GB`        | [lllyasviel](https://huggingface.co/lllyasviel)                | [Download](https://huggingface.co/lllyasviel/flux1-dev-bnb-nf4/blob/main/flux1-dev-bnb-nf4-v2.safetensors) |

### Dev Encoder
| Precision | File Size | Steps.      | VRAM Req'     | Source                                                         | Download   |
| --------- |:---------:| ----------- |:-------------:|:--------------------------------------------------------------:| ---------- |
| `VAE`     | `0.3 GB`  |             |               | [Black Forrest Labs](https://huggingface.co/black-forest-labs) | [Download](https://huggingface.co/black-forest-labs/FLUX.1-dev/blob/main/ae.safetensors) |
| `T5 FP16` | `10 GB`   |             | `> 32 GB RAM` | [lllyasviel](https://huggingface.co/lllyasviel)                | [Download](https://huggingface.co/lllyasviel/flux_text_encoders/blob/main/t5xxl_fp16.safetensors) |
| `T5 FP8`  | `5 GB`    |             | `< 32 GB RAM` | [lllyasviel](https://huggingface.co/lllyasviel)                | [Download](https://huggingface.co/lllyasviel/flux_text_encoders/blob/main/t5xxl_fp8_e4m3fn.safetensors) |
| `Clip_l`  | `0.25 GB` |             |               | [lllyasviel](https://huggingface.co/lllyasviel)                | [Download](https://huggingface.co/lllyasviel/flux_text_encoders/blob/main/clip_l.safetensors) |
