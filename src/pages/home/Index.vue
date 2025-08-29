<template>
    <section class="relative overflow-hidden border-b border-zinc-800">
        <div class="absolute inset-0 opacity-30">
            <div class="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-fuchsia-500 blur-3xl" />
            <div class="absolute -bottom-24 -left-10 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative">
            <h1 class="!text-6xl sm:text-6xl !text-white">Master <span class="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">FLUX.1</span> faster.</h1>
            <p class="mt-4 text-lg text-zinc-300 max-w-2xl"> Hands-on tutorials, prompt recipes, and pro workflows for serious creators. No fluff. Just results. </p>
            <div class="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-zinc-900 font-semibold"> <fa :icon="['far', 'rocket']" class="h-4 w-4" /> Start Learning </a>
                <a href="#" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-900"> <fa :icon="['far', 'layer-group']" class="h-4 w-4" /> Browse Prompt Library </a>
            </div>
            <div class="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-zinc-300">
                <div class="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2">
                    <fa :icon="['far', 'video']" class="h-4 w-4" />
                    <span>Video Walkthroughs</span>
                </div>

                <div class="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2">
                    <fa :icon="['far', 'book-open']" class="h-4 w-4" />
                    <span>Step-by-step Guides</span>
                </div>

                <div class="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2">
                    <fa :icon="['far', 'flask']" class="h-4 w-4" />
                    <span>Experiments & Benchmarks</span>
                </div>

                <div class="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2">
                    <fa :icon="['far', 'palette']" class="h-4 w-4" />
                    <span>Style Recipes</span>
                </div>
            </div>
        </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div class="flex items-end justify-between gap-4">
            <h2 class="text-2xl sm:text-3xl font-bold">Featured this week</h2>
            <a href="#" class="text-sm text-zinc-300 hover:text-white">See all</a>
        </div>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <a class="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
                <div class="flex items-center gap-2 text-xs text-fuchsia-300/90"> <fa :icon="['far', 'sparkles']" class="h-4 w-4" /> Beginner</div>
                <h3 class="mt-3 text-xl font-semibold group-hover:underline underline-offset-4">From Zero to First Render</h3>
                <p class="mt-2 text-zinc-300 text-sm">Install, set up, and generate your first image with FLUX.1 in 20 minutes.</p>
                <div class="mt-6 inline-flex items-center text-sm text-cyan-300"> Read guide <fa :icon="['far', 'arrow-right']" class="h-4 w-4 ml-1" /></div>
                <div class="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
            </a>

            <a class="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
                <div class="flex items-center gap-2 text-xs text-fuchsia-300/90"> <fa :icon="['far', 'sparkles']" class="h-4 w-4" /> Beginner</div>
                <h3 class="mt-3 text-xl font-semibold group-hover:underline underline-offset-4">From Zero to First Render</h3>
                <p class="mt-2 text-zinc-300 text-sm">Install, set up, and generate your first image with FLUX.1 in 20 minutes.</p>
                <div class="mt-6 inline-flex items-center text-sm text-cyan-300"> Read guide <fa :icon="['far', 'arrow-right']" class="h-4 w-4 ml-1" /></div>
                <div class="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
            </a>

            <a class="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
                <div class="flex items-center gap-2 text-xs text-fuchsia-300/90"> <fa :icon="['far', 'sparkles']" class="h-4 w-4" /> Beginner</div>
                <h3 class="mt-3 text-xl font-semibold group-hover:underline underline-offset-4">From Zero to First Render</h3>
                <p class="mt-2 text-zinc-300 text-sm">Install, set up, and generate your first image with FLUX.1 in 20 minutes.</p>
                <div class="mt-6 inline-flex items-center text-sm text-cyan-300"> Read guide <fa :icon="['far', 'arrow-right']" class="h-4 w-4 ml-1" /></div>
                <div class="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
            </a>
        </div>
    </section>

    <!-- PROMPT LIBRARY STRIP -->
    <section class="border-y border-zinc-800/80 bg-zinc-900/30">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div class="flex items-center justify-between gap-4 flex-wrap">
                <h3 class="text-xl font-semibold">Prompt Library</h3>
                <a href="#" class="text-sm text-zinc-300 hover:text-white">Browse all prompts</a>
            </div>
            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <a href="#" class="block rounded-xl border border-zinc-800 p-4 hover:bg-zinc-900/60">
                    <div class="flex items-center gap-2 text-zinc-300 text-sm">
                        <fa :icon="['far', 'code']" class="h-4 w-4" />
                        <span class="font-medium text-zinc-100">Synthwave City Poster</span>
                    </div>
                    <p class="mt-1 text-xs text-zinc-400">Tokens: Short, stylized, neon</p>
                </a>
                <a href="#" class="block rounded-xl border border-zinc-800 p-4 hover:bg-zinc-900/60">
                    <div class="flex items-center gap-2 text-zinc-300 text-sm">
                        <fa :icon="['far', 'code']" class="h-4 w-4" />
                        <span class="font-medium text-zinc-100">Photoreal Portrait Rig</span>
                    </div>
                    <p class="mt-1 text-xs text-zinc-400">Tokens: Camera, lens, light</p>
                </a>
                <a href="#" class="block rounded-xl border border-zinc-800 p-4 hover:bg-zinc-900/60">
                    <div class="flex items-center gap-2 text-zinc-300 text-sm">
                        <fa :icon="['far', 'code']" class="h-4 w-4" />
                        <span class="font-medium text-zinc-100">Blueprint Diagrammer</span>
                    </div>
                    <p class="mt-1 text-xs text-zinc-400">Tokens: Line art + HUD</p>
                </a>
                <a href="#" class="block rounded-xl border border-zinc-800 p-4 hover:bg-zinc-900/60">
                    <div class="flex items-center gap-2 text-zinc-300 text-sm">
                        <fa :icon="['far', 'code']" class="h-4 w-4" />
                        <span class="font-medium text-zinc-100">Brand Pack Generator</span>
                    </div>
                    <p class="mt-1 text-xs text-zinc-400">Tokens: Palette + grid</p>
                </a>
            </div>
        </div>
    </section>

    <!-- TOOLKIT & BENCHMARKS -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2">
                <h3 class="text-2xl font-bold">Workflows & Toolkit</h3>
                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="rounded-xl border border-zinc-800 p-5 bg-zinc-900/30">
                        <div class="flex items-center gap-2 text-zinc-300 text-sm">
                            <fa :icon="['far', 'microchip']" class="h-4 w-4" />
                            <span class="font-semibold text-zinc-100">ComfyUI Node Graphs</span>
                        </div>
                        <p class="mt-2 text-sm text-zinc-400">Reusable graphs for text→image, img→img, and upscaling pipelines.</p>
                        <a href="#" class="mt-4 inline-flex items-center text-sm text-cyan-300">Open <fa :icon="['far', 'arrow-right']" class="h-4 w-4 ml-1" /></a>
                    </div>

                    <div class="rounded-xl border border-zinc-800 p-5 bg-zinc-900/30">
                        <div class="flex items-center gap-2 text-zinc-300 text-sm">
                            <fa :icon="['far', 'microchip']" class="h-4 w-4" />
                            <span class="font-semibold text-zinc-100">Preset Manager</span>
                        </div>
                        <p class="mt-2 text-sm text-zinc-400">Versioned prompt presets for styles, lighting, and color science.</p>
                        <a href="#" class="mt-4 inline-flex items-center text-sm text-cyan-300">Open <fa :icon="['far', 'arrow-right']" class="h-4 w-4 ml-1" /></a>
                    </div>

                    <div class="rounded-xl border border-zinc-800 p-5 bg-zinc-900/30">
                        <div class="flex items-center gap-2 text-zinc-300 text-sm">
                            <fa :icon="['far', 'microchip']" class="h-4 w-4" />
                            <span class="font-semibold text-zinc-100">Quality Benchmarks</span>
                        </div>
                        <p class="mt-2 text-sm text-zinc-400">A/B suites for prompt stability, sharpness, and color discipline.</p>
                        <a href="#" class="mt-4 inline-flex items-center text-sm text-cyan-300">Open <fa :icon="['far', 'arrow-right']" class="h-4 w-4 ml-1" /></a>
                    </div>

                    <div class="rounded-xl border border-zinc-800 p-5 bg-zinc-900/30">
                        <div class="flex items-center gap-2 text-zinc-300 text-sm">
                            <fa :icon="['far', 'microchip']" class="h-4 w-4" />
                            <span class="font-semibold text-zinc-100">Server Setup</span>
                        </div>
                        <p class="mt-2 text-sm text-zinc-400">Self-host FLUX.1 with GPU sizing and cost controls.</p>
                        <a href="#" class="mt-4 inline-flex items-center text-sm text-cyan-300">Open <fa :icon="['far', 'arrow-right']" class="h-4 w-4 ml-1" /></a>
                    </div>
                </div>
            </div>
            <aside class="lg:col-span-1">
                <div class="rounded-2xl border border-zinc-800 p-6 bg-gradient-to-b from-zinc-900/60 to-zinc-900/20">
                    <h4 class="text-lg font-semibold flex items-center gap-2"><GitBranch class="h-5 w-5" /> Latest Changelog</h4>
                    <ul class="mt-4 space-y-3 text-sm text-zinc-300">
                        <li>• New: FLUX.1 style control cheatsheet</li>
                        <li>• Update: Portrait rig v2 with color LUTs</li>
                        <li>• Fix: ComfyUI batch export bug notes</li>
                    </ul>
                    <a href="#" class="mt-5 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-sm">View all updates <ArrowRight class="h-4 w-4" /></a>
                </div>
            </aside>
        </div>
    </section>
</template>

<script setup>
import {ref} from 'vue';
</script>
