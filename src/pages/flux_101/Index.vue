<template>
    <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-fuchsia-500 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <nav className="text-xs text-zinc-400 flex items-center gap-2">
                <a className="hover:text-zinc-200 flex items-center gap-1" href="#"><fa :icon="['far', 'home']" class="h-4 w-4" /> Home</a>
                <span>/</span>
                <a className="hover:text-zinc-200" href="#">FLUX 101</a>
                <span>/</span>
                <span className="text-zinc-300">Lesson 1</span>
            </nav>
            <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight"> FLUX 101 · Lesson 1 — Your First Render </h1>
            <p className="mt-3 text-zinc-300 max-w-2xl"> Install, configure, and generate your first image with FLUX.1. We’ll set up the environment, walk through a minimal prompt, and export results reproducibly. </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900/60 border border-zinc-800 px-3 py-1"><fa :icon="['far', 'clock']" class="h-4 w-4" /> 20-30 min</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900/60 border border-zinc-800 px-3 py-1"><fa :icon="['far', 'flame']" class="h-4 w-4" /> Beginner</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900/60 border border-zinc-800 px-3 py-1"><fa :icon="['far', 'book-open']" class="h-4 w-4" /> FLUX 101</span>
            </div>
        </div>
    </section>

    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
                    <h4 className="text-sm font-semibold mb-3">Lesson Outline</h4>
                    <ol className="space-y-2 text-sm text-zinc-300"> 
                        <li><a href="#req" className="hover:text-white"><fa :icon="['far', 'thumbtack']" class="h-4 w-4" /> Requirements</a></li>
                        <li><a href="#setup" className="hover:text-white"><fa :icon="['far', 'thumbtack']" class="h-4 w-4" /> Setup</a></li>
                        <li><a href="#first-prompt" className="hover:text-white"><fa :icon="['far', 'thumbtack']" class="h-4 w-4" /> Your First Prompt</a></li>
                        <li><a href="#render" className="hover:text-white"><fa :icon="['far', 'thumbtack']" class="h-4 w-4" /> Render & Export</a></li>
                        <li><a href="#troubleshoot" className="hover:text-white"><fa :icon="['far', 'thumbtack']" class="h-4 w-4" /> Troubleshooting</a></li>
                        <li><a href="#next" className="hover:text-white"><fa :icon="['far', 'thumbtack']" class="h-4 w-4" /> Next Lesson</a></li>
                    </ol>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
                    <h4 className="text-sm font-semibold mb-3">Downloads</h4>
                    <ul className="space-y-2 text-sm text-zinc-300">
                        <li className="flex items-center gap-2"><fa :icon="['far', 'download']" class="h-4 w-4" /> Starter Preset (.json)</li>
                        <li className="flex items-center gap-2"><fa :icon="['far', 'download']" class="h-4 w-4" /> ComfyUI Graph (.json)</li>
                        <li className="flex items-center gap-2"><fa :icon="['far', 'download']" class="h-4 w-4" /> LUT Pack (.cube)</li>
                    </ul>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
                    <h4 className="text-sm font-semibold mb-3">Resources</h4>
                    <ul className="space-y-2 text-sm text-zinc-300">
                        <li className="flex items-center gap-2"><fa :icon="['far', 'link']" class="h-4 w-4" /> FLUX.1 Docs</li>
                        <li className="flex items-center gap-2"><fa :icon="['far', 'link']" class="h-4 w-4" /> ComfyUI Quickstart</li>
                    </ul>
                </div>
            </div>
        </aside>
    </main>
</template>

<script setup>
import {ref} from 'vue';

const steps = [
    {id: '00', name: 'Introduction', description: 'Overview', to: 'flux101Intro', status: 'current'},
    {id: '01', name: 'Lesson 1', description: 'Foundation', to: 'flux101Lesson1', status: 'upcoming'},
    {id: '02', name: 'Lesson 2', description: 'FLUX Technology', to: 'flux101Lesson2', status: 'upcoming'},
    {id: '03', name: 'Lesson 3', description: 'Prompting Mastery', to: 'flux101Lesson3', status: 'upcoming'},
    {id: '04', name: 'Lesson 4', description: 'LoRAs', to: 'flux101Lesson4', status: 'upcoming'},
];
</script>
