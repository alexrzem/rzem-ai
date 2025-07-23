import { SidebarOptions } from 'vuepress-theme-hope/client';

export const sidebar: SidebarOptions = {
    '/online/': [
        {
            text: 'Online Tools',
            icon: 'fluent-color:cloud-16',
            collapsible: false,
            children: [
                {
                    text: 'ChatGPT',
                    icon: 'fluent-color:link-24',
                    link: 'https://sora.chatgpt.com/',
                },
                {
                    text: 'Comfy.icu',
                    icon: 'fluent-color:link-24',
                    link: 'https://comfy.icu/',
                },
                {
                    text: 'Dreamina',
                    icon: 'fluent-color:link-24',
                    link: 'https://dreamina.capcut.com/ai-tool/image/generate',
                },

                {
                    text: 'fal.ai',
                    icon: 'fluent-color:link-24',
                    link: 'https://fal.ai/models',
                },
                {
                    text: 'Image-Fx',
                    icon: 'fluent-color:link-24',
                    link: 'https://labs.google/fx/tools/image-fx',
                },
                {
                    text: 'Midjourney',
                    icon: 'fluent-color:link-24',
                    link: 'https://www.midjourney.com/explore',
                },
                {
                    text: 'OpenArt.ai',
                    icon: 'fluent-color:link-24',
                    link: 'https://openart.ai/create',
                },
                {
                    text: 'Runwayml',
                    icon: 'fluent-color:link-24',
                    link: 'https://runwayml.com',
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

    '/desktop/': [
        {
            text: 'Desktop Apps',
            icon: 'fluent-color:laptop-16',
            collapsible: false,
            children: [
                {
                    text: 'ComfyUI',
                    icon: 'fluent-color:link-24',
                    link: 'https://www.comfy.org/',
                },
                {
                    text: 'DrawThings',
                    icon: 'fluent-color:link-24',
                    link: 'https://drawthings.ai/',
                },
                {
                    text: 'Invoke.ai',
                    icon: 'fluent-color:link-24',
                    link: 'https://invoke.ai/',
                },
            ],
        },
    ],

    '/tech/': [
        {
            text: 'Technology',
            icon: 'fluent-color:code-block-24',
            collapsible: false,
            children: [
                {
                    text: 'FLUX.1',
                    icon: 'fluent-color:code-block-24',
                    link: '/tech/flux/',
                },
                {
                    text: 'Stable Diffusion',
                    icon: 'fluent-color:code-block-24',
                    link: '/tech/sd/',
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
                    link: '/tech/flux/schnell/',
                },
                {
                    text: 'FLUX.1 [dev]',
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/tech/flux/dev/',
                },
                {
                    text: 'FLUX.1 [pro]',
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/tech/flux/pro/',
                },
                {
                    text: 'FLUX.1 Kontext [dev]',
                    icon: 'fluent-color:number-symbol-square-24',
                    link: '/tech/flux/kontext/',
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
            text: 'Stable Diffusion',
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

    '/tech/text-to/': [
        {
            text: 'Text to ...',
            icon: 'fluent-color:text-bullet-list-square-24',
            collapsible: false,
            children: [
                {
                    text: 'Text to Image',
                    icon: 'fluent-color:text-bullet-list-square-24',
                    link: '/tech/text-to/text-to-image.md',
                },
                {
                    text: 'Text to Music',
                    icon: 'fluent-color:text-bullet-list-square-24',
                    link: '/tech/text-to/text-to-music.md',
                },
                {
                    text: 'Text to Video',
                    icon: 'fluent-color:text-bullet-list-square-24',
                    link: '/tech/text-to/text-to-video.md',
                },
            ],
        },
        {
            text: 'Image to ...',
            icon: 'fluent-color:image-16',
            collapsible: false,
            children: [
                {
                    text: 'Image to Image',
                    icon: 'fluent-color:image-16',
                    link: '/tech/image-to/image-to-image.md',
                },
                {
                    text: 'Image to Text',
                    icon: 'fluent-color:image-16',
                    link: '/tech/image-to/image-to-text.md',
                },
                {
                    text: 'Image to Video',
                    icon: 'fluent-color:image-16',
                    link: '/tech/image-to/image-to-video.md',
                },
            ],
        },
    ],

    '/tech/image-to/': [
{
            text: 'Text to ...',
            icon: 'fluent-color:text-bullet-list-square-24',
            collapsible: false,
            children: [
                {
                    text: 'Text to Image',
                    icon: 'fluent-color:text-bullet-list-square-24',
                    link: '/tech/text-to/text-to-image.md',
                },
                {
                    text: 'Text to Music',
                    icon: 'fluent-color:text-bullet-list-square-24',
                    link: '/tech/text-to/text-to-music.md',
                },
                {
                    text: 'Text to Video',
                    icon: 'fluent-color:text-bullet-list-square-24',
                    link: '/tech/text-to/text-to-video.md',
                },
            ],
        },
        {
            text: 'Image to ...',
            icon: 'fluent-color:image-16',
            collapsible: false,
            children: [
                {
                    text: 'Image to Image',
                    icon: 'fluent-color:image-16',
                    link: '/tech/image-to/image-to-image.md',
                },
                {
                    text: 'Image to Text',
                    icon: 'fluent-color:image-16',
                    link: '/tech/image-to/image-to-text.md',
                },
                {
                    text: 'Image to Video',
                    icon: 'fluent-color:image-16',
                    link: '/tech/image-to/image-to-video.md',
                },
            ],
        },
    ],

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
};
