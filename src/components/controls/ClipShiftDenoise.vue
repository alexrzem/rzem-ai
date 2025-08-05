<template>
    <div class="grid grid-cols-2 gap-4">
        <div class="">
            <div class="text-surface-700 dark:text-surface-0 font-semibold">Clip Shift</div>
            <InputGroup>
                <InputGroupAddon>
                    <fa :icon="['far', 'arrow-down-wide-short']" />
                </InputGroupAddon>
                <InputNumber v-model="controls.clipShift" showButtons placeholder="Clip Shift" />
            </InputGroup>
        </div>
        <div class="">
            <div class="text-surface-700 dark:text-surface-0 font-semibold">Denoise</div>
            <InputGroup>
                <InputGroupAddon>
                    <fa :icon="['far', 'transporter-1']" />
                </InputGroupAddon>
                <InputNumber v-model="controls.denoise" showButtons placeholder="1" />
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
