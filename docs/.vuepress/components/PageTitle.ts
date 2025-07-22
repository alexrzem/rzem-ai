import type { VNode } from '@vue/runtime-core';
import { defineComponent, h, resolveComponent } from '@vue/runtime-core';

import { useData } from 'vuepress/client';
import { useThemeLocaleData } from 'vuepress-theme-hope/composables/useThemeData.js';

export default defineComponent({
    name: 'PageTitle',

    setup() {
        const { themeLocale } = useThemeLocaleData();
        const { frontmatter, page } = useData();

        return (): VNode =>
            h('div', { class: 'vp-page-title2' }, [
                h('h1', [themeLocale.value.titleIcon === false ? null : h(resolveComponent('VPIcon'), { icon: frontmatter.value.icon }), page.value.title]),

                h('hr'),
            ]);
    },
});
