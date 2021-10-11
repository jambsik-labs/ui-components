module.exports = {
    rules: {
        'body-max-line-length': [1, 'always', 300],
        'footer-max-line-length': [1, 'always', 300],
        'header-max-length': [1, 'always', 300],
    },
    extends: ['@commitlint/config-conventional'],
};
