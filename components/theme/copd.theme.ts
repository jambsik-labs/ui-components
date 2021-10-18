import { roboto } from '@theme-ui/presets';
import { mediumLightBlue, yellow } from './colors';
import { Theme } from '@theme-ui/css';

export const copdTheme: Theme = {
    ...roboto,
    colors: {
        primary: yellow,
        secondary: mediumLightBlue,
        accent: '#fff',
    },
    buttons: {
        primary: {
            bg: yellow,
            color: '#000',
        },
    },
    styles: {
        ...roboto.styles,
        root: {
            ...roboto.styles.root,
            color: 'black',
        },
    },
};
