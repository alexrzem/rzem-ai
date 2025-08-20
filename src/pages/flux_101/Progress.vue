<template>
    <div class="lg:border-t lg:border-b lg:border-gray-200">
        <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
            <ol role="list"
                class="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-r lg:border-l lg:border-gray-200">
                <li v-for="(step, stepIdx) in steps" :key="step.id" class="relative overflow-hidden lg:flex-1">
                    <div
                        :class="[stepIdx === 0 ? 'rounded-t-md border-b-0' : '', stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '', 'overflow-hidden border border-gray-200 lg:border-0']">
                        <router-link v-if="step.status === 'complete'" :to="{ name: step.to }" class="group">
                            <span
                                class="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:top-auto lg:bottom-0 lg:h-1 lg:w-full"
                                aria-hidden="true" />
                            <span
                                :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'flex items-start px-6 py-5 text-sm font-medium']">
                                <span class="shrink-0">
                                    <span class="flex size-10 items-center justify-center rounded-full bg-blue-600">
                                        <fa :icon="['fas', 'check']" class="text-white" />
                                    </span>
                                </span>
                                <span class="mt-0.5 ml-4 flex min-w-0 flex-col">
                                    <span class="text-sm font-medium text-gray-900">{{ step.name }}</span>
                                    <span class="text-sm font-medium text-gray-500">{{ step.description }}</span>
                                </span>
                            </span>
                        </router-link>
                        <router-link v-else-if="step.status === 'current'" :to="{ name: step.to }" aria-current="step">
                            <span
                                class="absolute top-0 left-0 h-full w-1 bg-blue-600 lg:top-auto lg:bottom-0 lg:h-1 lg:w-full"
                                aria-hidden="true" />
                            <span
                                :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'flex items-start px-6 py-5 text-sm font-medium']">
                                <span class="shrink-0">
                                    <span
                                        class="flex size-10 items-center justify-center rounded-full border-2 border-blue-600">
                                        <span class="text-blue-600">{{ step.id }}</span>
                                    </span>
                                </span>
                                <span class="mt-0.5 ml-4 flex min-w-0 flex-col">
                                    <span class="text-sm font-medium text-blue-600">{{ step.name }}</span>
                                    <span class="text-sm font-medium text-gray-500">{{ step.description }}</span>
                                </span>
                            </span>
                        </router-link>
                        <router-link v-else :to="{ name: step.to }" class="group">
                            <span
                                class="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:top-auto lg:bottom-0 lg:h-1 lg:w-full"
                                aria-hidden="true" />
                            <span
                                :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'flex items-start px-6 py-5 text-sm font-medium']">
                                <span class="shrink-0">
                                    <span
                                        class="flex size-10 items-center justify-center rounded-full border-2 border-gray-300">
                                        <span class="text-gray-500">{{ step.id }}</span>
                                    </span>
                                </span>
                                <span class="mt-0.5 ml-4 flex min-w-0 flex-col">
                                    <span class="text-sm font-medium text-gray-500">{{ step.name }}</span>
                                    <span class="text-sm font-medium text-gray-500">{{ step.description }}</span>
                                </span>
                            </span>
                        </router-link>
                        <template v-if="stepIdx !== 0">
                            <!-- Separator -->
                            <div class="absolute inset-0 top-0 left-0 hidden w-3 lg:block" aria-hidden="true">
                                <svg class="size-full text-gray-300" viewBox="0 0 12 82" fill="none"
                                    preserveAspectRatio="none">
                                    <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor"
                                        vector-effect="non-scaling-stroke" />
                                </svg>
                            </div>
                        </template>
                    </div>
                </li>
            </ol>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['step'])

const getStatus = function (step) {
    if (step < props.step) {
        return 'complete';
    } else if (step == props.step) {
        return 'current';
    } else if (step > props.step) {
        return 'upcoming';
    } else {
        return '';
    }
}

const steps = [
    { id: '00', name: 'Introduction', description: 'Overview', to: 'flux101Intro', status: getStatus(0) },
    { id: '01', name: 'Lesson 1', description: 'Foundation', to: 'flux101Lesson1', status: getStatus(1) },
    { id: '02', name: 'Lesson 2', description: 'Prompting Mastery', to: 'flux101Lesson2', status: getStatus(2) },
    { id: '03', name: 'Lesson 3', description: 'FLUX Technology', to: 'flux101Lesson3', status: getStatus(3) },
    { id: '04', name: 'Lesson 4', description: 'LoRAs', to: 'flux101Lesson4', status: getStatus(4) },
];
</script>
