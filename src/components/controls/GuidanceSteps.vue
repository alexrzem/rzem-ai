<template>
    <div class="grid grid-cols-2 gap-4">
        <div class="">
            <div class="text-surface-700 dark:text-surface-0 font-semibold">Guidance</div>
            <InputGroup>
                <InputGroupAddon>
                    <fa :icon="['far', 'location-crosshairs']" />
                </InputGroupAddon>
                <InputNumber v-model="controls.guidance" showButtons placeholder="1" />
            </InputGroup>
        </div>
        <div class="">
            <div class="text-surface-700 dark:text-surface-0 font-semibold">Steps</div>
            <InputGroup>
                <InputGroupAddon>
                    <fa :icon="['far', 'shoe-prints']" />
                </InputGroupAddon>
                <InputNumber v-model="controls.steps" showButtons placeholder="Clip Shift" />
            </InputGroup>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useControlsStore, useMetadataStore } from '../../store';

const controls = useControlsStore();
const metadata = useMetadataStore();

</script>
