<template>
    <div class="flex flex-col gap-0">
        <div class="text-surface-700 dark:text-surface-0 font-semibold">Seed</div>
        <div class="flex gap-2">
            <InputGroup>
                <InputGroupAddon>
                    <fa :icon="['far', 'shuffle']" />
                </InputGroupAddon>
                <InputNumber v-model="controls.seed" :useGrouping="false" placeholder="-1" />
                <InputGroupAddon>
                    <Button icon="pi pi-times" severity="secondary" />
                </InputGroupAddon>
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
