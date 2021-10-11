import { addDecorator } from '@storybook/react';
import { withProviderDecorator } from './decorators/withProviders';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(withProviderDecorator);
