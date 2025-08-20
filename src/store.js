import _ from 'lodash';
import { defineStore } from 'pinia';
import ARTISTS from './pages/references/style/styles_artists.json';

export const useArtistsStore = defineStore('controls', {
    state: () => ({
        artists: ARTISTS,
    }),
    getters: {},
    actions: {},
});
