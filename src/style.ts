import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import './assets/styles/main.css';

/* import the fontawesome core */
/* import icons and add them to the Library */
import * as Icons from '@awesome.me/kit-a6cc1df5fb/icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(Icons.fab, Icons.facr, Icons.fad, Icons.fadl, Icons.fadr, Icons.fadt, Icons.faes, Icons.fal, Icons.far, Icons.fas, Icons.fasl, Icons.fat, Icons.fawsb);

import type { Preset } from '@primeuix/themes/types';

const preset: Preset = {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}',
        },
        colorScheme: {
            light: {
                root: {
                    background: '{surface.50}',
                    color: '{surface.700}',
                },
            },
            dark: {
                root: {
                    background: '{surface.600}',
                    color: '{surface.0}',
                },
            },
        },
    },
    components: {
        megamenu: {
            root: {
                borderRadius: '1.0rem',
                background: '{surface.900}',
                horizontalOrientation: {
                    padding: '0.3rem'
                }
            },
            baseItem: {
                padding: '0.6rem',
                borderRadius: '1.0rem',

            },
            item: {
                color: '{zinc.200}',
                focusBackground: '{primary.950}',
                focusColor: '{zinc.50}',
                gap: '0.1rem',
                padding: '0.1rem',
            }
        },
    },
};

const themePreset = definePreset(Aura, preset);

console.log(themePreset);

const theme = {
    theme: {
        preset: themePreset,
        options: {
            darkModeSelector: '.p-dark',
        },
    },
};

export { theme };
