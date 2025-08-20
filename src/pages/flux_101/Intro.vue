<template>
    <header class="relative bg-zinc-100 shadow-sm">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">FLUX Image Generation Course Overview</h1>
            <p><em>A 4-Session Course for Beginners</em></p>
        </div>
    </header>
    <main>
        <Progress :step="0" />

        <div class="content">
            <h2 id="course-description">Course Description</h2>
            <p>
                This comprehensive course introduces hobbyists and students to FLUX.1 [dev] and FLUX.1 [pro], the cutting-edge AI image generation models by Black Forest Labs.
                Participants will learn the fundamental technologies, terminology, advanced prompting techniques, and model customisation through LoRAs needed to create stunning
                AI-generated images.
            </p>
            <h2 id="target-audience">Target Audience</h2>
            <ul class="list">
                <li>
                    <strong>Hobbyists</strong>
                    interested in AI art creation
                </li>
                <li>
                    <strong>Students</strong>
                    studying digital art, AI, or related fields
                </li>
                <li>
                    <strong>Beginners</strong>
                    with little to no experience in AI image generation
                </li>
                <li>
                    <strong>Creative professionals</strong>
                    looking to integrate AI tools into their workflow
                </li>
            </ul>
            <h2 id="prerequisites">Prerequisites</h2>
            <ul>
                <li>Basic computer literacy</li>
                <li>Interest in digital art and AI technology</li>
                <li>No prior AI or machine learning experience required</li>
            </ul>
            <h2 id="course-learning-objectives">Course Learning Objectives</h2>
            <p>
                By the end of this course, participants will be able to: 1. Understand the core technologies behind FLUX.1 models 2. Navigate FLUX terminology and concepts
                confidently 3. Craft effective prompts for various image generation scenarios 4. Distinguish between FLUX.1 [dev] and FLUX.1 [pro] capabilities 5. Apply advanced
                prompting techniques for professional results 6. Understand and utilise LoRAs for model customisation 7. Create custom LoRAs for specific styles or subjects 8.
                Troubleshoot common issues in image generation
            </p>

            <h2 id="course-structure">Course Structure</h2>

            <h3 id="session-1-foundation-introduction-2-hours">Session 1: Foundation &amp; Introduction</h3>
            <p><em>2 hours</em></p>
            <p>
                <strong>“Getting Started with FLUX”</strong>
                - Overview of AI image generation landscape - Introduction to FLUX.1 [dev] and [pro] - Core terminology and concepts - Basic prompting principles - Hands-on: First
                image generation
            </p>

            <h3 id="session-2-advanced-prompting-mastery-2.5-hours">Session 2: Advanced Prompting Mastery</h3>
            <p><em>2.5 hours</em></p>
            <p>
                <strong>“Crafting Professional Prompts”</strong>
                - Advanced prompting strategies - Style control and artistic direction - Composition and lighting techniques - Troubleshooting and refinement - Hands-on: Portfolio
                development
            </p>

            <h3 id="session-3-technical-deep-dive-2.5-hours">Session 3: Technical Deep Dive</h3>
            <p><em>2.5 hours</em></p>
            <p>
                <strong>“Understanding the Technology”</strong>
                - FLUX architecture and training methodology - Diffusion models explained - Model parameters and settings - Hardware requirements and optimisation - Hands-on:
                Parameter experimentation
            </p>

            <h3 id="session-4-lora-mastery-model-customisation-3-hours">Session 4: LoRA Mastery &amp; Model Customisation</h3>
            <p><em>3 hours</em></p>
            <p>
                <strong>“Customising FLUX with LoRAs”</strong>
                - Understanding LoRA technology - Finding and implementing existing LoRAs - Training custom LoRAs for specific needs - Advanced LoRA techniques and combinations -
                Hands-on: Create and deploy custom LoRA
            </p>

            <h2 id="required-materials">Required Materials</h2>
            <ul class="list">
                <li>Computer with internet access</li>
                <li>FLUX.1 access (account setup will be covered)</li>
                <li>Note-taking materials</li>
                <li>Optional: Reference images for inspiration</li>
            </ul>
            <h2 id="assessment-certification">Assessment &amp; Certification</h2>
            <ul class="list">
                <li>Hands-on exercises in each session</li>
                <li>Final project: Create a cohesive image series</li>
                <li>Participation certificate upon completion</li>
            </ul>
            <h2 id="course-resources">Course Resources</h2>
            <ul class="list">
                <li>Comprehensive handouts for each session</li>
                <li>Prompt templates and examples</li>
                <li>Troubleshooting guide</li>
                <li>Community forum access for ongoing support</li>
            </ul>
            <h2 id="instructor-notes">Instructor Notes</h2>
            <ul class="list">
                <li>Encourage experimentation and creativity</li>
                <li>Provide immediate feedback during hands-on sessions</li>
                <li>Adapt pace based on participant understanding</li>
                <li>Foster collaborative learning environment</li>
            </ul>
            <h2 id="follow-up-opportunities">Follow-up Opportunities</h2>
            <ul class="list">
                <li>Advanced FLUX techniques workshop</li>
                <li>Integration with other AI tools course</li>
                <li>Community showcase events</li>
                <li>One-on-one mentoring sessions</li>
            </ul>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Progress from './Progress.vue';
</script>
