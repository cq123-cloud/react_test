module.exports = {
    env: {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    extends: 'eslint:recommended',
    globals: {
        page: true,
        REACT_APP_ENV: true
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false, // 是否需要 babel 配置文件
        sourceType: 'module', // script 或者 module
        allowImportExportEverywhere: false, // 设置为 true，import 和 export 声明 可以出现在文件的任务位置，否则只能出现在顶部
        ecmaFeatures: {
            globalReturn: false // 设置为 true，当 sourceType 为 script 时，允许全局 return
        },
        babelOptions: {
            presets: ['@babel/preset-react']
        }
    },
    plugins: [
        'react'
    ],
    rules: {
        'no-unused-vars': 'off',
        'no-undef':'off'
    }
};