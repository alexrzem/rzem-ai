<template>
    <div class="flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-lg border border-zinc-300 my-4">
        <div class="px-3 py-3 text-lg bg-zinc-50 flex-shrink leading-3 rounded-t-lg font-semibold"> {{title}} </div>
        <div class="p-4">
            <code>{{code}}</code>
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
    code: String,

    seed: String,
    steps: String,
    cfg: String,
});

const { toClipboard } = useClipboard();

const iconColour = computed(() => _.defaultTo(props.iconColour, 'text-zinc-500'));
const title = computed(() => _.defaultTo(props.title, ''));
const code = computed(() => _.defaultTo(props.code, ''));
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
