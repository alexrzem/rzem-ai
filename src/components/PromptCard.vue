<template>
  <div class="flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-lg border border-zinc-300 my-4 ">
    <div v-if="props.icon && props.title" class="px-4 py-3 text-lg bg-zinc-50 flex-shrink">
      <fa v-if="props.icon" :icon="['far', props.icon]" :class="iconColour" class="mr-3 " />
      <span v-if="props.title" class="font-semibold">{{ props.title }}</span>
    </div>
    <div v-if="img" class="flex-grow w-full">
      <div class="justify-items-center p-4 ">
        <img :src="props.img" alt="" class="rounded-2xl shadow-xl bg-gray-100 max-h-[400px]" />
      </div>
    </div>
    <div v-if="prompt" class="px-4 py-4 bg-zinc-200 text-base flex-shrink">
      <div class="text-zinc-800" @click="copyPrompt">“<em>{{ props.prompt }}</em>”</div>

      <div class="px-2 pt-2 gap-2 flex">
        <div class="prompt-seed" @click="copySeed">
          <div><span class="prompt-seed-type">Seed</span>: <span class="prompt-seed-value">{{ seed }}</span></div>
        </div>
        <div class="prompt-steps" @click="copySteps">
          <div><span class="prompt-steps-type">Steps</span>: <span class="prompt-steps-value">{{ steps }}</span></div>
        </div>
        <div class="prompt-cfg" @click="copyCfg">
          <div><span class="prompt-cfg-type">CFG</span>: <span class="prompt-cfg-value">{{ cfg }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import _ from 'lodash'
import { computed } from 'vue';
import useClipboard from '../composables/useClipboard.js';

const emit = defineEmits(['promptCopied', 'seedCopied', 'stepsCopied', 'cfgCopied'])
const props = defineProps({
  icon: String,
  iconColour: String,
  title: String,
  img: String,
  prompt: String,

  seed: Number,
  steps: Number,
  cfg: Number,
})

const { toClipboard } = useClipboard();

const iconColour = computed(() => _.defaultTo(props.iconColour, 'text-zinc-500'))
const seed = computed(() => _.defaultTo(props.seed, 20250516))
const steps = computed(() => _.defaultTo(props.steps, 35))
const cfg = computed(() => _.defaultTo(props.cfg, 3.5))

const copyPrompt = function () {
  toClipboard(props.prompt).then((e) => { emit('promptCopied') })
}

const copySeed = function () {
  toClipboard(props.prompt).then((e) => { emit('seedCopied') })
}

const copySteps = function () {
  toClipboard(props.prompt).then((e) => { emit('stepsCopied') });
}

const copyCfg = function () {
  toClipboard(props.prompt).then((e) => { emit('cfgCopied') });
}
</script>
