<template>
    <div class="flex flex-col gap-0">
        <div class="text-surface-900 dark:text-surface-0 font-medium">Variational autoencoder (VAE)</div>
        <Select v-model="controls.vae" :options="metadata.vaes" variant="filled" checkmark filter optionLabel="name" placeholder="Select a VAE" class="w-full" labelClass="">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex">
                    <div class="align-bottom"><fa :icon="['far', 'database']" class="mr-2" size="xs" /></div>
                    <div class="align-bottom">{{ slotProps.value.name }} ({{ slotProps.value.filename }})</div>
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
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useControlsStore, useMetadataStore } from '../../store';

const controls = useControlsStore();
const metadata = useMetadataStore();

</script>
