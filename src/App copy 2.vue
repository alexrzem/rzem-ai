<template>
    <div class="min-h-screen w-full bg-zinc-950 text-zinc-50">
        <header class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 bg-zinc-950/80 border-b border-zinc-800">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <div class="flex items-center gap-2">
                    <div class="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400" />
                    <span class="font-semibold tracking-tight">rzem.ai</span>
                    <span class="hidden sm:inline text-xs text-zinc-400 ml-2">FLUX.1 Learning Hub</span>
                </div>
                <nav class="hidden md:flex items-center gap-6 text-sm text-zinc-300">
                    <a class="hover:text-white transition" href="#">Guides</a>
                    <a class="hover:text-white transition" href="#">Prompt Library</a>
                    <a class="hover:text-white transition" href="#">Workflows</a>
                    <a class="hover:text-white transition" href="#">Benchmarks</a>
                    <a class="hover:text-white transition" href="#">News</a>
                </nav>
                <div class="flex items-center gap-3"> </div>
            </div>
        </header>

        <main>
            <section class="relative overflow-hidden border-b border-zinc-800">
                <div class="absolute inset-0 opacity-30">
                    <div class="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-fuchsia-500 blur-3xl" />
                    <div class="absolute -bottom-24 -left-10 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
                </div>
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative">
					<h1 class="text-4xl sm:text-6xl font-black tracking-tight" style="opacity: 1; transform: none;">Master <span class="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">FLUX.1</span> faster.</h1>
                    <h1 class="text-4xl sm:text-6xl font-black tracking-tight"> Master <span class="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">FLUX.1</span> faster. </h1>
                    <p class="mt-4 text-lg text-zinc-300 max-w-2xl"> Hands-on tutorials, prompt recipes, and pro workflows for serious creators. No fluff. Just results. </p>
                    <div class="mt-8 flex flex-col sm:flex-row gap-3">
                        <a href="#" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-zinc-900 font-semibold"> <Rocket class="h-4 w-4" /> Start Learning </a>
                        <a href="#" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 text-zinc-200 hover:bg-zinc-900"> <Layers class="h-4 w-4" /> Browse Prompt Library </a>
                    </div>
                    <div class="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-zinc-300">
                        {[ { icon: <Video class="h-4 w-4" />, label: "Video Walkthroughs" }, { icon: <BookOpen class="h-4 w-4" />, label: "Step-by-step Guides" }, { icon: <FlaskConical class="h-4 w-4" />, label: "Experiments & Benchmarks"
                        }, { icon: <Palette class="h-4 w-4" />, label: "Style Recipes" }, ].map((item, i) => (
                        <div key="{i}" class="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2">
                            {item.icon}
                            <span>{item.label}</span>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
                <div class="flex items-end justify-between gap-4">
                    <h2 class="text-2xl sm:text-3xl font-bold">Featured this week</h2>
                    <a href="#" class="text-sm text-zinc-300 hover:text-white">See all</a>
                </div>
                <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[ { title: "From Zero to First Render", desc: "Install, set up, and generate your first image with FLUX.1 in 20 minutes.", tag: "Beginner", }, { title: "Prompt Engineering: Contrast & Coherence", desc: "A repeatable
                    framework for prompts that survive model quirks.", tag: "Intermediate", }, { title: "Node Graphs that Ship", desc: "Build reliable pipelines in ComfyUI with versioned presets.", tag: "Advanced", }, ].map((card, i) => (
                    <a class="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
                        <div class="flex items-center gap-2 text-xs text-fuchsia-300/90"> <Sparkles class="h-4 w-4" /> {card.tag} </div>
                        <h3 class="mt-3 text-xl font-semibold group-hover:underline underline-offset-4"> {card.title} </h3>
                        <p class="mt-2 text-zinc-300 text-sm">{card.desc}</p>
                        <div class="mt-6 inline-flex items-center text-sm text-cyan-300"> Read guide <ArrowRight class="h-4 w-4 ml-1" /> </div>
                        <div class="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
                    </a>
                    ))}
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
                        {[ { name: "Synthwave City Poster", tokens: "Short, stylized, neon" }, { name: "Photoreal Portrait Rig", tokens: "Camera, lens, light" }, { name: "Blueprint Diagrammer", tokens: "Line art + HUD" }, { name: "Brand
                        Pack Generator", tokens: "Palette + grid" }, ].map((p, i) => (
                        <a key="{i}" href="#" class="block rounded-xl border border-zinc-800 p-4 hover:bg-zinc-900/60">
                            <div class="flex items-center gap-2 text-zinc-300 text-sm">
                                <Code class="h-4 w-4" />
                                <span class="font-medium text-zinc-100">{p.name}</span>
                            </div>
                            <p class="mt-1 text-xs text-zinc-400">Tokens: {p.tokens}</p>
                        </a>
                        ))}
                    </div>
                </div>
            </section>

            <!-- TOOLKIT & BENCHMARKS -->
            <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2">
                        <h3 class="text-2xl font-bold">Workflows & Toolkit</h3>
                        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[ { title: "ComfyUI Node Graphs", desc: "Reusable graphs for text→image, img→img, and upscaling pipelines.", }, { title: "Preset Manager", desc: "Versioned prompt presets for styles, lighting, and color
                            science.", }, { title: "Quality Benchmarks", desc: "A/B suites for prompt stability, sharpness, and color discipline.", }, { title: "Server Setup", desc: "Self-host FLUX.1 with GPU sizing and cost controls.", },
                            ].map((item, i) => (
                            <div key="{i}" class="rounded-xl border border-zinc-800 p-5 bg-zinc-900/30">
                                <div class="flex items-center gap-2 text-zinc-300 text-sm">
                                    <Cpu class="h-4 w-4" />
                                    <span class="font-semibold text-zinc-100">{item.title}</span>
                                </div>
                                <p class="mt-2 text-sm text-zinc-400">{item.desc}</p>
                                <a href="#" class="mt-4 inline-flex items-center text-sm text-cyan-300">Open <ArrowRight class="h-4 w-4 ml-1" /></a>
                            </div>
                            ))}
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
        </main>

        <footer class="border-t border-zinc-800/80 py-10">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-sm">
                <p>© 2025 rzem.ai — FLUX.1 learning resources</p>
                <div class="flex items-center gap-4">
                    <a href="#" class="hover:text-white">Contact</a>
                    <a href="#" class="hover:text-white">RSS</a>
                    <a href="#" class="hover:text-white">Privacy</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue';

const navigation = [
    {name: 'Home', to: 'home', hidden: false},
    {name: 'Flux 101', to: 'flux101', hidden: false},
    {name: 'Flux 201', to: 'flux201', hidden: true},
    {name: 'Guides', to: 'guides', hidden: false},
    {name: 'Style Reference', to: 'styleReferences', hidden: false},
];
</script>
