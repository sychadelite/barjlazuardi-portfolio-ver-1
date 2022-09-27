module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        'no-console': 'off',
        'space-before-function-paren': 'off',
        indent: ['error', 4],
        'eol-last': 'off',
        'vue/html-indent': ['error', 4],
        'vue/html-closing-bracket-spacing': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-var': 'off',
        'nuxt/no-globals-in-created': 'off'
    }
}

/* SOURCE */
// https://eslint.org/docs/latest/user-guide/command-line-interface

/* DICTIONARY */
// 0 = off, 1 = warn, 2 = error

/* COMMAND */
// npm run lint
// npm i -g eslint
// npx eslint --fix .