module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    plugins: ['react-native'],
    settings: {
        'import/resolver': {
            "babel-module": {}
        }
    },
    rules: {
        // alphabetically sorted list of base rules' overrides
        'global-require': 'off', // allow `require()` image inside JSX
        'import/no-mutable-exports': 'off', // same logic as for 'prefer-const'
        indent: ['error', 4, {SwitchCase: 1}],
        'max-len': ['error', 160],
        'no-debugger': 'warn', // avoid making it an 'error' - it'll break dev flow
        'no-restricted-syntax': ['error', 'TryStatement', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-use-before-define': ['error', {functions: false}],
        'object-curly-spacing': ['error', 'never'],
        'prefer-const': 'off',
        'react/jsx-curly-spacing': ['error', 'never', {allowMultiline: true}],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'no-multiple-empty-lines': ['error', {'max': 1}],
        'newline-before-return': 'warn',
        'newline-after-var': ["error", "always"],
        'curly': ['warn', 'all'],
        'react/no-find-dom-node': 'error',
        // TODO: stop disabling following rules and fix related code issues
        'jsx-a11y/label-has-for': 'off',
        // React native specific
        'react/jsx-filename-extension': 'off',
    },
};