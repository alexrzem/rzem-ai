<template>
    <div class="min-h-screen w-full bg-zinc-950 text-zinc-50">
        <header class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 bg-zinc-950/80 border-b border-zinc-800">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <div class="flex items-center gap-2">
                    <div class="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400" />
                    <RouterLink :to="{name: 'home'}">
                        <span class="font-semibold tracking-tight">rzem.ai</span>
                    </RouterLink>
                    <span class="hidden sm:inline text-xs text-zinc-400 ml-2">FLUX.1 Learning Hub</span>
                </div>
                <nav class="hidden md:flex items-center gap-6 text-sm text-zinc-300">
                    <template v-for="item in navigation">
                        <RouterLink v-if="!item.hidden" :to="{name: item.to}" :key="item.name" class="hover:text-white transition" active-class="text-white" exact-active-class="text-white">
                            {{ item.name }}
                        </RouterLink>
                    </template>
                </nav>
            </div>
        </header>

        <main>
            <RouterView />
        </main>

        <footer class="border-t border-zinc-800/80 py-10">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-sm">
                <p>© 2025 rzem.ai</p>
                <div class="flex items-center gap-4">
                    <a href="#" class="hover:text-white">Contact</a>
                    <a href="#" class="hover:text-white">Privacy</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue';

/**
 * 
 *                     <a class="hover:text-white transition" href="#">Lessons</a>
                    <a class="hover:text-white transition" href="#">Guides</a>
                    <a class="hover:text-white transition" href="#">Prompt Library</a>
                    <a class="hover:text-white transition" href="#">Workflows</a>
                    <a class="hover:text-white transition" href="#">Benchmarks</a>
 */

const navigation = [
    {name: 'Flux 101', to: 'flux101', hidden: false},
    {name: 'Flux 201', to: 'flux201', hidden: true},
    {name: 'Guides', to: 'guides', hidden: false},
	{name: 'Prompt Library', to: 'guides', hidden: false},
    {name: 'Style Reference', to: 'styleReferences', hidden: false},
];
</script>
