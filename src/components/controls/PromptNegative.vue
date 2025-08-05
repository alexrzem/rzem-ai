<template>
    <div class="flex flex-col gap-0" v-focustrap>
        <div class="text-surface-700 dark:text-surface-0 font-semibold">Negative Prompt</div>

        <Inplace>
            <template #display>
                <div class="border rounded cursor-pointer">"{{ controls.promptNegative }}"</div>
            </template>
            <template #content="{ closeCallback }">
                <Editor v-model="controls.promptNegative" editorStyle="height: 80px">
                    <template v-slot:toolbar>
                        <div class="flex">
                            <div class="ql-formats flex-grow">
                                <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                                <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                            </div>
                            <div class="ql-formats flex-shrink">
                                <button v-tooltip.bottom="'Underline'" class="ql-underline" @click="closeCallback"></button>
                            </div>
                        </div>
                    </template>
                </Editor>
            </template>
        </Inplace>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useControlsStore, useMetadataStore } from '../../store';

const controls = useControlsStore();
const metadata = useMetadataStore();
</script>
