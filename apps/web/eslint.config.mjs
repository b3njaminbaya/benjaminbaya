// ESLint 9 flat config for the website (React 19, JSX, ES modules).
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  { ignores: ['dist', 'dist-ssr', 'node_modules'] },
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: 'detect' } },
    plugins: { react, 'react-hooks': reactHooks },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/prop-types': 'off',
      // Links that open a new tab use rel="noopener" on purpose: it keeps them safe while
      // still telling sites like teevexa.com that the visit came from this portfolio
      'react/jsx-no-target-blank': ['error', { allowReferrer: true }],
    },
  },
  {
    // Build scripts and the Vercel function run in Node
    files: ['scripts/**/*.mjs', 'api/**/*.mjs', '*.config.{js,mjs}'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module', globals: globals.node },
  },
];
