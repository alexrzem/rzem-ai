import { SidebarOptions } from 'vuepress-theme-hope/client';

export const sidebar: SidebarOptions = {
    '/tech/sd/': [
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
        {
            text: 'Flux1',
            icon: 'regular:file-image',
			link: '/txt2img/flux1/',
            collapsible: false,
            children: [
                {
                    text: 'Black Forest Labs',
                    icon: 'regular:paper-plane',
                    link: 'https://bfl.ai/',
                },
                {
                    text: 'Guide',
                    icon: 'regular:file-image',
                    link: '/txt2img/flux1/guide.md',
                },
            ],
        },
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
        {
            text: 'Stable Diffusion',
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
};
