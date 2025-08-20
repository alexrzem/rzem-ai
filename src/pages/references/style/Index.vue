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
                <input v-model="filter" placeholder="filter by name"
                    class="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6" />
                <fa :icon="['far', 'filter-list']"
                    class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-600" />
            </div>

            <div class="mt-4">
                <ul role="list"
                    class="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    <template v-for="artist in filteredArtists" :key="artist">
                        <li class="relative col-span-4">
                            <div class="text-lg font-medium text-gray-900 border-b-1 border-zinc-400">{{
                                artist.name }}</div>
                        </li>
                        <template v-for="index in 4" :key="artist">
                            <li class="relative mb-4">
                                <div
                                    class="group overflow-hidden rounded-lg bg-gray-100 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600">
                                    <img v-lazy="'/references/style/artists/' + artist.code + '_' + (index - 1) + '.jpeg'"
                                        alt=""
                                        class="pointer-events-none aspect-10/7 rounded-lg object-cover outline -outline-offset-1 outline-black/5 group-hover:opacity-75" />

                                </div>
                            </li>
                        </template>
                    </template>
                </ul>
            </div>
        </div>
    </main>
</template>

<script setup>
import _ from 'lodash';
import { computed, ref } from 'vue';
import Fuse from 'fuse.js'

import { storeToRefs } from 'pinia';
import { useArtistsStore } from '../../../store';

const artistsStore = useArtistsStore();
const { artists } = storeToRefs(artistsStore);

const filter = ref('');

const fuse = new Fuse(artistsStore.artists, {
    isCaseSensitive: false,
    ignoreDiacritics: true,
    includeScore: true,
    minMatchCharLength: 2,
    shouldSort: true,
    keys: ['name']
})

const filteredArtists = computed(() => {
    if (_.isEmpty(filter.value)) {
        return artistsStore.artists;
    } else {
        const results =  fuse.search(filter.value);
        return _.map(results, 'item');;
    }

})
</script>
