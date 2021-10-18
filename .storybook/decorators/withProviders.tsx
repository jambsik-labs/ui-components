/** @jsxImportSource theme-ui */

import { Label, ThemeProvider } from 'theme-ui';
import { useState } from 'react';

import { Button, copdTheme, saTheme } from '../../components';
import { ThemeName } from '../../constants/ThemeName';
import { darkTheme } from '../../components/theme/dark.theme';

export const withProviderDecorator = (Story) => {
    const STORYBOOK_KEY = '@storybook/theme';
    const getTheme = (themeName: ThemeName | string) => {
        switch (themeName) {
            case ThemeName.SA:
                return saTheme;
            case ThemeName.COPD:
                return copdTheme;
            case ThemeName.Dark:
                return darkTheme;
        }
    };

    const [theme, setTheme] = useState<ThemeName | string>(() => window.localStorage.getItem(STORYBOOK_KEY));
    const layout = {
        width: '100%',
    };
    const themeSelector = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '24px',
        outline: (theme) => `1px solid ${theme.colors.primary}`,
        borderRadius: '4px',
        padding: 16,
        alignItems: 'center',
    };
    const themeItem = {
        marginLeft: '8px',
    };

    const availableThemes = [ThemeName.SA, ThemeName.COPD, ThemeName.Dark];

    const onChangeTheme = (themeName: ThemeName) => {
        window.localStorage.setItem(STORYBOOK_KEY, themeName);
        setTheme(themeName);
    };

    return (
        <ThemeProvider theme={getTheme(theme)}>
            <div sx={layout}>
                <div sx={themeSelector}>
                    <Label variant="primary">Please select a theme:</Label>
                    {availableThemes.map((themeName: ThemeName) => (
                        <Button
                            key={themeName}
                            disabled={false}
                            sx={themeItem}
                            onClick={() => onChangeTheme(themeName)}
                        >
                            {themeName}
                        </Button>
                    ))}
                </div>
                <Story />
            </div>
        </ThemeProvider>
    );
};
