---
title: FLUX.1
---

## Introduction

This guide will help you maximise the benefits of FLUX.1, an AI tool for creating high-quality images. Whether you're new to AI image generation or have some experience, this guide will walk you through the basics of crafting effective prompts. You’ll learn how to create images that are visually stunning, detailed, and aligned with your vision.

**Note on Model Variability**:

FLUX.1 is a versatile tool, but it’s important to remember that different FLUX models (e.g., FLUX.1 [**pro**], [**dev**], [**schnell**]) may produce varying results from the same prompt. Additionally, factors such as LoRAs (Low-Rank Adaptations) and other variables can also influence the output. Experimentation is key to understanding how your chosen model interprets prompts, so don’t be afraid to tweak and refine your approach based on the results you get.

### Variants

FLUX.1 is available in three main variants:

1. **FLUX.1 [pro]**: The flagship model, offering state-of-the-art performance in image generation. It excels in prompt following, visual quality, image detail, and output diversity. This version is ideal for professional use and high-end applications.
2. **FLUX.1 [dev]**: An open-weight, guidance-distilled model designed for non-commercial applications. It offers similar quality to the Pro version but with improved efficiency, making it suitable for developers and researchers.
3. **FLUX.1 [schnell]**: The fastest model in the suite, optimised for local development and personal use. It’s openly available under an Apache 2.0 license, making it accessible for a wide range of users.

### Configuration Settings

While a well-crafted prompt is essential, optimising **FLUX.1 [dev]**’s settings is equally important to be able to achieve high-quality results.

Here's a breakdown of key configuration parameters:

-   **Seed Value**: The seed value ensures consistency in generated images. A random, but fixed value can be reused to replicate specific outputs. In this guide, we use a seed value of 42.
-   **Image Dimensions**: Set dimensions, such as **1024** x **1024** pixels, for optimal image quality and file size.
-   **Guidance Scale**: A guidance scale of **3.5** strikes a balance between creativity and adherence to prompt specificity.
-   **Inference Steps**: Setting **50** inference steps ensures detailed images, with the model given enough iterations to fine-tune the visual output.
-   **Number of Images**: Start with a single image generation (Num Images = 1) to iterate efficiently. These settings allow **FLUX.1 [dev]** to maintain focus on your prompt’s specific elements while also delivering creative outputs.

## Descriptive Language

### Precision and Clarity

FLUX.1 responds best to precise and explicit language. Vague terms like "_nice_" or "_beautiful_" can lead to ambiguous results. Instead, use specific descriptors that clearly define the image you want to create.

Precision helps FLUX.1 understand your intent, reducing the likelihood of unexpected or off-target results.

Focus on details such as colours, textures, styles, and specific elements in your prompt.

#### Example Prompt

```text:no-line-numbers:no-v-pre title="Before"
A sunset landscape
```

```text:no-line-numbers:no-v-pre title="After"
A vibrant orange and pink sunset over a snow-capped mountain range, with soft, wispy clouds reflecting off a calm lake in the foreground
```

The revised prompt provides specific details about the colours, textures, and elements in the scene, ensuring FLUX.1 generates a more accurate and visually appealing image.

### Dynamic Language

Dynamic and Active Language. Creating Movement and Engagement.

Using dynamic and active language in your prompts can make your images feel more alive and engaging. Instead of describing static scenes, you can describe actions and movements.

Active language helps FLUX.1 create images that feel dynamic and full of energy.

Use verbs and action-oriented descriptions to bring your scenes to life.

#### Example Prompt

```text:no-line-numbers:no-v-pre title="Before"
A mountain peak
```

```text:no-line-numbers:no-v-pre title="After"
A majestic mountain peak emerging through swirling morning mist, with golden sunrise light catching the crystalline ice formations
```

The revised prompt uses active language to create a sense of movement and drama in the image.

### Use Artistic References

Referencing specific artists, art movements, or styles can help guide FLUX.1’s output.

#### Example Prompt

```text:no-line-numbers:no-v-pre
Create an image in the style of Vincent van Gogh’s “Starry Night,” but replace the village with a futuristic cityscape. Maintain the swirling, expressive brushstrokes and vibrant colour palette of the original, emphasising deep blues and bright yellows. The city should have tall, glowing skyscrapers that blend seamlessly with the swirling sky.
```

### Blend Concepts

FLUX.1 excels at combining diverse ideas and themes to create distinctive images. Combine multiple artistic styles to create unique visual experiences.

#### Example Prompt

```text:no-line-numbers:no-v-pre
Illustrate “The Last Supper” by Leonardo da Vinci, but reimagine it with robots in a futuristic setting. Maintain the composition and dramatic lighting of the original painting, but replace the apostles with various types of androids and cyborgs. The table should be a long, sleek metal surface with holographic displays. In place of bread and wine, have the robots interfacing with glowing data streams.
```

#### Example Prompt

```text:no-line-numbers:no-v-pre
Create an image that fuses the precision of M.C. Escher’s impossible geometries with the bold colours and shapes of Wassily Kandinsky’s abstract compositions. The subject should be a surreal cityscape where buildings seamlessly transform into musical instruments. Use Escher’s techniques to create paradoxical perspectives and interconnected structures, but render them in Kandinsky’s vibrant, non-representational style. Incorporate musical notations and abstract shapes that flow through the scene, connecting the architectural elements seamlessly. The colour palette should be rich and varied, with particular emphasis on deep blues, vibrant reds, and golden yellows.
```

### Temporal Narratives

Challenge FLUX.1 to convey a sense of time passing or a story unfolding within a single image.

#### Example Prompt

```text:no-line-numbers:no-v-pre
Illustrate the life cycle of a monarch butterfly in a single, continuous image. Divide the canvas into four seamlessly blending sections, each representing a stage of the butterfly’s life.

Start on the left with a milkweed plant where tiny eggs are visible on the underside of a leaf. As we move right, show the caterpillar stage with the larva feeding on milkweed leaves. In the third section, depict the chrysalis stage, with the green and gold-flecked pupa hanging from a branch.

Finally, on the right side, show the fully formed adult butterfly emerging, with its wings gradually opening to reveal the iconic orange and black pattern. Use a soft, natural colour palette dominated by greens and oranges. The background should subtly shift from spring to summer as we move from left to right, with changing foliage and lighting to indicate the passage of time.
```

### Emotional Gradients

Direct FLUX.1 to create images that convey a progression of emotions or moods.

#### Example Prompt

```text:no-line-numbers:no-v-pre
Create a panoramic image that depicts the progression of a person’s emotional journey from despair to hope. The scene should be a long, winding road that starts in a dark, stormy landscape and gradually transitions to a bright, sunlit meadow.

On the left, begin with a lone figure hunched against the wind, surrounded by bare, twisted trees and ominous storm clouds. As we move right, we see the gradual clearing of the sky, with the road passing through a misty forest where hints of light begin to break through.

Continue the transition with the forest opening up to reveal distant mountains and a rainbow. The figure should become more upright and purposeful in its stride. Finally, on the far right, show the person standing tall in a sunlit meadow full of wildflowers, arms outstretched in a gesture of triumph or liberation.

Use colour and lighting to enhance the emotional journey: start with a dark, desaturated palette on the left, gradually introducing more colour and brightness as we move right, ending in a vibrant, warm colour scheme. The overall composition should create a powerful visual metaphor for overcoming adversity and finding hope.
```

### Use Contrast and Juxtaposition

Creating contrast within your prompt can lead to visually striking and thought-provoking images.

#### Example Prompt

```text:no-line-numbers:no-v-pre
Create an image that juxtaposes the delicate beauty of nature with the harsh reality of urban decay. Show a vibrant cherry blossom tree in full bloom growing out of a cracked concrete sidewalk in a dilapidated city alley. The tree should be the focal point, with its pink petals contrasting against the grey, graffiti-covered walls of surrounding buildings. Include a small bird perched on one of the branches to emphasise the theme of resilience.
```

### Incorporate Mood and Atmosphere

Describing the emotional tone or atmosphere can help FLUX.1 generate images with the desired feel.

#### Example Prompt

```text:no-line-numbers:no-v-pre
Depict a cozy, warmly lit bookstore cafe on a rainy evening. The atmosphere should be inviting and nostalgic, with soft yellow lighting from vintage lamps illuminating rows of well-worn books. Show patrons reading in comfortable armchairs, steam rising from their coffee cups. The large front window should reveal a glistening wet street outside, with blurred lights from passing cars. Emphasise the contrast between the warm interior and the cool, rainy exterior.
```

### Unusual Perspectives

Challenging FLUX.1 with unique viewpoints can result in visually interesting images.

#### Example Prompt

```text:no-line-numbers:no-v-pre
Illustrate a “bug’s-eye view” of a picnic in a lush garden. The perspective should be from ground level, looking up at towering blades of grass and wildflowers that frame the scene. In the distance, show the underside of a red and white checkered picnic blanket with the silhouettes of picnic foods and human figures visible through the semi-transparent fabric. Include a few ants in the foreground carrying crumbs, and a ladybug climbing a blade of grass. The lighting should be warm and dappled, as if filtering through leaves.
```

## Hierarchical Structure

### Layered Compositions and Clear Placement

FLUX.1 allows you to define the placement of objects in different layers: foreground, middle ground, and background. This helps create depth and complexity in your images.

Layered compositions make images more dynamic and visually interesting. Precise placement ensures that FLUX.1 positions elements correctly, avoiding cluttered or unbalanced compositions.

Organise your prompt hierarchically, specifying where each element should appear (e.g., foreground, middle ground, background).

#### Example Prompt

```text:no-line-numbers:no-v-pre title="Before"
A terrarium with plants and a neon sign
```

```text:no-line-numbers:no-v-pre title="After"
A hanging glass terrarium featuring a miniature rainforest scene with colourful orchids and tiny waterfalls (foreground). Just beyond the glass, a neon sign reads ‘Rainforest Retreat’ in bright green and yellow letters (middle ground). The rain-soaked glass creates a beautiful distortion, adding a soft glow to the sign's vibrant colours (background).
```

The revised prompt clearly defines the placement of each element, creating a layered and visually rich composition.

## Contrasting Colors and Aesthetics

### Using Contrasts for Visual Impact

Contrasting colours and aesthetics can make your images more striking and memorable. For example, you can create a scene where one side is bright and cheerful, while the other is dark and moody.

Contrasts draw the viewer’s attention and add depth to your images, making them more engaging.

Describe the contrasting elements clearly and specify how they interact (e.g., sharp transition or soft blending).

#### Example Prompt

```text:no-line-numbers:no-v-pre title="Before"
A tree in a field
```

```text:no-line-numbers:no-v-pre title="After"
A single tree stands in the middle of the image. The left half of the tree features bright, vibrant green leaves under a sunny blue sky, while the right half has bare branches covered in frost, set against a cold, dark, and thunderous sky. On the left, there's lush green grass; on the right, thick snow. The split is sharp, with the transition happening right down the middle of the tree.
```

The revised prompt uses contrasting colours and aesthetics to create a visually striking image.

### Describing Transitions

When using contrasting elements, you can control how they transition from one to the other. The transition can be sharp and abrupt or soft and blended.

The type of transition affects the mood and visual flow of the image.

Specify whether the transition should be sharp or blended, and describe how the elements interact at the boundary.

#### Example Prompt

```text:no-line-numbers:no-v-pre title="Before"
A landscape with a sunny side and a rainy side
```

```text:no-line-numbers:no-v-pre title="After"
A landscape where the left side is sunny and bright, with golden fields and a clear blue sky, while the right side is rainy and dark, with storm clouds and wet grass. The transition between the two sides is soft and blended, creating a dreamy effect.
```

The revised prompt describes a soft transition between contrasting elements, adding a dreamy quality to the image.

## See-Through Materials and Textures

### Transparent Materials

FLUX.1 can create images with transparent materials, such as glass, ice, or plastic. These materials add depth and realism to your images.

Transparent materials allow you to create complex compositions where objects or text are visible through other elements.

Clearly describe the transparent material and what is visible behind it.

#### Example Prompt

```text:no-line-numbers:no-v-pre title="Before"
A neon sign in a room
```

```text:no-line-numbers:no-v-pre title="After"
A neon sign reading ‘Rainforest Retreat’ is visible through a rain-soaked glass window. The glass creates a beautiful distortion, adding a soft glow to the sign's vibrant colours.
```

The revised prompt uses a transparent material (glass) to create a visually interesting effect.

### Textures and Reflections

Textures and reflections can add realism and depth to your images, enhancing their visual appeal. For example, you can describe how light reflects off a glass surface or how textures like frost or water droplets appear.

Textures and reflections make your images more lifelike and engaging.

Describe the texture or reflection in detail, including how it interacts with light and other elements in the scene.

#### Example Prompt

```text:no-line-numbers:no-v-pre title="Before"
A glass of water
```

```text:no-line-numbers:no-v-pre title="After"
A glass of water on a wooden table, with light reflecting off the surface of the glass. The glass is covered in tiny water droplets, and the table has a rough, textured finish.
```

The revised prompt adds textures and reflections to create a more realistic image.

## Technical Parameters

**Note on Technical Parameters**

This section explores advanced techniques for enhancing realism and control in your images. However, keep in mind that the effectiveness of these parameters (e.g., camera devices, lenses, settings) can vary depending on the FLUX model you’re using, as well as other factors like LoRAs and training data. These tips are highly experimental, so feel free to adjust or omit them based on your specific needs and the model’s behaviour.

### Camera Devices

Different cameras produce different looks and feels in images. For example, a smartphone camera may convey a casual, everyday vibe, while a professional DSLR camera can produce sharp, high-quality images.

Specifying a camera helps FLUX.1 mimic the style and quality of real-world photography.

#### Common Cameras and Their Uses

| Camera                   | Best for                                                              | Example                                                     |
| ------------------------ | --------------------------------------------------------------------- | ----------------------------------------------------------- |
| iPhone (e.g., iPhone 15) | Casual, modern, and everyday shots.                                   | _Social media posts, relatable scenes, or casual portraits_ |
| Canon EOS R5             | Professional, high-detail images with vibrant colors and sharp focus. | _Landscapes, portraits, or high-quality product shots_      |
| Sony Alpha 7R IV         | High-resolution images with rich textures and fine details.           | _Nature photography, architecture, or detailed close-ups_   |
| Polaroid Instant Camera  | Vintage, nostalgic shots with soft colors and slight imperfections.   | _Retro or artistic scenes_                                  |

#### Example Prompt

**Camera**

```text:no-line-numbers:no-v-pre
Canon EOS R5
```

**Prompt**

```text:no-line-numbers:no-v-pre
A vibrant orange and pink sunset over a snow-capped mountain range, shot on a Canon EOS R5, capturing the vibrant colours and sharp details of the scene.
```

### Lenses

Lenses control how much of the scene is visible (field of view) and how much of the image is in focus (depth of field). Different lenses are suited for various types of shots.

#### Common Lenses and Their Uses

| Lense           | Length   | Best for                                                                                                                       |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Wide-Angle Lens | 16-35mm  | Capturing a broad view, perfect for landscapes, cityscapes, or large interiors.                                                |
| Standard Lens   | 50mm     | Everyday shots, portraits, and scenes where you want a natural perspective. It also creates a nice blurred background (bokeh). |
| Telephoto Lens  | 70-200mm | Zooming in on distant subjects, ideal for close-ups, wildlife, or isolating a subject from the background.                     |
| Macro Lens      | 100mm    | Extreme close-ups, perfect for capturing small details like insects, flowers, or textures.                                     |

#### Example Prompt

**Lens**

```text:no-line-numbers:no-v-pre
50mm Standard Lens
```

**Prompt**

```text:no-line-numbers:no-v-pre
A portrait shot with a 50mm lens, capturing the subject’s face in sharp focus with a softly blurred background
```

### Settings

Camera settings like aperture, ISO, and shutter speed control how light is captured, affecting the image’s brightness, focus, and motion.

#### Aperture (f-stop)

Controls how much light enters the camera and how much of the image is in focus. A low f-stop (e.g., f/2.8) creates a blurred background, while a high f-stop (e.g., f/16) keeps everything sharp.

#### ISO

Controls the camera’s sensitivity to light. Low ISO (e.g., 100) is best for bright scenes, while high ISO (e.g., 1600) is used in low-light conditions but can add grain or noise.

#### Shutter Speed

Controls how long the camera’s shutter stays open. Fast shutter speeds (e.g., 1/1000s) freeze motion, while slow shutter speeds (e.g., 30s) create motion blur or light trails.

These settings help FLUX.1 mimic real-world photography techniques, adding realism to your images.

Use settings to achieve specific effects. For example:

- Use "**_low f-stop_**" for a blurred background in portraits.
- Use "**_high ISO_**" for low-light scenes like night cityscapes.
- Use "**_slow shutter speed_**" to capture motion blur or light trails.

#### Example Prompt

**Settings**

```text:no-line-numbers:no-v-pre
f/8, ISO 100, 30-second shutter speed
```

**Prompt**

```text:no-line-numbers:no-v-pre
A night cityscape with skyscrapers, neon signs, and car light trails, shot with f/8, ISO 100, and a 30-second shutter speed, capturing the city lights with sharp details and minimal noise.
```

### Shot Types

The type of shot determines how the scene is framed and what elements are emphasised.

- Wide-angle shots capture a broad view, perfect for landscapes or large scenes.
- Medium shots focus on a specific area, ideal for portraits or detailed scenes.
- Close-up shots zoom in on a subject, highlighting details like textures or expressions.

The shot type affects the composition and focus of your image, guiding the viewer’s attention.

Specify the shot type to frame your image correctly.

For example:

-   Use `wide-angle shot` for expansive landscapes.
-   Use `close-up shot` for detailed textures or small objects.

#### Example Prompt

**Shot Type**

```text:no-line-numbers:no-v-pre
Wide-angle shot
```

**Prompt**

```text:no-line-numbers:no-v-pre
A wide-angle shot of a mountain range at sunrise, capturing the expansive landscape with vibrant colours and sharp details.
```

## Integrating Text

FLUX.1’s superior text rendering allows for creative use of text within images.

### Font Selection

Specifying the font ensures that text is legible and fits the image’s aesthetic.

Different fonts convey different moods and styles, and choosing the right font enhances the overall composition.

Specify the font type (e.g., Art Deco, cursive, sans-serif) to match the image’s theme.

#### Example Prompt

```text:no-line-numbers:no-v-pre title="Before"
A travel poster for Paris
```

```text:no-line-numbers:no-v-pre title="After"
A vintage travel poster for Paris. The Eiffel Tower silhouette dominates the centre, painted in warm sunset colours. At the top, ‘PARIS’ is written in large, elegant Art Deco font.
```

The revised prompt specifies the font, ensuring the text complements the vintage aesthetic of the poster.

### Style and Size

Defining the style (e.g., bold, italic) and size of text ensures it fits your composition.

Text style and size affect readability and visual balance.

Specify the style and size to ensure the text is legible and visually appealing.

#### Example Prompt

```text:no-line-numbers:no-v-pre title="Before"
A neon sign
```

```text:no-line-numbers:no-v-pre title="After"
A neon sign reading ‘Rainforest Retreat’ in bright green and yellow letters, with a soft glow effect, placed against a dark background
```

The revised prompt specifies the text style and effects, ensuring the sign is visually striking and legible.

### Color Palette

Choosing colours that harmonise with the image’s overall aesthetic enhances visual appeal.

Colour harmony creates a cohesive and visually pleasing image.

Specify the colours for text and other elements to ensure they complement the image effectively.

#### Example Prompt

```text:no-line-numbers:no-v-pre title="Before"
A neon sign
```

```text:no-line-numbers:no-v-pre title="After"
A neon sign reading ‘Rainforest Retreat’ in bright green and yellow letters against a dark background, with a soft glow effect
```

The revised prompt specifies the colours, ensuring the sign stands out while harmonising with the background.

### Text Effects

Describing effects like glow, shadow, or embossing enhances the appearance of text.

Text effects add depth and visual interest to the image.

Specify the effects to make the text more dynamic and engaging.

#### Example Prompt

```text:no-line-numbers:no-v-pre title="Before"
A neon sign
```

```text:no-line-numbers:no-v-pre title="After"
A neon sign reading ‘Rainforest Retreat’ in bright green and yellow letters, with a soft glow effect and a subtle shadow, placed against a dark background
```

The revised prompt specifies the text effects, ensuring the sign is visually striking and legible.

## Advanced Techniques

For complex scenes, consider breaking down your prompt into layers, focusing on different elements of the image.

#### Example Prompt

```text:no-line-numbers:no-v-pre
Create a bustling marketplace in a fantastical floating city.

Layer 1 (Background): Depict a city of interconnected floating islands suspended in a pastel sky. The islands should have a mix of whimsical architectural styles, from towering spires to quaint cottages. Show distant airships and flying creatures in the background.

Layer 2 (Middle ground): Focus on the main marketplace area. Illustrate a vast plaza with colourful stalls and shops selling exotic goods. Include floating platforms that serve as walkways between different sections of the market.

Layer 3 (Foreground): Populate the scene with a diverse array of fantasy creatures and humanoids. Show vendors calling out to customers, children chasing magical floating bubbles, and a street performer juggling balls of light. In the immediate foreground, depict a detailed stall selling glowing potions and mystical artifacts.

Atmosphere: The overall mood should be vibrant and magical, with soft, ethereal lighting that emphasises the fantastical nature of the scene.
```

## Avoiding Common Mistakes

### Incorrect Syntax

Avoid using syntax from other AI tools (e.g., Stable Diffusion). FLUX.1 has its quirks and preferences. For example, "colourful garden (with a single rose)++" would mean the user wants to emphasise the "with a single rose" part of the prompt.

Using incorrect syntax can confuse FLUX.1 and lead to unexpected results.

Stick to FLUX.1’s preferred syntax and avoid importing syntax from other tools. Use phrases such as "with emphasis on" or "with a focus on" in your prompt to guide the AI in the right direction.

#### Example Prompt

```text:no-line-numbers:no-v-pre title="Before"
(best quality, ultra-detailed)
```

```text:no-line-numbers:no-v-pre title="After"
Highly detailed and vibrant
```

The revised prompt uses FLUX.1’s preferred syntax, ensuring clarity and accuracy.

### Overcomplicating Prompts

Keep prompts concise and focused. Avoid listing unnecessary details that may confuse the model.

Overcomplicated prompts can lead to cluttered or off-target results.

Focus on the essential elements and avoid unnecessary details.

#### Example Prompt

```text:no-line-numbers:no-v-pre title="Before"
A beautiful sunset with a nice mountain range, some trees, a river, and a few birds flying in the sky
```

```text:no-line-numbers:no-v-pre title="After"
A vibrant orange and pink sunset over a snow-capped mountain range with a calm river in the foreground
```

The revised prompt is concise and focused, ensuring FLUX.1 generates a clear and visually appealing image.

### “White background” in [dev]

Are you getting fuzzy outputs from FLUX.1? If your prompt has a “white background,” it might be to blame. It’s worth noting that this issue only affects the [**dev**] variant; it doesn’t occur in [**schnell**].

https://getimg.ai/blog/flux-1-generating-blurry-images-heres-how-to-fix-it

Do not use the “white background” phrase in your prompt.

## Conclusion

By following this manual, you can unlock FLUX.1’s full potential and create stunning, precise images. Remember to be clear, detailed, and organised in your prompts. With practice, you’ll master the art of prompting for FLUX.1 and achieve results that exceed your expectations. However, please note that this guide is not exhaustive. FLUX.1 is a complex tool, and experimentation is key to discovering its full capabilities. Happy prompting!
