import { createWebHashHistory, createRouter } from 'vue-router';

import HomeView from './pages/home/index.vue';
import OnlineView from './pages/online/index.vue';
import DesktopView from './pages/desktop/index.vue';
import TechView from './pages/tech/index.vue';
import PromptsView from './pages/prompts/index.vue';
import PortfolioView from './pages/portfolio/index.vue';

const routes = [
    { name: 'home', path: '/', component: HomeView },
    { name: 'online', path: '/online', component: OnlineView },
    { name: 'desktop', path: '/desktop', component: DesktopView },
    { name: 'tech', path: '/tech', component: TechView },
    { name: 'prompts', path: '/prompts', component: PromptsView },
    { name: 'portfolio', path: '/portfolio', component: PortfolioView },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
