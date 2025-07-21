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
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/txt2img/midjourney/moodboards.md',
                },
                {
                    text: 'Style References',
                    icon: 'fluent-color:number-symbol-square-24',
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
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/txt2img/txt2img.md',
                },
                {
                    text: 'Prompt Generators',
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/txt2img/prompt_generators.md',
                },
            ],
        },
    ],

    '/tech/flux/': [
        {
            text: 'FLUX.1',
            icon: 'fluent-color:code-block-24',
            collapsible: false,
            children: [
                {
                    text: 'FLUX.1 [schnell]',
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/txt2img/txt2img.md',
                },
                {
                    text: 'FLUX.1 [dev]',
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/txt2img/prompt_generators.md',
                },
                {
                    text: 'FLUX.1 [pro]',
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/txt2img/prompt_generators.md',
                },
                {
                    text: 'FLUX.1 Kontext [dev]',
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/txt2img/prompt_generators.md',
                },
            ],
        },
		{
            text: 'Terminology',
            icon: 'fluent-color:book-24',
            collapsible: false,
            children: [
                {
                    text: 'CLIP',
                    icon: 'fluent-color:book-24',
                    link: '/tech/flux/clip.md',
                },
            ],
        },
    ],

    '/tech/sd/': [
        {
            text: 'SD Releases',
            icon: 'fluent-color:code-block-24',
            collapsible: false,
            children: [
                {
                    text: 'SD v1.5',
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/txt2img/sd/',
                },
                {
                    text: 'SD XL v1.0',
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/txt2img/sd/',
                },
				{
                    text: 'SD XL Turbo',
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/txt2img/sd/',
                },
				{
                    text: 'SD v3.0',
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/txt2img/sd/',
                },
				{
                    text: 'SD v3.5',
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/txt2img/sd/',
                },
            ],
        },
		{
            text: 'Terminology',
            icon: 'fluent-color:book-24',
            collapsible: false,
            children: [
                {
                    text: 'CLIP',
                    icon: 'fluent-color:book-24',
                    link: '/tech/sd/clip.md',
                },
            ],
        },
    ],
};
