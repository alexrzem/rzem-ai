import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import './assets/styles/main.css';

/* import the fontawesome core */
/* import icons and add them to the Library */
import {} from '@awesome.me/kit-a6cc1df5fb/icons/whiteboard/semibold';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { fal } from '@fortawesome/pro-light-svg-icons';
// import { far } from '@fortawesome/pro-regular-svg-icons';
// import { fass } from '@fortawesome/sharp-solid-svg-icons';
// import { fad } from '@fortawesome/pro-duotone-svg-icons';
// import { fadt } from '@fortawesome/duotone-thin-svg-icons';


//library.add(fal, far, fass, fad, fadt);

/* add icons to the library */
// library.add(fab);
// library.add(fad);
// library.add(fal);
// library.add(far);
// library.add(fas);
//library.add(fonts);

console.log('FontAwesome icons loaded:', fonts);

import type { Preset } from '@primeuix/themes/types';

const preset: Preset = {
    semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}',
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
            }
        }
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
