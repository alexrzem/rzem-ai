<template>
    <div class="main-wrapper">
        <div class="flex flex-row h-full">
            <div class="flex-shrink p-0 h-full">
                <div class="min-w-18 bg-zinc-800 h-full rounded-2xl p-2 flex flex-col">
                    <RouterLink v-for="menuItem in menuItems" :to="{ name: menuItem.link }" active-class="bg-zinc-900" exact-active-class="bg-zinc-900" class="w-full text-center mb-4 text-sky-100 hover:text-sky-500 hover:bg-zinc-900 rounded-2xl p-2">
                        <fa v-if="menuItem.icon" :icon="menuItem.icon" class="text-4xl" />
                        <div class="text-sm">
                            {{ menuItem.name }}
                        </div>
                    </RouterLink>
                </div>
            </div>
            <div class="flex-shrink bg-zinc-600 h-full w-72 rounded-2xl"> Alex Rzem </div>
            <div class="flex-grow bg-zinc-500 h-full rounded-2xl">
                <router-view/>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import { useLayout } from './composables/useLayout';

const { isDarkMode, toggleDarkMode } = useLayout();

const menuItems = ref([
    { name: 'Home', link: 'home', icon: ['fa-thin', 'fa-passport'] },
    { name: 'Online', link: 'online', icon: ['fa-thin', 'fa-cloud'] },
    { name: 'Desktop', link: 'desktop', icon: ['fa-thin', 'fa-computer-classic'] },
    { name: 'Technology', link: 'tech', icon: ['fa-thin', 'fa-flux-capacitor'] },
    { name: 'Prompts', link: 'prompts', icon: ['fa-thin', 'fa-memo'] },
    { name: 'Portfolio', link: 'portfolio', icon: ['fa-thin', 'fa-image'] },
]);

const items = ref([
    {
        label: 'Home',
        icon: ['fa-duotone', 'fa-passport'],
    },
    {
        label: 'Online',
        icon: ['fa-duotone', 'fa-cloud'],
        items: [
            // {
            //     text: 'ChatGPT',
            //     icon: 'fluent-color:link-24',
            //     link: 'https://sora.chatgpt.com/',
            // },
            // {
            //     text: 'Comfy.icu',
            //     icon: 'fluent-color:link-24',
            //     link: 'https://comfy.icu/',
            // },
            // {
            //     text: 'Dreamina',
            //     icon: 'fluent-color:link-24',
            //     link: 'https://dreamina.capcut.com/ai-tool/image/generate',
            // },

            // {
            //     text: 'fal.ai',
            //     icon: 'fluent-color:link-24',
            //     link: 'https://fal.ai/models',
            // },
            // {
            //     text: 'Image-Fx',
            //     icon: 'fluent-color:link-24',
            //     link: 'https://labs.google/fx/tools/image-fx',
            // },
            // {
            //     text: 'Midjourney',
            //     icon: 'fluent-color:link-24',
            //     link: 'https://www.midjourney.com/explore',
            // },
            // {
            //     text: 'OpenArt.ai',
            //     icon: 'fluent-color:link-24',
            //     link: 'https://openart.ai/create',
            // },
            // {
            //     text: 'Runwayml',
            //     icon: 'fluent-color:link-24',
            //     link: 'https://runwayml.com',
            // },

            [
                {
                    label: 'Large',
                    items: [
                        { label: 'ChatGPT', icon: ['fa-light', 'fa-square-dollar'] },
                        { label: 'Dreamina', icon: ['fa-light', 'fa-square-dollar'] },
                        { label: 'Image-Fx', icon: ['fa-light', 'fa-square-dollar'] },
                        { label: 'Runwayml', icon: ['fa-light', 'fa-square-dollar'] },
                    ],
                },
            ],
            [
                {
                    label: 'Midjourney',
                    items: [
                        { label: 'Projector', icon: ['fa-light', 'fa-square'] },
                        { label: 'Speakers', icon: ['fa-light', 'fa-square'] },
                        { label: 'TVs', icon: ['fa-light', 'fa-square'] },
                    ],
                },
            ],
            [
                {
                    label: 'Platforms',
                    items: [
                        { label: 'fal.ai', icon: ['fa-light', 'fa-cubes'] },
                        { label: 'Comfy.icu', icon: ['fa-light', 'fa-cubes'] },
                        { label: 'Huggingface', icon: ['fa-light', 'fa-cubes'] },
                        { label: 'Replicate', icon: ['fa-light', 'fa-cubes'] },
                    ],
                },
            ],

            [
                {
                    label: 'Communities',
                    items: [
                        { label: 'OpenArt.ai', icon: ['fa-light', 'fa-users-line'] },
                        { label: 'Comfy.icu', icon: ['fa-light', 'fa-users-line'] },
                        { label: 'Huggingface', icon: ['fa-light', 'fa-users-line'] },
                        { label: 'tensor.art', icon: ['fa-light', 'fa-users-line'] },
                    ],
                },
            ],
        ],
    },
    {
        label: 'Desktop',
        icon: ['fa-duotone', 'fa-computer-classic'],
        items: [
            [
                {
                    label: 'Football',
                    items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }],
                },
            ],
            [
                {
                    label: 'Running',
                    items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }],
                },
            ],
            [
                {
                    label: 'Swimming',
                    items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }],
                },
            ],
            [
                {
                    label: 'Tennis',
                    items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }],
                },
            ],
        ],
    },
    {
        label: 'Technology',
        icon: ['fa-duotone', 'fa-flux-capacitor'],
        items: [
            // { text: 'FLUX', link: '/tech/flux/', icon: 'fluent-color:code-block-16' },
            //     { text: 'Stable Diffusion', link: '/tech/sd/', icon: 'fluent-color:code-block-16' },
            //     { text: 'Text-To-Image', link: '/tech/text-to/text-to-image.md', icon: 'fluent-color:text-bullet-list-square-16' },
            //     { text: 'Text-To-Music', link: '/tech/text-to/text-to-music.md', icon: 'fluent-color:text-bullet-list-square-16' },
            //     { text: 'Text-To-Video', link: '/tech/text-to/text-to-video.md', icon: 'fluent-color:text-bullet-list-square-16' },
            //     { text: 'Image-To-Image', link: '/tech/image-to/image-to-image.md', icon: 'fluent-color:image-16' },
            //     { text: 'Image-To-Text', link: '/tech/image-to/image-to-text.md', icon: 'fluent-color:image-16' },
            //     { text: 'Image-To-Video', link: '/tech/image-to/image-to-video.md', icon: 'fluent-color:image-16' },

            [
                {
                    label: 'FLUX',
                    items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }],
                },
            ],
            [
                {
                    label: 'Stable Diffusion',
                    items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }],
                },
            ],
            [
                {
                    label: 'Text-To',
                    items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }],
                },
            ],
            [
                {
                    label: 'Image-To',
                    items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }],
                },
            ],
        ],
    },
    {
        label: 'Portfolio',
        icon: ['fa-duotone', 'fa-image'],
    },
]);
</script>
