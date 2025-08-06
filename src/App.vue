<template>
    <div class="flex flex-col lg:mx-72">
        <div class="flex justify-center">
            <div></div>
            <div>
                <MegaMenu :model="items">
                    <template #itemicon="{ item }">
                        <fa v-if="item.icon" :icon="item.icon" class="text-base" />
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
        label: '',
        icon: ['fa-light','fa-home'],
    },
    {
        label: 'Online',
        icon: ['fa-light','fa-cloud'],
        items: [
            [
                {
                    label: 'Computer',
                    items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }],
                },
            ],
            [
                {
                    label: 'Home Theater',
                    items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }],
                },
            ],
            [
                {
                    label: 'Gaming',
                    items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }],
                },
            ],
            [
                {
                    label: 'Appliances',
                    items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }],
                },
            ],
        ],
    },
    {
        label: 'Desktop',
        icon: ['fa-light','fa-computer-classic'],
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
        icon: ['fa-light','fa-flux-capacitor'],
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
        label: 'Portfolio',
        icon: ['fa-duotone','fa-solid','fa-image'],
    },
]);
</script>
