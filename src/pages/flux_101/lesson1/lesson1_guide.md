# Lesson 1: Foundation & Introduction to FLUX

_Session Duration: 2 hours_

## Lesson Overview

This foundational session introduces participants to the world of AI image generation through FLUX.1, covering essential concepts, terminology, and basic prompting techniques.

## Learning Objectives

By the end of this lesson, participants will:

-   Understand what FLUX.1 is and its place in AI image generation
-   Recognize key terminology used in AI image generation
-   Distinguish between FLUX.1 [dev] and FLUX.1 [pro]
-   Write basic effective prompts
-   Generate their first AI images using FLUX

## Lesson Structure

### Opening

_15 minutes_

#### Welcome & Introductions

-   Course overview recap
-   Participant introductions and goals
-   What to expect from FLUX

#### The AI Image Generation Revolution

-   Brief history: From traditional art to AI
-   Current landscape of AI image generators
-   Why FLUX stands out

### Part 1: Understanding FLUX

_30 minutes_

#### What is FLUX.1?

-   **Definition**: Advanced AI model for text-to-image generation
-   **Developer**: Black Forest Labs (team behind Stable Diffusion)
-   **Release**: Latest generation diffusion model
-   **Capabilities**: High-quality, diverse image generation

#### FLUX.1 Model Variants

| Model            | Description                 | Best For                                  | Access    |
| ---------------- | --------------------------- | ----------------------------------------- | --------- |
| **FLUX.1 [pro]** | Commercial, highest quality | Professional work, commercial use         | Paid API  |
| **FLUX.1 [dev]** | Open-source, high quality   | Learning, experimentation, non-commercial | Free/Open |

#### Key Advantages of FLUX

-   **Superior text rendering** in images
-   **Photorealistic quality**
-   **Prompt adherence** - follows instructions precisely
-   **Artistic flexibility** - multiple styles
-   **Fast generation** times

### Part 2: Essential Terminology

_25 minutes_

#### Core Concepts

**Prompt**

-   **_Definition_**: Text description telling the AI what to create
-   **_Example_**: "A golden retriever puppy playing in a sunlit garden"

**Diffusion Model**

-   **_Definition_**: AI technique that learns to create images by reversing noise
-   **_Analogy_**: Like sculpting by removing unwanted material

**Inference Steps**

-   **_Definition_**: Number of refinement passes the AI makes
-   **_Range_**: Typically 20-50 steps
-   **_Trade-off_**: More steps = better quality but slower generation

**Guidance Scale (CFG)**

-   **_Definition_**: How closely the AI follows your prompt
-   **_Range_**: 1-20 (typical: 7-12)
-   **_Effect_**: Higher = more literal, Lower = more creative freedom

**Seed**

-   **_Definition_**: Random number that determines image variation
-   **_Use_**: Same prompt + same seed = identical image
-   **_Purpose_**: Reproducibility and variation control

**Aspect Ratio**

-   **_Definition_**: Width-to-height relationship
-   **_Common ratios_**: 1:1 (square), 16:9 (landscape), 9:16 (portrait)

#### Advanced Terms (Brief Introduction)

-   **_Latent Space_**: Mathematical representation where AI "thinks"
-   **_Attention Mechanism_**: How AI focuses on different prompt parts
-   **_Fine-tuning_**: Customizing models for specific styles
-   **_LoRA_**: Lightweight model modifications

### Break

_10 minutes_

### Part 3: Basic Prompting Principles

_35 minutes_

#### The Anatomy of a Good Prompt

**_Structure_**: [`Subject`] + [`Action/Pose`] + [`Environment`] + [`Style`] + [`Technical details`]

**Example Breakdown:**

-   **_Subject_**: "_A professional photographer_"
-   **_Action_**: "_adjusting camera settings_"
-   **_Environment_**: "_in a bustling city street at golden hour_"
-   **_Style_**: "_documentary photography style_"
-   **_Technical_**: "_shot with 85mm lens, shallow depth of field_"

#### Essential Prompting Guidelines

**Be Specific but Balanced**

-   ✅ **Good**: "_A red cardinal perched on a snow-covered pine branch_"
-   ❌ **Too vague**: "_A bird_"
-   ❌ **Too complex**: "_A red cardinal with exactly 47 feathers perched on the third branch from the top of a pine tree with 2,847 needles covered in 3.2mm of fresh snow_"

**Use Visual Language**

-   Focus on what you can see
-   Describe colors, lighting, composition
-   Avoid abstract concepts without visual cues

**Specify Style and Medium**

-   "_Oil painting_", "_photograph_", "_digital art_"
-   "_Renaissance style_", "_modern minimalist_", "_cyberpunk_"
-   "_Studio lighting_", "_natural light_", "_dramatic shadows_"

**Control Quality with Keywords**

-   **_Quality boosters_**: "_high quality_", "_detailed_", "_professional_"
-   **_Resolution terms_**: "_4K_", "_8K_", "_ultra-high resolution_"
-   **_Clarity terms_**: "_sharp focus_", "_crisp_", "_clear_"

#### Common Prompting Mistakes

1. **Negative descriptions** - FLUX works better with positive descriptions
2. **Contradictory elements** - "_Bright darkness_" confuses the model
3. **Too many concepts** - Keep prompts focused
4. **Unclear subjects** - Always have a clear main subject

### Part 4: Hands-On Practice (20 minutes)

#### Exercise 1: Basic Prompt Construction

**Task**: Create prompts for these scenarios:

1. A portrait of a chef in their kitchen
2. A landscape scene with mountains and a lake
3. A futuristic cityscape at night

**Sample Solutions**:

1. "_Professional chef in white uniform, smiling while preparing pasta in a modern restaurant kitchen, warm lighting, documentary photography style_"
2. "_Serene mountain lake reflecting snow-capped peaks, surrounded by pine forests, golden hour lighting, landscape photography_"
3. "_Futuristic cyberpunk cityscape at night, neon lights reflecting on wet streets, flying cars, towering skyscrapers, cinematic lighting_"

#### Exercise 2: First Image Generation

**Platform Setup**: [Instructor demonstrates platform access]

**Practice Prompts**:

-   Start simple: "_A cute cat sitting on a windowsill, soft natural lighting_"
-   Observe results and discuss
-   Try variations with different styles

### Part 5: Wrap-up & Preview (15 minutes)

#### Key Takeaways

-   FLUX.1 is a powerful, accessible AI image generation tool
-   Good prompts balance specificity with clarity
-   Practice and experimentation lead to better results
-   Understanding terminology helps communicate with the AI

#### Common Questions & Troubleshooting

-   **Q**: "_My images don't look like what I expected_"

    **A**: Try being more specific about style, lighting, and composition

-   **Q**: "_How long should my prompts be?_"

    **A**: Generally 10-30 words, but quality matters more than length

-   **Q**: "_Can I create copyrighted characters?_"

    **A**: Avoid direct references to copyrighted material; focus on original concepts

#### Preview of Next Session

-   Deep dive into FLUX architecture
-   Understanding how diffusion models work
-   Advanced parameter control
-   Hardware optimization techniques

## Homework Assignment

**Practice Prompts**:

Create 5 different images using these themes:

1. Portrait photography
2. Nature/landscape
3. Food photography
4. Architecture
5. Abstract art

**Reflection Questions**:

-   Which prompts worked best and why?
-   What challenges did you encounter?
-   What styles are you most interested in exploring?

## Resources for Further Learning

-   FLUX.1 official documentation
-   AI art communities (Reddit r/StableDiffusion, Discord servers)
-   Prompt databases and galleries
-   Style reference collections

## Instructor Notes

-   Encourage questions throughout the session
-   Allow extra time for hands-on practice if needed
-   Circulate during exercises to provide individual help
-   Document common issues for future sessions
-   Take note of participant interests for customizing later sessions
