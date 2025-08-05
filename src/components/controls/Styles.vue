<template>
    <div v-if="showStyles" class="flex flex-col gap-0">
        <div class="text-surface-900 dark:text-surface-0">Style</div>
        <InputGroup>
            <InputGroupAddon>
                <Checkbox v-model="checked1" :binary="true" size="small" />
            </InputGroupAddon>
            <Select v-model="controls.style" :options="metadata.styles" filter optionLabel="name" placeholder="Select a Style" class="w-full" labelClass="">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex">
                        <div class="align-bottom"><fa :icon="['far', 'flag']" class="mr-2" size="xs" /></div>
                        <div class="align-bottom">{{ slotProps.value.name }}</div>
                    </div>
                    <div v-else class="flex" style="">
                        <div class="align-bottom"><fa :icon="['far', 'flag']" class="mr-2" size="xs" /></div>
                        <div class="align-bottom">{{ slotProps.placeholder }}</div>
                    </div>
                </template>
                <template #option="slotProps">
                    <div class="flex">
                        <fa :icon="['far', 'flag']" class="mr-2" size="xs" />
                        <div>{{ slotProps.option.name }}</div>
                    </div>
                </template>
            </Select>
        </InputGroup>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showStyles = ref(false);

const checked1 = ref(false);

const selectedStyle = ref();


import { useControlsStore, useMetadataStore } from '../../store';

const controls = useControlsStore();
const metadata = useMetadataStore();
</script>
