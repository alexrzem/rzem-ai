import { createWebHashHistory, createRouter } from 'vue-router';

import HomeView from './pages/home/Index.vue';
import Flux101 from './pages/flux_101/Index.vue';
import Flux101Intro from './pages/flux_101/Intro.vue';
import Flux101Lesson1 from './pages/flux_101/Lesson1.vue';
import Flux101Lesson2 from './pages/flux_101/Lesson2.vue';
import Flux101Lesson3 from './pages/flux_101/Lesson3.vue';
import Flux101Lesson4 from './pages/flux_101/Lesson4.vue';
import Flux201 from './pages/flux_201/Index.vue';
import PromptGuide from './pages/guides/prompt/Index.vue';
import StyleReferences from './pages/references/style/Index.vue';

const routes = [
    { name: 'home', path: '/', component: HomeView },

    {
        name: 'flux101',
        path: '/flux101',
        component: Flux101,
        children: [
            { name: 'flux101Intro', path: '/', component: Flux101Intro },
            { name: 'flux101Lesson1', path: '/flux101/lesson1', component: Flux101Lesson1 },
            { name: 'flux101Lesson2', path: '/flux101/lesson2', component: Flux101Lesson2 },
            { name: 'flux101Lesson3', path: '/flux101/lesson3', component: Flux101Lesson3 },
            { name: 'flux101Lesson4', path: '/flux101/lesson4', component: Flux101Lesson4 },
        ],
    },

    { name: 'flux201', path: '/flux201', component: Flux201 },
    { name: 'promptGuide', path: '/guides/prompt', component: PromptGuide },
    { name: 'styleReferences', path: '/references/style', component: StyleReferences },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
