import { defineClientConfig } from 'vuepress/client';
import CustomBlogHome from './layouts/CustomBlogHome.vue';

export default defineClientConfig({
    layouts: {
        CustomBlogHome,
    },
});
