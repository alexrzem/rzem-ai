<template>
    <div class="flex flex-col lg:mx-72">
        <div class="flex justify-center">
            <div></div>
            <div>
                <MegaMenu :model="items">
                    <template #itemicon="{ item }">
                        <fa v-if="item.icon" :icon="item.icon" class="text-2xl text-blue-500 hover:text-blue-300" />
                    </template>
                </MegaMenu>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import { useLayout } from './composables/useLayout';

const { isDarkMode, toggleDarkMode } = useLayout();

const styles = ref([
    { name: 'Home', code: 'pi pi-home' },
    { name: 'Bookmark', code: 'pi pi-bookmark' },
    { name: 'Users', code: 'pi pi-users' },
    { name: 'Comments', code: 'pi pi-comments' },
    { name: 'Calendar', code: 'pi pi-calendar' },
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
