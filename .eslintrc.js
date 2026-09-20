// AppCommon v1.0 — Configuration ESLint

import globals from 'globals';
import js from '@eslint/js';
import mocha from 'eslint-plugin-mocha';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['src/**/*.js', 'dist/**/*.js'],
    plugins: {
      js,
      mocha,
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        AppCommon: true, // Global interne du projet si nécessaire
      },
    },
    extends: ['js/recommended'],
    rules: {
      // Règles AppCommon v1.0
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-unused-vars': ['warn'],
      'no-console': ['off'], // autorisé pour un template universel
    },
  },
]);
