import { NavbarOptions } from 'vuepress-theme-hope/client';

export const navbar: NavbarOptions = [
    {
        text: 'home',
        link: '/',
    },
    {
        text: 'online tools',
        children: [
            { text: 'Overview', link: '/online/', icon: 'regular:file-image' },
			{ text: 'Midjourney', link: '/online/midjourney/', icon: 'regular:file-image' },
        ],
    },
    {
        text: 'desktop tools',
        children: [
			{ text: 'Overview', link: '/desktop/', icon: 'regular:file-image' },
            { text: 'Flux1', link: '/desktop/flux1/', icon: 'regular:file-image' },
            { text: 'Stable Diffusion', link: '/desktop/sd/', icon: 'regular:file-image' },
        ],
    },
    {
        text: 'image-to',
        children: [
			{ text: 'Overview', link: '/image-to/', icon: 'regular:file-image' },
            { text: 'Link 1', link: '/image-to/page1.md', icon: 'regular:file-image' },
            { text: 'Link 2', link: '/image-to/page2.md', icon: 'regular:file-image' },
        ],
    },
    {
        text: 'text-to',
        children: [
			{ text: 'Overview', link: '/text-to/', icon: 'regular:file-image' },
            { text: 'Link 1', link: '/text-to/page1.md', icon: 'regular:file-image' },
            { text: 'Link 2', link: '/text-to/page2.md', icon: 'regular:file-image' },
        ],
    },
] as NavbarOptions;
