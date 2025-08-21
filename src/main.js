import { createApp } from 'vue';
import { router } from './router.js';
import { createPinia } from 'pinia';
import VueLazyload from 'vue-lazyload';
import Vue3Toastify from 'vue3-toastify';

/* import the fontawesome core */
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

/* import the fontawesome core */
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fass } from '@fortawesome/sharp-solid-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fadt } from '@fortawesome/duotone-thin-svg-icons';

/* add icons to the library */
library.add(fal, far, fas, fass, fad, fadt);

const pinia = createPinia();

import './style.css';
import 'vue3-toastify/dist/index.css';

import App from './App.vue';

import PromptCard from './components/PromptCard.vue';
import PromptCards from './components/PromptCards.vue';

const app = createApp(App);
app.component('fa', FontAwesomeIcon);
app.component('fal', FontAwesomeLayers); //
app.component('fat', FontAwesomeLayersText); //
app.component('PromptCard', PromptCard); //
app.component('PromptCards', PromptCards); //
app.use(VueLazyload);
app.use(Vue3Toastify, { autoClose: 3000 });
app.use(pinia);
app.use(router);
app.mount('#app');
