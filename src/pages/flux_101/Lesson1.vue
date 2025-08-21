<template>
    <header class="relative bg-zinc-100 shadow-sm">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Lesson 1: Foundation &amp; Introduction to FLUX
            </h1>
            <p><em>Session Duration: 2 hours</em></p>
        </div>
    </header>
    <main>
        <Progress :step="1" />

        <div class="content">
            <h2 id="lesson-overview">Lesson Overview</h2>
            <p>
                This foundational session introduces participants to the world of AI image generation through FLUX.1,
                covering essential concepts, terminology, and basic prompting
                techniques.
            </p>

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
            <p><em>15 minutes</em></p>

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
            <p><em>30 minutes</em></p>

            <h4 id="what-is-flux.1">What is FLUX.1?</h4>
            <ul class="list">
                <li>
                    <strong>Definition</strong>
                    : Advanced AI model for text-to-image generation
                </li>
                <li>
                    <strong>Developer</strong>
                    : Black Forest Labs (team behind Stable Diffusion)
                </li>
                <li>
                    <strong>Release</strong>
                    : Latest generation diffusion model
                </li>
                <li>
                    <strong>Capabilities</strong>
                    : High-quality, diverse image generation
                </li>
            </ul>
            <h4 id="flux.1-model-variants">FLUX.1 Model Variants</h4>

            <div class="overflow-hidden outline-1 outline-black/5 sm:rounded-lg shadow-lg">
                <table class="relative min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col"
                                class="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">Model
                            </th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Description</th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Best For
                            </th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Access
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                        <tr>
                            <td class="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6">
                                <strong>FLUX.1 [pro]</strong>
                            </td>
                            <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-500">Commercial, highest quality
                            </td>
                            <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-500">Professional work, commercial
                                use</td>
                            <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-500">Paid API</td>
                        </tr>
                        <tr>
                            <td class="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6">
                                <strong>FLUX.1 [dev]</strong>
                            </td>
                            <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-500">Open-source, high quality</td>
                            <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-500">Learning, experimentation,
                                non-commercial</td>
                            <td class="px-3 py-4 text-sm whitespace-nowrap text-gray-500">Free/Open</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 id="key-advantages-of-flux">Key Advantages of FLUX</h4>
            <ul class="list">
                <li>
                    <strong>Superior text rendering</strong>
                    in images
                </li>
                <li><strong>Photorealistic quality</strong></li>
                <li>
                    <strong>Prompt adherence</strong>
                    - follows instructions precisely
                </li>
                <li>
                    <strong>Artistic flexibility</strong>
                    - multiple styles
                </li>
                <li>
                    <strong>Fast generation</strong>
                    times
                </li>
            </ul>

            <h3 id="part-2-essential-terminology">Part 2: Essential Terminology</h3>
            <p><em>25 minutes</em></p>
            <h4 id="core-concepts">Core Concepts</h4>
            <p><strong>Prompt</strong></p>
            <ul class="list">
                <li>
                    <strong><em>Definition</em></strong>
                    : Text description telling the AI what to create
                </li>
                <li>
                    <strong><em>Example</em></strong>
                    : “A golden retriever puppy playing in a sunlit garden”
                </li>
            </ul>

            <PromptCards>
                <PromptCard @promptCopied="promptCopied" @seedCopied="seedCopied" @stepsCopied="stepsCopied"
                    @cfgCopied="cfgCopied" img="/flux_101/lesson1/f7eecd94-7176-45f4-ae6e-50383e3714f1.png"
                    prompt="A golden retriever puppy playing in a sunlit garden" />
            </PromptCards>


            <p><strong>Diffusion Model</strong></p>
            <ul class="list">
                <li>
                    <strong><em>Definition</em></strong>
                    : AI technique that learns to create images by reversing noise
                </li>
                <li>
                    <strong><em>Analogy</em></strong>
                    : Like sculpting by removing unwanted material
                </li>
            </ul>

            <p><strong>Inference Steps</strong></p>
            <ul class="list">
                <li>
                    <strong><em>Definition</em></strong>
                    : Number of refinement passes the AI makes
                </li>
                <li>
                    <strong><em>Range</em></strong>
                    : Typically 20-50 steps
                </li>
                <li>
                    <strong><em>Trade-off</em></strong>
                    : More steps = better quality but slower generation
                </li>
            </ul>

            <p><strong>Guidance Scale (CFG)</strong></p>
            <ul class="list">
                <li>
                    <strong><em>Definition</em></strong>
                    : How closely the AI follows your prompt
                </li>
                <li>
                    <strong><em>Range</em></strong>
                    : 1-20 (typical: 7-12)
                </li>
                <li>
                    <strong><em>Effect</em></strong>
                    : Higher = more literal, Lower = more creative freedom
                </li>
            </ul>

            <p><strong>Seed</strong></p>
            <ul class="list">
                <li>
                    <strong><em>Definition</em></strong>
                    : Random number that determines image variation
                </li>
                <li>
                    <strong><em>Use</em></strong>
                    : Same prompt + same seed = identical image
                </li>
                <li>
                    <strong><em>Purpose</em></strong>
                    : Reproducibility and variation control
                </li>
            </ul>

            <p><strong>Aspect Ratio</strong></p>
            <ul class="list">
                <li>
                    <strong><em>Definition</em></strong>
                    : Width-to-height relationship
                </li>
                <li>
                    <strong><em>Common ratios</em></strong>
                    : 1:1 (square), 16:9 (landscape), 9:16 (portrait)
                </li>
            </ul>

            <h4 id="advanced-terms-brief-introduction">Advanced Terms (Brief Introduction)</h4>
            <ul class="list">
                <li>
                    <strong><em>Latent Space</em></strong>
                    : Mathematical representation where AI “thinks”
                </li>
                <li>
                    <strong><em>Attention Mechanism</em></strong>
                    : How AI focuses on different prompt parts
                </li>
                <li>
                    <strong><em>Fine-tuning</em></strong>
                    : Customising models for specific styles
                </li>
                <li>
                    <strong><em>LoRA</em></strong>
                    : Lightweight model modifications
                </li>
            </ul>

            <h3 id="break">Break</h3>
            <p><em>10 minutes</em></p>
            <h3 id="part-3-basic-prompting-principles">Part 3: Basic Prompting Principles</h3>
            <p><em>35 minutes</em></p>

            <h4 id="the-anatomy-of-a-good-prompt">The Anatomy of a Good Prompt</h4>
            <p>
                <strong><em>Structure</em></strong>
                : [
                <code>Subject</code>
                ] + [
                <code>Action/Pose</code>
                ] + [
                <code>Environment</code>
                ] + [
                <code>Style</code>
                ] + [
                <code>Technical details</code>
                ]
            </p>
            <p><strong>Example Breakdown:</strong></p>
            <ul class="list">
                <li>
                    <strong><em>Subject</em></strong>
                    : “
                    <em>A professional photographer</em>
                    ”
                </li>
                <li>
                    <strong><em>Action</em></strong>
                    : “
                    <em>adjusting camera settings</em>
                    ”
                </li>
                <li>
                    <strong><em>Environment</em></strong>
                    : “
                    <em>in a bustling city street at golden hour</em>
                    ”
                </li>
                <li>
                    <strong><em>Style</em></strong>
                    : “
                    <em>documentary photography style</em>
                    ”
                </li>
                <li>
                    <strong><em>Technical</em></strong>
                    : “
                    <em>shot with 85mm lens, shallow depth of field</em>
                    ”
                </li>
            </ul>
            <h4 id="essential-prompting-guidelines">Essential Prompting Guidelines</h4>
            <p><strong>Be Specific but Balanced</strong></p>

            <PromptCards>
                <PromptCard @promptCopied="promptCopied" @seedCopied="seedCopied" @stepsCopied="stepsCopied"
                    @cfgCopied="cfgCopied" icon="memo" iconColour="text-green-500" title="Good"
                    img="/flux_101/lesson1/287a3746-8f38-412e-82f7-53984eab0df5.png"
                    prompt="A graceful springbok mid-leap across the African savanna at golden hour, detailed wildlife photography style, dynamic pose showing characteristic pronking behavior, warm sunset lighting, shallow depth of field, professional nature photography, high detail, 4K quality" />

                <PromptCard @promptCopied="promptCopied" @seedCopied="seedCopied" @stepsCopied="stepsCopied"
                    @cfgCopied="cfgCopied" icon="memo" iconColour="text-rose-600" title="Too vague"
                    img="/flux_101/lesson1/cc6f1c8c-e243-45b7-a5cc-eb040886365c.png" prompt="A springbok" />

                <PromptCard @promptCopied="promptCopied" @seedCopied="seedCopied" @stepsCopied="stepsCopied"
                    @cfgCopied="cfgCopied" icon="memo" iconColour="text-rose-600" title="Too complex"
                    img="/flux_101/lesson1/3eb2073e-dae2-4635-acae-3d1275d809e0.png"
                    prompt="realistic photographic springbok in abstract expressionist painting style, medieval fantasy cyberpunk setting, bright sunny day dark stormy night, close-up macro shot wide landscape view, minimalist maximalist composition, black and white colourful rainbow palette, ancient historical modern futuristic, peaceful aggressive mood, soft focus sharp detail everywhere" />
            </PromptCards>


            <p><strong>Use Visual Language</strong></p>
            <ul>
                <li>Focus on what you can see</li>
                <li>Describe colors, lighting, composition</li>
                <li>Avoid abstract concepts without visual cues</li>
            </ul>
            <p><strong>Specify Style and Medium</strong></p>
            <ul>
                <li>
                    “
                    <em>Oil painting</em>
                    ”, “
                    <em>photograph</em>
                    ”, “
                    <em>digital art</em>
                    ”
                </li>
                <li>
                    “
                    <em>Renaissance style</em>
                    ”, “
                    <em>modern minimalist</em>
                    ”, “
                    <em>cyberpunk</em>
                    ”
                </li>
                <li>
                    “
                    <em>Studio lighting</em>
                    ”, “
                    <em>natural light</em>
                    ”, “
                    <em>dramatic shadows</em>
                    ”
                </li>
            </ul>
            <p><strong>Control Quality with Keywords</strong></p>
            <ul>
                <li>
                    <strong><em>Quality boosters</em></strong>
                    : “
                    <em>high quality</em>
                    ”, “
                    <em>detailed</em>
                    ”, “
                    <em>professional</em>
                    ”
                </li>
                <li>
                    <strong><em>Resolution terms</em></strong>
                    : “
                    <em>4K</em>
                    ”, “
                    <em>8K</em>
                    ”, “
                    <em>ultra-high resolution</em>
                    ”
                </li>
                <li>
                    <strong><em>Clarity terms</em></strong>
                    : “
                    <em>sharp focus</em>
                    ”, “
                    <em>crisp</em>
                    ”, “
                    <em>clear</em>
                    ”
                </li>
            </ul>
            <h4 id="common-prompting-mistakes">Common Prompting Mistakes</h4>
            <ol type="1">
                <li>
                    <strong>Negative descriptions</strong>
                    - FLUX works better with positive descriptions
                </li>
                <li>
                    <strong>Contradictory elements</strong>
                    - “
                    <em>Bright darkness</em>
                    ” confuses the model
                </li>
                <li>
                    <strong>Too many concepts</strong>
                    - Keep prompts focused
                </li>
                <li>
                    <strong>Unclear subjects</strong>
                    - Always have a clear main subject
                </li>
            </ol>
            <h3 id="part-4-hands-on-practice-20-minutes">Part 4: Hands-On Practice</h3>
            <p><em>20 minutes</em></p>

            <h4 id="exercise-1-basic-prompt-construction">Exercise 1: Basic Prompt Construction</h4>
            <p>
                <strong>Task</strong>
                : Create prompts for these scenarios:
            </p>
            <ol type="1">
                <li>A portrait of a chef in their kitchen</li>
                <li>A landscape scene with mountains and a lake</li>
                <li>A futuristic cityscape at night</li>
            </ol>

            <p>
                <strong>Sample Solutions</strong>
                :
            </p>

            <PromptCards>
                <PromptCard @promptCopied="promptCopied" @seedCopied="seedCopied" @stepsCopied="stepsCopied"
                    @cfgCopied="cfgCopied" img="/flux_101/lesson1/22e8956c-55f1-4ae6-9b38-540a6c603a0f.png"
                    prompt="Professional chef in white uniform, smiling while preparing pasta in a modern restaurant kitchen, warm lighting, documentary photography style" />

                <PromptCard @promptCopied="promptCopied" @seedCopied="seedCopied" @stepsCopied="stepsCopied"
                    @cfgCopied="cfgCopied" img="/flux_101/lesson1/4d90c714-1d1e-4f0a-973e-dae3894dfeb6.png"
                    prompt="Serene mountain lake reflecting snow-capped peaks, surrounded by pine forests, golden hour lighting, landscape photography" />

                <PromptCard @promptCopied="promptCopied" @seedCopied="seedCopied" @stepsCopied="stepsCopied"
                    @cfgCopied="cfgCopied" img="/flux_101/lesson1/0bfcfaf0-44d0-43a2-ba1b-eb24b9505010.png"
                    prompt="Futuristic cyberpunk cityscape at night, neon lights reflecting on wet streets, flying cars, towering skyscrapers, cinematic lighting" />
            </PromptCards>


            <h4 id="exercise-2-first-image-generation">Exercise 2: First Image Generation</h4>
            <p>
                <strong>Platform Setup</strong>
                : [Instructor demonstrates platform access]
            </p>
            <p>
                <strong>Practice Prompts</strong>
                :
            </p>
            <ul>
                <li>
                    Start simple: “
                    <em>A cute cat sitting on a windowsill, soft natural lighting</em>
                    ”
                </li>
                <li>Observe results and discuss</li>
                <li>Try variations with different styles</li>
            </ul>

            <h3 id="part-5-wrap-up-preview-15-minutes">Part 5: Wrap-up &amp; Preview</h3>
            <p><em>15 minutes</em></p>

            <h4 id="key-takeaways">Key Takeaways</h4>
            <ul>
                <li>FLUX.1 is a powerful, accessible AI image generation tool</li>
                <li>Good prompts balance specificity with clarity</li>
                <li>Practice and experimentation lead to better results</li>
                <li>Understanding terminology helps communicate with the AI</li>
            </ul>

            <h4 id="common-questions-troubleshooting">Common Questions &amp; Troubleshooting</h4>
            <ul>
                <li>
                    <p>
                        <strong>Q</strong>
                        : “
                        <em>My images don’t look like what I expected</em>
                        ”
                    </p>
                    <p>
                        <strong>A</strong>
                        : Try being more specific about style, lighting, and composition
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Q</strong>
                        : “
                        <em>How long should my prompts be?</em>
                        ”
                    </p>
                    <p>
                        <strong>A</strong>
                        : Generally 10-30 words, but quality matters more than length
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Q</strong>
                        : “
                        <em>Can I create copyrighted characters?</em>
                        ”
                    </p>
                    <p>
                        <strong>A</strong>
                        : Avoid direct references to copyrighted material; focus on original concepts
                    </p>
                </li>
            </ul>
            <h4 id="preview-of-next-session">Preview of Next Session</h4>
            <ul>
                <li>Deep dive into FLUX architecture</li>
                <li>Understanding how diffusion models work</li>
                <li>Advanced parameter control</li>
                <li>Hardware optimisation techniques</li>
            </ul>
            <h2 id="homework-assignment">Homework Assignment</h2>
            <p>
                <strong>Practice Prompts</strong>
                :
            </p>
            <p>Create 5 different images using these themes:</p>
            <ol type="1">
                <li>Portrait photography</li>
                <li>Nature/landscape</li>
                <li>Food photography</li>
                <li>Architecture</li>
                <li>Abstract art</li>
            </ol>
            <p>
                <strong>Reflection Questions</strong>
                :
            </p>
            <ul>
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
    <!-- Global notification live region, render this permanently at the end of the document -->
    <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
        <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
            <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
            <transition enter-active-class="transform ease-out duration-300 transition"
                enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                enter-to-class="translate-y-0 sm:translate-x-0" leave-active-class="transition ease-in duration-100"
                leave-from-class="" leave-to-class="opacity-0">
                <div v-if="notificationShow"
                    class="pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg outline-1 outline-black/5">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="shrink-0">
                                <fa :icon="['far', 'circle-check']" class="text-green-400" />
                            </div>
                            <div class="ml-3 w-0 flex-1 pt-0.5">
                                <p class="text-sm font-medium text-gray-900">{{ notificationMsg }}</p>
                            </div>
                            <div class="ml-4 flex shrink-0">
                                <button type="button" @click="notificationShow = false"
                                    class="inline-flex rounded-md text-gray-400 hover:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600">
                                    <span class="sr-only">Close</span>
                                    <fa :icon="['far', 'xmark']" class="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Progress from './Progress.vue';

const notificationShow = ref(false)
const notificationMsg = ref('');

const promptCopied = function () {
    notificationMsg.value = 'Prompt copied to clipboard.';
    notificationShow.value = true;
}

const seedCopied = function () {
    notificationMsg.value = 'Seed copied to clipboard.';
    notificationShow.value = true;
}

const stepsCopied = function () {
    notificationMsg.value = 'Steps copied to clipboard.';
    notificationShow.value = true;
}

const cfgCopied = function () {
    notificationMsg.value = 'Guidance copied to clipboard.';
    notificationShow.value = true;
}

</script>
