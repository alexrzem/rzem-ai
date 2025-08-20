<template>
    <RouterView/>
</template>

<script setup>
import { ref } from 'vue';

const steps = [
    { id: '00', name: 'Introduction', description: 'Overview', to: 'flux101Intro', status: 'current' },
    { id: '01', name: 'Lesson 1', description: 'Foundation', to: 'flux101Lesson1', status: 'upcoming' },
    { id: '02', name: 'Lesson 2', description: 'FLUX Technology', to: 'flux101Lesson2', status: 'upcoming' },
    { id: '03', name: 'Lesson 3', description: 'Prompting Mastery', to: 'flux101Lesson3', status: 'upcoming' },
    { id: '04', name: 'Lesson 4', description: 'LoRAs', to: 'flux101Lesson4', status: 'upcoming' },
];
</script>
