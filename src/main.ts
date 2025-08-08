import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import PrimeVue from 'primevue/config';
import { theme } from './style';
import { router } from './router';

/* import font awesome icon component */
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

import App from './App.vue'; /*  */

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.component('fa', FontAwesomeIcon);
app.component('fal', FontAwesomeLayers); //
app.component('fat', FontAwesomeLayersText); //
app.use(PrimeVue, theme);
app.use(pinia);
app.use(router);
app.mount('#app');
