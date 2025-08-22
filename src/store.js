import _ from 'lodash';
import { defineStore } from 'pinia';
import ARTISTS from './pages/references/style/styles_artists.json';
import LORAS from './pages/references/loras/loras.json';
import TAGS from './pages/references/style/tags.json';

export const useArtistsStore = defineStore('controls', {
    state: () => ({
        artists: ARTISTS,
        loras: LORAS,
        tags: TAGS,
    }),
    getters: {},
    actions: {},
});
