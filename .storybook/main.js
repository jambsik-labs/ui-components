const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
    webpackFinal: async (config) => ({
        ...config,
        resolve: {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                '@emotion/core': toPath('node_modules/@emotion/react'),
                'emotion-theming': toPath('node_modules/@emotion/react'),
            },
        },
    }),
    stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode'],
};
