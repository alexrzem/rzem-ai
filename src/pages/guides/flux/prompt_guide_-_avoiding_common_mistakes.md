# Avoiding Common Mistakes

## Incorrect Syntax

### What it means
Avoid using syntax from other AI tools (e.g., Stable Diffusion). FLUX.1 has its own quirks and preferences. For example, "colorful garden (with a single rose)++" would mean the user wants to emphasize the "with a single rose" part of the prompt.

### Why it matters
Using incorrect syntax can confuse FLUX.1 and lead to unexpected results.

### How to apply it
Stick to FLUX.1’s preferred syntax and avoid importing syntax from other tools. Use phrases such as "with emphasis on" or "with a focus on" in your prompt to guide the AI in the right direction.

### Example Prompt

***Before***

```
(best quality, ultra-detailed).
```

***After***

```
Highly detailed and vibrant.
```

### Explanation
The revised prompt uses FLUX.1’s preferred syntax, ensuring clarity and accuracy.

## Overcomplicating Prompts

### What it means
Keep prompts concise and focused. Avoid listing unnecessary details that may confuse the model.

### Why it matters
Overcomplicated prompts can lead to cluttered or off-target results.

### How to apply it
Focus on the essential elements and avoid unnecessary details.

### Example Prompt

***Before***

```
A beautiful sunset with a nice mountain range and some trees and a river and a few birds flying in the sky.
```

***After***

```
A vibrant orange and pink sunset over a snow-capped mountain range with a calm river in the foreground.
```

### Explanation
The revised prompt is concise and focused, ensuring FLUX.1 generates a clear and visually appealing image.

## “White background” in [dev]

### What it means
Are you getting fuzzy outputs from FLUX.1? If your prompt has a “white background,” it might be to blame. It’s worth noting that this issue only affects the [dev] variant; it doesn’t occur in [schnell].

### Why it matters

### How to apply it
Do not using the “white background” phrase in your prompt.