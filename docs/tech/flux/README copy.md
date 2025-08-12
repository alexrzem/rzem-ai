---
title: FLUX.1
icon: 'fluent-color:code-block-48'
---

FLUX.1 is an open-source AI image generation model launched by Black Forest Labs, a laboratory founded by Robin Rombach, a former core member of Stability AI. Many team members also come from the original Stable Diffusion development team. FLUX.1 has set a new benchmark for AI text-to-image models with its exceptional image generation capabilities. It offers three different variant versions to meet diverse user needs. With a training parameter count of up to 12 billion, it far surpasses the 2 billion of SD3 Medium and outperforms other popular models like Midjourney and DALL-E 3 across various key metrics.

## FLUX.1 Models

To ensure that FLUX.1 also runs on computers with limited graphics card memory, there are a large number of differently detailed models. Black Forrest Labs offers three basic model variants:

### FLUX.1 **[schnell]**
The **[schnell]** fast model is available for users with limited graphics card memory or little patience. Images can be generated in 4 steps in the shortest possible time with little VRAM. The price is lower image quality and depth of detail. The generated images may be used commercially (Apache 2.0 licence).

### FLUX.1 **[dev]**
The **[dev]** model for non-commercial image generation. You can download the model as an open source checkpoint under the FLUX.1 non-commercial licence from Huggingface and install it on your own computer. The quality of the images generated is comparable to the results of the **[pro]** model.

### FLUX.1 **[pro]**
The **[pro]** model of Flux AI allows professional, commercial applications with the highest image quality and depth of detail. The model can be used for a fee via the Flux API or via cloud services such as Replicate, freepic, fal.ai or togehter.ai.

### FLUX.1 Kontext **[dev]**
The **[pro]** model of Flux AI allows professional, commercial applications with the highest image quality and depth of detail. The model can be used for a fee via the FLUX.1 API or via cloud services such as Replicate, freepic, fal.ai or togehter.ai.

## Flux AI Model-Variations and Encoder Cheat Sheet

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

### Schnell Safetensors
| Precision | File Size | Steps       | VRAM Req'     | Source                                                         | Download   |
| --------- |:---------:|:-----------:|:-------------:|:--------------------------------------------------------------:| ---------- |
| `FP16`    | `24 GB`   | `1` - `4`   | `24 GB`       | [Black Forrest Labs](https://huggingface.co/black-forest-labs) | [Download](hhttps://huggingface.co/black-forest-labs/FLUX.1-schnell/blob/main/flux1-schnell.safetensors) |
| `FP8`     | `12 GB`   | `1` - `4`   | `12 GB`       | [Kijai](https://huggingface.co/Kijai)                          | [Download](https://huggingface.co/Kijai/flux-fp8/blob/main/flux1-schnell-fp8-e4m3fn.safetensors) |
| `NF4`     | `12 GB`   | `1` - `4`   | `6 GB`        | [silveroxides](https://huggingface.co/silveroxides)            | [Download](https://huggingface.co/silveroxides/flux1-nf4-weights/blob/main/flux1-schnell-bnb-nf4.safetensors) |
