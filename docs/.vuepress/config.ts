import path from 'node:path';

import { defineUserConfig } from 'vuepress';
// import { defineClientConfig } from 'vuepress/client';
import { viteBundler } from '@vuepress/bundler-vite';
import { hopeTheme } from 'vuepress-theme-hope';

import { markdownExtended } from './markdown';
import { navbar } from './navbar';
import { sidebar } from './sidebar';

// defineClientConfig({
//     layouts: {
//         PageTitle: () => import('./components/PageTitle.js'),
//     },
// });

export default defineUserConfig({
    lang: 'en-AU',
    title: 'rzem.ai',
    description: '',

    bundler: viteBundler(),
    pagePatterns: ['**/*.md', '!**/private.*', '!**/*.snippet.md', '!.vuepress', '!node_modules'],
    plugins: [],
    public: path.resolve(__dirname, 'public'),

    alias: {
        '~/theme': path.resolve(__dirname, './themes'),
        '~/components': path.resolve(__dirname, './themes/components'),
        '~/composables': path.resolve(__dirname, './themes/composables'),
    },

    extendsMarkdown: markdownExtended,

    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/logo-48.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicons/logo-32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicons/logo-16.png' }],
        ['link', { rel: 'manifest', href: '/assets/favicons/site.webmanifest' }],
        ['link', { rel: 'shortcut icon', href: '/assets/favicons/logo-24.ico' }],
    ],

    theme: hopeTheme({
        darkmode: 'enable', // or "toggle", "auto", "enable", "disable", "switch"
        logo: 'logo.png',
        navbar: navbar,
        print: false,
		//readingTime: false,
        sidebar: sidebar,
		toc: false,
        markdown: {
            codeTabs: true,
            component: true,
            imgMark: true,
            include: true,
        },
        plugins: {
            docsearch: {
                // plugin options here
                // appId, apiKey and indexName are required
            },
            icon: {
                assets: 'iconify', // keywords: "iconify", "fontawesome", "fontawesome-with-brands"
            },
            photoSwipe: false,
        },

    }),
});
