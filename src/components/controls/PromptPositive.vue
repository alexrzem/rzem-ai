<template>
    <div class="flex flex-col gap-0" v-focustrap>
        <div class="text-surface-700 dark:text-surface-0 font-semibold">Prompt</div>

        <Inplace>
            <template #display>
                <div class="border rounded cursor-pointer w-full">"{{ controls.promptPositive }}"</div>
            </template>
            <template #content="{ closeCallback }">
                <Editor v-model="controls.promptPositive" editorStyle="height: 80px">
                    <template v-slot:toolbar>
                        <div class="flex">
                            <div class="ql-formats flex-grow">
                                <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                                <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                            </div>
                            <div class="flex-shrink">
                                <Button @click="closeCallback" class="text-red bg-red">
                                    <template #icon>
                                        <fa :icon="['far', 'robot']" class="text-red bg-red" />
                                    </template>
                                </Button>
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
