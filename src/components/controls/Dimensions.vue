<template>
    <div class="grid grid-cols-2 gap-4">
        <div class="">
            <div class="text-surface-700 dark:text-surface-0 font-semibold">Dimensions</div>

            <InputGroup>
                <InputGroupAddon>
                    <fa :icon="['far', 'arrows-left-right']" />
                </InputGroupAddon>
                <InputNumber v-model="controls.imageWidth" placeholder="0" />
            </InputGroup>
        </div>
        <div class="">
            <div class="">&nbsp;</div>
            <InputGroup>
                <InputGroupAddon>
                    <fa :icon="['far', 'arrows-up-down']" />
                </InputGroupAddon>
                <InputNumber v-model="controls.imageHeight" placeholder="0" />
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
