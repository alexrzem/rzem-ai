<template>
    <div class="main-wrapper">
        <div class="flex flex-row h-full">
            <div class="flex-shrink p-0 h-full">
                <div class="min-w-18 bg-zinc-800 text-zinc-200 h-full rounded-2xl p-2 border border-zinc-500 flex flex-col">
                    <div v-for="menuItem in menuItems" class="w-full text-center mb-4 hover:bg-zinc-600 rounded-2xl p-2">
                        <fa v-if="menuItem.icon" :icon="menuItem.icon" class="text-4xl" />
                        <div class="text-sm">
                            {{ menuItem.name }}
                        </div>

                    </div>
                </div>
            </div>
            <div class="flex-shrink bg-blue-500 h-full rounded-2xl">

                Alex Rzem

            </div>
            <div class="flex-grow bg-green-500 h-full rounded-2xl">3</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import { useLayout } from './composables/useLayout';

const { isDarkMode, toggleDarkMode } = useLayout();

const menuItems = ref([
    { name: 'Home', icon: ['fa-light', 'fa-passport'], },
    { name: 'Online', icon: ['fa-light', 'fa-cloud'], },
    { name: 'Desktop', icon: ['fa-light', 'fa-computer-classic'], },
    { name: 'Technology', icon: ['fa-light', 'fa-flux-capacitor'], },
    { name: 'Portfolio', icon: ['fa-light', 'fa-image'], },
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
