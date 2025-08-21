<template>
    <header class="relative bg-zinc-100 shadow-sm">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Lesson 1: Foundation &amp; Introduction to FLUX </h1>
            <p><span class="quote">Session Duration: 2 hours</span></p>
        </div>
    </header>
    <main>
        <Progress :step="1" />

        <div class="content">
            <h2 id="lesson-overview">Lesson Overview</h2>
            <p> This foundational session introduces participants to the world of AI image generation through FLUX.1, covering essential concepts, terminology, and basic prompting techniques. </p>

            <h2 id="learning-objectives">Learning Objectives</h2>
            <p>By the end of this lesson, participants will:</p>
            <ul class="list">
                <li>Understand what FLUX.1 is and its place in AI image generation</li>
                <li>Recognize key terminology used in AI image generation</li>
                <li>Distinguish between FLUX.1 [dev] and FLUX.1 [pro]</li>
                <li>Write basic effective prompts</li>
                <li>Generate their first AI images using FLUX</li>
            </ul>

            <h2 id="lesson-structure">Lesson Structure</h2>

            <h3 id="opening">Opening</h3>
            <p><span class="quote">15 minutes</span></p>

            <h4 id="welcome-introductions">Welcome &amp; Introductions</h4>
            <ul class="list">
                <li>Course overview recap</li>
                <li>Participant introductions and goals</li>
                <li>What to expect from FLUX</li>
            </ul>

            <h4 id="the-ai-image-generation-revolution">The AI Image Generation Revolution</h4>
            <ul class="list">
                <li>Brief history: From traditional art to AI</li>
                <li>Current landscape of AI image generators</li>
                <li>Why FLUX stands out</li>
            </ul>

            <h3 id="part-1-understanding-flux">Part 1: Understanding FLUX</h3>
            <p><span class="quote">30 minutes</span></p>

            <h4 id="what-is-flux.1">What is FLUX.1?</h4>
            <dl>
                <dt>Definition</dt>
                <dd>Advanced AI model for text-to-image generation</dd>

                <dt>Developer</dt>
                <dd>Black Forest Labs (team behind Stable Diffusion)</dd>

                <dt>Release</dt>
                <dd>Latest generation diffusion model</dd>

                <dt>Capabilities</dt>
                <dd>High-quality, diverse image generation</dd>
            </dl>
            <h4 id="flux.1-model-variants">FLUX.1 Model Variants</h4>

            <div class="overflow-hidden outline-1 outline-black/5 sm:rounded-lg shadow-lg">
                <table class="relative min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="data">Model </th>
                            <th scope="col" class="data">Description</th>
                            <th scope="col" class="data">Best For </th>
                            <th scope="col" class="data">Access </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                        <tr>
                            <td class="keydata">FLUX.1 [pro]</td>
                            <td class="data">Commercial, highest quality </td>
                            <td class="data">Professional work, commercial use</td>
                            <td class="data">Paid API</td>
                        </tr>
                        <tr>
                            <td class="keydata">FLUX.1 [dev]</td>
                            <td class="data">Open-source, high quality</td>
                            <td class="data">Learning, experimentation, non-commercial</td>
                            <td class="data">Free/Open</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 id="key-advantages-of-flux">Key Advantages of FLUX</h4>
            <ul class="list">
                <li><strong>Superior text rendering</strong> in images</li>
                <li><strong>Photorealistic quality</strong></li>
                <li><strong>Prompt adherence</strong> - follows instructions precisely</li>
                <li><strong>Artistic flexibility</strong> - multiple styles</li>
                <li><strong>Fast generation</strong> times</li>
            </ul>

            <h3 id="part-2-essential-terminology">Part 2: Essential Terminology</h3>
            <p><span class="quote">25 minutes</span></p>

            <h4 id="core-concepts">Core Concepts</h4>
            <p><strong>Prompt</strong></p>
            <dl>
                <dt>Definition</dt>
                <dd>Text description telling the AI what to create</dd>

                <dt>Example</dt>
                <dd>“A golden retriever puppy playing in a sunlit garden”</dd>
            </dl>

            <PromptCards>
                <PromptCard img="/flux_101/lesson1/f7eecd94-7176-45f4-ae6e-50383e3714f1.png" prompt="A golden retriever puppy playing in a sunlit garden" />
            </PromptCards>

            <h5>Diffusion Model</h5>
            <dl>
                <dt>Definition</dt>
                <dd>AI technique that learns to create images by reversing noise</dd>

                <dt>Analogy</dt>
                <dd>Like sculpting by removing unwanted material</dd>
            </dl>

            <h5>Inference Steps</h5>
            <dl>
                <dt>Definition</dt>
                <dd>Number of refinement passes the AI makes</dd>

                <dt>Range</dt>
                <dd>Typically 20-50 steps</dd>

                <dt>Trade-off</dt>
                <dd>More steps = better quality but slower generation</dd>
            </dl>

            <h5>Guidance Scale (CFG)</h5>
            <dl>
                <dt>Definition</dt>
                <dd>How closely the AI follows your prompt</dd>

                <dt>Range</dt>
                <dd>1-20 (typical: 7-12)</dd>

                <dt>Effect</dt>
                <dd>Higher = more literal, Lower = more creative freedom</dd>
            </dl>

            <h5>Seed</h5>
            <dl>
                <dt>Definition</dt>
                <dd>Random number that determines image variation</dd>

                <dt>Use</dt>
                <dd>Same prompt + same seed = identical image</dd>

                <dt>Purpose</dt>
                <dd>Reproducibility and variation control</dd>
            </dl>

            <h5>Aspect Ratio</h5>
            <dl>
                <dt>Definition</dt>
                <dd>Width-to-height relationship</dd>

                <dt>Common ratios</dt>
                <dd>1:1 (square), 16:9 (landscape), 9:16 (portrait)</dd>
            </dl>

            <h4 id="advanced-terms-brief-introduction">Advanced Terms (Brief Introduction)</h4>
            <dl>
                <dt>Latent Space</dt>
                <dd>Mathematical representation where AI “thinks”</dd>

                <dt>Attention Mechanism</dt>
                <dd>How AI focuses on different prompt parts</dd>

                <dt>Fine-tuning</dt>
                <dd>Customising models for specific styles</dd>

                <dt>LoRA</dt>
                <dd>Lightweight model modifications</dd>
            </dl>

            <div class="my-8 p-8 border rounded-xl border-blue-400 bg-blue-50 justify-items-center">
                <h3 id="break">Break</h3>
                <p><span class="quote">10 minutes</span></p>
            </div>

            <h3 id="part-3-basic-prompting-principles">Part 3: Basic Prompting Principles</h3>
            <p><span class="quote">35 minutes</span></p>

            <h4 id="the-anatomy-of-a-good-prompt">The Anatomy of a Good Prompt</h4>
            <div class="flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-lg border border-zinc-300 my-4">
                <div class="px-3 py-3 text-lg bg-zinc-50 flex-shrink leading-3 rounded-t-lg font-semibold"> Structure </div>
                <div class="p-4">
                    <code>[Subject] + [Action/Pose] + [Environment] + [Style] + [Technical details]</code>
                </div>
            </div>

            <h6>Example Breakdown:</h6>
            <dl>
                <dt>Subject</dt>
                <dd class="quote">A professional photographer</dd>

                <dt>Action</dt>
                <dd class="quote">adjusting camera settings</dd>

                <dt>Environment</dt>
                <dd class="quote">in a bustling city street at golden hour</dd>

                <dt>Style</dt>
                <dd class="quote">documentary photography style</dd>

                <dt>Technical</dt>
                <dd class="quote">shot with 85mm lens, shallow depth of field</dd>
            </dl>

            <h4 id="essential-prompting-guidelines">Essential Prompting Guidelines</h4>
            <h6>Be Specific but Balanced</h6>

            <PromptCards>
                <PromptCard
                    icon="memo"
                    iconColour="text-green-500"
                    title="Good"
                    img="/flux_101/lesson1/287a3746-8f38-412e-82f7-53984eab0df5.png"
                    prompt="A graceful springbok mid-leap across the African savanna at golden hour, detailed wildlife photography style, dynamic pose showing characteristic pronking behavior, warm sunset lighting, shallow depth of field, professional nature photography, high detail, 4K quality" />

                <PromptCard icon="memo" iconColour="text-rose-600" title="Too vague" img="/flux_101/lesson1/cc6f1c8c-e243-45b7-a5cc-eb040886365c.png" prompt="A springbok" />

                <PromptCard
                    icon="memo"
                    iconColour="text-rose-600"
                    title="Too complex"
                    img="/flux_101/lesson1/3eb2073e-dae2-4635-acae-3d1275d809e0.png"
                    prompt="realistic photographic springbok in abstract expressionist painting style, medieval fantasy cyberpunk setting, bright sunny day dark stormy night, close-up macro shot wide landscape view, minimalist maximalist composition, black and white colourful rainbow palette, ancient historical modern futuristic, peaceful aggressive mood, soft focus sharp detail everywhere" />
            </PromptCards>

            <h6>Use Visual Language</h6>
            <ul class="list">
                <li>Focus on what you can see</li>
                <li>Describe colors, lighting, composition</li>
                <li>Avoid abstract concepts without visual cues</li>
            </ul>

            <h6>Specify Style and Medium</h6>
            <ul class="list">
                <li> <span class="quote">Oil painting</span>, <span class="quote">photograph</span>, <span class="quote">digital art</span> </li>
                <li> <span class="quote">Renaissance style</span>, <span class="quote">modern minimalist</span>, <span class="quote">cyberpunk</span> </li>
                <li> <span class="quote">Studio lighting</span>, <span class="quote">natural light</span>, <span class="quote">dramatic shadows</span> </li>
            </ul>

            <h6>Control Quality with Keywords</h6>
            <dl>
                <dt>Quality boosters</dt>
                <dd><span class="quote">high quality</span>, <span class="quote">detailed</span>, <span class="quote">professional</span></dd>
                <dt>Resolution terms</dt>
                <dd><span class="quote">4K</span>, <span class="quote">8K</span>, <span class="quote">ultra-high resolution</span></dd>
                <dt>Clarity terms</dt>
                <dd><span class="quote">sharp focus</span>, <span class="quote">crisp</span>, <span class="quote">clear</span></dd>
            </dl>

            <h4 id="common-prompting-mistakes">Common Prompting Mistakes</h4>
            <dl>
                <dt>Negative descriptions</dt>
                <dd>FLUX works better with positive descriptions</dd>

                <dt>Contradictory elements</dt>
                <dd><span class="quote">Bright darkness</span> confuses the model</dd>

                <dt>Too many concepts</dt>
                <dd>Keep prompts focused</dd>

                <dt>Unclear subjects</dt>
                <dd>Always have a clear main subject</dd>
            </dl>

            <h3 id="part-4-hands-on-practice-20-minutes">Part 4: Hands-On Practice</h3>
            <p><span class="quote">20 minutes</span></p>

            <h4 id="exercise-1-basic-prompt-construction">Exercise 1: Basic Prompt Construction</h4>
            <h5>Task</h5>
            <h6>Create prompts for these scenarios:</h6>
            <ol class="nlist">
                <li>A portrait of a chef in their kitchen</li>
                <li>A landscape scene with mountains and a lake</li>
                <li>A futuristic cityscape at night</li>
            </ol>

            <h6>Sample Solutions</h6>
            <PromptCards>
                <PromptCard
                    img="/flux_101/lesson1/22e8956c-55f1-4ae6-9b38-540a6c603a0f.png"
                    prompt="Professional chef in white uniform, smiling while preparing pasta in a modern restaurant kitchen, warm lighting, documentary photography style" />

                <PromptCard img="/flux_101/lesson1/4d90c714-1d1e-4f0a-973e-dae3894dfeb6.png" prompt="Serene mountain lake reflecting snow-capped peaks, surrounded by pine forests, golden hour lighting, landscape photography" />

                <PromptCard img="/flux_101/lesson1/0bfcfaf0-44d0-43a2-ba1b-eb24b9505010.png" prompt="Futuristic cyberpunk cityscape at night, neon lights reflecting on wet streets, flying cars, towering skyscrapers, cinematic lighting" />
            </PromptCards>

            <h4 id="exercise-2-first-image-generation">Exercise 2: First Image Generation</h4>
            <dl>
                <dt>Platform Setup</dt>
                <dd>[Instructor demonstrates platform access]</dd>

                <dt>Practice Prompts</dt>
                <dd>
                    <div>
                        <p>Start simple: <span class="quote">A cute cat sitting on a windowsill, soft natural lighting</span></p>
                        <p>Observe results and discuss</p>
                        <p>Try variations with different styles</p>
                    </div>
                </dd>
            </dl>

            <h3 id="part-5-wrap-up-preview-15-minutes">Part 5: Wrap-up &amp; Preview</h3>
            <p><span class="quote">15 minutes</span></p>

            <h4 id="key-takeaways">Key Takeaways</h4>
            <ul class="list">
                <li>FLUX.1 is a powerful, accessible AI image generation tool</li>
                <li>Good prompts balance specificity with clarity</li>
                <li>Practice and experimentation lead to better results</li>
                <li>Understanding terminology helps communicate with the AI</li>
            </ul>

            <h4 id="common-questions-troubleshooting">Common Questions &amp; Troubleshooting</h4>
            <ul>
                <li>
                    <p><strong>Q</strong>: <span class="quote">My images don't look like what I expected</span></p>
                    <p><strong>A</strong>: Try being more specific about style, lighting, and composition</p>
                </li>
            </ul>

            <ul>
                <li>
                    <p><strong>Q</strong>: <span class="quote">How long should my prompts be?</span></p>
                    <p><strong>A</strong>: Generally 10-30 words, but quality matters more than length</p>
                </li>
            </ul>

            <ul>
                <li>
                    <p><strong>Q</strong>: <span class="quote">Can I create copyrighted characters?</span></p>
                    <p><strong>A</strong>: Avoid direct references to copyrighted material; focus on original concepts</p>
                </li>
            </ul>

            <h4 id="preview-of-next-session">Preview of Next Session</h4>
            <ul class="list">
                <li>Deep dive into FLUX architecture</li>
                <li>Understanding how diffusion models work</li>
                <li>Advanced parameter control</li>
                <li>Hardware optimisation techniques</li>
            </ul>

            <h2 id="homework-assignment">Homework Assignment</h2>

            <h5> Practice Prompts: </h5>

            <h6>Create 5 different images using these themes:</h6>
            <ol class="nlist">
                <li>Portrait photography</li>
                <li>Nature/landscape</li>
                <li>Food photography</li>
                <li>Architecture</li>
                <li>Abstract art</li>
            </ol>

            <h6> Reflection Questions: </h6>
            <ul class="list">
                <li>Which prompts worked best and why?</li>
                <li>What challenges did you encounter?</li>
                <li>What styles are you most interested in exploring?</li>
            </ul>
            <h2 id="resources-for-further-learning">Resources for Further Learning</h2>
            <ul>
                <li>FLUX.1 official documentation</li>
                <li>AI art communities (Reddit r/StableDiffusion, Discord servers)</li>
                <li>Prompt databases and galleries</li>
                <li>Style reference collections</li>
            </ul>
            <h2 id="instructor-notes">Instructor Notes</h2>
            <ul>
                <li>Encourage questions throughout the session</li>
                <li>Allow extra time for hands-on practice if needed</li>
                <li>Circulate during exercises to provide individual help</li>
                <li>Document common issues for future sessions</li>
                <li>Take note of participant interests for customising later sessions</li>
            </ul>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Progress from './Progress.vue';

</script>
