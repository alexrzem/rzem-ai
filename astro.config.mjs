// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'astro-auto-import';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    markdown: {
        shikiConfig: {
            // Shiki Themes: https://shiki.style/themes
            theme: 'css-variables',
            wrap: true,
        },
    },
    integrations: [
        // example auto import component into mdx files
        AutoImport({
            imports: [
                // https://github.com/delucis/astro-auto-import
                '@/components/admonition/Admonition.astro',
            ],
        }),
        mdx(),
        icon(),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
