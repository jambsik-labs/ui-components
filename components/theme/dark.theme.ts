import { roboto } from '@theme-ui/presets';
import { Theme } from '@theme-ui/css';
import { darkerGrey, darkMediumGrey, mediumLightBlue, violetMedium } from './colors';

export const darkTheme: Theme = {
    ...roboto,
    colors: {
        primary: darkMediumGrey,
        secondary: mediumLightBlue,
        background: darkerGrey,
        accent: '#fff',
    },
    styles: {
        ...roboto.styles,
        root: {
            ...roboto.styles.root,
            color: violetMedium,
        },
    },
};
