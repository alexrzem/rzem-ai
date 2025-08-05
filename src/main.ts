import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import PrimeVue from 'primevue/config';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { theme } from './style';

import App from './App.vue';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.component('fa', FontAwesomeIcon);
app.use(PrimeVue, theme);
app.use(pinia);
app.mount('#app');
