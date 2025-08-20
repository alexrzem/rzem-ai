<template>
    <header class="relative bg-zinc-100 shadow-sm">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Lesson 4: LoRA Mastery &amp; Model Customization
            </h1>
            <p><em>Session Duration: 3 hours</em></p>
        </div>
    </header>
    <main>
        <Progress :step="4" />

        <div class="content">
            <h2 id="lesson-overview">Lesson Overview</h2>
            <p>This advanced session introduces LoRA (Low-Rank Adaptation) technology for customising FLUX models,
                covering theory, implementation, training, and professional applications for specialised image
                generation needs.</p>

            <h2 id="learning-objectives">Learning Objectives</h2>
            <p>By the end of this lesson, participants will:</p>
            <ul class="list">
                <li>Understand LoRA technology and its advantages for model customization</li>
                <li>Find, evaluate, and implement existing LoRAs effectively</li>
                <li>Plan and execute custom LoRA training projects</li>
                <li>Combine multiple LoRAs for complex customisations</li>
                <li>Troubleshoot LoRA-related issues and optimize performance</li>
                <li>Apply LoRAs in professional workflows and client projects</li>
            </ul>
            <h2 id="lesson-structure">Lesson Structure</h2>
            <h3 id="opening-portfolio-review">Opening &amp; Portfolio Review</h3>
            <p><em>20 minutes</em></p>
            <h4 id="session-3-portfolio-showcase">Session 3 Portfolio Showcase</h4>
            <ul class="list">
                <li>Brief presentations of advanced prompting portfolios</li>
                <li>Discuss challenges and breakthroughs from previous session</li>
                <li>Identify areas where LoRAs could enhance results</li>
            </ul>
            <h4 id="introduction-to-model-customization">Introduction to Model Customization</h4>
            <ul class="list">
                <li>Why base models aren’t always enough</li>
                <li>The need for specialised styles, characters, or concepts</li>
                <li>Overview of customization approaches: LoRAs vs. fine-tuning vs. embeddings</li>
            </ul>
            <h3 id="part-1-understanding-lora-technology">Part 1: Understanding LoRA Technology</h3>
            <p><em>45 minutes</em></p>
            <h4 id="what-is-lora">What is LoRA?</h4>
            <p><strong>Definition and Core Concept</strong></p>
            <ul class="list">
                <li><strong>LoRA</strong>: Low-Rank Adaptation - a technique for efficiently adapting large models</li>
                <li><strong>Purpose</strong>: Add new capabilities without modifying the base model</li>
                <li><strong>Analogy</strong>: Like adding specialised lenses to a camera - enhances specific
                    capabilities</li>
            </ul>
            <p><strong>Technical Foundation</strong></p>
            <ul class="list">
                <li><strong>Matrix Decomposition</strong>: Breaking down weight changes into smaller components</li>
                <li><strong>Rank Reduction</strong>: Using mathematical efficiency to minimize file sizes</li>
                <li><strong>Additive Adaptation</strong>: New knowledge layers on top of existing model</li>
            </ul>
            <p><strong>LoRA vs. Traditional Fine-tuning</strong></p>
            <table>
                <colgroup>
                    <col style="width: 32%" />
                    <col style="width: 31%" />
                    <col style="width: 35%" />
                </colgroup>
                <thead>
                    <tr class="header">
                        <th>Aspect</th>
                        <th>Traditional Fine-tuning</th>
                        <th>LoRA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="odd">
                        <td><strong>File Size</strong></td>
                        <td>2-7GB (full model)</td>
                        <td>10-200MB (adaptation only)</td>
                    </tr>
                    <tr class="even">
                        <td><strong>Training Time</strong></td>
                        <td>Hours to days</td>
                        <td>Minutes to hours</td>
                    </tr>
                    <tr class="odd">
                        <td><strong>Hardware Requirements</strong></td>
                        <td>High-end GPU required</td>
                        <td>Consumer GPU sufficient</td>
                    </tr>
                    <tr class="even">
                        <td><strong>Flexibility</strong></td>
                        <td>Single specialised model</td>
                        <td>Mix and match adaptations</td>
                    </tr>
                    <tr class="odd">
                        <td><strong>Storage</strong></td>
                        <td>Multiple full models</td>
                        <td>Base model + multiple LoRAs</td>
                    </tr>
                </tbody>
            </table>
            <h4 id="how-loras-work-with-flux">How LoRAs Work with FLUX</h4>
            <p><strong>Integration Process</strong></p>
            <ol type="1">
                <li><strong>Base Model Loading</strong>: FLUX.1 loads normally</li>
                <li><strong>LoRA Application</strong>: Adaptation weights are added to specific layers</li>
                <li><strong>Hybrid Generation</strong>: Combined model generates with new capabilities</li>
                <li><strong>Dynamic Switching</strong>: LoRAs can be enabled/disabled without reloading</li>
            </ol>
            <p><strong>Types of LoRAs for FLUX</strong></p>
            <ul class="list">
                <li><strong>Style LoRAs</strong>: Specific artistic styles (watercolour, anime, photography styles)</li>
                <li><strong>Character LoRAs</strong>: Consistent character generation across images</li>
                <li><strong>Concept LoRAs</strong>: Specific objects, poses, or compositions</li>
                <li><strong>Quality LoRAs</strong>: Enhanced detail, realism, or technical improvements</li>
            </ul>
            <p><strong>LoRA Strength and Blending</strong></p>
            <ul class="list">
                <li><strong>Strength Values</strong>: 0.0 (no effect) to 1.5+ (maximum effect)</li>
                <li><strong>Optimal Range</strong>: Usually 0.6-1.0 for balanced results</li>
                <li><strong>Over-application</strong>: Values too high can cause artifacts or instability</li>
            </ul>
            <h3 id="part-2-finding-and-using-existing-loras">Part 2: Finding and Using Existing LoRAs</h3>
            <p><em>40 minutes</em></p>
            <h4 id="lora-discovery-platforms">LoRA Discovery Platforms</h4>
            <p><strong>Primary LoRA Repositories</strong></p>
            <ul class="list">
                <li><strong>Civitai</strong>: Largest community-driven LoRA collection</li>
                <li><strong>Hugging Face</strong>: Professional and research-focused LoRAs</li>
                <li><strong>GitHub</strong>: Open-source and experimental LoRAs</li>
                <li><strong>Discord Communities</strong>: Latest and experimental releases</li>
            </ul>
            <p><strong>Evaluating LoRA Quality</strong></p>
            <ol type="1">
                <li><strong>Preview Images</strong>: Check example outputs for quality and consistency</li>
                <li><strong>Download Statistics</strong>: Popular LoRAs often indicate quality</li>
                <li><strong>User Reviews</strong>: Community feedback on effectiveness</li>
                <li><strong>Training Information</strong>: Dataset size, epochs, and training details</li>
                <li><strong>Compatibility</strong>: FLUX.1 compatibility verification</li>
            </ol>
            <h4 id="lora-implementation-guide">LoRA Implementation Guide</h4>
            <p><strong>Installation Process</strong></p>
            <ol type="1">
                <li><strong>Download LoRA File</strong>: Usually .safetensors format (10-200MB)</li>
                <li><strong>Place in Correct Directory</strong>: <code>/models/loras/</code> folder</li>
                <li><strong>Restart Interface</strong>: Refresh model list if needed</li>
                <li><strong>Verify Loading</strong>: Check LoRA appears in selection menu</li>
            </ol>
            <p><strong>Basic Usage Syntax</strong></p>
            <p>Base Prompt: “<em>Portrait of a woman in a garden</em>”</p>
            <p>With LoRA: “<em>Portrait of a woman in a garden &lt;lora:watercolour_style:0.8&gt;</em>”</p>
            <p>Advanced Usage: “<em>Portrait of a woman in a garden &lt;lora:watercolour_style:0.8&gt;
                    &lt;lora:detailed_eyes:0.6&gt;</em>”</p>
            <p><strong>LoRA Prompt Integration Strategies</strong></p>
            <ul class="list">
                <li><strong>Trigger Words</strong>: Many LoRAs require specific activation words</li>
                <li><strong>Strength Adjustment</strong>: Fine-tune effect intensity</li>
                <li><strong>Style Reinforcement</strong>: Combine LoRA with descriptive style words</li>
                <li><strong>Negative Prompts</strong>: Use negative prompts to counter unwanted LoRA effects</li>
            </ul>
            <h4 id="popular-lora-categories">Popular LoRA Categories</h4>
            <p><strong>Art Style LoRAs</strong></p>
            <ul class="list">
                <li><strong>Traditional Media</strong>: Oil painting, watercolour, pencil sketch, charcoal</li>
                <li><strong>Digital Styles</strong>: Concept art, anime, cartoon, pixel art</li>
                <li><strong>Photography</strong>: Film photography, polaroid, vintage, professional portrait</li>
                <li><strong>Historical Periods</strong>: Renaissance, Art Nouveau, Bauhaus, Mid-century modern</li>
            </ul>
            <p><strong>Character and People LoRAs</strong></p>
            <ul class="list">
                <li><strong>Consistent Characters</strong>: Fictional characters, original characters</li>
                <li><strong>Celebrity Lookalikes</strong>: Ethically trained on public images</li>
                <li><strong>Age and Demographics</strong>: Children, elderly, specific ethnicities</li>
                <li><strong>Professional Types</strong>: Doctors, artists, athletes, historical figures</li>
            </ul>
            <p><strong>Technical Enhancement LoRAs</strong></p>
            <ul class="list">
                <li><strong>Quality Boosters</strong>: Detail enhancement, resolution improvement</li>
                <li><strong>Lighting Specialists</strong>: Dramatic lighting, natural light, studio lighting</li>
                <li><strong>Composition Helpers</strong>: Dynamic poses, specific camera angles</li>
                <li><strong>Texture Focus</strong>: Fabric details, skin textures, material realism</li>
            </ul>
            <h3 id="break">Break</h3>
            <p><em>15 minutes</em></p>
            <h3 id="part-3-training-custom-loras">Part 3: Training Custom LoRAs</h3>
            <p><em>60 minutes</em></p>
            <h4 id="planning-your-lora-project">Planning Your LoRA Project</h4>
            <p><strong>Identifying Training Needs</strong></p>
            <ul class="list">
                <li><strong>Style Consistency</strong>: Need for specific artistic approach</li>
                <li><strong>Subject Specialisation</strong>: Unique objects, characters, or concepts</li>
                <li><strong>Quality Enhancement</strong>: Improvements for specific use cases</li>
                <li><strong>Brand Requirements</strong>: Corporate style, product aesthetics</li>
            </ul>
            <p><strong>Project Planning Template</strong></p>
            <ol type="1">
                <li><strong>Objective Definition</strong>: What should the LoRA accomplish?</li>
                <li><strong>Success Criteria</strong>: How will you measure effectiveness?</li>
                <li><strong>Training Data Requirements</strong>: What images do you need?</li>
                <li><strong>Timeline and Resources</strong>: Training time and hardware needs</li>
                <li><strong>Testing Strategy</strong>: How will you validate results?</li>
            </ol>
            <h4 id="dataset-preparation">Dataset Preparation</h4>
            <p><strong>Image Collection Guidelines</strong></p>
            <ul class="list">
                <li><strong>Quantity</strong>: 15-50 high-quality images minimum</li>
                <li><strong>Quality Standards</strong>: High resolution (1024x1024+), sharp, well-lit</li>
                <li><strong>Diversity</strong>: Various angles, lighting, compositions</li>
                <li><strong>Consistency</strong>: Clear common elements across all images</li>
                <li><strong>Copyright</strong>: Ensure you have rights to all training images</li>
            </ul>
            <p><strong>Dataset Organization</strong></p>
            <pre><code>/training_data/
├── images/
│   ├── image_001.jpg
│   ├── image_002.jpg
│   └── ...
├── captions/
│   ├── image_001.txt
│   ├── image_002.txt
│   └── ...
└── config.json</code></pre>
            <p><strong>Caption Writing Best Practices</strong></p>
            <ul class="list">
                <li><strong>Descriptive Accuracy</strong>: Describe what you see clearly</li>
                <li><strong>Trigger Word Inclusion</strong>: Include your chosen activation phrase</li>
                <li><strong>Style Consistency</strong>: Use consistent vocabulary across captions</li>
                <li><strong>Technical Details</strong>: Include relevant technical information</li>
            </ul>
            <p><strong>Example Caption</strong>:</p>
            <pre><code>A professional studio portrait in vintage_glamour_style, featuring dramatic lighting with strong contrast, black and white photography, classic Hollywood aesthetic, elegant pose</code></pre>
            <h4 id="lora-training-process">LoRA Training Process</h4>
            <p><strong>Training Environment Setup</strong></p>
            <ul class="list">
                <li><strong>Hardware Requirements</strong>: 8GB+ VRAM recommended</li>
                <li><strong>Software Installation</strong>: Kohya_ss, Auto1111 training extensions</li>
                <li><strong>Environment Configuration</strong>: Python environment and dependencies</li>
                <li><strong>Testing Setup</strong>: Validation workflow preparation</li>
            </ul>
            <p><strong>Training Configuration Parameters</strong></p>
            <p><strong>Basic Training Settings</strong></p>
            <ul class="list">
                <li><strong>Learning Rate</strong>: 0.0001-0.001 (start conservative)</li>
                <li><strong>Batch Size</strong>: 1-4 (depends on VRAM)</li>
                <li><strong>Epochs</strong>: 10-50 (monitor for overfitting)</li>
                <li><strong>Rank (Dimension)</strong>: 16-128 (complexity vs. file size)</li>
                <li><strong>Alpha</strong>: Usually half of rank value</li>
            </ul>
            <p><strong>Advanced Configuration</strong></p>
            <div class="sourceCode" id="cb3">
                <pre class="sourceCode json"><code class="sourceCode json"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="fu">{</span></span>
<span id="cb3-2"><a href="#cb3-2" aria-hidden="true" tabindex="-1"></a>    <span class="dt">&quot;model_name&quot;</span><span class="fu">:</span> <span class="st">&quot;flux-dev-v1&quot;</span><span class="fu">,</span></span>
<span id="cb3-3"><a href="#cb3-3" aria-hidden="true" tabindex="-1"></a>    <span class="dt">&quot;resolution&quot;</span><span class="fu">:</span> <span class="dv">1024</span><span class="fu">,</span></span>
<span id="cb3-4"><a href="#cb3-4" aria-hidden="true" tabindex="-1"></a>    <span class="dt">&quot;train_batch_size&quot;</span><span class="fu">:</span> <span class="dv">2</span><span class="fu">,</span></span>
<span id="cb3-5"><a href="#cb3-5" aria-hidden="true" tabindex="-1"></a>    <span class="dt">&quot;learning_rate&quot;</span><span class="fu">:</span> <span class="dv">0</span><span class="er">.0005</span><span class="fu">,</span></span>
<span id="cb3-6"><a href="#cb3-6" aria-hidden="true" tabindex="-1"></a>    <span class="dt">&quot;lr_scheduler&quot;</span><span class="fu">:</span> <span class="st">&quot;cosine&quot;</span><span class="fu">,</span></span>
<span id="cb3-7"><a href="#cb3-7" aria-hidden="true" tabindex="-1"></a>    <span class="dt">&quot;lr_warmup_steps&quot;</span><span class="fu">:</span> <span class="dv">100</span><span class="fu">,</span></span>
<span id="cb3-8"><a href="#cb3-8" aria-hidden="true" tabindex="-1"></a>    <span class="dt">&quot;max_train_steps&quot;</span><span class="fu">:</span> <span class="dv">1000</span><span class="fu">,</span></span>
<span id="cb3-9"><a href="#cb3-9" aria-hidden="true" tabindex="-1"></a>    <span class="dt">&quot;network_dim&quot;</span><span class="fu">:</span> <span class="dv">32</span><span class="fu">,</span></span>
<span id="cb3-10"><a href="#cb3-10" aria-hidden="true" tabindex="-1"></a>    <span class="dt">&quot;network_alpha&quot;</span><span class="fu">:</span> <span class="dv">16</span><span class="fu">,</span></span>
<span id="cb3-11"><a href="#cb3-11" aria-hidden="true" tabindex="-1"></a>    <span class="dt">&quot;optimizer_type&quot;</span><span class="fu">:</span> <span class="st">&quot;AdamW8bit&quot;</span></span>
<span id="cb3-12"><a href="#cb3-12" aria-hidden="true" tabindex="-1"></a><span class="fu">}</span></span></code></pre>
            </div>
            <p><strong>Training Monitoring</strong></p>
            <ul class="list">
                <li><strong>Loss Curves</strong>: Monitor training and validation loss</li>
                <li><strong>Sample Generation</strong>: Periodic test images during training</li>
                <li><strong>Overfitting Detection</strong>: Watch for degrading validation performance</li>
                <li><strong>Checkpoint Management</strong>: Save intermediate versions</li>
            </ul>
            <h4 id="training-best-practices">Training Best Practices</h4>
            <p><strong>Avoiding Common Pitfalls</strong></p>
            <ol type="1">
                <li><strong>Overfitting</strong>: Too many epochs or too small dataset</li>
                <li><strong>Underfitting</strong>: Too few epochs or too low learning rate</li>
                <li><strong>Dataset Bias</strong>: Limited diversity in training images</li>
                <li><strong>Caption Inconsistency</strong>: Varying description styles</li>
            </ol>
            <p><strong>Quality Control Measures</strong></p>
            <ul class="list">
                <li><strong>Validation Split</strong>: Hold out 20% of data for testing</li>
                <li><strong>Regular Testing</strong>: Generate test images throughout training</li>
                <li><strong>Multiple Checkpoints</strong>: Save versions at different epochs</li>
                <li><strong>Community Feedback</strong>: Share early versions for input</li>
            </ul>
            <h3 id="part-4-advanced-lora-techniques">Part 4: Advanced LoRA Techniques</h3>
            <p><em>35 minutes</em></p>
            <h4 id="lora-combination-strategies">LoRA Combination Strategies</h4>
            <h5 id="multiple-lora-usage">Multiple LoRA Usage</h5>
            <ul class="list">
                <li><strong>Complementary Combinations</strong>: Style + character + quality enhancement</li>
                <li><strong>Strength Balancing</strong>: Adjust individual LoRA strengths for harmony</li>
                <li><strong>Conflict Resolution</strong>: Handle competing or contradictory LoRAs</li>
                <li><strong>Performance optimisation</strong>: Minimize computational overhead</li>
            </ul>
            <h5 id="advanced-combination-examples">Advanced Combination Examples</h5>
            <p><strong>Complex Portrait:</strong></p>
            <pre><code>Professional headshot &lt;lora:photography_style:0.9&gt; &lt;lora:detailed_skin:0.7&gt; &lt;lora:professional_lighting:0.5&gt;</code></pre>
            <p>Artistic Character:</p>
            <pre><code>Fantasy character illustration &lt;lora:consistent_character:1.0&gt; &lt;lora:fantasy_art_style:0.8&gt; &lt;lora:magical_effects:0.6&gt;</code></pre>
            <p><strong>Product Photography:</strong></p>
            <pre><code>Product showcase &lt;lora:studio_photography:0.9&gt; &lt;lora:product_focus:0.8&gt; &lt;lora:commercial_quality:0.7&gt;</code></pre>
            <h4 id="specialised-lora-applications">specialised LoRA Applications</h4>
            <p><strong>Character Consistency Projects</strong></p>
            <ul class="list">
                <li><strong>Multi-angle Training</strong>: Train on various character viewpoints</li>
                <li><strong>Expression Variation</strong>: Include different emotional states</li>
                <li><strong>Outfit/Context Variation</strong>: Same character, different scenarios</li>
                <li><strong>Trigger Word Strategy</strong>: Unique activation phrases for each character</li>
            </ul>
            <p><strong>Brand and Corporate LoRAs</strong></p>
            <ul class="list">
                <li><strong>Logo Integration</strong>: Consistent brand element inclusion</li>
                <li><strong>Color Palette Control</strong>: Brand-specific color schemes</li>
                <li><strong>Style Guidelines</strong>: Corporate aesthetic enforcement</li>
                <li><strong>Product Consistency</strong>: Uniform product presentation</li>
            </ul>
            <p><strong>Artistic Style Transfer</strong></p>
            <ul class="list">
                <li><strong>Artist Emulation</strong>: Capturing specific artistic techniques</li>
                <li><strong>Period Accuracy</strong>: Historical art movement reproduction</li>
                <li><strong>Medium Simulation</strong>: Traditional art media in digital form</li>
                <li><strong>Cultural Aesthetics</strong>: Region-specific artistic traditions</li>
            </ul>
            <h4 id="lora-optimisation-and-performance">LoRA optimisation and Performance</h4>
            <p><strong>File Size optimisation</strong></p>
            <ul class="list">
                <li><strong>Rank Selection</strong>: Balance between quality and file size</li>
                <li><strong>Pruning Techniques</strong>: Remove unnecessary weights</li>
                <li><strong>Compression Methods</strong>: Efficient storage formats</li>
                <li><strong>Version Management</strong>: Organize multiple LoRA iterations</li>
            </ul>
            <p><strong>Generation Speed optimisation</strong></p>
            <ul class="list">
                <li><strong>LoRA Caching</strong>: Preload frequently used LoRAs</li>
                <li><strong>Batch Processing</strong>: Efficient multiple image generation</li>
                <li><strong>Memory Management</strong>: Optimize VRAM usage with multiple LoRAs</li>
                <li><strong>Hardware Scaling</strong>: Utilise available computational resources</li>
            </ul>
            <h3 id="part-5-professional-lora-workflows">Part 5: Professional LoRA Workflows</h3>
            <p><em>25 minutes</em></p>
            <h4 id="client-project-applications">Client Project Applications</h4>
            <p><strong>Custom Style Development</strong></p>
            <ul class="list">
                <li><strong>Client Consultation</strong>: Understanding style requirements</li>
                <li><strong>Reference Collection</strong>: Gathering appropriate training materials</li>
                <li><strong>Iterative Development</strong>: Client feedback integration</li>
                <li><strong>Final Delivery</strong>: LoRA package with documentation</li>
            </ul>
            <p><strong>Brand Asset Creation</strong></p>
            <ul class="list">
                <li><strong>Corporate Identity</strong>: Consistent visual brand elements</li>
                <li><strong>Marketing Materials</strong>: Brand-appropriate image generation</li>
                <li><strong>Product Visualisation</strong>: Consistent product presentation</li>
                <li><strong>Social Media Content</strong>: Brand-aligned social content</li>
            </ul>
            <h4 id="lora-business-considerations">LoRA Business Considerations</h4>
            <p><strong>Intellectual Property</strong></p>
            <ul class="list">
                <li><strong>Training Data Rights</strong>: Ensure legal rights to training images</li>
                <li><strong>Client Ownership</strong>: Clear agreements on LoRA ownership</li>
                <li><strong>Distribution Rights</strong>: Commercial vs. personal use licensing</li>
                <li><strong>Attribution Requirements</strong>: Credit and acknowledgement protocols</li>
            </ul>
            <p><strong>Pricing and Service Models</strong></p>
            <ul class="list">
                <li><strong>Custom LoRA Development</strong>: Project-based pricing</li>
                <li><strong>LoRA Licensing</strong>: Subscription or usage-based models</li>
                <li><strong>Training Services</strong>: Education and consultation offerings</li>
                <li><strong>Maintenance and Updates</strong>: Ongoing LoRA improvement services</li>
            </ul>
            <p><strong>Quality Assurance Protocols</strong></p>
            <ul class="list">
                <li><strong>Testing Standards</strong>: Comprehensive validation procedures</li>
                <li><strong>Client Approval Process</strong>: Structured feedback and revision cycles</li>
                <li><strong>Documentation Delivery</strong>: Complete usage guides and examples</li>
                <li><strong>Support Services</strong>: Ongoing technical assistance</li>
            </ul>
            <h3 id="part-6-hands-on-lora-project">Part 6: Hands-On LoRA Project</h3>
            <p><em>35 minutes</em></p>
            <h4 id="guided-lora-creation-exercise">Guided LoRA Creation Exercise</h4>
            <p><strong>Project Brief</strong>: Create a simple style LoRA</p>
            <ul class="list">
                <li><strong>Objective</strong>: Train a LoRA for a specific artistic style</li>
                <li><strong>Scope</strong>: 15-20 training images, 500-1000 training steps</li>
                <li><strong>Timeline</strong>: 30 minutes training, 5 minutes testing</li>
            </ul>
            <p><strong>Step-by-Step Process</strong></p>
            <ol type="1">
                <li><strong>Dataset Preparation</strong></li>
            </ol>
            <p><em>10 minutes</em></p>
            <ul class="list">
                <li>Select 15-20 consistent style images</li>
                <li>Write appropriate captions</li>
                <li>Organize file structure</li>
            </ul>
            <ol start="2" type="1">
                <li><strong>Training Configuration</strong></li>
            </ol>
            <p><em>5 minutes</em></p>
            <ul class="list">
                <li>Set basic training parameters</li>
                <li>Configure output directory</li>
                <li>Verify settings</li>
            </ul>
            <ol start="3" type="1">
                <li><strong>Training Execution</strong></li>
            </ol>
            <p><em>15 minutes</em></p>
            <ul class="list">
                <li>Start training process</li>
                <li>Monitor progress</li>
                <li>Address any issues</li>
            </ul>
            <ol start="4" type="1">
                <li><strong>Testing and Validation</strong></li>
            </ol>
            <p><em>5 minutes</em></p>
            <ul class="list">
                <li>Generate test images with new LoRA</li>
                <li>Compare to target style</li>
                <li>Assess success and areas for improvement</li>
            </ul>
            <h4 id="individual-consultation">Individual Consultation</h4>
            <p><strong>Personal Project Planning</strong></p>
            <ul class="list">
                <li>One-on-one discussion of individual LoRA ideas</li>
                <li>Technical feasibility assessment</li>
                <li>Resource requirement planning</li>
                <li>Timeline and milestone setting</li>
            </ul>
            <h3 id="wrap-up-and-course-conclusion">Wrap-up and Course Conclusion</h3>
            <p><em>10 minutes</em></p>
            <h4 id="lora-mastery-summary">LoRA Mastery Summary</h4>
            <p><strong>Key Concepts Mastered</strong>:</p>
            <ul class="list">
                <li>Understanding LoRA technology and its applications</li>
                <li>Finding and implementing existing LoRAs effectively</li>
                <li>Planning and executing custom LoRA training projects</li>
                <li>Advanced combination techniques and optimisation strategies</li>
                <li>Professional workflow integration and business applications</li>
            </ul>
            <h4 id="complete-course-achievement">Complete Course Achievement</h4>
            <p><strong>Full Course Mastery Checklist</strong>:</p>
            <ul class="list">
                <li><fa :icon="['far', 'square-check']" class="text-green-500 text-lg" /> FLUX fundamentals and basic prompting</li>
                <li><fa :icon="['far', 'square-check']" class="text-green-500 text-lg" /> Technical understanding and optimisation</li>
                <li><fa :icon="['far', 'square-check']" class="text-green-500 text-lg" /> Advanced prompting and artistic control</li>
                <li><fa :icon="['far', 'square-check']" class="text-green-500 text-lg" /> LoRA technology and model customization</li>
            </ul>
            <p><strong>Professional Readiness Indicators</strong>:</p>
            <ul class="list">
                <li>Ability to create consistent, high-quality images</li>
                <li>Understanding of technical parameters and optimisation</li>
                <li>Mastery of advanced prompting techniques</li>
                <li>Capability to customise models for specific needs</li>
            </ul>
            <h4 id="next-steps-and-continued-learning">Next Steps and Continued Learning</h4>
            <p><strong>Advanced Development Paths</strong>:</p>
            <ul class="list">
                <li><strong>LoRA Specialisation</strong>: Focus on specific LoRA applications</li>
                <li><strong>Training optimisation</strong>: Advanced training techniques and efficiency</li>
                <li><strong>Commercial Applications</strong>: Client services and business development</li>
                <li><strong>Community Contribution</strong>: Sharing knowledge and resources</li>
            </ul>
            <p><strong>Ongoing Learning Resources</strong>:</p>
            <ul class="list">
                <li>Advanced LoRA training workshops</li>
                <li>Technical paper reviews and implementation</li>
                <li>Community forums and collaboration opportunities</li>
                <li>Industry trend monitoring and adaptation</li>
            </ul>
            <h2 id="final-course-project-complete-ai-art-solution">Final Course Project: Complete AI Art Solution</h2>
            <p><strong>Capstone Project Requirements</strong>:</p>
            <ol type="1">
                <li><strong>Custom LoRA Creation</strong>: Train a LoRA for specific style or subject</li>
                <li><strong>Professional Image Series</strong>: 6-image portfolio using custom LoRA</li>
                <li><strong>Technical Documentation</strong>: Complete training and usage documentation</li>
                <li><strong>Business Application</strong>: Proposal for commercial use of developed LoRA</li>
            </ol>
            <p><strong>Deliverables</strong>:</p>
            <ul class="list">
                <li>Functional custom LoRA with documentation</li>
                <li>Professional image portfolio demonstrating LoRA effectiveness</li>
                <li>Training dataset and process documentation</li>
                <li>Business plan or client proposal for LoRA application</li>
            </ul>
            <h2 id="advanced-resources">Advanced Resources</h2>
            <p><strong>LoRA Training Tools</strong>:</p>
            <ul class="list">
                <li>Kohya_ss trainer with GUI interface</li>
                <li>Auto1111 training extensions and add-ons</li>
                <li>Cloud-based training services and platforms</li>
                <li>Performance monitoring and optimisation tools</li>
            </ul>
            <p><strong>Community and Support</strong>:</p>
            <ul class="list">
                <li>LoRA development communities and forums</li>
                <li>Technical support channels and documentation</li>
                <li>Collaboration platforms for dataset sharing</li>
                <li>Professional networking and business opportunities</li>
            </ul>
            <h2 id="instructor-final-notes">Instructor Final Notes</h2>
            <p><strong>Course Completion Assessment</strong>:</p>
            <ul class="list">
                <li>Evaluate final projects against professional standards</li>
                <li>Provide comprehensive feedback on technical and creative aspects</li>
                <li>Identify areas for continued development and Specialisation</li>
                <li>Recognize achievement and progress throughout the complete course</li>
            </ul>
            <p><strong>Advanced Opportunities</strong>:</p>
            <ul class="list">
                <li>Recommend participants for advanced workshops or mentorship</li>
                <li>Facilitate professional networking and collaboration opportunities</li>
                <li>Provide ongoing support for business development</li>
                <li>Create pathways for community contribution and leadership roles</li>
            </ul>
            <p><strong>Course Evolution</strong>:</p>
            <ul class="list">
                <li>Document effective teaching strategies and student feedback</li>
                <li>Plan updates based on technology developments</li>
                <li>Develop advanced course modules based on participant interest</li>
                <li>Establish ongoing education and support programs</li>
            </ul>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Progress from './Progress.vue';
</script>
