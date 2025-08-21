<template>
    <div class="flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-lg border border-zinc-300 my-4">
        <div v-if="props.icon && props.title" class="px-4 py-2 text-lg bg-zinc-50 rounded-t-lg flex-shrink leading-3">
            <fa v-if="props.icon" :icon="['far', props.icon]" :class="iconColour" class="mr-3" />
            <span v-if="props.title" class="font-semibold">{{ props.title }}</span>
        </div>
        <div v-if="img" class="flex-grow w-full">
            <div class="justify-items-center p-4">
                <img :src="props.img" alt="" class="rounded-2xl shadow-xl bg-gray-100 max-h-[400px]" />
            </div>
        </div>
        <div v-if="prompt" class="px-4 py-4 bg-zinc-200 text-base flex-shrink">
            <div class="text-zinc-800 quote" @click="copyPrompt">{{ props.prompt }}</div>

            <div class="px-2 pt-2 gap-2 flex">
                <div class="prompt-seed" @click="copySeed">
                    <div>
                        <span class="prompt-seed-type">Seed</span>: <span class="prompt-seed-value">{{ seed }}</span>
                    </div>
                </div>
                <div class="prompt-steps" @click="copySteps">
                    <div>
                        <span class="prompt-steps-type">Steps</span>: <span class="prompt-steps-value">{{ steps }}</span>
                    </div>
                </div>
                <div class="prompt-cfg" @click="copyCfg">
                    <div>
                        <span class="prompt-cfg-type">CFG</span>: <span class="prompt-cfg-value">{{ cfg }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import _ from 'lodash';
import { computed } from 'vue';
import useClipboard from '../composables/useClipboard.js';
import { toast } from 'vue3-toastify';

const props = defineProps({
    icon: String,
    iconColour: String,
    title: String,
    img: String,
    prompt: String,

    seed: String,
    steps: String,
    cfg: String,
});

const { toClipboard } = useClipboard();

const iconColour = computed(() => _.defaultTo(props.iconColour, 'text-zinc-500'));
const prompt = computed(() => _.defaultTo(props.prompt, ''));
const seed = computed(() => _.defaultTo(props.seed, '20250516'));
const steps = computed(() => _.defaultTo(props.steps, '35'));
const cfg = computed(() => _.defaultTo(props.cfg, '3.5'));

const toastOptions = { type: 'success', autoClose: 5000, dangerouslyHTMLString: true };

const copyPrompt = function () {
    toClipboard(prompt.value).then((e) => {
        toast('Prompt copied to clipboard.', toastOptions);
    });
};

const copySeed = function () {
    toClipboard(seed.value).then((e) => {
        toast(`Seed [ ${seed.value} ] copied to clipboard.`, toastOptions);
    });
};

const copySteps = function () {
    toClipboard(steps.value).then((e) => {
        toast(`Steps [ ${steps.value} ] copied to clipboard.`, toastOptions);
    });
};

const copyCfg = function () {
    toClipboard(cfg.value).then((e) => {
        toast(`Guidance [ ${cfg.value} ] copied to clipboard.`, toastOptions);
    });
};
</script>
