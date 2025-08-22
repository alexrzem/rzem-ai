<template>
    <div class="bg-gray-700 border-t border-t-gray-500 border-b-gray-900 shadow-lg">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-10 items-center justify-between">
                <div class="flex items-center">
                    <div class="">
                        <div class="flex items-baseline space-x-2">
                            <RouterLink
                                :to="{name: 'styleReferences'}"
                                class="rounded-md px-2 py-1 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                active-class="bg-gray-600 text-white"
                                exact-active-class="bg-gray-900 text-white">
                                Styles
                            </RouterLink>
                            <RouterLink
                                :to="{name: 'loraReferences'}"
                                class="rounded-md px-2 py-1 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                                active-class="bg-gray-600 text-white"
                                exact-active-class="bg-gray-900 text-white">
                                LoRAs
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <header class="relative bg-zinc-100 shadow-sm">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">FLUX.1 [dev] LoRAs</h1>
            <p>
                A collection of what
                <a href="https://blackforestlabs.ai/announcing-black-forest-labs/">FLUX.1 [dev]</a>
                LoRAs.
            </p>
        </div>
    </header>
    <main>
        <div class="content">
            <div class="mt-2 grid grid-cols-1">
                <input
                    v-model="filter"
                    placeholder="filter by name"
                    class="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6" />
                <fa :icon="['far', 'filter-list']" class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-600" />
            </div>

            <div class="mt-4">
                <div class="grid grid-cols-4 gap-4">
                    <div v-for="lora in filteredLoras" :key="lora" class="box-decoration-clone">
                        <div class="text-lg font-medium text-gray-900">{{ lora.name }}</div>
                        <img v-lazy="'/references/loras/' + lora.id + '.png'" class="rounded-lg w-64 h-64 mx-2 my-2 shadow" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import _ from 'lodash';
import {computed, ref, useTemplateRef} from 'vue';
import Fuse from 'fuse.js';
import VueHorizontal from 'vue-horizontal';
import VueMultiselect from 'vue-multiselect';

import {storeToRefs} from 'pinia';
import {useArtistsStore} from '../../../store';
const horizontal = useTemplateRef('horizontal');

const artistsStore = useArtistsStore();
const {artists, tags, loras} = storeToRefs(artistsStore);

const filter = ref('');
const left = ref(0);
const originX = ref(0);
const originLeft = ref(0);

const selected = ref([]);

const onScroll = function (e) {
    left.value = e.left;
};
const onMouseDown = function (e) {
    originX.value = e.pageX;
    originLeft.value = left.value;

    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
};
const onMouseUp = function () {
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousemove', onMouseMove);
};
const onMouseMove = function (e) {
    const offset = e.pageX - originX.value;
    const left = originLeft.value - offset;
    horizontal.scrollToLeft(left, 'auto');
};

const fuse = new Fuse(artistsStore.loras, {
    isCaseSensitive: false,
    ignoreDiacritics: true,
    includeMatches: false,
    includeScore: true,
    minMatchCharLength: 2,
    shouldSort: true,
    threshold: 0.3,
    keys: ['name', 'trigger_phrases'],
});

const filteredLoras = computed(() => {
    if (_.isEmpty(filter.value)) {
        return _.orderBy(artistsStore.loras, ['name'], ['asc']);
    } else {
        const results = fuse.search('all');
        return _.map(results, 'item');
    }

});
</script>
