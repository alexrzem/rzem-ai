import { NavbarOptions } from 'vuepress-theme-hope/client';

export const navbar: NavbarOptions = [
  {
    text: 'Home',
    link: '/',
    icon: 'fluent-color:home-16',
  },
  {
    text: 'Online Tools',
    link: '/online/',
    icon: 'fluent-color:cloud-16',
  },
  {
    text: 'Desktop Tools',
    link: '/desktop/',
    icon: 'fluent-color:laptop-16',
  },
  {
    text: 'Technology',
    icon: 'fluent-color:code-block-16',
    children: [
      { text: 'FLUX', link: '/tech/flux/', icon: 'fluent-color:org-16' },
      { text: 'Stable Diffusion', link: '/tech/sd/', icon: 'fluent-color:org-16' },
      { text: 'Text-To-Image', link: '/tech/text-to/text-to-image.md', icon: 'fluent-color:text-bullet-list-square-16' },
      { text: 'Text-To-Music', link: '/tech/text-to/text-to-music.md', icon: 'fluent-color:text-bullet-list-square-16' },
      { text: 'Text-To-Video', link: '/tech/text-to/text-to-video.md', icon: 'fluent-color:text-bullet-list-square-16' },
      { text: 'Image-To-Image', link: '/tech/image-to/image-to-image.md', icon: 'fluent-color:image-16' },
      { text: 'Image-To-Text', link: '/tech/image-to/image-to-text.md', icon: 'fluent-color:image-16' },
      { text: 'Image-To-Video', link: '/tech/image-to/image-to-video.md', icon: 'fluent-color:image-16' },
    ],
  },
] as NavbarOptions;
