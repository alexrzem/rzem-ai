<template>
    <div class="flex flex-col gap-0">
        <div class="text-surface-900 dark:text-surface-0 font-medium">Text Encoders (CLIP)</div>
        <div v-show="false">Contrastive Language-Image Pre-training</div>
        <Select v-model="controls.textEncoder1" :options="metadata.textEncoders" variant="filled" checkmark optionLabel="name" placeholder="Select a Checkpoint" class="w-full mb-1" labelClass="">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex">
                    <div class="align-bottom"><fa :icon="['far', 'database']" class="mr-2" size="xs" /></div>
                    <div class="align-bottom">{{ slotProps.value.name }}</div>
                </div>
                <div v-else class="flex" style="">
                    <div class="align-bottom"><fa :icon="['far', 'database']" class="mr-2" size="xs" /></div>
                    <div class="align-bottom">{{ slotProps.placeholder }}</div>
                </div>
            </template>
            <template #option="slotProps">
                <div class="flex">
                    <div class="align-bottom"><fa :icon="['far', 'database']" class="mr-2" size="xs" /></div>
                    <div>{{ slotProps.option.name }} ({{ slotProps.option.filename }})</div>
                </div>
            </template>
        </Select>
        <Select v-model="controls.textEncoder2" :options="metadata.textEncoders" variant="filled" checkmark optionLabel="name" placeholder="Select a Checkpoint" class="w-full" labelClass="">
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
                    <div>{{ slotProps.option.name }} ({{ slotProps.option.filename }})</div>
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
