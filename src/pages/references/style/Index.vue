<template>
    <header class="relative bg-zinc-100 shadow-sm">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">FLUX.1 [dev] Artistic Styles</h1>
            <p>
                <em>
                    A collection of what
                    <a href="https://blackforestlabs.ai/announcing-black-forest-labs/">FLUX.1 [dev]</a>
                    generates when prompted with "Style of [artist name]" for
                    <span id="numArtists">{{ artists.length }}</span>
                    artists.
                </em>
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

            <!--  md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8 -->

            <div class="mt-4">
                <div class="">
                    <template v-for="artist in filteredArtists" :key="artist">
                        <div class="text-lg font-medium text-gray-900 border-b-1 border-zinc-400">{{ artist.name }}</div>
                        <div @mousedown.left="onMouseDown">
                            <vue-horizontal responsive class="horizontal" ref="horizontal" snap="none" :button="false" @scroll="onScroll">
                                <img v-lazy="'/references/style/artists/' + artist.code + '_0.jpeg'" class="rounded-lg w-64 h-64 mx-2 my-4 shadow-lg" />
                                <img v-lazy="'/references/style/artists/' + artist.code + '_1.jpeg'" class="rounded-lg w-64 h-64 mx-2 my-4 shadow-lg" />
                                <img v-lazy="'/references/style/artists/' + artist.code + '_2.jpeg'" class="rounded-lg w-64 h-64 mx-2 my-4 shadow-lg" />
                                <img v-lazy="'/references/style/artists/' + artist.code + '_3.jpeg'" class="rounded-lg w-64 h-64 mx-2 my-4 shadow-lg" />
                            </vue-horizontal>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import _ from 'lodash';
import { computed, ref, useTemplateRef } from 'vue';
import Fuse from 'fuse.js';
import VueHorizontal from 'vue-horizontal';

import { storeToRefs } from 'pinia';
import { useArtistsStore } from '../../../store';
const horizontal = useTemplateRef('horizontal');

const artistsStore = useArtistsStore();
const { artists } = storeToRefs(artistsStore);

const filter = ref('');
const left = ref(0);
const originX = ref(0);
const originLeft = ref(0);

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

const fuse = new Fuse(artistsStore.artists, {
    isCaseSensitive: false,
    ignoreDiacritics: true,
    includeMatches: false,
    includeScore: true,
    minMatchCharLength: 2,
    shouldSort: true,
    threshold: 0.3,
    keys: ['name'],
});

const filteredArtists = computed(() => {
    if (_.isEmpty(filter.value)) {
        return artistsStore.artists;
    } else {
        const results = fuse.search(filter.value);
        console.log(results)

        return _.map(results, 'item');
    }
});
</script>
