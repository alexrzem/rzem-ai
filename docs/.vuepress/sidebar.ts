import { SidebarOptions } from 'vuepress-theme-hope/client';

export const sidebar: SidebarOptions = {
    '/online/midjourney': [
        {
            text: 'Midjourney',
            icon: 'regular:file-image',
            collapsible: false,
            children: [
                {
                    text: 'Midjourney',
                    icon: 'regular:paper-plane',
                    link: 'https://www.midjourney.com/',
                },
                {
                    text: 'Moodboards',
                    icon: 'regular:file-lines',
                    link: '/txt2img/midjourney/moodboards.md',
                },
                {
                    text: 'Style References',
                    icon: 'regular:file-lines',
                    link: '/txt2img/midjourney/style_references.md',
                },
            ],
        },
    ],

    '/online/image-tools/': [
        {
            text: 'Image Tools',
            icon: 'regular:image',
            collapsible: false,
            children: [
                {
                    text: 'Image Generators',
                    icon: 'regular:pen-to-square',
                    link: '/txt2img/txt2img.md',
                },
                {
                    text: 'Prompt Generators',
                    icon: 'regular:pen-to-square',
                    link: '/txt2img/prompt_generators.md',
                },
            ],
        },
    ],

    '/tech/flux/': [
        {
            text: 'FLUX.1',
            icon: 'regular:image',
            collapsible: false,
            children: [
                {
                    text: 'FLUX.1 [schnell]',
                    icon: 'regular:pen-to-square',
                    link: '/txt2img/txt2img.md',
                },
                {
                    text: 'FLUX.1 [dev]',
                    icon: 'regular:pen-to-square',
                    link: '/txt2img/prompt_generators.md',
                },
                {
                    text: 'FLUX.1 [pro]',
                    icon: 'regular:pen-to-square',
                    link: '/txt2img/prompt_generators.md',
                },
                {
                    text: 'FLUX.1 Kontext [dev]',
                    icon: 'regular:pen-to-square',
                    link: '/txt2img/prompt_generators.md',
                },
            ],
        },
		{
            text: 'Terminology',
            icon: 'regular:file-image',
            collapsible: false,
            children: [
                {
                    text: 'SDXL',
                    icon: 'regular:file-lines',
                    link: '/txt2img/sd/',
                },
                {
                    text: 'CLIP',
                    icon: 'regular:file-lines',
                    link: '/txt2img/sd/clip.md',
                },
            ],
        },
    ],

    '/tech/sd/': [
        {
            text: 'SD Releases',
            icon: 'regular:file-image',
            collapsible: false,
            children: [
                {
                    text: 'SD v1.5',
                    icon: 'regular:file-lines',
                    link: '/txt2img/sd/',
                },
                {
                    text: 'SD XL v1.0',
                    icon: 'regular:file-lines',
                    link: '/txt2img/sd/',
                },
				{
                    text: 'SD XL Turbo',
                    icon: 'regular:file-lines',
                    link: '/txt2img/sd/',
                },
				{
                    text: 'SD v3.0',
                    icon: 'regular:file-lines',
                    link: '/txt2img/sd/',
                },
				{
                    text: 'SD v3.5',
                    icon: 'regular:file-lines',
                    link: '/txt2img/sd/',
                },
            ],
        },
		{
            text: 'Terminology',
            icon: 'regular:file-image',
            collapsible: false,
            children: [
                {
                    text: 'CLIP',
                    icon: 'regular:file-lines',
                    link: '/tech/sd/clip.md',
                },
            ],
        },
    ],
};
