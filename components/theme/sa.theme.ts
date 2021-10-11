import { roboto } from '@theme-ui/presets';
import { Theme } from '@theme-ui/css';
import { mediumEmerald } from './colors';

export const saTheme: Theme = {
    ...roboto,
    colors: {
        primary: mediumEmerald,
    },

    buttons: {
        primary: {
            bg: mediumEmerald,
        },
    },
    styles: {
        ...roboto.styles,
        root: {
            ...roboto.styles.root,
            color: mediumEmerald,
        },
    },
};
