<template>
    <div class="flex flex-col gap-0">
        <div class="text-surface-900 dark:text-surface-0 font-medium">Sampler / Scheduler</div>
        <Select v-model="controls.sampler" :options="metadata.samplers" variant="filled" checkmark optionLabel="name" placeholder="Select a Sampler" class="w-full mb-1" labelClass="">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex">
                    <div class="align-bottom"><fa :icon="['far', 'crosshairs-simple']" class="mr-2" size="xs" /></div>
                    <div class="align-bottom">{{ slotProps.value.name }}</div>
                </div>
                <div v-else class="flex" style="">
                    <div class="align-bottom"><fa :icon="['far', 'crosshairs-simple']" class="mr-2" size="xs" /></div>
                    <div class="align-bottom">{{ slotProps.placeholder }}</div>
                </div>
            </template>
            <template #option="slotProps">
                <div class="flex">
                    <div class="align-bottom"><fa :icon="['far', 'crosshairs-simple']" class="mr-2" size="xs" /></div>
                    <div>{{ slotProps.option.name }} ({{ slotProps.option.code }})</div>
                </div>
            </template>
        </Select>
        <Select v-model="controls.scheduler" :options="metadata.schedulers" variant="filled" checkmark optionLabel="name" placeholder="Select a Checkpoint" class="w-full" labelClass="">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex">
                    <div class="align-bottom"><fa :icon="['far', 'clock']" class="mr-2" size="xs" /></div>
                    <div class="align-bottom">{{ slotProps.value.name }}</div>
                </div>
                <div v-else class="flex" style="">
                    <div class="align-bottom"><fa :icon="['far', 'clock']" class="mr-2" size="xs" /></div>
                    <div class="align-bottom">{{ slotProps.placeholder }}</div>
                </div>
            </template>
            <template #option="slotProps">
                <div class="flex">
                    <div class="align-bottom"><fa :icon="['far', 'clock']" class="mr-2" size="xs" /></div>
                    <div>{{ slotProps.option.name }} ({{ slotProps.option.code }})</div>
                </div>
            </template>
        </Select>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useControlsStore, useMetadataStore } from '../../store';

const controls = useControlsStore();
const metadata = useMetadataStore();

</script>
